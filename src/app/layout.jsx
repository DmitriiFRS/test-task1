import { Tenor_Sans, Roboto } from "next/font/google";
import "./globals.scss";
import localFont from "next/font/local";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const roboto = Roboto({
   weight: ["400", "500", "700"],
   subsets: ["cyrillic-ext"],
   variable: "--font-roboto",
});

const tenorSans = Tenor_Sans({
   weight: ["400"],
   subsets: ["cyrillic"],
   variable: "--font-tenor-sans",
});

const gilroyFont = localFont({
   src: [
      {
         path: "../assets/CustomFonts/Jilroy/Gilroy-Regular.ttf",
         weight: "400",
         style: "normal",
      },
      {
         path: "../assets/CustomFonts/Jilroy/Gilroy-Bold.ttf",
         weight: "700",
         style: "normal",
      },
   ],
   variable: "--gilroyFont",
});

export const metadata = {
   title: "Test app",
   description: "Test app description",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${roboto.variable} ${tenorSans.variable} ${gilroyFont.variable}`}>
            <div className="wrapper">
               <Header />
               <main className="main">{children}</main>
               <Footer />
            </div>
         </body>
      </html>
   );
}
