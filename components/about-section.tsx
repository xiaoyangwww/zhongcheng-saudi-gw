"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bookmark, Users, History, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface AboutInfo {
  url: string
  title: string
  content: string
}

interface AboutSectionProps {
  data?: AboutInfo
}

const quickLinks = [
  {
    icon: Bookmark,
    title: "品牌故事",
    href: "/about/brand",
  },
  {
    icon: Heart,
    title: "企业文化",
    href: "/about/culture",
  },
  {
    icon: History,
    title: "发展历程",
    href: "/about/history",
  },
  {
    icon: Users,
    title: "合作伙伴",
    href: "/about/partners",
  },
]

const defaultAbout: AboutInfo = {
  url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  title: "Ocean Harmony Trade Co., Ltd",
  content: `Ocean Harmony 是一家专注于国际工程项目领域的专业供应链服务商。
    公司深耕非洲和东南亚市场超过14年，在海外设立9个直管驻点，
    国内13家公司覆盖全国沿线主要港口城市。我们围绕工程项目特性，
    提供物流、物资、全程供应链等一站式服务，是您值得信赖的国际贸易合作伙伴。`,
}

export function AboutSection({ data = defaultAbout }: AboutSectionProps) {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            关于我们
          </h2>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={data.url}
                alt="Ocean Harmony"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              {data.title}
            </h3>
            <div 
              className="text-muted-foreground leading-relaxed space-y-4 mb-8"
              dangerouslySetInnerHTML={{ __html: data.content.replace(/\n/g, '<br/>') }}
            />
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
            >
              了解 Ocean Harmony
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={cn(
                "group p-6 bg-secondary rounded-xl hover:bg-secondary/80 transition-all hover:-translate-y-1",
                "flex flex-col items-center text-center"
              )}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <link.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-foreground font-medium">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
