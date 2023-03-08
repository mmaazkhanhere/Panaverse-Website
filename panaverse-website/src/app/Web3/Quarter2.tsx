

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import metaverse from '../../../public/metaverseExp.webp'
import { RevealWrapper } from 'next-reveal'

export default function Quarter2() {

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(189, 170, 171, 0.5)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Quarter Heading */}

                <RevealWrapper origin='top' delay={300} duration={1000} distance='500px' reset={true}>
                    <Box mt='15px' mr={{ lg: '580px', base: '30px' }} ml={{ base: '30px', lg: '580px' }}>
                        <Center>
                            <Heading bgColor='rgba(120, 91, 92)' textColor='white' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                Quarter V
                            </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Course Heading */}

                <RevealWrapper origin='top' delay={300} duration={1100} distance='500px' reset={true}>

                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                        <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
                        </Heading>
                    </Box>
                </RevealWrapper>

                {/*Week Duration */}

                <RevealWrapper origin='top' delay={300} duration={1200} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '420px', base: '30px' }} ml={{ base: '30px', lg: '420px' }}>
                        <Heading textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>
                    </Box>
                </RevealWrapper>

                {/*Image */}

                <RevealWrapper origin='top' delay={300} duration={1300} distance='500px' reset={true}>
                    <Center mb={10} pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                        <Image src={metaverse} alt='Metaverse' />
                    </Center>
                </RevealWrapper>

                {/*Course Description} */}

                <RevealWrapper origin='top' delay={300} duration={1350} distance='500px' reset={true}>
                    <Heading mt='25px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>
                </RevealWrapper>

                <RevealWrapper origin='top' delay={300} duration={1370} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        The Web is the Metaverse. The metaverse requires an infrastructure that connects all of the metaverses so that we can travel between them. This is only achievable with
                        open web-based metaverses. The internet and its browsers are magical. Federated but linked experiences connect pages, people, technology, businesses, standards, and
                        nations. It is unlike anything else. The metaverse should replicate the best qualities of the web - it should just be the web. We just have to extend online responsive
                        design from mobile to desktop to 3D, Augmented Reality, and Virtual Reality. This course will teach you how to build the Open Social Spatial Web with WebXR and WebGPU
                        technologies
                    </Text>
                </RevealWrapper>

                {/*Course Outlines */}

                <RevealWrapper origin='top' delay={300} duration={1390} distance='500px' reset={true}>
                    <Heading mt='25px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>
                </RevealWrapper>

                {/*1st Task*/}

                <RevealWrapper origin='top' delay={300} duration={1400} distance='500px' reset={true}>

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Open Metaverse Web Development </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Open Metaverse Learning Repo
                        <br />
                        <Link href='https://github.com/panaverse/metaverse-web' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://github.com/panaverse/metaverse-web
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

                {/*2 Task*/}

                <RevealWrapper origin='top' delay={300} duration={1410} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Blender 3D asset Creation for the Metaverse (Remote Zoom Class)</Heading>

                    <Text pt='10px' size={{ base: 'xs', lg: 'md' }}>Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe,
                        Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Blender 3.0 Beginner Tutorial
                        <br />
                        <Link href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='top' delay={300} duration={1420} distance='500px' reset={true}>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Blender Projects Textbook: Blender by Example 2nd Edition
                        <br />
                        <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='top' delay={300} duration={1430} distance='500px' reset={true}>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Blender Textbook: The Complete Guide to Blender Graphics: Computer Modeling & Animation 7th Edition by John M. Blain
                        <br />
                        <Link href='https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.amazon.com/Complete-Guide-Blender-Graphics-Animation/dp/103212167X/ref=sr_1_5
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

                {/*Assignments */}

                <RevealWrapper origin='top' delay={300} duration={1480} distance='500px' reset={true}>
                    <Heading mt='25px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' as='u' size={{ base: 'sm', lg: 'lg' }}>Assignments</Heading>

                    {/*1 Assignment*/}

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Assignment 1 </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Build a 3D Donut using Blender 3 as shown in these video tutorials
                        <br />
                        <Link href='https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD
                            </Text>
                        </Link>
                    </Text>

                    {/*2 Assignment*/}

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Assignment 2 </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        -Build a Viking Scene using Blender 3 as shown in chapter 2 of the Book Blender by Example 2nd Edition
                        <br />
                        <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                            </Text>
                        </Link>
                    </Text>

                    {/*3 Assignment*/}

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Assignment 3 </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Modeling a Time Machine using Blender 3 as shown in chapters 3 and 4 of the Book Blender by Example 2nd Edition
                        <br />
                        <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                            </Text>
                        </Link>
                    </Text>

                    {/*4 Assignment*/}

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Assignment 4 </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Build a Modern Kitchen using Blender 3 as shown in chapters 5, 6, and 7 of the Book Blender by Example 2nd Edition
                        <br />
                        <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                            </Text>
                        </Link>
                    </Text>

                    {/*5 Assignment*/}

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Assignment 5 </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Illustrating an Alien Hero with Grease Pencil as shown in chapter 8 of the Book Blender by Example 2nd Edition
                        <br />
                        <Link href='https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.packtpub.com/product/blender-3d-by-example-second-edition/9781789612561
                            </Text>
                        </Link>
                    </Text>

                    {/*6 Assignment*/}

                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>Assignment 1 </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Build a 3D Sword in the Stone using Blender 3 as shown in these video tutorials
                        <br />
                        <Link href='https://www.youtube.com/watch?v=bpvh-9H8S1g' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.youtube.com/watch?v=bpvh-9H8S1g
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

            </Container>
        </Box>
    )
}
