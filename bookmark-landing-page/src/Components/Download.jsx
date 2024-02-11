import DownloadCard from "./utilities/DownloadCard";

import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";

const Download = () => (
  <section className="downloads w-[100%] my-16 px-8">
    <div className="title text-center">
      <h1 className="text-2xl font-medium pb-4">Download the extension</h1>
      <p className="text-gray-600 ">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
    </div>
    <div className="download-cards flex flex-col w-[100%] justify-center px-4 m-auto gap-8 md:flex-row">
      <DownloadCard name="Chrome" version="62" image={chrome} />
      <div className="md:mt-10">
        <DownloadCard name="Firefox" version="55" image={firefox} />
      </div>
      <div className="md:mt-20">
        <DownloadCard name="Opera" version="66" image={opera} top="2xl" />
      </div>
    </div>
  </section>
);

export default Download;
