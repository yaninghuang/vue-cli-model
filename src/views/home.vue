<template>
    <div class="page">

        <head-top></head-top>

        <div class="col-sm-12 content">
            <div class="side">
                <ul class="side-list1">
                    <li v-for="(item,index) in sideList" :key="index" v-on:click="openSideMenu(item.id)" :class="isOn == true ? 'on' : ''">
                        <div class="side-sub">
                            <div class="side-sub-img"><img :src="item.imgSrc"></div>
                            <div class="side-sub-text">{{item.text}}</div>
                        </div>
                        <div v-if="isFirstSideSub" class=""></div>
                    </li>
                </ul>
                <div class="side-list2">
                    <div class="">智能顾问</div>
                    <div class="">意见建议</div>
                    <div class="">功能设置</div>
                </div>
            </div>
            <div class="menu">
                <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
                <el-tree class="filter-tree" :data="data2" :props="defaultProps"
                    default-expand-all :filter-node-method="filterNode" ref="tree2">
                </el-tree>
            </div>
            <div class="nav"></div>
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
import headTop from "../components/headTop.vue";

export default {
    components: {
        headTop
    },
    name: 'home',
    data() {
        return {
            sideList: [],
            isFirstSideSub: false, //初始业务导航悬浮窗隐藏状态
            filterText: '',
            data2: [{
            id: 1,
            label: '一级 1',
            children: [{
                id: 4,
                label: '二级 1-1',
                children: [{
                id: 9,
                label: '三级 1-1-1'
                }, {
                id: 10,
                label: '三级 1-1-2'
                }]
            }]
            }, {
            id: 2,
            label: '一级 2',
            children: [{
                id: 5,
                label: '二级 2-1'
            }, {
                id: 6,
                label: '二级 2-2'
            }]
            }, {
            id: 3,
            label: '一级 3',
            children: [{
                id: 7,
                label: '二级 3-1'
            }, {
                id: 8,
                label: '二级 3-2'
            }]
            }],
            defaultProps: {
            children: 'children',
            label: 'label'
            }
        };
    },
    created() {},
    mounted() {
        let sideUrl = '/api/getSideList.json';
        setTimeout(() => {
            this.$http.get(sideUrl)
                .then( res =>{
                    console.log(res);
                    this.sideList = res.data.result;
                    // console.log(this.sideList);
                })
                .catch(err =>{
                    console.warn(err);
                });
        },1000);
    },
    methods: {
        openSideMenu(id){
            let _self = this;
            if(id == 1){
                this.isFirstSideSub == true;
            }
            for(let i of this.sideList){
                i.isOn = id == i? true : false;
            }
        },
        filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
        }
    },
    watch: {
        filterText(val) {
        this.$refs.tree2.filter(val);
        }
    }
};
</script>