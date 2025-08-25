import {Box, Flex} from "@chakra-ui/react"
import { Group, Input } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import { HiOutlineSearch } from "react-icons/hi";


function NavBar(){
    return(
        <>
        <Flex justify={"space-between"}>
            <Box>
                <img src="/src/assets/logo.svg" alt="" />
            </Box>
            <Box>
                <Group attached className="search-group">
                    <Input placeholder="Código de operação" borderLeftRadius={20}/>
                        <IconButton borderRightRadius={20} className="search-button" bg="linear-gradient(90deg, rgba(255, 15, 19, 0.6) 0%, rgba(248, 155, 41, 0.6) 100%)"><HiOutlineSearch color="#ffffff"/></IconButton>
                </Group>
            </Box>
        </Flex>
        </>
    )
}

export default NavBar