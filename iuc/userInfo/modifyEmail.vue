<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">修改邮箱</block>
		</cu-custom>
		<view class="margin">
			<view class="input-group">
				<input class="solids-bottom margin-lr padding-left-sm" style="border-radius:30px;" focus=true :placeholder='preEmail'
				 placeholder-class="text-lg" v-model="email">
			</view>
			<view class="margin-lr-lg text-lg margin-top-xs">请输入新邮箱</view>
			<view class="padding flex flex-direction margin-top-lg">
				<button class="cu-btn bg-blue lg" v-on:click="ModifyEamil">保存</button>
			</view>
		</view>
	</view>
</template>
<script>
	let app = require("@/config");
	export default {
		data() {
			return {
				preEmail: '',
				email: '',
				currentUserGuid: '',
				tip: ''
			};
		},
		onLoad() {
			this.currentUserGuid = app.userInfo.token;
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.preEmail = res.data.Email;
				}
			});
		},
		methods: {
			ModifyEamil() {
				let currentUserGuid = this.currentUserGuid;
				let email = this.email;
				uni.post("/uc/ModifyEmail", {
					currentUserGuid,
					email
				}, msg => {
					if (msg.success) {
						this.tip = msg.msg;
						uni.showMessage(this.tip);
						this.preEmail = this.email;
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
