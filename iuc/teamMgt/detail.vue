<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" isBack>
			<block slot="backText">返回</block>
			<block slot="content">团队详情</block>
		</cu-custom>
		<view>
			<view class="cu-bar bg-white solids-bottom">
				<view class="action sub-title">
					<text class="text-xl text-bold text-green">团队基础信息</text>
					<text class="bg-green"></text>
				</view>
			</view>
			<form>
				<view class="cu-form-group">
					<view class="title">团队名称</view>
					<input placeholder="三字标题" name="input" v-model="team.Name"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">团队编号</view>
					<input placeholder="三字标题" name="input" v-model="team.ID"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">项目名称</view>
					<input placeholder="三字标题" name="input"></input>
				</view>
			</form>
			<view class="cu-bar bg-white solids-bottom">
				<view class="action sub-title">
					<text class="text-xl text-bold text-green">团队成员信息</text>
					<text class="bg-green"></text>
					<!-- last-child选择器-->
				</view>
				<view class="margin-right">
					<button class="cu-btn bg-gradual-green" @click="toInvite">添加队员</button>
				</view>
			</view>
			<view class="cu-list menu">
				<view class="cu-item arrow" @click="showMember()">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">某某人</text>
					</view>
					<view class="action">
						<view class='cu-tag round'>队长</view>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">某某人</text>
					</view>
					<view class="action">
						<view class='cu-tag round'>副队长</view>
					</view>
				</view>
			</view>
		</view>
		<navigator url="./approval" open-type="navigate">123</navigator>
		<view class="cu-modal" :class="showModal ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-between">
					<view class="action" @tap="showMember">
						<text class="cuIcon-delete text-red"></text>
					</view>
					<view class="content">XXX的信息</view>
					<view class="action" @tap="showMember">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-left">
					<form>
						<view class="cu-form-group">
							<view class="title">姓名</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">学号</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">系别</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">电话</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">邮箱</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">加入时间</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="cu-form-group">
							<view class="title">角色</view>
							<input placeholder="三字标题" name="input"></input>
						</view>
						<view class="padding flex flex-direction">
							<button class="cu-btn bg-blue light lg">确认</button>
						</view>
					</form>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad(opt) {
			this.getTeam(opt.id);
		},
		data() {
			return {
				team: {
					members: []
				},
				showModal: false
			}
		},
		methods: {
			showMember() {
				this.showModal = !this.showModal
			},
			getTeam(ID) {
				uni.post("/api/team/GetTeam", {ID}, msg => {
					if(msg.success) {
						this.team = msg.data;
						this.getMembers(this.team.ID);
					} else {
						uni.showToast({
							icon: 'none',
							title: msg.msg
						})
					}
				})
			},
			toInvite() {
				uni.navigateTo({
					url: './invite'
				})
			},
			getMembers(teamId) {
				uni.post("/api/team/GetTeamMembers", {teamId}, msg => {
					if(msg.success) {
						this.team.members = msg.data;
					} else {
						uni.showToast({
							icon: 'none',
							title: msg.msg
						})
					}
				}) 
			}
		}
	}
</script>

<style>
	.cu-form-group+.cu-form-group {}
</style>
