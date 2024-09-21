import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import { ThemeProvider } from '../../components/contexts/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'
import { GlobalStyle } from '../../styles/GlobalStyle'

const Sla = styled(motion.div)``

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.25 } },
    exit: { opacity: 0, x: 200, transition: { duration: 0.5 } },
  };
  return (
    <>
        <Head>
          <title>Vitor de Souza</title>
        </Head>
        <AnimatePresence>
          <ThemeProvider >
          <GlobalStyle />
              <Header />
                <Sla key={router.route} 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    >
                  <Component {...pageProps} />
                </Sla>
          </ThemeProvider>
        </AnimatePresence>
    </>
  )
}

export default MyApp
