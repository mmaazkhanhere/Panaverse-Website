'use client'

import React from 'react'
import { Box, Center, Container, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import web30 from '../../../public/web3Spec.jpg'

export default function Quarter1() {

    const imageStyles = {
        mixBlendMode: 'darken'
    }

    return (
        <Box mt={{ base: '20px', lg: '50px' }} mb={{ base: '20px', lg: '50px' }} bgColor='rgba(245, 249, 255, 1)' borderRadius={{ base: '20px', lg: '30px' }}
            mr={{ lg: '100px', base: '30px' }} ml={{ base: '30px', lg: '100' }} pb={{ base: '20px', lg: '50px' }}>
            <Container maxW={1800}>

                {/*Course Main Headlines */}

                <Heading pt='10px' textAlign='center' size={{ base: '2xl', lg: '3xl' }} fontWeight='bold'>Web 3 and Metaverse Specialisation </Heading>
                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    Quarter IV
                </Heading>
                <Heading pt='20px' textAlign='center' size={{ base: 'lg', lg: 'xl' }}>
                    W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                </Heading>
                <Heading pt='10px' textAlign='center' size={{ base: 'md', lg: 'lg' }} fontWeight=''>Duration: 13 Weeks</Heading>

                {/*Image */}
                <Center pt='20px' borderRadius={{ lg: '30', base: '20px' }}>
                    <Image style={imageStyles} src={web30} alt='Web3 and Metaverse' />
                </Center>

                {/*Course Description} */}

                <Heading pt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Description</Heading>

                <Text pt='20px' textAlign='justify' fontSize={{ lg: '24px', base: '16px' }}>
                    In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user
                    interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also
                    need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
                </Text>

                {/*Course Outlines */}

                <Heading mt='20px' as='u' size={{ base: 'sm', lg: 'lg' }}>Course Outline</Heading>

                {/*1st Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1. Blockchain and Metaverse Theory</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - The Metaverse: And How It Will Revolutionize Everything by Matthew Ball
                    <br />
                    <Link href='https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0
                        </Text>
                    </Link>
                </Text>

                {/*2 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2. Smart Contract Development in Solidity</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Solidity Programming Essentials - Second Edition By Ritesh Modi
                    <br />
                    <Link href='https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Solidity Learning Repo
                    <br />
                    <Link href='https://github.com/panaverse/defi-dapps-solidity-smart-contracts' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://github.com/panaverse/defi-dapps-solidity-smart-contracts
                        </Text>
                    </Link>
                </Text>

                {/*3 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3. Dapp Development using Ethers.js and Next.js 13</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Dapp Learning Repo
                    <br />
                    <Link href='https://github.com/panaverse/dapps-nextjs' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://github.com/panaverse/dapps-nextjs
                        </Text>
                    </Link>
                </Text>

                {/*4 Task*/}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4. Tokennomics</Heading>

                {/*Project */}

                <Heading as='u' pt='20px' size={{ base: 'sm', lg: 'lg' }}> Blockchain Project: Create a Token and Launch ICO/IEP/IDO</Heading>

                {/*Project Part: 1 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>1.  How to Launch a IEO on Binance Launchpad</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Read How to Launch an IEO
                    <br />
                    <Link href='https://appinventiv.com/blog/how-to-launch-an-ieo/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://appinventiv.com/blog/how-to-launch-an-ieo/
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - The first task would be to make a presentation on how to start IEO on the Binance Launch Pad
                    <br />
                    <Link href='https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04
                        </Text>
                    </Link>
                </Text>

                {/*Project Part: 2 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>2.  How to Launch a IDO on Polkastrater</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Review the list of top fundraising platforms
                    <br />
                    <Link href='https://cryptorank.io/fundraising-platforms' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://cryptorank.io/fundraising-platforms
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Second task of the project would be to make a presentation on how to start IDO on the Polkstarter
                    <br />
                    <Link href='https://polkastarter.com/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://polkastarter.com/
                        </Text>
                    </Link>
                </Text>

                {/*Project Part: 3 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>3.  How to Launch a IDO on Polkastrater</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>

                    <Text >
                        By creating a token and related contracts, you will also learn how to handle money sent to your contracts, which should come in handy if you want to create some
                        kind of paid decentralized service in the future.
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        Therefore, for the sake of this chapter, lets imagine that our  Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token
                        itself and one for the token crowd sale (the ICO).
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        By creating a token and related contracts, you will also learn how to handle money sent to your contracts, which should come in handy if you want to create some
                        kind of paid decentralized service in the future.Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts.
                        You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development.
                    </Text>
                </Text>

                {/*Project Part: 4 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>4.  Develop Crowd Sale Contract</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>

                    <Text >
                        This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token
                        (1 ETH = 100 Pako Token)
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        Implement a payable buyToken() function.
                        Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our
                        token supply to it. While 25% remain in our personal OWNER account.Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so
                        that we are able to withdraw the ETH.
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        - You can use the openzeppelin crowd sale contracts
                        <br />
                        <Link href='https://docs.openzeppelin.com/contracts/4.x/crowdsales' target="_blank" rel="noopener noreferrer">
                            <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                                https://docs.openzeppelin.com/contracts/4.x/crowdsales
                            </Text>
                        </Link>
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect
                        the account to have received Pako, while the contract is balance should have been reduced
                    </Text>
                </Text>

                {/*Project Part: 5 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>5.  Trying it with MetaMask</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>

                    <Text >
                        While it is always good to test your code, it is often more satisfying to see the results of your work wrapped in a nice UI. Lets see how we can deploy our
                        contracts and get some Pako tokens into our MetaMask wallet
                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                        When it is done, take note of what addresses the contracts were uploaded to and copy it!

                    </Text>

                    <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                        After the transaction has been confirmed, you might be confused about why you cant see any tokens in your wallet. It turns out that you need to manually add the
                        token address in MetaMask in order to REGISTER it - after all, there are so many tokens out there, there is no way MetaMask could list them all by default!
                    </Text>
                </Text>

                {/*Project Part: 6 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>6.  Trying it with MultSignature Wallets</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Read
                    <br />
                    <Link href='https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/https://cryptorank.io/fundraising-platforms
                        </Text>
                    </Link>
                </Text>

                {/*Project Part: 7 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>7.  Sending Tokens using Ethers.js</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Write a Typescript program to send Pako Token to some friend address using Ethers.js. You may follow this tutorial
                    <br />
                    <Link href='https://ethereum.org/en/developers/tutorials/send-token-etherjs/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://ethereum.org/en/developers/tutorials/send-token-etherjs/
                        </Text>
                    </Link>
                </Text>

                {/*Project Part: 8 */}

                <Heading pt='10px' size={{ base: 'xs', lg: 'md' }}>8.  Advance: Create, Deploy, Mint, and Sell an NFT</Heading>
                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Read this NFT tutorial series
                    <br />
                    <Link href='https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Create a NFT contract using the OpenZepplen ERC721 NFT Standard
                    <br />
                    <Link href='https://docs.openzeppelin.com/contracts/4.x/erc721' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://docs.openzeppelin.com/contracts/4.x/erc721
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - You may use the Preset ERC721 contract
                    <br />
                    <Link href='https://docs.openzeppelin.com/contracts/4.x/erc721#Presets' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://docs.openzeppelin.com/contracts/4.x/erc721#Presets
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on OpenSea Marketplace for sale
                    <br />
                    <Link href='https://opensea.io/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://opensea.io/
                        </Text>
                    </Link>
                </Text>

                <Text pt='10px' fontSize={{ lg: '24px', base: '16px' }}>
                    - Implement a ERC721 Market
                    <br />
                    <Link href='https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/' target="_blank" rel="noopener noreferrer">
                        <Text as='u' fontSize={{ lg: '20px', base: '14px' }} color='blue'>
                            https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/
                        </Text>
                    </Link>
                </Text>
            </Container>
        </Box>
    )
}
