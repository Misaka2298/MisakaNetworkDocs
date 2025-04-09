import { hasGlobalComponent } from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_5afc62925513175ca2e5f3d38fb1ca8e/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/vuepress-plugin-components@_4de7302bcdeabf6c58711dd0aca55db3/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/vuepress-plugin-components@_4de7302bcdeabf6c58711dd0aca55db3/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.9_5afc62925513175ca2e5f3d38fb1ca8e/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

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
