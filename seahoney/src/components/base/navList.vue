<template>
	<div class="nav">
		<nav class="nav-list" id="navList" @click="getNavId()">
			<a 	href="javascript:;" 
				v-for="(navItem,index) in navListData" 
				:class="index==0?'on':''">
				{{navItem.Title}}
			</a>
		</nav>
	</div>
</template>
 
<script>
	export default {
		data (){
			return {
				navListData : ""
			}
		},
		created : {
			this.$http.jsonp('http://m.haimi.com/api/nav/list',{
				Params : {
					platform : "WAP"
				},
				jsonp : "_callback" 
			}).then(function(data){
				console.log(data.body.data)
				this.navListData = data.body.data
			})
		}
		methods : {
			getNavId(e){
				var event = e || window.event;
				var	target = event.target || event.srcElement;
				var navList = document.getElementById("navList"),
					navItem = navList.getElementsByTagName("a");
				for(var i=0;i<navItem.length;i++){
					navItem[i].className = ""
				}
				if(target.nodeName == "A"){
					target.className = "on"
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav{
		width:100%;
		height:0.5rem;
		.nav-list{
			height:100%;
			padding:0 0.15rem;
			box-sizing:border-box;
			display:-webkit-box;
			-webkit-box-align:center;
			overflow-x:scroll;
			a{
				display:block;
				width:0.43rem;
				text-align:center;
				color:#242424;
				margin:0 0.05rem;
				line-height:0.3rem;
				&.on{
					border-bottom:0.02rem solid #242424;
				}
			}
		}
	}
</style>