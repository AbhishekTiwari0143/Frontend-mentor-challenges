const CreationCard = ({ image, title }) => {
  return (
    <>
      <div className="card">
        <div className="image relative">
          <img src={image} alt="iamge bg" className="" />
          <h1 className="text absolute text-white z-10 bottom-4 text-2xl uppercase josefin-sans px-4 w-40">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CreationCard;
