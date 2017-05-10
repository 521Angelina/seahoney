<template>
	<div>
		<header class="header-bar">
			<div class="search-bar">
				<i class="fa fa-search"></i>
				<input type="text" class="search" placeholder="搜索宝贝">
				<span>×</span>
			</div>                                                        
			<router-link to='/details' class="search-btn">搜索</router-link>
		</header>
	</div>
</template>
<style lang='less' scoped>
	.header-bar{
		height:0.44rem;
		padding:0.05rem 0.1rem;
		box-sizing:border-box;
		display:-webkit-box;
		-webkit-box-align:center;
		.search-bar{
			-webkit-box-flex:1;
			height:0.3rem;
			display:-webkit-box;
			-webkit-box-align:center;
			width: 100%;
			i{
				display:block;
				color:#999;
				font-size:0.18rem;
				width:0.3rem;
				text-align:center;
				position: absolute;
				top: 0.13rem;
			}
			input{
				width:100%;
				border:0;
				padding:0;
				display:block;
				background:#f7f7f7;
				font-size:0.12rem;
				outline: none;
				padding:0.08rem 0.3rem;
			}
			span{
				position: absolute;
				top: 0.13rem;
				right: 0.7rem;
				display: block;
				width: 0.2rem;
				height: 0.2rem;
				background: #ccc;
				opacity: 0.5;
				border-radius: 100%;
				text-align: center;
			}
		}
		.search-btn{
			width:0.5rem;
			height:0.3rem;
			line-height:0.3rem;
			text-align:right;
			letter-spacing:0.03rem;
		}
	}
	
</style>