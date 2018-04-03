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
        name: 'step-list',
        data() {
            return {
                msg: '顺其自然，宁缺毋滥~',
            };
        },
       
  
		created() {
			EventHub.$emit('getSinger',this.msg)
		},
        beforeDestroy() {
            console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============step组件》')
        },
		
    }
</script>

<style scoped>

</style>