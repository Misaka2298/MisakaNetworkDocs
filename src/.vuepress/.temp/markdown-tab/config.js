import { CodeTabs } from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_f948c7373147a512d3b93a2727829bce/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_f948c7373147a512d3b93a2727829bce/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_f948c7373147a512d3b93a2727829bce/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
