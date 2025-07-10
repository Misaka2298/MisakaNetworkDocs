export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"档案主页","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页","icon":"hugeicons:beach"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于","icon":"solar:face-scan-square-broken"} }],
  ["/jl_gzzp/", { loader: () => import(/* webpackChunkName: "jl_gzzp_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/jl_gzzp/index.html.js"), meta: {"title":"综合素质评价","icon":"solar:book-outline"} }],
  ["/hscm/", { loader: () => import(/* webpackChunkName: "hscm_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/hscm/index.html.js"), meta: {"title":"高中机房","icon":"laptop-code"} }],
  ["/mc/android.html", { loader: () => import(/* webpackChunkName: "mc_android.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/mc/android.html.js"), meta: {"title":"用手机游玩","icon":"laptop-code","index":false} }],
  ["/mc/littleskin.html", { loader: () => import(/* webpackChunkName: "mc_littleskin.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/mc/littleskin.html.js"), meta: {"title":"换个皮肤吧","icon":"laptop-code","index":false} }],
  ["/mc/", { loader: () => import(/* webpackChunkName: "mc_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/mc/index.html.js"), meta: {"title":"我的世界联机教程","icon":"laptop-code"} }],
  ["/mc/win.html", { loader: () => import(/* webpackChunkName: "mc_win.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/mc/win.html.js"), meta: {"title":"用电脑游玩","icon":"laptop-code","index":false} }],
  ["/about/contact/", { loader: () => import(/* webpackChunkName: "about_contact_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/about/contact/index.html.js"), meta: {"title":"联系我们","icon":"solar:face-scan-square-broken"} }],
  ["/about/misaka/", { loader: () => import(/* webpackChunkName: "about_misaka_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/about/misaka/index.html.js"), meta: {"title":"关于本站&站长&御坂网络","icon":"solar:face-scan-square-broken"} }],
  ["/hscm/play/intro.html", { loader: () => import(/* webpackChunkName: "hscm_play_intro.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/hscm/play/intro.html.js"), meta: {"title":"机房娱乐一揽子介绍","index":false} }],
  ["/hscm/play/", { loader: () => import(/* webpackChunkName: "hscm_play_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/hscm/play/index.html.js"), meta: {"title":"游戏与娱乐"} }],
  ["/hscm/study/", { loader: () => import(/* webpackChunkName: "hscm_study_index.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/hscm/study/index.html.js"), meta: {"title":"学习与编程"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/dev/MNDocs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
