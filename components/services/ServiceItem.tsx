import {Box, Grid, Typography, useTheme} from "@mui/material";
import {css} from "@emotion/css";

const ServiceItem = ({IconComponent, children}: { IconComponent: any, children: string }) => {
    const theme = useTheme()

    return (
        <Box width={'350px'} height={'241px'}
             sx={{
                 backgroundColor: theme.palette.background.default
             }}
             className={css`
               border-bottom: 3px solid transparent;
               user-select: none;
               margin-top: 30px;

               &:hover {
                 border-bottom-color: ${theme.palette.primary.main};
               }
             `}>
            <Grid container direction={'column'} spacing={7} padding={'0 50px'}>
                <Grid item>
                    {<IconComponent color={'primary'} sx={{width: 50, height: 50}}/>}
                </Grid>

                <Grid item>
                    <Typography variant={'h2'} color={'textSecondary'} maxWidth={250}>
                        {children}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ServiceItem
