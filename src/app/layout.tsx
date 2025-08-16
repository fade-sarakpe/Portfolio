import Stars from "@/components/layout/stars/Stars";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Stars />
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
