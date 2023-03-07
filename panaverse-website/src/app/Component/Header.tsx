import React from 'react'
import { Box, Container, SimpleGrid, Flex, Image, Button, Menu, IconButton, MenuItem, MenuList, MenuButton } from '@chakra-ui/react'
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Header() {
    return (
        <Box bgColor='rgba(255, 251, 244, 1)'>
            <Container maxW={1800}>
                <SimpleGrid templateColumns={{ sm: 'repeat(3,1fr)', lg: 'repeat(3,1fr)' }}>
                    <Box w={{ lg: '260px', base: '160px' }} h={{ lg: '150px', base: '80px' }} mt={{ base: '-20px', lg: '-40px' }}>
                        <Image src='/red-p-logo-text_dao.png' alt='Panaverse Logo' />
                    </Box>

                    <Flex display={{ lg: 'flex', base: 'none' }} gap='50px' fontWeight='semibold' placeItems='center' fontSize='19px'>
                        <Link href='/'>Home</Link>
                        <Link href='/Courses'>Courses</Link>
                        <Link href='/aboutUs'>About Us</Link>
                        <Link href='/contactUs'>Contact Us</Link>
                    </Flex>

                    <Box mr={{ base: '5px', lg: '55px' }}>
                        <Link href='https://www.piaic.org/' target="_blank" rel="noopener noreferrer">
                            <Button borderRadius='20px' bgColor='black' textColor='white' size={{ lg: 'lg', base: 'xs' }} float='right' mt={{ lg: '30px', base: '-35px' }}>
                                Get Started
                            </Button>
                        </Link>
                    </Box>

                    <Box pt='20px' display={{ lg: 'none', base: 'initial' }} pb='10px'>
                        <Menu  >
                            <MenuButton float='left'
                                as={IconButton}
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='outline' />
                            <MenuList>
                                <MenuItem>
                                    <Link href='/'>Home</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/Courses'>Courses</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/aboutUs'>About Us</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/contactUs'>Contact Us</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                </SimpleGrid>
            </Container>
        </Box>
    )
}
