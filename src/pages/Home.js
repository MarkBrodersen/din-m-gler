import HomePageHouses from "../templates/HomePageHouses";
import HomePageEmply from "../templates/HomePageEmply";
import Heading from "../componets/sub-componets/Heading";
import HeadingPara from "../componets/sub-componets/headingPara";
import PictureFrame from "../componets/PictureFrame";
const Home = () => {
  return (
    <main className=" w-screen h-12">
      <section className="w-screen">
        <PictureFrame />
      </section>
      <article className="w-2/3 m-auto text-center bg-background-100">
        <Heading heading="Udvalgte Boliger" />
        <HeadingPara
          para="There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some."
        />
      </article>
      <section className="bg-background-100 ">
        <div className=" grid grid-cols-2 gap-5 w-2/3 m-auto">
          <HomePageHouses />
        </div>
      </section>
      <section>
        <article className="w-2/3 m-auto text-center">
          <Heading heading="Mød vores engagerede medarbejdere" />
          <HeadingPara
            para="Din Mægler er garant for altid veluddannet assistance i dit
            boligsalg. Kontakt en af vores medarbejdere."
          />
        </article>
        <div className="bg- grid grid-cols-3 gap-5 w-2/3 m-auto">
          <HomePageEmply />
        </div>
      </section>
    </main>
  );
};

export default Home;
