'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import dollar from '../../../public/dollar.png'
import { RevealWrapper } from 'next-reveal'

export default function Quarter3() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(189, 170, 171, 0.5)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Quarter Heading */}

                <RevealWrapper origin='left' delay={300} duration={1000} distance='500px' reset={true}>
                    <Box mt='15px' mr={{ lg: '580px', base: '30px' }} ml={{ base: '30px', lg: '580px' }}>
                        <Center>
                            <Heading bgColor='rgba(120, 91, 92)' textColor='white' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                Quarter III
                            </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Course Heading */}

                <RevealWrapper origin='left' delay={300} duration={1100} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                        <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                        </Heading>
                    </Box>
                </RevealWrapper>

                {/*Week Duration */}

                <RevealWrapper origin='left' delay={300} duration={1200} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '420px', base: '30px' }} ml={{ base: '30px', lg: '420px' }}>
                        <Heading textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>
                    </Box>
                </RevealWrapper>

                {/*Image */}

                <RevealWrapper origin='left' delay={300} duration={1300} distance='500px' reset={true}>
                    <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                        <Image style={imageStyles} src={dollar} alt='Bitcoin Image' />
                    </Center>
                </RevealWrapper>

                {/*Course Description} */}

                <RevealWrapper origin='left' delay={300} duration={1350} distance='500px' reset={true}>
                    <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Earn While You Learn Projects</Heading>
                </RevealWrapper>

                {/*1st Task*/}

                <RevealWrapper origin='left' delay={300} duration={1370} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Build Full-Stack NextJs 13 Jamstack Templates</Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of
                        the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the
                        developer through the Panaverse DAO in the form of Panaverse tokens.

                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>The Template Standard</Text>
                        <br />
                        <Link href='https://github.com/panaverse/panaverse-template-standard ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://github.com/panaverse/panaverse-template-standard
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

                {/*2 Task*/}

                <RevealWrapper origin='left' delay={300} duration={1390} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Build QraphQL APIs</Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of
                        the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the
                        developer through the Panaverse DAO in the form of Panaverse tokens.
                    </Text>
                </RevealWrapper>
            </Container>
        </Box>
    )
}
