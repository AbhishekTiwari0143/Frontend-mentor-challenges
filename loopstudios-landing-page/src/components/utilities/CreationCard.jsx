const CreationCard = ({ imageM, imageD, title }) => {
  return (
    <>
      <div className="card">
        <div className="relative image">
          <img src={imageM} alt="image bg" className="lg:hidden" />
          <img
            src={imageD}
            alt="image bg"
            className="hidden w-full object-contain lg:block"
          />
          <h1 className="text absolute text-white z-[1] bottom-4 text-2xl uppercase josefin-sans px-4 w-40">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CreationCard;
