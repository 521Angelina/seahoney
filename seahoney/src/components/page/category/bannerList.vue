<template>
	<div>
		<nav class="nav">
			<ul class="navlist">
				<li><a href="">综合排序</a></li>
				<li><a href="">销量优先</a></li>
				<li><a href="">价格排序</a></li>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default{
		methods:{
			
		}
	}
</script>
<style lang='less' scoped>
	.nav{
		width: 100%;
		height: 0.41rem;
		ul{
			width: 100%;
			display: -webkit-box;
			li{
				-webkit-box-flex:1;
				text-align: center;
				line-height:0.41rem;
			}
		}
	}
</style>