import '../styles/globals.css'

import {EtherProvider, Etherscan} from "../Context/Ether";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => (
    <EtherProvider>
  <div>
    <Navbar/>
      <div>
    <Component {...pageProps} />
      </div>
    <Footer/>
  </div>
    </EtherProvider>

);

export default MyApp;