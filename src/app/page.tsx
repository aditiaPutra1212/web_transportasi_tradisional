"use client";

import { motion } from "framer-motion";
import { Search, Scan, Plus, DollarSign, ChevronRight, Bell } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    { id: 1, name: "Andong", icon: "🐎", color: "bg-orange-100", route: "/order" },
    { id: 2, name: "Becak", icon: "🚲", color: "bg-orange-100", route: "/order" },
    { id: 3, name: "Sewa", icon: "🗝️", color: "bg-gray-100", route: "#" },
    { id: 4, name: "Wisata", icon: "🏛️", color: "bg-gray-100", route: "#" },
    { id: 5, name: "Kirim", icon: "📦", color: "bg-gray-100", route: "#" },
    { id: 6, name: "Belanja", icon: "🛍️", color: "bg-gray-100", route: "#" },
    { id: 7, name: "Kuliner", icon: "🍜", color: "bg-gray-100", route: "#" },
    { id: 8, name: "Lainnya", icon: "⋮", color: "bg-gray-100", route: "#" },
  ];

  const handleAction = (msg: string) => {
    alert(msg);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header Section */}
      <div className="bg-white px-5 pt-8 pb-4 rounded-b-3xl shadow-sm relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Selamat Datang,</h1>
            <p className="text-gray-500 text-sm">Mau keliling Jogja naik apa hari ini?</p>
          </div>
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-white border-2 border-white overflow-hidden">
                <div className="w-full h-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                  B
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-3 border border-gray-200">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari warung, lokasi..."
              className="bg-transparent border-none outline-none ml-3 w-full text-sm text-gray-700"
            />
          </div>
          <button 
            onClick={() => handleAction("Fitur Scan Barcode belum tersedia di versi demo ini.")}
            className="bg-orange-100 p-3 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
          >
            <Scan className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-5 mt-6 space-y-6">
        {/* Wallet Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-5 text-white shadow-xl shadow-gray-900/20 relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
          
          <div className="flex justify-between items-center relative z-10">
            <div>
              <p className="text-gray-400 text-xs font-medium mb-1">Gopay / Saldo</p>
              <div className="flex items-end gap-2">
                <span className="text-sm font-semibold text-gray-300">Rp</span>
                <span className="text-2xl font-bold tracking-tight">90.000</span>
              </div>
              <p className="text-xs text-orange-400 mt-1 flex items-center gap-1">
                <span>⭐</span> 120 Poin
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => handleAction("Fitur Top Up Saldo belum tersedia di versi demo ini.")}
                className="flex flex-col items-center gap-1"
              >
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                  <Plus className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">Top Up</span>
              </button>
              <button 
                onClick={() => handleAction("Fitur Pembayaran belum tersedia di versi demo ini.")}
                className="flex flex-col items-center gap-1"
              >
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-medium">Bayar</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-4 gap-y-6 gap-x-2">
          {services.map((service, index) => {
            const content = (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center text-3xl shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300 relative overflow-hidden`}>
                  {/* Subtle gradient overlay for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
                  <span className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300">{service.icon}</span>
                </div>
                <span className="text-xs font-medium text-gray-700">{service.name}</span>
              </motion.div>
            );

            if (service.route === "#") {
              return (
                <div key={service.id} onClick={() => handleAction(`Layanan ${service.name} belum tersedia di versi demo ini.`)}>
                  {content}
                </div>
              );
            }

            return (
              <Link href={service.route} key={service.id}>
                {content}
              </Link>
            );
          })}
        </div>

        {/* Promo Banner */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Promo Menarik</h2>
            <Link href="/promo">
              <button className="text-orange-600 text-sm font-medium flex items-center">
                Lihat semua <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          
          <Link href="/promo">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full h-40 rounded-3xl bg-gradient-to-r from-orange-400 to-amber-500 overflow-hidden relative shadow-lg shadow-orange-500/20 cursor-pointer"
            >
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              <div className="p-6 relative z-10 flex flex-col justify-center h-full">
                <span className="bg-white text-orange-600 text-[10px] font-bold px-2 py-1 rounded-md w-fit mb-2 uppercase tracking-wider">Spesial</span>
                <h3 className="text-white font-bold text-xl leading-tight mb-1">Diskon 50% Andong</h3>
                <p className="text-orange-50 text-xs">Keliling Malioboro lebih hemat!</p>
                
                {/* Dummy illustration */}
                <div className="absolute right-0 bottom-0 text-7xl translate-x-4 translate-y-4 opacity-50">
                  🐎
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
