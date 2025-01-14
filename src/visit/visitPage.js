import React, { useEffect, useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  Button,
  Box,
  Grid,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Modal,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import TopBar from "../TopBar/TopBar";
import apiClient from "../apiClient/ApiClient";
import axios from "axios";

const VisitPage = () => {
  const [state, setState] = useState({
    jilha: "",
    taluka: "",
    fromDate: "",
    toDate: "",
    visiter_name: "",
    address: "",
    mobile_no: "",
    subject: "",
    roles: "",
    taluka_id: "",
    userData: [],
    openModal: false,
  });

  const {
    jilha,
    taluka,
    fromDate,
    toDate,
    visiter_name,
    address,
    mobile_no,
    subject,
    roles,
    taluka_id,
    userData,
    openModal,
  } = state;
  const [yojanas, setYojanas] = useState([]);

  const getAllYojna = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("Token not found");
      }
      const res = await axios.get(
        `https://telelawmh.in/laravel/api/getAllTaluka`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Unauthenticated: Please check your API credentials");
      } else {
        console.error("Error fetching data:", error);
      }
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllYojna();
        const data = response.data; // Assuming `data` contains the correct data structure
        setYojanas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const tId = localStorage.getItem("t_id");
    const role = localStorage.getItem("role");
    setState((prev) => ({ ...prev, taluka_id: tId, roles: role }));
  }, []);

  const fetchData = async () => {
    if (!taluka_id) return;

    try {
      const response = await apiClient.get(`/all-records/${taluka_id}`);
      setState((prev) => ({ ...prev, userData: response.data.data }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [taluka_id]);

  const handleChange = (key) => (e) => {
    setState((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleModalOpen = () => {
    setState((prev) => ({ ...prev, openModal: true }));
  };

  const handleModalClose = () => {
    setState((prev) => ({
      ...prev,
      openModal: false,
      visiter_name: "",
      address: "",
      mobile_no: "",
      subject: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post("/add-visit-record", {
        taluka_id,
        visiter_name,
        address,
        mobile_no,
        subject,
      });
      fetchData();

      alert("Visitor added successfully!");
      handleModalClose();
    } catch (error) {
      console.error("Error while submitting the form:", error);
      alert("Failed to add visitor. Please try again.");
    }
  };

  const tableCellStyle = {
    border: "1px solid #ccc",
    padding: 8,
  };

  const handleTalukaChange = (event) => {
    setState((prev) => ({ ...prev, taluka_id: event.target.value }));
  };

  return (
    <>
      <TopBar />
      <Container style={{ marginTop: 100 }}>
        <Grid container spacing={3} justifyContent="flex-end" marginBottom={5}>
          <Grid item xs={3} md={3}>
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleModalOpen}
            >
              ADD
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {roles === "1" && (
            <>
              <Grid item xs={12} md={3}>
                <Select
                  value={jilha}
                  onChange={handleChange("jilha")}
                  displayEmpty
                  fullWidth
                  renderValue={(value) => value || "Select Jilha"}
                >
                  <MenuItem value="Jalna">Jalna</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={3}>
                <Select
                  value={taluka_id || ""}
                  onChange={handleTalukaChange}
                  displayEmpty
                  fullWidth
                  renderValue={(selected) => {
                    if (!selected) return "Select Taluka";

                    // Find the selected taluka, excluding taluka_id === 10
                    const selectedTaluka = yojanas.find(
                      (yojna) =>
                        yojna.taluka_id === selected && yojna.status !== 2
                    );

                    return selectedTaluka
                      ? selectedTaluka.taluka_title
                      : "Select Taluka";
                  }}
                >
                  {yojanas
                    .filter((yojna) => yojna.taluka_id !== 10) // Exclude taluka_id === 10
                    .map((yojna) => (
                      <MenuItem key={yojna.taluka_id} value={yojna.taluka_id}>
                        {yojna.taluka_title}
                      </MenuItem>
                    ))}
                </Select>
              </Grid>
            </>
          )}
          <Grid item xs={12} md={3}>
            <TextField
              type="date"
              label="From Date"
              value={fromDate}
              onChange={handleChange("fromDate")}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              type="date"
              label="To Date"
              value={toDate}
              onChange={handleChange("toDate")}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>

        <Box mt={4}>
          <TableContainer component={Paper}>
            <Table
              aria-label="Visit Details Table"
              style={{ border: "1px solid #ccc", borderCollapse: "collapse" }}
            >
              <TableHead style={{ backgroundColor: "#f5f5f5" }}>
                <TableRow>
                  {["Name", "Mobile Number", "Address", "Subject"].map(
                    (header) => (
                      <TableCell key={header} style={tableCellStyle}>
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell style={tableCellStyle}>
                      {row.visiter_name}
                    </TableCell>
                    <TableCell style={tableCellStyle}>
                      {row.mobile_no}
                    </TableCell>
                    <TableCell style={tableCellStyle}>{row.address}</TableCell>
                    <TableCell style={tableCellStyle}>{row.subject}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>

      <Modal
        open={openModal}
        onClose={handleModalClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: 4,
            borderRadius: 1,
            boxShadow: 3,
            width: "50%",
          }}
        >
          <Typography variant="h6" mb={2}>
            Add Visitor Details
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {[
                {
                  label: "Visitor Name",
                  value: visiter_name,
                  key: "visiter_name",
                },
                { label: "Mobile", value: mobile_no, key: "mobile_no" },
              ].map((field) => (
                <Grid item xs={12} md={6} key={field.key}>
                  <TextField
                    label={field.label}
                    fullWidth
                    value={field.value}
                    onChange={handleChange(field.key)}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  fullWidth
                  value={address}
                  onChange={handleChange("address")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  minRows={4}
                  maxRows={6}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                  value={subject}
                  onChange={handleChange("subject")}
                  placeholder="Enter your message..."
                />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default VisitPage;
