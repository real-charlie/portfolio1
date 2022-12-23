import {styled} from "@mui/material";

const InfoDecoration = styled('div')((props) => ({
    backgroundColor: props.theme.palette.primary.main,
    width: 12,
    height: 12,
    borderRadius: 200,
    border: `25px solid ${props.theme.palette.background.default}`
}))
export default InfoDecoration
