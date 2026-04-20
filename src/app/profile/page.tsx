"use client";

import { User, Settings, Star, ChevronRight, HelpCircle, LogOut, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfilePage() {
  const menuItems = [
    { icon: Wallet, title: "Metode Pembayaran", subtitle: "Gopay, Kartu Debit" },
    { icon: Star, title: "Poin & Rewards", subtitle: "120 Poin tersedia" },
    { icon: Settings, title: "Pengaturan Akun", subtitle: "Profil, Bahasa, Notifikasi" },
    { icon: HelpCircle, title: "Pusat Bantuan", subtitle: "FAQ, Hubungi Kami" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
      {/* Header Profile Area */}
      <div className="bg-white px-5 pt-12 pb-6 shadow-sm rounded-b-3xl relative z-10">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 p-1 shadow-lg shadow-orange-500/30">
              <div className="w-full h-full rounded-full bg-white border-2 border-white overflow-hidden">
                <div className="w-full h-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-3xl">
                  L
                </div>
              </div>
            </div>
            <button className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-gray-100">
              <span className="text-[10px]">✏️</span>
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Lonedev</h1>
            <p className="text-sm text-gray-500 mt-1">+62 812-3456-7890</p>
            <div className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-md mt-2 inline-block">
              Warga Jogja
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-6 space-y-3">
        {menuItems.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            key={item.title}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-orange-50/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-red-100 flex items-center justify-between cursor-pointer hover:bg-red-50 mt-6 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-100 transition-colors">
              <LogOut className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-red-600">Keluar Akun</h3>
          </div>
        </motion.div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">Versi 1.0.0 (Tradisional)</p>
      </div>
    </div>
  );
}
