<template>
	<v-tooltip
		bottom
		:ripple="false"
		:content-class="isDark ? 'tms-dark-tooltip' : 'tms-light-tooltip'"
	>
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<v-switch v-model="isDark" @change="changeTheme(isDark)" inset hide-details></v-switch>
			</div>
		</template>
		<span>Dark Mode</span>
	</v-tooltip>
</template>

<script>
export default {
	data() {
		return {
			isDark: this.$vuetify.theme.dark,
		};
	},
	methods: {
		changeTheme(val) {
			this.$vuetify.theme.dark = val;
			localStorage.setItem("TmsDarkMode", this.$vuetify.theme.dark);
		},
	},
};
</script>
