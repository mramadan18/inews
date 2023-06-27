const Condition = ({ title, desc, desc2 }) => {
  return (
    <div className="mt-4">
      <h5 className="text-blue fw-bold mb-3">{title}</h5>
      <p className="text-black line-height-35 mb-3">{desc}</p>
      <p className="text-black line-height-35">{desc2}</p>
    </div>
  );
};

export default Condition;
