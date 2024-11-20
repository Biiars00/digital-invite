import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const fonte = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seu evento comaeça aqui!",
  description: "Aplicação fullstack de convites digitais para eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fonte.className}>{children}</body>
    </html>
  );
}

