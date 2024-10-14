import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ProjectProvider from "@/context";
import Sidebar from "./components/sidebar";
import CheckOut from "./components/checkout";

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
  title: "Shooping List",
  description: "App for documenting grocery needs and history",
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
          <Sidebar />
          {children}
          <CheckOut />
        </ProjectProvider>
      </body>
    </html>
  );
}
