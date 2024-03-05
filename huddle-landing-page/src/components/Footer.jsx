import logoWhite from "../assets/images/logo-white.svg";

import phone from "../assets/images/icon-phone.svg";
import mail from "../assets/images/icon-email.svg";

import bgfooterM from "../assets/images/bg-footer-top-mobile.svg";
import bgfooterD from "../assets/images/bg-footer-top-desktop.svg";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleEmail = () => {
    if (!email.includes("@")) {
      setError(true);
      return;
    }
    setEmail("");
    setError(false);
  };

  return (
    <>
      <div className="footer-curves">
        <img
          src={bgfooterM}
          alt="image curve"
          className=" left-0 top-[-3rem] w-full object-contain md:top-[-12rem] sm:hidden"
        />
        <img
          src={bgfooterD}
          alt="image curve"
          className="hidden  left-0 top-[-3rem] w-full object-contain  md:top-[-9.2rem] sm:block 2xl:hidden"
        />
      </div>
      <footer className="relative bg-[--Very-Dark-Cyan] text-white py-32">
        <div className="footer container m-auto flex flex-col-reverse justify-center items-center gap-32 px-6 md:flex-row md:justify-between">
          <div className="footer-link Open-Sans md:max-w-[300px]">
            <img src={logoWhite} alt="image logo" className="mb-4" />
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </p>
            <div className="phone flex gap-6 mb-4">
              <img src={phone} alt="phone" className="object-contain" />
              <p>Phone: +1-543-123-4567</p>
            </div>
            <div className="mail flex gap-6">
              <img src={mail} alt="email" className="object-contain" />
              <p>example@huddle.com</p>
            </div>
            <div className="social-links">
              {/* <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" /> */}
            </div>
          </div>

          <div className="newletter flex flex-col gap-4 md:w-[650px]">
            <h1 className="text-xl poppins-bold font-semibold uppercase">
              NewsLetter
            </h1>
            <p className="text-[1.05rem] Open-Sans max-w-[450px]">
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We’ll never send you spam or pass on your email
              address
            </p>
            <div className="grid gap-4">
              <div className="input flex flex-col gap-4 items-end mt-6 md:flex-row">
                <input
                  type="text"
                  className="p-4 rounded-lg w-full text-[--Pink]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-[--Pink] px-10 py-4 poppins-bold rounded-lg text-xl hover:bg-[--Light-Pink]"
                  onClick={handleEmail}
                >
                  Subscribe
                </button>
              </div>
              <div
                className={`error ${error ? "text-red-700" : "text-green-600"}`}
              >
                {error ? "Please Check Mail" : ""}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
