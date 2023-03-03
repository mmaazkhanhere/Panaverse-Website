'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import web2 from '../../../public/web2.webp'

export default function Quarter2() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <>
            <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
                mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
                <Container maxW={1800}>
                    {/*Main Headings */}

                    <Heading pt='10px' textAlign='center' size={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>Quarter II (Core) </Heading>
                    <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                    </Heading>
                    <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                    {/*Image */}
                    <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                        <Image style={imageStyles} src={web2} alt='Web2 Image' />
                    </Center>

                    {/*Course Description} */}

                    <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud
                        Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies
                        covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS
                        Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                    </Text>

                    {/*Course Outlines */}

                    <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>

                    {/*1st Task*/}

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

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Latest Learn React Official Website
                        <br />
                        <Link href='https://beta.reactjs.org/learn ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://beta.reactjs.org/learn
                            </Text>
                        </Link>
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Learn Next.js 13 Learning Repo
                        <br />
                        <Link href='https://github.com/panaverse/learn-nextjs ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://github.com/panaverse/learn-nextjs
                            </Text>
                        </Link>
                    </Text>

                    {/*2nd Task */}

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

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Chakra UI Docs
                        <br />
                        <Link href='https://chakra-ui.com/getting-started' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://chakra-ui.com/getting-started
                            </Text>
                        </Link>
                    </Text>

                    {/*3nd Task */}

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

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Figma Design Kit for TailwindCSS
                        <br />
                        <Link href='https://www.figma.com/community/file/768809027799962739' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.figma.com/community/file/768809027799962739
                            </Text>
                        </Link>
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Chakra UI Figma Kit
                        <br />
                        <Link href='https://www.figma.com/community/file/971408767069651759' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.figma.com/community/file/971408767069651759
                            </Text>
                        </Link>
                    </Text>

                    {/*4 Task */}

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

                    {/*5 Task */}

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

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Stop building REST APIs for your Next.js apps, use tRPC instead
                        <br />
                        <Link href='https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://brockherion.dev/blog/posts/stop-building-rest-apis-for-your-next-apps/
                            </Text>
                        </Link>
                    </Text>

                    {/*6 Task */}

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

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - SQL For Beginners Video Tutorial
                        <br />
                        <Link href='https://www.youtube.com/watch?v=5hzZtqCNQKk' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.youtube.com/watch?v=5hzZtqCNQKk
                            </Text>
                        </Link>
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Database Management Systems and SQL – Tutorial for Beginners
                        <br />
                        <Link href='Database Management Systems and SQL – Tutorial for Beginners' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                Database Management Systems and SQL – Tutorial for Beginners
                            </Text>
                        </Link>
                    </Text>

                    {/*7 Task */}

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

                    {/*8 Task */}

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

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Event-driven apps with AWS Application Composer
                        <br />
                        <Link href='https://www.youtube.com/watch?v=p411uh363jQ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://www.youtube.com/watch?v=p411uh363jQ
                            </Text>
                        </Link>
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - Visually design and build serverless applications quickly
                        <br />
                        <Link href='https://aws.amazon.com/application-composer/' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://aws.amazon.com/application-composer/
                            </Text>
                        </Link>
                    </Text>

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

                    <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                        Note: For AWS Free Tier you will need a credit or debit card. The easiest way for Pakistani students is to open a bank account with Meezan Bank. Open a Meezan
                        Aasan Account if you have no earning proof. Meezan Bank will charge Rs. 1100 for ATM Debit Card and there is a requirement of Rs. 100 minimum deposit. The card
                        will be delivered in a few weeks. Our students have reported that this Debit card works with AWS.
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        You can also get a $300 credit
                        <br />
                        <Link href='https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html ' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://pages.awscloud.com/adoptf90d_GLOBAL_POC-credits.html
                            </Text>
                        </Link>
                    </Text>

                    {/*9 Task */}

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

                    {/*Web 2.0 Projects */}

                    <Heading as='u' pt='20px' size={{ base: 'xs', lg: 'md' }}>Web 2.0 Projects</Heading>

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

                </Container>
            </Box>
        </>
    )
}
