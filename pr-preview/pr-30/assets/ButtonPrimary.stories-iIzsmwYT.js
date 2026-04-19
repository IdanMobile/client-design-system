import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-DCXu2c-y.js";import{B as G}from"./Button-DoEnHtwV.js";import{C as J}from"./CircularProgress-DXkKEIgb.js";import{S as K}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const I=A.forwardRef(({onClick:j,onHover:D,isDisabled:F=!1,isLoading:d=!1,children:B,sx:H={},className:L,type:P="Text",size:e="md",width:V="Compact"},W)=>{const N=e==="lg"?"var(--dimension-24---1-5-rem)":e==="md"?"var(--dimension-20---1-25-rem)":"var(--dimension-16---1-rem)",_=e==="xs"?"var(--border-radius-md)":"var(--border-radius-lg)",E=e==="xs"?"var(--body-xs-font-size)":e==="sm"?"var(--body-sm-font-size)":"var(--body-md-font-size)",z=e==="xs"?"var(--body-xs-line-height)":e==="sm"?"var(--body-sm-line-height-l-20)":"var(--body-md-line-height-24)",M=e==="xs"?"var(--body-xs-letter-spacing)":e==="sm"?"var(--body-sm-letter-spacing)":"var(--body-md-letter-spacing)",O=e==="xs"?"var(--dimension-4---0-25-rem)":"var(--dimension-8---0-5-rem)",l=P==="Icon"?"var(--dimension-8---0-5-rem)":N;return r.jsx(G,{ref:W,onClick:j,onMouseEnter:D,disabled:F||d,className:L,sx:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:l,paddingRight:l,borderRadius:_,fontSize:E,lineHeight:z,letterSpacing:M,fontWeight:"var(--font-weight-medium---500)",fontFamily:"var(--font-family-body)",gap:O,width:V==="Fluid/block"?"100%":"auto",...H},children:d?r.jsx(J,{size:24}):B})});I.__docgenInfo={description:"ButtonPrimary component for primary button actions.",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click event handler."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Hover event handler."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled.",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the button is in a loading state.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the button."},sx:{required:!1,tsType:{name:"SxProps"},description:"Style overrides.",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class name overrides."},type:{required:!1,tsType:{name:"union",raw:"'Text' | 'Icon'",elements:[{name:"literal",value:"'Text'"},{name:"literal",value:"'Icon'"}]},description:"Type of button, either 'Text' or 'Icon'.",defaultValue:{value:"'Text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button.",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'Compact' | 'Fluid/block'",elements:[{name:"literal",value:"'Compact'"},{name:"literal",value:"'Fluid/block'"}]},description:"Width of the button.",defaultValue:{value:"'Compact'",computed:!1}}}};const ne={title:"Components/Button/Primary",component:I,args:{children:"Click me"}},a={},t={args:{isLoading:!0}},o={args:{isDisabled:!0}},s={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(K,{size:16})," Click me"]})}},n={args:{sx:{"&:hover":{backgroundColor:"var(--color-background-state-interaction-hover-primary)"}}}},i={args:{sx:{"&:focus":{backgroundColor:"var(--background-white-base)"}}}};var m,c,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var y,x,C;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <><Star size={16} /> Click me</>
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var k,T,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    sx: {
      '&:hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-primary)'
      }
    }
  }
}`,...(S=(T=n.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var w,q,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    sx: {
      '&:focus': {
        backgroundColor: 'var(--background-white-base)'
      }
    }
  }
}`,...(R=(q=i.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};const ie=["Default","Loading","Disabled","WithIcon","Hover","Focus"];export{a as Default,o as Disabled,i as Focus,n as Hover,t as Loading,s as WithIcon,ie as __namedExportsOrder,ne as default};
