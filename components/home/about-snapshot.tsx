import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { UNSPLASH } from "@/lib/remote-images"

const stats = [
  { value: "2026", label: "Founded" },
  { value: "8y+", label: "Combined experience" },
  { value: "120+", label: "Stores launched" },
  { value: "99%", label: "Client retention" },
]

export function AboutSnapshot() {
  return (
    <SectionWrapper background="muted" className="relative overflow-hidden">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber/25 bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber dark:bg-white/10">
              <UsersIcon className="size-3" />
              Who We Are
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy dark:text-white md:text-4xl lg:text-5xl">
              Engineered for revenue. <span className="text-amber">Designed for trust.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A small, senior team of e-commerce designers and engineers helping merchants ship modern storefronts and stay on as a long-term technology partner.
          </p>
        </div>

      {/* Editorial stats strip */}
        <div className="flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-card md:flex-row dark:border-white/10">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-1 flex-col items-start gap-3 p-6 md:p-8 lg:p-10 ${
                i > 0 ? "border-t border-navy/10 dark:border-white/10 md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="text-4xl font-bold tracking-tight text-navy dark:text-white md:text-5xl lg:text-6xl">
                {s.value}
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

      {/* Image + paragraph row */}
      <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <div className="relative aspect-16/10 w-full overflow-hidden rounded-3xl border border-navy/10 dark:border-white/10">
            <Image
              src={`${UNSPLASH.team}&w=1400`}
              alt="Our team collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              quality={55}
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              First Step Services is the agency you call when you need to ship something hard — a replatform, a checkout overhaul, a headless build — and trust it will be done well, on time, with no surprises.
            </p>
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-full bg-navy px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-amber dark:bg-white dark:text-navy dark:hover:bg-amber dark:hover:text-white"
            >
              Discover Our Story
              <ArrowRightIcon className="ml-2 size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
