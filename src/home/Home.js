// Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline, Typography, Button, Grid, Stack } from '@mui/material';
import TopBar from '../TopBar/TopBar';
import CollectorImg from '../images/collector-img.jpg'; 
import '../App.css';
import PieChart from '../Charts/PieChart';
import { XDChart } from '../Charts/3DChart';

const Home = () => {
  const navigate = useNavigate();

  const handleTahasil = () => {
    navigate('/tahasil');
  };

  return (
    <Box sx={{ marginTop: { xs: '34px', sm: '50px' }, overflow: 'hidden' }}>
      <CssBaseline />
      <TopBar />
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 1,
          p: 3,
          alignItems: 'center',
          justifyContent: 'end',
          position: 'relative',
          zIndex: 1,
          maxWidth: '100%',
          maxHeight: '100%',
          overflow: 'hidden',
        }}
      >
        <Grid item xs={12} md={10}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Typography
              variant="h2"
              textAlign={'center'}
              className="ff_yatra"
              ml={"25%"}
              sx={{
                fontSize: { xs: '2rem', sm: '3rem', md: '3.2rem' },
                backgroundColor: 'rgb(255 255 255 / 80%)',
                // backgroundColor: '#fff',
                boxShadow:"0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.08);",
                
                padding: '12px 20px',
                borderRadius: '5px',
              }}
            >
              जिल्हाधिकारी कार्यालय जालना
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgb(255 255 255 / 80%)',
              // backgroundColor: '#fff',
              boxShadow:"0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.08);",
              width: '180px',
              height: '210px',
              borderRadius: '6px',
            }}
          >
            <img
              src={CollectorImg}
              alt="District Collector"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
                maxWidth: '110px',
                maxHeight: '110px',
                borderRadius: '50%',
                textAlign: 'center',
              }}
            />
            <Typography
              mt={1}
              px={'4px'}
              variant="h6"
              fontWeight={700}
              fontSize={'12px'}
              className="ff_baloo"
              textAlign={'center'}
            >
              District Collector & Magistrate
            </Typography>
            <Typography
              px={'20px'}
              variant="h6"
              fontWeight={500}
              fontSize={'12px'}
              className="ff_baloo"
              textAlign={'center'}
              margin={"0"}
            >
              Dr. Shrikrishnanath Panchal I.A.S.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={4} width={'90%'} ml={'6%'}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              backgroundColor: 'rgb(255 255 255 / 80%)',
              // backgroundColor: '#fff',
              boxShadow:"0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.08);",
              width: '100%',
              height: '370px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '6px',
            }}
          >
            <Stack direction="column" spacing={2} alignItems="center">
              <Box>
                <Button
                  onClick={handleTahasil}
                  className="ff_yatra"
                  variant="contained"
                  sx={{
                    height: { xs: 90, sm: 100 },
                    width: { xs: 40, sm: 500 },
                    fontSize: { xs: 18, sm: 48 },
                    background:
                      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,147,255,1) 0%, rgba(0,212,255,1) 100%)',
                  }}
                >
                  महसुल विभाग
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box 
            sx={{
              backgroundColor: 'rgb(255 255 255 / 80%)',
              // backgroundColor: '#fff',
              boxShadow:"0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.1);",
              width: '100%',
              height: '370px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '6px',
            }}
          >
            <Typography variant='h5' mt={2}>
              <h5 className='ff_yatra'>संजय गांधी निराधार अनुदान योजना</h5>
            </Typography>
            {/* <PieChart/>   */}
            <XDChart/>
          </Box>  
        </Grid>
      </Grid>

      <div className="backgroundImage">
        <div className="overlay" />
      </div>
    </Box>
  );
};

export default Home;
