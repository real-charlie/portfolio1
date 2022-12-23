import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import En from '../lang/en.json'

/**
 * Every language (language pack) in lang directory should be of this type
 * */
export interface Language {
    appName: string,
    aboutMe: string,
    services: string,
    contact: string,
    intro: string,
    job: string,
    aboutText: string,
    phone: string,
    email: string,
    fullname: string,
    telegram: string,
    name: string,
    whatIDo: string,
    webDesign: string,
    webDev: string,
    softwareDev: string,
    mySkills: string,
    languages: string,
    persian: string,
    arabic: string,
    germany: string,
    russian: string,
    learning: string,
    english: string,
    native: string,
    second: string,
    getInTouch: string
}

const initialState: Language = En

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguageToEN(state) {
            state = En
        }
    }
})

export const {changeLanguageToEN} = languageSlice.actions
export default languageSlice.reducer
