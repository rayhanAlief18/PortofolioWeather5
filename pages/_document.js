import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html  className="scroll-smooth" style={{scrollBehavior:"smooth"}}>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,400&family=Staatliches&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Poppins:ital,wght@0,100;0,300;1,400&family=Staatliches&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@700&family=Poppins:ital,wght@0,100;0,300;1,400&family=Staatliches&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
    }