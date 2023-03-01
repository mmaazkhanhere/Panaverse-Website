'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Banner from './Component/Banner'


export default function mainPage() {
  return (
    <ChakraProvider>
      <Banner />
    </ChakraProvider>
  )
}
