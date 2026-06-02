"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectType {
  id: number
  title: string
  imageUrl: string
}

interface ProjectTab {
  id: number
  name: string
  projectTypes: ProjectType[]
}

interface ProjectsSectionProps {
  projects?: ProjectTab[]
}

const defaultProjects: ProjectTab[] = [
  {
    id: 1,
    name: "物流业务",
    projectTypes: [
      { id: 1, title: "国际海运项目", imageUrl: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&q=80" },
      { id: 2, title: "陆路运输项目", imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&q=80" },
      { id: 3, title: "航空货运项目", imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80" },
    ],
  },
  {
    id: 2,
    name: "物资业务",
    projectTypes: [
      { id: 4, title: "工程设备供应", imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
      { id: 5, title: "建筑材料供应", imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" },
      { id: 6, title: "机械设备租赁", imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
    ],
  },
  {
    id: 3,
    name: "供应链业务",
    projectTypes: [
      { id: 7, title: "端到端供应链", imageUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80" },
      { id: 8, title: "仓储管理服务", imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
      { id: 9, title: "项目物流方案", imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" },
    ],
  },
]

export function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  const [activeTab, setActiveTab] = useState(projects[0]?.name || "物流业务")

  const currentProjects = projects.find((p) => p.name === activeTab)?.projectTypes || []

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Project Cases
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
            项目案例
          </h2>
          <div className="mt-4 w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projects.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all",
                activeTab === tab.name
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/cases/${project.id}`}
              className={cn(
                "group relative aspect-[4/3] rounded-xl overflow-hidden",
                "opacity-0 animate-fade-in-up",
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              {/* Image */}
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:-translate-y-2 transition-transform">
                  {project.title || "项目案例"}
                </h3>
                <div className="w-12 h-0.5 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
              </div>

              {/* Border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/50 rounded-xl transition-colors" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            查看更多项目案例
            <span className="text-xl">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
