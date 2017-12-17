<template>
    <div id="goods" class="goods">
        <div class="menu-wrapper" ref="menu-wrapper">
            <ul>
                <li v-for="(item, index) in goods" class="menu-item menu-item-hook"
                    :class="{'current': curIdx === index}" @click="selectMenu(index)">
                    <span class="text fixedBorder">
                        <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="foods-wrapper" ref="foods-wrapper">
            <ul>
                <li v-for="item in goods" class="food-list food-list-hook">
                    <h1 class="title">{{item.name}}</h1>
                    <ul>
                        <li @click="selectFood(food)" v-for="food in item.foods" class="food-item fixedBorder">
                            <div class="icon">
                                <img :src="food.icon" width="64" height="64" alt=""/>
                            </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra">
                                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                                </div>
                                <div class="price">
                                    <span class="now">￥{{food.price}}</span>
                                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                                </div>
                                <div class="cartcontrol-wrapper">
                                    <v-cartconcrol @add-food="addFood" :food="food"></v-cartconcrol>
                                </div>
                            </div>

                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <v-shopcart ref="shopcart" :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></v-shopcart>
        <v-food :food="selectedFood" ref="food"></v-food>
    </div>
</template>

<script>
import Scroll from 'better-scroll';
import ShopCart from '@components/shopcart/shopcart.vue';
import CartControl from '@components/cartcontrol/cartcontrol.vue';
import Food from '@components/food/food.vue';

const ERR_OK = 0;
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {}
    };
  },
  created() {
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
    this.$http.get('/api/goods').then((res) => {
      res = res.data;
      if (res.errno === ERR_OK) {
        this.goods = res.data;
        this.$nextTick(() => {
          this._initScroll();
          this.calcZoneHeight();
        });
      }
    });
  },
  computed: {
    curIdx() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0;
    },
    selectFoods() {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  },
  methods: {
    selectFood(food) {
        this.selectedFood = food;
        this.$refs.food.show();
    },
    addFood(el) {
        this.$nextTick(() => {
            this.$refs.shopcart.drop(el);
        });
    },
    _initScroll() {
      this.menuScroll = new Scroll(this.$refs['menu-wrapper'], {
        click: true
      });
      this.foodScroll = new Scroll(this.$refs['foods-wrapper'], {
        click: true,
        probeType: 3
      });

      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        this.justifyMenuPosition();
      });
    },
    justifyMenuPosition() {
      let menuList = this.$refs['menu-wrapper'].getElementsByClassName('menu-item-hook');
      let el = menuList[this.curIdx];
      this.menuScroll.scrollToElement(el, 300);
    },
    calcZoneHeight() {
        let foodList = this.$refs['foods-wrapper'].getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
    },
    selectMenu(idx) {
        let foodList = this.$refs['foods-wrapper'].getElementsByClassName('food-list-hook');
        let el = foodList[idx];
        this.foodScroll.scrollToElement(el, 300);
    }
  },
  components: {
    'v-shopcart': ShopCart,
    'v-cartconcrol': CartControl,
    'v-food': Food
  }
};
</script>

<style lang="less">
    @import url('../../common/css/base.less');
    .goods{
        position: absolute;
        width: 100%;
        top: 174px;
        bottom: 46px;
        display: flex;
        overflow: hidden;
        .menu-wrapper{
            flex:0 0 80px;
            width: 80px;
            background:#f3f5f7;
            .menu-item{
                display: table;
                height: 54px;
                width: 56px;
                line-height: 14px;
                padding: 0 12px;
                &.current{
                    position: relative;
                    margin-top: -1px;
                    z-index: 10;
                    background: #fff;
                    font-weight: bold;
                    .text{
                        &.fixedBorder{
                            &:after{
                                border:none;
                            }
                        }
                    }
                }
                &:last-child {
                    .fixedBorder:after{
                        border:none!important;
                    }
                }
                .icon{
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    vertical-align: top;
                    margin-right: 2px;
                    background-size: 12px 12px;
                    background-repeat: no-repeat;
                    &.decrease{
                        .bg-image("img/decrease_3");
                    }
                    &.discount{
                        .bg-image("img/discount_3");
                    }
                    &.guarantee{
                        .bg-image("img/guarantee_3");
                    }
                    &.invoice{
                        .bg-image("img/invoice_3");
                    }
                    &.special{
                        .bg-image("img/special_3");
                    }
                }
                .text{
                    font-size: 12px;
                    display: table-cell;
                    width: 56px;
                    vertical-align: middle;
                    &.fixedBorder{
                        .fixedBorderPixel2(rgba(7,17,27,0.2));
                    }
                }
            }
        }
        .foods-wrapper{
            flex: 1;
            .title{
                padding-left: 14px;
                height: 26px;
                line-height: 26px;
                border-left:2px solid #d9dde1;
                font-size: 12px;
                color: rgb(147,153,159);
                background: #f3f5f7;
            }
            .food-item{
                display: flex;
                margin: 18px;
                padding-bottom: 18px;
                position: relative;
                &.fixedBorder{
                    .fixedBorderPixel(rgba(7,17,27,0.2));
                }
                &:last-child{
                    margin-bottom: 0;
                }
                .icon{
                    flex:0 0 57px;
                    margin-right: 10px;
                }
                .content{
                    flex:1;
                    .name{
                        margin: 2px 0 8px;
                        height: 14px;
                        line-height: 14px;
                        font-size: 14px;
                        color:rgb(7,17,27);
                    }
                    .desc,.extra{
                        line-height: 10px;
                        font-size: 10px;
                        color: rgb(147,153,159);
                    }
                    .desc{
                        line-height: 12px;
                        margin-bottom: 8px;
                    }
                    .extra{
                        .count{
                            margin-right: 12px;
                        }
                    }
                    .price{
                        font-weight: 700;
                        line-height: 24px;
                        .now{
                            margin-right: 8px;
                            font-size: 14px;
                            color: rgb(240,20,20);
                        }
                        .old{
                            text-decoration: line-through;
                            font-size: 10px;
                            color: rgb(147,153,159);
                        }
                    }
                    .cartcontrol-wrapper{
                        position: absolute;
                        right: 0;
                        bottom: 12px;
                    }
                }
            }
        }
    }
</style>