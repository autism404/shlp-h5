<template>
  <div class="share-sheet">
    <van-share-sheet v-model="showShare" :options="options" @select="onSelect" :get-container="container" />
  </div>
</template>
<script>
  export default {
    name: 'ShareSheet',
    components: {},
    data() {
      return {
        showShare: false,
        options: [
          {
            name: '微信',
            icon: require('../assets/images/common/wechat.png')
          },
          {
            name: '朋友圈',
            icon: require('../assets/images/common/pyq.png')
          },
          {
            name: '分享链接',
            icon: require('../assets/images/common/href.png')
          },
          {
            name: '生成海报',
            icon: require('../assets/images/common/haibao.png')
          }
        ]
      };
    },
    props: {
      showDialog: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showDialog(show) {
        this.showShare = show;
      }
    },
    computed: {},
    methods: {
      onSelect() {

      }
    }
  };
</script>
<style lang="less" scoped>
  @import '../assets/css/theme.less';

  .good-action {
    height: 48px;
  }
</style>