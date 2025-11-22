import CodeDemo from "D:/Develop/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/vuepress-plugin-md-enhance@_58904175830bf63853a98f1e8340fcf4/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Develop/MisakaNetwork/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/vuepress-plugin-md-enhance@_58904175830bf63853a98f1e8340fcf4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
