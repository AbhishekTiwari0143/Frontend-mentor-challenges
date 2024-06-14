import "./App.css";
import Image from "./assets/images/image-product-desktop.jpg";
import Cart from "./assets/images/icon-cart.svg";

function App() {
  return (
    <>
      <div className=" bg-[--Cream] w-full h-screen">
        <div className="container m-auto flex justify-center items-center h-screen">
          <div className="box flex w-[550px] h-[400px] bg-[--White] rounded-xl py-3">
            <div className="left w-[50%]">
              <img
                src={Image}
                alt="image"
                className="h-full object-fit rounded-s-xl"
              />
            </div>
            <div className="right text p-2 flex flex-col gap-3 w-[50%]">
              <h2 className="uppercase tracking-widest text-sm montserrat">
                Perfume
              </h2>
              <h1 className="text-4xl fraunces font-bold">
                Gabrielle Essence Eau De Parfum
              </h1>
              <p className="text-[--Dark-grayish-blue] font-medium montserrat">
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className="price flex gap-4">
                <h1 className="text-[--Dark-cyan] fraunces text-3xl font-bold">
                  $149.99
                </h1>
                <p className="line-through">$169.99</p>
              </div>
              <div className="flex bg-[--Dark-cyan] p-3 rounded-xl justify-center gap-2 items-center">
                <img src={Cart} alt="image cart" className="" />
                <h1 className="text-[--White]  font-bold text-sm montserrat">
                  Add to Cart
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
