const HeadingPara = ({ para, ndPara, breaktag }) => {
  return (
    <>
      {breaktag === true ? (
        <p>
          {para}
          <br />
          {ndPara}
        </p>
      ) : (
        <p className="text-para-100 text-paragraphColor-100">{para}</p>
      )}
    </>
  );
};

export default HeadingPara;
