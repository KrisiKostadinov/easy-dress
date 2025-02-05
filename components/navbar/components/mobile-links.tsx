"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { MenuIcon, SearchIcon, ShoppingBagIcon, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavbarLink } from "@/components/navbar/types";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import DisplayLogo from "@/components/navbar/components/display-logo";

type MobileNavbarProps = {
  navbarLinks: NavbarLink[];
} & ComponentPropsWithoutRef<"div">;

export default function MobileNavbar({
  navbarLinks,
  ...props
}: MobileNavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div {...props}>
      <div className="w-full block lg:hidden">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => setOpen(!open)}
            >
              <MenuIcon />
            </Button>
            <DisplayLogo />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="icon">
              <SearchIcon />
            </Button>
            <Button variant="outline" size="icon">
              <ShoppingBagIcon />
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 bg-white border-r w-2/3 transition-transform duration-200",
          !open && "-translate-x-full"
        )}
      >
        <div className="py-4 px-5 flex justify-between items-center gap-3">
          <DisplayLogo />
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setOpen(!open)}
          >
            <X />
          </Button>
        </div>
        <Separator />
        <ul className="flex flex-col mt-3">
          {navbarLinks.map((navbarLink, index) => (
            <li key={index}>
              <Link
                href={navbarLink.href}
                className={cn(
                  "px-5 py-2 hover:text-secondary hover:bg-primary block w-full",
                  isActive(navbarLink.href) && "text-secondary bg-primary"
                )}
                onClick={() => setOpen(!open)}
              >
                {navbarLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
