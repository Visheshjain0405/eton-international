import React from "react";
import { Users, Layers, TrendingUp, Settings } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, productsCount }) {
  return (
    <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col border-r border-slate-800 shrink-0 h-screen sticky top-0 z-40">
      {/* Brand/Logo Area */}
      <div className="h-20 flex items-center gap-3 px-6 border-b border-slate-800">
        <div className="bg-blue-600 text-white p-2 rounded-xl">
          <Layers size={20} />
        </div>
        <div>
          <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase leading-none">Eteon Int.</span>
          <h1 className="text-sm font-black tracking-tight text-white leading-tight mt-0.5">Admin Console</h1>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        <button 
          onClick={() => setActiveTab("inquiries")}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all ${
            activeTab === "inquiries"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
              : "text-slate-400 hover:bg-slate-850 hover:text-slate-200"
          }`}
        >
          <Users size={18} />
          Inquiries Inbox
        </button>

        <button 
          onClick={() => setActiveTab("products")}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all ${
            activeTab === "products"
              ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
              : "text-slate-400 hover:bg-slate-850 hover:text-slate-200"
          }`}
        >
          <Layers size={18} />
          Products Catalog ({productsCount})
        </button>

      </nav>

      {/* Sidebar Footer / User Profile */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2 bg-slate-950/40 rounded-xl border border-slate-800/40">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-200 truncate">Administrator</p>
            <p className="text-[10px] text-slate-500 font-semibold truncate">admin@eteon.com</p>
          </div>
          <button className="text-slate-505 hover:text-slate-300 transition-colors">
            <Settings size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
