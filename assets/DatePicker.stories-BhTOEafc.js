import{ar as S,as as b,a0 as w}from"./store-DIQEHCOu.js";import{p as x}from"./props-DO17Jqv7.js";import{h as V}from"./html-Dgl4xvzF.js";const a=({value:e=null,format:t="MM/DD/YYYY",includeTime:d=!1,showCalendar:n=!1,inputValue:o=""})=>{const P=e?(s=>{if(!s)return"";const Y=String(s.getMonth()+1).padStart(2,"0"),H=String(s.getDate()).padStart(2,"0"),L=s.getFullYear();return t.replace("MM",Y).replace("DD",H).replace("YYYY",L)})(e):o;return`
    <div class="date-picker" data-show-calendar="${n}" data-value="${e}">
        <div class="date-input-group">
            <input
                type="text"
                class="date-input"
                placeholder="${t}"
                value="${P}"
                data-input-value="${o}"
                
                />
            <button type="button" class="calendar-icon-button" aria-label="calendar icon">
                <i class="fa-regular fa-calendar"></i>
            </button>
        </div>
        ${d?`
            <div class="time-input-group">
                <input type="time" class="time-input" />
            </div>
            `:""}
            ${n?`
                <div class="calendar-popup"></div>
            `:""}
    </div>
    `};function r(e,t){let d=x(t,"content",8,"");var n=S(),o=b(n);V(o,d),w(e,n)}r.__docgen={version:3,name:"DatePickerContent.svelte",data:[{name:"content",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const I={title:"HTML Components/DatePicker",tags:["autodocs"],argTypes:{value:{control:"date",description:"The selected date",defaultValue:null},format:{control:"text",description:"The date format",defaultValue:"MM/DD/YYYY"},includeTime:{control:"boolean",description:"Include time input",defaultValue:!1},showCalendar:{control:"boolean",description:"Whether the calendar is open or not",defaultValue:!1},inputValue:{control:"text",description:"The value of the input",defaultValue:""}},parameters:{docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."},source:{language:"html",transform:(e,t)=>a(t.args)}}}},c={render:e=>({Component:r,props:{content:a(e)}})},i={render:e=>({Component:r,props:{content:a(e)}}),args:{value:new Date(2024,2,15)}},p={render:e=>({Component:r,props:{content:a(e)}}),args:{includeTime:!0}},l={render:e=>({Component:r,props:{content:a(e)}}),args:{showCalendar:!0}};var u,m,g;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDatePickerHTML(args)
    }
  })
}`,...(g=(m=c.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var f,h,D;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDatePickerHTML(args)
    }
  }),
  args: {
    value: new Date(2024, 2, 15)
  }
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var T,v,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDatePickerHTML(args)
    }
  }),
  args: {
    includeTime: true
  }
}`,...(C=(v=p.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var M,k,y;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => ({
    Component: HTMLContent,
    props: {
      content: createDatePickerHTML(args)
    }
  }),
  args: {
    showCalendar: true
  }
}`,...(y=(k=l.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};const R=["Default","WithSelectedDate","WithTime","CalendarOpen"];export{l as CalendarOpen,c as Default,i as WithSelectedDate,p as WithTime,R as __namedExportsOrder,I as default};
