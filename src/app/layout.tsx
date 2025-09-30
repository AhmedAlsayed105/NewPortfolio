import type { Metadata } from "next";
import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./PageTransition";
import Header from "./Component/Header/Header";
import MainNavbar from "./Component/NavBar/MainNavbar";
import RectangleTransition from "./Component/ui/RectangleTransition";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SometypeMono = Sometype_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AHMED",
  description: "This my Portfile",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${SometypeMono.variable} antialiased relative`}>
        <RectangleTransition />
        <div className="flex   ">
          <div className=" hidden lg:flex bg-tertiary lg:w-[200px] xl:w-[265px] max-w-[285px] h-screen fixed z-40  ">
            <MainNavbar />
          </div>
          <div className="container w-full max-w-[1000px] px-[15px] mx-auto h-screen  lg:absolute  lg:right-0  ">
            <Header />
            <PageTransition>
              <div>{children}</div>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                style={{ width: "300px", height: "60px" }}
              />
            </PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
