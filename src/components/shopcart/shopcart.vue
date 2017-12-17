<template>
    <div>
        <div class="shopcart">
            <div class="content" @click="toggleList">
                <div class="content-left">
                    <div class="logo-wrapper">
                        <div class="logo" :class="{'highlight': totalPrice.count > 0}">
                            <i class="icon-shopping_cart" :class="{'highlight': totalPrice.count > 0}"></i>
                        </div>
                        <div class="num" v-show="totalPrice.count > 0">{{totalPrice.count}}</div>
                    </div>
                    <div class="price" :class="{'highlight': totalPrice.count > 0}">￥{{totalPrice.total}}</div>
                    <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
                </div>
                <div class="content-right" @click.stop.prevent="pay">
                    <div class="pay" :class="payClass">
                        {{payDesc}}
                    </div>
                </div>
            </div>
            <div class="ball-container">
                <transition-group name="ballAnim"
                      v-on:before-enter="beforeEnter"
                      v-on:enter="enter"
                      v-on:after-enter="afterEnter">
                    <div class="ball" v-for="ball in balls" :key="ball.show" v-show="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                </transition-group>
            </div>
            <!--todo-->
            <transition name="fold">
                <div class="shopcart-list" v-show="listShow">
                    <div class="list-header">
                        <h1 class="title">购物车</h1>
                        <span class="empty" @click="empty">清空</span>
                    </div>
                    <div class="list-content" ref="list-content">
                        <ul>
                            <li class="food fixedBorder" v-for="food in selectFoods">
                                <span class="name">{{food.name}}</span>
                                <div class="price">
                                    <span>￥{{food.price * food.count}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <v-cartcontrol :food="food"></v-cartcontrol>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
        </div>
        <transition name="fade">
            <div class="list-mask" @click="hideList" v-show="listShow"></div>
        </transition>
    </div>
</template>

<script>
    // reference goods.vue
    import CartControl from '@components/cartcontrol/cartcontrol.vue';
    import Scroll from 'better-scroll';
  export default {
    data() {
      return {
        balls: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ],
        dropBalls: [],
        fold: true
      };
    },
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [];
        }
      },
      'delivery-price': {
        type: Number,
        default: 0
      },
      'min-price': {
        type: Number,
        default: 0
      }
    },
    methods: {
        toggleList() {
            if (!this.totalPrice.count) return;
            this.fold = !this.fold;
        },
        drop(el) {
          for (let i = 0; i < this.balls.length; i++) {
            let ball = this.balls[i];
            if (!ball.show) {
              ball.show = true;
              ball.el = el;
              this.dropBalls.push(ball);
              return;
            }
          }
        },
        beforeEnter(el) {
          let balls = this.balls.filter(ball => ball.show === true);
          balls.forEach(ball => {
            let rect = ball.el.getBoundingClientRect();
            let x = rect.left - 32;
            let y = -(window.innerHeight - rect.top - 22);
            el.style.display = '';
            el.style.transform = `translate3d(0,${y}px,0)`;
            let inner = el.getElementsByClassName('inner-hook')[0];
            inner.style.transform = `translate3d(${x}px,0,0)`;
          });

        },
        enter(el) {
            /* eslint-disable no-unused-vars */
            let rf = el.offsetHeight;
            this.$nextTick(() => {
              el.style.transform = 'translate3d(0,0,0)';
              let inner = el.getElementsByClassName('inner-hook')[0];
              inner.style.transform = 'translate3d(0,0,0)';
            });
        },
        afterEnter(el) {
            this.dropBalls.map(ball => {
              ball.show = false;
              el.style.display = 'none';
            });
        },
        empty() {
          this.selectFoods.forEach((food) => {
            food.count = 0;
          });
        },
        hideList() {
          this.fold = true;
        },
        pay() {
          if (this.totalPrice.total < this.minPrice) {
            return;
          }
          alert(`支付${this.totalPrice.total}元`);
        }
    },
    computed: {
      listShow() {
        if (!this.totalPrice.count) {
          this.fold = true;
          return false;
        }
        let show = !this.fold;
        if (show) {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Scroll(this.$refs['list-content'], {
                click: true
              });
            } else {
              this.scroll.refresh();
            }
          });
        }
        return show;
      },
      totalPrice() {
        let total = 0;
        let count = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
          count += food.count;
        });

        return {
          total: total,
          count: count
        };
      },
      payDesc() {
        if (this.totalPrice.total === 0) {
          return `￥${this.minPrice}元起送`;
        } else if (this.totalPrice.total < this.minPrice) {
          let diff = this.minPrice - this.totalPrice.total;
          return `还差￥${diff}元起送`;
        } else {
          return '去结算';
        }
      },
      payClass() {
        if (this.totalPrice.total < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      }
    },
    components: {
      'v-cartcontrol': CartControl
    }
  };
</script>

<style lang="less">
    @import url('../../common/css/base.less');
.shopcart{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 11;
    width: 100%;
    height: 48px;
    .content{
        display: flex;
        background: #141d27;
        font-size: 0;
        .content-left{
            flex:1;
            .logo-wrapper{
                display:inline-block;
                position: relative;
                top: -10px;
                margin: 0 12px;
                padding: 6px;
                width: 56px;
                height: 56px;
                box-sizing: border-box;
                vertical-align: top;
                border-radius: 50%;
                background:#141d27;
                .logo{
                    width: 100%;
                    height: 100%;
                    font-size: 16px;
                    border-radius: 50%;
                    text-align: center;
                    background: #2b343c;
                    &.highlight{
                        background: rgb(0,160,220);
                    }
                    .icon-shopping_cart{
                        font-size:24px;
                        color: #80858a;
                        line-height: 44px;
                        &.highlight{
                            color:#fff;
                        }
                    }
                }
                .num {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 24px;
                    height: 16px;
                    line-height: 16px;
                    text-align: center;
                    border-radius: 50%;
                    font-size: 9px;
                    font-weight: 700;
                    color: #ffffff;
                    background: rgb(240,20,20);
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
                }
            }
            .price{
                display: inline-block;
                vertical-align: top;
                line-height: 24px;
                margin-top: 12px;
                box-sizing:border-box;
                padding-right: 12px;
                border-right:1px solid rgba(255,255,255,0.1);
                font-size: 16px;
                font-weight: 700;
                color:rgba(255,255,255,0.4);
                &.highlight{
                    color: #ffffff;
                }
            }
            .desc{
                display: inline-block;
                vertical-align: top;
                line-height: 24px;
                margin: 12px 0 0 12px;
                color: rgba(255,255,255,0.4);
                font-size: 10px;
            }
        }
        .content-right{
            flex:0 0 105px;
            width: 105px;
            .pay{
                font-size: 12px;
                height: 48px;
                line-height: 48px;
                text-align: center;
                color: rgba(255,255,255,0.4);
                font-weight: 700;
                background: #2b343c;
                &.not-enough{
                    background: #2b333b;
                }
                &.enough{
                    background: #00b43c;
                    color: #ffffff;
                }
            }
        }
    }
    .ball-container{
        .ball{
            position: fixed;
            left: 32px;
            bottom: 22px;
            z-index: 200;
            &.ballAnim-transition{
                transition:all .4s cubic-bezier(0.49,-0.29,0.75,0.41);
                .inner{
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: rgb(0,160,220);
                    transition: all .4s linear;
                }
            }
            &.ballAnim-enter-active,&.ballAnim-enter-to{
                transition:all .4s cubic-bezier(0.49,-0.29,0.75,0.41);
                .inner-hook{
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: rgb(0,160,220);
                    transition: all .4s linear;
                }
            }
        }
    }
    .shopcart-list{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        transform: translate3d(0,-100%,0);
        transition: all .5s;
        &.fold-enter-active{
            transform: translate3d(0,0,0);
        }
        &.fold-enter-to,&.fold-leave-active{
            transform: translate3d(0,-100%,0);
        }
        &.fold-leave-to{
            transform: translate3d(0,0,0);
        }
        .list-header{
            height: 40px;
            line-height: 40px;
            padding: 0 18px;
            background:#f3f5f7;
            border-bottom: 1px solid rgba(7, 17, 27, 0.1);
            .title{
                float: left;
                font-size: 14px;
                color: rgb(7, 17, 27);
            }
            .empty{
                float: right;
                font-size: 12px;
                color: rgb(0, 160, 220);
            }
        }
        .list-content{
            padding: 0 18px;
            max-height: 217px;
            background: #fff;
            overflow: hidden;
            .food{
                position: relative;
                padding: 12px 0;
                box-sizing: border-box;
                &.fixedBorder{
                    .fixedBorderPixel2(rgba(7,17,27,0.1));
                }
                .name{
                    line-height: 24px;
                    font-size: 14px;
                    color: rgb(7,17,27);
                }
                .price{
                    position: absolute;
                    right: 90px;
                    bottom: 12px;
                    line-height: 24px;
                    font-size: 14px;
                    font-weight: 700;
                    color: rgb(240,20,20);
                }
                .cartcontrol-wrapper{
                    position: absolute;
                    right: 0;
                    bottom: 6px;
                }

            }

        }
    }

}
    .list-mask{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        transition: all .4s;
        opacity: 1;
        background: rgba(7,17,27,0.6);
        -webkit-backdrop-filter: blur(10px);
        &.fade-enter-active{
            opacity: 0;
            background: rgba(7,17,27,0);
        }
        &.fade-enter-to,&.fade-leave-active{
            opacity: 1;
            background: rgba(7,17,27,0.6);
        }
        &.fade-leave-to{
            opacity: 0;
            background: rgba(7,17,27,0);
        }
    }
</style>