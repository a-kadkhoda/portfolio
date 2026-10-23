import Link from "next/link";
import NavLink from "./NavLink";
import { navItems } from "@/data/navbar";

const NavBar = () => {
  return (
    <nav className="sticky top-0 w-full h-navbar flex justify-center items-end">
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
            {navItems.map((navItem) => (
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
