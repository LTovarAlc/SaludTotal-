import "./button.css";

const Button = ({text}) => {
  return (
    <button className="buttonForm">
      <span>{text}</span>
    </button>
  );
};

export default Button;
