import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{R as _}from"./index-DCXu2c-y.js";import{B as E}from"./Button-DoEnHtwV.js";import{C as M}from"./CircularProgress-DXkKEIgb.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const l=_.forwardRef(({onClick:D,onHover:F,isDisabled:P=!1,isLoading:m=!1,children:j,sx:z,className:L,type:N="Text button",size:i="md",width:V="Compact"},H)=>{const e=N==="Icon button",u={lg:e?"var(--dimension-12---0-75-rem)":"var(--dimension-24---1-5-rem)",md:e?"var(--dimension-8---0-5-rem)":"var(--dimension-20---1-25-rem)",sm:e?"var(--dimension-8---0-5-rem)":"var(--dimension-16---1-rem)",xs:e?"var(--dimension-8---0-5-rem)":"var(--dimension-16---1-rem)"},W=i==="xs"?"var(--border-radius-md)":"var(--border-radius-lg)";return d.jsx(E,{ref:H,onClick:D,onMouseEnter:F,disabled:P||m,className:L,sx:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:u[i],paddingRight:u[i],borderRadius:W,letterSpacing:"var(--body-md-letter-spacing)",fontSize:"var(--font-text-md-l-24-medium-size)",fontFamily:"var(--font-text-md-l-24-medium-family)",fontWeight:"var(--font-text-md-l-24-medium-weight)",lineHeight:"var(--body-md-line-height-24)",width:V==="Fluid/block"?"100%":"auto",...z},children:m?d.jsx(M,{size:24}):j})});l.displayName="ButtonPrimary";l.__docgenInfo={description:"ButtonPrimary component for the design system.",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the button."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter handler for the button."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"If true, the button will be disabled.",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"If true, a loading spinner will be shown instead of children.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the button."},sx:{required:!1,tsType:{name:"SxProps"},description:"Style overrides."},className:{required:!1,tsType:{name:"string"},description:"Class name overrides."},type:{required:!1,tsType:{name:"union",raw:"'Text button' | 'Icon button'",elements:[{name:"literal",value:"'Text button'"},{name:"literal",value:"'Icon button'"}]},description:"Type of the button, either 'Text button' or 'Icon button'.",defaultValue:{value:"'Text button'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button, can be 'lg', 'md', 'sm', or 'xs'.",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'Compact' | 'Fluid/block'",elements:[{name:"literal",value:"'Compact'"},{name:"literal",value:"'Fluid/block'"}]},description:"Width of the button, can be 'Compact' or 'Fluid/block'.",defaultValue:{value:"'Compact'",computed:!1}}}};const ee={title:"Components/Button/Primary",component:l,args:{children:"Click me",type:"Text button",size:"md",width:"Compact"}},r={},a={args:{isLoading:!0}},t={args:{isDisabled:!0}},o={args:{type:"Icon button",children:d.jsx("span",{role:"img","aria-label":"icon",children:"🔍"})}},n={args:{sx:{":hover":{backgroundColor:"var(--color-background-state-interaction-hover-primary)"}}}},s={args:{sx:{":focus":{backgroundColor:"var(--color-background-white-base)"}}}};var c,p,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var g,b,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,y,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,T,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'Icon button',
    children: <span role="img" aria-label="icon">🔍</span>
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var k,I,S;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    sx: {
      ':hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-primary)'
      }
    }
  }
}`,...(S=(I=n.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var q,R,B;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    sx: {
      ':focus': {
        backgroundColor: 'var(--color-background-white-base)'
      }
    }
  }
}`,...(B=(R=s.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const re=["Default","Loading","Disabled","WithIcon","Hover","Focus"];export{r as Default,t as Disabled,s as Focus,n as Hover,a as Loading,o as WithIcon,re as __namedExportsOrder,ee as default};
