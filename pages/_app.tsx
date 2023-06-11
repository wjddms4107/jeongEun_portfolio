import type { AppProps } from 'next/app'
import { ThemeProvider }from "next-themes";
import Header from '@/components/Header';
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
