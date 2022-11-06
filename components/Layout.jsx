 import Head from 'next/head'
 import {Box} from '@chakra-ui/react'
 import Navbar from './Navbar';
 import Footer from './Footer'
  

//    <Layout>
//     <h1>Test</h1>
//    </Layout>


 const Layout = ({children}) => (
     <>
          <Head>
               <title>Real Estate</title>
          </Head>
          <Box maxWidth="1289px" m="auto">
          <header>
              <Navbar/>
          </header>
              <main>
               {children}
              </main>
              <footer>
              <Footer/>
              </footer>
          </Box>
     </>
 )

 export default Layout;