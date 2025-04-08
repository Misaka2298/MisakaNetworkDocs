import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1563a65a9191f3e52f4b9570d670a6c7/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+plugin-catalog@2._1e786cdd1a869189491155388d1e877f/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1563a65a9191f3e52f4b9570d670a6c7/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1563a65a9191f3e52f4b9570d670a6c7/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_a45bec4348a18a5c63c19cb3b380d280/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_a45bec4348a18a5c63c19cb3b380d280/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_a45bec4348a18a5c63c19cb3b380d280/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1563a65a9191f3e52f4b9570d670a6c7/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

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
