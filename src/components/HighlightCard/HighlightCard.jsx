import { Box, Center, Heading, Stack, Image} from "@chakra-ui/react";
import './HighlightCard.css'


function HighlightCard({title, heading, keyData}){
    return(
        <Box className="highlight-card">
            <Heading>{title}</Heading>
            <Center m={6}>
                <Box>
                    <Stack>
                        <Heading textAlign="center" size="2xl">{heading}</Heading>
                        <Heading textAlign="center" size="4xl">{keyData}</Heading>
                    </Stack>
                    <Box>
                        <Center><Image src="/src/assets/up-trend.svg" alt="" height="200px" /></Center>
                    </Box>
                </Box>
            </Center>
        </Box>
    )
}

export default HighlightCard