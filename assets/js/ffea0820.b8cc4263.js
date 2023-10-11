"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1501],{35318:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return t?r.createElement(k,l(l({ref:n},m),{},{components:t})):r.createElement(k,l({ref:n},m))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},15304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(25773),a=(t(27378),t(35318));const i={pagination_prev:null,pagination_next:null,description:"DeviceScript client for Model Runner service"},l="ModelRunner",o={unversionedId:"api/clients/modelrunner",id:"api/clients/modelrunner",title:"ModelRunner",description:"DeviceScript client for Model Runner service",source:"@site/docs/api/clients/modelrunner.md",sourceDirName:"api/clients",slug:"/api/clients/modelrunner",permalink:"/devicescript/api/clients/modelrunner",draft:!1,tags:[],version:"current",frontMatter:{pagination_prev:null,pagination_next:null,description:"DeviceScript client for Model Runner service"},sidebar:"tutorialSidebar"},p={},s=[{value:"Commands",id:"commands",level:2},{value:"setModel",id:"setmodel",level:3},{value:"Registers",id:"registers",level:2},{value:"autoInvokeEvery",id:"rw:autoInvokeEvery",level:3},{value:"reading",id:"ro:reading",level:3},{value:"inputShape",id:"ro:inputShape",level:3},{value:"outputShape",id:"ro:outputShape",level:3},{value:"lastRunTime",id:"ro:lastRunTime",level:3},{value:"allocatedArenaSize",id:"ro:allocatedArenaSize",level:3},{value:"modelSize",id:"ro:modelSize",level:3},{value:"lastError",id:"ro:lastError",level:3},{value:"format",id:"const:format",level:3},{value:"formatVersion",id:"const:formatVersion",level:3},{value:"parallel",id:"const:parallel",level:3}],m={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modelrunner"},"ModelRunner"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This service is experimental and may change in the future.")),(0,a.kt)("p",null,"Runs machine learning models."),(0,a.kt)("p",null,"Only models with a single input tensor and a single output tensor are supported at the moment.\nInput is provided by Sensor Aggregator service on the same device.\nMultiple instances of this service may be present, if more than one model format is supported by a device."),(0,a.kt)("p",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n')),(0,a.kt)("p",null),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"setmodel"},"setModel"),(0,a.kt)("p",null,"Open pipe for streaming in the model. The size of the model has to be declared upfront.\nThe model is streamed over regular pipe data packets.\nThe format supported by this instance of the service is specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," register.\nWhen the pipe is closed, the model is written all into flash, and the device running the service may reset."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip no-run",skip:!0,"no-run":!0},"modelRunner.setModel(model_size: number): Promise<void>\n")),(0,a.kt)("h2",{id:"registers"},"Registers"),(0,a.kt)("p",null),(0,a.kt)("h3",{id:"rw:autoInvokeEvery"},"autoInvokeEvery"),(0,a.kt)("p",null,"When register contains ",(0,a.kt)("inlineCode",{parentName:"p"},"N > 0"),", run the model automatically every time new ",(0,a.kt)("inlineCode",{parentName:"p"},"N")," samples are collected.\nModel may be run less often if it takes longer to run than ",(0,a.kt)("inlineCode",{parentName:"p"},"N * sampling_interval"),".\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs")," register will stream its value after each run.\nThis register is not stored in flash."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read and write"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.autoInvokeEvery.read()\nawait modelRunner.autoInvokeEvery.write(value)\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.autoInvokeEvery.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:reading"},"reading"),(0,a.kt)("p",null,"Results of last model invocation as ",(0,a.kt)("inlineCode",{parentName:"p"},"float32")," array."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"r: f32"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"track incoming values"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.reading.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:inputShape"},"inputShape"),(0,a.kt)("p",null,"The shape of the input tensor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"r: u16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"track incoming values"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.inputShape.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:outputShape"},"outputShape"),(0,a.kt)("p",null,"The shape of the output tensor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<any[]>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"r: u16"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"track incoming values"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.outputShape.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:lastRunTime"},"lastRunTime"),(0,a.kt)("p",null,"The time consumed in last model execution."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.lastRunTime.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.lastRunTime.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:allocatedArenaSize"},"allocatedArenaSize"),(0,a.kt)("p",null,"Number of RAM bytes allocated for model execution."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.allocatedArenaSize.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.allocatedArenaSize.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:modelSize"},"modelSize"),(0,a.kt)("p",null,"The size of the model in bytes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.modelSize.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.modelSize.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"ro:lastError"},"lastError"),(0,a.kt)("p",null,"Textual description of last error when running or loading model (if any)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<string>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"s"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.lastError.read()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"track incoming values")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nmodelRunner.lastError.subscribe(async (value) => {\n    ...\n})\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:format"},"format"),(0,a.kt)("p",null,"The type of ML models supported by this service.\n",(0,a.kt)("inlineCode",{parentName:"p"},"TFLite")," is flatbuffer ",(0,a.kt)("inlineCode",{parentName:"p"},".tflite")," file.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ML4F")," is compiled machine code model for Cortex-M4F.\nThe format is typically present as first or second little endian word of model file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.format.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:formatVersion"},"formatVersion"),(0,a.kt)("p",null,"A version number for the format."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<number>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u32"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.formatVersion.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("h3",{id:"const:parallel"},"parallel"),(0,a.kt)("p",null,"If present and true this service can run models independently of other\ninstances of this service on the device."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"type: ",(0,a.kt)("inlineCode",{parentName:"p"},"Register<boolean>")," (packing format ",(0,a.kt)("inlineCode",{parentName:"p"},"u8"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"optional: this register may not be implemented")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"constant: the register value will not change (until the next reset)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"read only"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"skip",skip:!0},'import { ModelRunner } from "@devicescript/core"\n\nconst modelRunner = new ModelRunner()\n// ...\nconst value = await modelRunner.parallel.read()\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"write")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"read")," will block until a server is bound to the client.")),(0,a.kt)("p",null))}d.isMDXComponent=!0}}]);