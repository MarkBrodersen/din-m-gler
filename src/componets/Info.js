import logo from "../assets/images/logo.png";
import ContactWays from "./ContactWays";
import QuickLinks from "./QuickLinks";
const Info = () => {
  return (
    <>
      <img src={logo} alt="din mæglers logo" />
      <p className="w-10/12 text-para100 text-paragraphColor-100">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words.
      </p>
      <div className="grid grid-cols-2">
        <ContactWays />
        <QuickLinks />
      </div>
    </>
  );
};

export default Info;
