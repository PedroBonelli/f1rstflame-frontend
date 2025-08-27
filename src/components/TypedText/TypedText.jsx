import { Text, Box, Kbd } from "@chakra-ui/react";
import './TypedText.css'

function TypedText({text, ...props}){
    return(
        <>
            <Box className="typed" width="fit-content" {...props}>
            <Kbd {...props}>{text}</Kbd>
        </Box>
        </>
    )
}

export default TypedText