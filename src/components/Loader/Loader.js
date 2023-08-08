import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', mt: 3 }}>
      <CircularProgress sx={{
        color: 'main.secondary',
      }} />
    </Box>
  )
}

export default Loader