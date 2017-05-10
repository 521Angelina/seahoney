<template>
	<div class="user">
		<div class="user-info"> 
			<span class="avatar">
				<input type="file" accept="image/*">
				<img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100">
			</span>
			<span class="nickname">海蜜_sjmemq</span>
			<i></i> 
		</div>
		<div class="user-menu">
			<p class="menup">
				<a href="">我的订单<span class="chart">查看全部订单</span></a>
			</p>
			<ul class="wait">
				<li><a href=""><i ><img src="../../../../static/image/fukuan.png"></i>待付款</a></li>
				<li><a href=""><i><img src="../../../../static/image/fahuo.png"></i>待发货</a></li>
				<li><a href=""><i><img src="../../../../static/image/shouhuo.png"></i>待收货</a></li>
				<li><a href=""><i><img src="../../../../static/image/pingjia.png"></i>待评价</a></li>
				<li><a href=""><i><img src="../../../../static/image/tuikuan.png"></i>退款</a></li>	
			</ul>
			<ul class="ulList">
				<li><a href="">收藏宝贝</a></li>
				<li><a href="">红包优惠券</a></li>
				<li><a href="">足迹</a></li>
				<li><a href="">积分商城</a></li>
				<li><a href="">收货地址</a></li>
				<li><a href="">绑定手机</a></li>
				<li><a href="">海蜜客服</a></li>
			</ul>
			<p class="signout">
				<router-link to="/index">退出登录</router-link> 
			</p>
		</div>
	</div>
</template>
<style lang='less' scoped>
	.user{
		width: 100%;
		background: #eee;
	}
	.user-info{
		width: 100%;
		height: 0.73rem;
		padding: 0.12rem;
		background: #fff;
		.avatar{
			position: relative;
		    display: block;
		    float: left;
		    width: 0.49rem;
		    height:0.49rem;
		    padding: 0;
		   	margin-right: 0.2rem;
		    background: none;
		    input{
		    	position: absolute;
			    z-index: 100;
			    top: 0;
			    left: 0;
			    width: 0.49rem;
			    height: 0.49rem;
			    opacity: 0;
		    }
		    img{
		    	width: 0.49rem;
		    	height: 0.49rem;
		    	vertical-align: top;
		    }
		}
		.nickname{
			line-height: 0.49rem;
		    display: block;
		    overflow: hidden;
		    max-width: 7rem;
		    height: 0.49rem;
		    white-space: nowrap;
		    text-overflow: ellipsis;
		    float: left;
		    font-size: 0.15rem;
		}
	}
	.user-menu{
		margin-top: 0.1rem;
		background: #fff;
		padding: 0.1rem;
		.menup{
			width: 100%;
			height: 0.44rem;
			line-height: 0.44rem;
			border-bottom: 1px solid #999;
			a{
				font-weight: 500;
				.chart{
					float: right;
					color: #999;
					padding-right: 0.3rem;
					background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYJJREFUeNqslcErBHEUx2eXJBdntUehPchlIye5UdQWLluSwxRxVKs2t60tBwcns7mRKA7rvrmJv8DBCblIUZKE8fnVm3oHu2Z33qtP3+Yd3nfe+828XyoMQ69RBEGQRiowCHnf93+8FiPdpHgncgobMAtlr41oaMDbfiE3KlXEdMnMQKIENfW8h8lEKwapZmcgo+pBLmFYUk8wToe3JgZikkGuoU9SbnRjmLwmHVF0Hg/uK4J3SQ3BGcYdJgZicoUsQ9TyJOyaGYjJMbKlUit0sW5mIOH+h0P1vIPJdKJD/uPQu5ELGJWUO+wsHT5adOBG9YHMwJ2kemHeakQ6PvU0zAwYURdyAv2SepO9ZdZBFaKV8Q0FxnZvYsDbF5FFldqkeM3kK6J4XkYRzbtKcd/kP6B4DjlQxeuwZrns3EbNSMpt0hwv/5J4Vci6PlfFn2EqTvF/DWRbHsGI+u4X4t4FcTooy30cxSrF65aX/oBKVSi+b33pz8G23Muldv7IXwEGAC7agjacn98NAAAAAElFTkSuQmCC') no-repeat right;
					background-size: 15%;
					margin-left: 0.2rem;
				}
			}
		}
		.wait{
			width: 100%;
			display: -webkit-box;
			line-height: 0.2rem;
			margin-top: 0.12rem;
			li{
				-webkit-box-flex:1;
				text-align: center;
				font-size: 0.1rem;

				a{
					i{
						display: block;
						img{
							width: 30%;
						}
					}
				}
			}
		}
		.ulList{
			width: 100%;
			li{
				line-height: 0.49rem;
				border-bottom: 1px solid #999;
				color: #242424;
				padding: 0 0.12rem;
			}
		}
		.signout {
			width: 100%;
			margin-top: 0.5rem;
		   	padding: 0.08rem;
			text-align: center;
			background: #fff;				
		}
	}
</style>