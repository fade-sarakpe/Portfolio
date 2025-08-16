import MenuLinks from "./menu-links/MenuLinks";
import Logo from "./logo/Logo";
import "./Header.css";
import MobileMenu from "./mobile-menu/MobileMenu";

export default function Header() {
  return (
    <div className="Header-container">
      <Logo />
      <MenuLinks />
      <MobileMenu />
    </div>
  )
}
