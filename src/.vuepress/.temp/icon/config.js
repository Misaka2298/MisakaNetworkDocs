import { hasGlobalComponent } from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_5afc62925513175ca2e5f3d38fb1ca8e/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_5dd606e074a5dc0accc599263d6768de/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
