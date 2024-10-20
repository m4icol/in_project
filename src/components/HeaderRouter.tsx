import { NavLink } from "react-router-dom";
import { DashboardIcon, DocumentsIcon, CharIcon } from "./IconsSVG";

const menuItems = [
  {
    icon: <DashboardIcon />,
    item: "DASHBOARD",
    url: "/",
  },
  {
    icon: <DocumentsIcon />,
    item: "DOCUMENTOS",
    url: "/documentos",
  },
  {
    icon: <CharIcon />,
    item: "BALANCES",
    url: "/balances",
  },
];

export function HeaderRouter() {
  return (
    <ul className="flex flex-row gap-10 items-center">
      {menuItems.map(({ item, url, icon }, index) => (
        <NavLink
          to={url}
          key={index}
          aria-label={item}
          style={({ isActive }) =>
            isActive
              ? {
                  borderBottom: "3px #343434 solid",
                  paddingBottom: "8px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }
              : { color: "#737373" }
          }
          className="font-bold"
        >
          <p className="flex items-center gap-2">
            {icon}
            {item}
          </p>
        </NavLink>
      ))}
    </ul>
  );
}
