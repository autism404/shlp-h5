<template>
  <div class="good-action">
    <van-goods-action>
      <van-goods-action-icon :icon="iconList[0].img" text="客服" @click="onClickIcon" />
      <van-goods-action-icon :icon="iconList[1].img" text="购物车" @click="onClickIcon" />
      <van-goods-action-button color="#FF1C34" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
  export default {
    name: 'GoodAction',
    components: {},
    data() {
      return {
        iconList: [
          { img: require('../assets/images/common/ic_kefu.png'), text: '客服' },
          { img: require('../assets/images/common/ic_gouwuche1.png'), text: '购物车' }]
      };
    },
    computed: {},
    methods: {}
  };
</script>
<style lang="less" scoped>
  @import '../assets/css/theme.less';

  .good-action {
    height: 48px;
  }
</style>