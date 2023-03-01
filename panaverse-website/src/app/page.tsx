'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Component/Header'
import Footer from './Component/Footer'

export default function mainPage() {
  return (
    <ChakraProvider>
      <Header />
      <Footer />
    </ChakraProvider>
  )
}
