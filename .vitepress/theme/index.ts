import DefaultTheme ,{VPBadge} from "vitepress/theme";
import "./styles/vars.css";
import { ElTag, ElButton, ElImage, ElCard, ElBadge, ElRow,ElIcon } from "element-plus";
import "element-plus/theme-chalk/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import AppTemplate from '../../components/AppTemplate.vue';

export default {
  extends: DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.component("AppTemplate", AppTemplate);
    import("element-plus").then((module) => {
      app.component("el-tag", ElTag);
      app.component("el-button", ElButton);
      app.component("el-image", ElImage);
      app.component("el-card", ElCard);
      app.component("el-badge", ElBadge);
      app.component("el-row", ElRow);
      app.component("el-icon", ElIcon);
    });
  },
};
