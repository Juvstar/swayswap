import{h as t,q as n,j as e,H as u,J as m,K as p,L as f,p as v,Q as h,B as c,m as a,U as x,V as y}from"./index.b957ffd4.js";const s={button:"relative text-sm font-semibold border-transparent px-0",active:`text-gray-200 after:content-[''] after:w-full after:h-0.5 after:bg-primary-500
  after:top-0 after:left-0 after:absolute after:translate-y-[-12px] after:rounded-full`},g=()=>{const d=p(),l=f(d),o=v(),i=l.pathname.includes("pool/add"),r=l.pathname.includes("pool/remove");return e("div",{className:"flex items-center gap-4",children:t(h,{children:[t(c,{size:"sm",onPress:()=>o("add-liquidity"),className:a(s.button,{[s.active]:i}),children:[e(x,{className:a({"text-gray-500":!i,"text-primary-500":i})}),"Add Liquidity"]}),t(c,{size:"sm",onPress:()=>o("remove-liquidity"),className:a(s.button,{[s.active]:r}),children:[e(y,{className:a({"text-gray-500":!r,"text-primary-500":r})}),"Remove Liquidity"]})]})})};function b(){return t(n,{children:[t(n.Title,{elementRight:e(g,{}),children:[e(u,{className:"text-primary-500"}),"Pool"]}),e(m,{})]})}export{b as default};