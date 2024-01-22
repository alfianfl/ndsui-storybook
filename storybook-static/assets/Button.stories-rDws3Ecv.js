import{r as N,g as i,b as V,t as L,n as P,j as q,o as E}from"./vue.esm-bundler-lMiOyRe4.js";import{_ as F}from"./_plugin-vue_export-helper-x3n3nnut.js";const x={name:"ButtonNds",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:a}){return e=N(e),{classes:i(()=>({"btn-nds":!0,"btn-nds--primary":e.primary,"btn-nds--secondary":e.secondary,"btn-nds--disabled":e.disabled,[`btn-nds--${e.size||"medium"}`]:!0})),style:i(()=>({backgroundColor:e.backgroundColor})),onClick(){a("click")}}}},O=["type"];function h(e,a,c,r,w,I){return E(),V("button",{type:c.type,class:P(r.classes),onClick:a[0]||(a[0]=(...D)=>r.onClick&&r.onClick(...D)),style:q(r.style)},L(c.label),15,O)}const j=F(x,[["render",h]]);x.__docgenInfo={displayName:"ButtonNds",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["D:/Catatanprogammer/Frontend-developer/Learning Path/Storybook/Storybook for platform/tailwind/nds-base-ui-lib/src/components/VueBased/ButtonNds/index.vue"]};const A={title:"Documentations/Component/Button",component:j,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}},parameters:{order:2}},t={args:{primary:!0,label:"Button"}},s={args:{secondary:!0,label:"Button"}},n={args:{disabled:!0,label:"Button"}},o={args:{size:"large",label:"Button"}},l={args:{size:"small",label:"Button"}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    secondary: true,
    label: 'Button'
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,B;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Button'
  }
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var k,S,_;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(_=(S=o.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var C,z,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(v=(z=l.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const G=["Primary","Secondary","Disabled","Large","Small"];export{n as Disabled,o as Large,t as Primary,s as Secondary,l as Small,G as __namedExportsOrder,A as default};
