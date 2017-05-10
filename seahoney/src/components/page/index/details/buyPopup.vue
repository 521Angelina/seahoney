<template>
	<div>
		<div class="buy-popup">
			<div class="buy-bg" @click='buyPopup()'></div>
			<div class="buy-info">
				<div class="info"> 
					<img :src="strictList.Pictures" alt="">
					<div class="fl">
						<p class="f16 c_red">¥{{ strictList.FinalAmount}}</p> 
						<p class="c_999 f10 stock">(库存124件)</p> 
						<!-- <p class="c_666 f14">请选择：{{ strictList.AttrInfoArray.AttrName }}</p>  -->
					</div>
				</div>
				<div class="sku"> 
					<h3>规格分类</h3> 
					<div class="list"> 
						<span v-for="item in strictList.SkuPictures">{{ item.ValueName }}</span>
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
					<div class="f16">加入购物车</div> 
					<div class="f16 c_fff">立即购买</div> 
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
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
</style>