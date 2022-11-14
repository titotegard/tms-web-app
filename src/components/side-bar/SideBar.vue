<template>
	<v-navigation-drawer
		:app="app"
		clipped
		:width="width"
		:value="isOpen"
		stateless
		:class="classCss"
	>
		<v-list nav class="px-0 pb-0">
			<slot></slot>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
export default {
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
		return {};
	},
};
</script>
