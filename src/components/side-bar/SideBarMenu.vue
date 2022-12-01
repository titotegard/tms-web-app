<template>
	<v-list-item
		link
		@click="$emit('click')"
		@mouseover="$emit('mouseover')"
		@mouseleave="$emit('mouseleave')"
		class="py-3"
	>
		<v-list-item-icon class="pl-5">
			<v-icon>{{ icon }}</v-icon>
		</v-list-item-icon>
		<v-list-item-content>
			<v-list-item-title>{{ title }}</v-list-item-title>
		</v-list-item-content>
	</v-list-item>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			default: undefined,
		},
	},
};
</script>
