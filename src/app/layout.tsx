import '../../public/styles/globals.css';
import '../../public/styles/vars.css';

import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

import { Container } from '@/components/ui/container/container';
import { Header } from '@/components/header/header';

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['cyrillic', 'latin'],
});

export const metadata: Metadata = {
    title: 'GSAP | Framer',
    description: 'Immersive animation and lib exploration',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ru'>
            <body className={`${montserrat.variable}`}>
                <Container>
                    <Header />

                    {children}
                </Container>
            </body>
        </html>
    );
}
