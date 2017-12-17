<template>
    <div class="ratings" ref="ratings">
        <div class="ratings-content">
            <div class="overview">
                <div class="overview-left">
                    <h1 class="score">{{seller.score}}</h1>
                    <div class="title">综合评分</div>
                    <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="overview-right">
                    <div class="scroe-wrapper">
                        <span class="title">服务态度</span>
                        <v-star :size="36" :score="seller.serviceScore"></v-star>
                        <span class="score">{{seller.serviceScore}}</span>
                    </div>
                    <div class="scroe-wrapper">
                        <span class="title">商品评分</span>
                        <v-star :size="36" :score="seller.foodScore"></v-star>
                        <span class="score">{{seller.foodScore}}</span>
                    </div>
                    <div class="delivery-wrapper">
                        <span class="title">送达时间</span>
                        <span class="delivery">{{seller.deliveryTime}}分钟</span>
                    </div>
                </div>
            </div>
            <v-split></v-split>
            <v-ratingselect @contenttoggle="contentToggle" @ratingtypeselect="ratingTypeSelect" :selectType="selectType" :contentOnly="contentOnly" :ratings="ratings" :desc="desc"></v-ratingselect>
            <div class="rating-wrapper">
                <ul>
                    <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in ratings" class="rating-item fixedBorderPixel2">
                        <div class="avatar">
                            <img width="28" height="28" :src="rating.avatar" alt=""/>
                        </div>
                        <div class="content">
                            <h1 class="name">{{rating.username}}</h1>
                            <div class="star-wrapper">
                                <v-star :size="24" :score="rating.score"></v-star>
                                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
                            </div>
                            <p class="text">{{rating.text}}</p>
                            <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                                <span class="icon-thumb_up"></span>
                                <span class="item" v-for="item in rating.recommend">{{item}}</span>
                            </div>
                            <div class="time">{{rating.rateTime | formatDate}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Star from '@components/star/star.vue';
    import Split from '@components/split/split.vue';
    import RatingSelect from '@components/ratingselect/ratingselect.vue';
    import Scroll from 'better-scroll';
    import {formatDate} from '../../common/js/date.js';

    const ALL = 2;
    const ERR_OK = 0;
export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
        return {
          ratings: [],
          selectType: ALL,
          contentOnly: true,
          desc: {
            all: '全部',
            good: '满意',
            bad: '不满意'
          }
        };
    },
    methods: {
      ratingTypeSelect(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      contentToggle(contentOnly) {
        this.contentOnly = contentOnly;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      needShow(type, text) {
        if (this.contentOnly && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      _initScroll() {
        this.scroll = new Scroll(this.$refs['ratings'], {
          click: true
        });
      }
    },
    created() {
        this.$http.get('/api/ratings').then((res) => {
          res = res.data;
          if (res.errno === ERR_OK) {
            this.ratings = res.data;
            this.$nextTick(() => {
              this._initScroll();
            });
          }
        });
    },
      filters: {
        formatDate(time) {
          let date = new Date(time);
          return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
      },
    components: {
      'v-star': Star,
      'v-split': Split,
      'v-ratingselect': RatingSelect
    }
};
</script>

<style lang="less">
    @import url('../../common/css/base.less');
.ratings{
    position: absolute;
    top: 174px;
    bottom: 0;
    width: 100%;
    left: 0;
    overflow: hidden;
    .overview{
        display: flex;
        padding:18px 0;
        .overview-left{
            flex:0 0 137px;
            width: 137px;
            border-right: 1px solid rgba(7, 17, 27, 0.1);
            text-align: center;
            padding: 6px 0;
            @media screen and (max-width:380px) {
                flex:0 0 120px;
                width: 120px;
            }
            .score{
                line-height: 28px;
                font-size: 24px;
                color: rgb(255,153,0);
                margin-bottom: 6px;
            }
            .title{
                line-height: 12px;
                font-size: 12px;
                color: rgb(7,17,27);
                margin-bottom: 8px;
            }
            .rank{
                line-height: 10px;
                padding-bottom: 6px;
                font-size: 10px;
                color: rgb(147,153,159);
            }
        }
        .overview-right{
            flex:1;
            padding:6px 0 6px 24px;
            @media screen and (max-width:380px) {
                padding-left: 6px;
            }
            .scroe-wrapper{
                line-height: 18px;
                margin-bottom: 8px;
                font-size: 0;

                .title{
                    color: rgb(7,17,27);
                    font-size: 12px;
                    line-height: 18px;
                    display: inline-block;
                    vertical-align: top;
                }
                .star{
                    display: inline-block;
                    vertical-align: top;
                    margin: 0 12px;
                }
                .score{
                    display: inline-block;
                    vertical-align: top;
                    font-size: 12px;
                    line-height: 18px;
                    color: rgb(255,153,0);
                }
            }
            .delivery-wrapper{
                font-size: 0;
                .title{
                    color: rgb(7,17,27);
                    font-size: 12px;
                }
                .delivery{
                    color: rgb(147,153,159);
                    font-size: 12px;
                    margin-left: 12px;
                }
            }
        }
    }
    .rating-wrapper{
        padding: 0 18px;
        .rating-item{
            display: flex;
            padding: 18px;
            .fixedBorderPixel2(rgba(7,17,27,0.2));
            .avatar{
                flex: 0 0 28px;
                width: 28px;
                margin-right: 12px;
                img{
                    border-radius:50%;
                }
            }
            .content{
                position: relative;
                flex:1;
                .name{
                    line-height: 12px;
                    margin-bottom: 4px;
                    font-size: 10px;
                    color: rgb(7,17,27);
                }
                .star-wrapper{
                    margin-bottom: 6px;
                    font-size: 0;
                    .star{
                        display: inline-block;
                        vertical-align: top;
                        margin-right: 6px;
                    }
                    .delivery{
                        display: inline-block;
                        font-size: 12px;
                        color: rgb(147,153,159);
                    }
                }
                .text{
                    line-height: 18px;
                    color: rgb(7,17,27);
                    font-size: 12px;
                    margin-bottom: 8px;
                }
                .recommend{
                    line-height: 16px;
                    .icon-thump_up,.item{
                        margin: 0 8px 4px 0;
                        display: inline-block;
                        font-size: 9px;
                    }
                    .icon-thumb_up{
                        color: rgb(0,160,220);
                    }
                    .item{
                        padding: 0 6px;
                        vertical-align: top;
                        display: inline-block;
                        border:1px solid rgba(7,17,27,0.1);
                        border-radius: 1px;
                        color: rgb(147,153,159);
                        background: #fff;
                    }
                }
                .time{
                    position: absolute;
                    top: 0;
                    line-height: 12px;
                    font-size: 10px;
                    color: rgb(147,153,159);
                    right: 0;
                }
            }
        }
    }
}
</style>