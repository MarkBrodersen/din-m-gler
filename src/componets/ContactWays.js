import ContactWay from "./sub-componets/ContactWay";

const ContactWays = () => {
  return (
    <div className="bg-white p-3 rounded-t-sm w-5/6">
      <ContactWay spanText="Ring til os" pText="+45 7070 4000" icon="phone" />
      <ContactWay
        spanText="Send en mail"
        pText="4000@dinmaegler.com"
        icon="send"
      />
      <ContactWay
        spanText="Butik"
        pText="Stændertorvet 78, 4000 Roskilde"
        icon="map-pin"
      />
    </div>
  );
};

export default ContactWays;
