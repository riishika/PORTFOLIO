import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Rishika Kumar's Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
