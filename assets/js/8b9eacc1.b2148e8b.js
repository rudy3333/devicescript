"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3850],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58100:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27378);const i={borderRadius:"0.5rem",marginTop:"1rem",marginBottom:"1rem",maxHeight:"40rem",maxWidth:"40rem"};function a(e){const{name:t,style:r=i,webm:a}=e,o=(0,n.useRef)(null);return n.createElement("video",{ref:o,style:r,poster:`/devicescript/videos/${t}.jpg`,playsInline:!0,controls:!0,preload:"metadata"},n.createElement("source",{src:`/devicescript/videos/${t}.mp4`,type:"video/mp4"}),n.createElement("p",null,"Your browser doesn't support HTML video. Here is a",n.createElement("a",{href:`/devicescript/videos/${t}.mp4`},"link to the video")," ","instead."))}},28990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(25773),i=(r(27378),r(35318)),a=r(58100);const o={sidebar_position:19},s="Visual Studio Code Extension",l={unversionedId:"getting-started/vscode/index",id:"getting-started/vscode/index",title:"Visual Studio Code Extension",description:"The Visual Studio Code extension provides the best developer experience for DeviceScript.",source:"@site/docs/getting-started/vscode/index.mdx",sourceDirName:"getting-started/vscode",slug:"/getting-started/vscode/",permalink:"/devicescript/getting-started/vscode/",draft:!1,tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/devicescript/getting-started/"},next:{title:"Simulation",permalink:"/devicescript/getting-started/vscode/simulation"}},p={},c=[{value:"Features",id:"features",level:2},{value:"(Optional) Manual installation from the GitHub releases",id:"optional-manual-installation-from-the-github-releases",level:3},{value:"Creating a new project",id:"creating-a-new-project",level:2},{value:"DeviceScript basics",id:"devicescript-basics",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"visual-studio-code-extension"},"Visual Studio Code Extension"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," extension provides the best developer experience for DeviceScript."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"install the ",(0,i.kt)("a",{parentName:"strong",href:"https://marketplace.visualstudio.com/items?itemName=devicescript.devicescript-vscode"},"DeviceScript extension")))),(0,i.kt)("p",null,"You will also need"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://nodejs.org/en/download/"},"Node.JS 16+"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://code.visualstudio.com/"},"Visual Studio Code")))),(0,i.kt)(a.Z,{name:"blinky",mdxType:"StaticVideo"}),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Build and watch using DeviceScript compiler, deploy to simulator or hardware"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/developer/board-configuration"},"Board configuration")," for hardware pins, I2S, SPI configurations"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./vscode/debugging"},"Debugger")," with breakpoints, stack traces, exceptions, stepping"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./vscode/simulation"},"Simulator")," for DeviceScript and sensors/actuators"),(0,i.kt)("li",{parentName:"ul"},"Connection to native DeviceScript device"),(0,i.kt)("li",{parentName:"ul"},"Device, services, register ",(0,i.kt)("a",{parentName:"li",href:"./vscode/user-interface"},"Explorer view")),(0,i.kt)("li",{parentName:"ul"},"Register and Event watch")),(0,i.kt)("h3",{id:"optional-manual-installation-from-the-github-releases"},"(Optional) Manual installation from the GitHub releases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"find the latest release at ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/microsoft/devicescript/releases?expanded=true"},"https://github.com/microsoft/devicescript/releases"))),(0,i.kt)("li",{parentName:"ul"},"download ",(0,i.kt)("inlineCode",{parentName:"li"},"devicescript.vsix")," from ",(0,i.kt)("strong",{parentName:"li"},"Assets")),(0,i.kt)("li",{parentName:"ul"},"install the .vsix file in code")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("strong",{parentName:"p"},"Install from VSIX")," command in the Extensions view command dropdown,\nor the ",(0,i.kt)("strong",{parentName:"p"},"Extensions: Install from VSIX")," command in the Command Palette, point to the .vsix file\n(see ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix"},"full instructions"),")."),(0,i.kt)("h2",{id:"creating-a-new-project"},"Creating a new project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"install ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.JS 16+")),(0,i.kt)("li",{parentName:"ul"},"From the Command palette, type ",(0,i.kt)("strong",{parentName:"li"},"DeviceScript: Create New Project...")," and follow the prompts.")),(0,i.kt)("p",null,"The new project should be ready to go."),(0,i.kt)("h2",{id:"devicescript-basics"},"DeviceScript basics"),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"/developer"},"Developer section")," to learn the basics of the language."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To report an issue, open the command palette and run ",(0,i.kt)("strong",{parentName:"p"},"DeviceScript: Report Issue...","*"),".")))}m.isMDXComponent=!0}}]);