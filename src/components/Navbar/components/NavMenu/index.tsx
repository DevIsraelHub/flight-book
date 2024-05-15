// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu"
// import { navLinks, siteConfig, socialLinks } from "@/constant"
// import { ArrowRight, ChevronRight, MoveRight } from "lucide-react"
// import Link from "next/link"

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     href: "/docs/primitives/alert-dialog",
//     description:
//       "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     href: "/docs/primitives/hover-card",
//     description:
//       "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     href: "/docs/primitives/progress",
//     description:
//       "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     href: "/docs/primitives/scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     href: "/docs/primitives/tabs",
//     description:
//       "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     href: "/docs/primitives/tooltip",
//     description:
//       "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ]

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger className="text-md rounded-full">Pages</NavigationMenuTrigger>
//           <NavigationMenuContent className="">
//             <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <div
//                     className="flex h-full w-full select-none flex-col justify-start rounded-xl bg-gradient-to-b from-muted/50 to-muted border p-6 no-underline outline-none focus:shadow-md"
//                   >
//                     {/* <Icons.logo className="h-6 w-6" /> */}
//                     <div className="my-4 text-md font-semibold">
//                       My Socials
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 gap-y-6">
//                       {
//                         socialLinks.map((item, index) => (
//                           <Link href={item.href} key={index}>
//                             <span className="text-muted-foreground hover:text-primary transition-all">
//                               {item.icon}
//                             </span>
//                           </Link>
//                         ))
//                       }
//                     </div>
//                   </div>
//                 </NavigationMenuLink>
//               </li>
//               <li>
//                 {
//                   navLinks.map((item, index) => (
//                     item.label !== "Contact" && (
//                       <ListItem className="rounded-full" href={item.href} key={index}>
//                         <div className="flex items-center justify-between">
//                           <p className="text-md">{item.label}</p>
//                           <ChevronRight className="w-5 h-5" />
//                         </div>
//                       </ListItem>
//                     )
//                   ))
//                 }
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   )
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   )
// })
// ListItem.displayName = "ListItem"
