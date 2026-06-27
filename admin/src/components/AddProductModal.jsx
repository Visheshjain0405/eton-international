import React from "react";
import { X, Plus, Trash2, Layers } from "lucide-react";

export default function AddProductModal({ isModalOpen, setIsModalOpen, handleAddProduct, newProduct, setNewProduct }) {
  if (!isModalOpen) return null;

  const handleAddSpecRow = () => {
    setNewProduct(prev => ({
      ...prev,
      specs: [...(prev.specs || []), { label: "", value: "" }]
    }));
  };

  const handleSpecChange = (index, field, val) => {
    setNewProduct(prev => {
      const updatedSpecs = [...(prev.specs || [])];
      updatedSpecs[index] = { ...updatedSpecs[index], [field]: val };
      return { ...prev, specs: updatedSpecs };
    });
  };

  const handleRemoveSpecRow = (index) => {
    setNewProduct(prev => ({
      ...prev,
      specs: (prev.specs || []).filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/50 shrink-0">
          <h3 className="font-extrabold text-slate-900 text-lg">Add New Product</h3>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="p-1.5 text-slate-450 hover:bg-slate-200 rounded-lg transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body / Form */}
        <form onSubmit={handleAddProduct} className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Product Name *</label>
              <input 
                type="text" 
                required
                value={newProduct.name}
                onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                placeholder="e.g. PP Woven Fabric Rolls"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category *</label>
              <select 
                value={newProduct.category}
                onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-slate-700 font-semibold"
              >
                <option value="Packaging">Packaging</option>
                <option value="Organic and Cowdung Fertilizer">Organic and Cowdung Fertilizer</option>
                <option value="Surgical and Disposable">Surgical and Disposable</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Image URL</label>
              <input 
                type="text" 
                value={newProduct.image}
                onChange={(e) => setNewProduct(prev => ({ ...prev, image: e.target.value }))}
                placeholder="e.g. https://domain.com/image.jpg"
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Short Description *</label>
              <input 
                type="text"
                required
                value={newProduct.desc}
                onChange={(e) => setNewProduct(prev => ({ ...prev, desc: e.target.value }))}
                placeholder="Enter a brief product preview line..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-all text-slate-800"
              />
            </div>
          </div>

          {/* Dynamic Specifications Table Creator */}
          <div className="border border-slate-200/60 rounded-2xl p-5 bg-slate-50/40 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Specifications Table</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">Specify technical attributes (e.g. Material: Cotton, Form: Pellets).</p>
              </div>
              <button
                type="button"
                onClick={handleAddSpecRow}
                className="flex items-center gap-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all shadow-sm"
              >
                <Plus size={10} /> Add Spec Row
              </button>
            </div>

            {newProduct.specs && newProduct.specs.length > 0 ? (
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {newProduct.specs.map((spec, index) => (
                  <div key={index} className="flex gap-2.5 items-center">
                    <input
                      type="text"
                      required
                      placeholder="Label (e.g. Material)"
                      value={spec.label}
                      onChange={(e) => handleSpecChange(index, "label", e.target.value)}
                      className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-all text-slate-800"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Value (e.g. 100% Cotton)"
                      value={spec.value}
                      onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                      className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-blue-500 transition-all text-slate-800"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSpecRow(index)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 border border-dashed border-slate-200 rounded-xl bg-white/50 text-slate-400">
                <p className="text-xs font-semibold">No specifications added yet</p>
                <p className="text-[10px] mt-0.5">Click "Add Spec Row" to define custom attributes.</p>
              </div>
            )}
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 bg-slate-50/20 -mx-6 -mb-6 p-6 shrink-0">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-100 rounded-xl transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-5 py-2.5 text-sm font-bold bg-blue-600 hover:bg-blue-755 text-white rounded-xl transition-all shadow-md shadow-blue-700/10 hover:shadow-lg"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
