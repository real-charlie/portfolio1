import NavigationBarContainer from "./NavigationBarContainer";
import {Button, Grid, Typography} from "@mui/material";
import {useAppSelector} from "../../hooks/redux_hooks";

const NavigationBar = () => {
    const language = useAppSelector((state) => state.languageReducer)

    return (
        <NavigationBarContainer container justifyContent={'space-between'}>
            <Grid item>
                <Typography variant={'h2'} fontWeight={'bold'} color={'textPrimary'}>
                    Ali Salehi
                </Typography>
            </Grid>

            <Grid item>
                <Grid container alignContent={'center'} wrap={'nowrap'}>
                    {
                        [[language.aboutMe, 'about'], [language.services, 'services'], [language.contact, 'contact']].map(
                            (each, index) =>
                                <Grid item key={index} lg={12/3} xs={12}>
                                    <Button variant={'text'} color={'secondary'} href={`#${each[1]}`}>
                                        {typeof each[0] === 'string' ? each[0] : ''}
                                    </Button>
                                </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </NavigationBarContainer>
    )
}

export default NavigationBar
