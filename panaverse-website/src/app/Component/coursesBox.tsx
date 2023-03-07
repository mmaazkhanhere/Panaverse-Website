import React from 'react'
import { Box, Text, Button, Image, SimpleGrid, Container, Center } from '@chakra-ui/react'
import Link from 'next/link'
import { RevealWrapper } from 'next-reveal'

export default function CourseBox(prop: any) {

    return (
        <RevealWrapper origin='left' delay={500} duration={prop.time} distance='500px' reset={true} >

            <Box borderRadius='20px' bgColor='rgba(205, 227, 243, 1)' mt='20px' >
                <Container maxW={1400} maxH={300}>
                    <SimpleGrid templateRows='repeat(3)'>

                        <Box pt={{ lg: '10px', base: '5px' }}>
                            <Center>
                                <Image mixBlendMode='darken' src={prop.src} alt='Image' width={{ base: '40px', lg: '80px' }} height={{ base: '30x', lg: '75px' }} />
                            </Center>
                        </Box>

                        <Box textAlign='center' pt={{ lg: '10px', base: '5px' }}>
                            <Text fontWeight='bold' fontSize={{ base: 'xs', lg: 'sm' }}>{prop.heading1}</Text>
                            <Text fontSize={{ base: '10px', lg: '13px' }}>{prop.text1}</Text>

                            <Text fontWeight='bold' fontSize={{ base: 'xs', lg: 'sm' }}>{prop.heading2}</Text>
                            <Text fontSize={{ base: '10px', lg: '13px' }}>{prop.text2}</Text>

                        </Box>

                        <Box pt='5px'>
                            <Center>
                                <Link href={prop.href} target="_blank" rel="noopener noreferrer">
                                    <Button borderRadius='20px' size={{ lg: 'sm', base: 'xs' }} bgColor='black' textColor='white' >
                                        Learn More
                                    </Button>
                                </Link>
                            </Center>
                        </Box>
                    </SimpleGrid>
                </Container>
            </Box>
        </RevealWrapper>

    )
}
