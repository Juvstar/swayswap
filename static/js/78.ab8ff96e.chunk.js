(self.webpackChunkswayswap_demo=self.webpackChunkswayswap_demo||[]).push([[78],{5442:function(e,n,t){"use strict";t.d(n,{Hn:function(){return c},_v:function(){return i},xr:function(){return a}});var r=t(6231),s=t.n(r),a=function(e){return{value:e}},i=function(e){return new Promise((function(n){return setTimeout(n,e)}))},c=function(e){return s()("/swayswap",e)}},5078:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var r=t(5861),s=t(885),a=t(7757),i=t.n(a),c=t(2791),o=t(7425),u=t(184),l="bg-gray-700 rounded-2xl p-4 text-3xl border border-gray-700\n        flex justify-between",f="bg-transparent placeholder:text-gray-300 outline-none w-full text-xl";function d(e){var n=e.value,t=e.onChange,r=e.disabled,s=e.placeholder;return(0,u.jsx)("div",{className:l,children:(0,u.jsx)("input",{placeholder:s,value:n,disabled:r,onChange:function(e){return null===t||void 0===t?void 0:t(e.target.value)},className:f})})}var p=t(6871),x=t(6861),m=t(5442),v=t(9478),h=t(3580),g=t(1933),b=t(3246),y=t(9373);var w=t(6140),j="w-screen flex flex-1 items-center justify-center pb-14",k="bg-gray-800 w-[30rem] rounded-2xl p-4 m-2",N="px-2 flex items-center justify-between font-semibold text-xl",_="bg-primary-500 my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center\n    justify-center cursor-pointer border border-primary-500 hover:border-primary-600 mt-8";function S(){var e=(0,c.useState)(v.Bb),n=(0,s.Z)(e,2),t=n[0],a=n[1],l=function(e){var n=(0,b.Os)(),t=(0,c.useMemo)((function(){return y.R3.connect(e,n)}),[n.address]);return{contract:t,getBalance:function(){return n.getBalance(e)},mint:function(e){return t.functions.mint_coins(e)},transferTo:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.functions.transfer_coins_to_output(e,(0,m.xr)(t.id),(0,m.xr)(n.address),r)}}}(v.Bb),f=(0,p.s0)(),S=(0,g.useMutation)((0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.SE,e.next=3,l.mint(n);case 3:return e.next=5,l.transferTo(n,{variableOutputs:1});case 5:return e.next=7,(0,m._v)(1e3);case 7:case"end":return e.stop()}}),e)}))),{onSuccess:function(){w.ZP.success("Token minted successfully!"),f(x.i.wallet)}});return(0,u.jsx)("div",{className:j,children:(0,u.jsxs)("div",{className:k,children:[(0,u.jsxs)("div",{className:N,children:[(0,u.jsx)("h1",{children:"Mint tokens"}),(0,u.jsx)("div",{children:(0,u.jsx)(o.BUe,{})})]}),(0,u.jsxs)("div",{className:"mt-8",children:[(0,u.jsx)("label",{className:"mx-2 mb-2 flex text-gray-300",children:"Paste the the token contractId"}),(0,u.jsx)(d,{value:t,placeholder:"",onChange:a})]}),(0,u.jsx)("div",{onClick:function(){return!S.isLoading&&S.mutate()},className:_,children:S.isLoading?"Minting ".concat((0,h.formatUnits)(v.SE,v.cS)," tokens..."):"Mint ".concat((0,h.formatUnits)(v.SE,v.cS)," tokens")})]})})}},6231:function(e,n,t){var r,s,a;a=function(){function e(e){var n=[];if(0===e.length)return"";if("string"!==typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var s=e[r];if("string"!==typeof s)throw new TypeError("Url must be a string. Received "+s);""!==s&&(r>0&&(s=s.replace(/^[\/]+/,"")),s=r<e.length-1?s.replace(/[\/]+$/,""):s.replace(/[\/]+$/,"/"),n.push(s))}var a=n.join("/"),i=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"===typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=a():void 0===(s="function"===typeof(r=a)?r.call(n,t,n,e):r)||(e.exports=s)}}]);
//# sourceMappingURL=78.ab8ff96e.chunk.js.map