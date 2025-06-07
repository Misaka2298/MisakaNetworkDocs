import { CodeTabs } from "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_c3ef42a614d6563f09a2da21ee873fdf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_c3ef42a614d6563f09a2da21ee873fdf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/dev/MNDocs/src/node_modules/.pnpm/@vuepress+plugin-markdown-t_c3ef42a614d6563f09a2da21ee873fdf/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
