'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function DhaniLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative overflow-hidden">
        {/* Modern Grid Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-400/20 to-emerald-400/20 rounded-full filter blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] pb-[60px] relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[14px] font-medium text-emerald-400">⚡️ Lightning Fast Transactions</span>
            </motion.div>
            
            <motion.h1 
              className="text-[56px] leading-[1.2] font-bold text-white mb-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Send Money at the <br />
              <span className="text-[64px] bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">Speed of Light</span>
            </motion.h1>

            <motion.p 
              className="text-[20px] text-slate-400 max-w-[800px] mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience secure, session-bound transactions with instant user discovery. 
              Send and receive money effortlessly, all in real-time.
            </motion.p>

            <motion.div 
              className="mt-[40px] flex flex-col sm:flex-row justify-center gap-[16px] px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="/signup" 
                className="group px-[32px] py-[16px] bg-gradient-to-r from-emerald-400 to-cyan-400 text-[18px] text-slate-900 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg shadow-emerald-400/20 hover:shadow-xl hover:shadow-emerald-400/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Start Transacting
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="/demo"
                className="px-[32px] py-[16px] bg-slate-800 text-[18px] text-white rounded-full font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-slate-700"
              >
                View Demo
              </Link>
            </motion.div>

            {/* Feature Cards */}
            <motion.div 
              className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[32px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-[32px] rounded-[24px] border border-slate-700 hover:border-emerald-400/50 transition-colors group">
                <div className="w-[48px] h-[48px] bg-emerald-400/10 rounded-[12px] flex items-center justify-center mb-[24px] group-hover:bg-emerald-400/20 transition-colors">
                  <svg className="w-[24px] h-[24px] text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-semibold text-white mb-[16px]">Instant Transfers</h3>
                <p className="text-[16px] text-slate-400">Lightning-fast transactions completed in milliseconds with real-time confirmation.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-[32px] rounded-[24px] border border-slate-700 hover:border-emerald-400/50 transition-colors group">
                <div className="w-[48px] h-[48px] bg-emerald-400/10 rounded-[12px] flex items-center justify-center mb-[24px] group-hover:bg-emerald-400/20 transition-colors">
                  <svg className="w-[24px] h-[24px] text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-semibold text-white mb-[16px]">Smart Search</h3>
                <p className="text-[16px] text-slate-400">Find users instantly with our intelligent search system. No more wrong transfers.</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-[32px] rounded-[24px] border border-slate-700 hover:border-emerald-400/50 transition-colors group">
                <div className="w-[48px] h-[48px] bg-emerald-400/10 rounded-[12px] flex items-center justify-center mb-[24px] group-hover:bg-emerald-400/20 transition-colors">
                  <svg className="w-[24px] h-[24px] text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-semibold text-white mb-[16px]">Secure Sessions</h3>
                <p className="text-[16px] text-slate-400">Session-bound transactions with military-grade encryption for maximum security.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
