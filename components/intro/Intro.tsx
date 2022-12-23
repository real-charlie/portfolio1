import {Button, Grid, Typography} from "@mui/material";
import {useAppSelector} from "../../hooks/redux_hooks";

const Intro = () => {
    const language = useAppSelector((state) => state.languageReducer)

    return (
        <Grid container direction={'column'} spacing={8} sx={{direction: 'ltr'}}>
            <Grid item>
                <Grid container
                      direction={'column'}
                      justifyContent={'flex-start'}
                      spacing={1}>
                    <Grid item>
                        <Typography color={'textPrimary'} variant={'h1'}>
                            {language.intro}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography color={'textSecondary'} variant={'subtitle1'}>
                            {language.job}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container spacing={1}>
                    <Grid item>
                        <Button variant={'contained'} color={'primary'}>
                            Download CV
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button variant={'outlined'} color={'primary'}>
                            Learn more
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Intro
