

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import voice from '../../../public/voice.webp'
import { RevealWrapper } from 'next-reveal'

export default function Quarter1() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(189, 170, 171, 0.5)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Course Main Headlines */}

                <RevealWrapper origin='right' delay={300} duration={1000} distance='500px' reset={true}>
                    <Box bgColor='rgba(120, 91, 92)' borderRadius='30px' mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }}>
                        <Center>
                            <Heading textColor='white' textAlign='center' size={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>Ambient Computing and IoT Specialisation</Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Quarter Heading */}

                <RevealWrapper origin='right' delay={300} duration={1100} distance='500px' reset={true}>
                    <Box mt='15px' mr={{ lg: '580px', base: '30px' }} ml={{ base: '30px', lg: '580px' }}>
                        <Center>
                            <Heading textColor='white' bgColor='rgba(120, 91, 92)' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                Quarter IV
                            </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Course Heading */}

                <RevealWrapper origin='right' delay={300} duration={1200} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                        <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }} textColor='white'>
                            AC-351: Ambient Computing with Voice Assistants and Matter Devices
                        </Heading>
                    </Box>
                </RevealWrapper>

                {/*Image */}

                <RevealWrapper origin='right' delay={300} duration={1300} distance='500px' reset={true}>
                    <Center mb={10} pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                        <Image style={{ imageStyles }} src={voice} alt='Kubernetes Developer' />
                    </Center>
                </RevealWrapper>

                {/*Course Description} */}

                <RevealWrapper origin='right' delay={300} duration={1400} distance='500px' reset={true}>
                    <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>
                </RevealWrapper>

                <RevealWrapper origin='right' delay={300} duration={1420} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing power into our everyday lives in a way that is embedded into
                        our surroundings - invisible but useful. In a multi-device world, people dont want to spend their life fussing with technology. An ambient approach gets the tech out of
                        your way so you can live your life while getting the help you need. It doesnt matter what device you are using, what context you are in, whether you are talking, typing, or tapping.
                        The technology in your life works together seamlessly. Ambient computing uses all aspects of modern-day technology, including voice assistants, artificial intelligence, sensors,
                        connectivity, cloud computing and more
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='right' delay={300} duration={1440} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        If you were thinking that the IoT and ambient computing sound a lot alike, you are not wrong; the two concepts are intertwined. IoT refers to the vast array of devices
                        that connect to the internet to optimize their functionality, like smart sensors and smart speakers: ambient computing builds on that. Ambient computing focuses on the
                        interaction between these devices once they are connected.
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='right' delay={300} duration={1460} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Matter, the next-generation smart home standard, solves many smart home pain points while bringing all our IoT devices together. Some of the biggest tech companies are
                        working together to make Matter a unified protocol for future smart homes. These companies include Apple, Amazon, and Google. This means Apple HomeKit, Amazon Alexa,
                        Samsung SmartThings, Google Nest, and Samsung SmartThings will support the Matter standard by default for all new devices.
                    </Text>
                </RevealWrapper>

                {/*Course Outlines */}

                <RevealWrapper origin='right' delay={300} duration={1500} distance='500px' reset={true}>
                    <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>
                </RevealWrapper>

                {/*1st Task*/}

                <RevealWrapper origin='right' delay={300} duration={1520} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Alexa Skill Development</Heading>
                    <Link href='https://developer.amazon.com/en-US/alexa' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://developer.amazon.com/en-US/alexa
                        </Text>
                    </Link>
                </RevealWrapper>

                {/*2 Task*/}

                <RevealWrapper origin='right' delay={300} duration={1540} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Alexa with Matter Protocol</Heading>
                    <Link href='https://developer.amazon.com/en-US/alexa/matter' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://developer.amazon.com/en-US/alexa/matter
                        </Text>
                    </Link>
                </RevealWrapper>

                <br />
                <RevealWrapper origin='right' delay={300} duration={1560} distance='500px' reset={true}>
                    <Link href='https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/07/alexa-live-2022-ack-sdk-matter.html
                        </Text>
                    </Link>
                </RevealWrapper>

            </Container>
        </Box >
    )
}
