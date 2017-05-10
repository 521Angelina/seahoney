<template>
	<div>
		<div class="detalisCont">
			<dl>
				<dt><img src="//img.haimi.com/FiO6PjR_QdaXwp8ItZsE5a2nwfiS?imageView2/1/w/375/h/375" alt=""></dt>
				<dd>
					<p>韩国正品 papa recipe春雨蜂蜜面膜 10片装，保湿修复，孕妇小孩都可用</p>
					<p><span class="money">￥95.00</span><span class="shops"><i class="fa fa-shopping-cart"></i></span></p>
				</dd>
			</dl>
			<dl>
				<dt><img src="//img.haimi.com/FiO6PjR_QdaXwp8ItZsE5a2nwfiS?imageView2/1/w/375/h/375" alt=""></dt>
				<dd>
					<p>韩国正品 papa recipe春雨蜂蜜面膜 10片装，保湿修复，孕妇小孩都可用</p>
					<p><span class="money">￥95.00</span><span class="shops"><i class="fa fa-shopping-cart"></i></span></p>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default{
		created : function(){
			/*http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=%E9%9D%A2%E8%86%9C&Sort=&BrandID=&platform=WAP*/
			/*this.$http.jsonp('http://m.haimi.com/api/search/hotword?',{
                Params:{
                	type:"PRODUCT",
                    platform:"WAP"
                },*/
			this.$http.jsonp('http://m.haimi.com/api/ad-module/get?',{
                Params:{
                	ActivityID:'BonusID',
                	Status:'ON',
                	page:'1',
                	pageSize:"20",
                	Sort:"BrandID",
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                console.log(data.body)
            })
		}
	}
</script>
<style lang='less' scoped>
	.detalisCont{
		width: 100%;
		dl{
			width: 48%;
			float: left;
			margin: 0.03rem;
			dt{
				width: 100%;
				img{
					width: 100%;
				}
			}
			dd{
				width: 100%;
				p{
					padding: 0 0.2rem;
					overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    .money{
				    	float: left;
				    	padding-left: 0.02rem;
				    }
				    .shops{
				    	float: right;
				    	padding-right: 0.12rem;
				    }
				}
			}
		}
	}
</style>