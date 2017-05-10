<template>
	<div class="catListContent">
		<div v-for="catList in catListData">
			<div v-if="catList.Records.length == 1" class="catBanner" v-for="item in catList.Records">
				<img :src="item.Picture" alt="">
			</div>
			<div v-if="catList.Records.length > 1" class="catMessage" >
				<router-link to="/details" v-for="item in catList.Records">
					<span :style='{color:item.SlideNameColor}'>{{item.SlideName}}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data (){
			return {
				catListData : []
			}
		},
		created : function(){
			this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list',{
                Params:{
                    platform:"WAP"
                },
                jsonp:"_callback"
            }).then(function(data){
                var res = data.body.data;
                this.catListData = res;
                console.log(res)
            })
		}
	}
</script>

<style lang="less" scoped>
	.catListContent{
		width:100%;
		div{
			.catBanner{
				width:100%;
				img{
					width:100%;
					display:block;
				}
			}
			.catMessage{
				width:100%;
				padding:0.1rem;
				box-sizing:border-box;
				overflow:hidden;
				a{
					display:block;
					padding:0.05rem 0.1rem;
					box-sizing:border-box;
					border:0.01rem solid #ccc;
					margin:0.05rem 0.08rem;
					float: left;
				}
			}
		}
	}
</style>