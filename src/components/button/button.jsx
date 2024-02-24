import "./button.css";

const Button = ({text, onClick}) => {
  return (
    <button className="buttonForm" onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
