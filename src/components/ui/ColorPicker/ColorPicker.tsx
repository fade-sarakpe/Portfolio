"use client";
import { useState, useRef, useEffect } from "react";
import { HiMoon } from "react-icons/hi";
import { useTheme } from "@/contexts/themeContext";
import { colors } from "@/data/colors/colors";
import "./ColorPicker.css";

interface ColorPickerProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export default function ColorPicker({ variant = 'desktop', className = '' }: ColorPickerProps) {
  const { toggleTheme } = useTheme();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const handleColorPickerToggle = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleColorSelect = (colorKey: string) => {
    localStorage.setItem('theme', colorKey);
    toggleTheme(colorKey);
    setShowColorPicker(false);
  };

  // Close color picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorPickerRef.current && !colorPickerRef.current.contains(event.target as Node)) {
        setShowColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`color-picker-container ${variant} ${className}`} ref={colorPickerRef}>
      <div onClick={handleColorPickerToggle} className="theme-toggle">
        <HiMoon color="var(--primary-color)" />
      </div>
      {showColorPicker && (
        <div className="color-picker-menu">
          {Object.entries(colors).map(([colorKey, colorValue]) => (
            <div
              key={colorKey}
              className="color-option"
              style={{ backgroundColor: colorValue.primary }}
              onClick={() => handleColorSelect(colorKey)}
              title={`${colorKey} theme`}
            />
          ))}
        </div>
      )}
    </div>
  );
}