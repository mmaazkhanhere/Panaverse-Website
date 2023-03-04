'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import cloud from '../../../public/multiCloud.jpg'

export default function Quarter2() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Course Main Headlines */}

                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    Quarter V
                </Heading>
                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    CN-361: Developing Multi-Cloud Apps using CDK for Terraform
                </Heading>
                <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                {/*Image */}
                <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                    <Image style={imageStyles} src={cloud} alt='Multiple Cloud' />
                </Center>

                {/*Course Description} */}

                <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    Terraform lets you use the same workflow to manage multiple providers and handle cross-cloud dependencies. This simplifies management and orchestration for large-scale,
                    multi-cloud infrastructures.
                </Text>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming languages to define and provision infrastructure. This gives you access to the
                    entire Terraform ecosystem without learning HashiCorp Configuration Language (HCL) and lets you leverage the power of your existing toolchain for testing, dependency
                    management, etc.
                </Text>

                {/*Course Outlines */}

                <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>

                {/*1st Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. CDK for Terraform</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    <Link href='https://developer.hashicorp.com/terraform/cdktf' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://developer.hashicorp.com/terraform/cdktf
                        </Text>
                    </Link>
                </Text>
            </Container>
        </Box>
    )
}
