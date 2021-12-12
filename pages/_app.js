import '../styles/globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    <Header />
    <Component {...pageProps} />

    <Footer />
  </>
}

export default MyApp
