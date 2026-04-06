"use client"

import { useState } from "react"
import { X, Phone, Check, CreditCard, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export function FinancePopup() {
  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 right-0 z-50 transition-all duration-700 ease-in-out transform md:bottom-8 md:right-8",
        isOpen ? "translate-y-0 opacity-100 scale-100" : "translate-y-full opacity-0 md:translate-y-10 pointer-events-none"
      )}
    >
      <div className="relative">
        <div className="relative bg-navy border-t-4 border-amber p-8 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.5)] w-full md:w-[550px]">
          <button
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => setIsVisible(false), 700)
            }}
            className="absolute top-4 right-4 p-2 text-white/50 hover:text-amber hover:bg-white/10 transition-all duration-300"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col">
            <div className="flex items-start gap-5 mb-8">
              <div className="flex size-16 shrink-0 items-center justify-center bg-amber text-navy">
                <Phone size={32} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white leading-tight mb-1 uppercase tracking-tighter">
                  Need Finance Assistance?
                </h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-xs font-bold text-white/70 uppercase tracking-widest">
                    Advisors Connected
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition List */}
            <div className="space-y-4 mb-8 bg-white/5 p-5 border-l-2 border-amber/30">
              <div className="flex items-center gap-3">
                <div className="bg-amber/20 p-1.5 text-amber">
                  <Zap size={16} />
                </div>
                <span className="text-sm font-bold text-white/90 uppercase tracking-tight">Instant Eligibility Check</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-amber/20 p-1.5 text-amber">
                  <CreditCard size={16} />
                </div>
                <span className="text-sm font-bold text-white/90 uppercase tracking-tight">Competitive Rates</span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:8882868307"
                className="group relative flex items-center justify-between bg-amber px-8 py-5 text-white hover:text-navy font-black text-xl transition-all duration-300 hover:bg-white hover:pl-10"
              >
                <span className="uppercase tracking-tighter">(888) 286-8307</span>
                <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              </a>

              <p className="text-[10px] text-center text-white/40 uppercase tracking-[0.3em] font-bold">
                Call Right Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
