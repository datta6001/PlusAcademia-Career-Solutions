import { NavBarTitleProps } from "../types";

function NavBarTitle({ children }: NavBarTitleProps) {
  return <div className="navbar-title">{children}</div>;
}

export default NavBarTitle;
