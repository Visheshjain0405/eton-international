import React, { useState } from "react";
import { Plus, Trash2, AlertCircle, Eye, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCatalog({ products, handleDeleteProduct, setIsModalOpen, onViewProduct }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter products based on search term and category
  const filteredProducts = products.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prod.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          String(prod.id).toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || prod.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination variables
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  
  // Auto-adjust page if filter narrows the results list
  const adjustedCurrentPage = currentPage > totalPages ? totalPages : currentPage;
  
  const startIndex = (adjustedCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden flex flex-col">
      
      {/* Header and Add Action */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-50/30">
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg">Product Catalog</h3>
          <p className="text-xs text-slate-400 mt-0.5">Manage and organize items showcased on the main trade site.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-755 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-blue-700/10 hover:shadow-lg self-end sm:self-auto"
        >
          <Plus size={14} /> Add Product
        </button>
      </div>

      {/* Filters and Controls Bar */}
      <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/10">
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by ID, name, or description..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset to first page on search
            }}
            className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* Category Filter & Page Size */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-slate-400" />
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1); // reset to first page on filter
              }}
              className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500/50 transition-all text-slate-700"
            >
              <option value="all">All Categories</option>
              <option value="Packaging">Packaging</option>
              <option value="Organic and Cowdung Fertilizer">Organic & Fertilizer</option>
              <option value="Surgical and Disposable">Surgical & Disposable</option>
            </select>
          </div>

          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="bg-white border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold focus:outline-none focus:border-blue-500/50 transition-all text-slate-700"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
            <option value={50}>50 per page</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200/65 text-slate-500 text-xs font-bold uppercase tracking-wider bg-slate-50/20">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Product Info</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Date Added</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((prod) => (
                <tr key={prod.id} className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-5 font-mono text-xs font-bold text-slate-450">{prod.id}</td>
                  <td className="px-6 py-5 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center shadow-sm">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="font-bold text-slate-900 text-sm">{prod.name}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      prod.category === "Packaging" 
                        ? "bg-blue-50 text-blue-700 border-blue-100" 
                        : prod.category === "Organic and Cowdung Fertilizer"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                        : "bg-rose-50 text-rose-700 border-rose-100"
                    }`}>
                      {prod.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-500 max-w-xs truncate">{prod.desc}</td>
                  <td className="px-6 py-5 text-sm text-slate-500 font-semibold">{prod.date || "2026-06-27"}</td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button 
                        onClick={() => onViewProduct(prod)}
                        title="View Details"
                        className="p-2 text-blue-650 hover:bg-blue-50 rounded-xl transition-all"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => handleDeleteProduct(prod.id)}
                        title="Delete Product"
                        className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-20">
                  <div className="flex flex-col items-center justify-center text-slate-400 gap-3">
                    <AlertCircle size={36} className="text-slate-300" />
                    <p className="font-bold text-slate-800">No matching products found</p>
                    <p className="text-xs">Adjust your search query or reset filters to see results.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls Footer */}
      {totalPages > 1 && (
        <div className="p-6 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs font-semibold text-slate-500">
            Showing <span className="text-slate-800 font-bold">{totalItems === 0 ? 0 : startIndex + 1}</span> to{" "}
            <span className="text-slate-800 font-bold">{endIndex}</span> of{" "}
            <span className="text-slate-800 font-bold">{totalItems}</span> entries
          </span>

          <div className="flex items-center gap-1.5">
            {/* Previous Page Button */}
            <button
              onClick={() => handlePageChange(adjustedCurrentPage - 1)}
              disabled={adjustedCurrentPage === 1}
              className={`p-2 rounded-lg border border-slate-200 flex items-center justify-center transition-all ${
                adjustedCurrentPage === 1
                  ? "bg-slate-50 text-slate-300 cursor-not-allowed"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <ChevronLeft size={16} />
            </button>

            {/* Numbered Page Buttons */}
            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 rounded-lg border text-xs font-bold transition-all ${
                  adjustedCurrentPage === page
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Page Button */}
            <button
              onClick={() => handlePageChange(adjustedCurrentPage + 1)}
              disabled={adjustedCurrentPage === totalPages}
              className={`p-2 rounded-lg border border-slate-200 flex items-center justify-center transition-all ${
                adjustedCurrentPage === totalPages
                  ? "bg-slate-50 text-slate-300 cursor-not-allowed"
                  : "bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
