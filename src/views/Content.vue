<template>
	<div>
		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon width="112px" :ripple="false" @click="onClickBars">
				<fa-icon icon="fa-solid fa-bars" size="xl" />
			</v-app-bar-nav-icon>
			<v-spacer></v-spacer>
			<v-img
				:src="require('../assets/logo-mobospace.png').default"
				max-height="45"
				max-width="200"
				class="mr-5 ml-5"
			/>
			<v-spacer></v-spacer>
			<theme-switcher />
			<user-menu />
		</v-app-bar>
		<v-main>
			<side-bar app :isOpen="isSbOpen" width="112px" class-css="main-side-bar" />
			<slot></slot>
		</v-main>
	</div>
</template>

<script>
const ThemeSwitcher = () => import("@/components/app-bar/ThemeSwitcher.vue");
const UserMenu = () => import("@/components/app-bar/UserMenu.vue");
const SideBar = () => import("@/components/side-bar/SideBar.vue");

import { mapActions } from "vuex";

export default {
	components: { ThemeSwitcher, UserMenu, SideBar },
	data() {
		return {
			search: "",
			isSbOpen: true,
			isDisturb: false,
		};
	},
	methods: {
		...mapActions(["closeAllChildMenu"]),
		onClickBars() {
			this.isSbOpen = !this.isSbOpen;
			this.closeAllChildMenu();
		},
	},
};
</script>
