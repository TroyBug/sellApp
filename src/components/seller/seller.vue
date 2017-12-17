<template>
    <div class="seller" ref="seller">
        <div class="seller-content">
            <div class="overview">
                <h1 class="title">{{seller.name}}</h1>
                <div class="desc fixedBorderPixel2">
                    <v-star :size="36" :score="seller.score"></v-star>
                    <span class="text">({{seller.ratingCount}})</span>
                    <span class="text">月售{{seller.sellCount}}单</span>
                </div>
                <ul class="remark">
                    <li class="block">
                        <h2>起送价</h2>
                        <div class="content">
                            <span class="stress">{{seller.minPrice}}元</span>
                        </div>
                    </li>
                    <li class="block">
                        <h2>商家配送</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryPrice}}元</span>
                        </div>
                    </li>
                    <li class="block">
                        <h2>平均配送时间</h2>
                        <div class="content">
                            <span class="stress">{{seller.deliveryTime}}分钟</span>
                        </div>
                    </li>
                </ul>
                <div class="favorite" @click="toggleFavorite">
                    <span class="icon-favorite" :class="{'active':favorite}"></span>
                    <span class="text">{{favoriteText}}</span>
                </div>
            </div>
            <v-split></v-split>
            <div class="bulletin">
                <h1 class="title">公告与活动</h1>
                <div class="content-wrapper fixedBorderPixel2">
                    <p class="content">{{seller.bulletin}}</p>
                </div>
                <ul v-if="seller.supports" class="supports">
                    <li class="support-item fixedBorderPixel2" v-for="item in seller.supports">
                        <span class="icon" :class="classMap[item.type]"></span>
                        <span class="text">{{item.description}}</span>
                    </li>
                </ul>
            </div>
            <v-split></v-split>
            <div class="pics">
                <h1 class="title">商家实景</h1>
                <div class="pics-wrapper" ref="pics-wrapper">
                    <ul class="pic-list" ref="pic-list">
                        <li class="pic-item" v-for="pic in seller.pics">
                            <img :src="pic" width="120" height="90" alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
            <v-split></v-split>
            <div class="info">
                <h1 class="title fixedBorderPixel2">商家信息</h1>
                <ul>
                    <li class="info-item fixedBorderPixel2" v-for="info in seller.infos">{{info}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import Star from '@components/star/star.vue';
  import Split from '@components/split/split.vue';
  import {saveToLocal, loadFromLocal} from '../../common/js/store.js';

  import Scroll from 'better-scroll';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        favorite: (() => {
          return loadFromLocal(this.seller.id, 'favorite', false);
        })()
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    },
    computed: {
      favoriteText() {
        return this.favorite ? '已收藏' : '收藏';
      }
    },
    watch: {
      'seller'() {
        this.$nextTick(() => {
          this._initPics();
        });
      }
    },
    methods: {
      toggleFavorite() {
        this.favorite = !this.favorite;
        saveToLocal(this.seller.id, 'favorite', this.favorite);
      },
      _initPics() {
        if (this.seller.pics) {
          let picWidth = 120;
          let margin = 6;
          let width = (picWidth + margin) * this.seller.pics.length - margin;
          this.$refs['pic-list'].style.width = width + 'px';

          if (!this.picScroll) {
            this.picScroll = new Scroll(this.$refs['pics-wrapper'], {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
            this.picScroll.refresh();
          }
        }
      }
    },
    mounted() {
      this.scroll = new Scroll(this.$refs['seller'], {
        click: true
      });
      this._initPics();
    },
    components: {
      'v-star': Star,
      'v-split': Split
    }
  };
</script>

<style lang="less">
    @import url('../../common/css/base.less');
.seller{
    position: absolute;
    top: 174px;
    bottom: 0;
    width: 100%;
    left: 0;
    overflow: hidden;
    .overview{
        padding:18px;
        position: relative;
        .favorite{
            position: absolute;
            right: 11px;
            top: 18px;
            text-align: center;
            width: 50px;
            .icon-favorite{
                display: block;
                color: #d4d6d9;
                line-height: 24px;
                font-size: 24px;
                margin-bottom: 4px;
                &.active{
                    color: rgb(240,20,20);
                }
            }
            .text{
                font-size: 10px;
                line-height: 10px;
                color: rgb(77,85,93);
            }
        }
        .title{
            font-size: 14px;
            margin-bottom: 8px;
            line-height: 14px;
            color: rgb(7,17,27);
        }
        .desc{
            font-size: 0;
            padding-bottom: 18px;
            .fixedBorderPixel2(rgba(7,17,27,0.2));
            .star{
                display: inline-block;
                vertical-align: top;
                margin-right: 8px;
            }
            .text{
                display: inline-block;
                line-height: 18px;
                vertical-align: top;
                margin-right: 12px;
                font-size: 10px;
                color: rgb(7,17,27);
            }
        }
        .remark{
            display: flex;
            padding-top: 18px;
            .block{
                flex: 1;
                text-align: center;
                border-right:1px solid rgba(7,17,27,0.2);
                &:last-child{
                    border:none;
                }
                h2{
                    margin-bottom: 4px;
                    line-height: 10px;
                    font-size: 10px;
                    color: rgb(147,153,159);
                }
                .content{
                    line-height: 24px;
                    font-size: 10px;
                    font-weight: 200;
                    color: rgb(7,17,27);
                    .stress{
                        font-size: 24px;
                    }
                }
            }
        }
    }
    .bulletin{
        padding: 18px 18px 0 18px;
        .title{
            font-size: 14px;
            margin-bottom: 8px;
            line-height: 14px;
            color: rgb(7,17,27);
        }
        .content-wrapper{
            padding:16px 12px;
            .fixedBorderPixel2(rgba(7,17,27,0.2));
            .content{
                line-height: 24px;
                font-size: 12px;
                color: rgb(240,20,20);
            }
        }
        .supports{
            .support-item{
                padding: 16px 12px;
                font-size: 0;
                .fixedBorderPixel(rgba(7,17,27,0.2));
                .icon{
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    vertical-align: top;
                    margin-right: 6px;
                    background-size: 16px 16px;
                    background-repeat: no-repeat;
                    &.decrease{
                        .bg-image("./img/decrease_4");
                    }
                    &.discount{
                        .bg-image("./img/discount_4");
                    }
                    &.guarantee{
                        .bg-image("./img/guarantee_4");
                    }
                    &.invoice{
                        .bg-image("./img/invoice_4");
                    }
                    &.special{
                        .bg-image("./img/special_4");
                    }
                }
                .text{
                    font-size: 12px;
                    line-height: 16px;
                    color: rgb(7,17,27);
                }
            }
        }
    }
    .pics{
        padding: 18px;
        .title{
            font-size: 14px;
            margin-bottom: 12px;
            line-height: 14px;
            color: rgb(7,17,27);
        }
        .pics-wrapper{
            width: 100%;
            overflow: hidden;
            white-space: nowrap;
            .pic-list{
                font-size: 0;
                .pic-item{
                    display: inline-block;
                    margin-right: 6px;
                    width: 120px;
                    height: 90px;
                    &:last-child{
                        margin-right: 0;
                    }
                }
            }
        }
    }
    .info{
        padding: 18px;
        padding-bottom: 0;
        color: rgb(7,17,27);
        .title{
            font-size: 14px;
            padding-bottom: 12px;
            line-height: 14px;
            .fixedBorderPixel2(rgba(7,17,27,0.2));
        }
        .info-item{
            .fixedBorderPixel2(rgba(7,17,27,0.2));
            padding: 16px 12px;
            line-height: 16px;
            font-size: 12px;
        }
    }
}
</style>