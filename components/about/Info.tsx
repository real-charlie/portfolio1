import {Grid, Typography} from "@mui/material";
import InfoDecoration from "./InfoDecoration";

function Info({title, children}: { title: string, children: string }) {
    return (
        <Grid container direction={'column'} spacing={3} alignItems={'center'} wrap={'nowrap'}>
            <Grid item>
                <InfoDecoration/>
            </Grid>

            <Grid item>
                <Grid container direction={'column'} alignItems={'center'} wrap={'nowrap'}>
                    <Grid item>
                        <Typography variant={'subtitle1'} fontWeight={'bold'} color={'textPrimary'} noWrap>
                            {title}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant={'subtitle1'} color={'textPrimary'}>
                            {children}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Info
