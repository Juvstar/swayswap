import{r as u,u as v,d as p,C as y,W as c,f as q,g as C,h as B,F as E,j as n,i as I,k as L,B as R,t as l}from"./index.b957ffd4.js";function x(){const[i,m]=u.exports.useState([]),d=v(),f=p(),s=y.find(e=>e.assetId===c),t=q({coin:s}),a=t.amount,o=C(async()=>{if(!a)throw new Error('"amount" is required');await f.functions.remove_liquidity(1,1,1e3,{forward:[a,c],variableOutputs:2})},{onSuccess:()=>{l.success("Liquidity removed successfully!"),t.setAmount(BigInt(0)),d.refetch()},onError:e=>{l.error(e.message)}});if(!s)return null;const g=()=>{const e=[];return t.amount||e.push(`Enter ${s.name} amount`),t.hasEnoughBalance||e.push(`Insufficient ${s.name} balance`),e};u.exports.useEffect(()=>{m(g())},[t.amount,t.hasEnoughBalance]);const r=!!i.length||o.isLoading,h=()=>i.length?i[0]:o.isLoading?"Removing...":"Remove liquidity";return B(E,{children:[n("div",{className:"mt-4 mb-4",children:n(I,{...t.getInputProps(),rightElement:n(L,{...t.getCoinSelectorProps()}),autoFocus:!0})}),n(R,{isFull:!0,size:"lg",variant:"primary",onPress:r?void 0:()=>o.mutate(),isDisabled:r,children:h()})]})}export{x as default};