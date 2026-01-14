// App.js
import { router } from './router.js';
import defaultDataService from './service/defaultDataService.js';
const { createApp } = Vue;

defaultDataService.createDefaultData();

const htmlTemplate = /*html*/`
<div>
    <header>
        <h1>Find your Travel Companion !</h1>
        <h2 id="main-nav">Main navigation</h2>

        <nav aria-labelledby="main-nav" class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <router-link class="nav__link" to="/">Home</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="nav__link" to="/settings">Settings</router-link>
                </li>
                <li class="nav__item">
                    <router-link class="nav__link" to="/conversations">Conversation List</router-link>
                </li>
            </ul>
        </nav>
    </header>

    <main class="app">
        <router-view></router-view>
    </main>
</div>
`;

const App = {
    template: htmlTemplate,
    mounted() {
        defaultDataService.createDefaultData();
    }
};

createApp(App).use(router).mount('#app');