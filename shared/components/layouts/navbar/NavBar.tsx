import Link from "next/link";
import { Card, CardContent } from "../../ui/card";
import NavLink from "./NavLink";
import { NavItem } from "./types.";
import { Button } from "../../ui/button";

const NavItems: NavItem[] = [
  {
    id: 1,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 2,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 3,
    title: "About",
    href: "/about",
  },
];

const NavBar = () => {
  return (
    <nav className="w-full h-18 flex justify-center items-end   ">
      <div className=" flex bg-card border items-center rounded-full pl-5 py-1 pr-1 gap-2 ">
        <Link
          href={"/"}
          className="flex text-base font-heading font-extrabold items-center"
        >
          <span>aliakbar</span>
          <span className="text-highlight">.</span>
        </Link>
        <div className="h-5 w-px bg-border" />
        <div className="flex gap-2">
          <div className="flex items-center">
            {NavItems.map((navItem) => (
              <NavLink
                key={navItem.id}
                href={navItem.href}
                title={navItem.title}
              />
            ))}
          </div>
          <Link
            href={"/#contact"}
            className="bg-primary text-primary-foreground ring rounded-full flex items-center py-3 px-5 font-semibold"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
