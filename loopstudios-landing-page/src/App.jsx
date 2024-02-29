import Feature from "./components/Feature";
import Header from "./components/Header";
import Main from "./components/Main";
import Creations from "./components/Creations";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Header />
      <Main />
      <Feature />
      <Creations />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
