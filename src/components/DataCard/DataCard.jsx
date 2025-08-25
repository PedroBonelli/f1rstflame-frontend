import './DataCard.css'
import '../../styling/styles.css'
import { Box, DataList, Flex } from "@chakra-ui/react"
import { InfoTip } from "@/components/ui/toggle-tip"

function DataCard({title, data}){

    return (
        <Box className='data-card poppable-card'>
            <DataList.Root orientation="horizontal">
                <h2>{title}</h2>
                {Object.entries(data).map(([attr, content], index) => (
                    <Flex>
                        <DataList.Item key={index} display="flex" justifyContent="space-between" w="100%">
                            <DataList.ItemLabel>
                                {attr}
                                <InfoTip>{content.help}</InfoTip>
                            </DataList.ItemLabel>
                            <DataList.ItemValue>{content.value}</DataList.ItemValue>
                        </DataList.Item>
                    </Flex>
                ))}
            </DataList.Root>
        </Box>
    )
}

export default DataCard