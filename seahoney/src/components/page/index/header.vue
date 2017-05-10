<template>
	<div class="header">
		<header class="header-bar">
			<div class="search-bar">
				<i class="fa fa-search"></i>
				<input type="text" class="search" placeholder="搜索宝贝">
			</div>
			<router-link to='/searchdetails' class="search-btn">搜索</router-link>
		</header>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="less" scoped>
	.header{
		width:100%;
		position:fixed;
		z-index:50;
		.header-bar{
			height:0.44rem;
			background:#242424;
			padding:0.05rem 0.1rem;
			box-sizing:border-box;
			display:-webkit-box;
			-webkit-box-align:center;
			.search-bar{
				-webkit-box-flex:1;
				height:0.3rem;
				display:-webkit-box;
				background:#000;
				-webkit-box-align:center;
				i{
					display:block;
					color:#999;
					font-size:0.18rem;
					width:0.3rem;
					text-align:center;
				}
				input{
					height:100%;
					border:0;
					padding:0;
					display:block;
					background:#000;
					font-size:0.12rem;
				}
			}
			.search-btn{
				width:0.5rem;
				height:0.3rem;
				color:#fff;
				line-height:0.3rem;
				text-align:right;
				letter-spacing:0.03rem;
			}
		}
	}
</style>