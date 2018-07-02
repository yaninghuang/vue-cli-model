<template>
    <div class="headTop col-sm-12">
        <div class="headTop-left pull-left"><img :src="logo1"></div>
        <div class="pull-right">
            <div class="user-default pull-right">
                <img :src="userIcon"  class="user-icon">
                <div class="user-default-change">
                    <div class="">设置</div>
                    <div class="">退出</div>
                </div>
            </div>
            <div class="zhichiyufuwu pull-right">支持与服务</div>
            <div class="headTop-notice pull-right">
                <div class="noticeNum"></div>
                <div class="noticeList"></div>
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>
<script>
export default {
    props:[],
    data(){
        return{
            logo1: require("../assets/images/logo1.png"),
            userIcon: require("../assets/images/user-default.png")
        }
    },
    created() {
        
    },
    mounted(){},
    methods:{}
}
</script>

