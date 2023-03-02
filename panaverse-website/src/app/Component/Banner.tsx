import React from 'react'
import { Heading, Text, Box, Container, Image, Flex, Spacer, Center, SimpleGrid, Button } from '@chakra-ui/react'
import { useHistory } from "react-router-dom";
import Link from 'next/link';
import { courses } from './courses';

export default function Banner() {

    const url = 'https://portal.piaic.org/signup';

    return (
        <>
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

            <Box bgColor='rgba(255, 251, 244, 1)' pt={{ base: '10px', lg: '50px' }} ml={{ lg: '100px', base: '50px' }} mr={{ lg: '100px', base: '50px' }}>
                <Container maxW='1800px'>
                    <SimpleGrid templateColumns='repeat(2,1fr)'>

                        <Box mt={{ base: '5px', lg: '50px' }}>
                            <Heading fontSize={{ lg: '38px', base: '12px' }} fontWeight='bold' textAlign='center'>SPECIALISATION WE OFFER</Heading>

                            <Text fontSize={{ lg: '20px', base: '12px' }} textAlign='center' ml={{ lg: '100px', base: '50px' }} mr={{ lg: '100px', base: '50px' }}>
                                A 15-month long hybrid programme that includes both online and onsite classes, divided into five quarters, spanning 13 weeks each.
                            </Text>

                            <Link href={url} passHref>
                                <Center>
                                    <Button mt={{ lg: '20px', base: '10px' }} as="a" target='_blank' rel='noopener noreferrer' bgColor='black' textColor='white' textAlign='center' borderRadius='20px' >
                                        Apply Now
                                    </Button>
                                </Center>
                            </Link>

                        </Box>

                        <Box>
                            <Container maxW={1800}>
                                <SimpleGrid templateColumns='repeat(3,1fr)' gap={{ lg: '50px', base: '34px' }}>
                                    {courses.map((elem) => (
                                        <Box key={elem.id}>
                                            <Box>
                                                <Image src={elem.src} alt={elem.alt} width={{ lg: '150px', base: '70px' }} height={{ lg: '89px', base: '41px' }} />
                                                <Text textAlign='center' fontSize={{ lg: '18px', base: '10px' }}>{elem.text}</Text>
                                            </Box>

                                        </Box>
                                    ))}
                                </SimpleGrid>
                            </Container>
                        </Box>

                    </SimpleGrid>
                </Container>
            </Box >
        </>
    )
}
