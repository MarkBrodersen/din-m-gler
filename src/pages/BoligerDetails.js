import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import FeatherIcons from "feather-icons-react";
import { motion } from "framer-motion";
import MotionIconsBtn from "../componets/sub-componets/MotionIconsBtn";

const BoligerDetails = () => {
  const id = useParams().id;
  const { data, loading } = useFetch(
    `https://dinmaegler.herokuapp.com/homes/${id}`
  );
  console.log(data);
  return (
    <main>
      {data && (
        <div>
          <img src={data.images[0].url} alt={data.type} />
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
              <div className="w-40 flex justify-between items-center ">
                <MotionIconsBtn icon="image" />
                <MotionIconsBtn icon="layers" />
                <MotionIconsBtn icon="map-pin" />
                <MotionIconsBtn icon="heart" />
              </div>
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
                  <li>Kr. {}</li>
                </ul>
              </div>
            </div>
            <div>
              <article>
                <h2>Beskrivelse</h2>
                <p>{data.description}</p>
              </article>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default BoligerDetails;
