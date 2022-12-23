import Section from "../Section";
import {useAppSelector} from "../../hooks/redux_hooks";
import SkillProgress from "./SkillProgress";
import {Grid} from "@mui/material";

const Skills = () => {
    const language = useAppSelector((state) => state.languageReducer)

    const skills = [
        {title: 'NodeJS', percent: 90},
        {title: 'ReactJS', percent: 95},
        {title: 'NextJS', percent: 85},
        {title: 'Django', percent: 88},
        {title: 'C', percent: 99},
        {title: 'API Design', percent: 89},
        {title: 'UI/UX', percent: 79},
    ]

    return (
        <Section title={language.mySkills}>
            <Grid container direction={'column'} spacing={2}>
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

export default Skills
