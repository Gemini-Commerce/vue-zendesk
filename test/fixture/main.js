import Vue from "vue";
import App from "./App.vue";
import Zendesk from "../../src/index.js";

Vue.use(Zendesk, {
  key: ZENDESK_KEY,
  disabled: true,
  manualLoad: false,
  hideOnLoad: true,
  scriptType: "text/javascript",
  settings: {
    webWidget: {
      color: {
        theme: "#78a300"
      },
      contactForm: {
        attachments: false
      }
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App)
});
