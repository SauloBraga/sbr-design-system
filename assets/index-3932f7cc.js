var De=Object.defineProperty;var c=(e,t)=>De(e,"name",{value:t,configurable:!0});import{R as b,r as u}from"./index-58281300.js";import{r as He}from"./index-a6a3160f.js";import{a as Q,j as A}from"./jsx-runtime-a8940278.js";function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}c(P,"_extends");var v="colors",R="sizes",g="space",Se={gap:g,gridGap:g,columnGap:g,gridColumnGap:g,rowGap:g,gridRowGap:g,inset:g,insetBlock:g,insetBlockEnd:g,insetBlockStart:g,insetInline:g,insetInlineEnd:g,insetInlineStart:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,marginBlock:g,marginBlockEnd:g,marginBlockStart:g,marginInline:g,marginInlineEnd:g,marginInlineStart:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,paddingBlock:g,paddingBlockEnd:g,paddingBlockStart:g,paddingInline:g,paddingInlineEnd:g,paddingInlineStart:g,top:g,right:g,bottom:g,left:g,scrollMargin:g,scrollMarginTop:g,scrollMarginRight:g,scrollMarginBottom:g,scrollMarginLeft:g,scrollMarginX:g,scrollMarginY:g,scrollMarginBlock:g,scrollMarginBlockEnd:g,scrollMarginBlockStart:g,scrollMarginInline:g,scrollMarginInlineEnd:g,scrollMarginInlineStart:g,scrollPadding:g,scrollPaddingTop:g,scrollPaddingRight:g,scrollPaddingBottom:g,scrollPaddingLeft:g,scrollPaddingX:g,scrollPaddingY:g,scrollPaddingBlock:g,scrollPaddingBlockEnd:g,scrollPaddingBlockStart:g,scrollPaddingInline:g,scrollPaddingInlineEnd:g,scrollPaddingInlineStart:g,fontSize:"fontSizes",background:v,backgroundColor:v,backgroundImage:v,borderImage:v,border:v,borderBlock:v,borderBlockEnd:v,borderBlockStart:v,borderBottom:v,borderBottomColor:v,borderColor:v,borderInline:v,borderInlineEnd:v,borderInlineStart:v,borderLeft:v,borderLeftColor:v,borderRight:v,borderRightColor:v,borderTop:v,borderTopColor:v,caretColor:v,color:v,columnRuleColor:v,fill:v,outline:v,outlineColor:v,stroke:v,textDecorationColor:v,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:R,minBlockSize:R,maxBlockSize:R,inlineSize:R,minInlineSize:R,maxInlineSize:R,width:R,minWidth:R,maxWidth:R,height:R,minHeight:R,maxHeight:R,flexBasis:R,gridTemplateColumns:R,gridTemplateRows:R,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ue=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),V=c(()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,Ue))(t);return o in e?e[o]:e[o]=n(t,...r)}},"o"),N=Symbol.for("sxs.internal"),le=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),ue=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:Ve}=Object.prototype,ae=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),Ge=/\s+(?![^()]*\))/,H=c(e=>t=>e(...typeof t=="string"?String(t).split(Ge):[t]),"p"),fe={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:H((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:H((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:H((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:H((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:H((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:H((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},ie=/([\d.]+)([^]*)/,Ye=c((e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,"f"),qe=c((e,t)=>e in Ze&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${ae(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${ae(e)}:${r}fit-content`)+i):String(t),"m"),Ze={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},W=c(e=>e?e+"-":"","S"),ve=c((e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,l,a)=>l=="$"==!!i?r:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?W(t)+(a.includes("$")?"":W(n))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),Ke=/\s*,\s*(?![^()]*\))/,Je=Object.prototype.toString,U=c((e,t,n,r,o)=>{let i,l,a;const s=c((f,h,p)=>{let d,m;const $=c(y=>{for(d in y){const k=d.charCodeAt(0)===64,w=k&&Array.isArray(y[d])?y[d]:[y[d]];for(m of w){const C=/[A-Z]/.test(x=d)?x:x.replace(/-[^]/g,I=>I[1].toUpperCase()),G=typeof m=="object"&&m&&m.toString===Je&&(!r.utils[C]||!h.length);if(C in r.utils&&!G){const I=r.utils[C];if(I!==l){l=I,$(I(m)),l=null;continue}}else if(C in fe){const I=fe[C];if(I!==a){a=I,$(I(m)),a=null;continue}}if(k&&(S=d.slice(1)in r.media?"@media "+r.media[d.slice(1)]:d,d=S.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(I,z,j,L,B,M)=>{const D=ie.test(z),K=.0625*(D?-1:1),[J,de]=D?[L,z]:[z,L];return"("+(j[0]==="="?"":j[0]===">"===D?"max-":"min-")+J+":"+(j[0]!=="="&&j.length===1?de.replace(ie,(Fe,re,oe)=>Number(re)+K*(j===">"?1:-1)+oe):de)+(B?") and ("+(B[0]===">"?"min-":"max-")+J+":"+(B.length===1?M.replace(ie,(Fe,re,oe)=>Number(re)+K*(B===">"?-1:1)+oe):M):"")+")"})),G){const I=k?p.concat(d):[...p],z=k?[...h]:Ye(h,d.split(Ke));i!==void 0&&o(pe(...i)),i=void 0,s(m,z,I)}else i===void 0&&(i=[[],h,p]),d=k||d.charCodeAt(0)!==36?d:`--${W(r.prefix)}${d.slice(1).replace(/\$/g,"-")}`,m=G?m:typeof m=="number"?m&&C in Xe?String(m)+"px":String(m):ve(qe(C,m??""),r.prefix,r.themeMap[C]),i[0].push(`${k?`${d} `:`${ae(d)}:`}${m}`)}}var S,x},"p");$(f),i!==void 0&&o(pe(...i)),i=void 0},"a");s(e,t,n)},"$"),pe=c((e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,"x"),Xe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},ge=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),_=c(e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=ge(n%52)+r;return ge(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),"z"),q=["themed","global","styled","onevar","resonevar","allvar","inline"],Qe=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),et=c(e=>{let t;const n=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const f in t.rules)if(t.rules[f].group===i)return`--sxs{--sxs:${[...t.rules[f].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},"r"),r=c(()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const f in a)delete a[f]}const o=Object(e).styleSheets||[];for(const a of o)if(Qe(a)){for(let s=0,f=a.cssRules;f[s];++s){const h=Object(f[s]);if(h.type!==1)continue;const p=Object(f[s+1]);if(p.type!==4)continue;++s;const{cssText:d}=h;if(!d.startsWith("--sxs"))continue;const m=d.slice(14,-3).trim().split(/\s+/),$=q[m[0]];$&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[$]={group:p,index:s,cache:new Set(m)})}if(t)break}if(!t){const a=c((s,f)=>({type:f,cssRules:[],insertRule(h,p){this.cssRules.splice(p,0,a(h,{import:3,undefined:1}[(h.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,h=>h.cssText).join("")}}`:s}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:l}=t;for(let a=q.length-1;a>=0;--a){const s=q[a];if(!l[s]){const f=q[a+1],h=l[f]?l[f].index:i.cssRules.length;i.insertRule("@media{}",h),i.insertRule(`--sxs{--sxs:${a}}`,h),l[s]={group:i.cssRules[h+1],index:h,cache:new Set([a])}}tt(l[s])}},"n");return r(),t},"E"),tt=c(e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},"v"),Y=Symbol(),nt=V(),me=c((e,t)=>nt(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[N]){r.type==null&&(r.type=o[N].type);for(const i of o[N].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(rt(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),ot(e,r,t)}),"M"),rt=c(({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${W(o.prefix)}c-${_(r)}`,l=[],a=[],s=Object.create(null),f=[];for(const d in n)s[d]=String(n[d]);if(typeof e=="object"&&e)for(const d in e){h=s,p=d,Ve.call(h,p)||(s[d]="undefined");const m=e[d];for(const $ in m){const y={[d]:String($)};String($)==="undefined"&&f.push(d);const S=m[$],x=[y,S,!ue(S)];l.push(x)}}var h,p;if(typeof t=="object"&&t)for(const d of t){let{css:m,...$}=d;m=typeof m=="object"&&m||{};for(const S in $)$[S]=String($[S]);const y=[$,m,!ue(m)];a.push(y)}return[i,r,l,a,s,f]},"C"),ot=c((e,t,n)=>{const[r,o,i,l]=it(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(p=>{function d(){for(let m=0;m<d[Y].length;m++){const[$,y]=d[Y][m];p.rules[$].apply(y)}return d[Y]=[],null}return c(d,"t"),d[Y]=[],d.rules={},q.forEach(m=>d.rules[m]={apply:$=>d[Y].push([m,$])}),d})(n):null,s=(a||n).rules,f=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,h=c(p=>{p=typeof p=="object"&&p||at;const{css:d,...m}=p,$={};for(const x in i)if(delete m[x],x in p){let k=p[x];typeof k=="object"&&k?$[x]={"@initial":i[x],...k}:(k=String(k),$[x]=k!=="undefined"||l.has(x)?k:i[x])}else $[x]=i[x];const y=new Set([...o]);for(const[x,k,w,C]of t.composers){n.rules.styled.cache.has(x)||(n.rules.styled.cache.add(x),U(k,[`.${x}`],[],e,z=>{s.styled.apply(z)}));const G=he(w,$,e.media),I=he(C,$,e.media,!0);for(const z of G)if(z!==void 0)for(const[j,L,B]of z){const M=`${x}-${_(L)}-${j}`;y.add(M);const D=(B?n.rules.resonevar:n.rules.onevar).cache,K=B?s.resonevar:s.onevar;D.has(M)||(D.add(M),U(L,[`.${M}`],[],e,J=>{K.apply(J)}))}for(const z of I)if(z!==void 0)for(const[j,L]of z){const B=`${x}-${_(L)}-${j}`;y.add(B),n.rules.allvar.cache.has(B)||(n.rules.allvar.cache.add(B),U(L,[`.${B}`],[],e,M=>{s.allvar.apply(M)}))}}if(typeof d=="object"&&d){const x=`${r}-i${_(d)}-css`;y.add(x),n.rules.inline.cache.has(x)||(n.rules.inline.cache.add(x),U(d,[`.${x}`],[],e,k=>{s.inline.apply(k)}))}for(const x of String(p.className||"").trim().split(/\s+/))x&&y.add(x);const S=m.className=[...y].join(" ");return{type:t.type,className:S,selector:f,props:m,toString:()=>S,deferredInjector:a}},"p");return le(h,{className:r,selector:f,[N]:t,toString:()=>(n.rules.styled.cache.has(r)||h(),r)})},"P"),it=c(e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),n.push(i),o.push(...a);for(const s in l){const f=l[s];(r[s]===void 0||f!=="undefined"||a.includes(f))&&(r[s]=f)}}return[t,n,r,new Set(o)]},"L"),he=c((e,t,n,r)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,f=0,h=!1;for(s in i){const p=i[s];let d=t[s];if(d!==p){if(typeof d!="object"||!d)continue e;{let m,$,y=0;for(const S in d){if(p===String(d[S])){if(S!=="@initial"){const x=S.slice(1);($=$||[]).push(x in n?n[x]:S.replace(/^@media ?/,"")),h=!0}f+=y,m=!0}++y}if($&&$.length&&(l={["@media "+$.join(", ")]:l}),!m)continue e}}}(o[f]=o[f]||[]).push([r?"cv":`${s}-${i[s]}`,l,h])}return o},"O"),at={},st=V(),lt=c((e,t)=>st(e,()=>(...n)=>{const r=c(()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=_(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}U(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n");return le(r,{toString:r})}),"D"),ct=V(),dt=c((e,t)=>ct(e,()=>n=>{const r=`${W(e.prefix)}k-${_(n)}`,o=c(()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];U(n,[],[],e,a=>i.push(a));const l=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(l)}return r},"i");return le(o,{get name(){return o()},toString:o})}),"V"),ut=c(class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+W(this.prefix)+W(this.scale)+this.token}toString(){return this.computedValue}},"G"),ft=V(),pt=c((e,t)=>ft(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${W(e.prefix)}t-${_(r)}`}`,i={},l=[];for(const s in r){i[s]={};for(const f in r[s]){const h=`--${W(e.prefix)}${s}-${f}`,p=ve(String(r[s][f]),e.prefix,s);i[s][f]=new ut(f,p,s,e.prefix),l.push(`${h}:${p}`)}}const a=c(()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const s=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(s)}return n},"s");return{...i,get className(){return a()},selector:o,toString:a}}),"J"),gt=V(),mt=V(),ht=c(e=>{const t=(n=>{let r=!1;const o=gt(n,i=>{r=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,f=typeof i.theme=="object"&&i.theme||{},h={prefix:l,media:a,theme:f,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Se},utils:typeof i.utils=="object"&&i.utils||{}},p=et(s),d={css:me(h,p),globalCss:lt(h,p),keyframes:dt(h,p),createTheme:pt(h,p),reset(){p.reset(),d.theme.toString()},theme:{},sheet:p,config:h,prefix:l,getCssText:p.toString,toString:p.toString};return String(d.theme=d.createTheme(f)),d});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>mt(n,()=>{const o=me(n,r);return(...i)=>{const l=o(...i),a=l[N].type,s=b.forwardRef((f,h)=>{const p=f&&f.as||a,{props:d,deferredInjector:m}=l(f);return delete d.as,d.ref=h,m?b.createElement(b.Fragment,null,b.createElement(p,d),b.createElement(m,null)):b.createElement(p,d)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[N]=l[N],s}}))(t),t},"q"),bt=u.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),ye=c(function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function be(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}c(be,"_objectWithoutPropertiesLoose");var ke=u.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,f=be(e,["alt","color","size","weight","mirrored","children","renderPath"]),h=u.useContext(bt),p=h.color,d=p===void 0?"currentColor":p,m=h.size,$=h.weight,y=$===void 0?"regular":$,S=h.mirrored,x=S===void 0?!1:S,k=be(h,["color","size","weight","mirrored"]);return b.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??m,height:o??m,fill:r??d,viewBox:"0 0 256 256",transform:l||x?"scale(-1, 1)":void 0},k,f),!!n&&b.createElement("title",null,n),a,b.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??y,r??d))});ke.displayName="IconBase";const Ee=ke;var O=new Map;O.set("bold",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return b.createElement(b.Fragment,null,b.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});O.set("light",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return b.createElement(b.Fragment,null,b.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var $t=c(function(t,n){return ye(t,n,O)},"renderPath"),Ce=u.forwardRef(function(e,t){return b.createElement(Ee,Object.assign({ref:t},e,{renderPath:$t}))});Ce.displayName="Check";const xt=Ce;var F=new Map;F.set("bold",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});F.set("duotone",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});F.set("fill",function(){return b.createElement(b.Fragment,null,b.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});F.set("light",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});F.set("thin",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});F.set("regular",function(e){return b.createElement(b.Fragment,null,b.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),b.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var St=c(function(t,n){return ye(t,n,F)},"renderPath"),we=u.forwardRef(function(e,t){return b.createElement(Ee,Object.assign({ref:t},e,{renderPath:St}))});we.displayName="User";const vt=we;function Re(e,t=[]){let n=[];function r(i,l){const a=u.createContext(l),s=n.length;n=[...n,l];function f(p){const{scope:d,children:m,...$}=p,y=(d==null?void 0:d[e][s])||a,S=u.useMemo(()=>$,Object.values($));return u.createElement(y.Provider,{value:S},m)}c(f,"Provider");function h(p,d){const m=(d==null?void 0:d[e][s])||a,$=u.useContext(m);if($)return $;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c(h,"useContext"),f.displayName=i+"Provider",[f,h]}c(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=n.map(l=>u.createContext(l));return c(function(a){const s=(a==null?void 0:a[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])},"useScope")},"createScope");return o.scopeName=e,[r,yt(o,...t)]}c(Re,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function yt(...e){const t=e[0];if(e.length===1)return t;const n=c(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=r.reduce((a,{useScope:s,scopeName:f})=>{const p=s(i)[`__scope${f}`];return{...a,...p}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}c(yt,"$c512c27ab02ef895$var$composeContextScopes");function ce(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}c(ce,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const ee=Boolean(globalThis==null?void 0:globalThis.document)?u.useLayoutEffect:()=>{};function kt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(kt,"$6ed0406888f73fc4$var$setRef");function Ie(...e){return t=>e.forEach(n=>kt(n,t))}c(Ie,"$6ed0406888f73fc4$export$43e446d32b3d21af");function ze(...e){return u.useCallback(Ie(...e),e)}c(ze,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Be=u.forwardRef((e,t)=>{const{children:n,...r}=e,o=u.Children.toArray(n),i=o.find(Ct);if(i){const l=i.props.children,a=o.map(s=>s===i?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:s);return u.createElement(se,P({},r,{ref:t}),u.isValidElement(l)?u.cloneElement(l,void 0,a):null)}return u.createElement(se,P({},r,{ref:t}),n)});Be.displayName="Slot";const se=u.forwardRef((e,t)=>{const{children:n,...r}=e;return u.isValidElement(n)?u.cloneElement(n,{...wt(r,n.props),ref:Ie(t,n.ref)}):u.Children.count(n)>1?u.Children.only(null):null});se.displayName="SlotClone";const Et=c(({children:e})=>u.createElement(u.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function Ct(e){return u.isValidElement(e)&&e.type===Et}c(Ct,"$5e63c961fc1ce211$var$isSlottable");function wt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}c(wt,"$5e63c961fc1ce211$var$mergeProps");const Rt=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"],Z=Rt.reduce((e,t)=>{const n=u.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?Be:t;return u.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),u.createElement(a,P({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Pe="Avatar",[It,jn]=Re(Pe),[zt,Ae]=It(Pe),Bt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=u.useState("idle");return u.createElement(zt,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},u.createElement(Z.span,P({},r,{ref:t})))}),Pt="AvatarImage",At=u.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=Ae(Pt,n),a=Wt(r),s=ce(f=>{o(f),l.onImageLoadingStatusChange(f)});return ee(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?u.createElement(Z.img,P({},i,{ref:t,src:r})):null}),jt="AvatarFallback",Mt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=Ae(jt,n),[l,a]=u.useState(r===void 0);return u.useEffect(()=>{if(r!==void 0){const s=window.setTimeout(()=>a(!0),r);return()=>window.clearTimeout(s)}},[r]),l&&i.imageLoadingStatus!=="loaded"?u.createElement(Z.span,P({},o,{ref:t})):null});function Wt(e){const[t,n]=u.useState("idle");return u.useEffect(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=c(l=>()=>{r&&n(l)},"updateStatus");return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}c(Wt,"$cddcb0b647441e34$var$useImageLoadingStatus");const Lt=Bt,Nt=At,_t=Mt;function $e(e,t,{checkForDefaultPrevented:n=!0}={}){return c(function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c($e,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function Tt({prop:e,defaultProp:t,onChange:n=c(()=>{},"onChange")}){const[r,o]=Ot({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=ce(n),s=u.useCallback(f=>{if(i){const p=typeof f=="function"?f(e):f;p!==e&&a(p)}else o(f)},[i,e,o,a]);return[l,s]}c(Tt,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Ot({defaultProp:e,onChange:t}){const n=u.useState(e),[r]=n,o=u.useRef(r),i=ce(t);return u.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}c(Ot,"$71cd76cc60e0454e$var$useUncontrolledState");function Ft(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(Ft,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function Dt(e){const[t,n]=u.useState(void 0);return ee(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,f=Array.isArray(s)?s[0]:s;l=f.inlineSize,a=f.blockSize}else l=e.offsetWidth,a=e.offsetHeight;n({width:l,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}c(Dt,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function Ht(e,t){return u.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}c(Ht,"$fe963b355347cc68$export$3e6543de14f8614f");const je=c(e=>{const{present:t,children:n}=e,r=Ut(t),o=typeof n=="function"?n({present:r.isPresent}):u.Children.only(n),i=ze(r.ref,o.ref);return typeof n=="function"||r.isPresent?u.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");je.displayName="Presence";function Ut(e){const[t,n]=u.useState(),r=u.useRef({}),o=u.useRef(e),i=u.useRef("none"),l=e?"mounted":"unmounted",[a,s]=Ht(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const f=X(r.current);i.current=a==="mounted"?f:"none"},[a]),ee(()=>{const f=r.current,h=o.current;if(h!==e){const d=i.current,m=X(f);e?s("MOUNT"):m==="none"||(f==null?void 0:f.display)==="none"?s("UNMOUNT"):s(h&&d!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),ee(()=>{if(t){const f=c(p=>{const m=X(r.current).includes(p.animationName);p.target===t&&m&&He.flushSync(()=>s("ANIMATION_END"))},"handleAnimationEnd"),h=c(p=>{p.target===t&&(i.current=X(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",f),t.addEventListener("animationend",f),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",f),t.removeEventListener("animationend",f)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:u.useCallback(f=>{f&&(r.current=getComputedStyle(f)),n(f)},[])}}c(Ut,"$921a889cee6df7e8$var$usePresence");function X(e){return(e==null?void 0:e.animationName)||"none"}c(X,"$921a889cee6df7e8$var$getAnimationName");const Me="Checkbox",[Vt,Mn]=Re(Me),[Gt,Yt]=Vt(Me),qt=u.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:f,...h}=e,[p,d]=u.useState(null),m=ze(t,w=>d(w)),$=u.useRef(!1),y=p?Boolean(p.closest("form")):!0,[S=!1,x]=Tt({prop:o,defaultProp:i,onChange:f}),k=u.useRef(S);return u.useEffect(()=>{const w=p==null?void 0:p.form;if(w){const C=c(()=>x(k.current),"reset");return w.addEventListener("reset",C),()=>w.removeEventListener("reset",C)}},[p,x]),u.createElement(Gt,{scope:n,state:S,disabled:a},u.createElement(Z.button,P({type:"button",role:"checkbox","aria-checked":T(S)?"mixed":S,"aria-required":l,"data-state":We(S),"data-disabled":a?"":void 0,disabled:a,value:s},h,{ref:m,onKeyDown:$e(e.onKeyDown,w=>{w.key==="Enter"&&w.preventDefault()}),onClick:$e(e.onClick,w=>{x(C=>T(C)?!0:!C),y&&($.current=w.isPropagationStopped(),$.current||w.stopPropagation())})})),y&&u.createElement(Jt,{control:p,bubbles:!$.current,name:r,value:s,checked:S,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),Zt="CheckboxIndicator",Kt=u.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Yt(Zt,n);return u.createElement(je,{present:r||T(i.state)||i.state===!0},u.createElement(Z.span,P({"data-state":We(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Jt=c(e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=u.useRef(null),l=Ft(n),a=Dt(t);return u.useEffect(()=>{const s=i.current,f=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(f,"checked").set;if(l!==n&&p){const d=new Event("click",{bubbles:r});s.indeterminate=T(n),p.call(s,T(n)?!1:n),s.dispatchEvent(d)}},[l,n,r]),u.createElement("input",P({type:"checkbox","aria-hidden":!0,defaultChecked:T(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function T(e){return e==="indeterminate"}c(T,"$e698a72e93240346$var$isIndeterminate");function We(e){return T(e)?"indeterminate":e?"checked":"unchecked"}c(We,"$e698a72e93240346$var$getState");const Xt=qt,Qt=Kt;var en=Object.defineProperty,tn=Object.defineProperties,nn=Object.getOwnPropertyDescriptors,te=Object.getOwnPropertySymbols,Le=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,xe=c((e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp"),ne=c((e,t)=>{for(var n in t||(t={}))Le.call(t,n)&&xe(e,n,t[n]);if(te)for(var n of te(t))Ne.call(t,n)&&xe(e,n,t[n]);return e},"__spreadValues"),_e=c((e,t)=>tn(e,nn(t)),"__spreadProps"),rn=c((e,t)=>{var n={};for(var r in e)Le.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&te)for(var r of te(e))t.indexOf(r)<0&&Ne.call(e,r)&&(n[r]=e[r]);return n},"__objRest"),on={white:"#FFF",black:"#000",test:"#FFF",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},an={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},sn={regular:"400",medium:"500",bold:"700"},ln={default:"Roboto, sans-serif",code:"monospace"},cn={shorter:"125%",short:"140%",base:"160%",tall:"180%"},dn={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},un={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},{styled:E,css:Wn,globalCss:Ln,keyframes:Te,getCssText:Nn,theme:_n,createTheme:Tn,config:On}=ht({themeMap:_e(ne({},Se),{height:"space",width:"space"}),theme:{colors:on,fontSizes:an,fontWeights:sn,fonts:ln,lineHeights:cn,radii:dn,space:un}}),Fn=E("div",{padding:"$6",borderRadius:"$md",background:"$gray800",border:"1px solid $gray600"}),fn=E("p",{fontFamily:"$default",lineHeight:"$base",margin:"0",color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}}),Dn=E("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:"0",color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$3xl"},xl:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}}),pn=E(Lt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),gn=E(Nt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),mn=E(_t,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6",color:"$white"}});function hn(e){return Q(pn,{children:[A(gn,ne({},e)),A(mn,{delayMs:600,children:A(vt,{})})]})}c(hn,"Avatar2");hn.displayName="Avatar";var Hn=E("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:"120px",boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{background:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:"38px"},md:{height:"46px"}}},defaultVariants:{variant:"primary",size:"md"}}),bn=E("div",{background:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:"0.5",cursor:"not-allowed"},variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},defaultVariants:{size:"md"}}),$n=E("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"$regular"}),xn=E("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",background:"transparent",border:"0",width:"100%","&:focus":{outline:"0"},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Oe=u.forwardRef((e,t)=>{var n=e,{prefix:r}=n,o=rn(n,["prefix"]);return Q(bn,{children:[!!r&&A($n,{children:r}),A(xn,ne({ref:t},o))]})});Oe.displayName="TextInput";var Un=E("textarea",{background:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"defaul",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:"80px","&:focus":{outline:"0",borderColor:"$ignite300"},"&:disabled":{opacity:"0.5",cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}}),Sn=E(Xt,{all:"unset",width:"$6",height:"$6",background:"$gray900",borderRadius:"$xs",lineHeight:"0",cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),vn=Te({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),yn=Te({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),kn=E(Qt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${vn} 300ms ease-out`},'&[data-state="unchecked"]':{animation:`${yn} 300ms ease-out`}});function Vn(e){return A(Sn,_e(ne({},e),{children:A(kn,{asChild:!0,children:A(xt,{weight:"bold"})})}))}c(Vn,"Checkbox2");var En=E("div",{}),Cn=E(fn,{color:"$gray200",defaultVariants:{size:"xs"}}),wn=E("div",{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"$2",marginTop:"$1"}),Rn=E("div",{height:"$1",borderRadius:"$px",background:"$gray600",variants:{active:{true:{background:"$gray100"}}}});function In({size:e,currentStep:t=1}){return Q(En,{children:[Q(Cn,{children:["Passo ",t," de ",e]}),A(wn,{css:{"--steps-size":e},children:Array.from({length:e},(n,r)=>r+1).map(n=>A(Rn,{active:t>=n},n))})]})}c(In,"MultiStep");In.displayName="MultiStep";Oe.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{hn as A,Fn as B,Vn as C,Dn as H,Ee as I,In as M,fn as T,Hn as a,Un as b,Oe as c,ye as r};
//# sourceMappingURL=index-3932f7cc.js.map
