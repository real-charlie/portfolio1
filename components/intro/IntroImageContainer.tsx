import {Box} from "@mui/material";
import Image from "next/image";
import {css} from "@emotion/css";

const IntroImageContainer = ({src, alt}: { src: any, alt: string }) => {
    return (
        <Box borderRadius={300} overflow={'hidden'} border={'2px dashed white'}
             className={css`
               width: 500px;
               height: 500px;

               @media (max-width: 1000px) {
                 width: 300px;
                 height: 300px;
               }
             `}
        >
            <Image src={src} alt={alt} className={css`width: 100%;
              height: 100%;
              object-fit: cover`}/>
        </Box>
    )
}

export default IntroImageContainer
