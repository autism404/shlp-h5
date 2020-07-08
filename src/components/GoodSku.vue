<template>
  <div class="good-sku">
    <van-sku v-model="show" :sku="sku" :goods="goods" :quota="0" :hide-stock="sku.hide_stock"
      :message-config="messageConfig" @buy-clicked="onBuyClicked" :show-add-cart-btn="false" :hide-selected-text="true"
      stepper-title="数量" />
  </div>
</template>
<script>
  export default {
    name: 'GoodSku',
    components: {},
    data() {
      return {
        show: false,
        sku: {
          tree: [
            {
              k: '段数', // skuKeyName：规格类目名称
              k_s: 's1', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              v: [
                {
                  id: '1', // skuValueId：规格值 id
                  name: '3段' // skuValueName：规格值名称
                }
              ],
              largeImageMode: false //  是否展示大图模式
            },
            {
              k: '规格', // skuKeyName：规格类目名称
              k_s: 's2', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
              v: [
                {
                  id: '1', // skuValueId：规格值 id
                  name: '900克' // skuValueName：规格值名称
                }
              ],
              largeImageMode: false //  是否展示大图模式
            }
          ],
          list: [
            {
              id: 2259, // skuId
              s1: '1', // 规格类目 k_s 为 s1 的对应规格值 id
              s2: '1', // 规格类目 k_s 为 s2 的对应规格值 id
              price: 100, // 价格（单位分）
              stock_num: 110 // 当前 sku 组合对应的库存
            }
          ],
          price: '1.00', // 默认价格（单位元）
          collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
          none_sku: false, // 是否无规格商品
          messages: [],
          hide_stock: true // 是否隐藏剩余库存
        },
        goods: {
          picture: 'https://img.yzcdn.cn/1.jpg'
        },
        messageConfig: {
          // 数据结构见下方文档
        }
      };
    },
    computed: {},
    methods: {
      onBuyClicked() {

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