"use client";

import React, { useState } from "react";
import { 
  Users, 
  Layers, 
  TrendingUp, 
  Search, 
  Filter, 
  Trash2, 
  CheckCircle, 
  Clock, 
  Download,
  AlertCircle,
  ChevronRight,
  Settings
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("inquiries");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for inquiries
  const [inquiries, setInquiries] = useState([
    { id: "INQ-001", name: "Amit Sharma", company: "Surat Textiles Ltd", email: "amit@surattextiles.com", phone: "+91 95585 55447", interest: "PP Bags", status: "Pending", date: "2026-06-23" },
    { id: "INQ-002", name: "David Miller", company: "Global Agro Importers", email: "david@globalagro.com", phone: "+1 (555) 345-6789", interest: "Organic Fertilizer", status: "Completed", date: "2026-06-22" },
    { id: "INQ-003", name: "Rajesh Patel", company: "Surat Agri Co-op", email: "rajesh@agricoop.in", phone: "+91 99044 55667", interest: "Cow Dung Fertilizer", status: "In Progress", date: "2026-06-21" },
    { id: "INQ-004", name: "Sophia Cho", company: "Seoul Medical Supplies", email: "sophia.cho@seoulmed.kr", phone: "+82 10-1234-5678", interest: "Surgical Items", status: "Pending", date: "2026-06-20" },
    { id: "INQ-005", name: "Carlos Henrique", company: "América Embalagens", email: "carlos@amembalagens.br", phone: "+55 11 98765-4321", interest: "Disposable Items", status: "Completed", date: "2026-06-19" },
  ]);

  // Mock data for products summary
  const categoriesStats = [
    { name: "Packaging", count: 12, color: "from-blue-500 to-indigo-600", desc: "Premium industrial bags and packaging solutions." },
    { name: "Organic and Cowdung Fertilizer", count: 8, color: "from-emerald-500 to-teal-600", desc: "Eco-friendly bio-fertilizers and soil enhancers." },
    { name: "Surgical and Disposable", count: 15, color: "from-rose-500 to-pink-600", desc: "Sterile medical supplies and personal protection wear." }
  ];

  const handleStatusChange = (id, newStatus) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
  };

  const handleDeleteInquiry = (id) => {
    if (confirm("Are you sure you want to delete this inquiry?")) {
      setInquiries(prev => prev.filter(inq => inq.id !== id));
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = 
      inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.interest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Premium Light Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 text-blue-650 p-2.5 rounded-xl border border-blue-100 shadow-sm">
              <Layers size={22} />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Eteon International</span>
              <h1 className="text-lg font-black tracking-tight text-slate-900 mt-0.5">Admin Control Panel</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-3 py-1.5 rounded-full border border-slate-200">
              v1.0.0
            </span>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all cursor-pointer">
              <Settings size={18} />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Sub Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">System Dashboard</h2>
            <p className="text-slate-500 text-sm mt-1">Review live exporter inquiries, track catalog updates, and manage leads.</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-750 text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-md shadow-blue-700/10 hover:shadow-lg self-start md:self-auto">
            <Download size={16} /> Export CSV Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          
          {/* Total Inquiries */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-300 hover:shadow transition-all duration-300">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-blue-100">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total Inquiries</p>
              <h3 className="text-2xl font-black text-slate-950 mt-1">{inquiries.length}</h3>
            </div>
          </div>

          {/* Pending Inquiries */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-300 hover:shadow transition-all duration-300">
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
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-300 hover:shadow transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-650 rounded-xl flex items-center justify-center shrink-0 border border-indigo-100">
              <Layers size={24} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Active Products</p>
              <h3 className="text-2xl font-black text-slate-950 mt-1">35</h3>
            </div>
          </div>

          {/* Completion Rate */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex items-center gap-5 hover:border-slate-300 hover:shadow transition-all duration-300">
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 mb-8 gap-6">
          <button 
            onClick={() => setActiveTab("inquiries")}
            className={`pb-4 font-bold text-sm tracking-wider uppercase border-b-2 transition-all ${
              activeTab === "inquiries" 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-slate-400 hover:text-slate-800"
            }`}
          >
            Inquiries Inbox
          </button>
          <button 
            onClick={() => setActiveTab("categories")}
            className={`pb-4 font-bold text-sm tracking-wider uppercase border-b-2 transition-all ${
              activeTab === "categories" 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-slate-400 hover:text-slate-800"
            }`}
          >
            Catalog Categories
          </button>
        </div>

        {/* Content Area */}
        {activeTab === "inquiries" && (
          <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden">
            {/* Filters Bar */}
            <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-50/50">
              {/* Search */}
              <div className="relative w-full md:max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search client, company, or product..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-3 w-full md:w-auto self-end md:self-auto justify-end">
                <Filter size={16} className="text-slate-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500/50 transition-all text-slate-700 font-semibold"
                >
                  <option value="all">All Statuses</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Inquiries Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200/60 text-slate-500 text-xs font-bold uppercase tracking-wider bg-slate-50/40">
                    <th className="px-6 py-4">ID</th>
                    <th className="px-6 py-4">Client / Company</th>
                    <th className="px-6 py-4">Contact Info</th>
                    <th className="px-6 py-4">Product Interest</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInquiries.length > 0 ? (
                    filteredInquiries.map((inq) => (
                      <tr key={inq.id} className="hover:bg-slate-50/30 transition-colors">
                        <td className="px-6 py-5 font-mono text-xs font-bold text-slate-400">{inq.id}</td>
                        <td className="px-6 py-5">
                          <p className="font-bold text-slate-900 text-sm">{inq.name}</p>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">{inq.company}</p>
                        </td>
                        <td className="px-6 py-5 text-sm">
                          <p className="text-slate-700 font-medium">{inq.email}</p>
                          <p className="text-xs text-slate-400 mt-0.5">{inq.phone}</p>
                        </td>
                        <td className="px-6 py-5">
                          <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-md border border-slate-200">
                            {inq.interest}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-500 font-medium">{inq.date}</td>
                        <td className="px-6 py-5">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 ${
                            inq.status === "Completed" 
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                              : inq.status === "In Progress"
                              ? "bg-blue-50 text-blue-700 border border-blue-100"
                              : "bg-amber-50 text-amber-700 border border-amber-100"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              inq.status === "Completed" 
                                ? "bg-emerald-500" 
                                : inq.status === "In Progress"
                                ? "bg-blue-500"
                                : "bg-amber-500"
                            }`} />
                            {inq.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            {inq.status === "Pending" && (
                              <button 
                                onClick={() => handleStatusChange(inq.id, "In Progress")}
                                title="Mark In Progress"
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                              >
                                <Clock size={16} />
                              </button>
                            )}
                            {inq.status !== "Completed" && (
                              <button 
                                onClick={() => handleStatusChange(inq.id, "Completed")}
                                title="Mark Completed"
                                className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                              >
                                <CheckCircle size={16} />
                              </button>
                            )}
                            <button 
                              onClick={() => handleDeleteInquiry(inq.id)}
                              title="Delete"
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
                      <td colSpan="7" className="text-center py-16">
                        <div className="flex flex-col items-center justify-center text-slate-400 gap-3">
                          <AlertCircle size={32} />
                          <p className="font-bold">No inquiries found</p>
                          <p className="text-xs">Adjust your search parameters or select a different filter.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "categories" && (
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
                  <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group">
                    Manage Items 
                    <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
