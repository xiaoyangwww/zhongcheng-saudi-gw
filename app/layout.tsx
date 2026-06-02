import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_SC } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const notoSansSC = Noto_Sans_SC({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sc"
})

export const metadata: Metadata = {
  title: "Ocean Harmony Trade Co., Ltd | 国际工程项目供应链服务",
  description: "Ocean Harmony 专注于国际工程项目领域，提供一站式供应链服务，深耕非洲和东南亚市场超过14年，值得信赖的国际贸易合作伙伴。",
  keywords: "国际贸易, 供应链服务, 工程物资, Ocean Harmony, 中东市场, 沙特阿拉伯",
}

export const viewport: Viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSC.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
