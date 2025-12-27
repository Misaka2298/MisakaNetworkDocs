import { CodeTabs } from "D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_7565f791ed263345c1b620485acd4dc1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_7565f791ed263345c1b620485acd4dc1/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Development/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_7565f791ed263345c1b620485acd4dc1/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
