"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{20548:function(e,t,o){o.d(t,{rM:function(){return m},YT:function(){return g},Fx:function(){return l},Kr:function(){return f},_u:function(){return I},bd:function(){return i},oP:function(){return s},dx:function(){return u}});var n,a,r=o(49550);(n=a||(a={})).VISA="VISA",n.MASTERCARD="MASTERCARD",n.SODEXO="SODEXO",n.ELO="ELO";var c=o(40357),d=o(71287);let u=[{transactionId:"4a1ec10c-5189-465e-8c32-554258cfa0d8",accountId:"foo",type:d.b.OUT,categoryId:"foo1",name:"Potes de feijao",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill.",value:1e3,installments:{groupId:"foo1",total:3,current:1},budget:{month:new Date().getUTCMonth().toString().padStart(2,"0"),year:new Date().getUTCFullYear().toString()},createdAt:new Date(2023,10,10,16),cardId:"xp"},{transactionId:"e4363fad-875c-4ebd-a62d-985f34887f40",accountId:"foo",type:d.b.OUT,categoryId:"foo2",name:"Uber ida habbib's errado",description:"foo1",value:15059,budget:{month:new Date().getUTCMonth().toString().padStart(2,"0"),year:new Date().getUTCFullYear().toString()},createdAt:new Date(2023,10,10,15),cardId:"nubank"},{transactionId:"f834ab76-2f28-4528-bb70-c369d0402847",accountId:"foo",type:d.b.OUT,categoryId:"foo3",name:"Depilacao corpo todo",description:"",value:7189,budget:{month:new Date().getUTCMonth().toString().padStart(2,"0"),year:new Date().getUTCFullYear().toString()},createdAt:new Date(2023,10,11,15),cardId:"xp"}],i={foo1:{categoryId:"foo1",accountId:"foo",name:"Moradia",icon:"house",color:"#5C64DE",active:!0},foo2:{categoryId:"foo2",accountId:"foo",name:"Fam\xedlia / Filhos",icon:"baby",color:"#007472",active:!0},foo3:{categoryId:"foo3",accountId:"foo",name:"Mercado",icon:"shopping-cart",color:"#EA744C",active:!0},foo4:{categoryId:"foo4",accountId:"foo",name:"Outros Gastos",icon:"question",color:"#FEC100",active:!0},foo5:{categoryId:"foo5",accountId:"foo",name:"TV / Internet / Telefone",icon:"tv",color:"#B6D6A8",active:!0},foo6:{categoryId:"foo6",accountId:"foo",name:"Sa\xfade",icon:"medkit",color:"#EC4B4B",active:!0},foo7:{categoryId:"foo7",accountId:"foo",name:"Cuidados Pessoais",icon:"kiss",color:"#E060CE",active:!0},foo8:{categoryId:"foo8",accountId:"foo",name:"Despesas do Trabalho",icon:"suitcase",color:"#9901FE",active:!0},foo9:{categoryId:"foo9",accountId:"foo",name:"Viagens",icon:"beach",color:"#46BDC7",active:!0}},s={[i.foo1.categoryId]:375e3,[i.foo2.categoryId]:10100,[i.foo3.categoryId]:13400,[i.foo4.categoryId]:3e4,[i.foo5.categoryId]:10098,[i.foo6.categoryId]:3e3,[i.foo7.categoryId]:5e4,[i.foo8.categoryId]:0,[i.foo9.categoryId]:0},l={budgetId:"foo",accountId:"foo",name:"Default - 2023",year:2023,budgets:{11:{[i.foo1.categoryId]:4e5,[i.foo2.categoryId]:1e5,[i.foo3.categoryId]:2e4,[i.foo4.categoryId]:37500,[i.foo5.categoryId]:18498,[i.foo6.categoryId]:53e3,[i.foo7.categoryId]:43611,[i.foo8.categoryId]:0,[i.foo9.categoryId]:0}}},g={bradesco:{bankId:"bradesco",name:"Bradesco",code:"123",iconUrl:"https://logospng.org/download/bradesco/logo-bradesco-escudo-1024.png",color:"#F0152D"},nubank:{bankId:"nubank",name:"Nubank",code:"321",iconUrl:"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",color:"#820BD1"}},m={nubank:{bankAccountId:"nubank",accountId:"foo1",bankId:g.nubank.bankId,iconUrl:g.nubank.iconUrl,color:g.nubank.color,includeOnBalance:!0,isSystemManaged:!1,accountNumber:"337420",branch:"1234",balance:1e6,name:"Nubank"},bradesco:{bankAccountId:"bradesco",accountId:"foo1",bankId:g.bradesco.bankId,iconUrl:g.bradesco.iconUrl,color:g.bradesco.color,includeOnBalance:!0,isSystemManaged:!1,accountNumber:"123456",branch:"1234",balance:1e6,name:"Bradesco"}},f={xpInfinityOne:{cardProviderId:"xpInfinityOne",name:"Xp Infinity One",iconUrl:"https://logodownload.org/wp-content/uploads/2019/07/xp-investimentos-logo-8.png",color:"#1B1A1D",type:r.m.CREDIT,network:a.VISA,statementDays:14,availableDueDates:["05","10","15"]},aleloRefeicao:{cardProviderId:"aleloRefeicao",name:"Alelo Refeicao",iconUrl:"https://logodownload.org/wp-content/uploads/2017/09/alelo-logo-1-599x393.png",color:"#017958",type:r.m.VA,network:a.ELO}},I={xp:{cardId:"xp",accountId:"foo1",cardProviderId:"xp-infinity-one",iconUrl:"https://logodownload.org/wp-content/uploads/2019/07/xp-investimentos-logo-8.png",color:"#1B1A1D",type:r.m.CREDIT,network:a.VISA,name:"Xp Investimentos",lastFourDigits:"1234",dueDay:10,statementDays:14,limit:35e5,payAt:c.z.DUE,payWithBankAccountId:m.nubank.bankAccountId},nubank:{cardId:"nubank",accountId:"foo1",cardProviderId:"nubank",iconUrl:"https://seucreditodigital.com.br/wp-content/uploads/2021/05/nova-logomarca-do-Nubank-721x720.jpg",color:"#820BD1",type:r.m.CREDIT,network:a.MASTERCARD,name:"Nubank",lastFourDigits:"1234",dueDay:10,statementDays:14,limit:35e5,payAt:c.z.DUE,payWithBankAccountId:m.nubank.bankAccountId},aleloVa:{cardId:"aleloVa",accountId:"foo1",cardProviderId:"aleloVa",iconUrl:"https://logodownload.org/wp-content/uploads/2017/09/alelo-logo-1-599x393.png",color:"#017958",type:r.m.VA,network:a.ELO,name:"Alelo VA",lastFourDigits:"1234",balance:1e3}}},32616:function(e,t,o){o.r(t),o.d(t,{Header:function(){return Header}});var n=o(57437),a=o(24033),r=o(53159),c=o(60414),d=o(58910),u=o(38651);let MonthIndicator=()=>{let{currentBudgetDate:e,setPrevBudget:t,setNextBudget:o}=(0,c.Gu)();return(0,n.jsxs)("div",{className:"flex flex-row justify-between bg-gray text-center items-center relative",children:[(0,n.jsx)("button",{className:"min-w-8 pl-2",onClick:()=>t(),children:(0,n.jsx)(d.sG8,{})}),(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)("h2",{className:"font-bold text-sm",children:(0,u.q6)(e)})}),(0,n.jsx)("button",{className:"min-w-8 px-2",onClick:()=>o(),children:(0,n.jsx)(d.AeI,{})})]})},Header=e=>{let{title:t,subtitle:o,hasBackBtn:c,hasMonthIndicator:d}=e,u=(0,a.useRouter)();return(0,n.jsxs)("section",{children:[(0,n.jsxs)("div",{className:"bg-primary container-padding text-center items-center relative",children:[c&&(0,n.jsx)("button",{className:"rounded-full bg-secondary text-secondary-content p-2 absolute top-1/4 left-4",onClick:()=>u.back(),children:(0,n.jsx)(r.x_l,{})}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsx)("h1",{className:"font-black text-xl",children:t}),o&&(0,n.jsx)("h2",{className:"font-bold text-sm",children:o})]})]}),d&&(0,n.jsx)(MonthIndicator,{})]})}},41902:function(e,t,o){o.d(t,{J:function(){return Icon}});var n=o(57437),a=o(24606),r=o(53159),c=o(58910),d=o(89348);let Icon=e=>{let{icon:t,color:o,size:u,style:i,...s}=e,l={className:"w-".concat(u," h-").concat(u),style:{color:o,...i||{}},...s};switch(t){case"house":return(0,n.jsx)(a.SX3,{...l});case"shopping-cart":return(0,n.jsx)(r.FeP,{...l});case"baby":return(0,n.jsx)(d.cj6,{...l});case"tv":return(0,n.jsx)(r._0,{...l});case"medkit":return(0,n.jsx)(r.gQF,{...l});case"kiss":return(0,n.jsx)(r.o4w,{...l});case"suitcase":return(0,n.jsx)(r.FZC,{...l});case"beach":return(0,n.jsx)(r.jst,{...l});case"question":return(0,n.jsx)(r.MXt,{...l});case"upload":return(0,n.jsx)(c.Ap8,{...l});case"download":return(0,n.jsx)(c.uKn,{...l});case"transfer":return(0,n.jsx)(c.GKy,{...l});default:return(0,n.jsx)(n.Fragment,{})}}},11854:function(e,t,o){o.d(t,{v:function(){return NoBudget}});var n=o(57437),a=o(32616);let NoBudget=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Header,{...e}),(0,n.jsxs)("main",{className:"min-h-[100dvh] w-full container-padding flex flex-col items-center",children:["Orcamento nao configurado",(0,n.jsx)("button",{className:"btn btn-primary",children:"Clique aqui para configurar o orcamento"})]})]})},60414:function(e,t,o){o.d(t,{AJ:function(){return CurrentBudgetProvider},Gu:function(){return useCurrentBudget}});var n=o(57437),a=o(2265),r=o(38651);let c=(0,a.createContext)({}),CurrentBudgetProvider=e=>{let{children:t}=e,[o,d]=(0,a.useState)((0,r.a2)());return(0,n.jsx)(c.Provider,{value:{currentBudget:o,currentBudgetDate:new Date("".concat(o,"-01")),setNextBudget:()=>{let[e,t]=o.split("-");"12"===t?d("".concat(parseInt(e)+1,"-01")):d("".concat(e,"-").concat((parseInt(t)+1).toString().padStart(2,"0")))},setPrevBudget:()=>{let[e,t]=o.split("-");"01"===t?d("".concat(parseInt(e)-1,"-12")):d("".concat(e,"-").concat((parseInt(t)-1).toString().padStart(2,"0")))},getCurrentBudgetMonthId:()=>o.split("-").pop()},children:t})},useCurrentBudget=()=>{let e=(0,a.useContext)(c);if(!e)throw Error("useCurrentBudget must be used within a CurrentBudgetProvider");return e}},49550:function(e,t,o){var n,a;o.d(t,{m:function(){return n}}),(a=n||(n={})).CREDIT="CREDIT",a.DEBIT="DEBIT",a.VA="VA",a.VR="VR",a.VT="VT"},40357:function(e,t,o){var n,a;o.d(t,{z:function(){return n}}),(a=n||(n={})).DUE="DUE",a.STATEMENT="STATEMENT"},71287:function(e,t,o){var n,a;o.d(t,{b:function(){return n}}),(a=n||(n={})).IN="IN",a.OUT="OUT",a.TRANSFER="TRANSFER"},38651:function(e,t,o){o.d(t,{Tu:function(){return formatFullDate},a2:function(){return getMonthAndYear},bf:function(){return sortDateYYYYMMDD},dE:function(){return getMonthId},q6:function(){return getMonthNameAndYear},rO:function(){return getMonthShortName},wf:function(){return getDay}});let n={"01":{name:"Janeiro",shortName:"Jan"},"02":{name:"Fevereiro",shortName:"Fev"},"03":{name:"Mar\xe7o",shortName:"Mar"},"04":{name:"Abril",shortName:"Abr"},"05":{name:"Maio",shortName:"Mai"},"06":{name:"Junho",shortName:"Jun"},"07":{name:"Julho",shortName:"Jul"},"08":{name:"Agosto",shortName:"Ago"},"09":{name:"Setembro",shortName:"Set"},10:{name:"Outubro",shortName:"Out"},11:{name:"Novembro",shortName:"Nov"},12:{name:"Dezembro",shortName:"Dez"}},getMonthId=e=>{let t=e||new Date,o=t.getUTCMonth()+1;return o.toString().padStart(2,"0")},getDay=e=>{let t=e||new Date,o=t.getUTCDate();return o.toString().padStart(2,"0")},getTime=e=>{let t=e||new Date,o=t.getHours().toString().padStart(2,"0"),n=t.getMinutes().toString().padStart(2,"0");return"".concat(o,":").concat(n)},getMonthAndYear=e=>{let t=e||new Date;return"".concat(t.getUTCFullYear(),"-").concat(getMonthId(t))},getMonthNameAndYear=e=>{var t;let o=e||new Date,a=getMonthId(o);return"".concat(null===(t=n[a])||void 0===t?void 0:t.name," de ").concat(o.getUTCFullYear())},formatFullDate=e=>{var t,o;let a=e||new Date,r=getMonthId(a),c=getDay(a),d=getTime(a);return"".concat(c," de ").concat(null===(o=n[r])||void 0===o?void 0:null===(t=o.name)||void 0===t?void 0:t.toLowerCase()," de ").concat(a.getUTCFullYear(),", as ").concat(d)},getMonthShortName=e=>n[e].shortName,sortDateYYYYMMDD=(e,t)=>{let[o,n,a]=e.split("-").map(parseFloat),[r,c,d]=t.split("-").map(parseFloat);return new Date(o,n-1,a).getTime()<new Date(r,c-1,d).getTime()?1:-1}},77200:function(e,t,o){var n;o.d(t,{pv:function(){return formatBankAccount},lb:function(){return formatMoney}}),(n||(n={})).BR="BR";let removeFromEnd=(e,t)=>e.substring(0,e.length-t),getFromEnd=(e,t)=>e.substring(e.length-t),a=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}),formatMoney=e=>a.format((e||0)/100),formatBankAccount=e=>e.length<=5?e:"".concat(removeFromEnd(e,1),"-").concat(getFromEnd(e,1))}}]);