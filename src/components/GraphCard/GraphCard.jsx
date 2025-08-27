import {Image, Box, Center, Heading} from "@chakra-ui/react"
import './GraphCard.css'

function GraphCard({title, graphURL}){
    return(
        <Box className='graph-card'>
        <Heading>{title}</Heading>
        <Center p={3}><Image src={graphURL}></Image></Center>
    </Box>
    )
}

export default GraphCard