import FeatherIcons from "feather-icons-react";
import Banner from "../assets/images/newsLetterBanner.png";
const NewsLetterBanner = () => {
  return (
    <div className="relative h-96 mb-12 flex justify-center items-center">
      <img
        // css={styles.bg}
        className="absolute brightness-50 w-screen h-96"
        src={Banner}
        alt=""
      />
      <div className="flex w-2/3 relative">
        <h2 className=" text-white text-heading300 font-bold w-1/2">
          Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
        </h2>
        <div className="w-1/2">
          <input
            className="bg-white rounded-sm z-10 py-4 h-16 w-full"
            placeholder="Indtast din email adresse"
            type="email"
          />
          <button className="absolute -translate-x-8 w-12">
            <FeatherIcons
              className="h-8 w-8  translate-y-2"
              icon="arrow-right"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterBanner;
