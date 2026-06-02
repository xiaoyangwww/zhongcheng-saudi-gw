const API_BASE = "/api/sa"

// 获取当前语言
function getCurrentLang(): string {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "en"
  }
  return "en"
}

// 递归处理语言数据
function processLanguageData<T>(data: T, lang: string): T {
  if (Array.isArray(data)) {
    return data.map((item) => processLanguageData(item, lang)) as T
  } else if (typeof data === "object" && data !== null) {
    const result: Record<string, unknown> = {}
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = (data as Record<string, unknown>)[key]
        // 检查是否是语言相关字段
        if (lang === "zh" && key.endsWith("Zh")) {
          result[key.replace("Zh", "")] = value
        } else if (lang === "en" && key.endsWith("En")) {
          result[key.replace("En", "")] = value
        } else if (lang === "sa" && key.endsWith("Sa")) {
          result[key.replace("Sa", "")] = value
        } else if (!key.endsWith("Zh") && !key.endsWith("En") && !key.endsWith("Sa")) {
          result[key] = processLanguageData(value, lang)
        }
      }
    }
    return result as T
  }
  return data
}

// 通用请求函数
async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      ...options?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()
  
  if (data.code !== 200) {
    throw new Error(data.msg || "请求失败")
  }

  const lang = getCurrentLang()
  return processLanguageData(data, lang)
}

// API 接口
export interface WelcomeItem {
  id: number
  url: string
  title: string
}

export interface AboutInfo {
  id: number
  url: string
  title: string
  content: string
}

export interface ServiceItem {
  id: number
  serviceName: string
  imageUrl: string
  iconUrl: string
  link: string
}

export interface ProjectType {
  id: number
  title: string
  imageUrl: string
}

export interface ProjectTab {
  id: number
  name: string
  projectTypes: ProjectType[]
}

// API 函数
export async function getWelcomeData(): Promise<{ data: WelcomeItem[] }> {
  return request("/welcome/all")
}

export async function getAboutData(): Promise<{ data: AboutInfo }> {
  return request("/about")
}

export async function getServiceData(): Promise<{ data: ServiceItem[] }> {
  return request("/service")
}

export async function getProjectData(): Promise<{ data: ProjectTab[] }> {
  return request("/project")
}
