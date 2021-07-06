<template>
	<view>
		<cu-custom bgColor="bg-informatic-brown" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">绑定微信</block>
		</cu-custom>
		<form @submit="submit">
			<view class="cu-form-group">
				<view class="title">姓名<text class="span"></text>
				</view>
				<text><text class="text-red">*</text>：</text>
				<input name="realName" />
			</view>
			<view class="cu-form-group">
				<view class="title">学/工号<text class="span"></text></view>
				<text><text class="text-red">*</text>：</text>
				<input name="code" />
			</view>
			<view class="cu-form-group">
				<view class="title">手机<text class="span"></text></view>
				<text><text class="text-red">*</text>：</text>
				<input name="mobile" />
			</view>
			<view class="cu-form-group">
				<view class="title">邮箱<text class="span"></text></view>
				<text><text class="text-red">*</text>：</text>
				<input name="email" />
			</view>
			<view class="cu-form-group">
				<view class="title">专业<text class="span"></text></view>
				<text><text class="text-red">*</text>：</text>
				<input name="major" />
			</view>
			<view class="text-center margin">
				<button class="cu-btn bg-blue lg" form-type="submit">确认绑定</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		methods: {
			submit(event) {
				let formData = event.detail.value;
				for(let key in formData){
					if(!formData.key) {
						uni.showToast({
							title: "所有字段都不得为空",
							icon: 'none'
						})
					}
				}
			}
		}
	}
</script>

<style>
	.title {
		width: 3.3em;
		text-align: justify;
		padding: 0;
	}
	.span {
		display: inline-block;
		width: 100%;
	}
</style>
