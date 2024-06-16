"use client";

import * as React from "react";
import Link from "next/link";
import { UsersRound, SwordsIcon, BracketsIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function SideDashboard() {
  return (
    <NavigationMenu className="h-screen w-64 border-r p-4">
      <NavigationMenuList className="flex flex-col gap-3">
        <NavigationMenuItem className="w-full">
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} hover:bg-hover-primary flex min-w-full justify-around`}
            >
              <UsersRound className="text-primary" />
              <span>Teams</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <Link
            href="/docs"
            legacyBehavior
            passHref
            className="flex justify-start"
          >
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} hover:bg-hover-primary flex min-w-full justify-around`}
            >
              <SwordsIcon className="text-primary" />
              <span>Matches</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="w-full">
          <Link href="/docs" legacyBehavior passHref className="">
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} hover:bg-hover-primary flex min-w-full justify-around`}
            >
              <BracketsIcon className="text-primary" />
              <span>Brackets</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
