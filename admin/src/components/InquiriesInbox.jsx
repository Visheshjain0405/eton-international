import React, { useState } from "react";
import { Search, Filter, Clock, CheckCircle, Trash2, AlertCircle } from "lucide-react";

export default function InquiriesInbox({ inquiries, handleStatusChange, handleDeleteInquiry }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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
                        ? "bg-blue-50 text-blue-700 border-blue-100"
                        : "bg-amber-50 text-amber-700 border-amber-100"
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
  );
}
