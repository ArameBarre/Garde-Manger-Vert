import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ClientSideProvider from "@/components/ClientSideProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" />
      <body>
        <ClientSideProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientSideProvider>
      </body>
    </html>
  );
}
