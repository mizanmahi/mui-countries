import { Box, Container } from '@mui/material';
import React from 'react';
import Countries from '../../components/Header/Countries/Countries';
import SearchArea from '../../components/Header/SearchArea/SearchArea';

const Home = () => {
   return (
      <Box
         sx={{
            bgcolor: 'dark.secondary',
         }}
      >
         <Container>
            {/* search area */}
            <SearchArea />
            {/* countries */}
            <Countries />
         </Container>
      </Box>
   );
};

export default Home;
