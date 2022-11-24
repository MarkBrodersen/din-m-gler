import AgentImage from "../componets/sub-componets/AgentImage";
import EmailAdresse from "../componets/sub-componets/EmailAdresse";
import HeartBtn from "../componets/sub-componets/HeartBtn";
import PhoneNumber from "../componets/sub-componets/PhoneNumber";
import useFetch from "../hooks/useFetch";

const CoraAgent = ({ id }) => {
  const { data, loading } = useFetch(
    `https://dinmaegler.herokuapp.com/agents/${id}`
  );
  return (
    <div className="flex">
      <AgentImage image={data.image.url} alt={data.name} />
      <div className="ml-4 w-1/2 ">
        <div className="flex justify-between">
          <div>
            <h2 className="text-heading300 text-headingColor-200">
              {data.name}
            </h2>
            <p className="text-para100 text-paragraphColor-200">{data.title}</p>
          </div>
          <HeartBtn />
        </div>
        <div className="h-1 w-12 bg-primary-100 my-5"></div>
        <div>
          <PhoneNumber color="black" insideColor="black" number={data.phone} />
          <EmailAdresse color="black" insideColor="black" email={data.email} />
        </div>
      </div>
    </div>
  );
};

export default CoraAgent;
