import { useLocation, useParams } from "react-router-dom";
import AgentImage from "../componets/sub-componets/AgentImage";
import EmailAdresse from "../componets/sub-componets/EmailAdresse";
import PhoneNumber from "../componets/sub-componets/PhoneNumber";
import useFetch from "../hooks/useFetch";

const AgentsDetails = () => {
  const id = useParams().id;
  const { data, loading } = useFetch(
    `https://dinmaegler.herokuapp.com/agents/${id}`
  );
  console.log(data);
  return (
    <section className="w-2/3 m-auto">
      <div className="w-2/3">
        <div className="flex">
          <AgentImage image={data.image.url} alt={data.name} />
          <div className="">
            <div>
              <h2 className="text-heading300 text-headingColor-200">
                {data.name}
              </h2>
              <p className="text-para100 text-paragraphColor-200">
                {data.title}
              </p>
            </div>
            <div className="h-1 w-12 bg-primary-100 my-5"></div>
            <div>
              <PhoneNumber color="black" number={data.phone} />
              <EmailAdresse color="black" email={data.email} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-1/3"></div>
    </section>
  );
};

export default AgentsDetails;
