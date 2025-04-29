import comp from "D:/MisakaNetworkDocs/MNDocs_NG/src/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于\",\"index\":false,\"icon\":\"solar:face-scan-square-broken\",\"author\":\"御坂球\",\"category\":[\"杂谈\"],\"copyright\":\"御坂网络\",\"footer\":\"使用 <a href=\\\"https://theme-hope.vuejs.press/zh/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2025-至今 Misaka2298\",\"description\":\"1\"},\"readingTime\":{\"minutes\":0.29,\"words\":87},\"filePathRelative\":\"about/README.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
