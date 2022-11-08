import HomePageHouses from "../templates/HomePageHouses";
import HomePageEmply from "../templates/HomePageEmply";
import Heading from "../componets/sub-componets/Heading";
import HeadingPara from "../componets/sub-componets/headingPara";
import PictureFrame from "../componets/PictureFrame";
import houseImage from "../assets/icons/house.png";
import houseSoldImage from "../assets/icons/houseSold.png";
import FlavorArticles from "../componets/FlavorArticles";
import customer from "../assets/icons/customer.png";
import propertyVal from "../assets/icons/propertyVal.png";
import Hero from "../templates/Hero";
import NewsLetterBanner from "../componets/NewsLetterBanner";
import SectionLinks from "../componets/SectionLinks";
import AppInstallSection from "../componets/AppInstallSection";

const Home = () => {
  return (
    <main className=" w-full">
      <Hero />
      <section className="pt-24 w-2/3 m-auto flex justify-between border-b border-b-shape-100">
        <PictureFrame />
        <article className="w-3/5 translate-x-5">
          <Heading heading="Vi har fulgt danskerne hjem i snart 4 årtier" />
          <h3 className="text-heading300 text-primary-100">
            Det synes vi siger noget om os!
          </h3>
          <HeadingPara
            breaktag
            para="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution."
            ndPara="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <div className="flex w-full m-auto justify-between">
            <div className="w-6/6 flex items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-background-100">
                <img className=" w-8 h-8" src={houseSoldImage} alt="" />
              </div>
              <div>
                <h5 className="text-heading300 text-headingColor-200">4829</h5>
              </div>
            </div>
            <div className="w-3/6 flex items-center">
              <div className="w-16 h-16 flex justify-center items-center bg-background-100">
                <img className=" w-8 h-8" src={houseImage} alt="" />
              </div>
              <div>
                <h5 className="text-heading300 text-headingColor-200">158</h5>
                <p className="text-para100 text-paragraphColor-100">
                  boliger til salg
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="flex w-2/3 m-auto my-32">
        <FlavorArticles
          icon={propertyVal}
          heading="Bestil et salgstjek"
          text="Med et Din Mægler Salgstjek 
          bliver du opdateret på værdien 
          af din bolig."
        />
        <FlavorArticles
          icon="map-pin"
          heading="74 butikker"
          text="Hos Din Mægler er din bolig 
til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark."
          feathericon
        />
        <FlavorArticles
          icon={customer}
          heading="Tilmeld køberkartotek"
          text="Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret."
        />
      </section>
      <section className="w-full bg-background-100 pt-32 pb-16">
        <article className="w-2/3 pb-16 m-auto text-center bg-background-100">
          <Heading heading="Udvalgte Boliger" />
          <HeadingPara
            para="There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some."
          />
        </article>
        <div className=" grid grid-cols-2 gap-5 w-2/3 m-auto">
          <HomePageHouses />
        </div>
        <SectionLinks link="/boliger" text="Se alle boliger" />
      </section>
      <NewsLetterBanner />
      <section className="pb-16">
        <article className="w-2/3 m-auto mb-12 text-center">
          <Heading heading="Mød vores engagerede medarbejdere" />
          <HeadingPara
            para="Din Mægler er garant for altid veluddannet assistance i dit
            boligsalg. Kontakt en af vores medarbejdere."
          />
        </article>
        <div className="grid grid-cols-3 gap-5 w-2/3 m-auto">
          <HomePageEmply />
        </div>
        <SectionLinks link="/agents" text="Se alle mæglere" />
      </section>
      <section className="bg-primary-100 w-full pt-24 ">
        <AppInstallSection />
      </section>
    </main>
  );
};

export default Home;
