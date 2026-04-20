"use client";

import dynamic from "next/dynamic";
import { ArrowLeft, Navigation, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Dynamically import map component without SSR
const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">
      Memuat peta...
    </div>
  ),
});

export default function OrderPage() {
  const [selectedService, setSelectedService] = useState<number | null>(1);
  const router = useRouter();

  const services = [
    { id: 1, name: "Becak Biasa", time: "1-2 Menit", capacity: 2, price: "Rp24.000", icon: "🚲" },
    { id: 2, name: "Becak Listrik", time: "1-2 Menit", capacity: 2, price: "Rp34.000", icon: "⚡" },
  ];

  const handleOrder = () => {
    alert("Pesanan berhasil dibuat! Driver sedang menuju ke lokasimu.");
    router.push("/activity");
  };

  return (
    <div className="flex flex-col h-full min-h-[100dvh] bg-gray-50 relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <MapComponent />
      </div>

      {/* Top Navigation Overlay */}
      <div className="relative z-10 p-4 pt-8">
        <Link href="/">
          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md text-gray-700 hover:bg-gray-50 transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* Location Card Overlay */}
      <div className="relative z-10 px-4 mt-2">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-4 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Navigation className="w-3 h-3" />
            </div>
            <div className="flex-1 border-b border-gray-100 pb-2">
              <p className="text-xs text-gray-400">Jemput dari</p>
              <p className="text-sm font-semibold text-gray-800">Malioboro Mall</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <MapPin className="w-3 h-3" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-400">Tujuan ke</p>
              <p className="text-sm font-semibold text-gray-800">Keraton Yogyakarta</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      {/* Bottom Sheet Overlay */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative z-20 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] px-5 pt-6 pb-28 flex flex-col gap-4"
      >
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-2"></div>
        
        {/* Service Options */}
        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedService === service.id
                  ? "border-orange-500 bg-orange-50/50"
                  : "border-transparent bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="text-3xl bg-white w-12 h-12 flex items-center justify-center rounded-xl shadow-sm">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.name}</h3>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <span>waktu {service.time}</span> • <span>👤 {service.capacity}</span>
                  </p>
                </div>
              </div>
              <div className="font-bold text-gray-900">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center py-2 px-1">
          <button className="text-sm text-gray-600 font-medium flex items-center gap-1">
            Metode Pembayaran <ChevronRight className="w-4 h-4" />
          </button>
          <div className="bg-orange-100 text-orange-600 text-xs px-3 py-1.5 rounded-full font-bold">
            Vouchers
          </div>
        </div>

        <button 
          onClick={handleOrder}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-orange-500/30 flex justify-between items-center px-6 hover:opacity-90 transition-opacity"
        >
          <span>Pesan Sekarang</span>
          <span className="flex items-center gap-2">
            {services.find((s) => s.id === selectedService)?.price}
            <div className="bg-white/20 p-1 rounded-full">
               <ChevronRight className="w-5 h-5" />
            </div>
          </span>
        </button>
      </motion.div>
    </div>
  );
}
