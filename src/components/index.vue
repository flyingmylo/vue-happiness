<template>
	<div class="hello">
		<!-- <mt-swipe :auto="4000">
						<mt-swipe-item>1</mt-swipe-item>
						<mt-swipe-item>2</mt-swipe-item>
						<mt-swipe-item>3</mt-swipe-item>
					</mt-swipe> -->
		<!-- <mt-switch v-model="value"></mt-switch> -->
		<mt-button type="primary" @click="$router.push('/step')">to-step</mt-button>
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
		SwipeItem
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
		// beforeCreate() {
		// 	console.group('%c%s', 'color:blue', 'beforeCreate 创建前状态===============index组件》')
		// },
		created() {
			console.group('%c%s', 'color:blue', 'created 创建完毕状态===============index组件》')
			const self = this;
			EventHub.$on('getSinger',(s)=> {
				console.info(s,'step传过来的值')
			})
		},
		beforeDestroy() {
			// EventHub.$emit('getSinger', self.singers)
			EventHub.$off('getSinger')
			console.group('%c%s', 'color:blue', 'beforeDestroy 破前状态===============index组件》')
		},
		// beforeMount() {
		// 	console.group('%c%s', 'color:blue', 'beforeMount 挂载前状态===============index组件》')
		// },
		// mounted() {
		// 	console.group('%c%s', 'color:blue', 'mounted 挂载状态===============index组件》')
		// },
		// beforeUpdate() {
		// 	console.group('%c%s', 'color:blue', 'beforeUpdate 更新前状态===============index组件》')
		// },
		// updated() {
		// 	console.group('%c%s', 'color:blue', 'updated 更新状态===============index组件》')
		// },
		// destroyed() {
		// 	console.group('%c%s', 'color:blue', 'destroyed 破坏状态===============index组件》')
		// 	// window.EventHub.$emit('getSinger', self.singers)
			
		// }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../static/css/index.css';
</style>
