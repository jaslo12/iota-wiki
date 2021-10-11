"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61786],{76236:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c=n(31137),i=n(71871),u=["components"],s={keywords:["ISCP","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},l="How to Deposit to a Chain",p={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",isDocsHomePage:!1,title:"How to Deposit to a Chain",description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/wasp/guide/core_concepts/accounts/how-to-deposit-to-a-chain",tags:[],version:"current",frontMatter:{keywords:["ISCP","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/wasp/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/wasp/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},d=[],f={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," entrypoint credits the transferred IOTAS into your on-chain account."),(0,a.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from wallet into chain\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name)\n_, err := chain.PostRequestSync(req.WithIotas(N), wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(i.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from wallet into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx.Sign(wallet))\nd.Func.TransferIotas(N).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(i.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// deposits N iotas from current SC into chain *chainID*\nlet d = coreaccounts::ScFuncs::deposit(ctx);\nd.func.transfer_iotas(N).post_to_chain(chainID);\n"))),(0,a.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from current SC into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx)\nd.Func.TransferIotas(N).PostToChain(chainID)\n")))))}m.isMDXComponent=!0},71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(67294),o=n(54179);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(86010),i="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,l=e.values,p=e.groupId,d=e.className,f=r.Children.toArray(e.children),m=null!=l?l:f.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=a(),g=v.tabGroupChoices,y=v.setTabGroupChoices,b=(0,r.useState)(h),w=b[0],k=b[1],T=[];if(null!=p){var N=g[p];null!=N&&N!==w&&m.some((function(e){return e.value===N}))&&k(N)}var O=function(e){var t=e.currentTarget,n=T.indexOf(t),r=m[n].value;k(r),null!=p&&(y(p,r),setTimeout((function(){var e,n,r,o,a,c,i,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,c=window,i=c.innerHeight,s=c.innerWidth,n>=0&&a<=s&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.target)+1;n=T[r]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.target)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},d)},m.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":w===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},54179:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);