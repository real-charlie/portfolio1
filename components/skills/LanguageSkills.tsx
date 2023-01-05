import {useAppSelector} from "../../hooks/redux_hooks";
import Section from "../Section";
import {Grid} from "@mui/material";
import SkillProgress from "./SkillProgress";
import ReactCountryFlag from "react-country-flag";

const LanguageSkills = () => {
    const language = useAppSelector((state) => state.languageReducer)

    const skills = [
        {icon: <ReactCountryFlag countryCode={'IR'}/>, title: language.persian, percent: 99, extra: language.native},
        {icon: <ReactCountryFlag countryCode={'US'}/>, title: language.english, percent: 85, extra: language.second},
        {icon: <ReactCountryFlag countryCode={'SA'}/>, title: language.arabic, percent: 35},
        {icon: <ReactCountryFlag countryCode={'RU'}/>, title: language.russian, percent: 25, extra: language.learning},
        {icon: <ReactCountryFlag countryCode={'DE'}/>, title: language.germany, percent: 15, extra: language.learning},
    ]

    return (
        <Section title={language.languages}>
            <Grid container direction={'column'} spacing={2} padding={3}>
                {
                    skills.map(
                        (each, index) =>
                            <Grid item key={index}>
                                <SkillProgress {...each}/>
                            </Grid>
                    )
                }
            </Grid>
        </Section>
    )
}

export default LanguageSkills
