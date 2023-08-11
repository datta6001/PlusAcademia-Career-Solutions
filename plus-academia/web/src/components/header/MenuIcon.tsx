import { MenuIconProps } from "../types";

function MenuIcon({ onClick }: MenuIconProps) {
  return (
    <i className="menu-icon" onClick={onClick}>
      &#9776;
    </i>
  );
}

export default MenuIcon;
