import { HeaderMenuProps } from "../types";
import MenuIcon from "./MenuIcon";

function HeaderMenu({
  children,
  isVisible,
  changeVisibility,
}: HeaderMenuProps) {
  return (
    <>
      <ul className={`header-menu${isVisible ? " visible" : ""}`}>
        {children}
      </ul>
      <MenuIcon
        onClick={() => {
          changeVisibility(!isVisible);
        }}
      />
    </>
  );
}

export default HeaderMenu;
