import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.pathname} />
        <Toaster position="bottom-right" />
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default MyApp 