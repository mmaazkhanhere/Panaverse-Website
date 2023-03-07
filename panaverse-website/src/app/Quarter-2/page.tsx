'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import web2 from '../../../public/web2.webp'
import { RevealWrapper } from 'next-reveal'

export default function Quarter2() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

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
                                    Quarter II
                                </Heading>
                            </Center>
                        </Box>
                    </RevealWrapper>

                    {/*Course Heading */}

                    <RevealWrapper origin='left' delay={300} duration={1100} distance='500px' reset={true}>
                        <Box mt='15px' bgColor='rgba(120, 91, 92)' textColor='white' borderRadius='30px' mr={{ lg: '300px', base: '30px' }} ml={{ base: '30px', lg: '300px' }}>
                            <Heading textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                                W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
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
                            <Image style={imageStyles} src={web2} alt='Web2 Image' />
                        </Center>
                    </RevealWrapper>

                    {/*Course Description} */}

                    <RevealWrapper origin='left' delay={300} duration={1300} distance='500px' reset={true}>

                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1350} distance='500px' reset={true}>

                        <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                            The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud
                            Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies
                            covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS
                            Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                        </Text>
                        /</RevealWrapper>

                    {/*Course Outlines */}
                    <RevealWrapper origin='left' delay={300} duration={1400} distance='500px' reset={true}>
                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>
                    </RevealWrapper>

                    {/*1st Task*/}

                    <RevealWrapper origin='left' delay={300} duration={1410} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Next.js 13 Web Development</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Next 13 Official Documentation
                            <br />
                            <Link href='https://beta.nextjs.org/docs' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://beta.nextjs.org/docs
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1420} distance='500px' reset={true}></RevealWrapper>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Latest Learn React Official Website
                        <br />
                        <Link href='https://beta.reactjs.org/learn ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://beta.reactjs.org/learn
                            </Text>
                        </Link>
                    </Text>

                    <RevealWrapper origin='left' delay={300} duration={1430} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Learn Next.js 13 Learning Repo
                            <br />
                            <Link href='https://github.com/panaverse/learn-nextjs ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://github.com/panaverse/learn-nextjs
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*2nd Task */}

                    <RevealWrapper origin='left' delay={300} duration={1480} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Next.js 13 using Chakra UI (Remote Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - CSS Flexbox Explained - Complete Guide to Flexible Containers and Flex Items
                            <br />
                            <Link href='https://www.freecodecamp.org/news/css-flexbox-complete-guide/' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.freecodecamp.org/news/css-flexbox-complete-guide/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1500} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Chakra UI Docs
                            <br />
                            <Link href='https://chakra-ui.com/getting-started' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://chakra-ui.com/getting-started
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*3nd Task */}

                    <RevealWrapper origin='left' delay={300} duration={1520} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Designing and Prototyping Interfaces with Figma: Learn essential UX/UI design principles by creating interactive prototypes for mobile, tablet, and desktop
                            by Fabio Staiano

                            <br />
                            <Link href='https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.amazon.com/Designing-Prototyping-Interfaces-Figma-interactive/dp/180056418X/ref=sr_1_1_sspa
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1530} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Figma Design Kit for TailwindCSS
                            <br />
                            <Link href='https://www.figma.com/community/file/768809027799962739' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.figma.com/community/file/768809027799962739
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1540} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Chakra UI Figma Kit
                            <br />
                            <Link href='https://www.figma.com/community/file/971408767069651759' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.figma.com/community/file/971408767069651759
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*4 Task */}

                    <RevealWrapper origin='left' delay={300} duration={1590} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4. API Routes with Next.js (Remote Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - API Routes
                            <br />
                            <Link href='https://nextjs.org/docs/api-routes/introduction' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://nextjs.org/docs/api-routes/introduction
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*5 Task */}

                    <RevealWrapper origin='left' delay={300} duration={1640} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>5. APIs with Next.js and tRPC (Remote Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Build a tRPC CRUD API Example with Next.js
                            <br />
                            <Link href='https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://codevoweb.com/build-a-trpc-crud-api-example-with-next-js/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1680} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Stop building REST APIs for your Next.js apps, use tRPC instead
                            <br />
                            <Link href='https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*6 Task */}
                    <RevealWrapper origin='left' delay={300} duration={1720} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>6. SQL and Prisma (Remote  Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Start from scratch with relational databases
                            <br />
                            <Link href='https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1730} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - SQL For Beginners Video Tutorial
                            <br />
                            <Link href='https://www.youtube.com/watch?v=5hzZtqCNQKk' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.youtube.com/watch?v=5hzZtqCNQKk
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1740} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Database Management Systems and SQL – Tutorial for Beginners
                            <br />
                            <Link href='Database Management Systems and SQL – Tutorial for Beginners' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    Database Management Systems and SQL – Tutorial for Beginners
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*7 Task */}

                    <RevealWrapper origin='left' delay={300} duration={1780} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>7. Next.js 13 using TailwindCSS (Remote Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Modern CSS with Tailwind, Second Edition by Noel Rappin
                            <br />
                            <Link href='https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://pragprog.com/titles/tailwind2/modern-css-with-tailwind-second-edition/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*8 Task */}

                    <RevealWrapper origin='left' delay={300} duration={1820} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>8. AWS Application Composer (Remote Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - What is AWS Application Composer?
                            <br />
                            <Link href='https://www.youtube.com/watch?v=BujE_tik5r8' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.youtube.com/watch?v=BujE_tik5r8
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1830} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Event-driven apps with AWS Application Composer
                            <br />
                            <Link href='https://www.youtube.com/watch?v=p411uh363jQ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://www.youtube.com/watch?v=p411uh363jQ
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1840} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Visually design and build serverless applications quickly
                            <br />
                            <Link href='https://aws.amazon.com/application-composer/' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://aws.amazon.com/application-composer/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1850} distance='500px' reset={true}>
                        <Heading as='u' pt='10px' size={{ base: 'xs', lg: 'md' }}>Must Have: Create Free AWS Account</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - AWS Free Tier
                            <br />
                            <Link href='https://aws.amazon.com/free/' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://aws.amazon.com/free/
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1860} distance='500px' reset={true}>
                        <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                            Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan
                            Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card
                            will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.
                        </Text>
                    </RevealWrapper>

                    <RevealWrapper origin='left' delay={300} duration={1870} distance='500px' reset={true}>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            You can also get a $300 credit
                            <br />
                            <Link href='https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*9 Task */}

                    <RevealWrapper origin='left' delay={300} duration={1880} distance='500px' reset={true}>
                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>9. Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</Heading>
                        <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                            - Learn Multicloud Serverless API Development using CDK Terraform in Baby Steps
                            <br />
                            <Link href='https://github.com/panaverse/learn-multicloud-api-development ' target="_blank" rel="noopener noreferrer">
                                <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                    https://github.com/panaverse/learn-multicloud-api-development
                                </Text>
                            </Link>
                        </Text>
                    </RevealWrapper>

                    {/*Web 2.0 Projects */}

                    <RevealWrapper origin='left' delay={300} duration={1920} distance='500px' reset={true}>
                        <Heading bgColor='rgba(120, 91, 92)' textColor='white' borderRadius={30} mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Web 2.0 Projects</Heading>

                        {/*1 Web Project */}

                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Next.js Projects</Heading>
                        <Link href='https://github.com/panaverse/nextjs-projects' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://github.com/panaverse/nextjs-projects
                            </Text>
                        </Link>

                        {/*2 Web Project */}

                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Styling Next.js Projects using TailwindCSS and Chakra UI</Heading>
                        <Link href='https://github.com/panaverse/styling-nextjs-projects ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://github.com/panaverse/styling-nextjs-projects
                            </Text>
                        </Link>

                        {/*3 Web Project */}

                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3. Todo Full-Stack App</Heading>
                        <Link href='https://github.com/ogzhanolguncu/min-todo' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://github.com/ogzhanolguncu/min-todo
                            </Text>
                        </Link>

                        {/*4 Web Project */}

                        <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4. Build a Twitter Clone</Heading>
                        <Link href='https://www.youtube.com/watch?v=nzJsYJPCc80' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.youtube.com/watch?v=nzJsYJPCc80
                            </Text>
                        </Link>
                    </RevealWrapper>

                </Container>
            </Box>
        </>
    )
}
