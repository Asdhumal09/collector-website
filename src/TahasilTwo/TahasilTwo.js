import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TopBar from "../TopBar/TopBar";
import { Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import apiClient from "../apiClient/ApiClient";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Star } from "@mui/icons-material";
// Define background images for each tab
const tabBackgrounds = [
  "url('/images/scheme1.jpg')",
  "url('/images/scheme2.jpg')",
  "url('/images/scheme3.jpg')",
  "url('/images/scheme4.jpg')",
  // Add more images as needed
];

// Styled components for Tabs and TabPanel
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
  transition: '0.3s',
}));

const SubyojnaBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  transition: "0.3s",
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    boxShadow: theme.shadows[2],
  },
}));

const SubyojnaIcon = styled(ArrowRightAlt)(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export default function CustomizedTabs() {
  const { id } = useParams(); // Extract the id parameter from the URL
  const [value, setValue] = useState(0); // State for the active tab
  const [yojanas, setYojanas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/getAllYojna_subyojna");
        const data = response.data.data;
        setYojanas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TopBar />
      <Box
        sx={{
          background: "#fff",
          boxShadow: "0px 0px 12px #d7d7d763",
          padding: { xs: 0, sm: 4 },
          width: { sm: "90%", xs: "82%" },
          marginLeft: { sm: "6.5%", xs: "12%" },
          marginTop: { sm: "6.5%", xs: "12%" },
          padding: "2rem 0rem",
        }}
      >
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
              paddingRight: { xs: 0, sm: 10 },
              marginBottom: "2%",
            }}
          >
            योजना
          </Typography>

          <CustomTabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
            variant="scrollable"
            scrollButtons="auto"
          >
            {yojanas.map((yojana, index) => (
              <CustomTab
                key={index}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Star sx={{ marginRight: 1 }} /> {/* Adjust icon position */}
                    {yojana.yojna_title}
                  </Box>
                }
                id={`tab-${index}`}
                aria-controls={`tabpanel-${index}`}
              />
            ))}
          </CustomTabs>

          {yojanas.map((yojana, index) => (
            <TabPanel
              key={index}
              id={`tabpanel-${index}`}
              aria-labelledby={`tab-${index}`}
              visible={value === index}
              backgroundImage={tabBackgrounds[index] || 'none'} // Set background image
            >
              {yojana.subyojnas.map((subyojana, subIndex) => (
                <Link
                  key={subIndex}
                  to={`/tahasiltwo/${id}/tableone/${subyojana.subyojna_id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <SubyojnaBox>
                    <SubyojnaIcon />
                    <Typography
                      className="ff_baloo"
                      sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                    >
                      {subyojana.sub_yojna_title}
                    </Typography>
                  </SubyojnaBox>
                </Link>
              ))}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
}
