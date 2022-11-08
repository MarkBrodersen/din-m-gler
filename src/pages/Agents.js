import useFetch from "../hooks/useFetch";
import FeatherIcons from "feather-icons-react";
import Loading from "../componets/animation/Loading";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Agents = () => {
  const { data, loading, error } = useFetch(
    "https://dinmaegler.herokuapp.com/agents"
  );
  return (
    <>
      <div className="w-2/3 m-auto gap-4 grid grid-cols-3">
        {data === null ? (
          <Loading />
        ) : (
          data &&
          data.map((agent) => {
            return (
              <Link
                to={`/agentsDetails/${agent.id}`}
                key={agent.id}
                className="rounded-sm"
              >
                <img
                  className="rounded-t-sm"
                  src={agent.image.url}
                  alt={agent.name}
                />
                <div className="text-center rounded-r-sm rounded-b-sm rounded-l-sm border-r border-b border-l border-r-shape-100 border-b-shape-100 border-l-shape-100 ">
                  <h3 className="text-heading300 text-headingColor-200">
                    {agent.name}
                  </h3>
                  <p className="text-para100 text-paragraphColor200">
                    {agent.title}
                  </p>
                  <div className="mt-2">
                    <button className="text-white mr-2 z-10">
                      <FeatherIcons
                        className="fill-headingColor-200 stroke-1"
                        icon="mail"
                      />
                    </button>
                    <button className="text-headingColor-200 ml-2 z-10">
                      <FeatherIcons
                        className="fill-headingColor-200 stroke-none"
                        icon="linkedin"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Agents;
