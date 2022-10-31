import PhoneLeft from "../../assets/images/phoneLeft.png";
import PhoneRight from "../../assets/images/phoneRight.png";
const PhoneOverlap = () => {
  return (
    <div className="flex ">
      <img className="z-20 w-64" src={PhoneLeft} alt="Iphone" />
      <img
        className="z-10 w-64 -translate-x-24"
        src={PhoneRight}
        alt="Iphone"
      />
    </div>
  );
};

export default PhoneOverlap;
