"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, TrendingUp, Shield, Percent } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the 3D model to avoid SSR issues
const HouseModel = dynamic(() => import('@/components/HouseModel'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-black animate-pulse flex items-center justify-center">
      <div className="text-white font-black text-xl">Loading Villa...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-6 border-b-2 border-white">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight text-white">
            BANK AUCTIONS
          </div>
          <Link href="/login">
            <button className="px-6 py-2 bg-white text-black font-black hover:bg-[#00FF41] transition-all">
              Sign In
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 pt-12 pb-24 overflow-hidden">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Invest in <span className="text-[#00FF41]">Bank Auctions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 mb-8 font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover premium properties at up to <span className="text-white font-black ">60% below market value</span>. Secure your dream home or investment property through trusted bank auctions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-white text-black font-black text-lg hover:bg-[#00FF41] transition-all flex items-center justify-center gap-2">
                Explore Listings <ArrowRight size={20} strokeWidth={3} />
              </button>
              <button className="px-8 py-4 border-2 border-white font-black text-lg hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </motion.div>
          </div>
          <div className="order-first lg:order-last">
            <HouseModel />
          </div>
        </div>
      </section>

      {/* Gradient Transition Section */}
      <section className="relative top-[5px] h-[200px] overflow-hidden">
      
       <div className="py-20 h-full bg-gradient-to-b from-black via-[#00FF41]/15 to-black"></div>

        

      </section>

      {/* Why Invest Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-black -z-20"></div>
        <div 
          className="absolute top-0 left-1/4 w-[500px] h-[500px] blur-3xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, transparent 70%)',
            opacity: 0.6
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] blur-3xl -z-10"
          style={{
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.12) 0%, transparent 70%)',
            opacity: 0.5
          }}
        ></div>
        
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-white">Auction Properties?</span>
          </motion.h2>
          
          {/* Creative Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <HomeIcon className="w-10 h-10 text-black" strokeWidth={3} />,
                title: "Below Market Value",
                description: "Properties often sell for 20-60% below market price, offering incredible value for money.",
                gradient: "from-[#00FF41]/10 to-transparent"
              },
              {
                icon: <TrendingUp className="w-10 h-10 text-black" strokeWidth={3} />,
                title: "High ROI Potential",
                description: "Benefit from significant capital appreciation and strong rental yields.",
                gradient: "from-[#FFD700]/10 to-transparent"
              },
              {
                icon: <Shield className="w-10 h-10 text-black" strokeWidth={3} />,
                title: "Secure Transactions",
                description: "All properties come with clear titles and legal documentation.",
                gradient: "from-[#00FF41]/10 to-transparent"
              },
              {
                icon: <Percent className="w-10 h-10 text-black" strokeWidth={3} />,
                title: "No Middlemen",
                description: "Direct purchase from banks means no broker commissions or hidden fees.",
                gradient: "from-[#FFD700]/10 to-transparent"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-8 bg-black border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Card gradient overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                ></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 flex items-center justify-center bg-white group-hover:bg-[#00FF41] transition-all duration-300"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black mb-3 tracking-tight text-white group-hover:text-[#00FF41] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-bold leading-relaxed group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/0 group-hover:border-white/20 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-[#00FF41]/10 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            className="max-w-3xl mx-auto bg-black/80 border-2 border-white/30 p-12 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white tracking-tight">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-gray-400 mb-8 font-bold">Join thousands of smart investors who are building wealth through bank auction properties.</p>
            <Link href="/login">
              <button className="px-8 py-4 bg-[#00FF41] text-black font-black text-lg hover:bg-white transition-all">
                Get Started Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-white/20 py-12 bg-gradient-to-t from-[#00FF41]/5 to-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-black tracking-tight text-white mb-4 md:mb-0">
              BANK AUCTIONS
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 font-black hover:text-white transition-all">About</a>
              <a href="#" className="text-gray-400 font-black hover:text-white transition-all">Properties</a>
              <a href="#" className="text-gray-400 font-black hover:text-white transition-all">How It Works</a>
              <a href="#" className="text-gray-400 font-black hover:text-white transition-all">Contact</a>
            </div>
          </div>
          <div className="border-t-2 border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm font-bold">
            © {new Date().getFullYear()} Property Auctions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
