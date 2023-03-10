import{ai as b,w as x,ah as L,a0 as C,at as i,as as g,_ as V}from"./router-3749f69b.js";import{u as k,_ as B}from"./FormItemRow-ad993366.js";import{r as U,a as z,e as E,a5 as K,g as e,w as s,a6 as o,L as N}from"./plugin-vueexport-helper-542923d8.js";import{_ as S,b as T}from"./FormItem-3d7bec99.js";import{_ as A}from"./Space-045e73e2.js";import"./context-37e22e0a.js";const M=""+new URL("image-01-0869bb00.jpg",import.meta.url).href;const R={id:"Login"},$=o("div",{class:"right-cover"},[o("img",{src:M})],-1),j={class:"left-form"},D=o("span",{class:"title",style:{display:"flex","flex-direction":"column","margin-bottom":"10px"}},[o("h3",{style:{margin:"0"}},"Login"),o("h5",null,"會員登入")],-1),q=o("br",null,null,-1),F=o("h5",null,"沒有帳號，點我註冊",-1),W={__name:"LoginView",setup(G){const _=b(),f=x();L();const r=k(),u=U(!1),n=z({account:"",password:""}),p=async()=>{u.value=!0;const a=await f.login(n);a.length>0?await r.error({title:"登入失敗",content:a,positiveText:"再試一次"}):(await r.success({title:"登入成功",content:"點擊回到首頁",positiveText:"回到首頁"}),_.push("/")),u.value=!1};function v(a){_.push({path:"register"})}return(a,t)=>{const c=S,d=B,m=V,w=A,h=T,y=C;return E(),K("div",R,[e(y,{hoverable:""},{default:s(()=>[$,o("div",j,[e(h,{ref:"valid",model:n,rules:a.rules,size:"medium",onSubmit:i(p,["prevent"])},{default:s(()=>[D,e(d,{label:"帳號",path:"account"},{default:s(()=>[e(c,{value:n.account,"onUpdate:value":t[0]||(t[0]=l=>n.account=l),placeholder:"輸入帳號",onKeydown:t[1]||(t[1]=g(i(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),e(d,{label:"密碼",path:"password"},{default:s(()=>[e(c,{value:n.password,"onUpdate:value":t[2]||(t[2]=l=>n.password=l),type:"password",onKeydown:t[3]||(t[3]=g(i(()=>{},["prevent"]),["enter"])),"show-password-on":"mousedown"},null,8,["value"])]),_:1}),o("div",null,[e(m,{round:"",size:"large",color:"#CA9E",type:"submit",loading:!1,onClick:p},{default:s(()=>[N("登 入")]),_:1}),q,e(w),e(m,{text:"",size:"large",color:"#CA9E",loading:!1,onClick:v},{default:s(()=>[F]),_:1})])]),_:1},8,["model","rules","onSubmit"])])]),_:1})])}}};export{W as default};
