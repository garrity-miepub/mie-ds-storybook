import{C as D}from"./Calendar-RC95Kw43.js";import"./props-D-11tLXy.js";import"./render-B6mKzPQC.js";import"./events-ef7BX3Ie.js";import"./each-CLSpy_uj.js";import"./hydration-C_mtSyjW.js";import"./class-Ds9EAFiq.js";import"./lifecycle-Dq4UX-i8.js";const E={title:"Svelte Components/Calendar",component:D,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases."}}},argTypes:{selectedDate:{control:"date",description:"The currently selected date"},onSelect:{action:"selectedDate",description:"Action triggered when a date is selected"}}},o=({selectedDate:u,onSelect:S})=>({Component:D,props:{selectedDate:u,onSelect:S}}),n=o.bind({}),e=o.bind({});e.args={selectedDate:new Date};const t=o.bind({});t.args={selectedDate:new Date(2024,9,15)};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`({
  selectedDate,
  onSelect
}) => ({
  Component: Calendar,
  props: {
    selectedDate,
    onSelect
  }
})`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,d,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`({
  selectedDate,
  onSelect
}) => ({
  Component: Calendar,
  props: {
    selectedDate,
    onSelect
  }
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`({
  selectedDate,
  onSelect
}) => ({
  Component: Calendar,
  props: {
    selectedDate,
    onSelect
  }
})`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const T=["Default","WithSelectedDate","DifferentMonth"];export{n as Default,t as DifferentMonth,e as WithSelectedDate,T as __namedExportsOrder,E as default};
