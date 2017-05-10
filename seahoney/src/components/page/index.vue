<template>
	<div class="indexPage">
    	<header-bar></header-bar>
    	<div class="indexContent">
			<nav-list v-on:child-say="getChild"></nav-list>
    		<component class="indexMain" v-bind:is="currentView" :index="pageIndex" :navId="navID"></component>
    	</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import headerBar from "@/components/page/index/header"
	import navList from "@/components/page/index/navList"
	import TuiJian from "@/components/page/index/TuiJian"
	import Page from "@/components/page/index/Page"
	import footerBar from "@/components/base/footer"
	
	export default {
		data (){
			return {
				pageIndex : 0,
				navID : "2",
				currentView : "TuiJian"
			}
		},
		components : {
			navList,
			headerBar,
	      	footerBar,
	      	TuiJian,
	      	Page
		},
		methods : {
			getChild(id,index){
				this.navID = id;	
				this.pageIndex = index;
				if(index == 0){
					this.currentView = "TuiJian"
				}else{
					this.currentView = "Page"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.indexContent{
		padding-top:0.44rem;
		overflow:auto;
		.indexMain{
			padding-top:0.5rem;
		}
	}
</style>