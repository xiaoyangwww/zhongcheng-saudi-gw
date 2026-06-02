import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // 英文
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // 中文
import elementArLocale from 'element-ui/lib/locale/lang/ar' // 新增：Element阿拉伯语包
import enLocale from './en.js'
import zhLocale from './zh.js'
import saLocale from './sa.js' // 新增：自定义阿拉伯语内容

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  sa: {
    ...saLocale,
    ...elementArLocale // 使用Element的阿拉伯语包
  }
}

const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'en',
  messages,
  silentTranslationWarn: true,
  fallbackLocale: 'en',
  numberFormats: {
    'en': {
      currency: {
        style: 'currency', 
        currency: 'USD'
      }
    },
    'zh': {
      currency: {
        style: 'currency', 
        currency: 'JPY', 
        currencyDisplay: 'symbol'
      }
    },
    'sa': { // 新增：阿拉伯语数字格式
      currency: {
        style: 'currency',
        currency: 'SAR', // 沙特里亚尔
        currencyDisplay: 'symbol'
      }
    }
  },
  dateTimeFormats: {
    'en': {
      short: {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      },
      long: {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        weekday: 'short', 
        hour: 'numeric', 
        minute: 'numeric'
      }
    },
    'zh': {
      short: {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      },
      long: {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        weekday: 'short', 
        hour: 'numeric', 
        minute: 'numeric'
      }
    },
    'sa': { // 新增：阿拉伯语日期格式（RTL）
      short: {
        year: 'numeric', 
        month: 'short', 
        day: 'numeric'
      },
      long: {
        year: 'numeric', 
        month: 'long', // 阿拉伯语月份全称
        day: 'numeric',
        weekday: 'long', 
        hour: 'numeric', 
        minute: 'numeric',
        hour12: true // 使用12小时制
      }
    }
  }
})

// 设置HTML方向（RTL）
document.documentElement.dir = i18n.locale === 'sa' ? 'rtl' : 'ltr'
i18n.watchLocale = () => {
  document.documentElement.dir = i18n.locale === 'sa' ? 'rtl' : 'ltr'
}

export default i18n