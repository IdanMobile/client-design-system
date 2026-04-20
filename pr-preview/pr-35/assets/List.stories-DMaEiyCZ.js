import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as h,R as d}from"./index-DCXu2c-y.js";import{w as M}from"./decorator-n6xgQN8y.js";import{L as B,a as c}from"./List-Bamrx8Cg.js";import{L as p,a as C,b as u}from"./ListItemText-VOAdONiH.js";import{D as R}from"./Divider-C6riu-Mu.js";import{a as k,c as P}from"./DefaultPropsProvider-tolH4bEA.js";import{g as W,a as Y,c as E,s as U}from"./memoTheme-KRCIbq4o.js";import{A as J}from"./Avatar-C4fq3KsI.js";import"./DesignSystemProvider-BmQVhXvC.js";import"./tokens-uKznUkoC.js";import"./useForkRef-BdVMMcKE.js";import"./ButtonBase-CYJ2-9JW.js";import"./useTimeout-GLrqR6mX.js";import"./useEventCallback-BYuPd7TF.js";import"./isFocusVisible-B8k4qzLc.js";import"./useSlot-D0c7bwN2.js";import"./mergeSlotProps-Ch7EnynG.js";import"./Typography-C05qogOj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-D6qv-qIh.js";function H(t){return W("MuiListItemAvatar",t)}Y("MuiListItemAvatar",["root","alignItemsFlexStart"]);const K=t=>{const{alignItems:s,classes:i}=t;return E({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},H,i)},N=U("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:i}=t;return[s.root,i.alignItems==="flex-start"&&s.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),G=h.forwardRef(function(s,i){const r=k({props:s,name:"MuiListItemAvatar"}),{className:a,...D}=r,T=h.useContext(B),v={...r,alignItems:T.alignItems},F=K(v);return e.jsx(N,{className:P(F.root,a),ownerState:v,ref:i,...D})}),pe={title:"System/Library Components (MUI)/List",decorators:[M]},m=["Dashboard","Profile","Settings","Notifications","Messages","Analytics","Reports","Team Members","Billing","Integrations","API Keys","Audit Log","Help Center","Documentation","Changelog"],o={render:()=>e.jsx("div",{style:{height:320,overflowY:"auto",border:"1px solid var(--color-muted)",borderRadius:8,width:320},children:e.jsx(c,{children:m.map((t,s)=>e.jsxs(d.Fragment,{children:[e.jsx(p,{disablePadding:!0,children:e.jsx(C,{children:e.jsx(u,{primary:t,secondary:`Description for ${t.toLowerCase()}`})})}),s<m.length-1&&e.jsx(R,{})]},t))})})},g=[{name:"Alice Johnson",initials:"AJ"},{name:"Bob Smith",initials:"BS"},{name:"Carol White",initials:"CW"},{name:"David Brown",initials:"DB"},{name:"Eve Davis",initials:"ED"},{name:"Frank Miller",initials:"FM"},{name:"Grace Lee",initials:"GL"},{name:"Henry Wilson",initials:"HW"},{name:"Ivy Martinez",initials:"IM"},{name:"Jack Taylor",initials:"JT"},{name:"Karen Anderson",initials:"KA"},{name:"Leo Thomas",initials:"LT"}],x=["var(--color-accent)","var(--color-success)","var(--color-destructive)","var(--color-accent)","var(--color-warning)","var(--color-accent)"],n={render:()=>e.jsx("div",{style:{height:320,overflowY:"auto",border:"1px solid var(--color-muted)",borderRadius:8,width:360},children:e.jsx(c,{children:g.map((t,s)=>e.jsxs(d.Fragment,{children:[e.jsxs(p,{children:[e.jsx(G,{children:e.jsx(J,{sx:{bgcolor:x[s%x.length]},children:t.initials})}),e.jsx(u,{primary:t.name,secondary:"Team member"})]}),s<g.length-1&&e.jsx(R,{variant:"inset"})]},t.name))})})},l={render:()=>{const[t,s]=d.useState(1);return e.jsx("div",{style:{height:320,overflowY:"auto",border:"1px solid var(--color-muted)",borderRadius:8,width:320},children:e.jsx(c,{children:m.map((i,r)=>{const a=r===4||r===9;return e.jsx(p,{disablePadding:!0,children:e.jsx(C,{selected:t===r,disabled:a,onClick:()=>s(r),children:e.jsx(u,{primary:i,secondary:a?"Disabled":t===r?"Selected":void 0})})},i)})})})}};var L,I,b;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 320,
    overflowY: 'auto',
    border: '1px solid var(--color-muted)',
    borderRadius: 8,
    width: 320
  }}>
      <List>
        {items.map((item, i) => <React.Fragment key={item}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item} secondary={\`Description for \${item.toLowerCase()}\`} />
              </ListItemButton>
            </ListItem>
            {i < items.length - 1 && <Divider />}
          </React.Fragment>)}
      </List>
    </div>
}`,...(b=(I=o.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var y,f,j;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 320,
    overflowY: 'auto',
    border: '1px solid var(--color-muted)',
    borderRadius: 8,
    width: 360
  }}>
      <List>
        {iconLabels.map((person, i) => <React.Fragment key={person.name}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{
              bgcolor: avatarColors[i % avatarColors.length]
            }}>
                  {person.initials}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={person.name} secondary="Team member" />
            </ListItem>
            {i < iconLabels.length - 1 && <Divider variant="inset" />}
          </React.Fragment>)}
      </List>
    </div>
}`,...(j=(f=n.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,A,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState(1);
    return <div style={{
      height: 320,
      overflowY: 'auto',
      border: '1px solid var(--color-muted)',
      borderRadius: 8,
      width: 320
    }}>
        <List>
          {items.map((item, i) => {
          const disabled = i === 4 || i === 9;
          return <ListItem key={item} disablePadding>
                <ListItemButton selected={selected === i} disabled={disabled} onClick={() => setSelected(i)}>
                  <ListItemText primary={item} secondary={disabled ? 'Disabled' : selected === i ? 'Selected' : undefined} />
                </ListItemButton>
              </ListItem>;
        })}
        </List>
      </div>;
  }
}`,...(S=(A=l.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const ue=["Default","WithIcons","Interactive"];export{o as Default,l as Interactive,n as WithIcons,ue as __namedExportsOrder,pe as default};
