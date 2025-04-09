export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"D:/MisakaNetworkDocs/MNDocs_NG/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"title":"档案主页","icon":"house"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/MisakaNetworkDocs/MNDocs_NG/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页","icon":"home"} }],
  ["/hscm/", { loader: () => import(/* webpackChunkName: "hscm_index.html" */"D:/MisakaNetworkDocs/MNDocs_NG/src/.vuepress/.temp/pages/hscm/index.html.js"), meta: {"title":"高中机房","icon":"laptop-code"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"D:/MisakaNetworkDocs/MNDocs_NG/src/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于本站&站长&御坂网络","icon":"solar:face-scan-square-broken"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/MisakaNetworkDocs/MNDocs_NG/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
