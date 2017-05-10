<template>
	<div class="nav">
		<nav class="nav-list" id="navList" >
			<a 	href="javascript:;" 
				v-for="(navItem,index) in navListData" 
				:class="index==0?'on':''"
				@click="toggleClass(navItem.NavID,index)">
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
		created (){
			this.$http.jsonp('http://m.haimi.com/api/nav/list',{
				Params : {
					platform : "WAP"
				},
				jsonp : "_callback" 
			}).then(function(data){4
				this.navListData = data.body.data
			})
		},
		methods : {
			toggleClass(id,index){
				var navList = document.getElementById("navList"),
					navItem = navList.getElementsByTagName("a");
				for(var i=0;i<navItem.length;i++){
					navItem[i].className = ""
				}
				navItem[index].className = "on";
				this.$emit("child-say",id,index)
			}
		}
	}
	
</script>

<style lang="less" scoped>
	.nav{
		width:100%;
		height:0.5rem;
		position:fixed;
		z-index:50;
		background:#fff;
		.nav-list{
			height:100%;
			padding:0 0.15rem;
			box-sizing:border-box;
			display:-webkit-box;
			-webkit-box-align:center;
			overflow: auto;
			a{
				display:block;
				width:13%;
				text-align:center;
				color:#242424;
				margin:0 0.028rem;
				line-height:0.3rem;
				&.on{
					border-bottom:0.02rem solid #242424;
				}
			}
		}
	}
</style>