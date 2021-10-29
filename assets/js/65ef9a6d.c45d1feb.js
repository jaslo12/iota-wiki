"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47826],{69441:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=n(31137),s=n(71871),u=["components"],l={keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},c="Posting Asynchronous Requests",p={unversionedId:"guide/schema/post",id:"guide/schema/post",isDocsHomePage:!1,title:"Posting Asynchronous Requests",description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",source:"@site/external/wasp/documentation/docs/guide/schema/post.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/post",permalink:"/wasp/guide/schema/post",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/post.mdx",tags:[],version:"current",frontMatter:{keywords:["function descriptor","return values","request","post","smart contract chain","Asynchronous function"],description:"Asynchronous function calls between smart contracts are posted as requests on the Tangle. They allow you to invoke any smart contract function that is not a View on any smart contract chain.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Calling Functions",permalink:"/wasp/guide/schema/call"},next:{title:"Testing Smart Contracts",permalink:"/wasp/guide/schema/test"}},d=[],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"posting-asynchronous-requests"},"Posting Asynchronous Requests"),(0,r.kt)("p",null,"Asynchronous function calls between smart contracts are posted as requests on the Tangle.\nThey allow you to invoke any smart contract function that is not a View on any smart\ncontract chain. You will notice that the behavior is very similar to a normal function\ncall, but instead of using the ",(0,r.kt)("inlineCode",{parentName:"p"},"call()")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"func")," member in the function\ndescriptor, you will now use the ",(0,r.kt)("inlineCode",{parentName:"p"},"post()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"postToChain()")," methods. ",(0,r.kt)("inlineCode",{parentName:"p"},"post()")," posts the\nrequest within the current chain, while ",(0,r.kt)("inlineCode",{parentName:"p"},"postToChain()")," takes the chain ID of the\ndesired chain as parameter."),(0,r.kt)("p",null,"In addition to the previously discussed ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/call"},"transferIotas()")," and\n",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/call"},"ofContract()")," methods, you can modify the behavior further by providing a\ndelay() in seconds, which enables delayed execution of the request. This is of particular\ninterest to smart contracts that need a delayed action like betting contracts with a timed\nbetting round, or to create time-lock functionality in a smart contract.\nHere's how that works:"),(0,r.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"eor := ScFuncs.EndOfRound(ctx)\neor.Func.Delay(3600).TransferIotas(1).Post()\n"))),(0,r.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let eor = ScFuncs::end_of_round(ctx);\neor.func.delay(3600).transfer_iotas(1).post();\n"))),(0,r.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let eor = sc.ScFuncs.endOfRound(ctx);\neor.func.delay(3600).transferIotas(1).post();\n")))),(0,r.kt)("p",null,"Because it is posted as a request on the Tangle, and it is not possible to have a request\nwithout a transfer, ",(0,r.kt)("em",{parentName:"p"},"an asynchronous request always needs to send at least 1 token"),". So,\nif you post to a function that expects tokens you just specify the amount of tokens\nrequired, but if you post to a function that does not expect any tokens then you still\nhave to provide 1 iota."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Providing a delay() before a call() will result in a run-time error"),". We do not know\nthe intention of the user until the actual call() or post() is encountered, so we cannot\ncheck for this at compile-time unless we are willing to accept a lot of extra overhead.\nIt should not really be a problem because using delay() is rare and using it with call()\ncannot have been the intention."),(0,r.kt)("p",null,"The function that posts the request through the function descriptor will immediately\ncontinue execution and does not wait for its completion. Therefore, it is not possible to\ndirectly retrieve the return values from such a call."),(0,r.kt)("p",null,"If you need some return values, you will have to create a mechanism that can do so, for\nexample by providing a callback chain/contract/function combination as part of the input\nparameters of the requested function, so that upon completion that function can\nasynchronously post the results to the indicated function. It will require a certain\ndegree of cooperation between both smart contracts. In the future we will probably be\nlooking at providing a generic mechanism for this."),(0,r.kt)("p",null,"In the next section we will look at how we can use the function descriptors when\n",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/test"},"testing smart contracts with Solo"),"."))}m.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),o=n(67294),r=n(5730),i=n(54179);var s=function(){var e=(0,o.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3978),l=n(86010),c="tabItem_1uMI";function p(e){var t,n,a,r=e.lazy,i=e.block,p=e.defaultValue,d=e.values,h=e.groupId,m=e.className,f=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,u.lx)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),w=b.tabGroupChoices,k=b.setTabGroupChoices,T=(0,o.useState)(g),x=T[0],O=T[1],N=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=w[h];null!=C&&C!==x&&y.some((function(e){return e.value===C}))&&O(C)}var I=function(e){var t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==x&&(E(t),O(a),null!=h&&k(h,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.currentTarget)+1;n=N[a]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.currentTarget)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},m)},y.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,className:(0,l.Z)("tabs__item",c,{"tabs__item--active":x===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:P,onFocus:I,onClick:I},null!=n?n:t)}))),r?(0,o.cloneElement)(f.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);