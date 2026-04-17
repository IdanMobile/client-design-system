import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as S}from"./decorator-CSWk-PVk.js";import{S as r,a as s,b as a}from"./Stepper-UlsjHvyo.js";import"./tokens-8QbzA6N3.js";import"./DefaultPropsProvider-Dvarb5rE.js";import"./index-DCXu2c-y.js";/* empty css               */import"./useSlot-CinrcQjI.js";import"./mergeSlotProps-RT1wQWY9.js";import"./useForkRef-BdVMMcKE.js";import"./createSvgIcon-D47AKXkk.js";const L={title:"System/Library Components (MUI)/Stepper",component:r,decorators:[S],parameters:{layout:"padded"}},i=["Select Library","Configure Tokens","Connect GitHub","Publish"],p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[e.jsx(r,{activeStep:0,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:2,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))}),e.jsx(r,{activeStep:4,children:i.map(t=>e.jsx(s,{children:e.jsx(a,{children:t})},t))})]})};var n,o,l;p.parameters={...p.parameters,docs:{...(n=p.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Stepper activeStep={0}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={2}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
      <Stepper activeStep={4}>{steps.map(s => <Step key={s}><StepLabel>{s}</StepLabel></Step>)}</Stepper>
    </div>
}`,...(l=(o=p.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const g=["AllSteps"];export{p as AllSteps,g as __namedExportsOrder,L as default};
