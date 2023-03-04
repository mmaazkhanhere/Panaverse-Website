'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import C from '../../../public/C.jpg'

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
                    AC-361: Emvedded Programming using C and Rust
                </Heading>
                <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                {/*Image */}
                <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                    <Image style={imageStyles} src={C} alt='C Programming' />
                </Center>

                {/*Course Description} */}

                <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    This is an introductory course about using the C and Rust Programming Languages on “Bare Metal” embedded systems, such as Microcontrollers. We will start by
                    introducing embedded systems and move on to learn the  C++ and Rust programming languages. We will learn about basic programming concepts using C and Rust, then we will
                    explore key concepts in electronics, microcontrollers, and embedded programming. It is a fast-paced,  thorough introduction to programming with C and Rust that will
                    have you writing programs, solving problems, burning your code on microcontrollers,  playing with GPIOs, and making things that work in no time.
                </Text>

                {/*Course Outlines */}

                <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>

                {/*1st Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Introduction to the Internet of Things and Embedded Systems (Weeks 1 and 2)</Heading>
                <Link href='https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar' target="_blank" rel="noopener noreferrer">
                    <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                        https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar
                    </Text>
                </Link>

                <br />
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Embdedded Systems
                </Text>

                <br />
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Hardware and Software for IoT
                </Text>

                <br />
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Edge and Cloud Computing
                </Text>

                <br />
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - IoT+AI+Blockchain: The Fourth Industrial Revolution has begun
                </Text>
                <br />
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Metaverse and IoT
                </Text>

                {/*2 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. The C Reference Book: The C programming language</Heading>
                <Link href='https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing' target="_blank" rel="noopener noreferrer">
                    <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                        https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing
                    </Text>
                </Link>
                <br />

                {/*3 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3. The C Reference Book: The C programming language</Heading>
                <Text>
                    -C environment Setup for (Windows, Linux, and Mac OS systems)
                    <br />
                    Chapters 1-2 of  “The C programming language”

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        1. Variable names types
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Data types and sizes
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Constants
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Arithmetic operations
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Logical and relational operators
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Type Conversion
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Bitwise operators
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Conditional expression
                    </Text>
                </Text>

                {/*Task 4 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4. C Programming Part 2 (Week 6 and 7)</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Control flow statements (else if, loops, switch, break continue)
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Function and Program structure(Returning and non-returning, scope rules, Recursion)
                </Text>

                {/*Task 5 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>5. Introduction to Embedded Systems (Part 1)</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Arduino IDE Installation and ENV setup for ESP8266
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Burning your first code on ESP8266
                </Text>

                {/*Task 6 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>6. Introduction to Embedded Systems (Part 2)</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Chapter Chapters 2-5 of  “Internet of things with ESP8266”
                </Text>

                {/*Task 7 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>7. Embedded Programming using Rust (Extra Weeks in the Course)</Heading>
                <Link href='https://www.rust-lang.org/what/embedded' target="_blank" rel="noopener noreferrer">
                    <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                        https://www.rust-lang.org/what/embedded
                    </Text>
                </Link>
                <br />
                <Link href='https://crates.io/crates/esp8266' target="_blank" rel="noopener noreferrer">
                    <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                        https://crates.io/crates/esp8266
                    </Text>
                </Link>
            </Container>
        </Box >
    )
}
