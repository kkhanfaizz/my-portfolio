import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Fahim Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />   {/* Navbar har page pe dikhai dega */}
        {children}
      </body>
    </html>
  );
}
