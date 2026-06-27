import React from "react";
import { ChevronRight, Settings } from "lucide-react";

export default function Navbar({ activeTab }) {
  const getTabLabel = () => {
    switch (activeTab) {
      case "inquiries":
        return "Inquiries Inbox";
      case "products":
        return "Products Catalog";
      case "categories":
        return "Categories Stats";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 h-20 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm shrink-0">
      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
        <span>Dashboard</span>
        <ChevronRight size={12} />
        <span className="text-slate-900">{getTabLabel()}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-3 py-1.5 rounded-full border border-slate-200">
          v1.0.0
        </span>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all cursor-pointer">
          <Settings size={18} />
        </div>
      </div>
    </header>
  );
}
