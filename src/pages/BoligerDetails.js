import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { motion } from "framer-motion";
import MotionIconsBtn from "../componets/sub-componets/MotionIconsBtn";
import AgentImage from "../componets/sub-componets/AgentImage";
import PhoneNumber from "../componets/sub-componets/PhoneNumber";
import EmailAdresse from "../componets/sub-componets/EmailAdresse";
import { useState } from "react";

const BoligerDetails = () => {
  const [pic, setPic] = useState(false);
  const [layout, setLayout] = useState(false);
  const id = useParams().id;
  const { data, loading } = useFetch(
    `https://dinmaegler.herokuapp.com/homes/${id}`
  );
  console.log(data);
  const picHandler = () => {
    if (layout) {
      setLayout(false);
      setPic(true);
    } else {
      setPic(false);
      setLayout(true);
    }
    if (pic === true) {
      setPic(false);
    } else {
      setPic(true);
    }
  };
  const layoutHandler = () => {
    if (pic) {
      setLayout(true);
      setPic(false);
    } else {
      setPic(true);
      setLayout(false);
    }
    if (layout === true) {
      setLayout(false);
    } else {
      setLayout(true);
    }
  };
  // let brutto = Math.floor(data.price - data.payment - data.netto - data.cost);
  // console.log(brutto);
  return (
    <main>
      {data && pic === true ? (
        <div className="fixed z-40  top-0 w-screen h-screen bg-bga-100">
          <img
            className="w-4/5  h-96 w-1/3 m-auto translate-y-12"
            src={data.images[0].url}
            alt={data.type}
          />
        </div>
      ) : null}
      {data && layout === true ? (
        <div className="fixed  z-40 top-0 w-screen h-screen bg-bga-100">
          <img
            className="w-4/5  h-96 w-1/3 m-auto translate-y-12"
            src={data.floorplan.url}
            alt={data.type}
          />
        </div>
      ) : null}
      {data && (
        <div>
          <img className="w-screen" src={data.images[0].url} alt={data.type} />
          <div className="w-2/3 m-auto">
            <div className="flex justify-between">
              <div>
                <h2 className="text-heading200 text-primary-100">
                  {data.adress1}
                </h2>
                <h2 className="text-heading200 text-primary-100">
                  {data.postalcode} {data.city}
                </h2>
              </div>
              {pic === true ? (
                <div className="w-50 z-50 text-white flex justify-between items-center fixed bottom-96 left-1/2 translate-y-10">
                  <MotionIconsBtn
                    white="true"
                    icon="image"
                    onclick={picHandler}
                  />
                  <MotionIconsBtn
                    white="true"
                    icon="layers"
                    onclick={layoutHandler}
                  />
                  <MotionIconsBtn white="true" icon="map-pin" />
                  <MotionIconsBtn white="true" icon="heart" />
                </div>
              ) : (
                <div className=" flex justify-between items-center ">
                  <MotionIconsBtn icon="image" onclick={picHandler} />
                  <MotionIconsBtn icon="layers" onclick={layoutHandler} />
                  <MotionIconsBtn icon="map-pin" />
                  <MotionIconsBtn icon="heart" />
                </div>
              )}
              <h2 className="text-heading200 text-primary-100">
                Kr. {data.price}
              </h2>
            </div>
            <div className="flex justify-between">
              <div className="flex ">
                <ul className="mr-6 text-para200">
                  <li>Sagnummer:</li>
                  <li>Boligareal:</li>
                  <li>Grundareal:</li>
                  <li>Rum/værelser:</li>
                  <li>Antal Plan:</li>
                </ul>
                <ul className=" text-para200">
                  <li>{data.id}</li>
                  <li>{data.livingspace}</li>
                  <li>{data.lotsize}</li>
                  <li>{data.rooms}</li>
                  <li>-</li>
                </ul>
              </div>
              <div className="flex ">
                <ul className="mr-6 text-para200">
                  <li>Kælder:</li>
                  <li>Byggeår</li>
                  <li>Ombygget:</li>
                  <li>Energimærke:</li>
                </ul>
                <ul className=" text-para200">
                  <li>{data.basementsize}</li>
                  <li>{data.built}</li>
                  <li>{data.remodel}</li>
                  <li>{data.energylabel}</li>
                </ul>
              </div>
              <div className="flex ">
                <ul className="mr-6 text-para200">
                  <li>Udbetaling:</li>
                  <li>Brutto ex ejerudgift:</li>
                  <li>Netto ex ejerudgift:</li>
                  <li>Ejerudgifter:</li>
                </ul>
                <ul className=" text-para200">
                  <li>Kr. {data.payment}</li>
                  <li>Kr. {}</li>
                  <li>Kr. {data.netto}</li>
                  <li>Kr. {data.cost}</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <article className="w-1/2 mr-4">
                <h2 className="mb-3 text-heading300 text-headingColor-200">
                  Beskrivelse
                </h2>
                <p>{data.description}</p>
              </article>
              <article className="w-1/2 ml-4">
                <h2 className="mb-3 text-heading300 text-headingColor-200">
                  Ansvarlig mægler
                </h2>
                <div className="flex p-4 border border-shape-100">
                  <AgentImage
                    image={data.agent.image.url}
                    alt={data.agent.name}
                  />
                  <div className="ml-3">
                    <div>
                      <h2 className="text-heading300 text-headingColor-200">
                        {data.agent.name}
                      </h2>
                      <p className="text-para100 text-paragraphColor-200">
                        {data.agent.title}
                      </p>
                    </div>
                    <div className="h-1 w-12 bg-primary-100 my-5"></div>
                    <div>
                      <PhoneNumber
                        color="black"
                        insideColor="black"
                        number={data.agent.phone}
                      />
                      <EmailAdresse
                        color="black"
                        insideColor="black"
                        email={data.agent.email}
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default BoligerDetails;
