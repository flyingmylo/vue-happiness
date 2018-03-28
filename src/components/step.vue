<template>
    <div class="step">
        <!-- <mt-button type="primary">step</mt-button> -->
        <mt-button type="primary" @click="$router.push({path:'/'})">to-index</mt-button>

    </div>
</template>

<script>
    import {
        Button
    } from 'mint-ui';

    export default {
        name: 'step',
        data() {
            return {
                msg: '顺其自然，宁缺毋滥~',
            };
        },
       
    //    beforeCreate() {
	// 		console.group('%c%s', 'color:red', 'beforeCreate 创建前状态===============step组件》')
	// 	},
		created() {
			console.group('%c%s', 'color:red', 'created 创建完毕状态===============step组件》')
			EventHub.$emit('getSinger',this.msg)
		},
        beforeDestroy() {
            console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============step组件》')
        },
		// beforeMount() {
		// 	console.group('%c%s', 'color:red', 'beforeMount 挂载前状态===============step组件》')
		// },
		// mounted() {
		// 	console.group('%c%s', 'color:red', 'mounted 挂载状态===============step组件》')
		// },
		// beforeUpdate() {
		// 	console.group('%c%s', 'color:red', 'beforeUpdate 更新前状态===============step组件》')
		// },
		// updated() {
		// 	console.group('%c%s', 'color:red', 'updated 更新状态===============step组件》')
		// },
		// destroyed() {
		// 	console.group('%c%s', 'color:red', 'destroyed 破坏状态===============step组件》')
			
		// }
    }
</script>

<style scoped>

</style>