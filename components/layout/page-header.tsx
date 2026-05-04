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
      className={cn("relative flex min-h-[38vh] items-center overflow-hidden bg-navy pt-28 pb-14 md:min-h-[42vh] md:pt-36 md:pb-20", className)}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-6">
        <div className="max-w-3xl">
          <nav className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/60">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/25">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-amber">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {title}
              <span className="text-amber">.</span>
            </h1>

            {description ? (
              <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{description}</p>
            ) : (
              <div className="h-1 w-20 rounded-full bg-amber/40" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
