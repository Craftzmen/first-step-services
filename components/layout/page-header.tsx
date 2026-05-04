import Link from "next/link"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs: { label: string; href?: string }[]
  className?: string
}

export function PageHeader({ title, description, breadcrumbs, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[45vh] items-center overflow-hidden bg-navy pt-32 pb-20 md:pt-48 md:pb-28",
        className
      )}
    >
      {/* ── Background Design Elements (No Images) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-at-t from-navy-light/40 via-navy to-navy" />
        
        {/* Animated Orbs for Depth */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-[20%] -left-[5%] w-[500px] h-[500px] bg-amber/3 rounded-full blur-[100px]" />

        {/* Typographic Watermark */}
        <div className="absolute -bottom-12 -right-12 select-none opacity-[0.02] transition-transform duration-1000 max-md:transition-none md:group-hover:scale-110">
          <span className="text-[12rem] font-black uppercase tracking-tighter text-white whitespace-nowrap md:text-[20rem]">
            {title.split(" ")[0]}
          </span>
        </div>

        {/* Geometric Accents */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="animate-spin-slow">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="12 12" className="text-white" />
            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" className="text-amber" />
            <path d="M200 20L200 60M200 340L200 380M20 200L60 200M340 200L380 200" stroke="currentColor" strokeWidth="2" className="text-amber" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="max-w-4xl">
          {/* ── Breadcrumbs ── */}
          <nav className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50 backdrop-blur-md mb-8 animate-fade-in">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-amber"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          {/* ── Title & Description ── */}
          <div className="space-y-6">
            <h1 className="text-5xl font-black tracking-tighter text-white md:text-7xl lg:text-8xl animate-fade-in-up">
              {title}
              <span className="text-amber">.</span>
            </h1>
            
            {description ? (
              <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed animate-fade-in-up delay-100">
                {description}
              </p>
            ) : (
              <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-amber to-amber-light animate-fade-in-up delay-100" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
