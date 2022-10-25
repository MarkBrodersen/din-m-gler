const HouseTemplate = ({
  boligHeading,
  boligType,
  boligLocation,
  boligPrice,
  boligPriceType,
  boligRooms,
  boligMeters,
  boligRateing,
}) => {
  return (
    <div className="ml-4 mr-4 ">
      <img src="http://placekitten.com/540/225" alt="" />
      <article className="">
        <h3>{boligHeading}</h3>
        <p>{boligLocation}</p>
        <div className="flex w-40 justify-between">
          <h5>{boligType}</h5>.<span>{boligPriceType}</span>.
          <p>Kr.{boligPrice}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <span>{boligRateing}</span>
            <div className="flex">
              <p>{boligRooms}</p>
              <p>{boligMeters}</p>
            </div>
          </div>
          <p>Kr.{boligPrice}</p>
        </div>
      </article>
    </div>
  );
};

export default HouseTemplate;
