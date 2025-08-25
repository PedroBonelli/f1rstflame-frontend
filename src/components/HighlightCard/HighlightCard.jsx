import { Box, Center, Heading, Stack, Image} from "@chakra-ui/react";
import './HighlightCard.css'
import '../../styling/styles.css'


function HighlightCard(){
    return(
        <Box className="highlight-card poppable-card">
            <Heading>Resultado</Heading>
            <Center m={6}>
                <Box>
                    <Stack>
                        <Heading textAlign="center" size="2xl">Estagio previsto da empresa</Heading>
                        <Heading textAlign="center" size="4xl">Expansão</Heading>
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