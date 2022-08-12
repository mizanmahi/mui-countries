import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
   return (
      <Box
         sx={{
            bgcolor: 'dark.main',
         }}
      >
         <Container>
            <Box
               sx={{
                  py: 2,
               }}
            >
               <Typography
                  sx={{
                     fontWeight: 600,
                     color: 'light.secondary',
                  }}
               >
                  Where In The World?
               </Typography>
            </Box>
         </Container>
      </Box>
   );
};

export default Header;
