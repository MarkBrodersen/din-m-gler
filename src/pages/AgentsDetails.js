import { useLocation, useParams } from "react-router-dom";
import Loading from "../componets/animation/Loading";
import AgentImage from "../componets/sub-componets/AgentImage";
import EmailAdresse from "../componets/sub-componets/EmailAdresse";
import HeartBtn from "../componets/sub-componets/HeartBtn";
import PhoneNumber from "../componets/sub-componets/PhoneNumber";
import useFetch from "../hooks/useFetch";
import FeatherIcons from "feather-icons-react";

const AgentsDetails = () => {
  const id = useParams().id;
  const { data, loading } = useFetch(
    `https://dinmaegler.herokuapp.com/agents/${id}`
  );
  console.log(data);
  return (
    <>
      {data && loading === false ? (
        <section className="w-2/3 m-auto mb-24 flex justify-between">
          <div className="w-2/3 p-5 border border-shape-100">
            <div className="flex">
              <AgentImage image={data.image.url} alt={data.name} />
              <div className="ml-4 w-full ">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-heading300 text-headingColor-200">
                      {data.name}
                    </h2>
                    <p className="text-para100 text-paragraphColor-200">
                      {data.title}
                    </p>
                  </div>
                  <HeartBtn />
                </div>
                <div className="h-1 w-12 bg-primary-100 my-5"></div>
                <div>
                  <PhoneNumber
                    color="black"
                    insideColor="black"
                    number={data.phone}
                  />
                  <EmailAdresse
                    color="black"
                    insideColor="black"
                    email={data.email}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-heading400 text-headingColor-200">
                Om {data.name}
              </h2>
              <div className="w-12 border-b-4 border-primary-100"></div>
              <p className="text-para100 text-paragraphColor-100">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
                <br />
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form by
                injected humour.
              </p>
              <form className="p-5 border border-shape-100" action="">
                <div className="flex justify-between">
                  <div className="w-3/5 mr-2">
                    <label htmlFor="inputName">Navn</label>
                    <input
                      placeholder="Intast navn"
                      className="border border-shape-100 rounded-sm py-2 px-3 mt-1 w-full"
                      type="text"
                      name="inputName"
                      id="inputName"
                    />
                  </div>
                  <div className="w-3/5 ml-2">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      placeholder="Intast email"
                      className="border border-shape-100 rounded-sm py-2 px-3 mt-1 w-full"
                      type="email"
                      name="inputEmail"
                      id="inputEmail"
                    />
                  </div>
                </div>
                <label htmlFor="inputEmne">Emne</label>
                <input
                  placeholder="Hvad drejer din henvendelse sig om?"
                  className="w-full border border-shape-100 rounded-sm py-2 px-3 mt-1"
                  type="text"
                  name="inputEmne"
                  id="inputEmne"
                />
                <label htmlFor="inputBesked">Besked</label>
                <textarea
                  placeholder="Skriv din besked her..."
                  className="w-full border border-shape-100 rounded-sm py-2 px-3 mt-1"
                  name="inputBesked"
                  id="inputBesked"
                  cols="30"
                  rows="10"
                ></textarea>
                <input
                  className=" bg-primary-100 py-3 px-6 text-white"
                  type="submit"
                  value="Send besked"
                />
              </form>
            </div>
          </div>
          <div className="w-1/3 ml-12">
            <div className="bg-shape-200 p-5">
              <h2 className="text-heading300 text-headingColor-200 border-b border-shape-100 pb-4 mb-4">
                Search property
              </h2>
              <div className="flex mb-4">
                <button className="bg-white pl-2">
                  <FeatherIcons
                    className=" text-paragraphColor-200"
                    icon="search"
                  />
                </button>
                <input
                  placeholder="Search"
                  className="rounded-sm bg-white px-4 py-2 pl-0 w-full"
                  type="search"
                  name="inputSearch"
                  id="inputSearch"
                />
              </div>
            </div>
            <div></div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default AgentsDetails;
