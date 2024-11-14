'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="relative overflow-hidden">
        {/* Enhanced Background Decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 -left-4 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-[400px] h-[400px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-[400px] h-[400px] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] pb-[60px] relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[14px] font-medium text-indigo-600">🚀 Join the Future of Sports Networking</span>
            </motion.div>
            
            <motion.h1 
              className="text-[56px] leading-[1.2] font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-[24px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Connect. Train. <br />
              <span className="text-[64px]">Achieve Together</span>
            </motion.h1>

            <motion.p 
              className="text-[20px] text-gray-600 max-w-[800px] mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your all-in-one platform for athletes to connect, share experiences, and grow together. 
              Join a community that understands your passion for sports.
            </motion.p>

            <motion.div 
              className="mt-[40px] flex flex-col sm:flex-row justify-center gap-[16px] px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="https://bootcamp-media.vercel.app/auth/signup?redirect_url=https%3A%2F%2Fbootcamp-media.vercel.app" 
                className="group px-[32px] py-[16px] bg-indigo-600 text-[18px] text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="https://github.com/iminoaru/BootCamp"
                className="px-[32px] py-[16px] bg-white text-[18px] text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-gray-200"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div 
              className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-[32px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="bg-white/50 backdrop-blur-sm p-[32px] rounded-[24px] border border-white/20">
                <div className="w-[48px] h-[48px] bg-indigo-100 rounded-[12px] flex items-center justify-center mb-[24px]">
                  <svg className="w-[24px] h-[24px] text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-semibold text-gray-800 mb-[16px]">Smart Matching</h3>
                <p className="text-[16px] text-gray-600">Find training partners and teams that match your skill level and goals.</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-[32px] rounded-[24px] border border-white/20">
                <div className="w-[48px] h-[48px] bg-purple-100 rounded-[12px] flex items-center justify-center mb-[24px]">
                  <svg className="w-[24px] h-[24px] text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-semibold text-gray-800 mb-[16px]">Social Engagement</h3>
                <p className="text-[16px] text-gray-600">Like, comment, and share achievements with fellow athletes in your network.</p>
              </div>

              <div className="bg-white/50 backdrop-blur-sm p-[32px] rounded-[24px] border border-white/20">
                <div className="w-[48px] h-[48px] bg-pink-100 rounded-[12px] flex items-center justify-center mb-[24px]">
                  <svg className="w-[24px] h-[24px] text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-semibold text-gray-800 mb-[16px]">Community Building</h3>
                <p className="text-[16px] text-gray-600">Create and join sports communities based on your interests and location.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}