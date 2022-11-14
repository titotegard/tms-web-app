@@ -0,0 +1,13 @@
<template>
	<v-app>
		<component :is="resolveLayout" />
	</v-app>
</template>

<script>
const LayoutContent = () => import("@/views/Content.vue");
const LayoutBlank = () => import("@/views/Blank.vue");
import { mapActions } from "vuex";

export default {
	name: "app",
	components: {
		LayoutContent,
		LayoutBlank,
	},
	data() {
		return {};
	},
	computed: {
		theme() {
			return this.$vuetify.theme.dark ? "dark" : "light";
		},
		resolveLayout() {
			// if (this.$route.name === null) return null;

			if (this.$route.meta.layout === "blank") {
				this.$vuetify.theme.dark = false;
				return "layout-blank";
			} else if (this.$route.meta.layout === "error404") {
				this.setThemeFromLocal();
				return "layout-blank";
			}

			this.setThemeFromLocal();
			return "layout-content";
		},
	},
	created() {
		this.setAllIsOpens();
	},
	methods: {
		...mapActions(["setAllIsOpens"]),
		setThemeFromLocal() {
			const theme = localStorage.getItem("TmsDarkMode");
			if (theme) {
				if (theme == "true") {
					this.$vuetify.theme.dark = true;
				} else {
					this.$vuetify.theme.dark = false;
				}
			}
		},
	},
};
</script>
