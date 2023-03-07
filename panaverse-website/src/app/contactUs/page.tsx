'use client'

import React from 'react'
import { Box, Container, SimpleGrid, Heading, Text, Center, Button, Icon, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaFacebook, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import contact from '../../../public/contact.webp'
import { RevealWrapper } from 'next-reveal'

export default function contactUs() {

    return (
        <Box>
            <Container maxW={1800}>

                <RevealWrapper origin='left' delay={500} duration={1000} reset={true}>
                    <Center> {/*Place Image at the center */}
                        <Image src={contact} alt='Contact Us'></Image>
                    </Center>
                </RevealWrapper>

                <SimpleGrid templateColumns={{ lg: 'repeat(2,1fr)', base: 'repeat(1,1fr)' }}> {/*For creating two or one column helping. One column if small screen and two blocks
                when large screen */}

                    <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
                        mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}> {/*For creating a box at center with different color and
                        rounded corner */}

                        <Center> {/*Placing the Heading at the center which is bold and underlined */}
                            <Heading as='u' fontWeight='bold' pt='10px' size={{ base: 'md', lg: 'lg' }}>Follow Us</Heading>
                        </Center>

                        {/*Facebook Page */}

                        <HStack pl={{ base: '10px', lg: '20px' }} pt='10px'> {/*HStack is used to put the text icon next to each other. */}
                            <Link href='https://www.facebook.com/groups/panaverse' target='_blank'>
                                <Icon pt='10px' as={FaFacebook} boxSize={{ base: '6', lg: '10' }} />
                            </Link>
                            {/*Two link components are used because user can get to the specified link if click either on text or icon */}
                            <Link href='https://www.facebook.com/groups/panaverse' >
                                <Text fontSize={{ lg: '22px', base: '16px' }}>Facebook Page</Text>
                            </Link>
                        </HStack>

                        {/*Youtube Channel */}

                        <HStack pl={{ base: '10px', lg: '20px' }} pt='10px'>
                            <Link href='https://www.youtube.com/@panaverse/streams' target='_blank'>
                                <Icon pt='10px' as={FaYoutube} boxSize={{ base: '6', lg: '10' }} />
                            </Link>
                            <Link href='https://www.youtube.com/@panaverse/streams' >
                                <Text fontSize={{ lg: '22px', base: '16px' }}>Youtube Channel</Text>
                            </Link>
                        </HStack>

                        {/*Twitter Page */}

                        <HStack pl={{ base: '10px', lg: '20px' }} pt='10px' target='_blank'>
                            <Link href='https://twitter.com/Panaverse_edu' >
                                <Icon pt='10px' as={FaTwitter} boxSize={{ base: '6', lg: '10' }} />
                            </Link>
                            <Link href='https://twitter.com/Panaverse_edu' >
                                <Text fontSize={{ lg: '22px', base: '16px' }}>Twitter Page</Text>
                            </Link>
                        </HStack>

                        {/*GitHub Page */}

                        <HStack pl={{ base: '10px', lg: '20px' }} pt='10px' target='_blank'>
                            <Link href='https://github.com/panaverse' >
                                <Icon pt='10px' as={FaGithub} boxSize={{ base: '6', lg: '10' }} />
                            </Link>
                            <Link href='https://github.com/panaverse' >
                                <Text fontSize={{ lg: '22px', base: '16px' }}>GitHub</Text>
                            </Link>
                        </HStack>

                    </Box>

                    <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
                        mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>

                        <Center>
                            <Heading as='u' fontWeight='bold' pt='10px' size={{ base: 'md', lg: 'lg' }}>Get in Touch</Heading>
                        </Center>

                        <HStack pl={{ base: '10px', lg: '20px' }} pt='10px'>
                            <Link href='mailto:education@piaic.com' target='_blank'> {/* 'mailto: ' URL is used to get to new email when clicked upon. It will be opened in new tab */}
                                <Icon pt='10px' as={EmailIcon} boxSize={{ base: '6', lg: '10' }} />
                            </Link>
                            <Link href='mailto:education@piaic.com' target='_blank'>
                                <Text fontSize={{ lg: '22px', base: '16px' }}>education@piaic.com</Text>
                            </Link>
                        </HStack>

                        <HStack pl={{ base: '10px', lg: '20px' }} pt='10px'> {/* 'tel:' URL is used to get to dial phone when clicked on the icon or text */}
                            <Link href='tel:+92 308 222 0203' target='_blank'>
                                <Icon pt='10px' as={PhoneIcon} boxSize={{ base: '6', lg: '10' }} />
                            </Link>
                            <Link href='tel:+92 308 222 0203'>
                                <Text fontSize={{ lg: '22px', base: '16px' }}>+92 308 222 0203</Text>
                            </Link>
                        </HStack>
                    </Box>
                </SimpleGrid >
            </Container >
        </Box >

    )
}
