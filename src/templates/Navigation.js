import EmailAdresse from "../componets/sub-componets/EmailAdresse";
import PhoneNumber from "../componets/sub-componets/PhoneNumber";
import logo from "../assets/images/logo.png";
import Links from "../componets/Links";

const Navigation = () => {
  return (
    <header>
      <div className="w-full h-12 bg-primary-100">
        <div className="flex justify-between items-center pt-3 w-2/3 m-auto">
          <div className="flex justify-center w-auto">
            <EmailAdresse />
            <PhoneNumber />
          </div>
          <div className="text-white">Log Ind</div>
        </div>
      </div>
      <div className="w-screen h-16 text-paragraph-100">
        <div className="w-2/3 m-auto flex items-center">
          <img src={logo} alt="Din mæglers logo" />
          <div className="w-3/4 m-auto flex justify-end">
            <Links link="#" linkTo="Boliger til salg" />
            <Links link="#" linkTo="Mæglere" />
            <Links link="#" linkTo="Mine favoritter" />
            <Links link="#" linkTo="Kontakt Os" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
