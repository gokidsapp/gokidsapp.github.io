!function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={index:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([1,"chunk-vendors"]),n()}({1:function(e,t,n){e.exports=n("56d7")},3771:function(e,t,n){},"413c":function(e,t,n){"use strict";n("9bd8")},"56d7":function(e,t,n){"use strict";n.r(t),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=n("2f62"),a=n("2909"),s=n("1da1"),o=(n("96cf"),n("99af"),n("498a"),n("d3b7"),n("cb29"),n("a15b"),n("d81d"),n("a434"),n("4e82"),n("ac1f"),n("1276"),n("da7e")),c=n.n(o),l=n("d7ac"),u=n.n(l),d=n("1157"),f=n.n(d),h=(n("b0c0"),{props:["showgame"],data:function(){return{clickIndex:0,item:null,items:[{name:"圈小猫",imgUrl:"images/logo.jpg",path:"cat"},{name:"匹配游戏",path:"card"},{name:"方块消除",imgUrl:"bitmap/logo.png",path:"remove"},{name:"数字推盘",path:"szhrdGame"},{name:"Bubble"},{name:"五子棋",path:"wuziqi"},{name:"五子棋2",path:"wuziqi2"},{name:"unlock"},{name:"connection"},{name:"master_checkers_v3"},{name:"numpuz"}]}},mounted:function(){},deactivated:function(){},computed:{},methods:{getLink:function(e){return"games/"+(e.path||e.name)+"/index.html"},getImage:function(e){return"games/"+(e.path||e.name)+"/"+(e.imgUrl||"cover.png")},select:function(e,t){this.item=t,this.$emit("select")}},watch:{}}),m=(n("413c"),n("2877")),p={data:function(){return{showgame:1,clockt:0,rightCn:0,wrongCn:0,curAct:0,list:[],curIndex:0,speaking:!1,seconds:15,timer:0,clickIndex:-1,showGameIf:!1,showInput:!1,lan:"en",lans:["en"],lanMode:"auto",startCount:0,mode:1,fill:[],letters2:[],letters:[],isCorrect:0,refresing:0,dictList:c.a.get("dicts")||[],syning:0,lastYesIndex:-1}},components:{GameList:Object(m.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"figure-list"},e._l(e.items,(function(t,r){return n("li",{key:r},[n("div",{staticClass:"itemText"},[n("span",[e._v(e._s(r+1)+"."+e._s(t.name))])]),n("figure",{staticClass:"animated",class:{tada:e.clickIndex==r},staticStyle:{cursor:"pointer"},style:{backgroundImage:"url("+e.getImage(t)+")"},on:{click:function(n){return e.select(r,t)}}})])})),0),e.showgame&&e.item?n("div",{staticStyle:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","z-index":"100",overflow:"auto"}},[e.showgame&&e.item?n("iframe",{attrs:{id:"gamefr",src:e.getLink(e.item)}}):e._e()]):e._e()])}),[],!1,null,"0a9765c8",null).exports},mounted:function(){0==this.dictList.length&&this.refresh(),this.randList()},activated:function(){},deactivated:function(){clearInterval(this.timer)},computed:{listenChangeCn:function(){return{rightCn:this.rightCn,wrongCn:this.wrongCn}}},methods:{pwdGame:function(){var e=c.a.get("pwd");e?prompt("pwd")==e&&(this.showGameIf=1):((e=prompt("setting pwd"))&&c.a.set("pwd",e),this.showGameIf=1)},sync:function(){var e=this;if(!this.syning)return this.syning=1,Object(s.a)(regeneratorRuntime.mark((function t(){var n,r,i,a,s,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=0;case 1:if(!(n<e.dictList.length)){t.next=22;break}if(!(r=e.dictList[n]).s){t.next=5;break}return t.abrupt("continue",19);case 5:i=["en","zh"],a=0;case 7:if(!(a<i.length)){t.next=17;break}return 5,s=i[a],o="https://fanyi.baidu.com/gettts?lan=".concat(encodeURIComponent(s),"&text=").concat(encodeURIComponent(r["zh"==s?"cn":s].trim()),"&spd=").concat(5,"&source=web&cache=0"),t.next=13,fetch(o,{mode:"no-cors"});case 13:r.s=1;case 14:a++,t.next=7;break;case 17:return t.next=19,fetch(r.img+"&cache=0");case 19:n++,t.next=1;break;case 22:e.syning=0;case 23:case"end":return t.stop()}}),t)})))()},refresh:function(){var e=this,t=this;this.refresing||(this.refresing=1,Object(s.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=5;case 1:if(!(r>=0)){n.next=17;break}return n.prev=2,n.next=5,new Promise((function(e,n){f.a.ajax({url:"https://smlog.github.io/data/dict.js",dataType:"jsonp",jsonpCallback:"cb"}).done((function(n){var r=t.dictList,i=0==r.length;r.length=0,r.push.apply(r,Object(a.a)(JSON.parse(u.a.ungzip(atob(n),{to:"string"})).items)),i&&t.randList(),c.a.set("dicts",r),e()})).fail((function(e){n(e)}))}));case 5:return n.abrupt("break",17);case 8:return n.prev=8,n.t0=n.catch(2),0==r&&alert("fail refresh data"),n.next=14,new Promise((function(e){return setTimeout(e,3e3)}));case 14:r--,n.next=1;break;case 17:return n.next=19,t.sync();case 19:e.syning=0,e.refresing=0;case 21:case"end":return n.stop()}}),n,null,[[2,8]])})))())},fillLetterIndex:function(e){var t=this;-1==this.fill.indexOf(e)&&(this.fill.push(e),this.fill.length==this.letters2.length&&(this.isCorrect=this.fill.map((function(e){return t.letters2[e]})).join("")==this.letters.join("")?1:2,1==this.isCorrect?Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.select(0,t.list[0]);case 2:return e.next=4,new Promise((function(e){return setTimeout(e,1e3)}));case 4:case"end":return e.stop()}}),e)})))():2==this.isCorrect&&this.say("no","en")))},unFillLetterIndex:function(e){this.fill.length>e&&this.fill.splice(e)},sendFeedBack:function(e){var t=this.list[this.curIndex];null==t.rTimes&&(t.rTimes=0),e!=this.curIndex?(t.rTimes>0&&(t.rTimes=0),t.rTimes--):t.rTimes++},closeGame:function(){this.showGameIf=!1,clearTimeout(this.timer),this.randList()},startShowGame:function(e){var t=this;this.clockt=parseInt(60*(5+e)*1e3);var n=setInterval((function(){t.clockt=t.clockt-1e3}),1e3);this.showGameIf=!0,this.timer=setTimeout((function(){t.showGameIf=!1,clearInterval(n),t.randList()}),this.clockt)},replay:function(){var e=this.list[this.curIndex][this.lan];this.say(e)},select:function(e,t){var n=this;return Object(s.a)(regeneratorRuntime.mark((function r(){var i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n.selected){r.next=3;break}return r.abrupt("return");case 3:if(n.clickIndex==e?n.clickIndex=-1:n.clickIndex=e,n.selected=1,i=t[n.lan],e!=n.curIndex){r.next=23;break}return n.lastYesIndex=e,n.rightCn++,n.curAct=1,r.next=12,n.say(i,n.lan).then((function(){return n.say(t.cn,"zh")}));case 12:if(!(n.rightCn-n.wrongCn>=18)){r.next=17;break}return n.rightCn=0,r.abrupt("return",n.startShowGame(1));case 17:return r.next=19,new Promise((function(e){return setTimeout(e,1e3)}));case 19:return r.next=21,n.randList();case 21:r.next=27;break;case 23:return r.next=25,n.say(i,n.lan).then((function(){return n.say(t.cn,"zh")}));case 25:n.wrongCn++,n.curAct=-1;case 27:n.selected=0;case 28:case"end":return r.stop()}}),r)})))()},n:function(){return 1==this.mode?4:1},randList:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,0!=(r=e.dictList).length){t.next=4;break}return t.abrupt("return");case 4:for(e.selected=0,n.list.length=0,e.fill.length=0,e.letters2.length=0,e.letters.length=0,e.isCorrect=0,i=0;i<e.n();i++)a=parseInt(r.length*Math.random()),n.list.indexOf(r[a])>-1||3==e.mode&&r[a].en.indexOf(" ")>-1?i--:n.list.push(r[a]);n.curIndex=parseInt(Math.random()*n.list.length),e.letters2=e.list[e.curIndex][e.lan].toLowerCase().trim().split("").sort(),e.letters=e.list[e.curIndex][e.lan].toLowerCase().trim().split(""),0!=e.mode&&n.replay(),n.clickIndex=-1;case 16:case"end":return t.stop()}}),t)})))()},say:function(e){var t=arguments,n=this;return Object(s.a)(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("en"==(i=t.length>1&&void 0!==t[1]?t[1]:"en")&&(i=n.lan),e){r.next=5;break}return r.abrupt("return");case 5:return n.speaking=!0,a=n,r.abrupt("return",new Promise((function(t){var n="https://fanyi.baidu.com/gettts?lan=".concat(encodeURIComponent(i),"&text=").concat(encodeURIComponent(e.trim()),"&spd=").concat(5,"&source=web&cache=0"),r=0;a.$refs.audio.onerror=function(e){r<10&&(a.$refs.audio.src=n,a.$refs.audio.play()),r++},a.$refs.audio.src=n,a.$refs.audio.volume=1,a.$refs.audio.addEventListener("ended",(function(){return a.speaking=!1,t()})),setTimeout((function(){a.$refs.audio.play()}),10)})));case 9:case"end":return r.stop()}}),r)})))()},getWrongSetence:function(e){var t={en:["no no no","oh sorry.","incorrect","come on."]}[e];return t[parseInt(Math.random()*t.length)]},getRightSetence:function(e){var t={en:["yes yes yes","well done","good job"]}[e];return t[parseInt(Math.random()*t.length)]}},watch:{lanMode:function(){this.randList()},mode:function(){this.randList()}}},g=(n("defa"),Object(m.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"user-select":"none"},attrs:{id:"con"}},[n("div",{staticStyle:{"text-align":"left",color:"red","min-height":"1em",height:"1em","margin-bottom":"8px"}},[e.rightCn-e.wrongCn>0?e._l(e.rightCn-e.wrongCn,(function(e){return n("font-awesome-icon",{key:e,attrs:{icon:"star","fixed-width":""}})})):e._e()],2),e.list.length>0&&e.curIndex>=0?n("div",{staticClass:"word",staticStyle:{color:"dodgerblue","font-size":"300%","font-weight":"900","text-align":"center","margin-bottom":"10px"},on:{click:e.replay}},[e._v(" "+e._s(e.list[e.curIndex][e.lan])+" ")]):e._e(),n("ul",{staticClass:"figure-list",staticStyle:{"text-align":"center"}},e._l(e.list,(function(t,r){return n("li",{key:r,staticClass:"card",class:{click:e.clickIndex==r,ready:!e.selected},on:{click:function(n){return e.select(r,t)}}},[n("div",{staticClass:"card__content"},[n("div",{staticClass:"itemText card__back"},[n("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t[e.lan].toLowerCase()))])]),n("figure",{staticClass:"card__front",staticStyle:{cursor:"pointer"},style:{backgroundImage:"url("+t.img+"&cache=0)"}})])])})),0),n("div",{staticStyle:{cursor:"pointer","user-select":"none","margin-top":"10px","text-align":"center"}},[n("span",{on:{click:e.replay}},[n("font-awesome-icon",{class:{speaking:e.speaking},attrs:{icon:"volume-up","fixed-width":""}}),e._v("Replay ")],1),n("span",{staticStyle:{"margin-left":"10px"},on:{click:function(t){e.wrongCn+=3,e.randList()}}},[n("font-awesome-icon",{class:{speaking:e.speaking},attrs:{icon:"step-forward","fixed-width":""}}),e._v("Next")],1),n("span",{staticStyle:{"margin-left":"10px"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.mode=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"1"}},[e._v("Listen")]),n("option",{attrs:{value:"0"}},[e._v("Read")]),n("option",{attrs:{value:"3"}},[e._v("Write")])])]),n("span",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.refresh()}}},[n("font-awesome-icon",{attrs:{icon:"refresh","fixed-width":""}}),e._v("("+e._s(e.dictList.length)+")"+e._s(e.refresing?"...":""))],1),e._e(),n("span",{staticStyle:{"margin-left":"10px"},on:{click:e.pwdGame}},[n("font-awesome-icon",{attrs:{icon:"gear","fixed-width":""}}),e._v("Setting")],1),n("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"audio",staticStyle:{height:"0px",width:"0px"},attrs:{controls:""}})]),3==e.mode?n("div",{staticClass:"board",staticStyle:{"text-align":"center"}},[n("div",[n("div",{staticStyle:{position:"relative"}},e._l(e.letters,(function(t,r){return n("span",{key:""+t+r,staticClass:"al",staticStyle:{position:"relative"},on:{click:function(t){return e.unFillLetterIndex(r)}}},[r<e.fill.length?n("b",[e._v(e._s(e.letters2[e.fill[r]]))]):n("b",{staticStyle:{visibility:"hidden"}},[e._v(e._s(t))]),r==e.letters.length-1&&e.isCorrect?n("div",{staticStyle:{position:"absolute",top:"0",right:"-2em",color:"red"}},[n("font-awesome-icon",{attrs:{"fixed-width":"",icon:1==e.isCorrect?"thumbs-up":"thumbs-down"}})],1):e._e()])})),0),n("div",{staticStyle:{"border-top":"1px dashed #ccc"}},[e._l(e.letters2,(function(t,r){return[e.fill.indexOf(r)>-1?n("span",{key:""+t+r,staticClass:"al",staticStyle:{visibility:"hidden"},on:{click:function(t){return e.fillLetterIndex(r)}}},[e._v(" "+e._s(t))]):e._e()]})),e._l(e.letters2,(function(t,r){return[-1==e.fill.indexOf(r)?n("span",{key:""+t+r,staticClass:"al",on:{click:function(t){return e.fillLetterIndex(r)}}},[e._v(" "+e._s(t))]):e._e()]}))],2)])]):e._e(),e.showGameIf?n("div",{staticStyle:{background:"white"}},[n("GameList",{attrs:{showgame:e.showgame,id:"gamefr"},on:{select:function(t){e.showgame=1}}}),n("div",{staticStyle:{position:"absolute",top:"0",cursor:"pointer",right:"0",color:"white","z-index":"10000"}},[n("span",[e._v(e._s(e.clockt/1e3))]),n("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em","margin-right":"10px"},attrs:{icon:"arrow-left","fixed-width":""},on:{click:function(t){e.showgame=!e.showgame}}}),n("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em"},attrs:{icon:"times-circle","fixed-width":""},on:{click:function(t){return e.closeGame()}}})],1)],1):e._e()])}),[],!1,null,"3d33fe64",null)).exports,v=n("ecee"),w=n("c074"),x=n("b702"),b=n("f2d1"),y=n("ad3d");v.c.add(w.a,x.a,b.a),window.$=f.a,r.a.component("font-awesome-icon",y.a),r.a.component("font-awesome-layers",y.b),r.a.component("font-awesome-layers-text",y.c),r.a.config.productionTip=!1,r.a.use(i.a);var k=new i.a.Store({state:{},mutations:{},actions:{}});new r.a({render:function(e){return e(g)},store:k,data:{eventHub:new r.a}}).$mount("#app")},"9bd8":function(e,t,n){},defa:function(e,t,n){"use strict";n("3771")}});