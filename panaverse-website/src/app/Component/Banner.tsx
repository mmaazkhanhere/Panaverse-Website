import React from 'react'
import { Heading, Text, Box, Container, Image, Center, SimpleGrid, Button } from '@chakra-ui/react'
import Link from 'next/link';
import { courses } from './courses';

export default function Banner() {
    return (
        <>

            <Box bgColor=' rgba(245, 249, 255, 1)' borderRadius='30px' mr={{ lg: '100px', base: '50px' }} ml={{ base: '50px', lg: '100' }}>
                {/*Banner Box */}
                <Center>
                    <Container maxW='1800px'>
                        <SimpleGrid SimpleGrid templateColumns={{ lg: 'repeat(2,1fr)', base: 'repeat(1,1fr)' }}>

                            <Box flexBasis='50%' ml={{ base: '0px', lg: '-20px' }} >
                                <Image src='/metaverse-exp.png' alt='Metaverse Experience' borderRadius='30px' w={{ base: '293', lg: '650' }} h={{ base: '160', lg: '370' }} />
                            </Box>

                            <Box flexBasis='50%' placeItems='center' textAlign='center' lineHeight={{ base: '17px', lg: '40px' }} mt={{ base: '5px', lg: '100px' }}>


                                <Heading fontSize={{ lg: '40px', base: '20px' }} fontWeight='bold'>CERTIFIED WEB 3.0 AND METAVERSE DEVELOPER</Heading>

                                <Text fontSize={{ lg: '20px', base: '12px' }}>
                                    A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
                                </Text>

                            </Box>
                        </SimpleGrid>
                    </Container>
                </Center>
            </Box >

            <Box bgColor='rgba(255, 251, 244, 1)' pt={{ base: '20px', lg: '50px' }} ml={{ lg: '100px', base: '15px' }} mr={{ lg: '100px', base: '15px' }}
                mb={{ base: '5px', lg: '100px' }}>
                {/*Courses Box */}
                <Container maxW='1800px'>
                    <SimpleGrid templateRows={{ base: 'repeat(2,1fr)', lg: 'none' }} templateColumns={{ lg: 'repeat(2,1fr)', base: 'none' }} gap={{ lg: '50px', base: '0px' }}>

                        <Box bgColor=' rgba(245, 249, 255, 1)' borderRadius='30px' pt={{ base: '30px', lg: '70px' }}>
                            {/*Course Main Heading Box */}
                            <Heading fontSize={{ lg: '40px', base: '20px' }} fontWeight='bold' textAlign='center'>SPECIALISATION WE OFFER</Heading>

                            <Text fontSize={{ lg: '20px', base: '12px' }} textAlign='center' >
                                A 15-month long hybrid programme that includes both online and onsite classes, divided into five quarters, spanning 13 weeks each.
                            </Text>


                            <Link href='https://portal.piaic.org/signup' target="_blank" rel="noopener noreferrer">
                                <Center>
                                    <Button bgColor='black' textColor='white' textAlign='center' mt={{ lg: '20px', base: '10px' }}
                                        borderRadius='20px' size={{ lg: 'lg', base: 'xs' }}>
                                        Apply Now
                                    </Button>
                                </Center>
                            </Link>

                        </Box>

                        <Box mt={{ base: '25px', lg: '20px' }}>
                            {/*Course with Images Boxes */}
                            <Container maxW={1800}>
                                <SimpleGrid templateColumns='repeat(3,1fr)' gap={{ lg: '30px', base: '5px' }}>
                                    {courses.map((elem) => (
                                        <Box key={elem.id}>
                                            <Box>
                                                <Image src={elem.src} alt={elem.alt} width={{ lg: '150px', base: '70px' }} height={{ lg: '89px', base: '41px' }} />
                                                <Text fontSize={{ lg: '18px', base: '10px' }}>{elem.text}</Text>
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
