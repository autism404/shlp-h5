<template>
  <div class="good-swiper-global">
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item,index) in swiperList" :key="index">
        <img v-if="item.img" class="good-swiper-item" src="../assets/images/common/goods.png" alt="">
        <video v-if="item.video">
          <source :src="item.video" type="video/mp4">
        </video>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
  export default {
    name: 'Swiper',
    components: {},
    data() {
      return {};
    },
    props: {
      swiperList: {
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    computed: {},
    methods: {
      onChange() { }
    }
  };
</script>
<style lang="less" scoped>
  @import '../assets/css/theme.less';

  /deep/.van-swipe__indicator {
    width: 8px;
    height: 2px;
    border-radius: none;
    background-color: #FF1C34;
  }

  /deep/.van-swipe__indicator--active {
    background-color: #FF1C34;
  }

  .good-swiper-global,
  .good-swiper-item {
    height: 340px;
    width: 375px;
  }
</style>