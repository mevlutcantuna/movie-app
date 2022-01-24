import "./style.scss";
import { Link } from "react-router-dom";

const BackNavbar = ({ where, go }) => {
  return (
    <div className="back-navbar">
      <Link to={go.path}>{go.name} /&nbsp;</Link>
      <span>{where}</span>
    </div>
  );
};

export default BackNavbar;
