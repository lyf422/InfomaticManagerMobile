<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" isBack>
			<block slot="backText">返回</block>
			<block slot="content">{{lecture.Name}}</block>
		</cu-custom>
		<view class="bg-white padding">
			<view>
				<text class="text-xl text-bold">讲座：{{lecture.Name}}</text>
			</view>
			<view class="margin-top flex justify-between align-center">
				<text>{{lecture.BeginOn}} - {{lecture.EndOn}}</text>
				<text class="cu-tag bg-blue round">{{state}}</text>
			</view>
		</view>
		<view class="cu-list menu sm-border" style="margin-top: 2rpx;">
			<!-- <view class="cu-item">
				<view class="content">
					<text class="cuIcon-location line-brown"></text>
					<text class="">{{lecture.Address}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-people line-mauve"></text>
					<text class="">{{lecture.Hoster}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-edit line-orange"></text>
					<text class="">待完善. . .</text>
				</view>
			</view> -->
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-time line-mauve"></text>
					<text class="">报名开始:{{lecture.SignUpBegin}}</text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<text class="cuIcon-timefill line-orange"></text>
					<text class="">报名结束:{{lecture.SignUpEnd}}</text>
				</view>
			</view>
			<view class="cu-item" v-if="totalMissed != 0">
				<view class="content">
					<text class="cuIcon-roundclose line-red"></text>
					<text class="">本学期报名但未签到次数:{{totalMissed}}</text>
				</view>
			</view>
		</view>
		<view class="cu-list menu sm-border">
			<view class="cu-item">
				<view class="content">
					<text class="text-lg">子讲座列表</text>
				</view>
			</view>
			<block v-for="subLecture in subLectures" :key="subLecture.ID">
				<view class="cu-item" :class="{logo: subLecture.State == '已签到'}" @click="show(subLecture.ID)">
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text>{{subLecture.Name}}</text>
					</view>
					<view class="action">
						<button v-if="false" class="cu-btn line-green margin-lr" @click="toSignUp(subLecture.ID)">
							签到
						</button>
					</view>
				</view>
				<view class="padding solid-top solid-bottom bg-white" v-show="showDetail === subLecture.ID">
					<text class="cuIcon-info"></text>
					<text>状态：{{subLecture.State}}</text>
					<br />
					<text class="cuIcon-people"></text>
					<text>汇报人：{{subLecture.Hoster}}</text>
					<br />
					<text class="cuIcon-location"></text>
					<text>地点：{{subLecture.Address}}</text>
					<br />
					<text class="cuIcon-time"></text>
					<text>活动开始时间：{{subLecture.BeginOn}}</text>
					<br />
					<text class="cuIcon-timefill"></text>
					<text>活动结束时间：{{subLecture.EndOn}}</text>
					<!-- <br />
					<text class="cuIcon-timefill" v-if="showSignInState"></text>
					<text v-if="showSignInState">签到情况：{{subLecture.signInState}}</text> -->
				</view>
			</block>
		</view>
		<view class="cu-list menu">
			<view class="cu-item">
				<view class="content">
					<text class="text-lg">讲座介绍</text>
				</view>
			</view>
			<view class="bg-white padding-lr padding-tb-xs" style="text-indent: 1em;" v-html="lecture.Content ? lecture.Content : '暂无简介'">
				<!-- {{lecture.Content ? lecture.Content : "暂无简介"}} -->
			</view>
		</view>
		<view class="cu-bar foot bg-white">
			<view class="flex-sub text-center">
				<text class="text-lg">{{isSignedUp?"已报名":"未报名"}}</text>
			</view>
			<view class="flex-treble flex justify-end padding-lr">
				<button class="bg-cyan cu-btn round lg" :disabled="signUpDisable">
					<text class="padding-lr-xl" @click="checkSignUpState">{{btnText}}</text>
				</button>
			</view>
		</view>
		<view style="height: 50px;"></view>
	</view>
</template>

<script>
	let app = require("@/config");
	export default {
		data() {
			return {
				showDetail: "",
				lecture: {},
				subLectures: [],
				isSignedUp: false,
				lectureId: "",
				state: "未知",
				showSignInState: false,
				signInState: "未知",
				totalDelay: 0,
				totalMissed: 0,
				btnText: "我要报名",
				timer: -1,
				leftTime: 0,
				signUpDisable: false
			}
		},
		onLoad(e) {
			this.getSubLectures(e.id);
			this.lectureId = e.id;
		},
		onBackPress() {
			clearInterval(this.timer);
		},
		onHide() {
			clearInterval(this.timer);
		},
		onUnload() {
			clearInterval(this.timer);
		},
		methods: {
			show(id) {
				this.showDetail = id === this.showDetail ? "" : id;
				if (this.showDetail != "") {
					// this.getSubLectureDetail(this.showDetail);
				}
			},
			changeButton() {
				if (this.isSignedUp) {
					this.btnText = "取消报名";
				} else {
					if (this.totalDelay === 0) {
						this.btnText = "我要报名";
					} else {
						this.btnText = "我要报名(罚时" + this.leftTime + "秒)";
					}
				}
			},
			getSubLectures(id) {
				uni.post("/api/activity/GetUserActivityCategory", {id}, msg => {
					if (msg.success) {
						this.lecture = msg.data;
						this.subLectures = msg.activities;
						this.isSignedUp = msg.isSignUp;
						this.leftTime = this.totalDelay = msg.delay.total;
						this.totalMissed = msg.delay.miss.length;
						this.changeButton();
						this.calcState();
						this.subLectures.reverse();
						this.subLectures.reverse();
					} else {
						uni.showToast({
							title: msg.msg,
							icon: "none"
						})
					}
				});
			},
			getSubLectureDetail(id) {
				uni.post("/api/activity/GetUserActivity", {id}, msg => {
					if (msg.success) {
						for (let i = 0; i < this.subLectures.length; i++) {
							if (this.subLectures[i].ID === id) {
								this.subLectures[i] = msg.data;
								if (msg.isSignIn) {
									this.$set(this.subLectures[i], "signInState", "已签到");
								} else {
									this.$set(this.subLectures[i], "signInState", "未签到");
								}
								break;
							}
						}
					} else {
						uni.showToast({
							title: msg.msg,
							icon: "none"
						})
					}
				});
			},
			calcState() {
				let time = new Date();
				if (time < new Date(this.lecture.SignUpBegin)) {
					this.state = "未开始";
				} else if (time < new Date(this.lecture.SignUpEnd)) {
					this.state = "报名中";
				} else if (time > new Date(this.lecture.SignUpEnd) && time < new Date(this.lecture.BeginOn)) {
					this.state = "准备中";
				}
				if (time > new Date(this.lecture.BeginOn) && time < new Date(this.lecture.EndOn)) {
					this.showSignInState = true;
					this.state = "进行中";
				} else if (time > new Date(this.lecture.EndOn)) {
					this.showSignInState = true;
					this.state = "已结束";
				}
			},
			toDetail(id) {
				uni.navigateTo({
					url: `./detail?id=${id}`
				});
			},
			toSignIn(id) {
				if (!app.userInfo.isLogined) {
					uni.showModal({
						title: "用户未登录",
						content: "请先登录。",
						showCancel: false,
						success: () => {
							uni.navigateTo({
								url: `../profile/profile`
							});
						}
					});
					return;
				}
				if (!app.userInfo.email || !app.userInfo.mobile) {
					uni.showModal({
						title: "补全信息",
						content: "请填写您的手机号以及邮箱。",
						showCancel: false,
						success: () => {
							uni.navigateTo({
								url: `../userInfo/userInfo`
							});
						}
					});
					return;
				}
				uni.navigateTo({
					url: `../signIn/signIn?id=${id}`
				});
			},
			checkSignInState(id) {
				let time = new Date();
				if (time < new Date(this.lecture.BeginOn)) {
					uni.showToast({
						title: "签到未开始",
						icon: "none"
					});
				} else if (time > new Date(this.lecture.EndOn)) {
					uni.showToast({
						title: "签到已结束",
						icon: "none"
					});
				} else {
					this.toSignIn(id);
				}
			},
			checkSignUpState() {
				let time = new Date();
				if (time < new Date(this.lecture.SignUpBegin)) {
					uni.showToast({
						title: "报名未开始",
						icon: "none"
					})
				} else if (time >= new Date(this.lecture.SignUpEnd)) {
					uni.showToast({
						title: "报名已结束",
						icon: "none"
					})
				} else {
					if (!this.isSignedUp) {
						this.signUpDisable = true;
						this.timer = setInterval(() => {
							if (--this.leftTime < 0) {
								clearInterval(this.timer);
								this.SignUp(0);
								this.leftTime = this.totalDelay;
							} else {
								this.changeButton();
							}
						}, 1000);
					} else {
						this.SignUp(999);
					}
				}
			},
			/* 报名函数 */
			SignUp(state) {
				// 999 - 取消报名
				// 0 - 报名
				uni.post("/api/activity/SignUp", {
					state,
					id: this.lectureId
				}, msg => {
					this.signUpDisable = false;
					if (msg.success) {
						this.getSubLectures(this.lectureId);
						if (!this.isSignedUp) {
							uni.showToast({
								title: "报名成功"
							});
							this.isSignedUp = true;
						} else {
							uni.showToast({
								title: "取消报名成功"
							});
							this.isSignedUp = false;
						}
						this.changeButton();
					} else {
						uni.showToast({
							title: msg.msg,
							icon: "none"
						})
					}
				});
			}
		}
	}
</script>

<style>
	.logo {
		background-image: url('../../static/角标-已签到.png');
		background-repeat: no-repeat;
		background-size: 15%;
		background-position: 95% 50%;
	}
</style>
