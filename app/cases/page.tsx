"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState("物流业务")

  const tabs = [
    {
      name: "物流业务",
      projects: [
        { id: 1, title: "国际海运项目", image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80" },
        { id: 2, title: "陆路运输项目", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80" },
        { id: 3, title: "航空货运项目", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80" },
        { id: 4, title: "多式联运项目", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80" },
        { id: 5, title: "大型设备运输", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
        { id: 6, title: "危险品运输", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" },
      ],
    },
    {
      name: "物资业务",
      projects: [
        { id: 7, title: "工程设备供应", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
        { id: 8, title: "建筑材料供应", image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" },
        { id: 9, title: "机械设备租赁", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
        { id: 10, title: "备件采购服务", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&q=80" },
      ],
    },
    {
      name: "供应链业务",
      projects: [
        { id: 11, title: "端到端供应链", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80" },
        { id: 12, title: "仓储管理服务", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
        { id: 13, title: "项目物流方案", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" },
      ],
    },
  ]

  const currentProjects = tabs.find((t) => t.name === activeTab)?.projects || []

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Project Cases
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground">
              项目案例
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              展示我们在物流、物资和供应链领域的成功项目案例
            </p>
          </div>
        </div>
      </section>

      {/* Tabs & Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.name
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProjects.map((project) => (
              <Link
                key={project.id}
                href={`/cases/${project.id}`}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:-translate-y-2 transition-transform">
                    {project.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
