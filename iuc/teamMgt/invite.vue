<template>
	<view id="SignUp">
		<view class="bg"></view>
		<div class="container">
			<div class="cotent-container">
				<div class="header">
					<span class="h-title">- 邀请他人加入团队 -</span>
				</div>
				<div class="card-container shadow shadow-lg ">
					<div class="information">
						<div class="meeting-name">扫描下方二维码即可加入团队</div>
						<div class="qr-code">123456</div>
						<div class="tip">点击右上方的分享按钮也可以邀请他人加入团队哦~</div>
					</div>
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-blue light lg" @click="navBack">返回团队详情</button>
					</view>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	let app = require("@/config");
	export default {
		methods: {
			navBack() {
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style>
	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}
	
	.bg {
	    background: url('../../static/SignUpBack.jpg') no-repeat 50% 50% / cover;
	    position: fixed;
	    left: 0px;
	    right: 0px;
	    top: 0px;
	    bottom: 0px;
	    filter: blur(20px);
	}


	.container {
		width: 100%;
		/* min-height: 570px; */
		max-height: 90vh;
		position: absolute;
		margin: auto;
		left: 0px;
		right: 0px;
		top: 0px;
		bottom: 0px;
	}

	.cotent-container {
		width: 100%;
		height: 100%;
		background: #f8f9fb;
		position: relative;
		border-radius: 5px;
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, .2);
		margin: auto;
	}

	/* 3. 会议卡片 */
	.cotent-container .header {
		padding: 16px 6px 0px 6px;

		/*元素居中*/
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.cotent-container .header .h-title {
		font-size: 12px;
		color: #c8cacc;
		line-height: 20px;
	}

	.card-container {
		display: block;
		width: 100%;
		background: #fff;
		border: 0 solid #e0e2e5;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, .04);
		border-radius: 8px;
		max-width: 90%;
		margin-left: 37.5rpx;
		margin-right: 37.5rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		font-family: PingFangSC-Regular, Microsoft YaHei;
		position: relative;
		padding-bottom: 10px;
	}
	
	.information .meeting-name {
		width: 310px;
		padding: 24px 12px 0;
		font-size: 20px;
		line-height: 26px;
		color: #2d3033;
		letter-spacing: 0;
		text-align: center;
	}
	
	.information .tip {
		font-size: 12px;
		text-align: center;
	}
	
	.information .qr-code {
		height: 80vw;
		width: 80vw;
		text-align: center;
	}
	
</style>
