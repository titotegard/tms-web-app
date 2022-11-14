<template>
	<div>
		<v-app-bar app clipped-left absolute>
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
			<div class="pl-0">
				<v-layout fill-height>
					<side-bar id="main-side-bar" app :isOpen="isOpen" width="112px" class-css="main-side-bar">
						<div>
							<side-bar-menu
								v-for="menu in menus"
								:key="menu.id"
								@mouseover="onMouseOverMenu(menu.id)"
								@mouseleave="onMouseLeaveMenu(menu.id)"
								:title="menu.name"
								:icon="menu.icon"
							></side-bar-menu>
						</div>
					</side-bar>
					<template v-for="menu in menus">
						<side-bar
							v-if="isOpens[menu.id]"
							v-click-outside="closeAllChild"
							@mouseover="onMouseOverMenu(menu.id)"
							width="250px"
							class-css="child-side-bar"
							:key="menu.id"
						>
							<side-bar-child-menu
								@click="onClickSideBarChild(menu.id)"
								@mouseover="onMouseOverMenuDisturb(menu.id)"
								v-for="child in menu.child"
								:key="child.id"
								:title="child.name"
								:icon="child.icon"
							></side-bar-child-menu>
						</side-bar>
					</template>
				</v-layout>
				<v-row>
					<v-col cols="12" class="pt-0">
						<v-card-title> TEST </v-card-title>
						<v-card>
							<v-data-table
								dense
								:headers="headers"
								:items="desserts"
								item-key="name"
								class="elevation-1"
							></v-data-table>
						</v-card>
					</v-col>
				</v-row>
			</div>
		</v-main>
	</div>
</template>

<script>
const ThemeSwitcher = () => import("@/components/app-bar/ThemeSwitcher.vue");
const UserMenu = () => import("@/components/app-bar/UserMenu.vue");
const SideBar = () => import("@/components/side-bar/SideBar.vue");
const SideBarMenu = () => import("@/components/side-bar/SideBarMenu.vue");
const SideBarChildMenu = () => import("@/components/side-bar/SideBarChildMenu.vue");

import { mapActions, mapState } from "vuex";
import { debounce } from "@/plugins/debounce";

export default {
	components: { ThemeSwitcher, UserMenu, SideBar, SideBarMenu, SideBarChildMenu },
	data() {
		return {
			search: "",
			isOpen: true,
			isOpens: {
				CARD: false,
				TABLE: false,
			},
			isDisturb: false,
			desserts: [
				{
					name: "Frozen Yogurt",
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: "1%",
				},
				{
					name: "Ice cream sandwich",
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: "1%",
				},
				{
					name: "Eclair",
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: "7%",
				},
				{
					name: "Cupcake",
					calories: 305,
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: "8%",
				},
				{
					name: "Gingerbread",
					calories: 356,
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: "16%",
				},
				{
					name: "Jelly bean",
					calories: 375,
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: "0%",
				},
				{
					name: "Lollipop",
					calories: 392,
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: "2%",
				},
				{
					name: "Honeycomb",
					calories: 408,
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: "45%",
				},
				{
					name: "Donut",
					calories: 452,
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: "22%",
				},
				{
					name: "KitKat",
					calories: 518,
					fat: 26.0,
					carbs: 65,
					protein: 7,
					iron: "6%",
				},
			],
			headers: [
				{
					text: "Dessert (100g serving)",
					align: "start",
					sortable: false,
					value: "name",
				},
				{ text: "Calories", value: "calories" },
				{ text: "Fat (g)", value: "fat" },
				{ text: "Carbs (g)", value: "carbs" },
				{ text: "Protein (g)", value: "protein" },
				{ text: "Iron (%)", value: "iron" },
			],
		};
	},
	computed: {
		...mapState(["menus"]),
	},
	methods: {
		...mapActions(["setIsOpensByMenu"]),
		onMouseOverMenu(menu) {
			this.isDisturb = true;
			for (const element in this.menus) {
				if (element !== menu) {
					this.isOpens[element] = false;
				} else {
					this.isOpens[element] = true;
				}
			}
		},
		onClickBars() {
			this.isOpen = !this.isOpen;
			for (const menu in this.menus) {
				this.isOpens[menu] = false;
			}
		},
		closeAllChild() {
			for (const menu in this.menus) {
				this.isOpens[menu] = false;
			}
		},
		onMouseLeaveMenu: debounce(function () {
			if (!this.isDisturb) {
				this.closeAllChild();
			} else {
				this.isDisturb = false;
			}
		}, 300),
		onMouseOverMenuDisturb(menu) {
			this.isDisturb = true;
			for (const element in this.menus) {
				if (element !== menu) {
					this.isOpens[element] = false;
				} else {
					this.isOpens[element] = true;
				}
			}
		},
		onClickSideBarChild(menu) {
			this.isOpens[menu.id] = false;
		},
	},
};
</script>
