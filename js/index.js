!function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(d&&d(e);h.length;)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={index:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([1,"chunk-vendors"]),n()}({1:function(t,e,n){t.exports=n("56d7")},"117b":function(t,e,n){"use strict";n("913a")},"442c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=(n("14d9"),n("b7ef"),n("da7e")),o=n.n(s),a=n("d7ac"),r=n.n(a),c=n("1157"),l=n.n(c),d=n("c9bf"),u={props:["word","lan"],data:()=>({isMask:0,penWidth:5}),created(){},methods:{fmtWords(){let t=this.lan,e=this.word;return("en"==t?e[t].split(/[^a-z]/gi):e[t].split("")).join("<br />")},async recognize(){const t=await Object(d.createWorker)("chi_tra");await t.recognize(this.$refs.canvas.toDataURL());await t.terminate()}},watch:{"$store.state.local.grid":{handler(t){document.getElementById("canvasbg").style.display=t?"":"none"}}},mounted(){const t=document.getElementById("canvas"),e=document.getElementById("canvasbg"),n=document.getElementById("maskCanvas"),i=document.getElementById("nextCanvas"),s=document.getElementById("playBtn"),o=document.getElementById("clearBtn"),a=t.getContext("2d"),r=e.getContext("2d"),c=document.getElementById("container");let l=!1,d=!1,u=[],h=!1,f=0,m=[],g=[],p=this;function v(){i.width=n.width=e.width=t.width=c.offsetWidth,i.height=n.height=e.height=t.height=c.offsetHeight,p.local.grid&&function(){r.strokeStyle="#aaa",r.lineWidth=1;a.lineWidth=1;let t=40;for(;;){for(let n=1;n<=4;n++){if(t+=40,t>e.height)return;r.beginPath(),r.moveTo(0,t),r.lineTo(e.width,t),r.stroke()}t+=40}}()}function w(){u.length=0,x(t),g.length=0}function y(e){if(e.touches){const n=t.getBoundingClientRect(),i=e.touches[0]||e.changedTouches[0];return{offsetX:i.clientX-n.left,offsetY:i.clientY-n.top}}{let{offsetX:t,offsetY:n}=e;return{offsetX:t,offsetY:n}}}function k(t){if(l=!0,!l)return;h=!0,f=new Date,a.beginPath();let{offsetX:e,offsetY:n}=y(t);a.moveTo(e,n),u.push({x:e,y:n,t:-1})}function b(){h=!1,u.length>1&&g.push(u),u=[],p.isMask&&g.length==m.length&&m.length==g.length&&p.recognize()}function _(t){if(!l||!h)return;let{offsetX:e,offsetY:n}=y(t);u.push({x:e,y:n,t:(new Date).getTime()-f.getTime(),color:a.strokeStyle,width:p.penWidth}),a.strokeStyle=p.penColor,a.lineWidth=p.penWidth,a.lineTo(e,n),a.stroke(),f=new Date}function x(t){t.getContext("2d").clearRect(0,0,t.width,t.height)}async function C(t){return new Promise(e=>setTimeout(e,t))}async function S(t,e,n,i,s=1){let o=t.getContext("2d");o.beginPath();for(let t=0;t<e.length;t++)for(let a=0,r=e[t];a<r.length;a++){const{x:t,y:e,t:c,color:l,width:d}=r[a];c<0?(o.beginPath(),o.moveTo(t,e)):(o.lineWidth=d,o.strokeStyle=i||l,o.lineTo(t,e),o.stroke()),n&&await C(c*s)}}document.addEventListener("touchmove",(function(t){t.preventDefault()}),{passive:!1}),s.addEventListener("click",(function(){0!==g.length&&(d=!0,x(t),d&&S(t,g,!0,0,p.local.nextSpeed))})),this.$refs.maskBtn.addEventListener("click",(function(){m=g.slice(),x(n),S(n,m,0,p.local.maskColor),w()})),o.addEventListener("click",w),t.addEventListener("touchstart",k),t.addEventListener("mousedown",k),t.addEventListener("mouseup",b),t.addEventListener("touchend",b),t.addEventListener("mousemove",_),t.addEventListener("touchmove",_),window.addEventListener("resize",v),v(),async function t(){x(i),m.length&&g.length<m.length&&await S(i,[m[g.length]],!0,0,p.local.nextSpeed),await C(500),await t()}()},computed:{penColor:{get(){return this.$store.state.local.penColor},set(t){this.saveLocal({penColor:t})}}}},h=(n("6cb1"),n("2877")),f=Object(h.a)(u,(function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"container"}},[t.word&&t.maskWord?e("div",{staticClass:"spell"},[e("div",{domProps:{innerHTML:t._s(t.fmtWords())}})]):t._e(),e("canvas",{attrs:{id:"canvasbg"}}),e("canvas",{attrs:{id:"maskCanvas"}}),e("canvas",{attrs:{id:"nextCanvas"}}),e("canvas",{ref:"canvas",staticStyle:{"z-index":"1"},attrs:{id:"canvas"}})]),e("div",{staticStyle:{width:"100%"},attrs:{id:"bts"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[e("button",{attrs:{id:"playBtn"}},[t._v("Play")]),e("button",{ref:"maskBtn",class:{selected:t.isMask},on:{click:function(e){t.isMask=!t.isMask}}},[t._v("Mask")]),e("button",{attrs:{id:"clearBtn"}},[t._v("Clear")])]),e("div",{attrs:{id:"topbts"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.penWidth,expression:"penWidth"}],attrs:{type:"range",min:"1",max:"20",step:"1"},domProps:{value:t.penWidth},on:{__r:function(e){t.penWidth=e.target.value}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.penColor,expression:"penColor"}],attrs:{type:"color"},domProps:{value:t.penColor},on:{input:function(e){e.target.composing||(t.penColor=e.target.value)}}})])])])])}),[],!1,null,"24bd506b",null).exports,m={props:["showgame"],data:()=>({clickIndex:0,item:null}),mounted:function(){},deactivated(){},computed:{},methods:{getLink:t=>t.url?t.url:"games/"+(t.path||t.name)+"/index.html",getImage:t=>t.imgUrl&&0==t.imgUrl.indexOf("http")?t.imgUrl:"games/"+(t.path||t.name)+"/"+(t.imgUrl||"cover.png"),select(t,e){this.item=e,e._blank&&(window.abcWindow=window.open("about:_blank","abc"),setTimeout(()=>{window.abcWindow.location.href=this.getLink(e)},500)),this.$emit("select")}},watch:{}},g={data:()=>({}),mounted(){},methods:{save(t){this.lock||this.saveConfig(t)},toggleLock(){this.local.pass&&prompt("Current password")!=this.local.pass||this.saveLocal({lock:!this.local.lock})},updatePass(){this.local.pass&&prompt("Current password")!=this.local.pass||(this.saveLocal({pass:prompt("New password")}),alert("ok"))},toggleSound(){this.config.sound=this.config.sound?"":"YD",this.save()},refreshCache(){"serviceWorker"in navigator&&caches.keys().then((function(t){t.forEach((function(t){confirm("delete cache "+t)&&caches.delete(t)}))}))},openGame(t,e){this.$emit("openGame",t,e)}},computed:{},watch:{}},p={created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})},data:()=>({showgame:1,clockt:0,rightCn:0,wrongCn:0,curAct:0,list:[],curIndex:0,speaking:!1,seconds:15,timer:0,clickIndex:-1,showGameIf:!1,showInput:!1,lan:"en",lans:["en"],lanMode:"auto",startCount:0,fill:[],letters2:[],letters:[],isCorrect:0,refresing:0,syning:0,lastYesIndex:-1,refreshing:!1,registration:null,updateExists:!1,showSetting:0}),components:{GameList:(n("117b"),Object(h.a)(m,(function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"figure-list"},t._l(t.config.games||[],(function(n,i){return e("li",{key:i},[e("div",{staticClass:"itemText"},[e("span",[t._v(t._s(i+1)+"."+t._s(n.name))])]),e("figure",{staticClass:"animated",class:{tada:t.clickIndex==i},staticStyle:{cursor:"pointer"},style:{backgroundImage:`url(${t.getImage(n)})`},on:{click:function(e){return t.select(i,n)}}})])})),0),t.showgame&&t.item?e("div",{staticStyle:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","z-index":"100",background:"#fff",overflow:"hidden"}},[t.showgame&&t.item?e("iframe",{attrs:{id:"gamefr",src:t.getLink(t.item)}}):t._e()]):t._e()])}),[],!1,null,"25eb85aa",null)).exports,Setting:(n("69e1"),Object(h.a)(g,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.refreshCache()}}},[t._v("Refresh Cache")])]),e("div",[e("span",[t._v("Sound YD:"),e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.toggleSound()}}},[t._v(t._s(t.config.sound?"ON":"OFF"))])])]),e("div",[e("div",[t._v("Enable Language:")]),t._l(t.config.langs||[],(function(n){return e("div",{key:n},[t._v(" "+t._s(n)+" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.config.enable[n],expression:"config.enable[lan]"}],attrs:{disabled:t.local.lock,type:"checkbox"},domProps:{checked:Array.isArray(t.config.enable[n])?t._i(t.config.enable[n],null)>-1:t.config.enable[n]},on:{change:[function(e){var i=t.config.enable[n],s=e.target,o=!!s.checked;if(Array.isArray(i)){var a=t._i(i,null);s.checked?a<0&&t.$set(t.config.enable,n,i.concat([null])):a>-1&&t.$set(t.config.enable,n,i.slice(0,a).concat(i.slice(a+1)))}else t.$set(t.config.enable,n,o)},function(e){return t.save()}]}})])}))],2),e("div",[t._v("passNum:"),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config._passNum,expression:"config._passNum",modifiers:{number:!0}}],attrs:{min:"1",disabled:t.local.lock},domProps:{value:t.config._passNum},on:{blur:[function(e){return t.save(t.config)},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.config,"_passNum",t._n(e.target.value))}}})]),e("div",[e("span",[t._v("Estimate Url:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.config._estUrl,expression:"config._estUrl"}],domProps:{value:t.config._estUrl},on:{change:function(e){return t.save()},input:function(e){e.target.composing||t.$set(t.config,"_estUrl",e.target.value)}}})]),e("div",[e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.openGame(t.config.gameTime1,1)}}},[t._v("Skip Test")])]),e("div",[e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.updatePass()}}},[t._v("Update Pass")])]),e("div",[e("a",{on:{click:t.toggleLock}},[t._v("Locked:")]),t._v(t._s(t.local.lock?"Y":"N")+" ")]),e("div",[e("a",{on:{click:function(e){return t.saveLocal({grid:!t.local.grid})}}},[t._v("Grid:")]),t._v(t._s(t.local.grid?"Y":"N")+" ")]),e("div",[e("a",{on:{click:function(e){return t.saveLocal({maskWord:!t.local.maskWord})}}},[t._v("maskWord:")]),t._v(t._s(t.local.maskWord?"Y":"N")+" ")]),e("div",[t._v(" Mask Color:"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maskColor,expression:"maskColor"}],attrs:{type:"color"},domProps:{value:t.maskColor},on:{input:function(e){e.target.composing||(t.maskColor=e.target.value)}}})]),e("div",[t._v(" Next Speed: "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.nextSpeed,expression:"nextSpeed",modifiers:{number:!0}}],attrs:{type:"range",min:"1",max:"5",step:"1"},domProps:{value:t.nextSpeed},on:{__r:function(e){t.nextSpeed=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "+t._s(t.nextSpeed)+" ")])])}),[],!1,null,"cc88511c",null)).exports,WriteDraw:f},mounted:function(){let t=l()('<iframe id="myaudio" style="display:none;" referrerpolicy="no-referrer" />');t.appendTo("body");let e=t[0],n=e.contentDocument||e.contentWindow.document;n.body.innerHTML='<audio id="sound" controls ></audio>';let i=n.querySelector("audio#sound");this.autio=i,this.refresh(),this.randList();let s=this;document.addEventListener("click",t=>{s.$refs.setting&&!s.$refs.setting.$el.contains(t.target)&&(s.showSetting=0)})},activated(){},deactivated(){clearInterval(this.timer)},computed:{listenChangeCn(){const{rightCn:t,wrongCn:e}=this;return{rightCn:t,wrongCn:e}},dictList(){return this.items||[]}},methods:{getImgUrl:t=>t.img?t.img:t.en?t.imgBase+t.en+".jpg":void 0,count(t,e){return this.config.countMap||(this.config.countMap={}),this.config.countMap[this.lan]||(this.config.countMap[this.lan]={}),null==this.config.countMap[this.lan][t[this.lan]]&&(this.config.countMap[this.lan][t[this.lan]]=0),void 0!==e&&(this.config.countMap[this.lan][t[this.lan]]=e,this.saveConfig()),this.config.countMap[this.lan][t[this.lan]]},updateAvailable(t){this.registration=t.detail,this.updateExists=!0,this.refreshApp()},refreshApp(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})},openGame(t,e=0){let n=o.a.get("pwd");if(n&&e){prompt("current pwd:")==n&&this.startShowGame(t)}else this.startShowGame(t)},async refresh(){let t=this;if(!this.refresing){this.refresing=1;for(var e=5;e>=0;e--)try{await new Promise((e,n)=>{l.a.ajax({url:t.config.url,dataType:"jsonp",jsonpCallback:"cb"}).done((function(n){let i=0==t.dictList.length,s=JSON.parse(r.a.ungzip(atob(n),{to:"string"}));t.saveItems(s.items||[]),i&&t.randList(),t.saveConfig(s.config||{}),e()})).fail((function(t){n(t)}))});break}catch(t){0==e&&alert("fail refresh data"),await new Promise(t=>setTimeout(t,3e3))}this.syning=0,this.refresing=0}},fillLetterIndex(t){-1==this.fill.indexOf(t)&&(this.fill.push(t),this.fill.length==this.letters2.length&&(this.isCorrect=this.fill.map(t=>this.letters2[t]).join("")==this.letters.join("")?1:2,1==this.isCorrect?(async()=>{await this.select(0,this.list[0]),await new Promise(t=>setTimeout(t,1e3))})():2==this.isCorrect&&this.say(this.getWrongSetence())))},unFillLetterIndex(t){this.fill.length>t&&this.fill.splice(t)},sendFeedBack(t){var e=this.list[this.curIndex];null==e.rTimes&&(e.rTimes=0),t!=this.curIndex?(e.rTimes>0&&(e.rTimes=0),e.rTimes--):e.rTimes++},closeGame(){this.showGameIf=!1,clearTimeout(this.timer),this.randList()},startShowGame(t){this.clockt=parseInt(60*t*1e3),this.showGameIf=!0,this.config._estUrl&&fetch(this.config._estUrl),this.clockTimer&&clearInterval(this.clockTimer),this.clockTimer=setInterval(()=>{if(this.clockt=this.clockt-1e3,this.clockt<=0){if(window.abcWindow){try{window.abcWindow.close()}catch(t){}window.abcWindow=0}this.showGameIf=!1,this.rightCn=this.wrongCn=0,clearInterval(this.clockTimer),this.randList()}},1e3)},replay(){let t=this.list[this.curIndex][this.lan];this.say(t)},async select(t,e,n){if(this.selected)return;this.clickIndex==t?this.clickIndex=-1:this.clickIndex=t,this.selected=1;let i=e[this.lan];if(t==this.curIndex){if(this.lastYesIndex=t,(0!=this.mode&&3!=this.mode||3==this.mode&&!n)&&(this.rightCn++,this.curAct=1,this.count(e,this.count(e)+1)),await this.say(i),this.rightCn-this.wrongCn>=this.config._passNum)return this.rightCn=0,this.startShowGame(this.config.gameTime2);await new Promise(t=>setTimeout(t,1e3)),await this.randList()}else await this.say(i),this.wrongCn++,this.curAct=-1,this.list.forEach(t=>this.count(t,this.count(t)-1));this.selected=0},n(){return 1==this.mode?4:1},async randList(){let t=Object.keys(this.config.enable).filter(t=>this.config.enable[t]);if(0==t.length)return void alert("please select  at least one language first");if(this.lan=t[parseInt(Math.random()*t.length)],0==this.dictList.length)return;let e=this.dictList;e.length<this.n()&&(e=this.dictList),this.selected=0,this.list.length=0,this.fill.length=0,this.letters2.length=0,this.letters.length=0,this.isCorrect=0;for(var n=0;n<this.n();n++){var i=parseInt(e.length*Math.random());this.list.indexOf(e[i])>-1?n--:this.list.push(e[i])}this.curIndex=parseInt(Math.random()*this.list.length),this.letters2=this.list[this.curIndex][this.lan].toLowerCase().trim().split("").sort(),this.letters=this.list[this.curIndex][this.lan].toLowerCase().trim().split(""),0!=this.mode&&this.replay(),this.clickIndex=-1},async say(t){if(!t)return;let e=this.config.ttslan[this.lan];this.speaking=!0;let n=[];"en"==this.lan&&"YD"==this.config.sound&&n.push("https://dict.youdao.com/dictvoice?type=2&audio="+encodeURIComponent(t.trim())),null!=this.config.ttsBase&&n.push(this.config.ttsBase+this.lan+"/"+encodeURIComponent(t.trim().replace(/[?.!]/i,"_"))+".mp3"),n.push(`https://fanyi.baidu.com/gettts?lan=${encodeURIComponent(e)}&text=${encodeURIComponent(t.trim())}&spd=3&source=web`);let i=this.autio;i.rel="noreferrer";for(let t=0;t<n.length;t++){if(await new Promise(e=>{i.onerror=function(){e(0)},i.onended=function(){return e(1)};try{i.src=n[t],i.play()}catch(t){}})>0)break}this.speaking=!1},getWrongSetence(){let t=this.config.tips[this.lan];return t[parseInt(Math.random()*t.length)]}},watch:{lanMode(){this.randList()},mode(){this.randList()}}},v=(n("aaa3"),Object(h.a)(p,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"user-select":"none"},attrs:{id:"con"}},[e("div",{staticStyle:{"text-align":"left",color:"red","min-height":"1em",height:"1em","margin-bottom":"8px"}},[t._l(t.config._passNum,(function(n){return e("font-awesome-icon",{key:n,staticClass:"star",class:{enable:t.rightCn-t.wrongCn>=n},attrs:{icon:"star","fixed-width":""}})}))],2),3!=t.mode&&t.list.length>0&&t.curIndex>=0?e("div",{staticClass:"word",staticStyle:{color:"dodgerblue","font-size":"300%","font-weight":"900","text-align":"center","margin-bottom":"10px"},on:{click:t.replay}},[t._v(" "+t._s(t.list[t.curIndex][t.lan])+" ")]):t._e(),4==t.mode?e("WriteDraw",{attrs:{word:t.list[t.curIndex],lan:t.lan}}):t._e(),4!=t.mode?e("ul",{staticClass:"figure-list",staticStyle:{"text-align":"center"}},t._l(t.list,(function(n,i){return e("li",{key:i,staticClass:"card",class:{click:t.clickIndex==i,ready:!t.selected},on:{click:function(e){return t.select(i,n,e)}}},[e("div",{staticClass:"card__content"},[e("div",{staticClass:"itemText card__back"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(n[t.lan].toLowerCase()))]),0!=t.count(n)?e("span",{class:{red:t.count(n)>0,green:t.count(n)<0},staticStyle:{flex:"0","font-size":"80%",position:"absolute",bottom:"0"}},[t._v(t._s(0==t.count(n)?"":t.count(n)>0?"+":"")+t._s(t.count(n)))]):t._e()]),e("figure",{staticClass:"card__front",staticStyle:{cursor:"pointer"},style:{backgroundImage:`url(${t.getImgUrl(n)})`}})])])})),0):t._e(),e("div",{staticStyle:{cursor:"pointer","user-select":"none","margin-top":"10px","text-align":"center"}},[e("span",{on:{click:t.replay}},[e("font-awesome-icon",{class:{speaking:t.speaking},attrs:{icon:"volume-up","fixed-width":""}}),t._v("Replay ")],1),e("span",{staticStyle:{"margin-left":"10px"},on:{click:function(e){t.wrongCn+=3,t.randList()}}},[e("font-awesome-icon",{class:{speaking:t.speaking},attrs:{icon:"step-forward","fixed-width":""}}),t._v("Next")],1),e("span",{staticStyle:{"margin-left":"10px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{disabled:t.local.lock},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.mode=e.target.multiple?n:n[0]},function(e){return t.saveLocal({mode:t.mode})}]}},[e("option",{attrs:{value:"1"}},[t._v("1.Listen")]),e("option",{attrs:{value:"0"}},[t._v("0.Read")]),e("option",{attrs:{value:"3"}},[t._v("3.Write")]),e("option",{attrs:{value:"4"}},[t._v("4.Write2")])])]),e("span",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.refresh()}}},[e("font-awesome-icon",{attrs:{icon:"refresh","fixed-width":""}}),t._v("("+t._s(t.dictList.length)+")"+t._s(t.refresing?"...":""))],1),t._e(),e("span",{staticStyle:{"margin-left":"10px"},on:{click:function(e){e.stopPropagation(),t.showSetting=1}}},[e("font-awesome-icon",{attrs:{icon:"gear","fixed-width":""}}),t._v("Setting")],1),e("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"audio",staticStyle:{height:"0px",width:"0px"},attrs:{controls:"",referrerpolicy:"no-referrer"}})]),3==t.mode?e("div",{staticClass:"board",staticStyle:{"text-align":"center"}},[e("div",[e("div",{staticStyle:{position:"relative"}},t._l(t.letters,(function(n,i){return e("span",{key:`${n}${i}`,staticClass:"al",staticStyle:{position:"relative"},on:{click:function(e){return t.unFillLetterIndex(i)}}},[i<t.fill.length?e("b",[t._v(t._s(t.letters2[t.fill[i]]))]):e("b",{staticStyle:{visibility:"hidden"}},[t._v(t._s(n))]),i==t.letters.length-1&&t.isCorrect?e("div",{staticStyle:{position:"absolute",top:"0",right:"-2em",color:"red"}},[e("font-awesome-icon",{attrs:{"fixed-width":"",icon:1==t.isCorrect?"thumbs-up":"thumbs-down"}})],1):t._e()])})),0),e("div",{staticStyle:{"border-top":"1px dashed #ccc"}},[t._l(t.letters2,(function(n,i){return[t.fill.indexOf(i)>-1?e("span",{key:`${n}${i}`,staticClass:"al",staticStyle:{visibility:"hidden"},on:{click:function(e){return t.fillLetterIndex(i)}}},[t._v(" "+t._s(n))]):t._e()]})),t._l(t.letters2,(function(n,i){return[-1==t.fill.indexOf(i)?e("span",{key:`${n}${i}`,staticClass:"al",on:{click:function(e){return t.fillLetterIndex(i)}}},[t._v(" "+t._s(n))]):t._e()]}))],2)])]):t._e(),t.showGameIf?e("div",{staticStyle:{background:"white"}},[e("GameList",{attrs:{showgame:t.showgame,id:"gamefr"},on:{select:function(e){t.showgame=1}}}),e("div",{staticStyle:{position:"fixed",top:"0",cursor:"pointer",right:"0",color:"white","z-index":"10000"}},[e("span",{on:{click:function(e){return t.openGame(6)}}},[t._v(t._s(t.clockt/1e3))]),e("span",{staticStyle:{"font-size":"1.5em"}},[e("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em","margin-right":"10px"},attrs:{icon:"arrow-left","fixed-width":""},on:{click:function(e){t.showgame=!t.showgame}}}),e("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em"},attrs:{icon:"times-circle","fixed-width":""},on:{click:function(e){return t.closeGame()}}})],1)])],1):t._e(),e("setting",{directives:[{name:"show",rawName:"v-show",value:t.showSetting,expression:"showSetting"}],ref:"setting",staticClass:"centered",staticStyle:{background:"#ddd",padding:"10px"},on:{openGame:t.openGame}})],1)}),[],!1,null,"1968e02a",null)).exports,w=n("be33"),y=n("11ca"),k=n("2753"),b=n("4ab5"),_=n("ad3d"),x=n("9483");Object(x.a)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline(){},error(t){}});var C=n("2f62");i.a.use(C.a);let S=localStorage;var I=new C.a.Store({state:{local:Object.assign({mode:1,lock:0,pass:"",grid:!1,maskWord:!1,maskColor:"#ddd",penColor:"black",nextSpeed:2},S.local?JSON.parse(S.local):{}),config:Object.assign({url:"https://smlog.github.io/data/dict.js",enable:{},gameTime1:0,gameTime2:0,sound:1},S.config?JSON.parse(S.config):{}),items:S.items?JSON.parse(S.items):[]},mutations:{local(t,e){t.local=Object.assign(t.local,e),S.local=JSON.stringify(t.local)},config(t,e){t.config=Object.assign(t.config,e),S.config=JSON.stringify(t.config)},items(t,e){t.items.length=0,t.items.push(...e),S.items=JSON.stringify(t.items)}},actions:{},modules:{},getters:{}});var L={data:()=>({}),methods:{saveConfig(t){this.$store.commit("config",t)},saveItems(t){this.$store.commit("items",t)},saveLocal(t){this.$store.commit("local",t)}},computed:{mode:{get(){return this.$store.state.local.mode},set(t){this.saveLocal({mode:t})}},local(){return this.$store.state.local},config(){return this.$store.state.config},items(){return this.$store.state.items},maskColor:{get(){return this.$store.state.local.maskColor},set(t){this.saveLocal({maskColor:t})}},nextSpeed:{get(){return this.$store.state.local.nextSpeed},set(t){this.saveLocal({nextSpeed:t})}},maskWord:{get(){return this.$store.state.local.maskWord},set(t){this.saveLocal({maskWord:t})}}}};w.c.add(y.a,k.a,b.a),window.$=l.a,i.a.component("font-awesome-icon",_.a),i.a.component("font-awesome-layers",_.b),i.a.component("font-awesome-layers-text",_.c),i.a.config.productionTip=!1,i.a.mixin(L),new i.a({render:t=>t(v),store:I,data:{eventHub:new i.a}}).$mount("#app");let T=0;document.documentElement.addEventListener("touchstart",(function(t){t.touches.length>1&&t.preventDefault()})),document.documentElement.addEventListener("touchend",(function(t){let e=(new Date).getTime();e-T<=300?t.preventDefault():T=e}),!1),document.documentElement.addEventListener("gesturestart",(function(t){t.preventDefault()}))},"69e1":function(t,e,n){"use strict";n("442c")},"6cb1":function(t,e,n){"use strict";n("ca66")},"8d2b":function(t,e,n){},"913a":function(t,e,n){},aaa3:function(t,e,n){"use strict";n("8d2b")},ca66:function(t,e,n){}});