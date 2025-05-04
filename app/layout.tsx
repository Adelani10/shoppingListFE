import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ProjectProvider from "@/context";
import Nav from "./components/nav";
import Render from "./components/siderBar/render";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shopping List",
  description: "App for documenting grocery needs and shopping history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProjectProvider>
          <ToastContainer
            className={"text-xs"}
            position="top-right"
            autoClose={3000}
          />
          <Nav />
          {children}
          <Render />
        </ProjectProvider>
      </body>
    </html>
  );
}
