

// 递归处理数据的函数
function processLanguageData(data) {
    debugger;
    if (Array.isArray(data)) {
      return data.map(item => processLanguageData(item));
    } else if (typeof data === 'object' && data !== null) {
      const result = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // 检查是否是语言相关字段
          if (currentLang === 'zh_CN' && key.endsWith('Zh')) {
            result[key.replace('Zh', '')] = data[key]; // 提取为通用字段名
          } else if (currentLang === 'en-US' && key.endsWith('En')) {
            result[key.replace('En', '')] = data[key]; // 提取为通用字段名
          } else if (!key.endsWith('Zh') && !key.endsWith('En')) {
            result[key] = processLanguageData(data[key]); // 递归处理非语言字段
          }
        }
      }
      return result;
    }
    return data; // 原样返回非对象数据
  }