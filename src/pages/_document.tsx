import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='scrollbar-hide bg-{#141414} text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
