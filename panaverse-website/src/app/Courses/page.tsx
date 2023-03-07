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
                {/*Image is imported from local project directory. Therefore, url is used to access the image. Margin on both side to put the Image at the center and have some
                gap on both side */}
                <Container maxW={1800}>

                    <Box>
                        <SimpleGrid templateColumns={{ lg: 'repeat(2,1fr)', base: 'repeat(1,1fr)' }}>
                            {/*templateColumn used to put the content on one side and no content on the other side. So the box is divided into two columns. */}

                            <SimpleGrid templateRows='repeat(2,1fr)' gap={{ lg: '40px', base: '0px' }}>
                                {/*templateRow is used to place the content uspide down. So the column is divided into two rows */}

                                <Center>
                                    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
                                        {/*Animation added displaying the content originating from top for duration of 1000ms and would reset if scrolled back */}

                                        <Box textAlign='center' textColor='white' pt='25px'>
                                            <Heading >CORE COURSES</Heading>
                                            <Text>Every participant of the program will start by completing three courses</Text>
                                        </Box>
                                    </RevealWrapper>
                                </Center>

                                <SimpleGrid templateColumns='repeat(3,1fr)' gap='20px' textAlign='center' mb='15px'>
                                    {/*Since three boxes are to be created, so the row is divided into three columns */}

                                    <RevealWrapper origin='left' delay={500} duration={1200} distance='500px' reset={true}>
                                        {/*Different duration so the content comes one after another */}

                                        <Center>
                                            <Box bgColor='white' borderRadius='15px'>
                                                <Heading pt='10px' fontSize={{ lg: '18', base: '14px' }}>CS-101: OOPs with TypeScript</Heading>
                                                {/* Heading and text are of different size for different screen */}

                                                <Text pt='5px' fontSize={{ lg: '14px', base: '10px' }}>Fundamentals of Object Oriented Programming using JavaScript and TypeScript</Text>

                                                <Link href='/Quarter-1' target="_blank" rel="noopener noreferrer">
                                                    <Button bgColor='black' textColor='white' textAlign='center' mt={{ lg: '10px', base: '5px' }}
                                                        mb={{ lg: '10px', base: '5px' }} borderRadius='20px' size={{ lg: 'sm', base: 'xs' }}>
                                                        Read More
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </Center>
                                    </RevealWrapper>

                                    <RevealWrapper origin='left' delay={500} duration={1400} distance='500px' reset={true}>

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
                                    </RevealWrapper>

                                    <RevealWrapper origin='left' delay={500} duration={1600} distance='500px' reset={true}>
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
                                    </RevealWrapper>

                                </SimpleGrid>
                            </SimpleGrid>
                        </SimpleGrid>
                    </Box>
                </Container >
            </Box >

            <Box>
                {/*Box for Specialised Courses */}
                <Container maxW='1800px'>
                    <SimpleGrid templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)' }}>
                        {/*If small screen place the content in one column otherwise place it in 2 columns */}

                        {/*Heading */}
                        <Center>
                            <RevealWrapper origin='top' delay={200} duration={1200} distance='500px' reset={true}>
                                <Box ml={{ lg: '65px', base: '17px' }} mr={{ lg: '65px', base: '17px' }} mt={{ lg: '0px', base: '20px' }}>
                                    <Heading textAlign='center'>SPECIALISATION COURSES</Heading>
                                    <Text textAlign='center'>After completing the first three quarters, the participant will select one or more specialisation</Text>

                                </Box>
                            </RevealWrapper>
                        </Center>

                        {/*Courses List */}
                        <Box ml={{ lg: '65x', base: '17px' }} mr={{ lg: '65px', base: '17px' }}>
                            <SimpleGrid templateColumns={{ base: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }} gap='20px' pb={{ base: '20px', lg: '30px' }}>
                                {/*place course list in 2 columns if small screen and in 3 columns when large screen */}

                                <CourseBox src='/Web3.png' heading1='W3-351: ' text1='Developing Smart Contract and DApps' heading2='MV-361: '
                                    text2='Developing Virtual and Augment Metaverse Experience' href='/Web3' time='1600' />

                                <CourseBox src='/AI.png' heading1='AI-351: ' text1='Developing Intelligent APIs and Python Programming' heading2='AI-361: '
                                    text2='Deep Learning and MLOps' href='/AI' time='1900' />

                                <CourseBox src='/cloudComp.png' heading1='CN-351: ' text1='Certified Kubernetes Application Developer' heading2='CN-361: '
                                    text2='Developing Multi-Cloud Apps using SDK' href='/Cloud' time='2100' />

                                <CourseBox src='/Bio.png' heading1='Bio-351: ' text1='Python for Biologist' heading2='Bio-361: '
                                    text2='Bioinformatics with Python' href='/Genomics' time='2400' />

                                <CourseBox src='/network.png' heading1='NPA-351: ' text1='CCNA 200-301 Certification' heading2='NPA-361: '
                                    text2='Network Programmability and Automation' href='/Network' time='2700' />

                                <CourseBox src='/iot.png' heading1='AC-351: ' text1='Ambient Computing with Voicing Assistants' heading2='AC-361: '
                                    text2='Embedded Programming using C and Rust' href='/IoT' time='3100' />
                            </SimpleGrid>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
        </>
    )
}
