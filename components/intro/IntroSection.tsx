import {Grid} from "@mui/material";
import Intro from "./Intro";
import IntroImageContainer from "./IntroImageContainer";
import IntroImage from '../../public/intro.png'


const IntroSection = () => {
    return (
        <Grid container justifyContent={'center'} spacing={8} alignItems={'center'} alignContent={'flex-start'} sx={{direction: 'rtl'}}>
            <Grid item lg={6} md={8} >
                <IntroImageContainer src={IntroImage} alt={'Ali Salehi Intro Image'}/>
            </Grid>

            <Grid item lg={6} md={4}>
                <Intro/>
            </Grid>
        </Grid>
    )
}

export default IntroSection
