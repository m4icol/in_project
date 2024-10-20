import { NavLink } from "react-router-dom";

const menuItems = [
  {
    item: "DASHBOARD",
    url: "/",
  },
  {
    item: "DOCUMENTOS",
    url: "/documentos",
  },
  {
    item: "BALANCES",
    url: "/balances",
  },
];

export function HeaderRouter() {
  return (
    <ul className="flex flex-row gap-10 items-center">
      {menuItems.map(({ item, url }, index) => (
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
          <p>{item}</p>
        </NavLink>
      ))}
    </ul>
  );
}
