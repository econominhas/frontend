"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{93505:function(e,t,o){o.d(t,{O:function(){return n}});let n={primary:"#00c9fe",red:"#ff0000",yellow:"#ffda29",green:"#008000",white:"#ffffff",blackText:"#333333"}},20548:function(e,t,o){o.d(t,{rM:function(){return g},YT:function(){return m},Fx:function(){return d},Kr:function(){return f},_u:function(){return p},bd:function(){return u},oP:function(){return s},dx:function(){return i}});var n,a,r=o(49550);(n=a||(a={})).VISA="VISA",n.MASTERCARD="MASTERCARD",n.SODEXO="SODEXO",n.ELO="ELO";var c=o(40357),l=o(71287);let i=[{transactionId:"4a1ec10c-5189-465e-8c32-554258cfa0d8",accountId:"foo",type:l.b.OUT,categoryId:"foo1",name:"Potes de feijao",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill.",value:1e3,installments:{groupId:"foo1",total:3,current:1},budget:{month:new Date().getUTCMonth().toString().padStart(2,"0"),year:new Date().getUTCFullYear().toString()},createdAt:new Date(2023,10,10,16),cardId:"xp"},{transactionId:"e4363fad-875c-4ebd-a62d-985f34887f40",accountId:"foo",type:l.b.OUT,categoryId:"foo2",name:"Uber ida habbib's errado",description:"foo1",value:15059,budget:{month:new Date().getUTCMonth().toString().padStart(2,"0"),year:new Date().getUTCFullYear().toString()},createdAt:new Date(2023,10,10,15),cardId:"nubank"},{transactionId:"f834ab76-2f28-4528-bb70-c369d0402847",accountId:"foo",type:l.b.OUT,categoryId:"foo3",name:"Depilacao corpo todo",description:"",value:7189,budget:{month:new Date().getUTCMonth().toString().padStart(2,"0"),year:new Date().getUTCFullYear().toString()},createdAt:new Date(2023,10,11,15),cardId:"xp"}],u={foo1:{categoryId:"foo1",accountId:"foo",name:"Moradia",icon:"house",color:"#5C64DE",active:!0},foo2:{categoryId:"foo2",accountId:"foo",name:"Fam\xedlia / Filhos",icon:"baby",color:"#007472",active:!0},foo3:{categoryId:"foo3",accountId:"foo",name:"Mercado",icon:"shopping-cart",color:"#EA744C",active:!0},foo4:{categoryId:"foo4",accountId:"foo",name:"Outros Gastos",icon:"question",color:"#FEC100",active:!0},foo5:{categoryId:"foo5",accountId:"foo",name:"TV / Internet / Telefone",icon:"tv",color:"#B6D6A8",active:!0},foo6:{categoryId:"foo6",accountId:"foo",name:"Sa\xfade",icon:"medkit",color:"#EC4B4B",active:!0},foo7:{categoryId:"foo7",accountId:"foo",name:"Cuidados Pessoais",icon:"kiss",color:"#E060CE",active:!0},foo8:{categoryId:"foo8",accountId:"foo",name:"Despesas do Trabalho",icon:"suitcase",color:"#9901FE",active:!0},foo9:{categoryId:"foo9",accountId:"foo",name:"Viagens",icon:"beach",color:"#46BDC7",active:!0}},s={[u.foo1.categoryId]:375e3,[u.foo2.categoryId]:10100,[u.foo3.categoryId]:13400,[u.foo4.categoryId]:3e4,[u.foo5.categoryId]:10098,[u.foo6.categoryId]:3e3,[u.foo7.categoryId]:5e4,[u.foo8.categoryId]:0,[u.foo9.categoryId]:0},d={budgetId:"foo",accountId:"foo",name:"Default - 2023",year:2023,budgets:{11:{[u.foo1.categoryId]:4e5,[u.foo2.categoryId]:1e5,[u.foo3.categoryId]:2e4,[u.foo4.categoryId]:37500,[u.foo5.categoryId]:18498,[u.foo6.categoryId]:53e3,[u.foo7.categoryId]:43611,[u.foo8.categoryId]:0,[u.foo9.categoryId]:0}}},m={bradesco:{bankId:"bradesco",name:"Bradesco",code:"123",iconUrl:"https://logospng.org/download/bradesco/logo-bradesco-escudo-1024.png",color:"#F0152D"},nubank:{bankId:"nubank",name:"Nubank",code:"321",iconUrl:"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",color:"#820BD1"}},g={nubank:{bankAccountId:"nubank",accountId:"foo1",bankId:m.nubank.bankId,iconUrl:m.nubank.iconUrl,color:m.nubank.color,includeOnBalance:!0,isSystemManaged:!1,accountNumber:"337420",branch:"1234",balance:1e6,name:"Nubank"},bradesco:{bankAccountId:"bradesco",accountId:"foo1",bankId:m.bradesco.bankId,iconUrl:m.bradesco.iconUrl,color:m.bradesco.color,includeOnBalance:!0,isSystemManaged:!1,accountNumber:"123456",branch:"1234",balance:1e6,name:"Bradesco"}},f={xpInfinityOne:{cardProviderId:"xpInfinityOne",name:"Xp Infinity One",iconUrl:"https://logodownload.org/wp-content/uploads/2019/07/xp-investimentos-logo-8.png",color:"#1B1A1D",type:r.m.CREDIT,network:a.VISA,statementDays:14,availableDueDates:["05","10","15"]},aleloRefeicao:{cardProviderId:"aleloRefeicao",name:"Alelo Refeicao",iconUrl:"https://logodownload.org/wp-content/uploads/2017/09/alelo-logo-1-599x393.png",color:"#017958",type:r.m.VA,network:a.ELO}},p={xp:{cardId:"xp",accountId:"foo1",cardProviderId:"xp-infinity-one",iconUrl:"https://logodownload.org/wp-content/uploads/2019/07/xp-investimentos-logo-8.png",color:"#1B1A1D",type:r.m.CREDIT,network:a.VISA,name:"Xp Investimentos",lastFourDigits:"1234",dueDay:10,statementDays:14,limit:35e5,payAt:c.z.DUE,payWithBankAccountId:g.nubank.bankAccountId},nubank:{cardId:"nubank",accountId:"foo1",cardProviderId:"nubank",iconUrl:"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",color:"#820BD1",type:r.m.CREDIT,network:a.MASTERCARD,name:"Nubank",lastFourDigits:"1234",dueDay:10,statementDays:14,limit:35e5,payAt:c.z.DUE,payWithBankAccountId:g.nubank.bankAccountId},aleloVa:{cardId:"aleloVa",accountId:"foo1",cardProviderId:"aleloVa",iconUrl:"https://logodownload.org/wp-content/uploads/2017/09/alelo-logo-1-599x393.png",color:"#017958",type:r.m.VA,network:a.ELO,name:"Alelo VA",lastFourDigits:"1234",balance:1e3}}},41902:function(e,t,o){o.d(t,{J:function(){return Icon}});var n=o(57437),a=o(24606),r=o(53159),c=o(58910),l=o(89348);let Icon=e=>{let{icon:t,color:o,size:i,style:u,...s}=e,d={className:"w-".concat(i," h-").concat(i),style:{color:o,...u||{}},...s};switch(t){case"house":return(0,n.jsx)(a.SX3,{...d});case"shopping-cart":return(0,n.jsx)(r.FeP,{...d});case"baby":return(0,n.jsx)(l.cj6,{...d});case"tv":return(0,n.jsx)(r._0,{...d});case"medkit":return(0,n.jsx)(r.gQF,{...d});case"kiss":return(0,n.jsx)(r.o4w,{...d});case"suitcase":return(0,n.jsx)(r.FZC,{...d});case"beach":return(0,n.jsx)(r.jst,{...d});case"question":return(0,n.jsx)(r.MXt,{...d});case"upload":return(0,n.jsx)(c.Ap8,{...d});case"download":return(0,n.jsx)(c.uKn,{...d});case"transfer":return(0,n.jsx)(c.GKy,{...d});default:return(0,n.jsx)(n.Fragment,{})}}},90813:function(e,t,o){o.d(t,{P:function(){return MoneyInput}});var n=o(57437);o(2265);var a=o(77200),r=o(3742);function MoneyInput(e){let{label:t,value:o,onChange:c}=e,l=(0,r.A)({numeric:!0,setValueAsNumber:!0,onChange:c});return(0,n.jsxs)("div",{className:"form-control",children:[(0,n.jsx)("label",{className:"label p-0",children:(0,n.jsx)("span",{className:"label-text",children:t})}),(0,n.jsx)("input",{type:"text",inputMode:"numeric",autoComplete:"off",placeholder:t,className:"input input-bordered mt-2",value:(0,a.lb)(o),onChange:e=>l(e.target.value)})]})}},56120:function(e,t,o){o.d(t,{l:function(){return SelectInput}});var n=o(57437),a=o(33325),r=o(49158),c=o(93505),l=o(41902),i=o(2265),u=o(24606),s=o(85915);function SelectInput(e){let{label:t,toBeSelectedLabel:o,data:d,value:m,fieldNames:g,onChange:f}=e,p=d.find(e=>e[g.id]===m);return(0,n.jsx)(a.R,{value:p,onChange:f,children:e=>{let{open:f}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.R.Label,{className:"block text-sm leading-6",children:t}),(0,n.jsxs)("div",{className:"relative mt-2",children:[(0,n.jsx)(a.R.Button,{className:"relative w-full cursor-default rounded-md px-4 py-2 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary",children:(0,n.jsxs)("div",{className:"rounded px-4 py-2 mr-9",style:p?{backgroundColor:g.color?p[g.color]:c.O.primary,color:(0,s.u)(g.color?p[g.color]:c.O.primary)}:{},children:[!p&&(0,n.jsx)("span",{className:"flex items-center",children:(0,n.jsx)("span",{className:"block truncate",children:o||t})}),p&&(0,n.jsxs)("span",{className:"flex items-center",children:[g.icon&&(0,n.jsx)(l.J,{icon:p[g.icon],size:2}),g.iconUrl&&(0,n.jsx)("img",{src:p[g.iconUrl],alt:p[g.label],className:"w-4 h-4"}),(0,n.jsx)("span",{className:"ml-3 block truncate",children:p[g.label]})]}),(0,n.jsx)("span",{className:"pointer-events-none absolute inset-y-0 right-2 ml-3 flex items-center pr-2 text-primary-content",children:(0,n.jsx)(u.F0C,{})})]})}),(0,n.jsx)(r.u,{show:f,as:i.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(a.R.Options,{className:"absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",children:d.map(e=>(0,n.jsx)(a.R.Option,{className:"relative cursor-default select-none py-1 pl-3 pr-12",value:e[g.id],children:(0,n.jsxs)("div",{className:"flex items-center rounded px-4 py-2",style:e[g.id]===m?{backgroundColor:g.color?e[g.color]:c.O.primary,color:(0,s.u)(g.color?e[g.color]:c.O.primary)}:{border:"1px solid ".concat(g.color?e[g.color]:c.O.primary),color:g.color?e[g.color]:c.O.primary},children:[g.icon&&e[g.icon]&&(0,n.jsx)(l.J,{icon:e[null==g?void 0:g.icon],size:2}),g.iconUrl&&e[g.iconUrl]&&(0,n.jsx)("img",{src:e[null==g?void 0:g.iconUrl],alt:e[g.label],className:"w-4 h-4"}),(0,n.jsx)("span",{className:"ml-3 block truncate font-semibold",children:e[null==g?void 0:g.label]})]})},e[g.id]))})})]})]})}})}},38941:function(e,t,o){o.d(t,{o:function(){return TextInput}});var n=o(57437);o(2265);var a=o(77200),r=o(3742);function TextInput(e){let{id:t,label:o,placeholder:c,value:l,mask:i,numeric:u,maxLength:s,onChange:d}=e,m=(0,r.A)({numeric:u,maxLength:s,onChange:d});return(0,n.jsxs)("div",{className:"form-control",children:[(0,n.jsx)("label",{className:"label p-0",children:(0,n.jsx)("span",{className:"label-text",children:o})}),(0,n.jsx)("input",{id:t,type:"text",...u?{inputMode:"numeric",autoComplete:"off"}:{},placeholder:c||o,className:"input input-bordered mt-2",value:i&&"99999-9"===i?(0,a.pv)(l):l,onChange:e=>m(e.target.value)})]})}},3742:function(e,t,o){o.d(t,{A:function(){return makeBeforeChangeValue},U:function(){return makeSetData}});let makeBeforeChangeValue=e=>{let{onChange:t,numeric:o,maxLength:n,setValueAsNumber:a}=e;return e=>{o&&(e=e.replace(/\D/g,"")),n&&(e=e.substring(0,n)),a?t(parseInt(e||"0",10)):t(e)}},makeSetData=e=>{let{setState:t,execBeforeSet:o}=e;return(e,n)=>{t(t=>{let a={...t,[e]:n};return o&&o(a),a})}}},98229:function(e,t,o){o.d(t,{T:function(){return Space}});var n=o(57437);let Space=()=>(0,n.jsx)("div",{className:"h-5"})},60414:function(e,t,o){o.d(t,{AJ:function(){return CurrentBudgetProvider},Gu:function(){return useCurrentBudget}});var n=o(57437),a=o(2265),r=o(38651);let c=(0,a.createContext)({}),CurrentBudgetProvider=e=>{let{children:t}=e,[o,l]=(0,a.useState)((0,r.a2)());return(0,n.jsx)(c.Provider,{value:{currentBudget:o,currentBudgetDate:new Date("".concat(o,"-01")),setNextBudget:()=>{let[e,t]=o.split("-");"12"===t?l("".concat(parseInt(e)+1,"-01")):l("".concat(e,"-").concat((parseInt(t)+1).toString().padStart(2,"0")))},setPrevBudget:()=>{let[e,t]=o.split("-");"01"===t?l("".concat(parseInt(e)-1,"-12")):l("".concat(e,"-").concat((parseInt(t)-1).toString().padStart(2,"0")))},getCurrentBudgetMonthId:()=>o.split("-").pop()},children:t})},useCurrentBudget=()=>{let e=(0,a.useContext)(c);if(!e)throw Error("useCurrentBudget must be used within a CurrentBudgetProvider");return e}},49550:function(e,t,o){var n,a;o.d(t,{m:function(){return n}}),(a=n||(n={})).CREDIT="CREDIT",a.DEBIT="DEBIT",a.VA="VA",a.VR="VR",a.VT="VT"},40357:function(e,t,o){var n,a;o.d(t,{z:function(){return n}}),(a=n||(n={})).DUE="DUE",a.STATEMENT="STATEMENT"},71287:function(e,t,o){var n,a;o.d(t,{b:function(){return n}}),(a=n||(n={})).IN="IN",a.OUT="OUT",a.TRANSFER="TRANSFER"},85915:function(e,t,o){o.d(t,{u:function(){return getTextColor}});var n=o(93505);let getColorWithCorrectLength=e=>{if(3===e.length){let t=e.split(""),[o,n,a]=t;return[o,o,n,n,a,a].join("")}return e},getHexColorLuma=e=>{let t=e.substring(1),o=getColorWithCorrectLength(t),n=parseInt(o,16);return .2126*(n>>16&255)+.7152*(n>>8&255)+.0722*(n>>0&255)},isLightHexColor=e=>190>getHexColorLuma(e),getTextColor=e=>isLightHexColor(e)?n.O.white:n.O.blackText},38651:function(e,t,o){o.d(t,{Tu:function(){return formatFullDate},a2:function(){return getMonthAndYear},bf:function(){return sortDateYYYYMMDD},dE:function(){return getMonthId},q6:function(){return getMonthNameAndYear},rO:function(){return getMonthShortName},wf:function(){return getDay}});let n={"01":{name:"Janeiro",shortName:"Jan"},"02":{name:"Fevereiro",shortName:"Fev"},"03":{name:"Mar\xe7o",shortName:"Mar"},"04":{name:"Abril",shortName:"Abr"},"05":{name:"Maio",shortName:"Mai"},"06":{name:"Junho",shortName:"Jun"},"07":{name:"Julho",shortName:"Jul"},"08":{name:"Agosto",shortName:"Ago"},"09":{name:"Setembro",shortName:"Set"},10:{name:"Outubro",shortName:"Out"},11:{name:"Novembro",shortName:"Nov"},12:{name:"Dezembro",shortName:"Dez"}},getMonthId=e=>{let t=e||new Date,o=t.getUTCMonth()+1;return o.toString().padStart(2,"0")},getDay=e=>{let t=e||new Date,o=t.getUTCDate();return o.toString().padStart(2,"0")},getTime=e=>{let t=e||new Date,o=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0");return"".concat(o,":").concat(n)},getMonthAndYear=e=>{let t=e||new Date;return"".concat(t.getUTCFullYear(),"-").concat(getMonthId(t))},getMonthNameAndYear=e=>{var t;let o=e||new Date,a=getMonthId(o);return"".concat(null===(t=n[a])||void 0===t?void 0:t.name," de ").concat(o.getUTCFullYear())},formatFullDate=e=>{var t,o;let a=e||new Date,r=getMonthId(a),c=getDay(a),l=getTime(a);return"".concat(c," de ").concat(null===(o=n[r])||void 0===o?void 0:null===(t=o.name)||void 0===t?void 0:t.toLowerCase()," de ").concat(a.getUTCFullYear(),", as ").concat(l)},getMonthShortName=e=>n[e].shortName,sortDateYYYYMMDD=(e,t)=>{let[o,n,a]=e.split("-").map(parseFloat),[r,c,l]=t.split("-").map(parseFloat);return new Date(o,n-1,a).getTime()<new Date(r,c-1,l).getTime()?1:-1}},77200:function(e,t,o){var n;o.d(t,{pv:function(){return formatBankAccount},lb:function(){return formatMoney}}),(n||(n={})).BR="BR";let removeFromEnd=(e,t)=>e.substring(0,e.length-t),getFromEnd=(e,t)=>e.substring(e.length-t),a=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),formatMoney=e=>a.format((e||0)/100),formatBankAccount=e=>e.length<=5?e:"".concat(removeFromEnd(e,1),"-").concat(getFromEnd(e,1))}}]);