import{p as I,Y as p,a1 as v,e as M,a2 as S,a3 as b}from"./props-D-11tLXy.js";import{i as _}from"./if-DG_9oCP6.js";import{h as w}from"./html-DH_r2Hsk.js";import{i as q}from"./lifecycle-Dq4UX-i8.js";import{o as H}from"./index-client-QvcM8E6w.js";var T=S("<div><!></div>"),z=S("<div><!></div>");function f(c,e){I(e,!1);let r=p(e,"content",8,""),n=p(e,"onCreated",8,()=>{});H(()=>{const t=document.querySelector(".ds-accordion");n()(t)}),q();var a=z(),i=b(a);{var o=t=>{var d=T(),s=b(d);w(s,r),v(t,d)};_(i,t=>{r()&&t(o)})}v(c,a),M()}f.__docgen={version:3,name:"AccordionContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"onCreated",visibility:"public",keywords:[],kind:"let",type:{kind:"function",text:"() => void"},static:!1,readonly:!1,defaultValue:"function"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const g=({items:c,size:e="default"})=>{const r=["ds-accordion"];e==="condensed"&&r.push("condensed");const n=c.map((i,o)=>`
    <div class="item">
      <button class="accordion-button" type="button" aria-expanded="false" data-index="${o}">
        ${i.title}
        <i class="fa fa-chevron-down"></i>
      </button>
      <div class="content">${i.content}</div>
    </div>
  `);return`
    <div class="${r.join(" ")}">
      ${n.join("")}
    </div>
    
      <script>
          document.addEventListener('DOMContentLoaded', () => {
          console.log('DOMContentLoaded event fired');

              const accordions = document.querySelectorAll('.ds-accordion');
              console.log('accordions', accordions);
              accordions.forEach(accordion => {
                  const buttons = accordion.querySelectorAll('.accordion-button');
              console.log('buttons', buttons);

                  buttons.forEach(button => {
                      button.addEventListener('click', () => {
                        console.log('Button Clicked', button);

                        const content = button.nextElementSibling;
                        console.log('content', content);

                          const expanded = button.getAttribute('aria-expanded') === 'true';
                          button.setAttribute('aria-expanded', (!expanded).toString());
                          content.classList.toggle('open');
                          const icon = button.querySelector('i.fa');
                          console.log('icon', icon);

                          if (!icon) return;
                          if (expanded) {
                              icon.classList.remove('fa-chevron-up');
                              icon.classList.add('fa-chevron-down');
                          } else {
                              icon.classList.remove('fa-chevron-down');
                              icon.classList.add('fa-chevron-up');
                          }
                      });
                  });
              });
          });
      <\/script>
    
  `},Y={title:"Html Components/Accordion",component:f,tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of accordion items"},size:{control:"select",options:["default","condensed"],description:"Size of the accordion"},content:{table:{disable:!0}}},render:c=>{const e=g(c);return{Component:f,props:{content:e,onCreated:n=>{n&&n.addEventListener("click",a=>{if(!(a.target instanceof HTMLElement))return;const o=a.target.closest(".accordion-button");if(!o)return;const t=o.nextElementSibling;if(!(t instanceof HTMLElement))return;const d=o.getAttribute("aria-expanded")==="true";o.setAttribute("aria-expanded",(!d).toString());const s=o.querySelector("i.fa");if(!s)return;d?(s.classList.remove("fa-chevron-up"),s.classList.add("fa-chevron-down")):(s.classList.remove("fa-chevron-down"),s.classList.add("fa-chevron-up"));const k=Array.from(n.querySelectorAll(".item")).map(l=>l.querySelector(".content")).filter(Boolean);t.classList.contains("open")?t.classList.remove("open"):(k.forEach(l=>{l instanceof HTMLElement&&l.classList.remove("open")}),t.classList.add("open"))})}}}},parameters:{docs:{source:{transform:(c,e)=>g(e.args)}}}},E=[{title:"Accordion Item 1",content:"Content for item 1."},{title:"Accordion Item 2",content:"Content for item 2."},{title:"Accordion Item 3",content:"Content for item 3."}],u={args:{items:E,size:"default"}},m={args:{items:E,size:"condensed"}};var L,y,h;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'default'
  }
}`,...(h=(y=u.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var A,C,x;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'condensed'
  }
}`,...(x=(C=m.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const F=["Default","Condensed"];export{m as Condensed,u as Default,F as __namedExportsOrder,Y as default};
