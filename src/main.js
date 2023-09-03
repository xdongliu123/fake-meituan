import { createApp } from "vue";
import App from "./App.vue";
import "amfe-flexible";
import {
  Button,
  Tab,
  Tabs,
  TreeSelect,
  Icon,
  Toast,
  Stepper,
  ActionBar,
  ActionBarButton,
  ActionBarIcon,
  Checkbox,
  CheckboxGroup,
  SubmitBar,
} from "vant";
import router from "./router/index";
import "./common/css/base.less";
import store from "./store";

const app = createApp(App);
app
  .use(router)
  .use(Button)
  .use(Tabs)
  .use(Tab)
  .use(Icon)
  .use(Toast)
  .use(TreeSelect)
  .use(Stepper)
  .use(ActionBar)
  .use(ActionBarButton)
  .use(ActionBarIcon)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(SubmitBar)
  .use(store);
app.mount("#app");
