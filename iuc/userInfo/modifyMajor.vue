<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">修改{{text}}</block>
		</cu-custom>
		<view class="margin">
			<view class="input-group">
				<picker mode="selector" 
				:range="userInfo.IsStudent ? majorForStudent : majorForTeacher" 
				@change="setMajor"
				class="solids-bottom margin-lr padding-left-sm" style="border-radius:30px;">
					<view class="picker">
						{{preMajor ? preMajor : "请选择"}}
					</view>
				</picker>
			</view>
			<view class="text-lg margin-lr-lg margin-top-xs">请选择新{{text}}</view>
			<view class="padding flex flex-direction margin-top-lg">
				<button class="cu-btn bg-blue lg" size="mini" type="primary" v-on:click="ModifyMajor()">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	let app = require("@/config");
	export default {
		data() {
			return {
				majorForStudent: ['计算机科学与技术','软件工程','数字媒体技术','人工智能','通讯工程','网络空间安全'],
				majorForTeacher: ['学院党政领导','党政人员','计算机科学与技术系','软件工程系','数字媒体技术系','人工智能系','网络空间安全系','实验教学中心'],
				preMajor: '',
				userInfo: {},
				major: '',
				currentUserGuid: '',
				tip: ''
			};
		},
		onLoad() {
			this.currentUserGuid = app.userInfo.token;
			uni.getStorage({
				key: 'userInfo',
				success: (res) => {
					this.userInfo = res.data;
					this.preMajor = res.data.Specialty;
				}
			});
		},
		methods: {
			setMajor(e) {
				if(this.userInfo.IsTeacher){
					this.major = this.majorForTeacher[e.detail.value];
					this.preMajor = this.major;
				}else if(this.userInfo.IsStudent){
					this.major = this.majorForStudent[e.detail.value];
					this.preMajor = this.major;
				}else {
					uni.showMessage("您不是本校人员，请联系管理员。");
				}
			},
			ModifyMajor() {
				let currentUserGuid = this.currentUserGuid;
				let major = this.major;
				uni.post("/uc/ModifyMajor", {
					currentUserGuid,
					major
				}, msg => {
					if (msg.success) {
						this.tip = msg.msg;
						uni.showMessage(this.tip);
						this.preMajor = this.major;
					}
				});
			}
		},
		computed: {
			text() {
				return this.userInfo.IsStudent ? "专业" : "系部";
			}
		}
	}
</script>

<style>
	page {
		background-color: #FFFFFF;
	}
</style>
