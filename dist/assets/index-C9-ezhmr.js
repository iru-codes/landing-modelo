(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))a(h);new MutationObserver(h=>{for(const f of h)if(f.type==="childList")for(const y of f.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&a(y)}).observe(document,{childList:!0,subtree:!0});function r(h){const f={};return h.integrity&&(f.integrity=h.integrity),h.referrerPolicy&&(f.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?f.credentials="include":h.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function a(h){if(h.ep)return;h.ep=!0;const f=r(h);fetch(h.href,f)}})();var Ti={};/**
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
 */const Qi=function(n){const e=[];let r=0;for(let a=0;a<n.length;a++){let h=n.charCodeAt(a);h<128?e[r++]=h:h<2048?(e[r++]=h>>6|192,e[r++]=h&63|128):(h&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(h=65536+((h&1023)<<10)+(n.charCodeAt(++a)&1023),e[r++]=h>>18|240,e[r++]=h>>12&63|128,e[r++]=h>>6&63|128,e[r++]=h&63|128):(e[r++]=h>>12|224,e[r++]=h>>6&63|128,e[r++]=h&63|128)}return e},Ar=function(n){const e=[];let r=0,a=0;for(;r<n.length;){const h=n[r++];if(h<128)e[a++]=String.fromCharCode(h);else if(h>191&&h<224){const f=n[r++];e[a++]=String.fromCharCode((h&31)<<6|f&63)}else if(h>239&&h<365){const f=n[r++],y=n[r++],w=n[r++],I=((h&7)<<18|(f&63)<<12|(y&63)<<6|w&63)-65536;e[a++]=String.fromCharCode(55296+(I>>10)),e[a++]=String.fromCharCode(56320+(I&1023))}else{const f=n[r++],y=n[r++];e[a++]=String.fromCharCode((h&15)<<12|(f&63)<<6|y&63)}}return e.join("")},ts={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let h=0;h<n.length;h+=3){const f=n[h],y=h+1<n.length,w=y?n[h+1]:0,I=h+2<n.length,_=I?n[h+2]:0,k=f>>2,O=(f&3)<<4|w>>4;let C=(w&15)<<2|_>>6,N=_&63;I||(N=64,y||(C=64)),a.push(r[k],r[O],r[C],r[N])}return a.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ar(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let h=0;h<n.length;){const f=r[n.charAt(h++)],w=h<n.length?r[n.charAt(h)]:0;++h;const _=h<n.length?r[n.charAt(h)]:64;++h;const O=h<n.length?r[n.charAt(h)]:64;if(++h,f==null||w==null||_==null||O==null)throw new br;const C=f<<2|w>>4;if(a.push(C),_!==64){const N=w<<4&240|_>>2;if(a.push(N),O!==64){const S=_<<6&192|O;a.push(S)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sr=function(n){const e=Qi(n);return ts.encodeByteArray(e,!0)},ye=function(n){return Sr(n).replace(/\./g,"")},Dr=function(n){try{return ts.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rr=()=>Cr().__FIREBASE_DEFAULTS__,Pr=()=>{if(typeof process>"u"||typeof Ti>"u")return;const n=Ti.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Or=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Dr(n[1]);return e&&JSON.parse(e)},es=()=>{try{return Rr()||Pr()||Or()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kr=n=>{var e,r;return(r=(e=es())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[n]},Nr=n=>{const e=kr(n);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),a]:[e.substring(0,r),a]},ns=()=>{var n;return(n=es())===null||n===void 0?void 0:n.config};/**
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
 */class Lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,a))}}}/**
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
 */function Mr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=e||"demo-project",h=n.iat||0,f=n.sub||n.user_id;if(!f)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const y=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:h,exp:h+3600,auth_time:h,sub:f,user_id:f,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ye(JSON.stringify(r)),ye(JSON.stringify(y)),""].join(".")}function jr(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function is(){try{return typeof indexedDB=="object"}catch{return!1}}function ss(){return new Promise((n,e)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(a);h.onsuccess=()=>{h.result.close(),r||self.indexedDB.deleteDatabase(a),n(!0)},h.onupgradeneeded=()=>{r=!1},h.onerror=()=>{var f;e(((f=h.error)===null||f===void 0?void 0:f.message)||"")}}catch(r){e(r)}})}function Fr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const xr="FirebaseError";class gt extends Error{constructor(e,r,a){super(r),this.code=e,this.customData=a,this.name=xr,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_e.prototype.create)}}class _e{constructor(e,r,a){this.service=e,this.serviceName=r,this.errors=a}create(e,...r){const a=r[0]||{},h=`${this.service}/${e}`,f=this.errors[e],y=f?Br(f,a):"Error",w=`${this.serviceName}: ${y} (${h}).`;return new gt(h,w,a)}}function Br(n,e){return n.replace(Ur,(r,a)=>{const h=e[a];return h!=null?String(h):`<${a}?>`})}const Ur=/\{\$([^}]+)}/g;function ve(n,e){if(n===e)return!0;const r=Object.keys(n),a=Object.keys(e);for(const h of r){if(!a.includes(h))return!1;const f=n[h],y=e[h];if(_i(f)&&_i(y)){if(!ve(f,y))return!1}else if(f!==y)return!1}for(const h of a)if(!r.includes(h))return!1;return!0}function _i(n){return n!==null&&typeof n=="object"}/**
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
 */const $r=1e3,Hr=2,Vr=4*60*60*1e3,zr=.5;function Ai(n,e=$r,r=Hr){const a=e*Math.pow(r,n),h=Math.round(zr*a*(Math.random()-.5)*2);return Math.min(Vr,a+h)}/**
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
 */function rs(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,r,a){this.name=e,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wt="[DEFAULT]";/**
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
 */class Gr{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const a=new Lr;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:r});h&&a.resolve(h)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),h=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(f){if(h)return null;throw f}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kr(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(r);try{const f=this.getOrInitializeService({instanceIdentifier:h});a.resolve(f)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[f,y]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(f);a===w&&y.resolve(h)}return h}onInit(e,r){var a;const h=this.normalizeInstanceIdentifier(r),f=(a=this.onInitCallbacks.get(h))!==null&&a!==void 0?a:new Set;f.add(e),this.onInitCallbacks.set(h,f);const y=this.instances.get(h);return y&&e(y,h),()=>{f.delete(e)}}invokeOnInitCallbacks(e,r){const a=this.onInitCallbacks.get(r);if(a)for(const h of a)try{h(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:qr(e),options:r}),this.instances.set(e,a),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qr(n){return n===wt?void 0:n}function Kr(n){return n.instantiationMode==="EAGER"}/**
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
 */class Wr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Gr(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Xr={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Jr=D.INFO,Yr={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Zr=(n,e,...r)=>{if(e<n.logLevel)return;const a=new Date().toISOString(),h=Yr[e];if(h)console[h](`[${a}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pn{constructor(e){this.name=e,this._logLevel=Jr,this._logHandler=Zr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Qr=(n,e)=>e.some(r=>n instanceof r);let bi,Si;function to(){return bi||(bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eo(){return Si||(Si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const os=new WeakMap,an=new WeakMap,as=new WeakMap,Ze=new WeakMap,gn=new WeakMap;function no(n){const e=new Promise((r,a)=>{const h=()=>{n.removeEventListener("success",f),n.removeEventListener("error",y)},f=()=>{r(ft(n.result)),h()},y=()=>{a(n.error),h()};n.addEventListener("success",f),n.addEventListener("error",y)});return e.then(r=>{r instanceof IDBCursor&&os.set(r,n)}).catch(()=>{}),gn.set(e,n),e}function io(n){if(an.has(n))return;const e=new Promise((r,a)=>{const h=()=>{n.removeEventListener("complete",f),n.removeEventListener("error",y),n.removeEventListener("abort",y)},f=()=>{r(),h()},y=()=>{a(n.error||new DOMException("AbortError","AbortError")),h()};n.addEventListener("complete",f),n.addEventListener("error",y),n.addEventListener("abort",y)});an.set(n,e)}let hn={get(n,e,r){if(n instanceof IDBTransaction){if(e==="done")return an.get(n);if(e==="objectStoreNames")return n.objectStoreNames||as.get(n);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ft(n[e])},set(n,e,r){return n[e]=r,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function so(n){hn=n(hn)}function ro(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const a=n.call(Qe(this),e,...r);return as.set(a,e.sort?e.sort():[e]),ft(a)}:eo().includes(n)?function(...e){return n.apply(Qe(this),e),ft(os.get(this))}:function(...e){return ft(n.apply(Qe(this),e))}}function oo(n){return typeof n=="function"?ro(n):(n instanceof IDBTransaction&&io(n),Qr(n,to())?new Proxy(n,hn):n)}function ft(n){if(n instanceof IDBRequest)return no(n);if(Ze.has(n))return Ze.get(n);const e=oo(n);return e!==n&&(Ze.set(n,e),gn.set(e,n)),e}const Qe=n=>gn.get(n);function hs(n,e,{blocked:r,upgrade:a,blocking:h,terminated:f}={}){const y=indexedDB.open(n,e),w=ft(y);return a&&y.addEventListener("upgradeneeded",I=>{a(ft(y.result),I.oldVersion,I.newVersion,ft(y.transaction),I)}),r&&y.addEventListener("blocked",I=>r(I.oldVersion,I.newVersion,I)),w.then(I=>{f&&I.addEventListener("close",()=>f()),h&&I.addEventListener("versionchange",_=>h(_.oldVersion,_.newVersion,_))}).catch(()=>{}),w}const ao=["get","getKey","getAll","getAllKeys","count"],ho=["put","add","delete","clear"],tn=new Map;function Di(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(tn.get(e))return tn.get(e);const r=e.replace(/FromIndex$/,""),a=e!==r,h=ho.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(h||ao.includes(r)))return;const f=async function(y,...w){const I=this.transaction(y,h?"readwrite":"readonly");let _=I.store;return a&&(_=_.index(w.shift())),(await Promise.all([_[r](...w),h&&I.done]))[0]};return tn.set(e,f),f}so(n=>({...n,get:(e,r,a)=>Di(e,r)||n.get(e,r,a),has:(e,r)=>!!Di(e,r)||n.has(e,r)}));/**
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
 */class lo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(co(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function co(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ln="@firebase/app",Ci="0.10.18";/**
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
 */const ot=new pn("@firebase/app"),uo="@firebase/app-compat",fo="@firebase/analytics-compat",po="@firebase/analytics",go="@firebase/app-check-compat",mo="@firebase/app-check",yo="@firebase/auth",vo="@firebase/auth-compat",wo="@firebase/database",Eo="@firebase/data-connect",Io="@firebase/database-compat",To="@firebase/functions",_o="@firebase/functions-compat",Ao="@firebase/installations",bo="@firebase/installations-compat",So="@firebase/messaging",Do="@firebase/messaging-compat",Co="@firebase/performance",Ro="@firebase/performance-compat",Po="@firebase/remote-config",Oo="@firebase/remote-config-compat",ko="@firebase/storage",No="@firebase/storage-compat",Lo="@firebase/firestore",Mo="@firebase/vertexai",jo="@firebase/firestore-compat",Fo="firebase",xo="11.2.0";/**
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
 */const cn="[DEFAULT]",Bo={[ln]:"fire-core",[uo]:"fire-core-compat",[po]:"fire-analytics",[fo]:"fire-analytics-compat",[mo]:"fire-app-check",[go]:"fire-app-check-compat",[yo]:"fire-auth",[vo]:"fire-auth-compat",[wo]:"fire-rtdb",[Eo]:"fire-data-connect",[Io]:"fire-rtdb-compat",[To]:"fire-fn",[_o]:"fire-fn-compat",[Ao]:"fire-iid",[bo]:"fire-iid-compat",[So]:"fire-fcm",[Do]:"fire-fcm-compat",[Co]:"fire-perf",[Ro]:"fire-perf-compat",[Po]:"fire-rc",[Oo]:"fire-rc-compat",[ko]:"fire-gcs",[No]:"fire-gcs-compat",[Lo]:"fire-fst",[jo]:"fire-fst-compat",[Mo]:"fire-vertex","fire-js":"fire-js",[Fo]:"fire-js-all"};/**
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
 */const we=new Map,Uo=new Map,un=new Map;function Ri(n,e){try{n.container.addComponent(e)}catch(r){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,r)}}function pt(n){const e=n.name;if(un.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;un.set(e,n);for(const r of we.values())Ri(r,n);for(const r of Uo.values())Ri(r,n);return!0}function Yt(n,e){const r=n.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),n.container.getProvider(e)}function $o(n){return n.settings!==void 0}/**
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
 */const Ho={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dt=new _e("app","Firebase",Ho);/**
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
 */class Vo{constructor(e,r,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
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
 */const zo=xo;function ls(n,e={}){let r=n;typeof e!="object"&&(e={name:e});const a=Object.assign({name:cn,automaticDataCollectionEnabled:!1},e),h=a.name;if(typeof h!="string"||!h)throw dt.create("bad-app-name",{appName:String(h)});if(r||(r=ns()),!r)throw dt.create("no-options");const f=we.get(h);if(f){if(ve(r,f.options)&&ve(a,f.config))return f;throw dt.create("duplicate-app",{appName:h})}const y=new Wr(h);for(const I of un.values())y.addComponent(I);const w=new Vo(r,a,y);return we.set(h,w),w}function cs(n=cn){const e=we.get(n);if(!e&&n===cn&&ns())return ls();if(!e)throw dt.create("no-app",{appName:n});return e}function et(n,e,r){var a;let h=(a=Bo[n])!==null&&a!==void 0?a:n;r&&(h+=`-${r}`);const f=h.match(/\s|\//),y=e.match(/\s|\//);if(f||y){const w=[`Unable to register library "${h}" with version "${e}":`];f&&w.push(`library name "${h}" contains illegal characters (whitespace or "/")`),f&&y&&w.push("and"),y&&w.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(w.join(" "));return}pt(new rt(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
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
 */const Go="firebase-heartbeat-database",qo=1,Jt="firebase-heartbeat-store";let en=null;function us(){return en||(en=hs(Go,qo,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jt)}catch(r){console.warn(r)}}}}).catch(n=>{throw dt.create("idb-open",{originalErrorMessage:n.message})})),en}async function Ko(n){try{const r=(await us()).transaction(Jt),a=await r.objectStore(Jt).get(fs(n));return await r.done,a}catch(e){if(e instanceof gt)ot.warn(e.message);else{const r=dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ot.warn(r.message)}}}async function Pi(n,e){try{const a=(await us()).transaction(Jt,"readwrite");await a.objectStore(Jt).put(e,fs(n)),await a.done}catch(r){if(r instanceof gt)ot.warn(r.message);else{const a=dt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ot.warn(a.message)}}}function fs(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wo=1024,Xo=30*24*60*60*1e3;class Jo{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Zo(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,r;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),f=Oi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(y=>y.date===f)?void 0:(this._heartbeatsCache.heartbeats.push({date:f,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(y=>{const w=new Date(y.date).valueOf();return Date.now()-w<=Xo}),this._storage.overwrite(this._heartbeatsCache))}catch(a){ot.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Oi(),{heartbeatsToSend:a,unsentEntries:h}=Yo(this._heartbeatsCache.heartbeats),f=ye(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}catch(r){return ot.warn(r),""}}}function Oi(){return new Date().toISOString().substring(0,10)}function Yo(n,e=Wo){const r=[];let a=n.slice();for(const h of n){const f=r.find(y=>y.agent===h.agent);if(f){if(f.dates.push(h.date),ki(r)>e){f.dates.pop();break}}else if(r.push({agent:h.agent,dates:[h.date]}),ki(r)>e){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class Zo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return is()?ss().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Ko(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const h=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const h=await this.read();return Pi(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function ki(n){return ye(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Qo(n){pt(new rt("platform-logger",e=>new lo(e),"PRIVATE")),pt(new rt("heartbeat",e=>new Jo(e),"PRIVATE")),et(ln,Ci,n),et(ln,Ci,"esm2017"),et("fire-js","")}Qo("");var ta="firebase",ea="11.3.1";/**
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
 */et(ta,ea,"app");const ds="@firebase/installations",mn="0.6.12";/**
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
 */const ps=1e4,gs=`w:${mn}`,ms="FIS_v2",na="https://firebaseinstallations.googleapis.com/v1",ia=60*60*1e3,sa="installations",ra="Installations";/**
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
 */const oa={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},It=new _e(sa,ra,oa);function ys(n){return n instanceof gt&&n.code.includes("request-failed")}/**
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
 */function vs({projectId:n}){return`${na}/projects/${n}/installations`}function ws(n){return{token:n.token,requestStatus:2,expiresIn:ha(n.expiresIn),creationTime:Date.now()}}async function Es(n,e){const a=(await e.json()).error;return It.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function Is({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function aa(n,{refreshToken:e}){const r=Is(n);return r.append("Authorization",la(e)),r}async function Ts(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ha(n){return Number(n.replace("s","000"))}function la(n){return`${ms} ${n}`}/**
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
 */async function ca({appConfig:n,heartbeatServiceProvider:e},{fid:r}){const a=vs(n),h=Is(n),f=e.getImmediate({optional:!0});if(f){const _=await f.getHeartbeatsHeader();_&&h.append("x-firebase-client",_)}const y={fid:r,authVersion:ms,appId:n.appId,sdkVersion:gs},w={method:"POST",headers:h,body:JSON.stringify(y)},I=await Ts(()=>fetch(a,w));if(I.ok){const _=await I.json();return{fid:_.fid||r,registrationStatus:2,refreshToken:_.refreshToken,authToken:ws(_.authToken)}}else throw await Es("Create Installation",I)}/**
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
 */function _s(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function ua(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fa=/^[cdef][\w-]{21}$/,fn="";function da(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const r=pa(n);return fa.test(r)?r:fn}catch{return fn}}function pa(n){return ua(n).substr(0,22)}/**
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
 */function Ae(n){return`${n.appName}!${n.appId}`}/**
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
 */const As=new Map;function bs(n,e){const r=Ae(n);Ss(r,e),ga(r,e)}function Ss(n,e){const r=As.get(n);if(r)for(const a of r)a(e)}function ga(n,e){const r=ma();r&&r.postMessage({key:n,fid:e}),ya()}let Et=null;function ma(){return!Et&&"BroadcastChannel"in self&&(Et=new BroadcastChannel("[Firebase] FID Change"),Et.onmessage=n=>{Ss(n.data.key,n.data.fid)}),Et}function ya(){As.size===0&&Et&&(Et.close(),Et=null)}/**
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
 */const va="firebase-installations-database",wa=1,Tt="firebase-installations-store";let nn=null;function yn(){return nn||(nn=hs(va,wa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Tt)}}})),nn}async function Ee(n,e){const r=Ae(n),h=(await yn()).transaction(Tt,"readwrite"),f=h.objectStore(Tt),y=await f.get(r);return await f.put(e,r),await h.done,(!y||y.fid!==e.fid)&&bs(n,e.fid),e}async function Ds(n){const e=Ae(n),a=(await yn()).transaction(Tt,"readwrite");await a.objectStore(Tt).delete(e),await a.done}async function be(n,e){const r=Ae(n),h=(await yn()).transaction(Tt,"readwrite"),f=h.objectStore(Tt),y=await f.get(r),w=e(y);return w===void 0?await f.delete(r):await f.put(w,r),await h.done,w&&(!y||y.fid!==w.fid)&&bs(n,w.fid),w}/**
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
 */async function vn(n){let e;const r=await be(n.appConfig,a=>{const h=Ea(a),f=Ia(n,h);return e=f.registrationPromise,f.installationEntry});return r.fid===fn?{installationEntry:await e}:{installationEntry:r,registrationPromise:e}}function Ea(n){const e=n||{fid:da(),registrationStatus:0};return Cs(e)}function Ia(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const h=Promise.reject(It.create("app-offline"));return{installationEntry:e,registrationPromise:h}}const r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=Ta(n,r);return{installationEntry:r,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_a(n)}:{installationEntry:e}}async function Ta(n,e){try{const r=await ca(n,e);return Ee(n.appConfig,r)}catch(r){throw ys(r)&&r.customData.serverCode===409?await Ds(n.appConfig):await Ee(n.appConfig,{fid:e.fid,registrationStatus:0}),r}}async function _a(n){let e=await Ni(n.appConfig);for(;e.registrationStatus===1;)await _s(100),e=await Ni(n.appConfig);if(e.registrationStatus===0){const{installationEntry:r,registrationPromise:a}=await vn(n);return a||r}return e}function Ni(n){return be(n,e=>{if(!e)throw It.create("installation-not-found");return Cs(e)})}function Cs(n){return Aa(n)?{fid:n.fid,registrationStatus:0}:n}function Aa(n){return n.registrationStatus===1&&n.registrationTime+ps<Date.now()}/**
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
 */async function ba({appConfig:n,heartbeatServiceProvider:e},r){const a=Sa(n,r),h=aa(n,r),f=e.getImmediate({optional:!0});if(f){const _=await f.getHeartbeatsHeader();_&&h.append("x-firebase-client",_)}const y={installation:{sdkVersion:gs,appId:n.appId}},w={method:"POST",headers:h,body:JSON.stringify(y)},I=await Ts(()=>fetch(a,w));if(I.ok){const _=await I.json();return ws(_)}else throw await Es("Generate Auth Token",I)}function Sa(n,{fid:e}){return`${vs(n)}/${e}/authTokens:generate`}/**
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
 */async function wn(n,e=!1){let r;const a=await be(n.appConfig,f=>{if(!Rs(f))throw It.create("not-registered");const y=f.authToken;if(!e&&Ra(y))return f;if(y.requestStatus===1)return r=Da(n,e),f;{if(!navigator.onLine)throw It.create("app-offline");const w=Oa(f);return r=Ca(n,w),w}});return r?await r:a.authToken}async function Da(n,e){let r=await Li(n.appConfig);for(;r.authToken.requestStatus===1;)await _s(100),r=await Li(n.appConfig);const a=r.authToken;return a.requestStatus===0?wn(n,e):a}function Li(n){return be(n,e=>{if(!Rs(e))throw It.create("not-registered");const r=e.authToken;return ka(r)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ca(n,e){try{const r=await ba(n,e),a=Object.assign(Object.assign({},e),{authToken:r});return await Ee(n.appConfig,a),r}catch(r){if(ys(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Ds(n.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ee(n.appConfig,a)}throw r}}function Rs(n){return n!==void 0&&n.registrationStatus===2}function Ra(n){return n.requestStatus===2&&!Pa(n)}function Pa(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ia}function Oa(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ka(n){return n.requestStatus===1&&n.requestTime+ps<Date.now()}/**
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
 */async function Na(n){const e=n,{installationEntry:r,registrationPromise:a}=await vn(e);return a?a.catch(console.error):wn(e).catch(console.error),r.fid}/**
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
 */async function La(n,e=!1){const r=n;return await Ma(r),(await wn(r,e)).token}async function Ma(n){const{registrationPromise:e}=await vn(n);e&&await e}/**
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
 */function ja(n){if(!n||!n.options)throw sn("App Configuration");if(!n.name)throw sn("App Name");const e=["projectId","apiKey","appId"];for(const r of e)if(!n.options[r])throw sn(r);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function sn(n){return It.create("missing-app-config-values",{valueName:n})}/**
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
 */const Ps="installations",Fa="installations-internal",xa=n=>{const e=n.getProvider("app").getImmediate(),r=ja(e),a=Yt(e,"heartbeat");return{app:e,appConfig:r,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},Ba=n=>{const e=n.getProvider("app").getImmediate(),r=Yt(e,Ps).getImmediate();return{getId:()=>Na(r),getToken:h=>La(r,h)}};function Ua(){pt(new rt(Ps,xa,"PUBLIC")),pt(new rt(Fa,Ba,"PRIVATE"))}Ua();et(ds,mn);et(ds,mn,"esm2017");/**
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
 */const Ie="analytics",$a="firebase_id",Ha="origin",Va=60*1e3,za="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",En="https://www.googletagmanager.com/gtag/js";/**
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
 */const K=new pn("@firebase/analytics");/**
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
 */const Ga={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},W=new _e("analytics","Analytics",Ga);/**
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
 */function qa(n){if(!n.startsWith(En)){const e=W.create("invalid-gtag-resource",{gtagURL:n});return K.warn(e.message),""}return n}function Os(n){return Promise.all(n.map(e=>e.catch(r=>r)))}function Ka(n,e){let r;return window.trustedTypes&&(r=window.trustedTypes.createPolicy(n,e)),r}function Wa(n,e){const r=Ka("firebase-js-sdk-policy",{createScriptURL:qa}),a=document.createElement("script"),h=`${En}?l=${n}&id=${e}`;a.src=r?r==null?void 0:r.createScriptURL(h):h,a.async=!0,document.head.appendChild(a)}function Xa(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Ja(n,e,r,a,h,f){const y=a[h];try{if(y)await e[y];else{const I=(await Os(r)).find(_=>_.measurementId===h);I&&await e[I.appId]}}catch(w){K.error(w)}n("config",h,f)}async function Ya(n,e,r,a,h){try{let f=[];if(h&&h.send_to){let y=h.send_to;Array.isArray(y)||(y=[y]);const w=await Os(r);for(const I of y){const _=w.find(O=>O.measurementId===I),k=_&&e[_.appId];if(k)f.push(k);else{f=[];break}}}f.length===0&&(f=Object.values(e)),await Promise.all(f),n("event",a,h||{})}catch(f){K.error(f)}}function Za(n,e,r,a){async function h(f,...y){try{if(f==="event"){const[w,I]=y;await Ya(n,e,r,w,I)}else if(f==="config"){const[w,I]=y;await Ja(n,e,r,a,w,I)}else if(f==="consent"){const[w,I]=y;n("consent",w,I)}else if(f==="get"){const[w,I,_]=y;n("get",w,I,_)}else if(f==="set"){const[w]=y;n("set",w)}else n(f,...y)}catch(w){K.error(w)}}return h}function Qa(n,e,r,a,h){let f=function(...y){window[a].push(arguments)};return window[h]&&typeof window[h]=="function"&&(f=window[h]),window[h]=Za(f,n,e,r),{gtagCore:f,wrappedGtag:window[h]}}function th(n){const e=window.document.getElementsByTagName("script");for(const r of Object.values(e))if(r.src&&r.src.includes(En)&&r.src.includes(n))return r;return null}/**
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
 */const eh=30,nh=1e3;class ih{constructor(e={},r=nh){this.throttleMetadata=e,this.intervalMillis=r}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,r){this.throttleMetadata[e]=r}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ks=new ih;function sh(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function rh(n){var e;const{appId:r,apiKey:a}=n,h={method:"GET",headers:sh(a)},f=za.replace("{app-id}",r),y=await fetch(f,h);if(y.status!==200&&y.status!==304){let w="";try{const I=await y.json();!((e=I.error)===null||e===void 0)&&e.message&&(w=I.error.message)}catch{}throw W.create("config-fetch-failed",{httpStatus:y.status,responseMessage:w})}return y.json()}async function oh(n,e=ks,r){const{appId:a,apiKey:h,measurementId:f}=n.options;if(!a)throw W.create("no-app-id");if(!h){if(f)return{measurementId:f,appId:a};throw W.create("no-api-key")}const y=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},w=new lh;return setTimeout(async()=>{w.abort()},Va),Ns({appId:a,apiKey:h,measurementId:f},y,w,e)}async function Ns(n,{throttleEndTimeMillis:e,backoffCount:r},a,h=ks){var f;const{appId:y,measurementId:w}=n;try{await ah(a,e)}catch(I){if(w)return K.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${I==null?void 0:I.message}]`),{appId:y,measurementId:w};throw I}try{const I=await rh(n);return h.deleteThrottleMetadata(y),I}catch(I){const _=I;if(!hh(_)){if(h.deleteThrottleMetadata(y),w)return K.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${w} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:y,measurementId:w};throw I}const k=Number((f=_==null?void 0:_.customData)===null||f===void 0?void 0:f.httpStatus)===503?Ai(r,h.intervalMillis,eh):Ai(r,h.intervalMillis),O={throttleEndTimeMillis:Date.now()+k,backoffCount:r+1};return h.setThrottleMetadata(y,O),K.debug(`Calling attemptFetch again in ${k} millis`),Ns(n,O,a,h)}}function ah(n,e){return new Promise((r,a)=>{const h=Math.max(e-Date.now(),0),f=setTimeout(r,h);n.addEventListener(()=>{clearTimeout(f),a(W.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function hh(n){if(!(n instanceof gt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class lh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ch(n,e,r,a,h){if(h&&h.global){n("event",r,a);return}else{const f=await e,y=Object.assign(Object.assign({},a),{send_to:f});n("event",r,y)}}/**
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
 */async function uh(){if(is())try{await ss()}catch(n){return K.warn(W.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return K.warn(W.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fh(n,e,r,a,h,f,y){var w;const I=oh(n);I.then(N=>{r[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&K.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>K.error(N)),e.push(I);const _=uh().then(N=>{if(N)return a.getId()}),[k,O]=await Promise.all([I,_]);th(f)||Wa(f,k.measurementId),h("js",new Date);const C=(w=y==null?void 0:y.config)!==null&&w!==void 0?w:{};return C[Ha]="firebase",C.update=!0,O!=null&&(C[$a]=O),h("config",k.measurementId,C),k.measurementId}/**
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
 */class dh{constructor(e){this.app=e}_delete(){return delete Kt[this.app.options.appId],Promise.resolve()}}let Kt={},Mi=[];const ji={};let rn="dataLayer",ph="gtag",Fi,Ls,xi=!1;function gh(){const n=[];if(jr()&&n.push("This is a browser extension environment."),Fr()||n.push("Cookies are not available."),n.length>0){const e=n.map((a,h)=>`(${h+1}) ${a}`).join(" "),r=W.create("invalid-analytics-context",{errorInfo:e});K.warn(r.message)}}function mh(n,e,r){gh();const a=n.options.appId;if(!a)throw W.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)K.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw W.create("no-api-key");if(Kt[a]!=null)throw W.create("already-exists",{id:a});if(!xi){Xa(rn);const{wrappedGtag:f,gtagCore:y}=Qa(Kt,Mi,ji,rn,ph);Ls=f,Fi=y,xi=!0}return Kt[a]=fh(n,Mi,ji,e,Fi,rn,r),new dh(n)}function yh(n=cs()){n=rs(n);const e=Yt(n,Ie);return e.isInitialized()?e.getImmediate():vh(n)}function vh(n,e={}){const r=Yt(n,Ie);if(r.isInitialized()){const h=r.getImmediate();if(ve(e,r.getOptions()))return h;throw W.create("already-initialized")}return r.initialize({options:e})}function wh(n,e,r,a){n=rs(n),ch(Ls,Kt[n.app.options.appId],e,r,a).catch(h=>K.error(h))}const Bi="@firebase/analytics",Ui="0.10.11";function Eh(){pt(new rt(Ie,(e,{options:r})=>{const a=e.getProvider("app").getImmediate(),h=e.getProvider("installations-internal").getImmediate();return mh(a,h,r)},"PUBLIC")),pt(new rt("analytics-internal",n,"PRIVATE")),et(Bi,Ui),et(Bi,Ui,"esm2017");function n(e){try{const r=e.getProvider(Ie).getImmediate();return{logEvent:(a,h,f)=>wh(r,a,h,f)}}catch(r){throw W.create("interop-component-reg-failed",{reason:r})}}}Eh();var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ms;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(g,l){function u(){}u.prototype=l.prototype,g.D=l.prototype,g.prototype=new u,g.prototype.constructor=g,g.C=function(d,p,v){for(var c=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)c[nt-2]=arguments[nt];return l.prototype[p].apply(d,c)}}function r(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,r),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(g,l,u){u||(u=0);var d=Array(16);if(typeof l=="string")for(var p=0;16>p;++p)d[p]=l.charCodeAt(u++)|l.charCodeAt(u++)<<8|l.charCodeAt(u++)<<16|l.charCodeAt(u++)<<24;else for(p=0;16>p;++p)d[p]=l[u++]|l[u++]<<8|l[u++]<<16|l[u++]<<24;l=g.g[0],u=g.g[1],p=g.g[2];var v=g.g[3],c=l+(v^u&(p^v))+d[0]+3614090360&4294967295;l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[1]+3905402710&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[2]+606105819&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[3]+3250441966&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(v^u&(p^v))+d[4]+4118548399&4294967295,l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[5]+1200080426&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[6]+2821735955&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[7]+4249261313&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(v^u&(p^v))+d[8]+1770035416&4294967295,l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[9]+2336552879&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[10]+4294925233&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[11]+2304563134&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(v^u&(p^v))+d[12]+1804603682&4294967295,l=u+(c<<7&4294967295|c>>>25),c=v+(p^l&(u^p))+d[13]+4254626195&4294967295,v=l+(c<<12&4294967295|c>>>20),c=p+(u^v&(l^u))+d[14]+2792965006&4294967295,p=v+(c<<17&4294967295|c>>>15),c=u+(l^p&(v^l))+d[15]+1236535329&4294967295,u=p+(c<<22&4294967295|c>>>10),c=l+(p^v&(u^p))+d[1]+4129170786&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[6]+3225465664&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[11]+643717713&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[0]+3921069994&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^v&(u^p))+d[5]+3593408605&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[10]+38016083&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[15]+3634488961&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[4]+3889429448&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^v&(u^p))+d[9]+568446438&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[14]+3275163606&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[3]+4107603335&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[8]+1163531501&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(p^v&(u^p))+d[13]+2850285829&4294967295,l=u+(c<<5&4294967295|c>>>27),c=v+(u^p&(l^u))+d[2]+4243563512&4294967295,v=l+(c<<9&4294967295|c>>>23),c=p+(l^u&(v^l))+d[7]+1735328473&4294967295,p=v+(c<<14&4294967295|c>>>18),c=u+(v^l&(p^v))+d[12]+2368359562&4294967295,u=p+(c<<20&4294967295|c>>>12),c=l+(u^p^v)+d[5]+4294588738&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[8]+2272392833&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[11]+1839030562&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[14]+4259657740&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^v)+d[1]+2763975236&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[4]+1272893353&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[7]+4139469664&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[10]+3200236656&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^v)+d[13]+681279174&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[0]+3936430074&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[3]+3572445317&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[6]+76029189&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(u^p^v)+d[9]+3654602809&4294967295,l=u+(c<<4&4294967295|c>>>28),c=v+(l^u^p)+d[12]+3873151461&4294967295,v=l+(c<<11&4294967295|c>>>21),c=p+(v^l^u)+d[15]+530742520&4294967295,p=v+(c<<16&4294967295|c>>>16),c=u+(p^v^l)+d[2]+3299628645&4294967295,u=p+(c<<23&4294967295|c>>>9),c=l+(p^(u|~v))+d[0]+4096336452&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[7]+1126891415&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[14]+2878612391&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[5]+4237533241&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~v))+d[12]+1700485571&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[3]+2399980690&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[10]+4293915773&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[1]+2240044497&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~v))+d[8]+1873313359&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[15]+4264355552&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[6]+2734768916&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[13]+1309151649&4294967295,u=p+(c<<21&4294967295|c>>>11),c=l+(p^(u|~v))+d[4]+4149444226&4294967295,l=u+(c<<6&4294967295|c>>>26),c=v+(u^(l|~p))+d[11]+3174756917&4294967295,v=l+(c<<10&4294967295|c>>>22),c=p+(l^(v|~u))+d[2]+718787259&4294967295,p=v+(c<<15&4294967295|c>>>17),c=u+(v^(p|~l))+d[9]+3951481745&4294967295,g.g[0]=g.g[0]+l&4294967295,g.g[1]=g.g[1]+(p+(c<<21&4294967295|c>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+v&4294967295}a.prototype.u=function(g,l){l===void 0&&(l=g.length);for(var u=l-this.blockSize,d=this.B,p=this.h,v=0;v<l;){if(p==0)for(;v<=u;)h(this,g,v),v+=this.blockSize;if(typeof g=="string"){for(;v<l;)if(d[p++]=g.charCodeAt(v++),p==this.blockSize){h(this,d),p=0;break}}else for(;v<l;)if(d[p++]=g[v++],p==this.blockSize){h(this,d),p=0;break}}this.h=p,this.o+=l},a.prototype.v=function(){var g=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);g[0]=128;for(var l=1;l<g.length-8;++l)g[l]=0;var u=8*this.o;for(l=g.length-8;l<g.length;++l)g[l]=u&255,u/=256;for(this.u(g),g=Array(16),l=u=0;4>l;++l)for(var d=0;32>d;d+=8)g[u++]=this.g[l]>>>d&255;return g};function f(g,l){var u=w;return Object.prototype.hasOwnProperty.call(u,g)?u[g]:u[g]=l(g)}function y(g,l){this.h=l;for(var u=[],d=!0,p=g.length-1;0<=p;p--){var v=g[p]|0;d&&v==l||(u[p]=v,d=!1)}this.g=u}var w={};function I(g){return-128<=g&&128>g?f(g,function(l){return new y([l|0],0>l?-1:0)}):new y([g|0],0>g?-1:0)}function _(g){if(isNaN(g)||!isFinite(g))return O;if(0>g)return M(_(-g));for(var l=[],u=1,d=0;g>=u;d++)l[d]=g/u|0,u*=4294967296;return new y(l,0)}function k(g,l){if(g.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(g.charAt(0)=="-")return M(k(g.substring(1),l));if(0<=g.indexOf("-"))throw Error('number format error: interior "-" character');for(var u=_(Math.pow(l,8)),d=O,p=0;p<g.length;p+=8){var v=Math.min(8,g.length-p),c=parseInt(g.substring(p,p+v),l);8>v?(v=_(Math.pow(l,v)),d=d.j(v).add(_(c))):(d=d.j(u),d=d.add(_(c)))}return d}var O=I(0),C=I(1),N=I(16777216);n=y.prototype,n.m=function(){if(F(this))return-M(this).m();for(var g=0,l=1,u=0;u<this.g.length;u++){var d=this.i(u);g+=(0<=d?d:4294967296+d)*l,l*=4294967296}return g},n.toString=function(g){if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S(this))return"0";if(F(this))return"-"+M(this).toString(g);for(var l=_(Math.pow(g,6)),u=this,d="";;){var p=at(u,l).g;u=_t(u,p.j(l));var v=((0<u.g.length?u.g[0]:u.h)>>>0).toString(g);if(u=p,S(u))return v+d;for(;6>v.length;)v="0"+v;d=v+d}},n.i=function(g){return 0>g?0:g<this.g.length?this.g[g]:this.h};function S(g){if(g.h!=0)return!1;for(var l=0;l<g.g.length;l++)if(g.g[l]!=0)return!1;return!0}function F(g){return g.h==-1}n.l=function(g){return g=_t(this,g),F(g)?-1:S(g)?0:1};function M(g){for(var l=g.g.length,u=[],d=0;d<l;d++)u[d]=~g.g[d];return new y(u,~g.h).add(C)}n.abs=function(){return F(this)?M(this):this},n.add=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],d=0,p=0;p<=l;p++){var v=d+(this.i(p)&65535)+(g.i(p)&65535),c=(v>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);d=c>>>16,v&=65535,c&=65535,u[p]=c<<16|v}return new y(u,u[u.length-1]&-2147483648?-1:0)};function _t(g,l){return g.add(M(l))}n.j=function(g){if(S(this)||S(g))return O;if(F(this))return F(g)?M(this).j(M(g)):M(M(this).j(g));if(F(g))return M(this.j(M(g)));if(0>this.l(N)&&0>g.l(N))return _(this.m()*g.m());for(var l=this.g.length+g.g.length,u=[],d=0;d<2*l;d++)u[d]=0;for(d=0;d<this.g.length;d++)for(var p=0;p<g.g.length;p++){var v=this.i(d)>>>16,c=this.i(d)&65535,nt=g.i(p)>>>16,Pt=g.i(p)&65535;u[2*d+2*p]+=c*Pt,Q(u,2*d+2*p),u[2*d+2*p+1]+=v*Pt,Q(u,2*d+2*p+1),u[2*d+2*p+1]+=c*nt,Q(u,2*d+2*p+1),u[2*d+2*p+2]+=v*nt,Q(u,2*d+2*p+2)}for(d=0;d<l;d++)u[d]=u[2*d+1]<<16|u[2*d];for(d=l;d<2*l;d++)u[d]=0;return new y(u,0)};function Q(g,l){for(;(g[l]&65535)!=g[l];)g[l+1]+=g[l]>>>16,g[l]&=65535,l++}function X(g,l){this.g=g,this.h=l}function at(g,l){if(S(l))throw Error("division by zero");if(S(g))return new X(O,O);if(F(g))return l=at(M(g),l),new X(M(l.g),M(l.h));if(F(l))return l=at(g,M(l)),new X(M(l.g),l.h);if(30<g.g.length){if(F(g)||F(l))throw Error("slowDivide_ only works with positive integers.");for(var u=C,d=l;0>=d.l(g);)u=Qt(u),d=Qt(d);var p=tt(u,1),v=tt(d,1);for(d=tt(d,2),u=tt(u,2);!S(d);){var c=v.add(d);0>=c.l(g)&&(p=p.add(u),v=c),d=tt(d,1),u=tt(u,1)}return l=_t(g,p.j(l)),new X(p,l)}for(p=O;0<=g.l(l);){for(u=Math.max(1,Math.floor(g.m()/l.m())),d=Math.ceil(Math.log(u)/Math.LN2),d=48>=d?1:Math.pow(2,d-48),v=_(u),c=v.j(l);F(c)||0<c.l(g);)u-=d,v=_(u),c=v.j(l);S(v)&&(v=C),p=p.add(v),g=_t(g,c)}return new X(p,g)}n.A=function(g){return at(this,g).h},n.and=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],d=0;d<l;d++)u[d]=this.i(d)&g.i(d);return new y(u,this.h&g.h)},n.or=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],d=0;d<l;d++)u[d]=this.i(d)|g.i(d);return new y(u,this.h|g.h)},n.xor=function(g){for(var l=Math.max(this.g.length,g.g.length),u=[],d=0;d<l;d++)u[d]=this.i(d)^g.i(d);return new y(u,this.h^g.h)};function Qt(g){for(var l=g.g.length+1,u=[],d=0;d<l;d++)u[d]=g.i(d)<<1|g.i(d-1)>>>31;return new y(u,g.h)}function tt(g,l){var u=l>>5;l%=32;for(var d=g.g.length-u,p=[],v=0;v<d;v++)p[v]=0<l?g.i(v+u)>>>l|g.i(v+u+1)<<32-l:g.i(v+u);return new y(p,g.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,y.prototype.add=y.prototype.add,y.prototype.multiply=y.prototype.j,y.prototype.modulo=y.prototype.A,y.prototype.compare=y.prototype.l,y.prototype.toNumber=y.prototype.m,y.prototype.toString=y.prototype.toString,y.prototype.getBits=y.prototype.i,y.fromNumber=_,y.fromString=k,Ms=y}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,s){return t==Array.prototype||t==Object.prototype||(t[i]=s.value),t};function r(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof me=="object"&&me];for(var i=0;i<t.length;++i){var s=t[i];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}var a=r(this);function h(t,i){if(i)t:{var s=a;t=t.split(".");for(var o=0;o<t.length-1;o++){var m=t[o];if(!(m in s))break t;s=s[m]}t=t[t.length-1],o=s[t],i=i(o),i!=o&&i!=null&&e(s,t,{configurable:!0,writable:!0,value:i})}}function f(t,i){t instanceof String&&(t+="");var s=0,o=!1,m={next:function(){if(!o&&s<t.length){var E=s++;return{value:i(E,t[E]),done:!1}}return o=!0,{done:!0,value:void 0}}};return m[Symbol.iterator]=function(){return m},m}h("Array.prototype.values",function(t){return t||function(){return f(this,function(i,s){return s})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var y=y||{},w=this||self;function I(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function _(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function k(t,i,s){return t.call.apply(t.bind,arguments)}function O(t,i,s){if(!t)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var m=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(m,o),t.apply(i,m)}}return function(){return t.apply(i,arguments)}}function C(t,i,s){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:O,C.apply(null,arguments)}function N(t,i){var s=Array.prototype.slice.call(arguments,1);return function(){var o=s.slice();return o.push.apply(o,arguments),t.apply(this,o)}}function S(t,i){function s(){}s.prototype=i.prototype,t.aa=i.prototype,t.prototype=new s,t.prototype.constructor=t,t.Qb=function(o,m,E){for(var T=Array(arguments.length-2),R=2;R<arguments.length;R++)T[R-2]=arguments[R];return i.prototype[m].apply(o,T)}}function F(t){const i=t.length;if(0<i){const s=Array(i);for(let o=0;o<i;o++)s[o]=t[o];return s}return[]}function M(t,i){for(let s=1;s<arguments.length;s++){const o=arguments[s];if(I(o)){const m=t.length||0,E=o.length||0;t.length=m+E;for(let T=0;T<E;T++)t[m+T]=o[T]}else t.push(o)}}class _t{constructor(i,s){this.i=i,this.j=s,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Q(t){return/^[\s\xa0]*$/.test(t)}function X(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function at(t){return at[" "](t),t}at[" "]=function(){};var Qt=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function tt(t,i,s){for(const o in t)i.call(s,t[o],o,t)}function g(t,i){for(const s in t)i.call(void 0,t[s],s,t)}function l(t){const i={};for(const s in t)i[s]=t[s];return i}const u="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d(t,i){let s,o;for(let m=1;m<arguments.length;m++){o=arguments[m];for(s in o)t[s]=o[s];for(let E=0;E<u.length;E++)s=u[E],Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s])}}function p(t){var i=1;t=t.split(":");const s=[];for(;0<i&&t.length;)s.push(t.shift()),i--;return t.length&&s.push(t.join(":")),s}function v(t){w.setTimeout(()=>{throw t},0)}function c(){var t=Se;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class nt{constructor(){this.h=this.g=null}add(i,s){const o=Pt.get();o.set(i,s),this.h?this.h.next=o:this.g=o,this.h=o}}var Pt=new _t(()=>new $s,t=>t.reset());class $s{constructor(){this.next=this.g=this.h=null}set(i,s){this.h=i,this.g=s,this.next=null}reset(){this.next=this.g=this.h=null}}let Ot,kt=!1,Se=new nt,An=()=>{const t=w.Promise.resolve(void 0);Ot=()=>{t.then(Hs)}};var Hs=()=>{for(var t;t=c();){try{t.h.call(t.g)}catch(s){v(s)}var i=Pt;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}kt=!1};function ht(){this.s=this.s,this.C=this.C}ht.prototype.s=!1,ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var Vs=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const s=()=>{};w.addEventListener("test",s,i),w.removeEventListener("test",s,i)}catch{}return t}();function Nt(t,i){if(x.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var s=this.type=t.type,o=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(Qt){t:{try{at(i.nodeName);var m=!0;break t}catch{}m=!1}m||(i=null)}}else s=="mouseover"?i=t.fromElement:s=="mouseout"&&(i=t.toElement);this.relatedTarget=i,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:zs[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Nt.aa.h.call(this)}}S(Nt,x);var zs={2:"touch",3:"pen",4:"mouse"};Nt.prototype.h=function(){Nt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),Gs=0;function qs(t,i,s,o,m){this.listener=t,this.proxy=null,this.src=i,this.type=s,this.capture=!!o,this.ha=m,this.key=++Gs,this.da=this.fa=!1}function ee(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ne(t){this.src=t,this.g={},this.h=0}ne.prototype.add=function(t,i,s,o,m){var E=t.toString();t=this.g[E],t||(t=this.g[E]=[],this.h++);var T=Ce(t,i,o,m);return-1<T?(i=t[T],s||(i.fa=!1)):(i=new qs(i,this.src,E,!!o,m),i.fa=s,t.push(i)),i};function De(t,i){var s=i.type;if(s in t.g){var o=t.g[s],m=Array.prototype.indexOf.call(o,i,void 0),E;(E=0<=m)&&Array.prototype.splice.call(o,m,1),E&&(ee(i),t.g[s].length==0&&(delete t.g[s],t.h--))}}function Ce(t,i,s,o){for(var m=0;m<t.length;++m){var E=t[m];if(!E.da&&E.listener==i&&E.capture==!!s&&E.ha==o)return m}return-1}var Re="closure_lm_"+(1e6*Math.random()|0),Pe={};function bn(t,i,s,o,m){if(Array.isArray(i)){for(var E=0;E<i.length;E++)bn(t,i[E],s,o,m);return null}return s=Cn(s),t&&t[te]?t.K(i,s,_(o)?!!o.capture:!1,m):Ks(t,i,s,!1,o,m)}function Ks(t,i,s,o,m,E){if(!i)throw Error("Invalid event type");var T=_(m)?!!m.capture:!!m,R=ke(t);if(R||(t[Re]=R=new ne(t)),s=R.add(i,s,o,T,E),s.proxy)return s;if(o=Ws(),s.proxy=o,o.src=t,o.listener=s,t.addEventListener)Vs||(m=T),m===void 0&&(m=!1),t.addEventListener(i.toString(),o,m);else if(t.attachEvent)t.attachEvent(Dn(i.toString()),o);else if(t.addListener&&t.removeListener)t.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return s}function Ws(){function t(s){return i.call(t.src,t.listener,s)}const i=Xs;return t}function Sn(t,i,s,o,m){if(Array.isArray(i))for(var E=0;E<i.length;E++)Sn(t,i[E],s,o,m);else o=_(o)?!!o.capture:!!o,s=Cn(s),t&&t[te]?(t=t.i,i=String(i).toString(),i in t.g&&(E=t.g[i],s=Ce(E,s,o,m),-1<s&&(ee(E[s]),Array.prototype.splice.call(E,s,1),E.length==0&&(delete t.g[i],t.h--)))):t&&(t=ke(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Ce(i,s,o,m)),(s=-1<t?i[t]:null)&&Oe(s))}function Oe(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[te])De(i.i,t);else{var s=t.type,o=t.proxy;i.removeEventListener?i.removeEventListener(s,o,t.capture):i.detachEvent?i.detachEvent(Dn(s),o):i.addListener&&i.removeListener&&i.removeListener(o),(s=ke(i))?(De(s,t),s.h==0&&(s.src=null,i[Re]=null)):ee(t)}}}function Dn(t){return t in Pe?Pe[t]:Pe[t]="on"+t}function Xs(t,i){if(t.da)t=!0;else{i=new Nt(i,this);var s=t.listener,o=t.ha||t.src;t.fa&&Oe(t),t=s.call(o,i)}return t}function ke(t){return t=t[Re],t instanceof ne?t:null}var Ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cn(t){return typeof t=="function"?t:(t[Ne]||(t[Ne]=function(i){return t.handleEvent(i)}),t[Ne])}function B(){ht.call(this),this.i=new ne(this),this.M=this,this.F=null}S(B,ht),B.prototype[te]=!0,B.prototype.removeEventListener=function(t,i,s,o){Sn(this,t,i,s,o)};function H(t,i){var s,o=t.F;if(o)for(s=[];o;o=o.F)s.push(o);if(t=t.M,o=i.type||i,typeof i=="string")i=new x(i,t);else if(i instanceof x)i.target=i.target||t;else{var m=i;i=new x(o,t),d(i,m)}if(m=!0,s)for(var E=s.length-1;0<=E;E--){var T=i.g=s[E];m=ie(T,o,!0,i)&&m}if(T=i.g=t,m=ie(T,o,!0,i)&&m,m=ie(T,o,!1,i)&&m,s)for(E=0;E<s.length;E++)T=i.g=s[E],m=ie(T,o,!1,i)&&m}B.prototype.N=function(){if(B.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var s=t.g[i],o=0;o<s.length;o++)ee(s[o]);delete t.g[i],t.h--}}this.F=null},B.prototype.K=function(t,i,s,o){return this.i.add(String(t),i,!1,s,o)},B.prototype.L=function(t,i,s,o){return this.i.add(String(t),i,!0,s,o)};function ie(t,i,s,o){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var m=!0,E=0;E<i.length;++E){var T=i[E];if(T&&!T.da&&T.capture==s){var R=T.listener,j=T.ha||T.src;T.fa&&De(t.i,T),m=R.call(j,o)!==!1&&m}}return m&&!o.defaultPrevented}function Rn(t,i,s){if(typeof t=="function")s&&(t=C(t,s));else if(t&&typeof t.handleEvent=="function")t=C(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:w.setTimeout(t,i||0)}function Pn(t){t.g=Rn(()=>{t.g=null,t.i&&(t.i=!1,Pn(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class Js extends ht{constructor(i,s){super(),this.m=i,this.l=s,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:Pn(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lt(t){ht.call(this),this.h=t,this.g={}}S(Lt,ht);var On=[];function kn(t){tt(t.g,function(i,s){this.g.hasOwnProperty(s)&&Oe(i)},t),t.g={}}Lt.prototype.N=function(){Lt.aa.N.call(this),kn(this)},Lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Le=w.JSON.stringify,Ys=w.JSON.parse,Zs=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function Me(){}Me.prototype.h=null;function Nn(t){return t.h||(t.h=t.i())}function Qs(){}var Mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function je(){x.call(this,"d")}S(je,x);function Fe(){x.call(this,"c")}S(Fe,x);var At={},Ln=null;function xe(){return Ln=Ln||new B}At.La="serverreachability";function Mn(t){x.call(this,At.La,t)}S(Mn,x);function jt(t){const i=xe();H(i,new Mn(i))}At.STAT_EVENT="statevent";function jn(t,i){x.call(this,At.STAT_EVENT,t),this.stat=i}S(jn,x);function V(t){const i=xe();H(i,new jn(i,t))}At.Ma="timingevent";function Fn(t,i){x.call(this,At.Ma,t),this.size=i}S(Fn,x);function Ft(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},i)}function xt(){this.g=!0}xt.prototype.xa=function(){this.g=!1};function tr(t,i,s,o,m,E){t.info(function(){if(t.g)if(E)for(var T="",R=E.split("&"),j=0;j<R.length;j++){var b=R[j].split("=");if(1<b.length){var U=b[0];b=b[1];var $=U.split("_");T=2<=$.length&&$[1]=="type"?T+(U+"="+b+"&"):T+(U+"=redacted&")}}else T=null;else T=E;return"XMLHTTP REQ ("+o+") [attempt "+m+"]: "+i+`
`+s+`
`+T})}function er(t,i,s,o,m,E,T){t.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+m+"]: "+i+`
`+s+`
`+E+" "+T})}function bt(t,i,s,o){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+ir(t,s)+(o?" "+o:"")})}function nr(t,i){t.info(function(){return"TIMEOUT: "+i})}xt.prototype.info=function(){};function ir(t,i){if(!t.g)return i;if(!i)return null;try{var s=JSON.parse(i);if(s){for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var o=s[t];if(!(2>o.length)){var m=o[1];if(Array.isArray(m)&&!(1>m.length)){var E=m[0];if(E!="noop"&&E!="stop"&&E!="close")for(var T=1;T<m.length;T++)m[T]=""}}}}return Le(s)}catch{return i}}var Be={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ue;function se(){}S(se,Me),se.prototype.g=function(){return new XMLHttpRequest},se.prototype.i=function(){return{}},Ue=new se;function lt(t,i,s,o){this.j=t,this.i=i,this.l=s,this.R=o||1,this.U=new Lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xn}function xn(){this.i=null,this.g="",this.h=!1}var Bn={},$e={};function He(t,i,s){t.L=1,t.v=he(it(i)),t.m=s,t.P=!0,Un(t,null)}function Un(t,i){t.F=Date.now(),re(t),t.A=it(t.v);var s=t.A,o=t.R;Array.isArray(o)||(o=[String(o)]),ti(s.i,"t",o),t.C=0,s=t.j.J,t.h=new xn,t.g=vi(t.j,s?i:null,!t.m),0<t.O&&(t.M=new Js(C(t.Y,t,t.g),t.O)),i=t.U,s=t.g,o=t.ca;var m="readystatechange";Array.isArray(m)||(m&&(On[0]=m.toString()),m=On);for(var E=0;E<m.length;E++){var T=bn(s,m[E],o||i.handleEvent,!1,i.h||i);if(!T)break;i.g[T.key]=T}i=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),jt(),tr(t.i,t.u,t.A,t.l,t.R,t.m)}lt.prototype.ca=function(t){t=t.target;const i=this.M;i&&st(t)==3?i.j():this.Y(t)},lt.prototype.Y=function(t){try{if(t==this.g)t:{const $=st(this.g);var i=this.g.Ba();const Ct=this.g.Z();if(!(3>$)&&($!=3||this.g&&(this.h.h||this.g.oa()||ai(this.g)))){this.J||$!=4||i==7||(i==8||0>=Ct?jt(3):jt(2)),Ve(this);var s=this.g.Z();this.X=s;e:if($n(this)){var o=ai(this.g);t="";var m=o.length,E=st(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mt(this),Bt(this);var T="";break e}this.h.i=new w.TextDecoder}for(i=0;i<m;i++)this.h.h=!0,t+=this.h.i.decode(o[i],{stream:!(E&&i==m-1)});o.length=0,this.h.g+=t,this.C=0,T=this.h.g}else T=this.g.oa();if(this.o=s==200,er(this.i,this.u,this.A,this.l,this.R,$,s),this.o){if(this.T&&!this.K){e:{if(this.g){var R,j=this.g;if((R=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(R)){var b=R;break e}}b=null}if(s=b)bt(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ze(this,s);else{this.o=!1,this.s=3,V(12),mt(this),Bt(this);break t}}if(this.P){s=!0;let Y;for(;!this.J&&this.C<T.length;)if(Y=rr(this,T),Y==$e){$==4&&(this.s=4,V(14),s=!1),bt(this.i,this.l,null,"[Incomplete Response]");break}else if(Y==Bn){this.s=4,V(15),bt(this.i,this.l,T,"[Invalid Chunk]"),s=!1;break}else bt(this.i,this.l,Y,null),ze(this,Y);if($n(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$!=4||T.length!=0||this.h.h||(this.s=1,V(16),s=!1),this.o=this.o&&s,!s)bt(this.i,this.l,T,"[Invalid Chunked Response]"),mt(this),Bt(this);else if(0<T.length&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.ba&&!U.M&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+T.length),Je(U),U.M=!0,V(11))}}else bt(this.i,this.l,T,null),ze(this,T);$==4&&mt(this),this.o&&!this.J&&($==4?pi(this.j,this):(this.o=!1,re(this)))}else Tr(this.g),s==400&&0<T.indexOf("Unknown SID")?(this.s=3,V(12)):(this.s=0,V(13)),mt(this),Bt(this)}}}catch{}finally{}};function $n(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function rr(t,i){var s=t.C,o=i.indexOf(`
`,s);return o==-1?$e:(s=Number(i.substring(s,o)),isNaN(s)?Bn:(o+=1,o+s>i.length?$e:(i=i.slice(o,o+s),t.C=o+s,i)))}lt.prototype.cancel=function(){this.J=!0,mt(this)};function re(t){t.S=Date.now()+t.I,Hn(t,t.I)}function Hn(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ft(C(t.ba,t),i)}function Ve(t){t.B&&(w.clearTimeout(t.B),t.B=null)}lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(nr(this.i,this.A),this.L!=2&&(jt(),V(17)),mt(this),this.s=2,Bt(this)):Hn(this,this.S-t)};function Bt(t){t.j.G==0||t.J||pi(t.j,t)}function mt(t){Ve(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,kn(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function ze(t,i){try{var s=t.j;if(s.G!=0&&(s.g==t||Ge(s.h,t))){if(!t.K&&Ge(s.h,t)&&s.G==3){try{var o=s.Da.g.parse(i)}catch{o=null}if(Array.isArray(o)&&o.length==3){var m=o;if(m[0]==0){t:if(!s.u){if(s.g)if(s.g.F+3e3<t.F)pe(s),fe(s);else break t;Xe(s),V(18)}}else s.za=m[1],0<s.za-s.T&&37500>m[2]&&s.F&&s.v==0&&!s.C&&(s.C=Ft(C(s.Za,s),6e3));if(1>=Gn(s.h)&&s.ca){try{s.ca()}catch{}s.ca=void 0}}else vt(s,11)}else if((t.K||s.g==t)&&pe(s),!Q(i))for(m=s.Da.g.parse(i),i=0;i<m.length;i++){let b=m[i];if(s.T=b[0],b=b[1],s.G==2)if(b[0]=="c"){s.K=b[1],s.ia=b[2];const U=b[3];U!=null&&(s.la=U,s.j.info("VER="+s.la));const $=b[4];$!=null&&(s.Aa=$,s.j.info("SVER="+s.Aa));const Ct=b[5];Ct!=null&&typeof Ct=="number"&&0<Ct&&(o=1.5*Ct,s.L=o,s.j.info("backChannelRequestTimeoutMs_="+o)),o=s;const Y=t.g;if(Y){const ge=Y.g?Y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ge){var E=o.h;E.g||ge.indexOf("spdy")==-1&&ge.indexOf("quic")==-1&&ge.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(qe(E,E.h),E.h=null))}if(o.D){const Ye=Y.g?Y.g.getResponseHeader("X-HTTP-Session-Id"):null;Ye&&(o.ya=Ye,P(o.I,o.D,Ye))}}s.G=3,s.l&&s.l.ua(),s.ba&&(s.R=Date.now()-t.F,s.j.info("Handshake RTT: "+s.R+"ms")),o=s;var T=t;if(o.qa=yi(o,o.J?o.ia:null,o.W),T.K){qn(o.h,T);var R=T,j=o.L;j&&(R.I=j),R.B&&(Ve(R),re(R)),o.g=T}else fi(o);0<s.i.length&&de(s)}else b[0]!="stop"&&b[0]!="close"||vt(s,7);else s.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?vt(s,7):We(s):b[0]!="noop"&&s.l&&s.l.ta(b),s.v=0)}}jt(4)}catch{}}var or=class{constructor(t,i){this.g=t,this.map=i}};function Vn(t){this.l=t||10,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.chrome&&w.chrome.loadTimes&&w.chrome.loadTimes()&&w.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zn(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gn(t){return t.h?1:t.g?t.g.size:0}function Ge(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function qe(t,i){t.g?t.g.add(i):t.h=i}function qn(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Vn.prototype.cancel=function(){if(this.i=Kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Kn(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const s of t.g.values())i=i.concat(s.D);return i}return F(t.i)}function ar(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var i=[],s=t.length,o=0;o<s;o++)i.push(t[o]);return i}i=[],s=0;for(o in t)i[s++]=t[o];return i}function hr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var i=[];t=t.length;for(var s=0;s<t;s++)i.push(s);return i}i=[],s=0;for(const o in t)i[s++]=o;return i}}}function Wn(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var s=hr(t),o=ar(t),m=o.length,E=0;E<m;E++)i.call(void 0,o[E],s&&s[E],t)}var Xn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lr(t,i){if(t){t=t.split("&");for(var s=0;s<t.length;s++){var o=t[s].indexOf("="),m=null;if(0<=o){var E=t[s].substring(0,o);m=t[s].substring(o+1)}else E=t[s];i(E,m?decodeURIComponent(m.replace(/\+/g," ")):"")}}}function yt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof yt){this.h=t.h,oe(this,t.j),this.o=t.o,this.g=t.g,ae(this,t.s),this.l=t.l;var i=t.i,s=new Ht;s.i=i.i,i.g&&(s.g=new Map(i.g),s.h=i.h),Jn(this,s),this.m=t.m}else t&&(i=String(t).match(Xn))?(this.h=!1,oe(this,i[1]||"",!0),this.o=Ut(i[2]||""),this.g=Ut(i[3]||"",!0),ae(this,i[4]),this.l=Ut(i[5]||"",!0),Jn(this,i[6]||"",!0),this.m=Ut(i[7]||"")):(this.h=!1,this.i=new Ht(null,this.h))}yt.prototype.toString=function(){var t=[],i=this.j;i&&t.push($t(i,Yn,!0),":");var s=this.g;return(s||i=="file")&&(t.push("//"),(i=this.o)&&t.push($t(i,Yn,!0),"@"),t.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s=this.s,s!=null&&t.push(":",String(s))),(s=this.l)&&(this.g&&s.charAt(0)!="/"&&t.push("/"),t.push($t(s,s.charAt(0)=="/"?fr:ur,!0))),(s=this.i.toString())&&t.push("?",s),(s=this.m)&&t.push("#",$t(s,pr)),t.join("")};function it(t){return new yt(t)}function oe(t,i,s){t.j=s?Ut(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function ae(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function Jn(t,i,s){i instanceof Ht?(t.i=i,gr(t.i,t.h)):(s||(i=$t(i,dr)),t.i=new Ht(i,t.h))}function P(t,i,s){t.i.set(i,s)}function he(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ut(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $t(t,i,s){return typeof t=="string"?(t=encodeURI(t).replace(i,cr),s&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yn=/[#\/\?@]/g,ur=/[#\?:]/g,fr=/[#\?]/g,dr=/[#\?@]/g,pr=/#/g;function Ht(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function ct(t){t.g||(t.g=new Map,t.h=0,t.i&&lr(t.i,function(i,s){t.add(decodeURIComponent(i.replace(/\+/g," ")),s)}))}n=Ht.prototype,n.add=function(t,i){ct(this),this.i=null,t=St(this,t);var s=this.g.get(t);return s||this.g.set(t,s=[]),s.push(i),this.h+=1,this};function Zn(t,i){ct(t),i=St(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function Qn(t,i){return ct(t),i=St(t,i),t.g.has(i)}n.forEach=function(t,i){ct(this),this.g.forEach(function(s,o){s.forEach(function(m){t.call(i,m,o,this)},this)},this)},n.na=function(){ct(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),s=[];for(let o=0;o<i.length;o++){const m=t[o];for(let E=0;E<m.length;E++)s.push(i[o])}return s},n.V=function(t){ct(this);let i=[];if(typeof t=="string")Qn(this,t)&&(i=i.concat(this.g.get(St(this,t))));else{t=Array.from(this.g.values());for(let s=0;s<t.length;s++)i=i.concat(t[s])}return i},n.set=function(t,i){return ct(this),this.i=null,t=St(this,t),Qn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},n.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function ti(t,i,s){Zn(t,i),0<s.length&&(t.i=null,t.g.set(St(t,i),F(s)),t.h+=s.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var s=0;s<i.length;s++){var o=i[s];const E=encodeURIComponent(String(o)),T=this.V(o);for(o=0;o<T.length;o++){var m=E;T[o]!==""&&(m+="="+encodeURIComponent(String(T[o]))),t.push(m)}}return this.i=t.join("&")};function St(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function gr(t,i){i&&!t.j&&(ct(t),t.i=null,t.g.forEach(function(s,o){var m=o.toLowerCase();o!=m&&(Zn(this,o),ti(this,m,s))},t)),t.j=i}function mr(t,i){const s=new xt;if(w.Image){const o=new Image;o.onload=N(ut,s,"TestLoadImage: loaded",!0,i,o),o.onerror=N(ut,s,"TestLoadImage: error",!1,i,o),o.onabort=N(ut,s,"TestLoadImage: abort",!1,i,o),o.ontimeout=N(ut,s,"TestLoadImage: timeout",!1,i,o),w.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=t}else i(!1)}function yr(t,i){const s=new xt,o=new AbortController,m=setTimeout(()=>{o.abort(),ut(s,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:o.signal}).then(E=>{clearTimeout(m),E.ok?ut(s,"TestPingServer: ok",!0,i):ut(s,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(m),ut(s,"TestPingServer: error",!1,i)})}function ut(t,i,s,o,m){try{m&&(m.onload=null,m.onerror=null,m.onabort=null,m.ontimeout=null),o(s)}catch{}}function vr(){this.g=new Zs}function wr(t,i,s){const o=s||"";try{Wn(t,function(m,E){let T=m;_(m)&&(T=Le(m)),i.push(o+E+"="+encodeURIComponent(T))})}catch(m){throw i.push(o+"type="+encodeURIComponent("_badmap")),m}}function le(t){this.l=t.Ub||null,this.j=t.eb||!1}S(le,Me),le.prototype.g=function(){return new ce(this.l,this.j)},le.prototype.i=function(t){return function(){return t}}({});function ce(t,i){B.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ce,B),n=ce.prototype,n.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,zt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||w).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,zt(this)),this.g&&(this.readyState=3,zt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ei(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function ei(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?Vt(this):zt(this),this.readyState==3&&ei(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,Vt(this))},n.Qa=function(t){this.g&&(this.response=t,Vt(this))},n.ga=function(){this.g&&Vt(this)};function Vt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,zt(t)}n.setRequestHeader=function(t,i){this.u.append(t,i)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var s=i.next();!s.done;)s=s.value,t.push(s[0]+": "+s[1]),s=i.next();return t.join(`\r
`)};function zt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ce.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function ni(t){let i="";return tt(t,function(s,o){i+=o,i+=":",i+=s,i+=`\r
`}),i}function Ke(t,i,s){t:{for(o in s){var o=!1;break t}o=!0}o||(s=ni(s),typeof t=="string"?s!=null&&encodeURIComponent(String(s)):P(t,i,s))}function L(t){B.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(L,B);var Er=/^https?$/i,Ir=["POST","PUT"];n=L.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,i,s,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ue.g(),this.v=this.o?Nn(this.o):Nn(Ue),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(E){ii(this,E);return}if(t=s||"",s=new Map(this.headers),o)if(Object.getPrototypeOf(o)===Object.prototype)for(var m in o)s.set(m,o[m]);else if(typeof o.keys=="function"&&typeof o.get=="function")for(const E of o.keys())s.set(E,o.get(E));else throw Error("Unknown input type for opt_headers: "+String(o));o=Array.from(s.keys()).find(E=>E.toLowerCase()=="content-type"),m=w.FormData&&t instanceof w.FormData,!(0<=Array.prototype.indexOf.call(Ir,i,void 0))||o||m||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,T]of s)this.g.setRequestHeader(E,T);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oi(this),this.u=!0,this.g.send(t),this.u=!1}catch(E){ii(this,E)}};function ii(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,si(t),ue(t)}function si(t){t.A||(t.A=!0,H(t,"complete"),H(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,H(this,"complete"),H(this,"abort"),ue(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ue(this,!0)),L.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ri(this):this.bb())},n.bb=function(){ri(this)};function ri(t){if(t.h&&typeof y<"u"&&(!t.v[1]||st(t)!=4||t.Z()!=2)){if(t.u&&st(t)==4)Rn(t.Ea,0,t);else if(H(t,"readystatechange"),st(t)==4){t.h=!1;try{const T=t.Z();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var s;if(!(s=i)){var o;if(o=T===0){var m=String(t.D).match(Xn)[1]||null;!m&&w.self&&w.self.location&&(m=w.self.location.protocol.slice(0,-1)),o=!Er.test(m?m.toLowerCase():"")}s=o}if(s)H(t,"complete"),H(t,"success");else{t.m=6;try{var E=2<st(t)?t.g.statusText:""}catch{E=""}t.l=E+" ["+t.Z()+"]",si(t)}}finally{ue(t)}}}}function ue(t,i){if(t.g){oi(t);const s=t.g,o=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||H(t,"ready");try{s.onreadystatechange=o}catch{}}}function oi(t){t.I&&(w.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function st(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<st(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),Ys(i)}};function ai(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Tr(t){const i={};t=(t.g&&2<=st(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let o=0;o<t.length;o++){if(Q(t[o]))continue;var s=p(t[o]);const m=s[0];if(s=s[1],typeof s!="string")continue;s=s.trim();const E=i[m]||[];i[m]=E,E.push(s)}g(i,function(o){return o.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gt(t,i,s){return s&&s.internalChannelParams&&s.internalChannelParams[t]||i}function hi(t){this.Aa=0,this.i=[],this.j=new xt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gt("baseRetryDelayMs",5e3,t),this.cb=Gt("retryDelaySeedMs",1e4,t),this.Wa=Gt("forwardChannelMaxRetries",2,t),this.wa=Gt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Vn(t&&t.concurrentRequestLimit),this.Da=new vr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hi.prototype,n.la=8,n.G=1,n.connect=function(t,i,s,o){V(0),this.W=t,this.H=i||{},s&&o!==void 0&&(this.H.OSID=s,this.H.OAID=o),this.F=this.X,this.I=yi(this,null,this.W),de(this)};function We(t){if(li(t),t.G==3){var i=t.U++,s=it(t.I);if(P(s,"SID",t.K),P(s,"RID",i),P(s,"TYPE","terminate"),qt(t,s),i=new lt(t,t.j,i),i.L=2,i.v=he(it(s)),s=!1,w.navigator&&w.navigator.sendBeacon)try{s=w.navigator.sendBeacon(i.v.toString(),"")}catch{}!s&&w.Image&&(new Image().src=i.v,s=!0),s||(i.g=vi(i.j,null),i.g.ea(i.v)),i.F=Date.now(),re(i)}mi(t)}function fe(t){t.g&&(Je(t),t.g.cancel(),t.g=null)}function li(t){fe(t),t.u&&(w.clearTimeout(t.u),t.u=null),pe(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&w.clearTimeout(t.s),t.s=null)}function de(t){if(!zn(t.h)&&!t.s){t.s=!0;var i=t.Ga;Ot||An(),kt||(Ot(),kt=!0),Se.add(i,t),t.B=0}}function _r(t,i){return Gn(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Ft(C(t.Ga,t,i),gi(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const m=new lt(this,this.j,t);let E=this.o;if(this.S&&(E?(E=l(E),d(E,this.S)):E=this.S),this.m!==null||this.O||(m.H=E,E=null),this.P)t:{for(var i=0,s=0;s<this.i.length;s++){e:{var o=this.i[s];if("__data__"in o.map&&(o=o.map.__data__,typeof o=="string")){o=o.length;break e}o=void 0}if(o===void 0)break;if(i+=o,4096<i){i=s;break t}if(i===4096||s===this.i.length-1){i=s+1;break t}}i=1e3}else i=1e3;i=ui(this,m,i),s=it(this.I),P(s,"RID",t),P(s,"CVER",22),this.D&&P(s,"X-HTTP-Session-Id",this.D),qt(this,s),E&&(this.O?i="headers="+encodeURIComponent(String(ni(E)))+"&"+i:this.m&&Ke(s,this.m,E)),qe(this.h,m),this.Ua&&P(s,"TYPE","init"),this.P?(P(s,"$req",i),P(s,"SID","null"),m.T=!0,He(m,s,null)):He(m,s,i),this.G=2}}else this.G==3&&(t?ci(this,t):this.i.length==0||zn(this.h)||ci(this))};function ci(t,i){var s;i?s=i.l:s=t.U++;const o=it(t.I);P(o,"SID",t.K),P(o,"RID",s),P(o,"AID",t.T),qt(t,o),t.m&&t.o&&Ke(o,t.m,t.o),s=new lt(t,t.j,s,t.B+1),t.m===null&&(s.H=t.o),i&&(t.i=i.D.concat(t.i)),i=ui(t,s,1e3),s.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),qe(t.h,s),He(s,o,i)}function qt(t,i){t.H&&tt(t.H,function(s,o){P(i,o,s)}),t.l&&Wn({},function(s,o){P(i,o,s)})}function ui(t,i,s){s=Math.min(t.i.length,s);var o=t.l?C(t.l.Na,t.l,t):null;t:{var m=t.i;let E=-1;for(;;){const T=["count="+s];E==-1?0<s?(E=m[0].g,T.push("ofs="+E)):E=0:T.push("ofs="+E);let R=!0;for(let j=0;j<s;j++){let b=m[j].g;const U=m[j].map;if(b-=E,0>b)E=Math.max(0,m[j].g-100),R=!1;else try{wr(U,T,"req"+b+"_")}catch{o&&o(U)}}if(R){o=T.join("&");break t}}}return t=t.i.splice(0,s),i.D=t,o}function fi(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;Ot||An(),kt||(Ot(),kt=!0),Se.add(i,t),t.v=0}}function Xe(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Ft(C(t.Fa,t),gi(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,di(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ft(C(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,V(10),fe(this),di(this))};function Je(t){t.A!=null&&(w.clearTimeout(t.A),t.A=null)}function di(t){t.g=new lt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=it(t.qa);P(i,"RID","rpc"),P(i,"SID",t.K),P(i,"AID",t.T),P(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&P(i,"TO",t.ja),P(i,"TYPE","xmlhttp"),qt(t,i),t.m&&t.o&&Ke(i,t.m,t.o),t.L&&(t.g.I=t.L);var s=t.g;t=t.ia,s.L=1,s.v=he(it(i)),s.m=null,s.P=!0,Un(s,t)}n.Za=function(){this.C!=null&&(this.C=null,fe(this),Xe(this),V(19))};function pe(t){t.C!=null&&(w.clearTimeout(t.C),t.C=null)}function pi(t,i){var s=null;if(t.g==i){pe(t),Je(t),t.g=null;var o=2}else if(Ge(t.h,i))s=i.D,qn(t.h,i),o=1;else return;if(t.G!=0){if(i.o)if(o==1){s=i.m?i.m.length:0,i=Date.now()-i.F;var m=t.B;o=xe(),H(o,new Fn(o,s)),de(t)}else fi(t);else if(m=i.s,m==3||m==0&&0<i.X||!(o==1&&_r(t,i)||o==2&&Xe(t)))switch(s&&0<s.length&&(i=t.h,i.i=i.i.concat(s)),m){case 1:vt(t,5);break;case 4:vt(t,10);break;case 3:vt(t,6);break;default:vt(t,2)}}}function gi(t,i){let s=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(s*=2),s*i}function vt(t,i){if(t.j.info("Error code "+i),i==2){var s=C(t.fb,t),o=t.Xa;const m=!o;o=new yt(o||"//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||oe(o,"https"),he(o),m?mr(o.toString(),s):yr(o.toString(),s)}else V(2);t.G=0,t.l&&t.l.sa(i),mi(t),li(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),V(2)):(this.j.info("Failed to ping google.com"),V(1))};function mi(t){if(t.G=0,t.ka=[],t.l){const i=Kn(t.h);(i.length!=0||t.i.length!=0)&&(M(t.ka,i),M(t.ka,t.i),t.h.i.length=0,F(t.i),t.i.length=0),t.l.ra()}}function yi(t,i,s){var o=s instanceof yt?it(s):new yt(s);if(o.g!="")i&&(o.g=i+"."+o.g),ae(o,o.s);else{var m=w.location;o=m.protocol,i=i?i+"."+m.hostname:m.hostname,m=+m.port;var E=new yt(null);o&&oe(E,o),i&&(E.g=i),m&&ae(E,m),s&&(E.l=s),o=E}return s=t.D,i=t.ya,s&&i&&P(o,s,i),P(o,"VER",t.la),qt(t,o),o}function vi(t,i,s){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new L(new le({eb:s})):new L(t.pa),i.Ha(t.J),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wi(){}n=wi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function J(t,i){B.call(this),this.g=new hi(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!Q(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Q(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Dt(this)}S(J,B),J.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},J.prototype.close=function(){We(this.g)},J.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var s={};s.__data__=t,t=s}else this.u&&(s={},s.__data__=Le(t),t=s);i.i.push(new or(i.Ya++,t)),i.G==3&&de(i)},J.prototype.N=function(){this.g.l=null,delete this.j,We(this.g),delete this.g,J.aa.N.call(this)};function Ei(t){je.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const s in i){t=s;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}S(Ei,je);function Ii(){Fe.call(this),this.status=1}S(Ii,Fe);function Dt(t){this.g=t}S(Dt,wi),Dt.prototype.ua=function(){H(this.g,"a")},Dt.prototype.ta=function(t){H(this.g,new Ei(t))},Dt.prototype.sa=function(t){H(this.g,new Ii)},Dt.prototype.ra=function(){H(this.g,"b")},J.prototype.send=J.prototype.o,J.prototype.open=J.prototype.m,J.prototype.close=J.prototype.close,Be.NO_ERROR=0,Be.TIMEOUT=8,Be.HTTP_ERROR=6,sr.COMPLETE="complete",Qs.EventType=Mt,Mt.OPEN="a",Mt.CLOSE="b",Mt.ERROR="c",Mt.MESSAGE="d",B.prototype.listen=B.prototype.K,L.prototype.listenOnce=L.prototype.L,L.prototype.getLastError=L.prototype.Ka,L.prototype.getLastErrorCode=L.prototype.Ba,L.prototype.getStatus=L.prototype.Z,L.prototype.getResponseJson=L.prototype.Oa,L.prototype.getResponseText=L.prototype.oa,L.prototype.send=L.prototype.ea,L.prototype.setWithCredentials=L.prototype.Ha}).apply(typeof me<"u"?me:typeof self<"u"?self:typeof window<"u"?window:{});const Hi="@firebase/firestore",Vi="4.7.8";/**
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
 */class z{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}z.UNAUTHENTICATED=new z(null),z.GOOGLE_CREDENTIALS=new z("google-credentials-uid"),z.FIRST_PARTY=new z("first-party-uid"),z.MOCK_USER=new z("mock-user");/**
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
 */let Zt="11.3.1";/**
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
 */const Rt=new pn("@firebase/firestore");function Z(n,...e){if(Rt.logLevel<=D.DEBUG){const r=e.map(In);Rt.debug(`Firestore (${Zt}): ${n}`,...r)}}function js(n,...e){if(Rt.logLevel<=D.ERROR){const r=e.map(In);Rt.error(`Firestore (${Zt}): ${n}`,...r)}}function Ih(n,...e){if(Rt.logLevel<=D.WARN){const r=e.map(In);Rt.warn(`Firestore (${Zt}): ${n}`,...r)}}function In(n){if(typeof n=="string")return n;try{/**
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
*/return function(r){return JSON.stringify(r)}(n)}catch{return n}}/**
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
 */function Tn(n="Unexpected state"){const e=`FIRESTORE (${Zt}) INTERNAL ASSERTION FAILED: `+n;throw js(e),new Error(e)}function Wt(n,e){n||Tn()}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends gt{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xt{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class Fs{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Th{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(z.UNAUTHENTICATED))}shutdown(){}}class _h{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class Ah{constructor(e){this.t=e,this.currentUser=z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){Wt(this.o===void 0);let a=this.i;const h=I=>this.i!==a?(a=this.i,r(I)):Promise.resolve();let f=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),f.resolve(),f=new Xt,e.enqueueRetryable(()=>h(this.currentUser))};const y=()=>{const I=f;e.enqueueRetryable(async()=>{await I.promise,await h(this.currentUser)})},w=I=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),y())};this.t.onInit(I=>w(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?w(I):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),f.resolve(),f=new Xt)}},0),y()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(a=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Wt(typeof a.accessToken=="string"),new Fs(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Wt(e===null||typeof e=="string"),new z(e)}}class bh{constructor(e,r,a){this.l=e,this.h=r,this.P=a,this.type="FirstParty",this.user=z.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Sh{constructor(e,r,a){this.l=e,this.h=r,this.P=a}getToken(){return Promise.resolve(new bh(this.l,this.h,this.P))}start(e,r){e.enqueueRetryable(()=>r(z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class zi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dh{constructor(e,r){this.A=r,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,$o(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,r){Wt(this.o===void 0);const a=f=>{f.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${f.error.message}`);const y=f.token!==this.R;return this.R=f.token,Z("FirebaseAppCheckTokenProvider",`Received ${y?"new":"existing"} token.`),y?r(f.token):Promise.resolve()};this.o=f=>{e.enqueueRetryable(()=>a(f))};const h=f=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=f,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(f=>h(f)),setTimeout(()=>{if(!this.appCheck){const f=this.A.getImmediate({optional:!0});f?h(f):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new zi(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(Wt(typeof r.token=="string"),this.R=r.token,new zi(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Ch(n){return n.name==="IndexedDbTransactionError"}const dn="(default)";class Te{constructor(e,r){this.projectId=e,this.database=r||dn}static empty(){return new Te("","")}get isDefaultDatabase(){return this.database===dn}isEqual(e){return e instanceof Te&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Gi,A;(A=Gi||(Gi={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ms([4294967295,4294967295],0);/**
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
 */const Rh=41943040;/**
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
 */const Ph=1048576;function on(){return typeof document<"u"?document:null}/**
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
 */class Oh{constructor(e,r,a=1e3,h=1.5,f=6e4){this.Ti=e,this.timerId=r,this.Go=a,this.zo=h,this.jo=f,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const r=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),h=Math.max(0,r-a);h>0&&Z("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Ho} ms, delay with jitter: ${r} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,h,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */class _n{constructor(e,r,a,h,f){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=a,this.op=h,this.removalCallback=f,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(y=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,a,h,f){const y=Date.now()+a,w=new _n(e,r,y,h,f);return w.start(a),w}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var qi,Ki;(Ki=qi||(qi={}))._a="default",Ki.Cache="cache";/**
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
 */function kh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Wi=new Map;function Nh(n,e,r,a){if(e===!0&&a===!0)throw new q(G.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)}function Lh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Tn()}function Mh(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=Lh(n);throw new q(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return n}/**
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
 */const xs="firestore.googleapis.com",Xi=!0;class Ji{constructor(e){var r,a;if(e.host===void 0){if(e.ssl!==void 0)throw new q(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xs,this.ssl=Xi}else this.host=e.host,this.ssl=(r=e.ssl)!==null&&r!==void 0?r:Xi;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ph)throw new q(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kh((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(f){if(f.timeoutSeconds!==void 0){if(isNaN(f.timeoutSeconds))throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (must not be NaN)`);if(f.timeoutSeconds<5)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (minimum allowed value is 5)`);if(f.timeoutSeconds>30)throw new q(G.INVALID_ARGUMENT,`invalid long polling timeout: ${f.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,h){return a.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Bs{constructor(e,r,a,h){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=a,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ji({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ji(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new Th;switch(a.type){case"firstParty":return new Sh(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new q(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const a=Wi.get(r);a&&(Z("ComponentProvider","Removing Datastore"),Wi.delete(r),a.terminate())}(this),Promise.resolve()}}function jh(n,e,r,a={}){var h;const f=(n=Mh(n,Bs))._getSettings(),y=`${e}:${r}`;if(f.host!==xs&&f.host!==y&&Ih("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},f),{host:y,ssl:!1})),a.mockUserToken){let w,I;if(typeof a.mockUserToken=="string")w=a.mockUserToken,I=z.MOCK_USER;else{w=Mr(a.mockUserToken,(h=n._app)===null||h===void 0?void 0:h.options.projectId);const _=a.mockUserToken.sub||a.mockUserToken.user_id;if(!_)throw new q(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new z(_)}n._authCredentials=new _h(new Fs(w,I))}}/**
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
 */const Yi="AsyncQueue";class Zi{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Oh(this,"async_queue_retry"),this.Su=()=>{const a=on();a&&Z(Yi,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=e;const r=on();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const r=on();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const r=new Xt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ch(e))throw e;Z(Yi,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const r=this.bu.then(()=>(this.pu=!0,e().catch(a=>{this.gu=a,this.pu=!1;const h=function(y){let w=y.message||"";return y.stack&&(w=y.stack.includes(y.message)?y.stack:y.message+`
`+y.stack),w}(a);throw js("INTERNAL UNHANDLED ERROR: ",h),a}).then(a=>(this.pu=!1,a))));return this.bu=r,r}enqueueAfterDelay(e,r,a){this.Du(),this.wu.indexOf(e)>-1&&(r=0);const h=_n.createAndSchedule(this,e,r,a,f=>this.Fu(f));return this.fu.push(h),h}Du(){this.gu&&Tn()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const r of this.fu)if(r.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((r,a)=>r.targetTimeMs-a.targetTimeMs);for(const r of this.fu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const r=this.fu.indexOf(e);this.fu.splice(r,1)}}class Fh extends Bs{constructor(e,r,a,h){super(e,r,a,h),this.type="firestore",this._queue=new Zi,this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zi(e),this._firestoreClient=void 0,await e}}}function xh(n,e){const r=typeof n=="object"?n:cs(),a=typeof n=="string"?n:dn,h=Yt(r,"firestore").getImmediate({identifier:a});if(!h._initialized){const f=Nr("firestore");f&&jh(h,...f)}return h}(function(e,r=!0){(function(h){Zt=h})(zo),pt(new rt("firestore",(a,{instanceIdentifier:h,options:f})=>{const y=a.getProvider("app").getImmediate(),w=new Fh(new Ah(a.getProvider("auth-internal")),new Dh(y,a.getProvider("app-check-internal")),function(_,k){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new q(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Te(_.options.projectId,k)}(y,h),y);return f=Object.assign({useFetchStreams:r},f),w._setSettings(f),w},"PUBLIC").setMultipleInstances(!0)),et(Hi,Vi,e),et(Hi,Vi,"esm2017")})();const Bh={apiKey:"AIzaSyBqMbStmynQsCKpztJWGJ74a27NTUDs6W4",authDomain:"landing-page-modelo.firebaseapp.com",projectId:"landing-page-modelo",storageBucket:"landing-page-modelo.firebasestorage.app",messagingSenderId:"151853104506",appId:"1:151853104506:web:ce500170695faa48652ac3",measurementId:"G-RQMM907D3L"},Us=ls(Bh);yh(Us);xh(Us);let Uh=document.querySelectorAll(".nav-link");Uh.forEach(n=>{n.addEventListener("click",e=>{e.preventDefault();let r=n.getAttribute("href").substring(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})})});document.addEventListener("DOMContentLoaded",function(){let n=document.querySelector(".flotant_arrow"),e=document.querySelector("#seccion_2").offsetTop;window.addEventListener("scroll",function(){window.scrollY>=e?n.style.cssText="visibility: visible !important; opacity: 1; pointer-events: auto;":n.style.cssText="visibility: hidden !important; opacity: 0; pointer-events: none;"})});let $h=document.getElementById("scroll-to-top");$h.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".card"),e=new IntersectionObserver((r,a)=>{r.forEach(h=>{h.isIntersecting&&(h.target.classList.add("visible"),a.unobserve(h.target),console.log("Card visible:",h.target))})},{threshold:.2});n.forEach(r=>{e.observe(r)})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".menu_items"),e=document.querySelector(".hamburger");function r(){n.classList.toggle("show")}e.addEventListener("click",r)});
