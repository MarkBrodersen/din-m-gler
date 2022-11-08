import Copyright from "../componets/Copyright";
import Info from "../componets/Info";

const Footer = () => {
  return (
    <section>
      <div className="bg-background-100 pt-16">
        <Info />
      </div>
      <div className="w-2/3 m-auto grid grid-cols-2">
        <p className="text-paragraphColor-100 text-para100">
          Din Mægler Roskilde, er din <br /> boligibutik i lokalområdet.
        </p>
        <article className="mb-14">
          <span className="text-para400 text-paragraphColor-200">
            Mellem af
          </span>
          <h2 className="text-heading100 text-paragraphColor-200">DMS</h2>
          <p className="text-para200 text-paragraphColor-200">
            Dansk Mægler Sammenslutning
          </p>
        </article>
      </div>
      <Copyright />
    </section>
  );
};

export default Footer;
