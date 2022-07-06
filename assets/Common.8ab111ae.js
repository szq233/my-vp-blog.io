import{i as y,u as V,j as _e,_ as C,f as N,o,c as v,a as u,h as a,k as ke,r as O,l as D,v as H,d as k,m as we,n as U,p as ie,t as F,q as ue,g as L,s as x,x as P,w as E,y as I,T as $e,z as ce,A as T,B as X,C as de,F as W,D as z,E as K,G as J,H as j,I as ve,J as ye,K as Se,L as Te,M as Ie,N as Le,b as xe,O as pe,P as Ce}from"./app.ea292e16.js";const re=p=>decodeURI(p).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ne=(p,n)=>{if(n.hash===p)return!0;const e=re(n.path),l=re(p);return e===l},ge=(p,n)=>p.link&&Ne(p.link,n)?!0:p.children?p.children.some(e=>ge(e,n)):!1,Be=()=>{const p=V(),n=_e();return y(()=>n.value.frontmatter.layout==="Post"&&n.value.frontmatter.catalog!==!1&&(p.value.catalog||n.value.frontmatter.catalog)&&n.value.headers.length>0)},Ve={class:"footer"},Me=["innerHTML"],Oe=N({__name:"Footer",setup(p){const e=V().value.footer;return(l,s)=>(o(),v("footer",Ve,[u("span",{innerHTML:a(e)},null,8,Me)]))}});var Ee=C(Oe,[["__file","Footer.vue"]]);const Pe=["title"],Re=N({__name:"ToggleColorModeButton",setup(p){const n=["light","dark","auto"],e=V(),{currentMode:l}=ke(),s=()=>{const w=(n.indexOf(l.value)+1)%n.length;l.value=n[w]};return(f,w)=>{const h=O("VIcon");return o(),v("div",{title:a(e).toggleColorMode,onClick:s},[D(k(h,{name:"fa-sun"},null,512),[[H,a(l)==="light"]]),D(k(h,{name:"fa-moon"},null,512),[[H,a(l)==="dark"]]),D(k(h,{name:"fa-magic"},null,512),[[H,a(l)==="auto"]])],8,Pe)}}});var De=C(Re,[["__file","ToggleColorModeButton.vue"]]);const He=["title"],Fe=N({__name:"ToggleSidebarButton",emits:["toggle"],setup(p){const n=V();return(e,l)=>{const s=O("VIcon");return o(),v("div",{class:"toggle-sidebar-button",title:a(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=f=>e.$emit("toggle"))},[k(s,{name:"bi-layout-sidebar-inset"})],8,He)}}});var Ae=C(Fe,[["__file","ToggleSidebarButton.vue"]]);const qe={class:"menu-btn-wrapper"},We={class:"menu-btn-icon"},Ke=u("span",null,null,-1),ze=u("span",null,null,-1),je=u("span",null,null,-1),Ye=[Ke,ze,je],Ge={class:"menu-progress"},Ue={class:"menu-btn-child-wrapper"},Xe=N({__name:"Menu",emits:["toggle-sidebar","toggle-catalog"],setup(p){const n=V(),e=we({isMenuOpen:!1,isTextVisible:!1,isBtnIconVisible:!0,menuText:"0",borderLen:"0% 314.15926%"});U(()=>{window.addEventListener("scroll",l)}),ie(()=>{window.removeEventListener("scroll",l)});const l=()=>{const r=window.pageYOffset,_=h(),t=document.documentElement.clientHeight;let i=r/(_-t)*100;i>100&&(i=100),isNaN(i)||Math.round(i)<=0?(i=0,e.isTextVisible=!1,e.isBtnIconVisible=!0):(e.isTextVisible=!0,e.menuText=Math.round(i)+"%",e.isBtnIconVisible=!1),e.borderLen=3.1415926*(i||0)+"% 314.15926%"},s=()=>{e.isMenuOpen=!e.isMenuOpen},f=()=>{window.scrollTo({top:0,behavior:"smooth"})},w=()=>{window.scrollTo({top:h(),behavior:"smooth"})},h=()=>{const r=document.querySelector(".theme-container");return r?r.offsetHeight:0},g=Be();return(r,_)=>{const t=O("VIcon");return o(),v("div",{class:P(["menu-btn-container",{open:e.isMenuOpen}])},[u("div",qe,[u("div",{class:"menu-btn",onClick:s},[D(u("div",We,Ye,512),[[H,e.isBtnIconVisible]]),D(u("div",{class:"menu-text"},F(e.menuText),513),[[H,e.isTextVisible]]),(o(),v("svg",Ge,[u("circle",{class:"menu-border",cx:"50%",cy:"50%",r:"48%",style:ue({"stroke-dasharray":e.borderLen})},null,4)]))]),u("div",Ue,[a(n).colorModeSwitch?(o(),L(De,{key:0,class:"menu-btn-child"})):x("",!0),u("div",{class:"menu-btn-child",onClick:w},[k(t,{name:"fa-chevron-down"})]),u("div",{class:"menu-btn-child",onClick:f},[k(t,{name:"fa-chevron-up"})]),a(g)?(o(),v("div",{key:1,class:"menu-btn-child menu-toc-btn",onClick:_[0]||(_[0]=i=>r.$emit("toggle-catalog"))},[k(t,{name:"fa-list-ul"})])):x("",!0),k(Ae,{class:"menu-btn-child menu-btn-sidebar",onToggle:_[1]||(_[1]=i=>r.$emit("toggle-sidebar"))})])])],2)}}});var Je=C(Xe,[["__file","Menu.vue"]]);const Qe=N({__name:"DropdownTransition",setup(p){const n=l=>{l.style.height=l.scrollHeight+"px"},e=l=>{l.style.height=""};return(l,s)=>(o(),L($e,{name:"dropdown",onEnter:n,onAfterEnter:e,onBeforeLeave:n},{default:E(()=>[I(l.$slots,"default")]),_:3}))}});var me=C(Qe,[["__file","DropdownTransition.vue"]]);const Ze=["aria-label"],et={class:"title"},tt={key:0,class:"nav-icon"},nt=u("span",{class:"arrow down"},null,-1),at=["aria-label"],ot={class:"title"},st={key:0,class:"nav-icon"},lt={class:"navbar-dropdown"},rt={class:"navbar-dropdown-subtitle"},it={key:1},ut={class:"navbar-navbar-dropdown-subitem-wrapper"},ct=N({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(p){const n=p,{item:e}=ce(n),l=y(()=>e.value.ariaLabel||e.value.text),s=T(!1),f=X();de(()=>f.path,()=>{s.value=!1});const w=g=>{g.detail===0?s.value=!s.value:s.value=!1},h=(g,r)=>r[r.length-1]===g;return(g,r)=>{const _=O("VIcon");return o(),v("div",{class:P(["navbar-dropdown-wrapper",{open:s.value}])},[u("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(l),onClick:w},[u("span",et,[a(e).icon?(o(),v("span",tt,[k(_,{name:a(e).icon},null,8,["name"])])):x("",!0),u("span",null,F(a(e).text),1)]),nt],8,Ze),u("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(l),onClick:r[0]||(r[0]=t=>s.value=!s.value)},[u("span",ot,[a(e).icon?(o(),v("span",st,[k(_,{name:a(e).icon},null,8,["name"])])):x("",!0),u("span",null,F(a(e).text),1)]),u("span",{class:P(["arrow",s.value?"down":"right"])},null,2)],8,at),k(me,null,{default:E(()=>[D(u("ul",lt,[(o(!0),v(W,null,z(a(e).children,t=>(o(),v("li",{key:t.text,class:"navbar-dropdown-item"},[t.children?(o(),v(W,{key:0},[u("h4",rt,[t.link?(o(),L(K,{key:0,item:t,onFocusout:i=>h(t,a(e).children)&&t.children.length===0&&(s.value=!1)},null,8,["item","onFocusout"])):(o(),v("span",it,F(t.text),1))]),u("ul",ut,[(o(!0),v(W,null,z(t.children,i=>(o(),v("li",{key:i.link,class:"navbar-dropdown-subitem"},[k(K,{item:i,onFocusout:$=>h(i,t.children)&&h(t,a(e).children)&&(s.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),L(K,{key:1,item:t,onFocusout:i=>h(t,a(e).children)&&(s.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[H,s.value]])]),_:1})],2)}}});var dt=C(ct,[["__file","NavbarDropdown.vue"]]);const vt={key:0,class:"navbar-items"},pt={key:0,class:"navbar-item"},gt={key:0,class:"nav-icon"},mt=N({__name:"NavbarItems",emits:["toggle-search"],setup(p){const n=()=>{const t=j(),i=ye(),$=Se(),m=V();return y(()=>{var d,S,B;const M=Object.keys($.value.locales);if(M.length<2)return[];const A=t.currentRoute.value.path,q=t.currentRoute.value.fullPath,b=t.currentRoute.value.hash;return[{text:(d=m.value.selectLanguageText)!=null?d:"unknown language",ariaLabel:(B=(S=m.value.selectLanguageAriaLabel)!=null?S:m.value.selectLanguageText)!=null?B:"unknown language",icon:m.value.langIcon,children:M.map(R=>{var ee,te,ne,ae,oe,se;const Y=(te=(ee=$.value.locales)==null?void 0:ee[R])!=null?te:{},Q=(ae=(ne=m.value.locales)==null?void 0:ne[R])!=null?ae:{},Z=`${Y.lang}`,be=(oe=Q.selectLanguageName)!=null?oe:Z;let G;if(Z===$.value.lang)G=q;else{const le=A.replace(i.value,R);t.getRoutes().some(fe=>fe.path===le)?G=`${le}${b}`:G=(se=Q.home)!=null?se:R}return{text:be,link:G}})}]})},e=t=>Te(t)?Ie(t):t.children?{...t,children:t.children.map(e)}:t,s=(()=>{const t=V();return y(()=>(t.value.navbar||[]).map(e))})(),f=n(),w=y(()=>[...s.value,...g.value?f.value:[]]),h=J(),g=y(()=>{const i=j().currentRoute.value.path;return h.value.layout===void 0&&i.indexOf("/page/")===-1&&ve.value.path!==""}),r=V(),_=y(()=>r.value.search&&h.value.search!==!1);return(t,i)=>{const $=O("VIcon");return a(w).length?(o(),v("nav",vt,[(o(!0),v(W,null,z(a(w),m=>(o(),v("div",{key:m.text,class:"navbar-item"},[m.children?(o(),L(dt,{key:0,item:m},null,8,["item"])):(o(),L(K,{key:1,item:m},null,8,["item"]))]))),128)),a(_)?(o(),v("div",pt,[u("a",{style:{cursor:"pointer"},onClick:i[0]||(i[0]=m=>t.$emit("toggle-search"))},[a(r).searchIcon?(o(),v("span",gt,[k($,{name:a(r).searchIcon},null,8,["name"])])):x("",!0),u("span",null,F(a(r).searchText),1)])])):x("",!0)])):x("",!0)}}});var he=C(mt,[["__file","NavbarItems.vue"]]);const ht={class:"site-name"},bt=N({__name:"Navbar",props:{isSidebar:{type:Boolean,required:!0}},emits:["toggle-search"],setup(p){const n=V(),e=J(),l=j(),s=T(null),f=T(null),w=y(()=>n.value.home||"/"),h=y(()=>n.value.navbarTitle),g=T(0),r=y(()=>g.value?{maxWidth:g.value+"px"}:{}),_=T(0),t=T(!1),i=T(!1),$=T(!0),m=()=>{const b=window.pageYOffset;b<_.value?b>0&&t.value?i.value=!0:(i.value=!1,t.value=!1):(i.value=!1,s.value&&b>s.value.offsetHeight&&(t.value=!0)),_.value=b},M=()=>{let b=!1;e.value.layout==="HomePage"&&(b=!0),e.value.layout==="Post"&&e.value.useHeaderImage&&(b=!0),e.value.layout==="Tags"&&n.value.pages&&n.value.pages.tags&&n.value.pages.tags.bgImage&&(b=!0),e.value.layout==="Links"&&n.value.pages&&n.value.pages.links&&n.value.pages.links.bgImage&&(b=!0),$.value=b};let A;U(()=>{const c=q(s.value,"paddingLeft")+q(s.value,"paddingRight"),d=()=>{var S;window.innerWidth<=719||!s.value?g.value=0:g.value=s.value.offsetWidth-c-(((S=f.value)==null?void 0:S.offsetWidth)||0)};d(),window.addEventListener("resize",d,!1),window.addEventListener("orientationchange",d,!1),M(),A=l.afterEach(()=>{M()}),window.addEventListener("scroll",m)}),ie(()=>{window.removeEventListener("scroll",m),A()});function q(b,c){var B,R,Y;const d=(Y=(R=(B=b==null?void 0:b.ownerDocument)==null?void 0:B.defaultView)==null?void 0:R.getComputedStyle(b,null))==null?void 0:Y[c],S=Number.parseInt(d,10);return Number.isNaN(S)?0:S}return(b,c)=>{const d=O("RouterLink"),S=O("NavbarSearch");return o(),v("header",{ref_key:"navbar",ref:s,class:P(["navbar",{"is-fixed":t.value||p.isSidebar,"is-visible":i.value||p.isSidebar,invert:$.value}])},[u("span",{ref_key:"navbarBrand",ref:f},[k(d,{to:a(w)},{default:E(()=>[u("span",ht,F(a(h)),1)]),_:1},8,["to"])],512),u("div",{class:"navbar-items-wrapper",style:ue(a(r))},[I(b.$slots,"before"),k(he,{class:"can-hide",onToggleSearch:c[0]||(c[0]=B=>b.$emit("toggle-search"))}),I(b.$slots,"after"),k(S)],4)],2)}}});var ft=C(bt,[["__file","Navbar.vue"]]);const _t={class:"sidebar-item-children"},kt=N({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(p){const n=p,{item:e,depth:l}=ce(n),s=X(),f=j(),w=y(()=>ge(e.value,s)),h=y(()=>({"sidebar-item":!0,"sidebar-heading":l.value===0,active:w.value,collapsible:e.value.collapsible})),g=T(!0),r=T(void 0);return e.value.collapsible&&(g.value=w.value,r.value=()=>{g.value=!g.value},f.afterEach(()=>{g.value=w.value})),(_,t)=>{var $;const i=O("SidebarItem",!0);return o(),v("li",null,[a(e).link?(o(),L(K,{key:0,class:P(a(h)),item:a(e)},null,8,["class","item"])):(o(),v("p",{key:1,tabindex:"0",class:P(a(h)),onClick:t[0]||(t[0]=(...m)=>r.value&&r.value(...m)),onKeydown:t[1]||(t[1]=Le((...m)=>r.value&&r.value(...m),["enter"]))},[xe(F(a(e).text)+" ",1),a(e).collapsible?(o(),v("span",{key:0,class:P(["arrow",g.value?"down":"right"])},null,2)):x("",!0)],34)),($=a(e).children)!=null&&$.length?(o(),L(me,{key:2},{default:E(()=>[D(u("ul",_t,[(o(!0),v(W,null,z(a(e).children,m=>(o(),L(i,{key:`${a(l)}${m.text}${m.link}`,item:m,depth:a(l)+1},null,8,["item","depth"]))),128))],512),[[H,g.value]])]),_:1})):x("",!0)])}}});var wt=C(kt,[["__file","SidebarItem.vue"]]);const $t={key:0,class:"sidebar-items"},yt=N({__name:"SidebarItems",setup(p){const n=X(),e=pe();return U(()=>{de(()=>n.hash,l=>{const s=document.querySelector(".sidebar");if(!s)return;const f=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${l}"]`);if(!f)return;const{top:w,height:h}=s.getBoundingClientRect(),{top:g,height:r}=f.getBoundingClientRect();g<w?f.scrollIntoView(!0):g+r>w+h&&f.scrollIntoView(!1)})}),(l,s)=>a(e).length?(o(),v("ul",$t,[(o(!0),v(W,null,z(a(e),f=>(o(),L(wt,{key:f.link||f.text,item:f},null,8,["item"]))),128))])):x("",!0)}});var St=C(yt,[["__file","SidebarItems.vue"]]);const Tt={class:"sidebar"},It=N({__name:"Sidebar",emits:["toggle-search"],setup(p){return(n,e)=>(o(),v("aside",Tt,[k(he,{onToggleSearch:e[0]||(e[0]=l=>n.$emit("toggle-search"))}),I(n.$slots,"top"),k(St),I(n.$slots,"bottom")]))}});var Lt=C(It,[["__file","Sidebar.vue"]]);const xt={class:"page-content"},Ct=N({__name:"Common",setup(p){const n=J(),e=V(),l=j(),s=y(()=>n.value.navbar!==!1&&e.value.navbar!==!1),f=y(()=>ve.value.path===""),w=pe(),h=y(()=>w.value.length>0&&!f.value),g=T(!1),r=c=>{g.value=typeof c=="boolean"?c:!g.value},_={x:0,y:0},t=c=>{_.x=c.changedTouches[0].clientX,_.y=c.changedTouches[0].clientY},i=c=>{const d=c.changedTouches[0].clientX-_.x,S=c.changedTouches[0].clientY-_.y;Math.abs(d)>Math.abs(S)&&Math.abs(d)>40&&(d>0&&_.x<=80?r(!0):r(!1))},$=T(!1),m=c=>{$.value=typeof c=="boolean"?c:!$.value;const d=document.querySelector("html");$.value?d==null||d.classList.add("fixed"):d==null||d.classList.remove("fixed"),$.value&&setTimeout(function(){document.querySelector(".search-page input").focus()},400)},M=T(!1),A=c=>{M.value=typeof c=="boolean"?c:!M.value},q=y(()=>[{"no-navbar":!s.value,"no-sidebar":!h.value,"sidebar-open":g.value,"catalog-open":M.value,"search-open":$.value},n.value.pageClass]);let b;return U(()=>{b=l.afterEach(()=>{r(!1),m(!1)})}),Ce(()=>{b()}),(c,d)=>{const S=O("GungnirSearchPage");return o(),v("div",{class:P(["theme-container",a(q)]),onTouchstart:t,onTouchend:i},[I(c.$slots,"navbar",{},()=>[a(s)?(o(),L(ft,{key:0,"is-sidebar":a(h),onToggleSearch:d[0]||(d[0]=B=>m(!0))},{before:E(()=>[I(c.$slots,"navbar-before")]),after:E(()=>[I(c.$slots,"navbar-after")]),_:3},8,["is-sidebar"])):x("",!0)]),u("div",{class:"sidebar-mask",onClick:d[1]||(d[1]=B=>r(!1))}),I(c.$slots,"sidebar",{},()=>[k(Lt,{onToggleSearch:d[2]||(d[2]=B=>m(!0))},{top:E(()=>[I(c.$slots,"sidebar-top")]),bottom:E(()=>[I(c.$slots,"sidebar-bottom")]),_:3})]),u("div",xt,[I(c.$slots,"page")]),k(S,{onToggleSearch:d[3]||(d[3]=B=>m(!1))}),k(Je,{onToggleSidebar:r,onToggleCatalog:A}),a(h)?x("",!0):(o(),L(Ee,{key:0}))],34)}}});var Bt=C(Ct,[["__file","Common.vue"]]);export{Bt as C,Be as u};
