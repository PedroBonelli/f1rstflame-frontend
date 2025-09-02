import { Box, DataList, Stack, Heading, Flex } from "@chakra-ui/react"
import './ProfileCard.css'

function ProfileCard({profile}){
    return(
        <Box className="profile-card">
            <Heading>{profile.profile_cluster_description}</Heading>
            <Stack marginTop={5}>
                <DataList.Root orientation="horizontal">
                    {profile.features.map(({feature_name, feature_profile_value}, index) => (
                        <Flex>
                            <DataList.Item key={index} w="100%" h="auto">
                                <DataList.ItemLabel>
                                    {feature_name}
                                </DataList.ItemLabel>
                                <DataList.ItemValue>{feature_profile_value}</DataList.ItemValue>
                            </DataList.Item>
                        </Flex>
                    ))}
                </DataList.Root>
            </Stack>
        </Box>
    );
}

export default ProfileCard

/*
"profiles": [
      {
        "profile_cluster_id": 1,
        "profile_cluster_description": "Início",
        "features": [
          {
            "feature_name": "VL_FATU",
            "feature_profile_value": 150000
          },
          {
            "feature_name": "VL_SALDO",
            "feature_profile_value": -50000
          },
          {
            "feature_name": "DT_ABRT",
            "feature_profile_value": "2023/05/10"
          },
          {
            "feature_name": "DS_CNAE",
            "feature_profile_value": "Serviços de tecnologia da informação"
          }
        ]
*/