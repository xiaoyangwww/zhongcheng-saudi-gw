import Image from "next/image"
import Link from "next/link"
import { Bookmark, Heart, History, Users, Award, Globe } from "lucide-react"

export const metadata = {
  title: "关于我们 | Ocean Harmony",
  description: "了解 Ocean Harmony - 深耕国际工程项目领域超过14年的专业供应链服务商",
}

const features = [
  {
    icon: Globe,
    title: "全球网络",
    description: "海外9个直管驻点，国内13家公司覆盖全国主要港口城市",
  },
  {
    icon: Award,
    title: "专业资质",
    description: "具备完善的资质认证和行业荣誉，值得信赖的合作伙伴",
  },
  {
    icon: Users,
    title: "专业团队",
    description: "拥有经验丰富的专业团队，提供全方位的供应链解决方案",
  },
]

const quickLinks = [
  { icon: Bookmark, title: "品牌故事", href: "/about/brand", description: "了解 Ocean Harmony 的发展历程" },
  { icon: Heart, title: "企业文化", href: "/about/culture", description: "我们的价值观和使命" },
  { icon: History, title: "发展历程", href: "/about/history", description: "从2024年至今的成长轨迹" },
  { icon: Users, title: "合作伙伴", href: "/about/partners", description: "与我们携手共进的伙伴" },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground">
              关于 Ocean Harmony
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ocean Harmony 是一家专注于国际工程项目领域的专业供应链服务商，
              深耕非洲和东南亚市场超过14年，是您值得信赖的国际贸易合作伙伴。
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Ocean Harmony Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ocean Harmony Trade Co., Ltd
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ocean Harmony 专注于国际工程项目领域，围绕工程项目特性提供专业的供应链服务。
                  公司深耕非洲和东南亚市场超过14年，积累了丰富的行业经验和资源网络。
                </p>
                <p>
                  我们在海外设立9个直管驻点，国内13家公司覆盖全国沿线主要港口城市，
                  形成了完善的全球服务网络，能够为客户提供高效、可靠的一站式供应链解决方案。
                </p>
                <p>
                  主营业务涵盖物流、物资、全程供应链等领域，服务范围包括国际海运、陆路运输、
                  航空货运、工程设备供应、建筑材料采购等，致力于成为客户最信赖的国际贸易合作伙伴。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-secondary rounded-2xl text-center hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">了解更多</h2>
            <div className="mt-4 w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group p-6 bg-card border border-border rounded-xl hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <link.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
