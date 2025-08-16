"use client";
import "./MenuLinks.css";
import { LinksType } from "@/types/types";
import { links } from "@/data/header-links/links";
// import { HiMoon } from "react-icons/hi";
// import { useTheme } from "@/contexts/themeContext";

export default function MenuLinks() {
  // const { toggleTheme } = useTheme();

  // const handleChangeTheme = () => {
  //   const currentTheme = localStorage.getItem('theme');
  //   if (currentTheme === 'light') {
  //     localStorage.setItem('theme', 'dark');
  //     toggleTheme('dark');
  //   } else {
  //     localStorage.setItem('theme', 'light');
  //     toggleTheme('light');
  //   }
  // }

  return (
    <nav className="menu-links">
      <ul>
        {links.map((link: LinksType) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      {/* <div onClick={handleChangeTheme}><HiMoon /></div> */}
    </nav>
  );
}