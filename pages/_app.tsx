import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/header';
import { ThemeProvider }from "next-themes";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
