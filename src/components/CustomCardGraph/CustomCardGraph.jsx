import './CustomCardGraph.css'
import { Box } from '@chakra-ui/react'

function CustomCardGraph({children, ...props}){
    return(
    <Box className={'custom-card-graph'} {...props}>
        {children}
    </Box>
    )
}

export default CustomCardGraph