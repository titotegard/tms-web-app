window.Vue = require('vue');

import Vue from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import VueCookies from 'vue-cookies';
import FontAwesomeIcon from '@/plugins/fontAwesome';

Vue.use(VueCookies);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.performance = process.env.NODE_ENV != "production";
Vue.$cookies.config('30d');

new Vue({
	vuetify,
	data: {
		cookie: VueCookies
	},
	render: (h) => h(App),
}).$mount('#app')