import Button from "./Button";

const DownloadCard = ({ name, version, image }) => (
  <div className="card text-center my-12 box-shadow p-4 rounded-2xl h-max">
    <img src={image} alt={`image ${name}`} className="m-auto mb-8" />
    <div className="text border-dotted border-b-[6px] border-spacing-12 pb-16">
      <p className="font-semibold text-3xl mb-2">Add to {name}</p>
      <p className="text-lg text-gray-400">Minimum version {version}</p>
    </div>

    {/* <div className="button my-6 bg-[--soft-blue] p-4 rounded-xl box-shadow md:px-12"> */}
    {/* <h1 className="text-white text-xl font-semibold">
        Add & Install Extension
      </h1> */}
    <Button title="Add & Install Extension" />
    {/* </div> */}
  </div>
);

export default DownloadCard;
