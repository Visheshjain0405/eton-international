"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Layers, ArrowRight } from "lucide-react";
import api from "../../utils/api";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      await api.post("/auth/login", { email, password });
      router.push("/");
    } catch (err) {
      setError(err.response?.data?.error || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-blue-500 selection:text-white">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-40 bg-[size:30px_30px] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] pointer-events-none"></div>
      
      <div className="w-full max-w-md relative z-10">
        
        {/* Brand/Logo Header */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl border border-blue-100 shadow-md mb-4 flex items-center justify-center">
            <Layers size={28} />
          </div>
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Eteon International</span>
          <h2 className="text-2xl font-black text-slate-900 mt-1">Admin Portal</h2>
          <p className="text-slate-500 text-sm mt-1">Log in to manage dashboard, inquiries, and catalog.</p>
        </div>

        {/* Login Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Error Message */}
            {error && (
              <div className="bg-rose-50 border border-rose-100 text-rose-600 text-sm font-semibold p-4 rounded-xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                {error}
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="admin@eteon.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-12 py-3.5 text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center px-1">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4.5 h-4.5 text-blue-600 bg-slate-50 border-slate-300 rounded focus:ring-blue-500/20"
              />
              <label htmlFor="remember-me" className="ml-2 text-xs text-slate-500 font-semibold cursor-pointer">
                Keep me logged in for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-700/10 hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed group text-sm"
            >
              {isLoading ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <p className="text-center text-xs text-slate-400 mt-8 font-medium">
          © {new Date().getFullYear()} Eteon International. Authorized access only.
        </p>

      </div>
    </div>
  );
}
