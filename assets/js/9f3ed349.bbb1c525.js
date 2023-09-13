"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[395],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>y});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(t),h=r,y=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return t?o.createElement(y,c(c({ref:n},d),{},{components:t})):o.createElement(y,c({ref:n},d))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=h;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={},c=void 0,a={unversionedId:"docs/node/Node/connections_by",id:"docs/node/Node/connections_by",title:"connections_by",description:"connections_by(clazz: Type) -> List[Node]",source:"@site/docs/docs/node/Node/connections_by.md",sourceDirName:"docs/node/Node",slug:"/docs/node/Node/connections_by",permalink:"/Graph/docs/node/Node/connections_by",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"connections",permalink:"/Graph/docs/node/Node/connections"},next:{title:"is_connected",permalink:"/Graph/docs/node/Node/is_connected"}},l={},s=[{value:"<code>connections_by(clazz: Type) -&gt; List[Node]</code>",id:"connections_byclazz-type---listnode",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"connections_byclazz-type---listnode"},(0,r.kt)("inlineCode",{parentName:"h2"},"connections_by(clazz: Type) -> List[Node]")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method returns a list of nodes that are connected to the current node through a specific type of relation. This method belongs to the class 'Node'."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clazz")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Type"),"): The type of relation that the connected nodes should have.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"List[Node]"),": A list of nodes that are connected to the current node through the specified relation type.")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("p",null,"This method does not throw any exceptions."),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Example 1: Get all nodes connected through a "Friend" relation\nfriend_nodes = node.connections_by(Friend)\nprint(friend_nodes)\n\n# Example 2: Get all nodes connected through a "Colleague" relation\ncolleague_nodes = node.connections_by(Colleague)\nprint(colleague_nodes)\n')),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"This method calls the '_relation.connected_nodes_by(clazz)' method to retrieve the connected nodes of the specified relation type. The returned nodes are then returned as a list."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Relation"),": A dependency that provides the 'connected_nodes_by' method used to retrieve the connected nodes.")))}u.isMDXComponent=!0}}]);