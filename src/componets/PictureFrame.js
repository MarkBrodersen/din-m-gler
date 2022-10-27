import image from "../assets/images/family.png";
const PictureFrame = () => {
  return (
    <div className="relative w-72 h-72 flex justify-center items-center">
      <img
        className="absolute w-60 h-60 top-4 left-4"
        src={image}
        alt="familie af 3 sidder under et par brader som fromer et hus"
      />
      <div className="relative translate-x-3 translate-y-3 w-60 h-60 border-primary-100 border-4">
        <div className="text-center absolute w-28 h-28 bottom-0 right-0 bg-primary-100 text-white">
          <h3 className="text-heading100">38+</h3>
          <p>års mægler- erfaring</p>
        </div>
      </div>
    </div>
  );
};

export default PictureFrame;
