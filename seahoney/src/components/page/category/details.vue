<template>
	<div class="fenlei">	
		<search-bar></search-bar>
		<banner-bar></banner-bar>
		<details-bar></details-bar>
	</div>
</template>
<script>
	import searchBar from "@/components/base/search"
	import bannerBar from "@/components/page/category/bannerList"
	import detailsBar from "@/components/page/category/detailsList"
	export default {
		components:{
			searchBar,
			bannerBar,
			detailsBar
		}
	}
</script>
<style lang='less' scoped>
	.fenlei{
		width: 100%;
		height: 0.43rem;
		border-bottom: 1px solid #ccc;
	}
</style>