import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./index-DCXu2c-y.js";import{B as Z}from"./Button-tMYqNul3.js";import{C as $}from"./CircularProgress-Ca_WSksX.js";import{S as H}from"./star-DL9v8gqC.js";import"./DefaultPropsProvider-xPzKZ8Sk.js";import"./memoTheme-DhxBNhS4.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-CEZ28ZP9.js";import"./useTimeout-GLrqR6mX.js";import"./useForkRef-BdVMMcKE.js";import"./useEventCallback-frPxIMEO.js";import"./isFocusVisible-B8k4qzLc.js";const E=Y.forwardRef(function({isDisabled:G,isLoading:m,onHover:d,icon:U,children:k,disabled:J,onMouseEnter:p,startIcon:K,sx:M,...Q},V){return l.jsx(Z,{ref:V,variant:"contained",color:"primary",disabled:J||G||m,startIcon:m?l.jsx($,{size:16,color:"inherit"}):U??K,onMouseEnter:X=>{d==null||d(),p==null||p(X)},sx:{textTransform:"none",...M},...Q,children:m?null:k})});E.__docgenInfo={description:`Button / Primary

Generated deterministically from the Figma "Button (Primary)"
component. Always renders as a MUI "contained" button so the primary fill
and typography defined in Figma come through via the DesignSystemProvider theme.`,methods:[],displayName:"ButtonPrimary",props:{isDisabled:{required:!1,tsType:{name:"boolean"},description:'Disable interaction and apply the Figma "Disabled" variant styling.'},isLoading:{required:!1,tsType:{name:"boolean"},description:"Replace children with a centered spinner and disable the button."},onHover:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse-enter handler (wraps onMouseEnter for API parity with other DS primitives)."},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional leading icon slot (renders before children)."}},composes:["Omit"]};const ge={title:"Components/Button/Primary",component:E,args:{children:"Button"},argTypes:{size:{control:{type:"select"},options:["lg","md","sm","xs"]}}},e={},r={args:{isDisabled:!0}},s={args:{isLoading:!0}},a={args:{size:"large"}},t={args:{size:"medium"}},o={args:{size:"small"}},i={args:{size:"small"}},n={args:{fullWidth:!0}},c={args:{icon:l.jsx(H,{size:16})}};var u,g,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(f=(g=e.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var z,b,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var _,D,B;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...(B=(D=a.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var P,w,R;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...(R=(w=t.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var I,T,W;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var j,F,q;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,...(q=(F=i.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var v,C,L;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var N,O,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <Star size={16} />
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const fe=["Default","Disabled","Loading","Size_lg","Size_md","Size_sm","Size_xs","FullWidth","WithIcon"];export{e as Default,r as Disabled,n as FullWidth,s as Loading,a as Size_lg,t as Size_md,o as Size_sm,i as Size_xs,c as WithIcon,fe as __namedExportsOrder,ge as default};
