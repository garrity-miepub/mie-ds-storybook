import{b as X,n as W,y as Y,a as G,I as k,o as J,d as K,q as Z,D as y,F as z,G as $,H as j,J as ee,z as ne,K as re,v as ae,L as b,M as R,N as ie,O as B,P,Q as le,R as fe,T as ue}from"./props-D-11tLXy.js";import{h as te}from"./hydration-C_mtSyjW.js";function he(i,e){return e}function ve(i,e,n,u){for(var v=[],s=e.length,c=0;c<s;c++)$(e[c].e,v,!0);var E=s>0&&v.length===0&&n!==null;if(E){var d=n.parentNode;j(d),d.append(n),u.clear(),A(i,e[0].prev,e[s-1].next)}ee(v,()=>{for(var I=0;I<s;I++){var o=e[I];E||(u.delete(o.k),A(i,o.prev,o.next)),ne(o.e,!E)}})}function pe(i,e,n,u,v,s=null){var c=i,E={flags:e,items:new Map,first:null},d=(e&P)!==0;if(d){var I=i;c=I.appendChild(X())}var o=null,h=!1;W(()=>{var p=n(),r=Y(p)?p:p==null?[]:G(p),l=r.length;if(!(h&&l===0)){h=l===0;{var t=re;se(r,E,c,v,e,(t.f&k)!==0,u)}s!==null&&(l===0?o?J(o):o=K(()=>s(c)):o!==null&&Z(o,()=>{o=null})),n()}})}function se(i,e,n,u,v,s,c,E){var D,L,O,q;var d=(v&le)!==0,I=(v&(b|R))!==0,o=i.length,h=e.items,p=e.first,r=p,l,t=null,w,_=[],m=[],T,C,a,f;if(d)for(f=0;f<o;f+=1)T=i[f],C=c(T,f),a=h.get(C),a!==void 0&&((D=a.a)==null||D.measure(),(w??(w=new Set)).add(a));for(f=0;f<o;f+=1){if(T=i[f],C=c(T,f),a=h.get(C),a===void 0){var Q=r?r.e.nodes_start:n;t=ce(Q,e,t,t===null?e.first:t.next,T,C,f,u,v),h.set(C,t),_=[],m=[],r=t.next;continue}if(I&&oe(a,T,f,v),a.e.f&k&&(J(a.e),d&&((L=a.a)==null||L.unfix(),(w??(w=new Set)).delete(a))),a!==r){if(l!==void 0&&l.has(a)){if(_.length<m.length){var M=m[0],x;t=M.prev;var S=_[0],H=_[_.length-1];for(x=0;x<_.length;x+=1)F(_[x],M,n);for(x=0;x<m.length;x+=1)l.delete(m[x]);A(e,S.prev,H.next),A(e,t,S),A(e,H,M),r=M,t=H,f-=1,_=[],m=[]}else l.delete(a),F(a,r,n),A(e,a.prev,a.next),A(e,a,t===null?e.first:t.next),A(e,t,a),t=a;continue}for(_=[],m=[];r!==null&&r.k!==C;)(s||!(r.e.f&k))&&(l??(l=new Set)).add(r),m.push(r),r=r.next;if(r===null)continue;a=r}_.push(a),t=a,r=a.next}if(r!==null||l!==void 0){for(var g=l===void 0?[]:G(l);r!==null;)(s||!(r.e.f&k))&&g.push(r),r=r.next;var N=g.length;if(N>0){var U=v&P&&o===0?n:null;if(d){for(f=0;f<N;f+=1)(O=g[f].a)==null||O.measure();for(f=0;f<N;f+=1)(q=g[f].a)==null||q.fix()}ve(e,g,U,h)}}d&&ae(()=>{var V;if(w!==void 0)for(a of w)(V=a.a)==null||V.apply()}),y.first=e.first&&e.first.e,y.last=t&&t.e}function oe(i,e,n,u){u&b&&z(i.v,e),u&R?z(i.i,n):i.i=n}function ce(i,e,n,u,v,s,c,E,d,I){var o=(d&b)!==0,h=(d&fe)===0,p=o?h?ie(v):B(v):v,r=d&R?B(c):c,l={i:r,v:p,k:s,a:null,e:null,prev:n,next:u};try{return l.e=K(()=>E(i,p,r),te),l.e.prev=n&&n.e,l.e.next=u&&u.e,n===null?e.first=l:(n.next=l,n.e.next=l.e),u!==null&&(u.prev=l,u.e.prev=l.e),l}finally{}}function F(i,e,n){for(var u=i.next?i.next.e.nodes_start:n,v=e?e.e.nodes_start:n,s=i.e.nodes_start;s!==u;){var c=ue(s);v.before(s),s=c}}function A(i,e,n){e===null?i.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}export{pe as e,he as i};
