import DataCard from './components/DataCard/DataCard.jsx'
import GraphCard from './components/GraphCard/GraphCard.jsx'
import { SimpleGrid } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import HighlightCard from './components/HighlightCard/HighlightCard.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import InteractibleCard from './components/InteractibleCard/InteractibleCard.jsx'
import './styling/styles.css'

const data = {
  key1: {value :"value1", help:"key1"},
  key2: { value: "value2", help: "key2" },
  key3: { value: "value3", help: "key3" },
  key4: { value: "value4", help: "key4" }
}

function App() {

  return (
    <>
    <Box m = {10}>
      <NavBar></NavBar>
    </Box>
    <Box as="section" p={10} h="100vh" className="graphs-section-1">
        <SimpleGrid columns={2} gap={6}>
          <Stack gap={6}>
            <SimpleGrid columns={2} gap={6}>
              <InteractibleCard>
                <DataCard data={data} title="Dados gerais" />
              </InteractibleCard>
              <InteractibleCard>
                <DataCard data={data} title="Modelo" />
              </InteractibleCard>
            </SimpleGrid>
            <InteractibleCard>
              <GraphCard graphURL="/src/assets/shap.png" title="SHAP"></GraphCard>
            </InteractibleCard>
          </Stack>
          <Stack gap={6}>
            <InteractibleCard>
              <HighlightCard />
            </InteractibleCard>
            <InteractibleCard>
              <DataCard data={data} title="Análise SHAP" />
            </InteractibleCard>
            <InteractibleCard>
              <DataCard data={data} title="Interactible Análise SHAP" />
            </InteractibleCard>
          </Stack>
        </SimpleGrid>
    </Box>
    </>
  )
}

export default App
