<template>
  <div class="container bg-gray">
    <section class="divider bg-white">
      <div class="header-box">
        <p class="text-left home-red pad-lr-1612 flex-box">
          <span class="flex-1">
            <span class="width96 ellipsis text-white text-14">乐富海邦园店…</span>
            <span class="text-11 ">
              <img class="icon-down" src="../assets/images/common/ic_down.png" alt="">
            </span>
          </span>
          <span class="flex-1 text-right">
            <img class="icon-message" src="../assets/images/common/ic_message.png" alt="">
          </span>
        </p>
        <p>
          <van-search v-model="search" shape="round" background="#FF2137" placeholder="请输入搜索关键词" />
        </p>
      </div>
      <div class="text-center bannerbox banner-img">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
          <van-swipe-item v-for="(item,index) in sliderList" :key="index">
            <img class="banner-img" :src="item.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
    </section>
    <section class="bg-white">
      <ul class="grid-box">
        <li class="grid text-center" v-for="(item,index) in iconlist" :key="index">
          <p><img class="grid-img" :src="item.img" alt=""></p>
          <p class="text-gray">{{item.text}}</p>
        </li>
      </ul>
      <p class="vip-box">
        <span class="pad-lr-12"><img src="../assets/images/common/img_ttxx.png" alt=""></span>
        <span class="text-12">会员活动全新升级！快来领奖吧</span>
      </p>
    </section>
    <section class="bg-white">
      <div class="box-shadow">
        <div class="flex-box pad-t-12">
          <div class="flex-1 tl-box ">
            <p class="tl-box-header flex-box">
              <span class="flex-1"><img src="../assets/images/common/img_xsms.png" alt=""></span>
              <span class="flex-1">
                <van-count-down>
                  <template v-slot="timeData">
                    <span class="block">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="block">{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </span>
            </p>
            <p>
              <van-grid :column-num="limitBuy.length" :icon-siz="50">
                <van-grid-item :icon="base_pic" :badge="`￥{item.limit_buy_price}`" v-for="(item,index) in limitBuy"
                  :key="index" />
              </van-grid>
            </p>
          </div>
          <div class="flex-1 tr-box vertical-align">
            <p class="tr-box-header"><span><img src="../assets/images/common/img_ptqg.png" alt=""></span>
            </p>
            <p class="flex-box">
              <span class="tr-box-footer flex-1" v-for="(item,index) in groupBuy" :key="index"><img :src="item.base_pic"
                  alt=""></span>
            </p>
          </div>
        </div>
        <div class="tb-box-header flex-box">
          <span class="flex-1"><img src="../assets/images/common/img_tjrm.png" alt=""></span>
          <span class="text-right text-12 flex-1 pad-lr-12">查看更多</span>
        </div>
        <ul class="morebox flex-box">
          <li class="morebox-li" v-for="(item,index) in hotBuy" :key="index">
            <p><img :src="item.base_pic" alt=""></p>
            <p class="ellipsis morebox-text text-center">{{item.item_name}}</p>
            <p class="flex-box text-center">
              <span class="text-12 text-red flex-1">￥{{item.hot_buy_price}}</span>
              <span class="text-gray text-10 flex-1 textline-through">¥{{item.price}}</span></p>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div class="act-box margin-box bg-white" v-for="(item,indee) in subjectsList" :key="indee">
        <div class="goods-box-header text-center"><img :src="item.subjects.img" alt=""></div>
        <div class="goods-box ">
          <div class="goods width96" v-for="(it,index) in item.subjects.items" :key="index">
            <p class="img-dash"><img :src="it.base_pic" alt=""></p>
            <p class="text-wrap ellipsis--1 text-12">{{it.item_name}}</p>
            <p><span class="text-14 text-red">￥{{it.price}}</span></p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="tj-box margin-box bg-white">
        <p class="text-center tj-box-header"><img src="../assets/images/common/img_wntj.png" alt=""></p>
        <ul class="tj-goods clearfix">
          <li class="pull-left pad-t-17" v-for="(item,index) in 4" :key="index">
            <p class="img-dash"><img src="../assets/images/common/goods4.png" alt=""></p>
            <p class="ellipsis text-14">爱他美奶粉黄金1段</p>
            <p class="tj-item-footer">
              <span class="text-12 text-red">￥145.00</span>
              <span class="mar-r-9"><img src="../assets/images/common/ic_gwc.png" alt=""></span>
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="tabbar-footer">
      <van-tabbar v-model="active" active-color="#FF1C34" inactive-color="#979797">
        <van-tabbar-item :icon="item.img" v-for="(item,index) in tabbarlist" :key="index">{{item.text}}
        </van-tabbar-item>
      </van-tabbar>
    </section>
  </div>
</template>
<script>
  export default {
    computed: {
      countDown(time) {
        if (time) {
          let now = new Date().getTime();
          return {
            days: parseInt((time - now) / 86400),
            hours: parseInt((time - now) / 3600),
            minutes: parseInt((time - now) / 60),
            seconds: parseInt((time - now))
          };
        } else return {};
      }
    },
    data() {
      return {
        iconlist: [
          { img: require('../assets/images/common/pic_1.png'), text: '食品区' },
          { img: require('../assets/images/common/pic_2.png'), text: '礼品区' },
          { img: require('../assets/images/common/pic_3.png'), text: '优惠券' },
          { img: require('../assets/images/common/pic_4.png'), text: '积分商城' },
          { img: require('../assets/images/common/pic_5.png'), text: '眼镜眼眶' },
          { img: require('../assets/images/common/pic_6.png'), text: '米面粮油' },
          { img: require('../assets/images/common/pic_7.png'), text: '家用电器' },
          { img: require('../assets/images/common/pic_8.png'), text: '家居家纺' },
          { img: require('../assets/images/common/pic_9.png'), text: '电子产品' },
          { img: require('../assets/images/common/pic_10.png'), text: '手表专区' }
        ],
        tabbarlist: [
          { img: require('../assets/images/common/ic_shouye_red.png'), text: '首页' },
          { img: require('../assets/images/common/ic_fenlei_grey.png'), text: '分类' },
          { img: require('../assets/images/common/ic_sxy_grey.png'), text: '商学院' },
          { img: require('../assets/images/common/ic_gouwche_grey.png'), text: '购物车' },
          { img: require('../assets/images/common/ic_grzx_grey.png'), text: '我的' }
        ],
        sliderList: [],
        limitBuy: [],
        groupBuy: [],
        hotBuy: [],
        subjectsList: [],
        search: '',
        active: ''
      };
    },
    mounted() {
      this.getSliderList();
      this.getLimitBuy();
      this.getGroupBuy();
      this.getHotBuy();
      this.getSubjectsList();
    },
    methods: {
      async getSliderList() {
        try {
          this.$loading();
          let res = await this.$store.dispatch('postData', {
            data: {
              api_name: 'V1.index.index.slider'
            }
          });
          this.sliderList = res;
          this.$loadingClose();
        } catch (e) {
          this.$loadingClose();
          this.$error(e.message);
        }
      },
      async getLimitBuy() {
        try {
          let res = await this.$store.dispatch('postData', {
            data: {
              api_name: 'V1.index.Index.seconds'
            }
          });
          this.limitBuy = res;
        } catch (e) {
          this.$error(e.message);
        }
      },
      async getGroupBuy() {
        try {
          let res = await this.$store.dispatch('postData', {
            data: {
              api_name: 'V1.index.Index.groupBuy'
            }
          });
          this.groupBuy = res;
        } catch (e) {
          this.$error(e.message);
        }
      },
      async getHotBuy() {
        try {
          let res = await this.$store.dispatch('postData', {
            data: {
              api_name: 'V1.index.Index.hotBuy'
            }
          });
          this.hotBuy = res;
        } catch (e) {
          this.$error(e.message);
        }
      },
      async getSubjectsList() {
        try {
          let res = await this.$store.dispatch('postData', {
            data: {
              api_name: 'V1.index.Index.items'
            }
          });
          this.subjectsList = res;
        } catch (e) {
          this.$error(e.message);
        }
      }
    }
  };
</script>
<style lang="less" scoped>
  @import '../assets/css/theme.less';

  .header-box {
    width: 375px;
    height: 210px;
    background: #FF2137;
  }


  .banner-img {
    width: 351px;
    height: 176px;
    border-radius: 8px;
  }

  .bannerbox {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 58%;
    margin: auto;
  }

  .width96 {
    width: 98px;
  }

  .icon-down {
    width: 11px;
  }

  .icon-message {
    width: 24px;
  }

  .colon {
    display: inline-block;
    margin: 0 2px;
    color: #000;
  }

  .block {
    display: inline-block;
    width: 16px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #000;
  }

  .grid-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    align-items: center;
    margin: 100px 0 2px 0;
  }

  .grid {
    width: 48px;
    position: relative;
    box-sizing: border-box;
    margin: 0 14px 8px 13px;
  }

  .grid-img {
    padding: 3px 4px 5px 4px;
    width: 40px;
    height: 40px;
  }

  .vip-box {
    border-radius: 20px;
    background: #F9F9F9;
    margin: 8px 12px 20px 12px;
    height: 40px;
    line-height: 40px;
  }

  .vip-box img {
    width: 64px;
    height: 17px;
    vertical-align: middle;
  }

  .box-shadow {
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
    border-radius: 16px;
    margin: 0 12px 20px 12px;
  }

  .act-box {
    border-radius: 16px;
  }

  .margin-box {
    margin: 0 12px 20px 12px;
  }

  .goods-box {
    width: 100%;
    box-sizing: border-box;
    overflow: scroll;
    white-space: nowrap;
  }

  .tr-box {
    border-left: 2px solid #F9F9F9;
  }

  .tr-box-header span img,
  .tl-box-header span img,
  .tb-box-header span img {
    width: 57px;
    height: 20px;
    padding: 0 27px 0 14px;
  }

  .tb-box-header {
    border-top: 2px solid #F9F9F9;
  }

  .tr-box-footer {
    width: 44px;
    height: 44px;
    margin: 0px 0 12px 12px;
  }

  .tr-box-footer img {
    max-width: 44px;
  }

  .tb-box-header {
    height: 44px;
    line-height: 44px;
    border-top: 2px solid #F9F9F9;
  }

  .morebox {
    padding: 5px 7px;
  }

  .morebox-li,
  .morebox-text {
    width: 109px;
  }

  .morebox-li p img {
    max-width: 109px;
    max-height: 109px;
  }

  .goods-box::-webkit-scrollbar {
    display: none;
  }

  .goods {
    display: inline-block;
    margin: 12px 0 0 12px;
  }

  .goods .img-dash {
    width: 98px;
  }

  .goods-box-header img {
    width: 351px;
    height: 168px;
  }

  .goods img {
    max-width: 98px;
  }

  .tj-box {}

  .tj-box-header img {
    height: 22px;
    width: 165px;
  }

  .tj-goods li:nth-child(2n) {
    margin-left: 3px;
  }

  .tj-goods li:nth-child(2) {
    padding-top: 10px;
  }

  .tj-goods li:nth-child(2) p:nth-child(1) {
    margin-bottom: 10px;
  }

  .tj-goods li {
    width: 174px;
  }

  .tj-goods .img-dash {
    width: 170px;
  }

  .tj-goods .img-dash img {
    max-width: 170px;
    max-width: 170px;
  }

  .tj-item-footer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  .tj-item-footer img {
    width: 24px;
    height: 24px;
  }

  .tabbar-footer {
    height: 49px;
    margin-top: 71px;
  }
</style>