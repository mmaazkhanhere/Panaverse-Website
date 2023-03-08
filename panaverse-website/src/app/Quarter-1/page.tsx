'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import web from '../../../public/webDev.png'
import { RevealWrapper } from 'next-reveal'

export default function Quarter1() {

    return (
        <>
            <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(189, 170, 171, 0.5)' borderRadius={{ base: '20px', lg: '30px' }}
                mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
                <Container maxW={1800}>

                    {/*Quarter Heading */}

                    <RevealWrapper origin='left' delay={300} duration={1000} distance='500px' reset={true}>
                        <Box mt='15px' mr={{ lg: '580px', base: '30px' }} ml={{ base: '30px', lg: '580px' }}>
                            <Center>
                                <Heading bgColor='rgba(120, 91, 92)' textColor='white' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                    Quarter I
                                </Heading>
                            </Center>
                        </Box>
                    </RevealWrapper>

                    {/*Course Heading */}

                    <RevealWrapper origin='left' delay={300} duration={1100} distance='500px' reset={true}>
                        <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                            <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                                CS-101: Object-Oriented Programming using TypeScript
                            </Heading>
                        </Box>
                    </RevealWrapper>

                    {/*Week Duration */}

                    <RevealWrapper origin='left' delay={300} duration={1200} distance='500px' reset={true}>
                        <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '420px', base: '30px' }} ml={{ base: '30px', lg: '420px' }}>
                            <Heading textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>
                        </Box>
                    </RevealWrapper>

                    {/*Image */}

                    <RevealWrapper origin='left' delay={300} duration={1250} distance='500px' reset={true}>
                        <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                            <Image src={web} alt='Web Developmennt Image' />
                        </Center>
                    </RevealWrapper>

                    {/*Course Description} */}

                    <RevealWrapper origin='left' delay={300} duration={1300} distance='500px' reset={true}>

                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                        <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                            We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web
                            trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
                        </Text>
                    </RevealWrapper>

                    {/*Course Outlines */}

                    <RevealWrapper origin='left' delay={300} duration={1350} distance='500px' reset={true}>
                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>
                    </RevealWrapper>

                    {/*1st Task*/}

                    <RevealWrapper origin='left' delay={300} duration={1370} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. HTML and CSS (Homework)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Learn HTML by Hira Khan (Watch Recorded Videos)
                            <br />
                            <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1380} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                            <br />
                            <Link href='https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*2nd Task */}

                    <RevealWrapper origin='left' delay={300} duration={1400} distance='500px' reset={true}>

                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Web3 3.0 and Metaverse Theory</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Introduction to Panaverse DAO
                            <br />
                            <Link href='https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1410} distance='500px' reset={true}>

                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Web 3.0 User Guide
                            <br />
                            <Link href='https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1420} distance='500px' reset={true}>

                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Complete Web 3 Assignments included in the Web 3.0 User Guide
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1430} distance='500px' reset={true}>

                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Virtual and Augmented Metaverse User Guide
                            <br />
                            <Link href='https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*3rd Task */}

                    <RevealWrapper origin='left' delay={300} duration={1450} distance='500px' reset={true}>

                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3. Fundamental of TypeScript</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - TypeScript Presentation
                            <br />
                            <Link href='https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1460} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Getting Started Exercises with TypeScript and Node.js
                            <br />
                            <Link href='https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*4th Task */}
                    <RevealWrapper origin='left' delay={300} duration={1470} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4. Object-Oriented Programming with the TypeScript</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Chapter 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript
                            <br />
                            <Link href='https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1 ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1480} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - In Class Companion projects and articles for Learning TypeScript
                            <br />
                            <Link href='https://www.learningtypescript.com/ ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.learningtypescript.com/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1490} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Homework Project
                            <br />
                            <Link href='https://github.com/panaverse/typescript-node-projects ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://github.com/panaverse/typescript-node-projects
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*5th Task */}

                    <RevealWrapper origin='left' delay={300} duration={1500} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4. TypeScript for React</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Minimal TypeScript Crash Courses for React
                            <br />
                            <Link href='https://profy.dev/article/react-typescript ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://profy.dev/article/react-typescript
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*Quarter Break Assignments*/}

                    <RevealWrapper origin='left' delay={300} duration={1650} distance='500px' reset={true}>
                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Quarter Break Assignments</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - During the quarter break, students would be required to complete following assignments
                            <br />
                            <Link href=' https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    1. https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
                                </Text>
                            </Link>

                            <br />
                            <Link href=' https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app  ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    2. https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app
                                </Text>
                            </Link>

                            <br />
                            <Link href=' https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    3. https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
                                </Text>
                            </Link>
                        </Text>

                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document. The best-developed website will be hosted on
                            panaverse domain
                            <br />
                            <Link href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
                                </Text>
                            </Link>
                        </Text>

                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document. The best-developed website
                            will be hosted on piaic domain
                            <br />
                            <Link href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*Quizzes */}

                    <RevealWrapper origin='left' delay={300} duration={1750} distance='500px' reset={true}>
                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Quizzes</Heading>
                        <Text Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Fundamentals of JavaScript and Node.js Quiz
                            <br />
                            - Fundamentals of TypeScript Quiz
                            <br />
                            - Fundamental of Version Control with Git Quiz
                            <br />
                            - TypeScript Proficiency
                        </Text>
                        /</RevealWrapper>

                </Container>
            </Box >
        </>
    )
}

