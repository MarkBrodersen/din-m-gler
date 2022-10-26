import HomePageHouses from "../templates/HomePageHouses";
import HomePageEmply from "../templates/HomePageEmply";
import useFetch from "../hooks/useFetch";
const Home = () => {
  return (
    <main className="bg-background-100 w-screen h-12">
      <article className="text-center bg-background-100">
        <h2 className=" text-headingColor-100 text-heading100">
          Udvalgte Boliger
        </h2>
        <p className="text-paragraphColor-100 text-para100">
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </p>
      </article>
      <section className="bg-background-100 ">
        <div className=" grid grid-cols-2 gap-5 w-2/3 m-auto">
          <HomePageHouses />
        </div>
      </section>
      <section>
        <article className="text-center">
          <h2 className="text-heading100 text-headingColor-100">
            Mød vores engagerede medarbejdere
          </h2>
          <p className="text-para100 text-paragraphColor-100">
            {" "}
            Din Mægler er garant for altid veluddannet assistance i dit
            boligsalg. Kontakt en af vores medarbejdere.
          </p>
        </article>
        <div className="bg- grid grid-cols-3 gap-5 w-2/3 m-auto">
          <HomePageEmply />
        </div>
      </section>
    </main>
  );
};

export default Home;
