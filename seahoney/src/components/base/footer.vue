<template>
	<div class="footer">
		<footer class="footer-bar">
			<router-link to="/index" active-class="on">
				<i class="fa fa-home"></i>
				<span>首页</span>
			</router-link>
			<router-link to="/category" active-class="on">
				<i class="fa fa-reorder"></i>
				<span>分类</span>
			</router-link>
			<router-link to="/shop" active-class="on">
				<i class="fa fa-shopping-cart"></i>
				<span>购物车</span>
			</router-link>
			<router-link to="/my" active-class="on">
				<i class="fa fa-user"></i>
				<span>我的</span>
			</router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" scoped>
	.footer{
		width:100%;
		position:fixed;
		left:0;
		bottom:0;
		border-top:0.01rem solid #ccc;
		background:#fff;
		z-index:50;
		.footer-bar{
			width:100%;
			height:0.5rem;
			display:-webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			a{
				-webkit-box-flex:1;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				i{
					font-size:0.2rem;
					color:#999;
					display:block;
				}
				span{
					display:block;
					color:#999;
				}
				&.on{
					i{
						color:#801a2a;
					}
					span{
						color:#801a2a;
					}
				}
			}
		}
	}
</style>