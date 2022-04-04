import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const addTask = () => {
    alert("Clicked");
  };

  return (
    <header className="header" style={headerStyle}>
      <h1>{title}</h1>
      <Button title="Add More" onClick={addTask} symbol="+" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in jsx
const headerStyle = {
  color: "#000",
  // fontWeight: 'bolder',
};

export default Header;
