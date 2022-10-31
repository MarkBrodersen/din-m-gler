import { Link } from "react-router-dom";
const QuickLinksLink = ({ link, linkText }) => {
  return (
    <Link className="text-paragraphColor100 mb-2" to={link}>
      {linkText}
    </Link>
  );
};

export default QuickLinksLink;
