import "./globals.css";

export const metadata = {
  title: "Juan Santos",
  description: "Personal website of Juan Francisco Santos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
