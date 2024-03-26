"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionHeader } from "./MotionDiv";

const Navbar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      name: "Projects",
      path: "/",
      isActive: pathname === "/",
    },
    {
      name: "About",
      path: "/about",
      isActive: pathname === "/about",
    },
    {
      name: "Contact",
      path: "/contact",
      isActive: pathname === "/contact",
    },
  ];

  return (
    <MotionHeader
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { y: -100 },
        visible: {
          y: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
          },
        },
      }}
      className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 flex items-center justify-center"
    >
      <nav className="flex items-center gap-x-12 border border-[#7042f861] bg-[#0300145e] rounded-full px-[20px] py-[10px] text-gray-200">
        {tabs.map((tab) => (
          <Link
            href={tab.path}
            key={tab.name}
            className={`${
              tab.isActive &&
              "bg-gradient-to-r from-purple-700 to-purple-400 py-1 px-2 rounded-full transition-all duration-300 ease-in-out"
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </nav>
    </MotionHeader>
  );
};

export default Navbar;
