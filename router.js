// router.js
import HomeView from './views/HomeView.js';
import SettingsView from './views/SettingsView.js';
import ConversationView from './views/ConversationView.js';
import ConversationListView from './views/ConversationListView.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/settings', component: SettingsView },
  { path: '/conversation/:id', component: ConversationListView },
  { path: '/conversations', component: ConversationView }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});