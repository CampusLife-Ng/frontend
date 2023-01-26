import "./Specs.css";

const Specs = ({ Icon, text }) => {
  return (
    <div className="specs">
      {Icon && <Icon className="specs__icon" />}
      <p>{text}</p>
    </div>
  );
};

export default Specs;
