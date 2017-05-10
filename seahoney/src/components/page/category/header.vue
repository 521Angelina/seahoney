<template>
	<div class="categoryHeader">
		<header class="headerBar" id="headerBar">
			<span v-for="(item,index) in headerList" :class="item.textAlign">
				<a href="javascript:;" :class="index==0?'on':''" @click="toggleClass(index)">{{item.name}}</a>
			</span>
		</header>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				headerList : [
					{
						name : "分类",
						textAlign : "right"
					},
					{
						name : "品牌",
						textAlign : "left"
					}
				]
			}
		},
		methods : {
			toggleClass (index){
				var headerBar = document.getElementById("headerBar"),
					headerList = headerBar.getElementsByTagName("a");
				for(var i=0;i<headerList.length;i++){
					headerList[i].className = ""
				}
				headerList[index].className = "on";
				this.$emit("setIndex",index);
			}
		}
	}
</script>

<style lang="less" scoped>
	.categoryHeader{
		width:100%;
		height:0.44rem;
		border-bottom:0.01rem solid #eee;
		position:fixed;
		z-index:50;
		background:#fff;
		.headerBar{
			width:100%;
			height:100%;
			display:-webkit-box;
			-webkit-box-align:center;
			span{
				-webkit-box-flex:1;
				display:-webkit-box;
				-webkit-box-align:center;
				a{
					width:0.4rem;
					display:block;
					text-align:center;
					color:#666;
					height:0.25rem;
					line-height:0.25rem;
					margin:0 0.1rem;
					&.on{
						border-bottom:0.01rem solid #000;
						color:#000;
					}
				}
				&.right{
					-webkit-box-pack:end;
				}
				&.left{
					-webkit-box-pack:start;
				}
			}
		}
	}
</style>