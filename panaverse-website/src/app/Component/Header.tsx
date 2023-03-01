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
                        <Link href='/'>Courses</Link>
                        <Link href='/'>About Us</Link>
                        <Link href='/'>Contact Us</Link>
                    </Flex>

                    <Box mr={{ base: '5px', lg: '55px' }}>
                        <Button borderRadius='20px' bgColor='black' textColor='white' size={{ lg: 'lg', base: 'xs' }} float='right' mt={{ lg: '30px', base: '-35px' }}>
                            Get Started
                        </Button>
                    </Box>

                    <Box display={{ lg: 'none', base: 'initial' }}>
                        <Menu>
                            <MenuButton as={IconButton}
                                float='left'
                                aria-label='Options'
                                icon={<HamburgerIcon />}
                                variant='menu' />

                            <MenuList>
                                <MenuItem>
                                    <Link href='/'>Home</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/'>Courses</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/'>About Us</Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link href='/'>Contact Us</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                </SimpleGrid>
            </Container>
        </Box>
    )
}
