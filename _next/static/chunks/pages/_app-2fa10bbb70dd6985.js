(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3481)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),s=n(1003),a=n(7795),c=n(4465),i=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let y=new Set;function h(e,t,n,r){if(s.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(y.has(l))return;y.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function x(e){return"string"==typeof e?e:a.formatUrl(e)}let j=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:y,children:j,prefetch:v,passHref:g,replace:b,shallow:m,scroll:_,locale:k,onClick:C,onMouseEnter:E,onTouchStart:M,legacyBehavior:w=!1}=e,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=j,w&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==v,L=l.default.useContext(i.RouterContext),S=l.default.useContext(u.AppRouterContext),N=null!=L?L:S,T=!L,{href:I,as:R}=l.default.useMemo(()=>{if(!L){let e=x(a);return{href:e,as:y?x(y):e}}let[t,n]=s.resolveHref(L,a,!0);return{href:t,as:y?s.resolveHref(L,y):n||t}},[L,a,y]),K=l.default.useRef(I),F=l.default.useRef(R);w&&(r=l.default.Children.only(n));let D=w?r&&"object"==typeof r&&r.ref:t,[H,U,z]=f.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(F.current!==R||K.current!==I)&&(z(),F.current=R,K.current=I),H(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[R,D,I,z,H]);l.default.useEffect(()=>{N&&U&&O&&h(N,I,R,{locale:k})},[R,I,U,k,O,null==L?void 0:L.locale,N]);let A={ref:X,onClick(e){w||"function"!=typeof C||C(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,a,c,i,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s.isLocalURL(n)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(y):y()}(e,N,I,R,b,m,_,k,T,O)},onMouseEnter(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(O||!T)&&h(N,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){w||"function"!=typeof M||M(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(O||!T)&&h(N,I,R,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if(!w||g||"a"===r.type&&!("href"in r.props)){let B=void 0!==k?k:null==L?void 0:L.locale,Z=(null==L?void 0:L.isLocaleDomain)&&d.getDomainLocale(R,B,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);A.href=Z||p.addBasePath(c.addLocale(R,B,null==L?void 0:L.defaultLocale))}return w?l.default.cloneElement(r,A):l.default.createElement("a",Object.assign({},P,A),n)});t.default=j,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!l,[u,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!i&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=s.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),s.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),s.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,i,n,t,u]);let y=r.useCallback(()=>{f(!1)},[]);return[p,u,y]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,s=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3481:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893),o=n(9008),l=n.n(o);n(4298);var s=n(1664),a=n.n(s);function c(e){let{icon:t,text:n,link:o}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a(),{className:"h-6 w-6 flex flex-col items-center justify-center text-gray-300",href:o,children:[n,(0,r.jsx)("span",{children:t})]})})}function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"left-0 w-full bottom-0 h-[50px] flex absolute text-xs bg-black items-center justify-evenly",children:[(0,r.jsx)(c,{icon:"1️⃣",text:"Se\xf1al",link:"/"}),(0,r.jsx)(c,{icon:"2️⃣",text:"Se\xf1al",link:"/senal-2"})]})})}function u(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"cookieconsent.css"}),(0,r.jsx)("script",{type:"text/plain","data-cookiecategory":"necessary",async:!0,src:"https://arc.io/widget.min.js#iFCL39Ho"}),(0,r.jsx)("script",{type:"text/plain","data-cookiecategory":"necessary",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-VCPCXKEEMK"}),(0,r.jsx)("script",{type:"text/plain",src:"analytics.js","data-cookiecategory":"necessary"}),(0,r.jsx)("script",{type:"text/plain","data-cookiecategory":"necessary",async:"async","data-cfasync":"false",src:"//arsnivyr.com/1?z=5660999"}),(0,r.jsx)("script",{type:"text/javascript",src:"keys.js"})]}),(0,r.jsxs)("div",{className:"bg-zinc-900",children:[(0,r.jsx)(i,{}),t,(0,r.jsx)("script",{src:"cookieconsent.js"}),(0,r.jsx)("script",{src:"cookieconsent-init.js"})]})]})}function f(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{children:(0,r.jsx)(t,{...n})})})}n(4744)},4744:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},4298:function(e,t,n){n(3573)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);