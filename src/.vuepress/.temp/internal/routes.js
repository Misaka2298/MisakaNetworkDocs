export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"档案主页","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页","icon":"hugeicons:beach"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于","icon":"solar:face-scan-square-broken"} }],
  ["/misc/", { loader: () => import(/* webpackChunkName: "misc_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/index.html.js"), meta: {"title":"杂项","icon":"laptop-code"} }],
  ["/about/contact/", { loader: () => import(/* webpackChunkName: "about_contact_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/about/contact/index.html.js"), meta: {"title":"联系我们","icon":"solar:face-scan-square-broken"} }],
  ["/about/misaka/", { loader: () => import(/* webpackChunkName: "about_misaka_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/about/misaka/index.html.js"), meta: {"title":"关于本站&站长&御坂网络","icon":"solar:face-scan-square-broken"} }],
  ["/misc/hscm/", { loader: () => import(/* webpackChunkName: "misc_hscm_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/hscm/index.html.js"), meta: {"title":"高中机房","icon":"laptop-code"} }],
  ["/misc/jl_gzzp/", { loader: () => import(/* webpackChunkName: "misc_jl_gzzp_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/jl_gzzp/index.html.js"), meta: {"title":"综合素质评价","icon":"solar:book-outline"} }],
  ["/misc/mc/android.html", { loader: () => import(/* webpackChunkName: "misc_mc_android.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/mc/android.html.js"), meta: {"title":"用手机游玩","icon":"laptop-code","index":false} }],
  ["/misc/mc/littleskin.html", { loader: () => import(/* webpackChunkName: "misc_mc_littleskin.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/mc/littleskin.html.js"), meta: {"title":"换个皮肤吧","icon":"laptop-code","index":false} }],
  ["/misc/mc/", { loader: () => import(/* webpackChunkName: "misc_mc_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/mc/index.html.js"), meta: {"title":"我的世界联机教程","icon":"laptop-code"} }],
  ["/misc/mc/win.html", { loader: () => import(/* webpackChunkName: "misc_mc_win.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/mc/win.html.js"), meta: {"title":"用电脑游玩","icon":"laptop-code","index":false} }],
  ["/misc/hscm/play/intro.html", { loader: () => import(/* webpackChunkName: "misc_hscm_play_intro.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/hscm/play/intro.html.js"), meta: {"title":"机房娱乐一揽子介绍","index":false} }],
  ["/misc/hscm/play/", { loader: () => import(/* webpackChunkName: "misc_hscm_play_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/hscm/play/index.html.js"), meta: {"title":"游戏与娱乐"} }],
  ["/misc/hscm/study/", { loader: () => import(/* webpackChunkName: "misc_hscm_study_index.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/misc/hscm/study/index.html.js"), meta: {"title":"学习与编程"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
