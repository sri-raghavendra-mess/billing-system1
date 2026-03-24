import{r as O,a as vp,u as Ju,c as Ep,g as Tp,N as Oo,B as Ip,R as wp,b as vo}from"./vendor-EA-lzgZ-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var Yu={exports:{}},Ai={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp=O,Ap=Symbol.for("react.element"),Rp=Symbol.for("react.fragment"),Sp=Object.prototype.hasOwnProperty,Cp=bp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xp={key:!0,ref:!0,__self:!0,__source:!0};function Xu(n,e,t){var r,s={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Sp.call(e,r)&&!xp.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Ap,type:n,key:i,ref:a,props:s,_owner:Cp.current}}Ai.Fragment=Rp;Ai.jsx=Xu;Ai.jsxs=Xu;Yu.exports=Ai;var p=Yu.exports,Vo={},sl=vp;Vo.createRoot=sl.createRoot,Vo.hydrateRoot=sl.hydrateRoot;const Pp=()=>{};var il={};/**
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
 */const Zu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kp=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,g=i>>2,y=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,A=h&63;u||(A=64,a||(E=64)),r.push(t[g],t[y],t[E],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Zu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kp(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||y==null)throw new Np;const E=i<<2|c>>4;if(r.push(E),h!==64){const A=c<<4&240|h>>2;if(r.push(A),y!==64){const S=h<<6&192|y;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Np extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dp=function(n){const e=Zu(n);return eh.encodeByteArray(e,!0)},ri=function(n){return Dp(n).replace(/\./g,"")},th=function(n){try{return eh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Op(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vp=()=>Op().__FIREBASE_DEFAULTS__,Lp=()=>{if(typeof process>"u"||typeof il>"u")return;const n=il.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mp=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&th(n[1]);return e&&JSON.parse(e)},Ri=()=>{try{return Pp()||Vp()||Lp()||Mp()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nh=n=>{var e,t;return(t=(e=Ri())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},rh=n=>{const e=nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},sh=()=>{var n;return(n=Ri())===null||n===void 0?void 0:n.config},ih=n=>{var e;return(e=Ri())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class jp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Fn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function la(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function oh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ri(JSON.stringify(t)),ri(JSON.stringify(a)),""].join(".")}const Br={};function Fp(){const n={prod:[],emulator:[]};for(const e of Object.keys(Br))Br[e]?n.emulator.push(e):n.prod.push(e);return n}function Up(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ol=!1;function ua(n,e){if(typeof window>"u"||typeof document>"u"||!Fn(window.location.host)||Br[n]===e||Br[n]||ol)return;Br[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Fp().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function h(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{ol=!0,a()},E}function g(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function y(){const E=Up(r),A=t("text"),S=document.getElementById(A)||document.createElement("span"),R=t("learnmore"),x=document.getElementById(R)||document.createElement("a"),U=t("preprendIcon"),$=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const D=E.element;c(D),g(x,R);const V=h();u($,U),D.append($,S,x,V),document.body.appendChild(D)}i?(S.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function $p(){var n;const e=(n=Ri())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zp(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wp(){const n=et();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gp(){return!$p()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kp(){try{return typeof indexedDB=="object"}catch{return!1}}function Qp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Jp="FirebaseError";class Ot extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jp,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,is.prototype.create)}}class is{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Yp(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ot(s,c,r)}}function Yp(n,e){return n.replace(Xp,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xp=/\{\$([^}]+)}/g;function Zp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function On(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(al(i)&&al(a)){if(!On(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function al(n){return n!==null&&typeof n=="object"}/**
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
 */function os(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Lr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function em(n,e){const t=new tm(n,e);return t.subscribe.bind(t)}class tm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");nm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Eo),s.error===void 0&&(s.error=Eo),s.complete===void 0&&(s.complete=Eo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Eo(){}/**
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
 */function xe(n){return n&&n._delegate?n._delegate:n}class fn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pn="[DEFAULT]";/**
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
 */class rm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jp;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(im(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sm(n){return n===Pn?void 0:n}function im(n){return n.instantiationMode==="EAGER"}/**
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
 */class om{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const am={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},cm=se.INFO,lm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},um=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=lm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=cm,this._logHandler=um,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?am[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const hm=(n,e)=>e.some(t=>n instanceof t);let cl,ll;function dm(){return cl||(cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fm(){return ll||(ll=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ah=new WeakMap,Lo=new WeakMap,ch=new WeakMap,To=new WeakMap,da=new WeakMap;function pm(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(an(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ah.set(t,n)}).catch(()=>{}),da.set(e,n),e}function mm(n){if(Lo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Lo.set(n,e)}let Mo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Lo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ch.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return an(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gm(n){Mo=n(Mo)}function _m(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Io(this),e,...t);return ch.set(r,e.sort?e.sort():[e]),an(r)}:fm().includes(n)?function(...e){return n.apply(Io(this),e),an(ah.get(this))}:function(...e){return an(n.apply(Io(this),e))}}function ym(n){return typeof n=="function"?_m(n):(n instanceof IDBTransaction&&mm(n),hm(n,dm())?new Proxy(n,Mo):n)}function an(n){if(n instanceof IDBRequest)return pm(n);if(To.has(n))return To.get(n);const e=ym(n);return e!==n&&(To.set(n,e),da.set(e,n)),e}const Io=n=>da.get(n);function vm(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=an(a);return r&&a.addEventListener("upgradeneeded",u=>{r(an(a.result),u.oldVersion,u.newVersion,an(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Em=["get","getKey","getAll","getAllKeys","count"],Tm=["put","add","delete","clear"],wo=new Map;function ul(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wo.get(e))return wo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Tm.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Em.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return wo.set(e,i),i}gm(n=>({...n,get:(e,t,r)=>ul(e,t)||n.get(e,t,r),has:(e,t)=>!!ul(e,t)||n.has(e,t)}));/**
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
 */class Im{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wm(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jo="@firebase/app",hl="0.13.2";/**
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
 */const qt=new ha("@firebase/app"),bm="@firebase/app-compat",Am="@firebase/analytics-compat",Rm="@firebase/analytics",Sm="@firebase/app-check-compat",Cm="@firebase/app-check",xm="@firebase/auth",Pm="@firebase/auth-compat",km="@firebase/database",Nm="@firebase/data-connect",Dm="@firebase/database-compat",Om="@firebase/functions",Vm="@firebase/functions-compat",Lm="@firebase/installations",Mm="@firebase/installations-compat",jm="@firebase/messaging",Fm="@firebase/messaging-compat",Um="@firebase/performance",Bm="@firebase/performance-compat",$m="@firebase/remote-config",qm="@firebase/remote-config-compat",zm="@firebase/storage",Hm="@firebase/storage-compat",Wm="@firebase/firestore",Gm="@firebase/ai",Km="@firebase/firestore-compat",Qm="firebase",Jm="11.10.0";/**
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
 */const Fo="[DEFAULT]",Ym={[jo]:"fire-core",[bm]:"fire-core-compat",[Rm]:"fire-analytics",[Am]:"fire-analytics-compat",[Cm]:"fire-app-check",[Sm]:"fire-app-check-compat",[xm]:"fire-auth",[Pm]:"fire-auth-compat",[km]:"fire-rtdb",[Nm]:"fire-data-connect",[Dm]:"fire-rtdb-compat",[Om]:"fire-fn",[Vm]:"fire-fn-compat",[Lm]:"fire-iid",[Mm]:"fire-iid-compat",[jm]:"fire-fcm",[Fm]:"fire-fcm-compat",[Um]:"fire-perf",[Bm]:"fire-perf-compat",[$m]:"fire-rc",[qm]:"fire-rc-compat",[zm]:"fire-gcs",[Hm]:"fire-gcs-compat",[Wm]:"fire-fst",[Km]:"fire-fst-compat",[Gm]:"fire-vertex","fire-js":"fire-js",[Qm]:"fire-js-all"};/**
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
 */const si=new Map,Xm=new Map,Uo=new Map;function dl(n,e){try{n.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Vn(n){const e=n.name;if(Uo.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Uo.set(e,n);for(const t of si.values())dl(t,n);for(const t of Xm.values())dl(t,n);return!0}function Si(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function mt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Zm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new is("app","Firebase",Zm);/**
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
 */class eg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Un=Jm;function lh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fo,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw cn.create("bad-app-name",{appName:String(s)});if(t||(t=sh()),!t)throw cn.create("no-options");const i=si.get(s);if(i){if(On(t,i.options)&&On(r,i.config))return i;throw cn.create("duplicate-app",{appName:s})}const a=new om(s);for(const u of Uo.values())a.addComponent(u);const c=new eg(t,r,a);return si.set(s,c),c}function fa(n=Fo){const e=si.get(n);if(!e&&n===Fo&&sh())return lh();if(!e)throw cn.create("no-app",{appName:n});return e}function At(n,e,t){var r;let s=(r=Ym[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}Vn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const tg="firebase-heartbeat-database",ng=1,Gr="firebase-heartbeat-store";let bo=null;function uh(){return bo||(bo=vm(tg,ng,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gr)}catch(t){console.warn(t)}}}}).catch(n=>{throw cn.create("idb-open",{originalErrorMessage:n.message})})),bo}async function rg(n){try{const t=(await uh()).transaction(Gr),r=await t.objectStore(Gr).get(hh(n));return await t.done,r}catch(e){if(e instanceof Ot)qt.warn(e.message);else{const t=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(t.message)}}}async function fl(n,e){try{const r=(await uh()).transaction(Gr,"readwrite");await r.objectStore(Gr).put(e,hh(n)),await r.done}catch(t){if(t instanceof Ot)qt.warn(t.message);else{const r=cn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qt.warn(r.message)}}}function hh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sg=1024,ig=30;class og{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new cg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ig){const a=lg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=pl(),{heartbeatsToSend:r,unsentEntries:s}=ag(this._heartbeatsCache.heartbeats),i=ri(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return qt.warn(t),""}}}function pl(){return new Date().toISOString().substring(0,10)}function ag(n,e=sg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ml(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ml(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class cg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kp()?Qp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await rg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ml(n){return ri(JSON.stringify({version:2,heartbeats:n})).length}function lg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function ug(n){Vn(new fn("platform-logger",e=>new Im(e),"PRIVATE")),Vn(new fn("heartbeat",e=>new og(e),"PRIVATE")),At(jo,hl,n),At(jo,hl,"esm2017"),At("fire-js","")}ug("");function pa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function dh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hg=dh,fh=new is("auth","Firebase",dh());/**
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
 */const ii=new ha("@firebase/auth");function dg(n,...e){ii.logLevel<=se.WARN&&ii.warn(`Auth (${Un}): ${n}`,...e)}function Ws(n,...e){ii.logLevel<=se.ERROR&&ii.error(`Auth (${Un}): ${n}`,...e)}/**
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
 */function Tt(n,...e){throw ma(n,...e)}function Rt(n,...e){return ma(n,...e)}function ph(n,e,t){const r=Object.assign(Object.assign({},hg()),{[e]:t});return new is("auth","Firebase",r).create(e,{appName:n.name})}function ln(n){return ph(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ma(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return fh.create(n,...e)}function W(n,e,...t){if(!n)throw ma(e,...t)}function Bt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ws(e),new Error(e)}function zt(n,e){n||Bt(e)}/**
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
 */function Bo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fg(){return gl()==="http:"||gl()==="https:"}function gl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function pg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fg()||zp()||"connection"in navigator)?navigator.onLine:!0}function mg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class as{constructor(e,t){this.shortDelay=e,this.longDelay=t,zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Bp()||Hp()}get(){return pg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ga(n,e){zt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class mh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _g=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yg=new as(3e4,6e4);function Bn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Tn(n,e,t,r,s={}){return gh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=os(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return qp()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(h.credentials="include"),mh.fetch()(await _h(n,n.config.apiHost,t,c),h)})}async function gh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gg),e);try{const s=new Eg(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ls(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ls(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ls(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ls(n,"user-disabled",a);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ph(n,g,h);Tt(n,g)}}catch(s){if(s instanceof Ot)throw s;Tt(n,"network-request-failed",{message:String(s)})}}async function Ci(n,e,t,r,s={}){const i=await Tn(n,e,t,r,s);return"mfaPendingCredential"in i&&Tt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function _h(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ga(n.config,s):`${n.config.apiScheme}://${s}`;return _g.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function vg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Eg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),yg.get())})}}function Ls(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Rt(n,e,r);return s.customData._tokenResponse=t,s}function _l(n){return n!==void 0&&n.enterprise!==void 0}class Tg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return vg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ig(n,e){return Tn(n,"GET","/v2/recaptchaConfig",Bn(n,e))}/**
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
 */async function wg(n,e){return Tn(n,"POST","/v1/accounts:delete",e)}async function oi(n,e){return Tn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function $r(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bg(n,e=!1){const t=xe(n),r=await t.getIdToken(e),s=_a(r);W(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$r(Ao(s.auth_time)),issuedAtTime:$r(Ao(s.iat)),expirationTime:$r(Ao(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ao(n){return Number(n)*1e3}function _a(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ws("JWT malformed, contained fewer than 3 sections"),null;try{const s=th(t);return s?JSON.parse(s):(Ws("Failed to decode base64 JWT payload"),null)}catch(s){return Ws("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yl(n){const e=_a(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ot&&Ag(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ag({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Rg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $o{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$r(this.lastLoginAt),this.creationTime=$r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ai(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Kr(n,oi(t,{idToken:r}));W(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?yh(i.providerUserInfo):[],c=Cg(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),g=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new $o(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(n,y)}async function Sg(n){const e=xe(n);await ai(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Cg(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function yh(n){return n.map(e=>{var{providerId:t}=e,r=pa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xg(n,e){const t=await gh(n,{},async()=>{const r=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await _h(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Fn(n.emulatorConfig.host)&&(u.credentials="include"),mh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pg(n,e){return Tn(n,"POST","/v2/accounts:revokeToken",Bn(n,e))}/**
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
 */class er{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=yl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await xg(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new er;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(W(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(W(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new er,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function Zt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=pa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Rg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $o(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Kr(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bg(this,e)}reload(){return Sg(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ai(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(ln(this.auth));const e=await this.getIdToken();return await Kr(this,wg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,h,g;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,A=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,R=(c=t.tenantId)!==null&&c!==void 0?c:void 0,x=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,U=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:D,emailVerified:V,isAnonymous:z,providerData:B,stsTokenManager:w}=t;W(D&&w,e,"internal-error");const f=er.fromJSON(this.name,w);W(typeof D=="string",e,"internal-error"),Zt(y,e.name),Zt(E,e.name),W(typeof V=="boolean",e,"internal-error"),W(typeof z=="boolean",e,"internal-error"),Zt(A,e.name),Zt(S,e.name),Zt(R,e.name),Zt(x,e.name),Zt(U,e.name),Zt($,e.name);const m=new yt({uid:D,auth:e,email:E,emailVerified:V,displayName:y,isAnonymous:z,photoURL:S,phoneNumber:A,tenantId:R,stsTokenManager:f,createdAt:U,lastLoginAt:$});return B&&Array.isArray(B)&&(m.providerData=B.map(v=>Object.assign({},v))),x&&(m._redirectEventId=x),m}static async _fromIdTokenResponse(e,t,r=!1){const s=new er;s.updateFromServerResponse(t);const i=new yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ai(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];W(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?yh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new er;c.updateFromIdToken(r);const u=new yt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $o(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
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
 */const vl=new Map;function $t(n){zt(n instanceof Function,"Expected a class definition");let e=vl.get(n);return e?(zt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,vl.set(n,e),e)}/**
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
 */class vh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vh.type="NONE";const El=vh;/**
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
 */function Gs(n,e,t){return`firebase:${n}:${e}:${t}`}class tr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gs(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await oi(this.auth,{idToken:e}).catch(()=>{});return t?yt._fromGetAccountInfoResponse(this.auth,t,e):null}return yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new tr($t(El),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||$t(El);const a=Gs(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const g=await h._get(a);if(g){let y;if(typeof g=="string"){const E=await oi(e,{idToken:g}).catch(()=>{});if(!E)break;y=await yt._fromGetAccountInfoResponse(e,E,g)}else y=yt._fromJSON(e,g);h!==i&&(c=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new tr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new tr(i,e,r))}}/**
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
 */function Tl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ah(e))return"Blackberry";if(Rh(e))return"Webos";if(Th(e))return"Safari";if((e.includes("chrome/")||Ih(e))&&!e.includes("edge/"))return"Chrome";if(bh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Eh(n=et()){return/firefox\//i.test(n)}function Th(n=et()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ih(n=et()){return/crios\//i.test(n)}function wh(n=et()){return/iemobile/i.test(n)}function bh(n=et()){return/android/i.test(n)}function Ah(n=et()){return/blackberry/i.test(n)}function Rh(n=et()){return/webos/i.test(n)}function ya(n=et()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kg(n=et()){var e;return ya(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ng(){return Wp()&&document.documentMode===10}function Sh(n=et()){return ya(n)||bh(n)||Rh(n)||Ah(n)||/windows phone/i.test(n)||wh(n)}/**
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
 */function Ch(n,e=[]){let t;switch(n){case"Browser":t=Tl(et());break;case"Worker":t=`${Tl(et())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${r}`}/**
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
 */class Dg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Og(n,e={}){return Tn(n,"GET","/v2/passwordPolicy",Bn(n,e))}/**
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
 */const Vg=6;class Lg{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Vg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mg{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Il(this),this.idTokenSubscription=new Il(this),this.beforeStateQueue=new Dg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$t(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await tr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oi(this,{idToken:e}),r=await yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(mt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ai(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(ln(this));const t=e?xe(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Og(this),t=new Lg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new is("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Pg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$t(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await tr.create(this,[$t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ch(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function pr(n){return xe(n)}class Il{constructor(e){this.auth=e,this.observer=null,this.addObserver=em(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let xi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jg(n){xi=n}function xh(n){return xi.loadJS(n)}function Fg(){return xi.recaptchaEnterpriseScript}function Ug(){return xi.gapiScript}function Bg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $g{constructor(){this.enterprise=new qg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class qg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const zg="recaptcha-enterprise",Ph="NO_RECAPTCHA";class Hg{constructor(e){this.type=zg,this.auth=pr(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{Ig(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Tg(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;_l(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Ph)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $g().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&_l(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Fg();u.length!==0&&(u+=c),xh(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function wl(n,e,t,r=!1,s=!1){const i=new Hg(n);let a;if(s)a=Ph;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function bl(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await wl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await wl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function Wg(n,e){const t=Si(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(On(i,e??{}))return s;Tt(s,"already-initialized")}return t.initialize({options:e})}function Gg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Kg(n,e,t){const r=pr(n);W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=kh(e),{host:a,port:c}=Qg(e),u=c===null?"":`:${c}`,h={url:`${i}//${a}${u}/`},g=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){W(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),W(On(h,r.config.emulator)&&On(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,Fn(a)?(la(`${i}//${a}${u}`),ua("Auth",!0)):Jg()}function kh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qg(n){const e=kh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Al(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Al(a)}}}function Al(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class va{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,t){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}async function Yg(n,e){return Tn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Xg(n,e){return Ci(n,"POST","/v1/accounts:signInWithPassword",Bn(n,e))}/**
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
 */async function Zg(n,e){return Ci(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,e))}async function e_(n,e){return Ci(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,e))}/**
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
 */class Qr extends va{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Qr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,t,"signInWithPassword",Xg);case"emailLink":return Zg(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bl(e,r,"signUpPassword",Yg);case"emailLink":return e_(e,{idToken:t,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nr(n,e){return Ci(n,"POST","/v1/accounts:signInWithIdp",Bn(n,e))}/**
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
 */const t_="http://localhost";class Ln extends va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ln(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=pa(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ln(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return nr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,nr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nr(e,t)}buildRequest(){const e={requestUri:t_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=os(t)}return e}}/**
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
 */function n_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function r_(n){const e=Vr(Lr(n)).link,t=e?Vr(Lr(e)).deep_link_id:null,r=Vr(Lr(n)).deep_link_id;return(r?Vr(Lr(r)).link:null)||r||t||e||n}class Ea{constructor(e){var t,r,s,i,a,c;const u=Vr(Lr(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,y=n_((s=u.mode)!==null&&s!==void 0?s:null);W(h&&g&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=g,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=r_(e);try{return new Ea(t)}catch{return null}}}/**
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
 */class mr{constructor(){this.providerId=mr.PROVIDER_ID}static credential(e,t){return Qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ea.parseLink(t);return W(r,"argument-error"),Qr._fromEmailAndCode(e,r.code,r.tenantId)}}mr.PROVIDER_ID="password";mr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";mr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cs extends Nh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends cs{constructor(){super("facebook.com")}static credential(e){return Ln._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class tn extends cs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ln._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tn.credential(t,r)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class nn extends cs{constructor(){super("github.com")}static credential(e){return Ln._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
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
 */class rn extends cs{constructor(){super("twitter.com")}static credential(e,t){return Ln._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rn.credential(t,r)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await yt._fromIdTokenResponse(e,r,s),a=Rl(r);return new or({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Rl(r);return new or({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Rl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ci extends Ot{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ci.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ci(e,t,r,s)}}function Dh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ci._fromErrorAndOperation(n,i,e,r):i})}async function s_(n,e,t=!1){const r=await Kr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return or._forOperation(n,"link",r)}/**
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
 */async function i_(n,e,t=!1){const{auth:r}=n;if(mt(r.app))return Promise.reject(ln(r));const s="reauthenticate";try{const i=await Kr(n,Dh(r,s,e,n),t);W(i.idToken,r,"internal-error");const a=_a(i.idToken);W(a,r,"internal-error");const{sub:c}=a;return W(n.uid===c,r,"user-mismatch"),or._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
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
 */async function Oh(n,e,t=!1){if(mt(n.app))return Promise.reject(ln(n));const r="signIn",s=await Dh(n,r,e),i=await or._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function o_(n,e){return Oh(pr(n),e)}/**
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
 */async function a_(n){const e=pr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function c_(n,e,t){return mt(n.app)?Promise.reject(ln(n)):o_(xe(n),mr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a_(n),r})}/**
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
 */function l_(n,e){return xe(n).setPersistence(e)}function u_(n,e,t,r){return xe(n).onIdTokenChanged(e,t,r)}function h_(n,e,t){return xe(n).beforeAuthStateChanged(e,t)}function d_(n,e,t,r){return xe(n).onAuthStateChanged(e,t,r)}function f_(n){return xe(n).signOut()}const li="__sak";/**
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
 */class Vh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(li,"1"),this.storage.removeItem(li),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const p_=1e3,m_=10;class Lh extends Vh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Ng()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,m_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},p_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lh.type="LOCAL";const Mh=Lh;/**
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
 */class jh extends Vh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jh.type="SESSION";const Fh=jh;/**
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
 */function g_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Pi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await g_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pi.receivers=[];/**
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
 */function Ta(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class __{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=Ta("",20);s.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const E=y;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(g),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(g),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function St(){return window}function y_(n){St().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Uh(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function v_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function T_(){return Uh()?self:null}/**
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
 */const Bh="firebaseLocalStorageDb",I_=1,ui="firebaseLocalStorage",$h="fbase_key";class ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ki(n,e){return n.transaction([ui],e?"readwrite":"readonly").objectStore(ui)}function w_(){const n=indexedDB.deleteDatabase(Bh);return new ls(n).toPromise()}function qo(){const n=indexedDB.open(Bh,I_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ui,{keyPath:$h})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ui)?e(r):(r.close(),await w_(),e(await qo()))})})}async function Sl(n,e,t){const r=ki(n,!0).put({[$h]:e,value:t});return new ls(r).toPromise()}async function b_(n,e){const t=ki(n,!1).get(e),r=await new ls(t).toPromise();return r===void 0?null:r.value}function Cl(n,e){const t=ki(n,!0).delete(e);return new ls(t).toPromise()}const A_=800,R_=3;class qh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>R_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pi._getInstance(T_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await v_(),!this.activeServiceWorker)return;this.sender=new __(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qo();return await Sl(e,li,"1"),await Cl(e,li),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>b_(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ki(s,!1).getAll();return new ls(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qh.type="LOCAL";const S_=qh;new as(3e4,6e4);/**
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
 */function C_(n,e){return e?$t(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ia extends va{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function x_(n){return Oh(n.auth,new Ia(n),n.bypassAuthState)}function P_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),i_(t,new Ia(n),n.bypassAuthState)}async function k_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),s_(t,new Ia(n),n.bypassAuthState)}/**
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
 */class zh{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return x_;case"linkViaPopup":case"linkViaRedirect":return k_;case"reauthViaPopup":case"reauthViaRedirect":return P_;default:Tt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const N_=new as(2e3,1e4);class Zn extends zh{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=Ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,N_.get())};e()}}Zn.currentPopupAction=null;/**
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
 */const D_="pendingRedirect",Ks=new Map;class O_ extends zh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ks.get(this.auth._key());if(!e){try{const r=await V_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ks.set(this.auth._key(),e)}return this.bypassAuthState||Ks.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V_(n,e){const t=j_(e),r=M_(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function L_(n,e){Ks.set(n._key(),e)}function M_(n){return $t(n._redirectPersistence)}function j_(n){return Gs(D_,n.config.apiKey,n.name)}async function F_(n,e,t=!1){if(mt(n.app))return Promise.reject(ln(n));const r=pr(n),s=C_(r,e),a=await new O_(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const U_=10*60*1e3;class B_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Hh(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U_&&this.cachedEventUids.clear(),this.cachedEventUids.has(xl(e))}saveEventToCache(e){this.cachedEventUids.add(xl(e)),this.lastProcessedEventTime=Date.now()}}function xl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hh(n);default:return!1}}/**
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
 */async function q_(n,e={}){return Tn(n,"GET","/v1/projects",e)}/**
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
 */const z_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H_=/^https?/;async function W_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await q_(n);for(const t of e)try{if(G_(t))return}catch{}Tt(n,"unauthorized-domain")}function G_(n){const e=Bo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!H_.test(t))return!1;if(z_.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const K_=new as(3e4,6e4);function Pl(){const n=St().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Q_(n){return new Promise((e,t)=>{var r,s,i;function a(){Pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pl(),t(Rt(n,"network-request-failed"))},timeout:K_.get()})}if(!((s=(r=St().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=St().gapi)===null||i===void 0)&&i.load)a();else{const c=Bg("iframefcb");return St()[c]=()=>{gapi.load?a():t(Rt(n,"network-request-failed"))},xh(`${Ug()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw Qs=null,e})}let Qs=null;function J_(n){return Qs=Qs||Q_(n),Qs}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Y_=new as(5e3,15e3),X_="__/auth/iframe",Z_="emulator/auth/iframe",ey={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ty=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ny(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ga(e,Z_):`https://${n.config.authDomain}/${X_}`,r={apiKey:e.apiKey,appName:n.name,v:Un},s=ty.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${os(r).slice(1)}`}async function ry(n){const e=await J_(n),t=St().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:ny(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ey,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Rt(n,"network-request-failed"),c=St().setTimeout(()=>{i(a)},Y_.get());function u(){St().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},iy=500,oy=600,ay="_blank",cy="http://localhost";class kl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ly(n,e,t,r=iy,s=oy){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},sy),{width:r.toString(),height:s.toString(),top:i,left:a}),h=et().toLowerCase();t&&(c=Ih(h)?ay:t),Eh(h)&&(e=e||cy,u.scrollbars="yes");const g=Object.entries(u).reduce((E,[A,S])=>`${E}${A}=${S},`,"");if(kg(h)&&c!=="_self")return uy(e||"",c),new kl(null);const y=window.open(e||"",c,g);W(y,n,"popup-blocked");try{y.focus()}catch{}return new kl(y)}function uy(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const hy="__/auth/handler",dy="emulator/auth/handler",fy=encodeURIComponent("fac");async function Nl(n,e,t,r,s,i){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Un,eventId:s};if(e instanceof Nh){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Zp(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,y]of Object.entries({}))a[g]=y}if(e instanceof cs){const g=e.getScopes().filter(y=>y!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const g of Object.keys(c))c[g]===void 0&&delete c[g];const u=await n._getAppCheckToken(),h=u?`#${fy}=${encodeURIComponent(u)}`:"";return`${py(n)}?${os(c).slice(1)}${h}`}function py({config:n}){return n.emulator?ga(n,dy):`https://${n.authDomain}/${hy}`}/**
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
 */const Ro="webStorageSupport";class my{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fh,this._completeRedirectFn=F_,this._overrideRedirectResult=L_}async _openPopup(e,t,r,s){var i;zt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Nl(e,t,r,Bo(),s);return ly(e,a,Ta())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Nl(e,t,r,Bo(),s);return y_(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(zt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ry(e),r=new B_(e);return t.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ro,{type:Ro},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ro];a!==void 0&&t(!!a),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=W_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sh()||Th()||ya()}}const gy=my;var Dl="@firebase/auth",Ol="1.10.8";/**
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
 */class _y{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vy(n){Vn(new fn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ch(n)},h=new Mg(r,s,i,u);return Gg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new fn("auth-internal",e=>{const t=pr(e.getProvider("auth").getImmediate());return(r=>new _y(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Dl,Ol,yy(n)),At(Dl,Ol,"esm2017")}/**
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
 */const Ey=5*60,Ty=ih("authIdTokenMaxAge")||Ey;let Vl=null;const Iy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Ty)return;const s=t==null?void 0:t.token;Vl!==s&&(Vl=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wy(n=fa()){const e=Si(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Wg(n,{popupRedirectResolver:gy,persistence:[S_,Mh,Fh]}),r=ih("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Iy(i.toString());h_(t,a,()=>a(t.currentUser)),u_(t,c=>a(c))}}const s=nh("auth");return s&&Kg(t,`http://${s}`),t}function by(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}jg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",by().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vy("Browser");var Ay="firebase",Ry="11.10.0";/**
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
 */At(Ay,Ry,"app");var Ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,Wh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,f){function m(){}m.prototype=f.prototype,w.D=f.prototype,w.prototype=new m,w.prototype.constructor=w,w.C=function(v,I,b){for(var T=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)T[pe-2]=arguments[pe];return f.prototype[I].apply(v,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,f,m){m||(m=0);var v=Array(16);if(typeof f=="string")for(var I=0;16>I;++I)v[I]=f.charCodeAt(m++)|f.charCodeAt(m++)<<8|f.charCodeAt(m++)<<16|f.charCodeAt(m++)<<24;else for(I=0;16>I;++I)v[I]=f[m++]|f[m++]<<8|f[m++]<<16|f[m++]<<24;f=w.g[0],m=w.g[1],I=w.g[2];var b=w.g[3],T=f+(b^m&(I^b))+v[0]+3614090360&4294967295;f=m+(T<<7&4294967295|T>>>25),T=b+(I^f&(m^I))+v[1]+3905402710&4294967295,b=f+(T<<12&4294967295|T>>>20),T=I+(m^b&(f^m))+v[2]+606105819&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(f^I&(b^f))+v[3]+3250441966&4294967295,m=I+(T<<22&4294967295|T>>>10),T=f+(b^m&(I^b))+v[4]+4118548399&4294967295,f=m+(T<<7&4294967295|T>>>25),T=b+(I^f&(m^I))+v[5]+1200080426&4294967295,b=f+(T<<12&4294967295|T>>>20),T=I+(m^b&(f^m))+v[6]+2821735955&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(f^I&(b^f))+v[7]+4249261313&4294967295,m=I+(T<<22&4294967295|T>>>10),T=f+(b^m&(I^b))+v[8]+1770035416&4294967295,f=m+(T<<7&4294967295|T>>>25),T=b+(I^f&(m^I))+v[9]+2336552879&4294967295,b=f+(T<<12&4294967295|T>>>20),T=I+(m^b&(f^m))+v[10]+4294925233&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(f^I&(b^f))+v[11]+2304563134&4294967295,m=I+(T<<22&4294967295|T>>>10),T=f+(b^m&(I^b))+v[12]+1804603682&4294967295,f=m+(T<<7&4294967295|T>>>25),T=b+(I^f&(m^I))+v[13]+4254626195&4294967295,b=f+(T<<12&4294967295|T>>>20),T=I+(m^b&(f^m))+v[14]+2792965006&4294967295,I=b+(T<<17&4294967295|T>>>15),T=m+(f^I&(b^f))+v[15]+1236535329&4294967295,m=I+(T<<22&4294967295|T>>>10),T=f+(I^b&(m^I))+v[1]+4129170786&4294967295,f=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(f^m))+v[6]+3225465664&4294967295,b=f+(T<<9&4294967295|T>>>23),T=I+(f^m&(b^f))+v[11]+643717713&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^f&(I^b))+v[0]+3921069994&4294967295,m=I+(T<<20&4294967295|T>>>12),T=f+(I^b&(m^I))+v[5]+3593408605&4294967295,f=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(f^m))+v[10]+38016083&4294967295,b=f+(T<<9&4294967295|T>>>23),T=I+(f^m&(b^f))+v[15]+3634488961&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^f&(I^b))+v[4]+3889429448&4294967295,m=I+(T<<20&4294967295|T>>>12),T=f+(I^b&(m^I))+v[9]+568446438&4294967295,f=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(f^m))+v[14]+3275163606&4294967295,b=f+(T<<9&4294967295|T>>>23),T=I+(f^m&(b^f))+v[3]+4107603335&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^f&(I^b))+v[8]+1163531501&4294967295,m=I+(T<<20&4294967295|T>>>12),T=f+(I^b&(m^I))+v[13]+2850285829&4294967295,f=m+(T<<5&4294967295|T>>>27),T=b+(m^I&(f^m))+v[2]+4243563512&4294967295,b=f+(T<<9&4294967295|T>>>23),T=I+(f^m&(b^f))+v[7]+1735328473&4294967295,I=b+(T<<14&4294967295|T>>>18),T=m+(b^f&(I^b))+v[12]+2368359562&4294967295,m=I+(T<<20&4294967295|T>>>12),T=f+(m^I^b)+v[5]+4294588738&4294967295,f=m+(T<<4&4294967295|T>>>28),T=b+(f^m^I)+v[8]+2272392833&4294967295,b=f+(T<<11&4294967295|T>>>21),T=I+(b^f^m)+v[11]+1839030562&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^f)+v[14]+4259657740&4294967295,m=I+(T<<23&4294967295|T>>>9),T=f+(m^I^b)+v[1]+2763975236&4294967295,f=m+(T<<4&4294967295|T>>>28),T=b+(f^m^I)+v[4]+1272893353&4294967295,b=f+(T<<11&4294967295|T>>>21),T=I+(b^f^m)+v[7]+4139469664&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^f)+v[10]+3200236656&4294967295,m=I+(T<<23&4294967295|T>>>9),T=f+(m^I^b)+v[13]+681279174&4294967295,f=m+(T<<4&4294967295|T>>>28),T=b+(f^m^I)+v[0]+3936430074&4294967295,b=f+(T<<11&4294967295|T>>>21),T=I+(b^f^m)+v[3]+3572445317&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^f)+v[6]+76029189&4294967295,m=I+(T<<23&4294967295|T>>>9),T=f+(m^I^b)+v[9]+3654602809&4294967295,f=m+(T<<4&4294967295|T>>>28),T=b+(f^m^I)+v[12]+3873151461&4294967295,b=f+(T<<11&4294967295|T>>>21),T=I+(b^f^m)+v[15]+530742520&4294967295,I=b+(T<<16&4294967295|T>>>16),T=m+(I^b^f)+v[2]+3299628645&4294967295,m=I+(T<<23&4294967295|T>>>9),T=f+(I^(m|~b))+v[0]+4096336452&4294967295,f=m+(T<<6&4294967295|T>>>26),T=b+(m^(f|~I))+v[7]+1126891415&4294967295,b=f+(T<<10&4294967295|T>>>22),T=I+(f^(b|~m))+v[14]+2878612391&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~f))+v[5]+4237533241&4294967295,m=I+(T<<21&4294967295|T>>>11),T=f+(I^(m|~b))+v[12]+1700485571&4294967295,f=m+(T<<6&4294967295|T>>>26),T=b+(m^(f|~I))+v[3]+2399980690&4294967295,b=f+(T<<10&4294967295|T>>>22),T=I+(f^(b|~m))+v[10]+4293915773&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~f))+v[1]+2240044497&4294967295,m=I+(T<<21&4294967295|T>>>11),T=f+(I^(m|~b))+v[8]+1873313359&4294967295,f=m+(T<<6&4294967295|T>>>26),T=b+(m^(f|~I))+v[15]+4264355552&4294967295,b=f+(T<<10&4294967295|T>>>22),T=I+(f^(b|~m))+v[6]+2734768916&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~f))+v[13]+1309151649&4294967295,m=I+(T<<21&4294967295|T>>>11),T=f+(I^(m|~b))+v[4]+4149444226&4294967295,f=m+(T<<6&4294967295|T>>>26),T=b+(m^(f|~I))+v[11]+3174756917&4294967295,b=f+(T<<10&4294967295|T>>>22),T=I+(f^(b|~m))+v[2]+718787259&4294967295,I=b+(T<<15&4294967295|T>>>17),T=m+(b^(I|~f))+v[9]+3951481745&4294967295,w.g[0]=w.g[0]+f&4294967295,w.g[1]=w.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,f){f===void 0&&(f=w.length);for(var m=f-this.blockSize,v=this.B,I=this.h,b=0;b<f;){if(I==0)for(;b<=m;)s(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<f;)if(v[I++]=w.charCodeAt(b++),I==this.blockSize){s(this,v),I=0;break}}else for(;b<f;)if(v[I++]=w[b++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=f},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var f=1;f<w.length-8;++f)w[f]=0;var m=8*this.o;for(f=w.length-8;f<w.length;++f)w[f]=m&255,m/=256;for(this.u(w),w=Array(16),f=m=0;4>f;++f)for(var v=0;32>v;v+=8)w[m++]=this.g[f]>>>v&255;return w};function i(w,f){var m=c;return Object.prototype.hasOwnProperty.call(m,w)?m[w]:m[w]=f(w)}function a(w,f){this.h=f;for(var m=[],v=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;v&&b==f||(m[I]=b,v=!1)}this.g=m}var c={};function u(w){return-128<=w&&128>w?i(w,function(f){return new a([f|0],0>f?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return x(h(-w));for(var f=[],m=1,v=0;w>=m;v++)f[v]=w/m|0,m*=4294967296;return new a(f,0)}function g(w,f){if(w.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(w.charAt(0)=="-")return x(g(w.substring(1),f));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=h(Math.pow(f,8)),v=y,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),T=parseInt(w.substring(I,I+b),f);8>b?(b=h(Math.pow(f,b)),v=v.j(b).add(h(T))):(v=v.j(m),v=v.add(h(T)))}return v}var y=u(0),E=u(1),A=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-x(this).m();for(var w=0,f=1,m=0;m<this.g.length;m++){var v=this.i(m);w+=(0<=v?v:4294967296+v)*f,f*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(R(this))return"-"+x(this).toString(w);for(var f=h(Math.pow(w,6)),m=this,v="";;){var I=V(m,f).g;m=U(m,I.j(f));var b=((0<m.g.length?m.g[0]:m.h)>>>0).toString(w);if(m=I,S(m))return b+v;for(;6>b.length;)b="0"+b;v=b+v}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var f=0;f<w.g.length;f++)if(w.g[f]!=0)return!1;return!0}function R(w){return w.h==-1}n.l=function(w){return w=U(this,w),R(w)?-1:S(w)?0:1};function x(w){for(var f=w.g.length,m=[],v=0;v<f;v++)m[v]=~w.g[v];return new a(m,~w.h).add(E)}n.abs=function(){return R(this)?x(this):this},n.add=function(w){for(var f=Math.max(this.g.length,w.g.length),m=[],v=0,I=0;I<=f;I++){var b=v+(this.i(I)&65535)+(w.i(I)&65535),T=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);v=T>>>16,b&=65535,T&=65535,m[I]=T<<16|b}return new a(m,m[m.length-1]&-2147483648?-1:0)};function U(w,f){return w.add(x(f))}n.j=function(w){if(S(this)||S(w))return y;if(R(this))return R(w)?x(this).j(x(w)):x(x(this).j(w));if(R(w))return x(this.j(x(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var f=this.g.length+w.g.length,m=[],v=0;v<2*f;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<w.g.length;I++){var b=this.i(v)>>>16,T=this.i(v)&65535,pe=w.i(I)>>>16,Fe=w.i(I)&65535;m[2*v+2*I]+=T*Fe,$(m,2*v+2*I),m[2*v+2*I+1]+=b*Fe,$(m,2*v+2*I+1),m[2*v+2*I+1]+=T*pe,$(m,2*v+2*I+1),m[2*v+2*I+2]+=b*pe,$(m,2*v+2*I+2)}for(v=0;v<f;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=f;v<2*f;v++)m[v]=0;return new a(m,0)};function $(w,f){for(;(w[f]&65535)!=w[f];)w[f+1]+=w[f]>>>16,w[f]&=65535,f++}function D(w,f){this.g=w,this.h=f}function V(w,f){if(S(f))throw Error("division by zero");if(S(w))return new D(y,y);if(R(w))return f=V(x(w),f),new D(x(f.g),x(f.h));if(R(f))return f=V(w,x(f)),new D(x(f.g),f.h);if(30<w.g.length){if(R(w)||R(f))throw Error("slowDivide_ only works with positive integers.");for(var m=E,v=f;0>=v.l(w);)m=z(m),v=z(v);var I=B(m,1),b=B(v,1);for(v=B(v,2),m=B(m,2);!S(v);){var T=b.add(v);0>=T.l(w)&&(I=I.add(m),b=T),v=B(v,1),m=B(m,1)}return f=U(w,I.j(f)),new D(I,f)}for(I=y;0<=w.l(f);){for(m=Math.max(1,Math.floor(w.m()/f.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),b=h(m),T=b.j(f);R(T)||0<T.l(w);)m-=v,b=h(m),T=b.j(f);S(b)&&(b=E),I=I.add(b),w=U(w,T)}return new D(I,w)}n.A=function(w){return V(this,w).h},n.and=function(w){for(var f=Math.max(this.g.length,w.g.length),m=[],v=0;v<f;v++)m[v]=this.i(v)&w.i(v);return new a(m,this.h&w.h)},n.or=function(w){for(var f=Math.max(this.g.length,w.g.length),m=[],v=0;v<f;v++)m[v]=this.i(v)|w.i(v);return new a(m,this.h|w.h)},n.xor=function(w){for(var f=Math.max(this.g.length,w.g.length),m=[],v=0;v<f;v++)m[v]=this.i(v)^w.i(v);return new a(m,this.h^w.h)};function z(w){for(var f=w.g.length+1,m=[],v=0;v<f;v++)m[v]=w.i(v)<<1|w.i(v-1)>>>31;return new a(m,w.h)}function B(w,f){var m=f>>5;f%=32;for(var v=w.g.length-m,I=[],b=0;b<v;b++)I[b]=0<f?w.i(b+m)>>>f|w.i(b+m+1)<<32-f:w.i(b+m);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wh=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=g,un=a}).apply(typeof Ll<"u"?Ll:typeof self<"u"?self:typeof window<"u"?window:{});var Ms=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gh,Mr,Kh,Js,zo,Qh,Jh,Yh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ms=="object"&&Ms];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var _=0;_<o.length-1;_++){var C=o[_];if(!(C in d))break e;d=d[C]}o=o[o.length-1],_=d[o],l=l(_),l!=_&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,_=!1,C={next:function(){if(!_&&d<o.length){var P=d++;return{value:l(P,o[P]),done:!1}}return _=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function g(o,l,d){return o.call.apply(o.bind,arguments)}function y(o,l,d){if(!o)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,_),o.apply(l,C)}}return function(){return o.apply(l,arguments)}}function E(o,l,d){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:y,E.apply(null,arguments)}function A(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),o.apply(this,_)}}function S(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(_,C,P){for(var L=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)L[_e-2]=arguments[_e];return l.prototype[C].apply(_,L)}}function R(o){const l=o.length;if(0<l){const d=Array(l);for(let _=0;_<l;_++)d[_]=o[_];return d}return[]}function x(o,l){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(u(_)){const C=o.length||0,P=_.length||0;o.length=C+P;for(let L=0;L<P;L++)o[C+L]=_[L]}else o.push(_)}}class U{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function $(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var z=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function B(o,l,d){for(const _ in o)l.call(d,o[_],_,o)}function w(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function f(o){const l={};for(const d in o)l[d]=o[d];return l}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let d,_;for(let C=1;C<arguments.length;C++){_=arguments[C];for(d in _)o[d]=_[d];for(let P=0;P<m.length;P++)d=m[P],Object.prototype.hasOwnProperty.call(_,d)&&(o[d]=_[d])}}function I(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function b(o){c.setTimeout(()=>{throw o},0)}function T(){var o=K;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class pe{constructor(){this.h=this.g=null}add(l,d){const _=Fe.get();_.set(l,d),this.h?this.h.next=_:this.g=_,this.h=_}}var Fe=new U(()=>new nt,o=>o.reset());class nt{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let X,me=!1,K=new pe,Ve=()=>{const o=c.Promise.resolve(void 0);X=()=>{o.then(Z)}};var Z=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){b(d)}var l=Fe;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}me=!1};function J(){this.s=this.s,this.C=this.C}J.prototype.s=!1,J.prototype.ma=function(){this.s||(this.s=!0,this.N())},J.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o}();function ye(o,l){if(M.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,_=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(z){e:{try{V(l.nodeName);var C=!0;break e}catch{}C=!1}C||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Le[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ye.aa.h.call(this)}}S(ye,M);var Le={2:"touch",3:"pen",4:"mouse"};ye.prototype.h=function(){ye.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),re=0;function ce(o,l,d,_,C){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!_,this.ha=C,this.key=++re,this.da=this.fa=!1}function ge(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function H(o){this.src=o,this.g={},this.h=0}H.prototype.add=function(o,l,d,_,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var L=be(o,l,_,C);return-1<L?(l=o[L],d||(l.fa=!1)):(l=new ce(l,this.src,P,!!_,C),l.fa=d,o.push(l)),l};function ve(o,l){var d=l.type;if(d in o.g){var _=o.g[d],C=Array.prototype.indexOf.call(_,l,void 0),P;(P=0<=C)&&Array.prototype.splice.call(_,C,1),P&&(ge(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function be(o,l,d,_){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==l&&P.capture==!!d&&P.ha==_)return C}return-1}var ue="closure_lm_"+(1e6*Math.random()|0),he={};function ne(o,l,d,_,C){if(Array.isArray(l)){for(var P=0;P<l.length;P++)ne(o,l[P],d,_,C);return null}return d=ct(d),o&&o[Be]?o.K(l,d,h(_)?!!_.capture:!1,C):at(o,l,d,!1,_,C)}function at(o,l,d,_,C,P){if(!l)throw Error("Invalid event type");var L=h(C)?!!C.capture:!!C,_e=Mt(o);if(_e||(o[ue]=_e=new H(o)),d=_e.add(l,d,_,L,P),d.proxy)return d;if(_=ee(),d.proxy=_,_.src=o,_.listener=d,o.addEventListener)Se||(C=L),C===void 0&&(C=!1),o.addEventListener(l.toString(),_,C);else if(o.attachEvent)o.attachEvent(Lt(l.toString()),_);else if(o.addListener&&o.removeListener)o.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ee(){function o(d){return l.call(o.src,o.listener,d)}const l=dt;return o}function Ee(o,l,d,_,C){if(Array.isArray(l))for(var P=0;P<l.length;P++)Ee(o,l[P],d,_,C);else _=h(_)?!!_.capture:!!_,d=ct(d),o&&o[Be]?(o=o.i,l=String(l).toString(),l in o.g&&(P=o.g[l],d=be(P,d,_,C),-1<d&&(ge(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[l],o.h--)))):o&&(o=Mt(o))&&(l=o.g[l.toString()],o=-1,l&&(o=be(l,d,_,C)),(d=-1<o?l[o]:null)&&ht(d))}function ht(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Be])ve(l.i,o);else{var d=o.type,_=o.proxy;l.removeEventListener?l.removeEventListener(d,_,o.capture):l.detachEvent?l.detachEvent(Lt(d),_):l.addListener&&l.removeListener&&l.removeListener(_),(d=Mt(l))?(ve(d,o),d.h==0&&(d.src=null,l[ue]=null)):ge(o)}}}function Lt(o){return o in he?he[o]:he[o]="on"+o}function dt(o,l){if(o.da)o=!0;else{l=new ye(l,this);var d=o.listener,_=o.ha||o.src;o.fa&&ht(o),o=d.call(_,l)}return o}function Mt(o){return o=o[ue],o instanceof H?o:null}var Pe="__closure_events_fn_"+(1e9*Math.random()>>>0);function ct(o){return typeof o=="function"?o:(o[Pe]||(o[Pe]=function(l){return o.handleEvent(l)}),o[Pe])}function oe(){J.call(this),this.i=new H(this),this.M=this,this.F=null}S(oe,J),oe.prototype[Be]=!0,oe.prototype.removeEventListener=function(o,l,d,_){Ee(this,o,l,d,_)};function de(o,l){var d,_=o.F;if(_)for(d=[];_;_=_.F)d.push(_);if(o=o.M,_=l.type||l,typeof l=="string")l=new M(l,o);else if(l instanceof M)l.target=l.target||o;else{var C=l;l=new M(_,o),v(l,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var L=l.g=d[P];C=rt(L,_,!0,l)&&C}if(L=l.g=o,C=rt(L,_,!0,l)&&C,C=rt(L,_,!1,l)&&C,d)for(P=0;P<d.length;P++)L=l.g=d[P],C=rt(L,_,!1,l)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],_=0;_<d.length;_++)ge(d[_]);delete o.g[l],o.h--}}this.F=null},oe.prototype.K=function(o,l,d,_){return this.i.add(String(o),l,!1,d,_)},oe.prototype.L=function(o,l,d,_){return this.i.add(String(o),l,!0,d,_)};function rt(o,l,d,_){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var C=!0,P=0;P<l.length;++P){var L=l[P];if(L&&!L.da&&L.capture==d){var _e=L.listener,$e=L.ha||L.src;L.fa&&ve(o.i,L),C=_e.call($e,_)!==!1&&C}}return C&&!_.defaultPrevented}function zn(o,l,d){if(typeof o=="function")d&&(o=E(o,d));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Tr(o){o.g=zn(()=>{o.g=null,o.i&&(o.i=!1,Tr(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Kt extends J{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Tr(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(o){J.call(this),this.h=o,this.g={}}S(Ge,J);var Qt=[];function Ir(o){B(o.g,function(l,d){this.g.hasOwnProperty(d)&&ht(l)},o),o.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),Ir(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var no=c.JSON.stringify,Kf=c.JSON.parse,Qf=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ro(){}ro.prototype.h=null;function fc(o){return o.h||(o.h=o.i())}function pc(){}var wr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function so(){M.call(this,"d")}S(so,M);function io(){M.call(this,"c")}S(io,M);var Rn={},mc=null;function Ts(){return mc=mc||new oe}Rn.La="serverreachability";function gc(o){M.call(this,Rn.La,o)}S(gc,M);function br(o){const l=Ts();de(l,new gc(l))}Rn.STAT_EVENT="statevent";function _c(o,l){M.call(this,Rn.STAT_EVENT,o),this.stat=l}S(_c,M);function tt(o){const l=Ts();de(l,new _c(l,o))}Rn.Ma="timingevent";function yc(o,l){M.call(this,Rn.Ma,o),this.size=l}S(yc,M);function Ar(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Rr(){this.g=!0}Rr.prototype.xa=function(){this.g=!1};function Jf(o,l,d,_,C,P){o.info(function(){if(o.g)if(P)for(var L="",_e=P.split("&"),$e=0;$e<_e.length;$e++){var le=_e[$e].split("=");if(1<le.length){var Ke=le[0];le=le[1];var Qe=Ke.split("_");L=2<=Qe.length&&Qe[1]=="type"?L+(Ke+"="+le+"&"):L+(Ke+"=redacted&")}}else L=null;else L=P;return"XMLHTTP REQ ("+_+") [attempt "+C+"]: "+l+`
`+d+`
`+L})}function Yf(o,l,d,_,C,P,L){o.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+C+"]: "+l+`
`+d+`
`+P+" "+L})}function Hn(o,l,d,_){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Zf(o,d)+(_?" "+_:"")})}function Xf(o,l){o.info(function(){return"TIMEOUT: "+l})}Rr.prototype.info=function(){};function Zf(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var _=d[o];if(!(2>_.length)){var C=_[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var L=1;L<C.length;L++)C[L]=""}}}}return no(d)}catch{return l}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},vc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},oo;function ws(){}S(ws,ro),ws.prototype.g=function(){return new XMLHttpRequest},ws.prototype.i=function(){return{}},oo=new ws;function Jt(o,l,d,_){this.j=o,this.i=l,this.l=d,this.R=_||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ec}function Ec(){this.i=null,this.g="",this.h=!1}var Tc={},ao={};function co(o,l,d){o.L=1,o.v=Ss(jt(l)),o.m=d,o.P=!0,Ic(o,null)}function Ic(o,l){o.F=Date.now(),bs(o),o.A=jt(o.v);var d=o.A,_=o.R;Array.isArray(_)||(_=[String(_)]),Lc(d.i,"t",_),o.C=0,d=o.j.J,o.h=new Ec,o.g=el(o.j,d?l:null,!o.m),0<o.O&&(o.M=new Kt(E(o.Y,o,o.g),o.O)),l=o.U,d=o.g,_=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Qt[0]=C.toString()),C=Qt);for(var P=0;P<C.length;P++){var L=ne(d,C[P],_||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=o.H?f(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),br(),Jf(o.i,o.u,o.A,o.l,o.R,o.m)}Jt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Ft(o)==3?l.j():this.Y(o)},Jt.prototype.Y=function(o){try{if(o==this.g)e:{const Qe=Ft(this.g);var l=this.g.Ba();const Kn=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||qc(this.g)))){this.J||Qe!=4||l==7||(l==8||0>=Kn?br(3):br(2)),lo(this);var d=this.g.Z();this.X=d;t:if(wc(this)){var _=qc(this.g);o="";var C=_.length,P=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sn(this),Sr(this);var L="";break t}this.h.i=new c.TextDecoder}for(l=0;l<C;l++)this.h.h=!0,o+=this.h.i.decode(_[l],{stream:!(P&&l==C-1)});_.length=0,this.h.g+=o,this.C=0,L=this.h.g}else L=this.g.oa();if(this.o=d==200,Yf(this.i,this.u,this.A,this.l,this.R,Qe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,$e=this.g;if((_e=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(_e)){var le=_e;break t}}le=null}if(d=le)Hn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uo(this,d);else{this.o=!1,this.s=3,tt(12),Sn(this),Sr(this);break e}}if(this.P){d=!0;let _t;for(;!this.J&&this.C<L.length;)if(_t=ep(this,L),_t==ao){Qe==4&&(this.s=4,tt(14),d=!1),Hn(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Tc){this.s=4,tt(15),Hn(this.i,this.l,L,"[Invalid Chunk]"),d=!1;break}else Hn(this.i,this.l,_t,null),uo(this,_t);if(wc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||L.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)Hn(this.i,this.l,L,"[Invalid Chunked Response]"),Sn(this),Sr(this);else if(0<L.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+L.length),_o(Ke),Ke.M=!0,tt(11))}}else Hn(this.i,this.l,L,null),uo(this,L);Qe==4&&Sn(this),this.o&&!this.J&&(Qe==4?Jc(this.j,this):(this.o=!1,bs(this)))}else _p(this.g),d==400&&0<L.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Sn(this),Sr(this)}}}catch{}finally{}};function wc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ep(o,l){var d=o.C,_=l.indexOf(`
`,d);return _==-1?ao:(d=Number(l.substring(d,_)),isNaN(d)?Tc:(_+=1,_+d>l.length?ao:(l=l.slice(_,_+d),o.C=_+d,l)))}Jt.prototype.cancel=function(){this.J=!0,Sn(this)};function bs(o){o.S=Date.now()+o.I,bc(o,o.I)}function bc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ar(E(o.ba,o),l)}function lo(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Jt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xf(this.i,this.A),this.L!=2&&(br(),tt(17)),Sn(this),this.s=2,Sr(this)):bc(this,this.S-o)};function Sr(o){o.j.G==0||o.J||Jc(o.j,o)}function Sn(o){lo(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Ir(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function uo(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||ho(d.h,o))){if(!o.K&&ho(d.h,o)&&d.G==3){try{var _=d.Da.g.parse(l)}catch{_=null}if(Array.isArray(_)&&_.length==3){var C=_;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ds(d),ks(d);else break e;go(d),tt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ar(E(d.Za,d),6e3));if(1>=Sc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xn(d,11)}else if((o.K||d.g==o)&&Ds(d),!$(l))for(C=d.Da.g.parse(l),l=0;l<C.length;l++){let le=C[l];if(d.T=le[0],le=le[1],d.G==2)if(le[0]=="c"){d.K=le[1],d.ia=le[2];const Ke=le[3];Ke!=null&&(d.la=Ke,d.j.info("VER="+d.la));const Qe=le[4];Qe!=null&&(d.Aa=Qe,d.j.info("SVER="+d.Aa));const Kn=le[5];Kn!=null&&typeof Kn=="number"&&0<Kn&&(_=1.5*Kn,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const _t=o.g;if(_t){const Vs=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vs){var P=_.h;P.g||Vs.indexOf("spdy")==-1&&Vs.indexOf("quic")==-1&&Vs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(fo(P,P.h),P.h=null))}if(_.D){const yo=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;yo&&(_.ya=yo,Ie(_.I,_.D,yo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var L=o;if(_.qa=Zc(_,_.J?_.ia:null,_.W),L.K){Cc(_.h,L);var _e=L,$e=_.L;$e&&(_e.I=$e),_e.B&&(lo(_e),bs(_e)),_.g=L}else Kc(_);0<d.i.length&&Ns(d)}else le[0]!="stop"&&le[0]!="close"||xn(d,7);else d.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?xn(d,7):mo(d):le[0]!="noop"&&d.l&&d.l.ta(le),d.v=0)}}br(4)}catch{}}var tp=class{constructor(o,l){this.g=o,this.map=l}};function Ac(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Rc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Sc(o){return o.h?1:o.g?o.g.size:0}function ho(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function fo(o,l){o.g?o.g.add(l):o.h=l}function Cc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ac.prototype.cancel=function(){if(this.i=xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function xc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return R(o.i)}function np(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,_=0;_<d;_++)l.push(o[_]);return l}l=[],d=0;for(_ in o)l[d++]=o[_];return l}function rp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const _ in o)l[d++]=_;return l}}}function Pc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=rp(o),_=np(o),C=_.length,P=0;P<C;P++)l.call(void 0,_[P],d&&d[P],o)}var kc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sp(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var _=o[d].indexOf("="),C=null;if(0<=_){var P=o[d].substring(0,_);C=o[d].substring(_+1)}else P=o[d];l(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Cn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Cn){this.h=o.h,As(this,o.j),this.o=o.o,this.g=o.g,Rs(this,o.s),this.l=o.l;var l=o.i,d=new Pr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),Nc(this,d),this.m=o.m}else o&&(l=String(o).match(kc))?(this.h=!1,As(this,l[1]||"",!0),this.o=Cr(l[2]||""),this.g=Cr(l[3]||"",!0),Rs(this,l[4]),this.l=Cr(l[5]||"",!0),Nc(this,l[6]||"",!0),this.m=Cr(l[7]||"")):(this.h=!1,this.i=new Pr(null,this.h))}Cn.prototype.toString=function(){var o=[],l=this.j;l&&o.push(xr(l,Dc,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(xr(l,Dc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(xr(d,d.charAt(0)=="/"?ap:op,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",xr(d,lp)),o.join("")};function jt(o){return new Cn(o)}function As(o,l,d){o.j=d?Cr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Rs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Nc(o,l,d){l instanceof Pr?(o.i=l,up(o.i,o.h)):(d||(l=xr(l,cp)),o.i=new Pr(l,o.h))}function Ie(o,l,d){o.i.set(l,d)}function Ss(o){return Ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Cr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xr(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,ip),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ip(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Dc=/[#\/\?@]/g,op=/[#\?:]/g,ap=/[#\?]/g,cp=/[#\?@]/g,lp=/#/g;function Pr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Yt(o){o.g||(o.g=new Map,o.h=0,o.i&&sp(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=Pr.prototype,n.add=function(o,l){Yt(this),this.i=null,o=Wn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function Oc(o,l){Yt(o),l=Wn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Vc(o,l){return Yt(o),l=Wn(o,l),o.g.has(l)}n.forEach=function(o,l){Yt(this),this.g.forEach(function(d,_){d.forEach(function(C){o.call(l,C,_,this)},this)},this)},n.na=function(){Yt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let _=0;_<l.length;_++){const C=o[_];for(let P=0;P<C.length;P++)d.push(l[_])}return d},n.V=function(o){Yt(this);let l=[];if(typeof o=="string")Vc(this,o)&&(l=l.concat(this.g.get(Wn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return Yt(this),this.i=null,o=Wn(this,o),Vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Lc(o,l,d){Oc(o,l),0<d.length&&(o.i=null,o.g.set(Wn(o,l),R(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var _=l[d];const P=encodeURIComponent(String(_)),L=this.V(_);for(_=0;_<L.length;_++){var C=P;L[_]!==""&&(C+="="+encodeURIComponent(String(L[_]))),o.push(C)}}return this.i=o.join("&")};function Wn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function up(o,l){l&&!o.j&&(Yt(o),o.i=null,o.g.forEach(function(d,_){var C=_.toLowerCase();_!=C&&(Oc(this,_),Lc(this,C,d))},o)),o.j=l}function hp(o,l){const d=new Rr;if(c.Image){const _=new Image;_.onload=A(Xt,d,"TestLoadImage: loaded",!0,l,_),_.onerror=A(Xt,d,"TestLoadImage: error",!1,l,_),_.onabort=A(Xt,d,"TestLoadImage: abort",!1,l,_),_.ontimeout=A(Xt,d,"TestLoadImage: timeout",!1,l,_),c.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=o}else l(!1)}function dp(o,l){const d=new Rr,_=new AbortController,C=setTimeout(()=>{_.abort(),Xt(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:_.signal}).then(P=>{clearTimeout(C),P.ok?Xt(d,"TestPingServer: ok",!0,l):Xt(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),Xt(d,"TestPingServer: error",!1,l)})}function Xt(o,l,d,_,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),_(d)}catch{}}function fp(){this.g=new Qf}function pp(o,l,d){const _=d||"";try{Pc(o,function(C,P){let L=C;h(C)&&(L=no(C)),l.push(_+P+"="+encodeURIComponent(L))})}catch(C){throw l.push(_+"type="+encodeURIComponent("_badmap")),C}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Cs,ro),Cs.prototype.g=function(){return new xs(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function xs(o,l){oe.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(xs,oe),n=xs.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Nr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?kr(this):Nr(this),this.readyState==3&&Mc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,kr(this))},n.Qa=function(o){this.g&&(this.response=o,kr(this))},n.ga=function(){this.g&&kr(this)};function kr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Nr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function Nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function jc(o){let l="";return B(o,function(d,_){l+=_,l+=":",l+=d,l+=`\r
`}),l}function po(o,l,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=jc(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ie(o,l,d))}function Re(o){oe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Re,oe);var mp=/^https?$/i,gp=["POST","PUT"];n=Re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():oo.g(),this.v=this.o?fc(this.o):fc(oo),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Fc(this,P);return}if(o=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var C in _)d.set(C,_[C]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const P of _.keys())d.set(P,_.get(P));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(gp,l,void 0))||_||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,L]of d)this.g.setRequestHeader(P,L);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$c(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Fc(this,P)}};function Fc(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Uc(o),Ps(o)}function Uc(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Ps(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ps(this,!0)),Re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bc(this):this.bb())},n.bb=function(){Bc(this)};function Bc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ft(o)!=4||o.Z()!=2)){if(o.u&&Ft(o)==4)zn(o.Ea,0,o);else if(de(o,"readystatechange"),Ft(o)==4){o.h=!1;try{const L=o.Z();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var _;if(_=L===0){var C=String(o.D).match(kc)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),_=!mp.test(C?C.toLowerCase():"")}d=_}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var P=2<Ft(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Uc(o)}}finally{Ps(o)}}}}function Ps(o,l){if(o.g){$c(o);const d=o.g,_=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||de(o,"ready");try{d.onreadystatechange=_}catch{}}}function $c(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ft(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Kf(l)}};function qc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function _p(o){const l={};o=(o.g&&2<=Ft(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<o.length;_++){if($(o[_]))continue;var d=I(o[_]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=l[C]||[];l[C]=P,P.push(d)}w(l,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function zc(o){this.Aa=0,this.i=[],this.j=new Rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Dr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Dr("baseRetryDelayMs",5e3,o),this.cb=Dr("retryDelaySeedMs",1e4,o),this.Wa=Dr("forwardChannelMaxRetries",2,o),this.wa=Dr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ac(o&&o.concurrentRequestLimit),this.Da=new fp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=zc.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,_){tt(0),this.W=o,this.H=l||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Zc(this,null,this.W),Ns(this)};function mo(o){if(Hc(o),o.G==3){var l=o.U++,d=jt(o.I);if(Ie(d,"SID",o.K),Ie(d,"RID",l),Ie(d,"TYPE","terminate"),Or(o,d),l=new Jt(o,o.j,l),l.L=2,l.v=Ss(jt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=el(l.j,null),l.g.ea(l.v)),l.F=Date.now(),bs(l)}Xc(o)}function ks(o){o.g&&(_o(o),o.g.cancel(),o.g=null)}function Hc(o){ks(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ds(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ns(o){if(!Rc(o.h)&&!o.s){o.s=!0;var l=o.Ga;X||Ve(),me||(X(),me=!0),K.add(l,o),o.B=0}}function yp(o,l){return Sc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ar(E(o.Ga,o,l),Yc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Jt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=f(P),v(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(l+=_,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Gc(this,C,l),d=jt(this.I),Ie(d,"RID",o),Ie(d,"CVER",22),this.D&&Ie(d,"X-HTTP-Session-Id",this.D),Or(this,d),P&&(this.O?l="headers="+encodeURIComponent(String(jc(P)))+"&"+l:this.m&&po(d,this.m,P)),fo(this.h,C),this.Ua&&Ie(d,"TYPE","init"),this.P?(Ie(d,"$req",l),Ie(d,"SID","null"),C.T=!0,co(C,d,null)):co(C,d,l),this.G=2}}else this.G==3&&(o?Wc(this,o):this.i.length==0||Rc(this.h)||Wc(this))};function Wc(o,l){var d;l?d=l.l:d=o.U++;const _=jt(o.I);Ie(_,"SID",o.K),Ie(_,"RID",d),Ie(_,"AID",o.T),Or(o,_),o.m&&o.o&&po(_,o.m,o.o),d=new Jt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Gc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),fo(o.h,d),co(d,_,l)}function Or(o,l){o.H&&B(o.H,function(d,_){Ie(l,_,d)}),o.l&&Pc({},function(d,_){Ie(l,_,d)})}function Gc(o,l,d){d=Math.min(o.i.length,d);var _=o.l?E(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const L=["count="+d];P==-1?0<d?(P=C[0].g,L.push("ofs="+P)):P=0:L.push("ofs="+P);let _e=!0;for(let $e=0;$e<d;$e++){let le=C[$e].g;const Ke=C[$e].map;if(le-=P,0>le)P=Math.max(0,C[$e].g-100),_e=!1;else try{pp(Ke,L,"req"+le+"_")}catch{_&&_(Ke)}}if(_e){_=L.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,_}function Kc(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;X||Ve(),me||(X(),me=!0),K.add(l,o),o.v=0}}function go(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ar(E(o.Fa,o),Yc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Qc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ar(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),ks(this),Qc(this))};function _o(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Qc(o){o.g=new Jt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=jt(o.qa);Ie(l,"RID","rpc"),Ie(l,"SID",o.K),Ie(l,"AID",o.T),Ie(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ie(l,"TO",o.ja),Ie(l,"TYPE","xmlhttp"),Or(o,l),o.m&&o.o&&po(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Ss(jt(l)),d.m=null,d.P=!0,Ic(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ks(this),go(this),tt(19))};function Ds(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Jc(o,l){var d=null;if(o.g==l){Ds(o),_o(o),o.g=null;var _=2}else if(ho(o.h,l))d=l.D,Cc(o.h,l),_=1;else return;if(o.G!=0){if(l.o)if(_==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var C=o.B;_=Ts(),de(_,new yc(_,d)),Ns(o)}else Kc(o);else if(C=l.s,C==3||C==0&&0<l.X||!(_==1&&yp(o,l)||_==2&&go(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),C){case 1:xn(o,5);break;case 4:xn(o,10);break;case 3:xn(o,6);break;default:xn(o,2)}}}function Yc(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function xn(o,l){if(o.j.info("Error code "+l),l==2){var d=E(o.fb,o),_=o.Xa;const C=!_;_=new Cn(_||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||As(_,"https"),Ss(_),C?hp(_.toString(),d):dp(_.toString(),d)}else tt(2);o.G=0,o.l&&o.l.sa(l),Xc(o),Hc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Xc(o){if(o.G=0,o.ka=[],o.l){const l=xc(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function Zc(o,l,d){var _=d instanceof Cn?jt(d):new Cn(d);if(_.g!="")l&&(_.g=l+"."+_.g),Rs(_,_.s);else{var C=c.location;_=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;var P=new Cn(null);_&&As(P,_),l&&(P.g=l),C&&Rs(P,C),d&&(P.l=d),_=P}return d=o.D,l=o.ya,d&&l&&Ie(_,d,l),Ie(_,"VER",o.la),Or(o,_),_}function el(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new Re(new Cs({eb:d})):new Re(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function tl(){}n=tl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Os(){}Os.prototype.g=function(o,l){return new lt(o,l)};function lt(o,l){oe.call(this),this.g=new zc(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!$(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!$(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Gn(this)}S(lt,oe),lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){mo(this.g)},lt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=no(o),o=d);l.i.push(new tp(l.Ya++,o)),l.G==3&&Ns(l)},lt.prototype.N=function(){this.g.l=null,delete this.j,mo(this.g),delete this.g,lt.aa.N.call(this)};function nl(o){so.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}S(nl,so);function rl(){io.call(this),this.status=1}S(rl,io);function Gn(o){this.g=o}S(Gn,tl),Gn.prototype.ua=function(){de(this.g,"a")},Gn.prototype.ta=function(o){de(this.g,new nl(o))},Gn.prototype.sa=function(o){de(this.g,new rl)},Gn.prototype.ra=function(){de(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Yh=function(){return new Os},Jh=function(){return Ts()},Qh=Rn,zo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Js=Is,vc.COMPLETE="complete",Kh=vc,pc.EventType=wr,wr.OPEN="a",wr.CLOSE="b",wr.ERROR="c",wr.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Mr=pc,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,Gh=Re}).apply(typeof Ms<"u"?Ms:typeof self<"u"?self:typeof window<"u"?window:{});const Ml="@firebase/firestore",jl="4.8.0";/**
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
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let gr="11.10.0";/**
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
 */const Mn=new ha("@firebase/firestore");function Qn(){return Mn.logLevel}function F(n,...e){if(Mn.logLevel<=se.DEBUG){const t=e.map(wa);Mn.debug(`Firestore (${gr}): ${n}`,...t)}}function Ht(n,...e){if(Mn.logLevel<=se.ERROR){const t=e.map(wa);Mn.error(`Firestore (${gr}): ${n}`,...t)}}function pn(n,...e){if(Mn.logLevel<=se.WARN){const t=e.map(wa);Mn.warn(`Firestore (${gr}): ${n}`,...t)}}function wa(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function G(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Xh(n,r,t)}function Xh(n,e,t){let r=`FIRESTORE (${gr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ht(r),new Error(r)}function fe(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Xh(e,s,r)}function Y(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ot{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Zh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ye.UNAUTHENTICATED))}shutdown(){}}class Cy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xy{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){fe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new Zh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class Py{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ky{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Py(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Fl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ny{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,F("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Fl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fl(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function ed(){return new TextEncoder}/**
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
 */class ba{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Dy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function Ho(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return te(r,s);{const i=ed(),a=Oy(i.encode(Ul(n,t)),i.encode(Ul(e,t)));return a!==0?a:te(r,s)}}t+=r>65535?2:1}return te(n.length,e.length)}function Ul(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Oy(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return te(n[t],e[t]);return te(n.length,e.length)}function ar(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Bl="__name__";class wt{constructor(e,t,r){t===void 0?t=0:t>e.length&&G(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&G(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof wt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=wt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return te(e.length,t.length)}static compareSegments(e,t){const r=wt.isNumericId(e),s=wt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?wt.extractNumericId(e).compare(wt.extractNumericId(t)):Ho(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return un.fromString(e.substring(4,e.length-2))}}class Te extends wt{construct(e,t,r){return new Te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Te(t)}static emptyPath(){return new Te([])}}const Vy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends wt{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return Vy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bl}static keyField(){return new ze([Bl])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new j(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Te.fromString(e))}static fromName(e){return new q(Te.fromString(e).popFirst(5))}static empty(){return new q(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Te(e.slice()))}}/**
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
 */function td(n,e,t){if(!t)throw new j(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ly(n,e,t,r){if(e===!0&&r===!0)throw new j(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $l(n){if(!q.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ql(n){if(q.isDocumentKey(n))throw new j(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function nd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ni(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":G(12329,{type:typeof n})}function hn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ni(n);throw new j(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function De(n,e){const t={typeString:n};return e&&(t.value=e),t}function us(n,e){if(!nd(n))throw new j(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new j(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const zl=-62135596800,Hl=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Hl);return new we(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<zl)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hl}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(us(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:De("string",we._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new we(0,0))}static max(){return new Q(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Jr=-1;function My(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(r===1e9?new we(t+1,0):new we(t,r));return new mn(s,q.empty(),e)}function jy(n){return new mn(n.readTime,n.key,Jr)}class mn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mn(Q.min(),q.empty(),Jr)}static max(){return new mn(Q.max(),q.empty(),Jr)}}function Fy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
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
 */const Uy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class By{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function _r(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Uy)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(s=>s?N.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new N((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next(g=>{a[h]=g,++c,c===i&&r(a)},g=>s(g))}})}static doWhile(e,t){return new N((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function $y(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Di{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Di.ue=-1;/**
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
 */const Aa=-1;function Oi(n){return n==null}function hi(n){return n===0&&1/n==-1/0}function qy(n){return typeof n=="number"&&Number.isInteger(n)&&!hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const rd="";function zy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Wl(e)),e=Hy(n.get(t),e);return Wl(e)}function Hy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case rd:t+="";break;default:t+=i}}return t}function Wl(n){return n+rd+""}/**
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
 */function Gl(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function In(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ae{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new Ae(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class je{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kl(this.data.getIterator())}getIteratorFrom(e){return new Kl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new je(this.comparator);return t.data=e,t}}class Kl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ut{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new ut([])}unionWith(e){let t=new je(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ar(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class id extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new id("Invalid base64 string: "+i):i}}(e);return new We(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new We(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Wy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(n){if(fe(!!n,39018),typeof n=="string"){let e=0;const t=Wy.exec(n);if(fe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(n.seconds),nanos:Ce(n.nanos)}}function Ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _n(n){return typeof n=="string"?We.fromBase64String(n):We.fromUint8Array(n)}/**
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
 */const od="server_timestamp",ad="__type__",cd="__previous_value__",ld="__local_write_time__";function Ra(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ad])===null||t===void 0?void 0:t.stringValue)===od}function Vi(n){const e=n.mapValue.fields[cd];return Ra(e)?Vi(e):e}function Yr(n){const e=gn(n.mapValue.fields[ld].timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class Gy{constructor(e,t,r,s,i,a,c,u,h,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=g}}const di="(default)";class Xr{constructor(e,t){this.projectId=e,this.database=t||di}static empty(){return new Xr("","")}get isDefaultDatabase(){return this.database===di}isEqual(e){return e instanceof Xr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ud="__type__",Ky="__max__",Fs={mapValue:{}},hd="__vector__",fi="value";function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ra(n)?4:Jy(n)?9007199254740991:Qy(n)?10:11:G(28295,{value:n})}function Nt(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yr(n).isEqual(Yr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=gn(s.timestampValue),c=gn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return _n(s.bytesValue).isEqual(_n(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ce(s.doubleValue),c=Ce(i.doubleValue);return a===c?hi(a)===hi(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return ar(n.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Gl(a)!==Gl(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Nt(a[u],c[u])))return!1;return!0}(n,e);default:return G(52216,{left:n})}}function Zr(n,e){return(n.values||[]).find(t=>Nt(t,e))!==void 0}function cr(n,e){if(n===e)return 0;const t=yn(n),r=yn(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ce(i.integerValue||i.doubleValue),u=Ce(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return Ql(n.timestampValue,e.timestampValue);case 4:return Ql(Yr(n),Yr(e));case 5:return Ho(n.stringValue,e.stringValue);case 6:return function(i,a){const c=_n(i),u=_n(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const g=te(c[h],u[h]);if(g!==0)return g}return te(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=te(Ce(i.latitude),Ce(a.latitude));return c!==0?c:te(Ce(i.longitude),Ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Jl(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,u,h,g;const y=i.fields||{},E=a.fields||{},A=(c=y[fi])===null||c===void 0?void 0:c.arrayValue,S=(u=E[fi])===null||u===void 0?void 0:u.arrayValue,R=te(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((g=S==null?void 0:S.values)===null||g===void 0?void 0:g.length)||0);return R!==0?R:Jl(A,S)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Fs.mapValue&&a===Fs.mapValue)return 0;if(i===Fs.mapValue)return 1;if(a===Fs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},g=Object.keys(h);u.sort(),g.sort();for(let y=0;y<u.length&&y<g.length;++y){const E=Ho(u[y],g[y]);if(E!==0)return E;const A=cr(c[u[y]],h[g[y]]);if(A!==0)return A}return te(u.length,g.length)}(n.mapValue,e.mapValue);default:throw G(23264,{le:t})}}function Ql(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=gn(n),r=gn(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function Jl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=cr(t[s],r[s]);if(i)return i}return te(t.length,r.length)}function lr(n){return Wo(n)}function Wo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=gn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _n(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return q.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Wo(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Wo(t.fields[a])}`;return s+"}"}(n.mapValue):G(61005,{value:n})}function Ys(n){switch(yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vi(n);return e?16+Ys(e):16;case 5:return 2*n.stringValue.length;case 6:return _n(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ys(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return In(r.fields,(i,a)=>{s+=i.length+Ys(a)}),s}(n.mapValue);default:throw G(13486,{value:n})}}function Yl(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Go(n){return!!n&&"integerValue"in n}function Sa(n){return!!n&&"arrayValue"in n}function Xl(n){return!!n&&"nullValue"in n}function Zl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xs(n){return!!n&&"mapValue"in n}function Qy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ud])===null||t===void 0?void 0:t.stringValue)===hd}function qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return In(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Ky}/**
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
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Xs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=ze.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=qr(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Xs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Xs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){In(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ot(qr(this.value))}}function dd(n){const e=[];return In(n.fields,(t,r)=>{const s=new ze([t]);if(Xs(r)){const i=dd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new ut(e)}/**
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
 */class Ze{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ze(e,0,Q.min(),Q.min(),Q.min(),ot.empty(),0)}static newFoundDocument(e,t,r,s){return new Ze(e,1,t,Q.min(),r,s,0)}static newNoDocument(e,t){return new Ze(e,2,t,Q.min(),Q.min(),ot.empty(),0)}static newUnknownDocument(e,t){return new Ze(e,3,t,Q.min(),Q.min(),ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pi{constructor(e,t){this.position=e,this.inclusive=t}}function eu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),t.key):r=cr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function tu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class es{constructor(e,t="asc"){this.field=e,this.dir=t}}function Yy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class fd{}class Ne extends fd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Zy(e,t,r):t==="array-contains"?new nv(e,r):t==="in"?new rv(e,r):t==="not-in"?new sv(e,r):t==="array-contains-any"?new iv(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new ev(e,r):new tv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cr(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.matchesComparison(cr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends fd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new It(e,t)}matches(e){return pd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function pd(n){return n.op==="and"}function md(n){return Xy(n)&&pd(n)}function Xy(n){for(const e of n.filters)if(e instanceof It)return!1;return!0}function Ko(n){if(n instanceof Ne)return n.field.canonicalString()+n.op.toString()+lr(n.value);if(md(n))return n.filters.map(e=>Ko(e)).join(",");{const e=n.filters.map(t=>Ko(t)).join(",");return`${n.op}(${e})`}}function gd(n,e){return n instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)}(n,e):n instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&gd(a,s.filters[c]),!0):!1}(n,e):void G(19439)}function _d(n){return n instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${lr(t.value)}`}(n):n instanceof It?function(t){return t.op.toString()+" {"+t.getFilters().map(_d).join(" ,")+"}"}(n):"Filter"}class Zy extends Ne{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class ev extends Ne{constructor(e,t){super(e,"in",t),this.keys=yd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class tv extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=yd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>q.fromName(r.referenceValue))}class nv extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Sa(t)&&Zr(t.arrayValue,this.value)}}class rv extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Zr(this.value.arrayValue,t)}}class sv extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Zr(this.value.arrayValue,t)}}class iv extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Sa(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Zr(this.value.arrayValue,r))}}/**
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
 */class ov{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function nu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new ov(n,e,t,r,s,i,a)}function Ca(n){const e=Y(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ko(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>lr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>lr(r)).join(",")),e.Pe=t}return e.Pe}function xa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Yy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tu(n.startAt,e.startAt)&&tu(n.endAt,e.endAt)}function Qo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class vr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function av(n,e,t,r,s,i,a,c){return new vr(n,e,t,r,s,i,a,c)}function Pa(n){return new vr(n)}function ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vd(n){return n.collectionGroup!==null}function zr(n){const e=Y(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new je(ze.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new es(i,r))}),t.has(ze.keyField().canonicalString())||e.Te.push(new es(ze.keyField(),r))}return e.Te}function Ct(n){const e=Y(n);return e.Ie||(e.Ie=cv(e,zr(n))),e.Ie}function cv(n,e){if(n.limitType==="F")return nu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new es(s.field,i)});const t=n.endAt?new pi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new pi(n.startAt.position,n.startAt.inclusive):null;return nu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Jo(n,e){const t=n.filters.concat([e]);return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function mi(n,e,t){return new vr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Li(n,e){return xa(Ct(n),Ct(e))&&n.limitType===e.limitType}function Ed(n){return`${Ca(Ct(n))}|lt:${n.limitType}`}function Jn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>_d(s)).join(", ")}]`),Oi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>lr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>lr(s)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function Mi(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of zr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const h=eu(a,c,u);return a.inclusive?h<=0:h<0}(r.startAt,zr(r),s)||r.endAt&&!function(a,c,u){const h=eu(a,c,u);return a.inclusive?h>=0:h>0}(r.endAt,zr(r),s))}(n,e)}function lv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Td(n){return(e,t)=>{let r=!1;for(const s of zr(n)){const i=uv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uv(n,e,t){const r=n.field.isKeyField()?q.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?cr(u,h):G(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:n.dir})}}/**
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
 */class $n{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){In(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return sd(this.inner)}size(){return this.innerSize}}/**
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
 */const hv=new Ae(q.comparator);function Wt(){return hv}const Id=new Ae(q.comparator);function jr(...n){let e=Id;for(const t of n)e=e.insert(t.key,t);return e}function wd(n){let e=Id;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function kn(){return Hr()}function bd(){return Hr()}function Hr(){return new $n(n=>n.toString(),(n,e)=>n.isEqual(e))}const dv=new Ae(q.comparator),fv=new je(q.comparator);function ie(...n){let e=fv;for(const t of n)e=e.add(t);return e}const pv=new je(te);function mv(){return pv}/**
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
 */function ka(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hi(e)?"-0":e}}function Ad(n){return{integerValue:""+n}}function gv(n,e){return qy(e)?Ad(e):ka(n,e)}/**
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
 */class ji{constructor(){this._=void 0}}function _v(n,e,t){return n instanceof ts?function(s,i){const a={fields:{[ad]:{stringValue:od},[ld]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ra(i)&&(i=Vi(i)),i&&(a.fields[cd]=i),{mapValue:a}}(t,e):n instanceof ns?Sd(n,e):n instanceof rs?Cd(n,e):function(s,i){const a=Rd(s,i),c=su(a)+su(s.Ee);return Go(a)&&Go(s.Ee)?Ad(c):ka(s.serializer,c)}(n,e)}function yv(n,e,t){return n instanceof ns?Sd(n,e):n instanceof rs?Cd(n,e):t}function Rd(n,e){return n instanceof gi?function(r){return Go(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ts extends ji{}class ns extends ji{constructor(e){super(),this.elements=e}}function Sd(n,e){const t=xd(e);for(const r of n.elements)t.some(s=>Nt(s,r))||t.push(r);return{arrayValue:{values:t}}}class rs extends ji{constructor(e){super(),this.elements=e}}function Cd(n,e){let t=xd(e);for(const r of n.elements)t=t.filter(s=>!Nt(s,r));return{arrayValue:{values:t}}}class gi extends ji{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function su(n){return Ce(n.integerValue||n.doubleValue)}function xd(n){return Sa(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class vv{constructor(e,t){this.field=e,this.transform=t}}function Ev(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ns&&s instanceof ns||r instanceof rs&&s instanceof rs?ar(r.elements,s.elements,Nt):r instanceof gi&&s instanceof gi?Nt(r.Ee,s.Ee):r instanceof ts&&s instanceof ts}(n.transform,e.transform)}class Tv{constructor(e,t){this.version=e,this.transformResults=t}}class Et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Et}static exists(e){return new Et(void 0,e)}static updateTime(e){return new Et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fi{}function Pd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Na(n.key,Et.none()):new hs(n.key,n.data,Et.none());{const t=n.data,r=ot.empty();let s=new je(ze.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new wn(n.key,r,new ut(s.toArray()),Et.none())}}function Iv(n,e,t){n instanceof hs?function(s,i,a){const c=s.value.clone(),u=ou(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wn?function(s,i,a){if(!Zs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ou(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(kd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Wr(n,e,t,r){return n instanceof hs?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=i.value.clone(),g=au(i.fieldTransforms,u,a);return h.setAll(g),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof wn?function(i,a,c,u){if(!Zs(i.precondition,a))return c;const h=au(i.fieldTransforms,u,a),g=a.data;return g.setAll(kd(i)),g.setAll(h),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(i,a,c){return Zs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function wv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Rd(r.transform,s||null);i!=null&&(t===null&&(t=ot.empty()),t.set(r.field,i))}return t||null}function iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ar(r,s,(i,a)=>Ev(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class hs extends Fi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wn extends Fi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kd(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ou(n,e,t){const r=new Map;fe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,yv(a,c,t[s]))}return r}function au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,_v(i,a,e))}return r}class Na extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bv extends Fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Av{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Iv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Wr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bd();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Pd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ie())}isEqual(e){return this.batchId===e.batchId&&ar(this.mutations,e.mutations,(t,r)=>iu(t,r))&&ar(this.baseMutations,e.baseMutations,(t,r)=>iu(t,r))}}class Da{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){fe(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return dv}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Da(e,t,r,s)}}/**
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
 */class Rv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,ae;function Cv(n){switch(n){case k.OK:return G(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return G(15467,{code:n})}}function Nd(n){if(n===void 0)return Ht("GRPC error has no .code"),k.UNKNOWN;switch(n){case ke.OK:return k.OK;case ke.CANCELLED:return k.CANCELLED;case ke.UNKNOWN:return k.UNKNOWN;case ke.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ke.INTERNAL:return k.INTERNAL;case ke.UNAVAILABLE:return k.UNAVAILABLE;case ke.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ke.NOT_FOUND:return k.NOT_FOUND;case ke.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ke.ABORTED:return k.ABORTED;case ke.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ke.DATA_LOSS:return k.DATA_LOSS;default:return G(39323,{code:n})}}(ae=ke||(ke={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xv=new un([4294967295,4294967295],0);function cu(n){const e=ed().encode(n),t=new Wh;return t.update(e),new Uint8Array(t.digest())}function lu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new un([t,r],0),new un([s,i],0)]}class Oa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fr(`Invalid padding: ${t}`);if(r<0)throw new Fr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=un.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(un.fromNumber(r)));return s.compare(xv)===1&&(s=new un([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=cu(e),[r,s]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Oa(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.fe===0)return;const t=cu(e),[r,s]=lu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ui{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ds.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ui(Q.min(),s,new Ae(te),Wt(),ie())}}class ds{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ds(r,t,ie(),ie(),ie())}}/**
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
 */class ei{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Dd{constructor(e,t){this.targetId=e,this.De=t}}class Od{constructor(e,t,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class uu{constructor(){this.ve=0,this.Ce=hu(),this.Fe=We.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ie(),t=ie(),r=ie();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:G(38017,{changeType:i})}}),new ds(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=hu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Pv{constructor(e){this.We=e,this.Ge=new Map,this.ze=Wt(),this.je=Us(),this.Je=Us(),this.He=new Ae(te)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Qo(i))if(r===0){const a=new q(i.path);this.Xe(t,a,Ze.newNoDocument(a,Q.min()))}else fe(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=_n(r).toUint8Array()}catch(u){if(u instanceof id)return pn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Oa(a,s,i)}catch(u){return pn(u instanceof Fr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const c=this.st(a);if(c){if(i.current&&Qo(c.target)){const u=new q(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Ze.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=ie();this.Je.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new Ui(e,t,this.He,this.ze,r);return this.ze=Wt(),this.je=Us(),this.Je=Us(),this.He=new Ae(te),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new uu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new je(te),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new je(te),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new uu),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Us(){return new Ae(q.comparator)}function hu(){return new Ae(q.comparator)}const kv={asc:"ASCENDING",desc:"DESCENDING"},Nv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dv={and:"AND",or:"OR"};class Ov{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Yo(n,e){return n.useProto3Json||Oi(e)?e:{value:e}}function _i(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vv(n,e){return _i(n,e.toTimestamp())}function xt(n){return fe(!!n,49232),Q.fromTimestamp(function(t){const r=gn(t);return new we(r.seconds,r.nanos)}(n))}function Va(n,e){return Xo(n,e).canonicalString()}function Xo(n,e){const t=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ld(n){const e=Te.fromString(n);return fe(Bd(e),10190,{key:e.toString()}),e}function Zo(n,e){return Va(n.databaseId,e.path)}function So(n,e){const t=Ld(e);if(t.get(1)!==n.databaseId.projectId)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(jd(t))}function Md(n,e){return Va(n.databaseId,e)}function Lv(n){const e=Ld(n);return e.length===4?Te.emptyPath():jd(e)}function ea(n){return new Te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jd(n){return fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function du(n,e,t){return{name:Zo(n,e),fields:t.value.mapValue.fields}}function Mv(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,g){return h.useProto3Json?(fe(g===void 0||typeof g=="string",58123),We.fromBase64String(g||"")):(fe(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),We.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const g=h.code===void 0?k.UNKNOWN:Nd(h.code);return new j(g,h.message||"")}(a);t=new Od(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=So(n,r.document.name),i=xt(r.document.updateTime),a=r.document.createTime?xt(r.document.createTime):Q.min(),c=new ot({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(s,i,a,c),h=r.targetIds||[],g=r.removedTargetIds||[];t=new ei(h,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=So(n,r.document),i=r.readTime?xt(r.readTime):Q.min(),a=Ze.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ei([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=So(n,r.document),i=r.removedTargetIds||[];t=new ei([],i,s,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Sv(s,i),c=r.targetId;t=new Dd(c,a)}}return t}function jv(n,e){let t;if(e instanceof hs)t={update:du(n,e.key,e.value)};else if(e instanceof Na)t={delete:Zo(n,e.key)};else if(e instanceof wn)t={update:du(n,e.key,e.data),updateMask:Gv(e.fieldMask)};else{if(!(e instanceof bv))return G(16599,{Rt:e.type});t={verify:Zo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof ts)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ns)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw G(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Vv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G(27497)}(n,e.precondition)),t}function Fv(n,e){return n&&n.length>0?(fe(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?xt(s.updateTime):xt(i);return a.isEqual(Q.min())&&(a=xt(i)),new Tv(a,s.transformResults||[])}(t,e))):[]}function Uv(n,e){return{documents:[Md(n,e.path)]}}function Bv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Md(n,s);const i=function(h){if(h.length!==0)return Ud(It.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(g=>function(E){return{field:Yn(E.field),direction:zv(E.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Yo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:s}}function $v(n){let e=Lv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){fe(r===1,65062);const g=t.from[0];g.allDescendants?s=g.collectionId:e=e.child(g.collectionId)}let i=[];t.where&&(i=function(y){const E=Fd(y);return E instanceof It&&md(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(E=>function(S){return new es(Xn(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(y){let E;return E=typeof y=="object"?y.value:y,Oi(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(y){const E=!!y.before,A=y.values||[];return new pi(A,E)}(t.startAt));let h=null;return t.endAt&&(h=function(y){const E=!y.before,A=y.values||[];return new pi(A,E)}(t.endAt)),av(e,s,a,i,c,"F",u,h)}function qv(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fd(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xn(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xn(t.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xn(t.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xn(t.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ne.create(Xn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return It.create(t.compositeFilter.filters.map(r=>Fd(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(t.compositeFilter.op))}(n):G(30097,{filter:n})}function zv(n){return kv[n]}function Hv(n){return Nv[n]}function Wv(n){return Dv[n]}function Yn(n){return{fieldPath:n.canonicalString()}}function Xn(n){return ze.fromServerFormat(n.fieldPath)}function Ud(n){return n instanceof Ne?function(t){if(t.op==="=="){if(Zl(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(Xl(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zl(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(Xl(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:Hv(t.op),value:t.value}}}(n):n instanceof It?function(t){const r=t.getFilters().map(s=>Ud(s));return r.length===1?r[0]:{compositeFilter:{op:Wv(t.op),filters:r}}}(n):G(54877,{filter:n})}function Gv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class on{constructor(e,t,r,s,i=Q.min(),a=Q.min(),c=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new on(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new on(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Kv{constructor(e){this.gt=e}}function Qv(n){const e=$v({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mi(e,e.limit,"L"):e}/**
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
 */class Jv{constructor(){this.Dn=new Yv}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(mn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class Yv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new je(Te.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new je(Te.comparator)).toArray()}}/**
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
 */const fu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$d=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it($d,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
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
 */class ur{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ur(0)}static ur(){return new ur(-1)}}/**
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
 */const pu="LruGarbageCollector",Xv=1048576;function mu([n,e],[t,r]){const s=te(n,t);return s===0?te(e,r):s}class Zv{constructor(e){this.Tr=e,this.buffer=new je(mu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();mu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){F(pu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yr(t)?F(pu,"Ignoring IndexedDB error during garbage collection: ",t):await _r(t)}await this.Rr(3e5)})}}class tE{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Di.ue);const r=new Zv(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(fu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fu):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,h;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,t))).next(y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(h=Date.now(),Qn()<=se.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-g}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(h-u)+`ms
Total Duration: ${h-g}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y})))}}function nE(n,e){return new tE(n,e)}/**
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
 */class rE{constructor(){this.changes=new $n(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iE{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Wr(r.mutation,s,ut.empty(),we.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ie()){const s=kn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=jr();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=kn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ie()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Wt();const a=Hr(),c=function(){return Hr()}();return t.forEach((u,h)=>{const g=r.get(h.key);s.has(h.key)&&(g===void 0||g.mutation instanceof wn)?i=i.insert(h.key,h):g!==void 0?(a.set(h.key,g.mutation.getFieldMask()),Wr(g.mutation,h,g.mutation.getFieldMask(),we.now())):a.set(h.key,ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,g)=>a.set(h,g)),t.forEach((h,g)=>{var y;return c.set(h,new sE(g,(y=a.get(h))!==null&&y!==void 0?y:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Hr();let s=new Ae((a,c)=>a-c),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let g=r.get(u)||ut.empty();g=c.applyToLocalView(h,g),r.set(u,g);const y=(s.get(c.batchId)||ie()).add(u);s=s.insert(c.batchId,y)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,g=u.value,y=bd();g.forEach(E=>{if(!i.has(E)){const A=Pd(t.get(E),r.get(E));A!==null&&y.set(E,A),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,y))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(kn());let c=Jr,u=i;return a.next(h=>N.forEach(h,(g,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(g)?N.resolve():this.remoteDocumentCache.getEntry(e,g).next(E=>{u=u.insert(g,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,ie())).next(g=>({batchId:c,changes:wd(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(r=>{let s=jr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=jr();return this.indexManager.getCollectionParents(e,i).next(c=>N.forEach(c,u=>{const h=function(y,E){return new vr(E,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(g=>{g.forEach((y,E)=>{a=a.insert(y,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,h)=>{const g=h.getKey();a.get(g)===null&&(a=a.insert(g,Ze.newInvalidDocument(g)))});let c=jr();return a.forEach((u,h)=>{const g=i.get(u);g!==void 0&&Wr(g.mutation,h,ut.empty(),we.now()),Mi(t,h)&&(c=c.insert(u,h))}),c})}}/**
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
 */class oE{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:xt(s.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:Qv(s.bundledQuery),readTime:xt(s.readTime)}}(t)),N.resolve()}}/**
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
 */class aE{constructor(){this.overlays=new Ae(q.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=kn();return N.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=kn(),i=t.length+1,a=new q(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ae((h,g)=>h-g);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let g=i.get(h.largestBatchId);g===null&&(g=kn(),i=i.insert(h.largestBatchId,g)),g.set(h.getKey(),h)}}const c=kn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,g)=>c.set(h,g)),!(c.size()>=s)););return N.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Rv(t,r));let i=this.kr.get(t);i===void 0&&(i=ie(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class cE{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class La{constructor(){this.qr=new je(Ue.Qr),this.$r=new je(Ue.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ue(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new Ue(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new q(new Te([])),r=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new q(new Te([])),r=new Ue(t,e),s=new Ue(t,e+1);let i=ie();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Ue(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return q.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
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
 */class lE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new je(Ue.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Av(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ue(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?Aa:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const c=this.Zr(a.Hr);i.push(c)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new je(te);return t.forEach(s=>{const i=new Ue(s,0),a=new Ue(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],c=>{r=r.add(c.Hr)})}),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const a=new Ue(new q(i),0);let c=new je(te);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Hr)),!0)},a),N.resolve(this.ei(c))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(t.mutations,s=>{const i=new Ue(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new Ue(t,0),s=this.Yr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class uE{constructor(e){this.ni=e,this.docs=function(){return new Ae(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(t))}getEntries(e,t){let r=Wt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Wt();const a=t.path,c=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:g}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Fy(jy(g),r)<=0||(s.has(g.key)||Mi(t,g))&&(i=i.insert(g.key,g.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){G(9500)}ri(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hE(this)}getSize(e){return N.resolve(this.size)}}class hE extends rE{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class dE{constructor(e){this.persistence=e,this.ii=new $n(t=>Ca(t),xa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new La,this.targetCount=0,this._i=ur.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ur(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),N.waitFor(i).next(()=>s)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
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
 */class qd{constructor(e,t){this.ai={},this.overlays={},this.ui=new Di(0),this.ci=!1,this.ci=!0,this.li=new cE,this.referenceDelegate=e(this),this.hi=new dE(this),this.indexManager=new Jv,this.remoteDocumentCache=function(s){return new uE(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new Kv(t),this.Ti=new oE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new lE(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){F("MemoryPersistence","Starting transaction:",e);const s=new fE(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return N.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class fE extends By{constructor(e){super(),this.currentSequenceNumber=e}}class Ma{constructor(e){this.persistence=e,this.Ai=new La,this.Ri=null}static Vi(e){return new Ma(e)}get mi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,r=>{const s=q.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,Q.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yi{constructor(e,t){this.persistence=e,this.gi=new $n(r=>zy(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=nE(this,t)}static Vi(e,t){return new yi(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return N.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?N.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,Q.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ys(e.data.value)),t}Sr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ja{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ie(),s=ie();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ja(e,t.fromCache,r,s)}}/**
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
 */class pE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mE{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Gp()?8:$y(et())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new pE;return this.ws(e,t,a).next(c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Qn()<=se.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",Jn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Qn()<=se.DEBUG&&F("QueryEngine","Query:",Jn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Qn()<=se.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",Jn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ct(t))):N.resolve())}ps(e,t){if(ru(t))return N.resolve(null);let r=Ct(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=mi(t,null,"F"),r=Ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ie(...i);return this.gs.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(t,c);return this.Ds(t,h,a,u.readTime)?this.ps(e,mi(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,r,s){return ru(t)||s.isEqual(Q.min())?N.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?N.resolve(null):(Qn()<=se.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Jn(t)),this.vs(e,a,t,My(s,Jr)).next(c=>c))})}bs(e,t){let r=new je(Td(e));return t.forEach((s,i)=>{Mi(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Qn()<=se.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Jn(t)),this.gs.getDocumentsMatchingQuery(e,t,mn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Fa="LocalStore",gE=3e8;class _E{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Ae(te),this.Ms=new $n(i=>Ca(i),xa),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iE(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function yE(n,e,t,r){return new _E(n,e,t,r)}async function zd(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ie();for(const h of s){a.push(h.batchId);for(const g of h.mutations)u=u.add(g.key)}for(const h of i){c.push(h.batchId);for(const g of h.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:c}))})})}function vE(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(c,u,h,g){const y=h.batch,E=y.keys();let A=N.resolve();return E.forEach(S=>{A=A.next(()=>g.getEntry(u,S)).next(R=>{const x=h.docVersions.get(S);fe(x!==null,48541),R.version.compareTo(x)<0&&(y.applyToRemoteDocument(R,h),R.isValidDocument()&&(R.setReadTime(h.commitVersion),g.addEntry(R)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(u,y))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ie();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Hd(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function EE(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach((g,y)=>{const E=s.get(y);if(!E)return;c.push(t.hi.removeMatchingKeys(i,g.removedDocuments,y).next(()=>t.hi.addMatchingKeys(i,g.addedDocuments,y)));let A=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(We.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):g.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(g.resumeToken,r)),s=s.insert(y,A),function(R,x,U){return R.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=gE?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(E,A,g)&&c.push(t.hi.updateTargetData(i,A))});let u=Wt(),h=ie();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,g))}),c.push(TE(i,a,e.documentUpdates).next(g=>{u=g.Ls,h=g.ks})),!r.isEqual(Q.min())){const g=t.hi.getLastRemoteSnapshotVersion(i).next(y=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(g)}return N.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(t.Fs=s,i))}function TE(n,e,t){let r=ie(),s=ie();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Wt();return t.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):F(Fa,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{Ls:a,ks:s}})}function IE(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Aa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wE(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,N.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new on(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function ta(n,e,t){const r=Y(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!yr(a))throw a;F(Fa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function gu(n,e,t){const r=Y(n);let s=Q.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,g){const y=Y(u),E=y.Ms.get(g);return E!==void 0?N.resolve(y.Fs.get(E)):y.hi.getTargetData(h,g)}(r,a,Ct(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:Q.min(),t?i:ie())).next(c=>(bE(r,lv(e),c),{documents:c,qs:i})))}function bE(n,e,t){let r=n.xs.get(e)||Q.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}class _u{constructor(){this.activeTargetIds=mv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AE{constructor(){this.Fo=new _u,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new _u,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class RE{xo(e){}shutdown(){}}/**
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
 */const yu="ConnectivityMonitor";class vu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){F(yu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){F(yu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bs=null;function na(){return Bs===null?Bs=function(){return 268435456+Math.round(2147483648*Math.random())}():Bs++,"0x"+Bs.toString(16)}/**
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
 */const Co="RestConnection",SE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class CE{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===di?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=na(),c=this.Go(e,t.toUriEncodedString());F(Co,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:h}=new URL(c),g=Fn(h);return this.jo(e,c,u,r,g).then(y=>(F(Co,`Received RPC '${e}' ${a}: `,y),y),y=>{throw pn(Co,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+gr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=SE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class xE{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Je="WebChannelConnection";class PE extends CE{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=na();return new Promise((c,u)=>{const h=new Gh;h.setWithCredentials(!0),h.listenOnce(Kh.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Js.NO_ERROR:const y=h.getResponseJson();F(Je,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case Js.TIMEOUT:F(Je,`RPC '${e}' ${a} timed out`),u(new j(k.DEADLINE_EXCEEDED,"Request time out"));break;case Js.HTTP_ERROR:const E=h.getStatus();if(F(Je,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const R=function(U){const $=U.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN}(S.status);u(new j(R,S.message))}else u(new j(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new j(k.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{F(Je,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(s);F(Je,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",g,r,15)})}P_(e,t,r){const s=na(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yh(),c=Jh(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const g=i.join("");F(Je,`Creating RPC '${e}' stream ${s}: ${g}`,u);const y=a.createWebChannel(g,u);this.T_(y);let E=!1,A=!1;const S=new xE({Ho:x=>{A?F(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(E||(F(Je,`Opening RPC '${e}' stream ${s} transport.`),y.open(),E=!0),F(Je,`RPC '${e}' stream ${s} sending:`,x),y.send(x))},Yo:()=>y.close()}),R=(x,U,$)=>{x.listen(U,D=>{try{$(D)}catch(V){setTimeout(()=>{throw V},0)}})};return R(y,Mr.EventType.OPEN,()=>{A||(F(Je,`RPC '${e}' stream ${s} transport opened.`),S.s_())}),R(y,Mr.EventType.CLOSE,()=>{A||(A=!0,F(Je,`RPC '${e}' stream ${s} transport closed`),S.__(),this.I_(y))}),R(y,Mr.EventType.ERROR,x=>{A||(A=!0,pn(Je,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),S.__(new j(k.UNAVAILABLE,"The operation could not be completed")))}),R(y,Mr.EventType.MESSAGE,x=>{var U;if(!A){const $=x.data[0];fe(!!$,16349);const D=$,V=(D==null?void 0:D.error)||((U=D[0])===null||U===void 0?void 0:U.error);if(V){F(Je,`RPC '${e}' stream ${s} received error:`,V);const z=V.status;let B=function(m){const v=ke[m];if(v!==void 0)return Nd(v)}(z),w=V.message;B===void 0&&(B=k.INTERNAL,w="Unknown error status: "+z+" with message "+V.message),A=!0,S.__(new j(B,w)),y.close()}else F(Je,`RPC '${e}' stream ${s} received:`,$),S.a_($)}}),R(c,Qh.STAT_EVENT,x=>{x.stat===zo.PROXY?F(Je,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===zo.NOPROXY&&F(Je,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.o_()},0),S}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function xo(){return typeof document<"u"?document:null}/**
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
 */function Bi(n){return new Ov(n,!0)}/**
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
 */class Wd{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Eu="PersistentStream";class Gd{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Wd(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Ht(t.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new j(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return F(Eu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(F(Eu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kE extends Gd{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Mv(this.serializer,e),r=function(i){if(!("targetChange"in i))return Q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?xt(a.readTime):Q.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=ea(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=Qo(u)?{documents:Uv(i,u)}:{query:Bv(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Vd(i,a.resumeToken);const h=Yo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){c.readTime=_i(i,a.snapshotVersion.toTimestamp());const h=Yo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=qv(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=ea(this.serializer),t.removeTarget=e,this.k_(t)}}class NE extends Gd{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Fv(e.writeResults,e.commitTime),r=xt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=ea(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>jv(this.serializer,r))};this.k_(t)}}/**
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
 */class DE{}class OE extends DE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Xo(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(k.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Jo(e,Xo(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(k.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class VE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ht(t),this._a=!1):F("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const jn="RemoteStore";class LE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{qn(this)&&(F(jn,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Ia.add(4),await fs(h),h.Aa.set("Unknown"),h.Ia.delete(4),await $i(h)}(this))})}),this.Aa=new VE(r,s)}}async function $i(n){if(qn(n))for(const e of n.da)await e(!0)}async function fs(n){for(const e of n.da)await e(!1)}function Kd(n,e){const t=Y(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),qa(t)?$a(t):Er(t).x_()&&Ba(t,e))}function Ua(n,e){const t=Y(n),r=Er(t);t.Ta.delete(e),r.x_()&&Qd(t,e),t.Ta.size===0&&(r.x_()?r.B_():qn(t)&&t.Aa.set("Unknown"))}function Ba(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Er(n).H_(e)}function Qd(n,e){n.Ra.$e(e),Er(n).Y_(e)}function $a(n){n.Ra=new Pv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Er(n).start(),n.Aa.aa()}function qa(n){return qn(n)&&!Er(n).M_()&&n.Ta.size>0}function qn(n){return Y(n).Ia.size===0}function Jd(n){n.Ra=void 0}async function ME(n){n.Aa.set("Online")}async function jE(n){n.Ta.forEach((e,t)=>{Ba(n,e)})}async function FE(n,e){Jd(n),qa(n)?(n.Aa.la(e),$a(n)):n.Aa.set("Unknown")}async function UE(n,e,t){if(n.Aa.set("Online"),e instanceof Od&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))}(n,e)}catch(r){F(jn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vi(n,r)}else if(e instanceof ei?n.Ra.Ye(e):e instanceof Dd?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Q.min()))try{const r=await Hd(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const g=i.Ta.get(h);g&&i.Ta.set(h,g.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,h)=>{const g=i.Ta.get(u);if(!g)return;i.Ta.set(u,g.withResumeToken(We.EMPTY_BYTE_STRING,g.snapshotVersion)),Qd(i,u);const y=new on(g.target,u,h,g.sequenceNumber);Ba(i,y)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){F(jn,"Failed to raise snapshot:",r),await vi(n,r)}}async function vi(n,e,t){if(!yr(e))throw e;n.Ia.add(1),await fs(n),n.Aa.set("Offline"),t||(t=()=>Hd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{F(jn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await $i(n)})}function Yd(n,e){return e().catch(t=>vi(n,t,e))}async function qi(n){const e=Y(n),t=vn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Aa;for(;BE(e);)try{const s=await IE(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,$E(e,s)}catch(s){await vi(e,s)}Xd(e)&&Zd(e)}function BE(n){return qn(n)&&n.Pa.length<10}function $E(n,e){n.Pa.push(e);const t=vn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Xd(n){return qn(n)&&!vn(n).M_()&&n.Pa.length>0}function Zd(n){vn(n).start()}async function qE(n){vn(n).na()}async function zE(n){const e=vn(n);for(const t of n.Pa)e.X_(t.mutations)}async function HE(n,e,t){const r=n.Pa.shift(),s=Da.from(r,e,t);await Yd(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await qi(n)}async function WE(n,e){e&&vn(n).Z_&&await async function(r,s){if(function(a){return Cv(a)&&a!==k.ABORTED}(s.code)){const i=r.Pa.shift();vn(r).N_(),await Yd(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await qi(r)}}(n,e),Xd(n)&&Zd(n)}async function Tu(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),F(jn,"RemoteStore received new credentials");const r=qn(t);t.Ia.add(3),await fs(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await $i(t)}async function GE(n,e){const t=Y(n);e?(t.Ia.delete(2),await $i(t)):e||(t.Ia.add(2),await fs(t),t.Aa.set("Unknown"))}function Er(n){return n.Va||(n.Va=function(t,r,s){const i=Y(t);return i.ia(),new kE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:ME.bind(null,n),e_:jE.bind(null,n),n_:FE.bind(null,n),J_:UE.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),qa(n)?$a(n):n.Aa.set("Unknown")):(await n.Va.stop(),Jd(n))})),n.Va}function vn(n){return n.ma||(n.ma=function(t,r,s){const i=Y(t);return i.ia(),new NE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:qE.bind(null,n),n_:WE.bind(null,n),ea:zE.bind(null,n),ta:HE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await qi(n)):(await n.ma.stop(),n.Pa.length>0&&(F(jn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class za{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new za(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ha(n,e){if(Ht("AsyncQueue",`${e}: ${n}`),yr(n))return new j(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class rr{static emptySet(e){return new rr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(t,r)=>q.comparator(t.key,r.key),this.keyedMap=jr(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new rr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Iu{constructor(){this.fa=new Ae(q.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):G(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class hr{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new hr(e,t,rr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Li(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class KE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class QE{constructor(){this.queries=wu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=wu(),i.forEach((a,c)=>{for(const u of c.wa)u.onError(r)})})(this,new j(k.ABORTED,"Firestore shutting down"))}}function wu(){return new $n(n=>Ed(n),Li)}async function JE(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new KE,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ha(a,`Initialization of query '${Jn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Wa(t)}async function YE(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function XE(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Wa(t)}function ZE(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Wa(n){n.Da.forEach(e=>{e.next()})}var ra,bu;(bu=ra||(ra={})).Fa="default",bu.Cache="cache";class eT{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=hr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ra.Cache}}/**
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
 */class ef{constructor(e){this.key=e}}class tf{constructor(e){this.key=e}}class tT{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ie(),this.mutatedKeys=ie(),this.Xa=Td(e),this.eu=new rr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Iu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((g,y)=>{const E=s.get(g),A=Mi(this.query,y)?y:null,S=!!E&&this.mutatedKeys.has(E.key),R=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let x=!1;E&&A?E.data.isEqual(A.data)?S!==R&&(r.track({type:3,doc:A}),x=!0):this.iu(E,A)||(r.track({type:2,doc:A}),x=!0,(u&&this.Xa(A,u)>0||h&&this.Xa(A,h)<0)&&(c=!0)):!E&&A?(r.track({type:0,doc:A}),x=!0):E&&!A&&(r.track({type:1,doc:E}),x=!0,(u||h)&&(c=!0)),x&&(A?(a=a.add(A),i=R?i.add(g):i.delete(g)):(a=a.delete(g),i=i.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),i=i.delete(g.key),r.track({type:1,doc:g})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((g,y)=>function(A,S){const R=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:x})}};return R(A)-R(S)}(g.type,y.type)||this.Xa(g.doc,y.doc)),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new hr(this.query,e.eu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Iu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ie(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new tf(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new ef(r))}),t}uu(e){this.Ha=e.qs,this.Za=ie();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return hr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ga="SyncEngine";class nT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rT{constructor(e){this.key=e,this.lu=!1}}class sT{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new $n(c=>Ed(c),Li),this.Tu=new Map,this.Iu=new Set,this.du=new Ae(q.comparator),this.Eu=new Map,this.Au=new La,this.Ru={},this.Vu=new Map,this.mu=ur.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function iT(n,e,t=!0){const r=cf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await nf(r,e,t,!0),s}async function oT(n,e){const t=cf(n);await nf(t,e,!0,!1)}async function nf(n,e,t,r){const s=await wE(n.localStore,Ct(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await aT(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Kd(n.remoteStore,s),c}async function aT(n,e,t,r,s){n.gu=(y,E,A)=>async function(R,x,U,$){let D=x.view.nu(U);D.Ds&&(D=await gu(R.localStore,x.query,!1).then(({documents:w})=>x.view.nu(w,D)));const V=$&&$.targetChanges.get(x.targetId),z=$&&$.targetMismatches.get(x.targetId)!=null,B=x.view.applyChanges(D,R.isPrimaryClient,V,z);return Ru(R,x.targetId,B._u),B.snapshot}(n,y,E,A);const i=await gu(n.localStore,e,!0),a=new tT(e,i.qs),c=a.nu(i.documents),u=ds.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);Ru(n,t,h._u);const g=new nT(e,t,a);return n.Pu.set(e,g),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function cT(n,e,t){const r=Y(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!Li(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ta(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ua(r.remoteStore,s.targetId),sa(r,s.targetId)}).catch(_r)):(sa(r,s.targetId),await ta(r.localStore,s.targetId,!0))}async function lT(n,e){const t=Y(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ua(t.remoteStore,r.targetId))}async function uT(n,e,t){const r=_T(n);try{const s=await function(a,c){const u=Y(a),h=we.now(),g=c.reduce((A,S)=>A.add(S.key),ie());let y,E;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=Wt(),R=ie();return u.Os.getEntries(A,g).next(x=>{S=x,S.forEach((U,$)=>{$.isValidDocument()||(R=R.add(U))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,S)).next(x=>{y=x;const U=[];for(const $ of c){const D=wv($,y.get($.key).overlayedDocument);D!=null&&U.push(new wn($.key,D,dd(D.value.mapValue),Et.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,U,c)}).next(x=>{E=x;const U=x.applyToLocalDocumentSet(y,R);return u.documentOverlayCache.saveOverlays(A,x.batchId,U)})}).then(()=>({batchId:E.batchId,changes:wd(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new Ae(te)),h=h.insert(c,u),a.Ru[a.currentUser.toKey()]=h}(r,s.batchId,t),await ps(r,s.changes),await qi(r.remoteStore)}catch(s){const i=Ha(s,"Failed to persist write");t.reject(i)}}async function rf(n,e){const t=Y(n);try{const r=await EE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?fe(a.lu,14607):s.removedDocuments.size>0&&(fe(a.lu,42227),a.lu=!1))}),await ps(t,r,e)}catch(r){await _r(r)}}function Au(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=Y(a);u.onlineState=c;let h=!1;u.queries.forEach((g,y)=>{for(const E of y.wa)E.va(c)&&(h=!0)}),h&&Wa(u)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hT(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Ae(q.comparator);a=a.insert(i,Ze.newNoDocument(i,Q.min()));const c=ie().add(i),u=new Ui(Q.min(),new Map,new Ae(te),a,c);await rf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Ka(r)}else await ta(r.localStore,e,!1).then(()=>sa(r,e,t)).catch(_r)}async function dT(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await vE(t.localStore,e);of(t,r,null),sf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ps(t,s)}catch(s){await _r(s)}}async function fT(n,e,t){const r=Y(n);try{const s=await function(a,c){const u=Y(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let g;return u.mutationQueue.lookupMutationBatch(h,c).next(y=>(fe(y!==null,37113),g=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,g,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,g)).next(()=>u.localDocuments.getDocuments(h,g))})}(r.localStore,e);of(r,e,t),sf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ps(r,s)}catch(s){await _r(s)}}function sf(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function of(n,e,t){const r=Y(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function sa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||af(n,r)})}function af(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ua(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ka(n))}function Ru(n,e,t){for(const r of t)r instanceof ef?(n.Au.addReference(r.key,e),pT(n,r)):r instanceof tf?(F(Ga,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||af(n,r.key)):G(19791,{yu:r})}function pT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(F(Ga,"New document in limbo: "+t),n.Iu.add(r),Ka(n))}function Ka(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new q(Te.fromString(e)),r=n.mu.next();n.Eu.set(r,new rT(t)),n.du=n.du.insert(t,r),Kd(n.remoteStore,new on(Ct(Pa(t.path)),r,"TargetPurposeLimboResolution",Di.ue))}}async function ps(n,e,t){const r=Y(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((c,u)=>{a.push(r.gu(u,e,t).then(h=>{var g;if((h||t)&&r.isPrimaryClient){const y=h?!h.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=ja.Es(u.targetId,h);i.push(y)}}))}),await Promise.all(a),r.hu.J_(s),await async function(u,h){const g=Y(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>N.forEach(h,E=>N.forEach(E.Is,A=>g.persistence.referenceDelegate.addReference(y,E.targetId,A)).next(()=>N.forEach(E.ds,A=>g.persistence.referenceDelegate.removeReference(y,E.targetId,A)))))}catch(y){if(!yr(y))throw y;F(Fa,"Failed to update sequence numbers: "+y)}for(const y of h){const E=y.targetId;if(!y.fromCache){const A=g.Fs.get(E),S=A.snapshotVersion,R=A.withLastLimboFreeSnapshotVersion(S);g.Fs=g.Fs.insert(E,R)}}}(r.localStore,i))}async function mT(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){F(Ga,"User change. New user:",e.toKey());const r=await zd(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(c=>{c.forEach(u=>{u.reject(new j(k.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ps(t,r.Bs)}}function gT(n,e){const t=Y(n),r=t.Eu.get(e);if(r&&r.lu)return ie().add(r.key);{let s=ie();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function cf(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hT.bind(null,e),e.hu.J_=XE.bind(null,e.eventManager),e.hu.pu=ZE.bind(null,e.eventManager),e}function _T(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fT.bind(null,e),e}class Ei{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return yE(this.persistence,new mE,e.initialUser,this.serializer)}Du(e){return new qd(Ma.Vi,this.serializer)}bu(e){return new AE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ei.provider={build:()=>new Ei};class yT extends Ei{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){fe(this.persistence.referenceDelegate instanceof yi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new eE(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new qd(r=>yi.Vi(r,t),this.serializer)}}class ia{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Au(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mT.bind(null,this.syncEngine),await GE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QE}()}createDatastore(e){const t=Bi(e.databaseInfo.databaseId),r=function(i){return new PE(i)}(e.databaseInfo);return function(i,a,c,u){return new OE(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new LE(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Au(this.syncEngine,t,0),function(){return vu.C()?new vu:new RE}())}createSyncEngine(e,t){return function(s,i,a,c,u,h,g){const y=new sT(s,i,a,c,u,h);return g&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);F(jn,"RemoteStore shutting down."),i.Ia.add(5),await fs(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ia.provider={build:()=>new ia};/**
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
 */class vT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const En="FirestoreClient";class ET{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=ba.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{F(En,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(F(En,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ha(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Po(n,e){n.asyncQueue.verifyOperationInProgress(),F(En,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zd(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{pn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{F("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{pn("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function Su(n,e){n.asyncQueue.verifyOperationInProgress();const t=await TT(n);F(En,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Tu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Tu(e.remoteStore,s)),n._onlineComponents=e}async function TT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(En,"Using user provided OfflineComponentProvider");try{await Po(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;pn("Error using user provided cache. Falling back to memory cache: "+t),await Po(n,new Ei)}}else F(En,"Using default OfflineComponentProvider"),await Po(n,new yT(void 0));return n._offlineComponents}async function lf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(En,"Using user provided OnlineComponentProvider"),await Su(n,n._uninitializedComponentsProvider._online)):(F(En,"Using default OnlineComponentProvider"),await Su(n,new ia))),n._onlineComponents}function IT(n){return lf(n).then(e=>e.syncEngine)}async function Cu(n){const e=await lf(n),t=e.eventManager;return t.onListen=iT.bind(null,e.syncEngine),t.onUnlisten=cT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=lT.bind(null,e.syncEngine),t}/**
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
 */function uf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const xu=new Map;/**
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
 */const hf="firestore.googleapis.com",Pu=!0;class ku{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hf,this.ssl=Pu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Pu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$d;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xv)throw new j(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ly("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Sy;switch(r.type){case"firstParty":return new ky(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=xu.get(t);r&&(F("ComponentProvider","Removing Datastore"),xu.delete(t),r.terminate())}(this),Promise.resolve()}}function wT(n,e,t,r={}){var s;n=hn(n,zi);const i=Fn(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;i&&(la(`https://${u}`),ua("Firestore",!0)),a.host!==hf&&a.host!==u&&pn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:i,emulatorOptions:r});if(!On(h,c)&&(n._setSettings(h),r.mockUserToken)){let g,y;if(typeof r.mockUserToken=="string")g=r.mockUserToken,y=Ye.MOCK_USER;else{g=oh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new j(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Ye(E)}n._authCredentials=new Cy(new Zh(g,y))}}/**
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
 */class bn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class Oe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(us(t,Oe._jsonSchema))return new Oe(e,r||null,new q(Te.fromString(t.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:De("string",Oe._jsonSchemaVersion),referencePath:De("string")};class dn extends bn{constructor(e,t,r){super(e,t,Pa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new q(e))}withConverter(e){return new dn(this.firestore,e,this._path)}}function Hi(n,e,...t){if(n=xe(n),td("collection","path",e),n instanceof zi){const r=Te.fromString(e,...t);return ql(r),new dn(n,null,r)}{if(!(n instanceof Oe||n instanceof dn))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return ql(r),new dn(n.firestore,null,r)}}function ms(n,e,...t){if(n=xe(n),arguments.length===1&&(e=ba.newId()),td("doc","path",e),n instanceof zi){const r=Te.fromString(e,...t);return $l(r),new Oe(n,null,new q(r))}{if(!(n instanceof Oe||n instanceof dn))throw new j(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Te.fromString(e,...t));return $l(r),new Oe(n.firestore,n instanceof dn?n.converter:null,new q(r))}}/**
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
 */const Nu="AsyncQueue";class Du{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Wd(this,"async_queue_retry"),this.oc=()=>{const r=xo();r&&F(Nu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=xo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Nn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!yr(e))throw e;F(Nu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Ht("INTERNAL UNHANDLED ERROR: ",Ou(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=za.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&G(47125,{hc:Ou(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ou(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function Vu(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class dr extends zi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Du,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Du(e),this._firestoreClient=void 0,await e}}}function bT(n,e){const t=typeof n=="object"?n:fa(),r=typeof n=="string"?n:di,s=Si(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=rh("firestore");i&&wT(s,...i)}return s}function df(n){if(n._terminated)throw new j(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||AT(n),n._firestoreClient}function AT(n){var e,t,r;const s=n._freezeSettings(),i=function(c,u,h,g){return new Gy(c,u,h,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,uf(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ET(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gt(We.fromBase64String(e))}catch(t){throw new j(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(us(e,gt._jsonSchema))return gt.fromBase64String(e.bytes)}}gt._jsonSchemaVersion="firestore/bytes/1.0",gt._jsonSchema={type:De("string",gt._jsonSchemaVersion),bytes:De("string")};/**
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
 */class Wi{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gi{constructor(e){this._methodName=e}}/**
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
 */class Pt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pt._jsonSchemaVersion}}static fromJSON(e){if(us(e,Pt._jsonSchema))return new Pt(e.latitude,e.longitude)}}Pt._jsonSchemaVersion="firestore/geoPoint/1.0",Pt._jsonSchema={type:De("string",Pt._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(us(e,kt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new kt(e.vectorValues);throw new j(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kt._jsonSchemaVersion="firestore/vectorValue/1.0",kt._jsonSchema={type:De("string",kt._jsonSchemaVersion),vectorValues:De("object")};/**
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
 */const RT=/^__.*__$/;class ST{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new hs(e,this.data,t,this.fieldTransforms)}}class ff{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ec:n})}}class Qa{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ti(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(pf(this.Ec)&&RT.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class CT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Bi(e)}Dc(e,t,r,s=!1){return new Qa({Ec:e,methodName:t,bc:r,path:ze.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ja(n){const e=n._freezeSettings(),t=Bi(n._databaseId);return new CT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function xT(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Xa("Data must be an object, but it was:",a,r);const c=mf(r,a);let u,h;if(i.merge)u=new ut(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const g=[];for(const y of i.mergeFields){const E=oa(e,y,t);if(!a.contains(E))throw new j(k.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);_f(g,E)||g.push(E)}u=new ut(g),h=a.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=a.fieldTransforms;return new ST(new ot(c),u,h)}class Ki extends Gi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ki}}class Ya extends Gi{_toFieldTransform(e){return new vv(e.path,new ts)}isEqual(e){return e instanceof Ya}}function PT(n,e,t,r){const s=n.Dc(1,e,t);Xa("Data must be an object, but it was:",s,r);const i=[],a=ot.empty();In(r,(u,h)=>{const g=Za(e,u,t);h=xe(h);const y=s.gc(g);if(h instanceof Ki)i.push(g);else{const E=gs(h,y);E!=null&&(i.push(g),a.set(g,E))}});const c=new ut(i);return new ff(a,c,s.fieldTransforms)}function kT(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[oa(e,r,t)],u=[s];if(i.length%2!=0)throw new j(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)c.push(oa(e,i[E])),u.push(i[E+1]);const h=[],g=ot.empty();for(let E=c.length-1;E>=0;--E)if(!_f(h,c[E])){const A=c[E];let S=u[E];S=xe(S);const R=a.gc(A);if(S instanceof Ki)h.push(A);else{const x=gs(S,R);x!=null&&(h.push(A),g.set(A,x))}}const y=new ut(h);return new ff(g,y,a.fieldTransforms)}function NT(n,e,t,r=!1){return gs(t,n.Dc(r?4:3,e))}function gs(n,e){if(gf(n=xe(n)))return Xa("Unsupported field value:",e,n),mf(n,e);if(n instanceof Gi)return function(r,s){if(!pf(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=gs(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:_i(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_i(s.serializer,i)}}if(r instanceof Pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gt)return{bytesValue:Vd(s.serializer,r._byteString)};if(r instanceof Oe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Va(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kt)return function(a,c){return{mapValue:{fields:{[ud]:{stringValue:hd},[fi]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return ka(c.serializer,h)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Ni(r)}`)}(n,e)}function mf(n,e){const t={};return sd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):In(n,(r,s)=>{const i=gs(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function gf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof we||n instanceof Pt||n instanceof gt||n instanceof Oe||n instanceof Gi||n instanceof kt)}function Xa(n,e,t){if(!gf(t)||!nd(t)){const r=Ni(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function oa(n,e,t){if((e=xe(e))instanceof Wi)return e._internalPath;if(typeof e=="string")return Za(n,e);throw Ti("Field path arguments must be of type string or ",n,!1,void 0,t)}const DT=new RegExp("[~\\*/\\[\\]]");function Za(n,e,t){if(e.search(DT)>=0)throw Ti(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Wi(...e.split("."))._internalPath}catch{throw Ti(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ti(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new j(k.INVALID_ARGUMENT,c+n+u)}function _f(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class yf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Qi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OT extends yf{data(){return super.data()}}function Qi(n,e){return typeof e=="string"?Za(n,e):e instanceof Wi?e._internalPath:e._delegate._internalPath}/**
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
 */function VT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ec{}class tc extends ec{}function _s(n,e,...t){let r=[];e instanceof ec&&r.push(e),r=r.concat(t),function(i){const a=i.filter(u=>u instanceof rc).length,c=i.filter(u=>u instanceof Ji).length;if(a>1||a>0&&c>0)throw new j(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ji extends tc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ji(e,t,r)}_apply(e){const t=this._parse(e);return Ef(e._query,t),new bn(e.firestore,e.converter,Jo(e._query,t))}_parse(e){const t=Ja(e.firestore);return function(i,a,c,u,h,g,y){let E;if(h.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new j(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Mu(y,g);const S=[];for(const R of y)S.push(Lu(u,i,R));E={arrayValue:{values:S}}}else E=Lu(u,i,y)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Mu(y,g),E=NT(c,a,y,g==="in"||g==="not-in");return Ne.create(h,g,E)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function nc(n,e,t){const r=e,s=Qi("where",n);return Ji._create(s,r,t)}class rc extends ec{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new rc(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:It.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Ef(a,u),a=Jo(a,u)}(e._query,t),new bn(e.firestore,e.converter,Jo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class sc extends tc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new sc(e,t)}_apply(e){const t=function(s,i,a){if(s.startAt!==null)throw new j(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new j(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new es(i,a)}(e._query,this._field,this._direction);return new bn(e.firestore,e.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new vr(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function ic(n,e="asc"){const t=e,r=Qi("orderBy",n);return sc._create(r,t)}class oc extends tc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new oc(e,t,r)}_apply(e){return new bn(e.firestore,e.converter,mi(e._query,this._limit,this._limitType))}}function vf(n){return oc._create("limit",n,"F")}function Lu(n,e,t){if(typeof(t=xe(t))=="string"){if(t==="")throw new j(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vd(e)&&t.indexOf("/")!==-1)throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Te.fromString(t));if(!q.isDocumentKey(r))throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yl(n,new q(r))}if(t instanceof Oe)return Yl(n,t._key);throw new j(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ni(t)}.`)}function Mu(n,e){if(!Array.isArray(n)||n.length===0)throw new j(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ef(n,e){const t=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new j(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class LT{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_n(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return In(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[fi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ce(a.doubleValue));return new kt(i)}convertGeoPoint(e){return new Pt(Ce(e.latitude),Ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Yr(e));default:return null}}convertTimestamp(e){const t=gn(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Te.fromString(e);fe(Bd(r),9688,{name:e});const s=new Xr(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(t)||Ht(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function MT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dn extends yf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ti(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Qi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Dn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Dn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Dn._jsonSchema={type:De("string",Dn._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class ti extends Dn{data(e={}){return super.data(e)}}class sr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ur(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ti(this._firestore,this._userDataWriter,r.key,r,new Ur(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new ti(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ur(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,g=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),g=a.indexOf(c.doc.key)),{type:jT(c.type),doc:u,oldIndex:h,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ba.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:n})}}sr._jsonSchemaVersion="firestore/querySnapshot/1.0",sr._jsonSchema={type:De("string",sr._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Tf extends LT{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,t)}}function If(n,e,t,...r){n=hn(n,Oe);const s=hn(n.firestore,dr),i=Ja(s);let a;return a=typeof(e=xe(e))=="string"||e instanceof Wi?kT(i,"updateDoc",n._key,e,t,r):PT(i,"updateDoc",n._key,e),cc(s,[a.toMutation(n._key,Et.exists(!0))])}function wf(n){return cc(hn(n.firestore,dr),[new Na(n._key,Et.none())])}function ac(n,e){const t=hn(n.firestore,dr),r=ms(n),s=MT(n.converter,e);return cc(t,[xT(Ja(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Et.exists(!1))]).then(()=>r)}function ys(n,...e){var t,r,s;n=xe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Vu(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Vu(e[a])){const y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let u,h,g;if(n instanceof Oe)h=hn(n.firestore,dr),g=Pa(n._key.path),u={next:y=>{e[a]&&e[a](FT(h,n,y))},error:e[a+1],complete:e[a+2]};else{const y=hn(n,bn);h=hn(y.firestore,dr),g=y._query;const E=new Tf(h);u={next:A=>{e[a]&&e[a](new sr(h,E,y,A))},error:e[a+1],complete:e[a+2]},VT(n._query)}return function(E,A,S,R){const x=new vT(R),U=new eT(A,x,S);return E.asyncQueue.enqueueAndForget(async()=>JE(await Cu(E),U)),()=>{x.Ou(),E.asyncQueue.enqueueAndForget(async()=>YE(await Cu(E),U))}}(df(h),g,c,u)}function cc(n,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>uT(await IT(r),s,i)),i.promise}(df(n),e)}function FT(n,e,t){const r=t.docs.get(e._key),s=new Tf(n);return new Dn(n,s,e._key,r,new Ur(t.hasPendingWrites,t.fromCache),e.converter)}function fr(){return new Ya("serverTimestamp")}(function(e,t=!0){(function(s){gr=s})(Un),Vn(new fn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new dr(new xy(r.getProvider("auth-internal")),new Ny(a,r.getProvider("app-check-internal")),function(h,g){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new j(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xr(h.options.projectId,g)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),At(Ml,jl,e),At(Ml,jl,"esm2017")})();/**
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
 */const bf="firebasestorage.googleapis.com",UT="storageBucket",BT=2*60*1e3,$T=10*60*1e3;/**
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
 */class Vt extends Ot{constructor(e,t,r=0){super(ko(e),`Firebase Storage: ${t} (${ko(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ko(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Dt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Dt||(Dt={}));function ko(n){return"storage/"+n}function qT(){const n="An unknown error occurred, please check the error payload for server response.";return new Vt(Dt.UNKNOWN,n)}function zT(){return new Vt(Dt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HT(){return new Vt(Dt.CANCELED,"User canceled the upload/download.")}function WT(n){return new Vt(Dt.INVALID_URL,"Invalid URL '"+n+"'.")}function GT(n){return new Vt(Dt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ju(n){return new Vt(Dt.INVALID_ARGUMENT,n)}function Af(){return new Vt(Dt.APP_DELETED,"The Firebase app was deleted.")}function KT(n){return new Vt(Dt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=vt.makeFromUrl(e,t)}catch{return new vt(e,"")}if(r.path==="")return r;throw GT(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function h(V){V.path_=decodeURIComponent(V.path)}const g="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",A=new RegExp(`^https?://${y}/${g}/b/${s}/o${E}`,"i"),S={bucket:1,path:3},R=t===bf?"(?:storage.googleapis.com|storage.cloud.google.com)":t,x="([^?#]*)",U=new RegExp(`^https?://${R}/${s}/${x}`,"i"),D=[{regex:c,indices:u,postModify:i},{regex:A,indices:S,postModify:h},{regex:U,indices:{bucket:1,path:2},postModify:h}];for(let V=0;V<D.length;V++){const z=D[V],B=z.regex.exec(e);if(B){const w=B[z.indices.bucket];let f=B[z.indices.path];f||(f=""),r=new vt(w,f),z.postModify(r);break}}if(r==null)throw WT(e);return r}}class QT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function JT(n,e,t){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let h=!1;function g(...x){h||(h=!0,e.apply(null,x))}function y(x){s=setTimeout(()=>{s=null,n(A,u())},x)}function E(){i&&clearTimeout(i)}function A(x,...U){if(h){E();return}if(x){E(),g.call(null,x,...U);return}if(u()||a){E(),g.call(null,x,...U);return}r<64&&(r*=2);let D;c===1?(c=2,D=0):D=(r+Math.random())*1e3,y(D)}let S=!1;function R(x){S||(S=!0,E(),!h&&(s!==null?(x||(c=2),clearTimeout(s),y(0)):x||(c=1)))}return y(0),i=setTimeout(()=>{a=!0,R(!0)},t),R}function YT(n){n(!1)}/**
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
 */function XT(n){return n!==void 0}function Fu(n,e,t,r){if(r<e)throw ju(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ju(`Invalid value for '${n}'. Expected ${t} or less.`)}function ZT(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ii;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ii||(Ii={}));/**
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
 */function eI(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class tI{constructor(e,t,r,s,i,a,c,u,h,g,y,E=!0,A=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=g,this.connectionFactory_=y,this.retry=E,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,R)=>{this.resolve_=S,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new $s(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===Ii.NO_ERROR,u=i.getStatus();if(!c||eI(u,this.additionalRetryCodes_)&&this.retry){const g=i.getErrorCode()===Ii.ABORT;r(!1,new $s(!1,null,g));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new $s(h,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());XT(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=qT();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Af():HT();a(u)}else{const u=zT();a(u)}};this.canceled_?t(!1,new $s(!1,null,!0)):this.backoffId_=JT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $s{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function nI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function rI(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function sI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function iI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function oI(n,e,t,r,s,i,a=!0,c=!1){const u=ZT(n.urlParams),h=n.url+u,g=Object.assign({},n.headers);return sI(g,e),nI(g,t),rI(g,i),iI(g,r),new tI(h,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,c)}/**
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
 */function aI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function cI(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class wi{constructor(e,t){this._service=e,t instanceof vt?this._location=t:this._location=vt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new wi(e,t)}get root(){const e=new vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cI(this._location.path)}get storage(){return this._service}get parent(){const e=aI(this._location.path);if(e===null)return null;const t=new vt(this._location.bucket,e);return new wi(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw KT(e)}}function Uu(n,e){const t=e==null?void 0:e[UT];return t==null?null:vt.makeFromBucketSpec(t,n)}function lI(n,e,t,r={}){n.host=`${e}:${t}`;const s=Fn(e);s&&(la(`https://${n.host}/b`),ua("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:oh(i,n.app.options.projectId))}class uI{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=bf,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BT,this._maxUploadRetryTime=$T,this._requests=new Set,s!=null?this._bucket=vt.makeFromBucketSpec(s,this._host):this._bucket=Uu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,e):this._bucket=Uu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new wi(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new QT(Af());{const a=oI(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Bu="@firebase/storage",$u="0.13.14";/**
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
 */const Rf="storage";function hI(n=fa(),e){n=xe(n);const r=Si(n,Rf).getImmediate({identifier:e}),s=rh("storage");return s&&dI(r,...s),r}function dI(n,e,t,r={}){lI(n,e,t,r)}function fI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new uI(t,r,s,e,Un)}function pI(){Vn(new fn(Rf,fI,"PUBLIC").setMultipleInstances(!0)),At(Bu,$u,""),At(Bu,$u,"esm2017")}pI();const mI={apiKey:"AIzaSyATImZKj-kISPLYR68wDnmZPNsnItXdiZ4",authDomain:"sri-raghavendra-mess-billing.firebaseapp.com",projectId:"sri-raghavendra-mess-billing",storageBucket:"sri-raghavendra-mess-billing.firebasestorage.app",messagingSenderId:"225930121586",appId:"1:225930121586:web:5356dc0465009441128deb",measurementId:"G-Z2ZSHZNH5H"},lc=lh(mI),Yi=wy(lc);l_(Yi,Mh);const Xi=bT(lc);hI(lc);const gI=12,uc="hbs_login_time",_I=async(n,e)=>{const t=await c_(Yi,n,e);return localStorage.setItem(uc,Date.now().toString()),t},Sf=()=>{const n=Number(localStorage.getItem(uc));return n?(Date.now()-n)/(1e3*60*60)<gI:!1},yI=n=>d_(Yi,n),vI=async()=>{localStorage.removeItem(uc),await f_(Yi)};let EI={data:""},TI=n=>{if(typeof window=="object"){let e=(n?n.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(n||document.head).appendChild(e),e.firstChild}return n||EI},II=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,wI=/\/\*[^]*?\*\/|  +/g,qu=/\n+/g,sn=(n,e)=>{let t="",r="",s="";for(let i in n){let a=n[i];i[0]=="@"?i[1]=="i"?t=i+" "+a+";":r+=i[1]=="f"?sn(a,i):i+"{"+sn(a,i[1]=="k"?"":e)+"}":typeof a=="object"?r+=sn(a,e?e.replace(/([^,])+/g,c=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,c):c?c+" "+u:u)):i):a!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=sn.p?sn.p(i,a):i+":"+a+";")}return t+(e&&s?e+"{"+s+"}":s)+r},Ut={},Cf=n=>{if(typeof n=="object"){let e="";for(let t in n)e+=t+Cf(n[t]);return e}return n},bI=(n,e,t,r,s)=>{let i=Cf(n),a=Ut[i]||(Ut[i]=(u=>{let h=0,g=11;for(;h<u.length;)g=101*g+u.charCodeAt(h++)>>>0;return"go"+g})(i));if(!Ut[a]){let u=i!==n?n:(h=>{let g,y,E=[{}];for(;g=II.exec(h.replace(wI,""));)g[4]?E.shift():g[3]?(y=g[3].replace(qu," ").trim(),E.unshift(E[0][y]=E[0][y]||{})):E[0][g[1]]=g[2].replace(qu," ").trim();return E[0]})(n);Ut[a]=sn(s?{["@keyframes "+a]:u}:u,t?"":"."+a)}let c=t&&Ut.g?Ut.g:null;return t&&(Ut.g=Ut[a]),((u,h,g,y)=>{y?h.data=h.data.replace(y,u):h.data.indexOf(u)===-1&&(h.data=g?u+h.data:h.data+u)})(Ut[a],e,r,c),a},AI=(n,e,t)=>n.reduce((r,s,i)=>{let a=e[i];if(a&&a.call){let c=a(t),u=c&&c.props&&c.props.className||/^go/.test(c)&&c;a=u?"."+u:c&&typeof c=="object"?c.props?"":sn(c,""):c===!1?"":c}return r+s+(a??"")},"");function Zi(n){let e=this||{},t=n.call?n(e.p):n;return bI(t.unshift?t.raw?AI(t,[].slice.call(arguments,1),e.p):t.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):t,TI(e.target),e.g,e.o,e.k)}let xf,aa,ca;Zi.bind({g:1});let Gt=Zi.bind({k:1});function RI(n,e,t,r){sn.p=e,xf=n,aa=t,ca=r}function An(n,e){let t=this||{};return function(){let r=arguments;function s(i,a){let c=Object.assign({},i),u=c.className||s.className;t.p=Object.assign({theme:aa&&aa()},c),t.o=/ *go\d+/.test(u),c.className=Zi.apply(t,r)+(u?" "+u:"");let h=n;return n[0]&&(h=c.as||n,delete c.as),ca&&h[0]&&ca(c),xf(h,c)}return s}}var SI=n=>typeof n=="function",bi=(n,e)=>SI(n)?n(e):n,CI=(()=>{let n=0;return()=>(++n).toString()})(),Pf=(()=>{let n;return()=>{if(n===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n}})(),xI=20,hc="default",kf=(n,e)=>{let{toastLimit:t}=n.settings;switch(e.type){case 0:return{...n,toasts:[e.toast,...n.toasts].slice(0,t)};case 1:return{...n,toasts:n.toasts.map(a=>a.id===e.toast.id?{...a,...e.toast}:a)};case 2:let{toast:r}=e;return kf(n,{type:n.toasts.find(a=>a.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...n,toasts:n.toasts.map(a=>a.id===s||s===void 0?{...a,dismissed:!0,visible:!1}:a)};case 4:return e.toastId===void 0?{...n,toasts:[]}:{...n,toasts:n.toasts.filter(a=>a.id!==e.toastId)};case 5:return{...n,pausedAt:e.time};case 6:let i=e.time-(n.pausedAt||0);return{...n,pausedAt:void 0,toasts:n.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+i}))}}},ni=[],Nf={toasts:[],pausedAt:void 0,settings:{toastLimit:xI}},bt={},Df=(n,e=hc)=>{bt[e]=kf(bt[e]||Nf,n),ni.forEach(([t,r])=>{t===e&&r(bt[e])})},Of=n=>Object.keys(bt).forEach(e=>Df(n,e)),PI=n=>Object.keys(bt).find(e=>bt[e].toasts.some(t=>t.id===n)),eo=(n=hc)=>e=>{Df(e,n)},kI={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},NI=(n={},e=hc)=>{let[t,r]=O.useState(bt[e]||Nf),s=O.useRef(bt[e]);O.useEffect(()=>(s.current!==bt[e]&&r(bt[e]),ni.push([e,r]),()=>{let a=ni.findIndex(([c])=>c===e);a>-1&&ni.splice(a,1)}),[e]);let i=t.toasts.map(a=>{var c,u,h;return{...n,...n[a.type],...a,removeDelay:a.removeDelay||((c=n[a.type])==null?void 0:c.removeDelay)||(n==null?void 0:n.removeDelay),duration:a.duration||((u=n[a.type])==null?void 0:u.duration)||(n==null?void 0:n.duration)||kI[a.type],style:{...n.style,...(h=n[a.type])==null?void 0:h.style,...a.style}}});return{...t,toasts:i}},DI=(n,e="blank",t)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0,...t,id:(t==null?void 0:t.id)||CI()}),vs=n=>(e,t)=>{let r=DI(e,n,t);return eo(r.toasterId||PI(r.id))({type:2,toast:r}),r.id},Me=(n,e)=>vs("blank")(n,e);Me.error=vs("error");Me.success=vs("success");Me.loading=vs("loading");Me.custom=vs("custom");Me.dismiss=(n,e)=>{let t={type:3,toastId:n};e?eo(e)(t):Of(t)};Me.dismissAll=n=>Me.dismiss(void 0,n);Me.remove=(n,e)=>{let t={type:4,toastId:n};e?eo(e)(t):Of(t)};Me.removeAll=n=>Me.remove(void 0,n);Me.promise=(n,e,t)=>{let r=Me.loading(e.loading,{...t,...t==null?void 0:t.loading});return typeof n=="function"&&(n=n()),n.then(s=>{let i=e.success?bi(e.success,s):void 0;return i?Me.success(i,{id:r,...t,...t==null?void 0:t.success}):Me.dismiss(r),s}).catch(s=>{let i=e.error?bi(e.error,s):void 0;i?Me.error(i,{id:r,...t,...t==null?void 0:t.error}):Me.dismiss(r)}),n};var OI=1e3,VI=(n,e="default")=>{let{toasts:t,pausedAt:r}=NI(n,e),s=O.useRef(new Map).current,i=O.useCallback((y,E=OI)=>{if(s.has(y))return;let A=setTimeout(()=>{s.delete(y),a({type:4,toastId:y})},E);s.set(y,A)},[]);O.useEffect(()=>{if(r)return;let y=Date.now(),E=t.map(A=>{if(A.duration===1/0)return;let S=(A.duration||0)+A.pauseDuration-(y-A.createdAt);if(S<0){A.visible&&Me.dismiss(A.id);return}return setTimeout(()=>Me.dismiss(A.id,e),S)});return()=>{E.forEach(A=>A&&clearTimeout(A))}},[t,r,e]);let a=O.useCallback(eo(e),[e]),c=O.useCallback(()=>{a({type:5,time:Date.now()})},[a]),u=O.useCallback((y,E)=>{a({type:1,toast:{id:y,height:E}})},[a]),h=O.useCallback(()=>{r&&a({type:6,time:Date.now()})},[r,a]),g=O.useCallback((y,E)=>{let{reverseOrder:A=!1,gutter:S=8,defaultPosition:R}=E||{},x=t.filter(D=>(D.position||R)===(y.position||R)&&D.height),U=x.findIndex(D=>D.id===y.id),$=x.filter((D,V)=>V<U&&D.visible).length;return x.filter(D=>D.visible).slice(...A?[$+1]:[0,$]).reduce((D,V)=>D+(V.height||0)+S,0)},[t]);return O.useEffect(()=>{t.forEach(y=>{if(y.dismissed)i(y.id,y.removeDelay);else{let E=s.get(y.id);E&&(clearTimeout(E),s.delete(y.id))}})},[t,i]),{toasts:t,handlers:{updateHeight:u,startPause:c,endPause:h,calculateOffset:g}}},LI=Gt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,MI=Gt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jI=Gt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,FI=An("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${LI} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${MI} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${n=>n.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${jI} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,UI=Gt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,BI=An("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${n=>n.secondary||"#e0e0e0"};
  border-right-color: ${n=>n.primary||"#616161"};
  animation: ${UI} 1s linear infinite;
`,$I=Gt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,qI=Gt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,zI=An("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${n=>n.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${$I} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${qI} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${n=>n.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,HI=An("div")`
  position: absolute;
`,WI=An("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,GI=Gt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,KI=An("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${GI} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,QI=({toast:n})=>{let{icon:e,type:t,iconTheme:r}=n;return e!==void 0?typeof e=="string"?O.createElement(KI,null,e):e:t==="blank"?null:O.createElement(WI,null,O.createElement(BI,{...r}),t!=="loading"&&O.createElement(HI,null,t==="error"?O.createElement(FI,{...r}):O.createElement(zI,{...r})))},JI=n=>`
0% {transform: translate3d(0,${n*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,YI=n=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n*-150}%,-1px) scale(.6); opacity:0;}
`,XI="0%{opacity:0;} 100%{opacity:1;}",ZI="0%{opacity:1;} 100%{opacity:0;}",ew=An("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,tw=An("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,nw=(n,e)=>{let t=n.includes("top")?1:-1,[r,s]=Pf()?[XI,ZI]:[JI(t),YI(t)];return{animation:e?`${Gt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Gt(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},rw=O.memo(({toast:n,position:e,style:t,children:r})=>{let s=n.height?nw(n.position||e||"top-center",n.visible):{opacity:0},i=O.createElement(QI,{toast:n}),a=O.createElement(tw,{...n.ariaProps},bi(n.message,n));return O.createElement(ew,{className:n.className,style:{...s,...t,...n.style}},typeof r=="function"?r({icon:i,message:a}):O.createElement(O.Fragment,null,i,a))});RI(O.createElement);var sw=({id:n,className:e,style:t,onHeightUpdate:r,children:s})=>{let i=O.useCallback(a=>{if(a){let c=()=>{let u=a.getBoundingClientRect().height;r(n,u)};c(),new MutationObserver(c).observe(a,{subtree:!0,childList:!0,characterData:!0})}},[n,r]);return O.createElement("div",{ref:i,className:e,style:t},s)},iw=(n,e)=>{let t=n.includes("top"),r=t?{top:0}:{bottom:0},s=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Pf()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(t?1:-1)}px)`,...r,...s}},ow=Zi`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,qs=16,aw=({reverseOrder:n,position:e="top-center",toastOptions:t,gutter:r,children:s,toasterId:i,containerStyle:a,containerClassName:c})=>{let{toasts:u,handlers:h}=VI(t,i);return O.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:qs,left:qs,right:qs,bottom:qs,pointerEvents:"none",...a},className:c,onMouseEnter:h.startPause,onMouseLeave:h.endPause},u.map(g=>{let y=g.position||e,E=h.calculateOffset(g,{reverseOrder:n,gutter:r,defaultPosition:e}),A=iw(y,E);return O.createElement(sw,{id:g.id,key:g.id,onHeightUpdate:h.updateHeight,className:g.visible?ow:"",style:A},g.type==="custom"?bi(g.message,g):s?s(g):O.createElement(rw,{toast:g,position:y}))}))},He=Me;function cw(){const{user:n}=Gf(),[e,t]=O.useState(""),[r,s]=O.useState(""),[i,a]=O.useState(!1),c=Ju(),u="sriraghavendramess28@gmail.com";O.useEffect(()=>{n&&Sf()&&c("/dashboard",{replace:!0})},[n,c]);const h=async()=>{if(e.trim().toLowerCase()!==u.toLowerCase())return He.error("Only owner email allowed");if(!r)return He.error("Password required");try{a(!0),await _I(e.trim(),r),He.success("Login success"),c("/dashboard",{replace:!0})}catch(g){He.error(g.message)}finally{a(!1)}};return p.jsxs("div",{className:"relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden px-4",children:[p.jsx(aw,{}),p.jsx("div",{className:"orb orb-1"}),p.jsx("div",{className:"orb orb-2"}),p.jsx("div",{className:"orb orb-3"}),p.jsxs("div",{className:"absolute top-6 left-4 flex items-center gap-3 text-sm text-slate-200 bg-white/5 px-4 py-2 rounded-full backdrop-blur shadow-lg shadow-amber-500/20",children:[p.jsx("div",{className:"h-9 w-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center font-bold text-slate-900 shadow-lg",children:"AVS"}),p.jsxs("div",{children:[p.jsx("div",{className:"font-semibold tracking-wide uppercase text-amber-200",children:"Sri Raghavendra Mess"}),p.jsx("div",{className:"text-xs text-slate-200/80",children:"Hotel Billing System"})]})]}),p.jsxs("div",{className:"card max-w-md w-full bg-white text-slate-900 shadow-2xl relative overflow-hidden",children:[p.jsx("div",{className:"absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 animate-shimmer"}),p.jsxs("div",{className:"p-8 space-y-6",children:[p.jsxs("div",{className:"text-center space-y-2",children:[p.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-amber-500",children:"Owner Access"}),p.jsx("h1",{className:"text-3xl font-bold",children:"Welcome Back"}),p.jsx("p",{className:"text-sm text-slate-500",children:"Manage menu, orders, and accounts securely."})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("label",{className:"block text-xs font-semibold text-slate-600 uppercase tracking-wide",children:"Email"}),p.jsx("input",{className:"input bg-white text-slate-900 border border-slate-200",type:"email",value:e,onChange:g=>t(g.target.value),placeholder:"owner@gmail.com"}),p.jsx("label",{className:"block text-xs font-semibold text-slate-600 uppercase tracking-wide",children:"Password"}),p.jsx("input",{className:"input bg-white text-slate-900 border border-slate-200",type:"password",value:r,onChange:g=>s(g.target.value),placeholder:"Password"})]}),p.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-500",children:[p.jsx("span",{children:"Secure login  Two-step check"}),p.jsx("span",{className:"flex items-center gap-1",children:"24/7 Support"})]}),p.jsx("button",{className:"btn w-full h-12 font-semibold text-lg bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-lg shadow-amber-500/40 border-0 animate-gradient",onClick:h,disabled:i,children:i?"Signing in...":"Enter Dashboard"})]})]}),p.jsx("style",{children:`
        .orb { position:absolute; border-radius:9999px; filter: blur(80px); opacity:0.35; animation: float 16s ease-in-out infinite; }
        .orb-1 { width:320px; height:320px; background:radial-gradient(circle,#f59e0b,transparent 60%); top:-80px; left:-80px; }
        .orb-2 { width:260px; height:260px; background:radial-gradient(circle,#8b5cf6,transparent 60%); bottom:10%; right:-60px; animation-duration:18s; }
        .orb-3 { width:180px; height:180px; background:radial-gradient(circle,#22d3ee,transparent 60%); bottom:-40px; left:25%; animation-duration:20s; }
        @keyframes float { 0%,100% { transform: translateY(0px) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }
        .animate-gradient { background-size: 200% 200%; animation: gradientMove 6s ease infinite; }
        .animate-shimmer { background-size: 200% 100%; animation: gradientMove 5s linear infinite; opacity:0.9; }
        @keyframes gradientMove { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
      `})]})}function lw(){const[n,e]=O.useState(new Date);return O.useEffect(()=>{const t=setInterval(()=>e(new Date),1e3);return()=>clearInterval(t)},[]),p.jsx("header",{className:"sticky top-0 z-30",children:p.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-700 to-amber-500 text-white shadow-xl",children:[p.jsx("div",{className:"absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#fcd34d,transparent_25%),radial-gradient(circle_at_80%_10%,#a5b4fc,transparent_30%)]"}),p.jsxs("div",{className:"relative max-w-6xl mx-auto px-5 py-3 flex items-center justify-between",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("div",{className:"h-11 w-11 rounded-full bg-white/20 backdrop-blur overflow-hidden border border-white/40 shadow-sm",children:p.jsx("img",{src:"/billing-system1/sri-raghavendra-image.jpg",alt:"Sri Raghavendra",className:"h-full w-full object-cover",onError:t=>{t.currentTarget.style.display="none"}})}),p.jsxs("div",{className:"leading-tight",children:[p.jsx("div",{className:"text-xs uppercase tracking-[0.2em] text-amber-200",children:"Hotel Billing"}),p.jsx("div",{className:"text-xl font-bold",children:"Sri Raghavendra Mess"})]})]}),p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsxs("div",{className:"px-3 py-2 rounded-lg bg-white/15 backdrop-blur text-sm font-semibold shadow-sm",children:[new Intl.DateTimeFormat("en-GB").format(n)," - ",n.toLocaleTimeString("en-IN")]}),p.jsx("button",{className:"btn px-4 py-2 rounded-lg bg-white text-indigo-900 font-bold shadow hover:bg-amber-100",onClick:vI,children:"Logout"})]})]})]})})}function Vf(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(e=0;e<s;e++)n[e]&&(t=Vf(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Lf(){for(var n,e,t=0,r="",s=arguments.length;t<s;t++)(n=arguments[t])&&(e=Vf(n))&&(r&&(r+=" "),r+=e);return r}const uw=[{key:"menu",label:"Menu"},{key:"update",label:"Update Menu"},{key:"orders",label:"Orders"},{key:"accounts",label:"Accounts"}];function hw({active:n,onChange:e}){return p.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 my-4",children:uw.map(t=>p.jsx("button",{className:Lf("btn h-14 text-base md:text-lg",n===t.key?"btn-primary":"btn-ghost"),onClick:()=>e(t.key),children:t.label},t.key))})}const dw=["morning","afternoon","evening"];function Mf({session:n,onChange:e}){return p.jsx("div",{className:"flex gap-2 mb-4",children:dw.map(t=>p.jsx("button",{className:Lf("btn px-3 py-2 capitalize",n===t?"btn-primary":"btn-ghost"),onClick:()=>e(t),children:t},t))})}const to=Hi(Xi,"menu"),dc=Hi(Xi,"bills"),Es=Hi(Xi,"expenses");Hi(Xi,"daily_summary");const jf=(n,e)=>ys(_s(to,nc("sessionType","==",n),ic("createdAt","asc")),e),fw=n=>ac(to,{...n,createdAt:fr(),updatedAt:fr()}),zu=(n,e)=>If(ms(to,n),{...e,updatedAt:fr()}),pw=n=>wf(ms(to,n)),Ff=n=>ac(dc,{...n,createdAt:fr()}),mw=n=>ac(Es,{...n,createdAt:fr()}),gw=(n,e)=>If(ms(Es,n),{...e,updatedAt:fr()}),_w=n=>wf(ms(Es,n)),Uf=(n,e)=>ys(_s(dc,nc("createdDate","==",n)),e),yw=(n,e)=>ys(_s(Es,nc("expenseDate","==",n)),e),Bf=n=>ys(_s(dc,ic("createdAt","desc"),vf(400)),n),vw=n=>ys(_s(Es,ic("expenseDate","desc"),vf(400)),n),$f="Asia/Kolkata",ss=()=>new Intl.DateTimeFormat("en-CA",{timeZone:$f,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date),Xe=n=>{if(!n)return"";const e=n instanceof Date?n:new Date(n);return isNaN(e)?n:new Intl.DateTimeFormat("en-GB",{timeZone:$f}).format(e)},No=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0),Ew=Array.from({length:20},(n,e)=>e+1);function Tw({menu:n,session:e}){const[t,r]=O.useState({}),[s,i]=O.useState("cash"),[a,c]=O.useState(""),u=O.useMemo(()=>n.map(A=>{const S=t[A.id]||0;return{...A,qty:S,total:S*A.price}}),[n,t]),h=u.reduce((A,S)=>(A.total+=S.total,A),{total:0}),g=(A,S)=>{const R=Math.max(0,isNaN(S)?0:S);r(x=>({...x,[A]:R}))},y=async()=>{const A=u.filter(S=>S.qty>0);if(!A.length)return He.error("Add at least one item");await Ff({sessionType:e,items:A.map(S=>({itemName:S.itemName,quantity:S.qty,unitPrice:S.price,totalPrice:S.total})),paymentMode:s,billTotal:h.total,customerNameOrToken:a,createdDate:ss(),createdTime:new Date().toLocaleTimeString()}),He.success("Bill saved"),r({}),c("")},E=()=>{r({}),c("")};return p.jsxs("div",{className:"space-y-4",children:[p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"table min-w-[640px]",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Item"}),p.jsx("th",{className:"text-center",children:"Qty"}),p.jsx("th",{children:"Price"}),p.jsx("th",{children:"Total"})]})}),p.jsx("tbody",{children:u.map(A=>p.jsxs("tr",{children:[p.jsx("td",{className:A.isAvailable?"":"text-slate-400 line-through",children:A.itemName}),p.jsx("td",{className:"text-center",children:p.jsxs("div",{className:"flex items-center gap-2",children:[p.jsx("div",{className:"qty-scroll flex flex-nowrap gap-3 px-2 py-1",children:Ew.map(S=>p.jsx("button",{className:"btn btn-ghost px-3 py-1 text-sm whitespace-nowrap qty-btn",onClick:()=>g(A.id,S),children:S},S))}),p.jsx("input",{value:A.qty,onChange:S=>g(A.id,Number(S.target.value)),className:"w-20 text-center border rounded-lg py-1",type:"number",min:"0",step:"1",inputMode:"numeric"})]})}),p.jsx("td",{children:No(A.price)}),p.jsx("td",{children:No(A.total)})]},A.id))})]})}),p.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[p.jsxs("label",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"radio",value:"cash",checked:s==="cash",onChange:()=>i("cash")}),"Cash"]}),p.jsxs("label",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"radio",value:"upi",checked:s==="upi",onChange:()=>i("upi")}),"UPI"]}),p.jsx("input",{className:"input max-w-xs",placeholder:"Token / Name (optional)",value:a,onChange:A=>c(A.target.value)}),p.jsxs("div",{className:"ml-auto font-bold text-lg",children:["Grand Total: ",No(h.total)]})]}),p.jsxs("div",{className:"flex gap-3",children:[p.jsx("button",{className:"btn btn-primary",onClick:y,children:"Save Bill"}),p.jsx("button",{className:"btn btn-ghost",onClick:E,children:"Reset"})]})]})}function qf(){return p.jsx("div",{className:"py-10 text-center text-primary",children:"Loading..."})}function Iw(){const[n,e]=O.useState("morning"),[t,r]=O.useState([]),[s,i]=O.useState(!0);return O.useEffect(()=>(i(!0),jf(n,c=>{const u=c.docs.map(h=>({id:h.id,...h.data()})).filter(h=>h.isAvailable!==!1);r(u),i(!1)})),[n]),p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"flex items-center justify-between mb-3",children:[p.jsx("h2",{className:"text-xl font-semibold",children:"Menu"}),p.jsx(Mf,{session:n,onChange:e})]}),s?p.jsx(qf,{}):p.jsx(Tw,{session:n,menu:t})]})}function ww({open:n,onClose:e,onConfirm:t}){return n?p.jsx("div",{className:"fixed inset-0 bg-black/30 flex items-center justify-center z-40",children:p.jsxs("div",{className:"card max-w-sm",children:[p.jsx("div",{className:"font-semibold mb-3",children:"Delete item?"}),p.jsxs("div",{className:"flex gap-3 justify-end",children:[p.jsx("button",{className:"btn btn-ghost",onClick:e,children:"Cancel"}),p.jsx("button",{className:"btn btn-primary",onClick:t,children:"Delete"})]})]})}):null}const bw=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function Aw(){const[n,e]=O.useState("morning"),[t,r]=O.useState([]),[s,i]=O.useState({itemName:"",price:"",isAvailable:!0}),[a,c]=O.useState(null),[u,h]=O.useState(null);O.useEffect(()=>jf(n,x=>r(x.docs.map(U=>({id:U.id,...U.data()})))),[n]);const g=(R,x,U)=>{const $=`Price updated: ${R}
Old: ?${x} -> New: ?${U}
Session: ${n}`,D=`https://wa.me/919342695097?text=${encodeURIComponent($)}`,V=document.createElement("a");V.href=D,V.target="_blank",V.rel="noreferrer noopener",document.body.appendChild(V),V.click(),document.body.removeChild(V)},y=async()=>{if(!s.itemName.trim())return He.error("Item name required");if(!Number(s.price))return He.error("Valid price required");if(a){const R=t.find(U=>U.id===a),x=R==null?void 0:R.price;await zu(a,{...s,price:Number(s.price),sessionType:n}),He.success("Updated"),x!=null&&x!==Number(s.price)&&g(s.itemName,x,Number(s.price))}else await fw({...s,price:Number(s.price),sessionType:n}),He.success("Added");i({itemName:"",price:"",isAvailable:!0}),c(null)},E=R=>{i({itemName:R.itemName,price:R.price,isAvailable:R.isAvailable}),c(R.id)},A=R=>zu(R.id,{isAvailable:!R.isAvailable}),S=async()=>{await pw(u),h(null),He.success("Deleted")};return p.jsxs("div",{className:"card space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between",children:[p.jsx("h2",{className:"text-xl font-semibold",children:"Update Menu"}),p.jsx(Mf,{session:n,onChange:e})]}),p.jsxs("div",{className:"grid md:grid-cols-4 gap-3",children:[p.jsx("input",{className:"input",placeholder:"Item name",value:s.itemName,onChange:R=>i(x=>({...x,itemName:R.target.value}))}),p.jsx("input",{className:"input",type:"number",placeholder:"Price",value:s.price,onChange:R=>i(x=>({...x,price:R.target.value}))}),p.jsxs("label",{className:"flex items-center gap-2",children:[p.jsx("input",{type:"checkbox",checked:s.isAvailable,onChange:R=>i(x=>({...x,isAvailable:R.target.checked}))}),"Available"]}),p.jsx("button",{className:"btn btn-primary",onClick:y,children:a?"Update Item":"Add Item"})]}),p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Item"}),p.jsx("th",{children:"Price"}),p.jsx("th",{children:"Avail"}),p.jsx("th",{children:"Action"})]})}),p.jsx("tbody",{children:t.map(R=>p.jsxs("tr",{children:[p.jsx("td",{children:R.itemName}),p.jsx("td",{children:bw(R.price)}),p.jsx("td",{children:p.jsx("input",{type:"checkbox",checked:R.isAvailable,onChange:()=>A(R)})}),p.jsxs("td",{className:"space-x-2",children:[p.jsx("button",{className:"btn btn-ghost px-3",onClick:()=>E(R),children:"Edit"}),p.jsx("button",{className:"btn btn-ghost px-3",onClick:()=>h(R.id),children:"Delete"})]})]},R.id))})]}),p.jsx(ww,{open:!!u,onClose:()=>h(null),onConfirm:S})]})}function Rw({onSaved:n,editing:e}){const[t,r]=O.useState(""),[s,i]=O.useState(""),[a,c]=O.useState(""),[u,h]=O.useState(""),[g,y]=O.useState(!1),E=["Gas","Rice","Super Market","Vegetable","Tabers Salary","Milk"];O.useEffect(()=>{e?(r(e.expenseTitle||""),i(e.amount||""),c(e.reason||""),h(e.note||"")):(r(""),i(""),c(""),h(""))},[e]);const A=async()=>{if(!t||!Number(s))return He.error("Title and valid amount required");e!=null&&e.id?(await gw(e.id,{expenseTitle:t,amount:Number(s),reason:a,note:u,expenseDate:e.expenseDate||ss()}),He.success("Expense updated")):(await mw({expenseTitle:t,amount:Number(s),reason:a,note:u,expenseDate:ss()}),He.success("Expense saved")),r(""),i(""),c(""),h(""),n&&n()},S=E.filter(R=>R.toLowerCase().includes(t.toLowerCase())).slice(0,6);return p.jsxs("div",{className:"card",children:[p.jsx("div",{className:"font-semibold mb-2",children:e?"Edit Expense":"Add Expense"}),p.jsxs("div",{className:"grid md:grid-cols-4 gap-3 items-start",children:[p.jsxs("div",{className:"md:col-span-2 relative",children:[p.jsx("input",{className:"input input-lg w-full",placeholder:"Select or type title",value:t,onChange:R=>r(R.target.value),onFocus:()=>y(!0),onBlur:()=>setTimeout(()=>y(!1),120)}),g&&S.length>0&&p.jsx("div",{className:"absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden",children:S.map(R=>p.jsx("button",{type:"button",className:"block w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-800 text-base",onMouseDown:x=>{x.preventDefault(),r(R),y(!1)},children:R},R))})]}),p.jsx("input",{className:"input",type:"number",placeholder:"Amount",value:s,onChange:R=>i(R.target.value)}),p.jsx("input",{className:"input",placeholder:"Reason",value:a,onChange:R=>c(R.target.value)}),p.jsx("input",{className:"input md:col-span-4",placeholder:"Note (optional)",value:u,onChange:R=>h(R.target.value)})]}),p.jsx("button",{className:"btn btn-primary mt-3",onClick:A,children:e?"Update Expense":"Save Expense"})]})}const Sw=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function Cw({totals:n}){const e=[{title:"Grand Total",value:n.grandTotal},{title:"Expense",value:n.expense},{title:"Net Profit",value:n.net}];return p.jsx("div",{className:"grid md:grid-cols-3 gap-3",children:e.map(t=>p.jsxs("div",{className:"card",children:[p.jsx("div",{className:"text-sm text-slate-500",children:t.title}),p.jsx("div",{className:"text-2xl font-bold",children:Sw(t.value)})]},t.title))})}var zf={exports:{}};/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/(function(n,e){((t,r)=>{n.exports=r()})(Ep,function t(){var r=typeof self<"u"?self:typeof window<"u"?window:r!==void 0?r:{},s,i=!r.document&&!!r.postMessage,a=r.IS_PAPA_WORKER||!1,c={},u=0,h={};function g(f){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(m){var v=z(m);v.chunkSize=parseInt(v.chunkSize),m.step||m.chunk||(v.chunkSize=null),this._handle=new R(v),(this._handle.streamer=this)._config=v}).call(this,f),this.parseChunk=function(m,v){var I=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<I){let T=this._config.newline;T||(b=this._config.quoteChar||'"',T=this._handle.guessLineEndings(m,b)),m=[...m.split(T).slice(I)].join(T)}this.isFirstChunk&&w(this._config.beforeFirstChunk)&&(b=this._config.beforeFirstChunk(m))!==void 0&&(m=b),this.isFirstChunk=!1,this._halted=!1;var I=this._partialLine+m,b=(this._partialLine="",this._handle.parse(I,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(m=b.meta.cursor,I=(this._finished||(this._partialLine=I.substring(m-this._baseIndex),this._baseIndex=m),b&&b.data&&(this._rowCount+=b.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),a)r.postMessage({results:b,workerId:h.WORKER_ID,finished:I});else if(w(this._config.chunk)&&!v){if(this._config.chunk(b,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=b=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(b.data),this._completeResults.errors=this._completeResults.errors.concat(b.errors),this._completeResults.meta=b.meta),this._completed||!I||!w(this._config.complete)||b&&b.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),I||b&&b.meta.paused||this._nextChunk(),b}this._halted=!0},this._sendError=function(m){w(this._config.error)?this._config.error(m):a&&this._config.error&&r.postMessage({workerId:h.WORKER_ID,error:m,finished:!1})}}function y(f){var m;(f=f||{}).chunkSize||(f.chunkSize=h.RemoteChunkSize),g.call(this,f),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(v){this._input=v,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(m=new XMLHttpRequest,this._config.withCredentials&&(m.withCredentials=this._config.withCredentials),i||(m.onload=B(this._chunkLoaded,this),m.onerror=B(this._chunkError,this)),m.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var v,I=this._config.downloadRequestHeaders;for(v in I)m.setRequestHeader(v,I[v])}var b;this._config.chunkSize&&(b=this._start+this._config.chunkSize-1,m.setRequestHeader("Range","bytes="+this._start+"-"+b));try{m.send(this._config.downloadRequestBody)}catch(T){this._chunkError(T.message)}i&&m.status===0&&this._chunkError()}},this._chunkLoaded=function(){m.readyState===4&&(m.status<200||400<=m.status?this._chunkError():(this._start+=this._config.chunkSize||m.responseText.length,this._finished=!this._config.chunkSize||this._start>=(v=>(v=v.getResponseHeader("Content-Range"))!==null?parseInt(v.substring(v.lastIndexOf("/")+1)):-1)(m),this.parseChunk(m.responseText)))},this._chunkError=function(v){v=m.statusText||v,this._sendError(new Error(v))}}function E(f){(f=f||{}).chunkSize||(f.chunkSize=h.LocalChunkSize),g.call(this,f);var m,v,I=typeof FileReader<"u";this.stream=function(b){this._input=b,v=b.slice||b.webkitSlice||b.mozSlice,I?((m=new FileReader).onload=B(this._chunkLoaded,this),m.onerror=B(this._chunkError,this)):m=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var b=this._input,T=(this._config.chunkSize&&(T=Math.min(this._start+this._config.chunkSize,this._input.size),b=v.call(b,this._start,T)),m.readAsText(b,this._config.encoding));I||this._chunkLoaded({target:{result:T}})},this._chunkLoaded=function(b){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(b.target.result)},this._chunkError=function(){this._sendError(m.error)}}function A(f){var m;g.call(this,f=f||{}),this.stream=function(v){return m=v,this._nextChunk()},this._nextChunk=function(){var v,I;if(!this._finished)return v=this._config.chunkSize,m=v?(I=m.substring(0,v),m.substring(v)):(I=m,""),this._finished=!m,this.parseChunk(I)}}function S(f){g.call(this,f=f||{});var m=[],v=!0,I=!1;this.pause=function(){g.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){g.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(b){this._input=b,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){I&&m.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),m.length?this.parseChunk(m.shift()):v=!0},this._streamData=B(function(b){try{m.push(typeof b=="string"?b:b.toString(this._config.encoding)),v&&(v=!1,this._checkIsFinished(),this.parseChunk(m.shift()))}catch(T){this._streamError(T)}},this),this._streamError=B(function(b){this._streamCleanUp(),this._sendError(b)},this),this._streamEnd=B(function(){this._streamCleanUp(),I=!0,this._streamData("")},this),this._streamCleanUp=B(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function R(f){var m,v,I,b,T=Math.pow(2,53),pe=-T,Fe=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,nt=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,X=this,me=0,K=0,Ve=!1,Z=!1,J=[],M={data:[],errors:[],meta:{}};function Se(re){return f.skipEmptyLines==="greedy"?re.join("").trim()==="":re.length===1&&re[0].length===0}function ye(){if(M&&I&&(Be("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+h.DefaultDelimiter+"'"),I=!1),f.skipEmptyLines&&(M.data=M.data.filter(function(H){return!Se(H)})),Le()){let H=function(ve,be){w(f.transformHeader)&&(ve=f.transformHeader(ve,be)),J.push(ve)};if(M)if(Array.isArray(M.data[0])){for(var re=0;Le()&&re<M.data.length;re++)M.data[re].forEach(H);M.data.splice(0,1)}else M.data.forEach(H)}function ce(H,ve){for(var be=f.header?{}:[],ue=0;ue<H.length;ue++){var he=ue,ne=H[ue],ne=((at,ee)=>(Ee=>(f.dynamicTypingFunction&&f.dynamicTyping[Ee]===void 0&&(f.dynamicTyping[Ee]=f.dynamicTypingFunction(Ee)),(f.dynamicTyping[Ee]||f.dynamicTyping)===!0))(at)?ee==="true"||ee==="TRUE"||ee!=="false"&&ee!=="FALSE"&&((Ee=>{if(Fe.test(Ee)&&(Ee=parseFloat(Ee),pe<Ee&&Ee<T))return 1})(ee)?parseFloat(ee):nt.test(ee)?new Date(ee):ee===""?null:ee):ee)(he=f.header?ue>=J.length?"__parsed_extra":J[ue]:he,ne=f.transform?f.transform(ne,he):ne);he==="__parsed_extra"?(be[he]=be[he]||[],be[he].push(ne)):be[he]=ne}return f.header&&(ue>J.length?Be("FieldMismatch","TooManyFields","Too many fields: expected "+J.length+" fields but parsed "+ue,K+ve):ue<J.length&&Be("FieldMismatch","TooFewFields","Too few fields: expected "+J.length+" fields but parsed "+ue,K+ve)),be}var ge;M&&(f.header||f.dynamicTyping||f.transform)&&(ge=1,!M.data.length||Array.isArray(M.data[0])?(M.data=M.data.map(ce),ge=M.data.length):M.data=ce(M.data,0),f.header&&M.meta&&(M.meta.fields=J),K+=ge)}function Le(){return f.header&&J.length===0}function Be(re,ce,ge,H){re={type:re,code:ce,message:ge},H!==void 0&&(re.row=H),M.errors.push(re)}w(f.step)&&(b=f.step,f.step=function(re){M=re,Le()?ye():(ye(),M.data.length!==0&&(me+=re.data.length,f.preview&&me>f.preview?v.abort():(M.data=M.data[0],b(M,X))))}),this.parse=function(re,ce,ge){var H=f.quoteChar||'"',H=(f.newline||(f.newline=this.guessLineEndings(re,H)),I=!1,f.delimiter?w(f.delimiter)&&(f.delimiter=f.delimiter(re),M.meta.delimiter=f.delimiter):((H=((ve,be,ue,he,ne)=>{var at,ee,Ee,ht;ne=ne||[",","	","|",";",h.RECORD_SEP,h.UNIT_SEP];for(var Lt=0;Lt<ne.length;Lt++){for(var dt,Mt=ne[Lt],Pe=0,ct=0,oe=0,de=(Ee=void 0,new U({comments:he,delimiter:Mt,newline:be,preview:10}).parse(ve)),rt=0;rt<de.data.length;rt++)ue&&Se(de.data[rt])?oe++:(dt=de.data[rt].length,ct+=dt,Ee===void 0?Ee=dt:0<dt&&(Pe+=Math.abs(dt-Ee),Ee=dt));0<de.data.length&&(ct/=de.data.length-oe),(ee===void 0||Pe<=ee)&&(ht===void 0||ht<ct)&&1.99<ct&&(ee=Pe,at=Mt,ht=ct)}return{successful:!!(f.delimiter=at),bestDelimiter:at}})(re,f.newline,f.skipEmptyLines,f.comments,f.delimitersToGuess)).successful?f.delimiter=H.bestDelimiter:(I=!0,f.delimiter=h.DefaultDelimiter),M.meta.delimiter=f.delimiter),z(f));return f.preview&&f.header&&H.preview++,m=re,v=new U(H),M=v.parse(m,ce,ge),ye(),Ve?{meta:{paused:!0}}:M||{meta:{paused:!1}}},this.paused=function(){return Ve},this.pause=function(){Ve=!0,v.abort(),m=w(f.chunk)?"":m.substring(v.getCharIndex())},this.resume=function(){X.streamer._halted?(Ve=!1,X.streamer.parseChunk(m,!0)):setTimeout(X.resume,3)},this.aborted=function(){return Z},this.abort=function(){Z=!0,v.abort(),M.meta.aborted=!0,w(f.complete)&&f.complete(M),m=""},this.guessLineEndings=function(ve,H){ve=ve.substring(0,1048576);var H=new RegExp(x(H)+"([^]*?)"+x(H),"gm"),ge=(ve=ve.replace(H,"")).split("\r"),H=ve.split(`
`),ve=1<H.length&&H[0].length<ge[0].length;if(ge.length===1||ve)return`
`;for(var be=0,ue=0;ue<ge.length;ue++)ge[ue][0]===`
`&&be++;return be>=ge.length/2?`\r
`:"\r"}}function x(f){return f.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function U(f){var m=(f=f||{}).delimiter,v=f.newline,I=f.comments,b=f.step,T=f.preview,pe=f.fastMode,Fe=null,nt=!1,X=f.quoteChar==null?'"':f.quoteChar,me=X;if(f.escapeChar!==void 0&&(me=f.escapeChar),(typeof m!="string"||-1<h.BAD_DELIMITERS.indexOf(m))&&(m=","),I===m)throw new Error("Comment character same as delimiter");I===!0?I="#":(typeof I!="string"||-1<h.BAD_DELIMITERS.indexOf(I))&&(I=!1),v!==`
`&&v!=="\r"&&v!==`\r
`&&(v=`
`);var K=0,Ve=!1;this.parse=function(Z,J,M){if(typeof Z!="string")throw new Error("Input must be a string");var Se=Z.length,ye=m.length,Le=v.length,Be=I.length,re=w(b),ce=[],ge=[],H=[],ve=K=0;if(!Z)return Pe();if(pe||pe!==!1&&Z.indexOf(X)===-1){for(var be=Z.split(v),ue=0;ue<be.length;ue++){if(H=be[ue],K+=H.length,ue!==be.length-1)K+=v.length;else if(M)return Pe();if(!I||H.substring(0,Be)!==I){if(re){if(ce=[],ht(H.split(m)),ct(),Ve)return Pe()}else ht(H.split(m));if(T&&T<=ue)return ce=ce.slice(0,T),Pe(!0)}}return Pe()}for(var he=Z.indexOf(m,K),ne=Z.indexOf(v,K),at=new RegExp(x(me)+x(X),"g"),ee=Z.indexOf(X,K);;)if(Z[K]===X)for(ee=K,K++;;){if((ee=Z.indexOf(X,ee+1))===-1)return M||ge.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:ce.length,index:K}),dt();if(ee===Se-1)return dt(Z.substring(K,ee).replace(at,X));if(X===me&&Z[ee+1]===me)ee++;else if(X===me||ee===0||Z[ee-1]!==me){he!==-1&&he<ee+1&&(he=Z.indexOf(m,ee+1));var Ee=Lt((ne=ne!==-1&&ne<ee+1?Z.indexOf(v,ee+1):ne)===-1?he:Math.min(he,ne));if(Z.substr(ee+1+Ee,ye)===m){H.push(Z.substring(K,ee).replace(at,X)),Z[K=ee+1+Ee+ye]!==X&&(ee=Z.indexOf(X,K)),he=Z.indexOf(m,K),ne=Z.indexOf(v,K);break}if(Ee=Lt(ne),Z.substring(ee+1+Ee,ee+1+Ee+Le)===v){if(H.push(Z.substring(K,ee).replace(at,X)),Mt(ee+1+Ee+Le),he=Z.indexOf(m,K),ee=Z.indexOf(X,K),re&&(ct(),Ve))return Pe();if(T&&ce.length>=T)return Pe(!0);break}ge.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:ce.length,index:K}),ee++}}else if(I&&H.length===0&&Z.substring(K,K+Be)===I){if(ne===-1)return Pe();K=ne+Le,ne=Z.indexOf(v,K),he=Z.indexOf(m,K)}else if(he!==-1&&(he<ne||ne===-1))H.push(Z.substring(K,he)),K=he+ye,he=Z.indexOf(m,K);else{if(ne===-1)break;if(H.push(Z.substring(K,ne)),Mt(ne+Le),re&&(ct(),Ve))return Pe();if(T&&ce.length>=T)return Pe(!0)}return dt();function ht(oe){ce.push(oe),ve=K}function Lt(oe){var de=0;return de=oe!==-1&&(oe=Z.substring(ee+1,oe))&&oe.trim()===""?oe.length:de}function dt(oe){return M||(oe===void 0&&(oe=Z.substring(K)),H.push(oe),K=Se,ht(H),re&&ct()),Pe()}function Mt(oe){K=oe,ht(H),H=[],ne=Z.indexOf(v,K)}function Pe(oe){if(f.header&&!J&&ce.length&&!nt){var de=ce[0],rt=Object.create(null),zn=new Set(de);let Tr=!1;for(let Kt=0;Kt<de.length;Kt++){let Ge=de[Kt];if(rt[Ge=w(f.transformHeader)?f.transformHeader(Ge,Kt):Ge]){let Qt,Ir=rt[Ge];for(;Qt=Ge+"_"+Ir,Ir++,zn.has(Qt););zn.add(Qt),de[Kt]=Qt,rt[Ge]++,Tr=!0,(Fe=Fe===null?{}:Fe)[Qt]=Ge}else rt[Ge]=1,de[Kt]=Ge;zn.add(Ge)}Tr&&console.warn("Duplicate headers found and renamed."),nt=!0}return{data:ce,errors:ge,meta:{delimiter:m,linebreak:v,aborted:Ve,truncated:!!oe,cursor:ve+(J||0),renamedHeaders:Fe}}}function ct(){b(Pe()),ce=[],ge=[]}},this.abort=function(){Ve=!0},this.getCharIndex=function(){return K}}function $(f){var m=f.data,v=c[m.workerId],I=!1;if(m.error)v.userError(m.error,m.file);else if(m.results&&m.results.data){var b={abort:function(){I=!0,D(m.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:V,resume:V};if(w(v.userStep)){for(var T=0;T<m.results.data.length&&(v.userStep({data:m.results.data[T],errors:m.results.errors,meta:m.results.meta},b),!I);T++);delete m.results}else w(v.userChunk)&&(v.userChunk(m.results,b,m.file),delete m.results)}m.finished&&!I&&D(m.workerId,m.results)}function D(f,m){var v=c[f];w(v.userComplete)&&v.userComplete(m),v.terminate(),delete c[f]}function V(){throw new Error("Not implemented.")}function z(f){if(typeof f!="object"||f===null)return f;var m,v=Array.isArray(f)?[]:{};for(m in f)v[m]=z(f[m]);return v}function B(f,m){return function(){f.apply(m,arguments)}}function w(f){return typeof f=="function"}return h.parse=function(f,m){var v=(m=m||{}).dynamicTyping||!1;if(w(v)&&(m.dynamicTypingFunction=v,v={}),m.dynamicTyping=v,m.transform=!!w(m.transform)&&m.transform,!m.worker||!h.WORKERS_SUPPORTED)return v=null,h.NODE_STREAM_INPUT,typeof f=="string"?(f=(I=>I.charCodeAt(0)!==65279?I:I.slice(1))(f),v=new(m.download?y:A)(m)):f.readable===!0&&w(f.read)&&w(f.on)?v=new S(m):(r.File&&f instanceof File||f instanceof Object)&&(v=new E(m)),v.stream(f);(v=(()=>{var I;return!!h.WORKERS_SUPPORTED&&(I=(()=>{var b=r.URL||r.webkitURL||null,T=t.toString();return h.BLOB_URL||(h.BLOB_URL=b.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",T,")();"],{type:"text/javascript"})))})(),(I=new r.Worker(I)).onmessage=$,I.id=u++,c[I.id]=I)})()).userStep=m.step,v.userChunk=m.chunk,v.userComplete=m.complete,v.userError=m.error,m.step=w(m.step),m.chunk=w(m.chunk),m.complete=w(m.complete),m.error=w(m.error),delete m.worker,v.postMessage({input:f,config:m,workerId:v.id})},h.unparse=function(f,m){var v=!1,I=!0,b=",",T=`\r
`,pe='"',Fe=pe+pe,nt=!1,X=null,me=!1,K=((()=>{if(typeof m=="object"){if(typeof m.delimiter!="string"||h.BAD_DELIMITERS.filter(function(J){return m.delimiter.indexOf(J)!==-1}).length||(b=m.delimiter),typeof m.quotes!="boolean"&&typeof m.quotes!="function"&&!Array.isArray(m.quotes)||(v=m.quotes),typeof m.skipEmptyLines!="boolean"&&typeof m.skipEmptyLines!="string"||(nt=m.skipEmptyLines),typeof m.newline=="string"&&(T=m.newline),typeof m.quoteChar=="string"&&(pe=m.quoteChar),typeof m.header=="boolean"&&(I=m.header),Array.isArray(m.columns)){if(m.columns.length===0)throw new Error("Option columns is empty");X=m.columns}m.escapeChar!==void 0&&(Fe=m.escapeChar+pe),m.escapeFormulae instanceof RegExp?me=m.escapeFormulae:typeof m.escapeFormulae=="boolean"&&m.escapeFormulae&&(me=/^[=+\-@\t\r].*$/)}})(),new RegExp(x(pe),"g"));if(typeof f=="string"&&(f=JSON.parse(f)),Array.isArray(f)){if(!f.length||Array.isArray(f[0]))return Ve(null,f,nt);if(typeof f[0]=="object")return Ve(X||Object.keys(f[0]),f,nt)}else if(typeof f=="object")return typeof f.data=="string"&&(f.data=JSON.parse(f.data)),Array.isArray(f.data)&&(f.fields||(f.fields=f.meta&&f.meta.fields||X),f.fields||(f.fields=Array.isArray(f.data[0])?f.fields:typeof f.data[0]=="object"?Object.keys(f.data[0]):[]),Array.isArray(f.data[0])||typeof f.data[0]=="object"||(f.data=[f.data])),Ve(f.fields||[],f.data||[],nt);throw new Error("Unable to serialize unrecognized input");function Ve(J,M,Se){var ye="",Le=(typeof J=="string"&&(J=JSON.parse(J)),typeof M=="string"&&(M=JSON.parse(M)),Array.isArray(J)&&0<J.length),Be=!Array.isArray(M[0]);if(Le&&I){for(var re=0;re<J.length;re++)0<re&&(ye+=b),ye+=Z(J[re],re);0<M.length&&(ye+=T)}for(var ce=0;ce<M.length;ce++){var ge=(Le?J:M[ce]).length,H=!1,ve=Le?Object.keys(M[ce]).length===0:M[ce].length===0;if(Se&&!Le&&(H=Se==="greedy"?M[ce].join("").trim()==="":M[ce].length===1&&M[ce][0].length===0),Se==="greedy"&&Le){for(var be=[],ue=0;ue<ge;ue++){var he=Be?J[ue]:ue;be.push(M[ce][he])}H=be.join("").trim()===""}if(!H){for(var ne=0;ne<ge;ne++){0<ne&&!ve&&(ye+=b);var at=Le&&Be?J[ne]:ne;ye+=Z(M[ce][at],ne)}ce<M.length-1&&(!Se||0<ge&&!ve)&&(ye+=T)}}return ye}function Z(J,M){var Se,ye;return J==null?"":J.constructor===Date?JSON.stringify(J).slice(1,25):(ye=!1,me&&typeof J=="string"&&me.test(J)&&(J="'"+J,ye=!0),Se=J.toString().replace(K,Fe),(ye=ye||v===!0||typeof v=="function"&&v(J,M)||Array.isArray(v)&&v[M]||((Le,Be)=>{for(var re=0;re<Be.length;re++)if(-1<Le.indexOf(Be[re]))return!0;return!1})(Se,h.BAD_DELIMITERS)||-1<Se.indexOf(b)||Se.charAt(0)===" "||Se.charAt(Se.length-1)===" ")?pe+Se+pe:Se)}},h.RECORD_SEP="",h.UNIT_SEP="",h.BYTE_ORDER_MARK="\uFEFF",h.BAD_DELIMITERS=["\r",`
`,'"',h.BYTE_ORDER_MARK],h.WORKERS_SUPPORTED=!i&&!!r.Worker,h.NODE_STREAM_INPUT=1,h.LocalChunkSize=10485760,h.RemoteChunkSize=5242880,h.DefaultDelimiter=",",h.Parser=U,h.ParserHandle=R,h.NetworkStreamer=y,h.FileStreamer=E,h.StringStreamer=A,h.ReadableStreamStreamer=S,r.jQuery&&((s=r.jQuery).fn.parse=function(f){var m=f.config||{},v=[];return this.each(function(T){if(!(s(this).prop("tagName").toUpperCase()==="INPUT"&&s(this).attr("type").toLowerCase()==="file"&&r.FileReader)||!this.files||this.files.length===0)return!0;for(var pe=0;pe<this.files.length;pe++)v.push({file:this.files[pe],inputElem:this,instanceConfig:s.extend({},m)})}),I(),this;function I(){if(v.length===0)w(f.complete)&&f.complete();else{var T,pe,Fe,nt,X=v[0];if(w(f.before)){var me=f.before(X.file,X.inputElem);if(typeof me=="object"){if(me.action==="abort")return T="AbortError",pe=X.file,Fe=X.inputElem,nt=me.reason,void(w(f.error)&&f.error({name:T},pe,Fe,nt));if(me.action==="skip")return void b();typeof me.config=="object"&&(X.instanceConfig=s.extend(X.instanceConfig,me.config))}else if(me==="skip")return void b()}var K=X.instanceConfig.complete;X.instanceConfig.complete=function(Ve){w(K)&&K(Ve,X.file,X.inputElem),b()},h.parse(X.file,X.instanceConfig)}}function b(){v.splice(0,1),I()}}),a&&(r.onmessage=function(f){f=f.data,h.WORKER_ID===void 0&&f&&(h.WORKER_ID=f.workerId),typeof f.input=="string"?r.postMessage({workerId:h.WORKER_ID,results:h.parse(f.input,f.config),finished:!0}):(r.File&&f.input instanceof File||f.input instanceof Object)&&(f=h.parse(f.input,f.config))&&r.postMessage({workerId:h.WORKER_ID,results:f,finished:!0})}),(y.prototype=Object.create(g.prototype)).constructor=y,(E.prototype=Object.create(g.prototype)).constructor=E,(A.prototype=Object.create(A.prototype)).constructor=A,(S.prototype=Object.create(g.prototype)).constructor=S,h})})(zf);var xw=zf.exports;const Pw=Tp(xw),Do=(n,e)=>{if(!n||n.length===0){alert("No data to export");return}const t=Pw.unparse(n,{skipEmptyLines:!0}),r=new Blob([t],{type:"text/csv;charset=utf-8;"}),s=URL.createObjectURL(r),i=document.createElement("a");i.href=s,i.download=e||"export.csv",i.click(),URL.revokeObjectURL(s)},kw=["Section","Date","Payment","Total","Customer","Items","Title","Reason","Amount","Note","TotalIncome","TotalExpense","ProfitOrLoss"],Hu={morning:0,afternoon:1,evening:2,order:3},Nw=(n=[])=>{const e={morning:[],afternoon:[],evening:[],order:[]};return n.forEach(t=>{(e[t.sessionType]||e.morning).push({section:t.sessionType,date:Xe(t.createdDate),payment:t.paymentMode,total:t.billTotal,customer:t.customerNameOrToken,items:(t.items||[]).map(s=>s.itemName).join("; ")})}),e},ir=(n=0)=>Math.round((n||0)*100)/100,ft=(n=0)=>ir(n).toFixed(2),Wu=(n=[])=>ir(n.reduce((e,t)=>e+(t.billTotal||0),0)),Gu=(n=[])=>ir(n.reduce((e,t)=>e+(t.amount||0),0)),pt=(n={})=>[n.section||"",n.date||"",n.payment||"",n.total??"",n.customer||"",n.items||"",n.title||"",n.reason||"",n.amount??"",n.note||"",n.totalIncome??"",n.totalExpense??"",n.profitOrLoss??""],Ku=n=>{if(!n.createdDate)return 0;const e=n.createdTime?`${n.createdDate} ${n.createdTime}`:n.createdDate,t=Date.parse(e);return Number.isNaN(t)?Date.parse(n.createdDate)||0:t},Dw=(n=[])=>[...n].sort((e,t)=>{const r=Ku(e),s=Ku(t);if(s!==r)return s-r;const i=Hu[e.sessionType]??99,a=Hu[t.sessionType]??99;return i-a});function Hf({bills:n=[],expenses:e=[],today:t,history:r=[],orders:s=[]}){const[i,a]=O.useState({title:"",type:"",data:{}}),c=()=>pt({}),u=()=>{const D=Nw(n),V=Wu(n),z=Gu(e),B=[];return B.push(pt({section:"--- Morning ---"})),D.morning.forEach(w=>B.push(pt(w))),B.push(c()),B.push(pt({section:"--- Afternoon ---"})),D.afternoon.forEach(w=>B.push(pt(w))),B.push(c()),B.push(pt({section:"--- Evening ---"})),D.evening.forEach(w=>B.push(pt(w))),B.push(c()),B.push(pt({section:"--- Orders ---"})),D.order.forEach(w=>B.push(pt(w))),B.push(c()),B.push(pt({section:"--- Expenses ---"})),e.forEach(w=>B.push(pt({section:"expense",date:Xe(w.expenseDate),title:w.expenseTitle,reason:w.reason,amount:w.amount,note:w.note}))),B.push(c()),B.push(pt({section:"Totals",totalIncome:ft(V),totalExpense:ft(z),profitOrLoss:ft(V-z)})),B},h=()=>{const D=Dw(n),V=Wu(n),z=Gu(e),B={incomeTotal:ir(V),expenseTotal:ir(z),profit:ir(V-z)};return{bills:D,expenses:e,summary:B}},g=()=>r.map(D=>[Xe(D.date),ft(D.totalSales),ft(D.totalExpense),ft(D.netProfit)]),y=()=>s.map(D=>[D.sessionType,Xe(D.createdDate),D.paymentMode,D.billTotal,D.customerNameOrToken,(D.items||[]).map(V=>V.itemName).join("; ")]),E=()=>{if(!t)return alert("No date");Do([kw,c(),...u()],`today-bills-expenses-${t}.csv`)},A=()=>{if(!t)return alert("No date");a({title:`Bills + Expenses (${Xe(t)})`,type:"today",data:h()})},S=()=>{Do([["Date","Total Sales","Expense","Profit"],[""],...g()],"history.csv")},R=()=>{a({title:"History",type:"history",data:{header:["Date","Total Sales","Expense","Profit"],rows:g()}})},x=()=>{if(!s.length)return alert("No orders");Do([["Session","Date","Payment","Total","Customer","Items"],[""],...y()],`orders-${t||"all"}.csv`)},U=()=>{if(!s.length)return alert("No orders");a({title:"Orders",type:"orders",data:{header:["Session","Date","Payment","Total","Customer","Items"],rows:y()}})},$=()=>{var v;if(i.type!=="today"||!((v=i.data)!=null&&v.bills))return;const{bills:D,expenses:V,summary:z}=i.data,B=D.map(I=>`
      <tr>
        <td>${I.sessionType}</td><td>${Xe(I.createdDate)}</td><td>${I.createdTime||""}</td>
        <td>${I.paymentMode}</td><td>${I.billTotal}</td><td>${I.customerNameOrToken||"-"}</td>
        <td>${(I.items||[]).map(b=>b.itemName).join(", ")}</td>
      </tr>`).join(""),w=V.map(I=>`
      <tr><td>${Xe(I.expenseDate)}</td><td>${I.expenseTitle}</td><td>${I.reason||""}</td><td>${I.amount}</td><td>${I.note||""}</td></tr>
    `).join("")||'<tr><td colspan="5">No expenses</td></tr>',f=`
      <html>
      <head>
        <title>${i.title}</title>
        <style>
          body{font-family:Arial, sans-serif; padding:24px; color:#0f172a;}
          h1{margin:0 0 12px;}
          table{width:100%; border-collapse:collapse; margin-bottom:16px;}
          th,td{border:1px solid #e2e8f0; padding:8px; font-size:13px; text-align:left;}
          th{background:#f8fafc;}
          .summary{margin-top:8px; font-weight:600;}
        </style>
      </head>
      <body>
        <h1>${i.title}</h1>
        <h3>Bills</h3>
        <table><thead><tr><th>Session</th><th>Date</th><th>Time</th><th>Payment</th><th>Total</th><th>Customer</th><th>Items</th></tr></thead>
        <tbody>${B}</tbody></table>
        <h3>Expenses</h3>
        <table><thead><tr><th>Date</th><th>Title</th><th>Reason</th><th>Amount</th><th>Note</th></tr></thead>
        <tbody>${w}</tbody></table>
        <div class="summary">Total Income: ${ft(z.incomeTotal)} | Total Expense: ${ft(z.expenseTotal)} | Profit/Loss: ${ft(z.profit)}</div>
      </body></html>`,m=window.open("","_blank","width=1000,height=1200");if(!m)return alert("Please allow popups for print/PDF");m.document.write(f),m.document.close(),m.focus(),m.print()};return p.jsxs("div",{className:"flex flex-wrap gap-3",children:[t&&p.jsx("button",{className:"btn btn-ghost",onClick:E,children:"Export Bills + Expenses (single CSV)"}),t&&p.jsx("button",{className:"btn btn-ghost",onClick:A,children:"Preview Bills + Expenses"}),r&&r.length>0&&p.jsx("button",{className:"btn btn-ghost",onClick:S,children:"Export History CSV"}),r&&r.length>0&&p.jsx("button",{className:"btn btn-ghost",onClick:R,children:"Preview History"}),s&&s.length>0&&p.jsx("button",{className:"btn btn-ghost",onClick:x,children:"Export Orders CSV"}),s&&s.length>0&&p.jsx("button",{className:"btn btn-ghost",onClick:U,children:"Preview Orders"}),i.type&&p.jsx("div",{className:"fixed inset-0 bg-black/40 flex items-center justify-center z-50",children:p.jsxs("div",{className:"card max-w-5xl w-[95%] bg-white",children:[p.jsxs("div",{className:"flex justify-between items-center mb-3",children:[p.jsxs("div",{className:"font-semibold",children:["Preview: ",i.title]}),p.jsxs("div",{className:"flex gap-2",children:[i.type==="today"&&p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"btn btn-ghost",onClick:$,children:"Print Receipt"}),p.jsx("button",{className:"btn btn-ghost",onClick:$,children:"Download PDF"})]}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>a({title:"",type:"",data:{}}),children:"Close"})]})]}),p.jsxs("div",{className:"max-h-[65vh] overflow-auto space-y-4",children:[i.type==="today"&&p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"font-semibold",children:"Bills"}),p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Session"}),p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Time"}),p.jsx("th",{children:"Payment"}),p.jsx("th",{children:"Total"}),p.jsx("th",{children:"Customer"}),p.jsx("th",{children:"Items"})]})}),p.jsx("tbody",{children:i.data.bills.map((D,V)=>p.jsxs("tr",{children:[p.jsx("td",{className:"capitalize",children:D.sessionType}),p.jsx("td",{children:Xe(D.createdDate)}),p.jsx("td",{children:D.createdTime}),p.jsx("td",{children:D.paymentMode}),p.jsx("td",{children:D.billTotal}),p.jsx("td",{children:D.customerNameOrToken||"-"}),p.jsx("td",{children:(D.items||[]).map(z=>z.itemName).join(", ")})]},V))})]}),p.jsx("div",{className:"font-semibold",children:"Expenses"}),p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Title"}),p.jsx("th",{children:"Reason"}),p.jsx("th",{children:"Amount"}),p.jsx("th",{children:"Note"})]})}),p.jsxs("tbody",{children:[e.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:"5",className:"text-center text-slate-500",children:"No expenses"})}),e.map((D,V)=>p.jsxs("tr",{children:[p.jsx("td",{children:Xe(D.expenseDate)}),p.jsx("td",{children:D.expenseTitle}),p.jsx("td",{children:D.reason||"-"}),p.jsx("td",{children:D.amount}),p.jsx("td",{children:D.note||""})]},V))]})]}),p.jsx("div",{className:"font-semibold",children:"Summary"}),p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Total Income"}),p.jsx("th",{children:"Total Expense"}),p.jsx("th",{children:"Profit/Loss"})]})}),p.jsx("tbody",{children:p.jsxs("tr",{children:[p.jsx("td",{children:ft(i.data.summary.incomeTotal)}),p.jsx("td",{children:ft(i.data.summary.expenseTotal)}),p.jsx("td",{children:ft(i.data.summary.profit)})]})})]})]}),i.type==="history"&&p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsx("tr",{children:i.data.header.map((D,V)=>p.jsx("th",{children:D},V))})}),p.jsx("tbody",{children:i.data.rows.map((D,V)=>p.jsx("tr",{children:D.map((z,B)=>p.jsx("td",{children:z},B))},V))})]}),i.type==="orders"&&p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsx("tr",{children:i.data.header.map((D,V)=>p.jsx("th",{children:D},V))})}),p.jsx("tbody",{children:i.data.rows.map((D,V)=>p.jsx("tr",{children:D.map((z,B)=>p.jsx("td",{children:z},B))},V))})]})]})]})})]})}const zs=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0);function Ow(){const n=ss(),e=Xe(n),[t,r]=O.useState([]),[s,i]=O.useState([]),[a,c]=O.useState(null);O.useEffect(()=>{const E=Uf(n,S=>r(S.docs.map(R=>({id:R.id,...R.data()})))),A=yw(n,S=>i(S.docs.map(R=>({id:R.id,...R.data()}))));return()=>{E(),A()}},[n]);const u=O.useMemo(()=>{const E={morning:{cash:0,upi:0,total:0},afternoon:{cash:0,upi:0,total:0},evening:{cash:0,upi:0,total:0},expense:0};return t.forEach(A=>{const S=E[A.sessionType]||E.morning;A.paymentMode==="cash"&&(S.cash+=A.billTotal||0),A.paymentMode==="upi"&&(S.upi+=A.billTotal||0),S.total+=A.billTotal||0}),E.expense=s.reduce((A,S)=>A+(S.amount||0),0),E},[t,s]),h=u.morning.total+u.afternoon.total+u.evening.total,g=h-u.expense,y=async E=>{await _w(E),He.success("Expense deleted"),(a==null?void 0:a.id)===E&&c(null)};return p.jsxs("div",{className:"space-y-4",children:[p.jsx(Cw,{totals:{grandTotal:h,net:g,expense:u.expense}}),p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"text-lg font-semibold mb-3",children:["Today Breakdown (",e,")"]}),p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Session"}),p.jsx("th",{children:"Cash"}),p.jsx("th",{children:"UPI"}),p.jsx("th",{children:"Total"})]})}),p.jsx("tbody",{children:["morning","afternoon","evening"].map(E=>p.jsxs("tr",{children:[p.jsx("td",{className:"capitalize",children:E}),p.jsx("td",{children:zs(u[E].cash)}),p.jsx("td",{children:zs(u[E].upi)}),p.jsx("td",{children:zs(u[E].total)})]},E))})]})]}),p.jsxs("div",{className:"card",children:[p.jsx("div",{className:"text-lg font-semibold mb-3",children:"Today Expenses"}),p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Title"}),p.jsx("th",{children:"Reason"}),p.jsx("th",{children:"Amount"}),p.jsx("th",{children:"Note"}),p.jsx("th",{})]})}),p.jsxs("tbody",{children:[s.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:"5",className:"text-center text-slate-500",children:"No expenses"})}),s.map(E=>p.jsxs("tr",{children:[p.jsx("td",{children:E.expenseTitle}),p.jsx("td",{children:E.reason||"-"}),p.jsx("td",{children:zs(E.amount||0)}),p.jsx("td",{children:E.note||""}),p.jsxs("td",{className:"space-x-2",children:[p.jsx("button",{className:"btn btn-ghost",onClick:()=>c(E),children:"Edit"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>y(E.id),children:"Delete"})]})]},E.id))]})]})]}),p.jsx(Rw,{editing:a,onSaved:()=>c(null)}),p.jsx(Hf,{bills:t,expenses:s,today:n})]})}const st=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:2,maximumFractionDigits:2}).format(n||0),Hs=n=>{if(!n)return"";const e=n.toDate?n.toDate():new Date(n);return isNaN(e)?"":e.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit",hour12:!0})},Qu=(n={})=>{const e=n.itemName||n.name||"Item",t=Math.max(0,Number(n.quantity||n.qty||n.count||0))||0,r=Number(n.unitPrice??n.price??0)||0,s=Number(n.totalPrice??n.total??t*r)||0;return{name:e,qty:t,unit:r,total:s}};function Vw(){const[n,e]=O.useState([]),[t,r]=O.useState({date:"",month:""}),[s,i]=O.useState(null),a=y=>{if(!y)return"";if(y.includes("/")){const[A,S,R]=y.split("/");if(A&&S&&R)return`${R.padStart(4,"0")}-${S.padStart(2,"0")}-${A.padStart(2,"0")}`}const E=new Date(y);return isNaN(E)?"":E.toISOString().slice(0,10)};O.useEffect(()=>{const y=Bf(A=>{const S=A.docs.map(R=>R.data());e(R=>({...R,bills:S}))}),E=vw(A=>{const S=A.docs.map(R=>R.data());e(R=>({...R,expenses:S}))});return()=>{y(),E()}},[]);const c=O.useMemo(()=>{const y=n.bills||[],E=n.expenses||[],A={};return y.forEach(S=>{const R=S.createdDate||"unknown";A[R]||(A[R]={date:R,totalSales:0,totalExpense:0}),A[R].totalSales+=S.billTotal||0}),E.forEach(S=>{const R=S.expenseDate||"unknown";A[R]||(A[R]={date:R,totalSales:0,totalExpense:0}),A[R].totalExpense+=S.amount||0}),Object.values(A).map(S=>({...S,netProfit:(S.totalSales||0)-(S.totalExpense||0)})).sort((S,R)=>(R.date||"").localeCompare(S.date||""))},[n]),u=O.useMemo(()=>c.filter(y=>{var E;return!(t.date&&y.date!==t.date||t.month&&!((E=y.date)!=null&&E.startsWith(t.month)))}),[c,t]),h=O.useMemo(()=>{if(!s)return{bills:[],expenses:[]};const y=(n.bills||[]).filter(A=>A.createdDate===s),E=(n.expenses||[]).filter(A=>A.expenseDate===s);return{bills:y,expenses:E}},[n,s]),g=(y="print")=>{if(!s)return;const{bills:E,expenses:A}=h,S=E.reduce((z,B)=>z+(B.billTotal||0),0),R=A.reduce((z,B)=>z+(B.amount||0),0),x=S-R,U=E.map(z=>`
      <tr>
        <td>${Hs(z.createdAt)}</td>
        <td>${st(z.billTotal||0)}</td>
        <td>${(z.items||[]).map(B=>{const w=Qu(B);return`${w.name}: ${w.qty} × ${st(w.unit)} = ${st(w.total)}`}).join("<br/>")}</td>
      </tr>
    `).join("")||'<tr><td colspan="3">No bills</td></tr>',$=A.map(z=>`
      <tr><td>${Hs(z.createdAt)}</td><td>${z.description||z.expenseTitle||z.title||"Expense"}</td><td>${st(z.amount||0)}</td></tr>
    `).join("")||'<tr><td colspan="3">No expenses</td></tr>',D=`<!doctype html>
    <html><head><title>${Xe(s)} - Day Summary</title>
    <style>
      body{font-family: Arial, sans-serif; padding:24px; color:#0f172a;}
      h1{margin:0 0 12px;}
      table{width:100%; border-collapse:collapse; margin-bottom:18px;}
      th,td{border:1px solid #e2e8f0; padding:8px; text-align:left; font-size:14px;}
      th{background:#f8fafc;}
      .summary{margin-bottom:16px; font-weight:700;}
    </style>
    </head><body>
      <h1>Details for ${Xe(s)}</h1>
      <div class="summary">Total Sales: ${st(S)} | Expense: ${st(R)} | Profit: ${st(x)}</div>
      <h3>Bills</h3>
      <table><thead><tr><th>Time</th><th>Total</th><th>Items</th></tr></thead><tbody>${U}</tbody></table>
      <h3>Expenses</h3>
      <table><thead><tr><th>Time</th><th>Title</th><th>Amount</th></tr></thead><tbody>${$}</tbody></table>
    </body></html>`,V=window.open("","_blank","width=1100,height=900");if(!V)return alert("Please allow popups for print/PDF");V.document.write(D),V.document.close(),V.focus(),(y==="print"||y==="pdf")&&V.print()};return p.jsxs("div",{className:"space-y-3",children:[p.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[p.jsx("input",{className:"input",type:"text",placeholder:"dd/mm/yyyy",value:Xe(t.date),onChange:y=>r(E=>({...E,date:a(y.target.value)}))}),p.jsx("input",{className:"input",type:"month",value:t.month,onChange:y=>r(E=>({...E,month:y.target.value}))}),p.jsx("button",{className:"btn btn-primary",onClick:()=>r(y=>({...y})),children:"Search"})]}),p.jsx("div",{className:"card",children:p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Total Sales"}),p.jsx("th",{children:"Expense"}),p.jsx("th",{children:"Profit"})]})}),p.jsxs("tbody",{children:[u.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:"4",className:"text-center text-slate-500",children:"No records"})}),u.map(y=>p.jsxs("tr",{children:[p.jsx("td",{children:p.jsx("button",{className:"text-blue-600 hover:text-blue-800 underline",onClick:()=>i(s===y.date?null:y.date),children:Xe(y.date)})}),p.jsx("td",{children:st(y.totalSales||0)}),p.jsx("td",{children:st(y.totalExpense||0)}),p.jsx("td",{children:st(y.netProfit||0)})]},y.date))]})]})}),s&&p.jsxs("div",{className:"card mt-4",children:[p.jsxs("div",{className:"flex justify-between items-center mb-4",children:[p.jsxs("h3",{className:"text-lg font-semibold",children:["Details for ",Xe(s)]}),p.jsxs("div",{className:"flex gap-2 flex-wrap",children:[p.jsx("button",{className:"btn btn-ghost",onClick:()=>g("print"),children:"Print"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>g("pdf"),children:"Download PDF"}),p.jsx("button",{className:"btn btn-ghost",onClick:()=>i(null),children:"Close"})]})]}),h.bills.length>0&&p.jsxs("div",{className:"mb-4",children:[p.jsx("h4",{className:"font-medium mb-2",children:"Bills"}),p.jsx("div",{className:"space-y-3",children:h.bills.map((y,E)=>p.jsxs("div",{className:"p-4 rounded-xl border bg-green-50/60 shadow-soft",children:[p.jsxs("div",{className:"flex justify-between items-start gap-2",children:[p.jsxs("div",{className:"font-semibold",children:["Bill Total: ",st(y.billTotal||0)]}),p.jsx("div",{className:"text-sm text-gray-600",children:Hs(y.createdAt)})]}),y.items&&y.items.length>0&&p.jsxs("div",{className:"mt-2 text-sm",children:[p.jsx("div",{className:"font-medium",children:"Items:"}),p.jsx("ul",{className:"list-disc list-inside",children:y.items.map((A,S)=>p.jsx("li",{children:(()=>{const R=Qu(A);return`${R.name}: ${R.qty} × ${st(R.unit)} = ${st(R.total)}`})()},S))})]})]},E))})]}),h.expenses.length>0&&p.jsxs("div",{className:"mb-4",children:[p.jsx("h4",{className:"font-medium mb-2",children:"Expenses"}),p.jsx("div",{className:"space-y-3",children:h.expenses.map((y,E)=>p.jsx("div",{className:"p-4 rounded-xl border bg-red-50/60 shadow-soft",children:p.jsxs("div",{className:"flex justify-between items-start gap-2",children:[p.jsxs("div",{className:"font-semibold",children:[y.description||y.expenseTitle||y.title||"Expense",": ",st(y.amount||0),y.reason&&p.jsxs("div",{className:"text-sm text-gray-700 font-normal",children:["Reason: ",y.reason]}),y.note&&p.jsxs("div",{className:"text-sm text-gray-700 font-normal",children:["Note: ",y.note]})]}),p.jsx("div",{className:"text-sm text-gray-600",children:Hs(y.createdAt)})]})},E))})]}),h.bills.length===0&&h.expenses.length===0&&p.jsx("p",{className:"text-center text-gray-500",children:"No detailed records found for this day."})]}),p.jsx(Hf,{history:u})]})}function Lw(){const[n,e]=O.useState("profit");return p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"flex gap-3 mb-4",children:[p.jsx("button",{className:`btn ${n==="profit"?"btn-primary":"btn-ghost"}`,onClick:()=>e("profit"),children:"Profit"}),p.jsx("button",{className:`btn ${n==="history"?"btn-primary":"btn-ghost"}`,onClick:()=>e("history"),children:"History"})]}),n==="profit"?p.jsx(Ow,{}):p.jsx(Vw,{})]})}const Mw=(n=0)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n||0),jw=[{value:"order",label:"Order"},{value:"morning",label:"Morning"},{value:"afternoon",label:"Afternoon"},{value:"evening",label:"Evening"}];function Fw(){const[n,e]=O.useState(ss()),[t,r]=O.useState(!0),[s,i]=O.useState({sessionType:"order",paymentMode:"cash",total:"",customer:"",items:""}),[a,c]=O.useState(!1),[u,h]=O.useState([]),[g,y]=O.useState({date:"",month:""});O.useEffect(()=>Uf(n,()=>r(!1)),[n]),O.useEffect(()=>{if(!a)return;const R=Bf(x=>{h(x.docs.map(U=>({id:U.id,...U.data()})))});return()=>R&&R()},[a]);const E=async()=>{const R=Number(s.total);if(!R||R<=0)return He.error("Enter a valid amount");const x=s.items?s.items.split(",").map(V=>V.trim()).filter(Boolean):["Manual Order"],U=R/x.length,$=x.map(V=>({itemName:V,quantity:1,unitPrice:U,totalPrice:U})),D={sessionType:s.sessionType,paymentMode:s.paymentMode,billTotal:R,customerNameOrToken:s.customer,items:$,createdDate:n,createdTime:new Date().toLocaleTimeString()};await Ff(D),He.success("Order added"),i(V=>({...V,total:"",customer:"",items:""}))},A=O.useMemo(()=>u.filter(R=>R.sessionType==="order").filter(R=>{var x;return!(g.date&&R.createdDate!==g.date||g.month&&!((x=R.createdDate)!=null&&x.startsWith(g.month)))}),[u,g]),S=R=>p.jsx("div",{className:"overflow-auto",children:p.jsxs("table",{className:"table",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{children:"Session"}),p.jsx("th",{children:"Date"}),p.jsx("th",{children:"Time"}),p.jsx("th",{children:"Payment"}),p.jsx("th",{children:"Customer"}),p.jsx("th",{children:"Items"}),p.jsx("th",{children:"Total"})]})}),p.jsxs("tbody",{children:[R.length===0&&p.jsx("tr",{children:p.jsx("td",{colSpan:"7",className:"text-center text-slate-500",children:"No orders"})}),R.map(x=>p.jsxs("tr",{children:[p.jsx("td",{className:"capitalize",children:x.sessionType}),p.jsx("td",{children:Xe(x.createdDate)}),p.jsx("td",{children:x.createdTime||"-"}),p.jsx("td",{className:"uppercase",children:x.paymentMode}),p.jsx("td",{children:x.customerNameOrToken||"-"}),p.jsx("td",{children:(x.items||[]).map(U=>U.itemName).join(", ")||"-"}),p.jsx("td",{children:Mw(x.billTotal||0)})]},x.id))]})]})});return p.jsxs("div",{className:"card space-y-4",children:[p.jsxs("div",{className:"flex items-center gap-3",children:[p.jsx("button",{className:`btn ${a?"btn-ghost":"btn-primary"}`,onClick:()=>c(!1),children:"Today"}),p.jsx("button",{className:`btn ${a?"btn-primary":"btn-ghost"}`,onClick:()=>c(!0),children:"History"})]}),!a&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"flex flex-wrap items-center gap-3 justify-between",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-xl font-semibold",children:"Orders"}),p.jsx("p",{className:"text-sm text-slate-500",children:"Quick add; list view hidden as requested"})]}),p.jsx("input",{className:"input w-52",type:"date",value:n,onChange:R=>e(R.target.value)})]}),p.jsxs("div",{className:"card bg-white/70 border-dashed border-2 border-slate-200",children:[p.jsx("div",{className:"font-semibold mb-3",children:"Quick Add Order"}),p.jsxs("div",{className:"grid md:grid-cols-5 gap-3",children:[p.jsx("select",{className:"input",value:s.sessionType,onChange:R=>i(x=>({...x,sessionType:R.target.value})),children:jw.map(R=>p.jsx("option",{value:R.value,children:R.label},R.value))}),p.jsx("input",{className:"input",type:"number",min:"0",placeholder:"Amount",value:s.total,onChange:R=>i(x=>({...x,total:R.target.value}))}),p.jsxs("select",{className:"input",value:s.paymentMode,onChange:R=>i(x=>({...x,paymentMode:R.target.value})),children:[p.jsx("option",{value:"cash",children:"Cash"}),p.jsx("option",{value:"upi",children:"UPI"})]}),p.jsx("input",{className:"input",placeholder:"Customer / Token",value:s.customer,onChange:R=>i(x=>({...x,customer:R.target.value}))}),p.jsx("input",{className:"input",placeholder:"Items (comma separated)",value:s.items,onChange:R=>i(x=>({...x,items:R.target.value}))})]}),p.jsx("div",{className:"mt-3",children:p.jsx("button",{className:"btn btn-primary",onClick:E,children:"Add Order"})})]}),t&&p.jsx(qf,{})]}),a&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"grid md:grid-cols-3 gap-3",children:[p.jsx("input",{className:"input",type:"date",value:g.date,onChange:R=>y(x=>({...x,date:R.target.value}))}),p.jsx("input",{className:"input",type:"month",value:g.month,onChange:R=>y(x=>({...x,month:R.target.value}))}),p.jsx("button",{className:"btn btn-primary",onClick:()=>y(R=>({...R})),children:"Filter"})]}),S(A)]})]})}function Uw(){const[n,e]=O.useState("menu");return O.useEffect(()=>{document.title=`Sri Raghavendra Mess - ${n}`},[n]),p.jsxs("div",{className:"min-h-screen bg-slate-50 text-slate-900",children:[p.jsx(lw,{}),p.jsxs("main",{className:"max-w-6xl mx-auto px-3 pb-10",children:[p.jsx(hw,{active:n,onChange:e}),n==="menu"&&p.jsx(Iw,{}),n==="update"&&p.jsx(Aw,{}),n==="accounts"&&p.jsx(Lw,{}),n==="orders"&&p.jsx(Fw,{})]})]})}function Bw({children:n}){const{user:e}=Gf();return e?Sf()?n:p.jsx(Oo,{to:"/login",replace:!0}):p.jsx(Oo,{to:"/login",replace:!0})}const Wf=O.createContext({user:null}),Gf=()=>O.useContext(Wf);function $w({user:n,checking:e}){const t=Ju();return O.useEffect(()=>{const r=sessionStorage.redirect;delete sessionStorage.redirect,r&&window.location.pathname==="/billing-system1/".replace(/\/$/,"")+"/"&&t(r.replace(/^.*?\/dashboard\//,""))},[t]),e?p.jsx("div",{className:"h-screen flex items-center justify-center text-primary",children:"Loading..."}):p.jsxs(wp,{children:[p.jsx(vo,{path:"login",element:p.jsx(cw,{})}),p.jsx(vo,{path:"dashboard/*",element:p.jsx(Bw,{children:p.jsx(Uw,{})})}),p.jsx(vo,{path:"*",element:p.jsx(Oo,{to:n?"dashboard":"login",replace:!0})})]})}function qw(){const[n,e]=O.useState(null),[t,r]=O.useState(!0);O.useEffect(()=>yI(a=>{e(a),r(!1)}),[]);const s="/billing-system1/".replace(/\/$/,"");return p.jsx(Wf.Provider,{value:{user:n},children:p.jsx(Ip,{basename:s,children:p.jsx($w,{user:n,checking:t})})})}Vo.createRoot(document.getElementById("root")).render(p.jsx(qw,{}));
