<template>
	<div>
		<v-card-title>
			<slot name="title"></slot>
			<v-spacer />
			<v-tooltip top>
				<template v-slot:activator="{ on }">
					<v-btn
						v-if="crudDisabled"
						v-show="isSelected"
						v-on="on"
						rounded
						fab
						x-small
						dark
						color="red"
						class="mr-5"
						@click="$emit('delete')"
					>
						<v-icon>mdi-delete</v-icon>
					</v-btn>
				</template>
				<span>Delete Data</span>
			</v-tooltip>
			<v-tooltip top>
				<template v-slot:activator="{ on }">
					<v-btn
						v-if="crudDisabled"
						v-on="on"
						rounded
						fab
						x-small
						dark
						color="primary"
						class="mr-3"
						@click="onCreate"
					>
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</template>
				<span>Create New Data</span>
			</v-tooltip>
			<v-text-field
				v-model="search"
				label="Search"
				rounded
				dense
				outlined
				clearable
				prepend-inner-icon="mdi-magnify"
				class="app-bar-search flex-grow-0"
				hide-details
			/>
		</v-card-title>
		<v-expansion-panels v-if="hasFilterSlot">
			<v-expansion-panel>
				<v-expansion-panel-header>Filter</v-expansion-panel-header>
				<v-expansion-panel-content>
					<v-card-text class="pb-4">
						<v-row align="center">
							<v-col v-if="$slots.filterObjectiveType" cols="3">
								<slot name="filterObjectiveType"></slot>
							</v-col>
							<v-col v-if="$slots.filterPerspectiveId" cols="3">
								<slot name="filterPerspectiveId"></slot>
							</v-col>
							<v-col v-if="$slots.filterCtgType" cols="3">
								<slot name="filterCtgType"></slot>
							</v-col>
							<v-col v-if="$slots.filterPeriod" cols="2">
								<slot name="filterPeriod"></slot>
							</v-col>
							<v-col v-if="$slots.filterMonth" cols="3">
								<slot name="filterMonth"></slot>
							</v-col>
							<v-col v-if="$slots.filterComp" cols="3">
								<slot name="filterComp"></slot>
							</v-col>
							<v-col v-if="$slots.filterDept" cols="3">
								<slot name="filterDept"></slot>
							</v-col>
							<v-col v-if="$slots.filterPosition" cols="3">
								<slot name="filterPosition"></slot>
							</v-col>
						</v-row>
					</v-card-text>
				</v-expansion-panel-content>
			</v-expansion-panel>
		</v-expansion-panels>
		<v-card-text v-if="docStatus == 'DRAFT'" class="mt-3 mb-0">
			<v-row>
				<v-col>
					<v-btn small dark width="100px" color="green" @click="$emit('complete')">
						<div class="px-1">Complete</div>
					</v-btn>
				</v-col>
			</v-row>
		</v-card-text>
		<v-card-text v-else-if="checkApproveButton" class="mt-3 pb-3">
			<v-btn
				v-if="hasApproveListener"
				small
				dark
				color="primary"
				width="90px"
				class="mr-3"
				@click="$emit('approve')"
			>
				<div class="px-1">Approve</div>
			</v-btn>
			<v-btn
				v-if="hasRejectListener"
				small
				dark
				color="error"
				width="90px"
				class="mr-3"
				@click="$emit('reject')"
			>
				<div class="px-1">Reject</div>
			</v-btn>
			<v-btn
				v-if="hasVerifyListener && approvalStatus != 'VERIFIED'"
				small
				dark
				color="green"
				width="90px"
				@click="$emit('verify')"
			>
				<div class="px-1">Verify</div>
			</v-btn>
		</v-card-text>
	</div>
</template>

<script>
export default {
	props: {
		approvalStatus: String,
		docStatus: String,
		isSelected: Boolean,
		crudDisabled: {
			type: Boolean,
			default: true,
		},
		searchInput: String,
	},
	computed: {
		hasFilterSlot() {
			return (
				this.$slots.filterDept ||
				this.$slots.filterPerspectiveId ||
				this.$slots.filterCtgType ||
				this.$slots.filterPeriod ||
				this.$slots.filterMonth ||
				this.$slots.filterPosition ||
				this.$slots.filterComp ||
				this.$slots.filterObjectiveType
			);
		},
		hasVerifyListener() {
			return this.$listeners && this.$listeners.verify;
		},
		hasApproveListener() {
			return this.$listeners && this.$listeners.approve;
		},
		hasRejectListener() {
			return this.$listeners && this.$listeners.reject;
		},
		checkApproveButton() {
			if (this.docStatus == "COMPLETED") {
				return this.hasVerifyListener || (this.hasApproveListener && this.hasRejectListener);
			}
			return false;
		},
	},
	watch: {
		search(val) {
			this.$emit("update:searchInput", val);
		},
	},
	data() {
		return {
			search: this.searchInput,
		};
	},
	methods: {
		onCreate() {
			this.search = "";
			this.$emit("create");
		},
	},
};
</script>
