import { createTheme } from '@mui/material';

export const theme = createTheme({
   palette: {
      dark: {
         main: '#2b3945',
         secondary: '#202c37',
         dark: '#111517',
      },
      light: {
         main: '#858585',
         secondary: '#fafafa',
         light: '#ffffff',
      },
   },
   // components: {
   //    MuiContainer: {
   //       defaultProps: {
   //          maxWidth: 'lg',
   //       },
   //    },
   //    MuiButton: {
   //       styleOverrides: {
   //          root: {
   //             fontSize: '1rem',
   //             padding: '0.6rem 2.5rem',
   //          },
   //       },
   //       defaultProps: {
   //          variant: 'contained',
   //          color: 'primary',
   //          disableRipple: true,
   //       },
   //    },
   // },

   typography: {
      fontFamily: '"Nunito Sans", "Roboto", "Helvetica", "Arial", sans-serif',
   },
});
