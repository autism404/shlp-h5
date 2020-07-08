<template>
  <div class="container bg-gray">
    <section class="divider">
      <Swiper :swiperList="swiperList"></Swiper>
      <div class="pad-lr-12 position-top flex-box">
        <div class="flex-1">
          <van-icon name="arrow-left" color="#666666" size="20" />
        </div>
        <div class="text-fontred text-14 flex-1 text-right"><img class="position-top-img mar-r-5"
            src="../assets/images/common/icon-shareredpacket.png" alt="">分享</div>
      </div>
    </section>
    <section>
      <div class="pad-lr-12 height56 text-white " style="background: #FF1C34;">
        <div class="flex-box">
          <div class="flex-1">
            <p>限时购活动开始</p>
            <p>
              <van-count-down :time="time">
                <template v-slot="timeData">
                  <span class="block">{{ timeData.hours }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </p>
          </div>
          <div class="flex-1 text-right">
            <span class="text-14">查看全部</span>
            <van-icon name="arrow" size="7" />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="pad-12 mar-b-9">
        <div class="flex-box space-between ">
          <div>
            <p class="text-16">荷兰原装进口 品质保证 1-3岁幼儿适用</p>
            <p class="text-gray text-12  mar-t-4">荷兰原装进口 品质保证 1-3岁幼儿适用</p>
          </div>
          <div class="text-center">
            <img class="like-width" src="../assets/images/common/like.png" alt="">
            <p class="text-gray text-11">收藏</p>
          </div>
        </div>
        <div class="flex-box space-between  mar-t-12">
          <p>
            <span class="text-14 text-red flex-1 mar-r-4">￥145.00</span>
            <span class="text-gray text-10 flex-1 textline-through">¥216.00</span>
          </p>
          <p class="text-gray text-10">
            <span>销量</span> 120件
          </p>
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div class="pad-lr-12">
        <div class="flex-box space-between height48">
          <div class="flex-box">
            <div class="text-gray text-14 mar-r-12">已选</div>
            <div>900克，3段</div>
          </div>
          <div><img class="icon-more" src="../assets/images/common/ic_more.png" alt=""></div>
        </div>
        <div class="flex-box space-between height48">
          <div class="flex-box">
            <div class="text-gray text-14  mar-r-12">服务</div>
            <div>·30天退换货·48小时快速退款·满88包邮·国际直邮</div>
          </div>
          <div class="mar-l-30"><img class="icon-more" src="../assets/images/common/ic_more.png" alt=""></div>
        </div>
        <div class="flex-box space-between height48">
          <div class="flex-box">
            <div class="text-gray text-14 mar-r-12">
              玩法
            </div>
            <div>
              规定时间内邀请好友参加，失败退款
            </div>
          </div>
          <div>
            <img class="icon-more" src="../assets/images/common/ic_more.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="flex-box space-between height48 text-12 pad-lr-15 bg-gray text-gray">以下小伙伴正在发起团购，你可以直接拼团
        <span>更多拼团</span>
      </div>
      <ul class="bg-white tuan-box mar-b-9">
        <li class="flex-box space-between pad-15" v-for="(item,index) in 3" :key="index">
          <div class="flex1">
            <div class="header mar-r-10"><img src="../assets/images/common/img_head.png" alt=""></div>
            <div>
              <p class="text-14">辛迪北贝</p>
              <p class="flex1 text-12 text-gray">还差 1 人，剩余
                <span>
                  <van-count-down :time="time">
                    <template v-slot="timeData">
                      <span class="text-gray">{{ timeData.hours }}</span>
                      <span class="text-gray">:</span>
                      <span class="text-gray">{{ timeData.minutes }}</span>
                      <span class="text-gray">:</span>
                      <span class="text-gray">{{ timeData.seconds }}</span>
                    </template>
                  </van-count-down>
                </span></p>
            </div>
          </div>
          <div class="footer"><img src="../assets/images/common/ic_pintuan.png" alt=""></div>
        </li>
      </ul>
    </section>
    <section>
      <div class="pad-lr-12 bg-white pad-b-15">
        <div class="clearfix text-14 pad-t-12">商品评价(233) <span class="pull-right text-12 text-gray ">查看全部
            <van-icon name="arrow" size="10" /></span></div>
        <div class="mar-t-10">
          <div class="commont-user"><img class="line-block-vm mar-r-5" src="../assets/images/common/img_head.png"
              alt="">辛迪北贝
          </div>
          <p class="mar-t-5">东西收到了，快递很给力，我觉得ok，下次再来</p>
          <ul class="comments-box clearfix mar-t-10">
            <li class="comment-img pull-left mar-r-12" v-for="(item,index) in 3" :key="index">
              <img src="../assets/images/common/goods2.png" alt="">
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section>
      <div class="flex-box space-between door-box bg-white mar-tb-9">
        <div class="header flex-box">
          <div><img src="../assets/images/common/goods2.png" alt=""></div>
          <div class="height50 flex-box-col ">
            <p class="text-14 text-weight">莱顿门窗</p>
            <p class="text-13 text-666 ">低价享旗舰商品</p>
          </div>
        </div>
        <div>
          <span class="text-red text-14">查看更多商品</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </section>
    <section class="bg-white">
      <div><img src="" alt=""></div>
      <div class="goods-box ">
        <div class="goods" v-for="(item,index) in 4" :key="index">
          <p class="img-dash"><img src="../assets/images/common/goods3.png" alt=""></p>
          <p class="ellipsis text-12">爱他美奶粉黄金1段</p>
          <p><span class="text-14 text-red">￥145.00</span></p>
        </div>
      </div>
      <div>
        <img class="footer-img" src="../assets/images/common/banner.png" alt="">
      </div>
    </section>
    <section>
      <div>
        <GoodAction></GoodAction>
      </div>
    </section>
  </div>
</template>
<script>
  import Swiper from '../components/Swiper.vue';
  import GoodAction from '../components/GoodAction.vue';
  export default {
    name: 'goodDetail',
    components: { Swiper, GoodAction },
    data() {
      return {
        swiperList: [{ img: '../assets/images/common/goods.png' },
        { img: '../assets/images/common/goods.png' }]
      };
    },
    computed: {},
    created() { },
    mounted() { },
    watch: {},
    methods: {}
  };
</script>
<style lang="less" scoped>
  .position-top-img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .position-top {
    position: absolute;
    top: 0;
    left: 0;
  }

  .height56 {
    height: 56px;
  }

  .height48 {
    height: 48px;
  }

  .width98 {
    width: 98px;
  }

  .like-width {
    width: 21px;
  }

  .colon {
    display: inline-block;
    margin: 0 4px;
    color: #FFFFFF;
  }

  .block {
    display: inline-block;
    width: 22px;
    color: #FF6F00;
    font-size: 12px;
    text-align: center;
    background-color: #FFFFFF;
    border-radius: 4px;
  }

  .goods-box {
    width: 100%;
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
  }

  .goods-box::-webkit-scrollbar {
    display: none;
  }

  .goods {
    display: inline-block;
  }

  .footer-img {
    width: 375px;
  }

  .icon-more {
    width: 16px;
  }

  .tuan-box li {
    border-bottom: 2px solid #f8f8f8;
  }

  .tuan-box li .header img {
    width: 40px;
    height: 40px;
  }

  .tuan-box li .footer img {
    width: 64px;
    height: 24px;
  }

  .commont-user img {
    width: 30px;
    height: 30px;
  }

  .comment-img img {
    max-width: 60px;
    height: 60px;
  }

  .door-box {
    padding: 15px 12px 16px 12px
  }

  .door-box .header img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .height50 {
    height: 50px;
  }
</style>