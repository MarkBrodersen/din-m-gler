import { Link } from "react-router-dom";

const SectionLinks = ({ link, text }) => {
  return (
    <div className="bg-primary-100 mt-12 py-4 px-4 w-48 m-auto text-center text-white">
      <Link className="" to={link}>
        {text}
      </Link>
    </div>
  );
};

export default SectionLinks;
