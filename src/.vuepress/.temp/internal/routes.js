export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/MisakaNetworkDocs/MNDocs_NG/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页","icon":"home"} }],
  ["/17cm/", { loader: () => import(/* webpackChunkName: "17cm_index.html" */"D:/MisakaNetworkDocs/MNDocs_NG/.vuepress/.temp/pages/17cm/index.html.js"), meta: {"title":"17中机房","icon":"laptop-code"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/MisakaNetworkDocs/MNDocs_NG/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
