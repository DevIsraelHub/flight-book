// "use client";

// import Logo from "@/components/Logo"
// import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { AlignLeft, ChevronRight } from "lucide-react"
// import React from 'react'
// import Link from "next/link"
// import { navLinks, socialLinks } from "@/constants"
// import { usePathname } from "next/navigation";

// const MobileNav = () => {
//   const pathname = usePathname()
//   return (
//     <Sheet>
//       <SheetTrigger className="hover:bg-brandHover">
//         <AlignLeft className="text-brandText w-7 h-7" />
//       </SheetTrigger>
//       <SheetContent>
//         <div className="flex flex-col items-center justify-between h-full py-8">
//           <div className="flex flex-col items-center gap-y-20 w-full">
//             <SheetClose>
//               <Logo />
//             </SheetClose>
//             <div className="w-full flex flex-col items-start gap-y-2">
//               {
//                 navLinks.map((item, index) => (
//                   <SheetClose className="w-full text-muted-foreground" key={index}>
//                     <Link key={index} href={item.href} className={`w-full p-4 rounded-full hover:bg-accent flex items-center justify-between text-2xl hover:text-primary transition-all ${pathname === item.href && "text-primary font-bold"}`}>
//                       <p>{item.label}</p>
//                       <ChevronRight className="text-muted-foreground" />
//                     </Link>
//                   </SheetClose>
//                 ))
//               }
//             </div>

//             <div className="flex items-center gap-x-9 mt-auto">
//               {
//                 socialLinks.map((item, index) => (
//                   <Link className="text-muted-foreground hover:text-primary transition-all" href={item.href} key={index}>
//                     {item.icon}
//                   </Link>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </SheetContent>
//     </Sheet>
//   )
// }

// export default MobileNav