import React from "react";
import { Layers, ChevronRight } from "lucide-react";

export default function CategoriesStats({ categoriesStats, setActiveTab }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categoriesStats.map((cat, idx) => (
        <div 
          key={idx}
          className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-8 flex flex-col justify-between hover:border-slate-350 hover:shadow transition-all duration-300"
        >
          <div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-white flex items-center justify-center shadow-lg mb-6`}>
              <Layers size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{cat.desc}</p>
            <span className="bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1.5 rounded-lg">
              {cat.count} Active Items
            </span>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">Updated recently</span>
            <button 
              onClick={() => {
                setActiveTab("products");
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group"
            >
              Manage Items 
              <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
