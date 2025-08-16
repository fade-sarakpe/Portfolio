export interface LinksType {
    id: string; 
    text: string;
    href: string;
  }

export interface ThemeContextType {
    theme: string;
    toggleTheme: (newTheme: string) => void;
  };