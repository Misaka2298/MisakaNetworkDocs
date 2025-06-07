import comp from "D:/dev/MNDocs/src/.vuepress/.temp/pages/mc/index.html.vue"
const data = JSON.parse("{\"path\":\"/mc/\",\"title\":\"我的世界联机教程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的世界联机教程\",\"index\":false,\"icon\":\"laptop-code\",\"author\":\"大帝\",\"category\":[\"知识\"],\"copyright\":\"御坂网络\",\"footer\":\"使用 <a href=\\\"https://theme-hope.vuejs.press/zh/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2025-至今 Misaka2298\",\"description\":\"写的不是很精美，凑合看就行 更改皮肤，安装光影/材质包等进阶玩法我明后天有空再补教程。 这个页面只教安卓手机/平板的安装（因为大多数人应该也是用这个玩的），如果你打算用电脑/苹果游玩的话来找我就行。 当然，对于本教程来说安卓手机和安卓平板的操作是一样的。 观看此教程默认大帝是 十七中第一校草 。 先安装个语音软件吧 先去你的手机应用商店下载 Oopz ...\"},\"readingTime\":{\"minutes\":3.8,\"words\":1140},\"filePathRelative\":\"mc/README.md\",\"autoDesc\":true}")
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
