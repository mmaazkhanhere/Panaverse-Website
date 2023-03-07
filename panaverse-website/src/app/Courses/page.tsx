'use client'

import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Center, Button } from '@chakra-ui/react'
import Link from 'next/link'
import CourseBox from '../Component/coursesBox'
import { RevealWrapper } from 'next-reveal'

export default function Courses() {
    return (
        <>
            <Box bgImage={`url('/courseBG.png')`} bgSize='cover' borderRadius='30px' ml={{ lg: '80px', base: '17px' }} mr={{ lg: '80px', base: '17px' }} >
                <Container maxW={1800}>

                    <Box>
                        <SimpleGrid templateColumns={{ lg: 'repeat(2,1fr)', base: 'repeat(1,1fr)' }}>
                            <SimpleGrid templateRows='repeat(2,1fr)' gap={{ lg: '40px', base: '0px' }}>

                                <Center>
                                    <RevealWrapper delay={200} duration={3000} distance='500px' reset={true}>
                                        <Box textAlign='center' textColor='white' pt='25px'>
                                            <Heading fontSize={{ base: '25px', lg: '42px' }}>CORE COURSES</Heading>
                                            <Text fontSize={{ lg: '20px', base: '13px' }}>Every participant of the program will start by completing three courses</Text>
                                        </Box>
                                    </RevealWrapper>
                                </Center>


                                <SimpleGrid templateColumns='repeat(3,1fr)' gap='20px' textAlign='center' mb='15px'>

                                    <Center>
                                        <Box bgColor='white' borderRadius='15px'>

                                            <Heading pt='10px' fontSize={{ lg: '18', base: '14px' }}>CS-101: OOPs with TypeScript</Heading>
                                            <Text pt='5px' fontSize={{ lg: '14px', base: '10px' }}>Fundamentals of Object Oriented Programming using JavaScript and TypeScript</Text>

                                            <Link href='/Quarter-1' target="_blank" rel="noopener noreferrer">
                                                <Button bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
                                                    mb={{ lg: '10px', base: '5px' }} borderRadius='20px' size={{ lg: 'sm', base: 'xs' }}>
                                                    Read More
                                                </Button>
                                            </Link>

                                        </Box>
                                    </Center>

                                    <Center>
                                        <Box bgColor='white' borderRadius='15px'>

                                            <Heading fontWeight='bold' pt='10px' fontSize={{ lg: '18', base: '12px' }}>W2-201: Developing Web 2.0 Apps using Next.js 13</Heading>
                                            <Text pt='5px' fontSize={{ lg: '14px', base: '10px' }}>Develop customer-facing-planet-scale website, full-stack apps, and templates</Text>

                                            <Link href='/Quarter-2' target="_blank" rel="noopener noreferrer">
                                                <Button bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
                                                    mb={{ lg: '10px', base: '5px' }} borderRadius='20px' size={{ lg: 'sm', base: 'xs' }}>
                                                    Read More
                                                </Button>
                                            </Link>
                                        </Box>
                                    </Center>

                                    <Center>
                                        <Box bgColor='white' borderRadius='15px'>

                                            <Heading pt='10px' fontSize={{ lg: '18', base: '14px' }}>$-101: Dollar Making Bootcamp</Heading>
                                            <Text pt='5px' fontSize={{ lg: '14px', base: '10px' }}> Build templates, which will be sold on Theme Forest and Panaverse DAO marketplace</Text>

                                            <Link href='/Quarter-3' target="_blank" rel="noopener noreferrer">
                                                <Button bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
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

            <Box>
                <Container maxW='1800px'>
                    <SimpleGrid templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}>
                        <Center>
                            <Box ml={{ lg: '65px', base: '17px' }} mr={{ lg: '65px', base: '17px' }} mt={{ lg: '0px', base: '20px' }}>
                                <Heading textAlign='center'>SPECIALISATION COURSES</Heading>
                                <Text textAlign='center'>After completing the first three quarters, the participant will select one or more specialisation</Text>

                            </Box>
                        </Center>

                        <Box ml={{ lg: '65x', base: '17px' }} mr={{ lg: '65px', base: '17px' }}>
                            <SimpleGrid templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gap='20px' pb={{ base: '20px', lg: '30px' }}>

                                <CourseBox src='/Web3.png' heading1='W3-351: ' text1='Developing Smart Contract and DApps' heading2='MV-361: '
                                    text2='Developing Virtual and Augment Metaverse Experience' href='/Web3' />

                                <CourseBox src='/AI.png' heading1='AI-351: ' text1='Developing Intelligent APIs and Python Programming' heading2='AI-361: '
                                    text2='Deep Learning and MLOps' href='/AI' />

                                <CourseBox src='/cloudComp.png' heading1='CN-351: ' text1='Certified Kubernetes Application Developer' heading2='CN-361: '
                                    text2='Developing Multi-Cloud Apps using SDK' href='/Cloud' />

                                <CourseBox src='/Bio.png' heading1='Bio-351: ' text1='Python for Biologist' heading2='Bio-361: '
                                    text2='Bioinformatics with Python' href='/Genomics' />

                                <CourseBox src='/network.png' heading1='NPA-351: ' text1='CCNA 200-301 Certification' heading2='NPA-361: '
                                    text2='Network Programmability and Automation' href='/Network' />

                                <CourseBox src='/iot.png' heading1='AC-351: ' text1='Ambient Computing with Voicing Assistants' heading2='AC-361: '
                                    text2='Embedded Programming using C and Rust' href='/IoT' />

                            </SimpleGrid>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}
