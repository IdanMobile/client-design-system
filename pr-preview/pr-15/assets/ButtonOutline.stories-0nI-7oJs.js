import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{R as K}from"./index-DCXu2c-y.js";import{B as Q}from"./Button-DoEnHtwV.js";import{C as X}from"./CircularProgress-DXkKEIgb.js";import{S as Y}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const c=K.forwardRef(({onClick:z,onHover:_,isDisabled:u=!1,isLoading:m=!1,children:E,sx:M,className:P,type:U="Text button",size:e="md",width:p="Compact",state:Z="Default"},A)=>{const f=U==="Icon button"?"var(--dimension-8---0-5-rem)":e==="lg"?"var(--dimension-24---1-5-rem)":e==="md"?"var(--dimension-20---1-25-rem)":"var(--dimension-16---1-rem)",G=f,J=e==="xs"?"var(--border-radius-md)":"var(--border-radius-lg)";return d.jsx(Q,{ref:A,onClick:z,onMouseEnter:_,disabled:u||m,className:P,sx:{display:p==="Fluid/block"?"block":"inline-block",width:p==="Fluid/block"?"100%":"auto",paddingLeft:f,paddingRight:G,borderRadius:J,borderWidth:"var(--border-width-thin)",borderStyle:"solid",borderColor:"currentColor",letterSpacing:e==="xs"?"var(--body-xs-letter-spacing)":"var(--body-md-letter-spacing)",fontSize:e==="xs"?"var(--body-xs-font-size)":"var(--body-md-font-size)",fontFamily:"var(--font-family-body)",lineHeight:e==="xs"?"var(--body-xs-line-height)":"var(--body-md-line-height-24)",fontWeight:"var(--font-weight-medium---500)",cursor:u?"not-allowed":"pointer",opacity:u?.5:1,position:"relative",...M},children:m?d.jsx(X,{size:24,sx:{position:"absolute"}}):E})});c.displayName="ButtonOutline";c.__docgenInfo={description:"ButtonOutline component using Material UI and design tokens.",methods:[],displayName:"ButtonOutline",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the button."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Hover handler for the button."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button if true.",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading spinner if true.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the button."},sx:{required:!1,tsType:{name:"SxProps"},description:"Style overrides."},className:{required:!1,tsType:{name:"string"},description:"Class name overrides."},type:{required:!1,tsType:{name:"union",raw:"'Text button' | 'Icon button'",elements:[{name:"literal",value:"'Text button'"},{name:"literal",value:"'Icon button'"}]},description:"Type of the button, either 'Text button' or 'Icon button'.",defaultValue:{value:"'Text button'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button, one of 'lg', 'md', 'sm', 'xs'.",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'Compact' | 'Fluid/block'",elements:[{name:"literal",value:"'Compact'"},{name:"literal",value:"'Fluid/block'"}]},description:"Width of the button, either 'Compact' or 'Fluid/block'.",defaultValue:{value:"'Compact'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'Default' | 'Hover' | 'Focus' | 'Disabled'",elements:[{name:"literal",value:"'Default'"},{name:"literal",value:"'Hover'"},{name:"literal",value:"'Focus'"},{name:"literal",value:"'Disabled'"}]},description:"State of the button, one of 'Default', 'Hover', 'Focus', 'Disabled'.",defaultValue:{value:"'Default'",computed:!1}}}};const me={title:"Components/Button/Outline",component:c,args:{children:"Click me",type:"Text button",size:"md",width:"Compact",state:"Default"}},t={},r={args:{isLoading:!0}},a={args:{isDisabled:!0}},o={args:{type:"Icon button",children:d.jsx(Y,{size:16})}},s={args:{state:"Hover",sx:{":hover":{backgroundColor:"var(--color-background-state-interaction-hover-neutral)"}}}},n={args:{state:"Focus",sx:{":focus":{backgroundColor:"var(--background-white-base)"}}}},i={args:{width:"Compact"}},l={args:{width:"Fluid/block"}};var b,g,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,y,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,k,w;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,T,F;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'Icon button',
    children: <Star size={16} />
  }
}`,...(F=(T=o.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var D,I,q;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    state: 'Hover',
    sx: {
      ':hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-neutral)'
      }
    }
  }
}`,...(q=(I=s.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var H,R,B;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    state: 'Focus',
    sx: {
      ':focus': {
        backgroundColor: 'var(--background-white-base)'
      }
    }
  }
}`,...(B=(R=n.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var O,V,j;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    width: 'Compact'
  }
}`,...(j=(V=i.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var L,N,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    width: 'Fluid/block'
  }
}`,...(W=(N=l.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const pe=["Default","Loading","Disabled","WithIcon","Hover","Focus","Compact","Fluid"];export{i as Compact,t as Default,a as Disabled,l as Fluid,n as Focus,s as Hover,r as Loading,o as WithIcon,pe as __namedExportsOrder,me as default};
