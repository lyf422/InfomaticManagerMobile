<template>
	<view id="SignUp">
		<view class="bg"></view>
		<div class="container">
			<div class="cotent-container">
				<div class="header">
					<span class="h-title">- 欢迎参加活动 -</span>
				</div>
				<div class="card-container  shadow shadow-lg ">
					<div class="card-info">
						<div class="information">
							<div class="meeting-name">{{lecture.Name}}</div>
							<div class="meeting-code">主讲人：{{lecture.Hoster}}</div>
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
						<!-- <a href="javascript:;" class="add-to-mymeeting">添加到我的会议</a> -->
						<button v-if="!hasSignedIn && signInState == 1" class="cu-btn bg-blue block lg margin-left margin-right" @click="signUp">点击签到</button>
						<view v-if="hasSignedIn" class="flex-sub text-center text-lg padding">
							<text class="text-black text-bold">签到成功！</text>
							<!-- <br>
							<text class="text-black">{{signInTime}}</text> -->
						</view>
						<view v-if="!hasSignedIn && signInState == 0" class="flex-sub text-center text-lg padding">
							<text class="text-black text-bold">签到未开始</text>
						</view>
						<view v-if="!hasSignedIn && signInState == 2" class="flex-sub text-center text-lg padding">
							<text class="text-black text-bold">签到已结束</text>
						</view>
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
		data() {
			return {
				hasSignedIn: false,
				signInTime: "-",
				title: "-",
				hoster: "-",
				beginOnTime: "-",
				beginOnDate: "-",
				endOnTime: "-",
				endOnDate: "-",
				duration: "-",
				status: "-",
				thisId: "",
				lecture: {},
				activities: [],
				signInState: 0
			}
		},
		onLoad(e) {
			this.getSubLectures(e.id);
			this.thisId = e.id;
			this.checkUserData();
			// console.log(app);
		},
		methods: {
			getSubLectures(id) {
				uni.post("/api/activity/GetUserActivity", {
					id
				}, msg => {
					if (msg.success) {
						this.lecture = msg.data;
						this.hasSignedIn = msg.isSignIn;
						// this.subLectures = msg.activities;
						// console.log(msg);
						this.changeData();
					} else {
						uni.showToast({
							title: msg.msg,
							icon: "none"
						})
					}
				});
			},
			checkUserData() {
				// if (app.userInfo.isLogined == false) {
				// 	alert("请先登录");
				// 	uni.navigateTo({
				// 		url: `../profile/profile`
				// 	});
				// } else if (app.userInfo.email == '' || app.userInfo.mobile == '') {
				// 	alert("请填写您的手机号以及邮箱");
				// 	uni.navigateTo({
				// 		url: `../userInfo/userInfo`
				// 	});
				// }
				
				if (app.userInfo.email == '' || app.userInfo.mobile == '') {
					alert("请填写您的手机号以及邮箱");
					uni.navigateTo({
						url: `../userInfo/userInfo`
					});
				}
			},
			changeData() {
				this.lecture.BeginOn = this.timeToString(new Date(this.lecture.BeginOn));
				this.lecture.EndOn = this.timeToString(new Date(this.lecture.EndOn));
				var beginOn = this.lecture.BeginOn.split(' ');
				this.beginOnDate = beginOn[0];
				this.beginOnTime = (beginOn[1].split(':'))[0] + ':' + (beginOn[1].split(':'))[1];
				var endOn = this.lecture.EndOn.split(' ');
				this.endOnDate = endOn[0];
				this.endOnTime = (endOn[1].split(':'))[0] + ':' + (endOn[1].split(':'))[1];
				this.status = this.lecture.Status;
				this.duration = this.calcDuration(beginOn, endOn);
				var time = new Date();
				if (time < new Date(this.lecture.BeginOn)) {
					this.signInState = 0;
				} else if (time > new Date(this.lecture.EndOn)) {
					this.signInState = 2;
				} else {
					this.signInState = 1;
				}
			},
			calcDuration(beginOn, endOn) {
				let startTime = new Date(beginOn);
				let endTime = new Date(endOn);
				let usedTime = endTime - startTime;
				usedTime = usedTime / 60000;
				if (usedTime <= 59) {
					return Math.floor(usedTime) + '分钟';
				} else if (usedTime <= 1440) {
					return Math.floor(usedTime / 60) + '小时';
				} else {
					return Math.floor(usedTime / 1440) + '天';
				}
			},
			signUp() {
				if (!this.hasSignedIn) {
					uni.post("/api/activity/SignIn", {
						id: this.thisId,
						state: 0
					}, msg => {
						if (msg.success) {
							uni.showToast({
								title: "签到成功！",
								icon: "none"
							});
							this.hasSignedIn = true;
							this.signInTime = this.timeToString(new Date());
						} else {
							uni.showToast({
								title: msg.msg,
								icon: "none"
							})
						}
					});
				}
			},
			timeToString(date) {
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				var d = date.getDate();
				var hh = date.getHours();
				var mm = date.getMinutes();
				var ss = date.getSeconds();
				var str = '' + y;
				if (m < 10) {
					str = str + '-0' + m;
				} else {
					str = str + '-' + m;
				}
				if (d < 10) {
					str = str + '-0' + d;
				} else {
					str = str + '-' + d;
				}
				if (hh < 10) {
					str = str + '\u0020' + '0' + hh;
				} else {
					str = str + '\u0020' + hh;
				}
				if (mm < 10) {
					str = str + ':0' + mm;
				} else {
					str = str + ':' + mm;
				}
				if (ss < 10) {
					str = str + ':0' + ss;
				} else {
					str = str + ':' + ss;
				}
				str = str + '';
				return str;
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
