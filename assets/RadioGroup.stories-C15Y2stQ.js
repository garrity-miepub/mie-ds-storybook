import"./chunk-D5ZWXAHU-CGElDDNX.js";import{p as he,Y as ve,Z as ye,_ as T,$ as G,e as fe,a0 as R,a1 as w,l as be,a2 as W,k as r}from"./store-T5UnPX9g.js";import{p as l}from"./props-C9IDeoNK.js";import{s as F}from"./render-DSWJi0hW.js";import{i as ke}from"./if-BZcF3WLq.js";import{e as Se}from"./each-D4Oo9sU_.js";import{s as d}from"./attributes-BfksUnjX.js";import{s as V,t as u}from"./class-Ds9EAFiq.js";import{c as we}from"./input-CgAcMd-e.js";import{i as Ce}from"./lifecycle-mHODSN2N.js";import{c as _e}from"./index-client-DCCy74BY.js";import"./v4-CQkTLCs1.js";import"./events-DOkqN8RV.js";import"./hydration-C_mtSyjW.js";import"./attributes-Jce5emvo.js";var xe=R('<span class="radio-group-label"> </span>'),ze=R('<div class="radio-option"><input type="radio" aria-describedby="/"> <label> </label></div>'),Te=R('<div role="radiogroup"><!> <div class="radio-options-wrapper"></div></div>');function E(c,n){he(n,!1);const le=[];let de=l(n,"options",24,()=>[]),b=l(n,"name",8),k=l(n,"value",12,void 0),C=l(n,"label",8,""),N=l(n,"direction",8,"vertical"),L=l(n,"size",8,"default"),_=l(n,"disabled",8,!1);const ce=_e(),ue=`radiogroup-${b()}-${Math.random().toString(36).substring(2,9)}`,x=C()?`label-${ue}`:void 0;ve(()=>be(k()),()=>{ce("change",k())}),ye(),Ce();var o=Te();d(o,"aria-labelledby",x);var j=w(o);{var pe=i=>{var e=xe();d(e,"id",x);var S=w(e);T(()=>F(S,C())),G(i,e)};ke(j,i=>{C()&&x&&i(pe)})}var ge=W(j,2);Se(ge,5,de,i=>i.value,(i,e)=>{var S=ze(),t=w(S),D,z=W(t,2),me=w(z);T(()=>{d(t,"id",`radio-${b()??""}-${r(e).value??""}`),d(t,"name",b()),D!==(D=r(e).value)&&(t.value=(t.__value=r(e).value)==null?"":r(e).value),t.disabled=_()||r(e).disabled||!1,V(t,`radio-input radio-size-${L()??""}`),d(z,"for",`radio-${b()??""}-${r(e).value??""}`),V(z,`radio-label radio-size-${L()??""}`),F(me,r(e).label)}),we(le,[],t,()=>(r(e).value,k()),k),G(i,S)}),T(()=>{d(o,"aria-disabled",_()),u(o,"mie",!0),u(o,"radio-group",!0),u(o,"radio-group-vertical",N()==="vertical"),u(o,"radio-group-horizontal",N()==="horizontal"),u(o,"radio-group-disabled",_())}),G(c,o),fe()}E.__docgen={version:3,name:"RadioGroup.svelte",data:[{name:"options",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"array",text:"any[]"},static:!1,readonly:!1,defaultValue:"[]"},{name:"name",visibility:"public",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"type",type:"any",text:"any"},static:!1,readonly:!1},{name:"value",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"other",text:"undefined"},static:!1,readonly:!1},{name:"label",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'""'},{name:"direction",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"vertical"'},{name:"size",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1,defaultValue:'"default"'},{name:"disabled",visibility:"public",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const Ge=[{label:"SvelteKit",value:"sveltekit"},{label:"Next.js",value:"nextjs"},{label:"Nuxt.js",value:"nuxtjs"},{label:"Remix",value:"remix"},{label:"Astro (Disabled)",value:"astro",disabled:!0}],qe={title:"Svelte Components/RadioGroup",component:E,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-radiogroup <br/><br/> The RadioGroup component renders a set of radio buttons, ensuring only one can be selected at a time. Provide options via the `options` prop and bind to the `value` prop to get/set the selected value."}}},argTypes:{options:{control:"object",description:"Array of options objects. Each object should have `label` (string) and `value` (string|number). Can optionally include `disabled` (boolean)."},value:{control:"text",description:"The currently selected value from the `options` array. Use `bind:value` in consuming components."},name:{control:"text",description:"The native `name` attribute shared by all radio buttons in the group. Essential for forms and accessibility."},label:{control:"text",description:"An optional visible label for the entire radio group (recommended for accessibility)."},direction:{control:{type:"select"},options:["vertical","horizontal"],description:"Layout direction for the radio buttons within the group."},size:{control:{type:"select"},options:["small","default","large"],description:"Visual size applied to all radio buttons and their labels in the group."},disabled:{control:"boolean",description:"Disables the entire radio group, preventing interaction."},onChange:{action:"valueChanged",description:"Event dispatched when the selected value changes. The event detail contains the new selected value."}}},s=c=>({Component:E,props:{...c,value:c.value},on:{change:n=>{c.onChange(n.detail)}}}),a=s.bind({});a.args={name:"framework-default",options:Ge,label:"Select Your Framework",value:void 0,direction:"vertical",size:"default",disabled:!1};const p=s.bind({});p.args={...a.args,name:"framework-preselected",value:"nextjs",label:"Select Your Framework (Next.js pre-selected)"};const g=s.bind({});g.args={...a.args,name:"framework-horizontal",direction:"horizontal",label:"Select Horizontally",value:"remix"};const m=s.bind({});m.args={...a.args,name:"framework-small",size:"small",label:"Select Framework (Small)",value:"sveltekit"};const h=s.bind({});h.args={...a.args,name:"framework-large",size:"large",label:"Select Framework (Large)",value:"nuxtjs"};const v=s.bind({});v.args={...a.args,name:"framework-disabled",label:"Framework Selection (All Disabled)",value:"sveltekit",disabled:!0};const y=s.bind({});y.args={...a.args,name:"framework-no-label",label:"",value:"nextjs"};const f=s.bind({});f.args={...a.args,name:"yes-no",label:"Confirm Choice",options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],value:"yes",direction:"horizontal"};var O,P,A;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(A=(P=a.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var Y,H,I;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(I=(H=p.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var q,K,M;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var U,Z,B;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(B=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:B.source}}};var J,Q,X;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var $,ee,ae;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,oe,te;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(te=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,se,ie;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  Component: RadioGroup,
  props: {
    ...args,
    // Ensure the 'value' passed is reactive from args
    value: args.value
  },
  // Listen to the component's 'change' event and trigger the Storybook action
  on: {
    change: event => {
      // Call the action function passed via args.onChange
      // Storybook automatically provides this function when action is defined in argTypes
      args.onChange(event.detail);
      // Note: We don't manually update args.value here. Storybook's arg system
      // should ideally handle the update if controls are set up correctly,
      // or you might need @storybook/addon-svelte-csf if using older versions
      // for full two-way binding simulation in controls.
      // The action log is the primary confirmation here.
    }
  }
})`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const Ke=["Default","PreSelected","Horizontal","SmallSize","LargeSize","DisabledGroup","NoGroupLabel","FewerOptions"];export{a as Default,v as DisabledGroup,f as FewerOptions,g as Horizontal,h as LargeSize,y as NoGroupLabel,p as PreSelected,m as SmallSize,Ke as __namedExportsOrder,qe as default};
