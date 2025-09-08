import DataCard from './components/DataCard/DataCard.jsx'
import GraphCard from './components/GraphCard/GraphCard.jsx'
import { SimpleGrid, Center, Grid, GridItem} from '@chakra-ui/react'
import { Stack, Text } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import HighlightCard from './components/HighlightCard/HighlightCard.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import InteractibleCard from './components/InteractibleCard/InteractibleCard.jsx'
import './styling/app.css'
import TypedText from './components/TypedText/TypedText.jsx'
import { Tabs } from "@chakra-ui/react"
import { useState } from 'react'
import D3BarGraph from './components/D3BarGraph/D3BarGraph.jsx'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import { CiSearch } from "react-icons/ci";
import ClusterDistributionGraph from './components/ClusterDistributionGraph/ClusterDistributionGraph.jsx'


// const data = {
//   key1: {value :"value1", help:"key1"},
//   key2: { value: "value2", help: "key2" },
//   key3: { value: "value3", help: "key3" },
//   key4: { value: "value4", help: "key4" },
//   key5: { value: "value5", help: "key5" },
//   key6: { value: "value3", help: "key6" },
// }

function App() {

  const [codOperacao, setCodOperacao] = useState('');
  const [apiReturn, setApiReturn] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async() => {
    if (!codOperacao) return;
    setIsLoading(true);
    setError(null);
    setApiReturn(null);
    try{
      const response = await fetch(`http://localhost:8000/flamma/detailed/?cod_operacao=${codOperacao}`);
      const data = await response.json();
      setApiReturn(data);
      console.log(data)
    } catch (e){
      console.log(e);
    } finally{
      setIsLoading(false);
    }
  }

  const renderContent = () => {
    if(isLoading){
      return(
        <p>
          is Loading...
        </p>
      )
    }

    if (error){
      return(
      <p>error!</p>
    )
    }

    if(apiReturn){
      return(
        <>
          <Stack marginBottom={10}>
            <Heading textAlign="center" size="3xl" marginBottom={3}>
              CNPJ
            </Heading>
            <TypedText text={apiReturn.business_input.business_id} fontSize="2xl" size="2xl"></TypedText>
          </Stack>

          <Tabs.Root>
            <Tabs.List marginX={10}>
              <Tabs.Trigger value="strategic">
                Visão Estratégica
              </Tabs.Trigger>
              <Tabs.Trigger value="technical">
                Visão Técnica
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="strategic" _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "300ms",
            }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}>

              <Box as="section" p={10} h="100%" className="strategic-model">

                <Heading textAlign={'center'} size="4xl" marginBottom={5}>Modelo</Heading>

                <SimpleGrid columns={2} gap={6}>
                  <ClusterDistributionGraph clusterDistributionList={apiReturn.general_model_metrics.distribution}></ClusterDistributionGraph>
                </SimpleGrid>
                
                <Box marginTop={10}>
                    <Stack>
                      <Heading marginBottom={3} textAlign={'center'}>Perfis encontrados</Heading>
                      <Text textAlign='center' marginBottom={3}>Esses são exemplos médios de uma empresa em cada estágio de maturidade</Text>
                      <SimpleGrid columns={4} gap={6}>
                        <InteractibleCard>
                          <ProfileCard profile={apiReturn.general_model_metrics.profiles[0]}></ProfileCard>
                        </InteractibleCard>
                        <InteractibleCard>
                          <ProfileCard profile={apiReturn.general_model_metrics.profiles[1]}></ProfileCard>
                        </InteractibleCard>
                        <InteractibleCard>
                          <ProfileCard profile={apiReturn.general_model_metrics.profiles[2]}></ProfileCard>
                        </InteractibleCard>
                        <InteractibleCard>
                          <ProfileCard profile={apiReturn.general_model_metrics.profiles[3]}></ProfileCard>
                        </InteractibleCard>
                      </SimpleGrid>
                    </Stack>
                </Box>

              </Box>  

              <Box as="section" p={10} h="100%" className="strategic-analysis">

                <Heading textAlign={'center'} marginBottom={5} size="4xl">Análise</Heading>

                <InteractibleCard>
                  <DataCard
                    data={
                      {
                        "CNPJ": `${String(apiReturn.business_input.business_id)}`,
                        "Faturamento": `R$ ${String(apiReturn.business_input.faturamento)}`,
                        "Saldo na conta": `R$ ${String(apiReturn.business_input.saldo_conta)}`,
                        "Data de abertura da empresa": `${String(apiReturn.business_input.data_abertura)}`,
                        "CNAE": `${String(apiReturn.business_input.desc_cnae)}`,
                        "Data de referência dos dados": `${String(apiReturn.business_input.data_ref)}`,
                      }
                    }
                    title="Dados da empresa" />
                </InteractibleCard>

                <Box marginTop={10}>
                  <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                      <GridItem colSpan={3}>
                      <InteractibleCard>
                        <HighlightCard title="Perfil Principal" heading="Momento da empresa" keyData={apiReturn.analysis_metrics.fit.cluster_description} keyDataId={apiReturn.analysis_metrics.fit.cluster_id} secondaryData={apiReturn.analysis_metrics.fit.confiability_score}/>
                      </InteractibleCard>
                      </GridItem>
                    <GridItem colSpan={1}>
                      <InteractibleCard>
                        <HighlightCard title="Perfil secundário" heading="Momento da empresa" keyData={apiReturn.analysis_metrics.next_best_fit.cluster_description} keyDataId={apiReturn.analysis_metrics.next_best_fit.cluster_id} secondaryData={apiReturn.analysis_metrics.next_best_fit.confiability_score}/>
                      </InteractibleCard>
                      </GridItem>
                    </Grid>
                </Box>

              </Box>  

            </Tabs.Content>

            <Tabs.Content value="technical" _open={{
              animationName: "fade-in, scale-in",
              animationDuration: "300ms",
            }}
              _closed={{
                animationName: "fade-out, scale-out",
                animationDuration: "120ms",
              }}>
              <Box as="section" p={10} h="100%" className="technical-model">

                <Heading textAlign={'center'} marginBottom={5}>Modelo</Heading>

                <InteractibleCard>
                  <DataCard
                    data={{
                      "Score WCSS": `${String(apiReturn.general_model_metrics.model_validation.score_wcss)}`,
                      "Valor de K": `${String(apiReturn.general_model_metrics.model_validation.k_value)}`,
                      "Score Silhouette Médio": String(apiReturn.general_model_metrics.model_validation.average_silhouette),
                      "Score Calinksi-Harabasz": `${String(apiReturn.general_model_metrics.model_validation.score_calisnki_harabasz)}`,
                      "Score Davies-Bouldin": `${String(apiReturn.general_model_metrics.model_validation.score_davies_bouldin)}`,
                    }}
                    title="Métricas de validação e acurácia" />
                </InteractibleCard>

              </Box>

              <Box as="section" p={10} h="100%" className="technical-analysis">

                <Heading textAlign={'center'} marginBottom={5}>Análise</Heading>


                <SimpleGrid columns={2} gap={6}>

                  <InteractibleCard marginY={5}>
                    <DataCard
                      data={{
                        "Score Silhouette": `${String(apiReturn.analysis_metrics.confidence_metrics.instace_silhouette_score)}`,
                        "Distância ao centroide do cluster sugerido": `${String(apiReturn.analysis_metrics.confidence_metrics.distance_assigned_centroid)}`,
                      }}
                      title="Métricas de confiabilidade da análise" />
                  </InteractibleCard>

                  <InteractibleCard marginY={5}>
                    <DataCard
                      data={{
                        "ID da Análise" : `${String(apiReturn.analysis_id)}`,
                        "Tempo de processamento": `${String(apiReturn.processing_time_seconds)}s`,
                        "Momento da análise": `${String(apiReturn.timestamp)}`,
                      }}
                      title="Dados da operação" />
                  </InteractibleCard>

                </SimpleGrid>

                

                <InteractibleCard>
                  <D3BarGraph data={apiReturn.analysis_metrics.cluster_distances} title={"Distância dos centroides dos clusters"}></D3BarGraph>
                </InteractibleCard>

                <Box marginTop={10}>
                  <Stack>
                    <Heading marginBottom={5} textAlign={'center'}>Perfil do cluster alvo x Perfil da análise</Heading>
                    <SimpleGrid columns={2} gap={6}>
                      <InteractibleCard>
                        <ProfileCard profile={apiReturn.analysis_metrics.profile_fit.target_profile}></ProfileCard>
                      </InteractibleCard>
                      <InteractibleCard>
                        <ProfileCard profile={apiReturn.analysis_metrics.profile_fit.analysis_profile}></ProfileCard>
                      </InteractibleCard>
                    </SimpleGrid>
                  </Stack>
                </Box>

              </Box> 
            </Tabs.Content>
          </Tabs.Root>
          </>
      )
    }

    return(
      <>
        <Center marginTop="13%">
          <Stack alignItems={'center'}>
            <Heading display="flex" alignItems="center" gap="8px">Busque uma análise<CiSearch size="2.0em" /></Heading>
            <p>
              Basta inserir o código no campo acima e selecionar o botão
            </p>
          </Stack>
        </Center>
      </>
    )
  }

  return (
    <>
      <Box className="app-container">
        <Box marginBottom={10} paddingTop={10} paddingX={10}>
          <NavBar
            className="app-navbar"
            codOperacao={codOperacao}
            setCodOperacao={setCodOperacao}
            handleSearch={handleSearch}
            isLoading={isLoading}
          ></NavBar>
        </Box>

        <Heading size="6xl" fontWeight={'extrabold'} textAlign={'center'} marginBottom={10}>
          scientia
        </Heading>

        {renderContent()}

      </Box>
    </>
  )
}

export default App
