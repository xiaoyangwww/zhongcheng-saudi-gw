import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  company: [
    { label: "关于我们", href: "/about" },
    { label: "品牌故事", href: "/about/brand" },
    { label: "发展历程", href: "/about/history" },
    { label: "企业文化", href: "/about/culture" },
  ],
  services: [
    { label: "物流业务", href: "/services/logistics" },
    { label: "物资业务", href: "/services/materials" },
    { label: "供应链服务", href: "/services/supply-chain" },
  ],
  support: [
    { label: "联系我们", href: "/contact" },
    { label: "合作伙伴", href: "/about/partners" },
    { label: "国内网络", href: "/network/domestic" },
    { label: "海外网络", href: "/network/overseas" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">OH</span>
              </div>
              <div>
                <p className="text-foreground font-semibold text-lg">Ocean Harmony</p>
                <p className="text-muted-foreground text-xs">Trade Co., Ltd</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Ocean Harmony 专注于国际工程项目领域，提供一站式供应链服务，
              深耕非洲和东南亚市场超过14年，是值得信赖的国际贸易合作伙伴。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span>深圳市福田区</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent" />
                <span>+86 755 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>contact@oceanharmony.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">公司</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">服务</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">支持</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Ocean Harmony Trade Co., Ltd. 版权所有
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              服务条款
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
