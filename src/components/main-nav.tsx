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
    title: "Аукционы",
    href: "/docs/primitives/alert-dialog",
    description: "Продаете за сумму поставщик дает свою ценну более ниже",
  },
  {
    title: "Тендера",
    href: "/auctions/procurement",
    description: "На закупках вы выставляете лот и продаете чем дороже",
  },
];

export function MainNavigation() {
  return (
    <>
      <div className=" h-20 border border-b-2 border-slate-100 bg-white	">
        <div className="m-auto flex h-full max-w-[95%] items-center justify-between">
          <Link
            href="/"
            className="flex flex-col gap-3 sm:flex-row sm:items-end"
          >
            <Image src={Logo} className="h-6 w-fit md:h-10" alt="logo" />
            <p className="hidden w-32 text-[7px] text-slate-500 dark:text-slate-400 md:flex md:w-56 md:text-xs">
              Инструмент для предпринимателей по поиску и работе с партнёрами
            </p>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem className="flex gap-5">
                <Link href="/projects/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Проекты
                  </NavigationMenuLink>
                </Link>
                <Link href="/profiles/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Профиль
                  </NavigationMenuLink>
                </Link>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Чаты
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* problem */}
              <NavigationMenuItem >
                <NavigationMenuTrigger>Аукционы</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
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

          <div className="flex h-full">
            <div className="flex gap-2 md:gap-4  ">
              <Separator orientation="vertical" />
              <div className="flex h-auto items-center justify-center">
                <Button variant="ghost">
                  <Link href="/">
                    <Star />
                  </Link>
                </Button>
              </div>
              <Separator orientation="vertical" />
              <div className="flex h-auto items-center justify-center">
                <Button variant="ghost">
                  <Link href="/">
                    <Bell />
                  </Link>
                </Button>
              </div>
              <Separator orientation="vertical" />
              <div className="hidden lg:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <span className="text-sm font-medium">Алмаз Нургали</span>
                    <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-[12rem]">
                    <DropdownMenuGroup>
                      <DropdownMenuItem className=" font-sans text-sm text-slate-900">
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
              <div className="flex h-auto items-center justify-center">
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
          <p className="text-sm leading-snug text-slate-500 line-clamp-2 dark:text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
