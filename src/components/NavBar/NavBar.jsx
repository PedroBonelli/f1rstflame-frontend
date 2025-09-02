import {Box, Flex} from "@chakra-ui/react"
import { Group, Input, Heading } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { HiOutlineSearch } from "react-icons/hi";


function NavBar({codOperacao, setCodOperacao,handleSearch,isLoading}){
    return(
        <>
        <Flex justify={"space-between"} alignItems={"center"}>
            <Box>
                <img src="/src/assets/logo.svg" alt="" />
            </Box>
            <Box>
                <Group attached className="search-group">
                    <Input
                     placeholder="Código de operação"
                     width={400}
                     borderLeftRadius={20}
                     value={codOperacao}
                     onChange={(e) => setCodOperacao(e.target.value)}/>
                    <IconButton 
                     borderRightRadius={20}
                     className="search-button"
                     bg="linear-gradient(90deg, rgba(255, 15, 19, 0.6) 0%, rgba(248, 155, 41, 0.6) 100%)"
                     onClick={handleSearch}
                     isLoading={isLoading}
                     ><HiOutlineSearch color="#ffffff"/></IconButton>
                </Group>
            </Box>
        </Flex>
        </>
    )
}

export default NavBar