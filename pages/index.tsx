import Head from 'next/head'
import {Provider} from "react-redux";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import NavigationBar from "../components/navbar/NavigationBar";
import store from "../store";
import IntroSection from "../components/intro/IntroSection";
import About from "../components/about/About";
import React, { useRef } from "react";
import Skills from "../components/skills/Skills";
import Services from '../components/services/Services';
import LanguageSkills from "../components/skills/LanguageSkills";
import Connect from "../components/Connect";
import Footer from "../components/Footer";


const muiTheme = createTheme({
    palette: {
        primary: {
            main: '#27AE60',
        },
        secondary: {
            main: '#F2F2F2'
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#4F4F4F'
        },
        background: {
            default: '#212121'
        }
    },
    spacing: [5, 10, 15, 18, 0, 0, 0, 30, 35, 40],
    typography: {
        fontFamily: 'DM Sans, serif',
        h1: {
            fontSize: 48,
        },
        h2: {
            fontSize: 36,
        },
        h3: {
            fontSize: 24,
        },
        subtitle1: {
            fontSize: 18,
        },
        button: {
            fontSize: 14,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0',
                    color: 'white',
                    whiteSpace: 'nowrap'
                },
                contained: {
                    padding: '12px 27px',
                },
                outlined: {
                    padding: '12px 27px',
                    borderColor: 'white'
                }
            }
        }
    }
})
export default function Home() {
    const connectRef = useRef()
    const servicesRef = useRef()
    const aboutRef = useRef()

    return (
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <Head>
                    <title>Ali Salehi`s landing page</title>
                    <meta name="description" content="Ali Salehi Kia landing page, reactjs and next.js developer."/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <nav>
                    
                    <NavigationBar servicesClick={() =>
                    // @ts-ignore
                     servicesRef.current && servicesRef.current.scrollIntoView()} 
                    aboutClick={() => {}} 
                    contactClick={() => {}}/>
                </nav>

                <Box component={'main'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'47px'} maxWidth={'100%'}>
                    <IntroSection/>
                    <About/>
                    <Services ref={servicesRef}/>
                    <Skills/>
                    <LanguageSkills/>
                    <Connect/>
                </Box>
                <Footer/>
            </ThemeProvider>
        </Provider>
    )
}
