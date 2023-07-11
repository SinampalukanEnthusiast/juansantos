import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Juan Santos",
  description: "Personal website of Juan Francisco Santos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="scroll-smooth">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
