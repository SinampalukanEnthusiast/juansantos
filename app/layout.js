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
      <body className="@#grain">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
