"use client"
import { ThemeToggle } from "./theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import GoBack from "./go-back"
import { usePathname } from "next/navigation"
import CommandMenu from "./command-menu"
import Logo from "../logo"
import { cn } from "@/lib/utils"

const NAVIGATION = [
  { title: "Dashboard", href: "/" },
  { title: "Markets", href: "/markets" },
  { title: "Screener", href: "/screener" },
  { title: "Settings", href: "/settings" },
]

export default function Navigation() {
  const pathname = usePathname()

  console.log(pathname, "pathname")

  return (
    <header className="max-w-9xl sticky top-0 z-40 mx-auto w-full bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full flex-row justify-between py-4">
        <div className="flex items-center space-x-6">
          <Logo className="text-indigo-700 transition duration-200 hover:scale-105 hover:text-indigo-800 dark:hover:text-indigo-500" />
          <div>
            {pathname !== "/" &&
              pathname !== "/markets" &&
              pathname !== "/screener" && <GoBack />}
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {NAVIGATION.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === item.href &&
                          "pointer-events-none bg-accent text-accent-foreground"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <CommandMenu />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
