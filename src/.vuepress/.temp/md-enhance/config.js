import CodeDemo from "D:/Develop/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/vuepress-plugin-md-enhance@_de6ddb15836d5ced8d31bd62e28607d1/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Develop/MisakaNetworkDocs/MNDocs/src/node_modules/.pnpm/vuepress-plugin-md-enhance@_de6ddb15836d5ced8d31bd62e28607d1/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
