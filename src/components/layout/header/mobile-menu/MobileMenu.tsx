import { HiMiniBars3BottomRight } from "react-icons/hi2";
import './MobileMenu.css';
import { links } from "@/data/header-links/links";
import { LinksType } from "@/types/types";

export default function MobileMenu() {
  return (
    <div className="mobile-menu">
         <HiMiniBars3BottomRight />
         <ul>
        {links.map((link: LinksType) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
