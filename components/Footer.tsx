import {Box, Typography, useTheme} from "@mui/material";
import {Favorite} from "@mui/icons-material";

const Footer = () => {
    const theme = useTheme()

    return (
        <footer>
            <Box sx={{backgroundColor: theme.palette.background.default, padding: '10px', marginTop: '15px'}} display={'flex'} justifyContent={'center'}
                 alignItems={'center'}>
                <Typography variant={'subtitle1'} color={'textPrimary'}>
                    With <Favorite color={'error'}/> by Ali Salehi
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer
