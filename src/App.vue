@@ -0,0 +1,13 @@
<template>
	<v-app>
		<v-main>
			<v-container>
				<fa-icon :icon="['fab', 'facebook']" />
				<fa-icon :icon="['fas', 'dashboard']" />
				<fa-icon :icon="['far', 'user']" />
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "app",
};
</script>
