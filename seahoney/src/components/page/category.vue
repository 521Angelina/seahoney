<template>
	<div class="categoryPage">
		<header-bar v-on:setIndex="getIndex"></header-bar>
		<div class="categoryContent">
			<component v-bind:is="currentView"></component>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import headerBar from "./category/header"
	import footerBar from "@/components/base/footer"
	import catList from "./category/catList"
	import brandList from "./category/brandList"

	export default {
		components : {
			headerBar,
			footerBar,
			catList,
			brandList
		},
		data (){
			return {
				currentView : "catList"
			}
		},
		methods : {
			getIndex (index){
				if(index == 0){
					this.currentView = "catList"
				}else{
					this.currentView = "brandList"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.categoryPage{
		width:100%;
		.categoryContent{
			overflow:auto;
			width:100%;
			height:100%;
			padding-bottom:0.5rem;
			padding-top:0.44rem;
		}
	}
</style>