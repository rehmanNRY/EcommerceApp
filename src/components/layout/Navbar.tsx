"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { BellIcon, Bookmark, ChevronDown, SearchIcon } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="font-arial">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <img src="https://static.vecteezy.com/system/resources/previews/009/418/830/non_2x/shop-marketing-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png" alt="shop icon" className="w-full mx-auto" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
  )
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


const Navbar = () => {
  return (
    <div className="shadow-sm border-b border-gray-100 flex items-center py-3 px-6 space-x-4 justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img src="https://fb-mern.vercel.app/images/rehman_logo.png" alt="rehman logo" className="w-6 md:w-8 mr-1 md:mr-2" />
          <h1 className="font-medium text-base md:text-lg">Rehman</h1>
        </div>
        <NavigationMenuDemo />
      </div>
      <div className="bg-[#faf6fa] shadow-sm border border-gray-100 rounded-md flex items-center px-3 py-2 flex-1">
        <SearchIcon className="size-[18px] text-gray-500" />
        <input type="text" name="search" id="" className="outline-none bg-transparent px-2 w-96" placeholder="Seach" />
      </div>
      <ul className="flex items-center space-x-2">
        <li className="px-2.5 py-2.5 bg-[#faf6fa] border border-gray-100 rounded-md relative">
          <span className="h-1.5 w-1.5 bg-red-500 rounded-full absolute right-2.5 top-2" />
          <BellIcon className="size-[18px] text-gray-800" />
        </li>
        <li className="px-2.5 py-2.5 bg-[#faf6fa] border border-gray-100 rounded-md">
          <Bookmark className="size-[18px] text-gray-800" />
        </li>
        <li className="flex items-center HelvM px-3">
          <img src="https://img.freepik.com/premium-photo/3d-avatar-boy-character_914455-603.jpg" alt="profile" className="w-9 h-9 rounded-full mr-2.5" />
          <span>Abdul Rehman</span>
          <ChevronDown className="size-5 pt-0.5 ml-1" />
        </li>
      </ul>
    </div>
  )
}

export default Navbar