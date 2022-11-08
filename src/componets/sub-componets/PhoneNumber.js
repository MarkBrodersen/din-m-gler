import FeatherIcons from "feather-icons-react";
const PhoneNumber = ({ number, color }) => {
  return (
    <>
      {color === "white" ? (
        <div className="flex mr-2 ml-2 text-white">
          <FeatherIcons icon="phone" />
          <p>{number}</p>
        </div>
      ) : (
        <div className="flex mr-2 ml-2 text-paragraphColor-100">
          <FeatherIcons icon="phone" />
          <p>{number}</p>
        </div>
      )}
    </>
  );
};

export default PhoneNumber;
