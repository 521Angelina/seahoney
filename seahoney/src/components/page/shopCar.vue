<template>
	<div class="shopCarPage">
		<div class="shopCarContent" v-if="shopCarData.length >= 1">
			
		</div>
		<div class="shopCarContent" v-if="shopCarData.length == 0">
			<div class="shopCarEmpty">
				<div>
					<img src="static/购物车.png" alt="">
					<a href="javascript:;">去首页转转</a>
				</div>
			</div>
			<h6>大家都在买的宝贝</h6>
			<div class="everyShop">
				<div class="everyProduct" v-for="suggestItem in suggestData">
					<a href="javascript:;" class="everyImg">
						<img :src="suggestItem.Pictures" alt="">
					</a>
					<p>{{suggestItem.Subject}}</p>
					<span>￥{{suggestItem.FinalPrice}}</span>
				</div>
			</div>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import footerBar from "@/components/base/footer"
	export default {
		data (){
			return {
				shopCarData : [],
				suggestData : []
			}
		},
		components : {
			footerBar
		},
		created : function(){
			this.$http.jsonp('http://m.haimi.com/api/cart/info?clearInvalidProducts=Y',{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
               	this.shopCarData = data.body.data;
               	this.suggestData = data.body.extra.Suggest
                //console.log(this.suggestData)
            })
		}
	}
</script>

<style lang="less" scoped>
	.shopCarPage{
		width:100%;
		height:100%;
		.shopCarContent{
			width:100%;
			height:100%;
			.shopCarEmpty{
				width:100%;
				height:3.3rem;;
				background:#f8f8f8;
				display:-webkit-box;
				-webkit-box-pack:center;
				-webkit-box-align:center;
				div{
					margin-top:0.8rem;
					img{
						width:1rem;
						display:block;
						margin-bottom:0.2rem;
					}
					a{
						display:block;
						width:1rem;
						height:0.26rem;
						border:0.01rem solid #333;
						color:#333;
						text-align:center;
						line-height:0.26rem;
						font-size:0.12rem;
					}
				}
			}
			h6{
				height:0.4rem;
				line-height:0.4rem;
				text-align:center;
				border-bottom:0.01rem solid #eee;
			}
			.everyShop{
				width:100%;
				background:#f8f8f8;
				padding-bottom:0.5rem;
				.everyProduct{
					width:49%;
					margin-bottom:0.05rem;
					display:inline-block;
					background:#fff;
					padding:0.1rem;
					box-sizing:border-box;
					.everyImg{
						width:1.35rem;
						height:1.35rem;
						margin-bottom:0.1rem;
						img{
							width:1.63rem;
							display:block;
							height:1.63rem;
						}
					}
					&:nth-child(even){
						margin-left:0.07rem;
					}
					p{
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
						color:#999;
						margin-top:0.1rem;
					}
					span{
						color:#333;
						margin-top:0.1rem;
						display:block;
						text-align:center;
					}
				}
			}
		}
	}
</style>