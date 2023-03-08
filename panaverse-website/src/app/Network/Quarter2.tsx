
import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import network from '../../../public/networkProg.png'
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

                <RevealWrapper origin='right' delay={300} duration={1100} distance='500px' reset={true}>
                    <Box mt='15px' mr={{ lg: '580px', base: '30px' }} ml={{ base: '30px', lg: '580px' }}>
                        <Center>
                            <Heading bgColor='rgba(120, 91, 92)' textColor='white' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                Quarter V
                            </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Course Heading */}

                <RevealWrapper origin='right' delay={300} duration={1200} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                        <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                            NPA-361: Network Programmability and Automation
                        </Heading>
                    </Box>
                </RevealWrapper>

                {/*Week Duration */}

                <RevealWrapper origin='right' delay={300} duration={1300} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '420px', base: '30px' }} ml={{ base: '30px', lg: '420px' }}>
                        <Heading textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>
                    </Box>
                </RevealWrapper>

                {/*Image */}
                <RevealWrapper origin='right' delay={300} duration={1400} distance='500px' reset={true}>
                    <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                        <Image style={imageStyles} src={network} alt='network' />
                    </Center>
                </RevealWrapper>

                {/*Course Description} */}

                <RevealWrapper origin='right' delay={300} duration={1400} distance='500px' reset={true}>
                    <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Traditional network management techniques cannt be effectively automated and dont scale well. By implementing network programmability based on Application Programming
                        Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.
                    </Text>
                </RevealWrapper>

                {/*1st Task*/}

                <RevealWrapper origin='right' delay={300} duration={1500} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Textbook</Heading>
                    <Link href='https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3
                        </Text>
                    </Link>
                </RevealWrapper>
            </Container>
        </Box >
    )
}
