import { Link } from "react-router-dom";
import Loading from "../componets/animation/Loading";
import useFetch from "../hooks/useFetch";
const HomePageHouses = () => {
  const { data, loading } = useFetch(
    "https://dinmaegler.herokuapp.com/homes?_limit=4&type_eq=Villa"
  );
  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        data &&
        data.map((house) => {
          return (
            <Link key={house.id} to={`/boligerDetails/${house.id}`}>
              <div className="ml-4 mr-4 shadow-md">
                <img
                  className="max-h-48 w-screen "
                  src={house.images[0].url}
                  alt={house.type}
                />
                <article className="p-5">
                  <h3 className="text-heading400 text-headingColor-200">
                    {house.adress1}
                  </h3>
                  <p className="text-para200 text-paragraphColor-100">
                    {house.city} {house.postalcode}
                  </p>
                  <div className="flex w-40 justify-between">
                    <h5 className="text-para600 text-paragraphColor-100">
                      {house.type}
                    </h5>{" "}
                    •
                    <span className="text-para200 text-paragraphColor-100">
                      {house.type}:
                    </span>
                    <p className="text-para200 text-paragraphColor-100">
                      Kr.{house.price}
                    </p>
                  </div>
                  <div className=" border-t border-t-shape-100 flex justify-between">
                    <div className="flex mt-3 w-48 justify-between">
                      {house.energylabel === "A" ? (
                        <span className=" flex font-sm text-white text-para600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-100">
                          {house.energylabel}
                        </span>
                      ) : house.energylabel === "B" ? (
                        <span className=" flex text-white text-para600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-200">
                          {house.energylabel}
                        </span>
                      ) : house.energylabel === "C" ? (
                        <span className=" flex text-white text-para600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-300">
                          {house.energylabel}
                        </span>
                      ) : house.energylabel === "D" ? (
                        <span className=" flex text-white text-para600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-400">
                          {house.energylabel}
                        </span>
                      ) : (
                        <span className=" flex text-white text-para600 justify-center items-center mr-5 w-8 h-6 bg-slate-500">
                          {house.energylabel}
                        </span>
                      )}
                      <div className="font-paragraph-200 text-paragraphColor-100 flex w-44 justify-between">
                        <p>{house.rooms} værelser</p>•
                        <p>{house.livingspace}m²</p>
                      </div>
                    </div>
                    <p className="text-para600 text-paragraphColor-100">
                      Kr.{house.price}
                    </p>
                  </div>
                </article>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};

export default HomePageHouses;
