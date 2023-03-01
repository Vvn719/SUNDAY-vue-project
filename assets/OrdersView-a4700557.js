import{ag as v,ad as b,ak as C,aj as O,_ as V}from"./router-cc0924f7.js";import{c as j,_ as $,a as M,b as B}from"./CheckmarkSharp-42addba5.js";import{d as D,e as o,a5 as l,a6 as t,a as z,g as n,w as e,F as m,af as f,ah as c,a4 as g}from"./plugin-vueexport-helper-542923d8.js";const I={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},L=t("path",{d:"M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),N=t("path",{d:"M256 56v120a32 32 0 0 0 32 32h120",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),q=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 288h160"},null,-1),F=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 368h160"},null,-1),P=[L,N,q,F],S=D({name:"DocumentTextOutline",render:function(u,a){return o(),l("svg",I,P)}});const A={class:"OrderContain"},E=t("h1",{style:{"margin-left":"20px"}},"My Orders",-1),H=t("thead",null,[t("tr",null,[t("th",null,"訂購日期"),t("th",null,"訂單編號"),t("th",null,"商品明細"),t("th",null,"應付金額"),t("th",null,"付款狀態"),t("th",null,"出貨狀態"),t("th",null,"客服/紀錄")])],-1),T={style:{"word-break":"break-all",width:"15%"}},G={style:{width:"35%"}},J=["href"],K=t("p",null,"已付款",-1),Q=t("p",null,"備貨中",-1),X={__name:"OrdersView",setup(k){const u=z([]);return(async()=>{try{const{data:a}=await v.get("/orders");u.push(...a.result.map(r=>(r.totalPrice=r.products.reduce((d,i)=>d+i.p_id.price*i.quantity,0),r)))}catch{message.error("取得訂單失敗")}})(),(a,r)=>{const d=O,i=$,w=M,y=B,h=b,p=V,x=C;return o(),l("div",A,[E,n(x,null,{default:e(()=>[H,t("tbody",null,[(o(!0),l(m,null,f(u,s=>(o(),l("tr",{key:s._id},[t("td",null,c(new Date(s.date).toLocaleDateString()),1),t("td",T,c(s._id),1),t("td",G,[n(y,{"arrow-placement":"right"},{default:e(()=>[n(w,{title:"Order List",style:{"text-align":"left"}},{default:e(()=>[(o(!0),l(m,null,f(s.products,_=>(o(),l("div",{key:_._id},[n(i,{"single-column":"","single-line":!1},{default:e(()=>[t("tr",null,[n(d,{src:_.p_id.image[0],width:30,height:30,"object-fit":"cover"},null,8,["src"]),t("a",{href:"#/products/"+_.p_id._id},c(_.p_id.name+" x "+_.quantity+"件"),9,J)])]),_:2},1024)]))),128))]),_:2},1024)]),_:2},1024)]),t("td",null,c(s.totalPrice)+" 元",1),t("td",null,[n(p,{text:"",type:"primary"},{default:e(()=>[n(h,{size:"22"},{default:e(()=>[n(g(j))]),_:1}),K]),_:1})]),t("td",null,[n(p,{text:""},{default:e(()=>[Q]),_:1})]),t("td",null,[n(p,{text:""},{default:e(()=>[n(h,{size:"22"},{default:e(()=>[n(g(S))]),_:1})]),_:1})])]))),128))])]),_:1})])}}};export{X as default};