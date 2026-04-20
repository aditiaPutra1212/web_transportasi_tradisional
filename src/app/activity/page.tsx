"use client";

import { Clock, MapPin, Navigation, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ActivityPage() {
  const activities = [
    {
      id: 1,
      service: "Becak Listrik",
      status: "Selesai",
      date: "17 Apr 2026, 14:30",
      price: "Rp34.000",
      from: "Malioboro Mall",
      to: "Keraton Yogyakarta",
    },
    {
      id: 2,
      service: "Andong Wisata",
      status: "Selesai",
      date: "15 Apr 2026, 09:15",
      price: "Rp150.000",
      from: "Stasiun Tugu",
      to: "Taman Sari",
    },
    {
      id: 3,
      service: "Becak Biasa",
      status: "Dibatalkan",
      date: "14 Apr 2026, 18:00",
      price: "Rp20.000",
      from: "Pasar Beringharjo",
      to: "Hotel Mutiara",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white px-5 pt-8 pb-4 shadow-sm z-10 sticky top-0">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight text-center">Aktivitas</h1>
        
        {/* Tabs */}
        <div className="flex mt-6 border-b border-gray-200">
          <div className="flex-1 pb-3 text-center border-b-2 border-orange-500 text-orange-600 font-bold text-sm">
            Riwayat
          </div>
          <div className="flex-1 pb-3 text-center text-gray-500 font-medium text-sm">
            Terjadwal
          </div>
        </div>
      </div>

      <div className="px-5 mt-4 space-y-4">
        {activities.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={item.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 overflow-hidden relative"
          >
            {/* Status indicator line */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${item.status === "Selesai" ? "bg-green-500" : "bg-red-500"}`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-xl ${item.service.includes("Andong") ? "bg-orange-100" : "bg-blue-100"}`}>
                  <span className="text-xl">{item.service.includes("Andong") ? "🐎" : "🚲"}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.service}</h3>
                  <p className="text-[10px] text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.date}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">{item.price}</p>
                <p className={`text-[10px] font-bold mt-1 flex items-center justify-end gap-1 ${item.status === "Selesai" ? "text-green-600" : "text-red-500"}`}>
                  {item.status === "Selesai" && <CheckCircle2 className="w-3 h-3" />}
                  {item.status}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-2 relative">
               <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-gray-200 border-l border-dashed border-gray-300"></div>
               
               <div className="flex items-center gap-3 relative z-10">
                 <div className="w-4 h-4 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                 </div>
                 <p className="text-xs text-gray-700 font-medium">{item.from}</p>
               </div>
               
               <div className="flex items-center gap-3 relative z-10">
                 <div className="w-4 h-4 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center">
                    <MapPin className="w-2.5 h-2.5 text-orange-500" />
                 </div>
                 <p className="text-xs text-gray-700 font-medium">{item.to}</p>
               </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
              <button className="flex-1 py-2 rounded-xl font-bold text-xs bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors">
                Beri Nilai
              </button>
              <button className="flex-1 py-2 rounded-xl font-bold text-xs bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                Pesan Lagi
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
