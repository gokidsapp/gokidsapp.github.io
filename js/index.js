!function(t){function e(e){for(var n,a,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(d&&d(e);h.length;)h.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var n={},s={index:0},o=[];function a(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=n,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(i,n,function(e){return t[e]}.bind(null,n));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([1,"chunk-vendors"]),i()}({1:function(t,e,i){t.exports=i("56d7")},"117b":function(t,e,i){"use strict";i("913a")},"56d7":function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),s=(i("14d9"),i("b7ef"),i("da7e")),o=i.n(s),a=i("d7ac"),r=i.n(a),l=i("1157"),c=i.n(l),d=i("c9bf");let u=document.getElementById("canvas"),h=document.getElementById("maskCanvas"),f=document.getElementById("nextCanvas"),m=document.getElementById("playBtn"),p=document.getElementById("clearBtn"),g=null,v=document.getElementById("container"),w=!1,y=!1,x=[],k=!1,b=0,_=[],C=[],S=function(t){t.preventDefault()};var I={props:["word","lan"],data:()=>({isMask:0,penWidth:5,loopPlay:0,inputText:""}),created(){},methods:{resizeCanvas(){Array.from(v.querySelectorAll("canvas")).map(t=>{t.width=v.offsetWidth,t.height=v.offsetHeight}),this.local.grid&&this.drawGrid()},drawGrid(){let t=this.$refs.canvasbg,e=this.$refs.canvasbg.getContext("2d");e.strokeStyle="#ddd",e.lineWidth=1,e.clearRect(0,0,t.width,t.height);const i=40*(1+.1*this.scale);e.setLineDash([10,10]);let n=t.height/2;n-=1.5*i;let s=2*parseInt(n/(3*i))+1,o=n-=3*parseInt(n/(3*i))*i;1==s&&(s=parseInt((t.height-40)/(3*i)),o=(t.height-3*i*s)/2,n=o);for(let o=0;o<s;o++)e.beginPath(),e.setLineDash([]),e.moveTo(0,n),e.lineTo(t.width,n),e.stroke(),n+=i,e.beginPath(),e.setLineDash([10,10]),e.moveTo(0,n),e.lineTo(t.width,n),e.stroke(),n+=i,e.moveTo(0,n),e.lineTo(t.width,n),e.stroke(),e.beginPath(),e.setLineDash([]),n+=i,e.moveTo(0,n),e.lineTo(t.width,n),e.stroke();e.fillStyle="black",e.font=2*i+"px Arial",e.textBaseline="middle",e.fillStyle="#ddd";let a=this.inputText||this.word&&this.word[this.lan];if(a){let n=a.split(""),s=0;for(let r=1,l=0;r<=n.length;r++){let c=a.substring(l,r);e.measureText(c).width+40>t.width?("en"==this.lan?(c=a.substring(l,r-1)+"-",e.measureText(c).width+40<t.width?l=r-1:(c=a.substring(l,r-2)+"-",l=r-2)):(c=a.substring(l,r-1),l=r-1),e.fillText(c,20,3*s*i+o+1.5*i),s++,r=l):r==n.length&&e.fillText(a.substring(l,r),20,3*s*i+o+1.5*i)}}},fmtWords(){let t=this.lan,e=this.word;return("en"==t?e[t].split(/[^a-z]/gi):e[t].split("")).join("<br />")},clickPaly(){this.loopPlay++,this.loopPlay>2&&(this.loopPlay=0)},async recognize(){const t=await Object(d.createWorker)("chi_tra");await t.recognize(this.$refs.canvas.toDataURL());await t.terminate()},valid:()=>0!=C.length},watch:{"$store.state.local.grid":{handler(t){this.$refs.canvasbg.style.display=t?"":"none"}},scale:{handler(t){this.drawGrid()}},word:{deep:!0,handler(t){this.inputText="",this.resizeCanvas()}}},beforeDestroy(){document.removeEventListener("touchmove",S)},mounted(){u=document.getElementById("canvas"),h=document.getElementById("maskCanvas"),f=document.getElementById("nextCanvas"),m=document.getElementById("playBtn"),p=document.getElementById("clearBtn"),g=u.getContext("2d"),v=document.getElementById("container");let t=this;function e(){x.length=0,a(u),C.length=0}function i(t){if(t.touches){const e=u.getBoundingClientRect(),i=t.touches[0]||t.changedTouches[0];return{offsetX:i.clientX-e.left,offsetY:i.clientY-e.top}}{let{offsetX:e,offsetY:i}=t;return{offsetX:e,offsetY:i}}}function n(t){if(w=!0,!w)return;k=!0,b=new Date,g.beginPath();let{offsetX:e,offsetY:n}=i(t);g.moveTo(e,n),x.push({x:e,y:n,t:-1})}function s(){k=!1,x.length>1&&C.push(x),x=[],t.isMask&&C.length==_.length&&_.length==C.length&&t.recognize()}function o(e){if(!w||!k)return;let{offsetX:n,offsetY:s}=i(e);x.push({x:n,y:s,t:(new Date).getTime()-b.getTime(),color:g.strokeStyle,width:t.penWidth}),g.strokeStyle=t.penColor,g.lineWidth=t.penWidth,g.lineTo(n,s),g.stroke(),b=new Date}function a(t){t.getContext("2d").clearRect(0,0,t.width,t.height)}async function r(t){return new Promise(e=>setTimeout(e,t))}async function l(t,e,i,n,s=1){let o=t.getContext("2d");o.beginPath();let a=t.startId=(new Date).getTime();for(let l=0;l<e.length;l++)for(let c=0,d=e[l];c<d.length;c++){const{x:e,y:l,t:u,color:h,width:f}=d[c];if(t.startId!=a)return a;u<0?(o.beginPath(),o.moveTo(e,l)):(o.lineWidth=f,o.strokeStyle=n||h,o.lineTo(e,l),o.stroke()),i&&await r(u*s)}}document.addEventListener("touchmove",S,{passive:!1}),m.addEventListener("click",(async function(){do{if(0===C.length)return;if(y=!0,a(u),!y)return;if(await l(u,C,!0,0,t.local.nextSpeed))return;await r(1e3)}while(2==t.loopPlay);t.loopPlay=0})),this.$refs.maskBtn.addEventListener("click",(async function(){_=C.slice(),a(h),await l(h,_,0,t.local.maskColor),e()})),p.addEventListener("click",e),u.addEventListener("touchstart",n),u.addEventListener("mousedown",n),u.addEventListener("mouseup",s),u.addEventListener("touchend",s),u.addEventListener("mousemove",o),u.addEventListener("touchmove",o),window.addEventListener("resize",this.resizeCanvas),this.resizeCanvas(),async function e(){a(f),_.length&&C.length<_.length&&await l(f,[_[C.length]],!0,0,t.local.nextSpeed),await r(500),await e()}()},computed:{penColor:{get(){return this.$store.state.local.penColor},set(t){this.saveLocal({penColor:t})}}}},L=(i("e466"),i("2877")),T=Object(L.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column",position:"absolute",top:"0",left:"0",right:"0",bottom:"0"}},[e("div",{attrs:{id:"topbts"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[e("span",[e("font-awesome-icon",{attrs:{icon:"pen","fixed-width":""}}),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.penWidth,expression:"penWidth",modifiers:{number:!0}}],attrs:{type:"range",min:"1",max:"20",step:"1"},domProps:{value:t.penWidth},on:{__r:function(e){t.penWidth=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})],1),e("span",[e("font-awesome-icon",{attrs:{icon:"magnifying-glass","fixed-width":""}}),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.scale,expression:"scale",modifiers:{number:!0}}],attrs:{type:"range",min:"1",max:"10",step:"1"},domProps:{value:t.scale},on:{__r:function(e){t.scale=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.penColor,expression:"penColor"}],attrs:{type:"color"},domProps:{value:t.penColor},on:{input:function(e){e.target.composing||(t.penColor=e.target.value)}}})])]),e("div",{staticStyle:{"flex-grow":"1"}},[e("div",{ref:"container",attrs:{id:"container"}},[(t.word&&t.maskWord,t._e()),e("canvas",{ref:"canvasbg"}),e("canvas",{attrs:{id:"maskCanvas"}}),e("canvas",{attrs:{id:"nextCanvas"}}),e("canvas",{ref:"canvas",staticStyle:{"z-index":"1"},attrs:{id:"canvas"}})])]),e("div",{staticStyle:{width:"100%"},attrs:{id:"bts"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between",width:"100%"}},[e("a",{class:{selected:2==t.loopPlay},attrs:{id:"playBtn"},on:{click:function(e){return t.clickPaly()}}},[e("font-awesome-icon",{attrs:{icon:["fas","play"],"fixed-width":""}})],1),e("a",{ref:"maskBtn",class:{selected:t.isMask},on:{click:function(e){t.isMask=!t.isMask,t.loopPlay=0}}},[e("font-awesome-icon",{attrs:{icon:["fas","mask"],"fixed-width":""}})],1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],ref:"inputText",staticStyle:{width:"2rem"},domProps:{value:t.inputText},on:{focus:function(e){t.inputText=""},blur:t.drawGrid,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$refs.inputText.blur()},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),e("a",{attrs:{id:"clearBtn"},on:{click:function(e){t.loopPlay=0}}},[e("font-awesome-icon",{attrs:{icon:["fas","eraser"],"fixed-width":""}})],1)])])])}),[],!1,null,"bc7c3482",null).exports,P={props:["showgame"],data:()=>({clickIndex:0,item:null}),mounted:function(){},deactivated(){},computed:{},methods:{getLink:t=>t.url?t.url:"games/"+(t.path||t.name)+"/index.html",getImage:t=>t.imgUrl&&0==t.imgUrl.indexOf("http")?t.imgUrl:"games/"+(t.path||t.name)+"/"+(t.imgUrl||"cover.png"),select(t,e){this.item=e,e._blank&&(window.abcWindow=window.open("about:_blank","abc"),setTimeout(()=>{window.abcWindow.location.href=this.getLink(e)},500)),this.$emit("select")}},watch:{}},$={data:()=>({}),mounted(){},methods:{save(t){this.lock||this.saveConfig(t)},toggleLock(){this.local.pass&&prompt("Current password")!=this.local.pass||this.saveLocal({lock:!this.local.lock})},updatePass(){this.local.pass&&prompt("Current password")!=this.local.pass||(this.saveLocal({pass:prompt("New password")}),alert("ok"))},toggleSound(){this.config.sound=this.config.sound?"":"YD",this.save()},refreshCache(){"serviceWorker"in navigator&&caches.keys().then((function(t){t.forEach((function(t){confirm("delete cache "+t)&&caches.delete(t)}))}))},openGame(t,e){this.$emit("openGame",t,e)}},computed:{},watch:{}},E={created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0})},data:()=>({showgame:1,clockt:0,rightCn:0,wrongCn:0,curAct:0,list:[],curIndex:0,speaking:!1,seconds:15,timer:0,clickIndex:-1,showGameIf:!1,showInput:!1,lan:"en",lans:["en"],lanMode:"auto",startCount:0,fill:[],letters2:[],letters:[],isCorrect:0,refresing:0,syning:0,lastYesIndex:-1,refreshing:!1,registration:null,updateExists:!1,showSetting:0}),components:{GameList:(i("117b"),Object(L.a)(P,(function(){var t=this,e=t._self._c;return e("div",[e("ul",{staticClass:"figure-list"},t._l(t.config.games||[],(function(i,n){return e("li",{key:n},[e("div",{staticClass:"itemText"},[e("span",[t._v(t._s(n+1)+"."+t._s(i.name))])]),e("figure",{staticClass:"animated",class:{tada:t.clickIndex==n},staticStyle:{cursor:"pointer"},style:{backgroundImage:`url(${t.getImage(i)})`},on:{click:function(e){return t.select(n,i)}}})])})),0),t.showgame&&t.item?e("div",{staticStyle:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","z-index":"100",background:"#fff",overflow:"hidden"}},[t.showgame&&t.item?e("iframe",{attrs:{id:"gamefr",src:t.getLink(t.item)}}):t._e()]):t._e()])}),[],!1,null,"25eb85aa",null)).exports,Setting:(i("87c2"),Object(L.a)($,(function(){var t=this,e=t._self._c;return e("div",[e("div",[e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.refreshCache()}}},[t._v("Refresh Cache")])]),e("div",[e("span",[t._v("Sound YD:"),e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.toggleSound()}}},[t._v(t._s(t.config.sound?"ON":"OFF"))])])]),e("div",[e("div",[t._v("Enable Language:")]),t._l(t.config.langs||[],(function(i){return e("div",{key:i},[t._v(" "+t._s(i)+" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.config.enable[i],expression:"config.enable[lan]"}],attrs:{disabled:t.local.lock,type:"checkbox"},domProps:{checked:Array.isArray(t.config.enable[i])?t._i(t.config.enable[i],null)>-1:t.config.enable[i]},on:{change:[function(e){var n=t.config.enable[i],s=e.target,o=!!s.checked;if(Array.isArray(n)){var a=t._i(n,null);s.checked?a<0&&t.$set(t.config.enable,i,n.concat([null])):a>-1&&t.$set(t.config.enable,i,n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.config.enable,i,o)},function(e){return t.save()}]}})])}))],2),e("div",[t._v("passNum:"),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.config._passNum,expression:"config._passNum",modifiers:{number:!0}}],attrs:{min:"1",disabled:t.local.lock},domProps:{value:t.config._passNum},on:{blur:[function(e){return t.save(t.config)},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.config,"_passNum",t._n(e.target.value))}}})]),e("div",[e("span",[t._v("Estimate Url:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.config._estUrl,expression:"config._estUrl"}],domProps:{value:t.config._estUrl},on:{change:function(e){return t.save()},input:function(e){e.target.composing||t.$set(t.config,"_estUrl",e.target.value)}}})]),e("div",[e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.openGame(t.config.gameTime1,1)}}},[t._v("Skip Test")])]),e("div",[e("a",{staticStyle:{cursor:"pointer"},on:{click:function(e){return t.updatePass()}}},[t._v("Update Pass")])]),e("div",[e("a",{on:{click:t.toggleLock}},[t._v("Locked:")]),t._v(t._s(t.local.lock?"Y":"N")+" ")]),e("div",[e("a",{on:{click:function(e){return t.saveLocal({grid:!t.local.grid})}}},[t._v("Grid:")]),t._v(t._s(t.local.grid?"Y":"N")+" ")]),e("div",[e("a",{on:{click:function(e){return t.saveLocal({maskWord:!t.local.maskWord})}}},[t._v("maskWord:")]),t._v(t._s(t.local.maskWord?"Y":"N")+" ")]),e("div",[e("a",{on:{click:function(e){return t.saveLocal({showPic:!t.local.showPic})}}},[t._v("showPic:")]),t._v(t._s(t.local.showPic?"Y":"N")+" ")]),e("div",[t._v(" Mask Color:"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maskColor,expression:"maskColor"}],attrs:{type:"color"},domProps:{value:t.maskColor},on:{input:function(e){e.target.composing||(t.maskColor=e.target.value)}}})]),e("div",[t._v(" Next Speed: "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.nextSpeed,expression:"nextSpeed",modifiers:{number:!0}}],attrs:{type:"range",min:"1",max:"5",step:"1"},domProps:{value:t.nextSpeed},on:{__r:function(e){t.nextSpeed=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "+t._s(t.nextSpeed)+" ")])])}),[],!1,null,"1c47397a",null)).exports,WriteDraw:T},mounted:function(){let t=c()('<iframe id="myaudio" style="display:none;" referrerpolicy="no-referrer" />');t.appendTo("body");let e=t[0],i=e.contentDocument||e.contentWindow.document;i.body.innerHTML='<audio id="sound" controls ></audio>';let n=i.querySelector("audio#sound");this.autio=n,this.refresh(),this.randList();let s=this;document.addEventListener("click",t=>{s.$refs.setting&&!s.$refs.setting.$el.contains(t.target)&&(s.showSetting=0)})},activated(){},deactivated(){clearInterval(this.timer)},computed:{listenChangeCn(){const{rightCn:t,wrongCn:e}=this;return{rightCn:t,wrongCn:e}},dictList(){return this.items||[]}},methods:{getImgUrl:t=>t.img?t.img:t.en?t.imgBase+t.en+".jpg":void 0,count(t,e){return this.config.countMap||(this.config.countMap={}),this.config.countMap[this.lan]||(this.config.countMap[this.lan]={}),null==this.config.countMap[this.lan][t[this.lan]]&&(this.config.countMap[this.lan][t[this.lan]]=0),void 0!==e&&(this.config.countMap[this.lan][t[this.lan]]=e,this.saveConfig()),this.config.countMap[this.lan][t[this.lan]]},updateAvailable(t){this.registration=t.detail,this.updateExists=!0,this.refreshApp()},refreshApp(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})},openGame(t,e=0){let i=o.a.get("pwd");if(i&&e){prompt("current pwd:")==i&&this.startShowGame(t)}else this.startShowGame(t)},async refresh(){let t=this;if(!this.refresing){this.refresing=1;for(var e=5;e>=0;e--)try{await new Promise((e,i)=>{c.a.ajax({url:t.config.url,dataType:"jsonp",jsonpCallback:"cb"}).done((function(i){let n=0==t.dictList.length,s=JSON.parse(r.a.ungzip(atob(i),{to:"string"}));t.saveItems(s.items||[]),n&&t.randList(),t.saveConfig(s.config||{}),e()})).fail((function(t){i(t)}))});break}catch(t){0==e&&alert("fail refresh data"),await new Promise(t=>setTimeout(t,3e3))}this.syning=0,this.refresing=0}},fillLetterIndex(t){-1==this.fill.indexOf(t)&&(this.fill.push(t),this.fill.length==this.letters2.length&&(this.isCorrect=this.fill.map(t=>this.letters2[t]).join("")==this.letters.join("")?1:2,1==this.isCorrect?(async()=>{await this.select(0,this.list[0]),await new Promise(t=>setTimeout(t,1e3))})():2==this.isCorrect&&this.say(this.getWrongSetence())))},unFillLetterIndex(t){this.fill.length>t&&this.fill.splice(t)},sendFeedBack(t){var e=this.list[this.curIndex];null==e.rTimes&&(e.rTimes=0),t!=this.curIndex?(e.rTimes>0&&(e.rTimes=0),e.rTimes--):e.rTimes++},closeGame(){this.showGameIf=!1,clearTimeout(this.timer),this.randList()},startShowGame(t){this.clockt=parseInt(60*t*1e3),this.showGameIf=!0,this.config._estUrl&&fetch(this.config._estUrl),this.clockTimer&&clearInterval(this.clockTimer),this.clockTimer=setInterval(()=>{if(this.clockt=this.clockt-1e3,this.clockt<=0){if(window.abcWindow){try{window.abcWindow.close()}catch(t){}window.abcWindow=0}this.showGameIf=!1,this.rightCn=this.wrongCn=0,clearInterval(this.clockTimer),this.randList()}},1e3)},replay(){let t=this.list[this.curIndex][this.lan];this.say(t)},async select(t,e,i){if(this.selected)return;this.clickIndex==t?this.clickIndex=-1:this.clickIndex=t,this.selected=1;let n=e[this.lan];if(t==this.curIndex){if(this.lastYesIndex=t,(0!=this.mode&&3!=this.mode&&4!=this.mode||3==this.mode&&!i||4==this.mode&&this.$refs.writerDraw.valid())&&(this.rightCn++,this.curAct=1,this.count(e,this.count(e)+1)),await this.say(n),this.rightCn-this.wrongCn>=this.config._passNum)return this.rightCn=0,this.startShowGame(this.config.gameTime2);await new Promise(t=>setTimeout(t,1e3)),await this.randList()}else await this.say(n),this.wrongCn++,this.curAct=-1,this.list.forEach(t=>this.count(t,this.count(t)-1));this.selected=0},n(){return 1==this.mode?4:1},async randList(){let t=Object.keys(this.config.enable).filter(t=>this.config.enable[t]);if(0==t.length)return void alert("please select  at least one language first");if(this.lan=t[parseInt(Math.random()*t.length)],0==this.dictList.length)return;let e=this.dictList;e.length<this.n()&&(e=this.dictList),this.selected=0,this.list.length=0,this.fill.length=0,this.letters2.length=0,this.letters.length=0,this.isCorrect=0;for(var i=0;i<this.n();i++){var n=parseInt(e.length*Math.random());this.list.indexOf(e[n])>-1?i--:this.list.push(e[n])}this.curIndex=parseInt(Math.random()*this.list.length),this.letters2=this.list[this.curIndex][this.lan].toLowerCase().trim().split("").sort(),this.letters=this.list[this.curIndex][this.lan].toLowerCase().trim().split(""),0!=this.mode&&this.replay(),this.clickIndex=-1},async say(t){if(!t)return;let e=this.config.ttslan[this.lan];this.speaking=!0;let i=[];"en"==this.lan&&"YD"==this.config.sound&&i.push("https://dict.youdao.com/dictvoice?type=2&audio="+encodeURIComponent(t.trim())),null!=this.config.ttsBase&&i.push(this.config.ttsBase+this.lan+"/"+encodeURIComponent(t.trim().replace(/[?.!]/i,"_"))+".mp3"),i.push(`https://fanyi.baidu.com/gettts?lan=${encodeURIComponent(e)}&text=${encodeURIComponent(t.trim())}&spd=3&source=web`);let n=this.autio;n.rel="noreferrer";for(let t=0;t<i.length;t++){if(await new Promise(e=>{n.onerror=function(){e(0)},n.onended=function(){return e(1)};try{n.src=i[t],n.play()}catch(t){}})>0)break}this.speaking=!1},getWrongSetence(){let t=this.config.tips[this.lan];return t[parseInt(Math.random()*t.length)]}},watch:{lanMode(){this.randList()},mode(){this.randList()}}},O=(i("67f3"),Object(L.a)(E,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{"user-select":"none",display:"flex","flex-direction":"column",position:"fixed",top:"0",right:"0",left:"0",bottom:"0"},attrs:{id:"con"}},[e("div",{staticStyle:{"text-align":"left",color:"red","min-height":"1em",height:"1em","margin-bottom":"8px"}},[t._l(t.config._passNum,(function(i){return e("font-awesome-icon",{key:i,staticClass:"star",class:{enable:t.rightCn-t.wrongCn>=i},attrs:{icon:"star","fixed-width":""}})}))],2),e("div",{staticStyle:{cursor:"pointer","user-select":"none","margin-top":"10px","text-align":"center"}},[e("span",{on:{click:t.replay}},[e("font-awesome-icon",{class:{speaking:t.speaking},attrs:{icon:"volume-up","fixed-width":""}})],1),e("span",{staticStyle:{"margin-left":"10px"},on:{click:function(e){t.wrongCn+=3,t.randList()}}},[e("font-awesome-icon",{class:{speaking:t.speaking},attrs:{icon:"step-forward","fixed-width":""}})],1),e("span",{staticStyle:{"margin-left":"10px"}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.mode,expression:"mode"}],attrs:{disabled:t.local.lock},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.mode=e.target.multiple?i:i[0]},function(e){return t.saveLocal({mode:t.mode})}]}},[e("option",{attrs:{value:"1"}},[t._v("1.Listen")]),e("option",{attrs:{value:"0"}},[t._v("0.Read")]),e("option",{attrs:{value:"3"}},[t._v("3.Write")]),e("option",{attrs:{value:"4"}},[t._v("4.Write2")])])]),e("span",{staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.refresh()}}},[e("font-awesome-icon",{attrs:{icon:"refresh","fixed-width":""}}),t._v("("+t._s(t.dictList.length)+")"+t._s(t.refresing?"...":""))],1),t._e(),e("span",{staticStyle:{"margin-left":"10px"},on:{click:function(e){e.stopPropagation(),t.showSetting=1}}},[e("font-awesome-icon",{attrs:{icon:"gear","fixed-width":""}})],1),e("audio",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"audio",staticStyle:{height:"0px",width:"0px"},attrs:{controls:"",referrerpolicy:"no-referrer"}})]),e("div",{staticStyle:{"flex-grow":"1",position:"relative",display:"flex","flex-direction":"column"}},[3!=t.mode&&4!=t.mode&&t.list.length>0&&t.curIndex>=0?e("div",{staticClass:"word",staticStyle:{color:"dodgerblue","font-size":"300%","font-weight":"900","text-align":"center","margin-bottom":"10px"},on:{click:t.replay}},[t._v(" "+t._s(t.list[t.curIndex][t.lan])+" ")]):t._e(),4!=t.mode||t.local.showPic?e("ul",{staticClass:"figure-list",staticStyle:{"text-align":"center"}},t._l(t.list,(function(i,n){return e("li",{key:n,staticClass:"card",class:{click:t.clickIndex==n,ready:!t.selected},style:{width:4==t.mode?"50%":""},on:{click:function(e){return t.select(n,i,e)}}},[e("div",{staticClass:"card__content"},[e("div",{staticClass:"itemText card__back"},[e("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(i[t.lan].toLowerCase()))]),0!=t.count(i)?e("span",{class:{red:t.count(i)>0,green:t.count(i)<0},staticStyle:{flex:"0","font-size":"80%",position:"absolute",bottom:"0"}},[t._v(t._s(0==t.count(i)?"":t.count(i)>0?"+":"")+t._s(t.count(i)))]):t._e()]),e("figure",{staticClass:"card__front",staticStyle:{cursor:"pointer"},style:{backgroundImage:`url(${t.getImgUrl(i)})`}})])])})),0):t._e(),3==t.mode?e("div",{staticClass:"board",staticStyle:{"text-align":"center"}},[e("div",[e("div",{staticStyle:{position:"relative"}},t._l(t.letters,(function(i,n){return e("span",{key:`${i}${n}`,staticClass:"al",staticStyle:{position:"relative"},on:{click:function(e){return t.unFillLetterIndex(n)}}},[n<t.fill.length?e("b",[t._v(t._s(t.letters2[t.fill[n]]))]):e("b",{staticStyle:{visibility:"hidden"}},[t._v(t._s(i))]),n==t.letters.length-1&&t.isCorrect?e("div",{staticStyle:{position:"absolute",top:"0",right:"-2em",color:"red"}},[e("font-awesome-icon",{attrs:{"fixed-width":"",icon:1==t.isCorrect?"thumbs-up":"thumbs-down"}})],1):t._e()])})),0),e("div",{staticStyle:{"border-top":"1px dashed #ccc"}},[t._l(t.letters2,(function(i,n){return[t.fill.indexOf(n)>-1?e("span",{key:`${i}${n}`,staticClass:"al",staticStyle:{visibility:"hidden"},on:{click:function(e){return t.fillLetterIndex(n)}}},[t._v(" "+t._s(i))]):t._e()]})),t._l(t.letters2,(function(i,n){return[-1==t.fill.indexOf(n)?e("span",{key:`${i}${n}`,staticClass:"al",on:{click:function(e){return t.fillLetterIndex(n)}}},[t._v(" "+t._s(i))]):t._e()]}))],2)])]):t._e(),e("div",{staticStyle:{position:"relative","flex-grow":"1"}},[4==t.mode?e("WriteDraw",{ref:"writerDraw",attrs:{word:t.list[t.curIndex],lan:t.lan}}):t._e()],1)]),t.showGameIf?e("div",{staticStyle:{background:"white"}},[e("GameList",{attrs:{showgame:t.showgame,id:"gamefr"},on:{select:function(e){t.showgame=1}}}),e("div",{staticStyle:{position:"fixed",top:"0",cursor:"pointer",right:"0",color:"white","z-index":"10000"}},[e("span",{on:{click:function(e){return t.openGame(6)}}},[t._v(t._s(t.clockt/1e3))]),e("span",{staticStyle:{"font-size":"1.5em"}},[e("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em","margin-right":"10px"},attrs:{icon:"arrow-left","fixed-width":""},on:{click:function(e){t.showgame=!t.showgame}}}),e("font-awesome-icon",{staticStyle:{background:"black","border-radius":"1em"},attrs:{icon:"times-circle","fixed-width":""},on:{click:function(e){return t.closeGame()}}})],1)])],1):t._e(),e("setting",{directives:[{name:"show",rawName:"v-show",value:t.showSetting,expression:"showSetting"}],ref:"setting",staticClass:"centered",staticStyle:{background:"#ddd",padding:"10px","z-index":"3"},on:{openGame:t.openGame}})],1)}),[],!1,null,"5bffd076",null)).exports,W=i("be33"),N=i("11ca"),j=i("2753"),B=i("4ab5"),G=i("ad3d"),M=i("9483");Object(M.a)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline(){},error(t){}});var U=i("2f62");n.a.use(U.a);let D=localStorage;var z=new U.a.Store({state:{local:Object.assign({mode:1,lock:0,pass:"",grid:!1,maskWord:!1,maskColor:"#ddd",penColor:"black",nextSpeed:2,scale:1,showPic:!0},D.local?JSON.parse(D.local):{}),config:Object.assign({url:"https://smlog.github.io/data/dict.js",enable:{},gameTime1:0,gameTime2:0,sound:1},D.config?JSON.parse(D.config):{}),items:D.items?JSON.parse(D.items):[]},mutations:{local(t,e){t.local=Object.assign(t.local,e),D.local=JSON.stringify(t.local)},config(t,e){t.config=Object.assign(t.config,e),D.config=JSON.stringify(t.config)},items(t,e){t.items.length=0,t.items.push(...e),D.items=JSON.stringify(t.items)}},actions:{},modules:{},getters:{}});var A={data:()=>({}),methods:{saveConfig(t){this.$store.commit("config",t)},saveItems(t){this.$store.commit("items",t)},saveLocal(t){this.$store.commit("local",t)}},computed:{mode:{get(){return this.$store.state.local.mode},set(t){this.saveLocal({mode:t})}},local(){return this.$store.state.local},config(){return this.$store.state.config},items(){return this.$store.state.items},maskColor:{get(){return this.$store.state.local.maskColor},set(t){this.saveLocal({maskColor:t})}},nextSpeed:{get(){return this.$store.state.local.nextSpeed},set(t){this.saveLocal({nextSpeed:t})}},maskWord:{get(){return this.$store.state.local.maskWord},set(t){this.saveLocal({maskWord:t})}},scale:{get(){return this.$store.state.local.scale},set(t){this.saveLocal({scale:t})}},showPic:{get(){return this.$store.state.local.showPic},set(t){this.saveLocal({showPic:t})}}}};W.c.add(N.a,j.a,B.a),window.$=c.a,n.a.component("font-awesome-icon",G.a),n.a.component("font-awesome-layers",G.b),n.a.component("font-awesome-layers-text",G.c),n.a.config.productionTip=!1,n.a.mixin(A),new n.a({render:t=>t(O),store:z,data:{eventHub:new n.a}}).$mount("#app");let Y=0;document.documentElement.addEventListener("touchstart",(function(t){t.touches.length>1&&t.preventDefault()})),document.documentElement.addEventListener("touchend",(function(t){let e=(new Date).getTime();e-Y<=300?t.preventDefault():Y=e}),!1),document.documentElement.addEventListener("gesturestart",(function(t){t.preventDefault()}))},"67f3":function(t,e,i){"use strict";i("a19f")},"87c2":function(t,e,i){"use strict";i("ac7b")},"913a":function(t,e,i){},a19f:function(t,e,i){},ac7b:function(t,e,i){},dfb2:function(t,e,i){},e466:function(t,e,i){"use strict";i("dfb2")}});