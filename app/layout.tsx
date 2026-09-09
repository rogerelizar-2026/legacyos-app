import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LegacyOS - Seu Sistema Operacional Pessoal",
  description: "Baseado nos 7 Hábitos de Stephen Covey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="classic">
      <body className="min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}