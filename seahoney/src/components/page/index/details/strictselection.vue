<template>
	<div>
		<div class="strictselection">
			<!-- {{ strictList.BrandName }} -->
			<swiper ref="mySwiper" class='swiperBox'>
				<swiper-slide class='swiperItem'>
					<a>
						<img :src="strictList.Pictures" alt="">
					</a>
				</swiper-slide>
				<swiper-slide class='swiperItem'>
					<a>
						<img :src="strictList.PicturesThumb" alt="">
					</a>
				</swiper-slide>
			</swiper>
			<div class="info">
				<div class="title">{{ strictList.Subject}}</div>
				<div class="price"> 
					<i>¥{{ strictList.FinalAmount }}</i>    
					<span class="sales">月销{{ strictList.MonthSalesNum}}件</span> 
				</div>
				<div class="youfei"> 
					<p>
						<span>邮费：{{ strictList.DomesticPrice }}</span>
					</p> 
				</div>  
			</div>
			<div class="others">
				<p class="sps">
					<span class="sp1" v-for="item in strictList.Promises">{{ item }}</span>
				</p>
			</div>
			<div class="sps others">
				<p class="selected" v-for="item in strictList.AttrInfoArray" @click="buyPopuped()">请选择：{{ item.AttrName }}</p>
			</div>
			<div class="others babyscore">
				<p class="sps babyscore">
					<span class="score">宝贝评分</span>
					<span class="starline"><i class="starfull"></i></span>
					<span class="starline"><i class="starfull"></i></span>
					<span class="starline"><i class="starfull"></i></span>
					<span class="starline"><i class="starfull"></i></span>
					<span class="starline"><i class="starfull"></i></span>
					<span class="grade">{{ strictList.MemberProductScore }}分</span>
				</p>
			</div>
			<div class="evaluate">
				<div>
					<ul class="comment-list">
						<li v-for="item in strictList.TopReviews"> 
							<div class="comment-info">
								<div class="fl avatar">
									<img :src="item.Buyer.Avatar" alt="">
								</div>
								<div class="nickname">{{ item.Buyer.NickName }}</div>
								<div class="createTime"> {{ item.CreateTime  }} </div>
							</div> 
							<p>{{ item.BuyerNote}}</p> 
							<div class="commentImg"> 
								<div class="ImgList"> 
									<img :src="item.BuyerPictures"> 
								</div> 
							</div>  
						</li>
					</ul>
					<a class="all-btn" href="/webapp/comment-list/4374844">全部评价(20)</a>
				</div>
			</div>
			<!--<div class="logistics">  
				<div class="shop-box"> 
					 <img class="fl" :src="strictList.Mall.LogoSrc"> 
					<div class="fl shopinfo">
						<h3 class="f16">{{ strictList.NickName}}</h3>
						<p class="c_666">{{ strictList.Mall.Introduction }}</p> 
					</div> 
				</div>
			</div>  -->
			<div class="shop-brand">
				<a>发现更多<span class="c_red">{{strictList.BrandName}}</span>良品</a>
			</div>
			<div class="details-box">
				<h3 class="title">商品详情</h3>
				<div class="weixin"> 
					<p></p>
					<p>
						<img src="http://img.haimi.com/Fpf_7URcK8ypvJq3cz3JySMSN6MI" lazy="loaded">
					</p> 
				</div>
				<div class="descriptioin" v-html="strictList.Descriptioin"></div>
			</div>
		</div>
		<buys-bar></buys-bar>
		<div class="buy-popup">
			<!--<div class="buy-bg" @click='buyPopup()'></div>
			<div class="buy-info">
				<div class="info">
					<img :src="strictList.Pictures" alt="">
					<div class="fl">
						<p class="f16 c_red">¥{{ strictList.FinalAmount}}</p> 
						<p class="c_999 f10 stock">(库存124件)</p> 
						<p class="checked" v-for="item in strictList.AttrInfoArray">请选择：<span class="checkedspan">{{ item.AttrName }}</span></p>
					</div>
				</div>
				<div class="sku">
					<h3>规格分类</h3> 
					<div class="list">
						<span v-for="(item,index) in strictList.SkuPictures" @click="Sku()">{{ item.ValueName }}</span>
					</div>
				</div>
				<div class="nums"> 
					<span class="fl">购买数量</span> 
					<div class="fr"> 
						<button class="reduce" @click="reduce()">－</button> 
						<input type="tel" class="numes" value="10"> 
						<button class="plus" @click='plus()'>＋</button> 
					</div>     
				</div>
				<div class="submit"> 
					<div class="f16" @cliak="addCart()">加入购物车</div> 
					<div class="f16 c_fff">立即购买</div> 
				</div>
			</div>-->
		</div>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import buysBar from "@/components/base/buy"
	export default{
		components:{
			buysBar
		},
		data (){
			return {
				strictList : []
			}
		},
		created : function(){
			console.log(this.$route.params.id)
			this.$http.jsonp('http://www.haimi.com/api/product/detail-cdn?ProductID='+this.$route.params.id,{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
            	//
				var res = data.body.data;
				console.log(res)
				this.strictList=res;
				/*console.log(res)*/
				//var Promises=res.Promises;
            })
        },
		methods:{
			buyPopuped(){
				var buyPopup=document.querySelector(".buy-popup");
				buyPopup.style.display='block';
			},
			buyPopup(){
				var buyPopup=document.querySelector(".buy-popup");
				buyPopup.style.display="none"
			},
			reduce(){
				var numes=document.querySelector(".numes");
				var nval=numes.value;
				var num=1;
				var vnum=nval-num;
			},
			plus(){
				
			},
			Sku:function(){
				var checked=document.querySelector('.checked');
				//console.log(checked.innerHTML);
				var list=document.querySelector('.list');
				var spanList=list.querySelectorAll('span');
				var checkec="已选择:"
				/*if(spanList[0]){
					checked.innerHTML=checkec+spanList[0].innerHTML;
				}
				else if(spanList[1]){
					checked.innerHTML=checkec+spanList[1].innerHTML;
				}*/
			},
			addCart(){
				alert(1)
				/*var sp={
					title:'aaa',
					price:1000
				}
				this.$store.commit('addCartList'); */
			}
		}
	}
</script>
<style lang='less' scoped>
	img{
		width: 100%;
	}
	.strictselection{
		width: 100%;
		background: #eee;
		margin-bottom: 0.49rem;
	}
	.swiperBox{
		width:100%;
		.swiperItem{
			width:100%;	
			a{
				float: left;
				img{
					width:100%;
					display:block;
				}
			}	
		}
	}
	.info{
	    padding-top: .4rem;
	    background: #fff;
	    display: inline-block;
	    .title{
		    text-align: left;
		    padding: 0 .1rem;
		    line-height: .18rem;
		    -webkit-line-clamp: 2;
		    -webkit-box-orient: vertical;
		    display: -webkit-box;
		}
		.subtitle{
		    padding: 0 .2rem;
		}
		.price{
		    padding: .1rem;
		    border-bottom: 1px solid #ccc;
		    i{
		    	color: #991f33;
		    }
		    .sales{
			    color: #999;
			    float: right;
			    padding-right: 0.1rem;
			}
		}
		.youfei{
			padding-left: 0.2rem;
			padding-bottom: 0.1rem;
		    height: .23rem;
		    line-height: .23rem;
		    color: #999;
		}
	}
	.others{
		width: 100%;
		margin-top: 0.1rem;
		background: #fff;
		padding: 0.1rem;
		.sps{
			width: 100%;
			color:#999;
			.sp1{
				color: #ccc;
				background: url('../../../../../static/image/clock.png') no-repeat left;
				background-size: 20%;
				padding-left: 0.28rem;
				&:nth-child(2){
					margin-left:0.1rem;
				};
				&:nth-child(3){
					background-size: 13%;
					margin-left:0.1rem;
				};
			}
			.score{
				float: left;
			}
			.starline{
				display: block;
				margin-left: 0.02rem;
				margin-top: 0.02rem;
				float: left;
				width: 0.18rem;
				background: url('../../../../../static/image/starline.png') no-repeat left;
				background-size:100%;
				.starfull{
					display: block;
					width: 0.18rem;
					height: 0.13rem;
					background: url('../../../../../static/image/starfull.png') no-repeat left;
					background-size:100%;
				}
			}
			.grade{
				color: #991f33;
				float: left;
			}
		}
		.babyscore{
			display: inline-block;
			border-bottom: 1px solid #ccc;
			padding-bottom: 0.05rem;
		}
		.selected{
			background: url('../../../../../static/image/left.png') no-repeat right;
			background-size: 5%;
			padding-right: 0.1rem;
			font-weight: bold;
		}
	}
	.evaluate{
		width: 100%;
		background: #fff;
		display: block;
		margin-top: 0.1rem;
		.comment-list{
			padding:0.1rem;
			li{
			    margin: .1rem .1rem 0;
			    border-bottom: 1px solid #eee;
			    .comment-info{
			    	line-height: 0.24rem;
			    	.avatar{
					    width: 0.24rem;
					    height: 0.24rem;
					    overflow: hidden;
					    float: left;
					    img{
					    	width: 100%;
					    }
					}
					.nickname{
					    width:1.5rem;
					    margin-left: .21rem;
					    float: left;
					}
					.createTime{
						display:inline-block;
						float: right;
						padding-top: -0.2rem;
					}
			    }
			    p{
			    	padding-top: 0.4rem;
			    	line-height: 0.24rem;
			    }
			    .commentImg{
			    	padding-bottom: 0.1rem;
			    	.ImgList{
					    width: 0.49rem;
					    height: 0.49rem;
					    overflow: hidden;
					    float: left;
					    margin-right: .12rem;
					    img{
					    	width: 100%;
					    }
					}
			    }
			    &:nth-child(2){
			    	clear: both;
			    	margin-top:0.5rem;
			    };
			}
		}
		.all-btn{
			margin-top: 0.5rem;
			clear: both;
		    line-height:0.24rem;
		    border-top: 1px solid #eee;
		    text-align: center;
		    display: block;
		}
	}
	.logistics{
		width: 100%;
		.shop-box{
		    background: #fff;
		    display: inline-block;
		    padding: .1rem;
		    margin-top: .1rem;
		    img{
			    display: block;
			    width:0.5rem;
			    height:0.5rem;
			    border: 1px solid #eee;
			    float: left;
			}
			.shopinfo{
			    width: 3rem;
			    float: left;
			    padding-left: .1rem;
			    line-height: .22rem;
			    h3{
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    font-weight: 500;
				    font-size: 0.18rem;
				}
				p{
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    color: #666;
				    font-size: 0.12rem;
				}
			}
		}
	}
	.buy-popup{
		display: none;
		.buy-bg{
			position: fixed;
		    z-index: 100;
		    width: 100%;
		    height: 100%;
		    left: 0;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    background: rgba(0,0,0,.35); 
		}
		.buy-info{
	    	position: fixed;
	    	bottom:0;
	    	width: 100%;
	    	height: 2.78rem;
	    	background: #fff;
	    	z-index: 999;
	    	.info{
	    		padding: 0.12rem 0.12rem;
	    		border-bottom: 1px solid #eee;
	    		&:after{
	    			font-size: 0;
				    display: block;
				    visibility: hidden;
				    clear: both;
				    height: 0;
				    content: ' ';
	    		};
	    		img{
	    			width: 0.6rem;
	    			height: 0.6rem;
	    			margin-right: 0.12rem;
	    			float: left;
	    		}
	    		.fl{
	    			float: left;
	    			.c_red{
	    				color: #991f33;
	    			}
	    			.stock{
	    				color: #999;
	    			}
	    			.c_666{
	    				color: #666;
	    			}
	    		}
	    	}
	    } 
	    .sku{
	    	margin: 0 .12rem;
		    border-bottom: 1px solid #e6e6e6;
		    padding: .11rem 0 .1rem;
		    h3{
		    	font-weight: 500;
		    	padding-bottom: 0.12rem;
		    }
		    .list{
		    	overflow: hidden;
		    	span{
				    display: inline-block;
				    margin-right: .11rem;
				    margin-bottom: .1rem;
				    line-height: .24rem;
				    padding: 0 .05rem;
				    white-space: nowrap;
				    border: 1px solid #000;
				    float: left;
				}
		    }
	    }
	    .nums{
	    	padding: .1rem .15rem;
		    height: 0.6rem;
		    line-height: .24rem;
		    span{
		    	width: 1.2rem;
		    	float: left;
		    	display:block;
		    }
		    .fr{
		    	float: right;
		    	display: -webkit-box;
		    	button{
		    		display: block;
				    height: .3rem;
				    width: .3rem;
				    text-align: center;
				    line-height: .3rem;
				    background: #fff;
				    border: 1px solid #e6e6e6;
				    outline: none;
		    	}
		    	input{
				    width:0.56rem;
				    line-height: .3rem;
				    text-align: center;
				    border: none;
				    border-top: 1px solid #e6e6e6;
				    border-bottom: 1px solid #e6e6e6;
				    outline: none;
				}
		    }
	    }
	    .submit{
			display: flex;
		    line-height:0.44rem;
		    text-align: center;
		    font-size: 0.15rem;
		    div{
			    width: 50%;
			    border-top: 1px solid #eee;
			    &:last-child {
			    	color:#fff;
				    background: #801a2a;
				    border-top: 1px solid #801a2a;
				}
			}

	    }
	}
	.shop-brand{
		line-height: 0.43rem;
		padding-left: 0.1rem;
		span{
			color: #991f33;
		}
	}
	.details-box{
		width: 100%;
		margin-top: .1rem;
	    background: #fff;
	    padding: .05rem;
	    padding-top: 0.1rem;
	    .title{
	    	line-height: 0.48rem;
	    }
	    .weixin{
	    	text-align: center;
	    	margin-bottom: 0.12rem;
	    	img {
			    max-width: 100%;
			    display: block;
			    margin: 0 auto;
			}
	    }
	    .descriptioin{
			width:100%;
			background:#fff;
			margin-top: .1rem;
			line-height: .25rem;
	    	padding:0 .1rem;
	    	box-sizing:border-box;
	    	img {
			    display: block;
			    max-width: 100%;
			}
		}
	}
	
</style>