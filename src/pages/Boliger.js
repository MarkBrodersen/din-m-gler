import PropertyFilter from "../componets/PropertyFilter";
import HeadingUnderLine from "../componets/sub-componets/HeadingUnderLine";
import useFetch from "../hooks/useFetch";

const Boliger = () => {
  const { data, error, loading } = useFetch(
    "https://dinmaegler.herokuapp.com/homes"
  );
  console.log(data);
  return (
    <div className="w-2/3 m-auto">
      <HeadingUnderLine text="Søg efter dit drømmehus" />
      <PropertyFilter data={data} />
      <div></div>
    </div>
  );
};

export default Boliger;
