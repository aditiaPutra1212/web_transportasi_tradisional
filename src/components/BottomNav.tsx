"use client";

import { Home, Map as MapIcon, Tag, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Beranda", path: "/", icon: Home },
    { name: "Aktivitas", path: "/activity", icon: MapIcon },
    { name: "Promo", path: "/promo", icon: Tag },
    { name: "Pesan", path: "/messages", icon: MessageCircle },
    { name: "Profil", path: "/profile", icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/80 backdrop-blur-md border-t border-gray-100 pb-2 z-50 rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className="relative flex flex-col items-center justify-center w-16 h-full text-xs font-medium"
            >
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-2xl transition-colors duration-300 ${isActive ? "text-orange-600" : "text-gray-400 hover:text-gray-600"}`}>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-orange-100 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <item.icon
                  className={`w-6 h-6 relative z-10 transition-transform duration-300 ${isActive ? "scale-110" : ""}`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span className={`mt-1 transition-colors duration-300 ${isActive ? "text-orange-600 font-semibold" : "text-gray-400"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
