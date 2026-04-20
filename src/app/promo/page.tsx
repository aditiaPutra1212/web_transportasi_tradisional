"use client";

import { Tag, Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PromoPage() {
  const promos = [
    {
      id: 1,
      title: "Diskon 50% Andong Wisata",
      description: "Keliling Malioboro lebih hemat dengan Andong! Maksimal diskon Rp20.000.",
      code: "ANDONGHEMAT",
      expiry: "Berakhir dlm 2 hari",
      color: "from-orange-400 to-amber-500",
      icon: "🐎",
    },
    {
      id: 2,
      title: "Cashback 30% Becak Listrik",
      description: "Gunakan Gopay untuk pembayaran Becak Listrik dan dapatkan cashback.",
      code: "BECAKLISTRIK",
      expiry: "Berakhir dlm 5 hari",
      color: "from-blue-400 to-blue-600",
      icon: "⚡",
    },
    {
      id: 3,
      title: "Potongan Rp10.000 Pengguna Baru",
      description: "Khusus untuk perjalanan pertamamu menggunakan aplikasi.",
      code: "BARUJOGJA",
      expiry: "Berlaku s/d 31 Des 2026",
      color: "from-green-400 to-emerald-500",
      icon: "🎉",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-8 pb-4 shadow-sm z-10 sticky top-0">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight text-center">Promo Menarik</h1>
      </div>

      <div className="px-5 mt-6 space-y-5">
        {promos.map((promo, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={promo.id}
            className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className={`h-24 bg-gradient-to-r ${promo.color} relative p-4 flex items-center`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="relative z-10 bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                {promo.icon}
              </div>
              <div className="relative z-10 ml-4 flex-1">
                <h3 className="text-white font-bold text-lg leading-tight">{promo.title}</h3>
              </div>
            </div>
            
            <div className="p-5">
              <p className="text-sm text-gray-600 mb-4">{promo.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 border-dashed flex items-center gap-2">
                  <Tag className="w-4 h-4 text-orange-500" />
                  <span className="font-bold text-gray-800 text-sm">{promo.code}</span>
                </div>
                
                <button className="bg-orange-50 text-orange-600 font-bold px-4 py-1.5 rounded-lg text-sm hover:bg-orange-100 transition-colors">
                  Pakai
                </button>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5 mr-1" /> {promo.expiry}
                <div className="ml-auto flex items-center text-orange-500 font-medium cursor-pointer">
                  S & K <ChevronRight className="w-3 h-3 ml-0.5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
