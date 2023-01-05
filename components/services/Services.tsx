import Section from "../Section";
import {useAppSelector} from "../../hooks/redux_hooks";
import ServiceItem from "./ServiceItem";
import {DesignServices, DeveloperMode, Language} from "@mui/icons-material";
import {Container, Grid} from "@mui/material";

const Services = () => {
    const language = useAppSelector((state) => state.languageReducer)

    const services = [
        {text: language.softwareDev, icon: DeveloperMode},
        {text: language.webDev, icon: Language},
        {text: language.webDesign, icon: DesignServices},
    ]

    return (
        <Container>
            <Section title={language.whatIDo} id='services'>
                <Grid container spacing={1} justifyContent={'center'}>
                    {
                        services.map(
                            (each, index) =>
                                <Grid item key={index}>
                                    <ServiceItem IconComponent={each.icon}>
                                        {each.text}
                                    </ServiceItem>
                                </Grid>
                        )
                    }
                </Grid>
            </Section>
        </Container>
    )
}


export default Services
