const PropertyFilter = ({ data }) => {
  const changeHandler = () => {
    // console.log(this.target.value);
  };
  return (
    <div className="">
      <select name="propType" id="propType">
        <option value="ejerlejlighed">Ejerlejlighed</option>
        <option value="villa">Villa</option>
        <option value="byhus">Byhus</option>
        <option value="landejendom">Landejendom</option>
      </select>
      <div className="">
        <input
          onChange={() => changeHandler()}
          type="range"
          name="firstPropRange"
          id="firstPropRange"
          min="0"
          value="0"
          className="absolute"
          max="12000000"
        />
        <input
          onChange={() => changeHandler()}
          type="range"
          name="secondPropRange"
          id="secondPropRange"
          min="0"
          value="12000000"
          className="absolute"
          max="12000000"
        />
        <div className="flex justify-between -mb-5">
          <p>0 kr.</p>
          <p>12.000.000 kr.</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyFilter;
