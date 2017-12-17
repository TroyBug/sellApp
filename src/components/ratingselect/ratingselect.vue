<template>
    <div class="ratingselect">
        <div class="rating-type fixedBorderPixel2">
            <span class="block good" @click="select(2)"  :class="{'active':selectType===2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
            <span class="block good" @click="select(0)"  :class="{'active':selectType===0}">{{desc.good}}<span class="count">{{goodCount.length}}</span></span>
            <span class="block bad" @click="select(1)"  :class="{'active':selectType===1}">{{desc.bad}}<span class="count">{{badCount.length}}</span></span>
        </div>
        <div class="switch" @click="toggleContent" :class="{'on':contentOnly}">
            <i class="icon-check_circle"></i>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
  const GOOD = 0;
  const BAD = 1;
  const ALL = 2;

  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      contentOnly: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
              all: '全部',
              good: '满意',
              bad: '不满意'
          };
        }

      }
    },
    methods: {
      select(type) {
        this.selectType = type;
        this.$emit('ratingtypeselect', type);
      },
      toggleContent() {
        this.contentOnly = !this.contentOnly;
        this.$emit('contenttoggle', this.contentOnly);
      }
    },
    computed: {
        goodCount() {
          return this.ratings.filter((rating) => {
            return rating.rateType === GOOD;
          });
        },
        badCount() {
            return this.ratings.filter((rating) => {
              return rating.rateType === BAD;
            });
        }
    }
  };
</script>

<style lang="less">
    @import "../../common/css/base.less";
.ratingselect{
    .rating-type{
        padding: 18px 0;
        margin: 0 18px;
        .fixedBorderPixel2(rgba(7,17,27,0.1));
        font-size: 0;
        .block{
            display: inline-block;
            padding: 8px 12px;
            margin-right: 8px;
            border-radius: 1px;
            color: rgb(77,85,93);
            line-height: 16px;
            font-size: 12px;
            &.active{
                color: #fff;
            }
            .count{
                font-size: 8px;
                margin-left: 2px;
            }
            &.good{
                background: rgba(0,160,220,0.2);
                &.active{
                    background: rgba(0,160,220,1);
                }
            }
            &.bad{
                background: rgba(77,85,93,0.2);
                &.active{
                    background: rgba(77,85,93,1);
                }
            }
        }
    }
    .switch{
        padding:12px 18px;
        line-height: 24px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        color: rgb(147,153,159);
        font-size: 0;
        .icon-check_circle{
            display: inline-block;
            vertical-align: top;
            font-size: 24px;
            margin-right: 4px;
        }
        .text{
            font-size: 12px;
        }
        &.on{
            color: rgba(0,160,220,1);
        }
    }
}
</style>