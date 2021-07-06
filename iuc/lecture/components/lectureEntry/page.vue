<template>
	<view class="cu-item" @click="toDetail">
		<view class="cu-avatar round lg" :style="`background-image:url(${avatar});`"></view>
		<view class="content">
			<view class="text-black">{{lecture.Name}}</view>
			<view class="text-gray text-sm flex">
				<view class="text-cut">
					{{lecture.BeginOn}} - {{lecture.EndOn}}<br />地点：{{lecture.Address}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app = require("@/config");
	export default {
		props: {
			lecture: {
				type: Object,
				required: true
			}
		},
		data() {
			let avatar = app.webInfo.avatar;
			return {
				avatar
			}
		},
		methods: {
			toDetail(id) {
				uni.navigateTo({
					url: `./detail?id=${this.lecture.ActivityCategoryId}`
				});
			}
		}
	}
</script>

<style>
</style>
