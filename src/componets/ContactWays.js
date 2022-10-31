import ContactWay from "./sub-componets/ContactWay";

const ContactWays = () => {
  return (
    <article>
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
      <p className="text-paragraphColor-100 text-para100">
        Din Mægler Roskilde, er din <br /> boligibutik i lokalområdet.
      </p>
    </article>
  );
};

export default ContactWays;
