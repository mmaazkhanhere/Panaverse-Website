'use client'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Footer from './Component/Footer'
import Header from './Component/Header'

const metadata = {
  title: 'Panaverse',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Box bgColor='rgba(255, 251, 244, 1)'>

          <ChakraProvider>
            <Header />
            {children}
            <Footer />
          </ChakraProvider>
        </Box>
      </body>
    </html>
  )
}
