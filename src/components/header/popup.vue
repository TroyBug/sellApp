<template>
    <div class="detail">
        <div class="detail-wrapper clearfix">
            <div class="detail-main">
                <h1 class="name">{{seller.name}}</h1>
                <div class="star-wrapper">
                    <v-star :size="48" :score="seller.score"></v-star>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">优惠信息</div>
                        <div class="line"></div>
                    </div>
                    <ul v-if="seller.supports" class="supports">
                        <li class="support-item" v-for="item in seller.supports">
                            <span class="icon" :class="classMap[item.type]"></span>
                            <span class="text">{{item.description}}</span>
                        </li>
                    </ul>
                    <div class="title">
                        <div class="line"></div>
                        <div class="text">商家公告</div>
                        <div class="line"></div>
                    </div>
                    <div class="bulletin">
                        <p class="content">{{seller.bulletin}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-close" @click="hideDetail">
            <i class="icon-close"></i>
        </div>
    </div>
</template>

<script>
  import Star from '@components/star/star.vue';
  export default {
    props: {
      seller: {
        type: Object
      },
      classMap: {
        type: Array
      }
    },
    data() {
      return {};
    },
    methods: {
      hideDetail() {
        this.$emit('hide-panel');
      }
    },
    components: {
      'v-star': Star
    }
  };
</script>

<style lang="less">
    @import url('../../../src/common/css/base.less');
    .header .detail{
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
        top: 0;
        left: 0;
        transition:all .5s;
        background:rgba(7,17,27,0.8);
        -webkit-backdrop-filter: blur(10px);
        &.fade-transiton{
            opacity: 1;
        }
        &.fade-enter,&.fade-leave-active{
            opacity: 0;
        }
        .detail-wrapper{
            min-height: 100%;
            .detail-main{
                padding-top: 64px;
                padding-bottom: 64px;
                .name{
                    line-height: 16px;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 700;
                }
                .star-wrapper{
                    margin-top: 18px;
                    padding: 2px 0;
                    text-align: center;
                    .title {
                        width: 80%;
                        margin: 28px auto 24px auto;
                        display: flex;
                        .line{
                            flex: 1;
                            position: relative;
                            top: -6px;
                            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                        }
                        .text{
                            padding: 0 12px;
                            font-size: 14px;
                            font-weight: 700;
                        }
                    }
                    .supports{
                        width: 80%;
                        margin: 0 auto;
                        text-align: left;
                        .support-item{
                            padding: 0 12px;
                            margin-bottom: 12px;
                            font-size: 0;
                            &:last-child{
                                margin-bottom: 0;
                            }
                            .icon{
                                display: inline-block;
                                width: 16px;
                                height: 16px;
                                vertical-align: top;
                                margin-right: 6px;
                                background-size: 16px 16px;
                                background-repeat: no-repeat;
                                &.decrease{
                                    .bg-image("./img/decrease_2");
                                }
                                &.discount{
                                    .bg-image("./img/discount_2");
                                }
                                &.guarantee{
                                    .bg-image("./img/guarantee_2");
                                }
                                &.invoice{
                                    .bg-image("./img/invoice_2");
                                }
                                &.special{
                                    .bg-image("./img/special_2");
                                }
                            }
                            .text{
                                font-size: 12px;
                                line-height: 16px;
                            }
                        }
                    }
                    .bulletin{
                        width: 80%;
                        margin: 0 auto;
                        text-align: left;
                        .content{
                            padding: 0 12px;
                            line-height: 24px;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
        .detail-close{
            position: relative;
            width: 32px;
            height: 32px;
            margin: -64px auto 0;
            clear: both;
            font-size: 32px;

        }
    }
</style>