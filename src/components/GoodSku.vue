<template>
  <div class="good-sku">
    <van-sku v-model="show" :sku="sku" :goods="goods" :quota="0" :hide-stock="sku.hide_stock"
      @buy-clicked="onBuyClicked" :show-add-cart-btn="false" :hide-selected-text="true" stepper-title="数量" />
  </div>
</template>
<script>
  export default {
    name: 'GoodSku',
    components: {},
    data() {
      return {
        show: false,
        skuData: {}
      };
    },
    props: {
      goodDetail: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    computed: {
      sku() {
        let obj = {};
        if (this.goodDetail.has_sku) {
          obj = {
            tree: this.goodDetail.sku_list.map(it => {
              return {
                k: it.name,
                k_s: it.id,
                v: it.val
              };
            }),
            list: this.goodDetail.item_skus.map(v => {
              return {
                stock_num: v.stock,
                imgUrl: v.pic,
                ...v
              };
            }),
            stock_num: this.goodDetail.stock,
            price: this.goodDetail.business_price, // 默认价格（单位元）
            none_sku: false, // 是否无规格商品
            messages: [],
            hide_stock: true // 是否隐藏剩余库存
          };
        }
        return obj;
      },
      goods() {
        let obj = { picture: this.goodDetail.base_pic };
        return obj;
      }
    },
    methods: {
      onBuyClicked() {
        if (this.skuData.selectedNum > this.skuData.selectedSkuComb.stock_num) this.skuData.selectedNum = this.skuData.selectedSkuComb.stock_num;
      }
    }
  };
</script>
<style lang="less" scoped>
  @import '../assets/css/theme.less';

  .good-sku {
    /deep/.van-popup--bottom.van-popup--round {
      border-radius: 0;
    }

    /deep/.van-popup__close-icon--top-right {
      display: none;
    }

    /deep/.van-sku-header__img-wrap,
    /deep/.van-sku-header__goods-info {
      top: -50px
    }

    /deep/.van-sku-row__item {
      border: 1px solid #fff;
    }

    /deep/.van-sku-header__goods-info {
      position: relative;
    }

    /deep/.van-sku-row__item--active {
      border: 1px solid #FF1C34;
    }

    /deep/ .van-sku-row__item--active::before {
      background: #fff;
    }

    /deep/.van-sku-row__image-item::before,
    .van-sku-row__item::before {
      background: #fff;
    }
  }
</style>