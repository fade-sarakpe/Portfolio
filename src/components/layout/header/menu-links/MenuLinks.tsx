"use client";
import "./MenuLinks.css";
import { LinksType } from "@/types/types";
import { links } from "@/data/header-links/links";
import ColorPicker from "@/components/ui/ColorPicker/ColorPicker";

export default function MenuLinks() {
  return (
    <nav className="menu-links">
      <ul>
        {links.map((link: LinksType) => (
          <li key={link.id}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
      <ColorPicker variant="desktop" />
    </nav>
  );
}