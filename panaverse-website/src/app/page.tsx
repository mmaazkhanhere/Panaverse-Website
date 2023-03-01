'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Component/Header'

export default function mainPage() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  )
}
