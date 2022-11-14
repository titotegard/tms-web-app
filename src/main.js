window.Vue = require('vue');

import Vue from 'vue';
import App from '@/App.vue';
import VueRouter from "vue-router";
import vuetify from '@/plugins/vuetify';
import router from "@/plugins/routes";
import store from "@/store/index";
import VueCookies from 'vue-cookies';
import FontAwesomeIcon from '@/plugins/fontAwesome';

Vue.use(VueRouter);
Vue.use(VueCookies);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.performance = process.env.NODE_ENV != "production";
Vue.$cookies.config('30d');

new Vue({
	vuetify,
	router,
	store,
	data: {
		cookie: VueCookies
	},
	render: (h) => h(App),
}).$mount('#app')