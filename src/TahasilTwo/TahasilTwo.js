import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TopBar from "../TopBar/TopBar";
import { Box, Grid, CircularProgress, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { Link, useParams, useNavigate } from "react-router-dom";
import apiClient from "../apiClient/ApiClient";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Star } from "@mui/icons-material";

// Styled components

const tabBackgrounds = [
  "url('/images/scheme1.jpg')",
  "url('/images/scheme2.jpg')",
  "url('/images/scheme3.jpg')",
  "url('/images/scheme4.jpg')",
];

const CustomTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.divider}`,
  marginBottom: theme.spacing(2),
  "& .MuiTabs-indicator": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightBold,
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5),
  transition: '0.3s',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TabPanel = styled(Box)(({ theme, visible, backgroundImage }) => ({
  display: visible ? 'block' : 'none',
  padding: theme.spacing(3),
  borderTop: `2px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  backgroundImage: backgroundImage,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  transition: '0.3s',
}));

const SubyojnaBox = styled(Box)(({ theme, disableHover }) => ({
  cursor: disableHover ? "default" : "pointer",
  transition: "0.3s",
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  height: "90px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: !disableHover ? theme.palette.action.hover : 'inherit',
    boxShadow: !disableHover ? theme.shadows[4] : 'inherit',
    transform: !disableHover ? "scale(1.03)" : 'inherit',
  },
}));

const SubyojnaIcon = styled(ArrowRightAlt)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const HoverCard = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  transform: 'translateX(-50%)',
  padding: theme.spacing(2),
  background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)',
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[4],
  borderRadius: theme.shape.borderRadius,
  zIndex: 1000,
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  opacity: 0,
  transform: 'translateY(20px)',
}));

const HoverCardVisible = styled(HoverCard)(({ visible }) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(20px)',
}));

const LoaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}));

// Modal Component
const RoleWarningModal = ({ open, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Enter Your Password
        
      </DialogTitle>
      <DialogContent>
        <Typography>
          You do not have the necessary permissions to access this tab.
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          label="Additional Information"
          type="text"
          fullWidth
          variant="outlined"
          value={inputValue}
          onChange={handleInputChange}
          sx={{ marginTop: 2 }}
        />
        {console.log(inputValue, 'inputValue')}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default function CustomizedTabs() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [value, setValue] = useState(0);
  const [yojanas, setYojanas] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredData, setHoveredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [talukas, setTaluka] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeYojnaId, setActiveYojnaId] = useState(null); // Add this line


  useEffect(() => {
    const storedTaluka = localStorage.getItem("taluka");
    setTaluka(storedTaluka || null);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/getAllYojna_subyojna");
        console.log("responseeeeee", response.data.data[0].yojna_id)
        const data = response.data.data;
        setYojanas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (hoveredItem && id !== '10') {
      const fetchHoverCardData = async () => {
        setLoading(true);
        try {
          const subyojnaId = hoveredItem.subyojna_id;
          const response = await apiClient.get(`/getformfields_with_taluka/${id}/${subyojnaId}`);
          setHoveredData(response.data.data[subyojnaId]?.talukas[id]?.form_fields || []);
        } catch (error) {
          console.error("Error fetching hover card data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchHoverCardData();
    } else {
      setHoveredData([]);
    }
  }, [hoveredItem, id]);

  const handleItemClick = (event, item) => {
    event.preventDefault(); // Prevent default link behavior
    setSelectedItem(item); // Store the clicked item
    const userRole = localStorage.getItem("role");
    if (userRole !== '1') {
      setIsModalOpen(true); // Open the modal
    } else {
      navigate(`/tahasiltwo/${id}/tableone/${item.subyojna_id}`); // Navigate for role 1
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = async (inputValue) => {
    try {
      // Include yojnaId in the API request
      const response = await apiClient.post("/IsValidUser", {
        userpassword: inputValue,
        yojna_id: activeYojnaId || 1, 
      });
  
      // Check if the response status is 200 and success is true
      if (response.data.status) {
        console.log("response.status", response.data.status)
        // Handle success
        setIsModalOpen(false);
        if (selectedItem) {
          navigate(`/tahasiltwo/${id}/tableone/${selectedItem.subyojna_id}`);
        }
      } else {
   
        console.error("Request failed:", response.data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  


  const role = localStorage.getItem("role");

  return (
    <>
      <TopBar />
      <Box
        sx={{
          background: "#fff",
          width: { sm: "90%", xs: "82%" },
          marginLeft: { sm: "6.5%", xs: "12%" },
          marginTop: { sm: "4%", xs: "12%" },
          padding: "2rem 0rem",
        }}
      >
        <Typography
          variant="h2"
          textAlign={"center"}
          className="ff_yatra"
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "3.2rem" },
            backgroundColor: "rgb(255 255 255 / 70%)",
            padding: "12px 20px",
            borderRadius: "5px",
            marginLeft: "32px",
          }}
        >
          {talukas === "जालना"
            ? "जिल्हाधिकारी कार्यालय जालना"
            : `तहसील कार्यालय  ${talukas}`}
        </Typography>

        <Box
          sx={{
            width: "100%",
            padding: { xs: "0rem 1rem", sm: "0rem 2rem" },
          }}
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            className="ff_yatra"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" },
              paddingRight: { xs: 0 },
              marginBottom: "2%",
            }}
          >
            योजना
          </Typography>

          <CustomTabs
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);

              // Ensure yojanas[newValue] exists
              const selectedYojna = yojanas[newValue];
              if (selectedYojna && selectedYojna.subyojnas.length > 0) {
                const selectedYojnaId = selectedYojna.subyojnas[0].yojna_id;
                console.log("selectedYojnaId", selectedYojnaId);
                setActiveYojnaId(selectedYojnaId); // Store the active Yojna ID
              } else {
                console.log("No subyojnas available for the selected tab.");
              }
            }}
            aria-label="tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            {yojanas.map((yojana, index) => {
              const yojnaId = yojana.subyojnas.length > 0 ? yojana.subyojnas[0].yojna_id : "N/A";

              return (
                <CustomTab
                  key={index}
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "20px", fontWeight: "500" }} className="ff_yatra">
                      <Star sx={{ marginRight: 1 }} />
                      {yojana.yojna_title}
                    </Box>
                  }
                  id={`tab-${index}`}
                  aria-controls={`tabpanel-${index}`}
                />
              );
            })}
          </CustomTabs>



          {yojanas.map((yojana, index) => (
            <TabPanel
              key={index}
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              visible={value === index}
              backgroundImage={tabBackgrounds[index] || 'none'}
              sx={{ width: '100%' }}
            >
              <Grid container spacing={2}>
                {yojana.subyojnas.map((subyojana, subIndex) => (
                  <Grid item xs={12} sm={6} md={4} key={subIndex}>
                    <SubyojnaBox
                      onClick={(event) => handleItemClick(event, subyojana)}
                      onMouseEnter={() => {
                        const role = localStorage.getItem('role');
                        if (role == '1') {
                          setHoveredItem(subyojana);
                        }
                      }}
                      
                      onMouseLeave={() => setHoveredItem(null)}
                      disableHover={id === '10'}
                    >
                      <SubyojnaIcon />
                      <Typography
                        className="ff_baloo"
                        sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                      >
                        {subyojana.sub_yojna_title}
                      </Typography>
                      <HoverCardVisible visible={id !== '10' && hoveredItem === subyojana}>
                        {loading ? (
                          <LoaderContainer>
                            <CircularProgress />
                          </LoaderContainer>
                        ) : (
                          hoveredData.slice(0, 2).map((field, index) => (
                            <Typography sx={{ color: "#fff" }} key={index}>
                              {field.form_field_name}: {field.value}
                            </Typography>
                          ))
                        )}
                      </HoverCardVisible>
                    </SubyojnaBox>
                  </Grid>
                ))}
              </Grid>

              {/* <SubmitButton variant="contained">
                Submit
              </SubmitButton> */}

            </TabPanel>
          ))}
        </Box>
      </Box>

      <RoleWarningModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal} // Pass the handleSubmitModal function as a prop
        yojnaId={activeYojnaId} // Pass active Yojna ID to the dialog
      />

    </>
  );
}
