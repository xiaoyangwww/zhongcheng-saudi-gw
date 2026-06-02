"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroSlide {
  id: number
  url: string
  title: string
}

interface HeroSectionProps {
  slides?: HeroSlide[]
}

// 默认幻灯片数据
const defaultSlides: HeroSlide[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80",
    title: "连接全球 · 服务工程",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
    title: "一站式供应链解决方案",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
    title: "值得信赖的国际贸易伙伴",
  },
]

export function HeroSection({ slides = defaultSlides }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div
          className={cn(
            "text-center max-w-4xl mx-auto transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-medium">
              深耕国际工程领域 14+ 年
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            {slides[currentSlide]?.title || "连接全球 · 服务工程"}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Ocean Harmony 是您值得信赖的国际贸易合作伙伴，
            为全球工程项目提供专业的一站式供应链服务
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/services"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:scale-105"
            >
              探索我们的服务
            </a>
            <a
              href="/about"
              className="px-8 py-4 border border-foreground/20 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-all"
            >
              了解更多
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className={cn(
            "absolute bottom-32 left-0 right-0 transition-all duration-1000 delay-500",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "14+", label: "年行业经验" },
              { value: "9", label: "海外驻点" },
              { value: "13", label: "国内公司" },
              { value: "100+", label: "成功项目" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <span className="text-sm">向下滚动</span>
          <ChevronDown className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide
                  ? "bg-accent scale-125"
                  : "bg-foreground/30 hover:bg-foreground/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
