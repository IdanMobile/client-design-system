import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as S}from"./decorator-C0y9GClE.js";import{S as r,a as s,b as a}from"./Stepper-ByS8fL6V.js";import"./tokens-DBm_rmL-.js";import"./index-DCXu2c-y.js";/* empty css               */import"./useSlot-CxoZWvyD.js";import"./mergeSlotProps-CemHIHvj.js";import"./useForkRef-BdVMMcKE.js";import"./createSvgIcon-CZnzCMSy.js";const v={title:"System/Library Components (MUI)/Stepper",component:r,decorators:[S],parameters:{layout:"padded"}},i=["Select Library","Configure Tokens","Connect GitHub","Publish"],p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(r,{activeStep:0,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:2,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:4,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))})]})};var n,o,l;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Stepper activeStep={0}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={2}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={4}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
    </div>
}`,...(l=(o=p.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const L=["AllSteps"];export{p as AllSteps,L as __namedExportsOrder,v as default};
