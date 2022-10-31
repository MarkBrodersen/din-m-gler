import InstallButtons from "./sub-componets/InstallButtons";
import PhoneOverlap from "./sub-componets/PhoneOverlap";

const AppInstallSection = () => {
  return (
    <div className="flex justify-between w-2/3 m-auto">
      <div className=" w-7/12">
        <h2 className="text-heading100 text-white">
          Hold dig opdateret
          <br />
          på salgsprocessen
        </h2>
        <p className="mt-4 text-white text-para100">
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
          ansvarlige mægler eller butik med vores app. Her kan du også se
          statistik på interessen for din bolig i alle vores salgskanaler.
        </p>
        <div className="flex mt-4">
          <InstallButtons google={true} />
          <InstallButtons />
        </div>
      </div>
      <div className="w-5/12">
        <PhoneOverlap />
      </div>
    </div>
  );
};

export default AppInstallSection;
