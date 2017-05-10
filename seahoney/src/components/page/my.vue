<template>
	<div class="my">
		<header class="header">
			<div>请输入手机号码验证码直接登录</div>
		</header>
		<div class="forms"> 
			<div class="cle"> 
				<span class="fl f14 c_666">手机号：</span> 
				<input type="tel" @blur='foucs()' id="phone">  
			</div> 
			<div class="cle"> 
				<span class="fl f14 c_666">验证码：</span> 
				<input type="tel"> 
				<span class="c_red send">发送验证码</span>  
			</div> 
			<p class="loging">
				<router-link to="/login" style='color:#fff'  @click="login()">登录</router-link> 
			</p>
		</div>
		<footer-bar></footer-bar>
	</div>
</template>

<script>
	import footerBar from "@/components/base/footer"
	export default {
		components : {
			footerBar
		},
		methods:{

			foucs(){
				var phone=document.getElementById("phone")
				console.log(phone.value())
			}
		}
	}
</script>

<style lang="less" scoped>
	.my{
		width:100%;
		.header{
			width: 100%;
			height: 0.37rem;
			line-height: 0.37rem;
			background: #fff9f3;
			text-align: center;
			color: #991f33;
			font-size: .15rem;
		}
		.forms{
			width: 100%;
			padding: 0.2rem;
			.cle{
				height: 0.37rem;
				margin-top: 0.1rem;
				border-bottom: 1px solid #ccc;
				.f14{
					font-size: 0.15rem;
				}
				.c_666{
					color: #666;
				}
				input {
				    width: 1.8rem;
				    background:#fff;
				    border: none;
				    padding: 0.05rem;
				    border:none;
				    outline: none;
				}
				.send{
					color: #991f33;
					font-size: 0.12rem;
					padding-left: 0.2rem;
				}
			}
			.loging {
				width: 100%;
				margin-top: 0.2rem;
			   	padding: 0.08rem;
				text-align: center;
				background: #991f33;				
			}
		}
	}
</style>