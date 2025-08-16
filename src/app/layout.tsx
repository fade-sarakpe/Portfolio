import Stars from "@/components/layout/stars/Stars";
import "./globals.css";
import { ThemeProvider } from "@/contexts/themeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Stars />
          <div className="main-container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
