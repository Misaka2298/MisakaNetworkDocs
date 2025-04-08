import { CodeTabs } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+plugin-markdown-t_02e0c670acb5a68eb45233d48da35cd7/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+plugin-markdown-t_02e0c670acb5a68eb45233d48da35cd7/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/@vuepress+plugin-markdown-t_02e0c670acb5a68eb45233d48da35cd7/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
