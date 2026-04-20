import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as m}from"./decorator-Bwh7YJgS.js";import{S as r,a as s,b as a}from"./Stepper-9yJufEVx.js";import"./DesignSystemProvider-DV5yVZWv.js";import"./tokens-DWxhIY_z.js";import"./DefaultPropsProvider-tolH4bEA.js";import"./index-DCXu2c-y.js";import"./memoTheme-KRCIbq4o.js";import"./useSlot-D0c7bwN2.js";import"./mergeSlotProps-Ch7EnynG.js";import"./useForkRef-BdVMMcKE.js";import"./createSvgIcon-D6qv-qIh.js";const g={title:"System/Library Components (MUI)/Stepper",component:r,decorators:[m],parameters:{layout:"padded"}},i=["Select Library","Configure Tokens","Connect GitHub","Publish"],p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(r,{activeStep:0,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:2,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:4,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))})]})};var o,n,l;p.parameters={...p.parameters,docs:{...(o=p.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Stepper activeStep={0}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={2}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={4}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
    </div>
}`,...(l=(n=p.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const k=["AllSteps"];export{p as AllSteps,k as __namedExportsOrder,g as default};
