!function(e){function t(t){for(var i,s,o=t[0],c=t[1],l=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={index:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([1,"chunk-vendors"]),n()}({"0501":function(e,t,n){},1:function(e,t,n){e.exports=n("56d7")},3512:function(e,t,n){"use strict";n("0501")},"55a5":function(e,t,n){"use strict";n("da32")},"56d7":function(e,t,n){"use strict";n.r(t),n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=n("2f62"),a=n("2909"),s=n("1da1"),o=(n("96cf"),n("d3b7"),n("159b"),n("cb29"),n("a15b"),n("d81d"),n("a434"),n("4de4"),n("4e82"),n("ac1f"),n("1276"),n("498a"),n("99af"),n("da7e")),c=n.n(o),l=n("d7ac"),u=n.n(l),d=n("1157"),f=n.n(d),p=(n("b0c0"),{props:["showgame"],data:function(){return{clickIndex:0,item:null,items:[{name:"圈小猫",imgUrl:"images/logo.jpg",path:"cat"},{name:"匹配游戏",path:"card"},{name:"方块消除",imgUrl:"bitmap/logo.png",path:"remove"},{name:"数字推盘",path:"szhrdGame"},{name:"Bubble"},{name:"五子棋",path:"wuziqi"},{name:"五子棋2",path:"wuziqi2"},{name:"unlock"},{name:"connection"},{name:"master_checkers_v3"},{name:"numpuz"},{name:"pintu",imgUrl:"assets/img_480/game_logo.png"},{name:"blue casino",path:"blue2"},{name:"lollipop"},{path:"smarty-bubbles-2",name:"smarty bubbles",imgUrl:"SmartyBubbles2Teaser.jpg"},{name:"ppiano",imgUrl:"PerfectPiano_Teaser.jpg"},{name:"pianoonline"},{path:"pvz",name:"Plant zombie",imgUrl:"images/interface/Logo.jpg",src:"http://crge.cn/games"}]}},mounted:function(){},deactivated:function(){},computed:{},methods:{getLink:function(e){return e.url?e.url:"games/"+(e.path||e.name)+"/index.html"},getImage:function(e){return"games/"+(e.path||e.name)+"/"+(e.imgUrl||"cover.png")},select:function(e,t){this.item=t,this.$emit("select")}},watch:{}}),h=(n("55a5"),n("2877")),m=Object(h.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"figure-list"},e._l(e.items,(function(t,i){return n("li",{key:i},[n("div",{staticClass:"itemText"},[n("span",[e._v(e._s(i+1)+"."+e._s(t.name))])]),n("figure",{staticClass:"animated",class:{tada:e.clickIndex==i},staticStyle:{cursor:"pointer"},style:{backgroundImage:"url("+e.getImage(t)+")"},on:{click:function(n){return e.select(i,t)}}})])})),0),e.showgame&&e.item?n("div",{staticStyle:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","z-index":"100",background:"#fff",overflow:"hidden"}},[e.showgame&&e.item?n("iframe",{attrs:{id:"gamefr",src:e.getLink(e.item)}}):e._e()]):e._e()])}),[],!1,null,"c0306912",null).exports,g=(n("ddb0"),{data:function(){return{speakCn:localStorage.speakCn?1:0,sound:localStorage.sound}},mounted:function(){},methods:{toggleCn:function(){this.speakCn=this.speakCn?0:1,localStorage.speakCn=this.speakCn?1:""},toggleSound:function(){this.sound=this.sound?"":"YD",localStorage.sound=this.sound},refreshCache:function(){"serviceWorker"in navigator&&caches.keys().then((function(e){e.forEach((function(e){confirm("delete cache "+e)&&caches.delete(e)}))}))},openGame:function(e,t){this.$emit("openGame",e,t)}},computed:{},watch:{}}),v={created:function(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})},data:function(){return{showgame:1,clockt:0,rightCn:0,wrongCn:0,curAct:0,list:[],curIndex:0,speaking:!1,seconds:15,timer:0,clickIndex:-1,showGameIf:!1,showInput:!1,lan:"en",lans:["en"],lanMode:"auto",startCount:0,mode:1,fill:[],letters2:[],letters:[],isCorrect:0,refresing:0,dictList:c.a.get("dicts")||[],syning:0,lastYesIndex:-1,refreshing:!1,registration:null,updateExists:!1,showSetting:0}},components:{GameList:m,Setting:(n("3512"),Object(h.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("a",{on:{click:function(t){return e.refreshCache()}}},[e._v("Refresh Cache")])]),n("div",[n("span",[e._v("Play Chinese Sound:"),n("a",{on:{click:function(t){return e.toggleCn()}}},[e._v(e._s(e.speakCn?"ON":"OFF"))])])]),n("div",[n("span",[e._v("Sound YD:"),n("a",{on:{click:function(t){return e.toggleSound()}}},[e._v(e._s(e.sound?"ON":"OFF"))])])]),n("div",[n("a",{on:{click:function(t){return e.openGame(6)}}},[e._v("6 minus game")])]),n("div",[n("a",{on:{click:function(t){return e.openGame(0,1)}}},[e._v("change password")])])])}),[],!1,null,"62b93cf0",null)).exports},mounted:function(){this.refresh(),this.randList();var e=this;document.addEventListener("click",(function(t){e.$refs.setting.$el.contains(t.target)||(e.showSetting=0)}))},activated:function(){},deactivated:function(){clearInterval(this.timer)},computed:{listenChangeCn:function(){return{rightCn:this.rightCn,wrongCn:this.wrongCn}}},methods:{updateAvailable:function(e){this.registration=e.detail,this.updateExists=!0,this.refreshApp()},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})},openGame:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e){var n=c.a.get("pwd");if(n){var i=prompt("pwd");if(i==n)if(t){n=prompt("setting pwd");var r=prompt("setting pwd");n==r&&c.a.set("pwd",n)}else this.startShowGame(e)}else(n=prompt("setting pwd"))&&c.a.set("pwd",n),this.startShowGame(e)}},sync:function(){this.syning||(this.syning=1,this.syning=0)},refresh:function(){var e=this,t=this;this.refresing||(this.refresing=1,Object(s.a)(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=5;case 1:if(!(i>=0)){n.next=17;break}return n.prev=2,n.next=5,new Promise((function(e,n){f.a.ajax({url:"https://smlog.github.io/data/dict.js",dataType:"jsonp",jsonpCallback:"cb"}).done((function(n){var i=t.dictList,r=0==i.length,s=i.reduce((function(e,t){return e[t.en]=null==t.c?0:t.c,e}),{});i.length=0,i.push.apply(i,Object(a.a)(JSON.parse(u.a.ungzip(atob(n),{to:"string"})).items)),i.forEach((function(e){e.c=null==s[e.cn]?0:s[e.cn]})),r&&t.randList(),c.a.set("dicts",i),e()})).fail((function(e){n(e)}))}));case 5:return n.abrupt("break",17);case 8:return n.prev=8,n.t0=n.catch(2),0==i&&alert("fail refresh data"),n.next=14,new Promise((function(e){return setTimeout(e,3e3)}));case 14:i--,n.next=1;break;case 17:return n.next=19,t.sync();case 19:e.syning=0,e.refresing=0;case 21:case"end":return n.stop()}}),n,null,[[2,8]])})))())},fillLetterIndex:function(e){var t=this;-1==this.fill.indexOf(e)&&(this.fill.push(e),this.fill.length==this.letters2.length&&(this.isCorrect=this.fill.map((function(e){return t.letters2[e]})).join("")==this.letters.join("")?1:2,1==this.isCorrect?Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.select(0,t.list[0]);case 2:return e.next=4,new Promise((function(e){return setTimeout(e,1e3)}));case 4:case"end":return e.stop()}}),e)})))():2==this.isCorrect&&this.say("no","en")))},unFillLetterIndex:function(e){this.fill.length>e&&this.fill.splice(e)},sendFeedBack:function(e){var t=this.list[this.curIndex];null==t.rTimes&&(t.rTimes=0),e!=this.curIndex?(t.rTimes>0&&(t.rTimes=0),t.rTimes--):t.rTimes++},closeGame:function(){this.showGameIf=!1,clearTimeout(this.timer),this.randList()},startShowGame:function(e){var t=this;this.clockt=parseInt(60*e*1e3),this.showGameIf=!0,this.clockTimer&&clearInterval(this.clockTimer),this.clockTimer=setInterval((function(){t.clockt=t.clockt-1e3,t.clockt<=0&&(t.showGameIf=!1,clearInterval(t.clockTimer),t.randList())}),1e3)},replay:function(){var e=this.list[this.curIndex][this.lan];this.say(e)},select:function(e,t,n){var i=this;return Object(s.a)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!i.selected){r.next=3;break}return r.abrupt("return");case 3:if(i.clickIndex==e?i.clickIndex=-1:i.clickIndex=e,i.selected=1,a=t[i.lan],e!=i.curIndex){r.next=22;break}return i.lastYesIndex=e,(0!=i.mode&&3!=i.mode||3==i.mode&&!n)&&(i.rightCn++,i.curAct=1,t.c+=1),r.next=11,i.say(a,i.lan).then((function(){return i.say(t.cn,"zh")}));case 11:if(!(i.rightCn-i.wrongCn>=30)){r.next=16;break}return i.rightCn=0,r.abrupt("return",i.startShowGame(6));case 16:return r.next=18,new Promise((function(e){return setTimeout(e,1e3)}));case 18:return r.next=20,i.randList();case 20:r.next=27;break;case 22:return r.next=24,i.say(a,i.lan).then((function(){return i.say(t.cn,"zh")}));case 24:i.wrongCn++,i.curAct=-1,i.list.forEach((function(e){return e.c-=1}));case 27:i.selected=0;case 28:case"end":return r.stop()}}),r)})))()},n:function(){return 1==this.mode?4:1},randList:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){var n,i,r,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e,0!=e.dictList.length){t.next=3;break}return t.abrupt("return");case 3:for((i=e.dictList.filter((function(e){return e.c<=3}))).length<e.n()&&(i=e.dictList),e.selected=0,n.list.length=0,e.fill.length=0,e.letters2.length=0,e.letters.length=0,e.isCorrect=0,r=0;r<e.n();r++)a=parseInt(i.length*Math.random()),n.list.indexOf(i[a])>-1||3==e.mode&&i[a].en.indexOf(" ")>-1?r--:n.list.push(i[a]),i[a].c=i[a].c||0;n.curIndex=parseInt(Math.random()*n.list.length),e.letters2=e.list[e.curIndex][e.lan].toLowerCase().trim().split("").sort(),e.letters=e.list[e.curIndex][e.lan].toLowerCase().trim().split(""),0!=e.mode&&n.replay(),n.clickIndex=-1;case 17:case"end":return t.stop()}}),t)})))()},say:function(e){var t=arguments,n=this;return Object(s.a)(regeneratorRuntime.mark((function i(){var r,a;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if("en"==(r=t.length>1&&void 0!==t[1]?t[1]:"en")&&(r=n.lan),e){i.next=5;break}return i.abrupt("return");case 5:if("en"==r||localStorage.speakCn){i.next=7;break}return i.abrupt("return");case 7:return n.speaking=!0,a=n,i.abrupt("return",new Promise((function(t){var n="https://fanyi.baidu.com/gettts?lan=".concat(encodeURIComponent(r),"&text=").concat(encodeURIComponent(e.trim()),"&spd=").concat(5,"&source=web&cache=0");"YD"==localStorage.sound&&(n="https://dict.youdao.com/dictvoice?type=2&audio=".concat(encodeURIComponent(e.trim()),"&cache=0"));var i=0;a.$refs.audio.onerror=function(e){i<10&&(a.$refs.audio.src=n,a.$refs.audio.play()),i++},a.$refs.audio.src=n,a.$refs.audio.volume=1,a.$refs.audio.addEventListener("ended",(function(){return a.speaking=!1,t()})),setTimeout((function(){a.$refs.audio.play()}),10)})));case 11:case"end":return i.stop()}}),i)})))()},getWrongSetence:function(e){var t={en:["no no no","oh sorry.","incorrect","come on."]}[e];return t[parseInt(Math.random()*t.length)]},getRightSetence:function(e){var t={en:["yes yes yes","well done","good job"]}[e];return t[parseInt(Math.random()*t.length)]}},watch:{lanMode:function(){this.randList()},mode:function(){this.randList()}}},w=(n("81d9"),Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"user-select":"none"},attrs:{id:"con"}},[n("div",{staticStyle:{"text-align":"left",color:"red","min-height":"1em",height:"1em","margin-bottom":"8px"}},[e.rightCn-e.wrongCn>0?e._l(e.rightCn-e.wrongCn,(function(e){return n("font-awesome-icon",{key:e,attrs:{icon:"star","fixed-width":""}})})):e._e()],2),3!=e.mode&&e.list.length>0&&e.curIndex>=0?n("div",{staticClass:"word",staticStyle:{color:"dodgerblue","font-size":"300%","font-weight":"900","text-align":"center","margin-bottom":"10px"},on:{click:e.replay}},[e._v(" "+e._s(e.list[e.curIndex][e.lan])+" ")]):e._e(),n("ul",{staticClass:"figure-list",staticStyle:{"text-align":"center"}},e._l(e.list,(function(t,i){return n("li",{key:i,staticClass:"card",class:{click:e.clickIndex==i,ready:!e.selected},on:{click:function(n){return e.select(i,t,n)}}},[n("div",{staticClass:"card__content"},[n("div",{staticClass:"itemText card__back"},[n("span",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(t[e.lan].toLowerCase()))]),0!=t.c?n("span",{class:{red:t.c>0,green:t.c<0},staticStyle:{flex:"0","font-size":"80%",position:"absolute",bottom:"0"}},[e._v(e._s(0==t.c?"":t.c>0?"+":"")+e._s(t.c))]):e._e()]),n("figure",{staticClass:"card__front",staticStyle:{cursor:"pointer"},style:{backgroundImage:"url("+t.img+"&cache=0)"}})])])})),0),n("div",{staticStyle:{cursor:"pointer","user-select":"none","margin-top":"10px","text-align":"center"}},[n("span",{on:{click:e.replay}},[n("font-awesome-icon",{class:{speaking:e.speaking},attrs:{icon:"volume-up","fixed-width":""}}),e._v("Replay ")],1),n("span",{staticStyle:{"margin-left":"10px"},on:{click:function(t){e.wrongCn+=3,e.randList()}}},[n("font-awesome-icon",{class:{speaking:e.speaking},attrs:{icon:"step-forward","fixed-width":""}}),e._v("Next")],1),n("span",{staticStyle:{"margin-left":"10px"}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.mode=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"1"}},[e._v("Listen")]),n("option",{attrs:{value:"0"}},[e._v("Read")]),n("option",{attrs:{value:"3"}},[e._v("Write")])])]),n("span",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.refresh()}}},[n("font-awesome-icon",{attrs:{icon:"refresh","fixed-width":""}}),e._v("("+e._s(e.dictList.length)+")"+e._s(e.refresing?"...":""))],1),e._e(),n("span",{staticStyle:{"margin-left":"10px"},on:{click:function(t){t.stopPropagation(),e.showSetting=1}}},[n("font-awesome-icon",{attrs:{icon:"gear","fixed-width":""}}),e._v("Setting")],1),n("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"audio",staticStyle:{height:"0px",width:"0px"},attrs:{controls:""}})]),3==e.mode?n("div",{staticClass:"board",staticStyle:{"text-align":"center"}},[n("div",[n("div",{staticStyle:{position:"relative"}},e._l(e.letters,(function(t,i){return n("span",{key:""+t+i,staticClass:"al",staticStyle:{position:"relative"},on:{click:function(t){return e.unFillLetterIndex(i)}}},[i<e.fill.length?n("b",[e._v(e._s(e.letters2[e.fill[i]]))]):n("b",{staticStyle:{visibility:"hidden"}},[e._v(e._s(t))]),i==e.letters.length-1&&e.isCorrect?n("div",{staticStyle:{position:"absolute",top:"0",right:"-2em",color:"red"}},[n("font-awesome-icon",{attrs:{"fixed-width":"",icon:1==e.isCorrect?"thumbs-up":"thumbs-down"}})],1):e._e()])})),0),n("div",{staticStyle:{"border-top":"1px dashed #ccc"}},[e._l(e.letters2,(function(t,i){return[e.fill.indexOf(i)>-1?n("span",{key:""+t+i,staticClass:"al",staticStyle:{visibility:"hidden"},on:{click:function(t){return e.fillLetterIndex(i)}}},[e._v(" "+e._s(t))]):e._e()]})),e._l(e.letters2,(function(t,i){return[-1==e.fill.indexOf(i)?n("span",{key:""+t+i,staticClass:"al",on:{click:function(t){return e.fillLetterIndex(i)}}},[e._v(" "+e._s(t))]):e._e()]}))],2)])]):e._e(),e.showGameIf?n("div",{staticStyle:{background:"white"}},[n("GameList",{attrs:{showgame:e.showgame,id:"gamefr"},on:{select:function(t){e.showgame=1}}}),n("div",{staticStyle:{position:"fixed",top:"0",cursor:"pointer",right:"0",color:"white","z-index":"10000"}},[n("span",{on:{click:function(t){return e.openGame(6)}}},[e._v(e._s(e.clockt/1e3))]),n("span",{staticStyle:{"font-size":"1.5em"}},[n("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em","margin-right":"10px"},attrs:{icon:"arrow-left","fixed-width":""},on:{click:function(t){e.showgame=!e.showgame}}}),n("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em"},attrs:{icon:"times-circle","fixed-width":""},on:{click:function(t){return e.closeGame()}}})],1)])],1):e._e(),n("setting",{directives:[{name:"show",rawName:"v-show",value:e.showSetting,expression:"showSetting"}],ref:"setting",staticClass:"centered",staticStyle:{background:"white",padding:"10px"},on:{openGame:e.openGame}})],1)}),[],!1,null,"0bf79272",null)).exports,b=n("ecee"),x=n("c074"),y=n("b702"),k=n("f2d1"),_=n("ad3d"),C=n("9483");Object(C.a)("".concat("","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(e){document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline:function(){},error:function(e){}}),b.c.add(x.a,y.a,k.a),window.$=f.a,i.a.component("font-awesome-icon",_.a),i.a.component("font-awesome-layers",_.b),i.a.component("font-awesome-layers-text",_.c),i.a.config.productionTip=!1,i.a.use(r.a);var S=new r.a.Store({state:{},mutations:{},actions:{}});new i.a({render:function(e){return e(w)},store:S,data:{eventHub:new i.a}}).$mount("#app");var I=0;document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()})),document.documentElement.addEventListener("touchend",(function(e){var t=(new Date).getTime();t-I<=300?e.preventDefault():I=t}),!1),document.documentElement.addEventListener("gesturestart",(function(e){e.preventDefault()}))},"81d9":function(e,t,n){"use strict";n("8c96")},"8c96":function(e,t,n){},da32:function(e,t,n){}});