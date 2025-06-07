import { hasGlobalComponent } from "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_6332c9435f1769f93cea018913c3b441/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/dev/MNDocs/src/node_modules/.pnpm/@vueuse+core@13.1.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_a1b5c84ce5be89ff4552c62c38b36880/node_modules/@vuepress/plugin-icon/lib/client/index.js"

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
