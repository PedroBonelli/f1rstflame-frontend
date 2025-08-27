import DataCard from './components/DataCard/DataCard.jsx'
import GraphCard from './components/GraphCard/GraphCard.jsx'
import { SimpleGrid } from '@chakra-ui/react'
import { Stack, Text } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Kbd } from '@chakra-ui/react'
import HighlightCard from './components/HighlightCard/HighlightCard.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import InteractibleCard from './components/InteractibleCard/InteractibleCard.jsx'
import './styling/app.css'
import TypedText from './components/TypedText/TypedText.jsx'

const data = {
  key1: {value :"value1", help:"key1"},
  key2: { value: "value2", help: "key2" },
  key3: { value: "value3", help: "key3" },
  key4: { value: "value4", help: "key4" },
  key5: { value: "value5", help: "key5" },
  key6: { value: "value3", help: "key6" },
}

const cnpj = '60.320.087/0001-06'

function App() {

  return (
    <>
    <Box className="app-container">
        <Box marginBottom={10} paddingTop={10} paddingX={10}>
          <NavBar className="app-navbar"></NavBar>
        </Box>

        <Heading size="6xl" fontWeight={'extrabold'} textAlign={'center'} marginBottom={10}>
          scientia
        </Heading>

        <Box as="section" p={10} h="100%" className="section1">

          <Stack marginBottom={10}>
            <Heading textAlign="center" size="3xl" marginBottom={3}>
              Análise CNPJ
            </Heading>
            <TypedText text={cnpj} fontSize="2xl" size="2xl"></TypedText>
          </Stack>

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
                <HighlightCard title="Resultado" heading="Momento da empresa" keyData="Expansão" />
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

        <Box as="section" p={10} className="section2">
          <Stack>
            <SimpleGrid columns={2} gap={6}>
              <InteractibleCard>
                <GraphCard graphURL="/src/assets/shap.png" title="SHAP"></GraphCard>
              </InteractibleCard>
              <Stack>
                <InteractibleCard>
                  <DataCard data={data} title="Dados gerais" />
                </InteractibleCard>
                <Text>Texto teste</Text>
              </Stack>
            </SimpleGrid>
            <Stack >
                <Heading textAlign={'center'}>Clusters supervisionados</Heading>
                <SimpleGrid columns={3} gap={6}>
                <InteractibleCard>
                  <GraphCard graphURL="/src/assets/shap.png" title="SHAP"></GraphCard>
                </InteractibleCard>
                <InteractibleCard>
                  <GraphCard graphURL="/src/assets/shap.png" title="SHAP"></GraphCard>
                </InteractibleCard>
                <InteractibleCard>
                  <GraphCard graphURL="/src/assets/shap.png" title="SHAP"></GraphCard>
                </InteractibleCard>
                </SimpleGrid>
            </Stack>
          </Stack>
        </Box>

    </Box>
    </>
  )
}

export default App
