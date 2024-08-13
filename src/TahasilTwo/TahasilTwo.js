import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TopBar from "../TopBar/TopBar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/tableone");
  };
  const handleNavigateOne = () => {
    navigate("/tahasil");
  };
  const handleNavigateTow = () => {
    navigate("/tablethree");
  };
  const handleNavigateOneSGY = () => {
    navigate("/tableonesgy");
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0rem",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "80%", padding: "0rem 1rem" },
          }}
        >
          <Box>
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
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                sx={{ backgroundColor: "rgb(101 210 255 / 17%)" }}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography
                  className="ff_yatra"
                  sx={{ fontSize: { sm: "1.3rem", xs: "18px" } }}
                >
                  महसुल विभाग
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  १. माहे नोव्‍हेंबर व डिसेंबर,२०२३ या कालावधीमधील अवेळी पाऊस
                  (रब्‍बी हंगाम २०२३-२४) व खरीप हंगाम २०२३ मधील दुष्‍काळामुळे
                  झालेल्‍या शेतीपिकांच्‍या नुकसानीकरिता बाधित शेतक-यांना मदत
                  वितरीत करण्‍याबाबतचे विवरणपत्र. शासन निर्णय दिनांक ३१.०१.२०२४
                  व २९.०२.२०२४
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  २. नैसर्गिक आप्पत्ती मुळे मयत जनावरांचा तपशिल
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  ३. टँकर, विहीर व बोअर अधिग्रहण सदयस्थिती
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                sx={{ backgroundColor: "rgb(101 210 255 / 17%)" }}
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography
                  className="ff_yatra"
                  sx={{ fontSize: { sm: "1.3rem", xs: "18px" } }}
                >
                  रोजगार हमी योजना
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  १. साप्‍ताहिक मजुर उपस्थिती अहवाल दि 15.05.2024 ते 23.05.2024
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigateTow}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  २. Households Completed 100 days in Financial Year -2023-2024
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                sx={{ backgroundColor: "rgb(101 210 255 / 17%)" }}
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography
                  className="ff_yatra"
                  sx={{ fontSize: { sm: "1.3rem", xs: "18px" } }}
                >
                  संजय गांधी योजना
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                onClick={handleNavigateOneSGY}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  १. संजय गांधी निराधार अनुदान योजना दिनांक 18/06/2024 अखेर
                  डी.बी.टी पोर्टल कामाचा तपशिल
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  २. श्रावणबाळ सेवा राज्‍य निवृत्‍ती वेतन योजना-दिनांक
                  18/06/2024 अखेर डी.बी.टी पोर्टल कामाचा तपशिल
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  ३. विसयो अंतर्गत राज्‍य पुरस्‍कृत योजना माहे एप्रिल व मे-2024
                  अखेरपर्यंत जिल्‍हास्‍तरावरुन वाटप अनुदान तपशिल
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  ४. राज्‍य पुरस्‍कृत योजना
                </Typography>
              </AccordionDetails>
              <AccordionDetails
                onClick={handleNavigate}
                sx={{
                  cursor: "pointer",
                  transition:"0.5s",
                  "&:hover": {
                    backgroundColor: "rgb(200 200 200 / 17%)", 
                  },
                }}
              >
                <Typography
                  className="ff_baloo"
                  sx={{ fontSize: { sm: "1.2rem", xs: "16px" } }}
                >
                  ५ . वि.स.यो अंतर्गत अखर्चित रक्‍कमा बाबतचा अहवाल
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Box>
    </>
  );
}
