var $=Object.defineProperty;var E=i=>{throw TypeError(i)};var N=(i,t,e)=>t in i?$(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>N(i,typeof t!="symbol"?t+"":t,e),I=(i,t,e)=>t.has(i)||E("Cannot "+e);var s=(i,t,e)=>(I(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>t.has(i)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,n)=>(I(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(I(i,t,"access private method"),e);import{L as U,aP as V,aQ as S,aR as q,h as A,aS as B,aT as v,a3 as F,R as Q,aB as Y}from"./app-CiwSPZKD.js";import{H as _,a as j}from"./vidstack-CQ0j0noX-Do6KpwGf.js";import"./vidstack-DSYpsFWk-BGSXbZeb.js";var P,f,k,C,H;class z{constructor(t,e){r(this,k);r(this,P);r(this,f);c(this,P,t),c(this,f,e),t.textTracks.onaddtrack=p(this,k,C).bind(this),A(p(this,k,H).bind(this))}}P=new WeakMap,f=new WeakMap,k=new WeakSet,C=function(t){const e=t.track;if(!e||G(s(this,P),e))return;const n=new B({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});n[v.native]={track:e},n[v.readyState]=2,n[v.nativeHLS]=!0;let a=0;const b=O=>{if(e.cues)for(let w=a;w<e.cues.length;w++)n.addCue(e.cues[w],O),a++};b(t),e.oncuechange=b,s(this,f).textTracks.add(n,t),n.setMode(e.mode,t)},H=function(){var t;s(this,P).textTracks.onaddtrack=null;for(const e of s(this,f).textTracks){const n=(t=e[v.native])==null?void 0:t.track;n!=null&&n.oncuechange&&(n.oncuechange=null)}};function G(i,t){return Array.from(i.children).find(e=>e.track===t)}var d,y,x,L,R,T;class J{constructor(t,e){r(this,x);r(this,d);r(this,y);r(this,T,(t,e)=>{s(this,y).notify("picture-in-picture-change",t,e)});c(this,d,t),c(this,y,e),new F(t).add("enterpictureinpicture",p(this,x,L).bind(this)).add("leavepictureinpicture",p(this,x,R).bind(this))}get active(){return document.pictureInPictureElement===s(this,d)}get supported(){return S(s(this,d))}async enter(){return s(this,d).requestPictureInPicture()}exit(){return document.exitPictureInPicture()}}d=new WeakMap,y=new WeakMap,x=new WeakSet,L=function(t){s(this,T).call(this,!0,t)},R=function(t){s(this,T).call(this,!1,t)},T=new WeakMap;var l,g,o,M,D;class K{constructor(t,e){r(this,M);r(this,l);r(this,g);r(this,o,"inline");c(this,l,t),c(this,g,e),Q(t,"webkitpresentationmodechanged",p(this,M,D).bind(this))}get mode(){return s(this,o)}get supported(){return V(s(this,l))}async setPresentationMode(t){s(this,o)!==t&&s(this,l).webkitSetPresentationMode(t)}}l=new WeakMap,g=new WeakMap,o=new WeakMap,M=new WeakSet,D=function(t){var n;const e=s(this,o);c(this,o,s(this,l).webkitPresentationMode),(n=s(this,g).player)==null||n.dispatch(new Y("video-presentation-change",{detail:s(this,o),trigger:t})),["fullscreen","picture-in-picture"].forEach(a=>{(s(this,o)===a||e===a)&&s(this,g).notify(`${a}-change`,s(this,o)===a,t)})};var u;class W{constructor(t){r(this,u);c(this,u,t)}get active(){return s(this,u).mode==="fullscreen"}get supported(){return s(this,u).supported}async enter(){s(this,u).setPresentationMode("fullscreen")}async exit(){s(this,u).setPresentationMode("inline")}}u=new WeakMap;var h;class X{constructor(t){r(this,h);c(this,h,t)}get active(){return s(this,h).mode==="picture-in-picture"}get supported(){return s(this,h).supported}async enter(){s(this,h).setPresentationMode("picture-in-picture")}async exit(){s(this,h).setPresentationMode("inline")}}h=new WeakMap;class st extends _{constructor(e,n){super(e,n);m(this,"$$PROVIDER_TYPE","VIDEO");m(this,"airPlay");m(this,"fullscreen");m(this,"pictureInPicture");U(()=>{if(this.airPlay=new j(e,n),V(e)){const a=new K(e,n);this.fullscreen=new W(a),this.pictureInPicture=new X(a)}else S(e)&&(this.pictureInPicture=new J(e,n))},this.scope)}get type(){return"video"}setup(){super.setup(),q(this.video)&&new z(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),A(()=>{this.ctx.textRenderers.attachVideo(null)}),this.type==="video"&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}export{st as VideoProvider};
