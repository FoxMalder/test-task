(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ddd51f4"],{"176a":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"serialPage"},[a.serialData?e("TheSerial",{attrs:{serialData:a.serialData}}):e("BaseSpinner",{staticClass:"spinner--size--giant"})],1)},i=[],r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"serial"},[e("router-link",{staticClass:"serial__back-link",attrs:{to:"/"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 492 492"}},[e("path",{attrs:{fill:"white",d:"M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124\n    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844\n    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412\n    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008\n    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788\n    C492,219.198,479.172,207.418,464.344,207.418z"}})])]),e("img",{staticClass:"serial__img",attrs:{src:a.serialData.image.medium,alt:a.serialData.name}}),e("div",{staticClass:"serial__info"},[e("h4",[a._v(a._s(a.serialData.name))]),e("p",{staticClass:"serial__summary",domProps:{innerHTML:a._s(a.serialSummary)}})])],1)},n=[],l={name:"TheSerial",props:{serialData:{type:Object,required:!0}},computed:{serialSummary:function(){return this.serialData.summary}}},c=l,u=(e("e639"),e("2877")),o=Object(u["a"])(c,r,n,!1,null,null,null),m=o.exports,p={name:"SerialPage",components:{TheSerial:m},computed:{serialData:function(){return this.$store.state.serial},serialId:function(){return this.$route.params.id}},mounted:function(){this.$store.dispatch("getSerial",this.serialId)},beforeDestroy:function(){this.$store.commit("clearSerial")}},d=p,h=Object(u["a"])(d,s,i,!1,null,null,null);t["default"]=h.exports},"74bb":function(a,t,e){},e639:function(a,t,e){"use strict";var s=e("74bb"),i=e.n(s);i.a}}]);
//# sourceMappingURL=chunk-1ddd51f4.e2aae56a.js.map