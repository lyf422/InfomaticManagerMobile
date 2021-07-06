<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" isBack>
			<block slot="backText">返回</block>
			<block slot="content">我的活动</block>
		</cu-custom>
		<view class="cu-bar bg-white solids-bottom">
			<view class="action">
				<text class="cuIcon-title text-blue text-xxl"></text>
				<text class="text-xxl text-bold">我报名的活动</text>
			</view>
			<view class="action" @click="foldUp('displaySignUp')">
				<text class="text-df">{{displaySignUp?'收起':'展开'}}</text>
				<text class="padding-lr-xs" :class="displaySignUp?'cuIcon-fold':'cuIcon-unfold'"></text>
			</view>
		</view>
		<transition-group class="cu-list cu-card" name="list">
			<view class="cu-list menu-avatar" style="margin-top: 0;" v-for="(item,index) in SignUpEvents" :key="index" v-show="displaySignUp">
				<lectureEntry :lecture="item" />
			</view>
		</transition-group>
		<template v-if="SignUpEvents.length===0 && displaySignUp">
			<view class="padding-tb text-center text-lg">
				<text class="text-bold text-gray">暂无数据</text>
			</view>
		</template>
		
		<view class="cu-bar bg-white solids-bottom">
			<view class="action">
				<text class="cuIcon-title text-blue text-xxl"></text>
				<text class="text-xxl text-bold">已签到的活动</text>
			</view>
			<view class="action" @click="foldUp('displaySignIn')">
				<text class="text-df">{{displaySignIn?'收起':'展开'}}</text>
				<text class="padding-lr-xs" :class="displaySignIn?'cuIcon-fold':'cuIcon-unfold'"></text>
			</view>
		</view>
		<transition-group class="cu-list cu-card" name="list">
			<view class="bg-white padding" key="SignIn" v-show="displaySignIn">本学期共签到{{signInTime}}次</view>
			<view class="cu-list menu-avatar" style="margin-top: 0;" v-for="(item,index) in SignInEvents" :key="index" v-show="displaySignIn">
				<lectureEntry :lecture="item" />
			</view>
		</transition-group>
		<template v-if="SignInEvents.length===0 && displaySignIn">
			<view class="padding-tb text-center text-lg">
				<text class="text-bold text-gray">暂无数据</text>
			</view>
		</template>
	</view>
</template>

<script>
	let app = require("@/config");
	import lectureEntry from './components/lectureEntry'
	export default {
		components: {lectureEntry},
		onShow() {
			// console.log(app);
			this.SignUpEvents = [];
			this.SignInEvents = [];
			uni.post("/api/activity/MySignUp", {}, msg => {
				if(msg.success) {
					var SignUp = msg.data;
					// console.log(msg.data);
					for (var i = 0; i < SignUp.length; i++) {
						// this.calcState(SignUp[i]);
						// console.log(SignUp[i]);
						this.SignUpEvents.push(SignUp[i]);
					}
					// console.log(this.SignUpEvents);
				} else {
					uni.showToast({
						title: msg.msg,
						icon: "none"
					})
				}
			});
			uni.post("/api/activity/MySignIn", {}, msg => {
				if(msg.success) {
					var SignIn = msg.data;
					this.signInTime = msg.delay.signInTime;
					// console.log(msg.data);
					for (var i = 0; i < SignIn.length; i++) {
						// this.calcState(SignIn[i]);
						this.SignInEvents.push(SignIn[i]);
					}
					// console.log(this.SignInEvents);
				} else {
					uni.showToast({
						title: msg.msg,
						icon: "none"
					})
				}
			});
		},
		onLoad() {},
		methods: {
			foldUp(e) {
				this[e] = !this[e];
			},
			toDetail(id){
				uni.navigateTo({
					url: `./detail?id=${id}`
				});
			}
		},
		data() {
			return {
				displaySignUp: true,
				displaySignIn: true,
				app: {
					...app
				},
				SignUpEvents: [],
				SignInEvents: [],
				signInTime: 0
			}
		}
	}
</script>

<style>
	.cu-list>.cu-item {
		/* padding-top: 16rpx;
		padding-bottom: 6rpx; */
		transition: all 1s;
		margin-top: 0;
	}

	.list-move {
		transition: all 1s;
	}

	.list-enter {
		opacity: 0;
		transform: translateY(-30px);
	}

	.list-leave-to {
		opacity: 0;
		transform: translateY(-30px);
	}
</style>
