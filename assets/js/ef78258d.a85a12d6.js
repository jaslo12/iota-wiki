"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[55019],{99022:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return b},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=n(31137),u=n(71871),o=["components"],s={keywords:["containers","types","container types","single type","array","schema definition file"],description:"You can add a typedefs section to the schema definition file, where you can define a single type name for a container type. This way you can easily create containers that contain container types.",image:"/img/logo/WASP_logo_dark.png"},b="Type Definitions",c={unversionedId:"guide/schema/typedefs",id:"guide/schema/typedefs",isDocsHomePage:!1,title:"Type Definitions",description:"You can add a typedefs section to the schema definition file, where you can define a single type name for a container type. This way you can easily create containers that contain container types.",source:"@site/external/wasp/documentation/docs/guide/schema/typedefs.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/typedefs",permalink:"/wasp/guide/schema/typedefs",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/typedefs.mdx",tags:[],version:"current",frontMatter:{keywords:["containers","types","container types","single type","array","schema definition file"],description:"You can add a typedefs section to the schema definition file, where you can define a single type name for a container type. This way you can easily create containers that contain container types.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Structured Data Types",permalink:"/wasp/guide/schema/structs"},next:{title:"Smart Contract State",permalink:"/wasp/guide/schema/state"}},m=[],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"type-definitions"},"Type Definitions"),(0,i.kt)("p",null,"Since we allow nesting of ",(0,i.kt)("a",{parentName:"p",href:"/wasp/guide/wasm_vm/proxies#container-proxies"},"container types"),", it\nis a difficult to create proper declarations for such nested types. Especially because you\ncan only indicate either a single type, or an array of single type, or a map of single\ntype in a field definition."),(0,i.kt)("p",null,"There is a simple solution to this problem. You can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"typedefs")," section to the\nschema definition file, where you can define a single type name for a container type. That\nway you can easily create containers that contain such container types. The schema tool\nwill automatically generate the in-between proxy types necessary to make this work."),(0,i.kt)("p",null,"To keep it at the ",(0,i.kt)("inlineCode",{parentName:"p"},"betting")," smart contract from ",(0,i.kt)("a",{parentName:"p",href:"/wasp/guide/schema/structs"},"the previous section"),",\nimagine you want to keep track of all betting rounds. Since a betting round contains an\narray of all bets in a round, if it weren't for typedefs you could not define it easily."),(0,i.kt)("p",null,"Instead, now you add the following to your schema definition file:"),(0,i.kt)(l.Z,{defaultValue:"yaml",values:[{label:"schema.yaml",value:"yaml"},{label:"schema.json",value:"json"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "typedefs": {\n    "BettingRound": "Bet[] // one round of bets"\n  },\n  "state": {\n    "rounds": "BettingRound[] // keep track of all betting rounds"\n  }\n}\n'))),(0,i.kt)(u.Z,{value:"yaml",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"typedefs:\n  BettingRound: Bet[] // one round of bets\nstate:\n  rounds: BettingRound[] // keep track of all betting rounds\n")))),(0,i.kt)("p",null,"The schema tool will generate the following proxies in ",(0,i.kt)("inlineCode",{parentName:"p"},"typedefs.xx"),":"),(0,i.kt)(l.Z,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype ImmutableBettingRound = ArrayOfImmutableBet\n\ntype ArrayOfImmutableBet struct {\n    objID int32\n}\n\nfunc (a ArrayOfImmutableBet) Length() int32 {\n    return wasmlib.GetLength(a.objID)\n}\n\nfunc (a ArrayOfImmutableBet) GetBet(index int32) ImmutableBet {\n    return ImmutableBet{objID: a.objID, keyID: wasmlib.Key32(index)}\n}\n\ntype MutableBettingRound = ArrayOfMutableBet\n\ntype ArrayOfMutableBet struct {\n    objID int32\n}\n\nfunc (a ArrayOfMutableBet) Clear() {\n    wasmlib.Clear(a.objID)\n}\n\nfunc (a ArrayOfMutableBet) Length() int32 {\n    return wasmlib.GetLength(a.objID)\n}\n\nfunc (a ArrayOfMutableBet) GetBet(index int32) MutableBet {\n    return MutableBet{objID: a.objID, keyID: wasmlib.Key32(index)}\n}\n'))),(0,i.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\nuse wasmlib::host::*;\n\nuse crate::types::*;\n\npub type ImmutableBettingRound = ArrayOfImmutableBet;\n\npub struct ArrayOfImmutableBet {\n    pub(crate) obj_id: i32,\n}\n\nimpl ArrayOfImmutableBet {\n    pub fn length(&self) -> i32 {\n        get_length(self.obj_id)\n    }\n\n    pub fn get_bet(&self, index: i32) -> ImmutableBet {\n        ImmutableBet { obj_id: self.obj_id, key_id: Key32(index) }\n    }\n}\n\npub type MutableBettingRound = ArrayOfMutableBet;\n\npub struct ArrayOfMutableBet {\n    pub(crate) obj_id: i32,\n}\n\nimpl ArrayOfMutableBet {\n    pub fn clear(&self) {\n        clear(self.obj_id);\n    }\n\n    pub fn length(&self) -> i32 {\n        get_length(self.obj_id)\n    }\n\n    pub fn get_bet(&self, index: i32) -> MutableBet {\n        MutableBet { obj_id: self.obj_id, key_id: Key32(index) }\n    }\n}\n"))),(0,i.kt)(u.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "../wasmlib"\nimport * as sc from "./index";\n\nexport class ImmutableBettingRound extends ArrayOfImmutableBet {\n};\n\nexport class ArrayOfImmutableBet {\n    objID: i32;\n\n    constructor(objID: i32) {\n        this.objID = objID;\n    }\n\n    length(): i32 {\n        return wasmlib.getLength(this.objID);\n    }\n\n    getBet(index: i32): sc.ImmutableBet {\n        return new sc.ImmutableBet(this.objID, new wasmlib.Key32(index));\n    }\n}\n\nexport class MutableBettingRound extends ArrayOfMutableBet {\n};\n\nexport class ArrayOfMutableBet {\n    objID: i32;\n\n    constructor(objID: i32) {\n        this.objID = objID;\n    }\n\n    clear(): void {\n        wasmlib.clear(this.objID);\n    }\n\n    length(): i32 {\n        return wasmlib.getLength(this.objID);\n    }\n\n    getBet(index: i32): sc.MutableBet {\n        return new sc.MutableBet(this.objID, new wasmlib.Key32(index));\n    }\n}\n')))),(0,i.kt)("p",null,"Note how ImmutableBettingRound and MutableBettingRound type aliases are created for the\ntypes ArrayOfImmutableBet and ArrayOfMutableBet. These are subsequently used in the state\ndefinition in ",(0,i.kt)("inlineCode",{parentName:"p"},"state.xx"),":"),(0,i.kt)(l.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package betting\n\nimport "github.com/iotaledger/wasp/packages/vm/wasmlib"\n\ntype ArrayOfImmutableBettingRound struct {\n    objID int32\n}\n\nfunc (a ArrayOfImmutableBettingRound) Length() int32 {\n    return wasmlib.GetLength(a.objID)\n}\n\nfunc (a ArrayOfImmutableBettingRound) GetBettingRound(index int32) ImmutableBettingRound {\n    subID := wasmlib.GetObjectID(a.objID, wasmlib.Key32(index), wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ImmutableBettingRound{objID: subID}\n}\n\ntype ImmutableBettingState struct {\n    id int32\n}\n\nfunc (s ImmutableBettingState) Bets() ArrayOfImmutableBet {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ArrayOfImmutableBet{objID: arrID}\n}\n\nfunc (s ImmutableBettingState) Owner() wasmlib.ScImmutableAgentID {\n    return wasmlib.NewScImmutableAgentID(s.id, idxMap[IdxStateOwner])\n}\n\nfunc (s ImmutableBettingState) Rounds() ArrayOfImmutableBettingRound {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateRounds], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ArrayOfImmutableBettingRound{objID: arrID}\n}\n\ntype ArrayOfMutableBettingRound struct {\n    objID int32\n}\n\nfunc (a ArrayOfMutableBettingRound) Clear() {\n    wasmlib.Clear(a.objID)\n}\n\nfunc (a ArrayOfMutableBettingRound) Length() int32 {\n    return wasmlib.GetLength(a.objID)\n}\n\nfunc (a ArrayOfMutableBettingRound) GetBettingRound(index int32) MutableBettingRound {\n    subID := wasmlib.GetObjectID(a.objID, wasmlib.Key32(index), wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return MutableBettingRound{objID: subID}\n}\n\ntype MutableBettingState struct {\n    id int32\n}\n\nfunc (s MutableBettingState) Bets() ArrayOfMutableBet {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ArrayOfMutableBet{objID: arrID}\n}\n\nfunc (s MutableBettingState) Owner() wasmlib.ScMutableAgentID {\n    return wasmlib.NewScMutableAgentID(s.id, idxMap[IdxStateOwner])\n}\n\nfunc (s MutableBettingState) Rounds() ArrayOfMutableBettingRound {\n    arrID := wasmlib.GetObjectID(s.id, idxMap[IdxStateRounds], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES)\n    return ArrayOfMutableBettingRound{objID: arrID}\n}\n'))),(0,i.kt)(u.Z,{value:"rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"use wasmlib::*;\nuse wasmlib::host::*;\n\nuse crate::*;\nuse crate::keys::*;\nuse crate::typedefs::*;\nuse crate::types::*;\n\npub struct ArrayOfImmutableBettingRound {\n    pub(crate) obj_id: i32,\n}\n\nimpl ArrayOfImmutableBettingRound {\n    pub fn length(&self) -> i32 {\n        get_length(self.obj_id)\n    }\n\n    pub fn get_betting_round(&self, index: i32) -> ImmutableBettingRound {\n        let sub_id = get_object_id(self.obj_id, Key32(index), TYPE_ARRAY | TYPE_BYTES)\n        ImmutableBettingRound { obj_id: sub_id }\n    }\n}\n\n#[derive(Clone, Copy)]\npub struct ImmutableBettingState {\n    pub(crate) id: i32,\n}\n\nimpl ImmutableBettingState {\n    pub fn bets(&self) -> ArrayOfImmutableBet {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_BETS), TYPE_ARRAY | TYPE_BYTES);\n        ArrayOfImmutableBet { obj_id: arr_id }\n    }\n\n    pub fn owner(&self) -> ScImmutableAgentID {\n        ScImmutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n\n    pub fn rounds(&self) -> ArrayOfImmutableBettingRound {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_ROUNDS), TYPE_ARRAY | TYPE_BYTES);\n        ArrayOfImmutableBettingRound { obj_id: arr_id }\n    }\n}\n\npub struct ArrayOfMutableBettingRound {\n    pub(crate) obj_id: i32,\n}\n\nimpl ArrayOfMutableBettingRound {\n    pub fn clear(&self) {\n        clear(self.obj_id);\n    }\n\n    pub fn length(&self) -> i32 {\n        get_length(self.obj_id)\n    }\n\n    pub fn get_betting_round(&self, index: i32) -> MutableBettingRound {\n        let sub_id = get_object_id(self.obj_id, Key32(index), TYPE_ARRAY | TYPE_BYTES)\n        MutableBettingRound { obj_id: sub_id }\n    }\n}\n\n#[derive(Clone, Copy)]\npub struct MutableBettingState {\n    pub(crate) id: i32,\n}\n\nimpl MutableBettingState {\n    pub fn bets(&self) -> ArrayOfMutableBet {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_BETS), TYPE_ARRAY | TYPE_BYTES);\n        ArrayOfMutableBet { obj_id: arr_id }\n    }\n\n    pub fn owner(&self) -> ScMutableAgentID {\n        ScMutableAgentID::new(self.id, idx_map(IDX_STATE_OWNER))\n    }\n\n    pub fn rounds(&self) -> ArrayOfMutableBettingRound {\n        let arr_id = get_object_id(self.id, idx_map(IDX_STATE_ROUNDS), TYPE_ARRAY | TYPE_BYTES);\n        ArrayOfMutableBettingRound { obj_id: arr_id }\n    }\n}\n"))),(0,i.kt)(u.Z,{value:"ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import * as wasmlib from "../wasmlib"\nimport * as sc from "./index";\n\nexport class ArrayOfImmutableBettingRound {\n    objID: i32;\n\n    constructor(objID: i32) {\n        this.objID = objID;\n    }\n\n    length(): i32 {\n        return wasmlib.getLength(this.objID);\n    }\n\n    getBettingRound(index: i32): sc.ImmutableBettingRound {\n        let subID = wasmlib.getObjectID(this.objID, new wasmlib.Key32(index), wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ImmutableBettingRound(subID);\n    }\n}\n\nexport class ImmutableBettingState extends wasmlib.ScMapID {\n    bets(): sc.ArrayOfImmutableBet {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ArrayOfImmutableBet(arrID)\n    }\n\n    owner(): wasmlib.ScImmutableAgentID {\n        return new wasmlib.ScImmutableAgentID(this.mapID, sc.idxMap[sc.IdxStateOwner]);\n    }\n\n    rounds(): sc.ArrayOfImmutableBettingRound {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateRounds], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ArrayOfImmutableBettingRound(arrID)\n    }\n}\n\nexport class ArrayOfMutableBettingRound {\n    objID: i32;\n\n    constructor(objID: i32) {\n        this.objID = objID;\n    }\n\n    clear(): void {\n        wasmlib.clear(this.objID);\n    }\n\n    length(): i32 {\n        return wasmlib.getLength(this.objID);\n    }\n\n    getBettingRound(index: i32): sc.MutableBettingRound {\n        let subID = wasmlib.getObjectID(this.objID, new wasmlib.Key32(index), wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.MutableBettingRound(subID);\n    }\n}\n\nexport class MutableBettingState extends wasmlib.ScMapID {\n    bets(): sc.ArrayOfMutableBet {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateBets], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ArrayOfMutableBet(arrID)\n    }\n\n    owner(): wasmlib.ScMutableAgentID {\n        return new wasmlib.ScMutableAgentID(this.mapID, sc.idxMap[sc.IdxStateOwner]);\n    }\n\n    rounds(): sc.ArrayOfMutableBettingRound {\n        let arrID = wasmlib.getObjectID(this.mapID, sc.idxMap[sc.IdxStateRounds], wasmlib.TYPE_ARRAY|wasmlib.TYPE_BYTES);\n        return new sc.ArrayOfMutableBettingRound(arrID)\n    }\n}\n')))),(0,i.kt)("p",null,"Notice how the rounds() member function returns a proxy to an array of BettingRound.\nWhich in turn is an array of Bet. So, the desired result has been achieved. And every\naccess step along the way only allows you to take the path laid out which is checked at\ncompile-time."),(0,i.kt)("p",null,"In the next section we will explore how the schema tool generates a proxy interface for\nmutable ",(0,i.kt)("a",{parentName:"p",href:"/wasp/guide/schema/state"},"states"),"."))}p.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(87462),r=n(67294),i=n(5730),l=n(54179);var u=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(3978),s=n(86010),b="tabItem_1uMI";function c(e){var t,n,a,i=e.lazy,l=e.block,c=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),y=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var I=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=f[0])?void 0:a.props.value;if(null!==I&&!g.some((function(e){return e.value===I})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+I+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=u(),h=w.tabGroupChoices,B=w.setTabGroupChoices,D=(0,r.useState)(I),T=D[0],_=D[1],A=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=h[d];null!=j&&j!==T&&g.some((function(e){return e.value===j}))&&_(j)}var O=function(e){var t=e.currentTarget,n=A.indexOf(t),a=g[n].value;a!==T&&(x(t),_(a),null!=d&&B(d,a))},v=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},p)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",b,{"tabs__item--active":T===t}),key:t,ref:function(e){return A.push(e)},onKeyDown:v,onFocus:O,onClick:O},null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function m(e){var t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return b},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,p=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(p,l(l({ref:t},b),{},{components:n})):a.createElement(p,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);