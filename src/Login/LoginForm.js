import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, IconButton, InputAdornment } from '@mui/material';
import Lottie from 'react-lottie-player';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import backgroundAnimationData from '../Login/svgImage.json';
import imgOne from '../Login/bgImgOne.svg';
import imgTwo from '../Login/bgImgTwo.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    const validUsername = 'admin@gmail.com';
    const validPassword = 'admin';

    if (username !== validUsername && password !== validPassword) {
      toast.error('Incorrect username and password', {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (username !== validUsername) {
      toast.error('Incorrect username', {
        position: "top-right",
        autoClose: 3000,
      });
    } else if (password !== validPassword) {
      toast.error('Incorrect password', {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      // Show success toast immediately
      toast.success('Login Successful! Welcome back!', {
        position: "top-right",
        autoClose: 2000,
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/home');
      }, 500); // Delay of 2 seconds
    }
  };

  return (
    <Box
      position="relative"
      sx={{
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f9'
      }}
    >
      <ToastContainer /> {/* Toast Container for displaying toasts */}

      {/* Background Images */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <img className='imgTwo'
          src={imgTwo}
          alt="Top Left Background"
          style={{
            position: 'absolute',
            top: '14%',
            left: '56%',
            width: '150px',
            height: '150px',
            '@media (max-width: 1440px)': {
              top: '17%',
              left: '57%',
            },
          }}
        />
        <img className='imgOne'
          src={imgOne}
          alt="Bottom Right Background"
          style={{
            position: 'absolute',
            top: '60%',
            right: '53%',
            width: '230px',
            height: '230px',
          }}
        />
      </Box>

      {/* Login Form */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        width="390px"
        sx={{
          zIndex: 2,
          padding: 2,
        }}
      >
        <Paper elevation={6} sx={{ p: 3, borderRadius: 1, maxWidth: 400, boxShadow: "0px 0px 12px #d7d7d777" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Lottie
              loop
              animationData={backgroundAnimationData}
              play
              style={{ width: 100, height: 100, marginBottom: 5 }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 'bold', color: '#333' }}
            >
              Login
            </Typography>
          </Box>
          <TextField
            label="Username"
            required
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#4a90e2',
                },
              },
              '& label.Mui-focused': {
                color: '#4a90e2',
              },
              '& input': {
                height: '1em',
              },
            }}
          />
          <TextField
            label="Password"
            required
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#4a90e2',
                },
              },
              '& label.Mui-focused': {
                color: '#4a90e2',
              },
              '& input': {
                height: '1em',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'end' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{
                padding: '10px 0',
                borderRadius: 10,
                height: { xs: 30, sm: 40 },
                width: { xs: '50%', sm: '40%' },
                fontSize: { xs: 16, sm: 16 },
                background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)",
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginForm;
