import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
   palette: {
      main: {
         primary: '#2b3945',
         secondary: '#202c37',
         tertiary: '#111517',
         light: '#fafafa',
         gray: '#858585',
         white: '#ffffff',
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'lg',
         },
      },
   },

   typography: {
      fontFamily: '"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif',
   },
});

export const lightTheme = createTheme({
   palette: {
      main: {
         primary: '#858585',
         secondary: '#fafafa',
         tertiary: '#ffffff',
      },
   },
   components: {
      MuiContainer: {
         defaultProps: {
            maxWidth: 'lg',
         },
      },
      // MuiButton: {
      //    styleOverrides: {
      //       root: {
      //          fontSize: '1rem',
      //          padding: '0.6rem 2.5rem',
      //       },
      //    },
      //    defaultProps: {
      //       variant: 'contained',
      //       color: 'primary',
      //       disableRipple: true,
      //    },
      // },
   },

   typography: {
      fontFamily: '"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif',
   },
});
