const Testimonials = ({ image, name, message }) => {
  return (
    <div className="testimonial-1">
      <div className="client">
        <img src={image} alt="image 1" />
        <h1 className="name">{name}</h1>
        <h2>Verified Buyer</h2>
      </div>
      <p className="">{message}</p>
    </div>
  );
};

export default Testimonials;
