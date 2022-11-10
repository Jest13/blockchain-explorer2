import '../styles/globals.css'
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar/>
      <div>
    <Component {...pageProps} />
      </div>
    <Footer/>
  </div>

);

export default MyApp;