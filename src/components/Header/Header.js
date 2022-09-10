import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
   return (
      <Box
         sx={{
            bgcolor: 'main.primary',
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
                     color: 'main.light',
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
