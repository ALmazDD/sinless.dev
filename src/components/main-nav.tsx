"use client";

import {
  Bell,
  Briefcase,
  ChevronDown,
  Gavel,
  Landmark,
  LogOut,
  Mails,
  Menu,
  Settings,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Logo from "@/assets/logo.svg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils/cn";
import { Separator } from "./ui/separator";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Продажи",
    href: "/docs/primitives/alert-dialog",
    description: "Продаете за сумму поставщик дает свою ценну более ниже",
  },
  {
    title: "Торги",
    href: "/docs/primitives/hover-card",
    description: "На торгах вы выставляете лот и продаете чем дороже",
  },
];

export function MainNavigation() {
  return (
    <>
      <div className=" bg-white py-8 border border-b-2 border-slate-100	">
        <div className="max-w-[90%] m-auto flex justify-between items-center">
          <Link
            href="/"
            className="flex flex-col gap-3 sm:flex-row sm:items-end"
          >
            <Image src={Logo} className="h-6 md:h-10 w-fit" alt="logo" />
            <p className=" w-32 md:w-56 text-[7px] md:text-xs text-slate-500 dark:text-slate-400">
              Инструмент для предпринимателей по поиску и работе с партнёрами
            </p>
          </Link>
          <div className=" relative">
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Проекты
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Профиль
                    </NavigationMenuLink>
                  </Link>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Чаты
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Аукционы</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex">
            <div className="flex mr-6">
              <Separator orientation="vertical" />
              <Button variant="ghost">
                <Link href="/">
                  <Star />
                </Link>
              </Button>
              <Separator orientation="vertical" />
              <Button variant="ghost">
                <Link href="/">
                  <Bell />
                </Link>
              </Button>
              <Separator orientation="vertical" />
            </div>
            <div className="hidden lg:flex">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex gap-3 items-center">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <span>Nurgali Almaz</span>
                  <ChevronDown />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[12rem]">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Настройки</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Выйти</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="lg:hidden" asChild>
                  <Button variant="outline">
                    <Menu width={18} height={12} />
                  </Button>
                </DropdownMenuTrigger>
                <div>
                  <DropdownMenuContent className="w-56 lg:hidden">
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Настройки</span>
                    </DropdownMenuItem>
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>Проекты</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Профиль</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mails className="mr-2 h-4 w-4" />
                        <span>Чаты</span>
                      </DropdownMenuItem>
                      <DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>Аукционы</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Landmark className="mr-2 h-4 w-4" />
                          <span>Продажи</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Gavel className="mr-2 h-4 w-4" />
                          <span>Торги</span>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Выйти</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </div>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-500 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
