import{ar as H,as as F,a0 as _}from"./store-DKrw96s8.js";import{p as k}from"./props-WZpD2vyg.js";import{h as x}from"./html-BjPEsh1c.js";const i=({selectedDate:n=null,currentDate:r=new Date,onSelect:p=()=>{}})=>{let a=r.getMonth(),s=r.getFullYear();const b=["January","February","March","April","May","June","July","August","September","October","November","December"],C=new Date(s,a,1),m=new Date(s,a+1,0).getDate(),O=C.getDay();function S(){const e=[],o=new Date(s,a,0).getDate(),c=O,w=42-m-c;for(let t=0;t<c;t++)e.push({day:o-c+t+1,monthOffset:-1});for(let t=1;t<=m;t++){const f=new Date(s,a,t),L=n&&T(n,f);e.push({day:t,monthOffset:0,date:f,isSelected:L})}for(let t=1;t<=w;t++)e.push({day:t,monthOffset:1});return e}function T(e,o){return e.getDate()===o.getDate()&&e.getMonth()===o.getMonth()&&e.getFullYear()===o.getFullYear()}const $=S();return`
        <div class="calendar">
          <div class="calendar-header">
              <button class="nav-button" aria-label="minus"></button>
            <span class="month-year">${b[a]} ${s}</span>
              <button class="nav-button" aria-label="plus"></button>
          </div>
          <div class="calendar-days-header">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
          </div>
          <div class="calendar-grid">
            ${$.map(e=>`
                <button
                    class="calendar-day ${e.monthOffset!==0?"other-month":""} ${e.isSelected?"selected":""}"
                    data-day="${e.day}"
                    data-month-offset="${e.monthOffset}"
                    ${e.monthOffset===0?`data-date="${e.date}"`:""}
                >
                ${e.day}
                </button>
             `).join("")}
          </div>
        </div>
      `};function u(n,r){let p=k(r,"content",8,"");var a=H(),s=F(a);x(s,p),_(n,a)}u.__docgen={version:3,name:"CalendarContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J={title:"HTML Components/Calendar",tags:["autodocs"],argTypes:{selectedDate:{control:"date",description:"The selected date",defaultValue:null}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(n,r)=>i(r.args)}}}},d={render:n=>({Component:u,props:{content:i(n)}}),args:{selectedDate:null}},l={render:n=>({Component:u,props:{content:i(n)}}),args:{selectedDate:new Date(2024,2,15)}};var h,g,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCalendarHTML(args)
    }
  }),
  args: {
    selectedDate: null
  }
}`,...(v=(g=d.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,D,M;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createCalendarHTML(args)
    }
  }),
  args: {
    selectedDate: new Date(2024, 2, 15)
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const P=["Default","WithSelectedDate"];export{d as Default,l as WithSelectedDate,P as __namedExportsOrder,J as default};
