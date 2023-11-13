(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{86716:function(e,s,l){Promise.resolve().then(l.bind(l,89453))},89453:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return page}});var r=l(57437),n=l(20548),t=l(93505),a=l(3471),o=l(16830),c=l(36612),i=l(77200);let percentage=(e,s)=>{let l=100*s/e;return l>100?100:l<=0?0:l},color=e=>100===e?t.O.red:e>=80?t.O.yellow:t.O.green,BudgetCard=e=>{let{budget:s,expenses:l}=e,n=Object.values(s).reduce((e,s)=>e+s),t=Object.values(l).reduce((e,s)=>e+s),d=n-t,x=percentage(n,t);return(0,r.jsxs)("section",{className:"max-w-full",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-center",children:"Or\xe7amento"}),(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)(a.u,{width:250,height:250,children:(0,r.jsxs)(o.b,{isAnimationActive:!1,data:[{name:"expenses",value:x},{name:"budget",value:100-x}],width:250,height:250,cx:"50%",cy:"50%",labelLine:!1,outerRadius:100,fill:"#8884d8",dataKey:"value",children:[(0,r.jsx)(c.b,{fill:color(x)}),(0,r.jsx)(c.b,{fill:"#DCDCDC"})]})}),(0,r.jsxs)("div",{className:"flex flex-col gap-2 my-2 w-full",children:[(0,r.jsxs)("div",{className:"flex font-bold rounded",children:[(0,r.jsx)("div",{className:"flex flex-row gap-2 w-3/4 items-center p-2 rounded-l",style:{backgroundColor:"#DCDCDC"},children:(0,r.jsx)("span",{children:"Gasto total"})}),(0,r.jsx)("div",{className:"w-2/5 flex flex-row items-center justify-end p-2 rounded-r",style:{backgroundColor:"#DCDCDC75"},children:(0,r.jsx)("span",{children:(0,i.lb)(t)})})]}),(0,r.jsxs)("div",{className:"flex font-bold rounded",children:[(0,r.jsx)("div",{className:"flex flex-row gap-2 w-3/4 items-center p-2 rounded-l",style:{backgroundColor:"#DCDCDC"},children:(0,r.jsx)("span",{children:"Gasto planejado"})}),(0,r.jsx)("div",{className:"w-2/5 flex flex-row items-center justify-end p-2 rounded-r",style:{backgroundColor:"#DCDCDC75"},children:(0,r.jsx)("span",{children:(0,i.lb)(n)})})]}),(0,r.jsxs)("div",{className:"flex font-bold rounded",children:[(0,r.jsx)("div",{className:"flex flex-row gap-2 w-3/4 items-center p-2 rounded-l",style:{backgroundColor:"#DCDCDC"},children:(0,r.jsx)("span",{children:"Saldo"})}),(0,r.jsx)("div",{className:"w-2/5 flex flex-row items-center justify-end p-2 rounded-r",style:{backgroundColor:"".concat(color(x),"80")},children:(0,r.jsx)("span",{children:(0,i.lb)(d)})})]})]}),d<0&&(0,r.jsx)("div",{className:"alert alert-info mt-2 text-sm",children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-16 h-16 mx-2 stroke-current",children:(0,r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,r.jsxs)("label",{children:["Suas ",(0,r.jsx)("u",{children:"finan\xe7as e or\xe7amentos"})," ser\xe3o"," ",(0,r.jsx)("strong",{children:"automaticamente"})," ajustados ao final do m\xeas, o valor negativo \xe9 apenas para registro."]})]})})]})]})};var d=l(41902),x=l(85915);let ExpensesPerCategory=e=>{let{budget:s,expenses:l}=e,t=Object.entries(s);return(0,r.jsxs)("section",{className:"max-w-full",children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-center",children:"Saldo por Categoria"}),(0,r.jsx)("div",{className:"flex flex-col gap-2 my-2",children:t.map(e=>{let[s,t]=e,a=n.bd[s],o=t-l[s];return(0,r.jsxs)("div",{className:"flex rounded font-bold",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-2 w-3/4 items-center p-2 rounded-l",style:{backgroundColor:a.color,color:(0,x.u)(a.color)},children:[(0,r.jsx)(d.J,{icon:a.icon,size:4}),(0,r.jsx)("span",{children:a.name})]}),(0,r.jsx)("div",{className:"w-2/5 flex flex-row items-center justify-end p-2 rounded-r",style:{backgroundColor:"".concat(a.color,"75"),color:o<0?"red":void 0},children:(0,r.jsx)("span",{children:(0,i.lb)(o)})})]},s)})})]})};var u=l(32616),f=l(11854),h=l(98229),m=l(60414),j=l(61396),g=l.n(j),page=()=>{let{getCurrentBudgetMonthId:e}=(0,m.Gu)(),s=n.Fx.budgets[e()];return s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Header,{title:"Econominhas",hasMonthIndicator:!0}),(0,r.jsxs)("main",{className:"min-h-[100dvh] w-full container-padding",children:[(0,r.jsx)(BudgetCard,{budget:s,expenses:n.oP}),(0,r.jsx)(h.T,{}),(0,r.jsx)(ExpensesPerCategory,{budget:s,expenses:n.oP}),(0,r.jsx)(h.T,{}),(0,r.jsxs)("section",{children:[(0,r.jsx)("h2",{className:"font-bold text-lg text-center mb-2",children:"Transa\xe7\xf5es"}),(0,r.jsx)(g(),{href:"/transacoes",className:"btn btn-primary w-full",children:"Ver transa\xe7\xf5es"})]})]})]}):(0,r.jsx)(f.v,{title:"Econominhas",hasMonthIndicator:!0})}},93505:function(e,s,l){"use strict";l.d(s,{O:function(){return r}});let r={primary:"#00c9fe",red:"#ff0000",yellow:"#ffda29",green:"#008000",white:"#ffffff",blackText:"#333333"}},98229:function(e,s,l){"use strict";l.d(s,{T:function(){return Space}});var r=l(57437);let Space=()=>(0,r.jsx)("div",{className:"h-5"})},85915:function(e,s,l){"use strict";l.d(s,{u:function(){return getTextColor}});var r=l(93505);let getColorWithCorrectLength=e=>{if(3===e.length){let s=e.split(""),[l,r,n]=s;return[l,l,r,r,n,n].join("")}return e},getHexColorLuma=e=>{let s=e.substring(1),l=getColorWithCorrectLength(s),r=parseInt(l,16);return .2126*(r>>16&255)+.7152*(r>>8&255)+.0722*(r>>0&255)},isLightHexColor=e=>190>getHexColorLuma(e),getTextColor=e=>isLightHexColor(e)?r.O.white:r.O.blackText}},function(e){e.O(0,[169,582,420,447,724,104,700,971,864,744],function(){return e(e.s=86716)}),_N_E=e.O()}]);