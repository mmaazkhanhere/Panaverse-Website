
import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import AI from '../../../public/AiCourse.png'
import { RevealWrapper } from 'next-reveal'

export default function Quarter1() {

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(189, 170, 171, 0.5)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Course Main Headlines */}

                <RevealWrapper origin='right' delay={300} duration={1000} distance='500px' reset={true}>
                    <Box bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }}>
                        <Center>
                            <Heading textAlign='center' size={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>Artificial Intelligence (AI) and Deep Learning Specialisation </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Quarter Heading */}

                <RevealWrapper origin='right' delay={300} duration={1100} distance='500px' reset={true}>
                    <Box mt='15px' mr={{ lg: '580px', base: '30px' }} ml={{ base: '30px', lg: '580px' }}>
                        <Center>
                            <Heading bgColor='rgba(120, 91, 92)' textColor='white' textAlign='center' size={{ base: 'lg', lg: 'xl' }} borderRadius='30px' >
                                Quarter IV
                            </Heading>
                        </Center>
                    </Box>
                </RevealWrapper>

                {/*Course Heading */}

                <RevealWrapper origin='right' delay={300} duration={1200} distance='500px' reset={true}>

                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                        <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                            AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
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
                        <Image src={AI} alt='Aritifical Intelligence' />
                    </Center>
                </RevealWrapper>

                {/*Course Description} */}

                <RevealWrapper origin='right' delay={300} duration={1500} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '830px', base: '140px' }}>
                        <Heading as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>
                    </Box>
                </RevealWrapper>

                <RevealWrapper origin='right' delay={300} duration={1550} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. The AI and Deep Learning Specialization is a
                        foundational program that will aid in your comprehension of deep learning potential, difficulties, and effects as well as equip you to take part in the creation of
                        cutting-edge AI technology.
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='right' delay={300} duration={1600} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        We will start this course by understanding the fundamentals and use cases for AI and move on to building next-gen intelligent apps using OpenAI’s powerful models and
                        Next.js 13
                    </Text>
                </RevealWrapper>

                <RevealWrapper origin='right' delay={300} duration={1650} distance='500px' reset={true}>
                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        We will conclude the course by learning about basic programming concepts using Python, such as lists, dictionaries, classes, functions, and loops, and practice writing
                        clean and readable code with exercises for each topic. We will also learn how to make your programs interactive and how to test your code safely before adding it to a
                        project. It is a fast-paced, thorough introduction to programming with Python 3.10+ that will have you writing programs, solving problems, and making things that work
                        in no time. In this quarter we will also learn Git, the distributed version control system. We will also review Git-based GitHub services
                    </Text>
                </RevealWrapper>

                {/*Course Outlines */}

                <RevealWrapper origin='right' delay={300} duration={1700} distance='500px' reset={true}>
                    <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '890px', base: '140px' }}>
                        <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>
                    </Box>
                </RevealWrapper>

                {/*1st Task*/}

                <RevealWrapper origin='right' delay={300} duration={1710} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Introduction to Machine Learning, Data Science, and AI</Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - AI for Everyone
                        <br />
                        <Link href='https://www.coursera.org/learn/ai-for-everyone' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.coursera.org/learn/ai-for-everyone
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

                {/*2 Task*/}

                <RevealWrapper origin='right' delay={300} duration={1720} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Building Next-Gen Intelligent Apps with OpenAIs Powerful Models. </Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - We will cover GPT-4, ChatGPT, etc. and Next.js 13
                        <br />
                        <Link href='https://openai.com/api/' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://openai.com/api/
                            </Text>
                        </Link>
                        <br />

                        <Link href='https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>
                {/*3 Task*/}

                <RevealWrapper origin='right' delay={300} duration={1730} distance='500px' reset={true}>
                    <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3. Python Crash Course for TypeScript Developers</Heading>
                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition
                        <br />
                        <Link href='https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5
                            </Text>
                        </Link>
                    </Text>
                </RevealWrapper>

            </Container>

        </Box>
    )
}
