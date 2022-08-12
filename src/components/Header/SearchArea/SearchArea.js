import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Box, InputAdornment, TextField } from '@mui/material';

const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const SearchArea = ({ handleRegionClick, region, setSearchTerm, searchTerm }) => {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <Box
         sx={{
            py: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <TextField
            placeholder='Search country'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size='small'
            InputProps={{
               startAdornment: (
                  <InputAdornment position='start'>
                     <SearchIcon
                        sx={{
                           color: 'light.secondary',
                        }}
                     />
                  </InputAdornment>
               ),
            }}
            sx={{
               bgcolor: 'dark.main',
               borderRadius: '4px',
               px: 2,
               width: '300px',
               maxWidth: '100%',
               '& .MuiOutlinedInput-input': {
                  fontWeight: 500,
                  color: 'light.secondary',
               },
               '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                     borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                     borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                     borderColor: 'transparent',
                  },
               },
            }}
         />
         <Box>
            <Button
               id='basic-button'
               aria-controls={open ? 'basic-menu' : undefined}
               aria-haspopup='true'
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
               endIcon={<ExpandMoreIcon />}
               disableRipple
               sx={{
                  bgcolor: 'dark.main',
                  color: 'light.secondary',
                  textTransform: 'capitalize',
                  px: 2,
                  py: 1,
               }}
            >
               {region ? region : 'Filter By Region'}
            </Button>
            <Menu
               id='basic-menu'
               anchorEl={anchorEl}
               open={open}
               onClose={handleClose}
               MenuListProps={{
                  'aria-labelledby': 'basic-button',
               }}
               sx={{
                  '& .MuiPaper-root': {
                     bgcolor: 'dark.main',
                     color: 'light.secondary',
                     mt: 0.5,
                     width: '154.109px',
                  },
               }}
            >
               {regions.map((region, index) => (
                  <MenuItem
                     onClick={() =>
                        handleRegionClick(region, () => handleClose())
                     }
                     key={index}
                  >
                     {region}
                  </MenuItem>
               ))}
            </Menu>
         </Box>
      </Box>
   );
};

export default SearchArea;
