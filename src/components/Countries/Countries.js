import { Box, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { axiosInstance } from '../../api/axiosInstance';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const Countries = ({ region, searchTerm, setSearchTerm }) => {
   const [countries, setCountries] = useState([]);

   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const navigate = useNavigate();

   useEffect(() => {
      setLoading(true);
      setError(null);
      axiosInstance
         .get('all')
         .then((res) => {
            console.log(res.data);
            setCountries(res.data);
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   console.log({
      region,
   });

   if (loading) {
      return <Loader />;
   }

   if (error) {
      return <div>{error}</div>;
   }

   return (
      <Box>
         <Grid container spacing={4} justifyContent='center'>
            {countries
               .filter((country) => {
                  return country.name.common
                     .toLowerCase()
                     .includes(searchTerm.toLowerCase());
               })
               .filter((country) => {
                  if (country?.continents && region) {
                     return country.continents[0] === region;
                  } else {
                     return country;
                  }
               })
               .map((country) => (
                  <Grid item>
                     <Card
                        sx={{
                           width: 250,
                           cursor: 'pointer',
                           bgcolor: 'main.primary',
                        }}
                        onClick={() => navigate(`/name/${country.name.common}`)}
                     >
                        <CardMedia
                           component='img'
                           height='140'
                           image={
                              country.flags.png ||
                              country.flags.svg ||
                              country.flags.webp
                           }
                           alt='green iguana'
                        />
                        <CardContent
                           sx={{
                              px: 3,
                           }}
                        >
                           <Typography
                              gutterBottom
                              variant='h5'
                              component='div'
                              sx={{
                                 color: 'main.light',
                                 fontSize: '1.2rem',
                                 fontWeight: '600',
                                 mb: 2,
                              }}
                           >
                              {country.name.common}
                           </Typography>
                           <Stack rowGap={1}>
                              <Typography
                                 sx={{
                                    color: 'main.light',
                                 }}
                                 variant='body2'
                                 component='div'
                              >
                                 <strong>Population:</strong>{' '}
                                 {country.population}
                              </Typography>
                              <Typography
                                 sx={{
                                    color: 'main.light',
                                 }}
                                 variant='body2'
                                 component='div'
                              >
                                 <strong>Region:</strong>{' '}
                                 {country.continents[0]}
                              </Typography>
                              <Typography
                                 sx={{
                                    color: 'main.light',
                                 }}
                                 variant='body2'
                                 component='div'
                              >
                                 <strong>Capital:</strong>{' '}
                                 {country.capital ? country.capital[0] : 'N/A'}
                              </Typography>
                           </Stack>
                        </CardContent>
                     </Card>
                  </Grid>
               ))}
         </Grid>
      </Box>
   );
};

export default Countries;
