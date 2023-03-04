'use client'

import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Image, Center, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function page() {
    return (
        <>
            <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
                mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '10px', lg: '30px' }}>

                <Container maxW='1800px'>
                    <Box >
                        <Center>
                            <Image src='/President.jpg' alt='President of Pakistan' width={{ base: '130', lg: '210' }} height={{ base: '130', lg: '210' }}
                                borderRadius='180px' mt={{ base: '10px', lg: '25px' }} />
                        </Center>
                    </Box>

                    <Center>
                        <Heading fontSize={{ base: '20px', lg: '30px' }}>
                            President Dr. Arif Alvi
                        </Heading>
                    </Center>

                    <Box textAlign='justify' fontSize={{ base: '10px', lg: '17px' }} mt={{ base: '10px', lg: '25px' }}>
                        <Text>
                            Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.Dr. Arif Alvi was born in 1949 and completed his early education in
                            Karachi.
                        </Text>
                        <br />
                        <Text>
                            He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his
                            Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982).
                            He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995).
                        </Text>
                        <br />
                        <Text>
                            Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of
                            Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has
                            held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution
                            of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.
                        </Text>
                        <br />
                    </Box>

                    <Center>
                        <Link href='https://president.gov.pk/' target="_blank" rel="noopener noreferrer">
                            <Button size={{ base: 'xs', lg: 'lg' }} bgColor='black' textColor='white' borderRadius='15px'>Read More</Button>
                        </Link>
                    </Center>
                </Container>
            </Box >

            <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
                mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '10px', lg: '30px' }}>

                <Container maxW='1800px'>
                    <Box >
                        <Center>
                            <Image src='/zia.jpg' alt='Panaverse CEO' width={{ base: '130', lg: '210' }} height={{ base: '130', lg: '210' }}
                                borderRadius='180px' mt={{ base: '10px', lg: '25px' }} />
                        </Center>
                    </Box>

                    <Center>
                        <Heading fontSize={{ base: '20px', lg: '30px' }}>
                            Zia Khan
                        </Heading>
                    </Center>

                    <Box textAlign='justify' fontSize={{ base: '10px', lg: '17px' }} mt={{ base: '10px', lg: '25px' }}>
                        <Text>
                            Zia Khan, CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding and Development Platform, have extensive experience in software
                            architecture, design, development, implementation, and integration. He worked as a developer in Silicon Valley for 7 years.
                        </Text>
                        <br />
                        <Text>
                            He has has hands-on experience including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge
                            tartups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc
                        </Text>
                        <br />
                    </Box>

                    <Center>
                        <Link href='https://pk.linkedin.com/in/ziaukhan' target="_blank" rel="noopener noreferrer">
                            <Button size={{ base: 'xs', lg: 'lg' }} bgColor='black' textColor='white' borderRadius='15px'>Read More</Button>
                        </Link>
                    </Center>
                </Container>
            </Box >
        </>
    )
}
