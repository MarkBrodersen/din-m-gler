import HouseTemplate from "../templates/HouseTemplate";

const Home = () => {
  return (
    <>
      <section className="bg-background-100 w-screen h-12">
        <article className="text-center">
          <h2 className=" text-headingColor-100 text-2xl">Udvalgte Boliger</h2>
          <p className="text-paragraphColor-100 ">
            There are many variations of passages of Lorem Ipsum available but
            the this in majority have suffered alteration in some
          </p>
        </article>
        <section className="grid grid-cols-2 w-2/3 m-auto">
          <HouseTemplate
            boligHeading="Kæjesvej 268"
            boligLocation="Korsør 4220"
            boligMeters="152m"
            boligPrice="4522"
            boligPriceType="ejernoget"
            boligRateing="A"
            boligRooms="4 værelser"
            boligType="Villa"
          />
          <HouseTemplate
            boligHeading="Kæjesvej 268"
            boligLocation="Korsør 4220"
            boligMeters="152m"
            boligPrice="4522"
            boligPriceType="ejernoget"
            boligRateing="A"
            boligRooms="4 værelser"
            boligType="Villa"
          />
          <HouseTemplate
            boligHeading="Kæjesvej 268"
            boligLocation="Korsør 4220"
            boligMeters="152m"
            boligPrice="4522"
            boligPriceType="ejernoget"
            boligRateing="A"
            boligRooms="4 værelser"
            boligType="Villa"
          />
        </section>
      </section>
    </>
  );
};

export default Home;
