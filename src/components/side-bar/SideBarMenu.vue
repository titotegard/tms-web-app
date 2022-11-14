<template>
	<v-list-item
		link
		class="border-side-bar-item mx-auto"
		@click="$emit('click')"
		@mouseover="$emit('mouseover')"
		@mouseleave="$emit('mouseleave')"
	>
		<div class="tms-side-bar-item py-6 mx-auto">
			<v-icon class="pb-1"> {{ icon }} </v-icon>
			<div class="text-xs">{{ title }}</div>
		</div>
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
