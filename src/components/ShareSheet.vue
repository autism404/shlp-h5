<template>
  <div class="share-sheet">
    <van-share-sheet v-model="showShare" :options="options" @select="onSelect" @cancel="onCancel" />
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
    computed: {},
    methods: {
      onCancel() {
        this.$emit('closeDialog');
      },
      onSelect() {
        this.showDialog = false;
      }
    }
  };
</script>
<style lang="less" scoped>
  @import '../assets/css/theme.less';

  /deep/.van-popup--bottom.van-popup--round {
    border-radius: 0;
  }

  /deep/.van-share-sheet__options {
    padding: 0;
  }

  /deep/.van-share-sheet__option {
    width: 93px;
    height: 84px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /deep/.van-share-sheet__cancel::before {
    height: 2px;
  }

  /deep/.van-share-sheet__icon {
    width: 32px;
    height: 32px;
  }
</style>