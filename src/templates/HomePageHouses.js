import Loading from "../componets/animation/Loading";
import useFetch from "../hooks/useFetch";
const HomePageHouses = () => {
  const { data } = useFetch(
    "https://dinmaegler.herokuapp.com/homes?_limit=4&type_eq=Villa"
  );
  console.log(data);
  return (
    <>
      <Loading />
      {data === null ? (
        <Loading />
      ) : (
        data &&
        data.map((house) => {
          const image = house.images[0];
          return (
            <div key={house.id} className="ml-4 mr-4 ">
              <img src="http://placekitten.com/520/225" alt="" />
              <article className="">
                <h3 className="font-heading-400 text-headingColor-200">
                  {house.adress1}
                </h3>
                <p className="font-paragraph-200 text-paragraphColor-100">
                  {house.city} {house.postalcode}
                </p>
                <div className="flex w-40 justify-between">
                  <h5 className="font-paragraph-600 text-paragraphColor-100">
                    {house.type}
                  </h5>{" "}
                  •
                  <span className="font-paragraph-200 text-paragraphColor-100">
                    {house.type}:
                  </span>
                  <p className="font-paragraph-200 text-paragraphColor-100">
                    Kr.{house.cost}
                  </p>
                </div>
                <div className=" border-t border-t-shape-100 flex justify-between">
                  <div className="flex mt-3 w-48 justify-between">
                    {house.energylabel === "A" ? (
                      <span className=" flex font-sm text-white font-paragraph-600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-100">
                        {house.energylabel}
                      </span>
                    ) : house.energylabel === "B" ? (
                      <span className=" flex text-white font-paragraph-600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-200">
                        {house.energylabel}
                      </span>
                    ) : house.energylabel === "C" ? (
                      <span className=" flex text-white font-paragraph-600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-300">
                        {house.energylabel}
                      </span>
                    ) : house.energylabel === "D" ? (
                      <span className=" flex text-white font-paragraph-600 justify-center items-center mr-5 w-8 h-6 bg-energiLabel-400">
                        {house.energylabel}
                      </span>
                    ) : (
                      <span className=" flex text-white font-paragraph-600 justify-center items-center mr-5 w-8 h-6 bg-slate-500">
                        {house.energylabel}
                      </span>
                    )}
                    <div className="font-paragraph-200 text-paragraphColor-100 flex w-44 justify-between">
                      <p>{house.rooms} værelser</p>
                      <p>{house.livingspace}m²</p>
                    </div>
                  </div>
                  <p className="font-paragraph-600 text-paragraphColor-100">
                    Kr.{house.cost}
                  </p>
                </div>
              </article>
            </div>
          );
        })
      )}
    </>
  );
};

export default HomePageHouses;
