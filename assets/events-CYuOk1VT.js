import{v as b,aA as l,aj as f,N as E,F as w,a8 as A,aB as N,y as V}from"./store-DKrw96s8.js";function q(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const B=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function C(t){return B.includes(t)}const I={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function z(t){return t=t.toLowerCase(),I[t]??t}const O=["touchstart","touchmove"];function F(t){return O.includes(t)}function G(t,e){if(e){const o=document.body;t.autofocus=!0,b(()=>{document.activeElement===o&&t.focus()})}}let g=!1;function P(){g||(g=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const o of t.target.elements)(e=o.__on_r)==null||e.call(o)})},{capture:!0}))}function m(t){var e=E,o=w;l(null),f(null);try{return t()}finally{l(e),f(o)}}function R(t,e,o,n=o){t.addEventListener(e,()=>m(o));const a=t.__on_r;a?t.__on_r=()=>{a(),n(!0)}:t.__on_r=()=>n(!0),P()}const j=new Set,x=new Set;function D(t,e,o,n){function a(r){if(n.capture||M.call(e,r),!r.cancelBubble)return m(()=>o.call(this,r))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?b(()=>{e.addEventListener(t,a,n)}):e.addEventListener(t,a,n),a}function U(t,e,o,n,a){var r={capture:n,passive:a},u=D(t,e,o,r);(e===document.body||e===window||e===document)&&A(()=>{e.removeEventListener(t,u,r)})}function H(t){for(var e=0;e<t.length;e++)j.add(t[e]);for(var o of x)o(t)}function M(t){var y;var e=this,o=e.ownerDocument,n=t.type,a=((y=t.composedPath)==null?void 0:y.call(t))||[],r=a[0]||t.target,u=0,p=t.__root;if(p){var _=a.indexOf(p);if(_!==-1&&(e===document||e===window)){t.__root=e;return}var v=a.indexOf(e);if(v===-1)return;_<=v&&(u=_)}if(r=a[u]||t.target,r!==e){N(t,"currentTarget",{configurable:!0,get(){return r||o}});var k=E,S=w;l(null),f(null);try{for(var i,h=[];r!==null;){var d=r.assignedSlot||r.parentNode||r.host||null;try{var s=r["__"+n];if(s!==void 0&&!r.disabled)if(V(s)){var[L,...T]=s;L.apply(r,[t,...T])}else s.call(r,t)}catch(c){i?h.push(c):i=c}if(t.cancelBubble||d===e||d===null)break;r=d}if(i){for(let c of h)queueMicrotask(()=>{throw c});throw i}}finally{t.__root=e,delete t.currentTarget,l(k),f(S)}}}export{j as a,q as b,D as c,H as d,G as e,C as f,U as g,M as h,F as i,R as l,z as n,x as r};