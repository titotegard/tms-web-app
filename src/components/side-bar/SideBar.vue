<template>
	<v-navigation-drawer
		:app="app"
		clipped
		:width="width"
		:value="isOpen"
		stateless
		:class="classCss"
	>
		<v-menu class="side-bar-child-outlined" offset-x>
			<template v-slot:activator="{ on, attrs }">
				<v-list nav class="px-0 pb-0">
					<v-list-item
						v-for="menu in menus"
						:key="menu.id"
						link
						class="border-side-bar-item mx-auto mb-0"
						@click="$emit('click')"
						@mouseover="onMouseOverMenu(menu, menu.id)"
						v-bind="attrs"
						v-on="on"
					>
						<div class="tms-side-bar-item py-6 mx-auto">
							<v-icon class="pb-1"> {{ menu.icon }} </v-icon>
							<div class="text-xs">{{ menu.name }}</div>
						</div>
					</v-list-item>
				</v-list>
			</template>
			<side-bar-child>
				<side-bar-menu
					v-for="selected in menuSelect"
					:key="selected.id"
					:title="selected.name"
					:icon="selected.icon"
				></side-bar-menu>
			</side-bar-child>
		</v-menu>
	</v-navigation-drawer>
</template>

<script>
const SideBarChild = () => import("@/components/side-bar/SideBarChild.vue");
const SideBarMenu = () => import("@/components/side-bar/SideBarMenu.vue");
import { mapActions, mapState } from "vuex";
import utils from "@/common/utils";

export default {
	components: { SideBarChild, SideBarMenu },
	props: {
		isOpen: {
			type: Boolean,
			default: true,
		},
		classCss: {
			type: String,
		},
		width: {
			type: String,
		},
		app: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			menuSelect: {},
		};
	},
	computed: {
		...mapState(["menus", "isChildOpen"]),
	},
	methods: {
		...mapActions(["openChildMenu"]),
		onMouseOverMenu(menu) {
			console.log("menu", menu.child);
			this.menuSelect = utils.deepClone(menu.child);
		},
		onClickSideBarChild(menuId) {
			this.openChildMenu({ menuId, value: false });
			this.$router.push("table");
		},
	},
};
</script>
