<template>
   <div class="container area-list member-list bg-gray">
        <section class="report-top flex-box text-center bg-white">
           <p class="flex-1 text-left">
             <span class="text-gray text-14">选择日期：</span>
             <span class="">2019-05-20</span>
             <span class="icon text-18 icon-rili text-gray"></span>
           </p>
           <p class="van-hairline--left text-primary"><span class="text-14">筛选</span><span class="icon icon-shaixuan text-gray"></span></p>
        </section>

        <section class="area-box bg-white">
          <div class="van-hairline--bottom pad-normal">
            <p class="text-17 pull-left">
              <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
              <span class="inline-block-vm">李国强</span>
            </p>
            <span class="icon icon-mright pull-right text-gray"></span>
          </div>
          <div class="area-box-num text-center">
            <div class="van-hairline--bottom">
                 <van-row class="">
                  <van-col span="10">
                    <p class="text-21 text-blue num">30,950.00</p>
                    <p class="text-14 text-gray">年度指标(万元)</p>
                  </van-col>
                  <van-col span="7">
                    <p class="text-21 text-red num">-133.21%</p>
                    <p class="text-14 text-gray">同比增长率</p>
                  </van-col>
                  <van-col span="7">
                    <p class="text-21  num">150.00%</p>
                    <p class="text-14 text-gray">完成率</p>
                  </van-col>
                </van-row>
            </div>
           
            <van-row class="">
              <van-col span="10">
                 <p class="text-21 text-blue num">30,950.00</p>
                 <p class="text-14 text-gray">年度指标(万元)</p>
              </van-col>
              <van-col span="7">
                 <p class="text-21 text-red num">-133.21%</p>
                 <p class="text-14 text-gray">同比增长率</p>
              </van-col>
              <van-col span="7">
                 <p class="text-21  num">150.00%</p>
                 <p class="text-14 text-gray">完成率</p>
              </van-col>
            </van-row>
          </div>
        </section>

          <section class="area-box bg-white">
          <div class="van-hairline--bottom pad-normal">
            <p class="text-17 pull-left">
              <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
              <span class="inline-block-vm">李国强</span>
            </p>
            <span class="icon icon-mright pull-right text-gray"></span>
          </div>
          <div class="area-box-num text-center">
            <div class="van-hairline--bottom">
                 <van-row class="">
                  <van-col span="10">
                    <p class="text-21 text-blue num">30,950.00</p>
                    <p class="text-14 text-gray">年度指标(万元)</p>
                  </van-col>
                  <van-col span="7">
                    <p class="text-21 text-red num">-133.21%</p>
                    <p class="text-14 text-gray">同比增长率</p>
                  </van-col>
                  <van-col span="7">
                    <p class="text-21  num">150.00%</p>
                    <p class="text-14 text-gray">完成率</p>
                  </van-col>
                </van-row>
            </div>
           
            <van-row class="">
              <van-col span="10">
                 <p class="text-21 text-blue num">30,950.00</p>
                 <p class="text-14 text-gray">年度指标(万元)</p>
              </van-col>
              <van-col span="7">
                 <p class="text-21 text-red num">-133.21%</p>
                 <p class="text-14 text-gray">同比增长率</p>
              </van-col>
              <van-col span="7">
                 <p class="text-21  num">150.00%</p>
                 <p class="text-14 text-gray">完成率</p>
              </van-col>
            </van-row>
          </div>
        </section>

        <van-popup v-model="show" position="top" class="area-pop" >
          <van-search
            placeholder="请输入搜索关键词"
            show-action
            shape="round"
          >
            <div slot="action" class="text-14 text-gray">搜索</div>
          </van-search>

          <div class="area-select">
            <van-checkbox-group v-model="result">
              <van-cell-group>
                <van-cell clickable>
                  <p slot="title">
                   <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
                   <span class="inline-block-vm">李国强</span>
                  </p>
                  <van-checkbox shape="square" checked-color="#00A496" ref="checkboxes" />
                </van-cell>
                <van-cell clickable>
                  <p slot="title">
                   <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
                   <span class="inline-block-vm">李国强</span>
                  </p>
                  <van-checkbox shape="square" checked-color="#00A496" ref="checkboxes" />
                </van-cell>
                <van-cell clickable>
                  <p slot="title">
                   <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
                   <span class="inline-block-vm">李国强</span>
                  </p>
                  <van-checkbox shape="square" checked-color="#00A496" ref="checkboxes" />
                </van-cell>
                <van-cell clickable>
                  <p slot="title">
                   <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
                   <span class="inline-block-vm">李国强</span>
                  </p>
                  <van-checkbox shape="square" checked-color="#00A496" ref="checkboxes" />
                </van-cell>
                <van-cell clickable>
                  <p slot="title">
                   <span class="avatar"><img src="../assets/images/temp/avatar.png" alt=""></span>
                   <span class="inline-block-vm">李国强</span>
                  </p>
                  <van-checkbox shape="square" checked-color="#00A496" ref="checkboxes" />
                </van-cell>
              </van-cell-group>
            </van-checkbox-group>
          </div>

          <footer class="flex-box ">
            <button class="flex-1 van-hairline--top"><span class="text-17">重置</span></button>
            <button class="flex-1"><span class="text-17">确定</span></button>
          </footer>

        </van-popup>

        

       
    </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      list: ['a', 'b', 'c','a', 'b', 'c','a', 'b', 'c'],
      result: ['a', 'b']
    };
  },
  methods: {
  }
  };
</script>

<style lang="less">
  @import '../assets/css/theme.less';
  .area-list{ padding: 43px 0 0;}
  .area-list .report-top {height:43px; box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.1); padding: 2px 15px; position: fixed; top: 0; left: 0; width: 100%; box-sizing: border-box;}
  .report-top span{ display: inline-block; vertical-align: middle;}
  .report-top .icon-rili{ margin: 0 0 .1rem .1rem;}
  .report-top .flex-1 .text-gray.text-14{ margin-right: 20px;}
  .report-top .van-hairline--left{ padding: 0 15px 0 30px;}

  .area-box{box-shadow:0px 1px 2px 0px rgba(174,174,174,0.16);border-radius:7px; margin: 16px;}
  .area-box .van-hairline--bottom{ overflow: hidden;}
  .area-box .area-box-num{ padding: 0 16px;}
  .area-box .num{ font-family: 'ArialNarrow-Bold'; padding-bottom: 10px;}
  .area-box .van-row{ padding: 28px 0;}

  .area-box .avatar{ width: 26px; height: 26px; vertical-align: middle; margin-right: 10px;}
  .area-pop .avatar{ width: 46px; height: 46px; vertical-align: middle; margin-right: 10px;}
  .member-list .area-pop .van-checkbox__icon{ margin-top: .2rem;}

  .text-primary .icon{ color: @primaryColor;}

  .area-pop, .area-list .van-overlay{top:43px;}
  .area-select{ max-height: 40vh; overflow: auto;}
  .area-pop footer{ margin-top: 40px; height: 47px;}
  .area-pop footer button{ border: 0; text-align: center; color: @white; background: @primaryColor; height: 47px;}
  .area-pop footer button:first-child{ background: @white; color: @primaryColor;}
  .area-pop footer button:disabled{ background:#9B9B9B; color: @white;}
</style>