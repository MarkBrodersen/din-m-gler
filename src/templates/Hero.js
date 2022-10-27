import heroImage from "../assets/images/heroImage.jpg";
const Hero = () => {
  return (
    <div className="w-full relative">
      <img
        className="w-screen"
        src={heroImage}
        alt="Billede af et hus med tekst foran"
      />
      <div className="absolute top-1/2 left-1/2 w-2/3 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-white text-center text-mainHeading200 mb-8">
          Søg efter din drømmebolig
        </h1>
        <article className="bg-white p-6 py-8 w-full m-auto">
          <h3 className="textUnderLine  text-headingColor-200 text-heading400">
            Søg blandt 158 boliger til salg i 74 butikker
          </h3>
          <p className="text-para200 text-paragraphColor-100">
            Hvad skal din næste bolig indeholde
          </p>
          <form className="flex" action="">
            <input
              placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
              className="w-full mr-2 border border-shape-100"
              type="text"
            />
            <button className="bg-primary-100 text-white px-12 py-3">
              Søg
            </button>
          </form>
        </article>
      </div>
    </div>
  );
};

export default Hero;
