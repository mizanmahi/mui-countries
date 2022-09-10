import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Box, Button } from '@mui/material';
import { BackButton } from './singleCountry.style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Loader from '../../components/Loader/Loader';
import { axiosInstance } from '../../api/axiosInstance';

const SingleCountry = () => {
   const { country } = useParams();

   const [countryData, setCountryData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);
      setError(null);
      axiosInstance
         .get(`name/${country}`)
         .then((res) => {
            console.log(res.data);
            setCountryData(res.data[0]);
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   if (loading) {
      return <Loader />;
   }

   if (error) {
      return <div>{error}</div>;
   }

   const goBack = () => {
      navigate(-1);
   };

   return (
      <Box
         sx={{
            backgroundColor: 'main.secondary',
            minHeight: '100vh',
         }}
      >
         <Container>
            <Box
               sx={{
                  py: 8,
               }}
            >
               <BackButton
                  startIcon={<KeyboardBackspaceIcon />}
                  onClick={goBack}
               >
                  Back
               </BackButton>

               <Box
                  sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                     mt: 8,
                  }}
               >
                  {/* for image */}
                  <Box
                     sx={{
                        backgroundColor: 'main.primary',
                        flex: 1,
                     }}
                  >
                     <img
                        src={countryData?.flags?.png}
                        alt=''
                        style={{
                           width: '500px',
                           height: 'auto',
                           maxWidth: '100%',
                        }}
                     />
                  </Box>
                  {/* for details */}
                  <Box sx={{
                     flex: 1,
                  }}>
                     sdfsdf

                  </Box>
               </Box>
            </Box>
         </Container>
      </Box>
   );
};

export default SingleCountry;
