<template>
  <section class="msite">
       <!-- 首页头部title -->
    <!-- 使用 :title 来给头部组件传递数据 -->
    <HeaderTop :title="address">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <a class="header_search" slot="left" >
        <i class="iconfont iconsearch"></i>
      </a>
      <a class="header_login" slot="right" >
        <span class="header_login_text" >
          登录|注册
        </span>
        <!-- <span class="header_login_text">
          <i class="iconfont icon-yonghuming"></i>
        </span> -->
      </a>
    </HeaderTop>
    <!-- 首页导航 -->
    <nav class="msite_nav">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>甜品饮品</span>
                    </a>
                    
                      
                </div>
                <div class="swiper-slide">
                  <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                      <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                    <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="./images/1.png" alt="">
                        </div>
                        <span>美味食品</span>
                    </a>
                </div>
            </div>
             <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
        </div>
    </nav>
    <div class="line-10"></div>
    <!-- 附近商家列表 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>
<script>
import HeaderTop from '../../compoents/HeaderTop/HeaderTop'
import ShopList from '../../compoents/ShopList/ShopList'
import swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data(){
    return{
      address:'宝安区'
    }
  },
  mounted(){
    new swiper('.swiper-container',{
      loop:true,
      pagination: {
           el: '.swiper-pagination',
      },
    })
  },
  components: {
    HeaderTop,
    ShopList
   
  },
  
}
</script>
<style  lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .line-10
    bottom-border-1px(#e4e4e4)
    top-border-1px(#e4e4e4)
    width 100%
    height 10px
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 50px
    height 200px
    background #ffffff
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          flex-wrap wrap
          align-items flex-start
          .link_to_food
            text-decoration none
            width 25%
            padding-bottom 10px
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 2px
              font-size 0
              img 
                display inline-block
                width 50px
                height 50px

          span 
            display block
            width 100%
            text-align center
            font-size 13px
            color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
  .msite_shop_list
    .shop_header
      background #fff   
</style>
