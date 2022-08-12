import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { axiosInstance } from '../../../api/axiosInstance';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Countries = ({ region, searchTerm }) => {
   const [countries, setCountries] = React.useState([]);
   const [displayCountries, setDisplayCountries] = React.useState([]);
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(null);

   useEffect(() => {
      setLoading(true);
      setError(null);
      axiosInstance
         .get('all')
         .then((res) => {
            console.log(res.data);
            setCountries(res.data);
            setDisplayCountries(res.data);
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   useEffect(() => {
      if (searchTerm) {
         setDisplayCountries(
            countries.filter((country) => {
               return country.name.common
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
            })
         );
      }
   }, [searchTerm]);

   useEffect(() => {
      console.log('region', region);
      setDisplayCountries(
         countries.filter((country) => {
            if (country?.continents) {
               return country.continents[0] === region;
            }
         })
      );
   }, [region]);

   console.log({
      region,
   });

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>{error}</div>;
   }

   return (
      <Box>
         <Grid container spacing={4} justifyContent='center'>
            {displayCountries?.map((country) => (
               <Grid item>
                  <Card sx={{ width: 250, bgcolor: 'dark.main' }}>
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
                              color: 'light.secondary',
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
                                 color: 'light.secondary',
                              }}
                              variant='body2'
                              component='div'
                           >
                              <strong>Population:</strong> {country.population}
                           </Typography>
                           <Typography
                              sx={{
                                 color: 'light.secondary',
                              }}
                              variant='body2'
                              component='div'
                           >
                              <strong>Region:</strong> {country.continents[0]}
                           </Typography>
                           <Typography
                              sx={{
                                 color: 'light.secondary',
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
