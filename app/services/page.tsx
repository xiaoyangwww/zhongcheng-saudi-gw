import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Ship, Truck, Plane, Package, Settings, BarChart3 } from "lucide-react"

export const metadata = {
  title: "产品与服务 | Ocean Harmony",
  description: "Ocean Harmony 提供物流、物资、全程供应链等一站式服务解决方案",
}

const services = [
  {
    icon: Ship,
    title: "物流业务",
    description: "提供国际海运、陆路运输、航空货运等全品类运输服务，覆盖全球主要港口和城市。",
    features: ["国际海运服务", "陆路运输方案", "航空快递物流", "多式联运"],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
    href: "/services/logistics",
  },
  {
    icon: Package,
    title: "物资业务",
    description: "深耕工程项目领域，围绕工程项目特性供应主营工程物资产品。",
    features: ["工程设备供应", "建筑材料采购", "机械设备租赁", "备件供应"],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    href: "/services/materials",
  },
  {
    icon: Settings,
    title: "全程供应链",
    description: "提供从采购、运输到仓储的一站式供应链解决方案，助力项目高效运营。",
    features: ["端到端供应链", "仓储管理服务", "库存优化", "项目物流方案"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    href: "/services/supply-chain",
  },
]

const advantages = [
  { icon: Ship, value: "14+", label: "年行业经验" },
  { icon: Truck, value: "9", label: "海外驻点" },
  { icon: Plane, value: "13", label: "国内公司" },
  { icon: BarChart3, value: "100+", label: "成功项目" },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-foreground">
              产品与服务
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              深耕工程项目领域，围绕工程项目特性提供专业的一站式供应链服务
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {advantages.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent">{item.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors group"
                  >
                    了解详情
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            需要定制化的供应链解决方案？
          </h2>
          <p className="text-muted-foreground mb-8">
            我们的专业团队将根据您的具体需求，为您量身定制最优的服务方案
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            联系我们
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
