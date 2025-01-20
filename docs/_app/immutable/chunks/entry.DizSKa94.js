var ye=Object.defineProperty;var we=(t,n,e)=>n in t?ye(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var x=(t,n,e)=>we(t,typeof n!="symbol"?n+"":n,e);import{n as dt,s as _e,o as Ct,t as ve}from"./scheduler.DgkJp-Vv.js";new URL("sveltekit-internal://");function be(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function ke(t){return t.split("%25").map(decodeURI).join("%25")}function Ae(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ht({href:t}){return t.split("#")[0]}function Se(t,n,e,a=!1){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return l=>(e(l),i[s](l));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return n(),t[i]},enumerable:!0,configurable:!0});return r}const Ee="/__data.json",Re=".html__data.json";function Ie(t){return t.endsWith(".html")?t.replace(/\.html$/,Re):t.replace(/\/$/,"")+Ee}function Ue(...t){let n=5381;for(const e of t)if(typeof e=="string"){let a=e.length;for(;a;)n=n*33^e.charCodeAt(--a)}else if(ArrayBuffer.isView(e)){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Le(t){const n=atob(t),e=new Uint8Array(n.length);for(let a=0;a<n.length;a++)e[a]=n.charCodeAt(a);return e.buffer}const Ht=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(vt(t)),Ht(t,n));const M=new Map;function Te(t,n){const e=vt(t,n),a=document.querySelector(e);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&M.set(e,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Le(r)),Promise.resolve(new Response(r,o))}return window.fetch(t,n)}function xe(t,n,e){if(M.size>0){const a=vt(t,e),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(n,e)}function vt(t,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Ue(...r)}"]`}return a}const Pe=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ce(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ne(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const d=Pe.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?l===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pt(c)}).join("")}).join("")}/?$`),params:n}}function Oe(t){return!/^\([^)]+\)$/.test(t)}function Ne(t){return t.slice(1).split("/").filter(Oe)}function $e(t,n,e){const a={},r=t.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let l=r[s-i];if(c.chained&&c.rest&&i&&(l=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){a[c.name]=l;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function pt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function je({nodes:t,server_loads:n,dictionary:e,matchers:a}){const r=new Set(n);return Object.entries(e).map(([s,[c,l,d]])=>{const{pattern:h,params:y}=Ce(s),u={id:s,exec:g=>{const f=h.exec(g);if(f)return $e(f,y,a)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...l||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[r.has(s),t[s]]}}function Kt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Ot(t,n,e=JSON.stringify){const a=e(n);try{sessionStorage[t]=a}catch{}}const $=[];function bt(t,n=dt){let e;const a=new Set;function r(s){if(_e(t,s)&&(t=s,e)){const c=!$.length;for(const l of a)l[1](),$.push(l,t);if(c){for(let l=0;l<$.length;l+=2)$[l][0]($[l+1]);$.length=0}}}function o(s){r(s(t))}function i(s,c=dt){const l=[s,c];return a.add(l),a.size===1&&(e=n(r,o)||dt),s(t),()=>{a.delete(l),a.size===0&&e&&(e(),e=null)}}return{set:r,update:o,subscribe:i}}var Gt;const T=((Gt=globalThis.__sveltekit_1o95ift)==null?void 0:Gt.base)??"";var Mt;const De=((Mt=globalThis.__sveltekit_1o95ift)==null?void 0:Mt.assets)??T,Fe="1737363591665",Wt="sveltekit:snapshot",Yt="sveltekit:scroll",zt="sveltekit:states",Ve="sveltekit:pageurl",F="sveltekit:history",K="sveltekit:navigation",X={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Jt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function kt(){return{x:pageXOffset,y:pageYOffset}}function j(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Nt={...X,"":X.hover};function Xt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Zt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Xt(t)}}function yt(t,n,e){let a;try{a=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,o=!a||!!r||st(a,n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===J&&t.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function Z(t){let n=null,e=null,a=null,r=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)a===null&&(a=j(s,"preload-code")),r===null&&(r=j(s,"preload-data")),n===null&&(n=j(s,"keepfocus")),e===null&&(e=j(s,"noscroll")),o===null&&(o=j(s,"reload")),i===null&&(i=j(s,"replacestate")),s=Xt(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Nt[a??"off"],preload_data:Nt[r??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function $t(t){const n=bt(t);let e=!0;function a(){e=!0,n.update(i=>i)}function r(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const Qt={v:()=>{}};function Be(){const{set:t,subscribe:n}=bt(!1);let e;async function a(){clearTimeout(e);try{const r=await fetch(`${De}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Fe;return i&&(t(!0),Qt.v(),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:a}}function st(t,n,e){return t.origin!==J||!t.pathname.startsWith(n)?!0:e?!(t.pathname===n+"/"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function jt(t){const n=Ge(t),e=new ArrayBuffer(n.length),a=new DataView(e);for(let r=0;r<e.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return e}const qe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ge(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,a=0;for(let r=0;r<t.length;r++)e<<=6,e|=qe.indexOf(t[r]),a+=6,a===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=a=0);return a===12?(e>>=4,n+=String.fromCharCode(e)):a===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const Me=-1,He=-2,Ke=-3,We=-4,Ye=-5,ze=-6;function Je(t,n){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,a=Array(e.length);function r(o,i=!1){if(o===Me)return;if(o===Ke)return NaN;if(o===We)return 1/0;if(o===Ye)return-1/0;if(o===ze)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=e[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],l=n==null?void 0:n[c];if(l)return a[o]=l(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],f=jt(g),p=new u(f);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=jt(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let l=0;l<s.length;l+=1){const d=s[l];d!==He&&(c[l]=r(d))}}else{const c={};a[o]=c;for(const l in s){const d=s[l];c[l]=r(d)}}return a[o]}return r(0)}const te=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...te];const Xe=new Set([...te]);[...Xe];function Ze(t){return t.filter(n=>n!=null)}class it{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ee{constructor(n,e){this.status=n,this.location=e}}class At extends Error{constructor(n,e,a){super(a),this.status=n,this.text=e}}const Qe="x-sveltekit-invalidated",tn="x-sveltekit-trailing-slash";function Q(t){return t instanceof it||t instanceof At?t.status:500}function en(t){return t instanceof At?t.text:"Internal Error"}let b,W,gt;const nn=Ct.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ct.toString());nn?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},gt={current:!1}):(b=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},gt=new class{constructor(){x(this,"current",$state.raw(!1))}},Qt.v=()=>gt.current=!0);function an(t){Object.assign(b,t)}const rn=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Kt(Yt)??{},Y=Kt(Wt)??{},C={url:$t({}),page:$t({}),navigating:bt(null),updated:Be()};function St(t){N[t]=kt()}function on(t,n){let e=t+1;for(;N[e];)delete N[e],e+=1;for(e=n+1;Y[e];)delete Y[e],e+=1}function B(t){return location.href=t.href,new Promise(()=>{})}async function ne(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function Dt(){}let ct,wt,tt,P,_t,A;const ae=[],et=[];let U=null;const re=[],sn=[];let D=[],w={branch:[],error:null,url:null},Et=!1,nt=!1,Ft=!0,z=!1,q=!1,oe=!1,Rt=!1,It,I,L,at;const H=new Set;async function kn(t,n,e){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),A=t,await((o=(r=t.hooks).init)==null?void 0:o.call(r)),ct=je(t),P=document.documentElement,_t=n,wt=t.nodes[0],tt=t.nodes[1],wt(),tt(),I=(i=history.state)==null?void 0:i[F],L=(s=history.state)==null?void 0:s[K],I||(I=L=Date.now(),history.replaceState({...history.state,[F]:I,[K]:L},""));const a=N[I];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),e?await gn(_t,e):hn(location.href,{replaceState:!0}),pn()}function cn(){ae.length=0,Rt=!1}function se(t){et.some(n=>n==null?void 0:n.snapshot)&&(Y[t]=et.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function ie(t){var n;(n=Y[t])==null||n.forEach((e,a)=>{var r,o;(o=(r=et[a])==null?void 0:r.snapshot)==null||o.restore(e)})}function Vt(){St(I),Ot(Yt,N),se(L),Ot(Wt,Y)}async function ce(t,n,e,a){return G({type:"goto",url:Jt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:a,accept:()=>{n.invalidateAll&&(Rt=!0)}})}async function ln(t){if(t.id!==(U==null?void 0:U.id)){const n={};H.add(n),U={id:t.id,token:n,promise:fe({...t,preload:n}).then(e=>(H.delete(n),e.type==="loaded"&&e.state.error&&(U=null),e))}}return U.promise}async function mt(t){const n=ct.find(e=>e.exec(ue(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function le(t,n,e){var o;w=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(b,t.props.page),It=new A.root({target:n,props:{...t.props,stores:C,components:et},hydrate:e,sync:!1}),ie(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};D.forEach(i=>i(r)),nt=!0}function rt({url:t,params:n,branch:e,status:a,error:r,route:o,form:i}){let s="never";if(T&&(t.pathname===T||t.pathname===T+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=be(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:r,route:o},props:{constructors:Ze(e).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let l={},d=!b,h=0;for(let u=0;u<Math.max(e.length,w.branch.length);u+=1){const g=e[u],f=w.branch[u];(g==null?void 0:g.data)!==(f==null?void 0:f.data)&&(d=!0),g&&(l={...l,...g.data},d&&(c.props[`data_${h}`]=l),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==r||i!==void 0&&i!==b.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:d?l:b.data}),c}async function Ut({loader:t,parent:n,url:e,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let u=function(...f){for(const p of f){const{href:k}=new URL(p,e);c.dependencies.add(k)}};const g={route:new Proxy(r,{get:(f,p)=>(s&&(c.route=!0),f[p])}),params:new Proxy(a,{get:(f,p)=>(s&&c.params.add(p),f[p])}),data:(o==null?void 0:o.data)??null,url:Se(e,()=>{s&&(c.url=!0)},f=>{s&&c.search_params.add(f)},A.hash),async fetch(f,p){let k;f instanceof Request?(k=f.url,p={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...p}):k=f;const E=new URL(k,e);return s&&u(E.href),E.origin===e.origin&&(k=E.href.slice(e.origin.length)),nt?xe(k,E.href,p):Te(k,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(f){s=!1;try{return f()}finally{s=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=l.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Bt(t,n,e,a,r,o){if(Rt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&e)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(ae.some(s=>s(new URL(i))))return!0;return!1}function Lt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function fn(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const a of e){const r=t.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&e.delete(a)}return e}function qt({error:t,url:n,route:e,params:a}){return{type:"loaded",state:{error:t,url:n,route:e,params:a,branch:[]},props:{page:b,constructors:[]}}}async function fe({id:t,invalidating:n,url:e,params:a,route:r,preload:o}){if((U==null?void 0:U.id)===t)return H.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=r,l=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),l.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?t!==ot(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=fn(w.url,e);let g=!1;const f=l.map((m,v)=>{var O;const S=w.branch[v],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Bt(g,y,h,u,(O=S.server)==null?void 0:O.uses,a));return R&&(g=!0),R});if(f.some(Boolean)){try{d=await pe(e,f)}catch(m){const v=await V(m,{url:e,params:a,route:{id:t}});return H.has(o)?qt({error:v,url:e,params:a,route:r}):lt({status:Q(m),error:v,url:e,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let k=!1;const E=l.map(async(m,v)=>{var ft;if(!m)return;const S=w.branch[v],R=p==null?void 0:p[v];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Bt(k,y,h,u,(ft=S.universal)==null?void 0:ft.uses,a))return S;if(k=!0,(R==null?void 0:R.type)==="error")throw R;return Ut({loader:m[1],url:e,params:a,route:r,parent:async()=>{var Pt;const xt={};for(let ut=0;ut<v;ut+=1)Object.assign(xt,(Pt=await E[ut])==null?void 0:Pt.data);return xt},server_data_node:Lt(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const _=[];for(let m=0;m<l.length;m+=1)if(l[m])try{_.push(await E[m])}catch(v){if(v instanceof ee)return{type:"redirect",location:v.location};if(H.has(o))return qt({error:await V(v,{params:a,url:e,route:{id:r.id}}),url:e,params:a,route:r});let S=Q(v),R;if(p!=null&&p.includes(v))S=v.status??S,R=v.error;else if(v instanceof it)R=v.body;else{if(await C.updated.check())return await ne(),await B(e);R=await V(v,{params:a,url:e,route:{id:r.id}})}const O=await un(m,_,i);return O?rt({url:e,params:a,branch:_.slice(0,O.idx).concat(O.node),status:S,error:R,route:r}):await he(e,{id:r.id},R,S)}else _.push(void 0);return rt({url:e,params:a,branch:_,status:200,error:null,route:r,form:n?void 0:null})}async function un(t,n,e){for(;t--;)if(e[t]){let a=t;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function lt({status:t,error:n,url:e,route:a}){const r={};let o=null;if(A.server_loads[0]===0)try{const l=await pe(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==J||e.pathname!==location.pathname||Et)&&await B(e)}const s=await Ut({loader:wt,url:e,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Lt(o)}),c={node:await tt(),loader:tt,universal:null,server:null,data:null};return rt({url:e,params:r,branch:[s,c],status:t,error:n,route:null})}function Tt(t,n){if(!t||st(t,T,A.hash))return;let e;try{if(e=A.hooks.reroute({url:new URL(t)})??t,typeof e=="string"){const r=new URL(t);A.hash?r.hash=e:r.pathname=e,e=r}}catch{return}const a=ue(e);for(const r of ct){const o=r.exec(a);if(o)return{id:ot(t),invalidating:n,route:r,params:Ae(o),url:t}}}function ue(t){return ke(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(T.length))||"/"}function ot(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function de({url:t,type:n,intent:e,delta:a}){let r=!1;const o=me(w,e,t,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return z||re.forEach(s=>s(i)),r?null:o}async function G({type:t,url:n,popped:e,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:l=Dt,block:d=Dt}){const h=Tt(n,!1),y=de({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!y){d();return}const u=I,g=L;l(),z=!0,nt&&C.navigating.set(W.current=y.navigation),at=c;let f=h&&await fe(h);if(!f){if(st(n,T,A.hash))return await B(n);f=await he(n,{id:null},await V(new At(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,at!==c)return y.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(s>=20)f=await lt({status:500,error:await V(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return ce(new URL(f.location,n).href,{},s+1,c),!1;else f.props.page.status>=400&&await C.updated.check()&&(await ne(),await B(n));if(cn(),St(u),se(g),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),i=e?e.state:i,!e){const _=o?0:1,m={[F]:I+=_,[K]:L+=_,[zt]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||on(I,L)}if(U=null,f.props.page.state=i,nt){w=f.state,f.props.page&&(f.props.page.url=n);const _=(await Promise.all(sn.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){D=D.filter(v=>!_.includes(v))};_.push(m),D.push(..._)}It.$set(f.props),an(f.props.page),oe=!0}else le(f,_t,!1);const{activeElement:p}=document;await ve();const k=e?e.scroll:r?kt():null;if(Ft){const _=n.hash&&document.getElementById(decodeURIComponent(A.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));k?scrollTo(k.x,k.y):_?_.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!a&&!E&&mn(),Ft=!0,f.props.page&&Object.assign(b,f.props.page),z=!1,t==="popstate"&&ie(L),y.fulfil(void 0),D.forEach(_=>_(y.navigation)),C.navigating.set(W.current=null)}async function he(t,n,e,a){return t.origin===J&&t.pathname===location.pathname&&!Et?await lt({status:a,error:e,url:t,route:n}):await B(t)}function dn(){let t;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(mt(new URL(i.target.href)),e.unobserve(i.target))},{threshold:0});function a(o,i){const s=Zt(o,P);if(!s)return;const{url:c,external:l,download:d}=yt(s,T,A.hash);if(l||d)return;const h=Z(s),y=c&&ot(w.url)===ot(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Tt(c,!1);u&&ln(u)}else i<=h.preload_code&&mt(c)}function r(){e.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=yt(o,T,A.hash);if(s||c)continue;const l=Z(o);l.reload||(l.preload_code===X.viewport&&e.observe(o),l.preload_code===X.eager&&mt(i))}}D.push(r),r()}function V(t,n){if(t instanceof it)return t.body;const e=Q(t),a=en(t);return A.hooks.handleError({error:t,event:n,status:e,message:a})??{message:a}}function hn(t,n={}){return t=new URL(Jt(t)),t.origin!==J?Promise.reject(new Error("goto: invalid URL")):ce(t,n,0)}function pn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(Vt(),!z){const r=me(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};re.forEach(i=>i(o))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Vt()}),(n=navigator.connection)!=null&&n.saveData||dn(),P.addEventListener("click",async e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=Zt(e.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:i,download:s}=yt(a,T,A.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(A.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===ht(location);if(o||c.reload&&(!y||!h)){de({url:r,type:"link"})?z=!0:e.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(e.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(q=!0,St(I),t(r),!c.replace_state)return;q=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),G({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(st(s,T,!1))return;const c=e.target,l=Z(c);if(l.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),G({type:"form",url:s,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var a;if((a=e.state)!=null&&a[F]){const r=e.state[F];if(at={},r===I)return;const o=N[r],i=e.state[zt]??{},s=new URL(e.state[Ve]??location.href),c=e.state[K],l=ht(location)===ht(w.url);if(c===L&&(oe||l)){t(s),N[I]=kt(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,It.$set({page:b})),I=r;return}const h=r-I;await G({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=r,L=c},block:()=>{history.go(-h)},nav_token:at})}else if(!q){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{q?(q=!1,history.replaceState({...history.state,[F]:++I,[K]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&G({type:"goto",url:w.url})});for(const e of document.querySelectorAll("link"))rn.has(e.rel)&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&C.navigating.set(W.current=null)});function t(e){w.url=b.url=e,C.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:e}),C.page.notify()}}async function gn(t,{status:n=200,error:e,node_ids:a,params:r,route:o,data:i,form:s}){Et=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Tt(c,!1)||{});let l,d=!0;try{const h=a.map(async(g,f)=>{const p=i[f];return p!=null&&p.uses&&(p.uses=ge(p.uses)),Ut({loader:A.nodes[g],url:c,params:r,route:o,parent:async()=>{const k={};for(let E=0;E<f;E+=1)Object.assign(k,(await h[E]).data);return k},server_data_node:Lt(p)})}),y=await Promise.all(h),u=ct.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let f=0;f<g.length;f++)g[f]||y.splice(f,0,void 0)}l=rt({url:c,params:r,branch:y,status:n,error:e,form:s,route:u??null})}catch(h){if(h instanceof ee){await B(new URL(h.location,location.href));return}l=await lt({status:Q(h),error:await V(h,{url:c,params:r,route:o}),url:c,route:o}),t.textContent="",d=!1}l.props.page&&(l.props.page.state={}),le(l,t,d)}async function pe(t,n){var r;const e=new URL(t);e.pathname=Ie(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(tn,"1"),e.searchParams.append(Qe,n.map(o=>o?"1":"0").join(""));const a=await Ht(e.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new it(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function l(y){return Je(y,{...A.decoders,Promise:u=>new Promise((g,f)=>{i.set(u,{fulfil:g,reject:f})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const f=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=ge(p.uses),p.data=l(p.data))}),o(f);else if(f.type==="chunk"){const{id:p,data:k,error:E}=f,_=i.get(p);i.delete(p),E?_.reject(l(E)):_.fulfil(l(k))}}}})}function ge(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function mn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function me(t,n,e,a){var c,l;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{kn as a,C as s};
