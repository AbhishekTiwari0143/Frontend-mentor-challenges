import star from "./assets/images/icon-star.svg";
import Testimonials from "./components/Testimonials";
import avtar3 from "./assets/images/image-anne.jpg";
import avtar1 from "./assets/images/image-colton.jpg";
import avtar2 from "./assets/images/image-irene.jpg";

import bg_bottom_desktop from "./assets/images/bg-pattern-bottom-desktop.svg";
import bg_top_desktop from "./assets/images/bg-pattern-top-desktop.svg";

import bg_bottom_mobile from "./assets/images/bg-pattern-bottom-mobile.svg";
import bg_top_mobile from "./assets/images/bg-pattern-top-mobile.svg";

function App() {
  return (
    <>
      <div className="container m-auto px-4 py-16 md:px-28 md:pt-24 league-spartan relative">
        <img
          src={bg_top_mobile}
          alt="pattern bottom"
          className="md:hidden absolute top-0 right left-0 bg-cover"
        />
        <img
          src={bg_top_desktop}
          alt="pattern bottom"
          className="hidden md:block absolute top-0 right left-0 bg-cover"
        />
        <div className="upper-part flex flex-col md:flex-row justify-between">
          <div className="texts md:w-[24rem]">
            <h1 className="text-5xl font-bold mb-6 text-[--very-dark-magenta] text-center md:text-left">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[--dark-grayish-magenta] font-medium text-center md:text-left">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="rating flex flex-col gap-4  mt-4 m-auto">
            <div className="bg-[--light-grayish-magenta] font-semibold p-3 flex flex-col md:flex-row items-center rounded-lg md:w-max pr-16 text-center">
              <div className="flex gap-2 px-4 mb-2 md:mb-0">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <h1 className="mx-6 text-lg text-[--very-dark-magenta] ">
                Rated 5 Stars in Reviews
              </h1>
            </div>
            <div className="bg-[--light-grayish-magenta] font-semibold p-3 flex flex-col md:flex-row items-center rounded-lg w-max md:ml-8">
              <div className="flex gap-2 px-4">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <h1 className="mr-12 ml-6 text-lg text-[--very-dark-magenta] ">
                Rated 5 Stars in Report Guru
              </h1>
            </div>
            <div className="bg-[--light-grayish-magenta] font-semibold p-3 flex items-center flex-col md:flex-row rounded-lg w-max pr-10 md:ml-16">
              <div className="flex gap-2 px-4 mb-2 md:mb-0">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <h1 className="mr-12 ml-6 text-lg text-[--very-dark-magenta] ">
                Rated 5 Stars in Best Tech
              </h1>
            </div>
          </div>
        </div>
        <div className="testimonials flex mt-12 gap-4 flex-col md:flex-row">
          <Testimonials
            image={avtar1}
            name="Colton Smith"
            message="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"
          />
          <Testimonials
            image={avtar2}
            name="Irene Roberts"
            message="Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."
            top="md:mt-8"
          />
          <Testimonials
            image={avtar3}
            name="Anne Wallace"
            message="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
            top="md:mt-16"
          />
        </div>
        <img
          src={bg_bottom_mobile}
          alt="pattern bottom"
          className="absolute md:hidden bottom-0 right-0 bg-cover"
        />
        <img
          src={bg_bottom_desktop}
          alt="pattern bottom"
          className="hidden md:block absolute bottom-0 right-0 bg-cover"
        />
      </div>
    </>
  );
}

export default App;
