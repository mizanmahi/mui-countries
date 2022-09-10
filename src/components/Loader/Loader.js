import { Box, CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <CircularProgress sx={{
        color: 'light.secondary',
      }} />
    </Box>
  )
}

export default Loader