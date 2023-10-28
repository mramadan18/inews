const Condition = ({ title, desc }) => {
  return (
    <div className="mt-4">
      <h5 className="text-blue fw-bold mb-3 line-height-35">{title}</h5>
      <p
        className="text-black line-height-35 mb-3"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </div>
  );
};

export default Condition;
