<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">确认解绑微信</block>
		</cu-custom>
		<view class="solids-bottom padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="solid-bottom text-xsl padding">
					<text class="cuIcon-question text-yellow"></text>
				</view>
				<view class="padding text-xl">确认要解绑微信吗？</view>
				<button @click="unBind" class="cu-btn bg-yellow margin-bottom">确认解绑</button>
			</view>
		</view>
	</view>
</template>

<script>
	let app = require("@/config");
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			unBind() {

			}
		}
	}
</script>

<style>
</style>
