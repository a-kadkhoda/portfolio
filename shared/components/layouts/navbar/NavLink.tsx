"use client";
import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  const path = usePathname();

  const isActive = path === href || path.startsWith(href + "/");

  return (
    <Link
      className={cn(
        "text-muted-foreground hover:text-foreground text-nav ",
        "px-3 py-2",
        "rounded-full",
        isActive && "bg-primary-subtle text-foreground",
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavLink;
