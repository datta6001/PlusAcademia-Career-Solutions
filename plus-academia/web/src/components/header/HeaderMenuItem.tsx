import { HeaderMenuItemProps } from "../types";

function HeaderMenuItem({ children, onClick }: HeaderMenuItemProps) {
  return (
    <li className="header-menu-item" onClick={onClick}>
      {children}
    </li>
  );
}

export default HeaderMenuItem;
