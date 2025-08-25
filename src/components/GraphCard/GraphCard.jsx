import {Image, Box, Center, Heading} from "@chakra-ui/react"
import './GraphCard.css'
import '../../styling/styles.css'

function GraphCard({title, graphURL}){
    return(
        <Box className='graph-card poppable-card'>
        <Heading>{title}</Heading>
        <Center p={3}><Image src={graphURL}></Image></Center>
    </Box>
    )
}

export default GraphCard