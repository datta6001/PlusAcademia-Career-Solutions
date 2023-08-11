import { ReactEventHandler, ReactNode } from "react";

type NavBarProps = {
  children: ReactNode;
  navBarTitle: ReactNode | string;
};

type NavBarTitleProps = {
  children: ReactNode;
};

type HeaderMenuProps = {
  children: ReactNode;
  isVisible: boolean;
  changeVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

type HeaderMenuItemProps = {
  children: ReactNode;
  onClick: ReactEventHandler<HTMLLIElement>;
};

type ContentProps = {
  children: ReactNode;
};

type MenuIconProps = {
  onClick: ReactEventHandler<HTMLElement>;
};

export type {
  NavBarProps,
  NavBarTitleProps,
  HeaderMenuProps,
  HeaderMenuItemProps,
  ContentProps,
  MenuIconProps,
};
