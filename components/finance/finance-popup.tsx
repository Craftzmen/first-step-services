"use client"

import { useState } from "react"
import { X, Phone, CreditCard, Zap } from "lucide-react"
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
        <div className="relative bg-navy rounded-t-3xl md:rounded-3xl p-8 md:p-10 shadow-2xl shadow-navy/40 w-full md:w-[500px] border border-white/10 overflow-hidden">
          {/* Decorative orb */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber/10 rounded-full blur-[60px]" />

          <button
            onClick={() => {
              setIsOpen(false)
              setTimeout(() => setIsVisible(false), 700)
            }}
            className="absolute top-4 right-4 p-2 rounded-full text-white/50 hover:text-amber hover:bg-white/10 transition-all duration-300"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="flex flex-col relative z-10">
            <div className="flex items-start gap-5 mb-8">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-amber/15 text-amber">
                <Phone size={28} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-white leading-tight mb-1">
                   Need Finance Assistance?
                </h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <p className="text-xs font-medium text-white/50">
                    Advisors Online
                  </p>
                </div>
              </div>
            </div>

            {/* Value props */}
            <div className="space-y-3 mb-8 rounded-2xl bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-amber/15 text-amber">
                  <Zap size={14} />
                </div>
                <span className="text-sm font-semibold text-white/80">Fast & Easy Application</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-amber/15 text-amber">
                  <CreditCard size={14} />
                </div>
                <span className="text-sm font-semibold text-white/80">Instant Eligibility Check</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+18883968739"
                title="Call (888) 396-8739"
                className="group relative flex items-center justify-between rounded-full bg-amber px-8 py-5 text-navy font-extrabold text-lg transition-all duration-300 hover:bg-amber-light hover:shadow-lg hover:shadow-amber/30"
              >
                <span>Call (888) 396-8739</span>
                <Phone size={22} className="group-hover:rotate-12 transition-transform" />
              </a>

              <p className="text-[10px] text-center text-white/30 font-medium">
                Call Right Now — No Wait Times
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
