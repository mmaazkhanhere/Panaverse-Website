'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import DL from '../../../public/deepLearning.jpeg'

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
                    AI-361: Deep Learning and MLOps
                </Heading>
                <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                {/*Image */}
                <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                    <Image style={imageStyles} src={DL} alt='Aritifical Intelligence' />
                </Center>

                {/*Course Description} */}

                <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    This course will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge
                    AI technology. We will finish the program by learning how to envision, create, and maintain integrated systems that run constantly in production. Production systems
                    must manage constantly changing data, in stark contrast to typical machine learning modeling. The production system must also operate continuously at the lowest possible
                    cost while delivering the highest possible performance.
                </Text>

                {/*Course Outlines */}

                <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>

                {/*1st Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Deep Learning with Tensorflow</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - DEep Learning with Python, Second Edition
                    <br />
                    <Link href='https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2
                        </Text>
                    </Link>
                </Text>

                {/*2 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Machine Learning Engineering for Production (MLOps) using Terraform for CDK </Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - A Comprehensive Guide to MLOps Terraform: Infrastructure As Code(IaC)
                    <br />
                    <Link href='https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351
                        </Text>
                    </Link>

                </Text>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - MLOps leveraging AWS SageMaker and Terraform
                    <br />
                    <Link href='https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://towardsdatascience.com/mlops-leveraging-aws-sagemaker-terraform-and-gitlab-e7d97eaa6dce
                        </Text>
                    </Link>
                </Text>
            </Container>
        </Box>
    )
}
