import{i as E,a as L,c as b,b as w,d as y,p as C,e as M,f as V}from"./props-D-11tLXy.js";import{a as $,r as m,h as d,i as j}from"./events-ef7BX3Ie.js";function W(e,r){var t=r==null?"":typeof r=="object"?r+"":r;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function q(e,r){return k(e,r)}const a=new Map;function k(e,{target:r,anchor:t,props:_={},events:v,context:u,intro:N=!0}){E();var f=new Set,l=s=>{for(var o=0;o<s.length;o++){var n=s[o];if(!f.has(n)){f.add(n);var i=j(n);r.addEventListener(n,d,{passive:i});var h=a.get(n);h===void 0?(document.addEventListener(n,d,{passive:i}),a.set(n,1)):a.set(n,h+1)}}};l(L($)),m.add(l);var c=void 0,g=b(()=>{var s=t??r.appendChild(w());return y(()=>{if(u){C({});var o=V;o.c=u}v&&(_.$$events=v),c=e(s,_)||{},u&&M()}),()=>{var i;for(var o of f){r.removeEventListener(o,d);var n=a.get(o);--n===0?(document.removeEventListener(o,d),a.delete(o)):a.set(o,n)}m.delete(l),s!==t&&((i=s.parentNode)==null||i.removeChild(s))}});return p.set(c,g),c}let p=new WeakMap;function z(e,r){const t=p.get(e);return t?(p.delete(e),t(r)):Promise.resolve()}export{q as m,W as s,z as u};
