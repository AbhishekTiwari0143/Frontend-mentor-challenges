import star from "./assets/images/icon-star.svg";
import Testimonials from "./components/Testimonials";
import avtar3 from "./assets/images/image-anne.jpg";
import avtar1 from "./assets/images/image-colton.jpg";
import avtar2 from "./assets/images/image-irene.jpg";

function App() {
  return (
    <>
      <div className="container m-auto px-28 pt-24 league-spartan">
        <div className="upper-part flex justify-between">
          <div className="texts w-[24rem]">
            <h1 className="text-5xl font-bold mb-6 text-[--very-dark-magenta]">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[--dark-grayish-magenta] font-medium">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="rating flex flex-col gap-4 w-[600px] mt-4">
            <div className="bg-[--light-grayish-magenta] font-semibold p-3 flex items-center rounded-lg mr-32 ">
              <div className="flex gap-2 px-4">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <h1 className="mr-12 ml-6 text-lg text-[--very-dark-magenta] ">
                Rated 5 Stars in Reviews
              </h1>
            </div>
            <div className="bg-[--light-grayish-magenta] font-semibold p-3 flex items-center rounded-lg mr-16 ml-14">
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
            <div className="bg-[--light-grayish-magenta] font-semibold p-3 flex items-center rounded-lg ml-32">
              <div className="flex gap-2 px-4">
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
        <div className="testimonials flex mt-12 gap-4">
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
            top="mt-8"
          />
          <Testimonials
            image={avtar3}
            name="Anne Wallace"
            message="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
            top="mt-16"
          />
        </div>
      </div>
    </>
  );
}

export default App;
