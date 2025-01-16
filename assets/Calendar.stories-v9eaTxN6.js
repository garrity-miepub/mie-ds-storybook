import{C as v}from"./Calendar-7vhXS1Mc.js";import"./store-DIQEHCOu.js";import"./props-DO17Jqv7.js";import"./render-CMzKQT-F.js";import"./events-DmGDAng9.js";import"./each-5udpwlkd.js";import"./hydration-C_mtSyjW.js";import"./class-Ds9EAFiq.js";import"./lifecycle-9Sjl64q2.js";import"./index-client-BsC9Mbj1.js";const{Channel:w}=__STORYBOOK_MODULE_CHANNELS__,{global:i}=__STORYBOOK_MODULE_GLOBAL__,{logger:o}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{STORY_RENDERED:F,UPDATE_STORY_ARGS:X,RESET_STORY_ARGS:j,UPDATE_GLOBALS:J,FORCE_RE_RENDER:R}=__STORYBOOK_MODULE_CORE_EVENTS__;function T(){let e={setHandler:()=>{},send:()=>{}};return new w({transport:e})}var y=class{constructor(){this.getChannel=()=>{if(!this.channel){let e=T();return this.setChannel(e),e}return this.channel},this.getServerChannel=()=>{if(!this.serverChannel)throw new Error("Accessing non-existent serverChannel");return this.serverChannel},this.ready=()=>this.promise,this.hasChannel=()=>!!this.channel,this.hasServerChannel=()=>!!this.serverChannel,this.setChannel=e=>{this.channel=e,this.resolve()},this.setServerChannel=e=>{this.serverChannel=e},this.promise=new Promise(e=>{this.resolve=()=>e(this.getChannel())})}},u="__STORYBOOK_ADDONS_PREVIEW";function k(){return i[u]||(i[u]=new y),i[u]}var b=k(),N=(e,r)=>e.length===r.length&&e.every((n,a)=>n===r[a]),E=()=>new Error("Storybook preview hooks can only be called inside decorators and story functions.");function C(){return i.STORYBOOK_HOOKS_CONTEXT||null}function A(){let e=C();if(e==null)throw E();return e}function L(e,r,n){let a=A();if(a.currentPhase==="MOUNT"){n!=null&&!Array.isArray(n)&&o.warn(`${e} received a final argument that is not an array (instead, received ${n}). When specified, the final argument must be an array.`);let t={name:e,deps:n};return a.currentHooks.push(t),r(t),t}if(a.currentPhase==="UPDATE"){let t=a.getNextHook();if(t==null)throw new Error("Rendered more hooks than during the previous render.");return t.name!==e&&o.warn(`Storybook has detected a change in the order of Hooks${a.currentDecoratorName?` called by ${a.currentDecoratorName}`:""}. This will lead to bugs and errors if not fixed.`),n!=null&&t.deps==null&&o.warn(`${e} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`),n!=null&&t.deps!=null&&n.length!==t.deps.length&&o.warn(`The final argument passed to ${e} changed size between renders. The order and size of this array must remain constant.
Previous: ${t.deps}
Incoming: ${n}`),(n==null||t.deps==null||!N(n,t.deps))&&(r(t),t.deps=n),t}throw E()}function P(e,r,n){let{memoizedState:a}=L(e,t=>{t.memoizedState=r()},n);return a}function H(e,r){return P(e,()=>({current:r}),[])}function U(){let e=C();if(e!=null&&e.currentPhase!=="NONE")e.hasUpdates=!0;else try{b.getChannel().emit(R)}catch{o.warn("State updates of Storybook preview hooks work only in browser")}}function Y(e,r){let n=H(e,typeof r=="function"?r():r),a=t=>{n.current=typeof t=="function"?t(n.current):t,U()};return[n.current,a]}function B(e){return Y("useState",e)}const Q={title:"Svelte Components/Calendar",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"**IN PROGRESS** Please note that the styling of this component is not yet finalized. Expect design refinements in upcoming releases. <br /> **npm install**: mie-ds-calendar"}}},argTypes:{value:{control:"date",description:"The currently selected date"},onSelect:{action:"selectedDate",description:"Action triggered when a date is selected",table:{disable:!0}}}},d=e=>{const[r,n]=B(e.value||null);return{Component:v,props:{value:r,onSelect:t=>{n(t),e.onSelect(t)}}}},c=d.bind({}),s=d.bind({});s.args={value:new Date};const l=d.bind({});l.args={value:new Date(2024,9,15)};var h,S,p;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [selectedDate, setSelectedDate] = useState(args.value || null);
  const handleSelect = date => {
    setSelectedDate(date);
    args.onSelect(date);
  };
  return {
    Component: Calendar,
    props: {
      value: selectedDate,
      onSelect: handleSelect
    }
  };
}`,...(p=(S=c.parameters)==null?void 0:S.docs)==null?void 0:p.source}}};var m,g,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [selectedDate, setSelectedDate] = useState(args.value || null);
  const handleSelect = date => {
    setSelectedDate(date);
    args.onSelect(date);
  };
  return {
    Component: Calendar,
    props: {
      value: selectedDate,
      onSelect: handleSelect
    }
  };
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var _,O,D;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  const [selectedDate, setSelectedDate] = useState(args.value || null);
  const handleSelect = date => {
    setSelectedDate(date);
    args.onSelect(date);
  };
  return {
    Component: Calendar,
    props: {
      value: selectedDate,
      onSelect: handleSelect
    }
  };
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const Z=["Default","WithSelectedDate","DifferentMonth"];export{c as Default,l as DifferentMonth,s as WithSelectedDate,Z as __namedExportsOrder,Q as default};
