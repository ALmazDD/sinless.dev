"use client";

import { Bell, ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Logo from "@/assets/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
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
      <div className="bg-white flex items-center justify-between px-12 py-7 border border-b-slate-100">
        <Link href="/" className="flex items-end justify-center">
          <Image src={Logo} alt="logo" />
          <span className="pl-5 w-60 text-xs text-slate-400">
            Инструмент для предпринимателей по поиску и работе с партнёрами
          </span>
        </Link>
        <NavigationMenu className="flex flex-initial">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Проекты
                </NavigationMenuLink>
              </Link>
              <Link href="/docs" legacyBehavior passHref>
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
        <div className="flex gap-10">
          <Button variant="ghost">
            <Link href="/">
              <Star width={25} height={25} />
            </Link>
          </Button>
          <Button variant="ghost">
            <Link href="/">
              <Bell width={25} height={25} />
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <span>Nurgali Almaz</span>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[12rem]">
              <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Настройки</DropdownMenuItem>
              <DropdownMenuItem>Подписки</DropdownMenuItem>
              <DropdownMenuItem>Выйти</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
