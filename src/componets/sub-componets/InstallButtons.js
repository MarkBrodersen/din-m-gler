import playStore from "../../assets/icons/playStore.svg";
import apple from "../../assets/icons/apple.svg";

const InstallButtons = ({ google }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      {google === true ? (
        <button
          className="py-4 px-6 mr-2 flex rounded sm bg-white"
          onClick={() => openInNewTab("https://play.google.com/store/games")}
        >
          <img className="mr-2" src={playStore} alt="play store icon" />
          Google PLay
        </button>
      ) : (
        <button
          className="py-4 text-white px-6 ml-2 flex border border-white rounded-sm"
          onClick={() => openInNewTab("https://www.apple.com/dk/app-store/")}
        >
          <img className="mr-2" src={apple} alt="apple icon" />
          Apple Store
        </button>
      )}
    </>
  );
};

export default InstallButtons;
