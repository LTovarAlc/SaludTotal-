import "./darkModeBtn.css";

const DarkMode = ({ toggleDarkMode }) => {
  const handleChangeDarkMode = () => {
    toggleDarkMode();
  };

  return (
    <input
      type="checkbox"
      className="theme-checkbox"
      onChange={handleChangeDarkMode}
    />
  );
};

export default DarkMode;
