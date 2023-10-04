import { Signika } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Providers } from "@/redux/Provider";
import Script from "next/script";
export const metadata: Metadata = {
  title:
    "Quixy.pl - Programowanie stron internetowych - Grafika komputerowa - Projektowanie logo",
  description:
    "Tworzenie stron internetowych. Oferta stron internetowych. Aplikacje internetowe oparte o najnowsze technologie. Grafika komputerowa, grafika social media.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8cf562",
  publisher: "wesiudev",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body
        className={`${cocosharp.variable} ${signika.variable}
       w-full overflow-x-hidden relative`}
      >
        <Providers>
          <div className="cursor" data-cursor></div>
          {children}
        </Providers>
        <Script src="scripts/script.js" />
      </body>
    </html>
  );
}

const signika = Signika({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-signika",
  subsets: ["latin-ext"],
});
const cocosharp = localFont({
  src: [
    {
      path: "../public/fonts/Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
