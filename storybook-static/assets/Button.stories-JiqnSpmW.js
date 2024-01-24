import{r as I,f as p,d,g as P,j as T,t as q,n as E,k as F,o as m}from"./vue.esm-bundler-yRObWDPG.js";import{_ as j}from"./_plugin-vue_export-helper-x3n3nnut.js";const W={name:"ButtonNds",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},icon:{type:String,default:""},disabled:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},type:{type:String,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:a}){return e=I(e),{classes:p(()=>({"btn-nds":!0,"btn-with-icon":e.icon,"btn-with-outline":e.outline,"btn-nds--primary":e.primary,"btn-nds--secondary":e.secondary,"btn-nds--disabled":e.disabled,[`btn-nds--${e.size||"medium"}`]:!0})),style:p(()=>({backgroundColor:e.backgroundColor})),onClick(){a("click")}}}},A=["type"],G={key:0,class:"icon"},J=["innerHTML"],K={class:"btn-label"};function Q(e,a,t,n,U,X){return m(),d("button",{type:t.type,class:E(n.classes),onClick:a[0]||(a[0]=(...Z)=>n.onClick&&n.onClick(...Z)),style:F(n.style)},[t.icon?(m(),d("span",G,[(m(),d("svg",{class:"icon",width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",innerHTML:t.icon},null,8,J))])):P("",!0),T("span",K,q(t.label),1)],14,A)}const R=j(W,[["render",Q]]);W.__docgenInfo={displayName:"ButtonNds",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"secondary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"icon",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"outline",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["D:/Catatanprogammer/Frontend-developer/Learning Path/Storybook/Storybook for platform/tailwind/nds-base-ui-lib/src/components/VueBased/ButtonNds/index.vue"]};const ee={title:"Documentations/Component/Button",component:R,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},onClick:{},size:{control:{type:"select"},options:["small","medium","large"]}},parameters:{order:2}},r={args:{primary:!0,label:"Button"}},s={args:{secondary:!0,label:"Button"}},o={args:{disabled:!0,label:"Button"}},l={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}},i={args:{label:"Button",icon:'<path d="M5.25 0.25L3.8775 1.75H1.5C0.675 1.75 0 2.425 0 3.25V12.25C0 13.075 0.675 13.75 1.5 13.75H13.5C14.325 13.75 15 13.075 15 12.25V3.25C15 2.425 14.325 1.75 13.5 1.75H11.1225L9.75 0.25H5.25ZM7.5 11.5C5.43 11.5 3.75 9.82 3.75 7.75C3.75 5.68 5.43 4 7.5 4C9.57 4 11.25 5.68 11.25 7.75C11.25 9.82 9.57 11.5 7.5 11.5Z" fill="white" />'}},u={args:{label:"Button",outline:!0}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,C,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    secondary: true,
    label: 'Button'
  }
}`,...(B=(C=s.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var S,_,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Button'
  }
}`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var h,v,V;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(V=(v=l.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var w,z,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(H=(z=c.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var x,L,M;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    icon: '<path d="M5.25 0.25L3.8775 1.75H1.5C0.675 1.75 0 2.425 0 3.25V12.25C0 13.075 0.675 13.75 1.5 13.75H13.5C14.325 13.75 15 13.075 15 12.25V3.25C15 2.425 14.325 1.75 13.5 1.75H11.1225L9.75 0.25H5.25ZM7.5 11.5C5.43 11.5 3.75 9.82 3.75 7.75C3.75 5.68 5.43 4 7.5 4C9.57 4 11.25 5.68 11.25 7.75C11.25 9.82 9.57 11.5 7.5 11.5Z" fill="white" />'
  }
}`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var N,D,O;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Button',
    outline: true
  }
}`,...(O=(D=u.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ae=["Primary","Secondary","Disabled","Large","Small","WithIcon","WithOutline"];export{o as Disabled,l as Large,r as Primary,s as Secondary,c as Small,i as WithIcon,u as WithOutline,ae as __namedExportsOrder,ee as default};
