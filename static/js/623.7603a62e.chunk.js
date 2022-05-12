"use strict";(self.webpackChunkswayswap_demo=self.webpackChunkswayswap_demo||[]).push([[623],{2584:function(e,n,s){s.d(n,{_:function(){return C}});var t=s(885),i=s(7283),r=s(1694),a=s.n(r),l=s(3580),c=s(2791),o=s(948),d=s(9478),u=s(6231),m=s.n(u),x=s(184),f="/swayswap",v="bg-[#20242A] rounded-2xl p-4 text-3xl border border-[#20242A] \n      flex justify-between",h="bg-transparent placeholder:text-[#B2B9D2] outline-none w-full text-2xl",p="flex1",j="absolute w-full mt-2 bg-[#191B1F] divide-gray-100 \n      rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10",g="flex justify-around rounded-md w-full px-2 py-2 text-sm cursor-pointer",b="w-full h-min flex justify-between items-center bg-[#2D2F36] \n      rounded-2xl text-xl font-medium p-2 mt-[-0.2rem] focus:outline-none",w="mx-2",y="px-1 py-1";function N(e){var n=e.value,s=e.coins,r=e.onChange,l=(0,c.useState)(null),o=(0,t.Z)(l,2),d=o[0],u=o[1],v=s&&s.length>1;(0,c.useEffect)((function(){if(!n)return u(null);u(n)}),[n]);var h=(0,c.useCallback)((function(e){u(e),null===r||void 0===r||r(e)}),[u,r]);return(0,x.jsx)("div",{className:p,children:(0,x.jsxs)(i.v2,{as:"div",className:"relative inline-block text-left",children:[(0,x.jsx)("div",{children:(0,x.jsx)(i.v2.Button,{className:a()({"cursor-default":!v}),children:(0,x.jsxs)("div",{className:a()(b,{"hover:bg-opacity-30":v}),children:[d&&d.img&&(0,x.jsx)("img",{className:"rounded-full border-none",src:m()(f,d.img),alt:"eth",height:24,width:24}),(0,x.jsx)("div",{className:w,children:null===d||void 0===d?void 0:d.name})]})})}),v&&(0,x.jsx)(i.uT,{as:c.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,x.jsx)(i.v2.Items,{className:j,children:(0,x.jsx)("div",{className:y,children:s.map((function(e){return(0,x.jsx)(i.v2.Item,{children:function(n){var s=n.active;return(0,x.jsxs)("div",{className:a()(g,{"bg-[#2D2F36] text-white":s,"text-white":!s}),onClick:function(){return h(e)},children:[e&&e.img&&(0,x.jsx)("div",{className:"flex flex-wrap justify-center",children:(0,x.jsx)("div",{className:"w-6/12 px-4 sm:w-4/12",children:(0,x.jsx)("img",{className:"h-auto max-w-full rounded border-none align-middle shadow-lg",src:m()(f,e.img),alt:"eth",height:24,width:24})})}),(0,x.jsx)("div",{className:w,children:null===e||void 0===e?void 0:e.name})]})}},e.assetId)}))})})})]})})}function C(e){var n=e.amount,s=e.coin,t=e.coins,i=e.disabled,r=e.onChangeAmount,a=e.onChangeCoin,c=e.onInput;return(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)("div",{className:"flex-1",children:(0,x.jsx)(o.Z,{placeholder:"0",decimalScale:d.cS,value:n&&(0,l.formatUnits)(n,d.cS),displayType:i?"text":"input",onValueChange:function(e){return null===r||void 0===r?void 0:r(""!==e.value?(0,l.parseUnits)(e.value,d.cS):null)},className:h,thousandSeparator:!1,onInput:c})}),(0,x.jsx)(N,{coins:t,value:s,onChange:a})]})}},9385:function(e,n,s){s.d(n,{$:function(){return i}});var t=s(184);function i(){return(0,t.jsxs)("svg",{className:"-ml-1 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,t.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,t.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}},5479:function(e,n,s){var t=s(9478),i=[{name:"ETH",assetId:"0x0000000000000000000000000000000000000000000000000000000000000000",img:"/icons/eth.svg"},{name:"DAI",assetId:t.Bb,img:"/icons/dai.svg"},{name:"SWAY",assetId:t.p_,img:"/icons/sway.svg"}];n.Z=i},5442:function(e,n,s){s.d(n,{_:function(){return i},x:function(){return t}});var t=function(e){return{value:e}},i=function(e){return new Promise((function(n){return setTimeout(n,e)}))}},4623:function(e,n,s){s.r(n),s.d(n,{default:function(){return T}});var t=s(5861),i=s(7757),r=s.n(i),a=s(6355),l=s(3246),c=s(2584),o=s(5479),d=s(9385),u=s(1933),m=s(5442),x=s(3504),f=s(6861),v=s(9478),h=s(1694),p=s.n(h),j=s(33),g=s.n(j),b=s(184),w="border border-[#212327] border-b-0",y="w-screen flex flex-1 items-center justify-center mb-14",N="bg-[#191B1F] w-[30rem] rounded-2xl py-4 m-2",C="px-6 flex items-center justify-between font-semibold text-xl pb-2",I="px-2 flex items-center justify-between font-semibold text-xl mb-4",k="hover:bg-[#41444F] cursor-pointer p-2 rounded-full flex justify-center",F="w-8 h-8 flex justify-center items-center p-1",A="flex justify-center w-full text-sm my-8",B="flex items-center border-radius rounded-xl border border-[#3f444e] text-sm p-2 hover:opacity-70 active:opacity-50 cursor-pointer",S="text-[#e3e9f3] pl-2 pr-2";function T(){var e,n=(0,l.bp)().faucet,s=(0,l.Os)(),i=(0,u.useQuery)("AssetsPage-balances",(function(){return s.getBalances()})),h=i.data,j=i.refetch,T=(0,u.useMutation)((0,t.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return e.next=4,(0,m._)(1e3);case 4:case"end":return e.stop()}}),e)}))),{onSuccess:function(){return j()}});return(0,b.jsx)("div",{className:y,children:(0,b.jsxs)("div",{className:N,children:[(0,b.jsxs)("div",{className:C,children:[(0,b.jsx)("div",{children:"Wallet"}),(0,b.jsx)("div",{className:"flex w-10 justify-center rounded-xl p-1",children:v.b1?(0,b.jsx)(x.rU,{to:f.i.faucet,className:k,children:(0,b.jsx)(a.Tih,{})}):(0,b.jsx)(b.Fragment,{children:T.isLoading?(0,b.jsx)("div",{className:"flex justify-center rounded-xl p-1",children:(0,b.jsx)(d.$,{})}):(0,b.jsx)("div",{className:k,onClick:function(){return T.mutate()},children:(0,b.jsx)(a.Tih,{})})})})]}),(0,b.jsx)("div",{className:w}),(0,b.jsx)("div",{className:A,children:(0,b.jsxs)("div",{className:B,onClick:function(){g().copy(s.address)},children:[(0,b.jsxs)("span",{className:S,children:[null===s||void 0===s?void 0:s.address.slice(0,8),"...",null===s||void 0===s?void 0:s.address.slice(-8)]}),(0,b.jsx)("button",{className:F,children:(0,b.jsx)(a.Dup,{size:"1.4em",color:"#575f6c"})})]})}),(0,b.jsx)("div",{className:p()(w,"mb-6")}),(0,b.jsxs)("div",{className:"px-6",children:[(0,b.jsx)("div",{className:I,children:"Assets"}),h?(0,b.jsx)(b.Fragment,{children:(e=h,e.map((function(e){var n=o.Z.find((function(n){return n.assetId===e.assetId}));return{name:(null===n||void 0===n?void 0:n.name)||"404",img:(null===n||void 0===n?void 0:n.img)||"/icons/other.svg",assetId:e.assetId,amount:e.amount||0}}))).map((function(e){return(0,b.jsx)("div",{className:"my-4",children:(0,b.jsx)(c._,{coin:e,disabled:!0,amount:e.amount,coins:e?[e]:[]})},e.assetId)}))}):null]})]})})}}}]);
//# sourceMappingURL=623.7603a62e.chunk.js.map