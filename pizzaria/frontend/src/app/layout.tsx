import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Sujeito Pizza - A melhor Pizzaria",
  description: "A melhor pizzaria de Portugal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
