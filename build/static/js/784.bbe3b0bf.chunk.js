"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[356,784],{2477:(e,l,a)=>{a.r(l),a.d(l,{default:()=>_});var s=a(5043),n=a(579);const r=e=>{let{children:l}=e;return(0,n.jsx)("header",{className:"header",children:l})};a(4946);var d=a(8278),o=a(8927);const t=e=>{let{className:l}=e;return(0,n.jsx)("div",{className:l,children:(0,n.jsx)(o.A,{size:"md",content:"Loading..."})})};var c=a(4413),i=a(8008),h=a(6951),p=a(3347),x=a(4074),m=a(4728),j=a(4920),u=a(3009),g=a(3879),N=a(5638),v=a(1658),C=a(2047),S=a(45),k=a(1802);const A=["label","onChangeHandler","data"],f=e=>{let{label:l,onChangeHandler:a,data:s}=e,r=(0,S.A)(e,A);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"multiselect-dropdown-wrapper",children:[(0,n.jsx)("div",{className:"dropdown-label",children:(0,n.jsx)("span",{children:l})}),(0,n.jsx)("div",{className:"".concat(r.isOpen?"is-dropdown-open":""," check-picker-wrap"),children:(0,n.jsx)(k.A,{block:!0,placeholder:r.placeholder,onChange:a,size:"lg",onOpen:r.onOpenHandler,onClose:r.onCloseHandler,onClean:r.onCleanHandler,data:s,searchable:!1,style:{width:224}})})]})})};var b=a(9379),O=a(8304),E=a(7528),T=a(6235);const w=["placeholder","inputClass","onChangeHandler","label"],y=e=>{let{placeholder:l,inputClass:a,onChangeHandler:s,label:r}=e,d=(0,S.A)(e,w);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"search-container",children:(0,n.jsxs)("div",{className:"flex-col",children:[(0,n.jsx)("div",{className:"search-label",children:(0,n.jsx)("span",{children:r})}),(0,n.jsxs)(O.A,(0,b.A)((0,b.A)({},d),{},{inside:!0,className:"mb-1",children:[(0,n.jsx)(E.A,{placeholder:l,className:a,size:"lg",onChange:s}),(0,n.jsx)(O.A.Button,{children:(0,n.jsx)(T.A,{})})]}))]})})})},H=e=>{let{isFilterEnable:l}=e;const{state:a,getPokemonData:r,dispatch:d,setAppLoading:o,getPokemonDetailsListByUrl:t}=(0,s.useContext)(c.A),{allPokemonList:i,pokemonTypes:x,pokemonGenderList:S}=a,[k,A]=(0,s.useState)(!1),[b,O]=(0,s.useState)(!1);let E=(0,m.of)([]);const T=e=>{d({type:"ACTIONS.SET_FILTERED_POKEMON_LIST",payload:e})},w=async()=>{(0,C.bb)().then((e=>{var l;(l=e.results).length?(l=l.map((e=>({label:(0,v.id)(e.name),value:e.url,url:e.url}))),d({type:"ACTIONS.SET_POKEMON_TYPE",payload:l})):d({type:"ACTIONS.SET_POKEMON_TYPE",payload:[]})})).catch((e=>{console.error(e)}))},H=async()=>{(0,C.A4)().then((e=>{var l;(l=(l=e.results).map((e=>({label:(0,v.id)(e.name),value:e.url,url:e.url})))).length?d({type:"ACTIONS.SET_POKEMON_GENDER_LIST",payload:l}):d({type:"ACTIONS.SET_POKEMON_GENDER_LIST",payload:[]})})).catch((e=>{console.error(e)}))};return(0,s.useEffect)((()=>{w(),H()}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"filter-container",children:(0,n.jsx)("div",{className:"filter-wrap",children:(0,n.jsxs)(h.A,{className:"filter-row-wrap show-grid",children:[(0,n.jsx)(p.A,{lg:16,xl:16,xs:24,sm:24,children:(0,n.jsx)("div",{children:(0,n.jsx)(y,{placeholder:"Name or Number",inputClass:"pokemon-search-filter",label:"Search By",onChangeHandler:(e,a)=>{a.preventDefault(),e=e.trim(),o(!0),e.length?(l(!0),E=(0,m.of)(i).pipe((0,j.B)(4e3),(0,u.F)(),(0,g.T)((l=>l.filter((l=>l.name.toLowerCase().indexOf(e.toLowerCase())>-1)))))):(T([]),r(!0),l(!1)),E.subscribe((e=>{e.length>N.Sq&&(e=e.slice(0,N.Sq)),t(e).then((e=>{T(e)}))})),o(!1)}})})}),(0,n.jsx)(p.A,{lg:4,xl:4,xs:24,sm:24,children:(0,n.jsx)("div",{children:(0,n.jsx)(f,{placeholder:"Select Types",isOpen:k,data:x,label:"Type",onChangeHandler:(e,a)=>{a.preventDefault(),e.length?(l(!0),(0,C.HZ)(e).then((e=>{e=(e=e.map((e=>e.pokemon))).flat().map((e=>e.pokemon)),(e=(0,C.tB)(e,"name")).length>N.Sq&&(e=e.slice(-N.Sq)),t(e).then((e=>{T(e)}))})).catch((e=>console.error(e)))):(T([]),r(!0),l(!1))},onOpenHandler:()=>{A(!0)},onCloseHandler:()=>{A(!1)},onCleanHandler:e=>{e&&l(!1)}})})}),(0,n.jsx)(p.A,{lg:4,xl:4,xs:24,sm:24,children:(0,n.jsx)("div",{children:(0,n.jsx)(f,{placeholder:"Select Gender",isOpen:b,data:S,label:"Gender",onChangeHandler:(e,a)=>{a.preventDefault(),e.length?(l(!0),(0,C.HZ)(e).then((e=>{e=(e=e.map((e=>e.pokemon_species_details)).flat()).map((e=>N.VY+"/pokemon"+e.pokemon_species.url.split("pokemon-species")[1])),(e=[...new Set(e)]).length>N.Sq&&(e=[...e.slice(0,N.Sq),...e.slice(-N.Sq)]),e=e.map((e=>({url:e}))),t(e).then((e=>{T(e)}))})).catch((e=>console.error(e)))):(T([]),r(!0),l(!1))},onOpenHandler:()=>{O(!0)},onCloseHandler:()=>{O(!1)}})})})]})})})})},_=()=>{const[e,l]=(0,s.useState)(!1),[a,o]=(0,s.useState)(),[m,j]=(0,s.useState)(!1),{state:u,getPokemonData:g}=(0,s.useContext)(c.A),{pokemonList:N,isLoading:v,isLoadMoreInprogress:C}=u,S=(0,s.useMemo)((()=>null===N||void 0===N?void 0:N.map(((e,l)=>(0,n.jsx)("div",{className:"responsive",children:(0,n.jsx)(d.A,{data:e,onClick:()=>{o(e.id),k()}},e.id)},"".concat(e.id,"-").concat(l))))),[N]),k=()=>{l((e=>!e))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"home-container",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(r,{className:"header-container",children:(0,n.jsxs)(h.A,{lg:24,xl:24,className:"app-header-wrap show-grid",children:[(0,n.jsx)(p.A,{xs:12,sm:12,lg:5,xl:5,children:(0,n.jsx)("div",{className:"header-title",children:(0,n.jsx)("h3",{children:"Pok\xe9dex"})})}),(0,n.jsx)(p.A,{xs:12,sm:12,lg:2,xl:2,className:"hide",children:(0,n.jsx)("div",{className:"header-horizontal-line"})}),(0,n.jsx)(p.A,{xs:24,sm:24,lg:20,xl:20,children:(0,n.jsx)("div",{className:"subheading",children:(0,n.jsx)("span",{children:"Search for any Pok\xe9mon that exist on the planet"})})})]})}),(0,n.jsx)("div",{children:(0,n.jsx)(H,{isFilterEnable:e=>{j(e)}})})]}),N.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"card-list",children:S}),(0,n.jsx)("div",{children:C&&(0,n.jsx)(t,{className:"loadmore-loader"})}),!m&&(0,n.jsx)("div",{className:"load-more-wrap",children:(0,n.jsx)(x.A,{appearance:"link",onClick:()=>{g()},children:"Load more "})})]}),!N.length&&(0,n.jsx)("div",{className:"no-data-found",children:(0,n.jsx)("span",{children:"No data found"})}),v&&(0,n.jsx)(t,{className:"app-loader-wrapper"}),(0,n.jsx)("div",{children:e&&(0,n.jsx)(i.default,{isCardSelected:e,toggleModal:k,pokemonId:a,offset:N.length})})]})})}}}]);
//# sourceMappingURL=784.bbe3b0bf.chunk.js.map