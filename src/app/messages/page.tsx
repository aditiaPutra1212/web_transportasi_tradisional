"use client";

import { Search, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function MessagesPage() {
  const chats = [
    {
      id: 1,
      name: "Ujang Karburator",
      message: "Halo mas, saya otw bawa becak listrik ya!",
      time: "10:30",
      unread: 1,
      avatar: "U",
    },
    {
      id: 2,
      name: "Budi Andong",
      message: "Baik mas, tunggu di depan mall ya.",
      time: "Kemarin",
      unread: 0,
      avatar: "B",
    },
    {
      id: 3,
      name: "Promo Andong",
      message: "Dapatkan diskon 50% keliling alun-alun!",
      time: "Senin",
      unread: 0,
      avatar: "P",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-8 pb-4 shadow-sm z-10">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight text-center">Pesan</h1>
      </div>

      <div className="px-5 mt-4 space-y-4">
        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-3 border border-gray-200 shadow-sm">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari pesan..."
            className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700"
          />
        </div>

        {/* Info Banner */}
        <div className="bg-orange-50 border border-orange-100 p-3 rounded-2xl flex items-start gap-3">
          <Info className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
          <p className="text-xs text-orange-800 leading-relaxed">
            Pesan dengan driver akan terhapus otomatis 24 jam setelah pesanan selesai untuk menjaga privasi Anda.
          </p>
        </div>

        {/* Chat List */}
        <div className="space-y-3 mt-4">
          {chats.map((chat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={chat.id}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-200 to-orange-400 flex flex-shrink-0 items-center justify-center text-white font-bold text-xl shadow-inner">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center mb-1">
                  <h3 className={`font-bold text-gray-900 truncate ${chat.unread > 0 ? "text-gray-900" : "text-gray-700"}`}>
                    {chat.name}
                  </h3>
                  <span className={`text-[10px] whitespace-nowrap ${chat.unread > 0 ? "text-orange-600 font-bold" : "text-gray-400"}`}>
                    {chat.time}
                  </span>
                </div>
                <p className={`text-sm truncate ${chat.unread > 0 ? "font-semibold text-gray-800" : "text-gray-500"}`}>
                  {chat.message}
                </p>
              </div>
              {chat.unread > 0 && (
                <div className="w-6 h-6 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-sm">
                  {chat.unread}
                </div>
              )}
            </motion.div>
          ))}

          {/* Skeleton Loaders to show more dummy items */}
          {[1, 2, 3, 4, 5].map((i) => (
             <div key={`skeleton-${i}`} className="bg-gray-200/50 p-4 rounded-2xl flex items-center gap-4 animate-pulse">
               <div className="w-12 h-12 rounded-full bg-gray-300"></div>
               <div className="flex-1 space-y-2">
                 <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                 <div className="h-3 bg-gray-300 rounded w-3/4"></div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
