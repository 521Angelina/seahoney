<template>
	<div class="pageContent">
		<div class="bannerPicture" v-if="dataLen.length >= 1">
			<a>
				<img :src="bannerImg" alt="">
			</a>
		</div>
		<div class="mainPicture">
			<h6>{{imgList.Title}}</h6>
			<div v-for="item in imgList.Products">
				<a :href="item.wapURL">
					<img :src="item.Pictures">
					<p>{{item.Subject}}</p>
					<span>￥{{item.FinalPrice}}</span>
				</a>
			</div>
		</div> 
	</div>
</template>

<script>
	export default {
		props : {
			index : {
				type : Number,
				default : 1
			},
			navId : {
				type : String,
				default : ""
			}
		},
		data (){
			return {
				dataLen : "",
				bannerImg : null,
				imgList : []
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
                this.dataLen = res;
                if(res.length >= 1){
                	this.bannerImg = res[0].Records[0].Picture;
                }
            });
			this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID='+this.navId,{
                Params:{
                	page : 1,
                	pageSize : 100,
                    platform : "WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                this.imgList = res[0];
                //console.log(res)
            });
		},
		watch : {
			navId(){
				this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_'+this.navId,{
	                Params:{
	                    platform:"WAP"
	                },
	                jsonp:"_callback"
	            }).then(function(data){
	                var res = data.body.data;
	                this.dataLen = res;
	                if(res[0]){
		                this.bannerImg = res[0].Records[0].Picture;
	                }else{
	                	this.bannerImg = null;
	                }
	                
	            });
				this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID='+this.navId,{
	                Params:{
	                	page : 1,
	                	pageSize : 100,
	                    platform : "WAP"
	                },
	                jsonp:"_callback"
	            }).then(function(data){
	                var res = data.body.data;
	                this.imgList = res[0];
	            });
			}
		}
	}
</script>

<style lang="less" scoped>
	.pageContent{
		width:100%;
		background:#f8f8f8;
		padding-bottom:0.5rem;
		.bannerPicture{
			width:100%;
			img{
				width:100%;
				display:block;
			}
		}
		.mainPicture{
			h6{
				height:0.5rem;
				line-height:0.5rem;
				text-align:center;
			}
			div{
				width:49%;
				margin-bottom:0.05rem;
				float: left;
				background:#fff;
				padding:0.1rem;
				box-sizing:border-box;
				a{
					width: 100%;
					display: inline-block;
					img{
						width:1.63rem;
						display:block;
						height:1.63rem;
					}
					&:nth-child(even){
						margin-left:2%;
					}
					p{
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
						color:#333;
					}
					span{
						color:#333;
						margin-top:0.1rem;
						display:block;
					}
				}
			}
		}
	}
</style>