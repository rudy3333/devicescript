"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3442],{35318:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,k=d["".concat(p,".").concat(s)]||d[s]||c[s]||a;return n?i.createElement(k,l(l({ref:t},m),{},{components:n})):i.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},24758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(25773),r=(n(27378),n(35318));const a={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Humidity service"},l="Humidity",o={unversionedId:"api/clients/humidity",id:"api/clients/humidity",title:"Humidity",description:"DeviceScript client for Humidity service",source:"@site/docs/api/clients/humidity.md",sourceDirName:"api/clients",slug:"/api/clients/humidity",permalink:"/devicescript/api/clients/humidity",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Humidity service"},sidebar:"tutorialSidebar"},p={},u=[{value:"Registers",id:"registers",level:2},{value:"reading",id:"ro:reading",level:3},{value:"readingError",id:"ro:readingError",level:3},{value:"minReading",id:"const:minReading",level:3},{value:"maxReading",id:"const:maxReading",level:3}],m={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"humidity"},"Humidity"),(0,r.kt)("p",null,"A sensor measuring humidity of outside environment."),(0,r.kt)("p",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n')),(0,r.kt)("p",null),(0,r.kt)("h2",{id:"registers"},"Registers"),(0,r.kt)("p",null),(0,r.kt)("h3",{id:"ro:reading"},"reading"),(0,r.kt)("p",null,"The relative humidity in percentage of full water saturation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u22.10"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n// ...\nconst value = await humidity.reading.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n// ...\nhumidity.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"ro:readingError"},"readingError"),(0,r.kt)("p",null,"The real humidity is between ",(0,r.kt)("inlineCode",{parentName:"p"},"humidity - humidity_error")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"humidity + humidity_error"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u22.10"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n// ...\nconst value = await humidity.readingError.read()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"track incoming values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n// ...\nhumidity.readingError.subscribe(async (value) => {\n    ...\n})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:minReading"},"minReading"),(0,r.kt)("p",null,"Lowest humidity that can be reported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u22.10"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n// ...\nconst value = await humidity.minReading.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("h3",{id:"const:maxReading"},"maxReading"),(0,r.kt)("p",null,"Highest humidity that can be reported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,r.kt)("inlineCode",{parentName:"p"},"u22.10"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"read only"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { Humidity } from "@devicescript/core"\n\nconst humidity = new Humidity()\n// ...\nconst value = await humidity.maxReading.read()\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,r.kt)("p",null))}c.isMDXComponent=!0}}]);