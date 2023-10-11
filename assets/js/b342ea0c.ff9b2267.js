"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8601],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(27378);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),f=i,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return t?r.createElement(m,l(l({ref:n},s),{},{components:t})):r.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=t(25773),i=(t(27378),t(35318));const a={title:"Bytecode",sidebar_position:100},l=void 0,o={unversionedId:"language/bytecode",id:"language/bytecode",title:"Bytecode",description:"{@import ../../../bytecode/bytecode.md}",source:"@site/docs/language/bytecode.mdx",sourceDirName:"language",slug:"/language/bytecode",permalink:"/devicescript/language/bytecode",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Bytecode",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Runtime implementation",permalink:"/devicescript/language/runtime"},next:{title:"Other differences with JavaScript",permalink:"/devicescript/language/devicescript-vs-javascript"}},p={},u=[{value:"Format Constants",id:"format-constants",level:2},{value:"Ops",id:"ops",level:2},{value:"Control flow",id:"control-flow",level:3},{value:"Variables",id:"variables",level:3},{value:"Field access",id:"field-access",level:3},{value:"Objects",id:"objects",level:3},{value:"Statics",id:"statics",level:3},{value:"Misc",id:"misc",level:3},{value:"Booleans",id:"booleans",level:3},{value:"Math operations",id:"math-operations",level:3},{value:"To be removed (soon)",id:"to-be-removed-soon",level:3},{value:"Enum: StrIdx",id:"enum-stridx",level:2},{value:"Enum: OpCall",id:"enum-opcall",level:2},{value:"Enum: BytecodeFlag",id:"enum-bytecodeflag",level:2},{value:"Enum: FunctionFlag",id:"enum-functionflag",level:2},{value:"Enum: NumFmt",id:"enum-numfmt",level:2},{value:"Enum: NumFmt_Special",id:"enum-numfmt_special",level:2},{value:"Enum: PacketSpec_Code",id:"enum-packetspec_code",level:2},{value:"Enum: ServiceSpec_Flag",id:"enum-servicespec_flag",level:2},{value:"Enum: PacketSpec_Flag",id:"enum-packetspec_flag",level:2},{value:"Enum: FieldSpec_Flag",id:"enum-fieldspec_flag",level:2},{value:"Enum: Object_Type",id:"enum-object_type",level:2},{value:"Object_Types only used in static type info",id:"object_types-only-used-in-static-type-info",level:3},{value:"Enum: BuiltIn_Object",id:"enum-builtin_object",level:2},{value:"Enum: BuiltIn_String",id:"enum-builtin_string",level:2}],s={toc:u},c="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"devicescript-bytecode-spec"},"DeviceScript bytecode spec"),(0,i.kt)("p",null,"This file documents bytecode format for DeviceScript.\nA ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/blob/main/runtime/devicescript/devs_bytecode.h"},"C header file"),"\nand a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/blob/main/compiler/src/bytecode.ts"},"TypeScript file")," are generated from it.\nAdditional structures are defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/devicescript/blob/main/runtime/devicescript/devs_format.h"},"devs_format.h"),"."),(0,i.kt)("p",null,"A DeviceScript bytecode file contains magic and version numbers followed by a number of binary sections\ndefining functions, various literals (floats, ASCII strings, Unicode strings, buffers),\nJacdac service specifications, and runtime configuration (",(0,i.kt)("inlineCode",{parentName:"p"},"configureHardware()")," and built-in servers)."),(0,i.kt)("p",null,"Functions are sequences of opcodes defined below.\nOpcodes are divided into expressions (with return type) which do not modify state,\nand statements (no return type; ",(0,i.kt)("inlineCode",{parentName:"p"},"ret_val()")," expression is used to retrive the logical\nresult of a last statement).\nMany opcodes (both expressions and statements) can also throw an exception."),(0,i.kt)("p",null,"For a more highlevel description of runtime and bytecode, see ",(0,i.kt)("a",{parentName:"p",href:"/language/runtime"},"Runtime implementation page"),"."),(0,i.kt)("h2",{id:"format-constants"},"Format Constants"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'img_version_major = 2\nimg_version_minor = 15\nimg_version_patch = 15\nimg_version = $version\nmagic0 = 0x53766544 // "DevS"\nmagic1 = 0xf1296e0a\nnum_img_sections = 10\nfix_header_size = 32\nsection_header_size = 8\nfunction_header_size = 16\nascii_header_size = 2\nutf8_header_size = 4\nutf8_table_shift = 4\nbinary_size_align = 32\nmax_stack_depth = 16\nmax_call_depth = 100\ndirect_const_op = 0x80\ndirect_const_offset = 16\nfirst_multibyte_int = 0xf8\nfirst_non_opcode = 0x10000\nfirst_builtin_function = 50000\nmax_args_short_call = 8\nservice_spec_header_size = 16\nservice_spec_packet_size = 8\nservice_spec_field_size = 4\nrole_bits = 15\n')),(0,i.kt)("h2",{id:"ops"},"Ops"),(0,i.kt)("h3",{id:"control-flow"},"Control flow"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"call0(func) = 2                                   // CALL func()\ncall1(func, v0) = 3                               // CALL func(v0)\ncall2(func, v0, v1) = 4                           // CALL func(v0, v1)\ncall3(func, v0, v1, v2) = 5                       // CALL func(v0, v1, v2)\ncall4(func, v0, v1, v2, v3) = 6                   // CALL func(v0, v1, v2, v3)\ncall5(func, v0, v1, v2, v3, v4) = 7               // CALL func(v0, v1, v2, v3, v4)\ncall6(func, v0, v1, v2, v3, v4, v5) = 8           // CALL func(v0, v1, v2, v3, v4, v5)\ncall7(func, v0, v1, v2, v3, v4, v5, v6) = 9       // CALL func(v0, v1, v2, v3, v4, v5, v6)\ncall8(func, v0, v1, v2, v3, v4, v5, v6, v7) = 10  // CALL func(v0, v1, v2, v3, v4, v5, v6, v7)\n")),(0,i.kt)("p",null,"Call a function with given number of parameters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"call_array(func, args) = 79                        // CALL func(...args)\n")),(0,i.kt)("p",null,"Passes arguments to a function as an array. The array can be at most ",(0,i.kt)("inlineCode",{parentName:"p"},"max_stack_depth - 1")," elements long."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"final return(value) = 12\n\nfinal jmp(*jmpoffset) = 13                // JMP jmpoffset\n\njmp_z(*jmpoffset, x) = 14                 // JMP jmpoffset IF NOT x\n")),(0,i.kt)("p",null,"Jump if condition is false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"jmp_ret_val_z(*jmpoffset) = 78            // JMP jmpoffset IF ret_val is nullish\n")),(0,i.kt)("p",null,"Used in compilation of ",(0,i.kt)("inlineCode",{parentName:"p"},"?."),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"try(*jmpoffset) = 80                // TRY jmpoffset\n")),(0,i.kt)("p",null,"Start try-catch block - catch/finally handler is at the jmpoffset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"final end_try(*jmpoffset) = 81\n")),(0,i.kt)("p",null,"Try block has to end with this. jmpoffset is for continuation code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"catch() = 82\n")),(0,i.kt)("p",null,"Has to be the first opcode in the catch handler. Causes error elsewhere.\nIf value throw is JMP rethrows immediately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"finally() = 83\n")),(0,i.kt)("p",null,"Has to be the first opcode in the finally handler.\nFinally block should be followed by storing exception value in a local\nand finish with ",(0,i.kt)("inlineCode",{parentName:"p"},"re_throw")," of the exception.\n",(0,i.kt)("inlineCode",{parentName:"p"},"retval")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," when block executed not due to an exception."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"final throw(value) = 84\n")),(0,i.kt)("p",null,"Throw an exception."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"final re_throw(value) = 85\n")),(0,i.kt)("p",null,"Throw an exception without setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"__stack__")," field.\nDoes nothing if ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"final throw_jmp(*jmpoffset, level) = 86\n")),(0,i.kt)("p",null,"Jump to given offset popping ",(0,i.kt)("inlineCode",{parentName:"p"},"level")," try blocks, activating the finally blocks on the way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"debugger() = 87\n")),(0,i.kt)("p",null,"Trigger breakpoint when debugger connected. No-op otherwise."),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"store_local(*local_idx, value) = 17      // local_idx := value\n\nstore_global(*global_idx, value) = 18    // global_idx := value\n\nstore_buffer(buffer, numfmt, offset, value) = 19\n\nload_local(*local_idx): any = 21\n\nload_global(*global_idx): any = 22\n\nstore_closure(*local_clo_idx, levels, value) = 73\n\nload_closure(*local_clo_idx, levels): any = 74\n\nmake_closure(*func_idx): function = 75    // CLOSURE(func_idx)\n\nstore_ret_val(x) = 93                     // ret_val := x\n")),(0,i.kt)("h3",{id:"field-access"},"Field access"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index(object, idx): any = 24              // object[idx]\n")),(0,i.kt)("p",null,"Read named field or sequence member (depending on type of idx)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index_set(object, index, value) = 25         // object[index] := value\n")),(0,i.kt)("p",null,"Write named field or sequence member (depending on type of idx)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"index_delete(object, index) = 11              // delete object[index]\n")),(0,i.kt)("p",null,"Remove a named field from an object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"builtin_field(*builtin_idx, obj): any = 26  // {swap}obj.builtin_idx\n")),(0,i.kt)("p",null,"Shorthand to ",(0,i.kt)("inlineCode",{parentName:"p"},"index(obj, static_builtin_string(builtin_idx))")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ascii_field(*ascii_idx, obj): any = 27      // {swap}obj.ascii_idx\n")),(0,i.kt)("p",null,"Shorthand to ",(0,i.kt)("inlineCode",{parentName:"p"},"index(obj, static_ascii_string(ascii_idx))")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"utf8_field(*utf8_idx, obj): any = 28        // {swap}obj.utf8_idx\n")),(0,i.kt)("p",null,"Shorthand to ",(0,i.kt)("inlineCode",{parentName:"p"},"index(obj, static_utf8_string(utf8_idx))")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun math_field(*builtin_idx): any = 29      // Math.builtin_idx\n\nfun ds_field(*builtin_idx): any = 30        // ds.builtin_idx\n\nfun object_field(*builtin_idx): any = 16    // Object.builtin_idx\n\nfun new(func): function = 88                // new func\n\nfun bind(func, obj): function = 15          // func.bind(obj)\n")),(0,i.kt)("h3",{id:"objects"},"Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"alloc_map() = 31\n\nalloc_array(initial_size) = 32\n\nalloc_buffer(size) = 33\n")),(0,i.kt)("h3",{id:"statics"},"Statics"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun static_spec_proto(*spec_idx): any = 34  // spec_idx.prototype\n\nfun static_buffer(*buffer_idx): buffer = 35\n\nfun static_builtin_string(*builtin_idx): string = 36\n\nfun static_ascii_string(*ascii_idx): string = 37\n\nfun static_utf8_string(*utf8_idx): string = 38\n\nfun static_function(*func_idx): function = 39\n\nfun static_spec(*spec_idx): any = 94\n\nfun literal(*value): number = 40\n\nfun literal_f64(*f64_idx): number = 41\n\nfun builtin_object(*builtin_object): number = 1\n")),(0,i.kt)("h3",{id:"misc"},"Misc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"removed_42() = 42\n\nload_buffer(buffer, numfmt, offset): number = 43\n\nret_val(): any = 44\n")),(0,i.kt)("p",null,"Return value of query register, call, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun typeof(object): number = 45\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Object_Type")," enum."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun typeof_str(object): number = 76\n")),(0,i.kt)("p",null,"Returns JS-compatible string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun undefined(): null = 46  // undefined\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun null(): null = 90        // null\n")),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun is_undefined(x): bool = 47\n")),(0,i.kt)("p",null,"Check if object is exactly ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun instance_of(obj, cls): bool = 89\n")),(0,i.kt)("p",null,"Check if ",(0,i.kt)("inlineCode",{parentName:"p"},"obj")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"cls.prototype")," in its prototype chain."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun is_nullish(x): bool = 72\n")),(0,i.kt)("p",null,"Check if value is precisely ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h3",{id:"booleans"},"Booleans"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun true(): bool = 48\n\nfun false(): bool = 49\n\nfun to_bool(x): bool = 50   // !!x\n")),(0,i.kt)("h3",{id:"math-operations"},"Math operations"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun nan(): number = 51\n\nfun inf(): number = 20\n\nfun abs(x): number = 52\n\nfun bit_not(x): number = 53   // ~x\n\nfun is_nan(x): bool = 54\n\nfun neg(x): number = 55   // -x\n\nfun uplus(x): number = 23  // +x\n\nfun not(x): bool = 56   // !x\n\nfun to_int(x): number = 57\n")),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"x | 0"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun add(x, y): number = 58     // x + y\n")),(0,i.kt)("p",null,"Note that this also works on strings, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fun sub(x, y): number = 59     // x - y\n\nfun mul(x, y): number = 60     // x * y\n\nfun div(x, y): number = 61     // x / y\n\nfun bit_and(x, y): number = 62 // x & y\n\nfun bit_or(x, y): number = 63  // x | y\n\nfun bit_xor(x, y): number = 64 // x ^ y\n\nfun shift_left(x, y): number = 65      // x << y\n\nfun shift_right(x, y): number = 66      // x >> y\n\nfun shift_right_unsigned(x, y): number = 67      // x >>> y\n\nfun eq(x, y): bool = 68      // x === y\n\nfun le(x, y): bool = 69      // x <= y\n\nfun lt(x, y): bool = 70      // x < y\n\nfun ne(x, y): bool = 71      // x !== y\n\nfun approx_eq(x, y): bool = 91  // x == y\n\nfun approx_ne(x, y): bool = 92  // x != y\n")),(0,i.kt)("h3",{id:"to-be-removed-soon"},"To be removed (soon)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"removed_77() = 77\n")),(0,i.kt)("h2",{id:"enum-stridx"},"Enum: StrIdx"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"buffer = 0\nbuiltin = 1\nascii = 2\nutf8 = 3\n_shift = 14\n")),(0,i.kt)("h2",{id:"enum-opcall"},"Enum: OpCall"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sync = 0\n")),(0,i.kt)("p",null,"Regular call. Unused."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bg = 1\n")),(0,i.kt)("p",null,"Always start new fiber."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bg_max1 = 2\n")),(0,i.kt)("p",null,"Start new fiber unless one is already running."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bg_max1_pend1 = 3\n")),(0,i.kt)("p",null,"If fiber is already running, set a flag for it to be restarted when it finishes.\nOtherwise, start new fiber."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bg_max1_replace = 4\n")),(0,i.kt)("p",null,"Start new fiber. If it's already running, replace it."),(0,i.kt)("h2",{id:"enum-bytecodeflag"},"Enum: BytecodeFlag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"num_args_mask = 0xf\nis_stmt = 0x10\ntakes_number = 0x20\nis_stateless = 0x40  // fun modifier - only valid when !is_stmt\nis_final_stmt = 0x40 // final modifier - only valid when is_stmt\n")),(0,i.kt)("h2",{id:"enum-functionflag"},"Enum: FunctionFlag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"needs_this = 0x01\nis_ctor = 0x02\nhas_rest_arg = 0x04\n")),(0,i.kt)("h2",{id:"enum-numfmt"},"Enum: NumFmt"),(0,i.kt)("p",null,"Size in bits is: ",(0,i.kt)("inlineCode",{parentName:"p"},"8 << (fmt & 0b11)"),".\nFormat is ",(0,i.kt)("inlineCode",{parentName:"p"},'["u", "i", "f", "reserved"](fmt >> 2)')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"U8 = 0b0000\nU16 = 0b0001\nU32 = 0b0010\nU64 = 0b0011\nI8 = 0b0100\nI16 = 0b0101\nI32 = 0b0110\nI64 = 0b0111\nF8 = 0b1000 // not supported\nF16 = 0b1001 // not supported\nF32 = 0b1010\nF64 = 0b1011\nSpecial = 0b1100\n")),(0,i.kt)("h2",{id:"enum-numfmt_special"},"Enum: NumFmt_Special"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"empty = 0\nbytes = 1\nstring = 2\nstring0 = 3\nbool = 4\npipe = 5\npipe_port = 6\n")),(0,i.kt)("h2",{id:"enum-packetspec_code"},"Enum: PacketSpec_Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"register = 0x1000\nevent = 0x8000\ncommand = 0x0000\nreport = 0x2000\nMASK = 0xf000\n")),(0,i.kt)("h2",{id:"enum-servicespec_flag"},"Enum: ServiceSpec_Flag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"derive_mask = 0x000f\nderive_base = 0x0000\nderive_sensor = 0x0001\nderive_last = 0x0001\n")),(0,i.kt)("h2",{id:"enum-packetspec_flag"},"Enum: PacketSpec_Flag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"multi_field = 0x01\n")),(0,i.kt)("h2",{id:"enum-fieldspec_flag"},"Enum: FieldSpec_Flag"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"is_bytes = 0x01\nstarts_repeats = 0x02\n")),(0,i.kt)("h2",{id:"enum-object_type"},"Enum: Object_Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"undefined = 0\n")),(0,i.kt)("p",null,"Only the ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"number = 1\n")),(0,i.kt)("p",null,"Integers, doubles, infinity, nan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"map = 2\n\narray = 3\n\nbuffer = 4\n\nrole = 5\n\nbool = 6\n")),(0,i.kt)("p",null,"Only ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," values."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"fiber = 7\n\nfunction = 8\n\nstring = 9\n\npacket = 10\n\nexotic = 11\n\nnull = 12\n\nimage = 13\n")),(0,i.kt)("h3",{id:"object_types-only-used-in-static-type-info"},"Object_Types only used in static type info"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"any = 14\n\nvoid = 15\n")),(0,i.kt)("h2",{id:"enum-builtin_object"},"Enum: BuiltIn_Object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Math = 0\nObject = 1\nObject_prototype = 2\nArray = 3\nArray_prototype = 4\nBuffer = 5\nBuffer_prototype = 6\nString = 7\nString_prototype = 8\nNumber = 9\nNumber_prototype = 10\nDsFiber = 11\nDsFiber_prototype = 12\nDsRole = 13\nDsRole_prototype = 14\nFunction = 15\nFunction_prototype = 16\nBoolean = 17\nBoolean_prototype = 18\nDsPacket = 19\nDsPacket_prototype = 20\nDeviceScript = 21\nDsPacketInfo_prototype = 22\nDsRegister_prototype = 23\nDsCommand_prototype = 24\nDsEvent_prototype = 25\nDsReport_prototype = 26\nError = 27\nError_prototype = 28\nTypeError = 29\nTypeError_prototype = 30\nRangeError = 31\nRangeError_prototype = 32\nSyntaxError = 33\nSyntaxError_prototype = 34\nJSON = 35\nDsServiceSpec = 36\nDsServiceSpec_prototype = 37\nDsPacketSpec = 38\nDsPacketSpec_prototype = 39\nImage = 40\nImage_prototype = 41\nGPIO = 42\nGPIO_prototype = 43\n")),(0,i.kt)("h2",{id:"enum-builtin_string"},"Enum: BuiltIn_String"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"_empty = 0\nMInfinity = 1 // -Infinity\nDeviceScript = 2\nE = 3\nInfinity = 4\nLN10 = 5\nLN2 = 6\nLOG10E = 7\nLOG2E = 8\nNaN = 9\nPI = 10\nSQRT1_2 = 11\nSQRT2 = 12\nabs = 13\nalloc = 14\narray = 15\nblitAt = 16\nboolean = 17\nbuffer = 18\ncbrt = 19\nceil = 20\ncharCodeAt = 21\nclamp = 22\nexp = 23\nfalse = 24\nfillAt = 25\nfloor = 26\nforEach = 27\nfunction = 28\ngetAt = 29\nidiv = 30\nimul = 31\nisBound = 32\njoin = 33\nlength = 34\nlog = 35\nlog10 = 36\nlog2 = 37\nmap = 38\nmax = 39\nmin = 40\nnext = 41\nnull = 42\nnumber = 43\nonChange = 44\nonConnected = 45\nonDisconnected = 46\npacket = 47\n_panic = 48\npop = 49\npow = 50\nprev = 51\nprototype = 52\npush = 53\nrandom = 54\nrandomInt = 55\nread = 56\nrestart = 57\nround = 58\nsetAt = 59\nsetLength = 60\nshift = 61\nsignal = 62\nslice = 63\nsplice = 64\nsqrt = 65\nstring = 66\nsubscribe = 67\ntoString = 68\ntrue = 69\nundefined = 70\nunshift = 71\nwait = 72\nwrite = 73\n\nsleep = 74\nimod = 75\nformat = 76\ninsert = 77\nstart = 78\ncloud = 79\nmain = 80\ncharAt = 81\nobject = 82\nparseInt = 83\nparseFloat = 84\nassign = 85\nkeys = 86\nvalues = 87\n__func__ = 88\nrole = 89\ndeviceIdentifier = 90\nshortId = 91\nserviceIndex = 92\nserviceCommand = 93\npayload = 94\ndecode = 95\nencode = 96\n_onPacket = 97\ncode = 98\nname = 99\nisEvent = 100\neventCode = 101\nisRegSet = 102\nisRegGet = 103\nregCode = 104\nflags = 105\nisReport = 106\nisCommand = 107\nisArray = 108\ninline = 109\nassert = 110\npushRange = 111\nsendCommand = 112\n__stack__ = 113\nError = 114\nTypeError = 115\nRangeError = 116\nstack = 117\nmessage = 118\ncause = 119\n__new__ = 120\nsetPrototypeOf = 121\ngetPrototypeOf = 122\nconstructor = 123\n__proto__ = 124\n_logRepr = 125\nprint = 126\neveryMs = 127\nsetInterval = 128\nsetTimeout = 129\nclearInterval = 130\nclearTimeout = 131\nSyntaxError = 132\nJSON = 133\nparse = 134\nstringify = 135\n_dcfgString = 136\nisSimulator = 137\n_Role = 138 // Role\nFiber = 139\nsuspend = 140\nresume = 141\nterminate = 142\nself = 143\ncurrent = 144\nid = 145\n_commandResponse = 146\nisAction = 147\nmillis = 148\nfrom = 149\nhex = 150\nutf8 = 151\nutf_8 = 152 // utf-8\nsuspended = 153\nreboot = 154\nserver = 155\nspec = 156\nServiceSpec = 157\nclassIdentifier = 158\nlookup = 159\nPacketSpec = 160\nparent = 161\nresponse = 162\nServerInterface = 163\n_onServerPacket = 164\n_serverSend = 165\nnotImplemented = 166\ndelay = 167\nfromCharCode = 168\n_allocRole = 169\nspiConfigure = 170\nspiXfer = 171\n_socketOpen = 172\n_socketClose = 173\n_socketWrite = 174\n_socketOnEvent = 175\nopen = 176\nclose = 177\nerror_ = 178 // error\ndata = 179\ntoUpperCase = 180\ntoLowerCase = 181\nindexOf = 182\nbyteLength = 183\nImage = 184\nwidth = 185\nheight = 186\nbpp = 187\nget = 188\nclone = 189\nset = 190\nfill = 191\nflipX = 192\nflipY = 193\ntransposed = 194\ndrawImage = 195\ndrawTransparentImage = 196\noverlapsWith = 197\nfillRect = 198\ndrawLine = 199\nequals = 200\nisReadOnly = 201\nfillCircle = 202\nblitRow = 203\nblit = 204\n_i2cTransaction = 205\n_twinMessage = 206\nspiSendImage = 207\ngpio = 208\nlabel = 209\nmode = 210\ncapabilities = 211\nvalue = 212\nsetMode = 213\nfillRandom = 214\nencrypt = 215\ndecrypt = 216\ndigest = 217\nledStripSend = 218\nrotate = 219\nregister = 220\nevent = 221\naction = 222\nreport = 223\ntype = 224\nbyCode = 225\n")))}d.isMDXComponent=!0}}]);