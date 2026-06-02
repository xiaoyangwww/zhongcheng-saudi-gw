import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground">
              联系我们
            </h2>
            <div className="mt-4 w-20 h-1 bg-accent rounded-full" />
            
            <p className="mt-6 text-muted-foreground leading-relaxed">
              无论您有任何关于国际物流、工程物资或供应链服务的需求，
              我们的专业团队随时准备为您提供咨询和支持。
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">公司地址</h4>
                  <p className="text-muted-foreground text-sm">
                    中国深圳市福田区
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">联系电话</h4>
                  <p className="text-muted-foreground text-sm">
                    +86 755 XXXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">电子邮箱</h4>
                  <p className="text-muted-foreground text-sm">
                    contact@oceanharmony.com
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all group"
            >
              发送咨询
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Form Card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-6">
              快速咨询
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  您的姓名
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  电子邮箱
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="请输入您的邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  咨询内容
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="请描述您的需求..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
