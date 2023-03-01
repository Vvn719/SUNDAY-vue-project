import{ah as j,ai as V,w as A,ag as I,aj as S,ad as T,_ as O,ak as P}from"./router-b93ab1d8.js";import{d as v,e as i,a5 as r,a6 as t,a as E,c as g,g as s,w as l,F,af as H,ah as a,ae as w,a4 as _,L as y}from"./plugin-vueexport-helper-542923d8.js";import{T as L}from"./TrashOutline-f8a98d2a.js";const R={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},D=t("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),U=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M256 176v160"},null,-1),G=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 256H176"},null,-1),J=[D,U,G],K=v({name:"AddCircleOutline",render:function(u,h){return i(),r("svg",R,J)}}),Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},W=t("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),X=t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M336 256H176"},null,-1),Y=[W,X],Z=v({name:"RemoveCircleOutline",render:function(u,h){return i(),r("svg",Q,Y)}}),tt={class:"CartContain"},et=t("h1",{style:{"margin-left":"20px"}},"My Cart",-1),nt=t("thead",null,[t("tr",null,[t("th",null,"分類"),t("th",null,"名稱"),t("th",null,"商品圖片"),t("th"),t("th",null,"購買數量"),t("th"),t("th",null,"價錢"),t("th",null,"小計"),t("th",null,"移除商品")])],-1),ot=["href"],st={key:0},lt={"aspect-ratio":1,width:150},it={key:0},rt={key:0},at=t("h5",null,"沒有商品",-1),ct=[at],_t={class:"totalPrice"},ut=t("h3",null,"總金額　",-1),dt={class:"totalPrice"},mt={__name:"CartView",setup(f){const u=j(),h=V(),$=A(),{editCart:x,checkout:q}=$,n=E([]),p=async(e,c)=>{await x({_id:n[e].p_id._id,quantity:c}),n[e].quantity+=c,n[e].quantity<=0?n.splice(e,1):n[e].quantity>n[e].p_id.quantity&&u.error(`目前商品數量為 ${n[e].p_id.quantity} 件`)},M=async()=>{await q(),h.push("/orders")},b=g(()=>n.reduce((e,c)=>e+c.p_id.price*c.quantity,0)),z=g(()=>n.length>0&&!n.some(e=>!e.p_id.sell));return(async()=>{try{const{data:e}=await I.get("/users/cart");n.push(...e.result)}catch{u.error("取得購物車失敗")}})(),(e,c)=>{const B=S,k=T,d=O,N=P;return i(),r("div",tt,[et,s(N,null,{default:l(()=>[nt,t("tbody",null,[(i(!0),r(F,null,H(n,(o,m)=>(i(),r("tr",{key:o._id},[t("td",null,a(o.p_id.category[0]),1),t("td",null,[t("a",{href:"#/products/"+o.p_id._id},a(o.p_id.name),9,ot),o.p_id.sell===!1?(i(),r("h5",st,"此款已下架")):w("",!0)]),t("td",lt,[s(B,{src:o.p_id.image[0],width:100,height:100,"object-fit":"cover"},null,8,["src"])]),t("td",null,[s(d,{text:"",onClick:C=>p(m,-1)},{default:l(()=>[s(k,{size:"22"},{default:l(()=>[s(_(Z))]),_:1})]),_:2},1032,["onClick"])]),t("td",null,[y(a(o.quantity)+" ",1),o.p_id.quantity===1?(i(),r("h5",it,"最後"+a(o.p_id.quantity)+"件",1)):w("",!0)]),t("td",null,[s(d,{text:"",onClick:C=>p(m,1)},{default:l(()=>[s(k,{size:"22"},{default:l(()=>[s(_(K))]),_:1})]),_:2},1032,["onClick"])]),t("td",null,a(o.p_id.price),1),t("td",null,a(o.quantity*o.p_id.price),1),t("td",null,[s(d,{text:"",onClick:C=>p(m,o.quantity*-1)},{default:l(()=>[s(k,{size:"22"},{default:l(()=>[s(_(L))]),_:1})]),_:2},1032,["onClick"])])]))),128)),n.length===0?(i(),r("tr",rt,ct)):w("",!0)])]),_:1}),t("div",_t,[ut,t("h2",null,"NT. "+a(_(b)),1)]),t("div",dt,[s(d,{round:"",onClick:M,color:"#CA9E",size:"large",disabled:!_(z)},{default:l(()=>[y("結帳 Order")]),_:1},8,["disabled"])])])}}};export{mt as default};