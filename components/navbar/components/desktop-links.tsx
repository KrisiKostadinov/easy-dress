"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ListIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react";

import { NavbarLink } from "@/components/navbar/types";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import DisplayLogo from "@/components/navbar/components/display-logo";

type DesktopLinksProps = {
  navbarLinks: NavbarLink[];
} & React.ComponentPropsWithoutRef<"div">;

export default function DesktopLinks({ navbarLinks, ...props }: DesktopLinksProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div {...props}>
      <div className="flex items-center gap-3">
        <DisplayLogo />
      </div>
      <nav>
        <ul className="flex gap-1">
          {navbarLinks.map((navbarLink, index) => (
            <li key={index}>
              <Link
                className={cn(
                  "py-2 px-4 rounded hover:text-secondary hover:bg-primary",
                  isActive(navbarLink.href) && "text-secondary bg-primary"
                )}
                href={navbarLink.href}
              >
                {navbarLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-2">
        <Button variant={"outline"} size={"icon"}>
          <SearchIcon />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <ShoppingBagIcon />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <ListIcon />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <UserIcon />
        </Button>
      </div>
    </div>
  );
}
