import {Grid} from "@mui/material";
import Section from "../Section";
import {useAppSelector} from "../../hooks/redux_hooks";
import InfoDecoration from "./InfoDecoration";
import Info from "./Info";
import {css} from "@emotion/css";

function About() {
    const language = useAppSelector((state) => state.languageReducer)

    const information = [
        {title: language.fullname, desc: language.name},
        {title: language.email, desc: 'alisalehikia@protonmail.com'},
        {title: language.telegram, desc: '@AliSalehiKia'},
        {title: language.phone, desc: '+98 937 211 9950'},
    ]

    return (
        <Grid container direction={'column'} alignItems={'center'} spacing={8} padding={3} id='about'>
            <Grid item>
                <Section title={language.aboutMe}>
                    {language.aboutText}
                </Section>
            </Grid>

            <Grid item className={css`width: 100%`}>
                <Grid container spacing={3} justifyContent={'space-evenly'}>
                    {
                        information.map(
                            (each, index) =>
                                <Grid item key={index}>
                                    <Info title={each.title}>
                                        {each.desc}
                                    </Info>
                                </Grid>
                        )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default About
