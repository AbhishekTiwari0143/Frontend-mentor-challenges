import { Header, Main, Features, Articles, Footer } from "./Components";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Articles />
      <div className="footerbg bg-slate-800">
        <Footer />
      </div>
    </>
  );
}

export default App;
