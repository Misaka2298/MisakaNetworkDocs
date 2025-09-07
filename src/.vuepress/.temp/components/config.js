import { hasGlobalComponent } from "D:/Develop/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_6332c9435f1769f93cea018913c3b441/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/Develop/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/vuepress-plugin-components@_74dd53a0e009828bf123e04ceda48d4f/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Develop/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/vuepress-plugin-components@_74dd53a0e009828bf123e04ceda48d4f/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/Develop/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_6332c9435f1769f93cea018913c3b441/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

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
