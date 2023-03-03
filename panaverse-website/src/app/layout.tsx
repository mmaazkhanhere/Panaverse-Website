'use client'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Footer from './Component/Footer'
import Header from './Component/Header'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ChakraProvider>
        <Box bgColor='rgba(255, 251, 244, 1)'>
          <Header />
          {children}
          <Footer />
        </Box>
      </ChakraProvider>
    </html>
  )
}
