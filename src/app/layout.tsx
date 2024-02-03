import {Box, Container, Flex, Theme} from '@radix-ui/themes'
import './globals.css'
import type {Metadata} from 'next'
import classNames from 'classnames'
import {Inter} from 'next/font/google'
import Navbar from './components/NavBar'
import StoreProvider from "@/app/providers/StoreProvider";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'TestyBook',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className={classNames(inter.className, "bg-rose-200")}>
        <StoreProvider>
            <Theme>
                <Container className="overflow-y-hidden">
                    <Flex direction={"column"} className='bg-zinc-100 h-screen'>
                        <Navbar></Navbar>
                        <Box className='overflow-y-hidden h-full'>
                            {children}
                        </Box>
                    </Flex>
                </Container>
            </Theme>
        </StoreProvider>
        </body>
        </html>
    )
}
