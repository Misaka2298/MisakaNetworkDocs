import CodeDemo from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-plugin-md-enhance@_79f2317d3001a6e181746d968c965628/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/MisakaNetworkDocs/MNDocs_NG/node_modules/.pnpm/vuepress-plugin-md-enhance@_79f2317d3001a6e181746d968c965628/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
