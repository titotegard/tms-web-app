<template>
	<div>
		<v-menu offset-y left nudge-bottom="14" min-width="250">
			<template v-slot:activator="{ on, attrs }">
				<v-avatar class="ms-4" color="primary" size="40px" v-bind="attrs" v-on="on">
					<span class="white--text text-h5 font-weight-medium">T</span>
				</v-avatar>
			</template>
			<v-list>
				<div class="pb-3 pt-2">
					<div class="d-inline-flex flex-column justify-center ms-3" style="vertical-align: middle">
						<span class="text--primary font-weight-semibold mb-n1 pb-2"> Admin </span>
					</div>
				</div>
				<v-divider></v-divider>
				<!-- Sign Out -->
				<v-list-item link>
					<v-list-item-content>
						<v-list-item-title>Sign Out</v-list-item-title>
					</v-list-item-content>
					<v-list-item-icon class="me-2">
						<fa-icon icon="fa-solid fa-arrow-right-from-bracket"></fa-icon>
					</v-list-item-icon>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
export default {};
</script>
