<template>
	<div>
		<v-card-title>
			<slot name="title"></slot>
		</v-card-title>
		<v-card-text class="px-2">
			<div class="side-stack">
				<div>
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
					>
					</v-text-field>
				</div>
				<div v-if="crudDisabled" class="super-center pl-3">
					<v-btn v-show="isSelected" rounded fab x-small dark color="red" @click="$emit('delete')">
						<v-icon>mdi-delete</v-icon>
					</v-btn>
					<v-btn v-show="!isSelected" rounded fab x-small dark color="primary" @click="onCreate">
						<v-icon>mdi-plus</v-icon>
					</v-btn>
				</div>
				<div v-if="hasFilterSlot" class="super-center pl-3">
					<v-btn @click="dialogFilter = true" outlined x-small rounded fab dark>
						<v-icon>mdi-filter</v-icon>
					</v-btn>
				</div>
			</div>
		</v-card-text>
		<v-card-text v-if="docStatus == 'DRAFT'" class="mt-3 mb-0">
			<v-row>
				<v-col cols="6">
					<v-btn small dark width="100px" color="green" @click="$emit('complete')">
						<div class="px-1">Complete</div>
					</v-btn>
				</v-col>
			</v-row>
		</v-card-text>
		<v-card-text v-else-if="checkApproveButton" class="mt-3 pb-3">
			<v-row>
				<v-col>
					<v-btn
						v-if="hasApproveListener"
						small
						dark
						color="primary"
						width="100px"
						class="mr-3"
						@click="$emit('approve')"
					>
						<div class="px-1">Approve</div>
					</v-btn>
					<v-btn
						v-if="hasRejectListener"
						small
						dark
						width="100px"
						class="mr-3"
						color="error"
						@click="$emit('reject')"
					>
						<div class="px-1">Reject</div>
					</v-btn>
					<v-btn
						v-if="hasVerifyListener"
						small
						dark
						color="green"
						width="90px"
						@click="$emit('verify')"
					>
						<div class="px-1">Verify</div>
					</v-btn>
				</v-col>
			</v-row>
		</v-card-text>
		<v-dialog v-model="dialogFilter" persistent>
			<v-card>
				<v-card-text>
					<v-form ref="form">
						<v-row>
							<v-col v-if="$slots.filterPeriod" cols="12">
								<slot name="filterPeriod"></slot>
							</v-col>
							<v-col v-if="$slots.filterObjectiveType" cols="12">
								<slot name="filterObjectiveType"></slot>
							</v-col>
							<v-col v-if="$slots.filterPerspectiveId" cols="12">
								<slot name="filterPerspectiveId"></slot>
							</v-col>
							<v-col v-if="$slots.filterCtgType" cols="12">
								<slot name="filterCtgType"></slot>
							</v-col>
							<v-col v-if="$slots.filterMonth" cols="12">
								<slot name="filterMonth"></slot>
							</v-col>
							<v-col v-if="$slots.filterComp" cols="3">
								<slot name="filterComp"></slot>
							</v-col>
							<v-col v-if="$slots.filterDept" cols="12">
								<slot name="filterDept"></slot>
							</v-col>
							<v-col v-if="$slots.filterPosition" cols="12">
								<slot name="filterPosition"></slot>
							</v-col>
						</v-row>
					</v-form>
					<div class="text-center mt-5">
						<v-btn color="primary" width="80px" @click.stop="doMobileFilter()"> Filter </v-btn>
						<v-btn type="reset" class="mx-2" width="80px" outlined @click.stop="closeForm()">
							Cancel
						</v-btn>
					</div>
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	props: {
		approvalStatus: {
			type: String,
			default: "NONE",
		},
		docStatus: {
			type: String,
			default: "NONE",
		},
		isSelected: Boolean,
		crudDisabled: {
			type: Boolean,
			default: true,
		},
		searchInput: String,
	},
	data() {
		return {
			dialogFilter: false,
			search: this.searchInput,
		};
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
	methods: {
		doMobileFilter() {
			this.dialogFilter = false;
		},
		closeForm() {
			this.dialogFilter = false;
			this.$emit("clearFilter");
		},
		onCreate() {
			this.search = "";
			this.$emit("create");
		},
	},
};
</script>
