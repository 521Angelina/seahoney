<template>
	<div class="buys">
		<div class="home">
			<i class="iconfont icon-shouye-shouye"></i>
		</div>
		<div class="star">
			<i class="iconfont icon-star-outline"></i>
		</div>
		<div class="gouwuche">
			<i class="iconfont icon-gouwuche"></i>
		</div>
		<div class="add">
			<span>加入购物车</span>
		</div>
		<div class="buynow">
			<span>立即购买</span>
		</div>
	</div>
</template>
<style lang='less' scoped>
	.buys{
		width: 100%;
		height: 0.49rem;
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top: 1px solid #ccc;
		line-height: 0.49rem;

		&>div{
			float: left;
			padding: 0.01rem 0;
		}
		.home,.star,.gouwuche{
			width: 0.42rem;
			text-align: center;
			border-right: 1px solid #eee;
		}
		.add,.buynow{
			width: 1.23rem;
			text-align: center;
			font-size: 0.15rem;
		}
		.buynow{
			background: #801a2a;
			color: #fff;
		}
	}
</style>