import {Grid} from "@mui/material";
import Intro from "./Intro";
import IntroImageContainer from "./IntroImageContainer";
import IntroImage from '../../public/intro.png'


const IntroSection = () => {
    return (
        <Grid container justifyContent={'center'} spacing={8} alignItems={'center'} sx={{direction: 'rtl'}} padding={3}>
            <Grid item lg={6} md={8} xl={3}>
                <IntroImageContainer src={IntroImage} alt={'Ali Salehi Intro Image'}/>
            </Grid>

            <Grid item lg={6} md={4} xl={4}>
                <Intro/>
            </Grid>
        </Grid>
    )
}

export default IntroSection
