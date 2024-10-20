import { HeaderLogo } from "../components/HeaderLogo";
import { HeaderRouter } from "../components/HeaderRouter";
import { HeaderOptions } from "../components/HeaderOptions";

export function Header() {
  return (
    <header className="bg-CS-component-blue z-10 fixed py-6 px-24 rounded-b-2xl shadow-md flex flex-row justify-between items-center w-screen">
      <HeaderLogo></HeaderLogo>
      <HeaderRouter></HeaderRouter>
      <HeaderOptions></HeaderOptions>
    </header>
  );
}
