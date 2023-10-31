import{r,_ as O,j as o,R as J,a as N,b as y,e as z,T as ee,L as I}from"./index-27119536.js";const te=r.lazy(()=>O(()=>import("./Todos-def8ef56.js"),["./Todos-def8ef56.js","./index-27119536.js","./index-357d0409.css","./Todo-c356e09f.js","./DatePicker-24295304.js","./DatePicker-89992f2a.css"],import.meta.url)),ne=r.lazy(()=>O(()=>import("./CompletedTodos-07803ba2.js"),["./CompletedTodos-07803ba2.js","./index-27119536.js","./index-357d0409.css","./Todo-c356e09f.js","./DatePicker-24295304.js","./DatePicker-89992f2a.css"],import.meta.url)),re=r.lazy(()=>O(()=>import("./ActiveTodos-4ca28ccb.js"),["./ActiveTodos-4ca28ccb.js","./index-27119536.js","./index-357d0409.css","./Todo-c356e09f.js","./DatePicker-24295304.js","./DatePicker-89992f2a.css"],import.meta.url)),le=r.lazy(()=>O(()=>import("./AddTodo-82421c07.js"),["./AddTodo-82421c07.js","./index-27119536.js","./index-357d0409.css","./DatePicker-24295304.js","./DatePicker-89992f2a.css"],import.meta.url)),oe=()=>o.jsx("div",{className:"content",children:o.jsxs(J,{children:[o.jsx(N,{path:"/",element:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(te,{})})}),o.jsx(N,{path:"/completed",element:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(ne,{})})}),o.jsx(N,{path:"/active",element:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(re,{})})}),o.jsx(N,{path:"/submit",element:o.jsx(r.Suspense,{fallback:o.jsx("div",{children:"Loading..."}),children:o.jsx(le,{})})})]})});var se=Object.defineProperty,ae=(e,t,n)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>(ae(e,typeof t!="symbol"?t+"":t,n),n);let ie=class{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},j=new ie,C=(e,t)=>{j.isServer?r.useEffect(e,t):r.useLayoutEffect(e,t)};function ue(e){let t=r.useRef(e);return C(()=>{t.current=e},[e]),t}let E=function(e){let t=ue(e);return y.useCallback((...n)=>t.current(...n),[t])};function ce(){let e=typeof document>"u";return"useSyncExternalStore"in z?(t=>t.useSyncExternalStore)(z)(()=>()=>{},()=>!1,()=>!e):!1}function de(){let e=ce(),[t,n]=r.useState(j.isHandoffComplete);return t&&j.isHandoffComplete===!1&&n(!1),r.useEffect(()=>{t!==!0&&n(!0)},[t]),r.useEffect(()=>j.handoff(),[]),e?!1:t}var V;let Q=(V=y.useId)!=null?V:function(){let e=de(),[t,n]=y.useState(e?()=>j.nextId():null);return C(()=>{t===null&&n(j.nextId())},[t]),t!=null?""+t:void 0};function P(e,t,...n){if(e in t){let s=t[e];return typeof s=="function"?s(...n):s}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,P),l}function fe(e){return j.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function K(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function pe(e,t){let[n,l]=r.useState(()=>K(e));return C(()=>{l(K(e))},[e.type,e.as]),C(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")},[n,t]),n}let X=Symbol();function me(e,t=!0){return Object.assign(e,{[X]:t})}function L(...e){let t=r.useRef(e);r.useEffect(()=>{t.current=e},[e]);let n=E(l=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(l):s.current=l)});return e.every(l=>l==null||(l==null?void 0:l[X]))?void 0:n}function Y(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var $=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))($||{}),he=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(he||{});function _({ourProps:e,theirProps:t,slot:n,defaultTag:l,features:s,visible:a=!0,name:u}){let i=Z(t,e);if(a)return T(i,n,l,u);let d=s??0;if(d&2){let{static:c=!1,...f}=i;if(c)return T(f,n,l,u)}if(d&1){let{unmount:c=!0,...f}=i;return P(c?0:1,{0(){return null},1(){return T({...f,hidden:!0,style:{display:"none"}},n,l,u)}})}return T(i,n,l,u)}function T(e,t={},n,l){let{as:s=n,children:a,refName:u="ref",...i}=R(e,["unmount","static"]),d=e.ref!==void 0?{[u]:e.ref}:{},c=typeof a=="function"?a(t):a;"className"in i&&i.className&&typeof i.className=="function"&&(i.className=i.className(t));let f={};if(t){let p=!1,h=[];for(let[v,g]of Object.entries(t))typeof g=="boolean"&&(p=!0),g===!0&&h.push(v);p&&(f["data-headlessui-state"]=h.join(" "))}if(s===r.Fragment&&Object.keys(W(i)).length>0){if(!r.isValidElement(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${l} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map(g=>`  - ${g}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(g=>`  - ${g}`).join(`
`)].join(`
`));let p=c.props,h=typeof(p==null?void 0:p.className)=="function"?(...g)=>Y(p==null?void 0:p.className(...g),i.className):Y(p==null?void 0:p.className,i.className),v=h?{className:h}:{};return r.cloneElement(c,Object.assign({},Z(c.props,W(R(i,["ref"]))),f,d,ge(c.ref,d.ref),v))}return r.createElement(s,Object.assign({},R(i,["ref"]),s!==r.Fragment&&d,s!==r.Fragment&&f),c)}function ge(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function Z(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let l of e)for(let s in l)s.startsWith("on")&&typeof l[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(l[s])):t[s]=l[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(l=>[l,void 0])));for(let l in n)Object.assign(t,{[l](s,...a){let u=n[l];for(let i of u){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;i(s,...a)}}});return t}function A(e){var t;return Object.assign(r.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function W(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function R(e,t=[]){let n=Object.assign({},e);for(let l of t)l in n&&delete n[l];return n}function ye(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let l=(t==null?void 0:t.getAttribute("disabled"))==="";return l&&ve(n)?!1:l}function ve(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let H=r.createContext(null);H.displayName="OpenClosedContext";var S=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(S||{});function be(){return r.useContext(H)}function xe({value:e,children:t}){return y.createElement(H.Provider,{value:e},t)}var w=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(w||{}),q;let je=(q=y.startTransition)!=null?q:function(e){e()};var we=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(we||{}),Ee=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Ee||{});let Se={0:e=>({...e,disclosureState:P(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},M=r.createContext(null);M.displayName="DisclosureContext";function B(e){let t=r.useContext(M);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,B),n}return t}let F=r.createContext(null);F.displayName="DisclosureAPIContext";function G(e){let t=r.useContext(F);if(t===null){let n=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,G),n}return t}let U=r.createContext(null);U.displayName="DisclosurePanelContext";function Pe(){return r.useContext(U)}function ke(e,t){return P(t.type,Se,e,t)}let Ne=r.Fragment;function Te(e,t){let{defaultOpen:n=!1,...l}=e,s=r.useRef(null),a=L(t,me(b=>{s.current=b},e.as===void 0||e.as===r.Fragment)),u=r.useRef(null),i=r.useRef(null),d=r.useReducer(ke,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:i,panelRef:u,buttonId:null,panelId:null}),[{disclosureState:c,buttonId:f},p]=d,h=E(b=>{p({type:1});let m=fe(s);if(!m||!f)return;let x=(()=>b?b instanceof HTMLElement?b:b.current instanceof HTMLElement?b.current:m.getElementById(f):m.getElementById(f))();x==null||x.focus()}),v=r.useMemo(()=>({close:h}),[h]),g=r.useMemo(()=>({open:c===0,close:h}),[c,h]),k={ref:a};return y.createElement(M.Provider,{value:d},y.createElement(F.Provider,{value:v},y.createElement(xe,{value:P(c,{0:S.Open,1:S.Closed})},_({ourProps:k,theirProps:l,slot:g,defaultTag:Ne,name:"Disclosure"}))))}let Ie="button";function Ce(e,t){let n=Q(),{id:l=`headlessui-disclosure-button-${n}`,...s}=e,[a,u]=B("Disclosure.Button"),i=Pe(),d=i===null?!1:i===a.panelId,c=r.useRef(null),f=L(c,t,d?null:a.buttonRef);r.useEffect(()=>{if(!d)return u({type:2,buttonId:l}),()=>{u({type:2,buttonId:null})}},[l,u,d]);let p=E(m=>{var x;if(d){if(a.disclosureState===1)return;switch(m.key){case w.Space:case w.Enter:m.preventDefault(),m.stopPropagation(),u({type:0}),(x=a.buttonRef.current)==null||x.focus();break}}else switch(m.key){case w.Space:case w.Enter:m.preventDefault(),m.stopPropagation(),u({type:0});break}}),h=E(m=>{switch(m.key){case w.Space:m.preventDefault();break}}),v=E(m=>{var x;ye(m.currentTarget)||e.disabled||(d?(u({type:0}),(x=a.buttonRef.current)==null||x.focus()):u({type:0}))}),g=r.useMemo(()=>({open:a.disclosureState===0}),[a]),k=pe(e,c),b=d?{ref:f,type:k,onKeyDown:p,onClick:v}:{ref:f,id:l,type:k,"aria-expanded":a.disclosureState===0,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:p,onKeyUp:h,onClick:v};return _({ourProps:b,theirProps:s,slot:g,defaultTag:Ie,name:"Disclosure.Button"})}let Oe="div",De=$.RenderStrategy|$.Static;function Re(e,t){let n=Q(),{id:l=`headlessui-disclosure-panel-${n}`,...s}=e,[a,u]=B("Disclosure.Panel"),{close:i}=G("Disclosure.Panel"),d=L(t,a.panelRef,v=>{je(()=>u({type:v?4:5}))});r.useEffect(()=>(u({type:3,panelId:l}),()=>{u({type:3,panelId:null})}),[l,u]);let c=be(),f=(()=>c!==null?(c&S.Open)===S.Open:a.disclosureState===0)(),p=r.useMemo(()=>({open:a.disclosureState===0,close:i}),[a,i]),h={ref:d,id:l};return y.createElement(U.Provider,{value:a.panelId},_({ourProps:h,theirProps:s,slot:p,defaultTag:Oe,features:De,visible:f,name:"Disclosure.Panel"}))}let $e=A(Te),Le=A(Ce),_e=A(Re),Ae=Object.assign($e,{Button:Le,Panel:_e});function He(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4v16m8-8H4"}))}const Me=r.forwardRef(He),Be=Me;function Fe(e,t){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),r.createElement("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}))}const Ue=r.forwardRef(Fe),ze=Ue,Ve=()=>{const[e,t]=y.useState(""),{searchTodos:n}=y.useContext(ee);return y.useEffect(()=>{n(e)},[e]),o.jsxs("div",{className:"relative",children:[o.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:o.jsx(ze,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),o.jsx("input",{type:"text",placeholder:"Search",className:"bg-white border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm",value:e,onChange:l=>t(l.target.value)})]})},Ke=()=>o.jsx("div",{className:"header",children:o.jsxs(Ae,{as:"nav",className:"bg-gray-800 h-full flex  items-center justify-between",children:[o.jsx("div",{className:"flex flex-shrink-0 items-center ml-6 ",children:o.jsx("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})}),o.jsx(Ve,{}),o.jsx("button",{type:"button",className:"h-12 w-12 mr-6 rounded-full bg-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:o.jsx(I,{to:"/submit",children:o.jsx(Be,{className:"h-6 w-6","aria-hidden":"true"})})})]})}),Ye=()=>o.jsx("div",{className:"sidebar bg-gray-900",children:o.jsx("nav",{children:o.jsxs("ul",{className:"space-y-1 mt-20",children:[o.jsx("li",{className:"bg-black",children:o.jsx(I,{to:"/",className:"text-gray-300 hover:text-white hover:bg-gray-800  block w-full py-4 px-4  ",children:"All todos"})}),o.jsx("li",{className:"bg-black",children:o.jsx(I,{to:"/active",className:"text-gray-300 hover:text-white hover:bg-gray-800  block w-full py-4 px-4 ",children:"Active todos"})}),o.jsx("li",{className:"bg-black",children:o.jsx(I,{to:"/completed",className:"text-gray-300 hover:text-white hover:bg-gray-800  block w-full py-4 px-4 ",children:"Completed todos"})})]})})}),We=()=>o.jsxs("div",{className:"layout",children:[o.jsx(Ke,{}),o.jsx(oe,{}),o.jsx(Ye,{})]}),Xe=Object.freeze(Object.defineProperty({__proto__:null,default:We},Symbol.toStringTag,{value:"Module"}));export{A as D,Q as I,Xe as L,W as R,_ as X,w as a,C as l,E as o,ye as r,pe as s,L as y};