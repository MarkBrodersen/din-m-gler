import FeatherIcons from "feather-icons-react";
const FlavorArticles = ({ icon, heading, text, feathericon }) => {
  return (
    <>
      {feathericon === true ? (
        <article className="w-1/3 flex">
          <div className="w-1/6 h-12 bg-background-100 flex justify-center items-center">
            <FeatherIcons
              icon={icon}
              className="w-8 h-8 stroke-none fill-primary-100 map-pin"
            />
          </div>
          <div className="w-5/6">
            <h3 className="text-heading300 text-headingColor-200">{heading}</h3>
            <p className="text-para100 text-paragraphColor-100">{text}</p>
          </div>
        </article>
      ) : (
        <article className="w-1/3 flex">
          <div className="w-12 h-12 bg-background-100 flex justify-center items-center">
            <img src={icon} alt="" className="w-8 h-8" />
          </div>
          <div className="w-5/6">
            <h3 className="text-heading300 text-headingColor-200">{heading}</h3>
            <p className="text-para100 text-paragraphColor-100">{text}</p>
          </div>
        </article>
      )}
    </>
  );
};

export default FlavorArticles;
