<template>
	<div class="hello">
		<mt-header fixed title="首页"></mt-header>
		<!-- <mt-swipe :auto="4000">
							<mt-swipe-item>1</mt-swipe-item>
							<mt-swipe-item>2</mt-swipe-item>
							<mt-swipe-item>3</mt-swipe-item>
						</mt-swipe> -->
		<!-- <mt-switch v-model="value"></mt-switch> -->
		<div class="btn">
			<mt-button type="primary" @click="$router.push('/step')">to-step</mt-button>
		</div>
		<div class="box">
			<div class="title">
				<a href="###">google</a>
				<p>p标签</p>
			</div>
		</div>
		<!-- <mt-button type="default" @click="showMessage">default</mt-button> -->
	</div>
</template>

<script>
	import {
		Switch,
		Popup,
		Toast,
		Button,
		MessageBox,
		Swipe,
		SwipeItem,
		Header
	} from 'mint-ui';
	export default {
		name: 'index',
		data() {
			return {
				value: true,
				popupVisible: true,
				singers: {
					Eminem: 'I need a doctor',
					EdSheern: 'shape of you',
					Adele: 'someone like you'
				},
			}
		},
		created() {
			const self = this;
			EventHub.$on('getSinger', (s) => {
				console.info(s, 'step传过来的值')
			})
		},
		beforeDestroy() {
			// EventHub.$emit('getSinger', self.singers)
			EventHub.$off('getSinger')
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
	@import '../../../static/css/home/index.scss';
</style>
