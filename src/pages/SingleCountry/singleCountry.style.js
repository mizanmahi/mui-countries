import { styled, Button } from '@mui/material';

export const BackButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.main.primary,
    color: theme.palette.main.light,
    fontWeight: 500,
    fontSize: '1rem',
    padding: '0.4rem 2.5rem',
    boxShadow: theme.shadows[3],
    '&:hover': {
        backgroundColor: theme.palette.main.primary,
        boxShadow: theme.shadows[6],
    }
}))