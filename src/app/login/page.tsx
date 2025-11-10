'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Gradient - Similar to CTA Section */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to left, rgba(0, 80, 30, 0.6) 0%, rgba(0, 60, 20, 0.4) 30%, rgba(0, 40, 15, 0.2) 60%, transparent 100%)'
        }}
      ></div>
      
      {/* Additional Green Glow */}
      <div 
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] blur-3xl opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 65, 0.15) 0%, rgba(0, 150, 60, 0.1) 50%, transparent 80%)'
        }}
      ></div>

      {/* Top Left Accent */}
      <div 
        className="absolute top-20 left-20 w-[600px] h-[600px] blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)'
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-20 container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tight hover:text-[#00FF41] transition-colors">
          BANK AUCTIONS
        </Link>
        <Link 
          href="/"
          className="px-6 py-2 border-2 border-white font-black hover:bg-white hover:text-black transition-all"
        >
          Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-[calc(100vh-100px)] flex items-center justify-center">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* CTA Style Card */}
          <div className="border-2 border-[#00FF41]/30 bg-black/80 backdrop-blur-sm p-8 md:p-12 relative">
            {/* Decorative Border Glow */}
            <div 
              className="absolute inset-0 border-2 border-[#00FF41]/20 blur-sm pointer-events-none"
            ></div>

            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 font-black transition-all ${
                  isLogin
                    ? 'bg-[#00FF41] text-black'
                    : 'border-2 border-white/30 hover:border-[#00FF41]/50'
                }`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 font-black transition-all ${
                  !isLogin
                    ? 'bg-[#00FF41] text-black'
                    : 'border-2 border-white/30 hover:border-[#00FF41]/50'
                }`}
              >
                SIGN UP
              </button>
            </div>

            {/* Login Form */}
            {isLogin ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
                  Welcome Back
                </h1>
                <p className="text-gray-400 mb-8">
                  Sign in to access your account
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none transition-colors text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none transition-colors text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#00FF41]"
                      />
                      <span className="text-gray-400">Remember me</span>
                    </label>
                    <a href="#" className="text-[#00FF41] hover:underline font-bold">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#00FF41] text-black font-black text-lg hover:bg-[#00FF41]/90 transition-all"
                  >
                    Sign In
                  </button>
                </form>
              </motion.div>
            ) : (
              /* Sign Up Form */
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">
                  Create Account
                </h1>
                <p className="text-gray-400 mb-8">
                  Join thousands of smart investors
                </p>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none transition-colors text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none transition-colors text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">
                      PASSWORD
                    </label>
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none transition-colors text-white placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-300">
                      CONFIRM PASSWORD
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 bg-black border-2 border-white/20 focus:border-[#00FF41] outline-none transition-colors text-white placeholder:text-gray-600"
                    />
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer text-sm">
                    <input
                      type="checkbox"
                      className="w-4 h-4 mt-1 accent-[#00FF41]"
                    />
                    <span className="text-gray-400">
                      I agree to the{' '}
                      <a href="#" className="text-[#00FF41] hover:underline font-bold">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-[#00FF41] hover:underline font-bold">
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#00FF41] text-black font-black text-lg hover:bg-[#00FF41]/90 transition-all"
                  >
                    Create Account
                  </button>
                </form>
              </motion.div>
            )}

            {/* Divider */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#00FF41] hover:underline font-bold"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Secure authentication • 256-bit SSL encryption
          </p>
        </motion.div>
      </div>
    </div>
  );
}
