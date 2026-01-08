import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ekkusux",
  description:
    "Catálogo express con enlaces de pago de Stripe para un checkout rápido.",
  icons: {
    icon: [
      { url: "/logo-ekkusux.png", sizes: "any" },
      { url: "/logo-ekkusux.png", type: "image/png" },
    ],
    shortcut: "/logo-ekkusux.png",
    apple: "/logo-ekkusux.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
