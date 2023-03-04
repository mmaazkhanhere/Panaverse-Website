'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import Quarter1 from './Quarter1'
import Quarter2 from './Quarter2'


export default function page() {
    return (
        <Box>
            <Quarter1 />
            <Quarter2 />
        </Box>
    )
}
