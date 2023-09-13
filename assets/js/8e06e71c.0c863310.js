"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[620],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),y=o,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},9654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i=void 0,s={unversionedId:"docs/relation/Relation/connected_nodes_by",id:"docs/relation/Relation/connected_nodes_by",title:"connected_nodes_by",description:"connectednodesby(clazz: Any) -> set",source:"@site/docs/docs/relation/Relation/connected_nodes_by.md",sourceDirName:"docs/relation/Relation",slug:"/docs/relation/Relation/connected_nodes_by",permalink:"/Graph/docs/relation/Relation/connected_nodes_by",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"connected_nodes",permalink:"/Graph/docs/relation/Relation/connected_nodes"},next:{title:"is_node_linked",permalink:"/Graph/docs/relation/Relation/is_node_linked"}},l={},c=[{value:"<code>connected_nodes_by(clazz: Any) -&gt; set</code>",id:"connected_nodes_byclazz-any---set",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"connected_nodes_byclazz-any---set"},(0,o.kt)("inlineCode",{parentName:"h2"},"connected_nodes_by(clazz: Any) -> set")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method returns the set of connected nodes by a given class. It belongs to the class ",(0,o.kt)("inlineCode",{parentName:"p"},"Relation"),"."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clazz")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Any"),"): The class by which the connected nodes are retrieved.")),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"set"),": A set of connected nodes by the given class.")),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"KeyError"),": If the given class is not found in the ",(0,o.kt)("inlineCode",{parentName:"li"},"_clazz_node_relation")," dictionary.")),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = connected_nodes_by(ClassA)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = connected_nodes_by(ClassB)\nprint(result_case2)\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The method attempts to retrieve the set of connected nodes by the given class from the ",(0,o.kt)("inlineCode",{parentName:"p"},"_clazz_node_relation")," dictionary. If the class is found, the set of connected nodes is returned. If the class is not found, an empty set is returned."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("p",null,"This method does not have any dependencies."))}u.isMDXComponent=!0}}]);