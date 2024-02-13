import "./App.css";
import {
  Download,
  FAQs,
  Features,
  Footer,
  Header,
  Main,
  Newsletter,
} from "./Components";

function App() {
  return (
    <>
      <Header />
      {/* <div className="wrapper max-w-[1440px] m-auto "> */}
      <Main />
      <Features />
      <Download />
      <FAQs />
      {/* </div> */}
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
