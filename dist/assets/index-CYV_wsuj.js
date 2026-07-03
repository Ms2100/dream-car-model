var Xg=Object.defineProperty;var qg=(n,t,e)=>t in n?Xg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Oe=(n,t,e)=>qg(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hh(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const _e={},ks=[],Mi=()=>{},Lp=()=>!1,Tl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Al=n=>n.startsWith("onUpdate:"),Ke=Object.assign,fh=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Yg=Object.prototype.hasOwnProperty,se=(n,t)=>Yg.call(n,t),Bt=Array.isArray,zs=n=>ra(n)==="[object Map]",Up=n=>ra(n)==="[object Set]",xf=n=>ra(n)==="[object Date]",Yt=n=>typeof n=="function",Ce=n=>typeof n=="string",Yn=n=>typeof n=="symbol",ce=n=>n!==null&&typeof n=="object",Np=n=>(ce(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),Op=Object.prototype.toString,ra=n=>Op.call(n),jg=n=>ra(n).slice(8,-1),Fp=n=>ra(n)==="[object Object]",wl=n=>Ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Po=hh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rl=n=>{const t=Object.create(null);return(e=>t[e]||(t[e]=n(e)))},Kg=/-\w/g,ei=Rl(n=>n.replace(Kg,t=>t.slice(1).toUpperCase())),$g=/\B([A-Z])/g,ls=Rl(n=>n.replace($g,"-$1").toLowerCase()),Bp=Rl(n=>n.charAt(0).toUpperCase()+n.slice(1)),ql=Rl(n=>n?`on${Bp(n)}`:""),_i=(n,t)=>!Object.is(n,t),Yl=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},kp=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Zg=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let yf;const Cl=()=>yf||(yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zr(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],r=Ce(i)?e0(i):Zr(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Ce(n)||ce(n))return n}const Jg=/;(?![^(]*\))/g,Qg=/:([^]+)/,t0=/\/\*[^]*?\*\//g;function e0(n){const t={};return n.replace(t0,"").split(Jg).forEach(e=>{if(e){const i=e.split(Qg);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Vn(n){let t="";if(Ce(n))t=n;else if(Bt(n))for(let e=0;e<n.length;e++){const i=Vn(n[e]);i&&(t+=i+" ")}else if(ce(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const n0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i0=hh(n0);function zp(n){return!!n||n===""}function r0(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=dh(n[i],t[i]);return e}function dh(n,t){if(n===t)return!0;let e=xf(n),i=xf(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Yn(n),i=Yn(t),e||i)return n===t;if(e=Bt(n),i=Bt(t),e||i)return e&&i?r0(n,t):!1;if(e=ce(n),i=ce(t),e||i){if(!e||!i)return!1;const r=Object.keys(n).length,s=Object.keys(t).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!dh(n[o],t[o]))return!1}}return String(n)===String(t)}const Hp=n=>!!(n&&n.__v_isRef===!0),ln=n=>Ce(n)?n:n==null?"":Bt(n)||ce(n)&&(n.toString===Op||!Yt(n.toString))?Hp(n)?ln(n.value):JSON.stringify(n,Vp,2):String(n),Vp=(n,t)=>Hp(t)?Vp(n,t.value):zs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],s)=>(e[jl(i,s)+" =>"]=r,e),{})}:Up(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>jl(e))}:Yn(t)?jl(t):ce(t)&&!Bt(t)&&!Fp(t)?String(t):t,jl=(n,t="")=>{var e;return Yn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class Gp{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ke&&(ke.active?(this.parent=ke,this.index=(ke.scopes||(ke.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=ke;try{return ke=this,t()}finally{ke=e}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){if(this._on>0&&--this._on===0){if(ke===this)ke=this.prevScope;else{let t=ke;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Wp(n){return new Gp(n)}function Xp(){return ke}function s0(n,t=!1){ke&&ke.cleanups.push(n)}let me;const Kl=new WeakSet;class qp{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&(ke.active?ke.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Kl.has(this)&&(Kl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mf(this),Kp(this);const t=me,e=ni;me=this,ni=!0;try{return this.fn()}finally{$p(this),me=t,ni=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_h(t);this.deps=this.depsTail=void 0,Mf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Kl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Yc(this)&&this.run()}get dirty(){return Yc(this)}}let Yp=0,Do,Io;function jp(n,t=!1){if(n.flags|=8,t){n.next=Io,Io=n;return}n.next=Do,Do=n}function ph(){Yp++}function mh(){if(--Yp>0)return;if(Io){let t=Io;for(Io=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Do;){let t=Do;for(Do=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Kp(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $p(n){let t,e=n.depsTail,i=e;for(;i;){const r=i.prevDep;i.version===-1?(i===e&&(e=r),_h(i),o0(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=t,n.depsTail=e}function Yc(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zp(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Zp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vo)||(n.globalVersion=Vo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Yc(n))))return;n.flags|=2;const t=n.dep,e=me,i=ni;me=n,ni=!0;try{Kp(n);const r=n.fn(n._value);(t.version===0||_i(r,n._value))&&(n.flags|=128,n._value=r,t.version++)}catch(r){throw t.version++,r}finally{me=e,ni=i,$p(n),n.flags&=-3}}function _h(n,t=!1){const{dep:e,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let s=e.computed.deps;s;s=s.nextDep)_h(s,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function o0(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ni=!0;const Jp=[];function Ei(){Jp.push(ni),ni=!1}function bi(){const n=Jp.pop();ni=n===void 0?!0:n}function Mf(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=me;me=void 0;try{t()}finally{me=e}}}let Vo=0;class a0{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gh{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!ni||me===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==me)e=this.activeLink=new a0(me,this),me.deps?(e.prevDep=me.depsTail,me.depsTail.nextDep=e,me.depsTail=e):me.deps=me.depsTail=e,Qp(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=me.depsTail,e.nextDep=void 0,me.depsTail.nextDep=e,me.depsTail=e,me.deps===e&&(me.deps=i)}return e}trigger(t){this.version++,Vo++,this.notify(t)}notify(t){ph();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{mh()}}}function Qp(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Qp(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const sl=new WeakMap,Jr=Symbol(""),jc=Symbol(""),Go=Symbol("");function Qe(n,t,e){if(ni&&me){let i=sl.get(n);i||sl.set(n,i=new Map);let r=i.get(e);r||(i.set(e,r=new gh),r.map=i,r.key=e),r.track()}}function zi(n,t,e,i,r,s){const o=sl.get(n);if(!o){Vo++;return}const a=l=>{l&&l.trigger()};if(ph(),t==="clear")o.forEach(a);else{const l=Bt(n),c=l&&wl(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Go||!Yn(f)&&f>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Go)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Jr)),zs(n)&&a(o.get(jc)));break;case"delete":l||(a(o.get(Jr)),zs(n)&&a(o.get(jc)));break;case"set":zs(n)&&a(o.get(Jr));break}}mh()}function l0(n,t){const e=sl.get(n);return e&&e.get(t)}function fs(n){const t=te(n);return t===n?t:(Qe(t,"iterate",Go),In(n)?t:t.map(ri))}function Pl(n){return Qe(n=te(n),"iterate",Go),n}function di(n,t){return Yi(n)?Ks(Xi(n)?ri(t):t):ri(t)}const c0={__proto__:null,[Symbol.iterator](){return $l(this,Symbol.iterator,n=>di(this,n))},concat(...n){return fs(this).concat(...n.map(t=>Bt(t)?fs(t):t))},entries(){return $l(this,"entries",n=>(n[1]=di(this,n[1]),n))},every(n,t){return Ri(this,"every",n,t,void 0,arguments)},filter(n,t){return Ri(this,"filter",n,t,e=>e.map(i=>di(this,i)),arguments)},find(n,t){return Ri(this,"find",n,t,e=>di(this,e),arguments)},findIndex(n,t){return Ri(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Ri(this,"findLast",n,t,e=>di(this,e),arguments)},findLastIndex(n,t){return Ri(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Ri(this,"forEach",n,t,void 0,arguments)},includes(...n){return Zl(this,"includes",n)},indexOf(...n){return Zl(this,"indexOf",n)},join(n){return fs(this).join(n)},lastIndexOf(...n){return Zl(this,"lastIndexOf",n)},map(n,t){return Ri(this,"map",n,t,void 0,arguments)},pop(){return po(this,"pop")},push(...n){return po(this,"push",n)},reduce(n,...t){return Sf(this,"reduce",n,t)},reduceRight(n,...t){return Sf(this,"reduceRight",n,t)},shift(){return po(this,"shift")},some(n,t){return Ri(this,"some",n,t,void 0,arguments)},splice(...n){return po(this,"splice",n)},toReversed(){return fs(this).toReversed()},toSorted(n){return fs(this).toSorted(n)},toSpliced(...n){return fs(this).toSpliced(...n)},unshift(...n){return po(this,"unshift",n)},values(){return $l(this,"values",n=>di(this,n))}};function $l(n,t,e){const i=Pl(n),r=i[t]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=e(s.value)),s}),r}const u0=Array.prototype;function Ri(n,t,e,i,r,s){const o=Pl(n),a=o!==n&&!In(n),l=o[t];if(l!==u0[t]){const h=l.apply(n,s);return a?ri(h):h}let c=e;o!==n&&(a?c=function(h,f){return e.call(this,di(n,h),f,n)}:e.length>2&&(c=function(h,f){return e.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Sf(n,t,e,i){const r=Pl(n),s=r!==n&&!In(n);let o=e,a=!1;r!==n&&(s?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=di(n,c)),e.call(this,c,di(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=r[t](o,...i);return a?di(n,l):l}function Zl(n,t,e){const i=te(n);Qe(i,"iterate",Go);const r=i[t](...e);return(r===-1||r===!1)&&Dl(e[0])?(e[0]=te(e[0]),i[t](...e)):r}function po(n,t,e=[]){Ei(),ph();const i=te(n)[t].apply(n,e);return mh(),bi(),i}const h0=hh("__proto__,__v_isRef,__isVue"),tm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function f0(n){Yn(n)||(n=String(n));const t=te(this);return Qe(t,"has",n),t.hasOwnProperty(n)}class em{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw")return i===(r?s?S0:sm:s?rm:im).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Bt(t);if(!r){let l;if(o&&(l=c0[e]))return l;if(e==="hasOwnProperty")return f0}const a=Reflect.get(t,e,Pe(t)?t:i);if((Yn(e)?tm.has(e):h0(e))||(r||Qe(t,"get",e),s))return a;if(Pe(a)){const l=o&&wl(e)?a:a.value;return r&&ce(l)?$c(l):l}return ce(a)?r?$c(a):sa(a):a}}class nm extends em{constructor(t=!1){super(!1,t)}set(t,e,i,r){let s=t[e];const o=Bt(t)&&wl(e);if(!this._isShallow){const c=Yi(s);if(!In(i)&&!Yi(i)&&(s=te(s),i=te(i)),!o&&Pe(s)&&!Pe(i))return c||(s.value=i),!0}const a=o?Number(e)<t.length:se(t,e),l=Reflect.set(t,e,i,Pe(t)?t:r);return t===te(r)&&l&&(a?_i(i,s)&&zi(t,"set",e,i):zi(t,"add",e,i)),l}deleteProperty(t,e){const i=se(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&zi(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!Yn(e)||!tm.has(e))&&Qe(t,"has",e),i}ownKeys(t){return Qe(t,"iterate",Bt(t)?"length":Jr),Reflect.ownKeys(t)}}class d0 extends em{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const p0=new nm,m0=new d0,_0=new nm(!0);const Kc=n=>n,ga=n=>Reflect.getPrototypeOf(n);function g0(n,t,e){return function(...i){const r=this.__v_raw,s=te(r),o=zs(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=e?Kc:t?Ks:ri;return!t&&Qe(s,"iterate",l?jc:Jr),Ke(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function va(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function v0(n,t){const e={get(r){const s=this.__v_raw,o=te(s),a=te(r);n||(_i(r,a)&&Qe(o,"get",r),Qe(o,"get",a));const{has:l}=ga(o),c=t?Kc:n?Ks:ri;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Qe(te(r),"iterate",Jr),r.size},has(r){const s=this.__v_raw,o=te(s),a=te(r);return n||(_i(r,a)&&Qe(o,"has",r),Qe(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=te(a),c=t?Kc:n?Ks:ri;return!n&&Qe(l,"iterate",Jr),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return Ke(e,n?{add:va("add"),set:va("set"),delete:va("delete"),clear:va("clear")}:{add(r){const s=te(this),o=ga(s),a=te(r),l=!t&&!In(r)&&!Yi(r)?a:r;return o.has.call(s,l)||_i(r,l)&&o.has.call(s,r)||_i(a,l)&&o.has.call(s,a)||(s.add(l),zi(s,"add",l,l)),this},set(r,s){!t&&!In(s)&&!Yi(s)&&(s=te(s));const o=te(this),{has:a,get:l}=ga(o);let c=a.call(o,r);c||(r=te(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?_i(s,u)&&zi(o,"set",r,s):zi(o,"add",r,s),this},delete(r){const s=te(this),{has:o,get:a}=ga(s);let l=o.call(s,r);l||(r=te(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&zi(s,"delete",r,void 0),c},clear(){const r=te(this),s=r.size!==0,o=r.clear();return s&&zi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=g0(r,n,t)}),e}function vh(n,t){const e=v0(n,t);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(se(e,r)&&r in i?e:i,r,s)}const x0={get:vh(!1,!1)},y0={get:vh(!1,!0)},M0={get:vh(!0,!1)};const im=new WeakMap,rm=new WeakMap,sm=new WeakMap,S0=new WeakMap;function E0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sa(n){return Yi(n)?n:xh(n,!1,p0,x0,im)}function om(n){return xh(n,!1,_0,y0,rm)}function $c(n){return xh(n,!0,m0,M0,sm)}function xh(n,t,e,i,r){if(!ce(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const o=E0(jg(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return r.set(n,a),a}function Xi(n){return Yi(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Yi(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function Dl(n){return n?!!n.__v_raw:!1}function te(n){const t=n&&n.__v_raw;return t?te(t):n}function yh(n){return!se(n,"__v_skip")&&Object.isExtensible(n)&&kp(n,"__v_skip",!0),n}const ri=n=>ce(n)?sa(n):n,Ks=n=>ce(n)?$c(n):n;function Pe(n){return n?n.__v_isRef===!0:!1}function qe(n){return am(n,!1)}function b0(n){return am(n,!0)}function am(n,t){return Pe(n)?n:new T0(n,t)}class T0{constructor(t,e){this.dep=new gh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:te(t),this._value=e?t:ri(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||In(t)||Yi(t);t=i?t:te(t),_i(t,e)&&(this._rawValue=t,this._value=i?t:ri(t),this.dep.trigger())}}function Nt(n){return Pe(n)?n.value:n}const A0={get:(n,t,e)=>t==="__v_raw"?n:Nt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const r=n[t];return Pe(r)&&!Pe(e)?(r.value=e,!0):Reflect.set(n,t,e,i)}};function lm(n){return Xi(n)?n:new Proxy(n,A0)}function w0(n){const t=Bt(n)?new Array(n.length):{};for(const e in n)t[e]=C0(n,e);return t}class R0{constructor(t,e,i){this._object=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._key=Yn(e)?e:String(e),this._raw=te(t);let r=!0,s=t;if(!Bt(t)||Yn(this._key)||!wl(this._key))do r=!Dl(s)||In(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let t=this._object[this._key];return this._shallow&&(t=Nt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Pe(this._raw[this._key])){const e=this._object[this._key];if(Pe(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return l0(this._raw,this._key)}}function C0(n,t,e){return new R0(n,t,e)}class P0{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new gh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return jp(this,!0),!0}get value(){const t=this.dep.track();return Zp(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function D0(n,t,e=!1){let i,r;return Yt(n)?i=n:(i=n.get,r=n.set),new P0(i,r,e)}const xa={},ol=new WeakMap;let Hr;function I0(n,t=!1,e=Hr){if(e){let i=ol.get(e);i||ol.set(e,i=[]),i.push(n)}}function L0(n,t,e=_e){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=e,c=v=>r?v:In(v)||r===!1||r===0?fr(v,1):fr(v);let u,h,f,d,g=!1,_=!1;if(Pe(n)?(h=()=>n.value,g=In(n)):Xi(n)?(h=()=>c(n),g=!0):Bt(n)?(_=!0,g=n.some(v=>Xi(v)||In(v)),h=()=>n.map(v=>{if(Pe(v))return v.value;if(Xi(v))return c(v);if(Yt(v))return l?l(v,2):v()})):Yt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(f){Ei();try{f()}finally{bi()}}const v=Hr;Hr=u;try{return l?l(n,3,[d]):n(d)}finally{Hr=v}}:h=Mi,t&&r){const v=h,R=r===!0?1/0:r;h=()=>fr(v(),R)}const m=Xp(),p=()=>{u.stop(),m&&m.active&&fh(m.effects,u)};if(s&&t){const v=t;t=(...R)=>{const I=v(...R);return p(),I}}let S=_?new Array(n.length).fill(xa):xa;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const R=u.run();if(v||r||g||(_?R.some((I,w)=>_i(I,S[w])):_i(R,S))){f&&f();const I=Hr;Hr=u;try{const w=[R,S===xa?void 0:_&&S[0]===xa?[]:S,d];S=R,l?l(t,3,w):t(...w)}finally{Hr=I}}}else u.run()};return a&&a(E),u=new qp(h),u.scheduler=o?()=>o(E,!1):E,d=v=>I0(v,!1,u),f=u.onStop=()=>{const v=ol.get(u);if(v){if(l)l(v,4);else for(const R of v)R();ol.delete(u)}},t?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function fr(n,t=1/0,e){if(t<=0||!ce(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Pe(n))fr(n.value,t,e);else if(Bt(n))for(let i=0;i<n.length;i++)fr(n[i],t,e);else if(Up(n)||zs(n))n.forEach(i=>{fr(i,t,e)});else if(Fp(n)){for(const i in n)fr(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fr(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oa(n,t,e,i){try{return i?n(...i):n()}catch(r){Il(r,t,e)}}function si(n,t,e,i){if(Yt(n)){const r=oa(n,t,e,i);return r&&Np(r)&&r.catch(s=>{Il(s,t,e)}),r}if(Bt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(si(n[s],t,e,i));return r}}function Il(n,t,e,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){Ei(),oa(s,null,10,[n,l,c]),bi();return}}U0(n,e,r,i,o)}function U0(n,t,e,i=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let ui=-1;const Hs=[];let cr=null,Ds=0;const cm=Promise.resolve();let al=null;function Mh(n){const t=al||cm;return n?t.then(this?n.bind(this):n):t}function N0(n){let t=ui+1,e=cn.length;for(;t<e;){const i=t+e>>>1,r=cn[i],s=Wo(r);s<n||s===n&&r.flags&2?t=i+1:e=i}return t}function Sh(n){if(!(n.flags&1)){const t=Wo(n),e=cn[cn.length-1];!e||!(n.flags&2)&&t>=Wo(e)?cn.push(n):cn.splice(N0(t),0,n),n.flags|=1,um()}}function um(){al||(al=cm.then(fm))}function O0(n){Bt(n)?Hs.push(...n):cr&&n.id===-1?cr.splice(Ds+1,0,n):n.flags&1||(Hs.push(n),n.flags|=1),um()}function Ef(n,t,e=ui+1){for(;e<cn.length;e++){const i=cn[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hm(n){if(Hs.length){const t=[...new Set(Hs)].sort((e,i)=>Wo(e)-Wo(i));if(Hs.length=0,cr){cr.push(...t);return}for(cr=t,Ds=0;Ds<cr.length;Ds++){const e=cr[Ds];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}cr=null,Ds=0}}const Wo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function fm(n){try{for(ui=0;ui<cn.length;ui++){const t=cn[ui];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),oa(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ui<cn.length;ui++){const t=cn[ui];t&&(t.flags&=-2)}ui=-1,cn.length=0,hm(),al=null,(cn.length||Hs.length)&&fm()}}let vi=null,dm=null;function ll(n){const t=vi;return vi=n,dm=n&&n.type.__scopeId||null,t}function F0(n,t=vi,e){if(!t||n._n)return n;const i=(...r)=>{i._d&&hl(-1);const s=ll(t);let o;try{o=n(...r)}finally{ll(s),i._d&&hl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Dr(n,t,e,i){const r=n.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Ei(),si(l,e,8,[n.el,a,n,t]),bi())}}function Xa(n,t){if(un){let e=un.provides;const i=un.parent&&un.parent.provides;i===e&&(e=un.provides=Object.create(i)),e[n]=t}}function qn(n,t,e=!1){const i=zm();if(i||ts){let r=ts?ts._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return e&&Yt(t)?t.call(i&&i.proxy):t}}function B0(){return!!(zm()||ts)}const k0=Symbol.for("v-scx"),z0=()=>qn(k0);function Qr(n,t,e){return pm(n,t,e)}function pm(n,t,e=_e){const{immediate:i,deep:r,flush:s,once:o}=e,a=Ke({},e),l=t&&i||!t&&s!=="post";let c;if(qo){if(s==="sync"){const d=z0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Mi,d.resume=Mi,d.pause=Mi,d}}const u=un;a.call=(d,g,_)=>si(d,u,g,_);let h=!1;s==="post"?a.scheduler=d=>{mn(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Sh(d)}),a.augmentJob=d=>{t&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=L0(n,t,a);return qo&&(c?c.push(f):l&&f()),f}function H0(n,t,e){const i=this.proxy,r=Ce(n)?n.includes(".")?mm(i,n):()=>i[n]:n.bind(i,i);let s;Yt(t)?s=t:(s=t.handler,e=t);const o=aa(this),a=pm(r,s.bind(i),e);return o(),a}function mm(n,t){const e=t.split(".");return()=>{let i=n;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}const V0=Symbol("_vte"),G0=n=>n.__isTeleport,Jl=Symbol("_leaveCb");function Eh(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Eh(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function wr(n,t){return Yt(n)?Ke({name:n.name},t,{setup:n}):n}function _m(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function bf(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const cl=new WeakMap;function Lo(n,t,e,i,r=!1){if(Bt(n)){n.forEach((_,m)=>Lo(_,t&&(Bt(t)?t[m]:t),e,i,r));return}if(Uo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Lo(n,t,e,i.component.subTree);return}const s=i.shapeFlag&4?Ch(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=t&&t.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState,f=te(h),d=h===_e?Lp:_=>bf(u,_)?!1:se(f,_),g=(_,m)=>!(m&&bf(u,m));if(c!=null&&c!==l){if(Tf(t),Ce(c))u[c]=null,d(c)&&(h[c]=null);else if(Pe(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Yt(l)){Ei();try{oa(l,a,12,[o,u])}finally{bi()}}else{const _=Ce(l),m=Pe(l);if(_||m){const p=()=>{if(n.f){const S=_?d(l)?h[l]:u[l]:g()||!n.k?l.value:u[n.k];if(r)Bt(S)&&fh(S,s);else if(Bt(S))S.includes(s)||S.push(s);else if(_)u[l]=[s],d(l)&&(h[l]=u[l]);else{const E=[s];g(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else _?(u[l]=o,d(l)&&(h[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const S=()=>{p(),cl.delete(n)};S.id=-1,cl.set(n,S),mn(S,e)}else Tf(n),p()}}}function Tf(n){const t=cl.get(n);t&&(t.flags|=8,cl.delete(n))}Cl().requestIdleCallback;Cl().cancelIdleCallback;const Uo=n=>!!n.type.__asyncLoader,gm=n=>n.type.__isKeepAlive;function W0(n,t){vm(n,"a",t)}function X0(n,t){vm(n,"da",t)}function vm(n,t,e=un){const i=n.__wdc||(n.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ll(t,i,e),e){let r=e.parent;for(;r&&r.parent;)gm(r.parent.vnode)&&q0(i,t,e,r),r=r.parent}}function q0(n,t,e,i){const r=Ll(t,n,i,!0);ym(()=>{fh(i[t],r)},e)}function Ll(n,t,e=un,i=!1){if(e){const r=e[n]||(e[n]=[]),s=t.__weh||(t.__weh=(...o)=>{Ei();const a=aa(e),l=si(t,e,n,o);return a(),bi(),l});return i?r.unshift(s):r.push(s),s}}const Zi=n=>(t,e=un)=>{(!qo||n==="sp")&&Ll(n,(...i)=>t(...i),e)},Y0=Zi("bm"),bh=Zi("m"),j0=Zi("bu"),K0=Zi("u"),xm=Zi("bum"),ym=Zi("um"),$0=Zi("sp"),Z0=Zi("rtg"),J0=Zi("rtc");function Q0(n,t=un){Ll("ec",n,t)}const tv=Symbol.for("v-ndc");function hi(n,t,e,i){let r;const s=e,o=Bt(n);if(o||Ce(n)){const a=o&&Xi(n);let l=!1,c=!1;a&&(l=!In(n),c=Yi(n),n=Pl(n)),r=new Array(n.length);for(let u=0,h=n.length;u<h;u++)r[u]=t(l?c?Ks(ri(n[u])):ri(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=t(a+1,a,void 0,s)}else if(ce(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(n[u],u,l,s)}}else r=[];return r}const Zc=n=>n?Hm(n)?Ch(n):Zc(n.parent):null,No=Ke(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Zc(n.parent),$root:n=>Zc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sm(n),$forceUpdate:n=>n.f||(n.f=()=>{Sh(n.update)}),$nextTick:n=>n.n||(n.n=Mh.bind(n.proxy)),$watch:n=>H0.bind(n)}),Ql=(n,t)=>n!==_e&&!n.__isScriptSetup&&se(n,t),ev={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(Ql(i,t))return o[t]=1,i[t];if(r!==_e&&se(r,t))return o[t]=2,r[t];if(se(s,t))return o[t]=3,s[t];if(e!==_e&&se(e,t))return o[t]=4,e[t];Jc&&(o[t]=0)}}const c=No[t];let u,h;if(c)return t==="$attrs"&&Qe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==_e&&se(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,se(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:r,ctx:s}=n;return Ql(r,t)?(r[t]=e,!0):i!==_e&&se(i,t)?(i[t]=e,!0):se(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(s[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(e[a]||n!==_e&&a[0]!=="$"&&se(n,a)||Ql(t,a)||se(s,a)||se(i,a)||se(No,a)||se(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:se(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Af(n){return Bt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Jc=!0;function nv(n){const t=Sm(n),e=n.proxy,i=n.ctx;Jc=!1,t.beforeCreate&&wf(t.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:E,unmounted:v,render:R,renderTracked:I,renderTriggered:w,errorCaptured:P,serverPrefetch:x,expose:M,inheritAttrs:D,components:B,directives:N,filters:Y}=t;if(c&&iv(c,i,null),o)for(const V in o){const z=o[V];Yt(z)&&(i[V]=z.bind(e))}if(r){const V=r.call(e,e);ce(V)&&(n.data=sa(V))}if(Jc=!0,s)for(const V in s){const z=s[V],ft=Yt(z)?z.bind(e,e):Yt(z.get)?z.get.bind(e,e):Mi,_t=!Yt(z)&&Yt(z.set)?z.set.bind(e):Mi,yt=Ie({get:ft,set:_t});Object.defineProperty(i,V,{enumerable:!0,configurable:!0,get:()=>yt.value,set:wt=>yt.value=wt})}if(a)for(const V in a)Mm(a[V],i,e,V);if(l){const V=Yt(l)?l.call(e):l;Reflect.ownKeys(V).forEach(z=>{Xa(z,V[z])})}u&&wf(u,n,"c");function G(V,z){Bt(z)?z.forEach(ft=>V(ft.bind(e))):z&&V(z.bind(e))}if(G(Y0,h),G(bh,f),G(j0,d),G(K0,g),G(W0,_),G(X0,m),G(Q0,P),G(J0,I),G(Z0,w),G(xm,S),G(ym,v),G($0,x),Bt(M))if(M.length){const V=n.exposed||(n.exposed={});M.forEach(z=>{Object.defineProperty(V,z,{get:()=>e[z],set:ft=>e[z]=ft,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===Mi&&(n.render=R),D!=null&&(n.inheritAttrs=D),B&&(n.components=B),N&&(n.directives=N),x&&_m(n)}function iv(n,t,e=Mi){Bt(n)&&(n=Qc(n));for(const i in n){const r=n[i];let s;ce(r)?"default"in r?s=qn(r.from||i,r.default,!0):s=qn(r.from||i):s=qn(r),Pe(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function wf(n,t,e){si(Bt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Mm(n,t,e,i){let r=i.includes(".")?mm(e,i):()=>e[i];if(Ce(n)){const s=t[n];Yt(s)&&Qr(r,s)}else if(Yt(n))Qr(r,n.bind(e));else if(ce(n))if(Bt(n))n.forEach(s=>Mm(s,t,e,i));else{const s=Yt(n.handler)?n.handler.bind(e):t[n.handler];Yt(s)&&Qr(r,s,n)}}function Sm(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(c=>ul(l,c,o,!0)),ul(l,t,o)),ce(t)&&s.set(t,l),l}function ul(n,t,e,i=!1){const{mixins:r,extends:s}=t;s&&ul(n,s,e,!0),r&&r.forEach(o=>ul(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=rv[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const rv={data:Rf,props:Cf,emits:Cf,methods:bo,computed:bo,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:bo,directives:bo,watch:ov,provide:Rf,inject:sv};function Rf(n,t){return t?n?function(){return Ke(Yt(n)?n.call(this,this):n,Yt(t)?t.call(this,this):t)}:t:n}function sv(n,t){return bo(Qc(n),Qc(t))}function Qc(n){if(Bt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function sn(n,t){return n?[...new Set([].concat(n,t))]:t}function bo(n,t){return n?Ke(Object.create(null),n,t):t}function Cf(n,t){return n?Bt(n)&&Bt(t)?[...new Set([...n,...t])]:Ke(Object.create(null),Af(n),Af(t??{})):t}function ov(n,t){if(!n)return t;if(!t)return n;const e=Ke(Object.create(null),n);for(const i in t)e[i]=sn(n[i],t[i]);return e}function Em(){return{app:null,config:{isNativeTag:Lp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let av=0;function lv(n,t){return function(i,r=null){Yt(i)||(i=Ke({},i)),r!=null&&!ce(r)&&(r=null);const s=Em(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:av++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:zv,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&Yt(u.install)?(o.add(u),u.install(c,...h)):Yt(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||le(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ch(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(si(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=ts;ts=c;try{return u()}finally{ts=h}}};return c}}let ts=null;const cv=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ei(t)}Modifiers`]||n[`${ls(t)}Modifiers`];function uv(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||_e;let r=e;const s=t.startsWith("update:"),o=s&&cv(i,t.slice(7));o&&(o.trim&&(r=e.map(u=>Ce(u)?u.trim():u)),o.number&&(r=e.map(Zg)));let a,l=i[a=ql(t)]||i[a=ql(ei(t))];!l&&s&&(l=i[a=ql(ls(t))]),l&&si(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,si(c,n,6,r)}}const hv=new WeakMap;function bm(n,t,e=!1){const i=e?hv:t.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Yt(n)){const l=c=>{const u=bm(c,t,!0);u&&(a=!0,Ke(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(ce(n)&&i.set(n,null),null):(Bt(s)?s.forEach(l=>o[l]=null):Ke(o,s),ce(n)&&i.set(n,o),o)}function Ul(n,t){return!n||!Tl(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),se(n,t[0].toLowerCase()+t.slice(1))||se(n,ls(t))||se(n,t))}function Pf(n){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=ll(n);let p,S;try{if(e.shapeFlag&4){const v=r||i,R=v;p=pi(c.call(R,v,u,h,d,f,g)),S=a}else{const v=t;p=pi(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),S=t.props?a:fv(a)}}catch(v){Oo.length=0,Il(v,n,1),p=le(Mr)}let E=p;if(S&&_!==!1){const v=Object.keys(S),{shapeFlag:R}=E;v.length&&R&7&&(s&&v.some(Al)&&(S=dv(S,s)),E=$s(E,S,!1,!0))}return e.dirs&&(E=$s(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&Eh(E,e.transition),p=E,ll(m),p}const fv=n=>{let t;for(const e in n)(e==="class"||e==="style"||Tl(e))&&((t||(t={}))[e]=n[e]);return t},dv=(n,t)=>{const e={};for(const i in n)(!Al(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function pv(n,t,e){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Df(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(Tm(o,i,f)&&!Ul(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Df(i,o,c):!0:!!o;return!1}function Df(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Tm(t,n,s)&&!Ul(e,s))return!0}return!1}function Tm(n,t,e){const i=n[e],r=t[e];return e==="style"&&ce(i)&&ce(r)?!dh(i,r):i!==r}function mv({vnode:n,parent:t,suspense:e},i){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Am={},wm=()=>Object.create(Am),Rm=n=>Object.getPrototypeOf(n)===Am;function _v(n,t,e,i=!1){const r={},s=wm();n.propsDefaults=Object.create(null),Cm(n,t,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);e?n.props=i?r:om(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function gv(n,t,e,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=te(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ul(n.emitsOptions,f))continue;const d=t[f];if(l)if(se(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=ei(f);r[g]=tu(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Cm(n,t,r,s)&&(c=!0);let u;for(const h in a)(!t||!se(t,h)&&((u=ls(h))===h||!se(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(r[h]=tu(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!se(t,h))&&(delete s[h],c=!0)}c&&zi(n.attrs,"set","")}function Cm(n,t,e,i){const[r,s]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Po(l))continue;const c=t[l];let u;r&&se(r,u=ei(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ul(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=te(e),c=a||_e;for(let u=0;u<s.length;u++){const h=s[u];e[h]=tu(r,l,h,c[h],n,!se(c,h))}}return o}function tu(n,t,e,i,r,s){const o=n[e];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=r;if(e in c)i=c[e];else{const u=aa(r);i=c[e]=l.call(null,t),u()}}else i=l;r.ce&&r.ce._setProp(e,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ls(e))&&(i=!0))}return i}const vv=new WeakMap;function Pm(n,t,e=!1){const i=e?vv:t.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Yt(n)){const u=h=>{l=!0;const[f,d]=Pm(h,t,!0);Ke(o,f),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return ce(n)&&i.set(n,ks),ks;if(Bt(s))for(let u=0;u<s.length;u++){const h=ei(s[u]);If(h)&&(o[h]=_e)}else if(s)for(const u in s){const h=ei(u);if(If(h)){const f=s[u],d=o[h]=Bt(f)||Yt(f)?{type:f}:Ke({},f),g=d.type;let _=!1,m=!0;if(Bt(g))for(let p=0;p<g.length;++p){const S=g[p],E=Yt(S)&&S.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Yt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||se(d,"default"))&&a.push(h)}}const c=[o,a];return ce(n)&&i.set(n,c),c}function If(n){return n[0]!=="$"&&!Po(n)}const Th=n=>n==="_"||n==="_ctx"||n==="$stable",Ah=n=>Bt(n)?n.map(pi):[pi(n)],xv=(n,t,e)=>{if(t._n)return t;const i=F0((...r)=>Ah(t(...r)),e);return i._c=!1,i},Dm=(n,t,e)=>{const i=n._ctx;for(const r in n){if(Th(r))continue;const s=n[r];if(Yt(s))t[r]=xv(r,s,i);else if(s!=null){const o=Ah(s);t[r]=()=>o}}},Im=(n,t)=>{const e=Ah(t);n.slots.default=()=>e},Lm=(n,t,e)=>{for(const i in t)(e||!Th(i))&&(n[i]=t[i])},yv=(n,t,e)=>{const i=n.slots=wm();if(n.vnode.shapeFlag&32){const r=t._;r?(Lm(i,t,e),e&&kp(i,"_",r,!0)):Dm(t,i)}else t&&Im(n,t)},Mv=(n,t,e)=>{const{vnode:i,slots:r}=n;let s=!0,o=_e;if(i.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:Lm(r,t,e):(s=!t.$stable,Dm(t,r)),o=t}else t&&(Im(n,t),o={default:1});if(s)for(const a in r)!Th(a)&&o[a]==null&&delete r[a]},mn=Av;function Sv(n){return Ev(n)}function Ev(n,t){const e=Cl();e.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=Mi,insertStaticContent:g}=n,_=(C,L,b,nt=null,J=null,q=null,it=void 0,lt=null,tt=!!L.dynamicChildren)=>{if(C===L)return;C&&!mo(C,L)&&(nt=O(C),wt(C,J,q,!0),C=null),L.patchFlag===-2&&(tt=!1,L.dynamicChildren=null);const{type:T,ref:y,shapeFlag:U}=L;switch(T){case Nl:m(C,L,b,nt);break;case Mr:p(C,L,b,nt);break;case qa:C==null&&S(L,b,nt,it);break;case ze:B(C,L,b,nt,J,q,it,lt,tt);break;default:U&1?R(C,L,b,nt,J,q,it,lt,tt):U&6?N(C,L,b,nt,J,q,it,lt,tt):(U&64||U&128)&&T.process(C,L,b,nt,J,q,it,lt,tt,dt)}y!=null&&J?Lo(y,C&&C.ref,q,L||C,!L):y==null&&C&&C.ref!=null&&Lo(C.ref,null,q,C,!0)},m=(C,L,b,nt)=>{if(C==null)i(L.el=a(L.children),b,nt);else{const J=L.el=C.el;L.children!==C.children&&c(J,L.children)}},p=(C,L,b,nt)=>{C==null?i(L.el=l(L.children||""),b,nt):L.el=C.el},S=(C,L,b,nt)=>{[C.el,C.anchor]=g(C.children,L,b,nt,C.el,C.anchor)},E=({el:C,anchor:L},b,nt)=>{let J;for(;C&&C!==L;)J=f(C),i(C,b,nt),C=J;i(L,b,nt)},v=({el:C,anchor:L})=>{let b;for(;C&&C!==L;)b=f(C),r(C),C=b;r(L)},R=(C,L,b,nt,J,q,it,lt,tt)=>{if(L.type==="svg"?it="svg":L.type==="math"&&(it="mathml"),C==null)I(L,b,nt,J,q,it,lt,tt);else{const T=C.el&&C.el._isVueCE?C.el:null;try{T&&T._beginPatch(),x(C,L,J,q,it,lt,tt)}finally{T&&T._endPatch()}}},I=(C,L,b,nt,J,q,it,lt)=>{let tt,T;const{props:y,shapeFlag:U,transition:W,dirs:K}=C;if(tt=C.el=o(C.type,q,y&&y.is,y),U&8?u(tt,C.children):U&16&&P(C.children,tt,null,nt,J,tc(C,q),it,lt),K&&Dr(C,null,nt,"created"),w(tt,C,C.scopeId,it,nt),y){for(const gt in y)gt!=="value"&&!Po(gt)&&s(tt,gt,null,y[gt],q,nt);"value"in y&&s(tt,"value",null,y.value,q),(T=y.onVnodeBeforeMount)&&li(T,nt,C)}K&&Dr(C,null,nt,"beforeMount");const j=bv(J,W);j&&W.beforeEnter(tt),i(tt,L,b),((T=y&&y.onVnodeMounted)||j||K)&&mn(()=>{try{T&&li(T,nt,C),j&&W.enter(tt),K&&Dr(C,null,nt,"mounted")}finally{}},J)},w=(C,L,b,nt,J)=>{if(b&&d(C,b),nt)for(let q=0;q<nt.length;q++)d(C,nt[q]);if(J){let q=J.subTree;if(L===q||Fm(q.type)&&(q.ssContent===L||q.ssFallback===L)){const it=J.vnode;w(C,it,it.scopeId,it.slotScopeIds,J.parent)}}},P=(C,L,b,nt,J,q,it,lt,tt=0)=>{for(let T=tt;T<C.length;T++){const y=C[T]=lt?Bi(C[T]):pi(C[T]);_(null,y,L,b,nt,J,q,it,lt)}},x=(C,L,b,nt,J,q,it)=>{const lt=L.el=C.el;let{patchFlag:tt,dynamicChildren:T,dirs:y}=L;tt|=C.patchFlag&16;const U=C.props||_e,W=L.props||_e;let K;if(b&&Ir(b,!1),(K=W.onVnodeBeforeUpdate)&&li(K,b,L,C),y&&Dr(L,C,b,"beforeUpdate"),b&&Ir(b,!0),T&&(!C.dynamicChildren||C.dynamicChildren.length!==T.length)&&(tt=0,it=!1,T=null),(U.innerHTML&&W.innerHTML==null||U.textContent&&W.textContent==null)&&u(lt,""),T?M(C.dynamicChildren,T,lt,b,nt,tc(L,J),q):it||z(C,L,lt,null,b,nt,tc(L,J),q,!1),tt>0){if(tt&16)D(lt,U,W,b,J);else if(tt&2&&U.class!==W.class&&s(lt,"class",null,W.class,J),tt&4&&s(lt,"style",U.style,W.style,J),tt&8){const j=L.dynamicProps;for(let gt=0;gt<j.length;gt++){const ct=j[gt],mt=U[ct],Lt=W[ct];(Lt!==mt||ct==="value")&&s(lt,ct,mt,Lt,J,b)}}tt&1&&C.children!==L.children&&u(lt,L.children)}else!it&&T==null&&D(lt,U,W,b,J);((K=W.onVnodeUpdated)||y)&&mn(()=>{K&&li(K,b,L,C),y&&Dr(L,C,b,"updated")},nt)},M=(C,L,b,nt,J,q,it)=>{for(let lt=0;lt<L.length;lt++){const tt=C[lt],T=L[lt],y=tt.el&&(tt.type===ze||!mo(tt,T)||tt.shapeFlag&198)?h(tt.el):b;_(tt,T,y,null,nt,J,q,it,!0)}},D=(C,L,b,nt,J)=>{if(L!==b){if(L!==_e)for(const q in L)!Po(q)&&!(q in b)&&s(C,q,L[q],null,J,nt);for(const q in b){if(Po(q))continue;const it=b[q],lt=L[q];it!==lt&&q!=="value"&&s(C,q,lt,it,J,nt)}"value"in b&&s(C,"value",L.value,b.value,J)}},B=(C,L,b,nt,J,q,it,lt,tt)=>{const T=L.el=C?C.el:a(""),y=L.anchor=C?C.anchor:a("");let{patchFlag:U,dynamicChildren:W,slotScopeIds:K}=L;K&&(lt=lt?lt.concat(K):K),C==null?(i(T,b,nt),i(y,b,nt),P(L.children||[],b,y,J,q,it,lt,tt)):U>0&&U&64&&W&&C.dynamicChildren&&C.dynamicChildren.length===W.length?(M(C.dynamicChildren,W,b,J,q,it,lt),(L.key!=null||J&&L===J.subTree)&&Um(C,L,!0)):z(C,L,b,y,J,q,it,lt,tt)},N=(C,L,b,nt,J,q,it,lt,tt)=>{L.slotScopeIds=lt,C==null?L.shapeFlag&512?J.ctx.activate(L,b,nt,it,tt):Y(L,b,nt,J,q,it,tt):Z(C,L,tt)},Y=(C,L,b,nt,J,q,it)=>{const lt=C.component=Uv(C,nt,J);if(gm(C)&&(lt.ctx.renderer=dt),Nv(lt,!1,it),lt.asyncDep){if(J&&J.registerDep(lt,G,it),!C.el){const tt=lt.subTree=le(Mr);p(null,tt,L,b),C.placeholder=tt.el}}else G(lt,C,L,b,J,q,it)},Z=(C,L,b)=>{const nt=L.component=C.component;if(pv(C,L,b))if(nt.asyncDep&&!nt.asyncResolved){V(nt,L,b);return}else nt.next=L,nt.update();else L.el=C.el,nt.vnode=L},G=(C,L,b,nt,J,q,it)=>{const lt=()=>{if(C.isMounted){let{next:U,bu:W,u:K,parent:j,vnode:gt}=C;{const Mt=Nm(C);if(Mt){U&&(U.el=gt.el,V(C,U,it)),Mt.asyncDep.then(()=>{mn(()=>{C.isUnmounted||T()},J)});return}}let ct=U,mt;Ir(C,!1),U?(U.el=gt.el,V(C,U,it)):U=gt,W&&Yl(W),(mt=U.props&&U.props.onVnodeBeforeUpdate)&&li(mt,j,U,gt),Ir(C,!0);const Lt=Pf(C),ht=C.subTree;C.subTree=Lt,_(ht,Lt,h(ht.el),O(ht),C,J,q),U.el=Lt.el,ct===null&&mv(C,Lt.el),K&&mn(K,J),(mt=U.props&&U.props.onVnodeUpdated)&&mn(()=>li(mt,j,U,gt),J)}else{let U;const{el:W,props:K}=L,{bm:j,m:gt,parent:ct,root:mt,type:Lt}=C,ht=Uo(L);Ir(C,!1),j&&Yl(j),!ht&&(U=K&&K.onVnodeBeforeMount)&&li(U,ct,L),Ir(C,!0);{mt.ce&&mt.ce._hasShadowRoot()&&mt.ce._injectChildStyle(Lt,C.parent?C.parent.type:void 0);const Mt=C.subTree=Pf(C);_(null,Mt,b,nt,C,J,q),L.el=Mt.el}if(gt&&mn(gt,J),!ht&&(U=K&&K.onVnodeMounted)){const Mt=L;mn(()=>li(U,ct,Mt),J)}(L.shapeFlag&256||ct&&Uo(ct.vnode)&&ct.vnode.shapeFlag&256)&&C.a&&mn(C.a,J),C.isMounted=!0,L=b=nt=null}};C.scope.on();const tt=C.effect=new qp(lt);C.scope.off();const T=C.update=tt.run.bind(tt),y=C.job=tt.runIfDirty.bind(tt);y.i=C,y.id=C.uid,tt.scheduler=()=>Sh(y),Ir(C,!0),T()},V=(C,L,b)=>{L.component=C;const nt=C.vnode.props;C.vnode=L,C.next=null,gv(C,L.props,nt,b),Mv(C,L.children,b),Ei(),Ef(C),bi()},z=(C,L,b,nt,J,q,it,lt,tt=!1)=>{const T=C&&C.children,y=C?C.shapeFlag:0,U=L.children,{patchFlag:W,shapeFlag:K}=L;if(W>0){if(W&128){_t(T,U,b,nt,J,q,it,lt,tt);return}else if(W&256){ft(T,U,b,nt,J,q,it,lt,tt);return}}K&8?(y&16&&bt(T,J,q),U!==T&&u(b,U)):y&16?K&16?_t(T,U,b,nt,J,q,it,lt,tt):bt(T,J,q,!0):(y&8&&u(b,""),K&16&&P(U,b,nt,J,q,it,lt,tt))},ft=(C,L,b,nt,J,q,it,lt,tt)=>{C=C||ks,L=L||ks;const T=C.length,y=L.length,U=Math.min(T,y);let W;for(W=0;W<U;W++){const K=L[W]=tt?Bi(L[W]):pi(L[W]);_(C[W],K,b,null,J,q,it,lt,tt)}T>y?bt(C,J,q,!0,!1,U):P(L,b,nt,J,q,it,lt,tt,U)},_t=(C,L,b,nt,J,q,it,lt,tt)=>{let T=0;const y=L.length;let U=C.length-1,W=y-1;for(;T<=U&&T<=W;){const K=C[T],j=L[T]=tt?Bi(L[T]):pi(L[T]);if(mo(K,j))_(K,j,b,null,J,q,it,lt,tt);else break;T++}for(;T<=U&&T<=W;){const K=C[U],j=L[W]=tt?Bi(L[W]):pi(L[W]);if(mo(K,j))_(K,j,b,null,J,q,it,lt,tt);else break;U--,W--}if(T>U){if(T<=W){const K=W+1,j=K<y?L[K].el:nt;for(;T<=W;)_(null,L[T]=tt?Bi(L[T]):pi(L[T]),b,j,J,q,it,lt,tt),T++}}else if(T>W)for(;T<=U;)wt(C[T],J,q,!0),T++;else{const K=T,j=T,gt=new Map;for(T=j;T<=W;T++){const vt=L[T]=tt?Bi(L[T]):pi(L[T]);vt.key!=null&&gt.set(vt.key,T)}let ct,mt=0;const Lt=W-j+1;let ht=!1,Mt=0;const Dt=new Array(Lt);for(T=0;T<Lt;T++)Dt[T]=0;for(T=K;T<=U;T++){const vt=C[T];if(mt>=Lt){wt(vt,J,q,!0);continue}let kt;if(vt.key!=null)kt=gt.get(vt.key);else for(ct=j;ct<=W;ct++)if(Dt[ct-j]===0&&mo(vt,L[ct])){kt=ct;break}kt===void 0?wt(vt,J,q,!0):(Dt[kt-j]=T+1,kt>=Mt?Mt=kt:ht=!0,_(vt,L[kt],b,null,J,q,it,lt,tt),mt++)}const Ft=ht?Tv(Dt):ks;for(ct=Ft.length-1,T=Lt-1;T>=0;T--){const vt=j+T,kt=L[vt],Wt=L[vt+1],oe=vt+1<y?Wt.el||Om(Wt):nt;Dt[T]===0?_(null,kt,b,oe,J,q,it,lt,tt):ht&&(ct<0||T!==Ft[ct]?yt(kt,b,oe,2):ct--)}}},yt=(C,L,b,nt,J=null)=>{const{el:q,type:it,transition:lt,children:tt,shapeFlag:T}=C;if(T&6){yt(C.component.subTree,L,b,nt);return}if(T&128){C.suspense.move(L,b,nt);return}if(T&64){it.move(C,L,b,dt);return}if(it===ze){i(q,L,b);for(let U=0;U<tt.length;U++)yt(tt[U],L,b,nt);i(C.anchor,L,b);return}if(it===qa){E(C,L,b);return}if(nt!==2&&T&1&&lt)if(nt===0)lt.persisted&&!q[Jl]?i(q,L,b):(lt.beforeEnter(q),i(q,L,b),mn(()=>lt.enter(q),J));else{const{leave:U,delayLeave:W,afterLeave:K}=lt,j=()=>{C.ctx.isUnmounted?r(q):i(q,L,b)},gt=()=>{const ct=q._isLeaving||!!q[Jl];q._isLeaving&&q[Jl](!0),lt.persisted&&!ct?j():U(q,()=>{j(),K&&K()})};W?W(q,j,gt):gt()}else i(q,L,b)},wt=(C,L,b,nt=!1,J=!1)=>{const{type:q,props:it,ref:lt,children:tt,dynamicChildren:T,shapeFlag:y,patchFlag:U,dirs:W,cacheIndex:K,memo:j}=C;if(U===-2&&(J=!1),lt!=null&&(Ei(),Lo(lt,null,b,C,!0),bi()),K!=null&&(L.renderCache[K]=void 0),y&256){L.ctx.deactivate(C);return}const gt=y&1&&W,ct=!Uo(C);let mt;if(ct&&(mt=it&&it.onVnodeBeforeUnmount)&&li(mt,L,C),y&6)ut(C.component,b,nt);else{if(y&128){C.suspense.unmount(b,nt);return}gt&&Dr(C,null,L,"beforeUnmount"),y&64?C.type.remove(C,L,b,dt,nt):T&&!T.hasOnce&&(q!==ze||U>0&&U&64)?bt(T,L,b,!1,!0):(q===ze&&U&384||!J&&y&16)&&bt(tt,L,b),nt&&Gt(C)}const Lt=j!=null&&K==null;(ct&&(mt=it&&it.onVnodeUnmounted)||gt||Lt)&&mn(()=>{mt&&li(mt,L,C),gt&&Dr(C,null,L,"unmounted"),Lt&&(C.el=null)},b)},Gt=C=>{const{type:L,el:b,anchor:nt,transition:J}=C;if(L===ze){et(b,nt);return}if(L===qa){v(C);return}const q=()=>{r(b),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:it,delayLeave:lt}=J,tt=()=>it(b,q);lt?lt(C.el,q,tt):tt()}else q()},et=(C,L)=>{let b;for(;C!==L;)b=f(C),r(C),C=b;r(L)},ut=(C,L,b)=>{const{bum:nt,scope:J,job:q,subTree:it,um:lt,m:tt,a:T}=C;Lf(tt),Lf(T),nt&&Yl(nt),J.stop(),q&&(q.flags|=8,wt(it,C,L,b)),lt&&mn(lt,L),mn(()=>{C.isUnmounted=!0},L)},bt=(C,L,b,nt=!1,J=!1,q=0)=>{for(let it=q;it<C.length;it++)wt(C[it],L,b,nt,J)},O=C=>{if(C.shapeFlag&6)return O(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const L=f(C.anchor||C.el),b=L&&L[V0];return b?f(b):L};let ot=!1;const st=(C,L,b)=>{let nt;C==null?L._vnode&&(wt(L._vnode,null,null,!0),nt=L._vnode.component):_(L._vnode||null,C,L,null,null,null,b),L._vnode=C,ot||(ot=!0,Ef(nt),hm(),ot=!1)},dt={p:_,um:wt,m:yt,r:Gt,mt:Y,mc:P,pc:z,pbc:M,n:O,o:n};return{render:st,hydrate:void 0,createApp:lv(st)}}function tc({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ir({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function bv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Um(n,t,e=!1){const i=n.children,r=t.children;if(Bt(i)&&Bt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Bi(r[s]),a.el=o.el),!e&&a.patchFlag!==-2&&Um(o,a)),a.type===Nl&&(a.patchFlag===-1&&(a=r[s]=Bi(a)),a.el=o.el),a.type===Mr&&!a.el&&(a.el=o.el)}}function Tv(n){const t=n.slice(),e=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=e[e.length-1],n[r]<c){t[i]=r,e.push(i);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,n[e[a]]<c?s=a+1:o=a;c<n[e[s]]&&(s>0&&(t[i]=e[s-1]),e[s]=i)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}function Nm(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nm(t)}function Lf(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Om(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Om(t.subTree):null}const Fm=n=>n.__isSuspense;function Av(n,t){t&&t.pendingBranch?Bt(n)?t.effects.push(...n):t.effects.push(n):O0(n)}const ze=Symbol.for("v-fgt"),Nl=Symbol.for("v-txt"),Mr=Symbol.for("v-cmt"),qa=Symbol.for("v-stc"),Oo=[];let Cn=null;function de(n=!1){Oo.push(Cn=n?null:[])}function wv(){Oo.pop(),Cn=Oo[Oo.length-1]||null}let Xo=1;function hl(n,t=!1){Xo+=n,n<0&&Cn&&t&&(Cn.hasOnce=!0)}function Bm(n){return n.dynamicChildren=Xo>0?Cn||ks:null,wv(),Xo>0&&Cn&&Cn.push(n),n}function ve(n,t,e,i,r,s){return Bm(Ot(n,t,e,i,r,s,!0))}function wh(n,t,e,i,r){return Bm(le(n,t,e,i,r,!0))}function fl(n){return n?n.__v_isVNode===!0:!1}function mo(n,t){return n.type===t.type&&n.key===t.key}const km=({key:n})=>n??null,Ya=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ce(n)||Pe(n)||Yt(n)?{i:vi,r:n,k:t,f:!!e}:n:null);function Ot(n,t=null,e=null,i=0,r=null,s=n===ze?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&km(t),ref:t&&Ya(t),scopeId:dm,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vi};return a?(dl(l,e),s&128&&n.normalize(l)):e&&(l.shapeFlag|=Ce(e)?8:16),Xo>0&&!o&&Cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Cn.push(l),l}const le=Rv;function Rv(n,t=null,e=null,i=0,r=null,s=!1){if((!n||n===tv)&&(n=Mr),fl(n)){const a=$s(n,t,!0);return e&&dl(a,e),Xo>0&&!s&&Cn&&(a.shapeFlag&6?Cn[Cn.indexOf(n)]=a:Cn.push(a)),a.patchFlag=-2,a}if(kv(n)&&(n=n.__vccOpts),t){t=Cv(t);let{class:a,style:l}=t;a&&!Ce(a)&&(t.class=Vn(a)),ce(l)&&(Dl(l)&&!Bt(l)&&(l=Ke({},l)),t.style=Zr(l))}const o=Ce(n)?1:Fm(n)?128:G0(n)?64:ce(n)?4:Yt(n)?2:0;return Ot(n,t,e,i,r,o,s,!0)}function Cv(n){return n?Dl(n)||Rm(n)?Ke({},n):n:null}function $s(n,t,e=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=t?Dv(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&km(c),ref:t&&t.ref?e&&s?Bt(s)?s.concat(Ya(t)):[s,Ya(t)]:Ya(t):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==ze?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&$s(n.ssContent),ssFallback:n.ssFallback&&$s(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Eh(u,l.clone(u)),u}function ar(n=" ",t=0){return le(Nl,null,n,t)}function Pv(n,t){const e=le(qa,null,n);return e.staticCount=t,e}function Rh(n="",t=!1){return t?(de(),wh(Mr,null,n)):le(Mr,null,n)}function pi(n){return n==null||typeof n=="boolean"?le(Mr):Bt(n)?le(ze,null,n.slice()):fl(n)?Bi(n):le(Nl,null,String(n))}function Bi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:$s(n)}function dl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Bt(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),dl(n,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!Rm(t)?t._ctx=vi:r===3&&vi&&(vi.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Yt(t)){if(i&65){dl(n,{default:t});return}t={default:t,_ctx:vi},e=32}else t=String(t),i&64?(e=16,t=[ar(t)]):e=8;n.children=t,n.shapeFlag|=e}function Dv(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Vn([t.class,i.class]));else if(r==="style")t.style=Zr([t.style,i.style]);else if(Tl(r)){const s=t[r],o=i[r];o&&s!==o&&!(Bt(s)&&s.includes(o))?t[r]=s?[].concat(s,o):o:o==null&&s==null&&!Al(r)&&(t[r]=o)}else r!==""&&(t[r]=i[r])}return t}function li(n,t,e,i=null){si(n,t,7,[e,i])}const Iv=Em();let Lv=0;function Uv(n,t,e){const i=n.type,r=(t?t.appContext:n.appContext)||Iv,s={uid:Lv++,vnode:n,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pm(i,r),emitsOptions:bm(i,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:i.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=uv.bind(null,s),n.ce&&n.ce(s),s}let un=null;const zm=()=>un||vi;let pl,eu;{const n=Cl(),t=(e,i)=>{let r;return(r=n[e])||(r=n[e]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};pl=t("__VUE_INSTANCE_SETTERS__",e=>un=e),eu=t("__VUE_SSR_SETTERS__",e=>qo=e)}const aa=n=>{const t=un;return pl(n),n.scope.on(),()=>{n.scope.off(),pl(t)}},Uf=()=>{un&&un.scope.off(),pl(null)};function Hm(n){return n.vnode.shapeFlag&4}let qo=!1;function Nv(n,t=!1,e=!1){t&&eu(t);const{props:i,children:r}=n.vnode,s=Hm(n);_v(n,i,s,t),yv(n,r,e||t);const o=s?Ov(n,t):void 0;return t&&eu(!1),o}function Ov(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ev);const{setup:i}=e;if(i){Ei();const r=n.setupContext=i.length>1?Bv(n):null,s=aa(n),o=oa(i,n,0,[n.props,r]),a=Np(o);if(bi(),s(),(a||n.sp)&&!Uo(n)&&_m(n),a){if(o.then(Uf,Uf),t)return o.then(l=>{Nf(n,l)}).catch(l=>{Il(l,n,0)});n.asyncDep=o}else Nf(n,o)}else Vm(n)}function Nf(n,t,e){Yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ce(t)&&(n.setupState=lm(t)),Vm(n)}function Vm(n,t,e){const i=n.type;n.render||(n.render=i.render||Mi);{const r=aa(n);Ei();try{nv(n)}finally{bi(),r()}}}const Fv={get(n,t){return Qe(n,"get",""),n[t]}};function Bv(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Fv),slots:n.slots,emit:n.emit,expose:t}}function Ch(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(lm(yh(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in No)return No[e](n)},has(t,e){return e in t||e in No}})):n.proxy}function kv(n){return Yt(n)&&"__vccOpts"in n}const Ie=(n,t)=>D0(n,t,qo);function Yo(n,t,e){try{hl(-1);const i=arguments.length;return i===2?ce(t)&&!Bt(t)?fl(t)?le(n,null,[t]):le(n,t):le(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&fl(e)&&(e=[e]),le(n,t,e))}finally{hl(1)}}const zv="3.5.39";/**
* @vue/runtime-dom v3.5.39
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nu;const Of=typeof window<"u"&&window.trustedTypes;if(Of)try{nu=Of.createPolicy("vue",{createHTML:n=>n})}catch{}const Gm=nu?n=>nu.createHTML(n):n=>n,Hv="http://www.w3.org/2000/svg",Vv="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Ff=Oi&&Oi.createElement("template"),Gv={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const r=t==="svg"?Oi.createElementNS(Hv,n):t==="mathml"?Oi.createElementNS(Vv,n):e?Oi.createElement(n,{is:e}):Oi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{Ff.innerHTML=Gm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ff.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Wv=Symbol("_vtc");function Xv(n,t,e){const i=n[Wv];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Bf=Symbol("_vod"),qv=Symbol("_vsh"),Yv=Symbol(""),jv=/(?:^|;)\s*display\s*:/;function Kv(n,t,e){const i=n.style,r=Ce(e);let s=!1;if(e&&!r){if(t)if(Ce(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&To(i,a,"")}else for(const o in t)e[o]==null&&To(i,o,"");for(const o in e){o==="display"&&(s=!0);const a=e[o];a!=null?Zv(n,o,!Ce(t)&&t?t[o]:void 0,a)||To(i,o,a):To(i,o,"")}}else if(r){if(t!==e){const o=i[Yv];o&&(e+=";"+o),i.cssText=e,s=jv.test(e)}}else t&&n.removeAttribute("style");Bf in n&&(n[Bf]=s?i.display:"",n[qv]&&(i.display="none"))}const kf=/\s*!important$/;function To(n,t,e){if(Bt(e))e.forEach(i=>To(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=$v(n,t);kf.test(e)?n.setProperty(ls(i),e.replace(kf,""),"important"):n[i]=e}}const zf=["Webkit","Moz","ms"],ec={};function $v(n,t){const e=ec[t];if(e)return e;let i=ei(t);if(i!=="filter"&&i in n)return ec[t]=i;i=Bp(i);for(let r=0;r<zf.length;r++){const s=zf[r]+i;if(s in n)return ec[t]=s}return t}function Zv(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ce(i)&&e===i}const Hf="http://www.w3.org/1999/xlink";function Vf(n,t,e,i,r,s=i0(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Hf,t.slice(6,t.length)):n.setAttributeNS(Hf,t,e):e==null||s&&!zp(e)?n.removeAttribute(t):n.setAttribute(t,s?"":Yn(e)?String(e):e)}function Gf(n,t,e,i,r){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Gm(e):e);return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=zp(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(r||t)}function Jv(n,t,e,i){n.addEventListener(t,e,i)}function Qv(n,t,e,i){n.removeEventListener(t,e,i)}const Wf=Symbol("_vei");function tx(n,t,e,i,r=null){const s=n[Wf]||(n[Wf]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=ix(t);if(i){const c=s[t]=ox(i,r);Jv(n,a,c,l)}else o&&(Qv(n,a,o,l),s[t]=void 0)}}const ex=/(Once|Passive|Capture)$/,nx=/^on:?(?:Once|Passive|Capture)$/;function ix(n){let t,e;for(;(e=n.match(ex))&&!nx.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):ls(n.slice(2)),t]}let nc=0;const rx=Promise.resolve(),sx=()=>nc||(rx.then(()=>nc=0),nc=Date.now());function ox(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const r=e.value;if(Bt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const o=r.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&si(c,t,5,a)}}else si(r,t,5,[i])};return e.value=n,e.attached=sx(),e}const Xf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ax=(n,t,e,i,r,s)=>{const o=r==="svg";t==="class"?Xv(n,i,o):t==="style"?Kv(n,e,i):Tl(t)?Al(t)||tx(n,t,e,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lx(n,t,i,o))?(Gf(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Vf(n,t,i,o,s,t!=="value")):n._isVueCE&&(cx(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ce(i)))?Gf(n,ei(t),i,s,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Vf(n,t,i,o))};function lx(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Xf(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xf(t)&&Ce(e)?!1:t in n}function cx(n,t){const e=n._def.props;if(!e)return!1;const i=ei(t);return Array.isArray(e)?e.some(r=>ei(r)===i):Object.keys(e).some(r=>ei(r)===i)}const ux=Ke({patchProp:ax},Gv);let qf;function hx(){return qf||(qf=Sv(ux))}const fx=((...n)=>{const t=hx().createApp(...n),{mount:e}=t;return t.mount=i=>{const r=px(i);if(!r)return;const s=t._component;!Yt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=e(r,!1,dx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function dx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function px(n){return Ce(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Wm;const Ol=n=>Wm=n,Xm=Symbol();function iu(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Fo;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Fo||(Fo={}));function mx(){const n=Wp(!0),t=n.run(()=>qe({}));let e=[],i=[];const r=yh({install(s){Ol(r),r._a=s,s.provide(Xm,r),s.config.globalProperties.$pinia=r,i.forEach(o=>e.push(o)),i=[]},use(s){return this._a?e.push(s):i.push(s),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return r}const qm=()=>{};function Yf(n,t,e,i=qm){n.push(t);const r=()=>{const s=n.indexOf(t);s>-1&&(n.splice(s,1),i())};return!e&&Xp()&&s0(r),r}function ds(n,...t){n.slice().forEach(e=>{e(...t)})}const _x=n=>n(),jf=Symbol(),ic=Symbol();function ru(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],r=n[e];iu(r)&&iu(i)&&n.hasOwnProperty(e)&&!Pe(i)&&!Xi(i)?n[e]=ru(r,i):n[e]=i}return n}const gx=Symbol();function vx(n){return!iu(n)||!n.hasOwnProperty(gx)}const{assign:lr}=Object;function xx(n){return!!(Pe(n)&&n.effect)}function yx(n,t,e,i){const{state:r,actions:s,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=r?r():{});const u=w0(e.state.value[n]);return lr(u,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=yh(Ie(()=>{Ol(e);const d=e._s.get(n);return o[f].call(d,d)})),h),{}))}return l=Ym(n,c,t,e,i,!0),l}function Ym(n,t,e={},i,r,s){let o;const a=lr({actions:{}},e),l={deep:!0};let c,u,h=[],f=[],d;const g=i.state.value[n];!s&&!g&&(i.state.value[n]={});let _;function m(P){let x;c=u=!1,typeof P=="function"?(P(i.state.value[n]),x={type:Fo.patchFunction,storeId:n,events:d}):(ru(i.state.value[n],P),x={type:Fo.patchObject,payload:P,storeId:n,events:d});const M=_=Symbol();Mh().then(()=>{_===M&&(c=!0)}),u=!0,ds(h,x,i.state.value[n])}const p=s?function(){const{state:x}=e,M=x?x():{};this.$patch(D=>{lr(D,M)})}:qm;function S(){o.stop(),h=[],f=[],i._s.delete(n)}const E=(P,x="")=>{if(jf in P)return P[ic]=x,P;const M=function(){Ol(i);const D=Array.from(arguments),B=[],N=[];function Y(V){B.push(V)}function Z(V){N.push(V)}ds(f,{args:D,name:M[ic],store:R,after:Y,onError:Z});let G;try{G=P.apply(this&&this.$id===n?this:R,D)}catch(V){throw ds(N,V),V}return G instanceof Promise?G.then(V=>(ds(B,V),V)).catch(V=>(ds(N,V),Promise.reject(V))):(ds(B,G),G)};return M[jf]=!0,M[ic]=x,M},v={_p:i,$id:n,$onAction:Yf.bind(null,f),$patch:m,$reset:p,$subscribe(P,x={}){const M=Yf(h,P,x.detached,()=>D()),D=o.run(()=>Qr(()=>i.state.value[n],B=>{(x.flush==="sync"?u:c)&&P({storeId:n,type:Fo.direct,events:d},B)},lr({},l,x)));return M},$dispose:S},R=sa(v);i._s.set(n,R);const w=(i._a&&i._a.runWithContext||_x)(()=>i._e.run(()=>(o=Wp()).run(()=>t({action:E}))));for(const P in w){const x=w[P];if(Pe(x)&&!xx(x)||Xi(x))s||(g&&vx(x)&&(Pe(x)?x.value=g[P]:ru(x,g[P])),i.state.value[n][P]=x);else if(typeof x=="function"){const M=E(x,P);w[P]=M,a.actions[P]=x}}return lr(R,w),lr(te(R),w),Object.defineProperty(R,"$state",{get:()=>i.state.value[n],set:P=>{m(x=>{lr(x,P)})}}),i._p.forEach(P=>{lr(R,o.run(()=>P({store:R,app:i._a,pinia:i,options:a})))}),g&&s&&e.hydrate&&e.hydrate(R.$state,g),c=!0,u=!0,R}/*! #__NO_SIDE_EFFECTS__ */function Mx(n,t,e){let i,r;const s=typeof t=="function";i=n,r=s?e:t;function o(a,l){const c=B0();return a=a||(c?qn(Xm,null):null),a&&Ol(a),a=Wm,a._s.has(i)||(s?Ym(i,t,r,a):yx(i,r,a)),a._s.get(i)}return o.$id=i,o}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Is=typeof document<"u";function jm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Sx(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&jm(n.default)}const re=Object.assign;function rc(n,t){const e={};for(const i in t){const r=t[i];e[i]=oi(r)?r.map(n):n(r)}return e}const Bo=()=>{},oi=Array.isArray;function Kf(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Km=/#/g,Ex=/&/g,bx=/\//g,Tx=/=/g,Ax=/\?/g,$m=/\+/g,wx=/%5B/g,Rx=/%5D/g,Zm=/%5E/g,Cx=/%60/g,Jm=/%7B/g,Px=/%7C/g,Qm=/%7D/g,Dx=/%20/g;function Ph(n){return n==null?"":encodeURI(""+n).replace(Px,"|").replace(wx,"[").replace(Rx,"]")}function Ix(n){return Ph(n).replace(Jm,"{").replace(Qm,"}").replace(Zm,"^")}function su(n){return Ph(n).replace($m,"%2B").replace(Dx,"+").replace(Km,"%23").replace(Ex,"%26").replace(Cx,"`").replace(Jm,"{").replace(Qm,"}").replace(Zm,"^")}function Lx(n){return su(n).replace(Tx,"%3D")}function Ux(n){return Ph(n).replace(Km,"%23").replace(Ax,"%3F")}function Nx(n){return Ux(n).replace(bx,"%2F")}function jo(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Ox=/\/$/,Fx=n=>n.replace(Ox,"");function sc(n,t,e="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),s=t.slice(l,a>0?a:t.length),r=n(s.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Hx(i??t,e),{fullPath:i+s+o,path:i,query:r,hash:jo(o)}}function Bx(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function $f(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function kx(n,t,e){const i=t.matched.length-1,r=e.matched.length-1;return i>-1&&i===r&&Zs(t.matched[i],e.matched[r])&&t_(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Zs(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function t_(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!zx(n[e],t[e]))return!1;return!0}function zx(n,t){return oi(n)?Zf(n,t):oi(t)?Zf(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function Zf(n,t){return oi(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Hx(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return e.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Qi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ou=(function(n){return n.pop="pop",n.push="push",n})({}),oc=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Vx(n){if(!n)if(Is){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Fx(n)}const Gx=/^[^#]+#/;function Wx(n,t){return n.replace(Gx,"#")+t}function Xx(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Fl=()=>({left:window.scrollX,top:window.scrollY});function qx(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),r=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!r)return;t=Xx(r,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Jf(n,t){return(history.state?history.state.position-t:-1)+n}const au=new Map;function Yx(n,t){au.set(n,t)}function jx(n){const t=au.get(n);return au.delete(n),t}function Kx(n){return typeof n=="string"||n&&typeof n=="object"}function e_(n){return typeof n=="string"||typeof n=="symbol"}let Ae=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const n_=Symbol("");Ae.MATCHER_NOT_FOUND+"",Ae.NAVIGATION_GUARD_REDIRECT+"",Ae.NAVIGATION_ABORTED+"",Ae.NAVIGATION_CANCELLED+"",Ae.NAVIGATION_DUPLICATED+"";function Js(n,t){return re(new Error,{type:n,[n_]:!0},t)}function Ci(n,t){return n instanceof Error&&n_ in n&&(t==null||!!(n.type&t))}const $x=["params","query","hash"];function Zx(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of $x)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function Jx(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const r=e[i].replace($m," "),s=r.indexOf("="),o=jo(s<0?r:r.slice(0,s)),a=s<0?null:jo(r.slice(s+1));if(o in t){let l=t[o];oi(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function Qf(n){let t="";for(let e in n){const i=n[e];if(e=Lx(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(oi(i)?i.map(r=>r&&su(r)):[i&&su(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+e,r!=null&&(t+="="+r))})}return t}function Qx(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=oi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const ty=Symbol(""),td=Symbol(""),Bl=Symbol(""),Dh=Symbol(""),lu=Symbol("");function _o(){let n=[];function t(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function ur(n,t,e,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Js(Ae.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):Kx(f)?l(Js(Ae.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>n.call(i&&i.instances[r],t,e,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(f=>l(f))})}function ac(n,t,e,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(jm(l)){const c=(l.__vccOpts||l)[t];c&&s.push(ur(c,e,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Sx(u)?u.default:u;o.mods[a]=u,o.components[a]=h;const f=(h.__vccOpts||h)[t];return f&&ur(f,e,i,o,a,r)()}))}}return s}function ey(n,t){const e=[],i=[],r=[],s=Math.max(t.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(n.matched.find(c=>Zs(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Zs(c,l))||r.push(l))}return[e,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ny=()=>location.protocol+"//"+location.host;function i_(n,t){const{pathname:e,search:i,hash:r}=t,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),$f(a,"")}return $f(e,n)+i+r}function iy(n,t,e,i){let r=[],s=[],o=null;const a=({state:f})=>{const d=i_(n,location),g=e.value,_=t.value;let m=0;if(f){if(e.value=d,t.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(d);r.forEach(p=>{p(e.value,g,{delta:m,type:ou.pop,direction:m?m>0?oc.forward:oc.back:oc.unknown})})};function l(){o=e.value}function c(f){r.push(f);const d=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(re({},f.state,{scroll:Fl()}),"")}}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:h}}function ed(n,t,e,i=!1,r=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:r?Fl():null}}function ry(n){const{history:t,location:e}=window,i={value:i_(n,e)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=n.indexOf("#"),f=h>-1?(e.host&&document.querySelector("base")?n:n.slice(h))+l:ny()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(d){console.error(d),e[u?"replace":"assign"](f)}}function o(l,c){s(l,re({},t.state,ed(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=re({},r.value,t.state,{forward:l,scroll:Fl()});s(u.current,u,!0),s(l,re({},ed(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function sy(n){n=Vx(n);const t=ry(n),e=iy(n,t.state,t.location,t.replace);function i(s,o=!0){o||e.pauseListeners(),history.go(s)}const r=re({location:"",base:n,go:i,createHref:Wx.bind(null,n)},t,e);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}let Yr=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Be=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Be||{});const oy={type:Yr.Static,value:""},ay=/[a-zA-Z0-9_]/;function ly(n){if(!n)return[[]];if(n==="/")return[[oy]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(d){throw new Error(`ERR (${e})/"${c}": ${d}`)}let e=Be.Static,i=e;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(e===Be.Static?s.push({type:Yr.Static,value:c}):e===Be.Param||e===Be.ParamRegExp||e===Be.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Yr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Be.ParamRegExp){i=e,e=Be.EscapeNext;continue}switch(e){case Be.Static:l==="/"?(c&&h(),o()):l===":"?(h(),e=Be.Param):f();break;case Be.EscapeNext:f(),e=i;break;case Be.Param:l==="("?e=Be.ParamRegExp:ay.test(l)?f():(h(),e=Be.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Be.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Be.ParamRegExpEnd:u+=l;break;case Be.ParamRegExpEnd:h(),e=Be.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Be.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}const nd="[^/]+?",cy={sensitive:!1,strict:!1,start:!0,end:!0};var an=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(an||{});const uy=/[.+*?^${}()[\]/\\]/g;function hy(n,t){const e=re({},cy,t),i=[];let r=e.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[an.Root];e.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=an.Segment+(e.sensitive?an.BonusCaseSensitive:0);if(f.type===Yr.Static)h||(r+="/"),r+=f.value.replace(uy,"\\$&"),d+=an.Static;else if(f.type===Yr.Param){const{value:g,repeatable:_,optional:m,regexp:p}=f;s.push({name:g,repeatable:_,optional:m});const S=p||nd;if(S!==nd){d+=an.BonusCustomRegExp;try{`${S}`}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+v.message)}}let E=_?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),r+=E,d+=an.Dynamic,m&&(d+=an.BonusOptional),_&&(d+=an.BonusRepeatable),S===".*"&&(d+=an.BonusWildcard)}u.push(d)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=an.BonusStrict}e.strict||(r+="/?"),e.end?r+="$":e.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,e.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",g=s[f-1];h[g.name]=d&&g.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===Yr.Static)u+=d.value;else if(d.type===Yr.Param){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(oi(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=oi(p)?p.join("/"):p;if(!S)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function fy(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===an.Static+an.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===an.Static+an.Segment?1:-1:0}function r_(n,t){let e=0;const i=n.score,r=t.score;for(;e<i.length&&e<r.length;){const s=fy(i[e],r[e]);if(s)return s;e++}if(Math.abs(r.length-i.length)===1){if(id(i))return 1;if(id(r))return-1}return r.length-i.length}function id(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const dy={strict:!1,end:!0,sensitive:!1};function py(n,t,e){const i=hy(ly(n.path),e),r=re(i,{record:n,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function my(n,t){const e=[],i=new Map;t=Kf(dy,t);function r(h){return i.get(h)}function s(h,f,d){const g=!d,_=sd(h);_.aliasOf=d&&d.record;const m=Kf(t,h),p=[_];if("alias"in h){const v=typeof h.alias=="string"?[h.alias]:h.alias;for(const R of v)p.push(sd(re({},_,{components:d?d.record.components:_.components,path:R,aliasOf:d?d.record:_})))}let S,E;for(const v of p){const{path:R}=v;if(f&&R[0]!=="/"){const I=f.record.path,w=I[I.length-1]==="/"?"":"/";v.path=f.record.path+(R&&w+R)}if(S=py(v,f,m),d?d.alias.push(S):(E=E||S,E!==S&&E.alias.push(S),g&&h.name&&!od(S)&&o(h.name)),s_(S)&&l(S),_.children){const I=_.children;for(let w=0;w<I.length;w++)s(I[w],S,d&&d.children[w])}d=d||S}return E?()=>{o(E)}:Bo}function o(h){if(e_(h)){const f=i.get(h);f&&(i.delete(h),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(h);f>-1&&(e.splice(f,1),h.record.name&&i.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return e}function l(h){const f=vy(h,e);e.splice(f,0,h),h.record.name&&!od(h)&&i.set(h.record.name,h)}function c(h,f){let d,g={},_,m;if("name"in h&&h.name){if(d=i.get(h.name),!d)throw Js(Ae.MATCHER_NOT_FOUND,{location:h});m=d.record.name,g=re(rd(f.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),h.params&&rd(h.params,d.keys.map(E=>E.name))),_=d.stringify(g)}else if(h.path!=null)_=h.path,d=e.find(E=>E.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=f.name?i.get(f.name):e.find(E=>E.re.test(f.path)),!d)throw Js(Ae.MATCHER_NOT_FOUND,{location:h,currentLocation:f});m=d.record.name,g=re({},f.params,h.params),_=d.stringify(g)}const p=[];let S=d;for(;S;)p.unshift(S.record),S=S.parent;return{name:m,path:_,params:g,matched:p,meta:gy(p)}}n.forEach(h=>s(h));function u(){e.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function rd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function sd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:_y(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function _y(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function od(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function gy(n){return n.reduce((t,e)=>re(t,e.meta),{})}function vy(n,t){let e=0,i=t.length;for(;e!==i;){const s=e+i>>1;r_(n,t[s])<0?i=s:e=s+1}const r=xy(n);return r&&(i=t.lastIndexOf(r,i-1)),i}function xy(n){let t=n;for(;t=t.parent;)if(s_(t)&&r_(n,t)===0)return t}function s_({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function ad(n){const t=qn(Bl),e=qn(Dh),i=Ie(()=>{const l=Nt(n.to);return t.resolve(l)}),r=Ie(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=e.matched;if(!u||!h.length)return-1;const f=h.findIndex(Zs.bind(null,u));if(f>-1)return f;const d=ld(l[c-2]);return c>1&&ld(u)===d&&h[h.length-1].path!==d?h.findIndex(Zs.bind(null,l[c-2])):f}),s=Ie(()=>r.value>-1&&by(e.params,i.value.params)),o=Ie(()=>r.value>-1&&r.value===e.matched.length-1&&t_(e.params,i.value.params));function a(l={}){if(Ey(l)){const c=t[Nt(n.replace)?"replace":"push"](Nt(n.to)).catch(Bo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ie(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function yy(n){return n.length===1?n[0]:n}const My=wr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ad,setup(n,{slots:t}){const e=sa(ad(n)),{options:i}=qn(Bl),r=Ie(()=>({[cd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[cd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const s=t.default&&yy(t.default(e));return n.custom?s:Yo("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:r.value},s)}}}),Sy=My;function Ey(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function by(n,t){for(const e in t){const i=t[e],r=n[e];if(typeof i=="string"){if(i!==r)return!1}else if(!oi(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function ld(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cd=(n,t,e)=>n??t??e,Ty=wr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=qn(lu),r=Ie(()=>n.route||i.value),s=qn(td,0),o=Ie(()=>{let c=Nt(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ie(()=>r.value.matched[o.value]);Xa(td,Ie(()=>o.value+1)),Xa(ty,a),Xa(lu,r);const l=qe();return Qr(()=>[l.value,a.value,n.name],([c,u,h],[f,d,g])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Zs(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,h=a.value,f=h&&h.components[u];if(!f)return ud(e.default,{Component:f,route:c});const d=h.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Yo(f,re({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return ud(e.default,{Component:m,route:c})||m}}});function ud(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const o_=Ty;function Ay(n){const t=my(n.routes,n),e=n.parseQuery||Jx,i=n.stringifyQuery||Qf,r=n.history,s=_o(),o=_o(),a=_o(),l=b0(Qi);let c=Qi;Is&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rc.bind(null,O=>""+O),h=rc.bind(null,Nx),f=rc.bind(null,jo);function d(O,ot){let st,dt;return e_(O)?(st=t.getRecordMatcher(O),dt=ot):dt=O,t.addRoute(dt,st)}function g(O){const ot=t.getRecordMatcher(O);ot&&t.removeRoute(ot)}function _(){return t.getRoutes().map(O=>O.record)}function m(O){return!!t.getRecordMatcher(O)}function p(O,ot){if(ot=re({},ot||l.value),typeof O=="string"){const b=sc(e,O,ot.path),nt=t.resolve({path:b.path},ot),J=r.createHref(b.fullPath);return re(b,nt,{params:f(nt.params),hash:jo(b.hash),redirectedFrom:void 0,href:J})}let st;if(O.path!=null)st=re({},O,{path:sc(e,O.path,ot.path).path});else{const b=re({},O.params);for(const nt in b)b[nt]==null&&delete b[nt];st=re({},O,{params:h(b)}),ot.params=h(ot.params)}const dt=t.resolve(st,ot),Pt=O.hash||"";dt.params=u(f(dt.params));const C=Bx(i,re({},O,{hash:Ix(Pt),path:dt.path})),L=r.createHref(C);return re({fullPath:C,hash:Pt,query:i===Qf?Qx(O.query):O.query||{}},dt,{redirectedFrom:void 0,href:L})}function S(O){return typeof O=="string"?sc(e,O,l.value.path):re({},O)}function E(O,ot){if(c!==O)return Js(Ae.NAVIGATION_CANCELLED,{from:ot,to:O})}function v(O){return w(O)}function R(O){return v(re(S(O),{replace:!0}))}function I(O,ot){const st=O.matched[O.matched.length-1];if(st&&st.redirect){const{redirect:dt}=st;let Pt=typeof dt=="function"?dt(O,ot):dt;return typeof Pt=="string"&&(Pt=Pt.includes("?")||Pt.includes("#")?Pt=S(Pt):{path:Pt},Pt.params={}),re({query:O.query,hash:O.hash,params:Pt.path!=null?{}:O.params},Pt)}}function w(O,ot){const st=c=p(O),dt=l.value,Pt=O.state,C=O.force,L=O.replace===!0,b=I(st,dt);if(b)return w(re(S(b),{state:typeof b=="object"?re({},Pt,b.state):Pt,force:C,replace:L}),ot||st);const nt=st;nt.redirectedFrom=ot;let J;return!C&&kx(i,dt,st)&&(J=Js(Ae.NAVIGATION_DUPLICATED,{to:nt,from:dt}),yt(dt,dt,!0,!1)),(J?Promise.resolve(J):M(nt,dt)).catch(q=>Ci(q)?Ci(q,Ae.NAVIGATION_GUARD_REDIRECT)?q:_t(q):z(q,nt,dt)).then(q=>{if(q){if(Ci(q,Ae.NAVIGATION_GUARD_REDIRECT))return w(re({replace:L},S(q.to),{state:typeof q.to=="object"?re({},Pt,q.to.state):Pt,force:C}),ot||nt)}else q=B(nt,dt,!0,L,Pt);return D(nt,dt,q),q})}function P(O,ot){const st=E(O,ot);return st?Promise.reject(st):Promise.resolve()}function x(O){const ot=et.values().next().value;return ot&&typeof ot.runWithContext=="function"?ot.runWithContext(O):O()}function M(O,ot){let st;const[dt,Pt,C]=ey(O,ot);st=ac(dt.reverse(),"beforeRouteLeave",O,ot);for(const b of dt)b.leaveGuards.forEach(nt=>{st.push(ur(nt,O,ot))});const L=P.bind(null,O,ot);return st.push(L),bt(st).then(()=>{st=[];for(const b of s.list())st.push(ur(b,O,ot));return st.push(L),bt(st)}).then(()=>{st=ac(Pt,"beforeRouteUpdate",O,ot);for(const b of Pt)b.updateGuards.forEach(nt=>{st.push(ur(nt,O,ot))});return st.push(L),bt(st)}).then(()=>{st=[];for(const b of C)if(b.beforeEnter)if(oi(b.beforeEnter))for(const nt of b.beforeEnter)st.push(ur(nt,O,ot));else st.push(ur(b.beforeEnter,O,ot));return st.push(L),bt(st)}).then(()=>(O.matched.forEach(b=>b.enterCallbacks={}),st=ac(C,"beforeRouteEnter",O,ot,x),st.push(L),bt(st))).then(()=>{st=[];for(const b of o.list())st.push(ur(b,O,ot));return st.push(L),bt(st)}).catch(b=>Ci(b,Ae.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function D(O,ot,st){a.list().forEach(dt=>x(()=>dt(O,ot,st)))}function B(O,ot,st,dt,Pt){const C=E(O,ot);if(C)return C;const L=ot===Qi,b=Is?history.state:{};st&&(dt||L?r.replace(O.fullPath,re({scroll:L&&b&&b.scroll},Pt)):r.push(O.fullPath,Pt)),l.value=O,yt(O,ot,st,L),_t()}let N;function Y(){N||(N=r.listen((O,ot,st)=>{if(!ut.listening)return;const dt=p(O),Pt=I(dt,ut.currentRoute.value);if(Pt){w(re(Pt,{replace:!0,force:!0}),dt).catch(Bo);return}c=dt;const C=l.value;Is&&Yx(Jf(C.fullPath,st.delta),Fl()),M(dt,C).catch(L=>Ci(L,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_CANCELLED)?L:Ci(L,Ae.NAVIGATION_GUARD_REDIRECT)?(w(re(S(L.to),{force:!0}),dt).then(b=>{Ci(b,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&!st.delta&&st.type===ou.pop&&r.go(-1,!1)}).catch(Bo),Promise.reject()):(st.delta&&r.go(-st.delta,!1),z(L,dt,C))).then(L=>{L=L||B(dt,C,!1),L&&(st.delta&&!Ci(L,Ae.NAVIGATION_CANCELLED)?r.go(-st.delta,!1):st.type===ou.pop&&Ci(L,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),D(dt,C,L)}).catch(Bo)}))}let Z=_o(),G=_o(),V;function z(O,ot,st){_t(O);const dt=G.list();return dt.length?dt.forEach(Pt=>Pt(O,ot,st)):console.error(O),Promise.reject(O)}function ft(){return V&&l.value!==Qi?Promise.resolve():new Promise((O,ot)=>{Z.add([O,ot])})}function _t(O){return V||(V=!O,Y(),Z.list().forEach(([ot,st])=>O?st(O):ot()),Z.reset()),O}function yt(O,ot,st,dt){const{scrollBehavior:Pt}=n;if(!Is||!Pt)return Promise.resolve();const C=!st&&jx(Jf(O.fullPath,0))||(dt||!st)&&history.state&&history.state.scroll||null;return Mh().then(()=>Pt(O,ot,C)).then(L=>L&&qx(L)).catch(L=>z(L,O,ot))}const wt=O=>r.go(O);let Gt;const et=new Set,ut={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:v,replace:R,go:wt,back:()=>wt(-1),forward:()=>wt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:G.add,isReady:ft,install(O){O.component("RouterLink",Sy),O.component("RouterView",o_),O.config.globalProperties.$router=ut,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Nt(l)}),Is&&!Gt&&l.value===Qi&&(Gt=!0,v(r.location).catch(dt=>{}));const ot={};for(const dt in Qi)Object.defineProperty(ot,dt,{get:()=>l.value[dt],enumerable:!0});O.provide(Bl,ut),O.provide(Dh,om(ot)),O.provide(lu,l);const st=O.unmount;et.add(O),O.unmount=function(){et.delete(O),et.size<1&&(c=Qi,N&&N(),N=null,l.value=Qi,Gt=!1,V=!1),st()}}};function bt(O){return O.reduce((ot,st)=>ot.then(()=>x(st)),Promise.resolve())}return ut}function wy(){return qn(Bl)}function Ry(n){return qn(Dh)}const Cy=wr({__name:"App",setup(n){return(t,e)=>(de(),wh(Nt(o_)))}});/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ya={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=({size:n,strokeWidth:t=2,absoluteStrokeWidth:e,color:i,iconNode:r,name:s,class:o,...a},{slots:l})=>Yo("svg",{...ya,width:n||ya.width,height:n||ya.height,stroke:i||ya.stroke,"stroke-width":e?Number(t)*24/Number(n):t,class:["lucide",`lucide-${Py(s??"icon")}`],...a},[...r.map(c=>Yo(...c)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=(n,t)=>(e,{slots:i})=>Yo(Dy,{...e,iconNode:t,name:n},i);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ai("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ai("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=ai("CircleDotIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=ai("DoorOpenIcon",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=ai("ExpandIcon",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ai("GaugeIcon",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ai("LightbulbIcon",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=ai("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=ai("Share2Icon",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ai("ShieldIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ai("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),ps={bodyColors:[{id:"liquid-silver",name:"液态银",hex:"#c9d1d3",finish:"metallic"},{id:"rosso-corsa",name:"赛道红",hex:"#c91522",finish:"pearl"},{id:"midnight-black",name:"午夜黑",hex:"#111318",finish:"metallic"},{id:"electric-lime",name:"电光青柠",hex:"#b6ff2e",finish:"racing"},{id:"frozen-blue",name:"冰川蓝",hex:"#5c8fb6",finish:"matte"}],wheels:[{id:"forged-black",name:"锻造黑曜",color:"#101216",spokeCount:10},{id:"turbine-silver",name:"涡轮银刃",color:"#d5d8d5",spokeCount:12},{id:"bronze-track",name:"赛道古铜",color:"#b07a3a",spokeCount:8}],brakeCalipers:[{id:"red",name:"红色卡钳",hex:"#e31f2f"},{id:"yellow",name:"黄色卡钳",hex:"#ffd12a"},{id:"blue",name:"蓝色卡钳",hex:"#2384ff"},{id:"black",name:"黑色卡钳",hex:"#0b0b0d"},{id:"silver",name:"银色卡钳",hex:"#c3c8cc"}],exteriorKits:[{id:"front-lip",name:"碳纤维前唇",description:"强化前脸低趴姿态"},{id:"side-skirt",name:"碳纤维侧裙",description:"拉长车身视觉重心"},{id:"active-wing",name:"主动尾翼",description:"高速状态自动抬升"}],interiors:[{id:"onyx-red",name:"曜石黑 / 红缝线",primary:"#141316",stitch:"#e4363f"},{id:"tan-carbon",name:"焦糖棕 / 碳饰板",primary:"#8c5a35",stitch:"#e6bc7a"},{id:"storm-blue",name:"风暴蓝 / 银缝线",primary:"#1d3248",stitch:"#dfe8ee"}],lightModes:[{id:"off",name:"关闭",intensity:0},{id:"signature",name:"日行灯",intensity:.75},{id:"studio",name:"摄影棚高亮",intensity:1.35}]},ja=[{id:"bmw-m3-competition",brand:"BMW",name:"M3 Competition",displayName:"BMW M3 Competition",previewTone:"#7aa6bd",hdriPreset:"cold-studio",stats:{power:"510 hp",acceleration:"3.9s",topSpeed:"290 km/h",price:"$82k+"},materialSlots:ms(),options:ps},{id:"lamborghini-revuelto",brand:"Lamborghini",name:"Revuelto",displayName:"Lamborghini Revuelto",previewTone:"#b7ff2a",hdriPreset:"lime-stage",stats:{power:"1001 hp",acceleration:"2.5s",topSpeed:"350 km/h",price:"$608k+"},materialSlots:ms(),options:ps},{id:"ferrari-296-gtb",brand:"Ferrari",name:"296 GTB",displayName:"Ferrari 296 GTB",previewTone:"#d71928",hdriPreset:"warm-gallery",stats:{power:"819 hp",acceleration:"2.9s",topSpeed:"330 km/h",price:"$342k+"},materialSlots:ms(),options:ps},{id:"porsche-911-turbo-s",brand:"Porsche",name:"911 Turbo S",displayName:"Porsche 911 Turbo S",previewTone:"#d7dad8",hdriPreset:"softbox-white",stats:{power:"640 hp",acceleration:"2.6s",topSpeed:"330 km/h",price:"$231k+"},materialSlots:ms(),options:ps},{id:"mclaren-720s",brand:"McLaren",name:"720S",displayName:"McLaren 720S",previewTone:"#f27d21",hdriPreset:"amber-tunnel",stats:{power:"710 hp",acceleration:"2.8s",topSpeed:"341 km/h",price:"$310k+"},materialSlots:ms(),options:ps},{id:"mercedes-amg-gt",brand:"Mercedes-AMG",name:"GT",displayName:"Mercedes-AMG GT",previewTone:"#1f2329",hdriPreset:"night-studio",stats:{power:"577 hp",acceleration:"3.1s",topSpeed:"315 km/h",price:"$177k+"},materialSlots:ms(),options:ps}];function ms(){return{body:["body-shell","door-left","door-right"],glass:["windshield","side-glass"],tire:["tire-front-left","tire-front-right","tire-rear-left","tire-rear-right"],wheel:["wheel-front-left","wheel-front-right","wheel-rear-left","wheel-rear-right"],brakeCaliper:["caliper-front-left","caliper-front-right","caliper-rear-left","caliper-rear-right"],carbonFiber:["front-lip","side-skirt","diffuser","wing"],leather:["seat-left","seat-right","dashboard"],light:["headlight-left","headlight-right","taillight-left","taillight-right"]}}const Vr=ja[0],a_="dream-car-model-config",la=Mx("car-configurator",()=>{const n=Gy(),t=qe(n.carId),e=qe(n.bodyColorId),i=qe(n.wheelId),r=qe(n.brakeCaliperId),s=qe(n.exteriorKitIds),o=qe(n.interiorId),a=qe(n.lightModeId),l=qe(n.cameraPreset),c=qe(n.qualityLevel),u=qe("idle"),h=qe(null),f=qe(!1),d=Ie(()=>ja.find(D=>D.id===t.value)??Vr),g=Ie(()=>go(d.value.options.bodyColors,e.value)),_=Ie(()=>go(d.value.options.wheels,i.value)),m=Ie(()=>go(d.value.options.brakeCalipers,r.value)),p=Ie(()=>go(d.value.options.interiors,o.value)),S=Ie(()=>go(d.value.options.lightModes,a.value));function E(D){const B=ja.find(N=>N.id===D);B&&(t.value=B.id,e.value=ci(B.options.bodyColors,e.value),i.value=ci(B.options.wheels,i.value),r.value=ci(B.options.brakeCalipers,r.value),o.value=ci(B.options.interiors,o.value),a.value=ci(B.options.lightModes,a.value),M())}function v(D){D.bodyColorId&&(e.value=D.bodyColorId),D.wheelId&&(i.value=D.wheelId),D.brakeCaliperId&&(r.value=D.brakeCaliperId),D.exteriorKitIds&&(s.value=D.exteriorKitIds),D.interiorId&&(o.value=D.interiorId),D.lightModeId&&(a.value=D.lightModeId),D.cameraPreset&&(l.value=D.cameraPreset),D.qualityLevel&&(c.value=D.qualityLevel),M()}function R(D){const B=s.value.includes(D);s.value=B?s.value.filter(N=>N!==D):[...s.value,D],M()}function I(D){h.value=D}function w(){f.value=!f.value}function P(){return{car:t.value,color:e.value,wheels:i.value,caliper:r.value,kits:s.value.join(","),interior:o.value,lights:a.value,camera:l.value,quality:c.value}}function x(D){var V;const B=typeof D.car=="string"?D.car:t.value;E(B);const N=d.value;e.value=ci(N.options.bodyColors,tr(D.color)??e.value),i.value=ci(N.options.wheels,tr(D.wheels)??i.value),r.value=ci(N.options.brakeCalipers,tr(D.caliper)??r.value),o.value=ci(N.options.interiors,tr(D.interior)??o.value),a.value=ci(N.options.lightModes,tr(D.lights)??a.value);const Y=((V=tr(D.kits))==null?void 0:V.split(",").filter(Boolean))??s.value;s.value=Y.filter(z=>N.options.exteriorKits.some(ft=>ft.id===z));const Z=tr(D.camera);Wy(Z)&&(l.value=Z);const G=tr(D.quality);Xy(G)&&(c.value=G),M()}function M(){try{localStorage.setItem(a_,JSON.stringify({carId:t.value,bodyColorId:e.value,wheelId:i.value,brakeCaliperId:r.value,exteriorKitIds:s.value,interiorId:o.value,lightModeId:a.value,cameraPreset:l.value,qualityLevel:c.value}))}catch{}}return{cars:ja,selectedCarId:t,bodyColorId:e,wheelId:i,brakeCaliperId:r,exteriorKitIds:s,interiorId:o,lightModeId:a,cameraPreset:l,qualityLevel:c,loadingState:u,focusedPart:h,doorsOpen:f,selectedCar:d,currentBodyColor:g,currentWheel:_,currentBrakeCaliper:m,currentInterior:p,currentLightMode:S,selectCar:E,updateConfiguration:v,toggleExteriorKit:R,focusPart:I,toggleDoors:w,toQuery:P,hydrateFromQuery:x}});function Gy(){const n={carId:Vr.id,bodyColorId:Vr.options.bodyColors[0].id,wheelId:Vr.options.wheels[0].id,brakeCaliperId:Vr.options.brakeCalipers[0].id,exteriorKitIds:["front-lip"],interiorId:Vr.options.interiors[0].id,lightModeId:Vr.options.lightModes[1].id,cameraPreset:"exterior",qualityLevel:"auto"};try{const t=localStorage.getItem(a_);return t?{...n,...JSON.parse(t)}:n}catch{return n}}function go(n,t){return n.find(e=>e.id===t)??n[0]}function ci(n,t){return n.some(e=>e.id===t)?t:n[0].id}function tr(n){return typeof n=="string"?n:null}function Wy(n){return n==="exterior"||n==="front"||n==="side"||n==="rear"||n==="interior"||n==="wheel"}function Xy(n){return n==="auto"||n==="high"||n==="balanced"||n==="mobile"}const qy={class:"configurator","aria-label":"车辆配置"},Yy={class:"panel-section"},jy={class:"section-title"},Ky={class:"swatch-grid"},$y=["title","onClick"],Zy={class:"panel-section"},Jy={class:"section-title"},Qy={class:"option-stack"},tM=["onClick"],eM={class:"panel-section"},nM={class:"section-title"},iM={class:"swatch-grid tight"},rM=["title","onClick"],sM={class:"panel-section"},oM={class:"section-title"},aM={class:"option-stack"},lM=["onClick"],cM={class:"panel-section"},uM={class:"section-title"},hM=["value"],fM=["value"],dM={class:"segmented"},pM=["onClick"],mM={class:"panel-section"},_M={class:"section-title"},gM={class:"segmented"},vM=["onClick"],xM={class:"segmented"},yM=["onClick"],hd=wr({__name:"CarConfigurator",setup(n){const t=la(),e=[{id:"exterior",label:"外观"},{id:"front",label:"前脸"},{id:"side",label:"侧面"},{id:"rear",label:"尾部"},{id:"interior",label:"内饰"},{id:"wheel",label:"轮毂"}],i=[{id:"auto",label:"自动"},{id:"high",label:"高质"},{id:"balanced",label:"均衡"},{id:"mobile",label:"省电"}];return(r,s)=>(de(),ve("aside",qy,[Ot("section",Yy,[Ot("div",jy,[le(Nt(ky),{size:16}),s[1]||(s[1]=ar(" 车身颜色",-1))]),Ot("div",Ky,[(de(!0),ve(ze,null,hi(Nt(t).selectedCar.options.bodyColors,o=>(de(),ve("button",{key:o.id,class:Vn(["paint-swatch",{active:o.id===Nt(t).bodyColorId}]),style:Zr({"--paint":o.hex}),type:"button",title:o.name,onClick:a=>Nt(t).updateConfiguration({bodyColorId:o.id})},[o.id===Nt(t).bodyColorId?(de(),wh(Nt(Ly),{key:0,size:14})):Rh("",!0)],14,$y))),128))])]),Ot("section",Zy,[Ot("div",Jy,[le(Nt(Uy),{size:16}),s[2]||(s[2]=ar(" 轮毂",-1))]),Ot("div",Qy,[(de(!0),ve(ze,null,hi(Nt(t).selectedCar.options.wheels,o=>(de(),ve("button",{key:o.id,class:Vn(["option-row",{active:o.id===Nt(t).wheelId}]),type:"button",onClick:a=>Nt(t).updateConfiguration({wheelId:o.id})},[Ot("span",{class:"wheel-chip",style:Zr({"--wheel":o.color})},null,4),ar(" "+ln(o.name),1)],10,tM))),128))])]),Ot("section",eM,[Ot("div",nM,[le(Nt(Hy),{size:16}),s[3]||(s[3]=ar(" 刹车卡钳",-1))]),Ot("div",iM,[(de(!0),ve(ze,null,hi(Nt(t).selectedCar.options.brakeCalipers,o=>(de(),ve("button",{key:o.id,class:Vn(["paint-swatch small",{active:o.id===Nt(t).brakeCaliperId}]),style:Zr({"--paint":o.hex}),type:"button",title:o.name,onClick:a=>Nt(t).updateConfiguration({brakeCaliperId:o.id})},null,14,rM))),128))])]),Ot("section",sM,[Ot("div",oM,[le(Nt(Vy),{size:16}),s[4]||(s[4]=ar(" 外观套件",-1))]),Ot("div",aM,[(de(!0),ve(ze,null,hi(Nt(t).selectedCar.options.exteriorKits,o=>(de(),ve("button",{key:o.id,class:Vn(["option-row",{active:Nt(t).exteriorKitIds.includes(o.id)}]),type:"button",onClick:a=>Nt(t).toggleExteriorKit(o.id)},[Ot("span",null,ln(o.name),1)],10,lM))),128))])]),Ot("section",cM,[Ot("div",uM,[le(Nt(Fy),{size:16}),s[5]||(s[5]=ar(" 内饰 / 镜头",-1))]),Ot("select",{class:"select-field",value:Nt(t).interiorId,onChange:s[0]||(s[0]=o=>Nt(t).updateConfiguration({interiorId:o.target.value}))},[(de(!0),ve(ze,null,hi(Nt(t).selectedCar.options.interiors,o=>(de(),ve("option",{key:o.id,value:o.id},ln(o.name),9,fM))),128))],40,hM),Ot("div",dM,[(de(),ve(ze,null,hi(e,o=>Ot("button",{key:o.id,class:Vn({active:o.id===Nt(t).cameraPreset}),type:"button",onClick:a=>Nt(t).updateConfiguration({cameraPreset:o.id})},ln(o.label),11,pM)),64))])]),Ot("section",mM,[Ot("div",_M,[le(Nt(By),{size:16}),s[6]||(s[6]=ar(" 灯光 / 画质",-1))]),Ot("div",gM,[(de(!0),ve(ze,null,hi(Nt(t).selectedCar.options.lightModes,o=>(de(),ve("button",{key:o.id,class:Vn({active:o.id===Nt(t).lightModeId}),type:"button",onClick:a=>Nt(t).updateConfiguration({lightModeId:o.id})},ln(o.name),11,vM))),128))]),Ot("div",xM,[(de(),ve(ze,null,hi(i,o=>Ot("button",{key:o.id,class:Vn({active:o.id===Nt(t).qualityLevel}),type:"button",onClick:a=>Nt(t).updateConfiguration({qualityLevel:o.id})},ln(o.label),11,yM)),64))])])]))}}),MM={class:"car-selector","aria-label":"车型选择"},SM=["onClick"],EM={class:"car-meta"},bM=wr({__name:"CarSelector",setup(n){const t=la();return(e,i)=>(de(),ve("aside",MM,[(de(!0),ve(ze,null,hi(Nt(t).cars,r=>(de(),ve("button",{key:r.id,class:Vn(["car-tile",{active:r.id===Nt(t).selectedCarId}]),type:"button",onClick:s=>Nt(t).selectCar(r.id)},[Ot("span",{class:"car-swatch",style:Zr({"--tone":r.previewTone})},null,4),Ot("span",EM,[Ot("strong",null,ln(r.brand),1),Ot("small",null,ln(r.name),1)])],10,SM))),128))]))}});function Fi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function l_(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ko={duration:.5,overwrite:!1,delay:0},Ih,je,xe,Wn=1e8,pe=1/Wn,cu=Math.PI*2,TM=cu/4,AM=0,c_=Math.sqrt,wM=Math.cos,RM=Math.sin,We=function(t){return typeof t=="string"},Re=function(t){return typeof t=="function"},ji=function(t){return typeof t=="number"},Lh=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},vn=function(t){return t!==!1},Uh=function(){return typeof window<"u"},Ma=function(t){return Re(t)||We(t)},u_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,CM=/random\([^)]+\)/g,PM=/,\s*/g,fd=/(?:-?\.?\d|\.)+/gi,h_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,f_=/[+-]=-?[.\d]+/,DM=/[^,'"\[\]\s]+/gi,IM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Me,fi,uu,Nh,Nn={},ml={},d_,p_=function(t){return(ml=Qs(t,Nn))&&En},Oh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},$o=function(t,e){return!e&&console.warn(t)},m_=function(t,e){return t&&(Nn[t]=e)&&ml&&(ml[t]=e)||Nn},Zo=function(){return 0},LM={suppressEvents:!0,isStart:!0,kill:!1},Ka={suppressEvents:!0,kill:!1},UM={suppressEvents:!0},Fh={},gr=[],hu={},__,wn={},cc={},dd=30,$a=[],Bh="",kh=function(t){var e=t[0],i,r;if(Ti(e)||Re(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=$a.length;r--&&!$a[r].targetTest(e););i=$a[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new B_(t[r],i)))||t.splice(r,1);return t},es=function(t){return t._gsap||kh(Xn(t))[0]._gsap},g_=function(t,e,i){return(i=t[e])&&Re(i)?t[e]():Lh(i)&&t.getAttribute&&t.getAttribute(e)||i},xn=function(t,e){return(t=t.split(",")).forEach(e)||t},De=function(t){return Math.round(t*1e5)/1e5||0},ye=function(t){return Math.round(t*1e7)/1e7||0},Vs=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},NM=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},_l=function(){var t=gr.length,e=gr.slice(0),i,r;for(hu={},gr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zh=function(t){return!!(t._initted||t._startAt||t.add)},v_=function(t,e,i,r){gr.length&&!je&&_l(),t.render(e,i,!!(je&&e<0&&zh(t))),gr.length&&!je&&_l()},x_=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(DM).length<2?e:We(t)?t.trim():t},y_=function(t){return t},On=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},OM=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Qs=function(t,e){for(var i in e)t[i]=e[i];return t},pd=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ti(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},gl=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},ko=function(t){var e=t.parent||Me,i=t.keyframes?OM(en(t.keyframes)):On;if(vn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},FM=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},M_=function(t,e,i,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},kl=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Sr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ns=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},BM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},fu=function(t,e,i,r){return t._startAt&&(je?t._startAt.revert(Ka):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},kM=function n(t){return!t||t._ts&&n(t.parent)},md=function(t){return t._repeat?to(t._tTime,t=t.duration()+t._rDelay)*t:0},to=function(t,e){var i=Math.floor(t=ye(t/e));return t&&i===t?i-1:i},vl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zl=function(t){return t._end=ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||pe)||0))},Hl=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ye(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zl(t),i._dirty||ns(i,t)),t},S_=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=vl(t.rawTime(),e),(!e._dur||ca(0,e.totalDuration(),i)-e._tTime>pe)&&e.render(i,!0)),ns(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-pe}},gi=function(t,e,i,r){return e.parent&&Sr(e),e._start=ye((ji(i)?i:i||t!==Me?Hn(t,i,e):t._time)+e._delay),e._end=ye(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),M_(t,e,"_first","_last",t._sort?"_start":0),du(e)||(t._recent=e),r||S_(t,e),t._ts<0&&Hl(t,t._tTime),t},E_=function(t,e){return(Nn.ScrollTrigger||Oh("scrollTrigger",e))&&Nn.ScrollTrigger.create(e,t)},b_=function(t,e,i,r,s){if(Vh(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!je&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&__!==Rn.frame)return gr.push(t),t._lazy=[s,r],1},zM=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},du=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},HM=function(t,e,i,r){var s=t.ratio,o=e<0||!e&&(!t._start&&zM(t)&&!(!t._initted&&du(t))||(t._ts<0||t._dp._ts<0)&&!du(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ca(0,t._tDur,e),u=to(l,a),t._yoyo&&u&1&&(o=1-o),u!==to(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||je||r||t._zTime===pe||!e&&t._zTime){if(!t._initted&&b_(t,e,r,i,l))return;for(h=t._zTime,t._zTime=e||(i?pe:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&fu(t,e,i,!0),t._onUpdate&&!i&&Pn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Pn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Sr(t,1),!i&&!je&&(Pn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},VM=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},eo=function(t,e,i,r){var s=t._repeat,o=ye(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ye(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Hl(t,t._tTime=t._tDur*a),t.parent&&zl(t),i||ns(t.parent,t),t},_d=function(t){return t instanceof gn?ns(t):eo(t,t._dur)},GM={_start:0,endTime:Zo,totalDuration:Zo},Hn=function n(t,e,i){var r=t.labels,s=t._recent||GM,o=t.duration()>=Wn?s.endTime(!1):t._dur,a,l,c;return We(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(en(i)?i[0]:i).totalDuration()),a>1?n(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},zo=function(t,e,i){var r=ji(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ne(e[0],o,e[s+1])},Rr=function(t,e){return t||t===0?e(t):e},ca=function(t,e,i){return i<t?t:i>e?e:i},tn=function(t,e){return!We(t)||!(e=IM.exec(t))?"":e[1]},WM=function(t,e,i){return Rr(i,function(r){return ca(t,e,r)})},pu=[].slice,T_=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==fi},XM=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return We(r)&&!e||T_(r,1)?(s=i).push.apply(s,Xn(r)):i.push(r)})||i},Xn=function(t,e,i){return xe&&!e&&xe.selector?xe.selector(t):We(t)&&!i&&(uu||!no())?pu.call((e||Nh).querySelectorAll(t),0):en(t)?XM(t,i):T_(t)?pu.call(t,0):t?[t]:[]},mu=function(t){return t=Xn(t)[0]||$o("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Xn(e,i.querySelectorAll?i:i===t?$o("Invalid scope")||Nh.createElement("div"):t)}},A_=function(t){return t.sort(function(){return .5-Math.random()})},w_=function(t){if(Re(t))return t;var e=Ti(t)?t:{each:t},i=is(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return We(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,S,E,v,R,I,w,P,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Wn])[1],!x){for(w=-Wn;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],p=l?Math.min(x,_)*u-.5:r%x,S=x===Wn?0:l?_*h/x-.5:r/x|0,w=0,P=Wn,I=0;I<_;I++)E=I%x-p,v=S-(I/x|0),m[I]=R=c?Math.abs(c==="y"?v:E):c_(E*E+v*v),R>w&&(w=R),R<P&&(P=R);r==="random"&&A_(m),m.max=w-P,m.min=P,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=tn(e.amount||e.each)||0,i=i&&_<0?rS(i):i}return _=(m[f]-m.min)/m.max||0,ye(m.b+(i?i(_):_)*m.v)+m.u}},_u=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=ye(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(ji(i)?0:tn(i))}},R_=function(t,e){var i=en(t),r,s;return!i&&Ti(t)&&(r=i=t.radius||Wn,t.values?(t=Xn(t.values),(s=!ji(t[0]))&&(r*=r)):t=_u(t.increment)),Rr(e,i?Re(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Wn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?t[u]:o,s||u===o||ji(o)?u:u+tn(o)}:_u(t))},C_=function(t,e,i,r){return Rr(en(t)?!e:i===!0?!!(i=0):!r,function(){return en(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},qM=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,o){return o(s)},r)}},YM=function(t,e){return function(i){return t(parseFloat(i))+(e||tn(i))}},jM=function(t,e,i){return D_(t,e,0,1,i)},P_=function(t,e,i){return Rr(i,function(r){return t[~~e(r)]})},KM=function n(t,e,i){var r=e-t;return en(t)?P_(t,n(0,t.length),e):Rr(i,function(s){return(r+(s-t)%r)%r+t})},$M=function n(t,e,i){var r=e-t,s=r*2;return en(t)?P_(t,n(0,t.length-1),e):Rr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Jo=function(t){return t.replace(CM,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(PM);return C_(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},D_=function(t,e,i,r,s){var o=e-t,a=r-i;return Rr(s,function(l){return i+((l-t)/o*a||0)})},ZM=function n(t,e,i,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=We(t),a={},l,c,u,h,f;if(i===!0&&(r=1)&&(i=null),o)t={p:t},e={p:e};else if(en(t)&&!en(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(n(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return u[_](g-_)},i=e}else r||(t=Qs(en(t)?[]:{},t));if(!u){for(l in e)Hh.call(a,t,l,"get",e[l]);s=function(g){return Xh(g,a)||(o?t.p:t)}}}return Rr(i,s)},gd=function(t,e,i){var r=t.labels,s=Wn,o,a,l;for(o in r)a=r[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Pn=function(t,e,i){var r=t.vars,s=r[e],o=xe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&gr.length&&_l(),a&&(xe=a),u=l?s.apply(c,l):s.call(c),xe=o,u},Ao=function(t){return Sr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!je),t.progress()<1&&Pn(t,"onInterrupt"),t},Ns,I_=[],L_=function(t){if(t)if(t=!t.name&&t.default||t,Uh()||t.headless){var e=t.name,i=Re(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Zo,render:Xh,add:Hh,kill:pS,modifier:dS,rawVars:0},o={targetTest:0,get:0,getSetter:Wh,aliases:{},register:0};if(no(),t!==r){if(wn[e])return;On(r,On(gl(t,s),o)),Qs(r.prototype,Qs(s,gl(t,o))),wn[r.prop=e]=r,t.targetTest&&($a.push(r),Fh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}m_(e,r),t.register&&t.register(En,r,yn)}else I_.push(t)},fe=255,wo={aqua:[0,fe,fe],lime:[0,fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,fe],navy:[0,0,128],white:[fe,fe,fe],olive:[128,128,0],yellow:[fe,fe,0],orange:[fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[fe,0,0],pink:[fe,192,203],cyan:[0,fe,fe],transparent:[fe,fe,fe,0]},uc=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*fe+.5|0},U_=function(t,e,i){var r=t?ji(t)?[t>>16,t>>8&fe,t&fe]:0:wo.black,s,o,a,l,c,u,h,f,d,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wo[t])r=wo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&fe,r&fe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&fe,t&fe]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(fd),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=uc(l+1/3,s,o),r[1]=uc(l,s,o),r[2]=uc(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(h_),i&&r.length<4&&(r[3]=1),r}else r=t.match(fd)||wo.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/fe,o=r[1]/fe,a=r[2]/fe,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},N_=function(t){var e=[],i=[],r=-1;return t.split(vr).forEach(function(s){var o=s.match(Us)||[];e.push.apply(e,o),i.push(r+=o.length+1)}),e.c=i,e},vd=function(t,e,i){var r="",s=(t+r).match(vr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=U_(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=N_(t),l=i.c,l.join(r)!==u.c.join(r)))for(c=t.replace(vr,"1").split(Us),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(vr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},vr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wo)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),JM=/hsl[a]?\(/,O_=function(t){var e=t.join(" "),i;if(vr.lastIndex=0,vr.test(e))return i=JM.test(e),t[1]=vd(t[1],i),t[0]=vd(t[0],i,N_(t[1])),!0},Qo,Rn=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,g=function _(m){var p=n()-r,S=m===!0,E,v,R,I;if((p>t||p<0)&&(i+=p-e),r+=p,R=r-i,E=R-o,(E>0||S)&&(I=++h.frame,f=R-h.time*1e3,h.time=R=R/1e3,o+=E+(E>=s?4:s-E),v=1),S||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](R,f,I,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){d_&&(!uu&&Uh()&&(fi=uu=window,Nh=fi.document||{},Nn.gsap=En,(fi.gsapVersions||(fi.gsapVersions=[])).push(En.version),p_(ml||fi.GreenSockGlobals||!fi.gsap&&fi||{}),I_.forEach(L_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Qo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Qo=0,c=Zo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,S){var E=p?function(v,R,I,w){m(v,R,I,w),h.remove(E)}:m;return h.remove(m),a[S?"unshift":"push"](E),no(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),no=function(){return!Qo&&Rn.wake()},Zt={},QM=/^[\d.\-M][\d.\-,\s]/,tS=/["']/g,eS=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(tS,"").trim():+c,r=l.substr(a+1).trim();return e},nS=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},iS=function(t){var e=(t+"").split("("),i=Zt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[eS(e[1])]:nS(t).split(",").map(x_)):Zt._CE&&QM.test(t)?Zt._CE("",t):i},rS=function(t){return function(e){return 1-t(1-e)}},is=function(t,e){return t&&(Re(t)?t:Zt[t]||iS(t))||e},cs=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},o;return xn(t,function(a){Zt[a]=Nn[a]=s,Zt[o=a.toLowerCase()]=i;for(var l in s)Zt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[a+"."+l]=s[l]}),s},F_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},hc=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/cu*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*RM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:F_(a);return s=cu/s,l.config=function(c,u){return n(t,c,u)},l},fc=function n(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:F_(i);return r.config=function(s){return n(t,s)},r};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;cs(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;cs("Elastic",hc("in"),hc("out"),hc());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(a){return a<e?n*a*a:a<i?n*Math.pow(a-1.5/t,2)+.75:a<r?n*(a-=2.25/t)*a+.9375:n*Math.pow(a-2.625/t,2)+.984375};cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);cs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});cs("Circ",function(n){return-(c_(1-n*n)-1)});cs("Sine",function(n){return n===1?1:-wM(n*TM)+1});cs("Back",fc("in"),fc("out"),fc());Zt.SteppedEase=Zt.steps=Nn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,o=1-pe;return function(a){return((r*ca(0,o,a)|0)+s)*i}}};Ko.ease=Zt["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Bh+=n+","+n+"Params,"});var B_=function(t,e){this.id=AM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:g_,this.set=e?e.getSetter:Wh},ta=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,eo(this,+e.duration,1,1),this.data=e.data,xe&&(this._ctx=xe,xe.data.push(this)),Qo||Rn.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,eo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(no(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hl(this,i),!s._dp||s.parent||S_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),v_(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+md(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+md(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?to(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-pe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?vl(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-pe?0:this._rts,this.totalTime(ca(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),zl(this),BM(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(no(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pe&&(this._tTime-=pe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=ye(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vl(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=UM);var r=je;return je=i,zh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),je=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,_d(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,_d(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(Hn(this,i),vn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,vn(r)),this._dur||(this._zTime=-pe),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-pe,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-pe)},t.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Re(i)?i:y_,l=function(){var u=r.then;r.then=null,s&&s(),Re(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Ao(this)},n})();On(ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pe,_prom:0,_ps:!1,_rts:1});var gn=(function(n){l_(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=vn(i.sortChildren),Me&&gi(i.parent||Me,Fi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&E_(Fi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return zo(0,arguments,this),this},e.from=function(r,s,o){return zo(1,arguments,this),this},e.fromTo=function(r,s,o,a){return zo(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ne(r,s,Hn(this,o),1),this},e.call=function(r,s,o){return gi(this,Ne.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ne(r,o,Hn(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ko(o).immediateRender=vn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,ko(a).immediateRender=vn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ye(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,d,g,_,m,p,S,E,v,R,I,w;if(this!==Me&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,v=this._start,E=this._ts,p=!E,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=ye(u%m),u===l?(_=this._repeat,f=c):(R=ye(u/m),_=~~R,_&&_===R&&(f=c,_--),f>c&&(f=c)),R=to(this._tTime,m),!a&&this._tTime&&R!==_&&this._tTime-R*m-this._dur<=0&&(R=_),I&&_&1&&(f=c-f,w=1),_!==R&&!this._lock){var P=I&&R&1,x=P===(I&&_&1);if(_<R&&(P=!P),a=P?0:u%c?c:u,this._lock=1,this.render(a||(w?0:ye(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,R=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=VM(this,ye(a),ye(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!R&&(Pn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=-pe);break}}d=g}else{d=this._last;for(var M=r<0?r:f;d;){if(g=d._prev,(d._act||M<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(M-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(M-d._start)*d._ts,s,o||je&&zh(d)),f!==this._time||!this._ts&&!p){S=0,g&&(u+=this._zTime=M?-pe:pe);break}}d=g}}if(S&&!s&&(this.pause(),S.render(f>=a?0:-pe)._zTime=f>=a?1:-1,this._ts))return this._start=v,zl(this),this.render(r,s,o);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(ji(s)||(s=Hn(this,s,r)),!(r instanceof ta)){if(en(r))return r.forEach(function(a){return o.add(a,s)}),this;if(We(r))return this.addLabel(r,s);if(Re(r))r=Ne.delayedCall(0,r);else return this}return this!==r?gi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Wn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ne?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return We(r)?this.removeLabel(r):Re(r)?this.killTweensOf(r):(r.parent===this&&kl(this,r),r===this._recent&&(this._recent=this._last),ns(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(Rn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=Hn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Ne.delayedCall(0,s||Zo,o);return a.data="isPause",this._hasPause=1,gi(this,a,Hn(this,r))},e.removePause=function(r){var s=this._first;for(r=Hn(this,r);s;)s._start===r&&s.data==="isPause"&&Sr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)pr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=Xn(r),l=this._first,c=ji(s),u;l;)l instanceof Ne?NM(l._targets,a)&&(c?(!pr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=Hn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,g=Ne.to(o,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||pe,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&eo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,On({startAt:{time:Hn(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),gd(this,Hn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),gd(this,Hn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pe)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=ye(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ns(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ns(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=Wn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=ye(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;eo(o,o===Me&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Me._ts&&(v_(Me,vl(r,Me)),__=Rn.frame),Rn.frame>=dd){dd+=Ln.autoSleep||120;var s=Me._first;if((!s||!s._ts)&&Ln.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},t})(ta);On(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sS=function(t,e,i,r,s,o,a){var l=new yn(this._pt,t,e,0,1,W_,null,s),c=0,u=0,h,f,d,g,_,m,p,S;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Jo(r)),o&&(S=[i,r],o(S,t,e),i=S[0],r=S[1]),f=i.match(lc)||[];h=lc.exec(r);)g=h[0],_=r.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Vs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=lc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(f_.test(r)||p)&&(l.e=0),this._pt=l,l},Hh=function(t,e,i,r,s,o,a,l,c,u){Re(r)&&(r=r(s||0,t,o));var h=t[e],f=i!=="get"?i:Re(h)?c?t[e.indexOf("set")||!Re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Re(h)?c?uS:V_:Gh,g;if(We(r)&&(~r.indexOf("random(")&&(r=Jo(r)),r.charAt(1)==="="&&(g=Vs(f,r)+(tn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||gu)return!isNaN(f*r)&&r!==""?(g=new yn(this._pt,t,e,+f||0,r-(f||0),typeof h=="boolean"?fS:G_,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&Oh(e,r),sS.call(this,t,e,f,r,d,l||Ln.stringFilter,c))},oS=function(t,e,i,r,s){if(Re(t)&&(t=Ho(t,s,e,i,r)),!Ti(t)||t.style&&t.nodeType||en(t)||u_(t))return We(t)?Ho(t,s,e,i,r):t;var o={},a;for(a in t)o[a]=Ho(t[a],s,e,i,r);return o},k_=function(t,e,i,r,s,o){var a,l,c,u;if(wn[t]&&(a=new wn[t]).init(s,a.rawVars?e[t]:oS(e[t],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new yn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Ns))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},pr,gu,Vh=function n(t,e,i){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,f=r.keyframes,d=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!Ih,v=t.timeline,R=r.easeReverse||h,I,w,P,x,M,D,B,N,Y,Z,G,V,z;if(v&&(!f||!s)&&(s="none"),t._ease=is(s,Ko.ease),t._rEase=R&&(is(R)||t._ease),t._from=!v&&!!r.runBackwards,t._from&&(t.ratio=1),!v||f&&!r.stagger){if(N=m[0]?es(m[0]).harness:0,V=N&&r[N.prop],I=gl(r,Fh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Ka:LM),_._lazy=0),o){if(Sr(t._startAt=Ne.set(m,On({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&vn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je||!a&&!d)&&t._startAt.revert(Ka),a&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),P=On({overwrite:!1,data:"isFromStart",lazy:a&&!_&&vn(l),immediateRender:a,stagger:0,parent:p},I),V&&(P[N.prop]=V),Sr(t._startAt=Ne.set(m,P)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(je?t._startAt.revert(Ka):t._startAt.render(-1,!0)),t._zTime=e,!a)n(t._startAt,pe,pe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&vn(l)||l&&!g,w=0;w<m.length;w++){if(M=m[w],B=M._gsap||kh(m)[w]._gsap,t._ptLookup[w]=Z={},hu[B.id]&&gr.length&&_l(),G=S===m?w:S.indexOf(M),N&&(Y=new N).init(M,V||I,t,G,S)!==!1&&(t._pt=x=new yn(t._pt,M,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(ft){Z[ft]=x}),Y.priority&&(D=1)),!N||V)for(P in I)wn[P]&&(Y=k_(P,I,t,G,M,S))?Y.priority&&(D=1):Z[P]=x=Hh.call(t,M,P,"get",I[P],G,S,0,r.stringFilter);t._op&&t._op[w]&&t.kill(M,t._op[w]),E&&t._pt&&(pr=t,Me.killTweensOf(M,Z,t.globalTime(e)),z=!t.parent,pr=0),t._pt&&l&&(hu[B.id]=1)}D&&X_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,f&&e<=0&&v.render(Wn,!0,!0)},aS=function(t,e,i,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return gu=1,t.vars[e]="+=0",Vh(t,a),gu=0,l?$o(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=De(i)+tn(h.e)),h.b&&(h.b=u.s+tn(h.b))},lS=function(t,e){var i=t[0]?es(t[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return e;s=Qs({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},cS=function(t,e,i,r){var s=e.ease||r||"power1.inOut",o,a;if(en(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Ho=function(t,e,i,r,s){return Re(t)?t.call(e,i,r,s):We(t)&&~t.indexOf("random(")?Jo(t):t},z_=Bh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",H_={};xn(z_+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return H_[n]=1});var Ne=(function(n){l_(t,n);function t(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ko(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||Me,S=(en(i)||u_(i)?ji(i[0]):"length"in r)?[i]:Xn(i),E,v,R,I,w,P,x,M;if(a._targets=S.length?kh(S):$o("GSAP target "+i+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ma(c)||Ma(u)){r=a.vars;var D=r.easeReverse||r.yoyoEase;if(E=a.timeline=new gn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:S}),E.kill(),E.parent=E._dp=Fi(a),E._start=0,f||Ma(c)||Ma(u)){if(I=S.length,x=f&&w_(f),Ti(f))for(w in f)~z_.indexOf(w)&&(M||(M={}),M[w]=f[w]);for(v=0;v<I;v++)R=gl(r,H_),R.stagger=0,D&&(R.easeReverse=D),M&&Qs(R,M),P=S[v],R.duration=+Ho(c,Fi(a),v,P,S),R.delay=(+Ho(u,Fi(a),v,P,S)||0)-a._delay,!f&&I===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),E.to(P,R,x?x(v,P,S):0),E._ease=Zt.none;E.duration()?c=u=0:a.timeline=0}else if(g){ko(On(E.vars.defaults,{ease:"none"})),E._ease=is(g.ease||r.ease||"none");var B=0,N,Y,Z;if(en(g))g.forEach(function(G){return E.to(S,G,">")}),E.duration();else{R={};for(w in g)w==="ease"||w==="easeEach"||cS(w,g[w],R,g.easeEach);for(w in R)for(N=R[w].sort(function(G,V){return G.t-V.t}),B=0,v=0;v<N.length;v++)Y=N[v],Z={ease:Y.e,duration:(Y.t-(v?N[v-1].t:0))/100*c},Z[w]=Y.v,E.to(S,Z,B),B+=Z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return d===!0&&!Ih&&(pr=Fi(a),Me.killTweensOf(S),pr=0),gi(p,Fi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===ye(p._time)&&vn(h)&&kM(Fi(a))&&p.data!=="nested")&&(a._tTime=-pe,a.render(Math.max(0,-u)||0)),m&&E_(Fi(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-pe&&!u?l:r<pe?0:r,f,d,g,_,m,p,S,E;if(!c)HM(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(f=ye(h%_),h===l?(g=this._repeat,f=c):(m=ye(h/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=to(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(ye(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(b_(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var R=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=R?(v?-1:1)/R:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(Pn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&fu(this,r,s,o),Pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&fu(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Sr(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Pn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Qo||Rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Vh(this,c),u=this._ease(c/this._dur),aS(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Hl(this,0),this.parent||M_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ao(this):this.scrollTrigger&&this.scrollTrigger.kill(!!je),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,pr&&pr.vars.overwrite!==!0)._first||Ao(this),this.parent&&o!==this.timeline.totalDuration()&&eo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Xn(r):a,c=this._ptLookup,u=this._pt,h,f,d,g,_,m,p;if((!s||s==="all")&&FM(a,l))return s==="all"&&(this._pt=0),Ao(this);for(h=this._op=this._op||[],s!=="all"&&(We(s)&&(_={},xn(s,function(S){return _[S]=1}),s=_),s=lS(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,g=f,d={}):(d=h[p]=h[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&kl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ao(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return zo(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return zo(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Me.killTweensOf(r,s,o)},t})(ta);On(Ne.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(n){Ne[n]=function(){var t=new gn,e=pu.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var Gh=function(t,e,i){return t[e]=i},V_=function(t,e,i){return t[e](i)},uS=function(t,e,i,r){return t[e](r.fp,i)},hS=function(t,e,i){return t.setAttribute(e,i)},Wh=function(t,e){return Re(t[e])?V_:Lh(t[e])&&t.setAttribute?hS:Gh},G_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},fS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},W_=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Xh=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},dS=function(t,e,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,i),s=o},pS=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?kl(this,e,"_pt"):e.dep||(i=1),e=r;return!i},mS=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},X_=function(t){for(var e=t._pt,i,r,s,o;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=i}t._pt=s},yn=(function(){function n(e,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||G_,this.d=l||this,this.set=c||Gh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=mS,this.m=i,this.mt=s,this.tween=r},n})();xn(Bh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return Fh[n]=1});Nn.TweenMax=Nn.TweenLite=Ne;Nn.TimelineLite=Nn.TimelineMax=gn;Me=new gn({sortChildren:!1,defaults:Ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=O_;var rs=[],Za={},_S=[],xd=0,gS=0,dc=function(t){return(Za[t]||_S).map(function(e){return e()})},vu=function(){var t=Date.now(),e=[];t-xd>2&&(dc("matchMediaInit"),rs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=fi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),dc("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),xd=t,dc("matchMedia"))},q_=(function(){function n(e,i){this.selector=i&&mu(i),this.data=[],this._r=[],this.isReverted=!1,this.id=gS++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){Re(i)&&(s=r,r=i,i=Re);var o=this,a=function(){var c=xe,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=mu(s)),xe=o,h=r.apply(o,arguments),Re(h)&&o._r.push(h),xe=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===Re?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var r=xe;xe=null,i(this),xe=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ne&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ne)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=rs.length;o--;)rs[o].id===this.id&&rs.splice(o,1)},t.revert=function(i){this.kill(i||{})},n})(),vS=(function(){function n(e){this.contexts=[],this.scope=e,xe&&xe.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){Ti(i)||(i={matches:i});var o=new q_(0,s||this.scope),a=o.conditions={},l,c,u;xe&&!o.selector&&(o.selector=xe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=fi.matchMedia(i[c]),l&&(rs.indexOf(o)<0&&rs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(vu):l.addEventListener("change",vu)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),xl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return L_(r)})},timeline:function(t){return new gn(t)},getTweensOf:function(t,e){return Me.getTweensOf(t,e)},getProperty:function(t,e,i,r){We(t)&&(t=Xn(t)[0]);var s=es(t||{}).get,o=i?y_:x_;return i==="native"&&(i=""),t&&(e?o((wn[e]&&wn[e].get||s)(t,e,i,r)):function(a,l,c){return o((wn[a]&&wn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Xn(t),t.length>1){var r=t.map(function(u){return En.quickSetter(u,e,i)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=wn[e],a=es(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Ns._pt=0,h.init(t,i?u+i:u,Ns,0,[t]),h.render(1,h),Ns._pt&&Xh(1,Ns)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var r,s=En.to(t,On((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Me.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=is(t.ease,Ko.ease)),pd(Ko,t||{})},config:function(t){return pd(Ln,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!wn[a]&&!Nn[a]&&$o(e+" effect requires "+a+" plugin.")}),cc[e]=function(a,l,c){return i(Xn(a),On(l||{},s),c)},o&&(gn.prototype[e]=function(a,l,c){return this.add(cc[e](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=is(e)},parseEase:function(t,e){return arguments.length?is(t,e):Zt},getById:function(t){return Me.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new gn(t),r,s;for(i.smoothChildTiming=vn(t.smoothChildTiming),Me.remove(i),i._dp=0,i._time=i._tTime=Me._time,r=Me._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Ne&&r.vars.onComplete===r._targets[0]))&&gi(i,r,r._start-r._delay),r=s;return gi(Me,i,0),i},context:function(t,e){return t?new q_(t,e):xe},matchMedia:function(t){return new vS(t)},matchMediaRefresh:function(){return rs.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||vu()},addEventListener:function(t,e){var i=Za[t]||(Za[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Za[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:KM,wrapYoyo:$M,distribute:w_,random:C_,snap:R_,normalize:jM,getUnit:tn,clamp:WM,splitColor:U_,toArray:Xn,selector:mu,mapRange:D_,pipe:qM,unitize:YM,interpolate:ZM,shuffle:A_},install:p_,effects:cc,ticker:Rn,updateRoot:gn.updateRoot,plugins:wn,globalTimeline:Me,core:{PropTween:yn,globals:m_,Tween:Ne,Timeline:gn,Animation:ta,getCache:es,_removeLinkedListItem:kl,reverting:function(){return je},context:function(t){return t&&xe&&(xe.data.push(t),t._ctx=xe),xe},suppressOverwrites:function(t){return Ih=t}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return xl[n]=Ne[n]});Rn.add(gn.updateRoot);Ns=xl.to({},{duration:0});var xS=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},yS=function(t,e){var i=t._targets,r,s,o;for(r in e)for(s=i.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=xS(o,r)),o&&o.modifier&&o.modifier(e[r],t,i[s],r))},pc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(We(s)&&(l={},xn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}yS(a,s)}}}},En=xl.registerPlugin({name:"attr",init:function(t,e,i,r,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)je?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},pc("roundProps",_u),pc("modifiers"),pc("snap",R_))||xl;Ne.version=gn.version=En.version="3.15.0";d_=1;Uh()&&no();Zt.Power0;Zt.Power1;Zt.Power2;Zt.Power3;Zt.Power4;Zt.Linear;Zt.Quad;Zt.Cubic;Zt.Quart;Zt.Quint;Zt.Strong;Zt.Elastic;Zt.Back;Zt.SteppedEase;Zt.Bounce;Zt.Sine;Zt.Expo;Zt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yd,mr,Gs,qh,jr,Md,Yh,MS=function(){return typeof window<"u"},Ki={},Gr=180/Math.PI,Ws=Math.PI/180,_s=Math.atan2,Sd=1e8,jh=/([A-Z])/g,SS=/(left|right|width|margin|padding|x)/i,ES=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},xu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},bS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},TS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},AS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},wS=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Y_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},j_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},RS=function(t,e,i){return t.style[e]=i},CS=function(t,e,i){return t.style.setProperty(e,i)},PS=function(t,e,i){return t._gsap[e]=i},DS=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},IS=function(t,e,i,r,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},LS=function(t,e,i,r,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Se="transform",Mn=Se+"Origin",US=function n(t,e){var i=this,r=this.target,s=r.style,o=r._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=ki(r,a)}):this.tfm[t]=o.x?o[t]:ki(r,t),t===Mn&&(this.tfm.zOrigin=o.zOrigin);else return xi.transform.split(",").forEach(function(a){return n.call(i,a,e)});if(this.props.indexOf(Se)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Mn,e,"")),t=Se}(s||e)&&this.props.push(t,e,s[t])},K_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},NS=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(jh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Yh(),(!s||!s.isStart)&&!i[Se]&&(K_(i),r.zOrigin&&i[Mn]&&(i[Mn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},$_=function(t,e){var i={target:t,props:[],revert:NS,save:US};return t._gsap||En.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Z_,yu=function(t,e){var i=mr.createElementNS?mr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mr.createElement(t);return i&&i.style?i:mr.createElement(t)},Dn=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(jh,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,io(e)||e,1)||""},Ed="O,Moz,ms,Ms,Webkit".split(","),io=function(t,e,i){var r=e||jr,s=r.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ed[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ed[o]:"")+t},Mu=function(){MS()&&window.document&&(yd=window,mr=yd.document,Gs=mr.documentElement,jr=yu("div")||{style:{}},yu("div"),Se=io(Se),Mn=Se+"Origin",jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Z_=!!io("perspective"),Yh=En.core.reverting,qh=1)},bd=function(t){var e=t.ownerSVGElement,i=yu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Gs.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Gs.removeChild(i),s},Td=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},J_=function(t){var e,i;try{e=t.getBBox()}catch{e=bd(t),i=1}return e&&(e.width||e.height)||i||(e=bd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Td(t,["x","cx","x1"])||0,y:+Td(t,["y","cy","y1"])||0,width:0,height:0}:e},Q_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&J_(t))},Er=function(t,e){if(e){var i=t.style,r;e in Ki&&e!==Mn&&(e=Se),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(jh,"-$1").toLowerCase())):i.removeAttribute(e)}},_r=function(t,e,i,r,s,o){var a=new yn(t._pt,e,i,0,1,o?j_:Y_);return t._pt=a,a.b=r,a.e=s,t._props.push(i),a},Ad={deg:1,rad:1,turn:1},OS={grid:1,flex:1},br=function n(t,e,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=jr.style,l=SS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Ad[r]||Ad[o])return s;if(o!=="px"&&!f&&(s=n(t,e,i,"px")),p=t.getCTM&&Q_(t),(d||o==="%")&&(Ki[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[u],De(d?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===mr||!_.appendChild)&&(_=mr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Rn.time&&!m.uncache)return De(s/m.width*h);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=h+r,g=t[u],S?t.style[e]=S:Er(t,e)}else(d||o==="%")&&!OS[Dn(_,"display")]&&(a.position=Dn(t,"position")),_===t&&(a.position="static"),_.appendChild(jr),g=jr[u],_.removeChild(jr),a.position="absolute";return l&&d&&(m=es(_),m.time=Rn.time,m.width=_[u]),De(f?g*s/h:g&&s?h/g*s:0)},ki=function(t,e,i,r){var s;return qh||Mu(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=na(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ml(Dn(t,Mn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yl[e]&&yl[e](t,e,i)||Dn(t,e)||g_(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?br(t,e,s,i)+i:s},FS=function(t,e,i,r){if(!i||i==="none"){var s=io(e,t,1),o=s&&Dn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Dn(t,"borderTopColor"))}var a=new yn(this._pt,t.style,e,0,1,W_),l=0,c=0,u,h,f,d,g,_,m,p,S,E,v,R;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Dn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=Dn(t,e)||r,_?t.style[e]=_:Er(t,e)),u=[i,r],O_(u),i=u[0],r=u[1],f=i.match(Us)||[],R=r.match(Us)||[],R.length){for(;h=Us.exec(r);)m=h[0],S=r.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Vs(d,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=Us.lastIndex-E.length,E||(E=E||Ln.units[e]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(d=br(t,e,_,E)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?j_:Y_;return f_.test(r)&&(a.e=0),this._pt=a,a},wd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},BS=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=wd[i]||i,e[1]=wd[r]||r,e.join(" ")},kS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?Mn:Se),Er(i,a);l&&(Er(i,Se),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",na(i,1),o.uncache=1,K_(r)))}},yl={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var o=t._pt=new yn(t._pt,e,i,0,0,kS);return o.u=r,o.pr=-10,o.tween=s,t._props.push(i),1}}},ea=[1,0,0,1,0,0],tg={},eg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Rd=function(t){var e=Dn(t,Se);return eg(e)?ea:e.substr(7).match(h_).map(De)},Kh=function(t,e){var i=t._gsap||es(t),r=t.style,s=Rd(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ea:s):(s===ea&&!t.offsetParent&&t!==Gs&&!i.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Gs.appendChild(t)),s=Rd(t),l?r.display=l:Er(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Gs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Su=function(t,e,i,r,s,o){var a=t._gsap,l=s||Kh(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],S=l[5],E=e.split(" "),v=parseFloat(E[0])||0,R=parseFloat(E[1])||0,I,w,P,x;i?l!==ea&&(w=d*m-g*_)&&(P=v*(m/w)+R*(-_/w)+(_*S-m*p)/w,x=v*(-g/w)+R*(d/w)-(d*S-g*p)/w,v=P,R=x):(I=J_(t),v=I.x+(~E[0].indexOf("%")?v/100*I.width:v),R=I.y+(~(E[1]||E[0]).indexOf("%")?R/100*I.height:R)),r||r!==!1&&a.smooth?(p=v-c,S=R-u,a.xOffset=h+(p*d+S*_)-p,a.yOffset=f+(p*g+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=R,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!i,t.style[Mn]="0px 0px",o&&(_r(o,a,"xOrigin",c,v),_r(o,a,"yOrigin",u,R),_r(o,a,"xOffset",h,a.xOffset),_r(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+R)},na=function(t,e){var i=t._gsap||new B_(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Dn(t,Mn)||"0",u,h,f,d,g,_,m,p,S,E,v,R,I,w,P,x,M,D,B,N,Y,Z,G,V,z,ft,_t,yt,wt,Gt,et,ut;return u=h=f=_=m=p=S=E=v=0,d=g=1,i.svg=!!(t.getCTM&&Q_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Se]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Se]!=="none"?l[Se]:"")),r.scale=r.rotate=r.translate="none"),w=Kh(t,i.svg),i.svg&&(i.uncache?(z=t.getBBox(),c=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),Su(t,V||c,!!V||i.originIsAbsolute,i.smooth!==!1,w)),R=i.xOrigin||0,I=i.yOrigin||0,w!==ea&&(D=w[0],B=w[1],N=w[2],Y=w[3],u=Z=w[4],h=G=w[5],w.length===6?(d=Math.sqrt(D*D+B*B),g=Math.sqrt(Y*Y+N*N),_=D||B?_s(B,D)*Gr:0,S=N||Y?_s(N,Y)*Gr+_:0,S&&(g*=Math.abs(Math.cos(S*Ws))),i.svg&&(u-=R-(R*D+I*N),h-=I-(R*B+I*Y))):(ut=w[6],Gt=w[7],_t=w[8],yt=w[9],wt=w[10],et=w[11],u=w[12],h=w[13],f=w[14],P=_s(ut,wt),m=P*Gr,P&&(x=Math.cos(-P),M=Math.sin(-P),V=Z*x+_t*M,z=G*x+yt*M,ft=ut*x+wt*M,_t=Z*-M+_t*x,yt=G*-M+yt*x,wt=ut*-M+wt*x,et=Gt*-M+et*x,Z=V,G=z,ut=ft),P=_s(-N,wt),p=P*Gr,P&&(x=Math.cos(-P),M=Math.sin(-P),V=D*x-_t*M,z=B*x-yt*M,ft=N*x-wt*M,et=Y*M+et*x,D=V,B=z,N=ft),P=_s(B,D),_=P*Gr,P&&(x=Math.cos(P),M=Math.sin(P),V=D*x+B*M,z=Z*x+G*M,B=B*x-D*M,G=G*x-Z*M,D=V,Z=z),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=De(Math.sqrt(D*D+B*B+N*N)),g=De(Math.sqrt(G*G+ut*ut)),P=_s(Z,G),S=Math.abs(P)>2e-4?P*Gr:0,v=et?1/(et<0?-et:et):0),i.svg&&(V=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!eg(Dn(t,Se)),V&&t.setAttribute("transform",V))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=De(d),i.scaleY=De(g),i.rotation=De(_)+a,i.rotationX=De(m)+a,i.rotationY=De(p)+a,i.skewX=S+a,i.skewY=E+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[Mn]=Ml(c)),i.xOffset=i.yOffset=0,i.force3D=Ln.force3D,i.renderTransform=i.svg?HS:Z_?ng:zS,i.uncache=0,i},Ml=function(t){return(t=t.split(" "))[0]+" "+t[1]},mc=function(t,e,i){var r=tn(e);return De(parseFloat(e)+parseFloat(br(t,"x",i+"px",r)))+r},zS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ng(t,e)},Lr="0deg",vo="0px",Ur=") ",ng=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,S=i.target,E=i.zOrigin,v="",R=p==="auto"&&t&&t!==1||p===!0;if(E&&(h!==Lr||u!==Lr)){var I=parseFloat(u)*Ws,w=Math.sin(I),P=Math.cos(I),x;I=parseFloat(h)*Ws,x=Math.cos(I),o=mc(S,o,w*x*-E),a=mc(S,a,-Math.sin(I)*-E),l=mc(S,l,P*x*-E+E)}m!==vo&&(v+="perspective("+m+Ur),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(R||o!==vo||a!==vo||l!==vo)&&(v+=l!==vo||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ur),c!==Lr&&(v+="rotate("+c+Ur),u!==Lr&&(v+="rotateY("+u+Ur),h!==Lr&&(v+="rotateX("+h+Ur),(f!==Lr||d!==Lr)&&(v+="skew("+f+", "+d+Ur),(g!==1||_!==1)&&(v+="scale("+g+", "+_+Ur),S.style[Se]=v||"translate(0, 0)"},HS=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,S=i.forceCSS,E=parseFloat(o),v=parseFloat(a),R,I,w,P,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ws,c*=Ws,R=Math.cos(l)*h,I=Math.sin(l)*h,w=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(u*=Ws,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,P*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),R*=x,I*=x)),R=De(R),I=De(I),w=De(w),P=De(P)):(R=h,P=f,I=w=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=br(d,"x",o,"px"),v=br(d,"y",a,"px")),(g||_||m||p)&&(E=De(E+g-(g*R+_*w)+m),v=De(v+_-(g*I+_*P)+p)),(r||s)&&(x=d.getBBox(),E=De(E+r/100*x.width),v=De(v+s/100*x.height)),x="matrix("+R+","+I+","+w+","+P+","+E+","+v+")",d.setAttribute("transform",x),S&&(d.style[Se]=x)},VS=function(t,e,i,r,s){var o=360,a=We(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Gr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Sd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Sd)%o-~~(c/o)*o)),t._pt=f=new yn(t._pt,e,i,r,c,bS),f.e=u,f.u="deg",t._props.push(i),f},Cd=function(t,e){for(var i in e)t[i]=e[i];return t},GS=function(t,e,i){var r=Cd({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Se]=e,a=na(i,1),Er(i,Se),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Se],o[Se]=e,a=na(i,1),o[Se]=c);for(l in Ki)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=tn(c),g=tn(u),h=d!==g?br(i,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new yn(t._pt,a,l,h,f-h,xu),t._pt.u=g||0,t._props.push(l));Cd(a,r)};xn("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",o=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(a){return t<2?n+a:"border"+a+n});yl[t>1?"border"+n:n]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(g){return ki(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var ig={name:"css",register:Mu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,h,f,d,g,_,m,p,S,E,v,R,I,w,P,x;qh||Mu(),this.styles=this.styles||$_(t),P=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(wn[_]&&k_(_,e,i,r,t,s)))){if(d=typeof u,g=yl[_],d==="function"&&(u=u.call(i,r,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Jo(u)),g)g(this,t,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",vr.lastIndex=0,vr.test(c)||(m=tn(c),p=tn(u),p?m!==p&&(c=br(t,_,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],We(c)&&~c.indexOf("random(")&&(c=Jo(c)),tn(c+"")||c==="auto"||(c+=Ln.units[_]||tn(ki(t,_))||""),(c+"").charAt(1)==="="&&(c=ki(t,_))):c=ki(t,_),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),_ in xi&&(_==="autoAlpha"&&(f===1&&ki(t,"visibility")==="hidden"&&h&&(f=0),P.push("visibility",0,a.visibility),_r(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=xi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Ki,E){if(this.styles.save(_),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Dn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var M=t.style.perspective;t.style.perspective=u,u=Dn(t,"perspective"),M?t.style.perspective=M:Er(t,"perspective")}h=parseFloat(u)}if(v||(R=t._gsap,R.renderTransform&&!e.parseTransform||na(t,e.parseTransform),I=e.smoothOrigin!==!1&&R.smooth,v=this._pt=new yn(this._pt,a,Se,0,1,R.renderTransform,R,0,-1),v.dep=1),_==="scale")this._pt=new yn(this._pt,R,"scaleY",R.scaleY,(S?Vs(R.scaleY,S+h):h)-R.scaleY||0,xu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Mn,0,a[Mn]),u=BS(u),R.svg?Su(t,u,0,I,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==R.zOrigin&&_r(this,R,"zOrigin",R.zOrigin,p),_r(this,a,_,Ml(c),Ml(u)));continue}else if(_==="svgOrigin"){Su(t,u,1,I,0,this);continue}else if(_ in tg){VS(this,R,_,f,S?Vs(f,S+u):u);continue}else if(_==="smoothOrigin"){_r(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){GS(this,u,t);continue}}else _ in a||(_=io(_)||_);if(E||(h||h===0)&&(f||f===0)&&!ES.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),p=tn(u)||(_ in Ln.units?Ln.units[_]:m),m!==p&&(f=br(t,_,c,p)),this._pt=new yn(this._pt,E?R:a,_,f,(S?Vs(f,S+h):h)-f,!E&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?wS:xu),this._pt.u=p||0,E&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=AS):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=TS);else if(_ in a)FS.call(this,t,_,c,S?S+u:u);else if(_ in t)this.add(t,_,c||t[_],S?S+u:u,r,s);else if(_!=="parseTransform"){Oh(_,u);continue}E||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),o.push(_)}}w&&X_(this)},render:function(t,e){if(e.tween._time||!Yh())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:ki,aliases:xi,getSetter:function(t,e,i){var r=xi[e];return r&&r.indexOf(",")<0&&(e=r),e in Ki&&e!==Mn&&(t._gsap.x||ki(t,"x"))?i&&Md===i?e==="scale"?DS:PS:(Md=i||{})&&(e==="scale"?IS:LS):t.style&&!Lh(t.style[e])?RS:~e.indexOf("-")?CS:Wh(t,e)},core:{_removeProperty:Er,_getMatrix:Kh}};En.utils.checkPrefix=io;En.core.getStyleSaver=$_;(function(n,t,e,i){var r=xn(n+","+t+","+e,function(s){Ki[s]=1});xn(t,function(s){Ln.units[s]="deg",tg[s]=1}),xi[r[13]]=n+","+t,xn(i,function(s){var o=s.split(":");xi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ln.units[n]="px"});En.registerPlugin(ig);var Ro=En.registerPlugin(ig)||En;Ro.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="171",Xs={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},WS=0,Pd=1,XS=2,rg=1,sg=2,Ni=3,Tr=0,Sn=1,Hi=2,xr=0,qs=1,Dd=2,Id=3,Ld=4,qS=5,Xr=100,YS=101,jS=102,KS=103,$S=104,ZS=200,JS=201,QS=202,tE=203,Eu=204,bu=205,eE=206,nE=207,iE=208,rE=209,sE=210,oE=211,aE=212,lE=213,cE=214,Tu=0,Au=1,wu=2,ro=3,Ru=4,Cu=5,Pu=6,Du=7,og=0,uE=1,hE=2,yr=0,fE=1,dE=2,pE=3,ag=4,mE=5,_E=6,gE=7,lg=300,so=301,oo=302,Iu=303,Lu=304,Vl=306,Uu=1e3,Kr=1001,Nu=1002,ii=1003,vE=1004,Sa=1005,yi=1006,_c=1007,$r=1008,$i=1009,cg=1010,ug=1011,ia=1012,Zh=1013,ss=1014,Vi=1015,ua=1016,Jh=1017,Qh=1018,ao=1020,hg=35902,fg=1021,dg=1022,ti=1023,pg=1024,mg=1025,Ys=1026,lo=1027,_g=1028,tf=1029,gg=1030,ef=1031,nf=1033,Ja=33776,Qa=33777,tl=33778,el=33779,Ou=35840,Fu=35841,Bu=35842,ku=35843,zu=36196,Hu=37492,Vu=37496,Gu=37808,Wu=37809,Xu=37810,qu=37811,Yu=37812,ju=37813,Ku=37814,$u=37815,Zu=37816,Ju=37817,Qu=37818,th=37819,eh=37820,nh=37821,nl=36492,ih=36494,rh=36495,vg=36283,sh=36284,oh=36285,ah=36286,xE=3200,yE=3201,xg=0,ME=1,dr="",_n="srgb",co="srgb-linear",Sl="linear",ue="srgb",gs=7680,Ud=519,SE=512,EE=513,bE=514,yg=515,TE=516,AE=517,wE=518,RE=519,Nd=35044,Od="300 es",Gi=2e3,El=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,lh=180/Math.PI;function ha(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Kt(n,t,e){return Math.max(t,Math.min(e,n))}function CE(n,t){return(n%t+t)%t}function gc(n,t,e){return(1-e)*n+e*t}function xo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const PE={DEG2RAD:il};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,i,r,s,o,a,l,c){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],E=r[4],v=r[7],R=r[2],I=r[5],w=r[8];return s[0]=o*_+a*S+l*R,s[3]=o*m+a*E+l*I,s[6]=o*p+a*v+l*w,s[1]=c*_+u*S+h*R,s[4]=c*m+u*E+h*I,s[7]=c*p+u*v+h*w,s[2]=f*_+d*S+g*R,s[5]=f*m+d*E+g*I,s[8]=f*p+d*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(vc.makeScale(t,e)),this}rotate(t){return this.premultiply(vc.makeRotation(-t)),this}translate(t,e){return this.premultiply(vc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vc=new qt;function Mg(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function bl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DE(){const n=bl("canvas");return n.style.display="block",n}const Fd={};function Ls(n){n in Fd||(Fd[n]=!0,console.warn(n))}function IE(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}function LE(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function UE(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bd=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kd=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NE(){const n={enabled:!0,workingColorSpace:co,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ue&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(r.r=js(r.r),r.g=js(r.g),r.b=js(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dr?Sl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[co]:{primaries:t,whitePoint:i,transfer:Sl,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:Bd,fromXYZ:kd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),n}const ee=NE();function qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class OE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=bl("canvas")),vs.width=t.width,vs.height=t.height;const i=vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=bl("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qi(e[i]/255)*255):e[i]=qi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FE=0;class Sg{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=ha(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xc(r[o].image)):s.push(xc(r[o]))}else s=xc(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BE=0;class hn extends us{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,i=Kr,r=Kr,s=yi,o=$r,a=ti,l=$i,c=hn.DEFAULT_ANISOTROPY,u=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=ha(),this.name="",this.source=new Sg(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Uu:t.x=t.x-Math.floor(t.x);break;case Kr:t.x=t.x<0?0:1;break;case Nu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Uu:t.y=t.y-Math.floor(t.y);break;case Kr:t.y=t.y<0?0:1;break;case Nu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=lg;hn.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,r=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(d+1)/2,R=(p+1)/2,I=(u+f)/4,w=(h+_)/4,P=(g+m)/4;return E>v&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=I/i,s=w/i):v>R?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=I/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=P/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-_)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kE extends us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const r={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Sg(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends kE{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Eg extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends hn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const R=Math.sqrt(E),I=Math.atan2(R,p*S);m=Math.sin(m*I)/R,a=Math.sin(a*I)/R}const v=a*S;if(l=l*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return yc.copy(this).projectOnVector(t),this.sub(yc)}reflect(t){return this.sub(yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new X,zd=new as;class fa{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ea.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ea.copy(i.boundingBox)),Ea.applyMatrix4(t.matrixWorld),this.union(Ea)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yo),ba.subVectors(this.max,yo),xs.subVectors(t.a,yo),ys.subVectors(t.b,yo),Ms.subVectors(t.c,yo),er.subVectors(ys,xs),nr.subVectors(Ms,ys),Nr.subVectors(xs,Ms);let e=[0,-er.z,er.y,0,-nr.z,nr.y,0,-Nr.z,Nr.y,er.z,0,-er.x,nr.z,0,-nr.x,Nr.z,0,-Nr.x,-er.y,er.x,0,-nr.y,nr.x,0,-Nr.y,Nr.x,0];return!Mc(e,xs,ys,Ms,ba)||(e=[1,0,0,0,1,0,0,0,1],!Mc(e,xs,ys,Ms,ba))?!1:(Ta.crossVectors(er,nr),e=[Ta.x,Ta.y,Ta.z],Mc(e,xs,ys,Ms,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new X,new X,new X,new X,new X,new X,new X,new X],$n=new X,Ea=new fa,xs=new X,ys=new X,Ms=new X,er=new X,nr=new X,Nr=new X,yo=new X,ba=new X,Ta=new X,Or=new X;function Mc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Or.fromArray(n,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=t.dot(Or),c=e.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const HE=new fa,Mo=new X,Sc=new X;class rf{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):HE.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mo.subVectors(t,this.center);const e=Mo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mo.copy(t.center).add(Sc)),this.expandByPoint(Mo.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new X,Ec=new X,Aa=new X,ir=new X,bc=new X,wa=new X,Tc=new X;class sf{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ec.copy(t).add(e).multiplyScalar(.5),Aa.copy(e).sub(t).normalize(),ir.copy(this.origin).sub(Ec);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Aa),a=ir.dot(this.direction),l=-ir.dot(Aa),c=ir.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ec).addScaledVector(Aa,f),d}intersectSphere(t,e){Di.subVectors(t.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,i,r,s){bc.subVectors(e,t),wa.subVectors(i,t),Tc.crossVectors(bc,wa);let o=this.direction.dot(Tc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,t);const l=a*this.direction.dot(wa.crossVectors(ir,wa));if(l<0)return null;const c=a*this.direction.dot(bc.cross(ir));if(c<0||l+c>o)return null;const u=-a*ir.dot(Tc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,i,r,s,o,a,l,c,u,h,f,d,g,_,m){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,h,f,d,g,_,m)}set(t,e,i,r,s,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ss.setFromMatrixColumn(t,0).length(),s=1/Ss.setFromMatrixColumn(t,1).length(),o=1/Ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VE,t,GE)}lookAt(t,e,i){const r=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),rr.crossVectors(i,Tn),rr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),rr.crossVectors(i,Tn)),rr.normalize(),Ra.crossVectors(Tn,rr),r[0]=rr.x,r[4]=Ra.x,r[8]=Tn.x,r[1]=rr.y,r[5]=Ra.y,r[9]=Tn.y,r[2]=rr.z,r[6]=Ra.z,r[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],E=i[7],v=i[11],R=i[15],I=r[0],w=r[4],P=r[8],x=r[12],M=r[1],D=r[5],B=r[9],N=r[13],Y=r[2],Z=r[6],G=r[10],V=r[14],z=r[3],ft=r[7],_t=r[11],yt=r[15];return s[0]=o*I+a*M+l*Y+c*z,s[4]=o*w+a*D+l*Z+c*ft,s[8]=o*P+a*B+l*G+c*_t,s[12]=o*x+a*N+l*V+c*yt,s[1]=u*I+h*M+f*Y+d*z,s[5]=u*w+h*D+f*Z+d*ft,s[9]=u*P+h*B+f*G+d*_t,s[13]=u*x+h*N+f*V+d*yt,s[2]=g*I+_*M+m*Y+p*z,s[6]=g*w+_*D+m*Z+p*ft,s[10]=g*P+_*B+m*G+p*_t,s[14]=g*x+_*N+m*V+p*yt,s[3]=S*I+E*M+v*Y+R*z,s[7]=S*w+E*D+v*Z+R*ft,s[11]=S*P+E*B+v*G+R*_t,s[15]=S*x+E*N+v*V+R*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+_*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-e*l*h+e*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],S=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,E=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,v=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,R=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,I=e*S+i*E+r*v+s*R;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/I;return t[0]=S*w,t[1]=(_*f*s-h*m*s-_*r*d+i*m*d+h*r*p-i*f*p)*w,t[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*w,t[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*w,t[4]=E*w,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*w,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*w,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*w,t[8]=v*w,t[9]=(g*h*s-u*_*s-g*i*d+e*_*d+u*i*p-e*h*p)*w,t[10]=(o*_*s-g*a*s+g*i*c-e*_*c-o*i*p+e*a*p)*w,t[11]=(u*a*s-o*h*s-u*i*c+e*h*c+o*i*d-e*a*d)*w,t[12]=R*w,t[13]=(u*_*r-g*h*r+g*i*f-e*_*f-u*i*m+e*h*m)*w,t[14]=(g*a*r-o*_*r-g*i*l+e*_*l+o*i*m-e*a*m)*w,t[15]=(o*h*r-u*a*r+u*i*l-e*h*l-o*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,S=l*c,E=l*u,v=l*h,R=i.x,I=i.y,w=i.z;return r[0]=(1-(_+p))*R,r[1]=(d+v)*R,r[2]=(g-E)*R,r[3]=0,r[4]=(d-v)*I,r[5]=(1-(f+p))*I,r[6]=(m+S)*I,r[7]=0,r[8]=(g+E)*w,r[9]=(m-S)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ss.set(r[0],r[1],r[2]).length();const o=Ss.set(r[4],r[5],r[6]).length(),a=Ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Zn.copy(this);const c=1/s,u=1/o,h=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=h,Zn.elements[9]*=h,Zn.elements[10]*=h,e.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Gi){const l=this.elements,c=2*s/(e-t),u=2*s/(i-r),h=(e+t)/(e-t),f=(i+r)/(i-r);let d,g;if(a===Gi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===El)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Gi){const l=this.elements,c=1/(e-t),u=1/(i-r),h=1/(o-s),f=(e+t)*c,d=(i+r)*u;let g,_;if(a===Gi)g=(o+s)*h,_=-2*h;else if(a===El)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ss=new X,Zn=new Ee,VE=new X(0,0,0),GE=new X(1,1,1),rr=new X,Ra=new X,Tn=new X,Hd=new Ee,Vd=new as;class Ai{constructor(t=0,e=0,i=0,r=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WE=0;const Gd=new X,Es=new as,Ii=new Ee,Ca=new X,So=new X,XE=new X,qE=new as,Wd=new X(1,0,0),Xd=new X(0,1,0),qd=new X(0,0,1),Yd={type:"added"},YE={type:"removed"},bs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class nn extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new X,e=new Ai,i=new as,r=new X(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ee},normalMatrix:{value:new qt}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Wd,t)}rotateY(t){return this.rotateOnAxis(Xd,t)}rotateZ(t){return this.rotateOnAxis(qd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wd,t)}translateY(t){return this.translateOnAxis(Xd,t)}translateZ(t){return this.translateOnAxis(qd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ca.copy(t):Ca.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),So.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(So,Ca,this.up):Ii.lookAt(Ca,So,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Es.setFromRotationMatrix(Ii),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yd),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(YE),Ac.child=t,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yd),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,t,XE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(So,qE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new X(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new X,Li=new X,wc=new X,Ui=new X,Ts=new X,As=new X,jd=new X,Rc=new X,Cc=new X,Pc=new X,Dc=new we,Ic=new we,Lc=new we;class Qn{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Jn.subVectors(t,e),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Jn.subVectors(r,e),Li.subVectors(i,e),wc.subVectors(t,e);const o=Jn.dot(Jn),a=Jn.dot(Li),l=Jn.dot(wc),c=Li.dot(Li),u=Li.dot(wc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Dc.setScalar(0),Ic.setScalar(0),Lc.setScalar(0),Dc.fromBufferAttribute(t,e),Ic.fromBufferAttribute(t,i),Lc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Dc,s.x),o.addScaledVector(Ic,s.y),o.addScaledVector(Lc,s.z),o}static isFrontFacing(t,e,i,r){return Jn.subVectors(i,e),Li.subVectors(t,e),Jn.cross(Li).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),Jn.cross(Li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Qn.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Qn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Ts.subVectors(r,i),As.subVectors(s,i),Rc.subVectors(t,i);const l=Ts.dot(Rc),c=As.dot(Rc);if(l<=0&&c<=0)return e.copy(i);Cc.subVectors(t,r);const u=Ts.dot(Cc),h=As.dot(Cc);if(u>=0&&h<=u)return e.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ts,o);Pc.subVectors(t,s);const d=Ts.dot(Pc),g=As.dot(Pc);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(As,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return jd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(jd,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Uc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ee.workingColorSpace){if(t=CE(t,1),e=Kt(e,0,1),i=Kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Uc(o,s,t+1/3),this.g=Uc(o,s,t),this.b=Uc(o,s,t-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(t,e=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const i=bg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return ee.fromWorkingColorSpace(Je.copy(this),t),Math.round(Kt(Je.r*255,0,255))*65536+Math.round(Kt(Je.g*255,0,255))*256+Math.round(Kt(Je.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Je.copy(this),e);const i=Je.r,r=Je.g,s=Je.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=_n){ee.fromWorkingColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,r=Je.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+e,sr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(sr),t.getHSL(Pa);const i=gc(sr.h,Pa.h,e),r=gc(sr.s,Pa.s,e),s=gc(sr.l,Pa.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new $t;$t.NAMES=bg;let jE=0;class da extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=qs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eu,this.blendDst=bu,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eu&&(i.blendSrc=this.blendSrc),this.blendDst!==bu&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tg extends da{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new X,Da=new Ht;class Si{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nd,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Da.fromBufferAttribute(this,e),Da.applyMatrix3(t),this.setXY(e,Da.x,Da.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=xo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xo(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xo(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xo(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nd&&(t.usage=this.usage),t}}class Ag extends Si{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wg extends Si{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Un extends Si{constructor(t,e,i){super(new Float32Array(t),e,i)}}let KE=0;const kn=new Ee,Nc=new nn,ws=new X,An=new fa,Eo=new fa,Ge=new X;class Ji extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mg(t)?wg:Ag)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,i){return kn.makeTranslation(t,e,i),this.applyMatrix4(kn),this}scale(t,e,i){return kn.makeScale(t,e,i),this.applyMatrix4(kn),this}lookAt(t){return Nc.lookAt(t),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Un(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(An.min,Eo.min),An.expandByPoint(Ge),Ge.addVectors(An.max,Eo.max),An.expandByPoint(Ge)):(An.expandByPoint(Eo.min),An.expandByPoint(Eo.max))}An.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ge.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ge));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),Ge.add(ws)),r=Math.max(r,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new X,l[P]=new X;const c=new X,u=new X,h=new X,f=new Ht,d=new Ht,g=new Ht,_=new X,m=new X;function p(P,x,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,M),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,x),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(_),a[x].add(_),a[M].add(_),l[P].add(m),l[x].add(m),l[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,x=S.length;P<x;++P){const M=S[P],D=M.start,B=M.count;for(let N=D,Y=D+B;N<Y;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const E=new X,v=new X,R=new X,I=new X;function w(P){R.fromBufferAttribute(r,P),I.copy(R);const x=a[P];E.copy(x),E.sub(R.multiplyScalar(R.dot(x))).normalize(),v.crossVectors(I,x);const D=v.dot(l[P])<0?-1:1;o.setXYZW(P,E.x,E.y,E.z,D)}for(let P=0,x=S.length;P<x;++P){const M=S[P],D=M.start,B=M.count;for(let N=D,Y=D+B;N<Y;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,c=new X,u=new X,h=new X;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Si(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ji,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,i);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kd=new Ee,Fr=new sf,Ia=new rf,$d=new X,La=new X,Ua=new X,Na=new X,Oc=new X,Oa=new X,Zd=new X,Fa=new X;class Ye extends nn{constructor(t=new Ji,e=new Tg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Oa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Oc.fromBufferAttribute(h,t),o?Oa.addScaledVector(Oc,u):Oa.addScaledVector(Oc.sub(e),u))}e.add(Oa)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(s),Fr.copy(t.ray).recast(t.near),!(Ia.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Ia,$d)===null||Fr.origin.distanceToSquared($d)>(t.far-t.near)**2))&&(Kd.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(Kd),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fr)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,R=E;v<R;v+=3){const I=a.getX(v),w=a.getX(v+1),P=a.getX(v+2);r=Ba(this,p,t,i,c,u,h,I,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=Ba(this,o,t,i,c,u,h,S,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,R=E;v<R;v+=3){const I=v,w=v+1,P=v+2;r=Ba(this,p,t,i,c,u,h,I,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const S=m,E=m+1,v=m+2;r=Ba(this,o,t,i,c,u,h,S,E,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function $E(n,t,e,i,r,s,o,a){let l;if(t.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Tr,a),l===null)return null;Fa.copy(a),Fa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Fa);return c<e.near||c>e.far?null:{distance:c,point:Fa.clone(),object:n}}function Ba(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,La),n.getVertexPosition(l,Ua),n.getVertexPosition(c,Na);const u=$E(n,t,e,i,La,Ua,Na,Zd);if(u){const h=new X;Qn.getBarycoord(Zd,La,Ua,Na,h),r&&(u.uv=Qn.getInterpolatedAttribute(r,a,l,c,h,new Ht)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,a,l,c,h,new Ht)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,l,c,h,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new X,materialIndex:0};Qn.getNormal(La,Ua,Na,f.normal),u.face=f,u.barycoord=h}return u}class Wi extends Ji{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(h,2));function g(_,m,p,S,E,v,R,I,w,P,x){const M=v/w,D=R/P,B=v/2,N=R/2,Y=I/2,Z=w+1,G=P+1;let V=0,z=0;const ft=new X;for(let _t=0;_t<G;_t++){const yt=_t*D-N;for(let wt=0;wt<Z;wt++){const Gt=wt*M-B;ft[_]=Gt*S,ft[m]=yt*E,ft[p]=Y,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[m]=0,ft[p]=I>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(wt/w),h.push(1-_t/P),V+=1}}for(let _t=0;_t<P;_t++)for(let yt=0;yt<w;yt++){const wt=f+yt+Z*_t,Gt=f+yt+Z*(_t+1),et=f+(yt+1)+Z*(_t+1),ut=f+(yt+1)+Z*_t;l.push(wt,Gt,ut),l.push(Gt,et,ut),z+=6}a.addGroup(d,z,x),d+=z,f+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function uo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function on(n){const t={};for(let e=0;e<n.length;e++){const i=uo(n[e]);for(const r in i)t[r]=i[r]}return t}function ZE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rg(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const JE={clone:uo,merge:on};var QE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends da{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QE,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=uo(t.uniforms),this.uniformsGroups=ZE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cg extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new X,Jd=new Ht,Qd=new Ht;class Gn extends Cg{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(or.x,or.y).multiplyScalar(-t/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-t/or.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(il*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Cs=1;class eb extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Rs,Cs,t,e);r.layers=this.layers,this.add(r);const s=new Gn(Rs,Cs,t,e);s.layers=this.layers,this.add(s);const o=new Gn(Rs,Cs,t,e);o.layers=this.layers,this.add(o);const a=new Gn(Rs,Cs,t,e);a.layers=this.layers,this.add(a);const l=new Gn(Rs,Cs,t,e);l.layers=this.layers,this.add(l);const c=new Gn(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pg extends hn{constructor(t,e,i,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:so,super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nb extends os{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Pg(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Wi(5,5,5),s=new Ar({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:xr});s.uniforms.tEquirect.value=e;const o=new Ye(r,s),a=e.minFilter;return e.minFilter===$r&&(e.minFilter=yi),new eb(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}class ib extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Fc=new X,rb=new X,sb=new qt;class hr{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Fc.subVectors(i,e).cross(rb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sb.getNormalMatrix(t),r=this.coplanarPoint(Fc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new rf,ka=new X;class af{constructor(t=new hr,e=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gi){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,m-d,v-p).normalize(),i[1].setComponents(l+s,f+c,m+d,v+p).normalize(),i[2].setComponents(l+o,f+u,m+g,v+S).normalize(),i[3].setComponents(l-o,f-u,m-g,v-S).normalize(),i[4].setComponents(l-a,f-h,m-_,v-E).normalize(),e===Gi)i[5].setComponents(l+a,f+h,m+_,v+E).normalize();else if(e===El)i[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(ka.x=r.normal.x>0?t.max.x:t.min.x,ka.y=r.normal.y>0?t.max.y:t.min.y,ka.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fs extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ob extends hn{constructor(t,e,i,r,s,o,a,l,c){super(t,e,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dg extends hn{constructor(t,e,i,r,s,o,a,l,c,u=Ys){if(u!==Ys&&u!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ys&&(i=ss),i===void 0&&u===lo&&(i=ao),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ii,this.minFilter=l!==void 0?l:ii,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class lf extends Ji{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;S(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new Un(h,3)),this.setAttribute("normal",new Un(f,3)),this.setAttribute("uv",new Un(d,2));function S(){const v=new X,R=new X;let I=0;const w=(e-t)/i;for(let P=0;P<=s;P++){const x=[],M=P/s,D=M*(e-t)+t;for(let B=0;B<=r;B++){const N=B/r,Y=N*l+a,Z=Math.sin(Y),G=Math.cos(Y);R.x=D*Z,R.y=-M*i+m,R.z=D*G,h.push(R.x,R.y,R.z),v.set(Z,w,G).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-M),x.push(g++)}_.push(x)}for(let P=0;P<r;P++)for(let x=0;x<s;x++){const M=_[x][P],D=_[x+1][P],B=_[x+1][P+1],N=_[x][P+1];(t>0||x!==0)&&(u.push(M,D,N),I+=3),(e>0||x!==s-1)&&(u.push(D,B,N),I+=3)}c.addGroup(p,I,0),p+=I}function E(v){const R=g,I=new Ht,w=new X;let P=0;const x=v===!0?t:e,M=v===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let B=0;B<=r;B++){const Y=B/r*l+a,Z=Math.cos(Y),G=Math.sin(Y);w.x=x*G,w.y=m*M,w.z=x*Z,h.push(w.x,w.y,w.z),f.push(0,M,0),I.x=Z*.5+.5,I.y=G*.5*M+.5,d.push(I.x,I.y),g++}for(let B=0;B<r;B++){const N=R+B,Y=D+B;v===!0?u.push(Y,Y+1,N):u.push(Y+1,Y,N),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends Ji{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*f-o;for(let E=0;E<c;E++){const v=E*h-s;g.push(v,-S,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const E=S+c*p,v=S+c*(p+1),R=S+1+c*(p+1),I=S+1+c*p;d.push(E,v,I),d.push(v,R,I)}this.setIndex(d),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.width,t.height,t.widthSegments,t.heightSegments)}}class cf extends Ji{constructor(t=1,e=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new X,h=new X,f=new X;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){const _=g/r*s,m=d/i*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){const _=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;o.push(_,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Un(a,3)),this.setAttribute("normal",new Un(l,3)),this.setAttribute("uv",new Un(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cf(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ab extends da{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xg,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zn extends ab{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $t(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $t(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $t(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class lb extends da{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cb extends da{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ig extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Bc=new Ee,tp=new X,ep=new X;class ub{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new af,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;tp.setFromMatrixPosition(t.matrixWorld),e.position.copy(tp),ep.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ep),e.updateMatrixWorld(),Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Lg extends Cg{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hb extends ub{constructor(){super(new Lg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class np extends Ig{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new hb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fb extends Ig{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class db extends Gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}const ip=new Ee;class pb{constructor(t,e,i=0,r=1/0){this.ray=new sf(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new of,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ip.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ip),this}intersectObject(t,e=!0,i=[]){return ch(t,this,i,e),i.sort(rp),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)ch(t[r],this,i,e);return i.sort(rp),i}}function rp(n,t){return n.distance-t.distance}function ch(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)ch(s[o],t,e,!0)}}class sp{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class mb extends us{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function op(n,t,e,i){const r=_b(i);switch(e){case fg:return n*t;case pg:return n*t;case mg:return n*t*2;case _g:return n*t/r.components*r.byteLength;case tf:return n*t/r.components*r.byteLength;case gg:return n*t*2/r.components*r.byteLength;case ef:return n*t*2/r.components*r.byteLength;case dg:return n*t*3/r.components*r.byteLength;case ti:return n*t*4/r.components*r.byteLength;case nf:return n*t*4/r.components*r.byteLength;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case tl:case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fu:case ku:return Math.max(n,16)*Math.max(t,8)/4;case Ou:case Bu:return Math.max(n,8)*Math.max(t,8)/2;case zu:case Hu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yu:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ju:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $u:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Zu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Qu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case nl:case ih:case rh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case vg:case sh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oh:case ah:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _b(n){switch(n){case $i:case cg:return{byteLength:1,components:1};case ia:case ug:case ua:return{byteLength:2,components:1};case Jh:case Qh:return{byteLength:2,components:4};case ss:case Zh:case Vi:return{byteLength:4,components:1};case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ug(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function gb(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Db=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ib=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_T=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ST=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,HT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$T=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,TA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:vb,alphahash_pars_fragment:xb,alphamap_fragment:yb,alphamap_pars_fragment:Mb,alphatest_fragment:Sb,alphatest_pars_fragment:Eb,aomap_fragment:bb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:wb,begin_vertex:Rb,beginnormal_vertex:Cb,bsdfs:Pb,iridescence_fragment:Db,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Ub,clipping_planes_pars_vertex:Nb,clipping_planes_vertex:Ob,color_fragment:Fb,color_pars_fragment:Bb,color_pars_vertex:kb,color_vertex:zb,common:Hb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:Wb,displacementmap_vertex:Xb,emissivemap_fragment:qb,emissivemap_pars_fragment:Yb,colorspace_fragment:jb,colorspace_pars_fragment:Kb,envmap_fragment:$b,envmap_common_pars_fragment:Zb,envmap_pars_fragment:Jb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:uT,envmap_vertex:tT,fog_vertex:eT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:rT,gradientmap_pars_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:hT,lights_toon_pars_fragment:fT,lights_phong_fragment:dT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:_T,lights_fragment_begin:gT,lights_fragment_maps:vT,lights_fragment_end:xT,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:ST,logdepthbuf_vertex:ET,map_fragment:bT,map_pars_fragment:TT,map_particle_fragment:AT,map_particle_pars_fragment:wT,metalnessmap_fragment:RT,metalnessmap_pars_fragment:CT,morphinstance_vertex:PT,morphcolor_vertex:DT,morphnormal_vertex:IT,morphtarget_pars_vertex:LT,morphtarget_vertex:UT,normal_fragment_begin:NT,normal_fragment_maps:OT,normal_pars_fragment:FT,normal_pars_vertex:BT,normal_vertex:kT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:HT,clearcoat_normal_fragment_maps:VT,clearcoat_pars_fragment:GT,iridescence_pars_fragment:WT,opaque_fragment:XT,packing:qT,premultiplied_alpha_fragment:YT,project_vertex:jT,dithering_fragment:KT,dithering_pars_fragment:$T,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:QT,shadowmap_pars_vertex:tA,shadowmap_vertex:eA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:rA,skinning_vertex:sA,skinnormal_vertex:oA,specularmap_fragment:aA,specularmap_pars_fragment:lA,tonemapping_fragment:cA,tonemapping_pars_fragment:uA,transmission_fragment:hA,transmission_pars_fragment:fA,uv_pars_fragment:dA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:_A,background_vert:gA,background_frag:vA,backgroundCube_vert:xA,backgroundCube_frag:yA,cube_vert:MA,cube_frag:SA,depth_vert:EA,depth_frag:bA,distanceRGBA_vert:TA,distanceRGBA_frag:AA,equirect_vert:wA,equirect_frag:RA,linedashed_vert:CA,linedashed_frag:PA,meshbasic_vert:DA,meshbasic_frag:IA,meshlambert_vert:LA,meshlambert_frag:UA,meshmatcap_vert:NA,meshmatcap_frag:OA,meshnormal_vert:FA,meshnormal_frag:BA,meshphong_vert:kA,meshphong_frag:zA,meshphysical_vert:HA,meshphysical_frag:VA,meshtoon_vert:GA,meshtoon_frag:WA,points_vert:XA,points_frag:qA,shadow_vert:YA,shadow_frag:jA,sprite_vert:KA,sprite_frag:$A},xt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},mi={basic:{uniforms:on([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:on([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:on([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:on([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:on([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new $t(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:on([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:on([xt.points,xt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:on([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:on([xt.common,xt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:on([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:on([xt.sprite,xt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:on([xt.common,xt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:on([xt.lights,xt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};mi.physical={uniforms:on([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const za={r:0,b:0,g:0},kr=new Ai,ZA=new Ee;function JA(n,t,e,i,r,s,o){const a=new $t(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function _(E){let v=!1;const R=g(E);R===null?p(a,l):R&&R.isColor&&(p(R,1),v=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,v){const R=g(v);R&&(R.isCubeTexture||R.mapping===Vl)?(u===void 0&&(u=new Ye(new Wi(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:uo(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(v.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(kr)),u.material.toneMapped=ee.getTransfer(R.colorSpace)!==ue,(h!==R||f!==R.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=R,f=R.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ye(new pa(2,2),new Ar({name:"BackgroundMaterial",uniforms:uo(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ee.getTransfer(R.colorSpace)!==ue,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||f!==R.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=R,f=R.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(za,Rg(n)),i.buffers.color.setClear(za.r,za.g,za.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:S}}function QA(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,D,B,N,Y){let Z=!1;const G=h(N,B,D);s!==G&&(s=G,c(s.object)),Z=d(M,N,B,Y),Z&&g(M,N,B,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(M,D,B,N),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,D,B){const N=B.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let Z=Y[D.id];Z===void 0&&(Z={},Y[D.id]=Z);let G=Z[N];return G===void 0&&(G=f(l()),Z[N]=G),G}function f(M){const D=[],B=[],N=[];for(let Y=0;Y<e;Y++)D[Y]=0,B[Y]=0,N[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:N,object:M,attributes:{},index:null}}function d(M,D,B,N){const Y=s.attributes,Z=D.attributes;let G=0;const V=B.getAttributes();for(const z in V)if(V[z].location>=0){const _t=Y[z];let yt=Z[z];if(yt===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor)),_t===void 0||_t.attribute!==yt||yt&&_t.data!==yt.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(M,D,B,N){const Y={},Z=D.attributes;let G=0;const V=B.getAttributes();for(const z in V)if(V[z].location>=0){let _t=Z[z];_t===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));const yt={};yt.attribute=_t,_t&&_t.data&&(yt.data=_t.data),Y[z]=yt,G++}s.attributes=Y,s.attributesNum=G,s.index=N}function _(){const M=s.newAttributes;for(let D=0,B=M.length;D<B;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const B=s.newAttributes,N=s.enabledAttributes,Y=s.attributeDivisors;B[M]=1,N[M]===0&&(n.enableVertexAttribArray(M),N[M]=1),Y[M]!==D&&(n.vertexAttribDivisor(M,D),Y[M]=D)}function S(){const M=s.newAttributes,D=s.enabledAttributes;for(let B=0,N=D.length;B<N;B++)D[B]!==M[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function E(M,D,B,N,Y,Z,G){G===!0?n.vertexAttribIPointer(M,D,B,Y,Z):n.vertexAttribPointer(M,D,B,N,Y,Z)}function v(M,D,B,N){_();const Y=N.attributes,Z=B.getAttributes(),G=D.defaultAttributeValues;for(const V in Z){const z=Z[V];if(z.location>=0){let ft=Y[V];if(ft===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ft!==void 0){const _t=ft.normalized,yt=ft.itemSize,wt=t.get(ft);if(wt===void 0)continue;const Gt=wt.buffer,et=wt.type,ut=wt.bytesPerElement,bt=et===n.INT||et===n.UNSIGNED_INT||ft.gpuType===Zh;if(ft.isInterleavedBufferAttribute){const O=ft.data,ot=O.stride,st=ft.offset;if(O.isInstancedInterleavedBuffer){for(let dt=0;dt<z.locationSize;dt++)p(z.location+dt,O.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let dt=0;dt<z.locationSize;dt++)m(z.location+dt);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let dt=0;dt<z.locationSize;dt++)E(z.location+dt,yt/z.locationSize,et,_t,ot*ut,(st+yt/z.locationSize*dt)*ut,bt)}else{if(ft.isInstancedBufferAttribute){for(let O=0;O<z.locationSize;O++)p(z.location+O,ft.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let O=0;O<z.locationSize;O++)m(z.location+O);n.bindBuffer(n.ARRAY_BUFFER,Gt);for(let O=0;O<z.locationSize;O++)E(z.location+O,yt/z.locationSize,et,_t,yt*ut,yt/z.locationSize*O*ut,bt)}}else if(G!==void 0){const _t=G[V];if(_t!==void 0)switch(_t.length){case 2:n.vertexAttrib2fv(z.location,_t);break;case 3:n.vertexAttrib3fv(z.location,_t);break;case 4:n.vertexAttrib4fv(z.location,_t);break;default:n.vertexAttrib1fv(z.location,_t)}}}}S()}function R(){P();for(const M in i){const D=i[M];for(const B in D){const N=D[B];for(const Y in N)u(N[Y].object),delete N[Y];delete D[B]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const B in D){const N=D[B];for(const Y in N)u(N[Y].object),delete N[Y];delete D[B]}delete i[M.id]}function w(M){for(const D in i){const B=i[D];if(B[M.id]===void 0)continue;const N=B[M.id];for(const Y in N)u(N[Y].object),delete N[Y];delete B[M.id]}}function P(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function t1(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e1(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ti&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===ua&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==$i&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Vi&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:I}}function n1(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new hr,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,E=S*4;let v=p.clippingState||null;l.value=v,v=u(g,f,E,d);for(let R=0;R!==E;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)o.copy(h[E]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function i1(n){let t=new WeakMap;function e(o,a){return a===Iu?o.mapping=so:a===Lu&&(o.mapping=oo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Iu||a===Lu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nb(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Bs=4,ap=[.125,.215,.35,.446,.526,.582],qr=20,kc=new Lg,lp=new $t;let zc=null,Hc=0,Vc=0,Gc=!1;const Wr=(1+Math.sqrt(5))/2,Ps=1/Wr,cp=[new X(-Wr,Ps,0),new X(Wr,Ps,0),new X(-Ps,0,Wr),new X(Ps,0,Wr),new X(0,Wr,-Ps),new X(0,Wr,Ps),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class up{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zc,Hc,Vc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===so||t.mapping===oo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Vc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:ua,format:ti,colorSpace:co,depthBuffer:!1},r=hp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=r1(s)),this._blurMaterial=s1(s,t,e)}return r}_compileMaterial(t){const e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,kc)}_sceneToCubeUV(t,e,i,r){const a=new Gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(lp),u.toneMapping=yr,u.autoClear=!1;const d=new Tg({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new Ye(new Wi,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(lp),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):S===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Ha(r,S*E,p>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===so||t.mapping===oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Ha(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,kc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cp[(r-s-1)%cp.length];this._blur(t,s-1,s,o,a)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ye(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*qr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):qr;m>qr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);const p=[];let S=0;for(let w=0;w<qr;++w){const P=w/_,x=Math.exp(-P*P/2);p.push(x),w===0?S+=x:w<m&&(S+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const v=this._sizeLods[r],R=3*v*(r>E-Bs?r-E+Bs:0),I=4*(this._cubeSize-v);Ha(e,R,I,3*v,2*v),l.setRenderTarget(e),l.render(h,kc)}}function r1(n){const t=[],e=[],i=[];let r=n;const s=n-Bs+1+ap.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Bs?l=ap[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let I=0;I<d;I++){const w=I%3*2/3-1,P=I>2?0:-1,x=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];S.set(x,_*g*I),E.set(f,m*g*I);const M=[I,I,I,I,I,I];v.set(M,p*g*I)}const R=new Ji;R.setAttribute("position",new Si(S,_)),R.setAttribute("uv",new Si(E,m)),R.setAttribute("faceIndex",new Si(v,p)),t.push(R),r>Bs&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function hp(n,t,e){const i=new os(n,t,e);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ha(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function s1(n,t,e){const i=new Float32Array(qr),r=new X(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function fp(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function dp(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function o1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Iu||l===Lu,u=l===so||l===oo;if(c||u){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new up(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new up(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function a1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function l1(n,t,e,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const S=d.array;_=d.version;for(let E=0,v=S.length;E<v;E+=3){const R=S[E+0],I=S[E+1],w=S[E+2];f.push(R,I,I,w,w,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const R=E+0,I=E+1,w=E+2;f.push(R,I,I,w,w,R)}}else return;const m=new(Mg(f)?wg:Ag)(f,1);m.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function c1(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),e.update(d,i,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*_[S];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function u1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function h1(n,t,e){const i=new WeakMap,r=new we;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,I=1;R>t.maxTextureSize&&(I=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*I*4*h),P=new Eg(w,R,I,h);P.type=Vi,P.needsUpdate=!0;const x=v*4;for(let D=0;D<h;D++){const B=p[D],N=S[D],Y=E[D],Z=R*I*4*D;for(let G=0;G<B.count;G++){const V=G*x;g===!0&&(r.fromBufferAttribute(B,G),w[Z+V+0]=r.x,w[Z+V+1]=r.y,w[Z+V+2]=r.z,w[Z+V+3]=0),_===!0&&(r.fromBufferAttribute(N,G),w[Z+V+4]=r.x,w[Z+V+5]=r.y,w[Z+V+6]=r.z,w[Z+V+7]=0),m===!0&&(r.fromBufferAttribute(Y,G),w[Z+V+8]=r.x,w[Z+V+9]=r.y,w[Z+V+10]=r.z,w[Z+V+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new Ht(R,I)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function f1(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Ng=new hn,pp=new Dg(1,1),Og=new Eg,Fg=new zE,Bg=new Pg,mp=[],_p=[],gp=new Float32Array(16),vp=new Float32Array(9),xp=new Float32Array(4);function ho(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=mp[r];if(s===void 0&&(s=new Float32Array(r),mp[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function He(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Gl(n,t){let e=_p[t];e===void 0&&(e=new Int32Array(t),_p[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function d1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function p1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function m1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function _1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function g1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;xp.set(i),n.uniformMatrix2fv(this.addr,!1,xp),Ve(e,i)}}function v1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;vp.set(i),n.uniformMatrix3fv(this.addr,!1,vp),Ve(e,i)}}function x1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(He(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,i))return;gp.set(i),n.uniformMatrix4fv(this.addr,!1,gp),Ve(e,i)}}function y1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function M1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function S1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function E1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function b1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function T1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function A1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function w1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function R1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(pp.compareFunction=yg,s=pp):s=Ng,e.setTexture2D(t||s,r)}function C1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Fg,r)}function P1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Bg,r)}function D1(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Og,r)}function I1(n){switch(n){case 5126:return d1;case 35664:return p1;case 35665:return m1;case 35666:return _1;case 35674:return g1;case 35675:return v1;case 35676:return x1;case 5124:case 35670:return y1;case 35667:case 35671:return M1;case 35668:case 35672:return S1;case 35669:case 35673:return E1;case 5125:return b1;case 36294:return T1;case 36295:return A1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return D1}}function L1(n,t){n.uniform1fv(this.addr,t)}function U1(n,t){const e=ho(t,this.size,2);n.uniform2fv(this.addr,e)}function N1(n,t){const e=ho(t,this.size,3);n.uniform3fv(this.addr,e)}function O1(n,t){const e=ho(t,this.size,4);n.uniform4fv(this.addr,e)}function F1(n,t){const e=ho(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function B1(n,t){const e=ho(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function k1(n,t){const e=ho(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function z1(n,t){n.uniform1iv(this.addr,t)}function H1(n,t){n.uniform2iv(this.addr,t)}function V1(n,t){n.uniform3iv(this.addr,t)}function G1(n,t){n.uniform4iv(this.addr,t)}function W1(n,t){n.uniform1uiv(this.addr,t)}function X1(n,t){n.uniform2uiv(this.addr,t)}function q1(n,t){n.uniform3uiv(this.addr,t)}function Y1(n,t){n.uniform4uiv(this.addr,t)}function j1(n,t,e){const i=this.cache,r=t.length,s=Gl(e,r);He(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Ng,s[o])}function K1(n,t,e){const i=this.cache,r=t.length,s=Gl(e,r);He(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Fg,s[o])}function $1(n,t,e){const i=this.cache,r=t.length,s=Gl(e,r);He(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bg,s[o])}function Z1(n,t,e){const i=this.cache,r=t.length,s=Gl(e,r);He(i,s)||(n.uniform1iv(this.addr,s),Ve(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Og,s[o])}function J1(n){switch(n){case 5126:return L1;case 35664:return U1;case 35665:return N1;case 35666:return O1;case 35674:return F1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return z1;case 35667:case 35671:return H1;case 35668:case 35672:return V1;case 35669:case 35673:return G1;case 5125:return W1;case 36294:return X1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return Z1}}class Q1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=I1(e.type)}}class tw{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J1(e.type)}}class ew{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Wc=/(\w+)(\])?(\[|\.)?/g;function yp(n,t){n.seq.push(t),n.map[t.id]=t}function nw(n,t,e){const i=n.name,r=i.length;for(Wc.lastIndex=0;;){const s=Wc.exec(i),o=Wc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yp(e,c===void 0?new Q1(a,n,t):new tw(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new ew(a),yp(e,h)),e=h}}}class rl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);nw(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Mp(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iw=37297;let rw=0;function sw(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Sp=new qt;function ow(n){ee._getMatrix(Sp,ee.workingColorSpace,n);const t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(n)){case Sl:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ep(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+sw(n.getShaderSource(t),o)}else return r}function aw(n,t){const e=ow(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function lw(n,t){let e;switch(t){case fE:e="Linear";break;case dE:e="Reinhard";break;case pE:e="Cineon";break;case ag:e="ACESFilmic";break;case _E:e="AgX";break;case gE:e="Neutral";break;case mE:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new X;function cw(){ee.getLuminanceCoefficients(Va);const n=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function hw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Co(n){return n!==""}function bp(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(dw,mw)}const pw=new Map;function mw(n,t){let e=jt[t];if(e===void 0){const i=pw.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return uh(e)}const _w=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ap(n){return n.replace(_w,gw)}function gw(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rg?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===sg?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function xw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case so:case oo:t="ENVMAP_TYPE_CUBE";break;case Vl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oo:t="ENVMAP_MODE_REFRACTION";break}return t}function Mw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case og:t="ENVMAP_BLENDING_MULTIPLY";break;case uE:t="ENVMAP_BLENDING_MIX";break;case hE:t="ENVMAP_BLENDING_ADD";break}return t}function Sw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ew(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=vw(e),c=xw(e),u=yw(e),h=Mw(e),f=Sw(e),d=uw(e),g=hw(s),_=r.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Co).join(`
`),p.length>0&&(p+=`
`)):(m=[wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),p=[wp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yr?"#define TONE_MAPPING":"",e.toneMapping!==yr?jt.tonemapping_pars_fragment:"",e.toneMapping!==yr?lw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,aw("linearToOutputTexel",e.outputColorSpace),cw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Co).join(`
`)),o=uh(o),o=bp(o,e),o=Tp(o,e),a=uh(a),a=bp(a,e),a=Tp(a,e),o=Ap(o),a=Ap(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+o,v=S+p+a,R=Mp(r,r.VERTEX_SHADER,E),I=Mp(r,r.FRAGMENT_SHADER,v);r.attachShader(_,R),r.attachShader(_,I),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),N=r.getShaderInfoLog(R).trim(),Y=r.getShaderInfoLog(I).trim();let Z=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,I);else{const V=Ep(r,R,"vertex"),z=Ep(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+V+`
`+z)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||Y==="")&&(G=!1);G&&(D.diagnostics={runnable:Z,programLog:B,vertexShader:{log:N,prefix:m},fragmentShader:{log:Y,prefix:p}})}r.deleteShader(R),r.deleteShader(I),P=new rl(r,_),x=fw(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,iw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rw++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=I,this}let bw=0;class Tw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Aw(t),e.set(t,i)),i}}class Aw{constructor(t){this.id=bw++,this.code=t,this.usedTimes=0}}function ww(n,t,e,i,r,s,o){const a=new of,l=new Tw,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,D,B,N){const Y=B.fog,Z=N.geometry,G=x.isMeshStandardMaterial?B.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),z=V&&V.mapping===Vl?V.image.height:null,ft=g[x.type];x.precision!==null&&(d=r.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const _t=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=_t!==void 0?_t.length:0;let wt=0;Z.morphAttributes.position!==void 0&&(wt=1),Z.morphAttributes.normal!==void 0&&(wt=2),Z.morphAttributes.color!==void 0&&(wt=3);let Gt,et,ut,bt;if(ft){const ae=mi[ft];Gt=ae.vertexShader,et=ae.fragmentShader}else Gt=x.vertexShader,et=x.fragmentShader,l.update(x),ut=l.getVertexShaderID(x),bt=l.getFragmentShaderID(x);const O=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),st=N.isInstancedMesh===!0,dt=N.isBatchedMesh===!0,Pt=!!x.map,C=!!x.matcap,L=!!V,b=!!x.aoMap,nt=!!x.lightMap,J=!!x.bumpMap,q=!!x.normalMap,it=!!x.displacementMap,lt=!!x.emissiveMap,tt=!!x.metalnessMap,T=!!x.roughnessMap,y=x.anisotropy>0,U=x.clearcoat>0,W=x.dispersion>0,K=x.iridescence>0,j=x.sheen>0,gt=x.transmission>0,ct=y&&!!x.anisotropyMap,mt=U&&!!x.clearcoatMap,Lt=U&&!!x.clearcoatNormalMap,ht=U&&!!x.clearcoatRoughnessMap,Mt=K&&!!x.iridescenceMap,Dt=K&&!!x.iridescenceThicknessMap,Ft=j&&!!x.sheenColorMap,vt=j&&!!x.sheenRoughnessMap,kt=!!x.specularMap,Wt=!!x.specularColorMap,oe=!!x.specularIntensityMap,F=gt&&!!x.transmissionMap,St=gt&&!!x.thicknessMap,rt=!!x.gradientMap,at=!!x.alphaMap,At=x.alphaTest>0,Tt=!!x.alphaHash,Xt=!!x.extensions;let be=yr;x.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(be=n.toneMapping);const $e={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:Gt,fragmentShader:et,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:bt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:dt,batchingColor:dt&&N._colorsTexture!==null,instancing:st,instancingColor:st&&N.instanceColor!==null,instancingMorph:st&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:co,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:C,envMap:L,envMapMode:L&&V.mapping,envMapCubeUVHeight:z,aoMap:b,lightMap:nt,bumpMap:J,normalMap:q,displacementMap:f&&it,emissiveMap:lt,normalMapObjectSpace:q&&x.normalMapType===ME,normalMapTangentSpace:q&&x.normalMapType===xg,metalnessMap:tt,roughnessMap:T,anisotropy:y,anisotropyMap:ct,clearcoat:U,clearcoatMap:mt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ht,dispersion:W,iridescence:K,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:Ft,sheenRoughnessMap:vt,specularMap:kt,specularColorMap:Wt,specularIntensityMap:oe,transmission:gt,transmissionMap:F,thicknessMap:St,gradientMap:rt,opaque:x.transparent===!1&&x.blending===qs&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:At,alphaHash:Tt,combine:x.combine,mapUv:Pt&&_(x.map.channel),aoMapUv:b&&_(x.aoMap.channel),lightMapUv:nt&&_(x.lightMap.channel),bumpMapUv:J&&_(x.bumpMap.channel),normalMapUv:q&&_(x.normalMap.channel),displacementMapUv:it&&_(x.displacementMap.channel),emissiveMapUv:lt&&_(x.emissiveMap.channel),metalnessMapUv:tt&&_(x.metalnessMap.channel),roughnessMapUv:T&&_(x.roughnessMap.channel),anisotropyMapUv:ct&&_(x.anisotropyMap.channel),clearcoatMapUv:mt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(x.sheenRoughnessMap.channel),specularMapUv:kt&&_(x.specularMap.channel),specularColorMapUv:Wt&&_(x.specularColorMap.channel),specularIntensityMapUv:oe&&_(x.specularIntensityMap.channel),transmissionMapUv:F&&_(x.transmissionMap.channel),thicknessMapUv:St&&_(x.thicknessMap.channel),alphaMapUv:at&&_(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(q||y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Z.attributes.uv&&(Pt||at),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ot,skinning:N.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:wt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:lt&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Hi,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Xt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&x.extensions.multiDraw===!0||dt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(M,x),E(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function E(x,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),x.push(a.mask)}function v(x){const M=g[x.type];let D;if(M){const B=mi[M];D=JE.clone(B.uniforms)}else D=x.uniforms;return D}function R(x,M){let D;for(let B=0,N=u.length;B<N;B++){const Y=u[B];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new Ew(n,M,x,s),u.push(D)),D}function I(x){if(--x.usedTimes===0){const M=u.indexOf(x);u[M]=u[u.length-1],u.pop(),x.destroy()}}function w(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:I,releaseShaderCache:w,programs:u,dispose:P}}function Rw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Cw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Rp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cp(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(h,f,d,g,_,m){let p=n[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||Cw),i.length>1&&i.sort(f||Rp),r.length>1&&r.sort(f||Rp)}function u(){for(let h=t,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Pw(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Cp,n.set(i,[o])):r>=s.length?(o=new Cp,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Dw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new $t};break;case"SpotLight":e={position:new X,direction:new X,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function Iw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Lw=0;function Uw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Nw(n){const t=new Dw,e=Iw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new Ee,o=new Ee;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,E=0,v=0,R=0,I=0,w=0;c.sort(Uw);for(let x=0,M=c.length;x<M;x++){const D=c[x],B=D.color,N=D.intensity,Y=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*N,h+=B.g*N,f+=B.b*N;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],N);w++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const V=D.shadow,z=e.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.directionalShadow[d]=z,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=D.shadow.matrix,S++}i.directional[d]=G,d++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(N),G.distance=Y,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[_]=G;const V=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,V.updateMatrices(D),D.castShadow&&I++),i.spotLightMatrix[_]=V.matrix,D.castShadow){const z=e.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=Z,v++}_++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(B).multiplyScalar(N),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=G,m++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const V=D.shadow,z=e.get(D);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,E++}i.point[g]=G,g++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(N),G.groundColor.copy(D.groundColor).multiplyScalar(N),i.hemi[p]=G,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+R-I,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=w,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=w,i.version=Lw++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(E.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Pp(n){const t=new Nw(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ow(n){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Pp(n),t.set(r,[a])):s>=o.length?(a=new Pp(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kw(n,t,e){let i=new af;const r=new Ht,s=new Ht,o=new we,a=new lb({depthPacking:yE}),l=new cb,c={},u=e.maxTextureSize,h={[Tr]:Sn,[Sn]:Tr,[Hi]:Hi},f=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Fw,fragmentShader:Bw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ji;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ye(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg;let p=this.type;this.render=function(I,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const x=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(xr),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=p!==Ni&&this.type===Ni,Y=p===Ni&&this.type!==Ni;for(let Z=0,G=I.length;Z<G;Z++){const V=I[Z],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ft=z.getFrameExtents();if(r.multiply(ft),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ft.x),r.x=s.x*ft.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ft.y),r.y=s.y*ft.y,z.mapSize.y=s.y)),z.map===null||N===!0||Y===!0){const yt=this.type!==Ni?{minFilter:ii,magFilter:ii}:{};z.map!==null&&z.map.dispose(),z.map=new os(r.x,r.y,yt),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const _t=z.getViewportCount();for(let yt=0;yt<_t;yt++){const wt=z.getViewport(yt);o.set(s.x*wt.x,s.y*wt.y,s.x*wt.z,s.y*wt.w),B.viewport(o),z.updateMatrices(V,yt),i=z.getFrustum(),v(w,P,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Ni&&S(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(x,M,D)};function S(I,w){const P=t.update(_);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,d.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new os(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(w,null,P,f,_,null),d.uniforms.shadow_pass.value=I.mapPass.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(w,null,P,d,_,null)}function E(I,w,P,x){let M=null;const D=P.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=M.uuid,N=w.uuid;let Y=c[B];Y===void 0&&(Y={},c[B]=Y);let Z=Y[N];Z===void 0&&(Z=M.clone(),Y[N]=Z,w.addEventListener("dispose",R)),M=Z}if(M.visible=w.visible,M.wireframe=w.wireframe,x===Ni?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=P}return M}function v(I,w,P,x,M){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===Ni)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,I.matrixWorld);const N=t.update(I),Y=I.material;if(Array.isArray(Y)){const Z=N.groups;for(let G=0,V=Z.length;G<V;G++){const z=Z[G],ft=Y[z.materialIndex];if(ft&&ft.visible){const _t=E(I,ft,x,M);I.onBeforeShadow(n,I,w,P,N,_t,z),n.renderBufferDirect(P,null,N,_t,I,z),I.onAfterShadow(n,I,w,P,N,_t,z)}}}else if(Y.visible){const Z=E(I,Y,x,M);I.onBeforeShadow(n,I,w,P,N,Z,null),n.renderBufferDirect(P,null,N,Z,I,null),I.onAfterShadow(n,I,w,P,N,Z,null)}}const B=I.children;for(let N=0,Y=B.length;N<Y;N++)v(B[N],w,P,x,M)}function R(I){I.target.removeEventListener("dispose",R);for(const P in c){const x=c[P],M=I.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}const zw={[Tu]:Au,[wu]:Pu,[Ru]:Du,[ro]:Cu,[Au]:Tu,[Pu]:wu,[Du]:Ru,[Cu]:ro};function Hw(n,t){function e(){let F=!1;const St=new we;let rt=null;const at=new we(0,0,0,0);return{setMask:function(At){rt!==At&&!F&&(n.colorMask(At,At,At,At),rt=At)},setLocked:function(At){F=At},setClear:function(At,Tt,Xt,be,$e){$e===!0&&(At*=be,Tt*=be,Xt*=be),St.set(At,Tt,Xt,be),at.equals(St)===!1&&(n.clearColor(At,Tt,Xt,be),at.copy(St))},reset:function(){F=!1,rt=null,at.set(-1,0,0,0)}}}function i(){let F=!1,St=!1,rt=null,at=null,At=null;return{setReversed:function(Tt){if(St!==Tt){const Xt=t.get("EXT_clip_control");St?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const be=At;At=null,this.setClear(be)}St=Tt},getReversed:function(){return St},setTest:function(Tt){Tt?O(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(Tt){rt!==Tt&&!F&&(n.depthMask(Tt),rt=Tt)},setFunc:function(Tt){if(St&&(Tt=zw[Tt]),at!==Tt){switch(Tt){case Tu:n.depthFunc(n.NEVER);break;case Au:n.depthFunc(n.ALWAYS);break;case wu:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case Ru:n.depthFunc(n.EQUAL);break;case Cu:n.depthFunc(n.GEQUAL);break;case Pu:n.depthFunc(n.GREATER);break;case Du:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}at=Tt}},setLocked:function(Tt){F=Tt},setClear:function(Tt){At!==Tt&&(St&&(Tt=1-Tt),n.clearDepth(Tt),At=Tt)},reset:function(){F=!1,rt=null,at=null,At=null,St=!1}}}function r(){let F=!1,St=null,rt=null,at=null,At=null,Tt=null,Xt=null,be=null,$e=null;return{setTest:function(ae){F||(ae?O(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ae){St!==ae&&!F&&(n.stencilMask(ae),St=ae)},setFunc:function(ae,jn,wi){(rt!==ae||at!==jn||At!==wi)&&(n.stencilFunc(ae,jn,wi),rt=ae,at=jn,At=wi)},setOp:function(ae,jn,wi){(Tt!==ae||Xt!==jn||be!==wi)&&(n.stencilOp(ae,jn,wi),Tt=ae,Xt=jn,be=wi)},setLocked:function(ae){F=ae},setClear:function(ae){$e!==ae&&(n.clearStencil(ae),$e=ae)},reset:function(){F=!1,St=null,rt=null,at=null,At=null,Tt=null,Xt=null,be=null,$e=null}}}const s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,E=null,v=null,R=null,I=null,w=new $t(0,0,0),P=0,x=!1,M=null,D=null,B=null,N=null,Y=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),G=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),G=V>=2);let ft=null,_t={};const yt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),Gt=new we().fromArray(yt),et=new we().fromArray(wt);function ut(F,St,rt,at){const At=new Uint8Array(4),Tt=n.createTexture();n.bindTexture(F,Tt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<rt;Xt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,at,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(St+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return Tt}const bt={};bt[n.TEXTURE_2D]=ut(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(n.DEPTH_TEST),o.setFunc(ro),J(!1),q(Pd),O(n.CULL_FACE),b(xr);function O(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ot(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function st(F,St){return h[F]!==St?(n.bindFramebuffer(F,St),h[F]=St,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=St),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=St),!0):!1}function dt(F,St){let rt=d,at=!1;if(F){rt=f.get(St),rt===void 0&&(rt=[],f.set(St,rt));const At=F.textures;if(rt.length!==At.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Tt=0,Xt=At.length;Tt<Xt;Tt++)rt[Tt]=n.COLOR_ATTACHMENT0+Tt;rt.length=At.length,at=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,at=!0);at&&n.drawBuffers(rt)}function Pt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const C={[Xr]:n.FUNC_ADD,[YS]:n.FUNC_SUBTRACT,[jS]:n.FUNC_REVERSE_SUBTRACT};C[KS]=n.MIN,C[$S]=n.MAX;const L={[ZS]:n.ZERO,[JS]:n.ONE,[QS]:n.SRC_COLOR,[Eu]:n.SRC_ALPHA,[sE]:n.SRC_ALPHA_SATURATE,[iE]:n.DST_COLOR,[eE]:n.DST_ALPHA,[tE]:n.ONE_MINUS_SRC_COLOR,[bu]:n.ONE_MINUS_SRC_ALPHA,[rE]:n.ONE_MINUS_DST_COLOR,[nE]:n.ONE_MINUS_DST_ALPHA,[oE]:n.CONSTANT_COLOR,[aE]:n.ONE_MINUS_CONSTANT_COLOR,[lE]:n.CONSTANT_ALPHA,[cE]:n.ONE_MINUS_CONSTANT_ALPHA};function b(F,St,rt,at,At,Tt,Xt,be,$e,ae){if(F===xr){_===!0&&(ot(n.BLEND),_=!1);return}if(_===!1&&(O(n.BLEND),_=!0),F!==qS){if(F!==m||ae!==x){if((p!==Xr||v!==Xr)&&(n.blendEquation(n.FUNC_ADD),p=Xr,v=Xr),ae)switch(F){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dd:n.blendFunc(n.ONE,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Id:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,E=null,R=null,I=null,w.set(0,0,0),P=0,m=F,x=ae}return}At=At||St,Tt=Tt||rt,Xt=Xt||at,(St!==p||At!==v)&&(n.blendEquationSeparate(C[St],C[At]),p=St,v=At),(rt!==S||at!==E||Tt!==R||Xt!==I)&&(n.blendFuncSeparate(L[rt],L[at],L[Tt],L[Xt]),S=rt,E=at,R=Tt,I=Xt),(be.equals(w)===!1||$e!==P)&&(n.blendColor(be.r,be.g,be.b,$e),w.copy(be),P=$e),m=F,x=!1}function nt(F,St){F.side===Hi?ot(n.CULL_FACE):O(n.CULL_FACE);let rt=F.side===Sn;St&&(rt=!rt),J(rt),F.blending===qs&&F.transparent===!1?b(xr):b(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const at=F.stencilWrite;a.setTest(at),at&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),lt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(F){M!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),M=F)}function q(F){F!==WS?(O(n.CULL_FACE),F!==D&&(F===Pd?n.cullFace(n.BACK):F===XS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),D=F}function it(F){F!==B&&(G&&n.lineWidth(F),B=F)}function lt(F,St,rt){F?(O(n.POLYGON_OFFSET_FILL),(N!==St||Y!==rt)&&(n.polygonOffset(St,rt),N=St,Y=rt)):ot(n.POLYGON_OFFSET_FILL)}function tt(F){F?O(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function T(F){F===void 0&&(F=n.TEXTURE0+Z-1),ft!==F&&(n.activeTexture(F),ft=F)}function y(F,St,rt){rt===void 0&&(ft===null?rt=n.TEXTURE0+Z-1:rt=ft);let at=_t[rt];at===void 0&&(at={type:void 0,texture:void 0},_t[rt]=at),(at.type!==F||at.texture!==St)&&(ft!==rt&&(n.activeTexture(rt),ft=rt),n.bindTexture(F,St||bt[F]),at.type=F,at.texture=St)}function U(){const F=_t[ft];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function W(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(F){Gt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Gt.copy(F))}function vt(F){et.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),et.copy(F))}function kt(F,St){let rt=c.get(St);rt===void 0&&(rt=new WeakMap,c.set(St,rt));let at=rt.get(F);at===void 0&&(at=n.getUniformBlockIndex(St,F.name),rt.set(F,at))}function Wt(F,St){const at=c.get(St).get(F);l.get(St)!==at&&(n.uniformBlockBinding(St,at,F.__bindingPointIndex),l.set(St,at))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,_t={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,S=null,E=null,v=null,R=null,I=null,w=new $t(0,0,0),P=0,x=!1,M=null,D=null,B=null,N=null,Y=null,Gt.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:ot,bindFramebuffer:st,drawBuffers:dt,useProgram:Pt,setBlending:b,setMaterial:nt,setFlipSided:J,setCullFace:q,setLineWidth:it,setPolygonOffset:lt,setScissorTest:tt,activeTexture:T,bindTexture:y,unbindTexture:U,compressedTexImage2D:W,compressedTexImage3D:K,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:kt,uniformBlockBinding:Wt,texStorage2D:Lt,texStorage3D:ht,texSubImage2D:j,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Ft,viewport:vt,reset:oe}}function Vw(n,t,e,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return d?new OffscreenCanvas(T,y):bl("canvas")}function _(T,y,U){let W=1;const K=tt(T);if((K.width>U||K.height>U)&&(W=U/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(W*K.width),gt=Math.floor(W*K.height);h===void 0&&(h=g(j,gt));const ct=y?g(j,gt):h;return ct.width=j,ct.height=gt,ct.getContext("2d").drawImage(T,0,0,j,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+j+"x"+gt+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,y,U,W,K=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=y;if(y===n.RED&&(U===n.FLOAT&&(j=n.R32F),U===n.HALF_FLOAT&&(j=n.R16F),U===n.UNSIGNED_BYTE&&(j=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.R8UI),U===n.UNSIGNED_SHORT&&(j=n.R16UI),U===n.UNSIGNED_INT&&(j=n.R32UI),U===n.BYTE&&(j=n.R8I),U===n.SHORT&&(j=n.R16I),U===n.INT&&(j=n.R32I)),y===n.RG&&(U===n.FLOAT&&(j=n.RG32F),U===n.HALF_FLOAT&&(j=n.RG16F),U===n.UNSIGNED_BYTE&&(j=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RG8UI),U===n.UNSIGNED_SHORT&&(j=n.RG16UI),U===n.UNSIGNED_INT&&(j=n.RG32UI),U===n.BYTE&&(j=n.RG8I),U===n.SHORT&&(j=n.RG16I),U===n.INT&&(j=n.RG32I)),y===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGB8UI),U===n.UNSIGNED_SHORT&&(j=n.RGB16UI),U===n.UNSIGNED_INT&&(j=n.RGB32UI),U===n.BYTE&&(j=n.RGB8I),U===n.SHORT&&(j=n.RGB16I),U===n.INT&&(j=n.RGB32I)),y===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),U===n.UNSIGNED_INT&&(j=n.RGBA32UI),U===n.BYTE&&(j=n.RGBA8I),U===n.SHORT&&(j=n.RGBA16I),U===n.INT&&(j=n.RGBA32I)),y===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),y===n.RGBA){const gt=K?Sl:ee.getTransfer(W);U===n.FLOAT&&(j=n.RGBA32F),U===n.HALF_FLOAT&&(j=n.RGBA16F),U===n.UNSIGNED_BYTE&&(j=gt===ue?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(T,y){let U;return T?y===null||y===ss||y===ao?U=n.DEPTH24_STENCIL8:y===Vi?U=n.DEPTH32F_STENCIL8:y===ia&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ss||y===ao?U=n.DEPTH_COMPONENT24:y===Vi?U=n.DEPTH_COMPONENT32F:y===ia&&(U=n.DEPTH_COMPONENT16),U}function R(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ii&&T.minFilter!==yi?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function I(T){const y=T.target;y.removeEventListener("dispose",I),P(y),y.isVideoTexture&&u.delete(y)}function w(T){const y=T.target;y.removeEventListener("dispose",w),M(y)}function P(T){const y=i.get(T);if(y.__webglInit===void 0)return;const U=T.source,W=f.get(U);if(W){const K=W[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(T),Object.keys(W).length===0&&f.delete(U)}i.remove(T)}function x(T){const y=i.get(T);n.deleteTexture(y.__webglTexture);const U=T.source,W=f.get(U);delete W[y.__cacheKey],o.memory.textures--}function M(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let K=0;K<y.__webglFramebuffer[W].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[W][K]);else n.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)n.deleteFramebuffer(y.__webglFramebuffer[W]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=T.textures;for(let W=0,K=U.length;W<K;W++){const j=i.get(U[W]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(U[W])}i.remove(T)}let D=0;function B(){D=0}function N(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function Y(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function Z(T,y){const U=i.get(T);if(T.isVideoTexture&&it(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(U,T,y);return}}e.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function G(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){et(U,T,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function V(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){et(U,T,y);return}e.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function z(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){ut(U,T,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}const ft={[Uu]:n.REPEAT,[Kr]:n.CLAMP_TO_EDGE,[Nu]:n.MIRRORED_REPEAT},_t={[ii]:n.NEAREST,[vE]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[yi]:n.LINEAR,[_c]:n.LINEAR_MIPMAP_NEAREST,[$r]:n.LINEAR_MIPMAP_LINEAR},yt={[SE]:n.NEVER,[RE]:n.ALWAYS,[EE]:n.LESS,[yg]:n.LEQUAL,[bE]:n.EQUAL,[wE]:n.GEQUAL,[TE]:n.GREATER,[AE]:n.NOTEQUAL};function wt(T,y){if(y.type===Vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===yi||y.magFilter===_c||y.magFilter===Sa||y.magFilter===$r||y.minFilter===yi||y.minFilter===_c||y.minFilter===Sa||y.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ft[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ft[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ft[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,_t[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,_t[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,yt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ii||y.minFilter!==Sa&&y.minFilter!==$r||y.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Gt(T,y){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",I));const W=y.source;let K=f.get(W);K===void 0&&(K={},f.set(W,K));const j=Y(y);if(j!==T.__cacheKey){K[j]===void 0&&(K[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[j].usedTimes++;const gt=K[T.__cacheKey];gt!==void 0&&(K[T.__cacheKey].usedTimes--,gt.usedTimes===0&&x(y)),T.__cacheKey=j,T.__webglTexture=K[j].texture}return U}function et(T,y,U){let W=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=n.TEXTURE_3D);const K=Gt(T,y),j=y.source;e.bindTexture(W,T.__webglTexture,n.TEXTURE0+U);const gt=i.get(j);if(j.version!==gt.__version||K===!0){e.activeTexture(n.TEXTURE0+U);const ct=ee.getPrimaries(ee.workingColorSpace),mt=y.colorSpace===dr?null:ee.getPrimaries(y.colorSpace),Lt=y.colorSpace===dr||ct===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let ht=_(y.image,!1,r.maxTextureSize);ht=lt(y,ht);const Mt=s.convert(y.format,y.colorSpace),Dt=s.convert(y.type);let Ft=E(y.internalFormat,Mt,Dt,y.colorSpace,y.isVideoTexture);wt(W,y);let vt;const kt=y.mipmaps,Wt=y.isVideoTexture!==!0,oe=gt.__version===void 0||K===!0,F=j.dataReady,St=R(y,ht);if(y.isDepthTexture)Ft=v(y.format===lo,y.type),oe&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Ft,ht.width,ht.height,0,Mt,Dt,null));else if(y.isDataTexture)if(kt.length>0){Wt&&oe&&e.texStorage2D(n.TEXTURE_2D,St,Ft,kt[0].width,kt[0].height);for(let rt=0,at=kt.length;rt<at;rt++)vt=kt[rt],Wt?F&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,vt.width,vt.height,Mt,Dt,vt.data):e.texImage2D(n.TEXTURE_2D,rt,Ft,vt.width,vt.height,0,Mt,Dt,vt.data);y.generateMipmaps=!1}else Wt?(oe&&e.texStorage2D(n.TEXTURE_2D,St,Ft,ht.width,ht.height),F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,Mt,Dt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Ft,ht.width,ht.height,0,Mt,Dt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Ft,kt[0].width,kt[0].height,ht.depth);for(let rt=0,at=kt.length;rt<at;rt++)if(vt=kt[rt],y.format!==ti)if(Mt!==null)if(Wt){if(F)if(y.layerUpdates.size>0){const At=op(vt.width,vt.height,y.format,y.type);for(const Tt of y.layerUpdates){const Xt=vt.data.subarray(Tt*At/vt.data.BYTES_PER_ELEMENT,(Tt+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,Tt,vt.width,vt.height,1,Mt,Xt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,ht.depth,Mt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Ft,vt.width,vt.height,ht.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,vt.width,vt.height,ht.depth,Mt,Dt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Ft,vt.width,vt.height,ht.depth,0,Mt,Dt,vt.data)}else{Wt&&oe&&e.texStorage2D(n.TEXTURE_2D,St,Ft,kt[0].width,kt[0].height);for(let rt=0,at=kt.length;rt<at;rt++)vt=kt[rt],y.format!==ti?Mt!==null?Wt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,vt.width,vt.height,Mt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Ft,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?F&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,vt.width,vt.height,Mt,Dt,vt.data):e.texImage2D(n.TEXTURE_2D,rt,Ft,vt.width,vt.height,0,Mt,Dt,vt.data)}else if(y.isDataArrayTexture)if(Wt){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,Ft,ht.width,ht.height,ht.depth),F)if(y.layerUpdates.size>0){const rt=op(ht.width,ht.height,y.format,y.type);for(const at of y.layerUpdates){const At=ht.data.subarray(at*rt/ht.data.BYTES_PER_ELEMENT,(at+1)*rt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,Mt,Dt,At)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Dt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,Mt,Dt,ht.data);else if(y.isData3DTexture)Wt?(oe&&e.texStorage3D(n.TEXTURE_3D,St,Ft,ht.width,ht.height,ht.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Mt,Dt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,Mt,Dt,ht.data);else if(y.isFramebufferTexture){if(oe)if(Wt)e.texStorage2D(n.TEXTURE_2D,St,Ft,ht.width,ht.height);else{let rt=ht.width,at=ht.height;for(let At=0;At<St;At++)e.texImage2D(n.TEXTURE_2D,At,Ft,rt,at,0,Mt,Dt,null),rt>>=1,at>>=1}}else if(kt.length>0){if(Wt&&oe){const rt=tt(kt[0]);e.texStorage2D(n.TEXTURE_2D,St,Ft,rt.width,rt.height)}for(let rt=0,at=kt.length;rt<at;rt++)vt=kt[rt],Wt?F&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Mt,Dt,vt):e.texImage2D(n.TEXTURE_2D,rt,Ft,Mt,Dt,vt);y.generateMipmaps=!1}else if(Wt){if(oe){const rt=tt(ht);e.texStorage2D(n.TEXTURE_2D,St,Ft,rt.width,rt.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Dt,ht)}else e.texImage2D(n.TEXTURE_2D,0,Ft,Mt,Dt,ht);m(y)&&p(W),gt.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ut(T,y,U){if(y.image.length!==6)return;const W=Gt(T,y),K=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+U);const j=i.get(K);if(K.version!==j.__version||W===!0){e.activeTexture(n.TEXTURE0+U);const gt=ee.getPrimaries(ee.workingColorSpace),ct=y.colorSpace===dr?null:ee.getPrimaries(y.colorSpace),mt=y.colorSpace===dr||gt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Lt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let at=0;at<6;at++)!Lt&&!ht?Mt[at]=_(y.image[at],!0,r.maxCubemapSize):Mt[at]=ht?y.image[at].image:y.image[at],Mt[at]=lt(y,Mt[at]);const Dt=Mt[0],Ft=s.convert(y.format,y.colorSpace),vt=s.convert(y.type),kt=E(y.internalFormat,Ft,vt,y.colorSpace),Wt=y.isVideoTexture!==!0,oe=j.__version===void 0||W===!0,F=K.dataReady;let St=R(y,Dt);wt(n.TEXTURE_CUBE_MAP,y);let rt;if(Lt){Wt&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,kt,Dt.width,Dt.height);for(let at=0;at<6;at++){rt=Mt[at].mipmaps;for(let At=0;At<rt.length;At++){const Tt=rt[At];y.format!==ti?Ft!==null?Wt?F&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,Tt.width,Tt.height,Ft,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,0,0,Tt.width,Tt.height,Ft,vt,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At,kt,Tt.width,Tt.height,0,Ft,vt,Tt.data)}}}else{if(rt=y.mipmaps,Wt&&oe){rt.length>0&&St++;const at=tt(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,kt,at.width,at.height)}for(let at=0;at<6;at++)if(ht){Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Mt[at].width,Mt[at].height,Ft,vt,Mt[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,kt,Mt[at].width,Mt[at].height,0,Ft,vt,Mt[at].data);for(let At=0;At<rt.length;At++){const Xt=rt[At].image[at].image;Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Xt.width,Xt.height,Ft,vt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,kt,Xt.width,Xt.height,0,Ft,vt,Xt.data)}}else{Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ft,vt,Mt[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,kt,Ft,vt,Mt[at]);for(let At=0;At<rt.length;At++){const Tt=rt[At];Wt?F&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,0,0,Ft,vt,Tt.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,At+1,kt,Ft,vt,Tt.image[at])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),j.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function bt(T,y,U,W,K,j){const gt=s.convert(U.format,U.colorSpace),ct=s.convert(U.type),mt=E(U.internalFormat,gt,ct,U.colorSpace),Lt=i.get(y),ht=i.get(U);if(ht.__renderTarget=y,!Lt.__hasExternalTextures){const Mt=Math.max(1,y.width>>j),Dt=Math.max(1,y.height>>j);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,j,mt,Mt,Dt,y.depth,0,gt,ct,null):e.texImage2D(K,j,mt,Mt,Dt,0,gt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,K,ht.__webglTexture,0,J(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,K,ht.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function O(T,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){const W=y.depthTexture,K=W&&W.isDepthTexture?W.type:null,j=v(y.stencilBuffer,K),gt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=J(y);q(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,j,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,j,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,j,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gt,n.RENDERBUFFER,T)}else{const W=y.textures;for(let K=0;K<W.length;K++){const j=W[K],gt=s.convert(j.format,j.colorSpace),ct=s.convert(j.type),mt=E(j.internalFormat,gt,ct,j.colorSpace),Lt=J(y);U&&q(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,mt,y.width,y.height):q(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,mt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,mt,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ot(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(y.depthTexture);W.__renderTarget=y,(!W.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const K=W.__webglTexture,j=J(y);if(y.depthTexture.format===Ys)q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(y.depthTexture.format===lo)q(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function st(T){const y=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=W}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ot(y.__webglFramebuffer,T)}else if(U){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=n.createRenderbuffer(),O(y.__webglDepthbuffer[W],T,!1);else{const K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),O(y.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,K)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(T,y,U){const W=i.get(T);y!==void 0&&bt(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&st(T)}function Pt(T){const y=T.texture,U=i.get(T),W=i.get(y);T.addEventListener("dispose",w);const K=T.textures,j=T.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=y.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ct]=[];for(let mt=0;mt<y.mipmaps.length;mt++)U.__webglFramebuffer[ct][mt]=n.createFramebuffer()}else U.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)U.__webglFramebuffer[ct]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(gt)for(let ct=0,mt=K.length;ct<mt;ct++){const Lt=i.get(K[ct]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&q(T)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ct=0;ct<K.length;ct++){const mt=K[ct];U.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[ct]);const Lt=s.convert(mt.format,mt.colorSpace),ht=s.convert(mt.type),Mt=E(mt.internalFormat,Lt,ht,mt.colorSpace,T.isXRRenderTarget===!0),Dt=J(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,Mt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,U.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),O(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),wt(n.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)bt(U.__webglFramebuffer[ct][mt],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else bt(U.__webglFramebuffer[ct],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,mt=K.length;ct<mt;ct++){const Lt=K[ct],ht=i.get(Lt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),wt(n.TEXTURE_2D,Lt),bt(U.__webglFramebuffer,T,Lt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),m(Lt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,W.__webglTexture),wt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)bt(U.__webglFramebuffer[mt],T,y,n.COLOR_ATTACHMENT0,ct,mt);else bt(U.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ct,0);m(y)&&p(ct),e.unbindTexture()}T.depthBuffer&&st(T)}function C(T){const y=T.textures;for(let U=0,W=y.length;U<W;U++){const K=y[U];if(m(K)){const j=S(T),gt=i.get(K).__webglTexture;e.bindTexture(j,gt),p(j),e.unbindTexture()}}}const L=[],b=[];function nt(T){if(T.samples>0){if(q(T)===!1){const y=T.textures,U=T.width,W=T.height;let K=n.COLOR_BUFFER_BIT;const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(T),ct=y.length>1;if(ct)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ct){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);const Lt=i.get(y[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Lt,0)}n.blitFramebuffer(0,0,U,W,0,0,U,W,K,n.NEAREST),l===!0&&(L.length=0,b.length=0,L.push(n.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(L.push(j),b.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[mt]);const Lt=i.get(y[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Lt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function J(T){return Math.min(r.maxSamples,T.samples)}function q(T){const y=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function it(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function lt(T,y){const U=T.colorSpace,W=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==co&&U!==dr&&(ee.getTransfer(U)===ue?(W!==ti||K!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=dt,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=q}function Gw(n,t){function e(i,r=dr){let s;const o=ee.getTransfer(r);if(i===$i)return n.UNSIGNED_BYTE;if(i===Jh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cg)return n.BYTE;if(i===ug)return n.SHORT;if(i===ia)return n.UNSIGNED_SHORT;if(i===Zh)return n.INT;if(i===ss)return n.UNSIGNED_INT;if(i===Vi)return n.FLOAT;if(i===ua)return n.HALF_FLOAT;if(i===fg)return n.ALPHA;if(i===dg)return n.RGB;if(i===ti)return n.RGBA;if(i===pg)return n.LUMINANCE;if(i===mg)return n.LUMINANCE_ALPHA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===lo)return n.DEPTH_STENCIL;if(i===_g)return n.RED;if(i===tf)return n.RED_INTEGER;if(i===gg)return n.RG;if(i===ef)return n.RG_INTEGER;if(i===nf)return n.RGBA_INTEGER;if(i===Ja||i===Qa||i===tl||i===el)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ou||i===Fu||i===Bu||i===ku)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ku)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zu||i===Hu||i===Vu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zu||i===Hu)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Gu||i===Wu||i===Xu||i===qu||i===Yu||i===ju||i===Ku||i===$u||i===Zu||i===Ju||i===Qu||i===th||i===eh||i===nh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ju)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ku)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ju)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qu)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===th)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nh)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nl||i===ih||i===rh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===nl)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vg||i===sh||i===oh||i===ah)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ao?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Ww={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ww)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new hn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ar({vertexShader:Xw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jw extends us{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new Yw,m=e.getContextAttributes();let p=null,S=null;const E=[],v=[],R=new Ht;let I=null;const w=new Gn;w.viewport=new we;const P=new Gn;P.viewport=new we;const x=[w,P],M=new db;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ut=E[et];return ut===void 0&&(ut=new Xc,E[et]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(et){let ut=E[et];return ut===void 0&&(ut=new Xc,E[et]=ut),ut.getGripSpace()},this.getHand=function(et){let ut=E[et];return ut===void 0&&(ut=new Xc,E[et]=ut),ut.getHandSpace()};function N(et){const ut=v.indexOf(et.inputSource);if(ut===-1)return;const bt=E[ut];bt!==void 0&&(bt.update(et.inputSource,et.frame,c||o),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function Y(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",Z);for(let et=0;et<E.length;et++){const ut=v[et];ut!==null&&(v[et]=null,E[et].disconnect(ut))}D=null,B=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,S=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(R),r.renderState.layers===void 0){const ut={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ut),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new os(d.framebufferWidth,d.framebufferHeight,{format:ti,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ut=null,bt=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=m.stencil?lo:Ys,bt=m.stencil?ao:ss);const ot={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(ot),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new os(f.textureWidth,f.textureHeight,{format:ti,type:$i,depthTexture:new Dg(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Gt.setContext(r),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(et){for(let ut=0;ut<et.removed.length;ut++){const bt=et.removed[ut],O=v.indexOf(bt);O>=0&&(v[O]=null,E[O].disconnect(bt))}for(let ut=0;ut<et.added.length;ut++){const bt=et.added[ut];let O=v.indexOf(bt);if(O===-1){for(let st=0;st<E.length;st++)if(st>=v.length){v.push(bt),O=st;break}else if(v[st]===null){v[st]=bt,O=st;break}if(O===-1)break}const ot=E[O];ot&&ot.connect(bt)}}const G=new X,V=new X;function z(et,ut,bt){G.setFromMatrixPosition(ut.matrixWorld),V.setFromMatrixPosition(bt.matrixWorld);const O=G.distanceTo(V),ot=ut.projectionMatrix.elements,st=bt.projectionMatrix.elements,dt=ot[14]/(ot[10]-1),Pt=ot[14]/(ot[10]+1),C=(ot[9]+1)/ot[5],L=(ot[9]-1)/ot[5],b=(ot[8]-1)/ot[0],nt=(st[8]+1)/st[0],J=dt*b,q=dt*nt,it=O/(-b+nt),lt=it*-b;if(ut.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(lt),et.translateZ(it),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),ot[10]===-1)et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const tt=dt+it,T=Pt+it,y=J-lt,U=q+(O-lt),W=C*Pt/T*tt,K=L*Pt/T*tt;et.projectionMatrix.makePerspective(y,U,W,K,tt,T),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function ft(et,ut){ut===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ut.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;let ut=et.near,bt=et.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),M.near=P.near=w.near=ut,M.far=P.far=w.far=bt,(D!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,B=M.far),w.layers.mask=et.layers.mask|2,P.layers.mask=et.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;const O=et.parent,ot=M.cameras;ft(M,O);for(let st=0;st<ot.length;st++)ft(ot[st],O);ot.length===2?z(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),_t(et,M,O)};function _t(et,ut,bt){bt===null?et.matrix.copy(ut.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ut.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ut.projectionMatrix),et.projectionMatrixInverse.copy(ut.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=lh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let yt=null;function wt(et,ut){if(u=ut.getViewerPose(c||o),g=ut,u!==null){const bt=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let O=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let st=0;st<bt.length;st++){const dt=bt[st];let Pt=null;if(d!==null)Pt=d.getViewport(dt);else{const L=h.getViewSubImage(f,dt);Pt=L.viewport,st===0&&(t.setRenderTargetTextures(S,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(S))}let C=x[st];C===void 0&&(C=new Gn,C.layers.enable(st),C.viewport=new we,x[st]=C),C.matrix.fromArray(dt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(dt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),st===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(C)}const ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const st=h.getDepthInformation(bt[0]);st&&st.isValid&&st.texture&&_.init(t,st,r.renderState)}}for(let bt=0;bt<E.length;bt++){const O=v[bt],ot=E[bt];O!==null&&ot!==void 0&&ot.update(O,ut,c||o)}yt&&yt(et,ut),ut.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Gt=new Ug;Gt.setAnimationLoop(wt),this.setAnimationLoop=function(et){yt=et},this.dispose=function(){}}}const zr=new Ai,Kw=new Ee;function $w(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Rg(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,v=S.envMapRotation;E&&(m.envMap.value=E,zr.copy(v),zr.x*=-1,zr.y*=-1,zr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(zr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zw(n,t,e,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const v=E.program;i.uniformBlockBinding(S,v)}function c(S,E){let v=r[S.id];v===void 0&&(g(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",m));const R=E.program;i.updateUBOMapping(S,R);const I=t.render.frame;s[S.id]!==I&&(f(S),s[S.id]=I)}function u(S){const E=h();S.__bindingPointIndex=E;const v=n.createBuffer(),R=S.__size,I=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=r[S.id],v=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let I=0,w=v.length;I<w;I++){const P=Array.isArray(v[I])?v[I]:[v[I]];for(let x=0,M=P.length;x<M;x++){const D=P[x];if(d(D,I,x,R)===!0){const B=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let Z=0;Z<N.length;Z++){const G=N[Z],V=_(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,B+Y,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,E,v,R){const I=S.value,w=E+"_"+v;if(R[w]===void 0)return typeof I=="number"||typeof I=="boolean"?R[w]=I:R[w]=I.clone(),!0;{const P=R[w];if(typeof I=="number"||typeof I=="boolean"){if(P!==I)return R[w]=I,!0}else if(P.equals(I)===!1)return P.copy(I),!0}return!1}function g(S){const E=S.uniforms;let v=0;const R=16;for(let w=0,P=E.length;w<P;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let M=0,D=x.length;M<D;M++){const B=x[M],N=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,Z=N.length;Y<Z;Y++){const G=N[Y],V=_(G),z=v%R,ft=z%V.boundary,_t=z+ft;v+=ft,_t!==0&&R-_t<V.storage&&(v+=R-_t),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=V.storage}}}const I=v%R;return I>0&&(v+=R-I),S.__size=v,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Jw{constructor(t={}){const{canvas:e=DE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=yr,this.toneMappingExposure=1;const v=this;let R=!1,I=0,w=0,P=null,x=-1,M=null;const D=new we,B=new we;let N=null;const Y=new $t(0);let Z=0,G=e.width,V=e.height,z=1,ft=null,_t=null;const yt=new we(0,0,G,V),wt=new we(0,0,G,V);let Gt=!1;const et=new af;let ut=!1,bt=!1;const O=new Ee,ot=new Ee,st=new X,dt=new we,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function L(){return P===null?z:1}let b=i;function nt(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$h}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),b===null){const k="webgl2";if(b=nt(k,A),b===null)throw nt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,q,it,lt,tt,T,y,U,W,K,j,gt,ct,mt,Lt,ht,Mt,Dt,Ft,vt,kt,Wt,oe,F;function St(){J=new a1(b),J.init(),Wt=new Gw(b,J),q=new e1(b,J,t,Wt),it=new Hw(b,J),q.reverseDepthBuffer&&f&&it.buffers.depth.setReversed(!0),lt=new u1(b),tt=new Rw,T=new Vw(b,J,it,tt,q,Wt,lt),y=new i1(v),U=new o1(v),W=new gb(b),oe=new QA(b,W),K=new l1(b,W,lt,oe),j=new f1(b,K,W,lt),Ft=new h1(b,q,T),ht=new n1(tt),gt=new ww(v,y,U,J,q,oe,ht),ct=new $w(v,tt),mt=new Pw,Lt=new Ow(J),Dt=new JA(v,y,U,it,j,d,l),Mt=new kw(v,j,q),F=new Zw(b,lt,q,it),vt=new t1(b,J,lt),kt=new c1(b,J,lt),lt.programs=gt.programs,v.capabilities=q,v.extensions=J,v.properties=tt,v.renderLists=mt,v.shadowMap=Mt,v.state=it,v.info=lt}St();const rt=new jw(v,b);this.xr=rt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(G,V,!1))},this.getSize=function(A){return A.set(G,V)},this.setSize=function(A,k,$=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,V=k,e.width=Math.floor(A*z),e.height=Math.floor(k*z),$===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(G*z,V*z).floor()},this.setDrawingBufferSize=function(A,k,$){G=A,V=k,z=$,e.width=Math.floor(A*$),e.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(yt)},this.setViewport=function(A,k,$,Q){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,k,$,Q),it.viewport(D.copy(yt).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(wt)},this.setScissor=function(A,k,$,Q){A.isVector4?wt.set(A.x,A.y,A.z,A.w):wt.set(A,k,$,Q),it.scissor(B.copy(wt).multiplyScalar(z).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){it.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){ft=A},this.setTransparentSort=function(A){_t=A},this.getClearColor=function(A){return A.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(A=!0,k=!0,$=!0){let Q=0;if(A){let H=!1;if(P!==null){const pt=P.texture.format;H=pt===nf||pt===ef||pt===tf}if(H){const pt=P.texture.type,Et=pt===$i||pt===ss||pt===ia||pt===ao||pt===Jh||pt===Qh,Rt=Dt.getClearColor(),Ct=Dt.getClearAlpha(),zt=Rt.r,Vt=Rt.g,It=Rt.b;Et?(g[0]=zt,g[1]=Vt,g[2]=It,g[3]=Ct,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=zt,_[1]=Vt,_[2]=It,_[3]=Ct,b.clearBufferiv(b.COLOR,0,_))}else Q|=b.COLOR_BUFFER_BIT}k&&(Q|=b.DEPTH_BUFFER_BIT),$&&(Q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Dt.dispose(),mt.dispose(),Lt.dispose(),tt.dispose(),y.dispose(),U.dispose(),j.dispose(),oe.dispose(),F.dispose(),gt.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ff),rt.removeEventListener("sessionend",df),Cr.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=lt.autoReset,k=Mt.enabled,$=Mt.autoUpdate,Q=Mt.needsUpdate,H=Mt.type;St(),lt.autoReset=A,Mt.enabled=k,Mt.autoUpdate=$,Mt.needsUpdate=Q,Mt.type=H}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Xt(A){const k=A.target;k.removeEventListener("dispose",Xt),be(k)}function be(A){$e(A),tt.remove(A)}function $e(A){const k=tt.get(A).programs;k!==void 0&&(k.forEach(function($){gt.releaseProgram($)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,Q,H,pt){k===null&&(k=Pt);const Et=H.isMesh&&H.matrixWorld.determinant()<0,Rt=zg(A,k,$,Q,H);it.setMaterial(Q,Et);let Ct=$.index,zt=1;if(Q.wireframe===!0){if(Ct=K.getWireframeAttribute($),Ct===void 0)return;zt=2}const Vt=$.drawRange,It=$.attributes.position;let Jt=Vt.start*zt,ne=(Vt.start+Vt.count)*zt;pt!==null&&(Jt=Math.max(Jt,pt.start*zt),ne=Math.min(ne,(pt.start+pt.count)*zt)),Ct!==null?(Jt=Math.max(Jt,0),ne=Math.min(ne,Ct.count)):It!=null&&(Jt=Math.max(Jt,0),ne=Math.min(ne,It.count));const Le=ne-Jt;if(Le<0||Le===1/0)return;oe.setup(H,Q,Rt,$,Ct);let Te,Qt=vt;if(Ct!==null&&(Te=W.get(Ct),Qt=kt,Qt.setIndex(Te)),H.isMesh)Q.wireframe===!0?(it.setLineWidth(Q.wireframeLinewidth*L()),Qt.setMode(b.LINES)):Qt.setMode(b.TRIANGLES);else if(H.isLine){let Ut=Q.linewidth;Ut===void 0&&(Ut=1),it.setLineWidth(Ut*L()),H.isLineSegments?Qt.setMode(b.LINES):H.isLineLoop?Qt.setMode(b.LINE_LOOP):Qt.setMode(b.LINE_STRIP)}else H.isPoints?Qt.setMode(b.POINTS):H.isSprite&&Qt.setMode(b.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Qt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Qt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ut=H._multiDrawStarts,Xe=H._multiDrawCounts,ie=H._multiDrawCount,Kn=Ct?W.get(Ct).bytesPerElement:1,hs=tt.get(Q).currentProgram.getUniforms();for(let bn=0;bn<ie;bn++)hs.setValue(b,"_gl_DrawID",bn),Qt.render(Ut[bn]/Kn,Xe[bn])}else if(H.isInstancedMesh)Qt.renderInstances(Jt,Le,H.count);else if($.isInstancedBufferGeometry){const Ut=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Xe=Math.min($.instanceCount,Ut);Qt.renderInstances(Jt,Le,Xe)}else Qt.render(Jt,Le)};function ae(A,k,$){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,_a(A,k,$),A.side=Tr,A.needsUpdate=!0,_a(A,k,$),A.side=Hi):_a(A,k,$)}this.compile=function(A,k,$=null){$===null&&($=A),p=Lt.get($),p.init(k),E.push(p),$.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),A!==$&&A.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const Q=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const pt=H.material;if(pt)if(Array.isArray(pt))for(let Et=0;Et<pt.length;Et++){const Rt=pt[Et];ae(Rt,$,H),Q.add(Rt)}else ae(pt,$,H),Q.add(pt)}),E.pop(),p=null,Q},this.compileAsync=function(A,k,$=null){const Q=this.compile(A,k,$);return new Promise(H=>{function pt(){if(Q.forEach(function(Et){tt.get(Et).currentProgram.isReady()&&Q.delete(Et)}),Q.size===0){H(A);return}setTimeout(pt,10)}J.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let jn=null;function wi(A){jn&&jn(A)}function ff(){Cr.stop()}function df(){Cr.start()}const Cr=new Ug;Cr.setAnimationLoop(wi),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(A){jn=A,rt.setAnimationLoop(A),A===null?Cr.stop():Cr.start()},rt.addEventListener("sessionstart",ff),rt.addEventListener("sessionend",df),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(k),k=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,P),p=Lt.get(A,E.length),p.init(k),E.push(p),ot.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),et.setFromProjectionMatrix(ot),bt=this.localClippingEnabled,ut=ht.init(this.clippingPlanes,bt),m=mt.get(A,S.length),m.init(),S.push(m),rt.enabled===!0&&rt.isPresenting===!0){const pt=v.xr.getDepthSensingMesh();pt!==null&&Wl(pt,k,-1/0,v.sortObjects)}Wl(A,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ft,_t),C=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,C&&Dt.addToRenderList(m,A),this.info.render.frame++,ut===!0&&ht.beginShadows();const $=p.state.shadowsArray;Mt.render($,A,k),ut===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const pt=k.cameras;if(H.length>0)for(let Et=0,Rt=pt.length;Et<Rt;Et++){const Ct=pt[Et];mf(Q,H,A,Ct)}C&&Dt.render(A);for(let Et=0,Rt=pt.length;Et<Rt;Et++){const Ct=pt[Et];pf(m,A,Ct,Ct.viewport)}}else H.length>0&&mf(Q,H,A,k),C&&Dt.render(A),pf(m,A,k);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(v,A,k),oe.resetDefaultState(),x=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],ut===!0&&ht.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Wl(A,k,$,Q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||et.intersectsSprite(A)){Q&&dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ot);const Et=j.update(A),Rt=A.material;Rt.visible&&m.push(A,Et,Rt,$,dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||et.intersectsObject(A))){const Et=j.update(A),Rt=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),dt.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),dt.copy(Et.boundingSphere.center)),dt.applyMatrix4(A.matrixWorld).applyMatrix4(ot)),Array.isArray(Rt)){const Ct=Et.groups;for(let zt=0,Vt=Ct.length;zt<Vt;zt++){const It=Ct[zt],Jt=Rt[It.materialIndex];Jt&&Jt.visible&&m.push(A,Et,Jt,$,dt.z,It)}}else Rt.visible&&m.push(A,Et,Rt,$,dt.z,null)}}const pt=A.children;for(let Et=0,Rt=pt.length;Et<Rt;Et++)Wl(pt[Et],k,$,Q)}function pf(A,k,$,Q){const H=A.opaque,pt=A.transmissive,Et=A.transparent;p.setupLightsView($),ut===!0&&ht.setGlobalState(v.clippingPlanes,$),Q&&it.viewport(D.copy(Q)),H.length>0&&ma(H,k,$),pt.length>0&&ma(pt,k,$),Et.length>0&&ma(Et,k,$),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function mf(A,k,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new os(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?ua:$i,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const pt=p.state.transmissionRenderTarget[Q.id],Et=Q.viewport||D;pt.setSize(Et.z,Et.w);const Rt=v.getRenderTarget();v.setRenderTarget(pt),v.getClearColor(Y),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),C&&Dt.render($);const Ct=v.toneMapping;v.toneMapping=yr;const zt=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ut===!0&&ht.setGlobalState(v.clippingPlanes,Q),ma(A,$,Q),T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt),J.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let It=0,Jt=k.length;It<Jt;It++){const ne=k[It],Le=ne.object,Te=ne.geometry,Qt=ne.material,Ut=ne.group;if(Qt.side===Hi&&Le.layers.test(Q.layers)){const Xe=Qt.side;Qt.side=Sn,Qt.needsUpdate=!0,_f(Le,$,Q,Te,Qt,Ut),Qt.side=Xe,Qt.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(pt),T.updateRenderTargetMipmap(pt))}v.setRenderTarget(Rt),v.setClearColor(Y,Z),zt!==void 0&&(Q.viewport=zt),v.toneMapping=Ct}function ma(A,k,$){const Q=k.isScene===!0?k.overrideMaterial:null;for(let H=0,pt=A.length;H<pt;H++){const Et=A[H],Rt=Et.object,Ct=Et.geometry,zt=Q===null?Et.material:Q,Vt=Et.group;Rt.layers.test($.layers)&&_f(Rt,k,$,Ct,zt,Vt)}}function _f(A,k,$,Q,H,pt){A.onBeforeRender(v,k,$,Q,H,pt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(v,k,$,Q,A,pt),H.transparent===!0&&H.side===Hi&&H.forceSinglePass===!1?(H.side=Sn,H.needsUpdate=!0,v.renderBufferDirect($,k,Q,H,A,pt),H.side=Tr,H.needsUpdate=!0,v.renderBufferDirect($,k,Q,H,A,pt),H.side=Hi):v.renderBufferDirect($,k,Q,H,A,pt),A.onAfterRender(v,k,$,Q,H,pt)}function _a(A,k,$){k.isScene!==!0&&(k=Pt);const Q=tt.get(A),H=p.state.lights,pt=p.state.shadowsArray,Et=H.state.version,Rt=gt.getParameters(A,H.state,pt,k,$),Ct=gt.getProgramCacheKey(Rt);let zt=Q.programs;Q.environment=A.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(A.isMeshStandardMaterial?U:y).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Xt),zt=new Map,Q.programs=zt);let Vt=zt.get(Ct);if(Vt!==void 0){if(Q.currentProgram===Vt&&Q.lightsStateVersion===Et)return vf(A,Rt),Vt}else Rt.uniforms=gt.getUniforms(A),A.onBeforeCompile(Rt,v),Vt=gt.acquireProgram(Rt,Ct),zt.set(Ct,Vt),Q.uniforms=Rt.uniforms;const It=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(It.clippingPlanes=ht.uniform),vf(A,Rt),Q.needsLights=Vg(A),Q.lightsStateVersion=Et,Q.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.directionalShadowMap.value=H.state.directionalShadowMap,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotShadowMap.value=H.state.spotShadowMap,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMap.value=H.state.pointShadowMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),Q.currentProgram=Vt,Q.uniformsList=null,Vt}function gf(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=rl.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function vf(A,k){const $=tt.get(A);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function zg(A,k,$,Q,H){k.isScene!==!0&&(k=Pt),T.resetTextureUnits();const pt=k.fog,Et=Q.isMeshStandardMaterial?k.environment:null,Rt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:co,Ct=(Q.isMeshStandardMaterial?U:y).get(Q.envMap||Et),zt=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Vt=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),It=!!$.morphAttributes.position,Jt=!!$.morphAttributes.normal,ne=!!$.morphAttributes.color;let Le=yr;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Le=v.toneMapping);const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qt=Te!==void 0?Te.length:0,Ut=tt.get(Q),Xe=p.state.lights;if(ut===!0&&(bt===!0||A!==M)){const rn=A===M&&Q.id===x;ht.setState(Q,A,rn)}let ie=!1;Q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Xe.state.version||Ut.outputColorSpace!==Rt||H.isBatchedMesh&&Ut.batching===!1||!H.isBatchedMesh&&Ut.batching===!0||H.isBatchedMesh&&Ut.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ut.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ut.instancing===!1||!H.isInstancedMesh&&Ut.instancing===!0||H.isSkinnedMesh&&Ut.skinning===!1||!H.isSkinnedMesh&&Ut.skinning===!0||H.isInstancedMesh&&Ut.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ut.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ut.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ut.instancingMorph===!1&&H.morphTexture!==null||Ut.envMap!==Ct||Q.fog===!0&&Ut.fog!==pt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==ht.numPlanes||Ut.numIntersection!==ht.numIntersection)||Ut.vertexAlphas!==zt||Ut.vertexTangents!==Vt||Ut.morphTargets!==It||Ut.morphNormals!==Jt||Ut.morphColors!==ne||Ut.toneMapping!==Le||Ut.morphTargetsCount!==Qt)&&(ie=!0):(ie=!0,Ut.__version=Q.version);let Kn=Ut.currentProgram;ie===!0&&(Kn=_a(Q,k,H));let hs=!1,bn=!1,fo=!1;const ge=Kn.getUniforms(),Fn=Ut.uniforms;if(it.useProgram(Kn.program)&&(hs=!0,bn=!0,fo=!0),Q.id!==x&&(x=Q.id,bn=!0),hs||M!==A){it.buffers.depth.getReversed()?(O.copy(A.projectionMatrix),LE(O),UE(O),ge.setValue(b,"projectionMatrix",O)):ge.setValue(b,"projectionMatrix",A.projectionMatrix),ge.setValue(b,"viewMatrix",A.matrixWorldInverse);const fn=ge.map.cameraPosition;fn!==void 0&&fn.setValue(b,st.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&ge.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ge.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,bn=!0,fo=!0)}if(H.isSkinnedMesh){ge.setOptional(b,H,"bindMatrix"),ge.setOptional(b,H,"bindMatrixInverse");const rn=H.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),ge.setValue(b,"boneTexture",rn.boneTexture,T))}H.isBatchedMesh&&(ge.setOptional(b,H,"batchingTexture"),ge.setValue(b,"batchingTexture",H._matricesTexture,T),ge.setOptional(b,H,"batchingIdTexture"),ge.setValue(b,"batchingIdTexture",H._indirectTexture,T),ge.setOptional(b,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(b,"batchingColorTexture",H._colorsTexture,T));const Bn=$.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&Ft.update(H,$,Kn),(bn||Ut.receiveShadow!==H.receiveShadow)&&(Ut.receiveShadow=H.receiveShadow,ge.setValue(b,"receiveShadow",H.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=Ct,Fn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(Fn.envMapIntensity.value=k.environmentIntensity),bn&&(ge.setValue(b,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&Hg(Fn,fo),pt&&Q.fog===!0&&ct.refreshFogUniforms(Fn,pt),ct.refreshMaterialUniforms(Fn,Q,z,V,p.state.transmissionRenderTarget[A.id]),rl.upload(b,gf(Ut),Fn,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(rl.upload(b,gf(Ut),Fn,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ge.setValue(b,"center",H.center),ge.setValue(b,"modelViewMatrix",H.modelViewMatrix),ge.setValue(b,"normalMatrix",H.normalMatrix),ge.setValue(b,"modelMatrix",H.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const rn=Q.uniformsGroups;for(let fn=0,Xl=rn.length;fn<Xl;fn++){const Pr=rn[fn];F.update(Pr,Kn),F.bind(Pr,Kn)}}return Kn}function Hg(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Vg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,k,$){tt.get(A.texture).__webglTexture=k,tt.get(A.depthTexture).__webglTexture=$;const Q=tt.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const $=tt.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){P=A,I=k,w=$;let Q=!0,H=null,pt=!1,Et=!1;if(A){const Ct=tt.get(A);if(Ct.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(b.FRAMEBUFFER,null),Q=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Ct.__hasExternalTextures)T.rebindTextures(A,tt.get(A.texture).__webglTexture,tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const It=A.depthTexture;if(Ct.__boundDepthTexture!==It){if(It!==null&&tt.has(It)&&(A.width!==It.image.width||A.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const zt=A.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);const Vt=tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[k])?H=Vt[k][$]:H=Vt[k],pt=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?H=tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?H=Vt[$]:H=Vt,D.copy(A.viewport),B.copy(A.scissor),N=A.scissorTest}else D.copy(yt).multiplyScalar(z).floor(),B.copy(wt).multiplyScalar(z).floor(),N=Gt;if(it.bindFramebuffer(b.FRAMEBUFFER,H)&&Q&&it.drawBuffers(A,H),it.viewport(D),it.scissor(B),it.setScissorTest(N),pt){const Ct=tt.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,$)}else if(Et){const Ct=tt.get(A.texture),zt=k||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ct.__webglTexture,$||0,zt)}x=-1},this.readRenderTargetPixels=function(A,k,$,Q,H,pt,Et){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){it.bindFramebuffer(b.FRAMEBUFFER,Rt);try{const Ct=A.texture,zt=Ct.format,Vt=Ct.type;if(!q.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Q&&$>=0&&$<=A.height-H&&b.readPixels(k,$,Q,H,Wt.convert(zt),Wt.convert(Vt),pt)}finally{const Ct=P!==null?tt.get(P).__webglFramebuffer:null;it.bindFramebuffer(b.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,k,$,Q,H,pt,Et){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){const Ct=A.texture,zt=Ct.format,Vt=Ct.type;if(!q.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-Q&&$>=0&&$<=A.height-H){it.bindFramebuffer(b.FRAMEBUFFER,Rt);const It=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,It),b.bufferData(b.PIXEL_PACK_BUFFER,pt.byteLength,b.STREAM_READ),b.readPixels(k,$,Q,H,Wt.convert(zt),Wt.convert(Vt),0);const Jt=P!==null?tt.get(P).__webglFramebuffer:null;it.bindFramebuffer(b.FRAMEBUFFER,Jt);const ne=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await IE(b,ne,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,It),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,pt),b.deleteBuffer(It),b.deleteSync(ne),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,$=0){A.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const Q=Math.pow(2,-$),H=Math.floor(A.image.width*Q),pt=Math.floor(A.image.height*Q),Et=k!==null?k.x:0,Rt=k!==null?k.y:0;T.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,$,0,0,Et,Rt,H,pt),it.unbindTexture()};const Gg=b.createFramebuffer(),Wg=b.createFramebuffer();this.copyTextureToTexture=function(A,k,$=null,Q=null,H=0,pt=null){A.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],k=arguments[2],pt=arguments[3]||0,$=null),pt===null&&(H!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=H,H=0):pt=0);let Et,Rt,Ct,zt,Vt,It,Jt,ne,Le;const Te=A.isCompressedTexture?A.mipmaps[pt]:A.image;if($!==null)Et=$.max.x-$.min.x,Rt=$.max.y-$.min.y,Ct=$.isBox3?$.max.z-$.min.z:1,zt=$.min.x,Vt=$.min.y,It=$.isBox3?$.min.z:0;else{const Bn=Math.pow(2,-H);Et=Math.floor(Te.width*Bn),Rt=Math.floor(Te.height*Bn),A.isDataArrayTexture?Ct=Te.depth:A.isData3DTexture?Ct=Math.floor(Te.depth*Bn):Ct=1,zt=0,Vt=0,It=0}Q!==null?(Jt=Q.x,ne=Q.y,Le=Q.z):(Jt=0,ne=0,Le=0);const Qt=Wt.convert(k.format),Ut=Wt.convert(k.type);let Xe;k.isData3DTexture?(T.setTexture3D(k,0),Xe=b.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Xe=b.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Xe=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,k.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,k.unpackAlignment);const ie=b.getParameter(b.UNPACK_ROW_LENGTH),Kn=b.getParameter(b.UNPACK_IMAGE_HEIGHT),hs=b.getParameter(b.UNPACK_SKIP_PIXELS),bn=b.getParameter(b.UNPACK_SKIP_ROWS),fo=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Te.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Te.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,zt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Vt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,It);const ge=A.isDataArrayTexture||A.isData3DTexture,Fn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Bn=tt.get(A),rn=tt.get(k),fn=tt.get(Bn.__renderTarget),Xl=tt.get(rn.__renderTarget);it.bindFramebuffer(b.READ_FRAMEBUFFER,fn.__webglFramebuffer),it.bindFramebuffer(b.DRAW_FRAMEBUFFER,Xl.__webglFramebuffer);for(let Pr=0;Pr<Ct;Pr++)ge&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,tt.get(A).__webglTexture,H,It+Pr),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,tt.get(k).__webglTexture,pt,Le+Pr)),b.blitFramebuffer(zt,Vt,Et,Rt,Jt,ne,Et,Rt,b.DEPTH_BUFFER_BIT,b.NEAREST);it.bindFramebuffer(b.READ_FRAMEBUFFER,null),it.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||tt.has(A)){const Bn=tt.get(A),rn=tt.get(k);it.bindFramebuffer(b.READ_FRAMEBUFFER,Gg),it.bindFramebuffer(b.DRAW_FRAMEBUFFER,Wg);for(let fn=0;fn<Ct;fn++)ge?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Bn.__webglTexture,H,It+fn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Bn.__webglTexture,H),Fn?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,rn.__webglTexture,pt,Le+fn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,rn.__webglTexture,pt),H!==0?b.blitFramebuffer(zt,Vt,Et,Rt,Jt,ne,Et,Rt,b.COLOR_BUFFER_BIT,b.NEAREST):Fn?b.copyTexSubImage3D(Xe,pt,Jt,ne,Le+fn,zt,Vt,Et,Rt):b.copyTexSubImage2D(Xe,pt,Jt,ne,zt,Vt,Et,Rt);it.bindFramebuffer(b.READ_FRAMEBUFFER,null),it.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Fn?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Xe,pt,Jt,ne,Le,Et,Rt,Ct,Qt,Ut,Te.data):k.isCompressedArrayTexture?b.compressedTexSubImage3D(Xe,pt,Jt,ne,Le,Et,Rt,Ct,Qt,Te.data):b.texSubImage3D(Xe,pt,Jt,ne,Le,Et,Rt,Ct,Qt,Ut,Te):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,pt,Jt,ne,Et,Rt,Qt,Ut,Te.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,pt,Jt,ne,Te.width,Te.height,Qt,Te.data):b.texSubImage2D(b.TEXTURE_2D,pt,Jt,ne,Et,Rt,Qt,Ut,Te);b.pixelStorei(b.UNPACK_ROW_LENGTH,ie),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Kn),b.pixelStorei(b.UNPACK_SKIP_PIXELS,hs),b.pixelStorei(b.UNPACK_SKIP_ROWS,bn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,fo),pt===0&&k.generateMipmaps&&b.generateMipmap(Xe),it.unbindTexture()},this.copyTextureToTexture3D=function(A,k,$=null,Q=null,H=0){return A.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],k=arguments[3],H=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,$,Q,H)},this.initRenderTarget=function(A){tt.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),it.unbindTexture()},this.resetState=function(){I=0,w=0,P=null,it.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const Dp={type:"change"},hf={type:"start"},kg={type:"end"},Ga=new sf,Ip=new hr,Qw=Math.cos(70*PE.DEG2RAD),Fe=new X,pn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qc=1e-6;class tR extends mb{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new as,this._lastTargetPosition=new X,this._quat=new as().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sp,this._sphericalDelta=new sp,this._scale=1,this._panOffset=new X,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new X,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nR.bind(this),this._onPointerDown=eR.bind(this),this._onPointerUp=iR.bind(this),this._onContextMenu=uR.bind(this),this._onMouseWheel=oR.bind(this),this._onKeyDown=aR.bind(this),this._onTouchStart=lR.bind(this),this._onTouchMove=cR.bind(this),this._onMouseDown=rR.bind(this),this._onMouseMove=sR.bind(this),this._interceptControlDown=hR.bind(this),this._interceptControlUp=fR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dp),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=pn:i>Math.PI&&(i-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Fe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<Qw?this.object.lookAt(this.target):(Ip.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(Ip,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qc||this._lastTargetPosition.distanceToSquared(this.target)>qc?(this.dispatchEvent(Dp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){this.screenSpacePanning===!0?Fe.setFromMatrixColumn(e,1):(Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe)),Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Fe.copy(r).sub(this.target);let s=Fe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function eR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function nR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function iR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kg),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rR(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Xs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Xs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(hf)}function sR(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function oR(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(hf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(kg))}function aR(n){this.enabled!==!1&&this._handleKeyDown(n)}function lR(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(hf)}function cR(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function uR(n){this.enabled!==!1&&n.preventDefault()}function hR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dR{constructor(t,e){Oe(this,"container");Oe(this,"onHotspot");Oe(this,"scene",new ib);Oe(this,"camera",new Gn(38,1,.1,100));Oe(this,"renderer",new Jw({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}));Oe(this,"raycaster",new pb);Oe(this,"pointer",new Ht);Oe(this,"controls");Oe(this,"clockTarget",new X(0,.65,0));Oe(this,"carParts");Oe(this,"animationFrame",0);Oe(this,"isDisposed",!1);Oe(this,"isVisible",!0);Oe(this,"lastSnapshot",null);Oe(this,"resize",()=>{const{clientWidth:t,clientHeight:e}=this.container,i=Math.max(t,320),r=Math.max(e,320);this.camera.aspect=i/r,this.camera.updateProjectionMatrix(),this.renderer.setSize(i,r,!1)});Oe(this,"handlePointerDown",t=>{var o;const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=(o=this.raycaster.intersectObjects(this.carParts.root.children,!0)[0])==null?void 0:o.object;if(!r)return;const s=this.mapObjectToPart(r);s&&this.onHotspot(s)});Oe(this,"handleVisibility",()=>{this.isVisible=document.visibilityState==="visible"});Oe(this,"animate",()=>{this.isDisposed||(this.animationFrame=requestAnimationFrame(this.animate),this.isVisible&&(this.controls.update(),this.carParts.wheels.forEach(t=>{t.rotation.x+=.006*(t.userData.spinFactor??1)}),this.carParts.root.rotation.y+=8e-4,this.renderer.render(this.scene,this.camera)))});this.container=t,this.onHotspot=e,this.controls=new tR(this.camera,this.renderer.domElement),this.carParts=this.createProceduralCar(),this.configureRenderer(),this.configureScene(),this.configureControls(),this.container.appendChild(this.renderer.domElement),this.scene.add(this.carParts.root),this.resize(),window.addEventListener("resize",this.resize),document.addEventListener("visibilitychange",this.handleVisibility),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),this.animate()}update(t){this.lastSnapshot=t,this.applyPaint(t.bodyColor),this.applyWheels(t.wheel),this.applyBrakeCalipers(t.brakeCaliper),this.applyCarbonKits(t.exteriorKitIds),this.applyInterior(t.interior),this.applyLights(t.lightMode),this.applyQuality(t.qualityLevel),this.animateDoors(t.doorsOpen),this.moveCamera(t.cameraPreset)}capture(){return this.renderer.render(this.scene,this.camera),this.renderer.domElement.toDataURL("image/png")}dispose(){this.isDisposed=!0,cancelAnimationFrame(this.animationFrame),window.removeEventListener("resize",this.resize),document.removeEventListener("visibilitychange",this.handleVisibility),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),this.controls.dispose(),this.carParts.root.traverse(t=>{t instanceof Ye&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(i=>i.dispose()))}),this.renderer.dispose(),this.renderer.domElement.remove()}configureRenderer(){this.renderer.outputColorSpace=_n,this.renderer.toneMapping=ag,this.renderer.toneMappingExposure=1.12,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=sg,this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}configureScene(){this.scene.background=new $t("#08090c"),this.camera.position.set(5.2,2.25,5.8),this.camera.lookAt(this.clockTarget);const t=new fb("#cedcf8",1.55),e=new np("#ffffff",3.2);e.position.set(-4,7,5),e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const i=new np("#7fd8ff",1.35);i.position.set(4,2.8,-5);const r=new Ye(new pa(18,14),new zn({color:"#111217",roughness:.55,metalness:.12}));r.rotation.x=-Math.PI/2,r.position.y=-.42,r.receiveShadow=!0,this.scene.add(t,e,i,r)}configureControls(){this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.minDistance=3.2,this.controls.maxDistance=9,this.controls.maxPolarAngle=Math.PI*.48,this.controls.target.copy(this.clockTarget)}createProceduralCar(){const t=new Fs;t.name="procedural-supercar";const e=[],i=[],r=[],s=[],o=[],a=[],l=this.createPaintMaterial("#c9d1d3","metallic"),c=new zn({color:"#7aa9c7",metalness:0,roughness:.04,transmission:.42,transparent:!0,opacity:.52}),u=this.createCarbonMaterial(),h=new zn({color:"#050505",roughness:.88,metalness:.02,normalScale:new Ht(.25,.25)}),f=new zn({color:"#101216",roughness:.22,metalness:.78}),d=new zn({color:"#dff7ff",emissive:"#7feaff",emissiveIntensity:.7,roughness:.1}),g=new zn({color:"#141316",roughness:.64,metalness:.02}),_=this.createRoundedBox(4.45,.52,1.72,l);_.name="body-shell",_.position.y=.2,_.castShadow=!0,e.push(_);const m=this.createWedge(1.8,.28,1.5,l);m.name="front-hood",m.position.set(1.18,.58,0),m.rotation.z=-.03,m.castShadow=!0,e.push(m);const p=this.createWedge(1.62,.78,1.34,c);p.name="windshield",p.position.set(-.34,.94,0),p.rotation.z=.03,p.castShadow=!0;const S=this.createWedge(1.35,.25,1.46,l);S.name="rear-deck",S.position.set(-1.36,.61,0),S.rotation.z=.08,S.castShadow=!0,e.push(S);const E=this.createDoorGroup("door-left",.18,l),v=this.createDoorGroup("door-right",-.18,l);e.push(E.children[0],v.children[0]);const R=this.createRoundedBox(1.35,.08,1.86,u);R.name="front-lip",R.position.set(2.28,-.05,0),s.push(R);const I=this.createRoundedBox(2.5,.1,.08,u);I.name="side-skirt",I.position.set(0,-.03,.91);const w=I.clone();w.position.z=-.91,s.push(I,w);const P=this.createRoundedBox(1.28,.08,1.62,u);P.name="wing",P.position.set(-2.15,.98,0),s.push(P);const x=this.createRoundedBox(.18,.16,1.58,u);x.name="diffuser",x.position.set(-2.32,.02,0),s.push(x),[[1.42,-.18,.94],[1.42,-.18,-.94],[-1.45,-.18,.94],[-1.45,-.18,-.94]].forEach(([z,ft,_t],yt)=>{const wt=new Ye(new cf(.39,.13,22,72),h);wt.name=`tire-${yt}`,wt.rotation.y=Math.PI/2,wt.position.set(z,ft,_t),wt.castShadow=!0;const Gt=new Ye(new lf(.3,.3,.11,48),f);Gt.name=`wheel-${yt}`,Gt.rotation.z=Math.PI/2,Gt.position.copy(wt.position),Gt.castShadow=!0;const et=new Ye(new Wi(.1,.2,.08),new zn({color:"#e31f2f",roughness:.28,metalness:.35}));et.name=`caliper-${yt}`,et.position.set(z+.05,ft+.08,_t>0?_t-.18:_t+.18),et.castShadow=!0,i.push(wt,Gt),r.push(et)});const D=this.createLight("headlight-left",2.28,.38,.48,d),B=this.createLight("headlight-right",2.28,.38,-.48,d),N=this.createLight("taillight-left",-2.28,.4,.53,d),Y=this.createLight("taillight-right",-2.28,.4,-.53,d);o.push(D,B,N,Y);const Z=this.createRoundedBox(.42,.46,.32,g);Z.name="seat-left",Z.position.set(-.45,.58,.32);const G=Z.clone();G.name="seat-right",G.position.z=-.32;const V=this.createRoundedBox(.16,.16,1,g);return V.name="dashboard",V.position.set(.22,.72,0),a.push(Z,G,V),t.add(_,m,p,S,E,v,R,I,w,P,x,...i,...r,...o,...a),t.rotation.y=-.45,{root:t,body:e,wheels:i,calipers:r,carbon:s,lights:o,interior:a,leftDoor:E,rightDoor:v}}createRoundedBox(t,e,i,r){const s=new Ye(new Wi(t,e,i,4,2,4),r);return s.castShadow=!0,s.receiveShadow=!0,s}createWedge(t,e,i,r){const s=new Wi(t,e,i,4,2,3),o=new Ye(s,r);return o.scale.y=.92,o.castShadow=!0,o.receiveShadow=!0,o}createDoorGroup(t,e,i){const r=new Fs;r.name=`${t}-pivot`,r.position.set(.18,.38,e>0?.9:-.9);const s=this.createRoundedBox(1.12,.42,.05,i);return s.name=t,s.position.set(-.18,0,0),r.add(s),r}createLight(t,e,i,r,s){const o=new Ye(new Wi(.08,.08,.42),s);return o.name=t,o.position.set(e,i,r),o.castShadow=!1,o}createPaintMaterial(t,e){const i=e==="matte";return new zn({color:t,metalness:i?.28:.78,roughness:i?.48:.2,clearcoat:i?.28:.95,clearcoatRoughness:e==="pearl"?.05:.09,envMapIntensity:e==="racing"?1.7:1.25})}createCarbonMaterial(){const t=document.createElement("canvas");t.width=96,t.height=96;const e=t.getContext("2d");if(e){e.fillStyle="#08090a",e.fillRect(0,0,96,96),e.strokeStyle="#2d3338",e.lineWidth=5;for(let r=-96;r<192;r+=14)e.beginPath(),e.moveTo(r,0),e.lineTo(r+96,96),e.stroke()}const i=new ob(t);return i.colorSpace=_n,new zn({color:"#111417",map:i,metalness:.55,roughness:.24,clearcoat:.75,clearcoatRoughness:.08})}applyPaint(t){const e=this.createPaintMaterial(t.hex,t.finish);this.carParts.body.forEach(i=>{i.material=e})}applyWheels(t){const e=new zn({color:t.color,metalness:.82,roughness:.2,clearcoat:.45});this.carParts.wheels.forEach(i=>{i.name.startsWith("wheel")&&(i.material=e),i.userData.spinFactor=t.spokeCount/10})}applyBrakeCalipers(t){const e=new zn({color:t.hex,roughness:.25,metalness:.38,clearcoat:.45});this.carParts.calipers.forEach(i=>{i.material=e})}applyCarbonKits(t){const e=new Set(t);this.carParts.carbon.forEach(i=>{i.visible=i.name==="diffuser"||i.name==="front-lip"&&e.has("front-lip")||i.name==="side-skirt"&&e.has("side-skirt")||i.name==="wing"&&e.has("active-wing")})}applyInterior(t){const e=new zn({color:t.primary,roughness:.62,metalness:.03});this.carParts.interior.forEach(i=>{i.material=e})}applyLights(t){this.carParts.lights.forEach(e=>{const i=e.material;i.emissiveIntensity=t.intensity,i.opacity=t.intensity===0?.5:1,i.transparent=t.intensity===0})}applyQuality(t){const i=t==="mobile"||t==="auto"&&window.innerWidth<760?Math.min(window.devicePixelRatio,1.25):t==="high"?Math.min(window.devicePixelRatio,2):Math.min(window.devicePixelRatio,1.5);this.renderer.setPixelRatio(i)}animateDoors(t){Ro.to(this.carParts.leftDoor.rotation,{z:t?.82:0,y:t?-.18:0,duration:.75,ease:"power3.out"}),Ro.to(this.carParts.rightDoor.rotation,{z:t?-.82:0,y:t?.18:0,duration:.75,ease:"power3.out"})}moveCamera(t){const e={exterior:[5.2,2.25,5.8,.65],front:[5.6,1.45,.35,.55],side:[.2,1.25,6.6,.45],rear:[-5.5,1.55,-.3,.55],interior:[.45,1.35,1.25,.92],wheel:[1.8,.45,2.15,.1]},[i,r,s,o]=e[t];Ro.to(this.camera.position,{x:i,y:r,z:s,duration:.85,ease:"power3.inOut",onUpdate:()=>this.camera.lookAt(this.controls.target)}),Ro.to(this.controls.target,{x:t==="wheel"?1.35:0,y:o,z:t==="wheel"?.92:0,duration:.85,ease:"power3.inOut"})}mapObjectToPart(t){const e=t.name;return e.includes("wheel")||e.includes("tire")||e.includes("caliper")?"wheel":e.includes("light")?"light":e.includes("seat")||e.includes("dashboard")||e.includes("windshield")?"interior":e.includes("lip")||e.includes("skirt")||e.includes("wing")||e.includes("diffuser")?"carbon":e.includes("body")||e.includes("door")||e.includes("hood")?"body":null}}const pR={key:0,class:"viewer-loader"},mR=wr({__name:"CarViewer",setup(n,{expose:t}){const e=la(),i=qe(null);let r=null;const s=Ie(()=>({bodyColor:e.currentBodyColor,wheel:e.currentWheel,brakeCaliper:e.currentBrakeCaliper,exteriorKitIds:e.exteriorKitIds,interior:e.currentInterior,lightMode:e.currentLightMode,cameraPreset:e.cameraPreset,qualityLevel:e.qualityLevel,doorsOpen:e.doorsOpen}));function o(){if(!r)return;const l=document.createElement("a");l.download=`${e.selectedCar.id}-configuration.png`,l.href=r.capture(),l.click()}async function a(){const l=i.value;l&&(document.fullscreenElement?await document.exitFullscreen():await l.requestFullscreen())}return t({captureShot:o,toggleFullscreen:a}),bh(()=>{i.value&&(e.loadingState="loading",r=new dR(i.value,l=>e.focusPart(l)),r.update(s.value),e.loadingState="ready")}),Qr(s,l=>{r==null||r.update(l)},{deep:!0}),xm(()=>{r==null||r.dispose()}),(l,c)=>(de(),ve("div",{ref_key:"canvasHost",ref:i,class:"viewer-canvas-host","aria-label":"3D 跑车展示器"},[Nt(e).loadingState==="loading"?(de(),ve("div",pR,[...c[0]||(c[0]=[Ot("span",{class:"loader-silhouette"},null,-1)])])):Rh("",!0)],512))}}),_R={key:0,class:"hotspot-card"},gR=wr({__name:"PartHotspots",setup(n){const t=la(),e={body:{title:"车身漆面",body:"MeshPhysicalMaterial 清漆层、金属度和粗糙度会随漆面类型即时变化。"},wheel:{title:"轮毂与制动",body:"轮毂样式、慢速旋转预览和高饱和卡钳用于模拟真实配置器反馈。"},light:{title:"灯光系统",body:"日行灯和摄影棚模式通过 emissive 强度区分，并保留关闭状态的灯罩质感。"},interior:{title:"内饰主题",body:"座椅、仪表台与缝线主题可配置，镜头可切入内饰视角。"},carbon:{title:"碳纤维套件",body:"前唇、侧裙、尾翼与扩散器支持显隐，纹理由 CanvasTexture 程序生成。"}},i=Ie(()=>t.focusedPart?e[t.focusedPart]:null);return(r,s)=>i.value?(de(),ve("div",_R,[Ot("button",{class:"hotspot-close",type:"button","aria-label":"关闭热点",onClick:s[0]||(s[0]=o=>Nt(t).focusPart(null))},"×"),Ot("strong",null,ln(i.value.title),1),Ot("p",null,ln(i.value.body),1)])):Rh("",!0)}}),vR={class:"showcase-shell"},xR={class:"topbar"},yR={class:"tool-cluster"},MR={class:"stage-layout"},SR={class:"viewer-stage","aria-label":"车辆展示区"},ER={class:"model-title"},bR={id:"performance",class:"stats-bar"},Wa=wr({__name:"CarShowcasePage",setup(n){const t=la(),e=wy(),i=Ry(),r=qe(null),s=qe(!1),o=Ie(()=>[{label:"马力",value:t.selectedCar.stats.power},{label:"0-100",value:t.selectedCar.stats.acceleration},{label:"极速",value:t.selectedCar.stats.topSpeed},{label:"价格",value:t.selectedCar.stats.price}]);async function a(){var c;const l=new URL(window.location.href);Object.entries(t.toQuery()).forEach(([u,h])=>l.searchParams.set(u,h)),await((c=navigator.clipboard)==null?void 0:c.writeText(l.toString()))}return bh(()=>{const l=typeof i.params.carId=="string"?i.params.carId:void 0;t.hydrateFromQuery({...i.query,car:i.query.car??l??t.selectedCarId})}),Qr(()=>t.toQuery(),l=>{e.replace({name:"car-configure",params:{carId:t.selectedCarId},query:l})},{deep:!0}),(l,c)=>(de(),ve("main",vR,[Ot("header",xR,[c[4]||(c[4]=Pv('<a class="brand" href="/" aria-label="Dream Car Model 首页"><span class="brand-mark"></span> Dream Car Model </a><nav class="main-nav" aria-label="页面导航"><a href="#cars">车型</a><a href="#config">配置</a><a href="#performance">性能</a><a href="#gallery">图库</a></nav>',2)),Ot("div",yR,[Ot("button",{type:"button",title:"截图",onClick:c[0]||(c[0]=u=>{var h;return(h=r.value)==null?void 0:h.captureShot()})},[le(Nt(Iy),{size:18})]),Ot("button",{type:"button",title:"车门",onClick:c[1]||(c[1]=u=>Nt(t).toggleDoors())},[le(Nt(Ny),{size:18})]),Ot("button",{type:"button",title:"全屏",onClick:c[2]||(c[2]=u=>{var h;return(h=r.value)==null?void 0:h.toggleFullscreen()})},[le(Nt(Oy),{size:18})]),Ot("button",{type:"button",title:"分享",onClick:a},[le(Nt(zy),{size:18})])])]),Ot("section",MR,[le(bM,{id:"cars"}),Ot("section",SR,[Ot("div",ER,[Ot("span",null,ln(Nt(t).selectedCar.brand),1),Ot("h1",null,ln(Nt(t).selectedCar.name),1)]),le(mR,{ref_key:"viewer",ref:r},null,512),le(gR)]),le(hd,{id:"config"})]),Ot("footer",bR,[Ot("button",{class:"mobile-config-toggle",type:"button",onClick:c[3]||(c[3]=u=>s.value=!s.value)},"配置"),(de(!0),ve(ze,null,hi(o.value,u=>(de(),ve("div",{key:u.label,class:"stat-item"},[Ot("small",null,ln(u.label),1),Ot("strong",null,ln(u.value),1)]))),128))]),Ot("div",{class:Vn(["mobile-config-drawer",{open:s.value}])},[le(hd)],2)]))}}),TR=Ay({history:sy(),routes:[{path:"/",name:"home",component:Wa},{path:"/cars/:carId",name:"car-detail",component:Wa},{path:"/cars/:carId/configure",name:"car-configure",component:Wa},{path:"/gallery",name:"gallery",component:Wa}]});fx(Cy).use(mx()).use(TR).mount("#app");
