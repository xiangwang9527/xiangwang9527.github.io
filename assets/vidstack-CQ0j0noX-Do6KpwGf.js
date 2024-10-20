var Qt=Object.defineProperty;var ot=n=>{throw TypeError(n)};var Xt=(n,t,s)=>t in n?Qt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var G=(n,t,s)=>Xt(n,typeof t!="symbol"?t+"":t,s),X=(n,t,s)=>t.has(n)||ot("Cannot "+s);var i=(n,t,s)=>(X(n,t,"read from private field"),s?s.call(n):t.get(n)),d=(n,t,s)=>t.has(n)?ot("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,s),c=(n,t,s,h)=>(X(n,t,"write to private field"),h?h.call(n,s):t.set(n,s),s),a=(n,t,s)=>(X(n,t,"access private method"),s);import{av as Yt,h as ut,x as B,aJ as Zt,k as ti,a3 as nt,l as lt,aK as _,aL as ii,aM as ei,p as si,D as ai,R as rt,aq as dt,aB as ni,aN as Y,s as Z}from"./app-CiwSPZKD.js";import{R as ri}from"./vidstack-DSYpsFWk-BGSXbZeb.js";let j=null,K=[],J=[];function ht(){return j??(j=new AudioContext)}function hi(){const n=ht(),t=n.createGain();return t.connect(n.destination),K.push(t),t}function oi(n,t){const s=ht(),h=s.createMediaElementSource(n);return t&&h.connect(t),J.push(h),h}function di(n){const t=K.indexOf(n);t!==-1&&(K.splice(t,1),n.disconnect(),ft())}function ci(n){const t=J.indexOf(n);t!==-1&&(J.splice(t,1),n.disconnect(),ft())}function ft(){j&&K.length===0&&J.length===0&&j.close().then(()=>{j=null})}var R,E,m,p,P,mt,tt;class ui{constructor(t,s){d(this,P);d(this,R);d(this,E);d(this,m,null);d(this,p,null);c(this,R,t),c(this,E,s)}get currentGain(){var t,s;return((s=(t=i(this,m))==null?void 0:t.gain)==null?void 0:s.value)??null}get supported(){return!0}setGain(t){const s=this.currentGain;if(t!==this.currentGain){if(t===1&&s!==1){this.removeGain();return}i(this,m)||(c(this,m,hi()),i(this,p)&&i(this,p).connect(i(this,m))),i(this,p)||c(this,p,oi(i(this,R),i(this,m))),i(this,m).gain.value=t,i(this,E).call(this,t)}}removeGain(){i(this,m)&&(i(this,p)&&i(this,p).connect(ht().destination),a(this,P,tt).call(this),i(this,E).call(this,null))}destroy(){a(this,P,mt).call(this),a(this,P,tt).call(this)}}R=new WeakMap,E=new WeakMap,m=new WeakMap,p=new WeakMap,P=new WeakSet,mt=function(){if(i(this,p))try{ci(i(this,p))}catch{}finally{c(this,p,null)}},tt=function(){if(i(this,m))try{di(i(this,m))}catch{}finally{c(this,m,null)}};const li=["focus","blur","visibilitychange","pageshow","pagehide"];var k,A,D,z,pt;class fi{constructor(){d(this,z);d(this,k,Z(ct()));d(this,A,Z(document.visibilityState));d(this,D)}connect(){const t=new nt(window),s=a(this,z,pt).bind(this);for(const h of li)t.add(h,s);_&&t.add("beforeunload",h=>{c(this,D,setTimeout(()=>{h.defaultPrevented||h.returnValue.length>0||(i(this,k).set("hidden"),i(this,A).set("hidden"))},0))})}get pageState(){return i(this,k).call(this)}get visibility(){return i(this,A).call(this)}}k=new WeakMap,A=new WeakMap,D=new WeakMap,z=new WeakSet,pt=function(t){_&&window.clearTimeout(i(this,D)),(t.type!=="blur"||i(this,k).call(this)==="active")&&(i(this,k).set(ct(t)),i(this,A).set(document.visibilityState=="hidden"?"hidden":"visible"))};function ct(n){return(n==null?void 0:n.type)==="blur"||document.visibilityState==="hidden"?"hidden":document.hasFocus()?"active":"passive"}var O,r,v,x,L,S,I,N,e,o,yt,$,M,gt,vt,bt,Tt,Q,at,u,pi,T,kt,it,St,wt,Pt,W,Ct,Et,At,xt,Lt,Nt,$t,Mt,Gt,Rt,Dt,Ot,It,Ht,Ft,Ut,Vt,qt;class mi{constructor(t,s){d(this,e);d(this,O);d(this,r);d(this,v,!1);d(this,x,!1);d(this,L,!1);d(this,S,new ri(a(this,e,gt).bind(this)));d(this,I,new fi);d(this,N);d(this,$,0);d(this,M,-1);d(this,Q);d(this,at);c(this,O,t),c(this,r,s),c(this,N,new nt(t.media)),a(this,e,vt).call(this),i(this,I).connect(),lt(a(this,e,Gt).bind(this)),ut(a(this,e,yt).bind(this))}}O=new WeakMap,r=new WeakMap,v=new WeakMap,x=new WeakMap,L=new WeakMap,S=new WeakMap,I=new WeakMap,N=new WeakMap,e=new WeakSet,o=function(){return i(this,O).media},yt=function(){var t;c(this,x,!1),c(this,L,!1),i(this,S).stop(),i(this,N).abort(),(t=i(this,Q))==null||t.clear()},$=new WeakMap,M=new WeakMap,gt=function(){const t=i(this,e,o).currentTime;!(_&&t-i(this,M)<.35)&&i(this,$)!==t&&(a(this,e,T).call(this,t),c(this,$,t))},vt=function(){a(this,e,u).call(this,"loadstart",a(this,e,kt)),a(this,e,u).call(this,"abort",a(this,e,it)),a(this,e,u).call(this,"emptied",a(this,e,St)),a(this,e,u).call(this,"error",a(this,e,qt)),a(this,e,u).call(this,"volumechange",a(this,e,Ot))},bt=function(){i(this,x)||(a(this,e,u).call(this,"loadeddata",a(this,e,wt)),a(this,e,u).call(this,"loadedmetadata",a(this,e,Pt)),a(this,e,u).call(this,"canplay",a(this,e,At)),a(this,e,u).call(this,"canplaythrough",a(this,e,xt)),a(this,e,u).call(this,"durationchange",a(this,e,Dt)),a(this,e,u).call(this,"play",a(this,e,Ct)),a(this,e,u).call(this,"progress",a(this,e,Ft)),a(this,e,u).call(this,"stalled",a(this,e,Nt)),a(this,e,u).call(this,"suspend",a(this,e,Ut)),a(this,e,u).call(this,"ratechange",a(this,e,Vt)),c(this,x,!0))},Tt=function(){i(this,L)||(a(this,e,u).call(this,"pause",a(this,e,Et)),a(this,e,u).call(this,"playing",a(this,e,Lt)),a(this,e,u).call(this,"seeked",a(this,e,It)),a(this,e,u).call(this,"seeking",a(this,e,Ht)),a(this,e,u).call(this,"ended",a(this,e,Mt)),a(this,e,u).call(this,"waiting",a(this,e,$t)),c(this,L,!0))},Q=new WeakMap,at=new WeakMap,u=function(t,s){i(this,N).add(t,s.bind(this))},pi=function(t){},T=function(t,s){const h=Math.min(t,i(this,r).$state.seekableEnd());i(this,r).notify("time-change",h,s)},kt=function(t){if(i(this,e,o).networkState===3){a(this,e,it).call(this,t);return}a(this,e,bt).call(this),i(this,r).notify("load-start",void 0,t)},it=function(t){i(this,r).notify("abort",void 0,t)},St=function(){i(this,r).notify("emptied",void 0,event)},wt=function(t){i(this,r).notify("loaded-data",void 0,t)},Pt=function(t){c(this,$,0),c(this,M,-1),a(this,e,Tt).call(this),i(this,r).notify("loaded-metadata",void 0,t),(ii||_&&ei(i(this,r).$state.source()))&&i(this,r).delegate.ready(a(this,e,W).call(this),t)},W=function(){return{provider:si(i(this,r).$provider),duration:i(this,e,o).duration,buffered:i(this,e,o).buffered,seekable:i(this,e,o).seekable}},Ct=function(t){i(this,r).$state.canPlay&&i(this,r).notify("play",void 0,t)},Et=function(t){i(this,e,o).readyState===1&&!i(this,v)||(c(this,v,!1),i(this,S).stop(),i(this,r).notify("pause",void 0,t))},At=function(t){i(this,r).delegate.ready(a(this,e,W).call(this),t)},xt=function(t){i(this,r).$state.started()||i(this,r).notify("can-play-through",a(this,e,W).call(this),t)},Lt=function(t){i(this,e,o).paused||(c(this,v,!1),i(this,r).notify("playing",void 0,t),i(this,S).start())},Nt=function(t){i(this,r).notify("stalled",void 0,t),i(this,e,o).readyState<3&&(c(this,v,!0),i(this,r).notify("waiting",void 0,t))},$t=function(t){i(this,e,o).readyState<3&&(c(this,v,!0),i(this,r).notify("waiting",void 0,t))},Mt=function(t){i(this,S).stop(),a(this,e,T).call(this,i(this,e,o).duration,t),i(this,r).notify("end",void 0,t),i(this,r).$state.loop()&&ai(i(this,e,o).controls)&&(i(this,e,o).controls=!1)},Gt=function(){const t=i(this,r).$state.paused(),s=i(this,I).visibility==="hidden";(t||s)&&rt(i(this,e,o),"timeupdate",a(this,e,Rt).bind(this))},Rt=function(t){a(this,e,T).call(this,i(this,e,o).currentTime,t)},Dt=function(t){i(this,r).$state.ended()&&a(this,e,T).call(this,i(this,e,o).duration,t),i(this,r).notify("duration-change",i(this,e,o).duration,t)},Ot=function(t){const s={volume:i(this,e,o).volume,muted:i(this,e,o).muted};i(this,r).notify("volume-change",s,t)},It=function(t){c(this,M,i(this,e,o).currentTime),a(this,e,T).call(this,i(this,e,o).currentTime,t),i(this,r).notify("seeked",i(this,e,o).currentTime,t),Math.trunc(i(this,e,o).currentTime)===Math.trunc(i(this,e,o).duration)&&dt(i(this,e,o).duration)>dt(i(this,e,o).currentTime)&&(a(this,e,T).call(this,i(this,e,o).duration,t),i(this,e,o).ended||i(this,r).player.dispatch(new ni("media-play-request",{trigger:t})))},Ht=function(t){i(this,r).notify("seeking",i(this,e,o).currentTime,t)},Ft=function(t){const s={buffered:i(this,e,o).buffered,seekable:i(this,e,o).seekable};i(this,r).notify("progress",s,t)},Ut=function(t){i(this,r).notify("suspend",void 0,t)},Vt=function(t){i(this,r).notify("rate-change",i(this,e,o).playbackRate,t)},qt=function(t){const s=i(this,e,o).error;if(!s)return;const h={message:s.message,code:s.code,mediaError:s};i(this,r).notify("error",h,t)};var H,g,l,C,Bt,jt,Wt,et,_t;class yi{constructor(t,s){d(this,l);d(this,H);d(this,g);c(this,H,t),c(this,g,s),i(this,l,C).onaddtrack=a(this,l,Bt).bind(this),i(this,l,C).onremovetrack=a(this,l,jt).bind(this),i(this,l,C).onchange=a(this,l,Wt).bind(this),rt(i(this,g).audioTracks,"change",a(this,l,_t).bind(this))}}H=new WeakMap,g=new WeakMap,l=new WeakSet,C=function(){return i(this,H).media.audioTracks},Bt=function(t){const s=t.track;if(s.label==="")return;const h=s.id.toString()||`native-audio-${i(this,g).audioTracks.length}`,f={id:h,label:s.label,language:s.language,kind:s.kind,selected:!1};i(this,g).audioTracks[Y.add](f,t),s.enabled&&(f.selected=!0)},jt=function(t){const s=i(this,g).audioTracks.getById(t.track.id);s&&i(this,g).audioTracks[Y.remove](s,t)},Wt=function(t){let s=a(this,l,et).call(this);if(!s)return;const h=i(this,g).audioTracks.getById(s.id);h&&i(this,g).audioTracks[Y.select](h,!0,t)},et=function(){return Array.from(i(this,l,C)).find(t=>t.enabled)},_t=function(t){const{current:s}=t.detail;if(!s)return;const h=i(this,l,C).getTrackById(s.id);if(h){const f=a(this,l,et).call(this);f&&(f.enabled=!1),h.enabled=!0}};var F,st;class ki{constructor(t,s){d(this,F);G(this,"scope",Yt());G(this,"currentSrc",null);G(this,"audioGain",new ui(this.media,t=>{this.ctx.notify("audio-gain-change",t)}));this.media=t,this.ctx=s}setup(){new mi(this,this.ctx),"audioTracks"in this.media&&new yi(this,this.ctx),ut(()=>{this.audioGain.destroy(),this.media.srcObject=null,this.media.removeAttribute("src");for(const t of this.media.querySelectorAll("source"))t.remove();this.media.load()})}get type(){return""}setPlaybackRate(t){this.media.playbackRate=t}async play(){return this.media.play()}async pause(){return this.media.pause()}setMuted(t){this.media.muted=t}setVolume(t){this.media.volume=t}setCurrentTime(t){this.media.currentTime=t}setPlaysInline(t){B(this.media,"playsinline",t)}async loadSource({src:t,type:s},h){this.media.preload=h||"",Zt(t)?(this.removeSource(),this.media.srcObject=t):(this.media.srcObject=null,ti(t)?s!=="?"?this.appendSource({src:t,type:s}):(this.removeSource(),this.media.src=a(this,F,st).call(this,t)):(this.removeSource(),this.media.src=window.URL.createObjectURL(t))),this.media.load(),this.currentSrc={src:t,type:s}}appendSource(t,s){const h=this.media.querySelector("source[data-vds]"),f=h??document.createElement("source");B(f,"src",a(this,F,st).call(this,t.src)),B(f,"type",t.type!=="?"?t.type:s),B(f,"data-vds",""),h||this.media.append(f)}removeSource(){var t;(t=this.media.querySelector("source[data-vds]"))==null||t.remove()}}F=new WeakSet,st=function(t){const{clipStartTime:s,clipEndTime:h}=this.ctx.$state,f=s(),q=h();return f>0&&q>0?`${t}#t=${f},${q}`:f>0?`${t}#t=${f}`:q>0?`${t}#t=0,${q}`:t};var y,U,V,w,b,Kt,Jt,zt;class gi{constructor(t,s){d(this,b);d(this,y);d(this,U);d(this,V);d(this,w,Z(!1));c(this,y,t),c(this,U,s),a(this,b,Kt).call(this)}get supported(){return i(this,w).call(this)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.type==="airplay"&&i(this,y).webkitShowPlaybackTargetPicker?i(this,y).webkitShowPlaybackTargetPicker():i(this,y).remote.prompt()}}y=new WeakMap,U=new WeakMap,V=new WeakMap,w=new WeakMap,b=new WeakSet,Kt=function(){var t;!((t=i(this,y))!=null&&t.remote)||!this.canPrompt||(i(this,y).remote.watchAvailability(s=>{i(this,w).set(s)}).catch(()=>{i(this,w).set(!1)}),lt(a(this,b,Jt).bind(this)))},Jt=function(){if(!i(this,w).call(this))return;const t=["connecting","connect","disconnect"],s=a(this,b,zt).bind(this);s(),rt(i(this,y),"playing",s);const h=new nt(i(this,y).remote);for(const f of t)h.add(f,s)},zt=function(t){const s=i(this,y).remote.state;if(s===i(this,V))return;const h={type:this.type,state:s};i(this,U).notify("remote-playback-change",h,t),c(this,V,s)};class Si extends gi{constructor(){super(...arguments);G(this,"type","airplay")}get canPrompt(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}export{ki as H,Si as a};
