;
(self.AMP=self.AMP||[]).push({m:0,v:"2310301456000",n:"amp-facebook-comments",ev:"0.1",l:!0,f:function(n,r){!function(){function r(n,t){return(r=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,t)}function t(n){return(t=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function o(n,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}var i=Array.isArray;function u(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=new Array(r);t<r;t++)e[t]=n[t];return e}function a(n,r){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(t)return(t=t.call(n)).next.bind(t);if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return u(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t);var e=0;return function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var f=Object.prototype,c=f.hasOwnProperty,l=f.toString;function s(n){var r=Object.create(null);return n&&Object.assign(r,n),r}function v(n,r,t,e,o,i,u,a,f,c,l){return n}function h(n){return JSON.parse(n)}function m(n,r){try{return h(n)}catch(n){return null==r||r(n),null}}function p(n){var r,t=parseFloat(n);return"number"==typeof(r=t)&&isFinite(r)?t:void 0}var d=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function b(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(n)}catch(n){return r}}function y(n){var r,t=s();if(!n)return t;for(;r=d.exec(n);){var e=b(r[1],r[1]),o=r[2]?b(r[2].replace(/\+/g," "),r[2]):"";t[e]=o}return t}function g(n){var r=(n||self).location;return y(r.originalHash||r.hash)}var w="";function j(n){var r=n||self;return r.__AMP_MODE?r.__AMP_MODE:r.__AMP_MODE=function(n){return{localDev:!1,development:S(n,g(n)),esm:!1,test:!1,rtvVersion:O(n),ssrReady:!1}}(r)}function O(n){var r;return w||(w=(null===(r=n.AMP_CONFIG)||void 0===r?void 0:r.v)||"01".concat("2310301456000")),w}function S(n,r){var t=r||g(n);return["1","actions","amp","amp4ads","amp4email"].includes(t.development)||!!n.AMP_DEV_MODE}function E(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function x(n){var r=Object.getOwnPropertyDescriptor(n,"message");if(null!=r&&r.writable)return n;var t=n.message,e=n.stack,o=new Error(t);for(var i in n)o[i]=n[i];return o.stack=e,o}function k(n){for(var r,t=null,e="",o=a(arguments,!0);!(r=o()).done;){var i=r.value;i instanceof Error&&!t?t=x(i):(e&&(e+=" "),e+=i)}return t?e&&(t.message=e+": "+t.message):t=new Error(e),t}function A(n){var r,t;null===(r=(t=self).__AMP_REPORT_ERROR)||void 0===r||r.call(t,n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var I=self.__AMP_LOG;function R(n,r){throw new Error("failed to call initLogConstructor")}function M(n){return I.user||(I.user=T()),function(n,r){return r&&r.ownerDocument.defaultView!=n}(I.user.win,n)?I.userForEmbed||(I.userForEmbed=T()):I.user}function T(n){return R()}function F(){return I.dev||(I.dev=R())}function N(n,r,t,e,o,i,u,a,f,c,l){return n}function V(n,r,t,e,o,i,u,a,f,c,l){return M().assert(n,r,t,e,o,i,u,a,f,c,l)}function P(n,r){return L(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),r)}function _(n,r){return L((t=C(n),(e=C(t)).isSingleDoc()?e.win:e),r);var t,e}function C(n){return n.nodeType?(t=n,r=(t.ownerDocument||t).defaultView,P(r,"ampdoc")).getAmpDoc(n):n;var r,t}function L(n,r){N(function(n,r){var t=n.__AMP_SERVICES&&n.__AMP_SERVICES[r];return!(!t||!t.ctor)}(n,r));var t=function(n){var r=n.__AMP_SERVICES;return r||(r=n.__AMP_SERVICES={}),r}(n)[r];return t.obj||(N(t.ctor),N(t.context),t.obj=new t.ctor(t.context),N(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}var U;function z(n){return n.data}var D,G=["Webkit","webkit","Moz","moz","ms","O","o"];function J(n,r,t,e,o){var i=function(n,r,t){if(r.startsWith("--"))return r;D||(D=s());var e=D[r];if(!e||t){if(e=r,void 0===n[r]){var o=function(n){return n.charAt(0).toUpperCase()+n.slice(1)}(r),i=function(n,r){for(var t=0;t<G.length;t++){var e=G[t]+r;if(void 0!==n[e])return e}return""}(n,o);void 0!==n[i]&&(e=i)}t||(D[r]=e)}return e}(n.style,r,o);if(i){var u,a=e?t+e:t;n.style.setProperty((u=i.replace(/[A-Z]/g,(function(n){return"-"+n.toLowerCase()})),G.some((function(n){return u.startsWith(n+"-")}))?"-".concat(u):u),a)}}var B=function(){function n(){}return n.generate=function(n){return function(n){for(var r=n.length,t=5381,e=0;e<r;e++)t=33*t^n.charCodeAt(e);return String(t>>>0)}(function(n){for(var r=[],t=0;1==(null==(i=n)?void 0:i.nodeType)&&t<25;){var e="";n.id&&(e="/".concat(n.id));var o=n.nodeName.toLowerCase();r.push("".concat(o).concat(e).concat(H(n))),t++,n=n.parentElement}var i;return r.join()}(n))},n}();function H(n){for(var r=n.nodeName,t=0,e=0,o=n.previousElementSibling;o&&e<25&&t<100;)o.nodeName==r&&e++,t++,o=o.previousElementSibling;return e<25&&t<100?".".concat(e):""}function q(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function X(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){E(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}var W="__AMP__EXPERIMENT_TOGGLES";function Z(n){var r,t,e,o,u;if(n[W])return n[W];n[W]=s();var f=n[W];v(f);var c=X(X({},null!==(r=n.AMP_CONFIG)&&void 0!==r?r:{}),null!==(t=n.AMP_EXP)&&void 0!==t?t:h((null===(e=n.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(var l in c){var m=c[l];"number"==typeof m&&m>=0&&m<=1&&(f[l]=Math.random()<m)}var p=null===(o=n.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(i(p)&&p.length){var d=n.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var b,g,w=a((null===(b=d.getAttribute("content"))||void 0===b?void 0:b.split(","))||[],!0);!(g=w()).done;){var j=g.value;p.includes(j)&&(f[j]=!0)}}Object.assign(f,function(n){var r,t="";try{var e;"localStorage"in n&&(t=null!==(e=n.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(n){F().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var o,i=(null===(r=t)||void 0===r?void 0:r.split(/\s*,\s*/g))||[],u=s(),f=a(i,!0);!(o=f()).done;){var c=o.value;c&&("-"==c[0]?u[c.substr(1)]=!1:u[c]=!0)}return u}(n));var O=null===(u=n.AMP_CONFIG)||void 0===u?void 0:u["allow-url-opt-in"];if(i(O)&&O.length)for(var S,E=y(n.location.originalHash||n.location.hash),x=a(O,!0);!(S=x()).done;){var k=S.value,A=E["e-".concat(k)];"1"==A&&(f[k]=!0),"0"==A&&(f[k]=!1)}return f}var $,K,Q=function(){return self.AMP.config.urls}(),Y=function(){function n(n){this.Lt=n,this.Ht=0,this.Ft=0,this.Gt=s()}var r=n.prototype;return r.has=function(n){return!!this.Gt[n]},r.get=function(n){var r=this.Gt[n];if(r)return r.access=++this.Ft,r.payload},r.put=function(n,r){this.has(n)||this.Ht++,this.Gt[n]={payload:r,access:this.Ft},this.zt()},r.zt=function(){if(!(this.Ht<=this.Lt)){var n,r=this.Gt,t=this.Ft+1;for(var e in r){var o=r[e].access;o<t&&(t=o,n=e)}void 0!==n&&(delete r[n],this.Ht--)}},n}();function nn(n,r){return $||($=self.document.createElement("a"),K=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Y(100))),function(n,r,t){if(t&&t.has(r))return t.get(r);n.href=r,n.protocol||(n.href=n.href);var e,o={href:n.href,protocol:n.protocol,host:n.host,hostname:n.hostname,port:"0"==n.port?"":n.port,pathname:n.pathname,search:n.search,hash:n.hash,origin:null};"/"!==o.pathname[0]&&(o.pathname="/"+o.pathname),("http:"==o.protocol&&80==o.port||"https:"==o.protocol&&443==o.port)&&(o.port="",o.host=o.hostname),e=n.origin&&"null"!=n.origin?n.origin:"data:"!=o.protocol&&o.host?o.protocol+"//"+o.host:o.href,o.origin=e;var i=o;return t&&t.put(r,i),i}($,n,r?null:K)}function rn(n){return"https:"==(n=function(n){return"string"==typeof n?nn(n):n}(n)).protocol||"localhost"==n.hostname||"127.0.0.1"==n.hostname||(t=".localhost",(e=(r=n.hostname).length-t.length)>=0&&r.indexOf(t,e)==e);var r,t,e}var tn=function(){return self.AMP.config.urls}(),en={};function on(n,r,t,e){var o=t||r.getAttribute("type");V(o,"Attribute type required for <amp-ad>: %s",r);var i=function(n){for(var r=0,t=n;t&&t!=t.parent;t=t.parent)r++;return String(r)+"-"+fn(n)}(n),u={};return function(n,r){var t=n.dataset;for(var e in t)e.startsWith("vars")||(r[e]=t[e]);var o=n.getAttribute("json");if(o){var i=m(o);if(void 0===i)throw M().createError("Error parsing JSON in json attribute in element %s",n);for(var u in i)r[u]=i[u]}}(r,u),u=function(n,r,t,e){var o=Date.now(),i=r.getAttribute("width"),u=r.getAttribute("height");(e=e||{}).width=p(i),e.height=p(u),r.getAttribute("title")&&(e.title=r.getAttribute("title"));var a=n.location.href;"about:srcdoc"==a&&(a=n.parent.location.href);var f,c,l,s,v=C(r),h=_(r,"documentInfo").get(),m=(s=r,_(s,"viewer")).getUnconfirmedReferrerUrl(),d=function(n){for(var r=n.ownerDocument.body,t=0,e=0,o=n;o&&o!=r;o=o.offsetParent)t+=o.offsetLeft,e+=o.offsetTop;var i=n.offsetHeight;return function(n,r,t,e){return{left:n,top:r,width:t,height:e,bottom:r+e,right:n+t,x:n,y:r}}(t,e,n.offsetWidth,i)}(r);e._context={"ampcontextVersion":"2310301456000","ampcontextFilepath":"".concat(Q.thirdParty,"/").concat("2310301456000","/ampcontext-v0.js"),"sourceUrl":h.sourceUrl,"referrer":m,"canonicalUrl":h.canonicalUrl,"pageViewId":h.pageViewId,"location":{"href":a},"startTime":o,"tagName":r.tagName,"mode":{localDev:!1,development:j(l).development,esm:j(l).esm,test:!1,rtvVersion:j(l).rtvVersion},"canary":(f=n,!(null===(c=f.AMP_CONFIG)||void 0===c||!c.canary)),"hidden":!v.isVisible(),"initialLayoutRect":d?{"left":d.left,"top":d.top,"width":d.width,"height":d.height}:null,"domFingerprint":B.generate(r),"experimentToggles":Z(n),"sentinel":t};var b=r.getAttribute("src");return b&&(e.src=b),e}(n,r,i,u),u.type=o,Object.assign(u._context,e),u}function un(n){return"".concat(tn.thirdParty,"/").concat("2310301456000","/vendor/").concat(n).concat(".js")}function an(n,r,t){return function(n,r,t){var e=r.getMetaByName("amp-3p-iframe-src");if(!e)return null;var o=function(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"source";return V(null!=n,"%s %s must be available",r,t),V(rn(n)||/^\/\//.test(n),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',r,t,n),n}(e,'meta[name="amp-3p-iframe-src"]');V(-1==o.indexOf("?"),"3p iframe url must not include query string %s in element %s.",o,e);var i=nn(o);return V("localhost"==i.hostname&&!t||i.origin!=nn(n.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",o,i.origin,e),"".concat(o,"?").concat("2310301456000")}(n,r,t)||function(n,r){return n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+fn(n),"https://"+n.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+".".concat(tn.thirdPartyFrameHost,"/").concat("2310301456000","/")+"".concat("frame",".html")}(n)}function fn(n){var r;if(n.crypto&&n.crypto.getRandomValues){var t=new Uint32Array(2);n.crypto.getRandomValues(t),r=String(t[0])+t[1]}else r=String(n.Math.random()).substr(2)+"0";return r}function cn(n){if(n.sandbox&&n.sandbox.supports){for(var r=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"],t=0;t<r.length;t++){var e=r[t];if(!n.sandbox.supports(e))return void F().info("3p-frame","Iframe doesn't support %s",e)}n.sandbox=r.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}}function ln(n){return"string"==typeof n&&n.startsWith("amp-")&&-1!=n.indexOf("{")}var sn,vn="unlisten";function hn(n,r,t){var e=function(n,r){var t=n.listeningFors;return!t&&r&&(t=n.listeningFors=Object.create(null)),t||null}(n,t);if(!e)return e;var o=e[r];return!o&&t&&(o=e[r]=[]),o||null}function mn(n,r){for(var t=r;t&&t!=t.parent;t=t.parent)if(t==n)return!0;return!1}function pn(n){for(var r={"sentinel":vn},t=n.length-1;t>=0;t--){var e=n[t];if(!e.frame.contentWindow){n.splice(t,1);var o=e.events;for(var i in o)o[i].splice(0,1/0).forEach((function(n){n(r)}))}}}function dn(n){return function(n,r){if(v(1===r.length),v(Array.isArray(r)||(e=r,c.call(e,"raw"))),self.trustedTypes&&self.trustedTypes.createPolicy){var t=self.trustedTypes.createPolicy("static-template#createNode",{createHTML:function(n){return r[0]}});n.innerHTML=t.createHTML("ignored")}else n.innerHTML=r[0];var e,o=n.firstElementChild;return v(o),v(!o.nextElementSibling),n.removeChild(o),o}(sn,n)}var bn=['<svg viewBox="0 0 72 72"><path fill=currentColor d="M46,36c0-5.5-4.5-10-10-10s-10,4.5-10,10c0,5,3.7,9.1,8.4,9.9v-7h-2.5V36h2.5v-2.2c0-2.5,1.5-3.9,3.8-3.9\n                c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6V36h2.8l-0.4,2.9h-2.3v7C42.3,45.1,46,41,46,36z"></path><path fill=#ffffff class=i-amphtml-new-loader-transparent-on-shim d="M39.9,38.9l0.4-2.9h-2.8v-1.9c0-0.8,0.4-1.6,1.6-1.6h1.3v-2.5c0,0-1.1-0.2-2.2-0.2c-2.3,0-3.8,1.4-3.8,3.9V36\n                h-2.5v2.9h2.5v7c0.5,0.1,1,0.1,1.6,0.1s1.1,0,1.6-0.1v-7H39.9z"></path></svg>'],yn=function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&r(n,t)}(a,n);var e,i,u=(e=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=t(e);if(i){var u=t(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return o(this,n)});function a(n){var r;return(r=u.call(this,n)).ub=null,r.mR=n.hasAttribute("data-locale")?n.getAttribute("data-locale"):window.navigator.language.replace("-","_"),r.ob=null,r}a.createLoaderLogoCallback=function(n){return function(n){var r,t;return{color:"#1877F2",content:(t=(r=n).ownerDocument||r,sn&&sn.ownerDocument===t||(sn=t.createElement("div")),dn)(bn)}}(n)};var f=a.prototype;return f.renderOutsideViewport=function(){return.75},f.preconnectCallback=function(n){var r=P(this.win,"preconnect");r.url(this.getAmpDoc(),"https://facebook.com",n),r.preload(this.getAmpDoc(),"https://connect.facebook.net/"+this.mR+"/sdk.js","script"),function(n,r,t,e){var o=an(n,t);e.preload(t,o,"document"),e.preload(t,un("facebook"),"script")}(this.win,0,this.getAmpDoc(),r)},f.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},f.layoutCallback=function(){var n=this;this.element.setAttribute("data-embed-as","comments");var r,t,e=function(n,r,t,e){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.allowFullscreen,u=void 0!==i&&i,a=o.initialIntersection;N(void 0===r.isConnected||!0===r.isConnected);var f=on(n,r,t,e);a&&(f._context.initialIntersection=a);var c=n.document.createElement("iframe");en[f.type]||(en[f.type]=0),en[f.type]+=1;var l=r.getAmpDoc(),s=an(n,l),v=nn(s).hostname,h=JSON.stringify({"host":v,"bootstrap":un(f.type),"type":f.type,"count":en[f.type],"attributes":f});return c.src=s,c.ampLocation=nn(s),c.name=h,f.width&&(c.width=f.width),f.height&&(c.height=f.height),f.title&&(c.title=f.title),u&&c.setAttribute("allowfullscreen","true"),c.setAttribute("scrolling","no"),J(c,"border","none"),c.onload=function(){this.readyState="complete"},c.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(t)||cn(c),c.setAttribute("data-amp-3p-sentinel",f._context.sentinel),c}(this.win,this.element,"facebook");return e.title=this.element.title||"Facebook comments",e.classList.add("i-amphtml-fill-content"),function(n,r,t,e,o,i){N(n.src),N(!n.parentNode),N(t);var u=n.ownerDocument.defaultView;!function(n){n.listeningFors||n.addEventListener("message",(function(r){if(z(r)){var t=function(n){return"string"==typeof n&&(n="{"==n.charAt(0)?m(n,(function(n){F().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",n)}))||null:ln(n)?function(n){if(!ln(n))return null;var r=n.indexOf("{");return v(-1!=r),m(n.substr(r),(function(r){!function(n){var r=k.apply(null,arguments);setTimeout((function(){throw A(r),r}))}(new Error("MESSAGING: Failed to parse message: ".concat(n,"\n").concat(r.message)))}))}(n):null),n}(z(r));if(t&&t.sentinel){var e=function(n,r,t,e){var o,i=hn(n,r);if(!i)return i;for(var u=0;u<i.length;u++){var a=i[u],f=a.frame.contentWindow;if(f){if(e==f||mn(f,e)){o=a;break}}else setTimeout(pn,0,i)}return o?o.events:null}(n,t.sentinel,r.origin,r.source);if(e){var o=e[t.type];if(o){o=o.slice();for(var i=0;i<o.length;i++)(0,o[i])(t,r.source,r.origin,r)}}}}}))}(u);var a,f=function(n,r,t){for(var e,o=function(n,r){return n.getAttribute("data-amp-3p-sentinel")}(r),i=hn(n,o,!0),u=0;u<i.length;u++){var a=i[u];if(a.frame===r){e=a;break}}return e||(e={frame:r,events:Object.create(null)},i.push(e)),e.events}(u,n),c=nn(n.src).origin,l=f["embed-size"]||(f["embed-size"]=[]),s=function(r,e,o,i){if("amp"==r.sentinel){if(e!=n.contentWindow)return;if(c!=o)return}e==n.contentWindow&&(r.sentinel!=vn?t(r,e,o,i):a())};l.push(s),a=function(){if(s){var n=l.indexOf(s);n>-1&&l.splice(n,1),s=null,l=null,t=null}}}(e,0,(function(r){n.forceChangeHeight(r.height)})),this.ob=(r=this.win,t=this.jR.bind(this),function(n,r,t,e){var o=n,i=t,u=function(n){try{return i(n)}catch(n){var r,t;throw null===(r=(t=self).__AMP_REPORT_ERROR)||void 0===r||r.call(t,n),n}},a=function(){if(void 0!==U)return U;U=!1;try{var n={get capture(){return U=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return U}();return o.addEventListener(r,u,!!a&&e),function(){null==o||o.removeEventListener(r,u,!!a&&e),i=null,o=null,u=null}}(r,"message",t,void 0)),this.toggleLoading(!0),this.element.appendChild(e),this.ub=e,this.loadPromise(e)},f.jR=function(n){if(!this.ub||n.source==this.ub.contentWindow){var r,t=z(n);t&&(r=t,("[object Object]"===l.call(r)?t:m(t))&&"ready"==t.action&&this.toggleLoading(!1))}},f.unlayoutCallback=function(){var n,r;return this.ub&&(null===(r=(n=this.ub).parentElement)||void 0===r||r.removeChild(n),this.ub=null),this.ob&&this.ob(),!0},a}(n.BaseElement);n.registerElement("amp-facebook-comments",yn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-facebook-comments-0.1.js.map