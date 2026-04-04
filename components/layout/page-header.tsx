import Link from "next/link"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  breadcrumbs: { label: string; href?: string }[]
  className?: string
}

export function PageHeader({ title, breadcrumbs, className }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy pt-32 pb-16 md:pt-40 md:pb-20",
        className
      )}
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Breadcrumbs */}
        <nav className="mb-4 flex items-center gap-2 text-sm text-white/60">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/30">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
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

        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h1>

        {/* Accent line */}
        <div className="mt-5 flex items-center gap-2">
          <div className="h-1 w-12 rounded-full bg-amber" />
          <div className="h-1 w-4 rounded-full bg-amber/40" />
        </div>
      </div>
    </section>
  )
}
