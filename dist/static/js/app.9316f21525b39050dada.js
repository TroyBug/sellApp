webpackJsonp([1],{0:function(t,s){},"0Sck":function(t,s){},"0YDf":function(t,s){},Bc3A:function(t,s){},KeQp:function(t,s){},NHnr:function(t,s,e){"use strict";function i(t){e("WXLj")}function a(t){e("hc3K")}function n(t){e("xMT2")}function o(){var t=window.location.search,s={},e=/[?&][^?&]*=[^?&]*/g,i=t.match(e);return i&&i.forEach(function(t){var e=t.substring(1).split("="),i=decodeURIComponent(e[0]),a=decodeURIComponent(e[1]);s[i]=a}),s}function r(t){e("QqGs")}function l(t){e("kBpX")}function c(t){e("0Sck")}function v(t){e("0YDf")}function d(t){e("Bc3A")}function u(t,s){/(y+)/.test(s)&&(s=s.replace(RegExp.$1,t.getFullYear()+"").substr(4-RegExp.$1.length));var e={"M+":t.getMonth()+1,"d+":t.getDay(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:p(a))}return s}function p(t){return("00"+t).substr(t.length)}function f(t){e("KeQp")}function h(t){e("XmpR")}function _(t){e("o3z5")}function m(t,s,e){var i=localStorage.__seller__;i?(i=JSON.parse(i),i.id||(i[t]={})):(i={},i[t]={}),i[t][s]=e,localStorage.__seller__=ms()(i)}function C(t,s,e){var i=window.localStorage.__seller__;return i&&(i=JSON.parse(i)[t])?i[s]||e:e}function g(t){e("pBUq")}Object.defineProperty(s,"__esModule",{value:!0});var w=e("7+uW"),y=e("woOf"),x=e.n(y),k={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t})}))},T=[],P={render:b,staticRenderFns:T},$=P,S=e("VU/8"),E=i,N=S(k,$,!1,E,null,null),F=N.exports,B={props:{seller:{type:Object},classMap:{type:Array}},data:function(){return{}},methods:{hideDetail:function(){this.$emit("hide-panel")}},components:{"v-star":F}},M=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("v-star",{attrs:{size:48,score:t.seller.score}}),t._v(" "),t._m(0,!1,!1),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),t._m(1,!1,!1),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])],1)])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])},O=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})])}],R={render:M,staticRenderFns:O},D=R,U=e("VU/8"),H=a,j=U(B,D,!1,H,null,null),V=j.exports,z={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},methods:{showPanel:function(){this.detailShow=!0},hidePanel:function(){this.detailShow=!1}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},components:{"v-popup":V}},A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showPanel}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"backgroundImg"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("v-popup",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],attrs:{seller:t.seller,classMap:t.classMap},on:{"hide-panel":t.hidePanel}})],1)],1)},X=[],Y={render:A,staticRenderFns:X},q=Y,I=e("VU/8"),L=n,Q=I(z,q,!1,L,null,null),K=Q.exports,G={data:function(){return{seller:{id:function(){return o().id}()}}},created:function(){var t=this;this.$http.get("api/seller?id="+this.seller.id).then(function(s){s=s.data,0===s.errno&&(t.seller=x()({},t.seller,s.data))})},components:{"v-header":K}},J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("menu",[e("ul",{staticClass:"menu fixedBorder"},[e("li",{staticClass:"item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("li",{staticClass:"item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("li",{staticClass:"item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)])]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},W=[],Z={render:J,staticRenderFns:W},tt=Z,st=e("VU/8"),et=r,it=st(G,tt,!1,et,null,null),at=it.exports,nt=e("/ocq"),ot=e("GQaK"),rt={props:{food:{type:Object}},methods:{addCart:function(){this.food.count?this.food.count++:(w.a.set(this.food,"count",1),this.food.count=1),this.$emit("add-food",this.$refs.cartAdd)},decreaseCart:function(){this.food.count&&this.food.count--}}},lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease icon-remove_circle_outline",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart(s)}}})]),t._v(" "),e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))])]),t._v(" "),e("div",{ref:"cartAdd",staticClass:"cart-add icon-add_circle",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}})],1)},ct=[],vt={render:lt,staticRenderFns:ct},dt=vt,ut=e("VU/8"),pt=l,ft=ut(rt,dt,!1,pt,null,null),ht=ft.exports,_t={data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},props:{selectFoods:{type:Array,default:function(){return[]}},"delivery-price":{type:Number,default:0},"min-price":{type:Number,default:0}},methods:{toggleList:function(){this.totalPrice.count&&(this.fold=!this.fold)},drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){this.balls.filter(function(t){return!0===t.show}).forEach(function(s){var e=s.el.getBoundingClientRect(),i=e.left-32,a=-(window.innerHeight-e.top-22);t.style.display="",t.style.transform="translate3d(0,"+a+"px,0)",t.getElementsByClassName("inner-hook")[0].style.transform="translate3d("+i+"px,0,0)"})},enter:function(t){t.offsetHeight;this.$nextTick(function(){t.style.transform="translate3d(0,0,0)",t.getElementsByClassName("inner-hook")[0].style.transform="translate3d(0,0,0)"})},afterEnter:function(t){this.dropBalls.map(function(s){s.show=!1,t.style.display="none"})},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice.total<this.minPrice||alert("支付"+this.totalPrice.total+"元")}},computed:{listShow:function(){var t=this;if(!this.totalPrice.count)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new ot.a(t.$refs["list-content"],{click:!0})}),s},totalPrice:function(){var t=0,s=0;return this.selectFoods.forEach(function(e){t+=e.price*e.count,s+=e.count}),{total:t,count:s}},payDesc:function(){if(0===this.totalPrice.total)return"￥"+this.minPrice+"元起送";if(this.totalPrice.total<this.minPrice){return"还差￥"+(this.minPrice-this.totalPrice.total)+"元起送"}return"去结算"},payClass:function(){return this.totalPrice.total<this.minPrice?"not-enough":"enough"}},components:{"v-cartcontrol":ht}},mt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalPrice.count>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalPrice.count>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalPrice.count>0,expression:"totalPrice.count > 0"}],staticClass:"num"},[t._v(t._s(t.totalPrice.count))])]),t._v(" "),e("div",{staticClass:"price",class:{highlight:t.totalPrice.count>0}},[t._v("￥"+t._s(t.totalPrice.total))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n                    "+t._s(t.payDesc)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},[e("transition-group",{attrs:{name:"ballAnim"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},t._l(t.balls,function(t){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:t.show,staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])}))],1),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"list-content",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food fixedBorder"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("v-cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},Ct=[],gt={render:mt,staticRenderFns:Ct},wt=gt,yt=e("VU/8"),xt=c,kt=yt(_t,wt,!1,xt,null,null),bt=kt.exports,Tt={},Pt=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"split"})},$t=[],St={render:Pt,staticRenderFns:$t},Et=St,Nt=e("VU/8"),Ft=v,Bt=Nt(Tt,Et,!1,Ft,null,null),Mt=Bt.exports,Ot={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},contentOnly:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",good:"满意",bad:"不满意"}}}},methods:{select:function(t){this.selectType=t,this.$emit("ratingtypeselect",t)},toggleContent:function(){this.contentOnly=!this.contentOnly,this.$emit("contenttoggle",this.contentOnly)}},computed:{goodCount:function(){return this.ratings.filter(function(t){return 0===t.rateType})},badCount:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},Rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type fixedBorderPixel2"},[e("span",{staticClass:"block good",class:{active:2===t.selectType},on:{click:function(s){t.select(2)}}},[t._v(t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block good",class:{active:0===t.selectType},on:{click:function(s){t.select(0)}}},[t._v(t._s(t.desc.good)),e("span",{staticClass:"count"},[t._v(t._s(t.goodCount.length))])]),t._v(" "),e("span",{staticClass:"block bad",class:{active:1===t.selectType},on:{click:function(s){t.select(1)}}},[t._v(t._s(t.desc.bad)),e("span",{staticClass:"count"},[t._v(t._s(t.badCount.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.contentOnly},on:{click:t.toggleContent}},[e("i",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},Dt=[],Ut={render:Rt,staticRenderFns:Dt},Ht=Ut,jt=e("VU/8"),Vt=d,zt=jt(Ot,Ht,!1,Vt,null,null),At=zt.exports,Xt={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,contentOnly:!0,desc:{all:"全部",good:"推荐",bad:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.contentOnly=!1,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new ot.a(t.$refs.food,{click:!0})})},needShow:function(t,s){return!(this.contentOnly&&!s)&&(2===this.selectType||t===this.selectType)},hide:function(){this.showFlag=!1},addFirst:function(){w.a.set(this.food,"count",1)},ratingTypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},contentToggle:function(t){var s=this;this.contentOnly=t,this.$nextTick(function(){s.scroll.refresh()})}},filters:{formatDate:function(t){return u(new Date(t),"yyyy-MM-dd hh:mm")}},components:{"v-cartcontrol":ht,"v-split":Mt,"v-ratingselect":At}},Yt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fMove"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image,alt:""}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("v-cartcontrol",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"aniBuy"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],ref:"buyButton",staticClass:"buy",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("v-split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("v-split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("v-ratingselect",{attrs:{selectType:t.selectType,contentOnly:t.contentOnly,ratings:t.food.ratings,desc:t.desc},on:{ratingtypeselect:t.ratingTypeSelect,contenttoggle:t.contentToggle}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item fixedBorderPixel2"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{src:s.avatar,width:"12",height:"12",alt:""}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n                            ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||0===t.food.ratings.length,expression:"!food.ratings || food.ratings.length === 0"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},qt=[],It={render:Yt,staticRenderFns:qt},Lt=It,Qt=e("VU/8"),Kt=f,Gt=Qt(Xt,Lt,!1,Kt,null,null),Jt=Gt.exports,Wt={props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},created:function(){var t=this;this.classMap=["decrease","discount","guarantee","invoice","special"],this.$http.get("/api/goods").then(function(s){s=s.data,0===s.errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t.calcZoneHeight()}))})},computed:{curIdx:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{selectFood:function(t){this.selectedFood=t,this.$refs.food.show()},addFood:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},_initScroll:function(){var t=this;this.menuScroll=new ot.a(this.$refs["menu-wrapper"],{click:!0}),this.foodScroll=new ot.a(this.$refs["foods-wrapper"],{click:!0,probeType:3}),this.foodScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y)),t.justifyMenuPosition()})},justifyMenuPosition:function(){var t=this.$refs["menu-wrapper"].getElementsByClassName("menu-item-hook"),s=t[this.curIdx];this.menuScroll.scrollToElement(s,300)},calcZoneHeight:function(){var t=this.$refs["foods-wrapper"].getElementsByClassName("food-list-hook"),s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight,this.listHeight.push(s)}},selectMenu:function(t){var s=this.$refs["foods-wrapper"].getElementsByClassName("food-list-hook"),e=s[t];this.foodScroll.scrollToElement(e,300)}},components:{"v-shopcart":bt,"v-cartconcrol":ht,"v-food":Jt}},Zt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods",attrs:{id:"goods"}},[e("div",{ref:"menu-wrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{staticClass:"menu-item menu-item-hook",class:{current:t.curIdx===i},on:{click:function(s){t.selectMenu(i)}}},[e("span",{staticClass:"text fixedBorder"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v(t._s(s.name)+"\n                ")])])}))]),t._v(" "),e("div",{ref:"foods-wrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item fixedBorder",on:{click:function(e){t.selectFood(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"64",height:"64",alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("月售"+t._s(s.sellCount)+"份")]),e("span",[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("v-cartconcrol",{attrs:{food:s},on:{"add-food":t.addFood}})],1)])])}))])}))]),t._v(" "),e("v-shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}}),t._v(" "),e("v-food",{ref:"food",attrs:{food:t.selectedFood}})],1)},ts=[],ss={render:Zt,staticRenderFns:ts},es=ss,is=e("VU/8"),as=h,ns=is(Wt,es,!1,as,null,null),os=ns.exports,rs={props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,contentOnly:!0,desc:{all:"全部",good:"满意",bad:"不满意"}}},methods:{ratingTypeSelect:function(t){var s=this;this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},contentToggle:function(t){var s=this;this.contentOnly=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.contentOnly&&!s)&&(2===this.selectType||t===this.selectType)},_initScroll:function(){this.scroll=new ot.a(this.$refs.ratings,{click:!0})}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){s=s.data,0===s.errno&&(t.ratings=s.data,t.$nextTick(function(){t._initScroll()}))})},filters:{formatDate:function(t){return u(new Date(t),"yyyy-MM-dd hh:mm")}},components:{"v-star":F,"v-split":Mt,"v-ratingselect":At}},ls=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"scroe-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("v-star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"scroe-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("v-star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("v-split"),t._v(" "),e("v-ratingselect",{attrs:{selectType:t.selectType,contentOnly:t.contentOnly,ratings:t.ratings,desc:t.desc},on:{contenttoggle:t.contentToggle,ratingtypeselect:t.ratingTypeSelect}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,function(s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],staticClass:"rating-item fixedBorderPixel2"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar,alt:""}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("v-star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formatDate")(s.rateTime)))])])])}))])],1)])},cs=[],vs={render:ls,staticRenderFns:cs},ds=vs,us=e("VU/8"),ps=_,fs=us(rs,ds,!1,ps,null,null),hs=fs.exports,_s=e("mvHQ"),ms=e.n(_s),Cs={props:{seller:{type:Object}},data:function(){var t=this;return{favorite:function(){return C(t.seller.id,"favorite",!1)}()}},created:function(){this.classMap=["decrease","discount","guarantee","invoice","special"]},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},watch:{seller:function(){var t=this;this.$nextTick(function(){t._initPics()})}},methods:{toggleFavorite:function(){this.favorite=!this.favorite,m(this.seller.id,"favorite",this.favorite)},_initPics:function(){if(this.seller.pics){var t=126*this.seller.pics.length-6;this.$refs["pic-list"].style.width=t+"px",this.picScroll?this.picScroll.refresh():this.picScroll=new ot.a(this.$refs["pics-wrapper"],{scrollX:!0,eventPassthrough:"vertical"})}}},mounted:function(){this.scroll=new ot.a(this.$refs.seller,{click:!0}),this._initPics()},components:{"v-star":F,"v-split":Mt}},gs=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"desc fixedBorderPixel2"},[e("v-star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice)+"元")])])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice)+"元")])])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("v-split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper fixedBorderPixel2"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item fixedBorderPixel2"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e()]),t._v(" "),e("v-split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"pics-wrapper",staticClass:"pics-wrapper"},[e("ul",{ref:"pic-list",staticClass:"pic-list"},t._l(t.seller.pics,function(t){return e("li",{staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90",alt:""}})])}))])]),t._v(" "),e("v-split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title fixedBorderPixel2"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s){return e("li",{staticClass:"info-item fixedBorderPixel2"},[t._v(t._s(s))])}))])],1)])},ws=[],ys={render:gs,staticRenderFns:ws},xs=ys,ks=e("VU/8"),bs=g,Ts=ks(Cs,xs,!1,bs,null,null),Ps=Ts.exports;w.a.use(nt.a);var $s=new nt.a({mode:"history",linkActiveClass:"current",routes:[{path:"/",redirect:"/goods"},{path:"/goods",name:"goods",component:os},{path:"/ratings",name:"ratings",component:hs},{path:"/seller",name:"seller",component:Ps}]}),Ss=e("ORbq");w.a.config.productionTip=!1,w.a.use(Ss.a),new w.a({el:"#app",router:$s,template:"<app/>",components:{app:at}}).$mount("#app")},QqGs:function(t,s){},WXLj:function(t,s){},XmpR:function(t,s){},hc3K:function(t,s){},kBpX:function(t,s){},o3z5:function(t,s){},pBUq:function(t,s){},xMT2:function(t,s){}},["NHnr"]);