import{a9 as j,Q as M,aa as U,ab as m,ac as y,ad as G,ae as B,af as $,k as c,ag as z,a4 as H,h as A,a5 as D,ah as Q,ai as V,aj as T,ak as Z,x as J,al as W,am as X,S as C,an as F,m as L,ao as k,F as g,ap as ee,P as re,aq as d}from"./store-DKrw96s8.js";j();const ne={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function le(e,r,n){return new Proxy({props:e,exclude:r},ne)}const se={get(e,r){if(!e.exclude.includes(r))return c(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=ae({get[r](){return e.props[r]}},r,B)),e.special[r](n),D(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),D(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function te(e,r){return new Proxy({props:e,exclude:r,special:{},version:M(0)},se)}const ue={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,n){let s=e.props.length;for(;s--;){let a=e.props[s];d(a)&&(a=a());const i=m(a,r);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(d(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const a=m(s,r);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,r){if(r===C||r===F)return!1;for(let n of e.props)if(d(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){d(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function fe(...e){return new Proxy({props:e},ue)}function q(e){for(var r=g,n=g;r!==null&&!(r.f&(Q|V));)r=r.parent;try{return T(r),e()}finally{T(n)}}function ae(e,r,n,s){var I;var a=(n&Z)!==0,i=!J||(n&W)!==0,v=(n&X)!==0,K=(n&ee)!==0,S=!1,t;v?[t,S]=U(()=>e[r]):t=e[r];var N=C in e||F in e,p=((I=m(e,r))==null?void 0:I.set)??(N&&v&&r in e?u=>e[r]=u:void 0),l=s,h=!0,P=!1,E=()=>(P=!0,h&&(h=!1,K?l=A(s):l=s),l);t===void 0&&s!==void 0&&(p&&i&&y(),t=E(),p&&p(t));var f;if(i)f=()=>{var u=e[r];return u===void 0?E():(h=!0,P=!1,u)};else{var O=q(()=>(a?L:k)(()=>e[r]));O.f|=G,f=()=>{var u=c(O);return u!==void 0&&(l=void 0),u===void 0?l:u}}if(!(n&B))return f;if(p){var Y=e.$$legacy;return function(u,o){return arguments.length>0?((!i||!o||Y||S)&&p(o?f():u),u):f()}}var b=!1,R=!1,w=re(t),_=q(()=>L(()=>{var u=f(),o=c(w);return b?(b=!1,R=!0,o):(R=!1,w.v=u)}));return a||(_.equals=$),function(u,o){if(arguments.length>0){const x=o?c(_):i&&v?z(u):u;return _.equals(x)||(b=!0,H(w,x),P&&l!==void 0&&(l=x),A(()=>c(_))),u}return c(_)}}export{te as l,ae as p,le as r,fe as s};
