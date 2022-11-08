import FeatherIcons from "feather-icons-react";
const EmailAdresse = ({ email, color }) => {
  return (
    <>
      {color === "white" ? (
        <div className="flex mr-2 ml-2 text-white">
          <FeatherIcons icon="send" />
          <p>{email}</p>
        </div>
      ) : (
        <div className="flex mr-2 ml-2 text-paragraphColor-100">
          <FeatherIcons icon="send" />
          <p>{email}</p>
        </div>
      )}
    </>
  );
};

export default EmailAdresse;
