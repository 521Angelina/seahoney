<template>
	<div class="detailPage">
		<div class="banner">
			<div class="banner-pics">
				<img src="http://img.haimi.com/FiJQtBlukwiQC8SskF0_pY2Jkosy" class="banner-img">
			</div>
		</div>
		<div class="theme clearfix">
			<ul class="clearfix">
				<li>
					<div class="pro-img">
						<img src="http://img.haimi.com/Ft_v2PbIJY2CE8v0l6YLXCNbRxFh?imageView2/1/w/320/h/320&amp;" style="display: inline;">
					</div>
					<div class="pro-cont">
						<div class="title">日默瓦 中性款铝合金拉杆箱，RIMOWA CLASSIC FLIGHT系列 旅行箱</div>
						<div class="subtitle">德国包税直邮，全球5年质保，德国顶级箱包品牌</div>
						<div class="price">
							<span>¥4599</span>
							<i>积分可抵4%</i>
						</div>
					</div>
				</li>
				<li>
					<div class="pro-img">
						<img src="http://img.haimi.com/Foy6bCe9m-BPSW8OmB3QiurcCYIK?imageView2/1/w/320/h/320&amp;" style="display: inline;">
					</div>
					<div class="pro-cont">
						<div class="title">日默瓦 SALSA系列旅行箱，Rimowa 聚碳酸酯行李箱/登机箱</div>
						<div class="subtitle">【预订款，春节后发货】德国包税直邮，全球5年质保，可以陪你一辈子的拉杆箱</div>
						<div class="price">
							<span>¥3900</span>
						</div>
					</div>
				</li>
				<li>
					<div class="pro-img">
						<img src="http://img.haimi.com/FjVawZV_F-s9R9T4nwNgCZlDnbQj?imageView2/1/w/320/h/320&amp;" style="display: inline;">
					</div>
					<div class="pro-cont">
						<div class="title">日默瓦 TOPAS经典系列旅行箱，RIMOWA CABIN MULTIWHEEL 银色行李箱</div>
						<div class="subtitle">德国包税直邮，全球5年质保，享誉百年的箱包传奇</div>
						<div class="price">
							<span>¥5969</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<!-- http://www.haimi.com/api/promotion/activity-products-cdn?_callback=doSuccess&ActivityID=1036&pageSize=20-->
<!-- http://www.haimi.com/api/product/detail-cdn?ProductID=4345417&platform=WAP -->
<script>
	export default{
		/*props : {
			index : {
				type : Number,
				default : 0
			},
			bannerId : {	
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
                console.log(res[0].Records)
            })
		}*/
	}
</script>
<style lang='less' scoped>
	.detailPage{
		position: relative;
	    max-width: 6.4rem;
	    min-width: 3.2rem;
	    margin: 0 auto;
	    min-height: 100%;
	    font-size: 0.2rem;
	    overflow: hidden;
	    line-height: 1.5;
		.banner{
			width: 100%;
			margin-bottom: 0.1rem;
			.banner-pics{
				margin: 0;
			    padding: 0;
			    border: 0;
			    outline: 0;
			    font-size: inherit;
			    font-family: inherit;
			    line-height: inherit;
			    box-sizing: border-box;
			    -webkit-tap-highlight-color: rgba(0,0,0,0);
			    img{
			    	width: 100%;
			    }
			}
		}
		.clearfix{
			margin: 0;
		    padding: 0;
		    border: 0;
		    outline: 0;
		    font-size: inherit;
		    font-family: inherit;
		    line-height: inherit;
		    box-sizing: border-box;
		    -webkit-tap-highlight-color: rgba(0,0,0,0);
		    padding: 0.02rem;
		    li {
			    background-color: #fff;
			    margin-bottom: 0.1rem;
			    width: 49%;
			    float: left;
			    .pro-img {
				    position: relative;
				    width: 100%;
				    height: 1.83rem;
				    overflow: hidden;
				    img{
				    	width: 100%;
				    }
				}
				.pro-cont {
				    position: relative;
				    margin: .2rem .2rem .17rem;
				    height: 1.08rem;
				    .title {
					    color: #242424;
					    font-size: .12rem;
					    overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					}
					.subtitle {
					    font-size: .1rem;
					    color: #999;
					    margin-top: .03rem;
					    overflow: hidden;
					    white-space: nowrap;
					    text-overflow: ellipsis;
					}
					.price {
					    position: absolute;
					    bottom: 0.1;
					    left: 0;
					     span {
						    font-size: .12rem;
						    float: left;
						    color: #242424;
						}
						i {
						    float: left;
						    color: #fff;
						    font-size: .1rem;
						    background-color: #ccad7e;
						    padding: .02rem .06rem;
						    margin: .01rem 0 0 .18rem;
						}
					}
				}
			}
		}
	}
</style>