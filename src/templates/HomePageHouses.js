import useFetch from "../hooks/useFetch";
const HomePageHouses = () => {
  const { data } = useFetch(
    "https://dinmaegler.herokuapp.com/homes?_limit=4&type_eq=Villa"
  );
  if (data === null) {
  } else {
    console.log(data);
  }
  return (
    <>
      {data === null ? (
        <p>Loading...</p>
      ) : (
        data &&
        data.map((house) => {
          return (
            <div key={house.id} className="ml-4 mr-4 ">
              <img src={house.images[0]} alt="" />
              <article className="">
                <h3>{house.adress1}</h3>
                <p>
                  {house.city} {house.postalcode}
                </p>
                <div className="flex w-40 justify-between">
                  <h5>{house.type}</h5> • <span>{house.type}:</span>
                  <p>Kr.{house.cost}</p>
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <span>{house.energylabel}</span>
                    <div className="flex">
                      <p>{house.rooms}</p>
                      <p>152m</p>
                    </div>
                  </div>
                  <p>Kr.{house.cost}</p>
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
