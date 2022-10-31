import FeatherIcon from "feather-icons-react";
const ContactWay = ({ icon, spanText, pText }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 rounded-full flex justify-center items-center text-white bg-primary-100">
        <FeatherIcon icon={icon} />
      </div>
      <div className="ml-2 ">
        <span className="text-para400 text-paragraphColor-200">{spanText}</span>
        <p className="text-btn100 text-paragraphColor-100">{pText}</p>
      </div>
    </div>
  );
};

export default ContactWay;
