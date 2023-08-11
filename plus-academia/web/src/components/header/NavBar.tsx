import NavBarTitle from "./Title";
import "../styles.scss";
import HeaderMenu from "./HeaderMenu";
// import { NavBarProps } from "../types";
import HeaderMenuItem from "./HeaderMenuItem";
import { useNavigate } from "react-router-dom";
import { ReactEventHandler, useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleNavigation: ReactEventHandler<HTMLLIElement> = (event) => {
    const location = event.currentTarget.textContent?.toLowerCase().trim();

    switch (location) {
      case "home":
        navigate("/");
        break;
      case "courses":
        navigate("/courses");
        break;
      case "feedbacks":
        navigate("/feedbacks");
        break;
      case "contact":
        navigate("/contact");
        break;
      case "about us":
        navigate("/about");
        break;
      default:
        navigate("/");
    }

    setMenuVisibility(false);
  };

  return (
    <nav className="navbar">
      <NavBarTitle>+PlusAcademia</NavBarTitle>
      <HeaderMenu
        isVisible={menuVisibility}
        changeVisibility={setMenuVisibility}
      >
        <HeaderMenuItem onClick={handleNavigation}>Home</HeaderMenuItem>
        <HeaderMenuItem onClick={handleNavigation}>Courses</HeaderMenuItem>
        <HeaderMenuItem onClick={handleNavigation}>Feedbacks</HeaderMenuItem>
        <HeaderMenuItem onClick={handleNavigation}>Contact</HeaderMenuItem>
        <HeaderMenuItem onClick={handleNavigation}>About Us</HeaderMenuItem>
      </HeaderMenu>
    </nav>
  );
}

export default NavBar;
