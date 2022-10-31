import QuickLinksLink from "./sub-componets/QuickLinksLink";

const QuickLinks = () => {
  return (
    <article className="flex flex-col">
      <h3 className="text-heading300 text-headingColor200 mb-2">Quick Links</h3>
      <QuickLinksLink link="/" linkText="Boliger til salg" />
      <QuickLinksLink link="/" linkText="Mægler" />
      <QuickLinksLink link="/" linkText="Kontakt os" />
      <QuickLinksLink link="/" linkText="Log ind / bliv bruger" />
    </article>
  );
};

export default QuickLinks;
