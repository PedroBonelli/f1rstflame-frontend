import { Box, Center, Heading, Stack, Image} from "@chakra-ui/react";
import './HighlightCard.css'


function HighlightCard({title, heading, keyDataId, keyData, secondaryData}){

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
                        <Center marginY={10}>
                            {keyDataId == 1 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '100px', width: '100px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            }
                            {keyDataId == 2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '100px', width: '100px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                            </svg>
                            }
                            {keyDataId == 3 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '100px', width: '100px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>}
                            {keyDataId == 4 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ height: '100px', width: '100px' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                            }
                        </Center>
                        {/* <Center><Image src={resourcePath} alt="" height="200px" /></Center> */}
                        
                    </Box>
                    <Heading textAlign="center" size="2xl">{`Confiabilidade - ${secondaryData*100}%`}</Heading>
                </Box>
            </Center>
        </Box>
    )
}

export default HighlightCard