import { defineUserConfig } from "vuepress";

import MarkdownItKatex from 'markdown-it-katex';

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "御坂网络知识库",
  description: "御坂球随便拉的一点史。",

  theme,

  extendsMarkdown: (md) => {
  md.use(MarkdownItKatex);
  },
});
