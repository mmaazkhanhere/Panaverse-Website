'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import cloud from '../../../public/multiCloud.jpg'
import { RevealWrapper } from 'next-reveal'

export default function Quarter2() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(189, 170, 171, 0.5)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Quarter Heading */}

                <RevealWrapper origin='top' delay={300} duration={1100} distance='500px' reset={true}>
                    <Box mt='15px' mr={{ lg: '460px', base: '30px' }} ml={{ base: '30px', lg: '460px' }}>
                        <Center>
                            <Heading bgColor='rgba(120, 91, 92)' textColor='white' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                Quarter V
                            </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Course Heading */}

                <RevealWrapper origin='top' delay={300} duration={1200} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                        <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                            CN-361: Developing Mulit-Cloud APIs using CDK for Terraform
                        </Heading>
                    </Box>
                </RevealWrapper>

                {/*Week Duration */}

                <RevealWrapper origin='top' delay={300} duration={1300} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '420px', base: '30px' }} ml={{ base: '30px', lg: '420px' }}>
                        <Heading textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>
                    </Box>
                </RevealWrapper>

                {/*Image */}

                <RevealWrapper origin='top' delay={300} duration={1400} distance='500px' reset={true}>
                    <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                        <Image style={imageStyles} src={cloud} alt='Multiple Cloud' />
                    </Center>
                </RevealWrapper>

                {/*Course Description} */}

                <RevealWrapper origin='top' delay={300} duration={1500} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '830px', base: '140px' }}>
                        <Heading as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>
                    </Box>
                </RevealWrapper>

                <RevealWrapper origin='top' delay={300} duration={1530} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale,
                        multi-cloud infrastructures.
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='top' delay={300} duration={1560} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the
                        entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency
                        management, etc.
                    </Text>
                </RevealWrapper>

                {/*Course Outlines */}

                <RevealWrapper origin='top' delay={300} duration={1580} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '890px', base: '140px' }}>
                        <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>
                    </Box>
                </RevealWrapper>

                {/*1st Task*/}

                <RevealWrapper origin='top' delay={300} duration={1600} distance='500px' reset={true}>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        <Link href='https://developer.hashicorp.com/terraform/cdktf' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://developer.hashicorp.com/terraform/cdktf
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>
            </Container>
        </Box>
    )
}
