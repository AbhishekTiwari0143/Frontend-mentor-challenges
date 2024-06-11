const Testimonials = ({ image, name, message, top }) => {
  return (
    <div
      className={`testimonial-1 bg-[--very-dark-magenta] p-6 py-8 rounded-lg ${top} h-max`}
    >
      <div className="client flex items-center gap-5">
        <img src={image} alt="image 1" className="w-10 rounded-[50%]" />
        <div className="">
          <h1 className="name text-[--white]">{name}</h1>
          <h2 className="text-[--soft-pink]">Verified Buyer</h2>
        </div>
      </div>
      <p className="text-[--white]">{message}</p>
    </div>
  );
};

export default Testimonials;
