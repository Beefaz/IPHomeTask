import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import BaseNavbar from "./components/BaseNavbar.vue";
import BaseSidebar from "./components/BaseSidebar.vue";
import BaseSidebarSection from "./components/BaseSidebarSection.vue";
import BaseCard from "./components/BaseCard.vue";


const app = createApp(App);

app.component("BaseNavbar", BaseNavbar);
app.component("BaseSidebar", BaseSidebar);
app.component("BaseSidebarSection", BaseSidebarSection);
app.component("BaseCard", BaseCard);

app.mount("#app");
