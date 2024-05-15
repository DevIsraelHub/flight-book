"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronRight } from "lucide-react";
import Link from "next/link";


const NavDropdown = ({ trigger, links }: {
  trigger: string;
  links: { name: string; href: string; }[];
}) => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:text-brandColor hover:bg-transparent font-semibold">
            {trigger}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-">
            <ul className="p-3 flex flex-col">
              {
                links.map((item, index) => (
                  <Link href={item.href} key={index} className="p-3 rounded-md hover:bg-brandBg whitespace-nowrap flex items-center justify-between gap-x-6">
                    {item.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))
              }
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavDropdown
