import React from "react";
import { X, Tag, Info, List, CheckCircle, HelpCircle } from "lucide-react";

export default function ProductDetailsModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-8 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{product.id}</span>
            <h3 className="font-extrabold text-slate-900 text-lg leading-tight mt-0.5">{product.name}</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-450 hover:bg-slate-200 rounded-lg transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Image and Main Info */}
          <div className="space-y-6">
            <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-150 overflow-hidden flex items-center justify-center relative shadow-sm">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border ${
                product.category === "Packaging" 
                  ? "bg-blue-600 text-white border-blue-500" 
                  : product.category === "Organic and Cowdung Fertilizer"
                  ? "bg-emerald-650 text-white border-emerald-500"
                  : "bg-rose-650 text-white border-rose-500"
              }`}>
                {product.category}
              </span>
            </div>

            {/* General Info */}
            <div className="bg-slate-50/50 border border-slate-200/60 p-5 rounded-2xl space-y-4">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Short Preview</span>
                <p className="text-slate-600 text-sm leading-relaxed italic">"{product.desc}"</p>
              </div>

              {product.highlights && product.highlights.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Highlights</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.highlights.map((h, i) => (
                      <span key={i} className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <CheckCircle size={12} className="text-emerald-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Detailed Specs and Descriptions */}
          <div className="space-y-6">
            {/* Description Section */}
            <div>
              <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
                <Info size={14} /> Full Description
              </h4>
              <p className="text-slate-650 text-sm leading-relaxed">
                {product.description || product.longDescription || "No detailed description available."}
              </p>
            </div>

            {/* Specifications Table */}
            {product.specs && product.specs.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest flex items-center gap-1.5 mb-3">
                  <List size={14} /> Specifications
                </h4>
                <div className="border border-slate-200/60 rounded-xl overflow-hidden shadow-sm bg-white">
                  <div className="divide-y divide-slate-100">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="grid grid-cols-3 text-xs p-3 hover:bg-slate-50/50 transition-colors">
                        <span className="font-bold text-slate-500 uppercase tracking-wider col-span-1">{spec.label}</span>
                        <span className="text-slate-800 font-medium col-span-2 whitespace-pre-line">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features list */}
            {product.features && product.features.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-450 uppercase tracking-widest flex items-center gap-1.5 mb-3">
                  <Tag size={14} /> Product Features
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {product.features.map((feat, i) => (
                    <div key={i} className="bg-slate-50/50 border border-slate-200/60 p-4 rounded-xl flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-650 flex items-center justify-center shrink-0 border border-blue-100/50 mt-0.5">
                        <CheckCircle size={14} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">{feat.title}</h5>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-8 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-bold bg-blue-600 hover:bg-blue-750 text-white rounded-xl transition-all shadow-md shadow-blue-700/10 hover:shadow-lg"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
