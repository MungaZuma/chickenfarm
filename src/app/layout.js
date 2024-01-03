import "./globals.css";
import Footer from "./ui/Footer";
import Navigation from "./ui/Navigation";
import Sidebar from "./ui/Sidebar";

export const metadata = {
  title: "Chicken farm",
  description: "Develooped by Munga David Zuma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <div className="container flex">
          <div className="">
            <Sidebar />
          </div>
          <div className="flex flex-col flex-">
            <div>
              <Navigation />
            </div>
            {children}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
