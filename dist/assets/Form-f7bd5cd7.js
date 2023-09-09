import{b as Wu,r as S,j as at}from"./index-d6fbb6b1.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";import{m as Pf}from"./motion-c139e7e1.js";const Rn={_origin:"https://api.emailjs.com"},Df=(e,t="https://api.emailjs.com")=>{Rn._userID=e,Rn._origin=t},Qu=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ca{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const Yu=(e,t,n={})=>new Promise((r,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new ca(o);a.status===200||a.text==="OK"?r(a):i(a)}),s.addEventListener("error",({target:o})=>{i(new ca(o))}),s.open("POST",Rn._origin+e,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(t)}),xf=(e,t,n,r)=>{const i=r||Rn._userID;return Qu(i,e,t),Yu("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"})},Of=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Vf=(e,t,n,r)=>{const i=r||Rn._userID,s=Of(n);Qu(i,e,t);const o=new FormData(s);return o.append("lib_version","3.11.0"),o.append("service_id",e),o.append("template_id",t),o.append("user_id",i),Yu("/api/v1.0/email/send-form",o)},Ff={init:Df,send:xf,sendForm:Vf};var Nf=function(t){return Mf(t)&&!kf(t)};function Mf(e){return!!e&&typeof e=="object"}function kf(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||jf(e)}var $f=typeof Symbol=="function"&&Symbol.for,Lf=$f?Symbol.for("react.element"):60103;function jf(e){return e.$$typeof===Lf}function Uf(e){return Array.isArray(e)?[]:{}}function br(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Cn(Uf(e),e,t):e}function Bf(e,t,n){return e.concat(t).map(function(r){return br(r,n)})}function zf(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(i){r[i]=br(e[i],n)}),Object.keys(t).forEach(function(i){!n.isMergeableObject(t[i])||!e[i]?r[i]=br(t[i],n):r[i]=Cn(e[i],t[i],n)}),r}function Cn(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||Bf,n.isMergeableObject=n.isMergeableObject||Nf;var r=Array.isArray(t),i=Array.isArray(e),s=r===i;return s?r?n.arrayMerge(e,t,n):zf(e,t,n):br(t,n)}Cn.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Cn(r,i,n)},{})};var cs=Cn,qf=typeof global=="object"&&global&&global.Object===Object&&global;const Xu=qf;var Hf=typeof self=="object"&&self&&self.Object===Object&&self,Gf=Xu||Hf||Function("return this")();const jt=Gf;var Kf=jt.Symbol;const ne=Kf;var Ju=Object.prototype,Wf=Ju.hasOwnProperty,Qf=Ju.toString,fn=ne?ne.toStringTag:void 0;function Yf(e){var t=Wf.call(e,fn),n=e[fn];try{e[fn]=void 0;var r=!0}catch{}var i=Qf.call(e);return r&&(t?e[fn]=n:delete e[fn]),i}var Xf=Object.prototype,Jf=Xf.toString;function Zf(e){return Jf.call(e)}var td="[object Null]",ed="[object Undefined]",ha=ne?ne.toStringTag:void 0;function Fe(e){return e==null?e===void 0?ed:td:ha&&ha in Object(e)?Yf(e):Zf(e)}function Zu(e,t){return function(n){return e(t(n))}}var nd=Zu(Object.getPrototypeOf,Object);const Gs=nd;function Ne(e){return e!=null&&typeof e=="object"}var rd="[object Object]",id=Function.prototype,sd=Object.prototype,tl=id.toString,od=sd.hasOwnProperty,ad=tl.call(Object);function fa(e){if(!Ne(e)||Fe(e)!=rd)return!1;var t=Gs(e);if(t===null)return!0;var n=od.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&tl.call(n)==ad}var da=Array.isArray,pa=Object.keys,ud=Object.prototype.hasOwnProperty,ld=typeof Element<"u";function hs(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=da(e),r=da(t),i,s,o;if(n&&r){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!hs(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,u=t instanceof Date;if(a!=u)return!1;if(a&&u)return e.getTime()==t.getTime();var l=e instanceof RegExp,c=t instanceof RegExp;if(l!=c)return!1;if(l&&c)return e.toString()==t.toString();var h=pa(e);if(s=h.length,s!==pa(t).length)return!1;for(i=s;i--!==0;)if(!ud.call(t,h[i]))return!1;if(ld&&e instanceof Element&&t instanceof Element)return e===t;for(i=s;i--!==0;)if(o=h[i],!(o==="_owner"&&e.$$typeof)&&!hs(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}var cd=function(t,n){try{return hs(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const de=Wu(cd);var hd=!0;function fd(e,t){if(!hd){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}function dd(){this.__data__=[],this.size=0}function el(e,t){return e===t||e!==e&&t!==t}function Qr(e,t){for(var n=e.length;n--;)if(el(e[n][0],t))return n;return-1}var pd=Array.prototype,gd=pd.splice;function md(e){var t=this.__data__,n=Qr(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():gd.call(t,n,1),--this.size,!0}function yd(e){var t=this.__data__,n=Qr(t,e);return n<0?void 0:t[n][1]}function _d(e){return Qr(this.__data__,e)>-1}function vd(e,t){var n=this.__data__,r=Qr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Yt(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Yt.prototype.clear=dd;Yt.prototype.delete=md;Yt.prototype.get=yd;Yt.prototype.has=_d;Yt.prototype.set=vd;function Ed(){this.__data__=new Yt,this.size=0}function Td(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function wd(e){return this.__data__.get(e)}function Id(e){return this.__data__.has(e)}function Gn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ad="[object AsyncFunction]",bd="[object Function]",Sd="[object GeneratorFunction]",Rd="[object Proxy]";function nl(e){if(!Gn(e))return!1;var t=Fe(e);return t==bd||t==Sd||t==Ad||t==Rd}var Cd=jt["__core-js_shared__"];const ki=Cd;var ga=function(){var e=/[^.]+$/.exec(ki&&ki.keys&&ki.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Pd(e){return!!ga&&ga in e}var Dd=Function.prototype,xd=Dd.toString;function Me(e){if(e!=null){try{return xd.call(e)}catch{}try{return e+""}catch{}}return""}var Od=/[\\^$.*+?()[\]{}|]/g,Vd=/^\[object .+?Constructor\]$/,Fd=Function.prototype,Nd=Object.prototype,Md=Fd.toString,kd=Nd.hasOwnProperty,$d=RegExp("^"+Md.call(kd).replace(Od,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Ld(e){if(!Gn(e)||Pd(e))return!1;var t=nl(e)?$d:Vd;return t.test(Me(e))}function jd(e,t){return e==null?void 0:e[t]}function ke(e,t){var n=jd(e,t);return Ld(n)?n:void 0}var Ud=ke(jt,"Map");const Pn=Ud;var Bd=ke(Object,"create");const Dn=Bd;function zd(){this.__data__=Dn?Dn(null):{},this.size=0}function qd(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Hd="__lodash_hash_undefined__",Gd=Object.prototype,Kd=Gd.hasOwnProperty;function Wd(e){var t=this.__data__;if(Dn){var n=t[e];return n===Hd?void 0:n}return Kd.call(t,e)?t[e]:void 0}var Qd=Object.prototype,Yd=Qd.hasOwnProperty;function Xd(e){var t=this.__data__;return Dn?t[e]!==void 0:Yd.call(t,e)}var Jd="__lodash_hash_undefined__";function Zd(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Dn&&t===void 0?Jd:t,this}function Se(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Se.prototype.clear=zd;Se.prototype.delete=qd;Se.prototype.get=Wd;Se.prototype.has=Xd;Se.prototype.set=Zd;function tp(){this.size=0,this.__data__={hash:new Se,map:new(Pn||Yt),string:new Se}}function ep(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Yr(e,t){var n=e.__data__;return ep(t)?n[typeof t=="string"?"string":"hash"]:n.map}function np(e){var t=Yr(this,e).delete(e);return this.size-=t?1:0,t}function rp(e){return Yr(this,e).get(e)}function ip(e){return Yr(this,e).has(e)}function sp(e,t){var n=Yr(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function ae(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ae.prototype.clear=tp;ae.prototype.delete=np;ae.prototype.get=rp;ae.prototype.has=ip;ae.prototype.set=sp;var op=200;function ap(e,t){var n=this.__data__;if(n instanceof Yt){var r=n.__data__;if(!Pn||r.length<op-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ae(r)}return n.set(e,t),this.size=n.size,this}function on(e){var t=this.__data__=new Yt(e);this.size=t.size}on.prototype.clear=Ed;on.prototype.delete=Td;on.prototype.get=wd;on.prototype.has=Id;on.prototype.set=ap;function up(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var lp=function(){try{var e=ke(Object,"defineProperty");return e({},"",{}),e}catch{}}();const ma=lp;function rl(e,t,n){t=="__proto__"&&ma?ma(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var cp=Object.prototype,hp=cp.hasOwnProperty;function il(e,t,n){var r=e[t];(!(hp.call(e,t)&&el(r,n))||n===void 0&&!(t in e))&&rl(e,t,n)}function Xr(e,t,n,r){var i=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var a=t[s],u=r?r(n[a],e[a],a,n,e):void 0;u===void 0&&(u=e[a]),i?rl(n,a,u):il(n,a,u)}return n}function fp(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var dp="[object Arguments]";function ya(e){return Ne(e)&&Fe(e)==dp}var sl=Object.prototype,pp=sl.hasOwnProperty,gp=sl.propertyIsEnumerable,mp=ya(function(){return arguments}())?ya:function(e){return Ne(e)&&pp.call(e,"callee")&&!gp.call(e,"callee")};const yp=mp;var _p=Array.isArray;const Kn=_p;function vp(){return!1}var ol=typeof exports=="object"&&exports&&!exports.nodeType&&exports,_a=ol&&typeof module=="object"&&module&&!module.nodeType&&module,Ep=_a&&_a.exports===ol,va=Ep?jt.Buffer:void 0,Tp=va?va.isBuffer:void 0,wp=Tp||vp;const al=wp;var Ip=9007199254740991,Ap=/^(?:0|[1-9]\d*)$/;function bp(e,t){var n=typeof e;return t=t??Ip,!!t&&(n=="number"||n!="symbol"&&Ap.test(e))&&e>-1&&e%1==0&&e<t}var Sp=9007199254740991;function ul(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Sp}var Rp="[object Arguments]",Cp="[object Array]",Pp="[object Boolean]",Dp="[object Date]",xp="[object Error]",Op="[object Function]",Vp="[object Map]",Fp="[object Number]",Np="[object Object]",Mp="[object RegExp]",kp="[object Set]",$p="[object String]",Lp="[object WeakMap]",jp="[object ArrayBuffer]",Up="[object DataView]",Bp="[object Float32Array]",zp="[object Float64Array]",qp="[object Int8Array]",Hp="[object Int16Array]",Gp="[object Int32Array]",Kp="[object Uint8Array]",Wp="[object Uint8ClampedArray]",Qp="[object Uint16Array]",Yp="[object Uint32Array]",B={};B[Bp]=B[zp]=B[qp]=B[Hp]=B[Gp]=B[Kp]=B[Wp]=B[Qp]=B[Yp]=!0;B[Rp]=B[Cp]=B[jp]=B[Pp]=B[Up]=B[Dp]=B[xp]=B[Op]=B[Vp]=B[Fp]=B[Np]=B[Mp]=B[kp]=B[$p]=B[Lp]=!1;function Xp(e){return Ne(e)&&ul(e.length)&&!!B[Fe(e)]}function Ks(e){return function(t){return e(t)}}var ll=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vn=ll&&typeof module=="object"&&module&&!module.nodeType&&module,Jp=vn&&vn.exports===ll,$i=Jp&&Xu.process,Zp=function(){try{var e=vn&&vn.require&&vn.require("util").types;return e||$i&&$i.binding&&$i.binding("util")}catch{}}();const Je=Zp;var Ea=Je&&Je.isTypedArray,tg=Ea?Ks(Ea):Xp;const eg=tg;var ng=Object.prototype,rg=ng.hasOwnProperty;function cl(e,t){var n=Kn(e),r=!n&&yp(e),i=!n&&!r&&al(e),s=!n&&!r&&!i&&eg(e),o=n||r||i||s,a=o?fp(e.length,String):[],u=a.length;for(var l in e)(t||rg.call(e,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||bp(l,u)))&&a.push(l);return a}var ig=Object.prototype;function Ws(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||ig;return e===n}var sg=Zu(Object.keys,Object);const og=sg;var ag=Object.prototype,ug=ag.hasOwnProperty;function lg(e){if(!Ws(e))return og(e);var t=[];for(var n in Object(e))ug.call(e,n)&&n!="constructor"&&t.push(n);return t}function hl(e){return e!=null&&ul(e.length)&&!nl(e)}function Qs(e){return hl(e)?cl(e):lg(e)}function cg(e,t){return e&&Xr(t,Qs(t),e)}function hg(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var fg=Object.prototype,dg=fg.hasOwnProperty;function pg(e){if(!Gn(e))return hg(e);var t=Ws(e),n=[];for(var r in e)r=="constructor"&&(t||!dg.call(e,r))||n.push(r);return n}function Ys(e){return hl(e)?cl(e,!0):pg(e)}function gg(e,t){return e&&Xr(t,Ys(t),e)}var fl=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ta=fl&&typeof module=="object"&&module&&!module.nodeType&&module,mg=Ta&&Ta.exports===fl,wa=mg?jt.Buffer:void 0,Ia=wa?wa.allocUnsafe:void 0;function yg(e,t){if(t)return e.slice();var n=e.length,r=Ia?Ia(n):new e.constructor(n);return e.copy(r),r}function dl(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function _g(e,t){for(var n=-1,r=e==null?0:e.length,i=0,s=[];++n<r;){var o=e[n];t(o,n,e)&&(s[i++]=o)}return s}function pl(){return[]}var vg=Object.prototype,Eg=vg.propertyIsEnumerable,Aa=Object.getOwnPropertySymbols,Tg=Aa?function(e){return e==null?[]:(e=Object(e),_g(Aa(e),function(t){return Eg.call(e,t)}))}:pl;const Xs=Tg;function wg(e,t){return Xr(e,Xs(e),t)}function gl(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var Ig=Object.getOwnPropertySymbols,Ag=Ig?function(e){for(var t=[];e;)gl(t,Xs(e)),e=Gs(e);return t}:pl;const ml=Ag;function bg(e,t){return Xr(e,ml(e),t)}function yl(e,t,n){var r=t(e);return Kn(e)?r:gl(r,n(e))}function Sg(e){return yl(e,Qs,Xs)}function Rg(e){return yl(e,Ys,ml)}var Cg=ke(jt,"DataView");const fs=Cg;var Pg=ke(jt,"Promise");const ds=Pg;var Dg=ke(jt,"Set");const ps=Dg;var xg=ke(jt,"WeakMap");const gs=xg;var ba="[object Map]",Og="[object Object]",Sa="[object Promise]",Ra="[object Set]",Ca="[object WeakMap]",Pa="[object DataView]",Vg=Me(fs),Fg=Me(Pn),Ng=Me(ds),Mg=Me(ps),kg=Me(gs),pe=Fe;(fs&&pe(new fs(new ArrayBuffer(1)))!=Pa||Pn&&pe(new Pn)!=ba||ds&&pe(ds.resolve())!=Sa||ps&&pe(new ps)!=Ra||gs&&pe(new gs)!=Ca)&&(pe=function(e){var t=Fe(e),n=t==Og?e.constructor:void 0,r=n?Me(n):"";if(r)switch(r){case Vg:return Pa;case Fg:return ba;case Ng:return Sa;case Mg:return Ra;case kg:return Ca}return t});const Js=pe;var $g=Object.prototype,Lg=$g.hasOwnProperty;function jg(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&Lg.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var Ug=jt.Uint8Array;const Da=Ug;function Zs(e){var t=new e.constructor(e.byteLength);return new Da(t).set(new Da(e)),t}function Bg(e,t){var n=t?Zs(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var zg=/\w*$/;function qg(e){var t=new e.constructor(e.source,zg.exec(e));return t.lastIndex=e.lastIndex,t}var xa=ne?ne.prototype:void 0,Oa=xa?xa.valueOf:void 0;function Hg(e){return Oa?Object(Oa.call(e)):{}}function Gg(e,t){var n=t?Zs(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Kg="[object Boolean]",Wg="[object Date]",Qg="[object Map]",Yg="[object Number]",Xg="[object RegExp]",Jg="[object Set]",Zg="[object String]",tm="[object Symbol]",em="[object ArrayBuffer]",nm="[object DataView]",rm="[object Float32Array]",im="[object Float64Array]",sm="[object Int8Array]",om="[object Int16Array]",am="[object Int32Array]",um="[object Uint8Array]",lm="[object Uint8ClampedArray]",cm="[object Uint16Array]",hm="[object Uint32Array]";function fm(e,t,n){var r=e.constructor;switch(t){case em:return Zs(e);case Kg:case Wg:return new r(+e);case nm:return Bg(e,n);case rm:case im:case sm:case om:case am:case um:case lm:case cm:case hm:return Gg(e,n);case Qg:return new r;case Yg:case Zg:return new r(e);case Xg:return qg(e);case Jg:return new r;case tm:return Hg(e)}}var Va=Object.create,dm=function(){function e(){}return function(t){if(!Gn(t))return{};if(Va)return Va(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const pm=dm;function gm(e){return typeof e.constructor=="function"&&!Ws(e)?pm(Gs(e)):{}}var mm="[object Map]";function ym(e){return Ne(e)&&Js(e)==mm}var Fa=Je&&Je.isMap,_m=Fa?Ks(Fa):ym;const vm=_m;var Em="[object Set]";function Tm(e){return Ne(e)&&Js(e)==Em}var Na=Je&&Je.isSet,wm=Na?Ks(Na):Tm;const Im=wm;var Am=1,bm=2,Sm=4,_l="[object Arguments]",Rm="[object Array]",Cm="[object Boolean]",Pm="[object Date]",Dm="[object Error]",vl="[object Function]",xm="[object GeneratorFunction]",Om="[object Map]",Vm="[object Number]",El="[object Object]",Fm="[object RegExp]",Nm="[object Set]",Mm="[object String]",km="[object Symbol]",$m="[object WeakMap]",Lm="[object ArrayBuffer]",jm="[object DataView]",Um="[object Float32Array]",Bm="[object Float64Array]",zm="[object Int8Array]",qm="[object Int16Array]",Hm="[object Int32Array]",Gm="[object Uint8Array]",Km="[object Uint8ClampedArray]",Wm="[object Uint16Array]",Qm="[object Uint32Array]",j={};j[_l]=j[Rm]=j[Lm]=j[jm]=j[Cm]=j[Pm]=j[Um]=j[Bm]=j[zm]=j[qm]=j[Hm]=j[Om]=j[Vm]=j[El]=j[Fm]=j[Nm]=j[Mm]=j[km]=j[Gm]=j[Km]=j[Wm]=j[Qm]=!0;j[Dm]=j[vl]=j[$m]=!1;function Er(e,t,n,r,i,s){var o,a=t&Am,u=t&bm,l=t&Sm;if(n&&(o=i?n(e,r,i,s):n(e)),o!==void 0)return o;if(!Gn(e))return e;var c=Kn(e);if(c){if(o=jg(e),!a)return dl(e,o)}else{var h=Js(e),f=h==vl||h==xm;if(al(e))return yg(e,a);if(h==El||h==_l||f&&!i){if(o=u||f?{}:gm(e),!a)return u?bg(e,gg(o,e)):wg(e,cg(o,e))}else{if(!j[h])return i?e:{};o=fm(e,h,a)}}s||(s=new on);var p=s.get(e);if(p)return p;s.set(e,o),Im(e)?e.forEach(function(w){o.add(Er(w,t,n,w,e,s))}):vm(e)&&e.forEach(function(w,C){o.set(C,Er(w,t,n,C,e,s))});var v=l?u?Rg:Sg:u?Ys:Qs,A=c?void 0:v(e);return up(A||e,function(w,C){A&&(C=w,w=e[C]),il(o,C,Er(w,t,n,C,e,s))}),o}var Ym=4;function Ma(e){return Er(e,Ym)}function Tl(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var Xm="[object Symbol]";function to(e){return typeof e=="symbol"||Ne(e)&&Fe(e)==Xm}var Jm="Expected a function";function eo(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Jm);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=e.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(eo.Cache||ae),n}eo.Cache=ae;var Zm=500;function ty(e){var t=eo(e,function(r){return n.size===Zm&&n.clear(),r}),n=t.cache;return t}var ey=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ny=/\\(\\)?/g,ry=ty(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ey,function(n,r,i,s){t.push(i?s.replace(ny,"$1"):r||n)}),t});const iy=ry;var sy=1/0;function oy(e){if(typeof e=="string"||to(e))return e;var t=e+"";return t=="0"&&1/e==-sy?"-0":t}var ay=1/0,ka=ne?ne.prototype:void 0,$a=ka?ka.toString:void 0;function wl(e){if(typeof e=="string")return e;if(Kn(e))return Tl(e,wl)+"";if(to(e))return $a?$a.call(e):"";var t=e+"";return t=="0"&&1/e==-ay?"-0":t}function uy(e){return e==null?"":wl(e)}function Il(e){return Kn(e)?Tl(e,oy):to(e)?[e]:dl(iy(uy(e)))}function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function Al(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var Jr=S.createContext(void 0);Jr.displayName="FormikContext";Jr.Provider;Jr.Consumer;function ly(){var e=S.useContext(Jr);return e||fd(!1),e}var Rt=function(t){return typeof t=="function"},Zr=function(t){return t!==null&&typeof t=="object"},cy=function(t){return String(Math.floor(Number(t)))===t},Li=function(t){return Object.prototype.toString.call(t)==="[object String]"},ji=function(t){return Zr(t)&&Rt(t.then)};function Tt(e,t,n,r){r===void 0&&(r=0);for(var i=Il(t);e&&r<i.length;)e=e[i[r++]];return r!==i.length&&!e||e===void 0?n:e}function Te(e,t,n){for(var r=Ma(e),i=r,s=0,o=Il(t);s<o.length-1;s++){var a=o[s],u=Tt(e,o.slice(0,s+1));if(u&&(Zr(u)||Array.isArray(u)))i=i[a]=Ma(u);else{var l=o[s+1];i=i[a]=cy(l)&&Number(l)>=0?[]:{}}}return(s===0?e:i)[o[s]]===n?e:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}function bl(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var i=0,s=Object.keys(e);i<s.length;i++){var o=s[i],a=e[o];Zr(a)?n.get(a)||(n.set(a,!0),r[o]=Array.isArray(a)?[]:{},bl(a,t,n,r[o])):r[o]=t}return r}function hy(e,t){switch(t.type){case"SET_VALUES":return Y({},e,{values:t.payload});case"SET_TOUCHED":return Y({},e,{touched:t.payload});case"SET_ERRORS":return de(e.errors,t.payload)?e:Y({},e,{errors:t.payload});case"SET_STATUS":return Y({},e,{status:t.payload});case"SET_ISSUBMITTING":return Y({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return Y({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return Y({},e,{values:Te(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return Y({},e,{touched:Te(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return Y({},e,{errors:Te(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return Y({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return Y({},e,{touched:bl(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return Y({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return Y({},e,{isSubmitting:!1});default:return e}}var fe={},lr={};function fy(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,i=r===void 0?!0:r,s=e.validateOnMount,o=s===void 0?!1:s,a=e.isInitialValid,u=e.enableReinitialize,l=u===void 0?!1:u,c=e.onSubmit,h=Al(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=Y({validateOnChange:n,validateOnBlur:i,validateOnMount:o,onSubmit:c},h),p=S.useRef(f.initialValues),v=S.useRef(f.initialErrors||fe),A=S.useRef(f.initialTouched||lr),w=S.useRef(f.initialStatus),C=S.useRef(!1),$=S.useRef({});S.useEffect(function(){return C.current=!0,function(){C.current=!1}},[]);var yt=S.useState(0),pt=yt[1],Ot=S.useRef({values:f.initialValues,errors:f.initialErrors||fe,touched:f.initialTouched||lr,status:f.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),x=Ot.current,V=S.useCallback(function(d){var _=Ot.current;Ot.current=hy(_,d),_!==Ot.current&&pt(function(E){return E+1})},[]),he=S.useCallback(function(d,_){return new Promise(function(E,I){var D=f.validate(d,_);D==null?E(fe):ji(D)?D.then(function(M){E(M||fe)},function(M){I(M)}):E(D)})},[f.validate]),Xt=S.useCallback(function(d,_){var E=f.validationSchema,I=Rt(E)?E(_):E,D=_&&I.validateAt?I.validateAt(_,d):py(d,I);return new Promise(function(M,Q){D.then(function(){M(fe)},function(Bt){Bt.name==="ValidationError"?M(dy(Bt)):Q(Bt)})})},[f.validationSchema]),L=S.useCallback(function(d,_){return new Promise(function(E){return E($.current[d].validate(_))})},[]),Ut=S.useCallback(function(d){var _=Object.keys($.current).filter(function(I){return Rt($.current[I].validate)}),E=_.length>0?_.map(function(I){return L(I,Tt(d,I))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(E).then(function(I){return I.reduce(function(D,M,Q){return M==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||M&&(D=Te(D,_[Q],M)),D},{})})},[L]),ar=S.useCallback(function(d){return Promise.all([Ut(d),f.validationSchema?Xt(d):{},f.validate?he(d):{}]).then(function(_){var E=_[0],I=_[1],D=_[2],M=cs.all([E,I,D],{arrayMerge:gy});return M})},[f.validate,f.validationSchema,Ut,he,Xt]),_t=bt(function(d){return d===void 0&&(d=x.values),V({type:"SET_ISVALIDATING",payload:!0}),ar(d).then(function(_){return C.current&&(V({type:"SET_ISVALIDATING",payload:!1}),V({type:"SET_ERRORS",payload:_})),_})});S.useEffect(function(){o&&C.current===!0&&de(p.current,f.initialValues)&&_t(p.current)},[o,_t]);var hn=S.useCallback(function(d){var _=d&&d.values?d.values:p.current,E=d&&d.errors?d.errors:v.current?v.current:f.initialErrors||{},I=d&&d.touched?d.touched:A.current?A.current:f.initialTouched||{},D=d&&d.status?d.status:w.current?w.current:f.initialStatus;p.current=_,v.current=E,A.current=I,w.current=D;var M=function(){V({type:"RESET_FORM",payload:{isSubmitting:!!d&&!!d.isSubmitting,errors:E,touched:I,status:D,values:_,isValidating:!!d&&!!d.isValidating,submitCount:d&&d.submitCount&&typeof d.submitCount=="number"?d.submitCount:0}})};if(f.onReset){var Q=f.onReset(x.values,ua);ji(Q)?Q.then(M):M()}else M()},[f.initialErrors,f.initialStatus,f.initialTouched]);S.useEffect(function(){C.current===!0&&!de(p.current,f.initialValues)&&l&&(p.current=f.initialValues,hn(),o&&_t(p.current))},[l,f.initialValues,hn,o,_t]),S.useEffect(function(){l&&C.current===!0&&!de(v.current,f.initialErrors)&&(v.current=f.initialErrors||fe,V({type:"SET_ERRORS",payload:f.initialErrors||fe}))},[l,f.initialErrors]),S.useEffect(function(){l&&C.current===!0&&!de(A.current,f.initialTouched)&&(A.current=f.initialTouched||lr,V({type:"SET_TOUCHED",payload:f.initialTouched||lr}))},[l,f.initialTouched]),S.useEffect(function(){l&&C.current===!0&&!de(w.current,f.initialStatus)&&(w.current=f.initialStatus,V({type:"SET_STATUS",payload:f.initialStatus}))},[l,f.initialStatus,f.initialTouched]);var Zo=bt(function(d){if($.current[d]&&Rt($.current[d].validate)){var _=Tt(x.values,d),E=$.current[d].validate(_);return ji(E)?(V({type:"SET_ISVALIDATING",payload:!0}),E.then(function(I){return I}).then(function(I){V({type:"SET_FIELD_ERROR",payload:{field:d,value:I}}),V({type:"SET_ISVALIDATING",payload:!1})})):(V({type:"SET_FIELD_ERROR",payload:{field:d,value:E}}),Promise.resolve(E))}else if(f.validationSchema)return V({type:"SET_ISVALIDATING",payload:!0}),Xt(x.values,d).then(function(I){return I}).then(function(I){V({type:"SET_FIELD_ERROR",payload:{field:d,value:Tt(I,d)}}),V({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),yf=S.useCallback(function(d,_){var E=_.validate;$.current[d]={validate:E}},[]),_f=S.useCallback(function(d){delete $.current[d]},[]),ta=bt(function(d,_){V({type:"SET_TOUCHED",payload:d});var E=_===void 0?i:_;return E?_t(x.values):Promise.resolve()}),ea=S.useCallback(function(d){V({type:"SET_ERRORS",payload:d})},[]),na=bt(function(d,_){var E=Rt(d)?d(x.values):d;V({type:"SET_VALUES",payload:E});var I=_===void 0?n:_;return I?_t(E):Promise.resolve()}),ur=S.useCallback(function(d,_){V({type:"SET_FIELD_ERROR",payload:{field:d,value:_}})},[]),Be=bt(function(d,_,E){V({type:"SET_FIELD_VALUE",payload:{field:d,value:_}});var I=E===void 0?n:E;return I?_t(Te(x.values,d,_)):Promise.resolve()}),ra=S.useCallback(function(d,_){var E=_,I=d,D;if(!Li(d)){d.persist&&d.persist();var M=d.target?d.target:d.currentTarget,Q=M.type,Bt=M.name,Ni=M.id,Mi=M.value,Rf=M.checked,tA=M.outerHTML,la=M.options,Cf=M.multiple;E=_||Bt||Ni,I=/number|range/.test(Q)?(D=parseFloat(Mi),isNaN(D)?"":D):/checkbox/.test(Q)?yy(Tt(x.values,E),Rf,Mi):la&&Cf?my(la):Mi}E&&Be(E,I)},[Be,x.values]),xi=bt(function(d){if(Li(d))return function(_){return ra(_,d)};ra(d)}),ze=bt(function(d,_,E){_===void 0&&(_=!0),V({type:"SET_FIELD_TOUCHED",payload:{field:d,value:_}});var I=E===void 0?i:E;return I?_t(x.values):Promise.resolve()}),ia=S.useCallback(function(d,_){d.persist&&d.persist();var E=d.target,I=E.name,D=E.id,M=E.outerHTML,Q=_||I||D;ze(Q,!0)},[ze]),Oi=bt(function(d){if(Li(d))return function(_){return ia(_,d)};ia(d)}),sa=S.useCallback(function(d){Rt(d)?V({type:"SET_FORMIK_STATE",payload:d}):V({type:"SET_FORMIK_STATE",payload:function(){return d}})},[]),oa=S.useCallback(function(d){V({type:"SET_STATUS",payload:d})},[]),aa=S.useCallback(function(d){V({type:"SET_ISSUBMITTING",payload:d})},[]),Vi=bt(function(){return V({type:"SUBMIT_ATTEMPT"}),_t().then(function(d){var _=d instanceof Error,E=!_&&Object.keys(d).length===0;if(E){var I;try{if(I=Ef(),I===void 0)return}catch(D){throw D}return Promise.resolve(I).then(function(D){return C.current&&V({type:"SUBMIT_SUCCESS"}),D}).catch(function(D){if(C.current)throw V({type:"SUBMIT_FAILURE"}),D})}else if(C.current&&(V({type:"SUBMIT_FAILURE"}),_))throw d})}),vf=bt(function(d){d&&d.preventDefault&&Rt(d.preventDefault)&&d.preventDefault(),d&&d.stopPropagation&&Rt(d.stopPropagation)&&d.stopPropagation(),Vi().catch(function(_){console.warn("Warning: An unhandled error was caught from submitForm()",_)})}),ua={resetForm:hn,validateForm:_t,validateField:Zo,setErrors:ea,setFieldError:ur,setFieldTouched:ze,setFieldValue:Be,setStatus:oa,setSubmitting:aa,setTouched:ta,setValues:na,setFormikState:sa,submitForm:Vi},Ef=bt(function(){return c(x.values,ua)}),Tf=bt(function(d){d&&d.preventDefault&&Rt(d.preventDefault)&&d.preventDefault(),d&&d.stopPropagation&&Rt(d.stopPropagation)&&d.stopPropagation(),hn()}),wf=S.useCallback(function(d){return{value:Tt(x.values,d),error:Tt(x.errors,d),touched:!!Tt(x.touched,d),initialValue:Tt(p.current,d),initialTouched:!!Tt(A.current,d),initialError:Tt(v.current,d)}},[x.errors,x.touched,x.values]),If=S.useCallback(function(d){return{setValue:function(E,I){return Be(d,E,I)},setTouched:function(E,I){return ze(d,E,I)},setError:function(E){return ur(d,E)}}},[Be,ze,ur]),Af=S.useCallback(function(d){var _=Zr(d),E=_?d.name:d,I=Tt(x.values,E),D={name:E,value:I,onChange:xi,onBlur:Oi};if(_){var M=d.type,Q=d.value,Bt=d.as,Ni=d.multiple;M==="checkbox"?Q===void 0?D.checked=!!I:(D.checked=!!(Array.isArray(I)&&~I.indexOf(Q)),D.value=Q):M==="radio"?(D.checked=I===Q,D.value=Q):Bt==="select"&&Ni&&(D.value=D.value||[],D.multiple=!0)}return D},[Oi,xi,x.values]),Fi=S.useMemo(function(){return!de(p.current,x.values)},[p.current,x.values]),bf=S.useMemo(function(){return typeof a<"u"?Fi?x.errors&&Object.keys(x.errors).length===0:a!==!1&&Rt(a)?a(f):a:x.errors&&Object.keys(x.errors).length===0},[a,Fi,x.errors,f]),Sf=Y({},x,{initialValues:p.current,initialErrors:v.current,initialTouched:A.current,initialStatus:w.current,handleBlur:Oi,handleChange:xi,handleReset:Tf,handleSubmit:vf,resetForm:hn,setErrors:ea,setFormikState:sa,setFieldTouched:ze,setFieldValue:Be,setFieldError:ur,setStatus:oa,setSubmitting:aa,setTouched:ta,setValues:na,submitForm:Vi,validateForm:_t,validateField:Zo,isValid:bf,dirty:Fi,unregisterField:_f,registerField:yf,getFieldProps:Af,getFieldMeta:wf,getFieldHelpers:If,validateOnBlur:i,validateOnChange:n,validateOnMount:o});return Sf}function dy(e){var t={};if(e.inner){if(e.inner.length===0)return Te(t,e.path,e.message);for(var i=e.inner,n=Array.isArray(i),r=0,i=n?i:i[Symbol.iterator]();;){var s;if(n){if(r>=i.length)break;s=i[r++]}else{if(r=i.next(),r.done)break;s=r.value}var o=s;Tt(t,o.path)||(t=Te(t,o.path,o.message))}}return t}function py(e,t,n,r){n===void 0&&(n=!1);var i=ms(e);return t[n?"validateSync":"validate"](i,{abortEarly:!1,context:r||i})}function ms(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(i){return Array.isArray(i)===!0||fa(i)?ms(i):i!==""?i:void 0}):fa(e[r])?t[r]=ms(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function gy(e,t,n){var r=e.slice();return t.forEach(function(s,o){if(typeof r[o]>"u"){var a=n.clone!==!1,u=a&&n.isMergeableObject(s);r[o]=u?cs(Array.isArray(s)?[]:{},s,n):s}else n.isMergeableObject(s)?r[o]=cs(e[o],s,n):e.indexOf(s)===-1&&r.push(s)}),r}function my(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function yy(e,t,n){if(typeof e=="boolean")return!!t;var r=[],i=!1,s=-1;if(Array.isArray(e))r=e,s=e.indexOf(n),i=s>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!i?r.concat(n):i?r.slice(0,s).concat(r.slice(s+1)):r}var _y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?S.useLayoutEffect:S.useEffect;function bt(e){var t=S.useRef(e);return _y(function(){t.current=e}),S.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t.current.apply(void 0,r)},[])}var vy=S.forwardRef(function(e,t){var n=e.action,r=Al(e,["action"]),i=n??"#",s=ly(),o=s.handleReset,a=s.handleSubmit;return S.createElement("form",Y({onSubmit:a,ref:t,onReset:o,action:i},r))});vy.displayName="Form";function $e(e){this._maxSize=e,this.clear()}$e.prototype.clear=function(){this._size=0,this._values=Object.create(null)};$e.prototype.get=function(e){return this._values[e]};$e.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var Ey=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Sl=/^\d+$/,Ty=/^\d/,wy=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,Iy=/^\s*(['"]?)(.*?)(\1)\s*$/,no=512,La=new $e(no),ja=new $e(no),Ua=new $e(no),we={Cache:$e,split:ys,normalizePath:Ui,setter:function(e){var t=Ui(e);return ja.get(e)||ja.set(e,function(r,i){for(var s=0,o=t.length,a=r;s<o-1;){var u=t[s];if(u==="__proto__"||u==="constructor"||u==="prototype")return r;a=a[t[s++]]}a[t[s]]=i})},getter:function(e,t){var n=Ui(e);return Ua.get(e)||Ua.set(e,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!t)i=i[n[s++]];else return;return i})},join:function(e){return e.reduce(function(t,n){return t+(ro(n)||Sl.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){Ay(Array.isArray(e)?e:ys(e),t,n)}};function Ui(e){return La.get(e)||La.set(e,ys(e).map(function(t){return t.replace(Iy,"$2")}))}function ys(e){return e.match(Ey)||[""]}function Ay(e,t,n){var r=e.length,i,s,o,a;for(s=0;s<r;s++)i=e[s],i&&(Ry(i)&&(i='"'+i+'"'),a=ro(i),o=!a&&/^\d+$/.test(i),t.call(n,i,a,o,s,e))}function ro(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function by(e){return e.match(Ty)&&!e.match(Sl)}function Sy(e){return wy.test(e)}function Ry(e){return!ro(e)&&(by(e)||Sy(e))}const Cy=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,ti=e=>e.match(Cy)||[],ei=e=>e[0].toUpperCase()+e.slice(1),io=(e,t)=>ti(e).join(t).toLowerCase(),Rl=e=>ti(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),Py=e=>ei(Rl(e)),Dy=e=>io(e,"_"),xy=e=>io(e,"-"),Oy=e=>ei(io(e," ")),Vy=e=>ti(e).map(ei).join(" ");var Bi={words:ti,upperFirst:ei,camelCase:Rl,pascalCase:Py,snakeCase:Dy,kebabCase:xy,sentenceCase:Oy,titleCase:Vy},so={exports:{}};so.exports=function(e){return Cl(Fy(e),e)};so.exports.array=Cl;function Cl(e,t){var n=e.length,r=new Array(n),i={},s=n,o=Ny(t),a=My(e);for(t.forEach(function(l){if(!a.has(l[0])||!a.has(l[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||u(e[s],s,new Set);return r;function u(l,c,h){if(h.has(l)){var f;try{f=", node was:"+JSON.stringify(l)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(l))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(l));if(!i[c]){i[c]=!0;var p=o.get(l)||new Set;if(p=Array.from(p),c=p.length){h.add(l);do{var v=p[--c];u(v,a.get(v),h)}while(c);h.delete(l)}r[--n]=l}}}function Fy(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var i=e[n];t.add(i[0]),t.add(i[1])}return Array.from(t)}function Ny(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var i=e[n];t.has(i[0])||t.set(i[0],new Set),t.has(i[1])||t.set(i[1],new Set),t.get(i[0]).add(i[1])}return t}function My(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var ky=so.exports;const $y=Wu(ky),Ly=Object.prototype.toString,jy=Error.prototype.toString,Uy=RegExp.prototype.toString,By=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",zy=/^Symbol\((.*)\)(.*)$/;function qy(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Ba(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return qy(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return By.call(e).replace(zy,"Symbol($1)");const r=Ly.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+jy.call(e)+"]":r==="RegExp"?Uy.call(e):null}function Qe(e,t){let n=Ba(e,t);return n!==null?n:JSON.stringify(e,function(r,i){let s=Ba(this[r],t);return s!==null?s:i},2)}function Pl(e){return e==null?[]:[].concat(e)}let Hy=/\$\{\s*(\w+)\s*\}/g;class wt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(Hy,(i,s)=>Qe(n[s])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],Pl(t).forEach(s=>{wt.isError(s)?(this.errors.push(...s.errors),this.inner=this.inner.concat(s.inner.length?s.inner:s)):this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,wt)}}let zt={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Qe(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${Qe(n,!0)}\``+i:`${e} must match the configured type. The validated value was: \`${Qe(n,!0)}\``+i}},Ct={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Gy={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},_s={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Ky={isValue:"${path} field must be ${value}"},vs={noUnknown:"${path} field has unspecified keys: ${unknown}"},Wy={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:zt,string:Ct,number:Gy,date:_s,object:vs,array:Wy,boolean:Ky});const oo=e=>e&&e.__isYupSchema__;class Sr{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(u=>u===r);return new Sr(t,(a,u)=>{var l;let c=o(...a)?i:s;return(l=c==null?void 0:c(u))!=null?l:u})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,t,n);if(i===void 0||i===t)return t;if(!oo(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const cr={context:"$",value:"."};class Le{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===cr.context,this.isValue=this.key[0]===cr.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?cr.context:this.isValue?cr.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&we.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let i=this.isContext?r:this.isValue?t:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}Le.prototype.__isYupRef=!0;const me=e=>e==null;function qe(e){function t({value:n,path:r="",options:i,originalValue:s,schema:o},a,u){const{name:l,test:c,params:h,message:f,skipAbsent:p}=e;let{parent:v,context:A,abortEarly:w=o.spec.abortEarly}=i;function C(L){return Le.isRef(L)?L.getValue(n,v,A):L}function $(L={}){const Ut=Object.assign({value:n,originalValue:s,label:o.spec.label,path:L.path||r,spec:o.spec},h,L.params);for(const _t of Object.keys(Ut))Ut[_t]=C(Ut[_t]);const ar=new wt(wt.formatError(L.message||f,Ut),n,Ut.path,L.type||l);return ar.params=Ut,ar}const yt=w?a:u;let pt={path:r,parent:v,type:l,from:i.from,createError:$,resolve:C,options:i,originalValue:s,schema:o};const Ot=L=>{wt.isError(L)?yt(L):L?u(null):yt($())},x=L=>{wt.isError(L)?yt(L):a(L)},V=p&&me(n);if(!i.sync){try{Promise.resolve(V?!0:c.call(pt,n,pt)).then(Ot,x)}catch(L){x(L)}return}let he;try{var Xt;if(he=V?!0:c.call(pt,n,pt),typeof((Xt=he)==null?void 0:Xt.then)=="function")throw new Error(`Validation test of type: "${pt.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(L){x(L);return}Ot(he)}return t.OPTIONS=e,t}function Qy(e,t,n,r=n){let i,s,o;return t?(we.forEach(t,(a,u,l)=>{let c=u?a.slice(1,a.length-1):a;e=e.resolve({context:r,parent:i,value:n});let h=e.type==="tuple",f=l?parseInt(c,10):0;if(e.innerType||h){if(h&&!l)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `);i=n,n=n&&n[f],e=h?e.spec.types[f]:e.innerType}if(!l){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);i=n,n=n&&n[c],e=e.fields[c]}s=c,o=u?"["+a+"]":"."+a}),{schema:e,parent:i,parentPath:s}):{parent:i,parentPath:t,schema:e}}class Rr extends Set{describe(){const t=[];for(const n of this.values())t.push(Le.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Rr(this.values())}merge(t,n){const r=this.clone();return t.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Ke(e,t=new Map){if(oo(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=Ke(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,i]of e.entries())n.set(r,Ke(i,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(Ke(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,i]of Object.entries(e))n[r]=Ke(i,t)}else throw Error(`Unable to clone ${e}`);return n}class kt{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Rr,this._blacklist=new Rr,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(zt.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Ke(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{t.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,i;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=t.recursive)!=null?i:this.spec.recursive})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),i=n.assert==="ignore-optionality",s=r._cast(t,n);if(n.assert!==!1&&!r.isType(s)){if(i&&me(s))return s;let o=Qe(t),a=Qe(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((i,s)=>s.call(this,i,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,i){let{path:s,originalValue:o=t,strict:a=this.spec.strict}=n,u=t;a||(u=this._cast(u,Object.assign({assert:!1},n)));let l=[];for(let c of Object.values(this.internalTests))c&&l.push(c);this.runTests({path:s,value:u,originalValue:o,options:n,tests:l},r,c=>{if(c.length)return i(c,u);this.runTests({path:s,value:u,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(t,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:u,options:l}=t,c=A=>{i||(i=!0,n(A,o))},h=A=>{i||(i=!0,r(A,o))},f=s.length,p=[];if(!f)return h([]);let v={value:o,originalValue:a,path:u,options:l,schema:this};for(let A=0;A<s.length;A++){const w=s[A];w(v,c,function($){$&&(p=p.concat($)),--f<=0&&h(p)})}}asNestedTest({key:t,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=t??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const u=typeof a=="number";let l=r[a];const c=Object.assign({},o,{strict:!0,parent:r,value:l,originalValue:s[a],key:void 0,[u?"index":"key"]:a,path:u||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+t});return(h,f,p)=>this.resolve(c)._validate(l,c,f,p)}validate(t,n){let r=this.resolve(Object.assign({},n,{value:t}));return new Promise((i,s)=>r._validate(t,n,(o,a)=>{wt.isError(o)&&(o.value=a),s(o)},(o,a)=>{o.length?s(new wt(o,a)):i(a)}))}validateSync(t,n){let r=this.resolve(Object.assign({},n,{value:t})),i;return r._validate(t,Object.assign({},n,{sync:!0}),(s,o)=>{throw wt.isError(s)&&(s.value=o),s},(s,o)=>{if(s.length)throw new wt(s,t);i=o}),i}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(wt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(wt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):Ke(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=qe({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=qe({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=zt.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=zt.notNull){return this.nullability(!1,t)}required(t=zt.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=zt.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=qe(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),i=Pl(t).map(s=>new Le(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new Sr(i,n):Sr.fromOptions(i,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=qe({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=zt.oneOf){let r=this.clone();return t.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=qe({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(t,n=zt.notOneOf){let r=this.clone();return t.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=qe({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(u=>({name:u.OPTIONS.name,params:u.OPTIONS.params})).filter((u,l,c)=>c.findIndex(h=>h.name===u.name)===l)}}}kt.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])kt.prototype[`${e}At`]=function(t,n,r={}){const{parent:i,parentPath:s,schema:o}=Qy(this,t,n,r.context);return o[e](i&&i[s],Object.assign({},r,{parent:i,path:t}))};for(const e of["equals","is"])kt.prototype[e]=kt.prototype.oneOf;for(const e of["not","nope"])kt.prototype[e]=kt.prototype.notOneOf;let Yy=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xy=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Jy=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Zy=e=>me(e)||e===e.trim(),t_={}.toString();function Tr(){return new Dl}class Dl extends kt{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const i=t!=null&&t.toString?t.toString():t;return i===t_?t:i})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||zt.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=Ct.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=Ct.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=Ct.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||Ct.matches,params:{regex:t},skipAbsent:!0,test:o=>o===""&&r||o.search(t)!==-1})}email(t=Ct.email){return this.matches(Yy,{name:"email",message:t,excludeEmptyString:!0})}url(t=Ct.url){return this.matches(Xy,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=Ct.uuid){return this.matches(Jy,{name:"uuid",message:t,excludeEmptyString:!1})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=Ct.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:Zy})}lowercase(t=Ct.lowercase){return this.transform(n=>me(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>me(n)||n===n.toLowerCase()})}uppercase(t=Ct.uppercase){return this.transform(n=>me(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>me(n)||n===n.toUpperCase()})}}Tr.prototype=Dl.prototype;var e_=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function n_(e){var t=[1,4,5,6,7,10,11],n=0,r,i;if(i=e_.exec(e)){for(var s=0,o;o=t[s];++s)i[o]=+i[o]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?r=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(n=i[10]*60+i[11],i[9]==="+"&&(n=0-n)),r=Date.UTC(i[1],i[2],i[3],i[4],i[5]+n,i[6],i[7]))}else r=Date.parse?Date.parse(e):NaN;return r}let r_=new Date(""),i_=e=>Object.prototype.toString.call(e)==="[object Date]";class ni extends kt{constructor(){super({type:"date",check(t){return i_(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=n_(t),isNaN(t)?ni.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(Le.isRef(t))r=t;else{let i=this.cast(t);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(t,n=_s.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(t,n=_s.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}ni.INVALID_DATE=r_;ni.prototype;function s_(e,t=[]){let n=[],r=new Set,i=new Set(t.map(([o,a])=>`${o}-${a}`));function s(o,a){let u=we.split(o)[0];r.add(u),i.has(`${a}-${u}`)||n.push([a,u])}for(const o of Object.keys(e)){let a=e[o];r.add(o),Le.isRef(a)&&a.isSibling?s(a.path,o):oo(a)&&"deps"in a&&a.deps.forEach(u=>s(u,o))}return $y.array(Array.from(r),n).reverse()}function za(e,t){let n=1/0;return e.some((r,i)=>{var s;if((s=t.path)!=null&&s.includes(r))return n=i,!0}),n}function xl(e){return(t,n)=>za(e,t)-za(e,n)}const o_=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function wr(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=wr(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=wr(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(wr)}):"optional"in e?e.optional():e}const a_=(e,t)=>{const n=[...we.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),i=we.getter(we.join(n),!0)(e);return!!(i&&r in i)};let qa=e=>Object.prototype.toString.call(e)==="[object Object]";function u_(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const l_=xl([]);function Ol(e){return new Vl(e)}class Vl extends kt{constructor(t){super({type:"object",check(n){return qa(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=l_,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let i=super._cast(t,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(h=>!this._nodes.includes(h))),u={},l=Object.assign({},n,{parent:u,__validating:n.__validating||!1}),c=!1;for(const h of a){let f=s[h],p=h in i;if(f){let v,A=i[h];l.path=(n.path?`${n.path}.`:"")+h,f=f.resolve({value:A,context:n.context,parent:u});let w=f instanceof kt?f.spec:void 0,C=w==null?void 0:w.strict;if(w!=null&&w.strip){c=c||h in i;continue}v=!n.__validating||!C?f.cast(i[h],l):i[h],v!==void 0&&(u[h]=v)}else p&&!o&&(u[h]=i[h]);(p!==h in u||u[h]!==i[h])&&(c=!0)}return c?u:i}_validate(t,n={},r,i){let{from:s=[],originalValue:o=t,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(t,n,r,(u,l)=>{if(!a||!qa(l)){i(u,l);return}o=o||l;let c=[];for(let h of this._nodes){let f=this.fields[h];!f||Le.isRef(f)||c.push(f.asNestedTest({options:n,key:h,parent:l,parentPath:n.path,originalParent:o}))}this.runTests({tests:c,value:l,originalValue:o,options:n},r,h=>{i(h.sort(this._sortErrors).concat(u),l)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=t;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=s_(t,n),r._sortErrors=xl(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),i)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return wr(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n)}omit(t){const n=Object.assign({},this.fields);for(const r of t)delete n[r];return this.setFields(n)}from(t,n,r){let i=we.getter(t,!0);return this.transform(s=>{if(!s)return s;let o=s;return a_(s,t)&&(o=Object.assign({},s),r||delete o[t],o[n]=i(s)),o})}json(){return this.transform(o_)}noUnknown(t=!0,n=vs.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=u_(this.schema,i);return!t||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=vs.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[t(i)]=n[i];return r})}camelCase(){return this.transformKeys(Bi.camelCase)}snakeCase(){return this.transformKeys(Bi.snakeCase)}constantCase(){return this.transformKeys(t=>Bi.snakeCase(t).toUpperCase())}describe(t){let n=super.describe(t);n.fields={};for(const[i,s]of Object.entries(this.fields)){var r;let o=t;(r=o)!=null&&r.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[i]})),n.fields[i]=s.describe(o)}return n}}Ol.prototype=Vl.prototype;const c_="/assets/connect-b0064353.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},h_=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Nl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,l=u?e[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;u||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Fl(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):h_(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new f_;const f=s<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const v=l<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class f_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d_=function(e){const t=Fl(e);return Nl.encodeByteArray(t,!0)},Cr=function(e){return d_(e).replace(/\./g,"")},p_=function(e){try{return Nl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=()=>g_().__FIREBASE_DEFAULTS__,y_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},__=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&p_(e[1]);return t&&JSON.parse(t)},Ml=()=>{try{return m_()||y_()||__()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},v_=e=>{var t,n;return(n=(t=Ml())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},E_=e=>{const t=v_(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},kl=()=>{var e;return(e=Ml())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Cr(JSON.stringify(n)),Cr(JSON.stringify(o)),a].join(".")}function I_(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function $l(){try{return typeof indexedDB=="object"}catch{return!1}}function Ll(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function A_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_="FirebaseError";class ue extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=b_,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ri.prototype.create)}}class ri{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?S_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ue(i,a,r)}}function S_(e,t){return e.replace(R_,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const R_=/\{\$([^}]+)}/g;function Pr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Ha(s)&&Ha(o)){if(!Pr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ha(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=1e3,P_=2,D_=4*60*60*1e3,x_=.5;function Ga(e,t=C_,n=P_){const r=t*Math.pow(n,e),i=Math.round(x_*r*(Math.random()-.5)*2);return Math.min(D_,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e){return e&&e._delegate?e._delegate:e}class Kt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new T_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(F_(t))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ge){return this.instances.has(t)}getOptions(t=ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:V_(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ge){return this.component?this.component.multipleInstances?t:ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function V_(e){return e===ge?void 0:e}function F_(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new O_(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(N||(N={}));const M_={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},k_=N.INFO,$_={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},L_=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=$_[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ao{constructor(t){this.name=t,this._logLevel=k_,this._logHandler=L_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?M_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const j_=(e,t)=>t.some(n=>e instanceof n);let Ka,Wa;function U_(){return Ka||(Ka=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B_(){return Wa||(Wa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jl=new WeakMap,Es=new WeakMap,Ul=new WeakMap,zi=new WeakMap,uo=new WeakMap;function z_(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Jt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&jl.set(n,e)}).catch(()=>{}),uo.set(t,e),t}function q_(e){if(Es.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Es.set(e,t)}let Ts={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Es.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ul.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function H_(e){Ts=e(Ts)}function G_(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qi(this),t,...n);return Ul.set(r,t.sort?t.sort():[t]),Jt(r)}:B_().includes(e)?function(...t){return e.apply(qi(this),t),Jt(jl.get(this))}:function(...t){return Jt(e.apply(qi(this),t))}}function K_(e){return typeof e=="function"?G_(e):(e instanceof IDBTransaction&&q_(e),j_(e,U_())?new Proxy(e,Ts):e)}function Jt(e){if(e instanceof IDBRequest)return z_(e);if(zi.has(e))return zi.get(e);const t=K_(e);return t!==e&&(zi.set(e,t),uo.set(t,e)),t}const qi=e=>uo.get(e);function W_(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Jt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Jt(o.result),u.oldVersion,u.newVersion,Jt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Q_=["get","getKey","getAll","getAllKeys","count"],Y_=["put","add","delete","clear"],Hi=new Map;function Qa(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Hi.get(t))return Hi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Y_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q_.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Hi.set(t,s),s}H_(e=>({...e,get:(t,n,r)=>Qa(t,n)||e.get(t,n,r),has:(t,n)=>!!Qa(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J_(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ws="@firebase/app",Ya="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=new ao("@firebase/app"),Z_="@firebase/app-compat",tv="@firebase/analytics-compat",ev="@firebase/analytics",nv="@firebase/app-check-compat",rv="@firebase/app-check",iv="@firebase/auth",sv="@firebase/auth-compat",ov="@firebase/database",av="@firebase/database-compat",uv="@firebase/functions",lv="@firebase/functions-compat",cv="@firebase/installations",hv="@firebase/installations-compat",fv="@firebase/messaging",dv="@firebase/messaging-compat",pv="@firebase/performance",gv="@firebase/performance-compat",mv="@firebase/remote-config",yv="@firebase/remote-config-compat",_v="@firebase/storage",vv="@firebase/storage-compat",Ev="@firebase/firestore",Tv="@firebase/firestore-compat",wv="firebase",Iv="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is="[DEFAULT]",Av={[ws]:"fire-core",[Z_]:"fire-core-compat",[ev]:"fire-analytics",[tv]:"fire-analytics-compat",[rv]:"fire-app-check",[nv]:"fire-app-check-compat",[iv]:"fire-auth",[sv]:"fire-auth-compat",[ov]:"fire-rtdb",[av]:"fire-rtdb-compat",[uv]:"fire-fn",[lv]:"fire-fn-compat",[cv]:"fire-iid",[hv]:"fire-iid-compat",[fv]:"fire-fcm",[dv]:"fire-fcm-compat",[pv]:"fire-perf",[gv]:"fire-perf-compat",[mv]:"fire-rc",[yv]:"fire-rc-compat",[_v]:"fire-gcs",[vv]:"fire-gcs-compat",[Ev]:"fire-fst",[Tv]:"fire-fst-compat","fire-js":"fire-js",[wv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,As=new Map;function bv(e,t){try{e.container.addComponent(t)}catch(n){Ce.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function re(e){const t=e.name;if(As.has(t))return Ce.debug(`There were multiple attempts to register component ${t}.`),!1;As.set(t,e);for(const n of Dr.values())bv(n,e);return!0}function Wn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Zt=new ri("app","Firebase",Sv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=Iv;function Bl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Is,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=kl()),!n)throw Zt.create("no-options");const s=Dr.get(i);if(s){if(Pr(n,s.options)&&Pr(r,s.config))return s;throw Zt.create("duplicate-app",{appName:i})}const o=new N_(i);for(const u of As.values())o.addComponent(u);const a=new Rv(n,r,o);return Dr.set(i,a),a}function zl(e=Is){const t=Dr.get(e);if(!t&&e===Is&&kl())return Bl();if(!t)throw Zt.create("no-app",{appName:e});return t}function Mt(e,t,n){var r;let i=(r=Av[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ce.warn(a.join(" "));return}re(new Kt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="firebase-heartbeat-database",Dv=1,xn="firebase-heartbeat-store";let Gi=null;function ql(){return Gi||(Gi=W_(Pv,Dv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xn)}}}).catch(e=>{throw Zt.create("idb-open",{originalErrorMessage:e.message})})),Gi}async function xv(e){try{return await(await ql()).transaction(xn).objectStore(xn).get(Hl(e))}catch(t){if(t instanceof ue)Ce.warn(t.message);else{const n=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ce.warn(n.message)}}}async function Xa(e,t){try{const r=(await ql()).transaction(xn,"readwrite");await r.objectStore(xn).put(t,Hl(e)),await r.done}catch(n){if(n instanceof ue)Ce.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ce.warn(r.message)}}}function Hl(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=1024,Vv=30*24*60*60*1e3;class Fv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Mv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ja();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Vv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ja(),{heartbeatsToSend:n,unsentEntries:r}=Nv(this._heartbeatsCache.heartbeats),i=Cr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ja(){return new Date().toISOString().substring(0,10)}function Nv(e,t=Ov){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Za(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Za(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $l()?Ll().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Za(e){return Cr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(e){re(new Kt("platform-logger",t=>new X_(t),"PRIVATE")),re(new Kt("heartbeat",t=>new Fv(t),"PRIVATE")),Mt(ws,Ya,e),Mt(ws,Ya,"esm2017"),Mt("fire-js","")}kv("");var $v="firebase",Lv="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mt($v,Lv,"app");const jv=(e,t)=>t.some(n=>e instanceof n);let tu,eu;function Uv(){return tu||(tu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bv(){return eu||(eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gl=new WeakMap,bs=new WeakMap,Kl=new WeakMap,Ki=new WeakMap,lo=new WeakMap;function zv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(te(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Gl.set(n,e)}).catch(()=>{}),lo.set(t,e),t}function qv(e){if(bs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});bs.set(e,t)}let Ss={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return bs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Kl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hv(e){Ss=e(Ss)}function Gv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Wi(this),t,...n);return Kl.set(r,t.sort?t.sort():[t]),te(r)}:Bv().includes(e)?function(...t){return e.apply(Wi(this),t),te(Gl.get(this))}:function(...t){return te(e.apply(Wi(this),t))}}function Kv(e){return typeof e=="function"?Gv(e):(e instanceof IDBTransaction&&qv(e),jv(e,Uv())?new Proxy(e,Ss):e)}function te(e){if(e instanceof IDBRequest)return zv(e);if(Ki.has(e))return Ki.get(e);const t=Kv(e);return t!==e&&(Ki.set(e,t),lo.set(t,e)),t}const Wi=e=>lo.get(e);function Wv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=te(o);return r&&o.addEventListener("upgradeneeded",u=>{r(te(o.result),u.oldVersion,u.newVersion,te(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Qv=["get","getKey","getAll","getAllKeys","count"],Yv=["put","add","delete","clear"],Qi=new Map;function nu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qi.get(t))return Qi.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qv.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Qi.set(t,s),s}Hv(e=>({...e,get:(t,n,r)=>nu(t,n)||e.get(t,n,r),has:(t,n)=>!!nu(t,n)||e.has(t,n)}));const Wl="@firebase/installations",co="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=1e4,Yl=`w:${co}`,Xl="FIS_v2",Xv="https://firebaseinstallations.googleapis.com/v1",Jv=60*60*1e3,Zv="installations",tE="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pe=new ri(Zv,tE,eE);function Jl(e){return e instanceof ue&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl({projectId:e}){return`${Xv}/projects/${e}/installations`}function tc(e){return{token:e.token,requestStatus:2,expiresIn:rE(e.expiresIn),creationTime:Date.now()}}async function ec(e,t){const r=(await t.json()).error;return Pe.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nc({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function nE(e,{refreshToken:t}){const n=nc(e);return n.append("Authorization",iE(t)),n}async function rc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function rE(e){return Number(e.replace("s","000"))}function iE(e){return`${Xl} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Zl(e),i=nc(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={fid:n,authVersion:Xl,appId:e.appId,sdkVersion:Yl},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await rc(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:tc(l.authToken)}}else throw await ec("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=/^[cdef][\w-]{21}$/,Rs="";function uE(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=lE(e);return aE.test(n)?n:Rs}catch{return Rs}}function lE(e){return oE(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Map;function oc(e,t){const n=ii(e);ac(n,t),cE(n,t)}function ac(e,t){const n=sc.get(e);if(n)for(const r of n)r(t)}function cE(e,t){const n=hE();n&&n.postMessage({key:e,fid:t}),fE()}let ye=null;function hE(){return!ye&&"BroadcastChannel"in self&&(ye=new BroadcastChannel("[Firebase] FID Change"),ye.onmessage=e=>{ac(e.data.key,e.data.fid)}),ye}function fE(){sc.size===0&&ye&&(ye.close(),ye=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="firebase-installations-database",pE=1,De="firebase-installations-store";let Yi=null;function ho(){return Yi||(Yi=Wv(dE,pE,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(De)}}})),Yi}async function xr(e,t){const n=ii(e),i=(await ho()).transaction(De,"readwrite"),s=i.objectStore(De),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&oc(e,t.fid),t}async function uc(e){const t=ii(e),r=(await ho()).transaction(De,"readwrite");await r.objectStore(De).delete(t),await r.done}async function si(e,t){const n=ii(e),i=(await ho()).transaction(De,"readwrite"),s=i.objectStore(De),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&oc(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(e){let t;const n=await si(e.appConfig,r=>{const i=gE(r),s=mE(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Rs?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function gE(e){const t=e||{fid:uE(),registrationStatus:0};return lc(t)}function mE(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Pe.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=yE(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:_E(e)}:{installationEntry:t}}async function yE(e,t){try{const n=await sE(e,t);return xr(e.appConfig,n)}catch(n){throw Jl(n)&&n.customData.serverCode===409?await uc(e.appConfig):await xr(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function _E(e){let t=await ru(e.appConfig);for(;t.registrationStatus===1;)await ic(100),t=await ru(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await fo(e);return r||n}return t}function ru(e){return si(e,t=>{if(!t)throw Pe.create("installation-not-found");return lc(t)})}function lc(e){return vE(e)?{fid:e.fid,registrationStatus:0}:e}function vE(e){return e.registrationStatus===1&&e.registrationTime+Ql<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EE({appConfig:e,heartbeatServiceProvider:t},n){const r=TE(e,n),i=nE(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const o={installation:{sdkVersion:Yl,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await rc(()=>fetch(r,a));if(u.ok){const l=await u.json();return tc(l)}else throw await ec("Generate Auth Token",u)}function TE(e,{fid:t}){return`${Zl(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function po(e,t=!1){let n;const r=await si(e.appConfig,s=>{if(!cc(s))throw Pe.create("not-registered");const o=s.authToken;if(!t&&AE(o))return s;if(o.requestStatus===1)return n=wE(e,t),s;{if(!navigator.onLine)throw Pe.create("app-offline");const a=SE(s);return n=IE(e,a),a}});return n?await n:r.authToken}async function wE(e,t){let n=await iu(e.appConfig);for(;n.authToken.requestStatus===1;)await ic(100),n=await iu(e.appConfig);const r=n.authToken;return r.requestStatus===0?po(e,t):r}function iu(e){return si(e,t=>{if(!cc(t))throw Pe.create("not-registered");const n=t.authToken;return RE(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function IE(e,t){try{const n=await EE(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await xr(e.appConfig,r),n}catch(n){if(Jl(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await uc(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xr(e.appConfig,r)}throw n}}function cc(e){return e!==void 0&&e.registrationStatus===2}function AE(e){return e.requestStatus===2&&!bE(e)}function bE(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Jv}function SE(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function RE(e){return e.requestStatus===1&&e.requestTime+Ql<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CE(e){const t=e,{installationEntry:n,registrationPromise:r}=await fo(t);return r?r.catch(console.error):po(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(e,t=!1){const n=e;return await DE(n),(await po(n,t)).token}async function DE(e){const{registrationPromise:t}=await fo(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(e){if(!e||!e.options)throw Xi("App Configuration");if(!e.name)throw Xi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Xi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Xi(e){return Pe.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="installations",OE="installations-internal",VE=e=>{const t=e.getProvider("app").getImmediate(),n=xE(t),r=Wn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},FE=e=>{const t=e.getProvider("app").getImmediate(),n=Wn(t,hc).getImmediate();return{getId:()=>CE(n),getToken:i=>PE(n,i)}};function NE(){re(new Kt(hc,VE,"PUBLIC")),re(new Kt(OE,FE,"PRIVATE"))}NE();Mt(Wl,co);Mt(Wl,co,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="analytics",ME="firebase_id",kE="origin",$E=60*1e3,LE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",go="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new ao("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new ri("analytics","Analytics",jE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(e){if(!e.startsWith(go)){const t=It.create("invalid-gtag-resource",{gtagURL:e});return vt.warn(t.message),""}return e}function fc(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function BE(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function zE(e,t){const n=BE("firebase-js-sdk-policy",{createScriptURL:UE}),r=document.createElement("script"),i=`${go}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function qE(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function HE(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const u=(await fc(n)).find(l=>l.measurementId===i);u&&await t[u.appId]}}catch(a){vt.error(a)}e("config",i,s)}async function GE(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await fc(n);for(const u of o){const l=a.find(h=>h.measurementId===u),c=l&&t[l.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){vt.error(s)}}function KE(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await GE(e,t,n,a,u)}else if(s==="config"){const[a,u]=o;await HE(e,t,n,r,a,u)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,u,l]=o;e("get",a,u,l)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){vt.error(a)}}return i}function WE(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=KE(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function QE(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(go)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=30,XE=1e3;class JE{constructor(t={},n=XE){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dc=new JE;function ZE(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function t0(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ZE(r)},s=LE.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((t=u.error)===null||t===void 0)&&t.message&&(a=u.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function e0(e,t=dc,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw It.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw It.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new i0;return setTimeout(async()=>{a.abort()},n!==void 0?n:$E),pc({appId:r,apiKey:i,measurementId:s},o,a,t)}async function pc(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=dc){var s;const{appId:o,measurementId:a}=e;try{await n0(r,t)}catch(u){if(a)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await t0(e);return i.deleteThrottleMetadata(o),u}catch(u){const l=u;if(!r0(l)){if(i.deleteThrottleMetadata(o),a)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw u}const c=Number((s=l==null?void 0:l.customData)===null||s===void 0?void 0:s.httpStatus)===503?Ga(n,i.intervalMillis,YE):Ga(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),vt.debug(`Calling attemptFetch again in ${c} millis`),pc(e,h,r,i)}}function n0(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(It.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function r0(e){if(!(e instanceof ue)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class i0{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function s0(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(){if($l())try{await Ll()}catch(e){return vt.warn(It.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return vt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function a0(e,t,n,r,i,s,o){var a;const u=e0(e);u.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>vt.error(p)),t.push(u);const l=o0().then(p=>{if(p)return r.getId()}),[c,h]=await Promise.all([u,l]);QE(s)||zE(s,c.measurementId),i("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[kE]="firebase",f.update=!0,h!=null&&(f[ME]=h),i("config",c.measurementId,f),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(t){this.app=t}_delete(){return delete En[this.app.options.appId],Promise.resolve()}}let En={},su=[];const ou={};let Ji="dataLayer",l0="gtag",au,gc,uu=!1;function c0(){const e=[];if(I_()&&e.push("This is a browser extension environment."),A_()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:t});vt.warn(n.message)}}function h0(e,t,n){c0();const r=e.options.appId;if(!r)throw It.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(En[r]!=null)throw It.create("already-exists",{id:r});if(!uu){qE(Ji);const{wrappedGtag:s,gtagCore:o}=WE(En,su,ou,Ji,l0);gc=s,au=o,uu=!0}return En[r]=a0(e,su,ou,t,au,Ji,n),new u0(e)}function f0(e=zl()){e=Re(e);const t=Wn(e,Or);return t.isInitialized()?t.getImmediate():d0(e)}function d0(e,t={}){const n=Wn(e,Or);if(n.isInitialized()){const i=n.getImmediate();if(Pr(t,n.getOptions()))return i;throw It.create("already-initialized")}return n.initialize({options:t})}function p0(e,t,n,r){e=Re(e),s0(gc,En[e.app.options.appId],t,n,r).catch(i=>vt.error(i))}const lu="@firebase/analytics",cu="0.10.0";function g0(){re(new Kt(Or,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return h0(r,i,n)},"PUBLIC")),re(new Kt("analytics-internal",e,"PRIVATE")),Mt(lu,cu),Mt(lu,cu,"esm2017");function e(t){try{const n=t.getProvider(Or).getImmediate();return{logEvent:(r,i,s)=>p0(n,r,i,s)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}g0();var m0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,mo=mo||{},R=m0||self;function oi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function y0(e){return Object.prototype.hasOwnProperty.call(e,Zi)&&e[Zi]||(e[Zi]=++_0)}var Zi="closure_uid_"+(1e9*Math.random()>>>0),_0=0;function v0(e,t,n){return e.call.apply(e.bind,arguments)}function E0(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ft(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=v0:ft=E0,ft.apply(null,arguments)}function hr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function nt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function le(){this.s=this.s,this.o=this.o}var T0=0;le.prototype.s=!1;le.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),T0!=0)&&y0(this)};le.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mc=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function yo(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function hu(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(oi(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function dt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var w0=function(){if(!R.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{R.addEventListener("test",()=>{},t),R.removeEventListener("test",()=>{},t)}catch{}return e}();function On(e){return/^[\s\xa0]*$/.test(e)}function ai(){var e=R.navigator;return e&&(e=e.userAgent)?e:""}function Vt(e){return ai().indexOf(e)!=-1}function _o(e){return _o[" "](e),e}_o[" "]=function(){};function I0(e,t){var n=gT;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var A0=Vt("Opera"),Ze=Vt("Trident")||Vt("MSIE"),yc=Vt("Edge"),Cs=yc||Ze,_c=Vt("Gecko")&&!(ai().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge"))&&!(Vt("Trident")||Vt("MSIE"))&&!Vt("Edge"),b0=ai().toLowerCase().indexOf("webkit")!=-1&&!Vt("Edge");function vc(){var e=R.document;return e?e.documentMode:void 0}var Ps;t:{var ts="",es=function(){var e=ai();if(_c)return/rv:([^\);]+)(\)|;)/.exec(e);if(yc)return/Edge\/([\d\.]+)/.exec(e);if(Ze)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(b0)return/WebKit\/(\S+)/.exec(e);if(A0)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(es&&(ts=es?es[1]:""),Ze){var ns=vc();if(ns!=null&&ns>parseFloat(ts)){Ps=String(ns);break t}}Ps=ts}var Ds;if(R.document&&Ze){var fu=vc();Ds=fu||parseInt(Ps,10)||void 0}else Ds=void 0;var S0=Ds;function Vn(e,t){if(dt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(_c){t:{try{_o(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:R0[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Vn.$.h.call(this)}}nt(Vn,dt);var R0={2:"touch",3:"pen",4:"mouse"};Vn.prototype.h=function(){Vn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Yn="closure_listenable_"+(1e6*Math.random()|0),C0=0;function P0(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++C0,this.fa=this.ia=!1}function ui(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function vo(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function D0(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ec(e){const t={};for(const n in e)t[n]=e[n];return t}const du="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tc(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<du.length;s++)n=du[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function li(e){this.src=e,this.g={},this.h=0}li.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Os(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new P0(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function xs(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=mc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ui(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Os(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Eo="closure_lm_"+(1e6*Math.random()|0),rs={};function wc(e,t,n,r,i){if(r&&r.once)return Ac(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)wc(e,t[s],n,r,i);return null}return n=Io(n),e&&e[Yn]?e.O(t,n,Qn(r)?!!r.capture:!!r,i):Ic(e,t,n,!1,r,i)}function Ic(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qn(i)?!!i.capture:!!i,a=wo(e);if(a||(e[Eo]=a=new li(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=x0(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)w0||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Sc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function x0(){function e(n){return t.call(e.src,e.listener,n)}const t=O0;return e}function Ac(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ac(e,t[s],n,r,i);return null}return n=Io(n),e&&e[Yn]?e.P(t,n,Qn(r)?!!r.capture:!!r,i):Ic(e,t,n,!0,r,i)}function bc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)bc(e,t[s],n,r,i);else r=Qn(r)?!!r.capture:!!r,n=Io(n),e&&e[Yn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Os(s,n,r,i),-1<n&&(ui(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=wo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Os(t,n,r,i)),(n=-1<e?t[e]:null)&&To(n))}function To(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Yn])xs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Sc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=wo(t))?(xs(n,e),n.h==0&&(n.src=null,t[Eo]=null)):ui(e)}}}function Sc(e){return e in rs?rs[e]:rs[e]="on"+e}function O0(e,t){if(e.fa)e=!0;else{t=new Vn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&To(e),e=n.call(r,t)}return e}function wo(e){return e=e[Eo],e instanceof li?e:null}var is="__closure_events_fn_"+(1e9*Math.random()>>>0);function Io(e){return typeof e=="function"?e:(e[is]||(e[is]=function(t){return e.handleEvent(t)}),e[is])}function tt(){le.call(this),this.i=new li(this),this.S=this,this.J=null}nt(tt,le);tt.prototype[Yn]=!0;tt.prototype.removeEventListener=function(e,t,n,r){bc(this,e,t,n,r)};function ot(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new dt(t,e);else if(t instanceof dt)t.target=t.target||e;else{var i=t;t=new dt(r,e),Tc(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=fr(o,r,!0,t)&&i}if(o=t.g=e,i=fr(o,r,!0,t)&&i,i=fr(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=fr(o,r,!1,t)&&i}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ui(n[r]);delete e.g[t],e.h--}}this.J=null};tt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};tt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function fr(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&xs(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ao=R.JSON.stringify;class V0{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function F0(){var e=bo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class N0{constructor(){this.h=this.g=null}add(t,n){const r=Rc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Rc=new V0(()=>new M0,e=>e.reset());class M0{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function k0(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function $0(e){R.setTimeout(()=>{throw e},0)}let Fn,Nn=!1,bo=new N0,Cc=()=>{const e=R.Promise.resolve(void 0);Fn=()=>{e.then(L0)}};var L0=()=>{for(var e;e=F0();){try{e.h.call(e.g)}catch(n){$0(n)}var t=Rc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Nn=!1};function ci(e,t){tt.call(this),this.h=e||1,this.g=t||R,this.j=ft(this.qb,this),this.l=Date.now()}nt(ci,tt);y=ci.prototype;y.ga=!1;y.T=null;y.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(So(this),this.start()))}};y.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function So(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}y.N=function(){ci.$.N.call(this),So(this),delete this.g};function Ro(e,t,n){if(typeof e=="function")n&&(e=ft(e,n));else if(e&&typeof e.handleEvent=="function")e=ft(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:R.setTimeout(e,t||0)}function Pc(e){e.g=Ro(()=>{e.g=null,e.i&&(e.i=!1,Pc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class j0 extends le{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Pc(this)}N(){super.N(),this.g&&(R.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(e){le.call(this),this.h=e,this.g={}}nt(Mn,le);var pu=[];function Dc(e,t,n,r){Array.isArray(n)||(n&&(pu[0]=n.toString()),n=pu);for(var i=0;i<n.length;i++){var s=wc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function xc(e){vo(e.g,function(t,n){this.g.hasOwnProperty(n)&&To(t)},e),e.g={}}Mn.prototype.N=function(){Mn.$.N.call(this),xc(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hi(){this.g=!0}hi.prototype.Ea=function(){this.g=!1};function U0(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function B0(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function We(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+q0(e,n)+(r?" "+r:"")})}function z0(e,t){e.info(function(){return"TIMEOUT: "+t})}hi.prototype.info=function(){};function q0(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ao(n)}catch{return t}}var je={},gu=null;function fi(){return gu=gu||new tt}je.Ta="serverreachability";function Oc(e){dt.call(this,je.Ta,e)}nt(Oc,dt);function kn(e){const t=fi();ot(t,new Oc(t))}je.STAT_EVENT="statevent";function Vc(e,t){dt.call(this,je.STAT_EVENT,e),this.stat=t}nt(Vc,dt);function gt(e){const t=fi();ot(t,new Vc(t,e))}je.Ua="timingevent";function Fc(e,t){dt.call(this,je.Ua,e),this.size=t}nt(Fc,dt);function Xn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return R.setTimeout(function(){e()},t)}var di={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Nc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Co(){}Co.prototype.h=null;function mu(e){return e.h||(e.h=e.i())}function Mc(){}var Jn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Po(){dt.call(this,"d")}nt(Po,dt);function Do(){dt.call(this,"c")}nt(Do,dt);var Vs;function pi(){}nt(pi,Co);pi.prototype.g=function(){return new XMLHttpRequest};pi.prototype.i=function(){return{}};Vs=new pi;function Zn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Mn(this),this.P=H0,e=Cs?125:void 0,this.V=new ci(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kc}function kc(){this.i=null,this.g="",this.h=!1}var H0=45e3,Fs={},Vr={};y=Zn.prototype;y.setTimeout=function(e){this.P=e};function Ns(e,t,n){e.L=1,e.v=mi(Wt(t)),e.s=n,e.S=!0,$c(e,null)}function $c(e,t){e.G=Date.now(),tr(e),e.A=Wt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Gc(n.i,"t",r),e.C=0,n=e.l.J,e.h=new kc,e.g=dh(e.l,n?t:null,!e.s),0<e.O&&(e.M=new j0(ft(e.Pa,e,e.g),e.O)),Dc(e.U,e.g,"readystatechange",e.nb),t=e.I?Ec(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),kn(),U0(e.j,e.u,e.A,e.m,e.W,e.s)}y.nb=function(e){e=e.target;const t=this.M;t&&Ft(e)==3?t.l():this.Pa(e)};y.Pa=function(e){try{if(e==this.g)t:{const c=Ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Cs||this.g&&(this.h.h||this.g.ja()||Eu(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?kn(3):kn(2)),gi(this);var n=this.g.da();this.ca=n;e:if(Lc(this)){var r=Eu(this.g);e="";var i=r.length,s=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){_e(this),Tn(this);var o="";break e}this.h.i=new R.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,B0(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!On(a)){var l=a;break e}}l=null}if(n=l)We(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ms(this,n);else{this.i=!1,this.o=3,gt(12),_e(this),Tn(this);break t}}this.S?(jc(this,c,o),Cs&&this.i&&c==3&&(Dc(this.U,this.V,"tick",this.mb),this.V.start())):(We(this.j,this.m,o,null),Ms(this,o)),c==4&&_e(this),this.i&&!this.J&&(c==4?lh(this.l,this):(this.i=!1,tr(this)))}else fT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),_e(this),Tn(this)}}}catch{}finally{}};function Lc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function jc(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=G0(e,n),i==Vr){t==4&&(e.o=4,gt(14),r=!1),We(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Fs){e.o=4,gt(15),We(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else We(e.j,e.m,i,null),Ms(e,i);Lc(e)&&i!=Vr&&i!=Fs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mo(t),t.M=!0,gt(11))):(We(e.j,e.m,n,"[Invalid Chunked Response]"),_e(e),Tn(e))}y.mb=function(){if(this.g){var e=Ft(this.g),t=this.g.ja();this.C<t.length&&(gi(this),jc(this,e,t),this.i&&e!=4&&tr(this))}};function G0(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?Vr:(n=Number(t.substring(n,r)),isNaN(n)?Fs:(r+=1,r+n>t.length?Vr:(t=t.slice(r,r+n),e.C=r+n,t)))}y.cancel=function(){this.J=!0,_e(this)};function tr(e){e.Y=Date.now()+e.P,Uc(e,e.P)}function Uc(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xn(ft(e.lb,e),t)}function gi(e){e.B&&(R.clearTimeout(e.B),e.B=null)}y.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(z0(this.j,this.A),this.L!=2&&(kn(),gt(17)),_e(this),this.o=2,Tn(this)):Uc(this,this.Y-e)};function Tn(e){e.l.H==0||e.J||lh(e.l,e)}function _e(e){gi(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,So(e.V),xc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ms(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ks(n.i,e))){if(!e.K&&ks(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Mr(n),Ei(n);else break t;No(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xn(ft(n.ib,n),6e3));if(1>=Qc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ve(n,11)}else if((e.K||n.g==e)&&Mr(n),!On(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xo(s,s.h),s.h=null))}if(r.F){const A=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(r.Da=A,z(r.I,r.F,A))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=fh(r,r.J?r.pa:null,r.Y),o.K){Yc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(gi(a),tr(a)),r.g=o}else ah(r);0<n.j.length&&Ti(n)}else l[0]!="stop"&&l[0]!="close"||ve(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ve(n,7):Fo(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}kn(4)}catch{}}function K0(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(oi(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function W0(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(oi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Bc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(oi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=W0(e),r=K0(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Q0(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ie(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ie){this.h=e.h,Fr(this,e.j),this.s=e.s,this.g=e.g,Nr(this,e.m),this.l=e.l;var t=e.i,n=new $n;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),yu(this,n),this.o=e.o}else e&&(t=String(e).match(zc))?(this.h=!1,Fr(this,t[1]||"",!0),this.s=yn(t[2]||""),this.g=yn(t[3]||"",!0),Nr(this,t[4]),this.l=yn(t[5]||"",!0),yu(this,t[6]||"",!0),this.o=yn(t[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}Ie.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_n(t,_u,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(_n(t,_u,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(_n(n,n.charAt(0)=="/"?J0:X0,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_n(n,tT)),e.join("")};function Wt(e){return new Ie(e)}function Fr(e,t,n){e.j=n?yn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Nr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function yu(e,t,n){t instanceof $n?(e.i=t,eT(e.i,e.h)):(n||(t=_n(t,Z0)),e.i=new $n(t,e.h))}function z(e,t,n){e.i.set(t,n)}function mi(e){return z(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _n(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Y0),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Y0(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _u=/[#\/\?@]/g,X0=/[#\?:]/g,J0=/[#\?]/g,Z0=/[#\?@]/g,tT=/#/g;function $n(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ce(e){e.g||(e.g=new Map,e.h=0,e.i&&Q0(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}y=$n.prototype;y.add=function(e,t){ce(this),this.i=null,e=an(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function qc(e,t){ce(e),t=an(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Hc(e,t){return ce(e),t=an(e,t),e.g.has(t)}y.forEach=function(e,t){ce(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};y.ta=function(){ce(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};y.Z=function(e){ce(this);let t=[];if(typeof e=="string")Hc(this,e)&&(t=t.concat(this.g.get(an(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};y.set=function(e,t){return ce(this),this.i=null,e=an(this,e),Hc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};y.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Gc(e,t,n){qc(e,t),0<n.length&&(e.i=null,e.g.set(an(e,t),yo(n)),e.h+=n.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function an(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function eT(e,t){t&&!e.j&&(ce(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(qc(this,r),Gc(this,i,n))},e)),e.j=t}var nT=class{constructor(e,t){this.g=e,this.map=t}};function Kc(e){this.l=e||rT,R.PerformanceNavigationTiming?(e=R.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(R.g&&R.g.Ka&&R.g.Ka()&&R.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rT=10;function Wc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qc(e){return e.h?1:e.g?e.g.size:0}function ks(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function xo(e,t){e.g?e.g.add(t):e.h=t}function Yc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Kc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return yo(e.i)}var iT=class{stringify(e){return R.JSON.stringify(e,void 0)}parse(e){return R.JSON.parse(e,void 0)}};function sT(){this.g=new iT}function oT(e,t,n){const r=n||"";try{Bc(e,function(i,s){let o=i;Qn(i)&&(o=Ao(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function aT(e,t){const n=new hi;if(R.Image){const r=new Image;r.onload=hr(dr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=hr(dr,n,r,"TestLoadImage: error",!1,t),r.onabort=hr(dr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=hr(dr,n,r,"TestLoadImage: timeout",!1,t),R.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function dr(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function yi(e){this.l=e.fc||null,this.j=e.ob||!1}nt(yi,Co);yi.prototype.g=function(){return new _i(this.l,this.j)};yi.prototype.i=function(e){return function(){return e}}({});function _i(e,t){tt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Oo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(_i,tt);var Oo=0;y=_i.prototype;y.open=function(e,t){if(this.readyState!=Oo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ln(this)};y.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||R).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=Oo};y.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof R.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Jc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}y.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?er(this):Ln(this),this.readyState==3&&Jc(this)}};y.Za=function(e){this.g&&(this.response=this.responseText=e,er(this))};y.Ya=function(e){this.g&&(this.response=e,er(this))};y.ka=function(){this.g&&er(this)};function er(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ln(e)}y.setRequestHeader=function(e,t){this.v.append(e,t)};y.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ln(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var uT=R.JSON.parse;function K(e){tt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Zc,this.L=this.M=!1}nt(K,tt);var Zc="",lT=/^https?$/i,cT=["POST","PUT"];y=K.prototype;y.Oa=function(e){this.M=e};y.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vs.g(),this.C=this.u?mu(this.u):mu(Vs),this.g.onreadystatechange=ft(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){vu(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=R.FormData&&e instanceof R.FormData,!(0<=mc(cT,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{nh(this),0<this.B&&((this.L=hT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.ua,this)):this.A=Ro(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){vu(this,s)}};function hT(e){return Ze&&typeof e.timeout=="number"&&e.ontimeout!==void 0}y.ua=function(){typeof mo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function vu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,th(e),vi(e)}function th(e){e.F||(e.F=!0,ot(e,"complete"),ot(e,"error"))}y.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ot(this,"complete"),ot(this,"abort"),vi(this))};y.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vi(this,!0)),K.$.N.call(this)};y.La=function(){this.s||(this.G||this.v||this.l?eh(this):this.kb())};y.kb=function(){eh(this)};function eh(e){if(e.h&&typeof mo<"u"&&(!e.C[1]||Ft(e)!=4||e.da()!=2)){if(e.v&&Ft(e)==4)Ro(e.La,0,e);else if(ot(e,"readystatechange"),Ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(zc)[1]||null;!i&&R.self&&R.self.location&&(i=R.self.location.protocol.slice(0,-1)),r=!lT.test(i?i.toLowerCase():"")}n=r}if(n)ot(e,"complete"),ot(e,"success");else{e.m=6;try{var s=2<Ft(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",th(e)}}finally{vi(e)}}}}function vi(e,t){if(e.g){nh(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ot(e,"ready");try{n.onreadystatechange=r}catch{}}}function nh(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(R.clearTimeout(e.A),e.A=null)}y.isActive=function(){return!!this.g};function Ft(e){return e.g?e.g.readyState:0}y.da=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};y.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),uT(t)}};function Eu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Zc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function fT(e){const t={};e=(e.g&&2<=Ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(On(e[r]))continue;var n=k0(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}D0(t,function(r){return r.join(", ")})}y.Ia=function(){return this.m};y.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function rh(e){let t="";return vo(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Vo(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=rh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):z(e,t,n))}function dn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ih(e){this.Ga=0,this.j=[],this.l=new hi,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=dn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=dn("baseRetryDelayMs",5e3,e),this.hb=dn("retryDelaySeedMs",1e4,e),this.eb=dn("forwardChannelMaxRetries",2,e),this.xa=dn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Kc(e&&e.concurrentRequestLimit),this.Ja=new sT,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}y=ih.prototype;y.ra=8;y.H=1;function Fo(e){if(sh(e),e.H==3){var t=e.W++,n=Wt(e.I);if(z(n,"SID",e.K),z(n,"RID",t),z(n,"TYPE","terminate"),nr(e,n),t=new Zn(e,e.l,t),t.L=2,t.v=mi(Wt(n)),n=!1,R.navigator&&R.navigator.sendBeacon)try{n=R.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&R.Image&&(new Image().src=t.v,n=!0),n||(t.g=dh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),tr(t)}hh(e)}function Ei(e){e.g&&(Mo(e),e.g.cancel(),e.g=null)}function sh(e){Ei(e),e.u&&(R.clearTimeout(e.u),e.u=null),Mr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&R.clearTimeout(e.m),e.m=null)}function Ti(e){if(!Wc(e.i)&&!e.m){e.m=!0;var t=e.Na;Fn||Cc(),Nn||(Fn(),Nn=!0),bo.add(t,e),e.C=0}}function dT(e,t){return Qc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Xn(ft(e.Na,e,t),ch(e,e.C)),e.C++,!0)}y.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Zn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ec(s),Tc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=oh(this,i,t),n=Wt(this.I),z(n,"RID",e),z(n,"CVER",22),this.F&&z(n,"X-HTTP-Session-Id",this.F),nr(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(rh(s)))+"&"+t:this.o&&Vo(n,this.o,s)),xo(this.i,i),this.bb&&z(n,"TYPE","init"),this.P?(z(n,"$req",t),z(n,"SID","null"),i.aa=!0,Ns(i,n,null)):Ns(i,n,t),this.H=2}}else this.H==3&&(e?Tu(this,e):this.j.length==0||Wc(this.i)||Tu(this))};function Tu(e,t){var n;t?n=t.m:n=e.W++;const r=Wt(e.I);z(r,"SID",e.K),z(r,"RID",n),z(r,"AID",e.V),nr(e,r),e.o&&e.s&&Vo(r,e.o,e.s),n=new Zn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=oh(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),xo(e.i,n),Ns(n,r,t)}function nr(e,t){e.na&&vo(e.na,function(n,r){z(t,r,n)}),e.h&&Bc({},function(n,r){z(t,r,n)})}function oh(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ft(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{oT(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function ah(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Fn||Cc(),Nn||(Fn(),Nn=!0),bo.add(t,e),e.A=0}}function No(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Xn(ft(e.Ma,e),ch(e,e.A)),e.A++,!0)}y.Ma=function(){if(this.u=null,uh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Xn(ft(this.jb,this),e)}};y.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Ei(this),uh(this))};function Mo(e){e.B!=null&&(R.clearTimeout(e.B),e.B=null)}function uh(e){e.g=new Zn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Wt(e.wa);z(t,"RID","rpc"),z(t,"SID",e.K),z(t,"AID",e.V),z(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&z(t,"TO",e.qa),z(t,"TYPE","xmlhttp"),nr(e,t),e.o&&e.s&&Vo(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=mi(Wt(t)),n.s=null,n.S=!0,$c(n,e)}y.ib=function(){this.v!=null&&(this.v=null,Ei(this),No(this),gt(19))};function Mr(e){e.v!=null&&(R.clearTimeout(e.v),e.v=null)}function lh(e,t){var n=null;if(e.g==t){Mr(e),Mo(e),e.g=null;var r=2}else if(ks(e.i,t))n=t.F,Yc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=fi(),ot(r,new Fc(r,n)),Ti(e)}else ah(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&dT(e,t)||r==2&&No(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ve(e,5);break;case 4:ve(e,10);break;case 3:ve(e,6);break;default:ve(e,2)}}}function ch(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ve(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ft(e.pb,e);n||(n=new Ie("//www.google.com/images/cleardot.gif"),R.location&&R.location.protocol=="http"||Fr(n,"https"),mi(n)),aT(n.toString(),r)}else gt(2);e.H=0,e.h&&e.h.za(t),hh(e),sh(e)}y.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function hh(e){if(e.H=0,e.ma=[],e.h){const t=Xc(e.i);(t.length!=0||e.j.length!=0)&&(hu(e.ma,t),hu(e.ma,e.j),e.i.i.length=0,yo(e.j),e.j.length=0),e.h.ya()}}function fh(e,t,n){var r=n instanceof Ie?Wt(n):new Ie(n);if(r.g!="")t&&(r.g=t+"."+r.g),Nr(r,r.m);else{var i=R.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ie(null);r&&Fr(s,r),t&&(s.g=t),i&&Nr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&z(r,n,t),z(r,"VER",e.ra),nr(e,r),r}function dh(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new K(new yi({ob:!0})):new K(e.va),t.Oa(e.J),t}y.isActive=function(){return!!this.h&&this.h.isActive(this)};function ph(){}y=ph.prototype;y.Ba=function(){};y.Aa=function(){};y.za=function(){};y.ya=function(){};y.isActive=function(){return!0};y.Va=function(){};function kr(){if(Ze&&!(10<=Number(S0)))throw Error("Environmental error: no available transport.")}kr.prototype.g=function(e,t){return new At(e,t)};function At(e,t){tt.call(this),this.g=new ih(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!On(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!On(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new un(this)}nt(At,tt);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=fh(e,null,e.Y),Ti(e)};At.prototype.close=function(){Fo(this.g)};At.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ao(e),e=n);t.j.push(new nT(t.fb++,e)),t.H==3&&Ti(t)};At.prototype.N=function(){this.g.h=null,delete this.j,Fo(this.g),delete this.g,At.$.N.call(this)};function gh(e){Po.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}nt(gh,Po);function mh(){Do.call(this),this.status=1}nt(mh,Do);function un(e){this.g=e}nt(un,ph);un.prototype.Ba=function(){ot(this.g,"a")};un.prototype.Aa=function(e){ot(this.g,new gh(e))};un.prototype.za=function(e){ot(this.g,new mh)};un.prototype.ya=function(){ot(this.g,"b")};function pT(){this.blockSize=-1}function $t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt($t,pT);$t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ss(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}$t.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)ss(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){ss(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){ss(this,r),i=0;break}}this.h=i,this.i+=t};$t.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function k(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var gT={};function ko(e){return-128<=e&&128>e?I0(e,function(t){return new k([t|0],0>t?-1:0)}):new k([e|0],0>e?-1:0)}function Nt(e){if(isNaN(e)||!isFinite(e))return Ye;if(0>e)return st(Nt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=$s;return new k(t,0)}function yh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return st(yh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Nt(Math.pow(t,8)),r=Ye,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Nt(Math.pow(t,s)),r=r.R(s).add(Nt(o))):(r=r.R(n),r=r.add(Nt(o)))}return r}var $s=4294967296,Ye=ko(0),Ls=ko(1),wu=ko(16777216);y=k.prototype;y.ea=function(){if(St(this))return-st(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:$s+r)*t,t*=$s}return e};y.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(qt(this))return"0";if(St(this))return"-"+st(this).toString(e);for(var t=Nt(Math.pow(e,6)),n=this,r="";;){var i=Lr(n,t).g;n=$r(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,qt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};y.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function qt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function St(e){return e.h==-1}y.X=function(e){return e=$r(this,e),St(e)?-1:qt(e)?0:1};function st(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new k(n,~e.h).add(Ls)}y.abs=function(){return St(this)?st(this):this};y.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new k(n,n[n.length-1]&-2147483648?-1:0)};function $r(e,t){return e.add(st(t))}y.R=function(e){if(qt(this)||qt(e))return Ye;if(St(this))return St(e)?st(this).R(st(e)):st(st(this).R(e));if(St(e))return st(this.R(st(e)));if(0>this.X(wu)&&0>e.X(wu))return Nt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,pr(n,2*r+2*i),n[2*r+2*i+1]+=s*u,pr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,pr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,pr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new k(n,0)};function pr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function pn(e,t){this.g=e,this.h=t}function Lr(e,t){if(qt(t))throw Error("division by zero");if(qt(e))return new pn(Ye,Ye);if(St(e))return t=Lr(st(e),t),new pn(st(t.g),st(t.h));if(St(t))return t=Lr(e,st(t)),new pn(st(t.g),t.h);if(30<e.g.length){if(St(e)||St(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ls,r=t;0>=r.X(e);)n=Iu(n),r=Iu(r);var i=He(n,1),s=He(r,1);for(r=He(r,2),n=He(n,2);!qt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=He(r,1),n=He(n,1)}return t=$r(e,i.R(t)),new pn(i,t)}for(i=Ye;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Nt(n),o=s.R(t);St(o)||0<o.X(e);)n-=r,s=Nt(n),o=s.R(t);qt(s)&&(s=Ls),i=i.add(s),e=$r(e,o)}return new pn(i,e)}y.gb=function(e){return Lr(this,e).h};y.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new k(n,this.h&e.h)};y.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new k(n,this.h|e.h)};y.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new k(n,this.h^e.h)};function Iu(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new k(n,e.h)}function He(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new k(i,e.h)}kr.prototype.createWebChannel=kr.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;di.NO_ERROR=0;di.TIMEOUT=8;di.HTTP_ERROR=6;Nc.COMPLETE="complete";Mc.EventType=Jn;Jn.OPEN="a";Jn.CLOSE="b";Jn.ERROR="c";Jn.MESSAGE="d";tt.prototype.listen=tt.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;$t.prototype.digest=$t.prototype.l;$t.prototype.reset=$t.prototype.reset;$t.prototype.update=$t.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=Nt;k.fromString=yh;var mT=function(){return new kr},yT=function(){return fi()},os=di,_T=Nc,vT=je,Au={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},gr=Mc,ET=K,TT=k;const bu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="10.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe=new ao("@firebase/firestore");function gn(){return xe.logLevel}function T(e,...t){if(xe.logLevel<=N.DEBUG){const n=t.map($o);xe.debug(`Firestore (${ln}): ${e}`,...n)}}function Oe(e,...t){if(xe.logLevel<=N.ERROR){const n=t.map($o);xe.error(`Firestore (${ln}): ${e}`,...n)}}function jr(e,...t){if(xe.logLevel<=N.WARN){const n=t.map($o);xe.warn(`Firestore (${ln}): ${e}`,...n)}}function $o(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e="Unexpected state"){const t=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+e;throw Oe(t),new Error(t)}function et(e,t){e||O()}function q(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends ue{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class IT{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AT{constructor(t){this.t=t,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ae,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new _h(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new lt(t)}}class bT{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ST{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new bT(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RT{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class CT{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(et(typeof n.token=="string"),this.R=n.token,new RT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=PT(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function U(e,t){return e<t?-1:e>t?1:0}function tn(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new b(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new b(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new b(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Z(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.timestamp=t}static fromTimestamp(t){return new H(t)}static min(){return new H(new Z(0,0))}static max(){return new H(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n,r){n===void 0?n=0:n>t.length&&O(),r===void 0?r=t.length-n:r>t.length-n&&O(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return jn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof jn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class G extends jn{construct(t,n,r){return new G(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new b(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new G(n)}static emptyPath(){return new G([])}}const DT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends jn{construct(t,n,r){return new ht(t,n,r)}static isValidIdentifier(t){return DT.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ht(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new b(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new b(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new b(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new b(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.path=t}static fromPath(t){return new P(G.fromString(t))}static fromName(t){return new P(G.fromString(t).popFirst(5))}static empty(){return new P(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return G.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new P(new G(t.slice()))}}function xT(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=H.fromTimestamp(r===1e9?new Z(n+1,0):new Z(n,r));return new ie(i,P.empty(),t)}function OT(e){return new ie(e.readTime,e.key,-1)}class ie{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new ie(H.min(),P.empty(),-1)}static max(){return new ie(H.max(),P.empty(),-1)}}function VT(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=P.comparator(e.documentKey,t.documentKey),n!==0?n:U(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==FT)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):g.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):g.reject(n)}static resolve(t){return new g((n,r)=>{n(t)})}static reject(t){return new g((n,r)=>{r(t)})}static waitFor(t){return new g((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(t){let n=g.resolve(!1);for(const r of t)n=n.next(i=>i?g.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;n(t[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new g((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function wi(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Th.ae=-1;function Lo(e){return e==null}function Ur(e){return e===0&&1/e==-1/0}function MT(e){return typeof e=="number"&&Number.isInteger(e)&&!Ur(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function rr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t,n){this.comparator=t,this.root=n||rt.EMPTY}insert(t,n){return new Et(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new Et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mr(this.root,t,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mr(this.root,t,this.comparator,!0)}}class mr{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new rt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,n,r,i,s){return this}insert(t,n,r){return new rt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.comparator=t,this.data=new Et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ru(this.data.getIterator())}getIteratorFrom(t){return new Ru(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof mt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new mt(this.comparator);return n.data=t,n}}class Ru{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.fields=t,t.sort(ht.comparator)}static empty(){return new xt([])}unionWith(t){let n=new mt(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new xt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return tn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new kT("Invalid base64 string: "+s):s}}(t);return new Qt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Qt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const $T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ve(e){if(et(!!e),typeof e=="string"){let t=0;const n=$T.exec(e);if(et(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(e.seconds),nanos:it(e.nanos)}}function it(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Un(e){return typeof e=="string"?Qt.fromBase64String(e):Qt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ih(e){const t=e.mapValue.fields.__previous_value__;return jo(t)?Ih(t):t}function Br(e){const t=Ve(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(t,n,r,i,s,o,a,u,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class zr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new zr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof zr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function en(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?jo(e)?4:jT(e)?9007199254740991:10:O()}function Lt(e,t){if(e===t)return!0;const n=en(e);if(n!==en(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Br(e).isEqual(Br(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ve(i.timestampValue),a=Ve(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Un(i.bytesValue).isEqual(Un(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),a=it(s.doubleValue);return o===a?Ur(o)===Ur(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return tn(e.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Su(o)!==Su(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Lt(o[u],a[u])))return!1;return!0}(e,t);default:return O()}}function Bn(e,t){return(e.values||[]).find(n=>Lt(n,t))!==void 0}function nn(e,t){if(e===t)return 0;const n=en(e),r=en(t);if(n!==r)return U(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return U(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=it(s.integerValue||s.doubleValue),u=it(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(e,t);case 3:return Cu(e.timestampValue,t.timestampValue);case 4:return Cu(Br(e),Br(t));case 5:return U(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Un(s),u=Un(o);return a.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=U(a[l],u[l]);if(c!==0)return c}return U(a.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=U(it(s.latitude),it(o.latitude));return a!==0?a:U(it(s.longitude),it(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=nn(a[l],u[l]);if(c)return c}return U(a.length,u.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===yr.mapValue&&o===yr.mapValue)return 0;if(s===yr.mapValue)return 1;if(o===yr.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const f=U(u[h],c[h]);if(f!==0)return f;const p=nn(a[u[h]],l[c[h]]);if(p!==0)return p}return U(u.length,c.length)}(e.mapValue,t.mapValue);default:throw O()}}function Cu(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return U(e,t);const n=Ve(e),r=Ve(t),i=U(n.seconds,r.seconds);return i!==0?i:U(n.nanos,r.nanos)}function rn(e){return js(e)}function js(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Ve(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Un(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return P.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=js(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${js(n.fields[o])}`;return i+"}"}(e.mapValue):O()}function Us(e){return!!e&&"integerValue"in e}function Uo(e){return!!e&&"arrayValue"in e}function Ir(e){return!!e&&"mapValue"in e}function wn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return rr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=wn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=wn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function jT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.value=t}static empty(){return new Dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Ir(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=wn(n)}setAll(t){let n=ht.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=wn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Ir(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Ir(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){rr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Dt(wn(this.value))}}function Ah(e){const t=[];return rr(e.fields,(n,r)=>{const i=new ht([n]);if(Ir(r)){const s=Ah(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new xt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Pt(t,0,H.min(),H.min(),H.min(),Dt.empty(),0)}static newFoundDocument(t,n,r,i){return new Pt(t,1,n,H.min(),r,i,0)}static newNoDocument(t,n){return new Pt(t,2,n,H.min(),H.min(),Dt.empty(),0)}static newUnknownDocument(t,n){return new Pt(t,3,n,H.min(),H.min(),Dt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Pt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,n){this.position=t,this.inclusive=n}}function Pu(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=nn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Du(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Lt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,n="asc"){this.field=t,this.dir=n}}function UT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{}class J extends bh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new zT(t,n,r):n==="array-contains"?new GT(t,r):n==="in"?new KT(t,r):n==="not-in"?new WT(t,r):n==="array-contains-any"?new QT(t,r):new J(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new qT(t,r):new HT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(nn(n,this.value)):n!==null&&en(this.value)===en(n)&&this.matchesComparison(nn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class se extends bh{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new se(t,n)}matches(t){return Sh(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Sh(e){return e.op==="and"}function Rh(e){return BT(e)&&Sh(e)}function BT(e){for(const t of e.filters)if(t instanceof se)return!1;return!0}function Bs(e){if(e instanceof J)return e.field.canonicalString()+e.op.toString()+rn(e.value);if(Rh(e))return e.filters.map(t=>Bs(t)).join(",");{const t=e.filters.map(n=>Bs(n)).join(",");return`${e.op}(${t})`}}function Ch(e,t){return e instanceof J?function(r,i){return i instanceof J&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(e,t):e instanceof se?function(r,i){return i instanceof se&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Ch(o,i.filters[a]),!0):!1}(e,t):void O()}function Ph(e){return e instanceof J?function(n){return`${n.field.canonicalString()} ${n.op} ${rn(n.value)}`}(e):e instanceof se?function(n){return n.op.toString()+" {"+n.getFilters().map(Ph).join(" ,")+"}"}(e):"Filter"}class zT extends J{constructor(t,n,r){super(t,n,r),this.key=P.fromName(r.referenceValue)}matches(t){const n=P.comparator(t.key,this.key);return this.matchesComparison(n)}}class qT extends J{constructor(t,n){super(t,"in",n),this.keys=Dh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class HT extends J{constructor(t,n){super(t,"not-in",n),this.keys=Dh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Dh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class GT extends J{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Uo(n)&&Bn(n.arrayValue,this.value)}}class KT extends J{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Bn(this.value.arrayValue,n)}}class WT extends J{constructor(t,n){super(t,"not-in",n)}matches(t){if(Bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Bn(this.value.arrayValue,n)}}class QT extends J{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Uo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function xu(e,t=null,n=[],r=[],i=null,s=null,o=null){return new YT(e,t,n,r,i,s,o)}function Bo(e){const t=q(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Bs(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Lo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>rn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>rn(r)).join(",")),t.he=n}return t.he}function zo(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!UT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ch(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Du(e.startAt,t.startAt)&&Du(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function XT(e,t,n,r,i,s,o,a){return new Ii(e,t,n,r,i,s,o,a)}function JT(e){return new Ii(e)}function Ou(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function ZT(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function tw(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function ew(e){return e.collectionGroup!==null}function An(e){const t=q(e);if(t.Pe===null){t.Pe=[];const n=tw(t),r=ZT(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new In(n)),t.Pe.push(new In(ht.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new In(ht.keyField(),s))}}}return t.Pe}function be(e){const t=q(e);return t.Ie||(t.Ie=nw(t,An(e))),t.Ie}function nw(e,t){if(e.limitType==="F")return xu(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new In(i.field,s)});const n=e.endAt?new qr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new qr(e.startAt.position,e.startAt.inclusive):null;return xu(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function zs(e,t,n){return new Ii(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xh(e,t){return zo(be(e),be(t))&&e.limitType===t.limitType}function Oh(e){return`${Bo(be(e))}|lt:${e.limitType}`}function mn(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ph(i)).join(", ")}]`),Lo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>rn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>rn(i)).join(",")),`Target(${r})`}(be(e))}; limitType=${e.limitType})`}function qo(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):P.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of An(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=Pu(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,An(r),i)||r.endAt&&!function(o,a,u){const l=Pu(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,An(r),i))}(e,t)}function rw(e){return(t,n)=>{let r=!1;for(const i of An(e)){const s=iw(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function iw(e,t,n){const r=e.field.isKeyField()?P.comparator(t.key,n.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?nn(u,l):O()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){rr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new Et(P.comparator);function Hr(){return sw}const Vh=new Et(P.comparator);function _r(...e){let t=Vh;for(const n of e)t=t.insert(n.key,n);return t}function Fh(e){let t=Vh;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ee(){return bn()}function Nh(){return bn()}function bn(){return new cn(e=>e.toString(),(e,t)=>e.isEqual(t))}const ow=new Et(P.comparator),aw=new mt(P.comparator);function ct(...e){let t=aw;for(const n of e)t=t.add(n);return t}const uw=new mt(U);function lw(){return uw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ur(t)?"-0":t}}function kh(e){return{integerValue:""+e}}function cw(e,t){return MT(t)?kh(t):Mh(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this._=void 0}}function hw(e,t,n){return e instanceof Gr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jo(s)&&(s=Ih(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof zn?Lh(e,t):e instanceof qn?jh(e,t):function(i,s){const o=$h(i,s),a=Vu(o)+Vu(i.Te);return Us(o)&&Us(i.Te)?kh(a):Mh(i.serializer,a)}(e,t)}function fw(e,t,n){return e instanceof zn?Lh(e,t):e instanceof qn?jh(e,t):n}function $h(e,t){return e instanceof Kr?function(r){return Us(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Gr extends Ai{}class zn extends Ai{constructor(t){super(),this.elements=t}}function Lh(e,t){const n=Uh(t);for(const r of e.elements)n.some(i=>Lt(i,r))||n.push(r);return{arrayValue:{values:n}}}class qn extends Ai{constructor(t){super(),this.elements=t}}function jh(e,t){let n=Uh(t);for(const r of e.elements)n=n.filter(i=>!Lt(i,r));return{arrayValue:{values:n}}}class Kr extends Ai{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Vu(e){return it(e.integerValue||e.doubleValue)}function Uh(e){return Uo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function dw(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof zn&&i instanceof zn||r instanceof qn&&i instanceof qn?tn(r.elements,i.elements,Lt):r instanceof Kr&&i instanceof Kr?Lt(r.Te,i.Te):r instanceof Gr&&i instanceof Gr}(e.transform,t.transform)}class pw{constructor(t,n){this.version=t,this.transformResults=n}}class Ht{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ht}static exists(t){return new Ht(void 0,t)}static updateTime(t){return new Ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ar(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class bi{}function Bh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new qh(e.key,Ht.none()):new ir(e.key,e.data,Ht.none());{const n=e.data,r=Dt.empty();let i=new mt(ht.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ue(e.key,r,new xt(i.toArray()),Ht.none())}}function gw(e,t,n){e instanceof ir?function(i,s,o){const a=i.value.clone(),u=Nu(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Ue?function(i,s,o){if(!Ar(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Nu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(zh(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Sn(e,t,n,r){return e instanceof ir?function(s,o,a,u){if(!Ar(s.precondition,o))return a;const l=s.value.clone(),c=Mu(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ue?function(s,o,a,u){if(!Ar(s.precondition,o))return a;const l=Mu(s.fieldTransforms,u,o),c=o.data;return c.setAll(zh(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Ar(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function mw(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=$h(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Fu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&tn(r,i,(s,o)=>dw(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ir extends bi{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ue extends bi{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zh(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Nu(e,t,n){const r=new Map;et(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,fw(o,a,n[i]))}return r}function Mu(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,hw(s,o,t))}return r}class qh extends bi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yw extends bi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&gw(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Sn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Sn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Nh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Bh(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),ct())}isEqual(t){return this.batchId===t.batchId&&tn(this.mutations,t.mutations,(n,r)=>Fu(n,r))&&tn(this.baseMutations,t.baseMutations,(n,r)=>Fu(n,r))}}class Ho{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){et(t.mutations.length===r.length);let i=function(){return ow}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ho(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W,F;function Ew(e){switch(e){default:return O();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Tw(e){if(e===void 0)return Oe("GRPC error has no .code"),m.UNKNOWN;switch(e){case W.OK:return m.OK;case W.CANCELLED:return m.CANCELLED;case W.UNKNOWN:return m.UNKNOWN;case W.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case W.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case W.INTERNAL:return m.INTERNAL;case W.UNAVAILABLE:return m.UNAVAILABLE;case W.UNAUTHENTICATED:return m.UNAUTHENTICATED;case W.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case W.NOT_FOUND:return m.NOT_FOUND;case W.ALREADY_EXISTS:return m.ALREADY_EXISTS;case W.PERMISSION_DENIED:return m.PERMISSION_DENIED;case W.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case W.ABORTED:return m.ABORTED;case W.OUT_OF_RANGE:return m.OUT_OF_RANGE;case W.UNIMPLEMENTED:return m.UNIMPLEMENTED;case W.DATA_LOSS:return m.DATA_LOSS;default:return O()}}(F=W||(W={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new TT([4294967295,4294967295],0);class ww{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function qs(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Iw(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Aw(e,t){return qs(e,t.toTimestamp())}function Xe(e){return et(!!e),H.fromTimestamp(function(n){const r=Ve(n);return new Z(r.seconds,r.nanos)}(e))}function Hh(e,t){return function(r){return new G(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function bw(e){const t=G.fromString(e);return et(Vw(t)),t}function Hs(e,t){return Hh(e.databaseId,t.path)}function Sw(e){const t=bw(e);return t.length===4?G.emptyPath():Cw(t)}function Rw(e){return new G(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Cw(e){return et(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function ku(e,t,n){return{name:Hs(e,t),fields:n.value.mapValue.fields}}function Pw(e,t){let n;if(t instanceof ir)n={update:ku(e,t.key,t.value)};else if(t instanceof qh)n={delete:Hs(e,t.key)};else if(t instanceof Ue)n={update:ku(e,t.key,t.data),updateMask:Ow(t.fieldMask)};else{if(!(t instanceof yw))return O();n={verify:Hs(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Kr)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw O()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Aw(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(e,t.precondition)),n}function Dw(e,t){return e&&e.length>0?(et(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Xe(i.updateTime):Xe(s);return o.isEqual(H.min())&&(o=Xe(s)),new pw(o,i.transformResults||[])}(n,t))):[]}function xw(e){let t=Sw(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){et(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=Gh(h);return f instanceof se&&Rh(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(v){return new In(Ge(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Lo(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,p=h.values||[];return new qr(p,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,p=h.values||[];return new qr(p,f)}(n.endAt)),XT(t,i,o,s,a,"F",u,l)}function Gh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ge(n.unaryFilter.field);return J.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ge(n.unaryFilter.field);return J.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ge(n.unaryFilter.field);return J.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ge(n.unaryFilter.field);return J.create(o,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):e.fieldFilter!==void 0?function(n){return J.create(Ge(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return se.create(n.compositeFilter.filters.map(r=>Gh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(n.compositeFilter.op))}(e):O()}function Ge(e){return ht.fromServerFormat(e.fieldPath)}function Ow(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Vw(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t){this.ht=t}}function Nw(e){const t=xw({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?zs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(){this.an=new kw}addToCollectionParentIndex(t,n){return this.an.add(n),g.resolve()}getCollectionParents(t,n){return g.resolve(this.an.getEntries(n))}addFieldIndex(t,n){return g.resolve()}deleteFieldIndex(t,n){return g.resolve()}deleteAllFieldIndexes(t){return g.resolve()}createTargetIndexes(t,n){return g.resolve()}getDocumentsMatchingTarget(t,n){return g.resolve(null)}getIndexType(t,n){return g.resolve(0)}getFieldIndexes(t,n){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,n){return g.resolve(ie.min())}getMinOffsetFromCollectionGroup(t,n){return g.resolve(ie.min())}updateCollectionGroup(t,n,r){return g.resolve()}updateIndexEntries(t,n){return g.resolve()}}class kw{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new mt(G.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new mt(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Bn(){return new sn(0)}static Ln(){return new sn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.changes=new cn(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?g.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Sn(r.mutation,i,xt.empty(),Z.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,ct()).next(()=>r))}getLocalViewOfDocuments(t,n,r=ct()){const i=Ee();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=_r();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ee();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,ct()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Hr();const o=bn(),a=function(){return bn()}();return n.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Ue)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),Sn(c.mutation,l,c.mutation.getFieldMask(),Z.now())):o.set(l.key,xt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Lw(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=bn();let i=new Et((o,a)=>o-a),s=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let c=r.get(u)||xt.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||ct()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=Nh();c.forEach(f=>{if(!s.has(f)){const p=Bh(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return P.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):ew(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):g.resolve(Ee());let a=-1,u=s;return o.next(l=>g.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?g.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{u=u.insert(c,f)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,ct())).next(c=>({batchId:a,changes:Fh(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new P(n)).next(r=>{let i=_r();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=_r();return this.indexManager.getCollectionParents(t,s).next(a=>g.forEach(a,u=>{const l=function(h,f){return new Ii(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,Pt.newInvalidDocument(c)))});let a=_r();return o.forEach((u,l)=>{const c=s.get(u);c!==void 0&&Sn(c.mutation,l,xt.empty(),Z.now()),qo(n,l)&&(a=a.insert(u,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,n){return g.resolve(this.lr.get(n))}saveBundleMetadata(t,n){return this.lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xe(i.createTime)}}(n)),g.resolve()}getNamedQuery(t,n){return g.resolve(this.hr.get(n))}saveNamedQuery(t,n){return this.hr.set(n.name,function(i){return{name:i.name,query:Nw(i.bundledQuery),readTime:Xe(i.readTime)}}(n)),g.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(){this.overlays=new Et(P.comparator),this.Pr=new Map}getOverlay(t,n){return g.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ee();return g.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.It(t,n,s)}),g.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),g.resolve()}getOverlaysForCollection(t,n,r){const i=Ee(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Et((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Ee(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=Ee(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return g.resolve(a)}It(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vw(n,r));let s=this.Pr.get(n);s===void 0&&(s=ct(),this.Pr.set(n,s)),this.Pr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Ir=new mt(X.dr),this.Tr=new mt(X.Er)}isEmpty(){return this.Ir.isEmpty()}addReference(t,n){const r=new X(t,n);this.Ir=this.Ir.add(r),this.Tr=this.Tr.add(r)}Ar(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Rr(new X(t,n))}Vr(t,n){t.forEach(r=>this.removeReference(r,n))}mr(t){const n=new P(new G([])),r=new X(n,t),i=new X(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Tr=this.Tr.delete(t)}pr(t){const n=new P(new G([])),r=new X(n,t),i=new X(n,t+1);let s=ct();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new X(t,0),r=this.Ir.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class X{constructor(t,n){this.key=t,this.yr=n}static dr(t,n){return P.comparator(t.key,n.key)||U(t.yr,n.yr)}static Er(t,n){return U(t.yr,n.yr)||P.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.wr=1,this.Sr=new mt(X.dr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _w(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Sr=this.Sr.add(new X(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,n){return g.resolve(this.br(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Dr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new X(n,0),i=new X(n,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const a=this.br(o.yr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new mt(U);return n.forEach(i=>{const s=new X(i,0),o=new X(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{r=r.add(a.yr)})}),g.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new X(new P(s),0);let a=new mt(U);return this.Sr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.yr)),!0)},o),g.resolve(this.Cr(a))}Cr(t){const n=[];return t.forEach(r=>{const i=this.br(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){et(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return g.forEach(n.mutations,i=>{const s=new X(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,n){const r=new X(n,0),i=this.Sr.firstAfterOrEqual(r);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}vr(t,n){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const n=this.Dr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(t){this.Fr=t,this.docs=function(){return new Et(P.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return g.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(t,n){let r=Hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pt.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Hr();const o=n.path,a=new P(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||VT(OT(c),r)<=0||(i.has(c.key)||qo(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,n,r,i){O()}Mr(t,n){return g.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Hw(this)}getSize(t){return g.resolve(this.size)}}class Hw extends $w{constructor(t){super(),this.ur=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ur.addEntry(t,i)):this.ur.removeEntry(r)}),g.waitFor(n)}getFromCache(t,n){return this.ur.getEntry(t,n)}getAllFromCache(t,n){return this.ur.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(t){this.persistence=t,this.Or=new cn(n=>Bo(n),zo),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.Nr=0,this.Br=new Go,this.targetCount=0,this.Lr=sn.Bn()}forEachTarget(t,n){return this.Or.forEach((r,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Nr&&(this.Nr=n),g.resolve()}Qn(t){this.Or.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new sn(n),this.highestTargetId=n),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,n){return this.Qn(n),this.targetCount+=1,g.resolve()}updateTargetData(t,n){return this.Qn(n),g.resolve()}removeTargetData(t,n){return this.Or.delete(n.target),this.Br.mr(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,n){const r=this.Or.get(n)||null;return g.resolve(r)}addMatchingKeys(t,n,r){return this.Br.Ar(n,r),g.resolve()}removeMatchingKeys(t,n,r){this.Br.Vr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Br.mr(n),g.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Br.pr(n);return g.resolve(r)}containsKey(t,n){return g.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(t,n){this.kr={},this.overlays={},this.qr=new Th(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=t(this),this.Kr=new Gw(this),this.indexManager=new Mw,this.remoteDocumentCache=function(i){return new qw(i)}(r=>this.referenceDelegate.$r(r)),this.serializer=new Fw(n),this.Ur=new Uw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Bw,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.kr[t.toKey()];return r||(r=new zw(n,this.referenceDelegate),this.kr[t.toKey()]=r),r}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(t,n,r){T("MemoryPersistence","Starting transaction:",t);const i=new Ww(this.qr.next());return this.referenceDelegate.Wr(),r(i).next(s=>this.referenceDelegate.Gr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}zr(t,n){return g.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,n)))}}class Ww extends NT{constructor(t){super(),this.currentSequenceNumber=t}}class Ko{constructor(t){this.persistence=t,this.jr=new Go,this.Hr=null}static Jr(t){return new Ko(t)}get Yr(){if(this.Hr)return this.Hr;throw O()}addReference(t,n,r){return this.jr.addReference(r,n),this.Yr.delete(r.toString()),g.resolve()}removeReference(t,n,r){return this.jr.removeReference(r,n),this.Yr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,n){return this.Yr.add(n.toString()),g.resolve()}removeTarget(t,n){this.jr.mr(n.targetId).forEach(i=>this.Yr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Yr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Wr(){this.Hr=new Set}Gr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Yr,r=>{const i=P.fromPath(r);return this.Zr(t,i).next(s=>{s||n.removeEntry(i,H.min())})}).next(()=>(this.Hr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Zr(t,n).next(r=>{r?this.Yr.delete(n.toString()):this.Yr.add(n.toString())})}$r(t){return 0}Zr(t,n){return g.or([()=>g.resolve(this.jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.zr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Qi=r,this.Ki=i}static $i(t,n){let r=ct(),i=ct();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wo(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}initialize(t,n){this.ji=t,this.indexManager=n,this.Ui=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.Hi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Qw;return this.Yi(t,n,o).next(a=>{if(s.result=a,this.Wi)return this.Zi(t,n,o,a.size)})}).next(()=>s.result)}Zi(t,n,r,i){return r.documentReadCount<this.Gi?(gn()<=N.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",mn(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),g.resolve()):(gn()<=N.DEBUG&&T("QueryEngine","Query:",mn(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.zi*i?(gn()<=N.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",mn(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,be(n))):g.resolve())}Hi(t,n){if(Ou(n))return g.resolve(null);let r=be(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zs(n,null,"F"),r=be(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=ct(...s);return this.ji.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Xi(n,a);return this.es(n,l,o,u.readTime)?this.Hi(t,zs(n,null,"F")):this.ts(t,l,n,u)}))})))}Ji(t,n,r,i){return Ou(n)||i.isEqual(H.min())?g.resolve(null):this.ji.getDocuments(t,r).next(s=>{const o=this.Xi(n,s);return this.es(n,o,r,i)?g.resolve(null):(gn()<=N.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mn(n)),this.ts(t,o,n,xT(i,-1)).next(a=>a))})}Xi(t,n){let r=new mt(rw(t));return n.forEach((i,s)=>{qo(t,s)&&(r=r.add(s))}),r}es(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Yi(t,n,r){return gn()<=N.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",mn(n)),this.ji.getDocumentsMatchingQuery(t,n,ie.min(),r)}ts(t,n,r,i){return this.ji.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(t,n,r,i){this.persistence=t,this.ns=n,this.serializer=i,this.rs=new Et(U),this.ss=new cn(s=>Bo(s),zo),this.os=new Map,this._s=t.getRemoteDocumentCache(),this.Kr=t.getTargetCache(),this.Ur=t.getBundleCache(),this.us(r)}us(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new jw(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.rs))}}function Jw(e,t,n,r){return new Xw(e,t,n,r)}async function Kh(e,t){const n=q(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.us(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=ct();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({cs:l,removedBatchIds:o,addedBatchIds:a}))})})}function Zw(e,t){const n=q(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n._s.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,f=h.keys();let p=g.resolve();return f.forEach(v=>{p=p.next(()=>c.getEntry(u,v)).next(A=>{const w=l.docVersions.get(v);et(w!==null),A.version.compareTo(w)<0&&(h.applyToRemoteDocument(A,l),A.isValidDocument()&&(A.setReadTime(l.commitVersion),c.addEntry(A)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ct();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function tI(e){const t=q(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Kr.getLastRemoteSnapshotVersion(n))}function eI(e,t){const n=q(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class $u{constructor(){this.activeTargetIds=lw()}Rs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}As(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nI{constructor(){this.ro=new $u,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.ro.Rs(t),this.io[t]||"not-current"}updateQueryState(t,n,r){this.io[t]=n}removeLocalQueryTarget(t){this.ro.Vs(t)}isLocalQueryTarget(t){return this.ro.activeTargetIds.has(t)}clearQueryState(t){delete this.io[t]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(t){return this.ro.activeTargetIds.has(t)}start(){return this.ro=new $u,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{so(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}so(t){this.co.push(t)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.co)t(0)}uo(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.co)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr=null;function as(){return vr===null?vr=function(){return 268435456+Math.round(2147483648*Math.random())}():vr++,"0x"+vr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(t){this.ho=t.ho,this.Po=t.Po}Io(t){this.To=t}Eo(t){this.Ao=t}onMessage(t){this.Ro=t}close(){this.Po()}send(t){this.ho(t)}Vo(){this.To()}mo(t){this.Ao(t)}fo(t){this.Ro(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class oI extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=r+"://"+n.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get So(){return!1}bo(n,r,i,s,o){const a=as(),u=this.Do(n,r);T("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(l,s,o),this.vo(n,u,l,i).then(c=>(T("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw jr("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}Fo(n,r,i,s,o,a){return this.bo(n,r,i,s,o)}Co(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ln}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}Do(n,r){const i=iI[n];return`${this.po}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,r,i){const s=as();return new Promise((o,a)=>{const u=new ET;u.setWithCredentials(!0),u.listenOnce(_T.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case os.NO_ERROR:const c=u.getResponseJson();T(ut,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case os.TIMEOUT:T(ut,`RPC '${t}' ${s} timed out`),a(new b(m.DEADLINE_EXCEEDED,"Request time out"));break;case os.HTTP_ERROR:const h=u.getStatus();if(T(ut,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(w){const C=w.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(C)>=0?C:m.UNKNOWN}(p.status);a(new b(v,p.message))}else a(new b(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new b(m.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{T(ut,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);T(ut,`RPC '${t}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Mo(t,n,r){const i=as(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=mT(),a=yT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Co(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const c=s.join("");T(ut,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let f=!1,p=!1;const v=new sI({ho:w=>{p?T(ut,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(T(ut,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),T(ut,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},Po:()=>h.close()}),A=(w,C,$)=>{w.listen(C,yt=>{try{$(yt)}catch(pt){setTimeout(()=>{throw pt},0)}})};return A(h,gr.EventType.OPEN,()=>{p||T(ut,`RPC '${t}' stream ${i} transport opened.`)}),A(h,gr.EventType.CLOSE,()=>{p||(p=!0,T(ut,`RPC '${t}' stream ${i} transport closed`),v.mo())}),A(h,gr.EventType.ERROR,w=>{p||(p=!0,jr(ut,`RPC '${t}' stream ${i} transport errored:`,w),v.mo(new b(m.UNAVAILABLE,"The operation could not be completed")))}),A(h,gr.EventType.MESSAGE,w=>{var C;if(!p){const $=w.data[0];et(!!$);const yt=$,pt=yt.error||((C=yt[0])===null||C===void 0?void 0:C.error);if(pt){T(ut,`RPC '${t}' stream ${i} received error:`,pt);const Ot=pt.status;let x=function(Xt){const L=W[Xt];if(L!==void 0)return Tw(L)}(Ot),V=pt.message;x===void 0&&(x=m.INTERNAL,V="Unknown error status: "+Ot+" with message "+pt.message),p=!0,v.mo(new b(x,V)),h.close()}else T(ut,`RPC '${t}' stream ${i} received:`,$),v.fo($)}}),A(a,vT.STAT_EVENT,w=>{w.stat===Au.PROXY?T(ut,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Au.NOPROXY&&T(ut,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Vo()},0),v}}function us(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){return new ww(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,n,r=1e3,i=1.5,s=6e4){this._i=t,this.timerId=n,this.xo=r,this.Oo=i,this.No=s,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(t){this.cancel();const n=Math.floor(this.Bo+this.Ko()),r=Math.max(0,Date.now()-this.ko),i=Math.max(0,n-r);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this._i.enqueueAfterDelay(this.timerId,i,()=>(this.ko=Date.now(),t())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(t,n,r,i,s,o,a,u){this._i=t,this.Uo=r,this.Wo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new Wh(t,n)}Jo(){return this.state===1||this.state===5||this.Yo()}Yo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&this.zo===null&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(t){this.r_(),this.stream.send(t)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(t,n){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,t!==4?this.Ho.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Oe(n.toString()),Oe("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.s_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Eo(n)}s_(){}auth(){this.state=1;const t=this.o_(this.Go),n=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Go===n&&this.__(r,i)},r=>{t(()=>{const i=new b(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.a_(i)})})}__(t,n){const r=this.o_(this.Go);this.stream=this.u_(t,n),this.stream.Io(()=>{r(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(i=>{r(()=>this.a_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}o_(t){return n=>{this._i.enqueueAndForget(()=>this.Go===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uI extends aI{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.P_=!1}get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(t,n){return this.connection.Mo("Write",t,n)}onMessage(t){if(et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.P_){this.Ho.reset();const n=Dw(t.writeResults,t.commitTime),r=Xe(t.commitTime);return this.listener.T_(r,n)}return et(!t.writeResults||t.writeResults.length===0),this.P_=!0,this.listener.E_()}A_(){const t={};t.database=Rw(this.serializer),this.n_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Pw(this.serializer,r))};this.n_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.R_=!1}V_(){if(this.R_)throw new b(m.FAILED_PRECONDITION,"The client has already been terminated.")}bo(t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.bo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new b(m.UNKNOWN,i.toString())})}Fo(t,n,r,i){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new b(m.UNKNOWN,s.toString())})}terminate(){this.R_=!0}}class cI{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}y_(){this.f_===0&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(t){this.state==="Online"?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.w_("Offline")))}set(t){this.D_(),this.f_=0,t==="Online"&&(this.p_=!1),this.w_(t)}w_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}S_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.p_?(Oe(n),this.p_=!1):T("OnlineStateTracker",n)}D_(){this.g_!==null&&(this.g_.cancel(),this.g_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=s,this.x_.so(o=>{r.enqueueAndForget(async()=>{or(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=q(u);l.F_.add(4),await sr(l),l.O_.set("Unknown"),l.F_.delete(4),await Ri(l)}(this))})}),this.O_=new cI(r,i)}}async function Ri(e){if(or(e))for(const t of e.M_)await t(!0)}async function sr(e){for(const t of e.M_)await t(!1)}function or(e){return q(e).F_.size===0}async function Qh(e,t,n){if(!wi(t))throw t;e.F_.add(1),await sr(e),e.O_.set("Offline"),n||(n=()=>tI(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await Ri(e)})}function Yh(e,t){return t().catch(n=>Qh(e,n,t))}async function Ci(e){const t=q(e),n=oe(t);let r=t.C_.length>0?t.C_[t.C_.length-1].batchId:-1;for(;fI(t);)try{const i=await eI(t.localStore,r);if(i===null){t.C_.length===0&&n.e_();break}r=i.batchId,dI(t,i)}catch(i){await Qh(t,i)}Xh(t)&&Jh(t)}function fI(e){return or(e)&&e.C_.length<10}function dI(e,t){e.C_.push(t);const n=oe(e);n.Yo()&&n.I_&&n.d_(t.mutations)}function Xh(e){return or(e)&&!oe(e).Jo()&&e.C_.length>0}function Jh(e){oe(e).start()}async function pI(e){oe(e).A_()}async function gI(e){const t=oe(e);for(const n of e.C_)t.d_(n.mutations)}async function mI(e,t,n){const r=e.C_.shift(),i=Ho.from(r,t,n);await Yh(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ci(e)}async function yI(e,t){t&&oe(e).I_&&await async function(r,i){if(function(o){return Ew(o)&&o!==m.ABORTED}(i.code)){const s=r.C_.shift();oe(r).Xo(),await Yh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ci(r)}}(e,t),Xh(e)&&Jh(e)}async function ju(e,t){const n=q(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=or(n);n.F_.add(3),await sr(n),r&&n.O_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.F_.delete(3),await Ri(n)}async function _I(e,t){const n=q(e);t?(n.F_.delete(2),await Ri(n)):t||(n.F_.add(2),await sr(n),n.O_.set("Unknown"))}function oe(e){return e.L_||(e.L_=function(n,r,i){const s=q(n);return s.V_(),new uI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Io:pI.bind(null,e),Eo:yI.bind(null,e),E_:gI.bind(null,e),T_:mI.bind(null,e)}),e.M_.push(async t=>{t?(e.L_.Xo(),await Ci(e)):(await e.L_.stop(),e.C_.length>0&&(T("RemoteStore",`Stopping write stream with ${e.C_.length} pending writes`),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Qo(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zh(e,t){if(Oe("AsyncQueue",`${t}: ${e}`),wi(e))return new b(m.UNAVAILABLE,`${t}: ${e}`);throw e}class vI{constructor(){this.queries=new cn(t=>Oh(t),xh),this.onlineState="Unknown",this.K_=new Set}}function EI(e){e.K_.forEach(t=>{t.next()})}class TI{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new cn(a=>Oh(a),xh),this.pa=new Map,this.ya=new Set,this.wa=new Et(P.comparator),this.Sa=new Map,this.ba=new Go,this.Da={},this.Ca=new Map,this.va=sn.Ln(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function wI(e,t,n){const r=SI(e);try{const i=await function(o,a){const u=q(o),l=Z.now(),c=a.reduce((p,v)=>p.add(v.key),ct());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=Hr(),A=ct();return u._s.getEntries(p,c).next(w=>{v=w,v.forEach((C,$)=>{$.isValidDocument()||(A=A.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(p,v)).next(w=>{h=w;const C=[];for(const $ of a){const yt=mw($,h.get($.key).overlayedDocument);yt!=null&&C.push(new Ue($.key,yt,Ah(yt.value.mapValue),Ht.exists(!0)))}return u.mutationQueue.addMutationBatch(p,l,C,a)}).next(w=>{f=w;const C=w.applyToLocalDocumentSet(h,A);return u.documentOverlayCache.saveOverlays(p,w.batchId,C)})}).then(()=>({batchId:f.batchId,changes:Fh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Da[o.currentUser.toKey()];l||(l=new Et(U)),l=l.insert(a,u),o.Da[o.currentUser.toKey()]=l}(r,i.batchId,n),await Pi(r,i.changes),await Ci(r.remoteStore)}catch(i){const s=Zh(i,"Failed to persist write");n.reject(s)}}function Uu(e,t,n){const r=q(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=q(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const f of h.listeners)f.U_(a)&&(l=!0)}),l&&EI(u)}(r.eventManager,t),i.length&&r.fa.c_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function II(e,t){const n=q(e),r=t.batch.batchId;try{const i=await Zw(n.localStore,t);ef(n,r,null),tf(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(n,i)}catch(i){await Eh(i)}}async function AI(e,t,n){const r=q(e);try{const i=await function(o,a){const u=q(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(et(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,t);ef(r,t,n),tf(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Pi(r,i)}catch(i){await Eh(i)}}function tf(e,t){(e.Ca.get(t)||[]).forEach(n=>{n.resolve()}),e.Ca.delete(t)}function ef(e,t,n){const r=q(e);let i=r.Da[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}async function Pi(e,t,n){const r=q(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=Wo.$i(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.fa.c_(i),await async function(u,l){const c=q(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(l,f=>g.forEach(f.Qi,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>g.forEach(f.Ki,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!wi(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const p=c.rs.get(f),v=p.snapshotVersion,A=p.withLastLimboFreeSnapshotVersion(v);c.rs=c.rs.insert(f,A)}}}(r.localStore,s))}async function bI(e,t){const n=q(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await Kh(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new b(m.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Pi(n,r.cs)}}function SI(e){const t=q(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=II.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=AI.bind(null,t),t}class Bu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Si(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Jw(this.persistence,new Yw,t.initialUser,this.serializer)}createPersistence(t){return new Kw(Ko.Jr,this.serializer)}createSharedClientState(t){return new nI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class RI{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bI.bind(null,this.syncEngine),await _I(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new vI}()}createDatastore(t){const n=Si(t.databaseInfo.databaseId),r=function(s){return new oI(s)}(t.databaseInfo);return function(s,o,a,u){return new lI(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new hI(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Uu(this.syncEngine,n,0),function(){return Lu.C()?new Lu:new rI}())}createSyncEngine(t,n){return function(i,s,o,a,u,l,c){const h=new TI(i,s,o,a,u,l);return c&&(h.Fa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=q(n);T("RemoteStore","RemoteStore shutting down."),r.F_.add(5),await sr(r),r.x_.shutdown(),r.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=vh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Zh(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ls(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function zu(e,t){e.asyncQueue.verifyOperationInProgress();const n=await DI(e);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>ju(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>ju(t.remoteStore,s)),e._onlineComponents=t}function PI(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function DI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await ls(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!PI(n))throw n;jr("Error using user provided cache. Falling back to memory cache: "+n),await ls(e,new Bu)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await ls(e,new Bu);return e._offlineComponents}async function xI(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await zu(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await zu(e,new RI))),e._onlineComponents}function OI(e){return xI(e).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(e,t,n){if(!n)throw new b(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function VI(e,t,n,r){if(t===!0&&r===!0)throw new b(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Hu(e){if(!P.isDocumentKey(e))throw new b(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Gu(e){if(P.isDocumentKey(e))throw new b(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Yo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":O()}function sf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new b(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yo(e);throw new b(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new b(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new b(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}VI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nf((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new b(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new b(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new b(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Di{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new b(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new b(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new wT;switch(r.type){case"firstParty":return new ST(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new b(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qu.get(n);r&&(T("ComponentProvider","Removing Datastore"),qu.delete(n),r.terminate())}(this),Promise.resolve()}}function FI(e,t,n,r={}){var i;const s=(e=sf(e,Di))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=lt.MOCK_USER;else{a=w_(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new b(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new lt(l)}e._authCredentials=new IT(new _h(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Xo(this.firestore,t,this._query)}}class Gt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ee(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gt(this.firestore,t,this._key)}}class ee extends Xo{constructor(t,n,r){super(t,n,JT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gt(this.firestore,null,new P(t))}withConverter(t){return new ee(this.firestore,t,this._path)}}function NI(e,t,...n){if(e=Re(e),rf("collection","path",t),e instanceof Di){const r=G.fromString(t,...n);return Gu(r),new ee(e,null,r)}{if(!(e instanceof Gt||e instanceof ee))throw new b(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Gu(r),new ee(e.firestore,null,r)}}function MI(e,t,...n){if(e=Re(e),arguments.length===1&&(t=vh.V()),rf("doc","path",t),e instanceof Di){const r=G.fromString(t,...n);return Hu(r),new Gt(e,null,new P(r))}{if(!(e instanceof Gt||e instanceof ee))throw new b(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(G.fromString(t,...n));return Hu(r),new Gt(e.firestore,e instanceof ee?e.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new Wh(this,"async_queue_retry"),this.ou=()=>{const n=us();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ho.$o()};const t=us();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ou)}get isShuttingDown(){return this.eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this._u(),this.au(t)}enterRestrictedMode(t){if(!this.eu){this.eu=!0,this.iu=t||!1;const n=us();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ou)}}enqueue(t){if(this._u(),this.eu)return new Promise(()=>{});const n=new Ae;return this.au(()=>this.eu&&this.iu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xa.push(t),this.uu()))}async uu(){if(this.Xa.length!==0){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(t){if(!wi(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(t){const n=this.Za.then(()=>(this.ru=!0,t().catch(r=>{this.nu=r,this.ru=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Oe("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.ru=!1,r))));return this.Za=n,n}enqueueAfterDelay(t,n,r){this._u(),this.su.indexOf(t)>-1&&(n=0);const i=Qo.createAndSchedule(this,t,n,r,s=>this.cu(s));return this.tu.push(i),i}_u(){this.nu&&O()}verifyOperationInProgress(){}async lu(){let t;do t=this.Za,await t;while(t!==this.Za)}hu(t){for(const n of this.tu)if(n.timerId===t)return!0;return!1}Pu(t){return this.lu().then(()=>{this.tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.lu()})}Iu(t){this.su.push(t)}cu(t){const n=this.tu.indexOf(t);this.tu.splice(n,1)}}class of extends Di{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new kI}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||af(this),this._firestoreClient.terminate()}}function $I(e,t){const n=typeof e=="object"?e:zl(),r=typeof e=="string"?e:t||"(default)",i=Wn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=E_("firestore");s&&FI(i,...s)}return i}function LI(e){return e._firestoreClient||af(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function af(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,l,c){return new LT(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,nf(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new CI(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Hn(Qt.fromBase64String(t))}catch(n){throw new b(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Hn(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new b(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new b(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new b(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI=/^__.*__$/;class UI{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Ue(t,this.data,this.fieldMask,n,this.fieldTransforms):new ir(t,this.data,n,this.fieldTransforms)}}function hf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class Jo{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.du(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(t){return new Jo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Eu({path:r,Ru:!1});return i.Vu(t),i}mu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Eu({path:r,Ru:!1});return i.du(),i}fu(t){return this.Eu({path:void 0,Ru:!0})}gu(t){return Wr(t,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}du(){if(this.path)for(let t=0;t<this.path.length;t++)this.Vu(this.path.get(t))}Vu(t){if(t.length===0)throw this.gu("Document fields must not be empty");if(hf(this.Tu)&&jI.test(t))throw this.gu('Document fields cannot begin and end with "__"')}}class BI{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Si(t)}wu(t,n,r,i=!1){return new Jo({Tu:t,methodName:n,yu:r,path:ht.emptyPath(),Ru:!1,pu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zI(e){const t=e._freezeSettings(),n=Si(e._databaseId);return new BI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function qI(e,t,n,r,i,s={}){const o=e.wu(s.merge||s.mergeFields?2:0,t,n,i);gf("Data must be an object, but it was:",o,r);const a=df(r,o);let u,l;if(s.merge)u=new xt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=HI(t,h,n);if(!o.contains(f))throw new b(m.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);WI(c,f)||c.push(f)}u=new xt(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new UI(new Dt(a),u,l)}function ff(e,t){if(pf(e=Re(e)))return gf("Unsupported field value:",t,e),df(e,t);if(e instanceof lf)return function(r,i){if(!hf(i.Tu))throw i.gu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.gu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&t.Tu!==4)throw t.gu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=ff(a,i.fu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Z.fromDate(r);return{timestampValue:qs(i.serializer,s)}}if(r instanceof Z){const s=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qs(i.serializer,s)}}if(r instanceof cf)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:Iw(i.serializer,r._byteString)};if(r instanceof Gt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.gu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hh(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.gu(`Unsupported field value: ${Yo(r)}`)}(e,t)}function df(e,t){const n={};return wh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rr(e,(r,i)=>{const s=ff(i,t.Au(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pf(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof cf||e instanceof Hn||e instanceof Gt||e instanceof lf)}function gf(e,t,n){if(!pf(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Yo(n);throw r==="an object"?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function HI(e,t,n){if((t=Re(t))instanceof uf)return t._internalPath;if(typeof t=="string")return KI(e,t);throw Wr("Field path arguments must be of type string or ",e,!1,void 0,n)}const GI=new RegExp("[~\\*/\\[\\]]");function KI(e,t,n){if(t.search(GI)>=0)throw Wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new uf(...t.split("."))._internalPath}catch{throw Wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new b(m.INVALID_ARGUMENT,a+e+u)}function WI(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function YI(e,t){const n=sf(e.firestore,of),r=MI(e),i=QI(e.converter,t);return XI(n,[qI(zI(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Ht.exists(!1))]).then(()=>r)}function XI(e,t){return function(r,i){const s=new Ae;return r.asyncQueue.enqueueAndForget(async()=>wI(await OI(r),i,s)),s.promise}(LI(e),t)}(function(t,n=!0){(function(i){ln=i})(Cv),re(new Kt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new of(new AT(r.getProvider("auth-internal")),new CT(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new b(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zr(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mt(bu,"4.1.3",t),Mt(bu,"4.1.3","esm2017")})();const JI={apiKey:"AIzaSyAlCew7SNU41FQe5R5gKu-hnoJZPN8GAeY",authDomain:"portfolio-website-2f6d3.firebaseapp.com",projectId:"portfolio-website-2f6d3",storageBucket:"portfolio-website-2f6d3.appspot.com",messagingSenderId:"1045526808684",appId:"1:1045526808684:web:bc17a0e19bc6e18ccdb049",measurementId:"G-RXHVWWNBN9"},mf=Bl(JI);f0(mf);const ZI=$I(mf),aA=()=>{var a,u,l,c,h,f;const e=S.useRef(),[t,n]=S.useState(!1),r=NI(ZI,"Contact_Form"),[i,s]=S.useState(null),o=fy({initialValues:{fullName:"",Email:"",Message:""},onSubmit:async p=>{try{n(!0),await YI(r,{values:p}),o.setValues({fullName:"",Email:"",Phone:"",Message:""}),o.setFieldTouched("fullName",!1),o.setFieldTouched("Email",!1),o.setFieldTouched("Message",!1),s("Your Form Has been Submitted Successfully. Our Team will Contact you soon.Have a nice day!"),Ff.sendForm("service_ge7hs3m","template_sbt0g15",e.current,"JofDpKdoSy9X5siMe").then(v=>{console.log(v.text)},v=>{console.log(v.text)}),setTimeout(()=>{s(null)},1e4),n(!1)}catch(v){console.log(v),n(!1)}},validationSchema:Ol({fullName:Tr().min(6,"Must be 6 Characters or Larger").required("Required"),Email:Tr().email("Invalid Email Address").required("Required"),Message:Tr().min(15,"Must be 15 Characters or Larger").required("Required")})});return at.jsxs("div",{className:"mx-auto container  w-full md:px-10 px-5 mt-10",id:"contact",children:[at.jsx("h2",{className:"text-3xl md:text-4xl font-inter font-black",children:"Lets Connect"}),at.jsx("div",{className:"h-[4px] w-[100px] bg-primary ms-3 mt-1 mb-4"}),at.jsxs("div",{className:"form-container h-auto md:h-[430px] flex justify-center flex-col md:flex-row",children:[at.jsx("div",{className:"w-[full] md:w-[75%] p-5",children:at.jsxs("form",{ref:e,onSubmit:o.handleSubmit,className:"flex flex-col items-start font-poppins",children:[at.jsx("input",{type:"text",id:"fullName",name:"fullName",placeholder:"Your Full Name",className:"w-full text-white h-[40px] input mt-2",value:o.values.fullName,onChange:o.handleChange}),((a=o==null?void 0:o.touched)==null?void 0:a.fullName)&&((u=o==null?void 0:o.errors)==null?void 0:u.fullName)&&at.jsx("p",{className:"text-primary para px-2",children:o.errors.fullName}),at.jsx("input",{type:"text",id:"Email",name:"Email",placeholder:"Your Email",className:"w-full text-white h-[40px] input mt-2",value:o.values.Email,onChange:o.handleChange}),((l=o==null?void 0:o.touched)==null?void 0:l.Email)&&((c=o==null?void 0:o.errors)==null?void 0:c.Email)&&at.jsx("p",{className:"text-primary para px-2",children:o.errors.Email}),at.jsx("textarea",{type:"text",id:"Message",name:"Message",placeholder:"Enter Your Message",className:"w-full text-white h-[170px] input mt-2",cols:"30",rows:"10",value:o.values.Message,onChange:o.handleChange}),((h=o==null?void 0:o.touched)==null?void 0:h.Message)&&((f=o==null?void 0:o.errors)==null?void 0:f.Message)&&at.jsx("p",{className:"text-primary para px-2",children:o.errors.Message}),at.jsx(Pf.button,{whileHover:{scale:1.02},type:"submit",className:"bg-primary w-full px-5 py-2 mt-2 rounded-md hover:bg-hoverGreen",disabled:t,onClick:p=>{t&&p.preventDefault()},children:t?"Submitting...":"Submit"}),i&&at.jsx("p",{className:"text-primary text-md mt-1",children:i})]})}),at.jsx("div",{className:"w-[full] md:w-[25%] flex justify-center  overflow-hidden",children:at.jsx("img",{src:c_,alt:"contact-us",className:"md:h-[440px] h-[200px] object-contain",loading:"lazy"})})]})]})};export{aA as default};
