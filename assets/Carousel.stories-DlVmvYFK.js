import{ar as g,as as v,a0 as y}from"./store-DKrw96s8.js";import{p as _}from"./props-WZpD2vyg.js";import{h as f}from"./html-BjPEsh1c.js";const r=({slides:t=[],interval:s=5e3})=>`
    <div class="ds-carousel" data-interval="${s}" data-current-index="0">
        <div class="ds-carousel__slides">
        ${t.map((a,e)=>`<div class="ds-carousel__slide ${e===0?"active":""}" data-index="${e}">
               ${a}
             </div>`).join("")}
        </div>
        <button class="ds-carousel__control ds-carousel__control--prev" aria-label="Previous Slide">
            <svg viewBox="0 0 24 24"><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
        </button>
        <button class="ds-carousel__control ds-carousel__control--next" aria-label="Next Slide">
           <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/></svg>
        </button>
        <div class="ds-carousel__indicators">
        ${t.map((a,e)=>`<button class="ds-carousel__indicator ${e===0?"active":""}" aria-label="Go to slide ${e+1}" data-index="${e}"></button>`).join("")}
         </div>
    </div>
    `;function l(t,s){let n=_(s,"content",8,"");var a=g(),e=v(a);f(e,n),y(t,a)}l.__docgen={version:3,name:"CarouselContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const T={title:"HTML Components/Carousel",tags:["autodocs"],argTypes:{slides:{control:"array",description:"Array of HTML strings for the carousel slides",defaultValue:['<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">','<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">','<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">']},interval:{control:"number",description:"The interval at which the carousel rotates",defaultValue:5e3}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(t,s)=>r(s.args)}}}},o={render:t=>({Component:l,props:{content:r(t)}}),args:{slides:['<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">','<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">','<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">']}},i={render:t=>({Component:l,props:{content:r(t)}}),args:{slides:['<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">','<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">','<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">'],interval:3e3}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCarouselHTML(args)
    }
  }),
  args: {
    slides: ['<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">', '<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">', '<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">']
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,m,u;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCarouselHTML(args)
    }
  }),
  args: {
    slides: ['<img src="https://placekitten.com/800/400" alt="First slide" style="width: 100%; height: auto;">', '<img src="https://placekitten.com/801/400" alt="Second slide" style="width: 100%; height: auto;">', '<img src="https://placekitten.com/802/400" alt="Third slide" style="width: 100%; height: auto;">'],
    interval: 3000
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const L=["Default","CustomInterval"];export{i as CustomInterval,o as Default,L as __namedExportsOrder,T as default};
