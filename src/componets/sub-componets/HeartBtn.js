import FeatherIcons from "feather-icons-react";
const HeartBtn = () => {
  return (
    <button className="text-primary-100 bg-shape-200 flex justify-center items-center w-6 h-6 rounded-full">
      <FeatherIcons className="w-4 h-4" icon="heart" />
    </button>
  );
};

export default HeartBtn;
