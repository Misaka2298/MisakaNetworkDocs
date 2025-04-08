import { hasGlobalComponent } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_a45bec4348a18a5c63c19cb3b380d280/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_4d18bd12dbff491388119be62c4f7725/node_modules/@vuepress/plugin-icon/lib/client/index.js"

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
