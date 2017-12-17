<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <menu>
      <ul class="menu fixedBorder">
        <li class="item"><router-link to="/goods">商品</router-link></li>
        <li class="item"><router-link to="/ratings">评论</router-link></li>
        <li class="item"><router-link to="/seller">商家</router-link></li>
      </ul>
    </menu>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from './components/header/header.vue';
import {urlParse} from './common/js/utils.js';
const ERR_OK = 0;

export default {
    data() {
        return {
          seller: {
            id: (() => {
              let queryParam = urlParse();
              return queryParam.id;
            })()
          }
        };
    },
    created() {
        this.$http.get('api/seller?id=' + this.seller.id).then((res) => {
            res = res.data;
            if (res.errno === ERR_OK) {
                this.seller = Object.assign({}, this.seller, res.data);
            }
        });
    },
    components: {
        'v-header': Header
    }
};
</script>

<style lang="less">
  @import "common/css/base.less";
  .menu{
    display:flex;
    flex-flow: row wrap;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    li{
      flex: 1 30%;
      text-align: center;
      a{
        display: block;
        color:rgb(65,80,66);
        font-size: 14px;
        &.current{
          color: rgb(240,20,20);
        }
      }
    }
  }
  .fixedBorder{
    .fixedBorderPixel2(#f44c1a);
  }
  @media (-webkit-max-device-pixel-ratio: 1) {
    .menu{
      border-bottom: 1px solid rgba(244, 76, 26, 1);
    }
  }
</style>
