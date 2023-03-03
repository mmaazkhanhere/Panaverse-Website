import React from 'react'
import { Box, Heading, Text, Button, Image, SimpleGrid, Container, Center } from '@chakra-ui/react'
import Link from 'next/link'

export default function CourseBox(prop: any) {

    return (

        <Box borderRadius='20px' bgColor='rgba(205, 227, 243, 1)' mt='20px'>
            <Container maxW={1600}>
                <SimpleGrid templateRows='repeat(3,0.5fr)'>

                    <Box pt={{ lg: '20px', base: '10px' }}>
                        <Center>
                            <Image mixBlendMode='darken' src={prop.src} alt='Image' width={{ base: '40px', lg: '80px' }} height={{ base: '35px', lg: '81px' }} />
                        </Center>
                    </Box>

                    <Box textAlign='center' pt={{ lg: '20px', base: '10px' }}>
                        <Text fontWeight='bold' fontSize={{ base: '10px', lg: '13px' }}>{prop.heading1}</Text>
                        <Text fontSize={{ base: '10px', lg: '13px' }}>{prop.text1}</Text>

                        <Text fontWeight='bold' fontSize={{ base: '10px', lg: '13px' }}>{prop.heading2}</Text>
                        <Text fontSize={{ base: '10px', lg: '13px' }}>{prop.text2}</Text>

                    </Box>

                    <Box pt='10px'>
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

    )
}
