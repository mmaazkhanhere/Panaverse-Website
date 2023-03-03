'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import dollar from '../../../public/dollar.png'

export default function Quarter3() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                <Heading pt='10px' textAlign='center' size={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>Quarter III (Core) </Heading>
                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                </Heading>
                <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                {/*Image */}
                <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                    <Image style={imageStyles} src={dollar} alt='Bitcoin Image' />
                </Center>

                {/*Course Description} */}

                <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Earn While You Learn Projects</Heading>

                {/*1st Task*/}

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

                {/*2 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Build QraphQL APIs</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of
                    the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the
                    developer through the Panaverse DAO in the form of Panaverse tokens.
                </Text>
            </Container>
        </Box>
    )
}
