"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceItem {
  id: number
  serviceName: string
  imageUrl: string
  iconUrl?: string
  link: string
}

interface ServicesSectionProps {
  services?: ServiceItem[]
}

const defaultServices: ServiceItem[] = [
  {
    id: 1,
    serviceName: "物流业务",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    link: "/services/logistics",
  },
  {
    id: 2,
    serviceName: "物资业务",
    imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    link: "/services/materials",
  },
  {
    id: 3,
    serviceName: "全程供应链",
    imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    link: "/services/supply-chain",
  },
]

export function ServicesSection({ services = defaultServices }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            产品与服务
          </h2>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            深耕工程项目领域，围绕工程项目特性提供专业的一站式供应链服务
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={service.link}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                index === 1 ? "md:-translate-y-8" : ""
              )}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.serviceName}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {/* Icon placeholder */}
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform">
                  <div className="w-8 h-8 rounded-full bg-accent" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:-translate-y-2 transition-transform">
                  {service.serviceName}
                </h3>

                <div className="flex items-center gap-2 text-accent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <span className="font-medium">查看详情</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-border/50 rounded-2xl group-hover:border-accent/50 transition-colors" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors group"
          >
            查看全部服务
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
