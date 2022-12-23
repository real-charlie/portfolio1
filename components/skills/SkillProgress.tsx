import {Grid, LinearProgress, Typography} from "@mui/material";

const SkillProgress = ({
                           title,
                           percent,
                           extra,
                           icon
                       }: { title: string, percent: number, extra?: string, icon?: any }) => {
    return (
        <Grid container spacing={3} alignItems={'center'}>
            {
                icon &&
                <Grid item>
                    {icon}
                </Grid>
            }

            <Grid item>
                <Typography variant={'subtitle2'} color={'textPrimary'} width={100}>
                    {title}
                </Typography>
            </Grid>


            <Grid item>
                <Grid container alignItems={'center'} spacing={1}>
                    <Grid item>
                        <LinearProgress variant={'determinate'} value={percent} color={'primary'}
                                        sx={{width: '150px', borderRadius: '300px'}}/>
                    </Grid>

                    <Grid item>
                        <Typography variant={'subtitle2'} color={'textSecondary'}>
                            {percent}%
                        </Typography>
                    </Grid>

                    {
                        extra &&
                        <Grid item>
                            <Typography variant={'subtitle2'} color={'textPrimary'}>
                                {extra}
                            </Typography>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SkillProgress
