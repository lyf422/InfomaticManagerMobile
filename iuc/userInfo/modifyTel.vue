<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">修改座机</block>
		</cu-custom>
		<view class="margin">
			<view class="input-group">
				<input class="solids-bottom margin-lr padding-left-sm" style="border-radius:30px;" focus=true :placeholder='preTel'
				 placeholder-class="text-lg" v-model="tel">
			</view>
			<view class="margin-lr-lg text-lg margin-top-xs">请输入新座机</view>
			<view class="padding flex flex-direction margin-top-lg">
				<button class="cu-btn bg-blue lg" v-on:click="ModifyTel">保存</button>
			</view>
		</view>
	</view>
</template>
<script>
	let app = require("@/config");
	export default {
		data() {
			return {
				preTel
				: '',
				tel: '',
				currentUserGuid: '',
				tip: ''
			};
		},
		onLoad() {
			this.currentUserGuid = app.userInfo.token;
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.preTel = res.data.Telephone;
				}
			});
		},
		methods: {
			ModifyTel() {
				let currentUserGuid = this.currentUserGuid;
				let tel = this.tel;
				uni.post("/uc/ModifyTel", {
					currentUserGuid,
					tel
				}, msg => {
					if (msg.success) {
						this.tip = msg.msg;
						uni.showMessage(this.tip);
						this.preTel = this.tel;
					} else {
						this.tip = msg.msg;
						uni.showMessage(this.tip);
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
</style>
