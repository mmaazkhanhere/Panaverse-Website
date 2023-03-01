import React from 'react'
import { Heading, Text, Box, Container, Image, Flex, Spacer, Center, SimpleGrid } from '@chakra-ui/react'
//import banner from '../../../public/metaverse-exp.png'

export default function Banner() {
    return (
        <Box bgColor=' rgba(255, 244, 223, 1)' borderRadius='30px' mr={{ lg: '100', base: '50' }} ml={{ base: '50', lg: '100' }}>
            <Center>
                <Container maxW='1800px'>
                    <SimpleGrid templateColumns={{ lg: 'repeat(2,1fr)', base: 'repeat(1,1fr)' }}>

                        <Box flexBasis='50%' ml='-20px'>
                            <Image src='/metaverse-exp.png' alt='Metaverse Experience' borderRadius='30px' w={{ base: '293', lg: '650' }} h={{ base: '160', lg: '370' }} />
                        </Box>

                        <Box flexBasis='50%' placeItems='center' textAlign='center' lineHeight={{ base: '17px', lg: '40px' }} mt={{ base: '5px', lg: '90px' }}>

                            <Heading fontSize={{ lg: '38px', base: '12px' }} fontWeight='bold'>CERTIFIED WEB 3.0 AND METAVERSE DEVELOPER</Heading>

                            <Text fontSize={{ lg: '20px', base: '12px' }}>
                                A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
                            </Text>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Center>
        </Box >
    )
}
