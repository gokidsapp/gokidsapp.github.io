!function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],f=0,m=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(p&&p(t);m.length;)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={popup_main:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=s;i.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("0a3d")},"0a3d":function(e,t,n){"use strict";n.r(t),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7db0"),n("d3b7");var r=n("2b0e"),a=n("b85c"),i=(n("d81d"),n("a434"),n("e9c4"),n("fb6a"),n("498a"),n("4de4"),n("ac1f"),n("841c"),n("da7e")),o=n.n(i),c=n("ba5f"),s=n("d7ac"),u=n.n(s),p=n("1157"),f=n.n(p),m={data:function(){return{item:{cn:"",en:"",img:""},items:o.a.get("dicts")||[],map:{},busy:0,page:0,pages:1,pageSize:10}},mounted:function(){var e=this;chrome.runtime.onMessage.addListener((function(t,n,r){t&&"image"==t.contents._page&&t.contents.value&&(e.item.img=t.contents.value,r(t),e.item.cn&&e.item.en&&e.item.img&&e.save())}));for(var t=0;t<this.items.length;t++)this.map[this.items[t].en]>=0?(this.items.splice(t,1),t--):this.map[this.items[t].en]=t},methods:{upload:function(){Object(c.b)(null,{cmd:"upload",content:{items:this.items}},(function(e){e&&alert(JSON.stringify(e))}))},download:function(){var e=this;f.a.ajax({url:"https://smlog.github.io/data/dict.js",dataType:"jsonp",jsonpCallback:"cb"}).done((function(t){var n,r=JSON.parse(u.a.ungzip(atob(t),{to:"string"})).items,i=Object(a.a)(r);try{for(i.s();!(n=i.n()).done;){var o=n.value,c=void 0;this.map[o.en]<0&&(c={},e.items.push(c),Object.assign(c,o),e.page=1,e.map[c.en]=e.items.length-1)}}catch(e){i.e(e)}finally{i.f()}}))},pageList:function(){var e=this.searchItems();if(e.length>0){var t=-this.page*this.pageSize,n=-this.page*this.pageSize+this.pageSize;e=0==n?e.slice(t):e.slice(t,n)}return e.reverse()},searchItems:function(){var e=this;return this.item.en.trim()?this.items.filter((function(t){return t.en.indexOf(e.item.en)>-1})):this.items},clearItem:function(){this.item.en="",this.item.img="",this.item.cn=""},selectItem:function(e){Object.assign(this.item,e)},loadMore:function(){var e=this;this.busy=!0,setTimeout((function(){e.busy=e.pages>0&&e.page>=e.pages,e.busy||e.page++}),1e3)},search:function(e){e&&chrome.runtime.sendMessage({_page:"ui",value:e},(function(e){}))},trans:function(){var e=this;this.page=1,this.search(e.item.en),e.item.en&&Object(c.b)(null,{cmd:"translate",content:{q:this.item.en}},(function(t){t&&t.length>0&&t.filter((function(e){return"BD"==e.src})).length>0&&(e.item.cn=t.filter((function(e){return"BD"==e.src}))[0].to)}))},save:function(){var e,t=this.map[this.item.en];t>=0?(e=this.items[t],Object.assign(e,this.item)):(e={},this.items.push(e),Object.assign(e,this.item),this.page=1,this.map[e.en]=this.items.length-1),o.a.set("dicts",this.items)},del:function(e){if(e&&confirm("delete?")){var t=this.map[e.en];t>=0&&this.items.splice(t,1),delete this.map[e.en],o.a.set("dicts",this.items)}}},components:{}},d=(n("b42a"),n("2877")),l=Object(d.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{display:"flex",flex:"1"}},[n("div",[n("table",[n("tr",[n("td",{on:{click:function(t){return e.search(e.item.en)}}},[e._v("En")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.en,expression:"item.en"}],domProps:{value:e.item.en},on:{focus:function(t){return e.clearItem()},blur:function(t){return e.trans()},input:function(t){t.target.composing||e.$set(e.item,"en",t.target.value)}}})])]),n("tr",[n("td",{on:{click:function(t){return e.search(e.item.cn)}}},[e._v("Cn")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.cn,expression:"item.cn"}],domProps:{value:e.item.cn},on:{input:function(t){t.target.composing||e.$set(e.item,"cn",t.target.value)}}})])]),n("tr",[n("td",[e._v("Img")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.item.img,expression:"item.img"}],domProps:{value:e.item.img},on:{input:function(t){t.target.composing||e.$set(e.item,"img",t.target.value)}}})])]),n("tr",[n("td"),n("td",[n("a",{on:{click:function(t){return e.save()}}},[e._v(" Save")])])])])]),n("div",[n("img",{staticStyle:{width:"120px",height:"120px","border-radius":"10px","margin-left":"10px"},attrs:{src:e.item.img}})])]),n("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticStyle:{"border-top":"1px dash #ccc","user-select":"none"},attrs:{"infinite-scroll-disabled":"busy","infinite-scroll-distance":"30"}},[n("ul",e._l(e.pageList(),(function(t,r){return n("li",{key:t.en,staticStyle:{display:"flex"},on:{click:function(n){return e.selectItem(t)}}},[n("div",[n("img",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.img}})]),n("div",[e._v(" "+e._s((e.page-1)*e.pageSize+r+1)+" "+e._s(t.en)+"|"+e._s(t.cn)+" "),n("a",{staticStyle:{cursor:"pointer",color:"red"},on:{click:function(n){return e.del(t)}}},[e._v("Delete")])])])})),0),n("div",{staticStyle:{position:"fixed",bottom:"0",right:"0","text-align":"right",margin:"5px","user-select":"none"}},[e.page>=1?n("a",{staticClass:"ctrl",staticStyle:{cursor:"pointer",color:"blue","font-weight":"bold"},on:{click:function(t){e.page=e.page-1}}},[e._v(" Prev ")]):e._e(),e.page<=parseInt((e.items.length+1)/e.pageSize)?n("a",{staticClass:"ctrl",staticStyle:{cursor:"pointer",color:"blue","font-weight":"bold"},on:{click:function(t){e.page=e.page+1}}},[e._v(" Next ")]):e._e(),e._v(" Total:"+e._s(e.items.length)+" "),n("a",{on:{click:function(t){return e.upload()}}},[e._v("Upload")]),n("a",{on:{sync:function(t){return e.download()}}},[e._v("Download")])])])])}),[],!1,null,"402f8888",null).exports,h=n("487a"),g=n.n(h);if(chrome.runtime.sendMessage({_page:"1"},(function(e){})),location.href.indexOf("image.baidu.com")>-1)f()((function(){f()("body").on("click",".imgitem",(function(){return chrome.runtime.sendMessage({_page:"image",value:f()(this).find("img").eq(0).attr("data-imgurl")},(function(e){})),!1})),chrome.runtime.onMessage.addListener((function(e,t,n){e&&"ui"==e.contents._page&&e.contents.value&&(n(e),f()("#kw").val(e.contents.value),f()("#kw").closest("form").trigger("submit"))})),f()(document).on("scroll",(function(){f()(".newfcImgli").remove(),f()(".imgitem img").each((function(){var e=f()(this).closest(".imgbox");if(e.find(".mark").length>0)return!0;e.prepend('<input class="mark" style="position:absolute;z-index:1000;" type="checkbox"/>')}))}))}));else{r.a.prototype.$http=o.a,r.a.prototype.$storejs=o.a,r.a.use(g.a);var v=document.createElement("div"),b="dictword_app";v.setAttribute("id",b),document.body.appendChild(v),new r.a({render:function(e){return e(l)}}).$mount("#"+b)}},b42a:function(e,t,n){"use strict";n("ba05")},ba05:function(e,t,n){},ba5f:function(e,t,n){"use strict";n.d(t,"b",(function(){return H})),n.d(t,"a",(function(){return Y}));var r=n("2909"),a=n("1da1"),i=(n("96cf"),n("d3b7"),n("a15b"),n("ac1f"),n("00b4"),n("4de4"),n("498a"),n("d81d"),n("b0c0"),n("a434"),n("99af"),n("e9c4"),n("4e82"),n("bc3a")),o=n.n(i);n("fb6a"),n("1276");var c=n("1157"),s=n.n(c),u=n("da7e"),p=n.n(u),f=new(n("2b0e").a),m=(n("a630"),n("3ca3"),n("a9e3"),n("466d"),n("25f0"),n("6821")),d=n.n(m),l="20181025000225318",h="s0rbKVj44RcEH9m4yXrf";function g(){return chrome&&chrome.runtime&&chrome.runtime.sendMessage}function v(e,t){return b.apply(this,arguments)}function b(){return(b=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},a=0,e.prev=3,!chrome.tabs){e.next=9;break}return e.next=7,O(t,n);case 7:r=e.sent,a=1;case 9:e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),r.error=e.t0,a=0;case 16:if(a){e.next=21;break}return e.next=19,y(t);case 19:(i=e.sent)&&(r=Object.assign(r,i));case 21:return r.src="BD",e.abrupt("return",r);case 23:case"end":return e.stop()}}),e,null,[[3,11]])})))).apply(this,arguments)}function y(e){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,r,a,i,o,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(new Date).getTime(),r=d()(l+t+n+h),a="en",i="zh",o=g()?"json":"jsonp",c=0;case 6:if(!(c<3)){e.next=22;break}return e.prev=7,e.next=10,new Promise((function(e,c){s.a.ajax({url:"https://api.fanyi.baidu.com/api/trans/vip/translate",type:"get",dataType:o,timeout:5e3,data:{q:t,appid:l,salt:n,from:a,to:i,sign:r,tts:0,dict:0},success:function(t){e({from:t.trans_result[0].src,to:t.trans_result[0].dst})},error:function(e){c(e)}})}));case 10:return u=e.sent,e.abrupt("return",u);case 15:throw e.prev=15,e.t0=e.catch(7),e.t0;case 19:c++,e.next=6;break;case 22:case"end":return e.stop()}}),e,null,[[7,15]])})))).apply(this,arguments)}var w,k,j=function(e){function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function n(e,t){for(var n=0;n<t.length-2;n+=3){var r=t.charAt(n+2);r=r>="a"?r.charCodeAt(0)-87:Number(r),r="+"===t.charAt(n+1)?e>>>r:e<<r,e="+"===t.charAt(n)?e+r&4294967295:e^r}return e}var r=null;return function(e){var a=e.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);if(null===a){var i=e.length;i>30&&(e=""+e.substr(0,10)+e.substr(Math.floor(i/2)-5,10)+e.substr(-10,10))}else{for(var o=e.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/),c=0,s=o.length,u=[];s>c;c++)""!==o[c]&&u.push.apply(u,t(o[c].split(""))),c!==s-1&&u.push(a[c]);var p=u.length;p>30&&(e=u.slice(0,10).join("")+u.slice(Math.floor(p/2)-5,Math.floor(p/2)+5).join("")+u.slice(-10).join(""))}for(var f=""+String.fromCharCode(103)+String.fromCharCode(116)+String.fromCharCode(107),m=(null!==r?r:(r=window[f]||"")||"").split("."),d=Number(m[0])||0,l=Number(m[1])||0,h=[],g=0,v=0;v<e.length;v++){var b=e.charCodeAt(v);128>b?h[g++]=b:(2048>b?h[g++]=b>>6|192:(55296==(64512&b)&&v+1<e.length&&56320==(64512&e.charCodeAt(v+1))?(b=65536+((1023&b)<<10)+(1023&e.charCodeAt(++v)),h[g++]=b>>18|240,h[g++]=b>>12&63|128):h[g++]=b>>12|224,h[g++]=b>>6&63|128),h[g++]=63&b|128)}for(var y=d,x=""+String.fromCharCode(43)+String.fromCharCode(45)+String.fromCharCode(97)+String.fromCharCode(94)+String.fromCharCode(43)+String.fromCharCode(54),w=""+String.fromCharCode(43)+String.fromCharCode(45)+String.fromCharCode(51)+String.fromCharCode(94)+String.fromCharCode(43)+String.fromCharCode(98)+String.fromCharCode(43)+String.fromCharCode(45)+String.fromCharCode(102),k=0;k<h.length;k++)y=n(y+=h[k],x);return y=n(y,w),0>(y^=l)&&(y=2147483648+(2147483647&y)),(y%=1e6).toString()+"."+(y^d)}}();function O(e,t){return C.apply(this,arguments)}function C(){return(C=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=4;break}return e.next=4,o.a.get("https://fanyi.baidu.com/#/en/zh").then((function(e){return k=e.data.match(/window.gtk = '(.*?)'/)[1],w=e.data.match(/token: '(.*?)'/)[1],window.gtk=k,[k,w]}));case 4:return r={from:"en",to:"zh",query:t,transtype:"realtime",simple_means_flag:3,sign:j(t,k),token:w,domain:"common"},e.next=7,o()({url:"https://fanyi.baidu.com/v2transapi?from=en&to=zh",method:"post",data:r,transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t.substring(0,t.length-1)}],headers:{"Content-Type":"application/x-www-form-urlencoded",Origin:"https://fanyi.baidu.com",Referer:"https://fanyi.baidu.com/"}}).then((function(e){var t=e.data,n={};return t.dict_result?(n.to=t.trans_result.data[0].dst,n.am=t.dict_result.simple_means.symbols[0].am,t.dict_result.simple_means.symbols[0].en!=n.am&&(n.en=t.dict_result.simple_means.symbols[0].en),t.dict_result.simple_means.symbols&&(n.parts=t.dict_result.simple_means.symbols[0].parts)):t.trans_result&&(n.to=t.trans_result.data[0].dst),n}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n("b64b");var S=n("d7ac"),R=new(n("98fc"));function A(e){return JSON.parse(S.ungzip(atob(e),{to:"string"}))}function I(){return(I=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,r,a,i,o,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.url){e.next=2;break}return e.abrupt("return");case 2:return n="https://medium.ngtv.io/media/","https://fave.api.cnn.io",r="https://fave.api.cnn.io/v1/video?id="+t.vid+"&customer=cnn&edition=international&env=prod",e.next=7,fetch(r).then((function(e){return e.json()}));case 7:return a=e.sent,i=a.mediumId,o=n+i+"?appId=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImNubi1jbm4td2ViLTk1am96MCIsIm5ldHdvcmsiOiJjbm4iLCJwbGF0Zm9ybSI6IndlYiIsInByb2R1Y3QiOiJjbm4iLCJpYXQiOjE1MjQ2ODQwMzB9.Uw8riFJwARLjeE35ffMwSa-37RNxCcQUEp2pqwG9TvM",e.next=12,fetch(o).then((function(e){return e.json()}));case 12:c=e.sent,"",u=navigator.userAgent,s=/ipad|tablet/i.test(u)?"tablet":/mobile/i.test(u)?"phone":"desktop",a.closedCaptions&&a.closedCaptions.types&&(t.cc=a.closedCaptions.types.filter((function(e){return"webvtt"==e.format&&e.track&&e.track.url}))[0].track.url),t.url=c.media[s].unprotected.secureUrl;case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e){var t=(e.url||e.vid).match(/\d{4}\/\d{2}\/\d{2}/),n=t&&t.length>0&&t[0],r=new Date(n).getTime();return e.d=n,e.dt=r,e.i=0,e},M={crossOrigs:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=encodeURIComponent,e.next=3,fetch(t?"https://api.allorigins.win/raw?url="+a(n):n,{method:"get",headers:{}}).then((function(e){return"json"==r?e.json():e.text()})).then((function(e){return"xml"==r?R.xml2js(e):e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),mods:{videos:{m:{cnn:{ext:function(e){return I.apply(this,arguments)},res:[{type:"xml",urls:A("H4sIAAAAAAAAA6WQsQrDMAxE/yVzsArd8iulg2sJbCpbIZLT5O+ToUvGoOGGg7vHca8hm806ARAWK9JCaqekwlqQBDBahGd4/O2na2mkCgtxNEINW+VhvAfJFNmyCzELn6nk22GUfCt+sjC6CJSkSd1djO57oX+v9fcBtZyYihMCAAA="),conv:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var r,a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],a=0;a<t.videos.video.length;a++)i=t.videos.video[a],o={vid:i.id,title:i.headline,src:n},r.push(_(o));return e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{type:"json",urls:A("H4sIAAAAAAAAA4tWyigpKSi20tdPTcksyczP00vOA+L8XP2CnMTKnMziEv2S/ALdvNTyYt2yzJTU/GL9zLyU1Aq9rOL8PKVYAHICSjU/AAAA"),conv:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var r,a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],a=0;a<t.length;a++)i=t[a],o={vid:i.videoId,title:i.title,src:n},r.push(_(o));return e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]},cbs:{res:[{type:"json",crossOrig:1,urls:A("H4sIAAAAAAAAA62TwU4EIQyG32XPdvFgjPFVjAcGOgtZhpK2gL69w0STPcvcSEo//v9v+bgE1SLvxvTer26RjF2ujjbTokcyX4GNo5TQaaS8H7dCGbMapQKixBEFVmIgVXN5+i9tvwotpmRvCI08JKsoOqBwdIIn4gn+WlMCLFHI73ptVRrPzAgmpmxb5CqH4KFUXEBfE07mwFiIVU5ItCPeMXsYPZM4CdRBA0ItKa46SXt9hi3mus8YqCFr3PAEuxqiwEacY77BwjZ7nBkxNjxIJ6T36HcKxOhh9wVLqrOJjY0dqYnVyt5+/yU3gXx5g0CVp3et5gc9k7DVOjwWN9tRmaQNkNo7Uv39Ap8/+hmTQkEFAAA="),conv:function(e,t){return e.items.filter((function(e){return"vod"==e.type&&e.video2})).map((function(e){return _({vid:e.id,url:e.video2,title:e.fulltitle,cc:e.captions,src:t})}))}}]}}}}};function q(){return T.apply(this,arguments)}function T(){return(T=Object(a.a)(regeneratorRuntime.mark((function e(){var t,n,a,i,o,c,s,u,p,f,m,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(new Date).getTime(),n=Object.keys(M.mods.videos.m),a=[],i=0;case 4:if(!(i<n.length)){e.next=40;break}o=n[i],c=M.mods.videos.m[o],s=c.res,u=0;case 9:if(!(u<s.length)){e.next=37;break}p=s[u],f=0;case 12:if(!(f<p.urls.length)){e.next=34;break}return e.prev=13,m=p.urls[f],e.next=17,M.crossOrigs(p.crossOrig,m+"?t="+t,p.type);case 17:return d=e.sent,e.t0=a.push,e.t1=a,e.t2=r.a,e.next=23,p.conv(d,o);case 23:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4),e.next=31;break;case 28:e.prev=28,e.t5=e.catch(13);case 31:f++,e.next=12;break;case 34:u++,e.next=9;break;case 37:i++,e.next=4;break;case 40:return l=[],a.reduce((function(e,t){return e[t.vid]||(e[t.vid]=1,l.push(t)),e}),{}),e.abrupt("return",l);case 43:case"end":return e.stop()}}),e,null,[[13,28]])})))).apply(this,arguments)}Object.keys(M.mods.videos.m);var z="SMLOG",D=n("d7ac"),N="words",J="nwords",L=JSON.parse,P=s()('<iframe id="myaudio" style="display:none;"/>');P.appendTo("body");var U=P[0];window.pako=D,window.storejs=p.a;var F=U.contentDocument||U.contentWindow.document;F.body.innerHTML='<audio id="sound" controls "></audio>\n<audio id="bg" controls   ></audio>';var E=F.querySelector("audio#sound"),B=F.querySelector("audio#bg");o.a.defaults.timeout=5e3;var G=[function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g()?"json":"jsonp",e.next=3,new Promise((function(e,r){s.a.ajax({url:"https://fanyi.youdao.com/openapi.do",type:"GET",data:{keyfrom:"wangtuizhijia",key:"1048394636",type:"data",doctype:n,version:"1.1",q:t.q},dataType:n,success:function(t){if(0==t.errorCode){var n={to:t.translation[0],q:t.query,src:"YD"};t.basic&&(n.am=t.basic["uk-phonetic"],n.en=t.basic["us-phonetic"]),e(n)}else r(t)},error:function(t){e(t)}})}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t.q);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n={}).src="Dict",n.q=t.q,!1,e.next=8;break;case 8:return e.next=10,U.contentWindow.fetch("https://dict.iciba.com/dictionary/word/suggestion?word=".concat(encodeURIComponent(t.q),"&nums=1&timestamp=0&is_need_mean=1"),{mode:"cors"}).then((function(e){return e.json()}));case 10:(r=e.sent).message.length>0&&(n.to=r.message[0].paraphrase||r.message[0].means.reduce((function(e,t){return e+t.part+" "+t.means.join(",")}),""));case 13:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()],V={};function H(e,t,n){var r=function(e){e&&e.error&&f.$emit("error",e),n(e)};return g()?(V[t.reqId||t.cmd]=r,chrome.runtime.sendMessage(e,t,r)):Y(e,t,r)}g()&&(window.onMessageListener=function(e,t,n){if(e&&e.cmd){var r=V[e.reqId||e.cmd];r&&r(e.contents)}n(e.contents)},chrome.runtime.onMessage.addListener(window.onMessageListener));var Q={token:function(e,t){var n="token "+e.content;fetch("https://api.github.com/user",{method:"get",headers:{accept:"application/vnd.github.v3+json",Authorization:n}}).then((function(e){return e.json()})).then((function(n){n.name&&p.a.set("token",e.content),t(n)}))},lists:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var r,i,o,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={},i=0,e.next=4,K(t.type,t.force,(function(){i++,setTimeout((function(){Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se[t.type](t,n);case 2:i--,n({done:!i});case 4:case"end":return e.stop()}}),e)})))()}),1e3)}));case 4:if(t.type==N){for(o=he(t.type)||[],c=0,s=o.length;c<s;c++)o[c].i||o[c].n||(o.splice(c,1),s--,c--);le(t.type,o)}r.contents=he(t.type)||[],r.done=!i,n(r);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),newWord:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var r,a,i,o,c,s,u,p,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},t.content.q=t.content.q.trim(),t.content.q){e.next=6;break}return r.error="empty word",n(r),e.abrupt("return");case 6:a=he(N)||[],i=he(J)||[],o=t.content.q.toLocaleLowerCase(),c=[i,a],s=0;case 11:if(!(s<c.length)){e.next=29;break}u=c[s],p=0,f=u.length;case 14:if(!(p<f)){e.next=26;break}if(u[p].q!=o){e.next=23;break}return u.splice(p,1),p--,f--,1==s&&le(N,a),s=c.length,e.abrupt("break",26);case 23:p++,e.next=14;break;case 26:s++,e.next=11;break;case 29:i.unshift(Object.assign({},t.content,{q:o}));try{le(J,i,1)}catch(e){alert(e)}r.contents=t.content,n(r);case 33:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),translate:function(e,t){var n=[];G.map((function(r){return r(e.content).then((function(e){n.push(e),t(n)}))}))},bg:function(e){e.pause||(B.currentTime=0)},audio:function(e,t){if(e.pause)return E.pause(),t({}),!1;E.title=e.content.trim(),F.title=E.title;var n="".concat("https://fanyi.baidu.com","/gettts?lan=").concat(e.lang||"en","&text=").concat(encodeURIComponent(e.content),"&spd=5&source=web&cache=0");return E.src=n,E.load(),B.pause(),E.play(),e.wait?(E.onerror=E.onended=function(){B.play(),t({})},!0):(t({}),!1)},setConfig:function(e,t){p.a.set("config",e.content),t(X())},getConfig:function(e,t){t(X())},content:function(e,t){!function(e,t){ue.apply(this,arguments)}(e,t)},urls:function(e,t){!function(e,t){pe.apply(this,arguments)}(e,t)},upload:function(e,t){Object(a.a)(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,z,"data","dict.js",r=btoa(D.gzip(JSON.stringify(e.content),{to:"string",level:9})),a='\n          cb("'.concat(r,'");\n          '),n.next=8,ne("SMLOG","data","dict.js",a,0);case 8:return i=n.sent,n.abrupt("return",t(i));case 12:return n.prev=12,n.t0=n.catch(0),n.abrupt("return",t("error"));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))()}};function X(){return p.a.get("config")||{}}function Y(e,t,n){var r=function(r){g()?chrome.tabs.sendMessage(e.tab.id,{cmd:t.cmd,reqId:t.reqId,contents:r},(function(e){})):n(r)};return Q[t.cmd]&&Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q[t.cmd](t,r);case 2:case"end":return e.stop()}}),e)})))(),!0}function K(e,t,n){return W.apply(this,arguments)}function W(){return(W=Object(a.a)(regeneratorRuntime.mark((function e(t,n,r){var a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=(new Date).getTime(),X()["show"+t]){e.next=4;break}return e.abrupt("return");case 4:if(i="_"+t,o=p.a.get(i)||0,!(n||a-o>18e5)){e.next=10;break}return e.next=9,r();case 9:p.a.set(i,a);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t,n,r,a){return Z.apply(this,arguments)}function Z(){return(Z=Object(a.a)(regeneratorRuntime.mark((function e(t,n,r,a,i){var o,c,s,u,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=p.a.get("token"),c="token "+o,s={accept:"application/vnd.github.v3+json"},o&&(s.Authorization=c),u="https://api.github.com/repos/".concat(t,"/").concat(n,"/contents/").concat(r)+(a?"?ref=".concat(a):""),u+=i?(u.indexOf("?")>-1?"&":"?")+"cache=".concat(i):"",e.next=8,fetch(u,{method:"get",headers:s}).then((function(e){return e.json()}));case 8:return f=e.sent,e.abrupt("return",f.content);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i,o,c,s,u,f,m,d,l,h,g,v,b,y,x=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.name,i=t.rep,o=t.path,c=t.since,s=!(x.length>2&&void 0!==x[2])||x[2],u="https://api.github.com/repos/".concat(a,"/").concat(i,"/commits?path=").concat(encodeURIComponent(o),"&per_page=100"),c&&(u+="&since="+encodeURIComponent(c)),f=p.a.get("token"),m="token "+f,d={accept:"application/vnd.github.v3+json"},f&&(d.Authorization=m),l=1,h=[];case 10:return e.next=12,fetch(u+"&page="+l,{method:"get",headers:d}).then((function(e){return e.json()}));case 12:if(g=e.sent,h.push.apply(h,Object(r.a)(g)),!(g.length<100)){e.next=16;break}return e.abrupt("break",19);case 16:l++;case 17:e.next=10;break;case 19:v=0;case 20:if(!(v<h.length)){e.next=32;break}return b=h[v],e.next=24,$(a,i,o,b.sha);case 24:return y=e.sent,e.next=27,n(b,s?ce(y):y,v);case 27:if(!e.sent){e.next=29;break}return e.abrupt("return");case 29:v++,e.next=20;break;case 32:return e.abrupt("return",h);case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e,t,n,r,a){return re.apply(this,arguments)}function re(){return(re=Object(a.a)(regeneratorRuntime.mark((function e(t,n,r,a,i){var o,c,s,u,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=p.a.get("token"),c="token "+o,s="https://api.github.com/repos/".concat(t,"/").concat(n,"/contents/").concat(r),o){e.next=5;break}return e.abrupt("return",{error:"token?"});case 5:return e.next=7,fetch(s,{method:"get",headers:{accept:"application/vnd.github.v3+json"}}).then((function(e){return e.json()}));case 7:return u=e.sent,f=u.sha,e.next=11,fetch(s,{method:"put",body:JSON.stringify({message:"update"+new Date,branch:"main",content:oe(i?me(a):a),sha:f}),headers:{accept:"application/vnd.github.v3+json",Authorization:c}}).then((function(e){return e.json()}));case 11:return u=e.sent,e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(){return ie.apply(this,arguments)}function ie(){return(ie=Object(a.a)(regeneratorRuntime.mark((function e(){var t,n,r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=he("videos")||[],p.a.get("token")){e.next=4;break}return e.abrupt("return",t);case 4:return n=t.reduce((function(e,t){return e[t.vid]=1,e}),{}),e.next=7,q();case 7:r=e.sent,a=0;case 9:if(!(a<r.length)){e.next=17;break}if(i=r[a],!n[i.vid]){e.next=13;break}return e.abrupt("continue",14);case 13:t.unshift(i);case 14:a++,e.next=9;break;case 17:return t.sort((function(e,t){return t.dt-e.dt})),t.length=Math.min(500,t.length),le("videos",t),e.abrupt("return",t);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(e){return btoa(unescape(encodeURIComponent(e)))}function ce(e){return decodeURIComponent(escape(atob(e)))}var se={words:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i,o,c,s,u,f,m,d,l,h,g,v,b,y,x,w,k,j,O,C,S,R,A,I;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=X(),i=z,o="data",c="update.json",s=t.type+"Since",u=he(N)||[],f=he(J)||[],m=p.a.get(s),d=m,l=f.filter((function(e){return!e.i&&e.n||e.i&&!e.n})).map((function(e){for(var t in e)"_"==t[0]&&delete e[t];return e})),h=[],g={},v=0;case 14:if(!(v<10)){e.next=31;break}return b=d,e.prev=16,e.next=19,ee({name:i,rep:o,path:c,since:b},(function(e,t,n){0==n&&(m=e.commit.committer.date);var a=L(t);b=e.commit.committer.date,h.push.apply(h,Object(r.a)(a))}));case 19:return e.abrupt("break",31);case 22:return e.prev=22,e.t0=e.catch(16),g.error=e.t0,e.next=28,new Promise((function(e){return setTimeout(e,3e3)}));case 28:v++,e.next=14;break;case 31:for(u.unshift.apply(u,h),y={},x=[f,u],w=0;w<x.length;w++)for(j=0,O=(k=x[w]).length;j<O;j++)(C=k[j]).q&&!y[C.q]&&C.n||(k.splice(j,1),O--,j--),y[C.q]=(y[C.q]||0)+1;if(le(N,u),le(J,f,1),S=f.concat(u),m&&p.a.set(s,new Date(new Date(m).getTime()+1e3).toISOString()),!(a.fzWords>0&&l.length>a.fzWords)){e.next=51;break}if(R=l.map((function(e){return Object.assign({},e,{i:1})})),A=JSON.stringify(R),!(R.length>0)){e.next=51;break}return e.next=47,ne(i,o,c,A);case 47:I=e.sent,g.error=I.error,I.commit&&(p.a.set(s,new Date(new Date(I.commit.committer.date).getTime()+1e3).toISOString()),u.unshift.apply(u,Object(r.a)(R)),le(N,u),f.length=0,le(J,f,1),S=u);case 51:g.contents=S,n(g);case 53:case"end":return e.stop()}}),e,null,[[16,22]])})));return function(t,n){return e.apply(this,arguments)}}(),news:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i,o,c,s,u,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z,"data","l.json",a=t.type+"Since",i=p.a.get(a),o=he(t.type)||[],c=[],e.next=9,ee({name:"SMLOG",rep:"data",path:"l.json",since:i},(function(e,t,n){if(0==n&&(i=e.commit.committer.date),t){var a=de(t),o=L(a);return c.push.apply(c,Object(r.a)(o)),c.length>500||void 0}}),!1);case 9:s=e.sent,u=o.reduce((function(e,t){return e[t.p]=1,e}),{}),o.unshift.apply(o,Object(r.a)(c.filter((function(e){return!u[e.p]})))),o.sort((function(e,t){return parseInt(t.date)-parseInt(e.date)})),p.a.set(a,i),(f={}).error=s.message,f.contents=o,o.length=Math.min(500,o.length),le(t.type,o),n(f);case 20:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),videos:function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t,n){var a,i,o,c,s,u,f,m,d,l,h,g,v,b,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=z,i="data",o="v1.json",e.next=5,ae();case 5:return c=e.sent,s=t.type+"Since",u=p.a.get(s),m=[],d=X(),0==c.length&&(u=0),n({contents:c}),e.prev=12,e.next=15,ee({name:a,rep:i,path:o,since:u},(function(e,t,n){0==n&&(u=e.commit.committer.date);var a=t;if(a){a=de(t);var i=L(a);m.push.apply(m,Object(r.a)(i))}}),0);case 15:for(c.unshift.apply(c,m),l={},h=0,g=c.length;h<g;h++)l[c[h].vid]?(c.splice(h,1),h--,g--):l[c[h].vid]=1;if(c.sort((function(e,t){return t.dt-e.dt})),le(t.type,c),u&&p.a.set(s,new Date(new Date(u).getTime()+1e3).toISOString()),v=(new Date).getTime()-432e6,b=c.filter((function(e){return!e.i&&e.dt>v})),!(d.fzVideos>0&&b.length>=d.fzVideos)){e.next=30;break}return e.next=27,ne(a,i,o,JSON.stringify(b.map((function(e){for(var t in e)"_"==t[0]&&delete e[t];return Object.assign({i:1},e)}))),1);case 27:(y=e.sent).commit&&(b.map((function(e){return e.i=1})),le(t.type,c),p.a.set(s,new Date(new Date(y.commit.committer.date).getTime()+1e3).toISOString())),f=y.error;case 30:e.next=36;break;case 32:e.prev=32,e.t0=e.catch(12),f=e.t0;case 36:n({error:f,contents:c});case 37:case"end":return e.stop()}}),e,null,[[12,32]])})));return function(t,n){return e.apply(this,arguments)}}()};function ue(){return(ue=Object(a.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(z,"data",t.content.p).then((function(e){var t=ce(e);t=fe(e),n({content:t})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function pe(){return(pe=Object(a.a)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(z,"data",t.content.p,0,t.content.cache).then((function(e){var t=D.ungzip(window.atob(e),{to:"string"});n({content:L(t)})}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return D.ungzip(e,{to:"string"})}function me(e){return D.gzip(e,{to:"string"})}function de(e){var t;try{t=ce(e)}catch(n){t=atob(e)}try{t=fe(t)}catch(e){}return t}function le(e,t,n){localStorage.setItem(e,n?JSON.stringify(t):D.gzip(JSON.stringify(t),{to:"string",level:9}))}function he(e){var t=localStorage.getItem(e);return t&&L("["==t[0]?t:D.ungzip(localStorage.getItem(e),{to:"string"}))}}});