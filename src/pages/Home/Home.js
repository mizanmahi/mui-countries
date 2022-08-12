import { Box, Container } from '@mui/material';
import React, { useState } from 'react';
import Countries from '../../components/Header/Countries/Countries';
import SearchArea from '../../components/Header/SearchArea/SearchArea';

const Home = () => {
   const [region, setRegion] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

   const handleRegionClick = (region, cb) => {
      setRegion(region);
      cb();
   };

   return (
      <Box
         sx={{
            bgcolor: 'dark.secondary',
            minHeight: '100vh',
         }}
      >
         <Container>
            {/* search area */}
            <SearchArea
               handleRegionClick={handleRegionClick}
               region={region}
               searchTerm={searchTerm}
               setSearchTerm={setSearchTerm}
            />
            {/* countries */}
            <Countries region={region} searchTerm={searchTerm} />
         </Container>
      </Box>
   );
};

export default Home;
