"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8434],{60362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],c={description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain, and manages chain ownership and fees.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","core","root","initialization","entry points","fees","ownership","Views"]},s="The `root` Contract",l={unversionedId:"guide/core_concepts/core_contracts/root",id:"guide/core_concepts/core_contracts/root",isDocsHomePage:!1,title:"The `root` Contract",description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain, and manages chain ownership and fees.",source:"@site/external/wasp/documentation/docs/guide/core_concepts/core_contracts/root.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/root",permalink:"/wasp/guide/core_concepts/core_contracts/root",tags:[],version:"current",frontMatter:{description:"The root contract is the first smart contract deployed on the chain. It functions as a smart contract factory for the chain, and manages chain ownership and fees.",image:"/img/logo/WASP_logo_dark.png",keywords:["ISCP","core","root","initialization","entry points","fees","ownership","Views"]},sidebar:"tutorialSidebar",previous:{title:"Core Contracts",permalink:"/wasp/guide/core_concepts/core_contracts/overview"},next:{title:"The `_default` Contract",permalink:"/wasp/guide/core_concepts/core_contracts/default"}},p=[{value:"Entry Points",id:"entry-points",children:[{value:"init",id:"init",children:[]},{value:"deployContract",id:"deploycontract",children:[]},{value:"grantDeployPermission",id:"grantdeploypermission",children:[]},{value:"revokeDeployPermission",id:"revokedeploypermission",children:[]}]},{value:"Views",id:"views",children:[{value:"findContract",id:"findcontract",children:[]},{value:"getContractRecords",id:"getcontractrecords",children:[]}]}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-root-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"root")," Contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/wasp/guide/core_concepts/core_contracts/overview"},"core contracts")," on each ISCP\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract provides the following functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It is the first smart contract deployed on the chain. Upon receiving the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," request, bootstraps the state of the chain. Part of the state initialization is the deployment of all other core contracts.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It functions as a smart contract factory for the chain: upon request, it deploys other smart contracts and maintains an on-chain registry of smart contracts in its state.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The contract registry keeps a list of contract records, which contain their respective name, hname, description and creator."))),(0,a.kt)("h2",{id:"entry-points"},"Entry Points"),(0,a.kt)("p",null,"The following are the functions/entry points of the ",(0,a.kt)("inlineCode",{parentName:"p"},"root")," contract. Some of\nthem may require authorisation, i.e. can only be invoked by a specific caller,\nfor example the ",(0,a.kt)("em",{parentName:"p"},"chain owner"),"."),(0,a.kt)("h3",{id:"init"},"init"),(0,a.kt)("p",null,"The constructor. Automatically posted to the chain immediately after confirmation of the origin transaction, as the first call."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initializes base values of the chain according to parameters"),(0,a.kt)("li",{parentName:"ul"},"Sets the caller as the ",(0,a.kt)("em",{parentName:"li"},"chain owner")),(0,a.kt)("li",{parentName:"ul"},"Sets chain fee color (default is ",(0,a.kt)("em",{parentName:"li"},"IOTA color"),")"),(0,a.kt)("li",{parentName:"ul"},"Deploys all core contracts. The core contracts become part of the immutable state.\nIt makes them callable just like any other smart contract deployed on the chain.")),(0,a.kt)("h3",{id:"deploycontract"},"deployContract"),(0,a.kt)("p",null,"Deploys a smart contract on the chain, if the caller has deploy permission. "),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hash of the ",(0,a.kt)("em",{parentName:"li"},"blob")," with the binary of the program and VM type"),(0,a.kt)("li",{parentName:"ul"},"Name of the instance. This is later used in the hashed form of ",(0,a.kt)("em",{parentName:"li"},"hname")),(0,a.kt)("li",{parentName:"ul"},"Description of the instance")),(0,a.kt)("h3",{id:"grantdeploypermission"},"grantDeployPermission"),(0,a.kt)("p",null,"The chain owner grants deploy permission to an agent ID."),(0,a.kt)("h3",{id:"revokedeploypermission"},"revokeDeployPermission"),(0,a.kt)("p",null,"The chain owner revokes deploy permission from an agent ID."),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("p",null,"Can be called directly. Calling a view does not modify the state of the smart\ncontract."),(0,a.kt)("h3",{id:"findcontract"},"findContract"),(0,a.kt)("p",null,"Returns the record for a given smart contract (if it exists)."),(0,a.kt)("h3",{id:"getcontractrecords"},"getContractRecords"),(0,a.kt)("p",null,"Returns the list of all smart contracts deployed on the chain and related records."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);