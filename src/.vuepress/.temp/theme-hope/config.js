import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/dev/MNDocs/src/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_82b98180a8c7a66bfc9db668d273b74f/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-catalog@2._ffc3cd853f1ff29d2c3dd391f91bd353/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/dev/MNDocs/src/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_82b98180a8c7a66bfc9db668d273b74f/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/dev/MNDocs/src/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_82b98180a8c7a66bfc9db668d273b74f/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_6332c9435f1769f93cea018913c3b441/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_6332c9435f1769f93cea018913c3b441/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_6332c9435f1769f93cea018913c3b441/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/dev/MNDocs/src/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_82b98180a8c7a66bfc9db668d273b74f/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
