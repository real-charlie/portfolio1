import {Button, Grid} from "@mui/material";
import {useAppSelector} from "../hooks/redux_hooks";
import Section from "./Section";
import {Email, GitHub, LinkedIn, Phone, Telegram, WhatsApp} from "@mui/icons-material";

const Connect = () => {
    const language = useAppSelector((state) => state.languageReducer)

    const socialMedia = [
        {icon: <LinkedIn/>, link: 'https://linked.in'},
        {icon: <Telegram/>, link: 'https://linked.in'},
        {icon: <WhatsApp/>, link: 'https://linked.in'},
        {icon: <GitHub/>, link: 'https://linked.in'},
        {icon: <Phone/>, link: 'https://linked.in'},
        {icon: <Email/>, link: 'https://linked.in'},
    ]

    return (
        <Section title={language.getInTouch}>
            <Grid container>
                {
                    socialMedia.map(
                        (each, index) =>
                            <Grid item key={index}>
                                <Button variant={'text'}>
                                    {each.icon}
                                </Button>
                            </Grid>
                    )
                }
            </Grid>
        </Section>
    )
}

export default Connect
