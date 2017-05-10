<template>
	<div class="bannerContent">
		<swiper class="bannerSlide" :options="swiperOption" ref="mySwiper">
			<swiper-slide 
				class="bannerItem" 
				v-for="bannerItem in bannerData">
				<router-link to="/bannerdetails">
					<img :src="bannerItem.Picture" alt="">
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		props : {
			bannerData : {
				type : Array,
				default : []
			}
		},
		components: {
		    swiper,
		    swiperSlide
		},
		data () {
	      	return {
		       	swiperOption: {
		          	autoplay: 2000,
		          	initialSlide: 1,
		          	loop: true,
		          	pagination: '.swiper-pagination',
		          	onSlideChangeEnd: swiper => {
		            	//console.log('onSlideChangeEnd', swiper.realIndex)
		          	}
		        }
		   	}
	    }
	}
</script>

<style lang="less" scoped>
	.bannerSlide{
		width:100%;
		.bannerItem{
			width:100%;
			img{
				width:100%;
				display:block;
			}
		}
	}
</style>