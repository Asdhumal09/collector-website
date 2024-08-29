import React, { useEffect, useState, useCallback } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TopBar from "../TopBar/TopBar";
import { Box, Grid, CircularProgress } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import apiClient from "../apiClient/ApiClient";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";
import { Star } from "@mui/icons-material";

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

export default function CustomizedTabs() {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [yojanas, setYojanas] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredData, setHoveredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

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

  useEffect(() => {
    if (hoveredItem && id !== '10') { // Check if hoveredItem exists and id is not '10'
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

  const handleMouseEnter = useCallback((item) => {
    if (id !== '10') { // Only set hoveredItem if id is not '10'
      setHoveredItem(item);
      setHoverTimeout(setTimeout(() => {
        if (item === hoveredItem) {
          setHoveredItem(item);
        }
      }, 1000)); // 1s delay before showing the hover card
    }
  }, [hoveredItem, id]);

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setHoveredItem(null);
  };

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
                  <Box sx={{ display: 'flex', alignItems: 'center', fontSize: "20px", fontWeight: "500" }} className="ff_yatra">
                    <Star sx={{ marginRight: 1 }} />
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
              backgroundImage={tabBackgrounds[index] || 'none'}
              sx={{ width: '100%' }}
            >
              <Grid container spacing={2}>
                {yojana.subyojnas.map((subyojana, subIndex) => (
                  <Grid item xs={12} sm={6} md={4} key={subIndex}>
                    <Link
                      to={`/tahasiltwo/${id}/tableone/${subyojana.subyojna_id}`}
                      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }} // Add cursor pointer here
                    >
                      <SubyojnaBox
                        onMouseEnter={() => handleMouseEnter(subyojana)}
                        onMouseLeave={handleMouseLeave}
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
                    </Link>
                  </Grid>
                ))}
              </Grid>

            </TabPanel>
          ))}
        </Box>
      </Box>
    </>
  );
}
