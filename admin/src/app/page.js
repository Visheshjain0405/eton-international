"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  Users, 
  Layers, 
  Clock, 
  Download,
  Plus,
  TrendingUp
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InquiriesInbox from "../components/InquiriesInbox";
import ProductCatalog from "../components/ProductCatalog";
import AddProductModal from "../components/AddProductModal";
import ProductDetailsModal from "../components/ProductDetailsModal";
import api from "../utils/api";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("inquiries");

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout on server failed: ", error);
    }
    router.push("/login");
  };

  const exportToCSV = (data, filename) => {
    if (!data || data.length === 0) {
      alert("No data available to export.");
      return;
    }
    const headers = Object.keys(data[0]);
    const csvRows = [];
    csvRows.push(headers.join(","));
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ("" + (row[header] || "")).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }
    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportInquiries = () => {
    const dataToExport = inquiries.map(inq => ({
      ID: inq.id,
      Name: inq.name,
      Company: inq.company || "N/A",
      Email: inq.email,
      Phone: inq.phone || "N/A",
      Interest: inq.interest || "General",
      Status: inq.status,
      Date: inq.date || inq.createdAt || ""
    }));
    exportToCSV(dataToExport, "eteon_inquiries.csv");
  };

  const handleExportProducts = () => {
    const dataToExport = products.map(p => ({
      ID: p.id,
      Slug: p.slug,
      Name: p.name,
      Category: p.category,
      Description: p.desc || p.description || ""
    }));
    exportToCSV(dataToExport, "eteon_products.csv");
  };

  // Fetched data state
  const [inquiries, setInquiries] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal & form states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Packaging",
    image: "",
    desc: "",
    specs: []
  });

  // Fetch inquiries and products from the backend APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Authenticate session first
        await api.get("/auth/me");

        const [prodRes, inqRes] = await Promise.all([
          api.get("/products"),
          api.get("/inquiries")
        ]);
        
        setProducts(prodRes.data);
        setInquiries(inqRes.data);
      } catch (error) {
        console.error("Failed to fetch data from backend: ", error);
        router.push("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await api.patch(`/inquiries/${id}`, { status: newStatus });
      setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
    } catch (error) {
      console.error("Error updating status: ", error);
      alert("Failed to update status on server.");
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await api.delete(`/inquiries/${id}`);
      setInquiries(prev => prev.filter(inq => inq.id !== id));
    } catch (error) {
      console.error("Error deleting inquiry: ", error);
      alert("Failed to delete inquiry.");
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await api.delete(`/products/${id}`);
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error("Error deleting product: ", error);
      alert("Failed to delete product from database.");
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.desc) {
      alert("Please fill in all required fields.");
      return;
    }
    
    try {
      const defaultImage = newProduct.image || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600";
      const payload = { ...newProduct, image: defaultImage };

      const res = await api.post("/products", payload);
      setProducts(prev => [res.data, ...prev]);
      setIsModalOpen(false);
      setNewProduct({ name: "", category: "Packaging", image: "", desc: "", specs: [] });
    } catch (error) {
      console.error("Error creating product: ", error);
      alert("Network error: Failed to connect to the backend.");
    }
  };

  const renderSubHeader = () => {
    switch (activeTab) {
      case "inquiries":
        return (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Inquiries Inbox</h2>
              <p className="text-slate-505 text-sm mt-1">Review live exporter inquiries, follow up on requests, and manage client leads.</p>
            </div>
            <button 
              onClick={handleExportInquiries}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm self-start sm:self-auto"
            >
              <Download size={16} /> Export CSV
            </button>
          </div>
        );
      case "products":
        return (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Products Catalog</h2>
              <p className="text-slate-550 text-sm mt-1">Manage product showcases, descriptions, and specifications featured on the main site.</p>
            </div>
            <button 
              onClick={handleExportProducts}
              className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm self-start sm:self-auto"
            >
              <Download size={16} /> Export CSV
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex overflow-hidden">
      {/* Sidebar Component */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        productsCount={products.length} 
        handleLogout={handleLogout}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
        {/* Navbar Component */}
        <Navbar activeTab={activeTab} handleLogout={handleLogout} />

        {/* Scrollable Body */}
        <main className="flex-grow p-8 max-w-7xl w-full mx-auto pb-24">
          {/* Dynamic Page Sub Header */}
          {renderSubHeader()}

          {/* Stats Grid - Show on Inquiries tab for a quick dashboard preview */}
          {activeTab === "inquiries" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {/* Total Inquiries */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-350 hover:shadow transition-all duration-300">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Inquiries</p>
                  <h3 className="text-2xl font-black text-slate-950 mt-1">{inquiries.length}</h3>
                </div>
              </div>

              {/* Pending Inquiries */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-350 hover:shadow transition-all duration-300">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 border border-amber-100">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Pending Action</p>
                  <h3 className="text-2xl font-black text-slate-950 mt-1">
                    {inquiries.filter(i => i.status === "Pending").length}
                  </h3>
                </div>
              </div>

              {/* Catalog Size */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-350 hover:shadow transition-all duration-300 cursor-pointer" onClick={() => setActiveTab("products")}>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-650 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100">
                  <Layers size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Active Products</p>
                  <h3 className="text-2xl font-black text-slate-950 mt-1">{products.length}</h3>
                </div>
              </div>

              {/* Completion Rate */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-350 hover:shadow transition-all duration-300">
                <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center shrink-0 border border-rose-100">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Completion Rate</p>
                  <h3 className="text-2xl font-black text-slate-950 mt-1">
                    {inquiries.length > 0 
                      ? `${Math.round((inquiries.filter(i => i.status === "Completed").length / inquiries.length) * 100)}%` 
                      : "0%"
                    }
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Active Tab Component Render */}
          {activeTab === "inquiries" && (
            <InquiriesInbox 
              inquiries={inquiries}
              handleStatusChange={handleStatusChange}
              handleDeleteInquiry={handleDeleteInquiry}
            />
          )}

          {activeTab === "products" && (
            <ProductCatalog 
              products={products}
              handleDeleteProduct={handleDeleteProduct}
              setIsModalOpen={setIsModalOpen}
              onViewProduct={(prod) => {
                setSelectedProduct(prod);
                setIsDetailsOpen(true);
              }}
            />
          )}
        </main>
      </div>

      {/* Add Product Modal Component */}
      <AddProductModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleAddProduct={handleAddProduct}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
      />

      {/* Product Details Modal Component */}
      <ProductDetailsModal 
        isOpen={isDetailsOpen}
        onClose={() => {
          setIsDetailsOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
      />
    </div>
  );
}
