import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  AppBar,
  Typography,
  Drawer,
  Button,
  Avatar,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccessAlarmsSharpIcon from "@mui/icons-material/AccessAlarmsSharp";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import User from "../Login/user.jpg";
// import User from "../TopBar/user.jpg";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const TopBar = () => {
  const drawerWidth = { xs: 30, sm: 50 };
  const navigate = useNavigate();

  // State for date and time
  const [currentTime, setCurrentTime] = useState(new Date());

  // State for modal
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString();
  };

  // Avatar Styling
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  // Function to open confirmation dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle dialog close
  const handleClose = (confirm) => {
    if (confirm) {
      // Redirect to /home
      navigate("/");
    }
    setOpen(false);
  }; 

  const handleClick = () => {
    navigate("/visit");  // Navigate to the home page
  };
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#fff",
          boxShadow: "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.03)",
          height: { xs: 40, sm: 50 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            paddingRight: "20px",
            paddingLeft: "20px",
          }}
        >
           <Box marginLeft={5} display={{xs:'none', sm:'block'}}>
            <Button 
              onClick={() => navigate(-1)}  
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                color: "#fff",  
                textTransform: "none", 
                padding: "8px 16px", // Adjust padding as needed
              }}
            >  <ChevronLeftIcon/>
              Back
            </Button>

            <Button   
              onClick={handleClick}
              variant="contained"
              sx={{
                marginLeft:"10px",
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                color: "#fff",  
                textTransform: "none", 
                padding: "8px 16px", // Adjust padding as needed
              }}
              >   
              Visit <ChevronRightIcon/>
            </Button>
          </Box>
          <Box
            height={{ xs: 40, sm: 50 }}
            width={{ xs: 30, sm: 50 }}
            position={"absolute"}
            left={0}
            top={0}
            sx={{
              boxShadow: "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              color: "#111",
              textShadow: "2px 2px 0px rgb(0 212 255 / 12%)",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Real-Time Date and Time */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Typography
                className="ff_yatra"
                variant="body1"
                fontWeight={500}
                display={"flex"}
                gap={1}
                sx={{
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                  "& svg": {
                    fontSize: { xs: "1rem", sm: "1.3rem" },
                  },
                }}
              >
                <CalendarMonthSharpIcon />
                {` ${formatDate(currentTime)}`}
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                  height: { xs: "15px", sm: "25px" },
                  width: { xs: "3px", sm: "3px" },
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
                }}
              />
              <Typography
                className="ff_yatra"
                variant="body1"
                fontWeight={500}
                display={"flex"}
                gap={1}
                sx={{
                  fontSize: { xs: "0.75rem", sm: "1rem" },
                  "& svg": {
                    fontSize: { xs: "1rem", sm: "1.3rem" },
                  },
                }}
              >
                <AccessAlarmsSharpIcon />
                {`${formatTime(currentTime)}`}
              </Typography>
            </Box>
            <Box
              sx={{
                height: { xs: "25px", sm: "25px" },
                width: { xs: "3px", sm: "3px" },
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
              }}
            ></Box>
            {/* Avatar with Logout Button */}
            <Stack direction="row" spacing={4} alignItems="center">
              <Stack direction="row" spacing={1} marginRight={{ xs: 1, sm: 3 }}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    alt="User Avatar"
                    src={User}
                    sx={{
                      width: { xs: "24px", sm: "35px" },
                      height: { xs: "24px", sm: "35px" },
                    }}
                  />
                </StyledBadge>
              </Stack>
              <Button
                onClick={handleClickOpen}
                variant="outlined"
                sx={{
                  fontSize: { xs: "1rem", sm: "1rem" },
                  padding: { xs: "4px", sm: "5px 16px" },
                  minWidth: { xs: "30px", sm: "60px" },
                  justifyContent: "center",
                  textTransform: "none",
                  display: 'flex',
                  alignItems: 'center', 
                }}
              >
                <LogoutIcon />
                <Typography
                  sx={{
                    display: { xs: 'none', sm: 'flex' }, // Show text only on larger screens
                    marginLeft: '8px',
                  }}
                >
                  Logout
                </Typography>
              </Button>
            </Stack>
          </Box>
        </Box>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            backgroundColor: "#fff",
            border: "none",
            boxShadow: "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.08)",
          },
        }}
      />

      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to logout?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(true)} color="primary">
            Agree
          </Button>
          <Button onClick={() => handleClose(false)} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TopBar;
