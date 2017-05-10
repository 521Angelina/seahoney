<template>
	<div>
		<search-bar></search-bar>
		<div class="search-hot">
			<h3>热搜宝贝</h3>
			<div class="searchList">
				<span v-for='item in searchList'>{{ item }}</span>
			</div>
		</div>
	</div>
</template>
<script>
import searchBar from "@/components/base/search"
	export default {
		components:{
			searchBar
		},
		data (){
			return {
				searchList : [],
			}
		},
		created : function(){
			/*http://m.haimi.com/api/search/hotword?type=PRODUCT&platform=WAP*/
			this.$http.jsonp('http://m.haimi.com/api/search/hotword?',{
                Params:{
                	type:"PRODUCT",
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                console.log(res)
               	for(var i=0;i<res.length;i++){
               		this.searchList.push(res[i])
               	}
            })
		}

	}
</script>
<style lang='less' scoped>
	.search-hot{
		width: 100%;
		padding: 0.1rem;
		h3{
			font-size: 0.16rem;
		}
		.searchList{
			width: 100%;
			margin-top: 0.15rem;
			span{
				display: block;
				float: left;
				line-height: 0.29rem;
				border:1px solid #e5e5e5;
				padding: 0 0.1rem;
				margin-bottom: 0.15rem;
				margin-right: 0.1rem;
			}
		}
	}
</style>