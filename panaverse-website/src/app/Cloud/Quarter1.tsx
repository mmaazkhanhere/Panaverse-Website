'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import CKD from '../../../public/CKD.png'

export default function Quarter1() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Course Main Headlines */}

                <Heading pt='10px' textAlign='center' size={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>Cloud-Native Computing Specialisation </Heading>
                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    Quarter IV
                </Heading>
                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    AI-361: Deep Learning and MLOps
                </Heading>
                <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                {/*Image */}
                <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                    <Image style={imageStyles} src={CKD} alt='Kubernetes Developer' />
                </Center>

                {/*Course Description} */}

                <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage of
                    the cloud computing model. Cloud-native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public,
                    private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach
                </Text>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    These techniques enable loosely coupled systems that are resilient, manageable, and observable. Combined with robust automation, they allow engineers to make
                    high-impact changes frequently and predictably with minimal toil.
                </Text>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    Kubernetes is an open-source system for automating the deployment, scaling, and management of containerized applications. In this course, you will learn how to develop
                    cloud applications using cloud-native technologies like Containers, Kubernetes, and CDK for Kubernetes
                </Text>

                {/*Course Outlines */}

                <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>

                {/*1st Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Kubernetes: Up and Running Dive into the Future of Infrastructure 3rd Edition</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - DEep Learning with Python, Second Edition
                    <br />
                    <Link href='https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3
                        </Text>
                    </Link>
                </Text>

                {/*2 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Machine Learning Engineering for Production (MLOps) using Terraform for CDK </Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    -Cloud Development Kit for Kubernetes
                    <br />
                    <Link href='https://cdk8s.io/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://cdk8s.io/
                        </Text>
                    </Link>
                </Text>
            </Container>
        </Box>
    )
}
