'use client'

import React from 'react'
import { Box, Container, Flex, SimpleGrid, Image, Heading, Text, Center, Button } from '@chakra-ui/react'
import image from '../../../public/image.png'
import Link from 'next/link'

export default function Courses() {
    return (
        <Box bgImage='https://www.startupindia.gov.in/content/dam/invest-india/Resources/LandD/onlineCoursesBanner.png/_jcr_content/renditions/cq5dam.web.1280.1280.png'
            bgSize='inital' borderRadius='30px' ml={{ lg: '80px', base: '17px' }} mr={{ lg: '80px', base: '17px' }}>
            <Container maxW={1800}>
                <Box>
                    <SimpleGrid templateColumns='repeat(2,1fr)'>
                        <SimpleGrid templateRows='repeat(2,1fr)' gap='40px'>

                            <Center>
                                <Box textAlign='center' textColor='white' pt='25px'>
                                    <Heading fontSize='42px'>CORE COURSES</Heading>
                                    <Text fontSize='20px'>Every participant of the program will start by completing three courses</Text>
                                </Box>
                            </Center>

                            <SimpleGrid templateColumns='repeat(3,1fr)' gap='20px' textAlign='center' mb='15px'>

                                <Center>
                                    <Box bgColor='white' borderRadius='15px'>

                                        <Heading pt='10px' fontSize='18'>CS-101: OOPs with TypeScript</Heading>
                                        <Text pt='5px' fontSize='14px'>Fundamentals of Object Oriented Programming using JavaScript and TypeScript</Text>

                                        <Link href='/Quarter-1' passHref>

                                            <Button as="a" target='_blank' bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
                                                mb={{ lg: '10px', base: '5px' }} borderRadius='20px' size={{ lg: 'sm', base: 'xs' }}>
                                                Read More
                                            </Button>
                                        </Link>
                                    </Box>
                                </Center>

                                <Center>
                                    <Box bgColor='white' borderRadius='15px'>

                                        <Heading pt='10px' fontSize='18'>W2-201: Developing Web 2.0 Apps using Next.js 13</Heading>
                                        <Text pt='5px' fontSize='14px'>Develop customer-facing-planet-scale website, full-stack apps, and templates</Text>

                                        <Link href='/Quarter-1' passHref>

                                            <Button as="a" target='_blank' bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
                                                mb={{ lg: '10px', base: '5px' }} borderRadius='20px' size={{ lg: 'sm', base: 'xs' }}>
                                                Read More
                                            </Button>
                                        </Link>
                                    </Box>
                                </Center>

                                <Center>
                                    <Box bgColor='white' borderRadius='15px'>

                                        <Heading pt='10px' fontSize='18'>$-101: Dollar Making Bootcamp</Heading>
                                        <Text pt='5px' fontSize='14px'>Build templates, which will be sold on Theme Forest and Panaverse DAO marketplace</Text>

                                        <Link href='/Quarter-1' passHref>
                                            <Button as="a" target='_blank' bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
                                                mb={{ lg: '10px', base: '5px' }} borderRadius='20px' size={{ lg: 'sm', base: 'xs' }}>
                                                Read More
                                            </Button>
                                        </Link>
                                    </Box>
                                </Center>
                            </SimpleGrid>
                        </SimpleGrid>
                    </SimpleGrid>
                </Box>
            </Container >
        </Box >
    )
}
