import HomePageHouses from "../templates/HomePageHouses";
const Home = () => {
  return (
    <section className="bg-background-100 w-screen h-12">
      <article className="text-center">
        <h2 className=" text-headingColor-100 text-2xl">Udvalgte Boliger</h2>
        <p className="text-paragraphColor-100 ">
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </p>
      </article>
      <section className="grid grid-cols-2 gap-5 w-2/3 m-auto">
        <HomePageHouses />
      </section>
    </section>
  );
};

export default Home;
