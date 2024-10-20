import React from "react";
import { Header } from "../sections/Header";
import Gradient from "../components/Gradient";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header></Header>
      <Gradient></Gradient>

      <main className="pt-32 px-72">{children}</main>
    </div>
  );
};

export default Layout;
