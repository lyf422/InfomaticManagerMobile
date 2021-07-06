<template>
	<view id="SignUp">
		<view class="bg"></view>
		<div class="container">
			<div class="cotent-container">
				<div class="header">
					<span class="h-title">- 加入团队 -</span>
				</div>
				<div class="card-container  shadow shadow-lg ">
					<div class="card-info">
						<div class="information">
							<div class="meeting-name">某海韵阿姨宿舍</div>
							<div class="meeting-code">负责人：宋润涵</div>
							<div class="meeting-time-container">
								<div class="begin-time">
									<span class="time">{{beginOnTime}}</span>
									<br>
									<span class="date">{{beginOnDate}}</span>
								</div>
								<div class="between-container">
									<div class="gray-line line-left"></div>
									<div class="meeting-duration">
										<div class="duration-time">{{duration}}</div>
										<div class="meeting-state">{{status}}</div>
									</div>


									<div class="gray-line line-right"></div>
								</div>
								<div class="end-time">
									<span class="time">{{endOnTime}}</span>
									<br>
									<span class="date">{{endOnDate}}</span>
								</div>
							</div>
						</div>
						<div class="card-quarter-lb card-quarter"></div>
						<div class="card-quarter-rb card-quarter"></div>
					</div>
					<div class="card-actions">
						<div class="card-quarter-lt card-quarter"></div>
						<div class="card-quarter-rt card-quarter"></div>
						<button class="cu-btn bg-blue block lg margin-left margin-right" @click="signUp">加入团队</button>
					</div>
				</div>
				<div class="header">
					<span class="h-title"></span>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	let app = require("@/config");
	export default {
		
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

	.clearfix:after {
		content: " ";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
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
		/* margin-top: 25vh; */
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

	.card-container .card-info {
		min-height: 140px;
	}

	.card-container .card-info .information {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card-container .card-info::after {
		content: "";
		width: 94%;
		height: 2px;
		display: block;
		margin: -2px auto -4.4px;
		/* 一条虚线 */
		background-image: linear-gradient(90deg, #d4d6d9 60%, hsla(0, 0%, 100%, 0) 0);
		background-position: bottom;
		background-size: 9px 1px;
		background-repeat: repeat-x;
	}

	.card-container .card-quarter {
		width: 8px;
		height: 8px;
		background-color: #f8f9fb;
		border-top: 0 solid #f8f9fb;
		border-right: 0 solid #f8f9fb;
	}

	.card-container .card-quarter-lb {
		left: -1px;
		bottom: -1px;
		border-radius: 0 8px 0 0;
		margin-top: -8px;
		box-shadow: inset -4px 0 5px -3px rgba(0, 0, 0, .15)
	}

	.card-container .card-quarter-lt {
		left: -1px;
		top: -1px;
		border-radius: 0 0 8px 0;
		margin-top: 4px;
		box-shadow: inset 0px -4px 5px -3px rgba(0, 0, 0, .15)
	}

	.card-container .card-quarter-rb {
		right: -1px;
		bottom: -1px;
		border-radius: 8px 0 0 0;
		float: right;
		margin-top: -8px;
		box-shadow: inset 4px 0 5px -3px rgba(0, 0, 0, .15)
	}

	.card-container .card-quarter-rt {
		right: -1px;
		top: -1px;
		border-radius: 0 0 0 8px;
		float: right;
		margin-top: -8px;
		box-shadow: inset 4px 0px 5px -3px rgba(0, 0, 0, .15)
	}

	.card-container .card-actions {
		min-height: 50px;
	}

	.information .meeting-name {
		width: 310px;
		/* height: 60px; */
		padding: 24px 12px 0;
		font-size: 20px;
		line-height: 26px;
		color: #2d3033;
		letter-spacing: 0;
		text-align: center;
	}

	.information .meeting-code {
		width: 100%;
		height: 20px;
		margin-top: 20px;
		font-size: 17px;
		color: #2d3033;
		letter-spacing: 0;
		text-align: center;
	}

	.information .meeting-time-container {
		width: 600rpx;
		height: 53px;
		margin: 25px 0 30px 0;
		/* margin-left: 3rpx;
		margin-right: 75rpx; */
	}

	.information .meeting-time-container .begin-time {
		float: left;
		width: 180rpx;
	}

	.information .meeting-time-container .end-time {
		float: right;
		/* width: 180rpx; */
	}

	.information .meeting-time-container .time {
		font-size: 28px;
		color: #2d3033;
		line-height: 28px;
		display: inline-block;
	}

	.information .meeting-time-container .end-time .time {
		float: right;
	}

	.information .meeting-time-container .date {
		font-size: 12px;
		color: #000;
		line-height: 12px;
		margin-top: 8px;
		display: inline-block;
	}

	.information .meeting-time-container .between-container {
		width: 240rpx;
		height: 53px;
		display: inline-block;
		text-align: center;
		/* margin-left: 20px; */
		margin: auto;
	}

	.information .meeting-time-container .between-container .gray-line {
		background: #ccc;
		border-radius: 0;
		width: 55rpx;
		height: 1px;
		margin-bottom: 20px;
		margin-top: 15px;
		display: inline-block;
	}

	.information .meeting-time-container .between-container .line-left {
		float: left;
	}

	.information .meeting-time-container .between-container .line-right {
		float: right;
	}

	.information .meeting-time-container .between-container .meeting-duration .duration-time {
		font-size: 10px;
		width: 90rpx;
		color: #5e6166;
		text-align: center;
		line-height: 15px;
	}

	.information .meeting-time-container .between-container .meeting-duration {
		border-radius: 2px;
		padding: 2px;
		height: 18px;
		background: #edeff2;
		margin-top: 5px;
		margin-left: 7px;
		float: left;
	}

	.information .meeting-time-container .between-container .meeting-duration .meeting-state {
		font-size: 12px;
		line-height: 12px;
		text-align: center;
		color: #ff801a;
		margin-top: 11px;
	}

	/* 4. 会议邀请 */
	.tips {
		position: absolute;
		bottom: 35px;
		width: 100%;
		font-size: 12px;
		color: #939699;
		letter-spacing: 0;
		line-height: 20px;
		text-align: center;
	}

	.invitation-text a:hover {
		color: #198cff;
	}


	.invitation-text a {
		font-size: 12px;
		color: #006fff;
	}

	.add-to-mymeeting {
		margin: 10px auto 0 auto;
		width: 100%;
		color: #006fff;
		text-align: center;
		font-size: 14px;
		display: block;
	}
</style>
