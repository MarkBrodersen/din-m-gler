import FeatherIcons from "feather-icons-react";
import skype from "../../assets/icons/skype.png";
const AgentImage = ({ image, alt }) => {
  return (
    <div className="relative w-48 h-48">
      <img src={image} alt={alt} className="object-cover w-48 h-48" />
      <div className="absolute w-24 bottom-8 p-2 bg-primary-100 left-0 flex justify-around text-white">
        <FeatherIcons className="w-4 h-4 " icon="instagram" />
        <FeatherIcons className="w-4 h-4  fill-white" icon="linkedin" />
        <img src={skype} alt="skype icon" className="w-4 h-4" />
      </div>
    </div>
  );
};

export default AgentImage;
