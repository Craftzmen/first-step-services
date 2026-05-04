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
        "fixed bottom-0 right-0 z-[100] w-full md:bottom-6 md:right-6 md:w-[420px]",
        !isOpen && "pointer-events-none invisible md:opacity-0"
      )}
    >
      <div className="relative rounded-t-2xl border border-white/10 bg-navy p-6 shadow-lg md:rounded-2xl md:p-8">
        <button
          type="button"
          onClick={() => {
            setIsOpen(false)
            setTimeout(() => setIsVisible(false), 0)
          }}
          className="absolute top-2 right-2 z-30 flex size-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-white/70 touch-manipulation hover:bg-white/15 hover:text-amber active:bg-white/20 md:top-3 md:right-3"
          aria-label="Close"
        >
          <X className="size-6 shrink-0" strokeWidth={2.5} aria-hidden />
        </button>

        <div className="relative z-0 flex flex-col">
          <div className="mb-6 flex items-start gap-4 pr-14">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-amber">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold leading-tight text-white">Need Finance Assistance?</h3>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500" aria-hidden />
                <p className="text-xs font-medium text-white/55">Advisors Online</p>
              </div>
            </div>
          </div>

          <div className="mb-6 space-y-2 rounded-xl bg-white/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-7 items-center justify-center rounded-lg bg-amber/15 text-amber">
                <Zap size={14} />
              </div>
              <span className="text-xs font-semibold text-white/85">Fast & Easy Application</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex size-7 items-center justify-center rounded-lg bg-amber/15 text-amber">
                <CreditCard size={14} />
              </div>
              <span className="text-xs font-semibold text-white/85">Instant Eligibility Check</span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="tel:+18883968739"
              title="Call (888) 396-8739"
              className="flex items-center justify-between rounded-full bg-amber px-6 py-3.5 text-sm font-bold text-navy hover:bg-amber-light"
            >
              <span>Call (888) 396-8739</span>
              <Phone size={18} />
            </a>
            <p className="text-center text-[10px] font-medium text-white/35">Call Right Now — No Wait Times</p>
          </div>
        </div>
      </div>
    </div>
  )
}
