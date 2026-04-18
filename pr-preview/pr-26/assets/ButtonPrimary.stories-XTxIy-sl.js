import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./index-DCXu2c-y.js";import{B as G}from"./Button-DoEnHtwV.js";import{C as J}from"./CircularProgress-DXkKEIgb.js";import{S as I}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-qaOHKnqS.js";import"./useTimeout-BCS2DETX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-O7DVlRIu.js";import"./isFocusVisible-B8k4qzLc.js";const m=A.forwardRef(({onClick:M,onHover:L,isDisabled:N=!1,isLoading:c=!1,children:V,sx:F,className:H,type:W="text",size:r="md",width:_="compact"},E)=>{const l=W==="icon"?{lg:"var(--dimension-12---0-75-rem)",md:"var(--dimension-8---0-5-rem)",sm:"var(--dimension-8---0-5-rem)",xs:"var(--dimension-8---0-5-rem)"}[r]:{lg:"var(--dimension-24---1-5-rem)",md:"var(--dimension-20---1-25-rem)",sm:"var(--dimension-16---1-rem)",xs:"var(--dimension-16---1-rem)"}[r],O=l;return e.jsx(G,{ref:E,onClick:M,onMouseEnter:L,disabled:N||c,className:H,sx:{display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:l,paddingRight:O,borderRadius:r==="xs"?"var(--radius-border-radius-md)":"var(--radius-border-radius-lg)",fontSize:r==="xs"?"var(--font-text-xs-medium-size)":"var(--font-text-md-l-24-medium-size)",fontFamily:"var(--font-text-md-l-24-medium-family)",fontWeight:"var(--font-text-md-l-24-medium-weight)",letterSpacing:"var(--gap-body-md-letter-spacing)",lineHeight:"var(--font-text-md-l-24-medium-line-height)",width:_==="fluid"?"100%":"auto",...F},children:c?e.jsx(J,{size:24}):V})});m.displayName="ButtonPrimary";m.__docgenInfo={description:"ButtonPrimary component for displaying a primary button with various states and sizes.",methods:[],displayName:"ButtonPrimary",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the button."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter handler for the button."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Disables the button when true.",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Shows a loading spinner when true.",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content of the button."},sx:{required:!1,tsType:{name:"SxProps"},description:"Style overrides."},className:{required:!1,tsType:{name:"string"},description:"Class name for styling overrides."},type:{required:!1,tsType:{name:"union",raw:"'text' | 'icon'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'icon'"}]},description:"Type of button, either 'text' or 'icon'.",defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'lg' | 'md' | 'sm' | 'xs'",elements:[{name:"literal",value:"'lg'"},{name:"literal",value:"'md'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'xs'"}]},description:"Size of the button, either 'lg', 'md', 'sm', or 'xs'.",defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"'compact' | 'fluid'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'fluid'"}]},description:"Width of the button, either 'compact' or 'fluid'.",defaultValue:{value:"'compact'",computed:!1}}}};const ie={title:"Components/Button/Primary",component:m,args:{children:"Click me"}},a={},t={args:{isLoading:!0}},o={args:{isDisabled:!0}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(I,{size:16})," Click me"]})}},n={args:{sx:{":hover":{backgroundColor:"var(--color-background-state-interaction-hover-primary)"}}}},i={args:{sx:{":focus":{backgroundColor:"var(--color-background-state-interaction-hover-primary)"}}}},d={args:{children:e.jsx(I,{size:16}),type:"icon"}};var u,p,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var f,v,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,x,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var S,C,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <><Star size={16} /> Click me</>
  }
}`,...(w=(C=s.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var k,T,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    sx: {
      ':hover': {
        backgroundColor: 'var(--color-background-state-interaction-hover-primary)'
      }
    }
  }
}`,...(q=(T=n.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,P,j;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    sx: {
      ':focus': {
        backgroundColor: 'var(--color-background-state-interaction-hover-primary)'
      }
    }
  }
}`,...(j=(P=i.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var z,D,B;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <Star size={16} />,
    type: 'icon'
  }
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const de=["Default","Loading","Disabled","WithIcon","Hover","Focus","IconOnly"];export{a as Default,o as Disabled,i as Focus,n as Hover,d as IconOnly,t as Loading,s as WithIcon,de as __namedExportsOrder,ie as default};
