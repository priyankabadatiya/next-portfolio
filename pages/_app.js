import '../styles/globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <Script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></Script>
    <Header />
    <Component {...pageProps} />

    <Footer />
  </>
}

export default MyApp
