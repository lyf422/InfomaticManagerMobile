<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" isBack>
			<block slot="backText">返回</block>
			<block slot="content">我的团队</block>
			<block slot="right">
				<view class="text-xxl flex align-center" @click="setModal()">
					<text class="cuIcon-add"></text>
					<text class="text-lg margin-right">新增</text>
				</view>
			</block>
		</cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" v-for="team in teams" :key="team.ID">
				<view class="content padding-tb-sm" @click="toDetail(team.ID)">
					<view>
						<text class="cuIcon-group_fill text-blue margin-right-xs"></text> {{team.Name}}
					</view>
					<view class="text-gray text-sm">
						<text class="cuIcon-infofill margin-right-xs"></text>
						负责人：{{team.LeaderName}}, 指导老师：{{team.TurtorName ? team.TurtorName : "暂无"}}
					</view>
				</view>
				<view class="action" @click="delTeam(team.ID)">
					<button class="cu-btn bg-red">删除</button>
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="showModal ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">创建新团队</view>
					<view class="action" @tap="setModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input placeholder="请输入团队名称" v-model="teamName" />
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="setModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="addTeam">新建</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	const app = require("@/config");
	export default {
		data() {
			return {
				showModal: false,
				teamName: "",
				teams: []
			}
		},
		onLoad() {
			this.getTeams();
		},
		methods: {
			toDetail(ID) {
				uni.navigateTo({
					url: "./detail?id=" + ID
				})
			},
			setModal() {
				this.showModal = !this.showModal;
			},
			addTeam() {
				uni.post("/api/team/SaveTeam", {
					Name: this.teamName,
					LeaderId: app.currentUserGuid
				}, msg => {
					if(msg.success) {
						this.getTeams();
						this.setModal();
						this.teamName = '';
					} else {
						uni.showToast({
							icon: 'none',
							title: msg.msg
						})
					}
				})
			},
			getTeams() {
				uni.post("/api/team/GetTeams", {}, msg => {
					if(msg.success) {
						this.teams = msg.data;
					} else {
						uni.showToast({
							icon: 'none',
							title: msg.msg
						})
					}
				})
			},
			delTeam(ID) {
				uni.showModal({
					title: "确认删除",
					content: "是否删除此团队？删除后不可恢复。",
					success: (res) => {
						debugger
						if(res.confirm){
							uni.post("/api/team/RemoveTeam", {ID}, msg => {
								if(msg.success) {
									this.getTeams();
								} else {
									uni.showToast({
										icon: 'none',
										title: msg.msg
									})
								}
							}) 
						}
					}
				})
			}
		}
	}
</script>

<style>
	input {
		border-bottom: #DDD solid 2upx;
	}
</style>
