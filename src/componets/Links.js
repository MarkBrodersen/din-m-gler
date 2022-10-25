import { Link } from "react-router-dom";

const Links = ({ link, linkTo }) => {
  return (
    <Link className="ml-4" to={link}>
      {linkTo}
    </Link>
  );
};

export default Links;
