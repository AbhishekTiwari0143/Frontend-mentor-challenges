const StatusCard = (props) => {
  return (
    <>
      <div className="statusCard grid gap-2 text-center Open-Sans">
        <img src={props.icon} alt="image" className="w-1/6" />
        <h1 className="text-6xl Open-Sans font-bold md:text-8xl">
          {props.data}
        </h1>
        <p className="text-gray-700">
          {props.text} <br />
          {props.text2}
        </p>
      </div>
    </>
  );
};

export default StatusCard;
