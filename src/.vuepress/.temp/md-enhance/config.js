import CodeDemo from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/vuepress-plugin-md-enhance@_0876cda078c46f6fc46af404254e0d17/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/MisakaNetworkDocs/MNDocs_NG/src/node_modules/.pnpm/vuepress-plugin-md-enhance@_0876cda078c46f6fc46af404254e0d17/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
