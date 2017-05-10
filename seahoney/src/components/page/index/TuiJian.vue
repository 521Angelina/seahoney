<template>
	<div class="TuiJianContent">
		<banner-bar :bannerData='bannerList'></banner-bar>
		<div class="menuListContent">
			<div class="menuItem" v-for="menuItem in menuList">
				<a :href="menuItem.wapURL">
					<img :src="menuItem.Picture" alt="">
					<span>{{menuItem.SlideName}}</span>
				</a>
			</div>
		</div>
		<div class="productSlide" v-for="item in productItem" >
			<div v-if="item.Records.length == 1">
				<div class="productBanner">
					<a :href="item.Records[0].wapURL">
						<img :src="item.Records[0].Picture" alt="">
					</a>
				</div>
			</div>
			<div v-if="item.Records.length == 3">
				<h2 class="productTitle">{{item.Channel.Name}}</h2>
				<div class="productImg">
					<router-link :to='{name:"strictselection",params:{id:imgItem.CastID}}' v-for="imgItem in item.Records">
						<img :src="imgItem.Picture" alt="">
					</router-link>
				</div>
			</div>
			<div v-if="item.Records.length == 6">
				<h2 class="productTitle">{{item.Channel.Name}}</h2>
				<div class="productImage">
					<router-link :to='{name:"strictsele；【【ction",params:{id:imgItem.CastID}}' v-for="imgItem in item.Records">
						<img :src="imgItem.Picture" alt="">
					</router-link>
				</div>
			</div>
			<div v-if="item.Records.length == 7 || item.Records.length == 5">
				<div class="productList">
					<router-link :to='{name:"strictselection",params:{id:imgItem.CastID}}' v-for="imgItem in item.Records">
						<img :src="imgItem.Picture" alt="">
						<h6 :style='{color:imgItem.SlideNameColor}'>{{imgItem.SlideName}}</h6>
						<span :style='{color:imgItem.DescriptionColor}'>{{imgItem.Description}}</span>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bannerBar from "./banner"
	export default {
		components : {
			bannerBar
		},
		props : {
			index : {
				type : Number,
				default : 0
			},
			navId : {	
				type : String,
				default : "2"
			}
		},
		data (){
			return {
				bannerList : [],
				menuList : [],
				productItem : []
			}
		},
		created : function(){
			this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                this.bannerList = res[0].Records;
                this.menuList = res[1].Records;
                for(var i=2;i<res.length;i++){
                	this.productItem.push(res[i])
                }
                /*console.log(res[4].Records)*/
            })
		}
	}
</script>

<style lang="less" scoped>
	.TuiJianContent{
		background:#f8f8f8;
		margin-bottom:0.5rem;
		.menuListContent{
			display:-webkit-box;
			padding:0.1rem 0;
			box-sizing:border-box;
			.menuItem{
				-webkit-box-flex:1;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-box-align:center;
				-webkit-box-pack:center;
				background:#fff;
				a{
					img{
						display:block;
						width:100%;
					}
					span{
						display:block;
						color:#333;
						text-align: center;
						margin:0.07rem 0;
					}
				}
			}
		}
		.productSlide{
			width:100%;
			margin-bottom:0.1rem;
			background:#fff;
			div{
				.productBanner{
					a{
						img{
							width:100%;
							display:block;
						}
					}
				}
				.productTitle{
					height:0.4rem;
					text-align:center;
					line-height:0.4rem;
				}
				.productImg{
					height:2.5rem;
				    position: relative;
				    background:#eee;
					a{
						position: absolute;
				    	display: block;
				    	width:50%;
						img{
							width:100%;
							display:block;
						}
						&:first-child{
							left:0;
							top:0;
						}
						&:nth-child(2){
							left:0;
							bottom:0;
						}
						&:last-child{
							right:0;
							top:0;
						}
					}
				}
				.productImage{
					width:100%;
					height:3.6rem;
					a{
						width:50%;
						float: left;
						img{
							width:100%;
							display:block;
						}
					}
				}
				.productList{
					display:-webkit-box;
					overflow-x:scroll;
					margin-top:-0.1rem;
					a{
						display:-webkit-box;
						width:28%;
						-webkit-box-align:center;
						-webkit-box-orient:vertical;
						img{
							width:100%;
							display:block;
						}
						h6{
							display:block;
						}
						span{
							display:block;
							font-size:0.12rem;
							padding-bottom:0.1rem;
						}
					}
				}
			}
			
		}
	}
</style>