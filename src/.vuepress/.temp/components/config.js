import { hasGlobalComponent } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_a45bec4348a18a5c63c19cb3b380d280/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-plugin-components@_ecb191c0176ae17ff895eccdf2f5d1fe/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-plugin-components@_ecb191c0176ae17ff895eccdf2f5d1fe/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_a45bec4348a18a5c63c19cb3b380d280/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
