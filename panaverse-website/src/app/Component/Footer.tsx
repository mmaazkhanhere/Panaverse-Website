import React from 'react'
import { Box, Heading, Text, Image, Flex, Container, Link, SimpleGrid, List, UnorderedList, ListItem, Center, HStack } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box bgColor='rgba(0, 0, 0, 0.8)'>
            <Container maxW={1800}>
                <SimpleGrid templateColumns='repeat(3,1fr)' gap='30px' py={{ base: '20px', lg: '50px' }} placeContent='center'>

                    <Box>

                        <Heading textAlign='center' color='white' fontSize={{ lg: '20px', base: '12px' }} >About Us</Heading>

                        <Flex gap='10px'>
                            <Center>

                                <HStack>
                                    <Image src='/red-p-logo.png' alt='Panaverse Logo' w={{ lg: '126px', base: '66px' }} h={{ lg: '94px', base: '65px' }} />

                                    <Text color='white' fontSize={{ base: '7px', lg: '13px' }} lineHeight={{ lg: '15.73px', base: '8.47px' }} pr={{ base: '40px', lg: '150px' }}
                                        pt={{ lg: '10px', base: '5px' }}>
                                        Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders, and service providers
                                    </Text>
                                </HStack>
                            </Center>
                        </Flex>
                    </Box>

                    <Box>

                        <Heading textAlign='center' color='white' fontSize={{ lg: '20px', base: '12px' }} >Follow Us</Heading>

                        <List color='white' placeContent='center' pt={{ base: '5px', lg: '10px' }}>
                            <Center>

                                <UnorderedList textColor='white' fontSize={{ base: '7px', lg: '13px' }} lineHeight={{ lg: '15.73px', base: '8.47px' }} pt='5px'>
                                    <ListItem>
                                        <Link href='https://www.facebook.com/groups/panaverse'>Facebook</Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href='https://www.youtube.com/@panaverse/streams'>Youtube</Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href='https://twitter.com/Panaverse_edu'>Twitter</Link>
                                    </ListItem>

                                    <ListItem>
                                        <Link href='https://github.com/panaverse'>GitHub</Link>
                                    </ListItem>
                                </UnorderedList>
                            </Center>
                        </List>

                    </Box>

                    <Box>
                        <Heading textAlign='center' color='white' fontSize={{ lg: '20px', base: '12px' }} >Contact Us</Heading>

                        <Center>
                            <Text color='white' fontSize={{ base: '7px', lg: '13px' }} lineHeight={{ lg: '15.73px', base: '8.47px' }} fontWeight='bold' pt={{ lg: '10px', base: '5px' }}>
                                Phone Number:
                                <Text color='white' fontSize={{ base: '7px', lg: '13px' }} lineHeight={{ lg: '15.73px', base: '8.47px' }} fontWeight='normal'>
                                    +92 308 222 0203
                                </Text>
                            </Text>
                        </Center>

                        <Center>
                            <Text color='white' fontSize={{ base: '7px', lg: '13px' }} lineHeight={{ lg: '15.73px', base: '8.47px' }} fontWeight='bold'>
                                Email:
                                <Text color='white' fontSize={{ base: '7px', lg: '13px' }} lineHeight={{ lg: '15.73px', base: '8.47px' }} fontWeight='normal'>
                                    education@piaic.com
                                </Text>
                            </Text>
                        </Center>
                    </Box>
                </SimpleGrid >
            </Container >
        </Box >

    )
}
