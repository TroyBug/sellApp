<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click.stop.prevent="decreaseCart"></div>
        </transition>
        <transition name="move">
            <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        </transition>
        <div ref="cartAdd" class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
    </div>
</template>

<script>
    // reference goods.vue
    import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
          this.food.count = 1;
        } else {
          this.food.count++;
        }
        this.$emit('add-food', this.$refs.cartAdd);
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="less">
    .cartcontrol{
        font-size: 0;
        .cart-decrease, .cart-add{
            padding: 6px;
            display: inline-block;
            line-height: 24px;
            font-size: 24px;
            color: rgb(0,160,220);
        }
        .cart-decrease,.cart-count{
            transition:all .4s;
            &.move-transiton{
                opacity: 1;
                transform: translate3d(0,0,0) rotate(0);
            }
            &.move-enter,&.move-leave-active{
                opacity: 0;
                transform: translate3d(24px,0,0) rotate(180deg);
            }
        }
        .cart-count{
            display: inline-block;
            vertical-align: top;
            width: 12px;
            padding-top: 6px;
            line-height: 24px;
            text-align: center;
            font-size: 10px;
            color: rgb(147,153,159);
        }
    }

</style>