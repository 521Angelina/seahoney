<template>
	<div class="brandListContent">
		<div class="brandListMain">
			<a href="javascript:;" v-for="item in brandListData">
				<img :src="item.Picture" alt="">
				<div>
					<p :style='{color:item.SlideNameColor}'>{{item.SlideName}}</p>
					<span :style='{color:item.DescriptionColor}'>{{item.Description}}</span>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		data (){
			return {
				brandListData : []
			}
		},
		created : function(){
			this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-brand-list',{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                this.brandListData = res[0].Records;
                console.log(this.brandListData)
            })
		}
	}
</script>

<style lang="less" scoped>
	.brandListContent{
		width:100%;
		.brandListMain{
			a{
				width:33.33%;
				display:block;
				float: left;
				img{
					width:100%;
					display:block;
				}
				div{
					padding:0.1rem 0.05rem;
					box-sizing:border-box;
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-box-align:center;
					span{
						dispaly:block;
						overflow:hidden;
						text-overflow:ellipsis;
						white-space:nowrap;
						font-size:0.12rem;
					}
				}
			}
		}
	}
</style>