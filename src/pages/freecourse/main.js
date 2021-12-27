import { createApp } from "vue";
import App from "./App.vue";
import "../../main";
import "@ipalfish/ai-sale-template-new/dist/saletpls.css";
import AiSaleTemplate from "@ipalfish/ai-sale-template-new";

const app = createApp(App);
app.use(AiSaleTemplate);
app.mount("#app");
