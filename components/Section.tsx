import {Grid, Typography} from "@mui/material";
import {css} from "@emotion/css";

/**
 * Has a title with paragraph
 * */
const Section = ({title, children, id}: { title: string, children: any, id?: string }) => {

    return (
        <Grid container direction={'column'} alignItems={'center'} spacing={8} padding={3} id={id}>
            <Grid item>
                <Typography variant={'h1'} color={'textPrimary'} fontWeight={'bold'}>
                    {title}
                </Typography>
            </Grid>

            <Grid item>
                {
                    typeof children === 'string' ?
                        <Typography variant={'subtitle1'} textAlign={'center'} color={'textPrimary'}
                                    className={css`max-width: 745px`}>
                            {children}
                        </Typography>
                        :
                        children
                }
            </Grid>
        </Grid>
    )
}

export default Section
