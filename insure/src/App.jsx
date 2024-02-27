import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Feature from "./Components/Feature";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Feature />
      <Newsletter />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
