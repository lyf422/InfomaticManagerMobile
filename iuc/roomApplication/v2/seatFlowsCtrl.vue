<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" isBack>
			<block slot="backText">返回</block>
			<block slot="content">{{io.isMyStep?"操作申请表":"查看申请表"}}</block>
		</cu-custom>
		<lab-Steps :value="io.allSteps"></lab-Steps>
		<form>
			<view class="cu-bar bg-white solids-bottom">
				<view class="action text-xl">
					<text class="cuIcon-title text-blue text-xl"></text>
					<text class="text-bold text-xl">个人申请实验室</text>
				</view>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.Owner">
				<view class="title">申请人名称</view>
				<input placeholder="三字标题" v-model="io.data.Owner" :disabled="io.fieldAccess.Owner==='r'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.OwnerRoles">
				<view class="title">申请人身份<text class="content padding-left" v-for="(item,index) in io.data.OwnerRoles" :key="index">{{item}}</text></view>
			</view>
			<view class="cu-form-group" @click="selectDateTime(io.fieldAccess.StartDate)" v-show="io.fieldAccess.StartDate">
				<view class="title">申请时段</view>
				<text style="flex: 1;">{{!io.data.StartDate?"请选择申请时段"
				:io.data.StartDate+'&nbsp;至&nbsp;'+io.data.EndDate}}</text>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.Telephone">
				<view class="title">申请人电话</view>
				<input placeholder="三字标题" v-model="io.data.Telephone" :disabled="io.fieldAccess.Telephone==='r'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.ApplicationReason">
				<view class="title">申请事由</view>
				<input placeholder="三字标题" v-model="io.data.ApplicationReason" :disabled="io.fieldAccess.ApplicationReason==='r'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.SeatId">
				<view class="title">机位</view>
				<picker mode="selector" :range="assistInfo.seats" range-key="Code" @change="selectSeat" :disabled="io.fieldAccess.SeatId==='r'||io.isMyStep">
					<view class="content">
						{{seatsDic[io.data.SeatId]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.SeatInfo">
				<view class="title">
					机位信息
					<text class="content padding-left">{{io.data.SeatInfo.building.Name}}{{io.data.SeatInfo.room.Name}}{{io.data.SeatInfo.seat.Code}}</text>
				</view>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.GuideTeacherId&&isStudent">
				<view class="title">选择指导老师</view>
				<picker :range="assistInfo.teachers" range-key="RealName" @change="selectTeacher" :disabled="io.fieldAccess.GuideTeacherId!=='w'||!io.isMyStep">
					<view class="content">
						{{assistInfo.guideTeacherName}}
					</view>
				</picker>
			</view>
			<view class="cu-bar bg-white solids-bottom margin-top" v-show="io.fieldAccess.GuideTeacherOpinion">
				<view class="action text-xl">
					<text class="cuIcon-title text-blue text-xl"></text>
					<text class="text-bold text-xl">指导老师审核</text>
				</view>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.GuideTeacherOpinion">
				<view class="title">指导老师审核意见</view>
				<input v-model="io.data.GuideTeacherOpinion" :disabled="io.fieldAccess.GuideTeacherOpinion!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.GuideTeacher">
				<view class="title">指导老师姓名</view>
				<input v-model="io.data.GuideTeacher" :disabled="io.fieldAccess.GuideTeacher!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.GuideTeacherTime">
				<view class="title">指导老师审核时间</view>
				<input v-model="io.data.GuideTeacherTime" :disabled="io.fieldAccess.GuideTeacherTime!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-bar bg-white solids-bottom margin-top" v-show="io.fieldAccess.ReviewOpinion"> 
				<view class="action text-xl">
					<text class="cuIcon-title text-blue text-xl"></text>
					<text class="text-bold text-xl">管理组老师审核</text>
				</view>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.ReviewOpinion">
				<view class="title">管理组审核人意见</view>
				<input v-model="io.data.ReviewOpinion" :disabled="io.fieldAccess.ReviewOpinion!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.Reviewer">
				<view class="title">管理组审核人名称</view>
				<input v-model="io.data.Reviewer" :disabled="io.fieldAccess.Reviewer!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.ReviewTime">
				<view class="title">管理组审核时间</view>
				<input v-model="io.data.ReviewTime" :disabled="io.fieldAccess.ReviewTime!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-bar bg-white solids-bottom margin-top" v-show="io.fieldAccess.Director">
				<view class="action text-xl">
					<text class="cuIcon-title text-blue text-xl"></text>
					<text class="text-bold text-xl">中心办公室审核</text>
				</view>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.Director">
				<view class="title">中心办公室主任名称</view>
				<input v-model="io.data.Director" :disabled="io.fieldAccess.Director!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.DirectorOpinion">
				<view class="title">中心办公室主任意见</view>
				<input v-model="io.data.DirectorOpinion" :disabled="io.fieldAccess.DirectorOpinion!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.ExpertOpinion">
				<view class="title">办公会意见</view>
				<input v-model="io.data.ExpertOpinion" placeholder="请填写" :disabled="io.fieldAccess.ExpertOpinion!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.DirectorTime">
				<view class="title">中心办公室主任审核时间</view>
				<input v-model="io.data.DirectorTime" :disabled="io.fieldAccess.DirectorTime!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.HandlerName">
				<view class="title">实验室管理人员名称</view>
				<input v-model="io.data.HandlerName" :disabled="io.fieldAccess.HandlerName!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.HandleOpinion">
				<view class="title">实验室管理人员意见</view>
				<input v-model="io.data.HandleOpinion" :disabled="io.fieldAccess.HandleOpinion!=='w'||!io.isMyStep"></input>
			</view>
			<view class="cu-form-group" v-show="io.fieldAccess.HandleTime">
				<view class="title">实验室管理人员审核时间</view>
				<input v-model="io.data.HandleTime" :disabled="io.fieldAccess.HandleTime!=='w'||!io.isMyStep"></input>
			</view>
		</form>
		<timePicker :show="showPicker" type="rangetime" color="#6d3b5e" @cancel="selectDateTime()" @confirm="confirmDateTime" />
		<view class="cu-bar bg-white solids-bottom margin-top">
			<view class="action text-xl">
				<text class="cuIcon-title text-blue text-xl"></text>
				<text class="text-bold text-xl">操作流程</text>
			</view>
			<view class="action" @click="foldUp">
				<text class="text-df">{{displayTimeline?'收起':'展开'}}</text>
				<text class="padding-lr-xs text-bold" :class="displayTimeline?'cuIcon-fold':'cuIcon-unfold'"></text>
			</view>
		</view>
		<labTimeLine :timeline="io.timelines" v-show="displayTimeline"></labTimeLine>
		<view v-if="io.isMyStep">
			<button class="flex-sub bg-cyan margin-top" @click="onSubmit()" v-if="io.submitBtns.length===1">{{io.submitBtns[0].Text}}</button>
			<view style="height: 180rpx; width: 100%;" v-else>
				<view class="flex-sub cu-list grid cu-bar foot" :class="['col-'+io.submitBtns.length]">
					<view v-for="(item,index) in io.submitBtns" class="cu-item" @click="onSubmit(item)" :key="index">
						<view :class="item.Icon"></view>
						<text>{{item.Text}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(opt) {
			uni.post("/api/roomApp/v1/GetRoomAndTeacher", {}, msg => {
				this.assistInfo = {
					...this.assistInfo,
					...msg
				};
				let roomDic = {};
				this.assistInfo.rooms.forEach(value => {
					roomDic[value.ID] = value.Name;
				});
				roomDic['00000000-0000-0000-0000-000000000000'] = '请选择房间号';
				uni.setStorage({
					key: 'roomDic',
					data: roomDic
				});
			});
			uni.getStorage({
				key: 'roomDic',
				success: (res) => {
					this.roomDic = res.data;
				}
			});
			if (opt.create) {
				this.displayTimeline = false;
				uni.getStorage({
					key: 'seatid',
					success: (res) => {
						let id = res.data;
						uni.post("/api/seatApp/v1/Applicate", {
							id
						}, msg => {
							if (msg.success) {
								this.io = msg;
								for (let role in this.io.data.OwnerRoles) {
									if (this.io.data.OwnerRoles[role] === "老师") {
										this.isStudent = false;
										break;
									}
								}
								uni.post("/api/building/GetSeats", {
									ID: id
								}, msg => {
									let seatsDic = {};
									this.assistInfo.seats = msg.data;
									this.assistInfo.seats.forEach(value => {
										seatsDic[value.ID] = value.Code;
									});
									seatsDic['00000000-0000-0000-0000-000000000000'] = '请选择机位';
									uni.setStorage({
										key: 'seatsDic',
										data: seatsDic
									});
								})
							} else {
								uni.showToast({
									icon: 'none',
									title: msg.msg
								});
								setTimeout(function() {
									uni.navigateBack({
										delta: 1
									});
									uni.hideToast();
								}, 1500);
							}
						});
					}
				})
			} else {
				uni.getStorage({
					key: 'jmpInfo',
					success: (res) => {
						uni.post("/api/workflow/LoadInstance", { ...res.data,
							detail: true
						}, msg => {
							this.io = msg;
							uni.post("/api/building/GetSeats", {
								ID: this.io.data.SeatInfo.room.ID
							}, msg => {
								let seatsDic = {};
								this.assistInfo.seats = msg.data;
								this.assistInfo.seats.forEach(value => {
									seatsDic[value.ID] = value.Code;
								});
								seatsDic['00000000-0000-0000-0000-000000000000'] = '请选择机位';
								uni.setStorage({
									key: 'seatsDic',
									data: seatsDic
								});
							})
							if (this.io.intstanceState === 5) {
								for (let index in this.io.allSteps) {
									if (this.io.allSteps[index].status === 0) {
										this.io.allSteps[index - 1].status = 30;
										this.io.timelines[0].steps[0].State = 4;
										break;
									}
								}
							}
						});
					}
				});
			};
			uni.getStorage({
				key: 'seatsDic',
				success: (res) => {
					this.seatsDic = res.data;
				}
			});
		},
		methods: {
			onSubmit(item) {
				if (this.isStudent && this.io.data.GuideTeacherId === "00000000-0000-0000-0000-000000000000" && this.io.currentStep ===
					"填写申请表") {
					uni.showToast({
						title: '必须选择指导老师',
						icon: 'none',
						position: 'center'
					});
					setTimeout(function() {
						uni.hideToast();
					}, 1500);
				} else {
					if (item) {
						this.io.data[item.Field] = item.Value;
					}
					this.io.shouldUpload.forEach(value => {
						this.upLoad[value] = this.io[value] || this.io.data[value]
					});
					uni.post("/api/workflow/SubmitInstance", {
						...this.upLoad
					}, msg => {
						if (msg.success) {
							uni.showToast({
								title: '提交成功',
								icon: 'success',
								position: 'center'
							});
							setTimeout(function() {
								uni.navigateBack({
									delta: 1
								});
								uni.hideToast();
							}, 1500);
						} else {
							uni.showToast({
								icon: 'none',
								title: msg.msg
							});
							setTimeout(function() {
								uni.navigateBack({});
								uni.hideToast();
							}, 1500);
						}
					})
				}
			},
			selectTeacher(e) {
				let u = this.assistInfo.teachers[e.detail.value];
				this.io.data.GuideTeacherId = u.ID;
				this.assistInfo.guideTeacherName = u.RealName;
			},
			selectSeat(e) {
				let u = this.assistInfo.seats[e.detail.value];
				this.io.data.SeatId = u.ID;
				this.io.data.SeatInfo.seat = u;
			},
			selectDateTime(access) {
				if (access && access !== 'w' || !this.io.isMyStep) return;
				this.showPicker = !this.showPicker;
			},
			confirmDateTime(e) {
				this.io.data.StartDate = e.value[0];
				this.io.data.EndDate = e.value[1];
				this.selectDateTime();
			},
			foldUp() {
				this.displayTimeline = !this.displayTimeline;
			}
		},
		data() {
			return {
				io: {
					allSteps: [],
					data: {
						SeatInfo: {
							building: {},
							room: {},
							seat: {}
						}
					},
					fieldAccess: {},
					intstanceState: '',
					isMyStep: false,
					shouldUpload: [],
					submitBtns: [],
					timeLines: []
				},
				assistInfo: {
					buildings: [],
					rooms: [],
					seats: [],
					teachers: [],
					roomtemp: [],
					roomIndex: [0, 0],
					guideTeacherName: "请选择指导老师"
				},
				displayTimeline: true,
				upLoad: [],
				roomDic: {},
				seatsDic: {},
				showPicker: false,
				isStudent: true
			}
		}
	}
</script>

<style>
</style>
