'use client'

import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Quarter1 from './quarter_1'

export default function CoreCourses() {
    return (
        <ChakraProvider>
            <Quarter1 />
        </ChakraProvider>
    )
}
