function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return  false},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=true;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:true,ref:true,__self:true,__source:true};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g) void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=false;if(null===a)h=true;else switch(k){case "string":case "number":h=true;break;case "object":switch(a.$$typeof){case l:case n:h=true;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
	react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){ void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
	react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
	react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
	return react_production_min;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;

	{
	  react.exports = requireReact_production_min();
	}
	return react.exports;
}

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:true,ref:true,__self:true,__source:true};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a) void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	{
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var reactExports = requireReact();
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var React$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	default: React
}, [reactExports]);

var client = {};

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production_min;

function requireScheduler_production_min () {
	if (hasRequiredScheduler_production_min) return scheduler_production_min;
	hasRequiredScheduler_production_min = 1;
	(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
		function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=false,A=false,B=false,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
		"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=false;G(a);if(!A)if(null!==h(r))A=true,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
		function J(a,b){A=false;B&&(B=false,E(L),L=-1);z=true;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=false;}}var N=false,O=null,L=-1,P=5,Q=-1;
		function M(){return exports.unstable_now()-Q<P?false:true}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=true;try{b=O(!0,a);}finally{b?S():(N=false,O=null);}}else N=false;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=true,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
		exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=true,I(J));};
		exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
		exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
		exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=true,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=true,I(J)));return a};
		exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
	} (scheduler_production_min));
	return scheduler_production_min;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;

	{
	  scheduler.exports = requireScheduler_production_min();
	}
	return scheduler.exports;
}

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production_min;

function requireReactDom_production_min () {
	if (hasRequiredReactDom_production_min) return reactDom_production_min;
	hasRequiredReactDom_production_min = 1;
var aa=requireReact(),ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
	function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
	var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
	{},ma={};function oa(a){if(ja.call(ma,a))return  true;if(ja.call(la,a))return  false;if(ka.test(a))return ma[a]=true;la[a]=true;return  false}function pa(a,b,c,d){if(null!==c&&0===c.type)return  false;switch(typeof b){case "function":case "symbol":return  true;case "boolean":if(d)return  false;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return  false}}
	function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return  true;if(d)return  false;if(null!==c)switch(c.type){case 3:return !b;case 4:return  false===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return  false}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,false,a,null,false,false);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,false,a[1],null,false,false);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,false,a.toLowerCase(),null,false,false);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,false,a,null,false,false);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,false,a.toLowerCase(),null,false,false);});
	["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,true,a,null,false,false);});["capture","download"].forEach(function(a){z[a]=new v(a,4,false,a,null,false,false);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,false,a,null,false,false);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,false,a.toLowerCase(),null,false,false);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
	sa);z[b]=new v(b,1,false,a,null,false,false);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/1999/xlink",false,false);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,false,a,"http://www.w3.org/XML/1998/namespace",false,false);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,false,false);});
	z.xlinkHref=new v("xlinkHref",1,false,"xlink:href","http://www.w3.org/1999/xlink",true,false);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,false,a.toLowerCase(),null,true,true);});
	function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?false:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&true===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
	var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=false;
	function Oa(a,b){if(!a||Na)return "";Na=true;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=false,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
	function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,false),a;case 11:return a=Oa(a.type.render,false),a;case 1:return a=Oa(a.type,true),a;default:return ""}}
	function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
	function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
	case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
	function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:true,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return  false;var b=a._valueTracker;if(!b)return  true;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),true):false}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,false);}
	function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=true;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=true);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=true;d&&(a[e].defaultSelected=true);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=true);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var pb={animationIterationCount:true,aspectRatio:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,columns:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridArea:true,gridRow:true,gridRowEnd:true,gridRowSpan:true,gridRowStart:true,gridColumn:true,gridColumnEnd:true,gridColumnSpan:true,gridColumnStart:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,
	zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
	function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:true},{area:true,base:true,br:true,col:true,embed:true,hr:true,img:true,input:true,keygen:true,link:true,meta:true,param:true,source:true,track:true,wbr:true});
	function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
	function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return  false;default:return  true}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=false;function Jb(a,b,c){if(Ib)return a(b,c);Ib=true;try{return Gb(a,b,c)}finally{if(Ib=false,null!==zb||null!==Ab)Hb(),Fb();}}
	function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=false;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(p(231,b,typeof c));return c}var Lb=false;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=false;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=false,Pb=null,Qb=false,Rb=null,Sb={onError:function(a){Ob=true;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=false;Pb=null;Nb.apply(Sb,arguments);}
	function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=false;Pb=null;}else throw Error(p(198));Qb||(Qb=true,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
	function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=false,h=e.child;h;){if(h===c){g=true;c=e;d=f;break}if(h===d){g=true;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=true;c=f;d=e;break}if(h===d){g=true;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
	var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
	var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
	function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
	default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return  -1;case 134217728:case 268435456:case 536870912:case 1073741824:return  -1;default:return  -1}}
	function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
	function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=false,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
	function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),true;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),true;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),true;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return  true;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),true}return  false}
	function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function Xc(a){if(null!==a.blockedOn)return  false;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,false;b.shift();}return  true}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=false;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
	function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=true,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
	function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=true;
	function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
	function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
	function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
	function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
	case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
	function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return  true}function qd(){return  false}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:false===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=true;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=false),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=true),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:false}function zd(){return Pd}
	var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=false;
	function ge(a,b){switch(a){case "keyup":return  -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return  true;default:return  false}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=false;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=true;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=false,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:true,date:true,datetime:true,"datetime-local":true,email:true,month:true,number:true,password:true,range:true,search:true,tel:true,text:true,time:true,url:true,week:true};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?true:false}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=false;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=false;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
	function Ie(a,b){if(He(a,b))return  true;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return  false;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return  false;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return  false}return  true}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?true:a&&3===a.nodeType?false:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):false:false}
	function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=false;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
	d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
	var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=false;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
	function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
	ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
	ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=false,Rb=null,a;}
	function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,false),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=true;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,false,a),qf(b,true,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=true,qf("selectionchange",false,b));}}
	function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=true);d?void 0!==e?a.addEventListener(b,c,{capture:true,passive:e}):a.addEventListener(b,c,true):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,false);}
	function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
	a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
	w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
	n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
	vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,false);null!==n&&null!==J&&wf(g,J,n,t,true);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
	xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=true;break;case "contextmenu":case "mouseup":case "dragend":Te=false;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
	break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=true)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
	0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
	var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
	var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
	function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
	function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
	function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
	function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(false),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
	function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
	function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return  true}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=false,gg=false;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=true;hg(a);}
	function jg(){if(!gg&&null!==eg){gg=true;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=false;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
	function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=false,zg=null;
	function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
	function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),true):false;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,true):false;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
	null,true):false;default:return  false}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=false,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=false;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
	function Gg(a){if(a!==xg)return  false;if(!I)return Fg(a),I=true,false;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
	null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return  true}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=false;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
	function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
	function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
	function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
	null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
	b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
	c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
	b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
	function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
	x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
	m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
	f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
	d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
	(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(true),Vg=Og(false),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
	function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=true),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
	function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=false;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
	function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
	function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function qh(a,b,c,d){var e=a.updateQueue;jh=false;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
	next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=true;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
	h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
	function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
	function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
	function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
	function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=false,Jh=false,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return  false;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return  false;return  true}
	function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=false;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=false;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
	function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
	function Vh(a,b){return "function"===typeof b?b(a):b}
	function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
	eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=true);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
	function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=true);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
	function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=true);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
	function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return  true}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
	function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
	function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
	function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
	function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
	function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=false,dh=true),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=true);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(true);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
	function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
	function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:false,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
	function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=true;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:false},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
	4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
	Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(false),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
	f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:false},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
	useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
	N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:false};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a) void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:false},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
	yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):true}
	function Gi(a,b,c){var d=false,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
	function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
	"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
	function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=true,Pi=d);Li(a,b);};return c}
	function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
	function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?true:false:true;if(b)return a;a=a.return;}while(null!==a);return null}
	function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=false;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
	function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
	function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
	function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=false,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=true);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
	function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
	f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
	function hj(a,b,c,d,e){if(Zf(c)){var f=true;cg(b);}else f=false;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=true;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
	(h!==d||k!==l)&&Hi(b,g,d,l);jh=false;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
	("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=false);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
	"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=false;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||false)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
	g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
	a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=false);}return jj(a,b,c,d,f,e)}
	function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,false),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,true);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,false);yh(a,b.containerInfo);}
	function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
	function oj(a,b,c){var d=b.pendingProps,e=L.current,f=false,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?false:0!==(e&2));if(h)f=true,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
	g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
	b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
	function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
	function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
	if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
	0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=true;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
	function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
	function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,false,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,true,c,null,f);break;case "together":wj(b,false,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
	function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
	function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
	b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
	zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
	Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
	(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
	c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
	function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
	function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
	c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
	d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(true!==f.suppressHydrationWarning&&Af(d.textContent,
	h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,true);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
	"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=true:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,false,false);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
	a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
	c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,false);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,false):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
	true);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=true;break a;default:d=false;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
	xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:true!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=false;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
	a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=false;}else null!==zg&&(Fj(zg),zg=null),f=true;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
	Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,false);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,false);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
	g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
	a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=true,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,true),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=true,Dj(f,false),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
	b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
	function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
	null;case 24:return null;default:return null}}var Jj=false,U=false,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=false;
	function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
	q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=false;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
	case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=false;return n}
	function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
	function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
	function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
	function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=false;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
	function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=true;
	Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
	c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
	function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
	a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
	f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
	null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
	b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
	rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
	a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
	function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
	function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
	b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
	default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
	function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
	var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=false,Pi=null,Ri=null,vk=false,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
	function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
	function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
	function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
	else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
	d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
	function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
	function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return  false}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return  true;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return  true}
	function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
	function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
	function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
	0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
	function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
	m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
	b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
	function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
	function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
	function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=true,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
	var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=false,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=false,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
	function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
	l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
	u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return  false}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
	function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
	function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
	function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
	Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=true;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=false,yj(a,b,c);dh=0!==(a.flags&131072)?true:false;}else dh=false,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
	null,Zf(d)?(f=true,cg(b)):f=false,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,true,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
	d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:false,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
	f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=true,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
	gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
	g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
	c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
	b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=true,cg(b)):a=false,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,true,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
	function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
	function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
	break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:false};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
	function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
	null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,true===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
	function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,true,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
	function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}function jl(){return null}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
	ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
	ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
	function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,false,false,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,false,null,null,false,false,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
	function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
	Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
	yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,false);}};Gb=Qk;Hb=Rk;
	var sl={usingClientEntryPoint:false,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
	var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance||
	jl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
	reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=false,d="",e=kl;null!==b&&void 0!==b&&(true===b.unstable_strictMode&&(c=true),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,false,null,null,c,false,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,true,c)};
	reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=false,f="",g=kl;null!==c&&void 0!==c&&(true===c.unstable_strictMode&&(e=true),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,false,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
	e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,false,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),true):false};reactDom_production_min.unstable_batchedUpdates=Qk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,false,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
	return reactDom_production_min;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;

	function checkDCE() {
	  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	  if (
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
	    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
	  ) {
	    return;
	  }
	  try {
	    // Verify that the code above has been dead code eliminated (DCE'd).
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    // DevTools shouldn't crash React, no matter what.
	    // We should still report in case we break this code.
	    console.error(err);
	  }
	}

	{
	  // DCE check should happen before ReactDOM bundle executes so that
	  // DevTools can report bad minification during injection.
	  checkDCE();
	  reactDom.exports = requireReactDom_production_min();
	}
	return reactDom.exports;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;

	var m = requireReactDom();
	{
	  client.createRoot = m.createRoot;
	  client.hydrateRoot = m.hydrateRoot;
	}
	return client;
}

var clientExports = requireClient();
var ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

requireReactDom();

/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  return _extends$2 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$2.apply(null, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */
var Action;
(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */
  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */
  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    // Hash URL should always have a leading / just like window.location.pathname
    // does, so if an app ends up at a route like /#something then we add a
    // leading slash so all of our path-matching behaves the same as if it would
    // in a browser router.  This is particularly important when there exists a
    // root splat route (<Route path="*">) since that matches internally against
    // "/*" and we'd expect /#something to 404 in a hash router app.
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation("", {
      pathname,
      search,
      hash
    },
    // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }
  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);
    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience, so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message);
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$2({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$2({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    // try...catch because iOS limits us to 100 pushState calls :/
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // If the exception is because `state` can't be serialized, let that throw
      // outwards just like a replace call would so the dev knows the cause
      // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
      // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    // Treating this as a full URL will strip any trailing spaces so we need to
    // pre-encode them since they might be part of a matching splat param from
    // an ancestor route
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window, to);
    },
    createURL,
    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}
//#endregion

var ResultType;
(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/v6/utils/match-routes
 */
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  let decoded = decodePath(pathname);
  for (let i = 0; matches == null && i < branches.length; ++i) {
    // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    matches = matchRouteBranch(branches[i], decoded);
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    // Add the children before adding this route to the array, so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.
    if (route.children && route.children.length > 0) {
      invariant(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    var _route$path;
    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  // Optional path segments are denoted by a trailing `?`
  let isOptional = first.endsWith("?");
  // Compute the corresponding required segment: `foo?` -> `foo`
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  // All child paths with the prefix.  Do this for all children before the
  // optional version for all children, so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explode _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue
  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/")));
  // Then, if this is an optional value, add all child versions without
  if (isOptional) {
    result.push(...restExploded);
  }
  // for absolute paths, ensure `/` instead of empty segment
  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = s => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ?
  // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] :
  // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/v6/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce((memo, _ref, index) => {
    let {
      paramName,
      isOptional
    } = _ref;
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index];
    if (isOptional && !value) {
      memo[paramName] = undefined;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex, so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map(v => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/v6/utils/resolve-path
 */
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname;
  if (toPathname) {
    toPathname = removeDoubleSlashes(toPathname);
    if (toPathname.startsWith("/")) {
      pathname = resolvePathname(toPathname.substring(1), "/");
    } else {
      pathname = resolvePathname(toPathname, fromPathname);
    }
  } else {
    pathname = fromPathname;
  }
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches);
  // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
  // match so we include splat values for "." links.  See:
  // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
  if (v7_relativeSplatPath) {
    return pathMatches.map((match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
  }
  return pathMatches.map(match => match.pathnameBase);
}
/**
 * @private
 */
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$2({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    // With relative="route" (the default), each leading .. segment means
    // "go up one route" instead of "go up one URL segment".  This is a key
    // difference from how <a href> works and a major reason we call this a
    // "to" value instead of a "href".
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  // Ensure the pathname has a trailing slash if the original "to" had one
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  // Or if this was a link to the current path which has a trailing slash
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const removeDoubleSlashes = path => path.replace(/\/\/+/g, "/");
/**
 * @private
 */
const joinPaths = paths => removeDoubleSlashes(paths.join("/"));
/**
 * @private
 */
const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */
const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */
const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);

/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}

// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router

const DataRouterContext = /*#__PURE__*/reactExports.createContext(null);
const DataRouterStateContext = /*#__PURE__*/reactExports.createContext(null);

/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */

const NavigationContext = /*#__PURE__*/reactExports.createContext(null);
const LocationContext = /*#__PURE__*/reactExports.createContext(null);
const RouteContext = /*#__PURE__*/reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /*#__PURE__*/reactExports.createContext(null);

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/v6/hooks/use-href
 */
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;

  // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}

/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/v6/hooks/use-in-router-context
 */
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}

/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/v6/hooks/use-location
 */
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}

// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    // We should be able to get rid of this once react 18.3 is released
    // See: https://github.com/facebook/react/pull/26395
    // eslint-disable-next-line react-hooks/rules-of-hooks
    reactExports.useLayoutEffect(cb);
  }
}

/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/v6/hooks/use-navigate
 */
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our history listener yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");

    // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history (but only if we're not in a data router,
    // otherwise it'll prepend the basename inside of the router).
    // If this is a root navigation, then we navigate to the raw basename
    // which allows the basename to have full control over the presence of a
    // trailing slash on root links
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}

/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/v6/hooks/use-resolved-path
 */
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}

/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/v6/hooks/use-routes
 */
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}

// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    // Determine the remaining pathname by removing the # of URL segments the
    // parentPathnameBase has, instead of removing based on character count.
    // This is because we can't guarantee that incoming/outgoing encodings/
    // decodings will match exactly.
    // We decode paths before matching on a per-segment basis with
    // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
    // match what `window.location.pathname` would reflect.  Those don't 100%
    // align when it comes to encoded URI characters such as % and &.
    //
    // So we may end up with:
    //   pathname:           "/descendant/a%25b/match"
    //   parentPathnameBase: "/descendant/a%b"
    //
    // And the direct substring removal approach won't work :/
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase,
    // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterState, future);

  // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.
  if (locationArg && renderedMatches) {
    return /*#__PURE__*/reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$1({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /*#__PURE__*/reactExports.createElement(reactExports.Fragment, null, /*#__PURE__*/reactExports.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /*#__PURE__*/reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }
  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }

    // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.
    return {
      error: props.error !== undefined ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== undefined ? /*#__PURE__*/reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);

  // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /*#__PURE__*/reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      // Don't bail if we're initializing with partial hydration and we have
      // router matches.  That means we're actively running `patchRoutesOnNavigation`
      // so we should render down the partial matches to the appropriate
      // `HydrateFallback`.  We only do this if `parentMatches` is empty so it
      // only impacts the root matches for `RouterProvider` and no descendant
      // `<Routes>`
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;

  // If we have data errors, trim matches to the highest error boundary
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  // If we're in a partial hydration mode, detect if we need to render down to
  // a given HydrateFallback while we load the rest of the hydration data
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      // Track the deepest fallback up until the first route without data
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let {
          loaderData,
          errors
        } = dataRouterState;
        let needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors || errors[match.route.id] === undefined);
        if (match.route.lazy || needsToRunLoader) {
          // We found the first route that's not ready to render (waiting on
          // lazy, or has a loader that hasn't run yet).  Flag that we need to
          // render a fallback and render up until the appropriate fallback
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    // Only data routers handle errors/fallbacks
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : undefined;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce("route-fallback");
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        // Note: This is a de-optimized path since React won't re-use the
        // ReactElement since it's identity changes with each new
        // React.createElement call.  We keep this so folks can use
        // `<Route Component={...}>` in `<Routes>` but generally `Component`
        // usage is only advised in `RouterProvider` when we can convert it to
        // `element` ahead of time.
        children = /*#__PURE__*/reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /*#__PURE__*/reactExports.createElement(RenderedRoute, {
        match: match,
        routeContext: {
          outlet,
          matches,
          isDataRoute: dataRouterState != null
        },
        children: children
      });
    };
    // Only wrap in an error boundary within data router usages when we have an
    // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
    // an ancestor ErrorBoundary/errorElement
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /*#__PURE__*/function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
  DataRouterHook["UseNavigateStable"] = "useNavigate";
  return DataRouterHook;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /*#__PURE__*/function (DataRouterStateHook) {
  DataRouterStateHook["UseBlocker"] = "useBlocker";
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook["UseRouteId"] = "useRouteId";
  return DataRouterStateHook;
}(DataRouterStateHook$1 || {});
function useDataRouterContext$1(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}

// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}

/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState();
  let routeId = useCurrentRouteId();

  // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary
  if (error !== undefined) {
    return error;
  }

  // Otherwise look for errors from our data router state
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}

/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext$1(DataRouterHook$1.UseNavigateStable);
  let id = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    // Short circuit here since if this happens on first render the navigate
    // is useless because we haven't wired up our router subscriber yet
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$1({
        fromRouteId: id
      }, options));
    }
  }, [router, id]);
  return navigate;
}
const alreadyWarned$1 = {};
function warningOnce(key, cond, message) {
  if (!alreadyWarned$1[key]) {
    alreadyWarned$1[key] = true;
  }
}
function logV6DeprecationWarnings(renderFuture, routerFuture) {
  if ((renderFuture == null ? void 0 : renderFuture.v7_startTransition) === undefined) ;
  if ((renderFuture == null ? void 0 : renderFuture.v7_relativeSplatPath) === undefined && (true)) ;
}
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/v6/components/navigate
 */
function Navigate(_ref4) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref4;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    future,
    static: isStatic
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let navigate = useNavigate();

  // Resolve the path outside of the effect so that when effects run twice in
  // StrictMode they navigate to the same place
  let path = resolveTo(to, getResolveToMatches(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
  let jsonPath = JSON.stringify(path);
  reactExports.useEffect(() => navigate(JSON.parse(jsonPath), {
    replace,
    state,
    relative
  }), [navigate, jsonPath, relative, replace, state]);
  return null;
}
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/v6/components/route
 */
function Route(_props) {
  invariant(false) ;
}
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/v6/router-components/router
 */
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;

  // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator,
    static: staticProp,
    future: _extends$1({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /*#__PURE__*/reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/reactExports.createElement(LocationContext.Provider, {
    children: children,
    value: locationContext
  }));
}
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/v6/components/routes
 */
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {});

///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/v6/utils/create-routes-from-children
 */
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/reactExports.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}

/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && (
  // Ignore everything but left clicks
  !target || target === "_self") &&
  // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
;
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
  _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
  // no-op
}
const ViewTransitionContext = /*#__PURE__*/reactExports.createContext({
  isTransitioning: false
});
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/
const START_TRANSITION = "startTransition";
const startTransitionImpl = React$1[START_TRANSITION];
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref5) {
  let {
    basename,
    children,
    future,
    window
  } = _ref5;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback(newState => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  reactExports.useEffect(() => logV6DeprecationWarnings(future), [future]);
  return /*#__PURE__*/reactExports.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future: future
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */
const Link = /*#__PURE__*/reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
      onClick,
      relative,
      reloadDocument,
      replace,
      state,
      target,
      to,
      preventScrollReset,
      viewTransition
    } = _ref7,
    rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    // Render the absolute href server- and client-side
    absoluteHref = to;
    // Only check for external origins client-side
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          // Strip the protocol/origin/basename for same-origin absolute URLs
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e) {
      }
    }
  }
  // Rendered into <a href> for relative URLs
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative,
    viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    reactExports.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/reactExports.forwardRef(function NavLinkWithRef(_ref8, ref) {
  let {
      "aria-current": ariaCurrentProp = "page",
      caseSensitive = false,
      className: classNameProp = "",
      end = false,
      style: styleProp,
      to,
      viewTransition,
      children
    } = _ref8,
    rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
  let path = useResolvedPath(to, {
    relative: rest.relative
  });
  let location = useLocation();
  let routerState = reactExports.useContext(DataRouterStateContext);
  let {
    navigator,
    basename
  } = reactExports.useContext(NavigationContext);
  let isTransitioning = routerState != null &&
  // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useViewTransitionState(path) && viewTransition === true;
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }
  if (nextLocationPathname && basename) {
    nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
  }
  // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
  // we're looking for a slash _after_ what's in `to`.  For example:
  //
  // <NavLink to="/users"> and <NavLink to="/users/">
  // both want to look for a / at index 6 to match URL `/users/matt`
  const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let renderProps = {
    isActive,
    isPending,
    isTransitioning
  };
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;
  if (typeof classNameProp === "function") {
    className = classNameProp(renderProps);
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null].filter(Boolean).join(" ");
  }
  let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
  return /*#__PURE__*/reactExports.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to,
    viewTransition: viewTransition
  }), typeof children === "function" ? children(renderProps) : children);
});
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmit"] = "useSubmit";
  DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook["UseFetcher"] = "useFetcher";
  DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetcher"] = "useFetcher";
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set
      let replace = replaceProp !== undefined ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative,
        viewTransition
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, viewTransition]);
}
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */
function useViewTransitionState(to, opts) {
  if (opts === void 0) {
    opts = {};
  }
  let vtContext = reactExports.useContext(ViewTransitionContext);
  !(vtContext != null) ? invariant(false) : void 0;
  let {
    basename
  } = useDataRouterContext(DataRouterHook.useViewTransitionState);
  let path = useResolvedPath(to, {
    relative: opts.relative
  });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  // Transition is active if we're going to or coming from the indicated
  // destination.  This ensures that other PUSH navigations that reverse
  // an indicated transition apply.  I.e., on the list view you have:
  //
  //   <NavLink to="/details/1" viewTransition>
  //
  // If you click the breadcrumb back to the list view:
  //
  //   <NavLink to="/list" viewTransition>
  //
  // We should apply the transition because it's indicated as active going
  // from /list -> /details/1 and therefore should be active on the reverse
  // (even though this isn't strictly a POP reverse)
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if ((import.meta.env ? "" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, getInitialState, subscribe, destroy };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

var withSelector = {exports: {}};

var withSelector_production = {};

var shim = {exports: {}};

var useSyncExternalStoreShim_production = {};

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreShim_production;

function requireUseSyncExternalStoreShim_production () {
	if (hasRequiredUseSyncExternalStoreShim_production) return useSyncExternalStoreShim_production;
	hasRequiredUseSyncExternalStoreShim_production = 1;
	var React = requireReact();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useState = React.useState,
	  useEffect = React.useEffect,
	  useLayoutEffect = React.useLayoutEffect,
	  useDebugValue = React.useDebugValue;
	function useSyncExternalStore$2(subscribe, getSnapshot) {
	  var value = getSnapshot(),
	    _useState = useState({ inst: { value: value, getSnapshot: getSnapshot } }),
	    inst = _useState[0].inst,
	    forceUpdate = _useState[1];
	  useLayoutEffect(
	    function () {
	      inst.value = value;
	      inst.getSnapshot = getSnapshot;
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	    },
	    [subscribe, value, getSnapshot]
	  );
	  useEffect(
	    function () {
	      checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      return subscribe(function () {
	        checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });
	      });
	    },
	    [subscribe]
	  );
	  useDebugValue(value);
	  return value;
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function useSyncExternalStore$1(subscribe, getSnapshot) {
	  return getSnapshot();
	}
	var shim =
	  "undefined" === typeof window ||
	  "undefined" === typeof window.document ||
	  "undefined" === typeof window.document.createElement
	    ? useSyncExternalStore$1
	    : useSyncExternalStore$2;
	useSyncExternalStoreShim_production.useSyncExternalStore =
	  void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
	return useSyncExternalStoreShim_production;
}

var hasRequiredShim;

function requireShim () {
	if (hasRequiredShim) return shim.exports;
	hasRequiredShim = 1;

	{
	  shim.exports = requireUseSyncExternalStoreShim_production();
	}
	return shim.exports;
}

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredWithSelector_production;

function requireWithSelector_production () {
	if (hasRequiredWithSelector_production) return withSelector_production;
	hasRequiredWithSelector_production = 1;
	var React = requireReact(),
	  shim = requireShim();
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useSyncExternalStore = shim.useSyncExternalStore,
	  useRef = React.useRef,
	  useEffect = React.useEffect,
	  useMemo = React.useMemo,
	  useDebugValue = React.useDebugValue;
	withSelector_production.useSyncExternalStoreWithSelector = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot,
	  selector,
	  isEqual
	) {
	  var instRef = useRef(null);
	  if (null === instRef.current) {
	    var inst = { hasValue: false, value: null };
	    instRef.current = inst;
	  } else inst = instRef.current;
	  instRef = useMemo(
	    function () {
	      function memoizedSelector(nextSnapshot) {
	        if (!hasMemo) {
	          hasMemo = true;
	          memoizedSnapshot = nextSnapshot;
	          nextSnapshot = selector(nextSnapshot);
	          if (void 0 !== isEqual && inst.hasValue) {
	            var currentSelection = inst.value;
	            if (isEqual(currentSelection, nextSnapshot))
	              return (memoizedSelection = currentSelection);
	          }
	          return (memoizedSelection = nextSnapshot);
	        }
	        currentSelection = memoizedSelection;
	        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
	        var nextSelection = selector(nextSnapshot);
	        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	          return (memoizedSnapshot = nextSnapshot), currentSelection;
	        memoizedSnapshot = nextSnapshot;
	        return (memoizedSelection = nextSelection);
	      }
	      var hasMemo = false,
	        memoizedSnapshot,
	        memoizedSelection,
	        maybeGetServerSnapshot =
	          void 0 === getServerSnapshot ? null : getServerSnapshot;
	      return [
	        function () {
	          return memoizedSelector(getSnapshot());
	        },
	        null === maybeGetServerSnapshot
	          ? void 0
	          : function () {
	              return memoizedSelector(maybeGetServerSnapshot());
	            }
	      ];
	    },
	    [getSnapshot, getServerSnapshot, selector, isEqual]
	  );
	  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	  useEffect(
	    function () {
	      inst.hasValue = true;
	      inst.value = value;
	    },
	    [value]
	  );
	  useDebugValue(value);
	  return value;
	};
	return withSelector_production;
}

var hasRequiredWithSelector;

function requireWithSelector () {
	if (hasRequiredWithSelector) return withSelector.exports;
	hasRequiredWithSelector = 1;

	{
	  withSelector.exports = requireWithSelector_production();
	}
	return withSelector.exports;
}

var withSelectorExports = requireWithSelector();
var useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelectorExports);

const { useDebugValue } = React;
const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
const identity = (arg) => arg;
function useStore(api, selector = identity, equalityFn) {
  if ((import.meta.env ? "" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getInitialState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if ((import.meta.env ? "" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createImpl;

function createJSONStorage(getStorage, options) {
  let storage;
  try {
    storage = getStorage();
  } catch (_e) {
    return;
  }
  const persistStorage = {
    getItem: (name) => {
      var _a;
      const parse = (str2) => {
        if (str2 === null) {
          return null;
        }
        return JSON.parse(str2, void 0 );
      };
      const str = (_a = storage.getItem(name)) != null ? _a : null;
      if (str instanceof Promise) {
        return str.then(parse);
      }
      return parse(str);
    },
    setItem: (name, newValue) => storage.setItem(
      name,
      JSON.stringify(newValue, void 0 )
    ),
    removeItem: (name) => storage.removeItem(name)
  };
  return persistStorage;
}
const toThenable = (fn) => (input) => {
  try {
    const result = fn(input);
    if (result instanceof Promise) {
      return result;
    }
    return {
      then(onFulfilled) {
        return toThenable(onFulfilled)(result);
      },
      catch(_onRejected) {
        return this;
      }
    };
  } catch (e) {
    return {
      then(_onFulfilled) {
        return this;
      },
      catch(onRejected) {
        return toThenable(onRejected)(e);
      }
    };
  }
};
const oldImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    getStorage: () => localStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage;
  try {
    storage = options.getStorage();
  } catch (_e) {
  }
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const thenableSerialize = toThenable(options.serialize);
  const setItem = () => {
    const state = options.partialize({ ...get() });
    let errorInSync;
    const thenable = thenableSerialize({ state, version: options.version }).then(
      (serializedValue) => storage.setItem(options.name, serializedValue)
    ).catch((e) => {
      errorInSync = e;
    });
    if (errorInSync) {
      throw errorInSync;
    }
    return thenable;
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  let stateFromStorage;
  const hydrate = () => {
    var _a;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => cb(get()));
    const postRehydrationCallback = ((_a = options.onRehydrateStorage) == null ? void 0 : _a.call(options, get())) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((storageValue) => {
      if (storageValue) {
        return options.deserialize(storageValue);
      }
    }).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return options.migrate(
              deserializedStorageValue.state,
              deserializedStorageValue.version
            );
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return deserializedStorageValue.state;
        }
      }
    }).then((migratedState) => {
      var _a2;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      return setItem();
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.getStorage) {
        storage = newOptions.getStorage();
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  hydrate();
  return stateFromStorage || configResult;
};
const newImpl = (config, baseOptions) => (set, get, api) => {
  let options = {
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => state,
    version: 0,
    merge: (persistedState, currentState) => ({
      ...currentState,
      ...persistedState
    }),
    ...baseOptions
  };
  let hasHydrated = false;
  const hydrationListeners = /* @__PURE__ */ new Set();
  const finishHydrationListeners = /* @__PURE__ */ new Set();
  let storage = options.storage;
  if (!storage) {
    return config(
      (...args) => {
        console.warn(
          `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`
        );
        set(...args);
      },
      get,
      api
    );
  }
  const setItem = () => {
    const state = options.partialize({ ...get() });
    return storage.setItem(options.name, {
      state,
      version: options.version
    });
  };
  const savedSetState = api.setState;
  api.setState = (state, replace) => {
    savedSetState(state, replace);
    void setItem();
  };
  const configResult = config(
    (...args) => {
      set(...args);
      void setItem();
    },
    get,
    api
  );
  api.getInitialState = () => configResult;
  let stateFromStorage;
  const hydrate = () => {
    var _a, _b;
    if (!storage) return;
    hasHydrated = false;
    hydrationListeners.forEach((cb) => {
      var _a2;
      return cb((_a2 = get()) != null ? _a2 : configResult);
    });
    const postRehydrationCallback = ((_b = options.onRehydrateStorage) == null ? void 0 : _b.call(options, (_a = get()) != null ? _a : configResult)) || void 0;
    return toThenable(storage.getItem.bind(storage))(options.name).then((deserializedStorageValue) => {
      if (deserializedStorageValue) {
        if (typeof deserializedStorageValue.version === "number" && deserializedStorageValue.version !== options.version) {
          if (options.migrate) {
            return [
              true,
              options.migrate(
                deserializedStorageValue.state,
                deserializedStorageValue.version
              )
            ];
          }
          console.error(
            `State loaded from storage couldn't be migrated since no migrate function was provided`
          );
        } else {
          return [false, deserializedStorageValue.state];
        }
      }
      return [false, void 0];
    }).then((migrationResult) => {
      var _a2;
      const [migrated, migratedState] = migrationResult;
      stateFromStorage = options.merge(
        migratedState,
        (_a2 = get()) != null ? _a2 : configResult
      );
      set(stateFromStorage, true);
      if (migrated) {
        return setItem();
      }
    }).then(() => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, void 0);
      stateFromStorage = get();
      hasHydrated = true;
      finishHydrationListeners.forEach((cb) => cb(stateFromStorage));
    }).catch((e) => {
      postRehydrationCallback == null ? void 0 : postRehydrationCallback(void 0, e);
    });
  };
  api.persist = {
    setOptions: (newOptions) => {
      options = {
        ...options,
        ...newOptions
      };
      if (newOptions.storage) {
        storage = newOptions.storage;
      }
    },
    clearStorage: () => {
      storage == null ? void 0 : storage.removeItem(options.name);
    },
    getOptions: () => options,
    rehydrate: () => hydrate(),
    hasHydrated: () => hasHydrated,
    onHydrate: (cb) => {
      hydrationListeners.add(cb);
      return () => {
        hydrationListeners.delete(cb);
      };
    },
    onFinishHydration: (cb) => {
      finishHydrationListeners.add(cb);
      return () => {
        finishHydrationListeners.delete(cb);
      };
    }
  };
  if (!options.skipHydration) {
    hydrate();
  }
  return stateFromStorage || configResult;
};
const persistImpl = (config, baseOptions) => {
  if ("getStorage" in baseOptions || "serialize" in baseOptions || "deserialize" in baseOptions) {
    if ((import.meta.env ? "" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."
      );
    }
    return oldImpl(config, baseOptions);
  }
  return newImpl(config, baseOptions);
};
const persist = persistImpl;

const DEFAULT_SETTINGS = {
    theme: 'dark',
    dailyNew: 30,
    examDate: '2026-12-12',
    accent: 'us',
    sessionSize: 20,
    showExamModule: true,
    sfx: true,
    hideMeaning: false,
    wordOrder: 'seq',
};
const useSettings = create()(persist((set) => ({
    ...DEFAULT_SETTINGS,
    update: (patch) => set(patch),
    replaceAll: (next) => set({ ...DEFAULT_SETTINGS, ...next }),
    reset: () => set({ ...DEFAULT_SETTINGS }),
}), { name: 'cet4.settings.v1' }));

const THEME_STORAGE_KEY = 'cet4.settings.v1';
function normalizeTheme(value) {
    return value === 'light' ? 'light' : 'dark';
}
function toggleTheme(theme) {
    return theme === 'light' ? 'dark' : 'light';
}
/** 应用主题：写 data-theme + color-scheme（可选传入 root 便于单测） */
function applyTheme(theme, root) {
    const target = (typeof document !== 'undefined'
            ? document.documentElement
            : { dataset: {}, style: { colorScheme: '' } });
    const safe = normalizeTheme(theme);
    target.dataset.theme = safe;
    target.style.colorScheme = safe;
    // iOS Safari：同步状态栏/工具栏底色，跟随主题而不是固定深色
    if (typeof document !== 'undefined') {
        const meta = document.querySelector('meta[name="theme-color"]');
        if (meta)
            meta.setAttribute('content', safe === 'light' ? '#f4f6f9' : '#0b0d10');
    }
}
/** 从 zustand persist 的 localStorage 结构里读回主题（首屏防闪用） */
function readStoredTheme(storage) {
    try {
        const store = storage ?? (typeof localStorage !== 'undefined' ? localStorage : undefined);
        if (!store)
            return 'dark';
        const raw = store.getItem(THEME_STORAGE_KEY);
        if (!raw)
            return 'dark';
        const parsed = JSON.parse(raw);
        return normalizeTheme(parsed?.state?.theme ?? parsed?.theme);
    }
    catch {
        return 'dark';
    }
}

/**
 * 版本与更新检查。
 *
 * 构建时 scripts/build-rollup.mjs 会把下面两个占位符替换成真实值，并把
 * 根目录的 version.json 复制（补上 buildTime）到 dist/version.json。
 * 开发环境（vite dev / 未注入）下 cleanVersion 会把占位符显示成 dev。
 */
const APP_VERSION = "10";
const BUILD_TIME = "2026-10-21T09:40:25.608Z";
/** 相对路径：部署在 /<repo>/ 子路径下也能取到。 */
const VERSION_URL = './version.json';
/** 检查间隔：15 分钟（另外切回页面时也会补一次）。 */
const CHECK_INTERVAL_MS = 15 * 60 * 1000;
function cleanVersion(raw) {
    const value = String(raw ?? '').trim();
    if (!value || value.includes('__APP_'))
        return 'dev';
    return value;
}
function versionParts(version) {
    return String(version)
        .split('.')
        .map((part) => {
        const match = /^\d+/.exec(part.trim());
        return match ? Number(match[0]) : 0;
    });
}
/** 数字段逐位比较：10 > 9，1.10 > 1.2。 */
function compareVersion(a, b) {
    const left = versionParts(a);
    const right = versionParts(b);
    const len = Math.max(left.length, right.length);
    for (let i = 0; i < len; i += 1) {
        const x = left[i] ?? 0;
        const y = right[i] ?? 0;
        if (x !== y)
            return x > y ? 1 : -1;
    }
    return 0;
}
/** 开发环境（dev）永不提示更新。 */
function isNewer(remote, current) {
    const now = cleanVersion(current);
    if (now === 'dev')
        return false;
    return compareVersion(remote, now) > 0;
}
/** 加时间戳绕过缓存：?t=... / &t=... */
function bustUrl(url, stamp = Date.now()) {
    const sep = url.includes('?') ? '&' : '?';
    return url + sep + 't=' + stamp;
}
function stringList(value) {
    return Array.isArray(value) ? value.filter((item) => typeof item === 'string') : [];
}
function parseVersionInfo(raw) {
    if (!raw || typeof raw !== 'object')
        return null;
    const obj = raw;
    const version = typeof obj.version === 'string' ? obj.version.trim() : '';
    if (!version)
        return null;
    const history = [];
    const historyRaw = Array.isArray(obj.history) ? obj.history : [];
    for (const item of historyRaw) {
        if (!item || typeof item !== 'object')
            continue;
        const entry = item;
        const entryVersion = typeof entry.version === 'string' ? entry.version.trim() : '';
        if (!entryVersion)
            continue;
        history.push({
            version: entryVersion,
            releasedAt: typeof entry.releasedAt === 'string' ? entry.releasedAt : '',
            notes: stringList(entry.notes),
        });
    }
    return {
        version,
        buildTime: typeof obj.buildTime === 'string' ? obj.buildTime : '',
        releasedAt: typeof obj.releasedAt === 'string' ? obj.releasedAt : '',
        notes: stringList(obj.notes),
        history,
    };
}
/** 读不到 / 解析失败 / 离线一律返回 null，调用方当作「没发现更新」。 */
async function fetchVersionInfo(url = VERSION_URL, fetchImpl) {
    const call = (typeof fetch === 'function' ? fetch : null);
    if (!call)
        return null;
    try {
        const res = await call(bustUrl(url), { cache: 'no-store' });
        if (!res || !res.ok)
            return null;
        return parseVersionInfo(await res.json());
    }
    catch {
        return null;
    }
}
async function checkForUpdate(current = APP_VERSION, url = VERSION_URL, fetchImpl) {
    const info = await fetchVersionInfo(url);
    return { info, hasUpdate: info !== null && isNewer(info.version, current) };
}
/**
 * 拼出带版本参数的刷新地址：旧的 v 参数会被替换，其它参数与 hash 保留。
 * 地址变了，浏览器/iOS 主屏才会重新取 index.html 与新的 hash 资源。
 */
function versionedUrl(pathname, search, hash, version) {
    const query = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
    query.delete('v');
    if (version)
        query.set('v', version);
    const qs = query.toString();
    return (pathname || '/') + (qs ? '?' + qs : '') + (hash || '');
}

/**
 * 顶栏的「有新版本」按钮。
 * 每隔 CHECK_INTERVAL_MS 拉一次线上 version.json，切回页面时也会补拉一次；
 * 只有线上版本比自己新才出现，点一下带上 ?v=<新版本> 重载，绕过旧缓存。
 */
function UpdateBadge() {
    const [remote, setRemote] = reactExports.useState(null);
    reactExports.useEffect(() => {
        let alive = true;
        const run = async () => {
            const result = await checkForUpdate(APP_VERSION);
            if (alive && result.hasUpdate)
                setRemote(result.info);
        };
        void run();
        const timer = window.setInterval(run, CHECK_INTERVAL_MS);
        const onVisible = () => {
            if (document.visibilityState === 'visible')
                void run();
        };
        document.addEventListener('visibilitychange', onVisible);
        return () => {
            alive = false;
            window.clearInterval(timer);
            document.removeEventListener('visibilitychange', onVisible);
        };
    }, []);
    if (!remote)
        return null;
    const reload = () => {
        window.location.replace(versionedUrl(window.location.pathname, window.location.search, window.location.hash, remote.version));
    };
    return (jsxRuntimeExports.jsxs("button", { type: "button", onClick: reload, title: '线上升级到 v' + remote.version + '，点击刷新（会重新加载页面）', className: "flex h-8 items-center gap-1 rounded-lg border border-accent/50 bg-accent/10 px-2 text-[11px] font-semibold text-accent transition hover:bg-accent/20", children: [jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "\u21BB" }), "\u6709\u65B0\u7248\u672C"] }));
}

const NAV = [
    { to: '/', label: '今日', icon: '◉' },
    { to: '/study', label: '学习', icon: '▤' },
    { to: '/review', label: '复习', icon: '↻' },
    { to: '/test', label: '测试', icon: '◎' },
    { to: '/drill', label: '训练场', icon: '◍' },
    { to: '/exams', label: '真题', icon: '◫', examOnly: true },
    { to: '/mock', label: '模拟考', icon: '◈', examOnly: true },
    { to: '/wrong', label: '错题', icon: '⚑' },
    { to: '/stats', label: '统计', icon: '▦' },
    { to: '/settings', label: '设置', icon: '⚙' },
];
function Layout({ children }) {
    const showExamModule = useSettings((s) => s.showExamModule);
    const theme = useSettings((s) => s.theme);
    const update = useSettings((s) => s.update);
    const items = NAV.filter((item) => !item.examOnly || showExamModule);
    return (jsxRuntimeExports.jsxs("div", { className: "min-h-dvh", children: [jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 border-b border-ink-800/80 bg-ink-950/80 pt-[env(safe-area-inset-top)] backdrop-blur-md", children: jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6", children: [jsxRuntimeExports.jsxs(NavLink, { to: "/", className: "flex items-center gap-3", children: [jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[13px] font-black text-ink-950", children: "C4" }), jsxRuntimeExports.jsxs("span", { className: "hidden sm:block", children: [jsxRuntimeExports.jsx("span", { className: "block text-[15px] font-semibold leading-tight text-ink-100", children: "CET-4 \u8BAD\u7EC3\u573A" }), jsxRuntimeExports.jsx("span", { className: "block text-[11px] leading-tight text-ink-500", children: "\u80CC\u8BCD \u00B7 \u6D4B\u8BD5 \u00B7 \u771F\u9898" })] })] }), jsxRuntimeExports.jsx("nav", { className: "hidden flex-1 items-center justify-center gap-1 md:flex", children: items.map((item) => (jsxRuntimeExports.jsxs(NavLink, { to: item.to, end: item.to === '/', className: ({ isActive }) => 'rounded-lg px-3 py-2 text-[13px] font-medium transition ' +
                                    (isActive ? 'bg-ink-800 text-ink-100' : 'text-ink-400 hover:text-ink-100'), children: [jsxRuntimeExports.jsx("span", { className: "mr-1.5 text-[11px] opacity-70", children: item.icon }), item.label] }, item.to))) }), jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2 md:ml-0", children: [jsxRuntimeExports.jsx("span", { className: "hidden text-[11px] text-ink-500 sm:block", children: "\u672C\u5730\u5B58\u50A8 \u00B7 \u65E0\u9700\u767B\u5F55" }), jsxRuntimeExports.jsx(UpdateBadge, {}), jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update({ theme: toggleTheme(theme) }), title: theme === 'dark' ? '切换到日间模式' : '切换到深色模式', "aria-label": theme === 'dark' ? '切换到日间模式' : '切换到深色模式', className: "flex h-8 w-8 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-sm text-ink-300 transition hover:border-accent/60 hover:text-accent", children: theme === 'dark' ? '☀' : '☾' })] })] }) }), jsxRuntimeExports.jsx("main", { className: "mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6 md:pb-16", children: children }), jsxRuntimeExports.jsx("nav", { className: "fixed inset-x-0 bottom-0 z-30 border-t border-ink-800 bg-ink-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden", children: jsxRuntimeExports.jsx("div", { className: "flex items-stretch justify-between overflow-x-auto px-1", children: items.map((item) => (jsxRuntimeExports.jsxs(NavLink, { to: item.to, end: item.to === '/', className: ({ isActive }) => 'flex min-w-[52px] flex-1 flex-col items-center gap-0.5 px-1 py-2 text-[10px] transition ' +
                            (isActive ? 'text-accent' : 'text-ink-500'), children: [jsxRuntimeExports.jsx("span", { className: "text-[13px]", children: item.icon }), item.label] }, item.to))) }) })] }));
}

const BASE = "./";
const cache$1 = new Map();
function getJson(path) {
    const url = BASE + path;
    const hit = cache$1.get(url);
    if (hit)
        return hit;
    const task = fetch(url)
        .then((res) => {
        if (!res.ok)
            throw new Error('数据加载失败：' + url + '（HTTP ' + res.status + '）');
        return res.json();
    })
        .catch((err) => {
        cache$1.delete(url);
        throw err;
    });
    cache$1.set(url, task);
    return task;
}
function loadWordIndex() {
    return getJson('data/words/index.json');
}
function chunkPath(n) {
    return 'data/words/chunk-' + n + '.json';
}
function loadChunk(n) {
    return getJson(chunkPath(n));
}
/** 与 loadChunk 等价，语义化别名（按块取词） */
function loadWordsByChunk(n) {
    return loadChunk(n);
}
function loadDetail(n) {
    return getJson('data/words/chunk-' + n + '.detail.json');
}
function loadDrillSentences() {
    return getJson('data/drills/sentences.json');
}
function loadExamIndex() {
    return getJson('data/exams/index.json');
}
function loadExamSet(file) {
    return getJson('data/exams/' + file);
}
/** 一次性载入全部词（错题本 / 统计等需要跨块检索时使用） */
async function loadAllWords(onProgress) {
    const index = await loadWordIndex();
    const all = [];
    for (const chunk of index.chunks) {
        const words = await loadChunk(chunk.n);
        all.push(...words);
    }
    return all;
}

const DAY = 86400000;
function startOfDay(ts) {
    const d = new Date(ts);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
}
function dateKey(ts = Date.now()) {
    const d = typeof ts === 'number' ? new Date(ts) : ts;
    const p = (n) => String(n).padStart(2, '0');
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}
function addDays(ts, days) {
    return startOfDay(ts) + days * DAY;
}
function daysBetween(fromKey, toKey) {
    const a = new Date(fromKey + 'T00:00:00').getTime();
    const b = new Date(toKey + 'T00:00:00').getTime();
    return Math.round((b - a) / DAY);
}
function formatClock(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
}
function formatDateCn(key) {
    const [y, m, d] = key.split('-');
    return y + ' 年 ' + Number(m) + ' 月 ' + Number(d) + ' 日';
}

const DEFAULT_EASE = 2.5;
const MIN_EASE = 1.3;
const MAX_EASE = 2.8;
const MASTER_INTERVAL = 21;
function createProgress(id, now = Date.now()) {
    return {
        id,
        status: 'new',
        ease: DEFAULT_EASE,
        interval: 0,
        due: startOfDay(now),
        reps: 0,
        lapses: 0,
        lastGrade: null,
        seen: 0,
        correct: 0,
        wrong: 0,
        masteredAt: null,
    };
}
/** 三档评分 → SM-2 简化调度 */
function gradeWord(p, grade, now = Date.now()) {
    const next = { ...p, seen: p.seen + 1, lastGrade: grade };
    if (grade === 'know') {
        next.reps = p.reps + 1;
        next.ease = Math.min(MAX_EASE, Number((p.ease + 0.04).toFixed(3)));
        if (p.reps === 0)
            next.interval = 1;
        else if (p.reps === 1)
            next.interval = 3;
        else
            next.interval = Math.max(1, Math.round(Math.max(1, p.interval) * next.ease));
        next.due = now + next.interval * DAY;
        next.correct = p.correct + 1;
        next.status = next.interval >= MASTER_INTERVAL ? 'mastered' : 'review';
        next.masteredAt = next.status === 'mastered' ? p.masteredAt ?? now : null;
        return next;
    }
    if (grade === 'vague') {
        next.interval = Math.max(1, Math.round(Math.max(1, p.interval) * 0.5));
        next.ease = Math.max(MIN_EASE, Number((p.ease - 0.12).toFixed(3)));
        next.due = startOfDay(now) + DAY + 4 * 3600000;
        next.status = 'learning';
        next.masteredAt = null;
        return next;
    }
    // unknown：当日重排
    next.reps = 0;
    next.interval = 1;
    next.lapses = p.lapses + 1;
    next.ease = Math.max(MIN_EASE, Number((p.ease - 0.2).toFixed(3)));
    next.due = now;
    next.wrong = p.wrong + 1;
    next.status = 'learning';
    next.masteredAt = null;
    return next;
}
/** 下一次各档评分后的间隔预览（天），用于按钮提示 */
function previewIntervals(p) {
    const calc = (grade) => {
        const next = gradeWord(p, grade, Date.now());
        if (grade === 'unknown')
            return '一会再见';
        return next.interval + ' 天';
    };
    return { know: calc('know'), vague: '明天', unknown: calc('unknown') };
}

const useProgress = create()(persist((set, get) => ({
    words: {},
    ensure: (id) => {
        const existing = get().words[id];
        if (existing)
            return existing;
        const fresh = createProgress(id);
        set((state) => ({ words: { ...state.words, [id]: fresh } }));
        return fresh;
    },
    get: (id) => get().words[id],
    grade: (id, grade, now = Date.now()) => set((state) => {
        const base = state.words[id] ?? createProgress(id, now);
        return { words: { ...state.words, [id]: gradeWord(base, grade, now) } };
    }),
    replaceAll: (next) => set({ words: next }),
    reset: () => set({ words: {} }),
}), { name: 'cet4.progress.v1' }));
function dueIds(words, now = Date.now()) {
    return Object.values(words)
        .filter((p) => p.status !== 'new' && p.due <= now)
        .sort((a, b) => a.due - b.due)
        .map((p) => p.id);
}

function emptyDay(date) {
    return {
        date,
        newWords: 0,
        reviewed: 0,
        quizItems: 0,
        quizCorrect: 0,
        examItems: 0,
        examCorrect: 0,
        srsRatings: 0,
    };
}
/** 作答来源分类：三类互斥，任何统计都先分桶再算 */
function categoryOf(mode) {
    if (mode === 'srs')
        return 'srs';
    if (mode === 'exam')
        return 'exam';
    // 训练场（句子拼图 / 听写 / 跟读）本质是词汇与句型练习，归入 quiz 桶
    return 'quiz';
}
/**
 * 把一条作答计入当天分桶（纯函数，不修改入参）。
 * 分桶一律由 mode 推导：mode 是作答事实，category 只是持久化后的冗余字段，
 * 不参与判定，避免旧数据里 category 与 mode 不一致时污染统计。
 */
function addAttempt(day, attempt) {
    const category = categoryOf(attempt.mode);
    const next = { ...day };
    if (category === 'quiz') {
        next.quizItems += 1;
        if (attempt.correct)
            next.quizCorrect += 1;
    }
    else if (category === 'exam') {
        next.examItems += 1;
        if (attempt.correct)
            next.examCorrect += 1;
    }
    else {
        next.srsRatings += 1;
    }
    return next;
}
/** 正确率（0–100 整数；分母为 0 时返回 null，界面显示 “—”） */
function rate(correct, total) {
    if (!total || total <= 0)
        return null;
    return Math.round((correct / total) * 100);
}
function quizRate(day) {
    return day ? rate(day.quizCorrect, day.quizItems) : null;
}
function examRate(day) {
    return day ? rate(day.examCorrect, day.examItems) : null;
}
/** 活跃度：只统计真实学习动作，SRS 重复评级不重复加权 */
function dayActivity(day) {
    if (!day)
        return 0;
    return day.newWords + day.reviewed + day.quizItems + day.examItems;
}
function totalsOf(days) {
    const total = {
        newWords: 0,
        reviewed: 0,
        quizItems: 0,
        quizCorrect: 0,
        examItems: 0,
        examCorrect: 0,
        srsRatings: 0,
    };
    for (const day of Object.values(days)) {
        total.newWords += day.newWords || 0;
        total.reviewed += day.reviewed || 0;
        total.quizItems += day.quizItems || 0;
        total.quizCorrect += day.quizCorrect || 0;
        total.examItems += day.examItems || 0;
        total.examCorrect += day.examCorrect || 0;
        total.srsRatings += day.srsRatings || 0;
    }
    return total;
}
/** 连续打卡天数：从今天往回数，遇到没有学习动作的一天就停 */
function streakOf(days, today = dateKey(), maxLookback = 400) {
    let count = 0;
    for (let i = 0; i < maxLookback; i += 1) {
        const key = dateKey(addDays(new Date(today + 'T00:00:00').getTime(), -i));
        if (dayActivity(days[key]) > 0)
            count += 1;
        else if (i > 0)
            break;
    }
    return count;
}
/** 按 attempts 重建每日统计（用于旧数据迁移） */
function rebuildDaysFromAttempts(attempts) {
    const days = {};
    for (const attempt of attempts) {
        const key = dateKey(attempt.ts);
        const day = days[key] ?? emptyDay(key);
        days[key] = addAttempt(day, attempt);
    }
    return days;
}
/**
 * v1 → v2 迁移：
 * - attempts 补齐 category / part 字段；
 * - 每日统计以 attempts 重建 quiz/exam/srs 分桶，再叠加旧 day 里可信的 newWords / reviewed；
 * - 旧字段 tests / correct / attempts 语义混淆（把复习也算成测试），无法拆分，直接丢弃。
 */
function migrateStatsState(raw) {
    const source = (raw ?? {});
    const attempts = [];
    for (const item of source.attempts ?? []) {
        if (!item || typeof item.ts !== 'number' || typeof item.mode !== 'string')
            continue;
        const mode = item.mode;
        attempts.push({
            id: item.id ?? 'a_' + item.ts + '_' + Math.random().toString(36).slice(2, 7),
            ts: item.ts,
            mode,
            category: categoryOf(mode),
            wordId: item.wordId,
            session: item.session,
            part: item.part,
            correct: Boolean(item.correct),
            ms: item.ms ?? 0,
        });
    }
    const days = rebuildDaysFromAttempts(attempts);
    for (const [key, legacy] of Object.entries(source.days ?? {})) {
        const day = days[key] ?? emptyDay(key);
        days[key] = {
            ...day,
            newWords: Number(legacy?.newWords) || 0,
            reviewed: Number(legacy?.reviewed) || 0,
        };
    }
    return { days, attempts };
}

const MASTER_INTERVAL_DAYS = 21;
function wordCounts(progress, total, now = Date.now()) {
    let learned = 0;
    let mastered = 0;
    let due = 0;
    for (const p of Object.values(progress)) {
        const seen = p.seen ?? 0;
        if (seen <= 0)
            continue;
        learned += 1;
        if ((p.interval ?? 0) >= MASTER_INTERVAL_DAYS)
            mastered += 1;
        if (p.status !== 'new' && p.due <= now)
            due += 1;
    }
    const safeTotal = Math.max(0, total);
    return {
        total: safeTotal,
        learned,
        mastered,
        due,
        learning: Math.max(0, learned - mastered),
        remainingNew: Math.max(0, safeTotal - learned),
    };
}
/**
 * 每日新词计划：
 * - daysLeft = 考试日 − 今天（不小于 0）
 * - autoPerDay = 剩余新词 / 剩余天数（向上取整，至少 1）
 * - perDay = 手动目标优先，否则夹在 15–160 之间
 */
function planFor(opts) {
    const today = opts.today ?? dateKey();
    const daysLeft = Math.max(0, daysBetween(today, opts.examDate));
    const remainingNew = Math.max(0, opts.total - wordCounts(opts.progress, opts.total).learned);
    const autoPerDay = Math.max(1, Math.ceil(remainingNew / Math.max(1, daysLeft)));
    const manual = opts.dailyNew && opts.dailyNew > 0 ? Math.round(opts.dailyNew) : 0;
    const perDay = manual > 0 ? Math.min(200, Math.max(5, manual)) : Math.min(160, Math.max(15, autoPerDay));
    return { daysLeft, remainingNew, perDay, autoPerDay };
}

const EXAM_PARTS = ['cloze', 'matching', 'read0', 'read1'];
const PART_LABEL$1 = {
    cloze: '选词填空',
    matching: '长篇阅读',
    read0: '仔细阅读一',
    read1: '仔细阅读二',
};
function judge(no, answer, chosen, label) {
    return { no, correct: Boolean(chosen) && chosen === answer, chosen: chosen ?? '', answer, label };
}
function gradeCloze(data, answers) {
    const items = data.reading.bankedCloze.items.map((item) => judge(item.no, item.answer, answers['c' + item.no] ?? '', '选词填空 ' + item.no));
    return { part: 'cloze', right: items.filter((i) => i.correct).length, total: items.length, items };
}
function gradeMatching(data, answers) {
    const items = data.reading.matching.items.map((item) => judge(item.no, item.answer, answers['m' + item.no] ?? '', '信息匹配 ' + item.no));
    return { part: 'matching', right: items.filter((i) => i.correct).length, total: items.length, items };
}
function gradeReading(data, index, answers) {
    const passage = data.reading.carefulReading[index];
    const part = index === 0 ? 'read0' : 'read1';
    if (!passage)
        return { part, right: 0, total: 0, items: [] };
    const items = passage.items.map((item) => judge(item.no, item.answer, answers['r' + item.no] ?? '', PART_LABEL$1[part] + ' 第 ' + item.no + ' 题'));
    return { part, right: items.filter((i) => i.correct).length, total: items.length, items };
}
function gradePart(data, part, answers) {
    if (part === 'cloze')
        return gradeCloze(data, answers);
    if (part === 'matching')
        return gradeMatching(data, answers);
    return gradeReading(data, part === 'read0' ? 0 : 1, answers);
}
/** 交卷：把四类客观题一次判完 */
function gradeAll(data, answers) {
    return EXAM_PARTS.map((part) => gradePart(data, part, answers));
}
function scoreKey(setId, part) {
    return setId + ':' + part;
}
function gradeListening(data, answers) {
    const items = [];
    for (const section of data.listening?.sections ?? []) {
        for (const item of section.items) {
            items.push(judge(item.no, item.answer, answers['l' + item.no] ?? '', '听力 ' + item.no));
        }
    }
    return { right: items.filter((i) => i.correct).length, total: items.length, items };
}
/** 整卷判分：客观题四类 + 听力（有数据才计入） */
function gradePaper(data, answers) {
    const objective = gradeAll(data, answers);
    const listening = gradeListening(data, answers);
    const items = [...objective.flatMap((p) => p.items), ...listening.items];
    const right = items.filter((i) => i.correct).length;
    return { objective, listening, right, total: items.length, items };
}
/* ---------- 主观题自评（写作 / 翻译共用四维 rubric） ---------- */
const RUBRIC_DIMENSIONS = [
    { key: 'content', label: '内容切题' },
    { key: 'structure', label: '结构连贯' },
    { key: 'language', label: '语言准确' },
    { key: 'length', label: '字数格式' },
];
const RUBRIC_MAX = 5;
/** 四维 0–5 分 → 0–100 自评分 */
function subjectiveScore(rubric) {
    const clamp = (n) => Math.max(0, Math.min(RUBRIC_MAX, Math.round(n)));
    const sum = clamp(rubric.content) + clamp(rubric.structure) + clamp(rubric.language) + clamp(rubric.length);
    return Math.round((sum / (RUBRIC_MAX * RUBRIC_DIMENSIONS.length)) * 100);
}
/**
 * 写入成绩：返回 firstTime 表示这个「套卷 + 题型」是否是第一次判分。
 * 只有第一次判分才计入统计与作答流水，重复点「对答案」不会重复计数。
 */
function applyScore(scores, setId, result, now = Date.now()) {
    const key = scoreKey(setId, result.part);
    const firstTime = !scores[key];
    const next = { ...scores, [key]: { right: result.right, total: result.total, at: now } };
    return { scores: next, firstTime };
}
function setTotals(scores, setId) {
    const parts = {};
    let right = 0;
    let total = 0;
    for (const part of EXAM_PARTS) {
        const score = scores[scoreKey(setId, part)];
        if (!score)
            continue;
        parts[part] = score;
        right += score.right;
        total += score.total;
    }
    return { right, total, parts };
}
function wrongText(result) {
    return result.items
        .filter((item) => !item.correct)
        .map((item) => item.label + '（你选 ' + (item.chosen || '空') + '，正确 ' + item.answer + '）');
}

/** 130 分钟整卷：写作 30 + 听力 25 + 阅读 40 + 翻译 30 = 125，留 5 分钟机动 */
const MOCK_DURATION_MS = 130 * 60 * 1000;
const MOCK_PHASES = [
    { key: 'writing', label: '写作', minutes: 30 },
    { key: 'listening', label: '听力', minutes: 25 },
    { key: 'reading', label: '阅读', minutes: 40 },
    { key: 'translation', label: '翻译', minutes: 30 },
    { key: 'buffer', label: '检查', minutes: 5 },
];
function createMockSession(setId, now = Date.now()) {
    return { setId, startedAt: now, endsAt: now + MOCK_DURATION_MS, submittedAt: null, autoSubmitted: false };
}
function remainingMs(session, now = Date.now()) {
    return Math.max(0, session.endsAt - now);
}
/** 按已经过的分钟数判定当前阶段（跨阶段累计） */
function currentPhase(session, now = Date.now()) {
    if (session.submittedAt !== null)
        return 'buffer';
    const elapsedMin = Math.max(0, (now - session.startedAt) / 60000);
    let acc = 0;
    for (const phase of MOCK_PHASES) {
        acc += phase.minutes;
        if (elapsedMin < acc)
            return phase.key;
    }
    return 'buffer';
}
/** 交卷：幂等。已经交过（含自动交卷）就原样返回，避免重复记成绩 */
function submitMockSession(session, now = Date.now(), auto = false) {
    if (session.submittedAt !== null)
        return { session, firstSubmit: false };
    return { session: { ...session, submittedAt: now, autoSubmitted: auto }, firstSubmit: true };
}
function clampRubricValue(value) {
    if (!Number.isFinite(value))
        return 0;
    return Math.max(0, Math.min(RUBRIC_MAX, Math.round(value)));
}
function emptyRubric() {
    return { content: 3, structure: 3, language: 3, length: 3 };
}
function toMockRecord(draft, now = Date.now()) {
    const finishedAt = draft.session.submittedAt ?? now;
    const rubric = draft.rubric
        ? {
            content: clampRubricValue(draft.rubric.content),
            structure: clampRubricValue(draft.rubric.structure),
            language: clampRubricValue(draft.rubric.language),
            length: clampRubricValue(draft.rubric.length),
        }
        : null;
    return {
        id: draft.session.setId + ':' + draft.session.startedAt,
        setId: draft.setId,
        title: draft.title,
        startedAt: draft.session.startedAt,
        finishedAt,
        usedMs: Math.max(0, finishedAt - draft.session.startedAt),
        objectiveRight: draft.objectiveRight,
        objectiveTotal: draft.objectiveTotal,
        listeningRight: draft.listeningRight,
        listeningTotal: draft.listeningTotal,
        selfScore: rubric ? subjectiveScore(rubric) : draft.selfScore,
        rubric,
    };
}
/** 插入/覆盖一条模拟考记录（按 id 去重，最新在前，最多保留 50 条） */
function upsertMockRecord(list, record) {
    const rest = list.filter((item) => item.id !== record.id);
    return [record, ...rest].slice(0, 50);
}

const useStats = create()(persist((set, get) => ({
    days: {},
    attempts: [],
    examScores: {},
    mockRecords: [],
    logAttempt: (input) => set((state) => {
        const ts = input.ts ?? Date.now();
        const category = categoryOf(input.mode);
        const record = {
            id: 'a_' + ts + '_' + Math.random().toString(36).slice(2, 7),
            ts,
            mode: input.mode,
            category,
            wordId: input.wordId,
            session: input.session,
            part: input.part,
            correct: input.correct,
            ms: input.ms ?? 0,
        };
        const key = dateKey(ts);
        const day = addAttempt(state.days[key] ?? emptyDay(key), record);
        return {
            days: { ...state.days, [key]: day },
            attempts: [record, ...state.attempts].slice(0, 3000),
        };
    }),
    bumpDay: (patch, date) => set((state) => {
        const key = date ?? dateKey();
        const day = state.days[key] ?? emptyDay(key);
        return { days: { ...state.days, [key]: { ...day, ...patch } } };
    }),
    saveExamScore: (setId, result) => {
        const { scores, firstTime } = applyScore(get().examScores, setId, result);
        set({ examScores: scores });
        return { firstTime };
    },
    saveMockRecord: (record) => set((state) => ({ mockRecords: upsertMockRecord(state.mockRecords, record) })),
    replaceAll: (next) => {
        const migrated = migrateStatsState({ days: next.days, attempts: next.attempts });
        set({
            days: migrated.days,
            attempts: migrated.attempts,
            examScores: next.examScores ?? {},
            mockRecords: next.mockRecords ?? [],
        });
    },
    reset: () => set({ days: {}, attempts: [], examScores: {}, mockRecords: [] }),
}), {
    name: 'cet4.stats.v1',
    version: 2,
    migrate: (persisted) => {
        const migrated = migrateStatsState(persisted);
        const raw = (persisted ?? {});
        return { ...migrated, examScores: raw.examScores ?? {}, mockRecords: raw.mockRecords ?? [] };
    },
}));

const useWrong = create()(persist((set) => ({
    items: {},
    add: (id, reason) => set((state) => {
        const prev = state.items[id];
        const next = { id, count: (prev?.count ?? 0) + 1, lastAt: Date.now(), reason };
        return { items: { ...state.items, [id]: next } };
    }),
    remove: (id) => set((state) => {
        const copy = { ...state.items };
        delete copy[id];
        return { items: copy };
    }),
    clear: () => set({ items: {} }),
    replaceAll: (next) => set({ items: next }),
    reset: () => set({ items: {} }),
}), { name: 'cet4.wrong.v1' }));

function shuffle(arr, rng = Math.random) {
    const out = arr.slice();
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}
function similar(a, b) {
    let score = 0;
    if (a.pos.length && b.pos.length && a.pos[0] === b.pos[0])
        score += 2;
    const diff = Math.abs(a.w.length - b.w.length);
    score += diff === 0 ? 2 : diff <= 2 ? 1 : 0;
    if (a.w[0] === b.w[0])
        score += 1;
    return score;
}
/** 干扰项：同块词里按词性 + 长度相似度取样，排除同义/同义项重复 */
function pickDistractors(pool, target, count, rng = Math.random) {
    const banned = new Set([target.mean.trim(), target.w.toLowerCase()]);
    const candidates = pool.filter((w) => w.id !== target.id && !banned.has(w.mean.trim()) && w.mean.trim().length > 0 && w.w !== target.w);
    const scored = candidates.map((w) => ({ w, s: similar(target, w) + rng() * 0.9 }));
    scored.sort((a, b) => b.s - a.s);
    const top = scored.slice(0, Math.max(count * 6, 24)).map((x) => x.w);
    const picked = [];
    const seen = new Set();
    for (const w of shuffle(top, rng)) {
        const key = w.mean.trim();
        if (seen.has(key))
            continue;
        seen.add(key);
        picked.push(w);
        if (picked.length >= count)
            break;
    }
    return picked;
}
function buildQuestions(pool, mode, count, rng = Math.random) {
    if (pool.length < 4)
        return [];
    const targets = shuffle(pool, rng).slice(0, Math.max(1, Math.min(count, pool.length)));
    return targets.map((target) => {
        const distractors = pickDistractors(pool, target, 3, rng);
        const base = {
            mode,
            wordId: target.id,
            word: target.w,
            phon: target.us || target.uk,
            meaning: target.mean,
        };
        if (mode === 'spell') {
            return { ...base, prompt: target.mean, sub: target.pos.join(' '), options: [], answerIndex: -1 };
        }
        if (mode === 'listen') {
            const options = shuffle([target.w, ...distractors.map((d) => d.w)], rng);
            return { ...base, prompt: '', options, answerIndex: options.indexOf(target.w) };
        }
        if (mode === 'zh2en') {
            const options = shuffle([target.w, ...distractors.map((d) => d.w)], rng);
            return { ...base, prompt: target.mean, sub: target.pos.join(' '), options, answerIndex: options.indexOf(target.w) };
        }
        const options = shuffle([target.mean, ...distractors.map((d) => d.mean)], rng);
        return { ...base, prompt: target.w, sub: target.pos.join(' '), options, answerIndex: options.indexOf(target.mean) };
    });
}
function normalizeAnswer(value) {
    return value.toLowerCase().replace(/[^a-z]/g, '');
}
function checkSpelling(input, answer) {
    const a = normalizeAnswer(answer);
    return a.length > 0 && a === normalizeAnswer(input);
}
const QUIZ_MODE_LABEL = {
    en2zh: '英 → 中',
    zh2en: '中 → 英',
    spell: '拼写',
    listen: '听音选词',
};

/** 两种背词顺序：seq = 词库原顺序（正序，默认）；shuffle = 每轮从全部未学词里随机抽 */
const WORD_ORDERS = ['seq', 'shuffle'];
const ORDER_LABELS = {
    seq: '正序',
    shuffle: '乱序',
};
/** 词块的先后顺序：正序原样，乱序随机排列（决定先看哪一块） */
function orderChunks(chunks, order, rng = Math.random) {
    return order === 'shuffle' ? shuffle(chunks, rng) : chunks.slice();
}
/** 块内顺序 / 队列顺序：正序原样，乱序随机排列（总是返回新数组，不改入参） */
function orderWords(items, order, rng = Math.random) {
    return order === 'shuffle' ? shuffle(items, rng) : items.slice();
}

function SectionTitle({ title, hint, right }) {
    return (jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-end justify-between gap-3", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h2", { className: "font-serif text-lg font-medium text-ink-100 sm:text-xl", children: title }), hint ? jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ink-500", children: hint }) : null] }), right] }));
}
function Stat({ label, value, hint }) {
    return (jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: label }), jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-2xl font-semibold text-ink-100", children: value }), hint ? jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-ink-500", children: hint }) : null] }));
}
function Ring({ ratio, size = 140, stroke = 12, label, sub, }) {
    const clamped = Math.max(0, Math.min(1, Number.isFinite(ratio) ? ratio : 0));
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    return (jsxRuntimeExports.jsxs("div", { className: "relative inline-flex items-center justify-center", style: { width: size, height: size }, children: [jsxRuntimeExports.jsxs("svg", { width: size, height: size, className: "-rotate-90", children: [jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", strokeWidth: stroke, style: { stroke: 'rgb(var(--c-ink-800))' } }), jsxRuntimeExports.jsx("circle", { cx: size / 2, cy: size / 2, r: r, fill: "none", strokeWidth: stroke, strokeLinecap: "round", strokeDasharray: c, strokeDashoffset: c * (1 - clamped), style: {
                            stroke: 'rgb(var(--c-accent))',
                            transition: 'stroke-dashoffset 420ms cubic-bezier(0.22,1,0.36,1)',
                        } })] }), jsxRuntimeExports.jsxs("div", { className: "absolute flex flex-col items-center", children: [jsxRuntimeExports.jsx("span", { className: "font-mono text-xl font-semibold text-ink-100", children: label }), sub ? jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-[10px] uppercase tracking-wider text-ink-500", children: sub }) : null] })] }));
}
function EmptyState({ title, desc, action }) {
    return (jsxRuntimeExports.jsxs("div", { className: "card card-pad flex flex-col items-center gap-3 py-14 text-center", children: [jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "\u2727" }), jsxRuntimeExports.jsx("div", { className: "font-serif text-lg text-ink-100", children: title }), desc ? jsxRuntimeExports.jsx("p", { className: "max-w-md text-sm leading-relaxed text-ink-400", children: desc }) : null, action ? jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap justify-center gap-2", children: action }) : null] }));
}
function Loading({ text = '正在加载数据…' }) {
    return (jsxRuntimeExports.jsxs("div", { className: "card card-pad flex flex-col items-center gap-3 py-16 text-center", children: [jsxRuntimeExports.jsx("div", { className: "h-6 w-6 animate-spin rounded-full border-2 border-ink-700 border-t-accent" }), jsxRuntimeExports.jsx("div", { className: "text-sm text-ink-400", children: text })] }));
}
function ErrorBox({ message, onRetry }) {
    return (jsxRuntimeExports.jsxs("div", { className: "card card-pad border-red-500/30 bg-red-500/5", children: [jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-red-300", children: "\u6570\u636E\u6CA1\u52A0\u8F7D\u6210\u529F" }), jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs leading-relaxed text-red-200/80", children: [message, jsxRuntimeExports.jsx("br", {}), "\u8BF7\u786E\u8BA4\u5DF2\u8FD0\u884C ", jsxRuntimeExports.jsx("code", { className: "font-mono", children: "npm run dev" }), "\uFF0C\u5E76\u4E14 ", jsxRuntimeExports.jsx("code", { className: "font-mono", children: "public/data/" }), " \u4E0B\u6709\u6570\u636E\u6587\u4EF6\u3002"] }), onRetry ? (jsxRuntimeExports.jsx("button", { className: "btn btn-sm mt-3", onClick: onRetry, children: "\u91CD\u8BD5" })) : null] }));
}
function ChipButton({ active, onClick, children, }) {
    return (jsxRuntimeExports.jsx("button", { type: "button", onClick: onClick, className: 'chip ' + (active ? 'chip-active' : ''), children: children }));
}
/** 正序 / 乱序二选一：学习页与复习页共用，改动直接写进设置（持久化） */
function OrderSwitch({ value, onChange, label = '背词顺序', }) {
    return (jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1", role: "group", "aria-label": label, children: WORD_ORDERS.map((key) => (jsxRuntimeExports.jsx("button", { type: "button", className: 'chip ' + (value === key ? 'chip-active' : ''), "aria-pressed": value === key, title: key === 'seq' ? '按词库原顺序背，进度可预期' : '每轮从全部未学词里随机抽，避免总在 A 开头的词里打转', onClick: () => onChange(key), children: ORDER_LABELS[key] }, key))) }));
}
function Bar({ ratio }) {
    const pct = Math.max(0, Math.min(100, Math.round(ratio * 100)));
    return (jsxRuntimeExports.jsx("div", { className: "h-1.5 w-full overflow-hidden rounded-full bg-ink-800", children: jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-accent transition-[width] duration-300", style: { width: pct + '%' } }) }));
}

function Today() {
    const [index, setIndex] = reactExports.useState(null);
    const settings = useSettings();
    const words = useProgress((s) => s.words);
    const days = useStats((s) => s.days);
    const wrongItems = useWrong((s) => s.items);
    reactExports.useEffect(() => {
        loadWordIndex()
            .then(setIndex)
            .catch(() => setIndex(null));
    }, []);
    const today = dateKey();
    const todayStat = days[today] ?? emptyDay(today);
    const total = index?.total ?? 0;
    const counts = reactExports.useMemo(() => wordCounts(words, total), [words, total]);
    const plan = reactExports.useMemo(() => planFor({ progress: words, total, examDate: settings.examDate, today, dailyNew: settings.dailyNew }), [words, total, settings.examDate, settings.dailyNew, today]);
    const learned = counts.learned;
    const due = counts.due;
    const newToday = todayStat.newWords;
    const dailyNew = plan.perDay;
    const daysLeft = plan.daysLeft;
    // 首页正确率只看「词汇测试」，不再混入复习评级与真题作答
    const accuracy = quizRate(todayStat);
    return (jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [jsxRuntimeExports.jsxs("section", { className: "grid gap-4 lg:grid-cols-[1.4fr_1fr]", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad relative overflow-hidden", children: [jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent via-accent/40 to-transparent" }), jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "\u8DDD\u79BB\u56DB\u7EA7\u7B14\u8BD5\u8FD8\u6709" }), jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-end gap-3", children: [jsxRuntimeExports.jsx("span", { className: "font-mono text-[64px] font-semibold leading-none text-ink-100", children: daysLeft }), jsxRuntimeExports.jsx("span", { className: "pb-2 text-sm text-ink-400", children: "\u5929" })] }), jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-ink-400", children: [formatDateCn(settings.examDate), " \u00B7 09:00\u201311:20"] }), jsxRuntimeExports.jsxs("div", { className: "mt-5 text-sm leading-relaxed text-ink-300", children: ["\u8FD8\u6709 ", jsxRuntimeExports.jsx("span", { className: "font-semibold text-ink-100", children: plan.remainingNew }), " \u4E2A\u8BCD\u6CA1\u89C1\u8FC7\u3002 \u6309\u5269\u4F59\u5929\u6570\u7B97\uFF0C\u6BCF\u5929 ", jsxRuntimeExports.jsx("span", { className: "font-semibold text-accent", children: plan.autoPerDay }), " \u4E2A\u80FD\u521A\u597D\u8FC7\u5B8C\u4E00\u8F6E\uFF1B \u5F53\u524D\u76EE\u6807\u662F\u6BCF\u5929 ", jsxRuntimeExports.jsx("span", { className: "font-semibold text-ink-100", children: dailyNew }), " \u4E2A\u3002"] }), jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-2", children: [jsxRuntimeExports.jsx(Link, { className: "btn btn-primary", to: "/study", children: "\u5F00\u59CB\u4ECA\u5929\u7684\u8BCD" }), jsxRuntimeExports.jsxs(Link, { className: "btn", to: "/review", children: ["\u590D\u4E60\u5230\u70B9 ", due > 0 ? '(' + due + ')' : ''] }), jsxRuntimeExports.jsx(Link, { className: "btn btn-ghost", to: "/test", children: "\u505A\u4E00\u7EC4\u6D4B\u8BD5" }), jsxRuntimeExports.jsx(Link, { className: "btn btn-ghost", to: "/mock", children: "\u5B8C\u6574\u6A21\u62DF\u8003" }), jsxRuntimeExports.jsx(Link, { className: "btn btn-ghost", to: "/drill", children: "\u8BAD\u7EC3\u573A" })] })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad flex flex-col items-center justify-center gap-3", children: [jsxRuntimeExports.jsx(Ring, { ratio: dailyNew ? newToday / dailyNew : 0, label: newToday + '/' + dailyNew, sub: "\u4ECA\u65E5\u65B0\u8BCD" }), jsxRuntimeExports.jsxs("div", { className: "w-full", children: [jsxRuntimeExports.jsx(Bar, { ratio: learned && total ? learned / total : 0 }), jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-[11px] text-ink-500", children: [jsxRuntimeExports.jsxs("span", { children: ["\u5DF2\u5B66 ", learned, " / ", total || '—'] }), jsxRuntimeExports.jsxs("span", { children: [learned && total ? Math.round((learned / total) * 100) : 0, "%"] })] })] })] })] }), jsxRuntimeExports.jsxs("section", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: [jsxRuntimeExports.jsx(Stat, { label: "\u5230\u671F\u590D\u4E60", value: due, hint: due > 0 ? '建议先清复习' : '暂无到期' }), jsxRuntimeExports.jsx(Stat, { label: "\u5B66\u4E60\u4E2D", value: counts.learning, hint: "\u672A\u5230 21 \u5929\u95F4\u9694" }), jsxRuntimeExports.jsx(Stat, { label: "\u5DF2\u638C\u63E1", value: counts.mastered, hint: "\u95F4\u9694 \u2265 21 \u5929" }), jsxRuntimeExports.jsx(Stat, { label: "\u4ECA\u65E5\u6D4B\u8BD5\u6B63\u786E\u7387", value: accuracy === null ? '—' : accuracy + '%', hint: todayStat.quizItems ? todayStat.quizItems + ' 题词汇测试' : '还没做测试' })] }), jsxRuntimeExports.jsxs("section", { className: "grid gap-4 lg:grid-cols-2", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u4ECA\u5929\u600E\u4E48\u5B89\u6392", hint: "\u6309 53 \u5929\u5012\u6392\u7684\u8282\u594F" }), jsxRuntimeExports.jsxs("ol", { className: "space-y-3 text-sm text-ink-300", children: [jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded bg-accent-dim text-[11px] font-bold text-accent", children: "1" }), jsxRuntimeExports.jsxs("span", { children: ["\u5148\u6E05 ", jsxRuntimeExports.jsx("b", { className: "text-ink-100", children: due }), " \u4E2A\u5230\u671F\u590D\u4E60\uFF08\u95F4\u9694\u91CD\u590D\u7684\u5173\u952E\uFF09\uFF0C\u518D\u80CC ", dailyNew, " \u4E2A\u65B0\u8BCD\u3002"] })] }), jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded bg-accent-dim text-[11px] font-bold text-accent", children: "2" }), jsxRuntimeExports.jsxs("span", { children: ["\u505A ", settings.sessionSize, " \u9898\u8BCD\u6C47\u6D4B\u8BD5\uFF0C\u9519\u9898\u81EA\u52A8\u8FDB\u9519\u9898\u672C\u3002"] })] }), jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [jsxRuntimeExports.jsx("span", { className: "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded bg-accent-dim text-[11px] font-bold text-accent", children: "3" }), jsxRuntimeExports.jsx("span", { children: "\u6709\u7A7A\u5C31\u5237\u4E00\u5957\u771F\u9898\u9605\u8BFB\uFF0830 \u9898\uFF09\uFF0C\u7FFB\u8BD1\u4E0E\u5199\u4F5C\u6BCF\u5468\u5404 2 \u6B21\u3002" })] })] })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u6700\u8FD1\u9519\u8BCD", hint: "\u70B9\u8FDB\u9519\u9898\u672C\u96C6\u4E2D\u5904\u7406", right: jsxRuntimeExports.jsx(Link, { className: "text-xs text-ink-400 hover:text-accent", to: "/wrong", children: "\u5168\u90E8 \u2192" }) }), Object.keys(wrongItems).length === 0 ? (jsxRuntimeExports.jsx("p", { className: "text-sm text-ink-500", children: "\u8FD8\u6CA1\u6709\u9519\u9898\u3002\u505A\u6D4B\u8BD5\u65F6\u7B54\u9519\u7684\u8BCD\u4F1A\u81EA\u52A8\u6536\u8FDB\u6765\u3002" })) : (jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: Object.values(wrongItems)
                                    .sort((a, b) => b.lastAt - a.lastAt)
                                    .slice(0, 4)
                                    .map((item) => (jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-lg bg-ink-850/60 px-3 py-2 text-xs", children: [jsxRuntimeExports.jsx("span", { className: "font-mono text-ink-300", children: item.id }), jsxRuntimeExports.jsxs("span", { className: "text-ink-500", children: ["\u9519 ", item.count, " \u6B21"] })] }, item.id))) }))] })] })] }));
}

let allPromise = null;
function getAllWords() {
    if (!allPromise)
        allPromise = loadAllWords();
    return allPromise;
}
async function loadWordsByIds(ids) {
    const wanted = new Set(ids);
    if (!wanted.size)
        return [];
    const index = await loadWordIndex();
    const byId = new Map();
    for (const chunk of index.chunks) {
        if (byId.size >= wanted.size)
            break;
        const words = await loadWordsByChunk(chunk.n);
        for (const w of words) {
            if (wanted.has(w.id))
                byId.set(w.id, w);
        }
    }
    return ids.map((id) => byId.get(id)).filter((w) => Boolean(w));
}
/**
 * 取未学过的词，够 limit 就停，避免一次性加载全部数据。
 * - order='seq'（默认）：按词块顺序、块内原顺序取，即「正序」；
 * - order='shuffle'：先随机排列词块顺序，再打乱块内顺序，等于从全部未学词里随机抽一组。
 *   因为 limit 通常远小于一块 600 词，乱序一般只加载一块，不会把整个词库拉下来。
 */
async function loadFreshWords(known, limit, order = 'seq', rng) {
    const index = await loadWordIndex();
    const out = [];
    const chunkNos = orderChunks(index.chunks.map((chunk) => chunk.n), order, rng);
    for (const n of chunkNos) {
        if (out.length >= limit)
            break;
        const words = orderWords(await loadChunk(n), order, rng);
        for (const w of words) {
            if (out.length >= limit)
                break;
            if (!known.has(w.id))
                out.push(w);
        }
    }
    return out;
}

function wordAudioUrl(word, accent = 'us') {
    const type = accent === 'uk' ? 1 : 2;
    return 'https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(word) + '&type=' + type;
}
let current = null;
/** 优先有道音源，失败回退浏览器 TTS */
function playWord(word, accent = 'us') {
    if (!word)
        return;
    try {
        if (current) {
            current.pause();
            current = null;
        }
        const audio = new Audio(wordAudioUrl(word, accent));
        current = audio;
        audio.onerror = () => speak(word);
        void audio.play().catch(() => speak(word));
    }
    catch {
        speak(word);
    }
}
function speak(text) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window))
        return;
    try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'en-US';
        u.rate = 0.92;
        window.speechSynthesis.speak(u);
    }
    catch {
        /* 忽略：无语音环境 */
    }
}

const DEFAULT_GAP_MS = 18;
/**
 * 三个评级各一套音效，靠「音高走向 + 音色」双重区分，闭眼也听得出来：
 * - 不认识：低音下滑（锯齿波，闷）——「没记住」
 * - 模糊：中音双响、原地不动（三角波，平）——「含糊」
 * - 认识：高音三连上行（正弦波，亮）——「会了」
 */
const GRADE_SFX = {
    unknown: [
        { freq: 329.63, ms: 110, wave: 'sawtooth', gain: 0.05 },
        { freq: 220.0, ms: 190, wave: 'sawtooth', gain: 0.05 },
    ],
    vague: [
        { freq: 415.3, ms: 95, wave: 'triangle', gain: 0.07 },
        { freq: 415.3, ms: 95, wave: 'triangle', gain: 0.07, gap: 34 },
    ],
    know: [
        { freq: 523.25, ms: 70, wave: 'sine', gain: 0.09 },
        { freq: 659.25, ms: 70, wave: 'sine', gain: 0.09 },
        { freq: 783.99, ms: 130, wave: 'sine', gain: 0.09 },
    ],
};
function isSfxSupported() {
    if (typeof window === 'undefined')
        return false;
    const w = window;
    return typeof w.AudioContext === 'function' || typeof w.webkitAudioContext === 'function';
}
let sharedCtx = null;
function getContext() {
    if (!isSfxSupported())
        return null;
    const w = window;
    const Ctor = (w.AudioContext ?? w.webkitAudioContext);
    if (!sharedCtx) {
        try {
            sharedCtx = new Ctor();
        }
        catch {
            return null;
        }
    }
    return sharedCtx;
}
/**
 * 播放某个评级的音效。用 WebAudio 现场合成，不依赖任何音频文件（离线可用、零请求）。
 * 必须在用户手势（点击评级按钮）里调用，否则 iOS Safari 不放行。
 * 返回是否真的发声（用于测试与降级判断）。
 */
function playGradeSfx(grade, options = {}) {
    if (options.enabled === false)
        return false;
    const notes = GRADE_SFX[grade];
    if (!notes || !notes.length)
        return false;
    const ac = getContext();
    if (!ac)
        return false;
    try {
        if (ac.state === 'suspended')
            void ac.resume();
        let cursor = ac.currentTime + 0.01;
        for (const note of notes) {
            const osc = ac.createOscillator();
            const amp = ac.createGain();
            const start = cursor;
            const end = start + note.ms / 1000;
            osc.type = note.wave;
            osc.frequency.setValueAtTime(note.freq, start);
            amp.gain.setValueAtTime(0.0001, start);
            amp.gain.exponentialRampToValueAtTime(Math.max(0.0001, note.gain), start + 0.012);
            amp.gain.exponentialRampToValueAtTime(0.0001, end);
            osc.connect(amp);
            amp.connect(ac.destination);
            osc.start(start);
            osc.stop(end + 0.02);
            cursor = end + (note.gap ?? DEFAULT_GAP_MS) / 1000;
        }
        return true;
    }
    catch {
        return false;
    }
}

const cache = new Map();
function chunkOfId(id) {
    const seq = Number(id.replace(/[^0-9]/g, '')) || 1;
    return Math.max(1, Math.ceil(seq / 600));
}
function loadDetailForChunk(n) {
    const hit = cache.get(n);
    if (hit)
        return hit;
    const task = loadDetail(n);
    cache.set(n, task);
    return task;
}

const GRADES = [
    {
        grade: 'unknown',
        label: '不认识',
        cls: 'hover:border-red-500/70 hover:text-red-200 active:bg-red-500/10',
        dot: 'bg-red-400',
        tip: '低音下滑',
    },
    {
        grade: 'vague',
        label: '模糊',
        cls: 'hover:border-amber-400/70 hover:text-amber-200 active:bg-amber-400/10',
        dot: 'bg-amber-300',
        tip: '中音双响',
    },
    {
        grade: 'know',
        label: '认识',
        cls: 'hover:border-accent/70 hover:text-accent active:bg-accent/10',
        dot: 'bg-accent',
        tip: '高音上行',
    },
];
function WordSession({ words, kind, onFinished }) {
    const [queue, setQueue] = reactExports.useState(words);
    const [index, setIndex] = reactExports.useState(0);
    const [finished, setFinished] = reactExports.useState(false);
    const [detail, setDetail] = reactExports.useState(null);
    const counted = reactExports.useRef(new Set());
    const shownAt = reactExports.useRef(Date.now());
    const accent = useSettings((s) => s.accent);
    const hideMeaning = useSettings((s) => s.hideMeaning);
    const sfxOn = useSettings((s) => s.sfx);
    const bumpDay = useStats((s) => s.bumpDay);
    const logAttempt = useStats((s) => s.logAttempt);
    // 释义区默认与三个评级按钮同屏展示；只有开启「先隐藏释义」时才需要手动翻开
    const [revealed, setRevealed] = reactExports.useState(!hideMeaning);
    const current = queue[index];
    const progressMap = useProgress((s) => s.words);
    const card = current ? progressMap[current.id] ?? null : null;
    reactExports.useEffect(() => {
        shownAt.current = Date.now();
        setRevealed(!hideMeaning);
        if (!current)
            return;
        let alive = true;
        setDetail(null);
        loadDetailForChunk(chunkOfId(current.id))
            .then((map) => {
            if (alive)
                setDetail(map[current.id] ?? null);
        })
            .catch(() => {
            /* 详情加载失败不影响主流程 */
        });
        return () => {
            alive = false;
        };
    }, [current, hideMeaning]);
    const intervals = reactExports.useMemo(() => {
        if (!card)
            return null;
        return previewIntervals(card);
    }, [card]);
    const advance = reactExports.useCallback(() => {
        if (index + 1 >= queue.length) {
            setFinished(true);
            onFinished?.();
        }
        else {
            setIndex((i) => i + 1);
        }
    }, [index, queue.length, onFinished]);
    const grade = reactExports.useCallback((g) => {
        if (!current)
            return;
        // 三个评级各有独立音效；设置里可关掉
        playGradeSfx(g, { enabled: sfxOn });
        const prevCard = useProgress.getState().get(current.id);
        const wasNew = !prevCard || (prevCard.seen ?? 0) === 0;
        useProgress.getState().grade(current.id, g);
        // 新词 / 复习口径按「这个词此前是否见过」判定，而不是按当前页面
        if (!counted.current.has(current.id)) {
            counted.current.add(current.id);
            bumpDay(wasNew ? { newWords: 1 } : { reviewed: 1 });
        }
        logAttempt({ mode: 'srs', wordId: current.id, correct: g !== 'unknown', ms: Date.now() - shownAt.current });
        if (g === 'unknown') {
            setQueue((q) => [...q, current]);
        }
        advance();
    }, [current, bumpDay, logAttempt, advance, sfxOn]);
    reactExports.useEffect(() => {
        const onKey = (event) => {
            if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement)
                return;
            if (finished)
                return;
            if (event.code === 'Space') {
                event.preventDefault();
                if (!revealed)
                    setRevealed(true);
                else if (current)
                    playWord(current.w, accent);
            }
            else if (event.key === '1' || event.key === '2' || event.key === '3') {
                const map = { '1': 'unknown', '2': 'vague', '3': 'know' };
                grade(map[event.key]);
            }
            else if (event.key.toLowerCase() === 's' && current) {
                playWord(current.w, accent);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [grade, revealed, finished, current, accent]);
    if (!words.length)
        return null;
    if (finished) {
        return (jsxRuntimeExports.jsxs("div", { className: "card card-pad animate-fade-up py-14 text-center", children: [jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "\u2713" }), jsxRuntimeExports.jsx("div", { className: "mt-3 font-serif text-xl text-ink-100", children: kind === 'new' ? '这一组新词过完了' : '到期的复习清空了' }), jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-ink-400", children: ["\u5DF2\u8BB0\u5F55 ", counted.current.size, " \u4E2A\u8BCD \u00B7 \u53BB\u6D4B\u8BD5\u68C0\u9A8C\u4E00\u4E0B\uFF0C\u6216\u8005\u770B\u770B\u4ECA\u5929\u7684\u7EDF\u8BA1\u3002"] }), jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#/test", children: "\u505A\u4E00\u7EC4\u6D4B\u8BD5" }), jsxRuntimeExports.jsx("a", { className: "btn", href: "#/stats", children: "\u67E5\u770B\u7EDF\u8BA1" })] })] }));
    }
    const ratio = queue.length ? index / queue.length : 0;
    const box = card ? card.interval + ' 天间隔' : '新词';
    return (jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-3", children: [jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-ink-400", children: [index + 1, " / ", queue.length] }), jsxRuntimeExports.jsx("div", { className: "flex-1", children: jsxRuntimeExports.jsx(Bar, { ratio: ratio }) }), jsxRuntimeExports.jsx("span", { className: "text-[11px] text-ink-500", children: box })] }), jsxRuntimeExports.jsxs("div", { className: "card relative overflow-hidden", children: [jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-accent/70 via-accent/25 to-transparent" }), jsxRuntimeExports.jsxs("div", { className: "px-5 pt-5 sm:px-8 sm:pt-7", children: [jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("span", { className: "eyebrow", children: kind === 'new' ? '新词' : '复习' }), jsxRuntimeExports.jsx("span", { className: "text-[11px] text-ink-500", children: card ? '已学 ' + card.seen + ' 次' : '首次见面' })] }), jsxRuntimeExports.jsxs("div", { className: "mt-3 text-center", children: [jsxRuntimeExports.jsx("div", { className: "word-display", children: current?.w }), jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-center gap-4 text-xs", children: [current?.us ? jsxRuntimeExports.jsxs("span", { className: "phon", children: ["US /", current.us, "/"] }) : null, current?.uk ? jsxRuntimeExports.jsxs("span", { className: "phon", children: ["UK /", current.uk, "/"] }) : null] }), jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-2", children: [jsxRuntimeExports.jsx("button", { type: "button", onClick: () => current && playWord(current.w, accent), className: "flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition hover:border-accent/60 hover:text-accent", "aria-label": "\u6717\u8BFB", children: "\uD83D\uDD0A" }), current?.pos?.length ? jsxRuntimeExports.jsx("span", { className: "chip", children: current.pos.join(' · ') }) : null] })] })] }), jsxRuntimeExports.jsx("div", { className: "mt-4 max-h-[38vh] overflow-y-auto px-5 pb-1 sm:max-h-[42vh] sm:px-8", children: revealed ? (jsxRuntimeExports.jsxs("div", { className: "animate-fade-in space-y-3 text-left sm:mx-auto sm:max-w-xl", children: [jsxRuntimeExports.jsx("div", { className: "text-center text-lg font-semibold leading-relaxed text-ink-100 sm:text-xl", children: current?.mean }), detail?.trans?.length ? (jsxRuntimeExports.jsx("div", { className: "space-y-1.5 text-sm text-ink-300", children: detail.trans.map((t, i) => (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { children: [t.pos ? jsxRuntimeExports.jsxs("span", { className: "mr-1.5 font-mono text-[11px] text-ink-500", children: [t.pos, "."] }) : null, t.cn] }), t.en ? jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[11px] leading-relaxed text-ink-500", children: t.en }) : null] }, i))) })) : null, detail?.sentences?.length ? (jsxRuntimeExports.jsx("div", { className: "space-y-2 rounded-xl bg-ink-850/60 p-3", children: detail.sentences.slice(0, 2).map((s, i) => (jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [jsxRuntimeExports.jsx("div", { className: "text-ink-200", children: s.en }), jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-ink-500", children: s.zh })] }, i))) })) : null, detail?.phrases?.length ? (jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: detail.phrases.slice(0, 4).map((p, i) => (jsxRuntimeExports.jsxs("span", { className: "chip", children: [p.en, jsxRuntimeExports.jsx("span", { className: "text-ink-500", children: p.zh })] }, i))) })) : null, detail?.memory ? jsxRuntimeExports.jsxs("div", { className: "text-xs text-ink-500", children: ["\u8BB0\u5FC6\uFF1A", detail.memory] }) : null] })) : (jsxRuntimeExports.jsxs("button", { type: "button", className: "btn btn-primary mx-auto flex min-w-[190px]", onClick: () => setRevealed(true), children: ["\u663E\u793A\u91CA\u4E49", jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] opacity-60", children: "Space" })] })) }), jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-3 gap-2 px-4 pb-4 pt-3 sm:px-6 sm:pb-5", children: GRADES.map((g) => (jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => grade(g.grade), className: 'flex min-h-[56px] flex-col items-center justify-center gap-0.5 rounded-xl border border-ink-700 bg-ink-850 px-2 py-2 text-sm font-semibold text-ink-200 transition ' +
                                g.cls, title: '音效：' + g.tip, children: [jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [jsxRuntimeExports.jsx("span", { className: 'h-1.5 w-1.5 rounded-full ' + g.dot }), g.label] }), jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-normal text-ink-500", children: intervals ? intervals[g.grade] : '' })] }, g.grade))) })] }), jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between gap-2 text-[11px] text-ink-500", children: [jsxRuntimeExports.jsx("span", { children: revealed ? '快捷键：1/2/3 评级 · Space 发音 · S 发音' : '快捷键：Space 显示释义 · S 发音' }), jsxRuntimeExports.jsx("span", { className: sfxOn ? '' : 'opacity-60', children: sfxOn ? '音效开' : '音效关' })] })] }));
}

const EXTRA_ROUND = 10;
function Study() {
    const settings = useSettings();
    const update = useSettings((s) => s.update);
    const progressWords = useProgress((s) => s.words);
    const days = useStats((s) => s.days);
    const [batch, setBatch] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [round, setRound] = reactExports.useState(0);
    const order = settings.wordOrder;
    const newToday = days[dateKey()]?.newWords ?? 0;
    const remainingToday = Math.max(0, settings.dailyNew - newToday);
    const target = remainingToday > 0 ? remainingToday : EXTRA_ROUND;
    const load = reactExports.useCallback(() => {
        setBatch(null);
        setError(null);
        const known = new Set(Object.keys(progressWords).filter((id) => (progressWords[id]?.seen ?? 0) > 0));
        loadFreshWords(known, target, order)
            .then((words) => setBatch(words))
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, [progressWords, target, order]);
    reactExports.useEffect(() => {
        load();
    }, [load, round]);
    return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u5B66\u4E60\u65B0\u8BCD", hint: (remainingToday > 0
                    ? '今天还差 ' + remainingToday + ' 个新词达标（本组 ' + target + ' 个'
                    : '今天的新词已达标，这是额外加练的一组（' + EXTRA_ROUND + ' 个') +
                    ' · ' +
                    ORDER_LABELS[order] +
                    '）', right: jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntimeExports.jsx(OrderSwitch, { value: order, onChange: (next) => update({ wordOrder: next }) }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost", onClick: () => setRound((r) => r + 1), children: "\u6362\u4E00\u7EC4" })] }) }), error ? jsxRuntimeExports.jsx(ErrorBox, { message: error, onRetry: load }) : null, !error && !batch ? jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u53D6\u4E0B\u4E00\u6279\u8BCD\u2026" }) : null, !error && batch && batch.length === 0 ? (jsxRuntimeExports.jsx(EmptyState, { title: "\u8BCD\u8868\u5DF2\u7ECF\u8FC7\u5B8C\u4E00\u6574\u8F6E", desc: "\u6240\u6709\u8BCD\u90FD\u81F3\u5C11\u89C1\u8FC7\u4E00\u6B21\u4E86\u3002\u63A5\u4E0B\u6765\u9760\u590D\u4E60\u4E0E\u6D4B\u8BD5\u5DE9\u56FA\uFF1A\u5230\u70B9\u590D\u4E60\u4F1A\u6309\u95F4\u9694\u91CD\u590D\u4E0D\u65AD\u51FA\u73B0\uFF0C\u6D4B\u8BD5\u80FD\u66B4\u9732\u8FD8\u6CA1\u8BB0\u7262\u7684\u8BCD\u3002", action: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#/review", children: "\u53BB\u590D\u4E60" }), jsxRuntimeExports.jsx("a", { className: "btn", href: "#/test", children: "\u53BB\u505A\u6D4B\u8BD5" })] }) })) : null, !error && batch && batch.length > 0 ? (jsxRuntimeExports.jsx(WordSession, { words: batch, kind: "new", onFinished: () => setRound((r) => r + 1) }, round + '-' + batch.length)) : null] }));
}

function Review() {
    const progressWords = useProgress((s) => s.words);
    const order = useSettings((s) => s.wordOrder);
    const update = useSettings((s) => s.update);
    const [words, setWords] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [round, setRound] = reactExports.useState(0);
    const load = reactExports.useCallback(() => {
        setWords(null);
        setError(null);
        const ids = dueIds(progressWords);
        if (!ids.length) {
            setWords([]);
            return;
        }
        loadWordsByIds(orderWords(ids, order))
            .then(setWords)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, [progressWords, order]);
    reactExports.useEffect(() => {
        load();
    }, [load, round]);
    return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u590D\u4E60\u961F\u5217", hint: words?.length
                    ? order === 'seq'
                        ? '按到期时间排序，先清最久没复习的'
                        : '乱序复习：到期词每轮顺序都不同'
                    : '到期时间 = 上次评分 + 间隔', right: jsxRuntimeExports.jsx(OrderSwitch, { value: order, onChange: (next) => update({ wordOrder: next }), label: "\u590D\u4E60\u987A\u5E8F" }) }), error ? jsxRuntimeExports.jsx(ErrorBox, { message: error, onRetry: load }) : null, !error && !words ? jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u6574\u7406\u590D\u4E60\u961F\u5217\u2026" }) : null, !error && words && words.length === 0 ? (jsxRuntimeExports.jsx(EmptyState, { title: "\u6682\u65F6\u6CA1\u6709\u5230\u671F\u7684\u8BCD", desc: "\u95F4\u9694\u91CD\u590D\u7684\u590D\u4E60\u4F1A\u5728 1 \u5929\u540E\u9646\u7EED\u5230\u70B9\u3002\u73B0\u5728\u53BB\u80CC\u51E0\u4E2A\u65B0\u8BCD\uFF0C\u6216\u8005\u505A\u4E00\u7EC4\u6D4B\u8BD5\u70ED\u8EAB\u3002", action: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#/study", children: "\u80CC\u65B0\u8BCD" }), jsxRuntimeExports.jsx("a", { className: "btn", href: "#/test", children: "\u505A\u6D4B\u8BD5" })] }) })) : null, !error && words && words.length > 0 ? (jsxRuntimeExports.jsx(WordSession, { words: words, kind: "review", onFinished: () => setRound((r) => r + 1) }, round + '-' + words.length)) : null] }));
}

function QuizRunner({ words, mode, count, title, onExit }) {
    const [questions, setQuestions] = reactExports.useState(() => buildQuestions(words, mode, count));
    const [index, setIndex] = reactExports.useState(0);
    const [selected, setSelected] = reactExports.useState(-1);
    const [spell, setSpell] = reactExports.useState('');
    const [revealed, setRevealed] = reactExports.useState(false);
    const [answers, setAnswers] = reactExports.useState([]);
    const [done, setDone] = reactExports.useState(false);
    const [tick, setTick] = reactExports.useState(0);
    const startedAt = reactExports.useRef(Date.now());
    const questionAt = reactExports.useRef(Date.now());
    const accent = useSettings((s) => s.accent);
    const logAttempt = useStats((s) => s.logAttempt);
    const addWrong = useWrong((s) => s.add);
    const current = questions[index];
    reactExports.useEffect(() => {
        const timer = window.setInterval(() => setTick((t) => t + 1), 500);
        return () => window.clearInterval(timer);
    }, []);
    reactExports.useEffect(() => {
        questionAt.current = Date.now();
        setSelected(-1);
        setSpell('');
        setRevealed(false);
        if (current && current.mode === 'listen') {
            playWord(current.word, accent);
        }
    }, [current, accent]);
    const commit = reactExports.useCallback((correct, chosen) => {
        if (!current)
            return;
        const record = { question: current, chosen, correct };
        setAnswers((list) => [...list, record]);
        logAttempt({ mode: current.mode, wordId: current.wordId, correct, ms: Date.now() - questionAt.current });
        if (!correct)
            addWrong(current.wordId, 'quiz');
        setRevealed(true);
    }, [current, logAttempt, addWrong]);
    const choose = (i) => {
        if (revealed || !current)
            return;
        setSelected(i);
        commit(i === current.answerIndex, current.options[i] ?? '');
    };
    const submitSpell = () => {
        if (revealed || !current)
            return;
        commit(checkSpelling(spell, current.word), spell);
    };
    const next = () => {
        if (index + 1 >= questions.length) {
            setDone(true);
            return;
        }
        setIndex((i) => i + 1);
    };
    const retryWrong = () => {
        const wrongIds = new Set(answers.filter((a) => !a.correct).map((a) => a.question.wordId));
        const pool = words.filter((w) => wrongIds.has(w.id));
        if (!pool.length)
            return;
        setQuestions(buildQuestions(pool, mode, Math.min(pool.length, count)));
        setAnswers([]);
        setIndex(0);
        setDone(false);
        startedAt.current = Date.now();
    };
    const restart = () => {
        setQuestions(buildQuestions(words, mode, count));
        setAnswers([]);
        setIndex(0);
        setDone(false);
        startedAt.current = Date.now();
    };
    if (!questions.length) {
        return (jsxRuntimeExports.jsxs("div", { className: "card card-pad text-center", children: [jsxRuntimeExports.jsx("div", { className: "text-sm text-ink-400", children: "\u8FD9\u4E2A\u8303\u56F4\u91CC\u7684\u8BCD\u4E0D\u591F\u51FA\u9898\uFF08\u81F3\u5C11\u9700\u8981 4 \u4E2A\u8BCD\uFF09\u3002" }), jsxRuntimeExports.jsx("button", { className: "btn mt-4", onClick: onExit, children: "\u6362\u4E2A\u8303\u56F4" })] }));
    }
    if (done) {
        const total = answers.length;
        const correct = answers.filter((a) => a.correct).length;
        const rate = total ? Math.round((correct / total) * 100) : 0;
        const used = Date.now() - startedAt.current;
        const wrongAnswers = answers.filter((a) => !a.correct);
        return (jsxRuntimeExports.jsxs("div", { className: "animate-fade-up space-y-4", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad text-center", children: [jsxRuntimeExports.jsxs("div", { className: "font-mono text-5xl font-semibold text-accent", children: [rate, "%"] }), jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm text-ink-300", children: ["\u7B54\u5BF9 ", correct, " / ", total, " \u9898 \u00B7 \u7528\u65F6 ", formatClock(used)] }), jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [wrongAnswers.length ? (jsxRuntimeExports.jsxs("button", { className: "btn btn-primary", onClick: retryWrong, children: ["\u53EA\u7EC3\u9519\u9898\uFF08", wrongAnswers.length, "\uFF09"] })) : null, jsxRuntimeExports.jsx("button", { className: "btn", onClick: restart, children: "\u518D\u6765\u4E00\u7EC4" }), jsxRuntimeExports.jsx("button", { className: "btn btn-ghost", onClick: onExit, children: "\u8FD4\u56DE" })] })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "\u7B54\u9898\u56DE\u987E" }), jsxRuntimeExports.jsx("div", { className: "divide-y divide-ink-800", children: answers.map((a, i) => (jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-3", children: [jsxRuntimeExports.jsx("span", { className: 'mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded text-[10px] font-bold ' +
                                            (a.correct ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'), children: a.correct ? '✓' : '✕' }), jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-ink-100", children: a.question.word }), jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-400", children: a.question.meaning }), !a.correct ? (jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[11px] text-ink-500", children: ["\u4F60\u9009\uFF1A", a.chosen || '（空）', " \u00B7 \u6B63\u786E\uFF1A", a.question.mode === 'spell' ? a.question.word : a.question.options[a.question.answerIndex]] })) : null] })] }, i))) })] })] }));
    }
    const ratio = questions.length ? index / questions.length : 0;
    const elapsed = Date.now() - startedAt.current;
    return (jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center gap-3", children: [jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-ink-400", children: [index + 1, " / ", questions.length] }), jsxRuntimeExports.jsx("div", { className: "flex-1", children: jsxRuntimeExports.jsx(Bar, { ratio: ratio }) }), jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-ink-500", children: formatClock(elapsed) }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost", onClick: onExit, children: "\u9000\u51FA" })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("span", { className: "eyebrow", children: title }), current.mode === 'listen' ? (jsxRuntimeExports.jsx("button", { type: "button", className: "btn btn-sm", onClick: () => current && playWord(current.word, accent), children: "\uD83D\uDD0A \u518D\u542C\u4E00\u6B21" })) : null] }), current.mode === 'en2zh' ? (jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [jsxRuntimeExports.jsx("div", { className: "word-display", children: current.prompt }), current.phon ? jsxRuntimeExports.jsx("div", { className: "phon mt-2", children: current.phon }) : null] })) : null, current.mode === 'zh2en' || current.mode === 'spell' ? (jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [jsxRuntimeExports.jsx("div", { className: "font-serif text-2xl leading-snug text-ink-100 sm:text-3xl", children: current.prompt }), current.sub ? jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs text-ink-500", children: current.sub }) : null] })) : null, current.mode === 'listen' ? (jsxRuntimeExports.jsxs("div", { className: "mt-6 text-center", children: [jsxRuntimeExports.jsx("div", { className: "text-sm text-ink-400", children: "\u542C\u53D1\u97F3\uFF0C\u9009\u51FA\u4F60\u542C\u5230\u7684\u5355\u8BCD" }), jsxRuntimeExports.jsx("button", { type: "button", onClick: () => current && playWord(current.word, accent), className: "mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 bg-accent-dim text-2xl text-accent transition hover:bg-accent/20", children: "\uD83D\uDD0A" })] })) : null, current.mode === 'spell' ? (jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-6 max-w-sm", children: [jsxRuntimeExports.jsx("input", { className: "input text-center text-lg tracking-wide", value: spell, onChange: (e) => setSpell(e.target.value), onKeyDown: (e) => {
                                    if (e.key === 'Enter') {
                                        if (revealed)
                                            next();
                                        else
                                            submitSpell();
                                    }
                                }, disabled: revealed, autoFocus: true, autoCapitalize: "off", autoCorrect: "off", spellCheck: false, placeholder: "\u8F93\u5165\u82F1\u6587\u5355\u8BCD\uFF0C\u56DE\u8F66\u63D0\u4EA4" }), !revealed ? (jsxRuntimeExports.jsx("button", { className: "btn btn-primary mt-3 w-full", onClick: submitSpell, children: "\u63D0\u4EA4" })) : null] })) : (jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: current.options.map((option, i) => {
                            const isCorrect = revealed && i === current.answerIndex;
                            const isWrong = revealed && i === selected && i !== current.answerIndex;
                            return (jsxRuntimeExports.jsxs("button", { type: "button", disabled: revealed, onClick: () => choose(i), className: 'option ' + (isCorrect ? 'option-correct' : '') + ' ' + (isWrong ? 'option-wrong' : ''), children: [jsxRuntimeExports.jsx("span", { className: "option-key", children: String.fromCharCode(65 + i) }), jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1", children: option })] }, i));
                        }) })), revealed ? (jsxRuntimeExports.jsxs("div", { className: 'mt-5 rounded-xl px-4 py-3 text-sm ' +
                            (answers[answers.length - 1]?.correct
                                ? 'bg-emerald-500/10 text-emerald-200'
                                : 'bg-red-500/10 text-red-200'), children: [answers[answers.length - 1]?.correct ? '答对了 · ' : '正确答案：', jsxRuntimeExports.jsx("span", { className: "font-semibold", children: current.word }), " \u2014 ", current.meaning, current.sentence ? (jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-ink-400", children: current.sentence })) : null, jsxRuntimeExports.jsx("div", { className: "mt-3", children: jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: next, children: index + 1 >= questions.length ? '查看结果' : '下一题' }) })] })) : null] })] }, tick > 0 ? 'q' + index : 'q0'));
}

const SCOPE_LABEL = {
    today: '今日学过的词',
    learning: '学习中',
    wrong: '错题本',
    mastered: '已掌握复测',
    all: '全库随机',
};
function Test() {
    const [scope, setScope] = reactExports.useState('today');
    const [mode, setMode] = reactExports.useState('en2zh');
    const [count, setCount] = reactExports.useState(20);
    const [pool, setPool] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [running, setRunning] = reactExports.useState(false);
    const [loading, setLoading] = reactExports.useState(false);
    const settings = useSettings();
    const progressWords = useProgress((s) => s.words);
    const attempts = useStats((s) => s.attempts);
    const days = useStats((s) => s.days);
    const wrongItems = useWrong((s) => s.items);
    reactExports.useEffect(() => {
        setCount(settings.sessionSize);
    }, [settings.sessionSize]);
    const todayIds = reactExports.useMemo(() => {
        const key = dateKey();
        void days[key];
        const ids = new Set();
        for (const attempt of attempts) {
            if (dateKey(attempt.ts) === key && attempt.wordId)
                ids.add(attempt.wordId);
        }
        return Array.from(ids);
    }, [attempts, days]);
    const loadPool = () => {
        setLoading(true);
        setError(null);
        setPool(null);
        const finish = (words) => {
            setPool(words);
            setLoading(false);
        };
        const fail = (err) => {
            setError(err instanceof Error ? err.message : String(err));
            setLoading(false);
        };
        if (scope === 'all') {
            getAllWords().then(finish).catch(fail);
            return;
        }
        let ids = [];
        if (scope === 'today')
            ids = todayIds;
        else if (scope === 'wrong')
            ids = Object.keys(wrongItems);
        else {
            const entries = Object.values(progressWords);
            ids = entries
                .filter((p) => (scope === 'learning' ? p.interval < 21 && p.status !== 'new' : p.interval >= 21))
                .map((p) => p.id);
        }
        if (ids.length < 4) {
            setPool([]);
            setLoading(false);
            return;
        }
        loadWordsByIds(ids).then(finish).catch(fail);
    };
    if (running && pool) {
        return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-4", children: [jsxRuntimeExports.jsx(QuizHeader, { title: SCOPE_LABEL[scope] + ' · ' + QUIZ_MODE_LABEL[mode] }), jsxRuntimeExports.jsx(QuizRunner, { words: pool, mode: mode, count: count, title: QUIZ_MODE_LABEL[mode], onExit: () => setRunning(false) })] }));
    }
    return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u8BCD\u6C47\u6D4B\u8BD5", hint: "\u8303\u56F4\u51B3\u5B9A\u51FA\u9898\u6C60\uFF0C\u9898\u578B\u51B3\u5B9A\u8003\u4EC0\u4E48" }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-5", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u8303\u56F4" }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(SCOPE_LABEL).map((key) => (jsxRuntimeExports.jsx(ChipButton, { active: scope === key, onClick: () => setScope(key), children: SCOPE_LABEL[key] }, key))) })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u9898\u578B" }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(QUIZ_MODE_LABEL).map((key) => (jsxRuntimeExports.jsx(ChipButton, { active: mode === key, onClick: () => setMode(key), children: QUIZ_MODE_LABEL[key] }, key))) })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u9898\u91CF" }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [10, 20, 30, 50].map((n) => (jsxRuntimeExports.jsxs(ChipButton, { active: count === n, onClick: () => setCount(n), children: [n, " \u9898"] }, n))) })] }), jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 pt-1", children: [jsxRuntimeExports.jsx("p", { className: "text-xs leading-relaxed text-ink-500", children: "\u5E72\u6270\u9879\u4ECE\u540C\u5757\u8BCD\u91CC\u6309\u8BCD\u6027\u4E0E\u957F\u5EA6\u53D6\u6837\uFF0C\u907F\u514D\u51FA\u73B0\u540C\u4E49\u8BCD\u9020\u6210\u7684\u201C\u4E24\u4E2A\u90FD\u5BF9\u201D\u3002" }), jsxRuntimeExports.jsx("button", { className: "btn btn-primary flex-none", onClick: loadPool, disabled: loading, children: loading ? '准备中…' : '开始测试' })] })] }), error ? jsxRuntimeExports.jsx(ErrorBox, { message: error, onRetry: loadPool }) : null, loading ? jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u7EC4\u5377\u2026" }) : null, pool && pool.length === 0 ? (jsxRuntimeExports.jsx(EmptyState, { title: "\u8FD9\u4E2A\u8303\u56F4\u7684\u8BCD\u4E0D\u591F\u51FA\u9898", desc: "\u81F3\u5C11\u9700\u8981 4 \u4E2A\u8BCD\u3002\u53EF\u4EE5\u6362\u6210\u300C\u5168\u5E93\u968F\u673A\u300D\uFF0C\u6216\u8005\u5148\u53BB\u80CC\u51E0\u4E2A\u8BCD / \u505A\u51E0\u9053\u771F\u9898\u3002", action: jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: () => setScope('all'), children: "\u6539\u6210\u5168\u5E93\u968F\u673A" }) })) : null, pool && pool.length >= 4 ? (jsxRuntimeExports.jsx("div", { className: "card card-pad", children: jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold text-ink-100", children: ["\u5DF2\u51C6\u5907 ", Math.min(count, pool.length), " \u9898 \u00B7 ", QUIZ_MODE_LABEL[mode]] }), jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-ink-500", children: ["\u8303\u56F4\u8BCD\u6570 ", pool.length] })] }), jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: () => setRunning(true), children: "\u5F00\u59CB" })] }) })) : null] }));
}
function QuizHeader({ title }) {
    return (jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: title }), jsxRuntimeExports.jsx("a", { className: "text-xs text-ink-500 hover:text-accent", href: "#/test", children: "\u91CD\u65B0\u9009\u62E9" })] }));
}

/** 某个客观题条目关联的词库 id（没有映射就返回空数组） */
function linkedWordsOf(data, part, no) {
    if (part === 'cloze') {
        const item = data.reading.bankedCloze.items.find((x) => x.no === no);
        return item?.linkedWords ?? [];
    }
    if (part === 'matching') {
        const item = data.reading.matching.items.find((x) => x.no === no);
        return item?.linkedWords ?? [];
    }
    const passages = data.reading.carefulReading;
    for (const passage of passages) {
        const item = passage.items.find((x) => x.no === no);
        if (item)
            return item.linkedWords ?? [];
    }
    return [];
}
/** 从判分结果里收集所有答错的题目 */
function wrongTargetsOf(results) {
    const out = [];
    for (const result of results) {
        for (const item of result.items) {
            if (!item.correct)
                out.push({ part: result.part, no: item.no });
        }
    }
    return out;
}
/**
 * 汇总错题关联词：
 * - 按题目顺序去重；
 * - limit 限制一次最多入库的词数（默认 24，避免一次灌爆错题本）。
 */
function collectLinkedWords(data, targets, limit = 24) {
    const seen = new Set();
    const out = [];
    for (const target of targets) {
        for (const id of linkedWordsOf(data, target.part, target.no)) {
            if (seen.has(id))
                continue;
            seen.add(id);
            out.push(id);
            if (out.length >= limit)
                return out;
        }
    }
    return out;
}
/** 直接吃一个套卷 + 判分结果，返回该入库的词 id（错题联动入口） */
function linkedWordsForResults(data, results, limit = 24) {
    return collectLinkedWords(data, wrongTargetsOf(results), limit);
}

function ClozePart({ data, answers, activeBlank, setActiveBlank, setAnswers, }) {
    const bank = data.reading.bankedCloze.bank;
    const used = new Set(Object.keys(answers).filter((k) => k.startsWith('c')).map((k) => answers[k]));
    const fill = (letter) => {
        const target = activeBlank;
        setAnswers((prev) => {
            const next = { ...prev };
            if (target !== null)
                next['c' + target] = letter;
            else {
                const empty = data.reading.bankedCloze.items.find((item) => !prev['c' + item.no]);
                if (empty)
                    next['c' + empty.no] = letter;
            }
            return next;
        });
        setActiveBlank(null);
    };
    const clearBlank = (no) => {
        setAnswers((prev) => {
            const next = { ...prev };
            delete next['c' + no];
            return next;
        });
    };
    return (jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "\u9009\u8BCD\u586B\u7A7A \u00B7 A\u2013O \u4E2D\u9009 10 \u4E2A\uFF0C\u6BCF\u4E2A\u53EA\u7528\u4E00\u6B21" }), jsxRuntimeExports.jsx("div", { className: "space-y-3 text-[15px] leading-[1.95] text-ink-200", children: data.reading.bankedCloze.passage.split('\n').map((line, li) => (jsxRuntimeExports.jsx("p", { children: line.split(/(__\d{2}__)/g).map((segment, si) => {
                        const match = /^__(\d{2})__$/.exec(segment);
                        if (!match)
                            return jsxRuntimeExports.jsx("span", { children: segment }, si);
                        const no = Number(match[1]);
                        const chosen = answers['c' + no];
                        return (jsxRuntimeExports.jsx("button", { type: "button", onClick: () => (chosen ? clearBlank(no) : setActiveBlank(no)), className: 'mx-1 inline-flex min-w-[52px] items-center justify-center rounded-md border px-2 py-0.5 text-xs font-bold transition ' +
                                (chosen
                                    ? 'border-accent/70 bg-accent-dim text-accent'
                                    : activeBlank === no
                                        ? 'border-accent bg-accent/15 text-accent'
                                        : 'border-dashed border-ink-600 text-ink-500 hover:border-accent/60 hover:text-accent'), children: chosen ? chosen : '( ' + no + ' )' }, si));
                    }) }, li))) }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-t border-ink-800 pt-4", children: bank.map((item) => (jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => fill(item.k), className: 'chip ' + (used.has(item.k) ? 'opacity-40 line-through' : 'hover:border-accent/60 hover:text-accent'), children: [jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-ink-500", children: item.k }), item.w] }, item.k))) }), jsxRuntimeExports.jsx("p", { className: "text-[11px] text-ink-500", children: activeBlank !== null ? '已选中第 ' + activeBlank + ' 空，点上方单词填入' : '先点句子里的空格，再点单词；再点空格可清除' })] }));
}
function MatchingPart({ data, answers, setAnswers, }) {
    const letters = data.reading.matching.paragraphs.map((p) => p.letter);
    return (jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsxs("div", { className: "eyebrow mb-3", children: ["\u6587\u7AE0\uFF08\u6BB5\u843D A\u2013", letters[letters.length - 1], "\uFF09"] }), jsxRuntimeExports.jsx("div", { className: "scroll-area max-h-[520px] space-y-3 pr-2 text-sm leading-relaxed text-ink-300", children: data.reading.matching.paragraphs.map((p) => (jsxRuntimeExports.jsxs("p", { children: [jsxRuntimeExports.jsxs("span", { className: "mr-1.5 font-bold text-accent", children: [p.letter, ")"] }), p.text] }, p.letter))) })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "\u9898\u5E72 36\u201345\uFF1A\u4FE1\u606F\u51FA\u81EA\u54EA\u4E00\u6BB5" }), jsxRuntimeExports.jsx("div", { className: "divide-y divide-ink-800", children: data.reading.matching.items.map((item) => (jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-2.5", children: [jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-6 w-8 flex-none items-center justify-center rounded bg-ink-800 font-mono text-[11px] text-ink-400", children: item.no }), jsxRuntimeExports.jsx("p", { className: "min-w-0 flex-1 text-sm leading-relaxed text-ink-300", children: item.stem }), jsxRuntimeExports.jsxs("select", { className: "flex-none rounded-lg border border-ink-700 bg-ink-850 px-2 py-1.5 text-sm text-ink-100 outline-none focus:border-accent/60", value: answers['m' + item.no] ?? '', onChange: (e) => setAnswers((prev) => {
                                        const next = { ...prev };
                                        if (e.target.value)
                                            next['m' + item.no] = e.target.value;
                                        else
                                            delete next['m' + item.no];
                                        return next;
                                    }), children: [jsxRuntimeExports.jsx("option", { value: "", children: "?" }), letters.map((letter) => (jsxRuntimeExports.jsx("option", { value: letter, children: letter }, letter)))] })] }, item.no))) })] })] }));
}
function ReadingPart({ data, index, answers, setAnswers, }) {
    const passage = data.reading.carefulReading[index];
    if (!passage)
        return jsxRuntimeExports.jsx("div", { className: "card card-pad text-sm text-ink-400", children: "\u8FD9\u4E00\u7BC7\u6CA1\u6709\u6570\u636E\u3002" });
    return (jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-6", children: [jsxRuntimeExports.jsxs("div", { className: "eyebrow", children: ["\u4ED4\u7EC6\u9605\u8BFB\uFF08\u7B2C ", index + 1, " \u7BC7\uFF09"] }), jsxRuntimeExports.jsx("div", { className: "space-y-3 text-[15px] leading-[1.9] text-ink-200", children: passage.passage.split('\n').map((line, i) => (jsxRuntimeExports.jsx("p", { children: line }, i))) }), jsxRuntimeExports.jsx("div", { className: "space-y-6", children: passage.items.map((item) => (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { className: "mb-3 text-sm font-semibold text-ink-100", children: [jsxRuntimeExports.jsx("span", { className: "mr-2 font-mono text-accent", children: item.no }), item.stem] }), jsxRuntimeExports.jsx("div", { className: "space-y-2", children: item.options.map((option) => {
                                const chosen = answers['r' + item.no] === option.k;
                                return (jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setAnswers((prev) => {
                                        const next = { ...prev };
                                        next['r' + item.no] = option.k;
                                        return next;
                                    }), className: 'option ' + (chosen ? 'border-accent/60 bg-accent-dim text-accent' : ''), children: [jsxRuntimeExports.jsx("span", { className: "option-key", children: option.k }), jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1", children: option.t })] }, option.k));
                            }) })] }, item.no))) })] }));
}

const PART_LABEL = {
    ...PART_LABEL$1,
    matching: '信息匹配',
    translation: '翻译',
    writing: '写作',
};
const OBJECTIVE_PARTS = EXAM_PARTS;
const MOCK_MS = 130 * 60 * 1000;
function Exams() {
    const [index, setIndex] = reactExports.useState(null);
    const [setFile, setSetFile] = reactExports.useState('');
    const [data, setData] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [part, setPart] = reactExports.useState('cloze');
    const [answers, setAnswers] = reactExports.useState({});
    const [activeBlank, setActiveBlank] = reactExports.useState(null);
    const [result, setResult] = reactExports.useState(null);
    const [linkedAdded, setLinkedAdded] = reactExports.useState(0);
    const [mockEndsAt, setMockEndsAt] = reactExports.useState(null);
    const [now, setNow] = reactExports.useState(Date.now());
    const [reveal, setReveal] = reactExports.useState(false);
    const [text, setText] = reactExports.useState('');
    const logAttempt = useStats((s) => s.logAttempt);
    const saveExamScore = useStats((s) => s.saveExamScore);
    const examScores = useStats((s) => s.examScores);
    const addWrong = useWrong((s) => s.add);
    const autoSubmitted = reactExports.useRef(false);
    const submitRef = reactExports.useRef(null);
    reactExports.useEffect(() => {
        loadExamIndex()
            .then((idx) => {
            setIndex(idx);
            const first = idx.sessions[0]?.sets[0]?.file;
            if (first)
                setSetFile(first);
        })
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, []);
    reactExports.useEffect(() => {
        if (!setFile)
            return;
        setData(null);
        setError(null);
        setAnswers({});
        setResult(null);
        setReveal(false);
        setText('');
        setActiveBlank(null);
        setMockEndsAt(null);
        autoSubmitted.current = false;
        loadExamSet(setFile)
            .then(setData)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, [setFile]);
    reactExports.useEffect(() => {
        if (mockEndsAt === null)
            return;
        const timer = window.setInterval(() => {
            const t = Date.now();
            setNow(t);
            // 时间到：只自动交卷一次
            if (t >= mockEndsAt && !autoSubmitted.current) {
                autoSubmitted.current = true;
                submitRef.current?.();
            }
        }, 250);
        return () => window.clearInterval(timer);
    }, [mockEndsAt]);
    const remaining = mockEndsAt ? Math.max(0, mockEndsAt - now) : 0;
    const setScore = reactExports.useMemo(() => (data ? setTotals(examScores, data.id) : { right: 0, total: 0, parts: {} }), [data, examScores]);
    if (error)
        return jsxRuntimeExports.jsx(ErrorBox, { message: error });
    if (!index)
        return jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u52A0\u8F7D\u771F\u9898\u76EE\u5F55\u2026" });
    /** 记录单个题型成绩：同一套 + 同一题型只有第一次判分写入统计 */
    const recordPart = (setId, partResult) => {
        const { firstTime } = saveExamScore(setId, partResult);
        if (firstTime) {
            for (const item of partResult.items) {
                logAttempt({ mode: 'exam', session: setId, part: partResult.part, correct: item.correct, ms: 0 });
            }
        }
        return firstTime;
    };
    const gradeObjective = (target) => {
        if (!data)
            return;
        const list = target === 'all' ? gradeAll(data, answers) : [gradePart(data, target, answers)];
        let counted = false;
        for (const partResult of list) {
            if (recordPart(data.id, partResult))
                counted = true;
        }
        const right = list.reduce((sum, r) => sum + r.right, 0);
        const total = list.reduce((sum, r) => sum + r.total, 0);
        const wrong = list.flatMap((r) => wrongText(r));
        setResult({
            right,
            total,
            wrong,
            scope: target === 'all' ? '整卷客观题' : PART_LABEL[target],
            counted,
            parts: list,
        });
        if (target === 'all')
            setPart('cloze');
    };
    const submitMock = (auto) => {
        setMockEndsAt(null);
        autoSubmitted.current = true;
        gradeObjective('all');
        if (auto)
            window.alert('时间到，已自动交卷并判分。');
    };
    // 计时器通过 ref 调用最新的交卷函数，避免 effect 依赖抖动
    submitRef.current = () => submitMock(true);
    const startMock = () => {
        if (!data)
            return;
        autoSubmitted.current = false;
        setResult(null);
        setNow(Date.now());
        setMockEndsAt(Date.now() + MOCK_MS);
    };
    const clearCurrentPart = () => {
        if (!data)
            return;
        setAnswers((prev) => {
            const next = { ...prev };
            if (part === 'cloze')
                for (const item of data.reading.bankedCloze.items)
                    delete next['c' + item.no];
            else if (part === 'matching')
                for (const item of data.reading.matching.items)
                    delete next['m' + item.no];
            else {
                const idx = part === 'read0' ? 0 : 1;
                for (const item of data.reading.carefulReading[idx]?.items ?? [])
                    delete next['r' + item.no];
            }
            return next;
        });
    };
    return (jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u771F\u9898\u7EC3\u4E60", hint: "\u9009\u8BCD\u586B\u7A7A / \u4FE1\u606F\u5339\u914D / \u4ED4\u7EC6\u9605\u8BFB / \u7FFB\u8BD1 / \u5199\u4F5C\uFF1B\u7B54\u6848\u6765\u81EA\u7B2C\u4E09\u65B9\u673A\u6784\u89E3\u6790", right: mockEndsAt ? (jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-accent", children: formatClock(remaining) }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => submitMock(false), children: "\u4EA4\u5377" })] })) : (jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [setScore.total ? (jsxRuntimeExports.jsxs("span", { className: "chip chip-active", children: ["\u672C\u5957 ", setScore.right, "/", setScore.total] })) : null, jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: startMock, children: "\u5F00\u59CB\u6A21\u62DF\u8003\uFF08130 \u5206\u949F\uFF09" })] })) }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [index.sessions.map((session) => session.sets.map((item) => (jsxRuntimeExports.jsxs(ChipButton, { active: setFile === item.file, onClick: () => setSetFile(item.file), children: [session.label, " \u7B2C ", item.set, " \u5957"] }, item.file)))), index.totalSets === 0 ? jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: "\u6682\u65E0\u5957\u5377\u6570\u636E" }) : null] }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(PART_LABEL).map((key) => {
                            const saved = OBJECTIVE_PARTS.includes(key)
                                ? setScore.parts[key] ?? null
                                : null;
                            return (jsxRuntimeExports.jsxs(ChipButton, { active: part === key, onClick: () => { setPart(key); setResult(null); }, children: [PART_LABEL[key], saved ? (jsxRuntimeExports.jsxs("span", { className: "ml-1 font-mono text-[10px] text-accent", children: [saved.right, "/", saved.total] })) : null] }, key));
                        }) }), data ? (jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-ink-800 pt-3 text-xs text-ink-500", children: [jsxRuntimeExports.jsxs("span", { children: [data.title, " \u00B7 \u9605\u8BFB ", data.stats.reading, " \u9898 \u00B7 \u7B54\u6848\u6765\u6E90\uFF1A", data.source.answerSource === 'third-party-analysis' ? '第三方机构解析' : data.source.answerSource] }), jsxRuntimeExports.jsx("a", { className: "hover:text-accent", href: data.source.url, target: "_blank", rel: "noreferrer", children: "\u539F\u59CB\u6765\u6E90 \u2197" })] })) : null] }), !data ? jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u52A0\u8F7D\u5957\u5377\u2026" }) : null, data && result ? (jsxRuntimeExports.jsxs("div", { className: "card card-pad border-accent/30 bg-accent/5", children: [jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [jsxRuntimeExports.jsxs("div", { className: "text-sm text-ink-200", children: [jsxRuntimeExports.jsx("span", { className: "mr-2 text-xs text-ink-400", children: result.scope }), "\u5F97\u5206 ", jsxRuntimeExports.jsx("span", { className: "font-mono text-lg text-accent", children: result.right }), " / ", result.total, result.total ? '（正确率 ' + Math.round((result.right / result.total) * 100) + '%）' : '', jsxRuntimeExports.jsx("span", { className: "ml-2 text-[11px] text-ink-500", children: result.counted ? '本次已记录成绩' : '重复判分，不重复计数' })] }), jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [data && result.parts && result.parts.some((p) => p.right < p.total) ? (jsxRuntimeExports.jsx("button", { className: "btn btn-sm", disabled: linkedAdded > 0, onClick: () => {
                                            const ids = linkedWordsForResults(data, result.parts);
                                            for (const id of ids)
                                                addWrong(id, 'exam');
                                            setLinkedAdded(ids.length);
                                        }, children: linkedAdded > 0
                                            ? '已加入错题本 ' + linkedAdded + ' 词'
                                            : '错题关联词加入错题本（' + linkedWordsForResults(data, result.parts).length + '）' })) : null, jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => setResult(null), children: "\u6536\u8D77" })] })] }), result.wrong.length ? (jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-1 text-xs text-ink-400", children: [result.wrong.slice(0, 12).map((line, i) => (jsxRuntimeExports.jsxs("li", { children: ["\u00B7 ", line] }, i))), result.wrong.length > 12 ? jsxRuntimeExports.jsxs("li", { children: ["\u2026 \u8FD8\u6709 ", result.wrong.length - 12, " \u5904"] }) : null] })) : (jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-emerald-300", children: "\u5168\u5BF9\u3002" }))] })) : null, data && part === 'cloze' ? (jsxRuntimeExports.jsx(ClozePart, { data: data, answers: answers, activeBlank: activeBlank, setActiveBlank: setActiveBlank, setAnswers: setAnswers })) : null, data && part === 'matching' ? jsxRuntimeExports.jsx(MatchingPart, { data: data, answers: answers, setAnswers: setAnswers }) : null, data && (part === 'read0' || part === 'read1') ? (jsxRuntimeExports.jsx(ReadingPart, { data: data, index: part === 'read0' ? 0 : 1, answers: answers, setAnswers: setAnswers })) : null, data && part === 'translation' ? (jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-3", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "\u6C49\u8BD1\u82F1 \u00B7 15 \u5206 \u00B7 \u5EFA\u8BAE 30 \u5206\u949F" }), jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm leading-relaxed text-ink-200", children: data.translation.prompt }), jsxRuntimeExports.jsx("textarea", { className: "input min-h-[160px] leading-relaxed", placeholder: "\u5728\u8FD9\u91CC\u5199\u4E0B\u4F60\u7684\u8BD1\u6587\u2026", value: text, onChange: (e) => setText(e.target.value) }), jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: text.trim() ? text.trim().split(/\s+/).length + ' 词' : '还没开始' }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => setReveal((v) => !v), children: reveal ? '收起参考译文' : '对照参考译文' })] }), reveal ? (jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-ink-700 bg-ink-850/70 p-4 text-sm leading-relaxed text-ink-200", children: data.translation.sample })) : null] })) : null, data && part === 'writing' ? (jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-3", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "\u5199\u4F5C \u00B7 106.5 \u5206 \u00B7 120\u2013180 \u8BCD \u00B7 30 \u5206\u949F" }), jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm leading-relaxed text-ink-200", children: data.writing.prompt }), jsxRuntimeExports.jsx("textarea", { className: "input min-h-[200px] leading-relaxed", placeholder: "\u5199\u4E0B\u4F60\u7684\u4F5C\u6587\uFF08\u6216\u5148\u5217\u63D0\u7EB2\uFF09\u2026", value: text, onChange: (e) => setText(e.target.value) }), jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: text.trim() ? text.trim().split(/\s+/).length + ' 词' : '还没开始' }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => setReveal((v) => !v), children: reveal ? '收起范文' : '看参考范文' })] }), reveal ? (jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-ink-700 bg-ink-850/70 p-4 text-sm leading-relaxed text-ink-200", children: data.writing.sample }), jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-ink-850/50 p-4 text-xs leading-relaxed text-ink-400", children: [jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold text-ink-300", children: "\u8303\u6587\u8BD1\u6587" }), data.writing.sampleZh] }), jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-ink-850/50 p-4 text-xs leading-relaxed text-ink-400", children: [jsxRuntimeExports.jsx("div", { className: "mb-1 font-semibold text-ink-300", children: "\u5199\u4F5C\u8981\u70B9" }), data.writing.points] })] })) : null] })) : null, data && (part === 'cloze' || part === 'matching' || part === 'read0' || part === 'read1') ? (jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [jsxRuntimeExports.jsxs("span", { className: "text-xs text-ink-500", children: ["\u5BA2\u89C2\u9898\u5171 ", data ? data.stats.reading : 0, " \u9898 \u00B7 \u672C\u5957\u7D2F\u8BA1 ", setScore.right, "/", setScore.total || 0] }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: clearCurrentPart, children: "\u6E05\u7A7A\u672C\u9898\u578B\u4F5C\u7B54" }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => gradeObjective('all'), children: "\u4EA4\u5377\uFF08\u5168\u90E8\u5BA2\u89C2\u9898\uFF09" }), jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => gradeObjective(part), children: "\u5BF9\u7B54\u6848" })] })] })) : null] }));
}

function MockExam() {
    const [index, setIndex] = reactExports.useState(null);
    const [setFile, setSetFile] = reactExports.useState('');
    const [data, setData] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [session, setSession] = reactExports.useState(null);
    const [now, setNow] = reactExports.useState(Date.now());
    const [answers, setAnswers] = reactExports.useState({});
    const [activeBlank, setActiveBlank] = reactExports.useState(null);
    const [writing, setWriting] = reactExports.useState('');
    const [translation, setTranslation] = reactExports.useState('');
    const [rubric, setRubric] = reactExports.useState(emptyRubric());
    const [paper, setPaper] = reactExports.useState(null);
    const [record, setRecord] = reactExports.useState(null);
    const [showSamples, setShowSamples] = reactExports.useState(false);
    const [linkedAdded, setLinkedAdded] = reactExports.useState(0);
    const autoRef = reactExports.useRef(false);
    const logAttempt = useStats((s) => s.logAttempt);
    const saveMockRecord = useStats((s) => s.saveMockRecord);
    const addWrong = useWrong((s) => s.add);
    const mockRecords = useStats((s) => s.mockRecords);
    reactExports.useEffect(() => {
        loadExamIndex()
            .then((idx) => {
            setIndex(idx);
            const first = idx.sessions[0]?.sets[0]?.file;
            if (first)
                setSetFile(first);
        })
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, []);
    reactExports.useEffect(() => {
        if (!setFile)
            return;
        setData(null);
        setAnswers({});
        setWriting('');
        setTranslation('');
        setPaper(null);
        setRecord(null);
        setSession(null);
        setShowSamples(false);
        setActiveBlank(null);
        setRubric(emptyRubric());
        setLinkedAdded(0);
        autoRef.current = false;
        loadExamSet(setFile)
            .then(setData)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, [setFile]);
    reactExports.useEffect(() => {
        if (!session || session.submittedAt !== null)
            return;
        const timer = window.setInterval(() => {
            const t = Date.now();
            setNow(t);
            if (t >= session.endsAt && !autoRef.current) {
                autoRef.current = true;
                finish(true);
            }
        }, 500);
        return () => window.clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session]);
    const remaining = session ? remainingMs(session, now) : MOCK_DURATION_MS;
    const phase = session ? currentPhase(session, now) : 'writing';
    const start = () => {
        if (!data)
            return;
        autoRef.current = false;
        setLinkedAdded(0);
        setNow(Date.now());
        setSession(createMockSession(data.id));
        setPaper(null);
        setRecord(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const finish = (auto) => {
        if (!data || !session)
            return;
        const submitted = submitMockSession(session, Date.now(), auto);
        setSession(submitted.session);
        if (!submitted.firstSubmit)
            return;
        const graded = gradePaper(data, answers);
        setPaper(graded);
        for (const item of graded.items) {
            logAttempt({ mode: 'exam', session: data.id, part: item.label, correct: item.correct, ms: 0 });
        }
        const draft = toMockRecord({
            setId: data.id,
            title: data.title,
            session: submitted.session,
            objectiveRight: graded.objective.reduce((sum, p) => sum + p.right, 0),
            objectiveTotal: graded.objective.reduce((sum, p) => sum + p.total, 0),
            listeningRight: graded.listening.right,
            listeningTotal: graded.listening.total,
            rubric,
            selfScore: subjectiveScore(rubric),
        });
        setRecord(draft);
        saveMockRecord(draft);
        if (auto)
            window.alert('时间到，已自动交卷。客观题已判分，主观题请自评。');
    };
    const updateRubric = (key, value) => {
        const next = { ...rubric, [key]: value };
        setRubric(next);
        if (record) {
            const updated = {
                ...record,
                rubric: next,
                selfScore: subjectiveScore(next),
            };
            setRecord(updated);
            saveMockRecord(updated);
        }
    };
    const scoreRows = reactExports.useMemo(() => {
        if (!paper)
            return [];
        return paper.objective.map((p) => ({
            label: p.part === 'cloze' ? '选词填空' : p.part === 'matching' ? '信息匹配' : p.part === 'read0' ? '仔细阅读一' : '仔细阅读二',
            right: p.right,
            total: p.total,
        }));
    }, [paper]);
    if (error)
        return jsxRuntimeExports.jsx(ErrorBox, { message: error });
    if (!index)
        return jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u52A0\u8F7D\u771F\u9898\u76EE\u5F55\u2026" });
    const started = !!session;
    const submitted = !!session && session.submittedAt !== null;
    const listeningSections = data?.listening?.sections ?? [];
    const listeningCount = listeningSections.reduce((sum, s) => sum + s.items.length, 0);
    const objectiveCount = data?.stats.reading ?? 0;
    const records = mockRecords ?? [];
    return (jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u5B8C\u6574\u6A21\u62DF\u8003", hint: "130 \u5206\u949F\u6574\u5377\uFF1A\u5199\u4F5C 30 + \u542C\u529B 25 + \u9605\u8BFB 40 + \u7FFB\u8BD1 30 + \u673A\u52A8 5\uFF1B\u5BA2\u89C2\u9898\u81EA\u52A8\u5224\u5206\uFF0C\u4E3B\u89C2\u9898\u6309\u56DB\u7EF4\u81EA\u8BC4", right: started && !submitted ? (jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [jsxRuntimeExports.jsx("span", { className: "font-mono text-sm text-accent", children: formatClock(remaining) }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => finish(false), children: "\u4EA4\u5377" })] })) : null }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center gap-2", children: index.sessions.map((s) => s.sets.map((item) => (jsxRuntimeExports.jsxs(ChipButton, { active: setFile === item.file, onClick: () => setSetFile(item.file), children: [s.label, " \u7B2C ", item.set, " \u5957"] }, item.file)))) }), data ? (jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 border-t border-ink-800 pt-3 text-xs text-ink-500", children: [jsxRuntimeExports.jsxs("span", { children: [data.title, " \u00B7 \u5BA2\u89C2\u9898 ", objectiveCount, " \u9898 \u00B7 \u542C\u529B ", listeningCount, " \u9898", listeningCount === 0 ? '（本套无音频资源）' : ''] }), !started ? (jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: start, children: "\u5F00\u59CB\u6A21\u8003\uFF08130 \u5206\u949F\uFF09" })) : null] })) : null] }), !data ? jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u52A0\u8F7D\u5957\u5377\u2026" }) : null, data && started ? (jsxRuntimeExports.jsx("div", { className: "card card-pad", children: jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-xs", children: [MOCK_PHASES.map((p, i) => {
                            const active = phase === p.key;
                            return (jsxRuntimeExports.jsxs("span", { className: 'rounded-full border px-2.5 py-1 ' +
                                    (active ? 'border-accent/60 bg-accent-dim text-accent' : 'border-ink-700 text-ink-500'), children: [i + 1, ". ", p.label, " ", p.minutes, "\u2032"] }, p.key));
                        }), jsxRuntimeExports.jsx("span", { className: "ml-auto text-ink-500", children: submitted ? '已交卷' : '剩余 ' + formatClock(remaining) })] }) })) : null, data && submitted && paper ? (jsxRuntimeExports.jsxs("div", { className: "card card-pad border-accent/30 bg-accent/5 space-y-4", children: [jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-3", children: [jsxRuntimeExports.jsx("span", { className: "text-sm text-ink-300", children: "\u5BA2\u89C2\u9898" }), jsxRuntimeExports.jsxs("span", { className: "font-mono text-2xl text-accent", children: [paper.objective.reduce((sum, p) => sum + p.right, 0), "/", paper.objective.reduce((sum, p) => sum + p.total, 0)] }), jsxRuntimeExports.jsx("span", { className: "text-sm text-ink-300", children: "\u542C\u529B" }), jsxRuntimeExports.jsxs("span", { className: "font-mono text-2xl text-accent", children: [paper.listening.right, "/", paper.listening.total || 0] }), jsxRuntimeExports.jsx("span", { className: "text-sm text-ink-300", children: "\u4E3B\u89C2\u81EA\u8BC4" }), jsxRuntimeExports.jsx("span", { className: "font-mono text-2xl text-accent", children: record?.selfScore ?? '—' }), session?.autoSubmitted ? jsxRuntimeExports.jsx("span", { className: "chip", children: "\u81EA\u52A8\u4EA4\u5377" }) : null] }), jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-4", children: scoreRows.map((row) => (jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-ink-900/60 px-3 py-2 text-xs", children: [jsxRuntimeExports.jsx("div", { className: "text-ink-500", children: row.label }), jsxRuntimeExports.jsxs("div", { className: "mt-0.5 font-mono text-lg text-ink-100", children: [row.right, "/", row.total] })] }, row.label))) }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { className: "eyebrow mb-2", children: ["\u4E3B\u89C2\u9898\u81EA\u8BC4\uFF08\u5199\u4F5C / \u7FFB\u8BD1\uFF0C\u56DB\u7EF4 0\u2013", RUBRIC_MAX, " \u5206\uFF09"] }), jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-2", children: RUBRIC_DIMENSIONS.map((dim) => (jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2 rounded-lg bg-ink-900/60 px-3 py-2", children: [jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-400", children: dim.label }), jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: Array.from({ length: RUBRIC_MAX + 1 }, (_, v) => (jsxRuntimeExports.jsx("button", { type: "button", onClick: () => updateRubric(dim.key, v), className: 'h-6 w-6 rounded text-[11px] font-mono ' +
                                                    (rubric[dim.key] === v ? 'bg-accent text-ink-950' : 'bg-ink-800 text-ink-400 hover:bg-ink-700'), children: v }, v))) })] }, dim.key))) })] }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-sm", disabled: linkedAdded > 0, onClick: () => {
                                    const ids = linkedWordsForResults(data, paper.objective);
                                    for (const id of ids)
                                        addWrong(id, 'exam');
                                    setLinkedAdded(ids.length);
                                }, children: linkedAdded > 0
                                    ? '已加入错题本 ' + linkedAdded + ' 词'
                                    : '把错题关联词加入错题本（' + linkedWordsForResults(data, paper.objective).length + '）' }), jsxRuntimeExports.jsx("a", { className: "btn btn-sm", href: "#/wrong", children: "\u53BB\u9519\u9898\u672C" }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => setShowSamples((v) => !v), children: showSamples ? '收起参考范文 / 译文' : '看参考范文 / 译文' }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: start, children: "\u518D\u8003\u4E00\u6B21" })] }), showSamples ? (jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-ink-700 bg-ink-900/70 p-4 text-sm leading-relaxed text-ink-200", children: [jsxRuntimeExports.jsx("div", { className: "mb-1 text-xs font-semibold text-ink-300", children: "\u5199\u4F5C\u53C2\u8003\u8303\u6587" }), data.writing.sample] }), jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-ink-700 bg-ink-900/70 p-4 text-sm leading-relaxed text-ink-200", children: [jsxRuntimeExports.jsx("div", { className: "mb-1 text-xs font-semibold text-ink-300", children: "\u7FFB\u8BD1\u53C2\u8003\u8BD1\u6587" }), data.translation.sample] })] })) : null] })) : null, data && (!started || !submitted) ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-3", children: [jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Part I \u5199\u4F5C \u00B7 30 \u5206\u949F \u00B7 120\u2013180 \u8BCD" }), jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: writing.trim() ? writing.trim().split(/\s+/).length + ' 词' : '未开始' })] }), jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm leading-relaxed text-ink-200", children: data.writing.prompt }), jsxRuntimeExports.jsx("textarea", { className: "input min-h-[180px] leading-relaxed", placeholder: "\u5199\u4E0B\u4F60\u7684\u4F5C\u6587\uFF08\u6A21\u8003\u4E2D\u5EFA\u8BAE\u5148\u5217\u63D0\u7EB2\u518D\u5199\uFF09", value: writing, onChange: (e) => setWriting(e.target.value) })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-3", children: [jsxRuntimeExports.jsxs("div", { className: "eyebrow", children: ["Part II \u542C\u529B \u00B7 25 \u5206\u949F", listeningCount ? ' · ' + listeningCount + ' 题' : ''] }), listeningCount === 0 ? (jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm leading-relaxed text-ink-400", children: data.listening.note || '本套暂无听力音频与题干数据，可直接进入阅读部分。' })) : (listeningSections.map((section, si) => (jsxRuntimeExports.jsxs("div", { className: "space-y-3 rounded-xl bg-ink-850/40 p-4", children: [jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-400", children: section.title }), section.audio ? jsxRuntimeExports.jsx("audio", { controls: true, src: section.audio, className: "w-full" }) : null, section.items.map((item) => (jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [jsxRuntimeExports.jsxs("div", { className: "text-xs text-ink-500", children: ["\u7B2C ", item.no, " \u9898"] }), item.options.map((option) => {
                                                const chosen = answers['l' + item.no] === option.k;
                                                return (jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setAnswers((prev) => ({ ...prev, ['l' + item.no]: option.k })), className: 'option ' + (chosen ? 'border-accent/60 bg-accent-dim text-accent' : ''), children: [jsxRuntimeExports.jsx("span", { className: "option-key", children: option.k }), jsxRuntimeExports.jsx("span", { className: "min-w-0 flex-1", children: option.t })] }, option.k));
                                            })] }, item.no)))] }, si))))] }), jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow px-1", children: "Part III \u9605\u8BFB \u00B7 40 \u5206\u949F" }), jsxRuntimeExports.jsx(ClozePart, { data: data, answers: answers, activeBlank: activeBlank, setActiveBlank: setActiveBlank, setAnswers: setAnswers }), jsxRuntimeExports.jsx(MatchingPart, { data: data, answers: answers, setAnswers: setAnswers }), jsxRuntimeExports.jsx(ReadingPart, { data: data, index: 0, answers: answers, setAnswers: setAnswers }), jsxRuntimeExports.jsx(ReadingPart, { data: data, index: 1, answers: answers, setAnswers: setAnswers })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-3", children: [jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow", children: "Part IV \u7FFB\u8BD1 \u00B7 30 \u5206\u949F" }), jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: translation.trim() ? translation.trim().split(/\s+/).length + ' 词' : '未开始' })] }), jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm leading-relaxed text-ink-200", children: data.translation.prompt }), jsxRuntimeExports.jsx("textarea", { className: "input min-h-[160px] leading-relaxed", placeholder: "\u5199\u4E0B\u4F60\u7684\u8BD1\u6587", value: translation, onChange: (e) => setTranslation(e.target.value) })] }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: started ? '交卷后客观题立即判分，写作/翻译按四维自评' : '点「开始模考」后计时开始' }), jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: !started ? (jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: start, children: "\u5F00\u59CB\u6A21\u8003" })) : (jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => finish(false), children: "\u4EA4\u5377\u5E76\u5224\u5206" })) })] })] })) : null, records.length ? (jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "\u6700\u8FD1\u7684\u6A21\u62DF\u8003" }), jsxRuntimeExports.jsx("div", { className: "divide-y divide-ink-800", children: records.slice(0, 5).map((item) => (jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2 py-2 text-xs", children: [jsxRuntimeExports.jsx("span", { className: "text-ink-300", children: item.title }), jsxRuntimeExports.jsxs("span", { className: "font-mono text-ink-500", children: ["\u5BA2\u89C2 ", item.objectiveRight, "/", item.objectiveTotal, item.listeningTotal ? ' · 听力 ' + item.listeningRight + '/' + item.listeningTotal : '', item.selfScore !== null ? ' · 自评 ' + item.selfScore : '', ' · ' + formatClock(item.usedMs)] })] }, item.id))) })] })) : null] }));
}

/** 统一小写、去标点、压缩空白，用于比较 */
function normalizeSentence(input) {
    return String(input || '')
        .toLowerCase()
        .replace(/[’‘]/g, "'")
        .replace(/[^a-z0-9'\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}
function tokenize(input) {
    const normalized = normalizeSentence(input);
    return normalized ? normalized.split(' ') : [];
}
/** 打乱词序（保证与原句不同）；返回给界面的词块与标准答案 token */
function scrambleSentence(sentence, rng = Math.random) {
    const raw = String(sentence || '').trim().split(/\s+/).filter(Boolean);
    const answer = tokenize(sentence);
    if (raw.length <= 1)
        return { tokens: raw, answer };
    let shuffled = raw.slice();
    for (let attempt = 0; attempt < 12; attempt += 1) {
        for (let i = shuffled.length - 1; i > 0; i -= 1) {
            const j = Math.floor(rng() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        if (shuffled.join(' ') !== raw.join(' '))
            break;
    }
    return { tokens: shuffled, answer };
}
/** 拼句判分：忽略大小写与标点 */
function checkAssembly(picked, answer) {
    if (picked.length !== answer.length)
        return false;
    return tokenize(picked.join(' ')).join(' ') === tokenize(answer.join(' ')).join(' ');
}
/** 最长公共子序列，用于听写逐词对齐 */
function lcsMatrix(a, b) {
    const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
    for (let i = 1; i <= a.length; i += 1) {
        for (let j = 1; j <= b.length; j += 1) {
            dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    return dp;
}
/** 听写对比：以目标句为基准逐词标记，多出来的词单独列出 */
function diffWords(input, target) {
    const a = tokenize(input);
    const b = tokenize(target);
    const dp = lcsMatrix(a, b);
    const matched = new Set();
    let i = a.length;
    let j = b.length;
    while (i > 0 && j > 0) {
        if (a[i - 1] === b[j - 1]) {
            matched.add(j - 1);
            i -= 1;
            j -= 1;
        }
        else if (dp[i - 1][j] >= dp[i][j - 1]) {
            i -= 1;
        }
        else {
            j -= 1;
        }
    }
    const items = b.map((word, index) => ({ word, status: matched.has(index) ? 'ok' : 'missing' }));
    const targetMatched = new Set(b.filter((_w, index) => matched.has(index)));
    const extras = a.filter((word) => {
        if (targetMatched.has(word)) {
            targetMatched.delete(word);
            return false;
        }
        return true;
    });
    const score = b.length ? Math.round((matched.size / b.length) * 100) : 0;
    return { items, extras, score };
}
/** 跟读打分：以目标句词数为分母，命中词数 / 目标词数 */
function wordOverlapScore(spoken, target) {
    const diff = diffWords(spoken, target);
    return { score: diff.score, diff };
}
function sentenceDifficulty(wordCount) {
    if (wordCount <= 8)
        return 'short';
    if (wordCount <= 12)
        return 'medium';
    return 'long';
}
/** 抽题：按难度过滤，去重，不足时放宽到 mixed */
function pickSentences(pool, count, rng = Math.random, difficulty = 'mixed') {
    const filtered = difficulty === 'mixed' ? pool : pool.filter((item) => sentenceDifficulty(item.n) === difficulty);
    const source = filtered.length >= Math.min(count, 4) ? filtered : pool;
    const shuffled = source.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, Math.max(1, count));
}

const SESSION_SIZE = 8;
const MODE_LABEL = {
    sentence: '句子拼图',
    dictation: '键盘听写',
    speaking: '跟读练习',
};
const MODE_HINT = {
    sentence: '看中文提示，把打乱的词块拼回原句',
    dictation: '听发音，把整句敲出来（逐词对错高亮）',
    speaking: '听示范后开口跟读，浏览器识别后打分',
};
const DIFFICULTY_LABEL = {
    mixed: '混合难度',
    short: '短句 4–8 词',
    medium: '中句 9–12 词',
    long: '长句 13–18 词',
};
function getRecognitionCtor() {
    if (typeof window === 'undefined')
        return null;
    const w = window;
    return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}
function Drill() {
    const [pool, setPool] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [mode, setMode] = reactExports.useState('sentence');
    const [difficulty, setDifficulty] = reactExports.useState('mixed');
    const [queue, setQueue] = reactExports.useState([]);
    const [index, setIndex] = reactExports.useState(0);
    const [results, setResults] = reactExports.useState([]);
    const [phase, setPhase] = reactExports.useState('idle');
    // 句子拼图
    const [picked, setPicked] = reactExports.useState([]);
    const [assemblyError, setAssemblyError] = reactExports.useState(null);
    // 听写
    const [input, setInput] = reactExports.useState('');
    const [diff, setDiff] = reactExports.useState(null);
    // 跟读
    const [spoken, setSpoken] = reactExports.useState('');
    const [listening, setListening] = reactExports.useState(false);
    const [speakScore, setSpeakScore] = reactExports.useState(null);
    const recognitionRef = reactExports.useRef(null);
    const logAttempt = useStats((s) => s.logAttempt);
    const startedAt = reactExports.useRef(Date.now());
    reactExports.useEffect(() => {
        loadDrillSentences()
            .then(setPool)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
        return () => {
            recognitionRef.current?.abort();
        };
    }, []);
    const current = queue[index] ?? null;
    const scramble = reactExports.useMemo(() => (current ? scrambleSentence(current.en, Math.random) : null), [current?.en]);
    const recognitionAvailable = getRecognitionCtor() !== null;
    const start = () => {
        if (!pool || pool.length === 0)
            return;
        setQueue(pickSentences(pool, SESSION_SIZE, Math.random, difficulty));
        setIndex(0);
        setResults([]);
        setPicked([]);
        setDiff(null);
        setInput('');
        setSpoken('');
        setSpeakScore(null);
        setAssemblyError(null);
        setPhase('playing');
        startedAt.current = Date.now();
    };
    const finish = (nextResults) => {
        setResults(nextResults);
        setPhase('done');
    };
    const record = (ok, score, sentenceForRecord) => {
        const next = [...results, { sentence: sentenceForRecord, ok, score }];
        const attemptMode = mode === 'sentence' ? 'sentence' : mode === 'dictation' ? 'dictation' : 'speaking';
        logAttempt({
            mode: attemptMode,
            correct: ok,
            ms: Date.now() - startedAt.current,
            wordId: sentenceForRecord.w,
        });
        setResults(next);
        if (index + 1 >= queue.length) {
            finish(next);
            return;
        }
        setIndex((i) => i + 1);
        setPicked([]);
        setInput('');
        setDiff(null);
        setSpoken('');
        setSpeakScore(null);
        setAssemblyError(null);
        startedAt.current = Date.now();
    };
    const submitAssembly = () => {
        if (!current || !scramble)
            return;
        const pickedWords = picked.map((i) => scramble.tokens[i]);
        const ok = checkAssembly(pickedWords, scramble.answer);
        if (ok) {
            record(true, 100, current);
        }
        else {
            setAssemblyError('顺序不对，正确答案：' + current.en);
        }
    };
    const submitDictation = () => {
        if (!current)
            return;
        const result = diffWords(input, current.en);
        setDiff(result);
        const ok = result.score === 100;
        if (ok) {
            window.setTimeout(() => record(true, 100, current), 320);
        }
        else {
            record(false, result.score, current);
        }
    };
    const startListening = () => {
        if (!current)
            return;
        const Ctor = getRecognitionCtor();
        if (!Ctor)
            return;
        try {
            const recognition = new Ctor();
            recognitionRef.current = recognition;
            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;
            recognition.continuous = false;
            recognition.onresult = (event) => {
                const transcript = event.results?.[0]?.transcript ?? '';
                setSpoken(transcript);
                const scored = wordOverlapScore(transcript, current.en);
                setSpeakScore(scored.score);
                setListening(false);
                record(scored.score >= 80, scored.score, current);
            };
            recognition.onerror = () => {
                setListening(false);
                setSpoken('识别失败：请允许麦克风权限，或改用听写模式。');
            };
            recognition.onend = () => setListening(false);
            setListening(true);
            recognition.start();
        }
        catch {
            setListening(false);
            setSpoken('当前环境无法启动语音识别。');
        }
    };
    if (error)
        return jsxRuntimeExports.jsx(ErrorBox, { message: error });
    if (!pool)
        return jsxRuntimeExports.jsx(Loading, { text: "\u6B63\u5728\u52A0\u8F7D\u4F8B\u53E5\u5E93\u2026" });
    const accuracy = results.length ? Math.round((results.filter((r) => r.ok).length / results.length) * 100) : 0;
    const usedSec = Math.round((Date.now() - startedAt.current) / 1000);
    return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u8BAD\u7EC3\u573A", hint: "\u53E5\u5B50\u62FC\u56FE / \u952E\u76D8\u542C\u5199 / \u8DDF\u8BFB\u7EC3\u4E60\u2014\u2014\u90FD\u57FA\u4E8E\u8BCD\u5E93\u91CC\u7684\u771F\u5B9E\u4F8B\u53E5", right: phase === 'playing' ? (jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-ink-400", children: [index + 1, " / ", queue.length] })) : null }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(MODE_LABEL).map((key) => (jsxRuntimeExports.jsxs(ChipButton, { active: mode === key, onClick: () => {
                                setMode(key);
                                setPhase('idle');
                                setResults([]);
                            }, children: [MODE_LABEL[key], key === 'speaking' && !recognitionAvailable ? '（不可用）' : ''] }, key))) }), jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-500", children: MODE_HINT[mode] }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [Object.keys(DIFFICULTY_LABEL).map((key) => (jsxRuntimeExports.jsx(ChipButton, { active: difficulty === key, onClick: () => setDifficulty(key), children: DIFFICULTY_LABEL[key] }, key))), jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm ml-auto", onClick: start, disabled: mode === 'speaking' && !recognitionAvailable, children: phase === 'playing' ? '重新开始' : '开始一组（' + SESSION_SIZE + ' 句）' })] }), mode === 'speaking' && !recognitionAvailable ? (jsxRuntimeExports.jsx("p", { className: "rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-200", children: "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u8BED\u97F3\u8BC6\u522B\uFF08\u9700\u8981 Chrome / Edge\uFF0C\u5E76\u5141\u8BB8\u9EA6\u514B\u98CE\uFF09\u3002\u53EF\u4EE5\u5148\u505A\u300C\u952E\u76D8\u542C\u5199\u300D\u3002" })) : null] }), phase === 'playing' && current && scramble ? (jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-ink-400", children: [index + 1, " / ", queue.length] }), jsxRuntimeExports.jsx("div", { className: "flex-1", children: jsxRuntimeExports.jsx(Bar, { ratio: queue.length ? index / queue.length : 0 }) }), jsxRuntimeExports.jsx("span", { className: "chip", children: MODE_LABEL[mode] }), jsxRuntimeExports.jsx("span", { className: "chip", children: sentenceDifficulty(current.n) === 'short' ? '短句' : sentenceDifficulty(current.n) === 'medium' ? '中句' : '长句' })] }), mode === 'sentence' ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm text-ink-200", children: current.zh }), jsxRuntimeExports.jsx("div", { className: "min-h-[52px] rounded-xl border border-dashed border-ink-700 p-3", children: picked.length === 0 ? (jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-500", children: "\u70B9\u4E0B\u9762\u7684\u8BCD\u5757\uFF0C\u6309\u6B63\u786E\u987A\u5E8F\u62FC\u6210\u53E5\u5B50" })) : (jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: picked.map((tokenIndex, position) => (jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setPicked((prev) => prev.filter((_v, i) => i !== position)), className: "rounded-lg bg-accent-dim px-2.5 py-1 text-sm text-accent", children: scramble.tokens[tokenIndex] }, position))) })) }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: scramble.tokens.map((token, tokenIndex) => {
                                    const used = picked.includes(tokenIndex);
                                    return (jsxRuntimeExports.jsx("button", { type: "button", disabled: used, onClick: () => setPicked((prev) => [...prev, tokenIndex]), className: 'rounded-lg border px-2.5 py-1 text-sm transition ' +
                                            (used
                                                ? 'border-ink-800 text-ink-600'
                                                : 'border-ink-700 text-ink-200 hover:border-accent/60 hover:text-accent'), children: token }, tokenIndex));
                                }) }), assemblyError ? jsxRuntimeExports.jsx("p", { className: "text-xs text-red-300", children: assemblyError }) : null, jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => setPicked([]), children: "\u6E05\u7A7A" }), jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: submitAssembly, disabled: !picked.length, children: "\u68C0\u67E5" }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost", onClick: () => record(false, 0, current), children: "\u8DF3\u8FC7" })] })] })) : null, mode === 'dictation' ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => speak(current.en), children: "\uD83D\uDD0A \u64AD\u653E\u6574\u53E5" }), jsxRuntimeExports.jsxs("span", { className: "text-xs text-ink-500", children: ["\u5171 ", current.n, " \u8BCD\uFF0C\u522B\u6F0F\u6807\u70B9\u4EE5\u5916\u7684\u8BCD"] })] }), jsxRuntimeExports.jsx("input", { className: "input", placeholder: "\u542C\u5B8C\u540E\u628A\u6574\u53E5\u6572\u51FA\u6765\uFF0C\u56DE\u8F66\u63D0\u4EA4", value: input, onChange: (e) => setInput(e.target.value), onKeyDown: (e) => {
                                    if (e.key === 'Enter' && input.trim())
                                        submitDictation();
                                }, disabled: !!diff, autoFocus: true }), diff ? (jsxRuntimeExports.jsxs("div", { className: "space-y-2 rounded-xl bg-ink-850/60 p-4", children: [jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-500", children: "\u76EE\u6807\u53E5 \u00B7 \u9010\u8BCD\u5BF9\u7167" }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 text-sm", children: diff.items.map((item, i) => (jsxRuntimeExports.jsx("span", { className: 'rounded px-1.5 py-0.5 ' +
                                                (item.status === 'ok' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300 underline decoration-dotted'), children: item.word }, i))) }), diff.extras.length ? (jsxRuntimeExports.jsxs("div", { className: "text-xs text-amber-300", children: ["\u591A\u8F93\u5165\uFF1A", diff.extras.join(' ')] })) : null, jsxRuntimeExports.jsxs("div", { className: "text-xs text-ink-400", children: ["\u547D\u4E2D\u7387 ", diff.score, "%"] })] })) : null, jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [!diff ? (jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: submitDictation, disabled: !input.trim(), children: "\u63D0\u4EA4" })) : (jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => record(diff.score === 100, diff.score, current), children: "\u4E0B\u4E00\u53E5" })), jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost", onClick: () => record(false, 0, current), children: "\u8DF3\u8FC7" })] })] })) : null, mode === 'speaking' ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsx("p", { className: "rounded-xl bg-ink-850/60 p-4 text-sm leading-relaxed text-ink-200", children: current.en }), jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-500", children: current.zh }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => speak(current.en), children: "\uD83D\uDD0A \u542C\u793A\u8303" }), jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: startListening, disabled: listening, children: listening ? '正在听…' : '🎙 开始跟读' })] }), spoken ? jsxRuntimeExports.jsxs("p", { className: "text-xs text-ink-400", children: ["\u8BC6\u522B\uFF1A", spoken] }) : null, speakScore !== null ? (jsxRuntimeExports.jsxs("p", { className: 'text-xs ' + (speakScore >= 80 ? 'text-emerald-300' : 'text-amber-300'), children: ["\u8DDF\u8BFB\u5F97\u5206 ", speakScore, " \u5206\uFF08\u226580 \u89C6\u4E3A\u901A\u8FC7\uFF09"] })) : null, jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost", onClick: () => record(false, 0, current), children: "\u8DF3\u8FC7" })] })) : null] })) : null, phase === 'done' ? (jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad text-center", children: [jsxRuntimeExports.jsxs("div", { className: "font-mono text-4xl text-accent", children: [accuracy, "%"] }), jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-ink-300", children: [MODE_LABEL[mode], " \u00B7 \u5B8C\u6210 ", results.length, " \u53E5 \u00B7 \u7528\u65F6 ", usedSec, " \u79D2"] }), jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap justify-center gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: start, children: "\u518D\u6765\u4E00\u7EC4" }), jsxRuntimeExports.jsx("button", { className: "btn", onClick: () => setPhase('idle'), children: "\u6362\u6A21\u5F0F" })] })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("div", { className: "eyebrow mb-3", children: "\u56DE\u987E" }), jsxRuntimeExports.jsx("div", { className: "divide-y divide-ink-800", children: results.map((item, i) => (jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-3", children: [jsxRuntimeExports.jsx("span", { className: 'mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded text-[10px] font-bold ' +
                                                (item.ok ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'), children: item.ok ? '✓' : '✕' }), jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [jsxRuntimeExports.jsx("div", { className: "text-sm text-ink-100", children: item.sentence.en }), jsxRuntimeExports.jsx("div", { className: "text-xs text-ink-500", children: item.sentence.zh })] }), jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-ink-500", children: [item.score, "%"] })] }, i))) })] })] })) : null, phase === 'idle' ? (jsxRuntimeExports.jsx("div", { className: "card card-pad text-sm leading-relaxed text-ink-400", children: jsxRuntimeExports.jsxs("p", { children: ["\u8BAD\u7EC3\u573A\u628A\u300C\u80CC\u8FC7\u7684\u8BCD\u300D\u653E\u8FDB\u771F\u5B9E\u4F8B\u53E5\u91CC\u518D\u7EC3\u4E00\u904D\uFF1A\u53E5\u5B50\u62FC\u56FE\u7EC3\u8BED\u5E8F\u3001\u952E\u76D8\u542C\u5199\u7EC3\u542C\u97F3\u6293\u8BCD\u3001\u8DDF\u8BFB\u7EC3\u5F00\u53E3\u3002 \u6240\u6709\u4F8B\u53E5\u6765\u81EA\u8BCD\u5E93\uFF08", pool.length, " \u6761\u53EF\u7528\uFF09\uFF0C\u7EC3\u4E60\u8BB0\u5F55\u4F1A\u8FDB\u7EDF\u8BA1\uFF08\u5F52\u5165\u8BCD\u6C47\u8BAD\u7EC3\u53E3\u5F84\uFF0C\u4E0D\u5F71\u54CD\u771F\u9898\u6210\u7EE9\uFF09\u3002"] }) })) : null] }));
}

function Wrong() {
    const items = useWrong((s) => s.items);
    const remove = useWrong((s) => s.remove);
    const clear = useWrong((s) => s.clear);
    const [words, setWords] = reactExports.useState(null);
    const [error, setError] = reactExports.useState(null);
    const [mode, setMode] = reactExports.useState('en2zh');
    const [running, setRunning] = reactExports.useState(false);
    const ids = Object.keys(items);
    const load = reactExports.useCallback(() => {
        if (!ids.length) {
            setWords([]);
            return;
        }
        setError(null);
        loadWordsByIds(ids)
            .then(setWords)
            .catch((err) => setError(err instanceof Error ? err.message : String(err)));
    }, [ids.join(','), items]);
    reactExports.useEffect(() => {
        load();
    }, [load]);
    if (running && words && words.length) {
        return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: '错题专练 · ' + QUIZ_MODE_LABEL[mode], hint: '共 ' + words.length + ' 个词' }), jsxRuntimeExports.jsx(QuizRunner, { words: words, mode: mode, count: Math.min(words.length, 20), title: QUIZ_MODE_LABEL[mode], onExit: () => setRunning(false) })] }));
    }
    return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u9519\u9898\u672C", hint: "\u6D4B\u8BD5\u4E0E\u771F\u9898\u91CC\u7B54\u9519\u7684\u8BCD\u4F1A\u81EA\u52A8\u8FDB\u6765\uFF0C\u540C\u4E00\u4E2A\u8BCD\u9519\u5F97\u8D8A\u591A\u6392\u5F97\u8D8A\u524D", right: ids.length ? (jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-danger", onClick: () => clear(), children: "\u6E05\u7A7A" })) : null }), error ? jsxRuntimeExports.jsx(ErrorBox, { message: error, onRetry: load }) : null, !error && !words ? jsxRuntimeExports.jsx(Loading, {}) : null, !error && words && words.length === 0 ? (jsxRuntimeExports.jsx(EmptyState, { title: "\u9519\u9898\u672C\u662F\u7A7A\u7684", desc: "\u505A\u6D4B\u8BD5\u6216\u771F\u9898\u65F6\u7B54\u9519\u7684\u8BCD\u4F1A\u81EA\u52A8\u6536\u8FDB\u6765\u3002\u4E5F\u53EF\u4EE5\u5728\u505A\u9898\u7ED3\u679C\u9875\u70B9\u300C\u53EA\u7EC3\u9519\u9898\u300D\u3002", action: jsxRuntimeExports.jsx("a", { className: "btn btn-primary", href: "#/test", children: "\u53BB\u505A\u6D4B\u8BD5" }) })) : null, !error && words && words.length > 0 ? (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad flex flex-wrap items-center justify-between gap-3", children: [jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: Object.keys(QUIZ_MODE_LABEL).map((key) => (jsxRuntimeExports.jsx(ChipButton, { active: mode === key, onClick: () => setMode(key), children: QUIZ_MODE_LABEL[key] }, key))) }), jsxRuntimeExports.jsxs("button", { className: "btn btn-primary", onClick: () => setRunning(true), children: ["\u7EC3\u8FD9\u4E9B\u9519\u8BCD\uFF08", words.length, "\uFF09"] })] }), jsxRuntimeExports.jsx("div", { className: "card card-pad divide-y divide-ink-800", children: words.map((w) => {
                            const item = items[w.id];
                            return (jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 py-3", children: [jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [jsxRuntimeExports.jsx("span", { className: "font-serif text-lg text-ink-100", children: w.w }), w.us ? jsxRuntimeExports.jsx("span", { className: "phon", children: w.us }) : null] }), jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs leading-relaxed text-ink-400", children: w.mean })] }), jsxRuntimeExports.jsxs("span", { className: "chip flex-none", children: ["\u9519 ", item?.count ?? 0, " \u6B21"] }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost flex-none", onClick: () => remove(w.id), children: "\u79FB\u9664" })] }, w.id));
                        }) })] })) : null] }));
}

const LEVELS = ['bg-ink-800', 'bg-accent/25', 'bg-accent/45', 'bg-accent/70', 'bg-accent'];
function Heatmap({ days, total = 28 }) {
    const cells = [];
    for (let i = total - 1; i >= 0; i -= 1) {
        const ts = addDays(Date.now(), -i);
        const key = dateKey(ts);
        const day = days[key];
        const activity = dayActivity(day);
        const level = activity === 0 ? 0 : activity < 5 ? 1 : activity < 15 ? 2 : activity < 30 ? 3 : 4;
        cells.push({ key, level, day });
    }
    return (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "grid grid-cols-14 gap-1.5", children: cells.map((cell) => (jsxRuntimeExports.jsx("div", { title: cell.key +
                        ' · 新词 ' +
                        (cell.day?.newWords ?? 0) +
                        ' · 复习 ' +
                        (cell.day?.reviewed ?? 0) +
                        ' · 测试 ' +
                        (cell.day?.quizItems ?? 0) +
                        ' · 真题 ' +
                        (cell.day?.examItems ?? 0), className: 'aspect-square rounded-[5px] ' + LEVELS[cell.level] }, cell.key))) }), jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between text-[11px] text-ink-500", children: [jsxRuntimeExports.jsx("span", { children: cells[0]?.key }), jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: ["\u5C11", LEVELS.map((cls, i) => (jsxRuntimeExports.jsx("span", { className: 'h-2.5 w-2.5 rounded-[3px] ' + cls }, i))), "\u591A"] }), jsxRuntimeExports.jsx("span", { children: cells[cells.length - 1]?.key })] })] }));
}
function TrendChart({ points }) {
    const width = 560;
    const height = 160;
    const pad = 8;
    const max = Math.max(1, ...points.map((p) => p.value));
    const step = points.length > 1 ? (width - pad * 2) / (points.length - 1) : 0;
    const coords = points.map((p, i) => {
        const x = pad + i * step;
        const y = height - pad - (p.value / max) * (height - pad * 2);
        return x.toFixed(1) + ',' + y.toFixed(1);
    });
    const line = coords.join(' ');
    const area = pad + ',' + (height - pad) + ' ' + line + ' ' + (pad + (points.length - 1) * step).toFixed(1) + ',' + (height - pad);
    return (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("svg", { viewBox: '0 0 ' + width + ' ' + height, className: "h-40 w-full", children: [jsxRuntimeExports.jsx("polygon", { points: area, fill: "rgba(200,241,105,0.10)" }), jsxRuntimeExports.jsx("polyline", { points: line, fill: "none", strokeWidth: "2", strokeLinejoin: "round", strokeLinecap: "round", style: { stroke: 'rgb(var(--c-accent))' } })] }), jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[10px] text-ink-500", children: [jsxRuntimeExports.jsx("span", { children: points[0]?.label }), jsxRuntimeExports.jsxs("span", { children: ["\u5CF0\u503C ", max] }), jsxRuntimeExports.jsx("span", { children: points[points.length - 1]?.label })] })] }));
}

function Stats() {
    const words = useProgress((s) => s.words);
    const days = useStats((s) => s.days);
    const [range, setRange] = reactExports.useState(28);
    const values = Object.values(words);
    const counts = reactExports.useMemo(() => wordCounts(words, values.length), [words, values.length]);
    const learned = counts.learned;
    const mastered = counts.mastered;
    const totals = reactExports.useMemo(() => totalsOf(days), [days]);
    // 三个口径分开算：词汇测试 / 真题 / 复习互不污染
    const quizAccuracy = quizRate({
        quizItems: totals.quizItems,
        quizCorrect: totals.quizCorrect});
    const examAccuracy = examRate({
        examItems: totals.examItems,
        examCorrect: totals.examCorrect});
    const streak = reactExports.useMemo(() => streakOf(days), [days]);
    const trend = reactExports.useMemo(() => {
        const points = [];
        for (let i = 29; i >= 0; i -= 1) {
            const dayEnd = addDays(Date.now(), -i) + 86400000 - 1;
            const value = values.filter((p) => p.masteredAt !== null && p.masteredAt <= dayEnd).length;
            points.push({ label: dateKey(addDays(Date.now(), -i)).slice(5), value });
        }
        return points;
    }, [values]);
    const buckets = reactExports.useMemo(() => {
        const defs = [
            { label: '1 天', test: (n) => n <= 1 },
            { label: '2–6 天', test: (n) => n >= 2 && n < 7 },
            { label: '7–20 天', test: (n) => n >= 7 && n < 21 },
            { label: '≥21 天', test: (n) => n >= 21 },
        ];
        return defs.map((d) => ({ label: d.label, count: values.filter((p) => p.seen > 0 && d.test(p.interval)).length }));
    }, [values]);
    const maxBucket = Math.max(1, ...buckets.map((b) => b.count));
    const span = range;
    return (jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u5B66\u4E60\u7EDF\u8BA1", hint: '累计数据 · ' + span + ' 天窗口' }), jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-4", children: [jsxRuntimeExports.jsx(Stat, { label: "\u5DF2\u5B66\u8FC7\u7684\u8BCD", value: learned, hint: learned ? '含学习中与已掌握' : '还没开始' }), jsxRuntimeExports.jsx(Stat, { label: "\u5DF2\u638C\u63E1", value: mastered, hint: "\u590D\u4E60\u95F4\u9694 \u2265 21 \u5929" }), jsxRuntimeExports.jsx(Stat, { label: "\u8FDE\u7EED\u6253\u5361", value: streak + ' 天', hint: "\u4ECA\u5929\u6709\u5B66\u4E60\u5373\u8BA1\u5165" }), jsxRuntimeExports.jsx(Stat, { label: "\u8BCD\u6C47\u6D4B\u8BD5\u6B63\u786E\u7387", value: quizAccuracy === null ? '—' : quizAccuracy + '%', hint: totals.quizItems + ' 题累计（不含真题与复习）' })] }), jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg text-ink-100", children: "\u6253\u5361\u70ED\u529B\u56FE" }), jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ink-500", children: "\u6BCF\u683C\u4E00\u5929\uFF0C\u989C\u8272\u8D8A\u6DF1\u5B66\u5F97\u8D8A\u591A" })] }), jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [jsxRuntimeExports.jsx(ChipButton, { active: range === 28, onClick: () => setRange(28), children: "28 \u5929" }), jsxRuntimeExports.jsx(ChipButton, { active: range === 56, onClick: () => setRange(56), children: "56 \u5929" })] })] }), jsxRuntimeExports.jsx(Heatmap, { days: days, total: range })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg text-ink-100", children: "\u7D2F\u8BA1\u638C\u63E1\u8BCD\u6C47\u91CF" }), jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ink-500", children: "\u6309\u8DE8\u8FC7 21 \u5929\u95F4\u9694\u7684\u65E5\u671F\u7D2F\u8BA1" })] }), jsxRuntimeExports.jsx(TrendChart, { points: trend })] })] }), jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-2", children: [jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("h3", { className: "mb-4 font-serif text-lg text-ink-100", children: "\u8BB0\u5FC6\u95F4\u9694\u5206\u5E03" }), jsxRuntimeExports.jsx("div", { className: "space-y-3", children: buckets.map((b) => (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { className: "mb-1 flex justify-between text-xs text-ink-400", children: [jsxRuntimeExports.jsx("span", { children: b.label }), jsxRuntimeExports.jsx("span", { className: "font-mono", children: b.count })] }), jsxRuntimeExports.jsx("div", { className: "h-2 overflow-hidden rounded-full bg-ink-800", children: jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-accent/70", style: { width: Math.round((b.count / maxBucket) * 100) + '%' } }) })] }, b.label))) })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad", children: [jsxRuntimeExports.jsx("h3", { className: "mb-4 font-serif text-lg text-ink-100", children: "\u7D2F\u8BA1\u884C\u4E3A" }), jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-4 text-sm", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("dt", { className: "text-xs text-ink-500", children: "\u65B0\u8BCD\u7D2F\u8BA1" }), jsxRuntimeExports.jsx("dd", { className: "mt-1 font-mono text-xl text-ink-100", children: totals.newWords })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("dt", { className: "text-xs text-ink-500", children: "\u590D\u4E60\u7D2F\u8BA1" }), jsxRuntimeExports.jsx("dd", { className: "mt-1 font-mono text-xl text-ink-100", children: totals.reviewed })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("dt", { className: "text-xs text-ink-500", children: "\u8BCD\u6C47\u6D4B\u8BD5\u9898\u6570" }), jsxRuntimeExports.jsx("dd", { className: "mt-1 font-mono text-xl text-ink-100", children: totals.quizItems })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("dt", { className: "text-xs text-ink-500", children: "\u771F\u9898\u5224\u5206\uFF08\u6B63\u786E\u7387\uFF09" }), jsxRuntimeExports.jsxs("dd", { className: "mt-1 font-mono text-xl text-ink-100", children: [totals.examItems, jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs text-ink-400", children: examAccuracy === null ? '—' : examAccuracy + '%' })] })] })] })] })] })] }));
}

const DAILY_OPTIONS = [10, 20, 30, 50, 100];
const SESSION_OPTIONS = [10, 20, 30, 50];
function Settings() {
    const settings = useSettings();
    const update = useSettings((s) => s.update);
    const replaceSettings = useSettings((s) => s.replaceAll);
    const progress = useProgress();
    const stats = useStats();
    const wrong = useWrong();
    const fileRef = reactExports.useRef(null);
    const [versionInfo, setVersionInfo] = reactExports.useState(null);
    const [checking, setChecking] = reactExports.useState(false);
    const [versionMessage, setVersionMessage] = reactExports.useState('');
    const currentVersion = cleanVersion(APP_VERSION);
    reactExports.useEffect(() => {
        let alive = true;
        void checkForUpdate(currentVersion).then((result) => {
            if (alive && result.info)
                setVersionInfo(result.info);
        });
        return () => {
            alive = false;
        };
    }, [currentVersion]);
    const checkUpdateNow = async () => {
        setChecking(true);
        setVersionMessage('');
        const result = await checkForUpdate(currentVersion);
        setChecking(false);
        if (result.info)
            setVersionInfo(result.info);
        if (!result.info) {
            setVersionMessage('读不到 version.json：离线或部署时漏了上传，可先按「刷新」重试。');
            return;
        }
        if (result.hasUpdate) {
            setVersionMessage('发现新版本 v' + result.info.version + '，正在刷新…');
            window.setTimeout(() => {
                window.location.replace(versionedUrl(window.location.pathname, window.location.search, window.location.hash, result.info.version));
            }, 400);
            return;
        }
        setVersionMessage('已是最新版本（线上 v' + result.info.version + '）。');
    };
    const exportAll = () => {
        const bundle = {
            version: 1,
            exportedAt: new Date().toISOString(),
            settings: {
                theme: settings.theme,
                dailyNew: settings.dailyNew,
                examDate: settings.examDate,
                accent: settings.accent,
                sessionSize: settings.sessionSize,
                showExamModule: settings.showExamModule,
                sfx: settings.sfx,
                hideMeaning: settings.hideMeaning,
                wordOrder: settings.wordOrder,
            },
            progress: progress.words,
            stats: { days: stats.days, attempts: stats.attempts, examScores: stats.examScores },
            wrong: wrong.items,
        };
        const blob = new Blob([JSON.stringify(bundle, null, 1)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cet4-progress-' + dateKey() + '.json';
        a.click();
        window.setTimeout(() => URL.revokeObjectURL(url), 2000);
    };
    const importAll = (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(String(reader.result));
                if (!data || typeof data !== 'object' || !data.progress)
                    throw new Error('缺少 progress 字段');
                replaceSettings({ ...settings, ...data.settings });
                progress.replaceAll(data.progress ?? {});
                stats.replaceAll({
                    days: data.stats?.days ?? {},
                    attempts: data.stats?.attempts ?? [],
                    examScores: data.stats?.examScores ?? {},
                });
                wrong.replaceAll(data.wrong ?? {});
                window.alert('导入成功：' + Object.keys(data.progress).length + ' 个词的进度已恢复。');
            }
            catch (err) {
                window.alert('导入失败：' + (err instanceof Error ? err.message : '文件不是有效的备份'));
            }
        };
        reader.readAsText(file);
    };
    const resetAll = () => {
        if (!window.confirm('确定清空全部学习进度？此操作不可撤销，建议先导出备份。'))
            return;
        progress.reset();
        stats.reset();
        wrong.reset();
        replaceSettings({
            theme: 'dark',
            dailyNew: 30,
            examDate: '2026-12-12',
            accent: 'us',
            sessionSize: 20,
            showExamModule: true,
            sfx: true,
            hideMeaning: false,
            wordOrder: 'seq',
        });
    };
    return (jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl space-y-4", children: [jsxRuntimeExports.jsx(SectionTitle, { title: "\u8BBE\u7F6E", hint: "\u5168\u90E8\u6570\u636E\u53EA\u4FDD\u5B58\u5728\u8FD9\u4E2A\u6D4F\u89C8\u5668\u91CC\uFF08localStorage\uFF09" }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-6", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u5916\u89C2\u4E3B\u9898" }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update({ theme: 'dark' }), className: 'chip ' + (settings.theme === 'dark' ? 'chip-active' : ''), children: "\u263E \u6DF1\u8272\uFF08\u9ED8\u8BA4\uFF09" }), jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update({ theme: 'light' }), className: 'chip ' + (settings.theme === 'light' ? 'chip-active' : ''), children: "\u2600 \u65E5\u95F4" })] }), jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-ink-500", children: "\u65E5\u95F4\u6A21\u5F0F\u9002\u5408\u767D\u5929/\u4EAE\u73AF\u5883\u4E0B\u4F7F\u7528\uFF0C\u9876\u680F\u53F3\u4FA7\u4E5F\u80FD\u4E00\u952E\u5207\u6362\u3002" })] }), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u6BCF\u65E5\u65B0\u8BCD\u76EE\u6807" }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: DAILY_OPTIONS.map((n) => (jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => update({ dailyNew: n }), className: 'chip ' + (settings.dailyNew === n ? 'chip-active' : ''), children: [n, " \u4E2A"] }, n))) }), jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-ink-500", children: "\u56DB\u7EA7 4544 \u8BCD\uFF0C\u6BCF\u5929 30 \u4E2A\u7EA6 5 \u4E2A\u6708\uFF1B\u60F3 53 \u5929\u8FC7\u5B8C\u4E00\u8F6E\u9700\u8981 86 \u4E2A/\u5929\u3002" })] }), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("label", { className: "label", htmlFor: "exam-date", children: "\u8003\u8BD5\u65E5\u671F" }), jsxRuntimeExports.jsx("input", { id: "exam-date", type: "date", className: "input", value: settings.examDate, onChange: (e) => update({ examDate: e.target.value || settings.examDate }) })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u53D1\u97F3\u504F\u597D" }), jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [jsxRuntimeExports.jsx("button", { type: "button", className: 'chip ' + (settings.accent === 'us' ? 'chip-active' : ''), onClick: () => update({ accent: 'us' }), children: "\u7F8E\u97F3" }), jsxRuntimeExports.jsx("button", { type: "button", className: 'chip ' + (settings.accent === 'uk' ? 'chip-active' : ''), onClick: () => update({ accent: 'uk' }), children: "\u82F1\u97F3" })] })] })] }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "label", children: "\u5355\u7EC4\u6D4B\u8BD5\u9898\u91CF" }), jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SESSION_OPTIONS.map((n) => (jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => update({ sessionSize: n }), className: 'chip ' + (settings.sessionSize === n ? 'chip-active' : ''), children: [n, " \u9898"] }, n))) })] }), jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-xl bg-ink-850/60 px-4 py-3", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-ink-100", children: "\u663E\u793A\u771F\u9898\u6A21\u5757" }), jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-ink-500", children: "\u5173\u95ED\u540E\u5BFC\u822A\u91CC\u4E0D\u518D\u51FA\u73B0\u771F\u9898\u3002\u82E5\u5C06\u6765\u628A\u7AD9\u70B9\u653E\u5230\u516C\u7F51\uFF0C\u5EFA\u8BAE\u5173\u95ED\uFF08\u7B2C\u4E09\u65B9\u771F\u9898\u7248\u6743\uFF09\u3002" })] }), jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update({ showExamModule: !settings.showExamModule }), className: 'h-7 w-12 flex-none rounded-full p-0.5 transition ' + (settings.showExamModule ? 'bg-accent' : 'bg-ink-700'), "aria-pressed": settings.showExamModule, children: jsxRuntimeExports.jsx("span", { className: 'block h-6 w-6 rounded-full bg-ink-950 transition ' + (settings.showExamModule ? 'translate-x-5' : 'translate-x-0') }) })] }), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-ink-100", children: "\u8BC4\u7EA7\u97F3\u6548" }), jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-ink-500", children: "\u8BA4\u8BC6 / \u6A21\u7CCA / \u4E0D\u8BA4\u8BC6 \u5404\u4E00\u6BB5\u4E0D\u540C\u7684\u5408\u6210\u97F3\uFF1A\u4E0B\u6ED1\u4F4E\u97F3\u3001\u53CC\u54CD\u4E2D\u97F3\u3001\u4E0A\u884C\u9AD8\u97F3\uFF0C\u95ED\u773C\u4E5F\u5206\u5F97\u6E05\u3002" })] }), jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update({ sfx: !settings.sfx }), className: 'h-7 w-12 flex-none rounded-full p-0.5 transition ' + (settings.sfx ? 'bg-accent' : 'bg-ink-700'), "aria-pressed": settings.sfx, children: jsxRuntimeExports.jsx("span", { className: 'block h-6 w-6 rounded-full bg-ink-950 transition ' + (settings.sfx ? 'translate-x-5' : 'translate-x-0') }) })] }), jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: ['unknown', 'vague', 'know'].map((g) => (jsxRuntimeExports.jsxs("button", { type: "button", className: "chip", onClick: () => playGradeSfx(g, { enabled: true }), children: ["\u8BD5\u542C \u00B7 ", g === 'unknown' ? '不认识' : g === 'vague' ? '模糊' : '认识'] }, g))) }), jsxRuntimeExports.jsx("p", { className: "mt-2 text-[11px] text-ink-500", children: "\u97F3\u6548\u7528 WebAudio \u73B0\u573A\u5408\u6210\uFF0C\u4E0D\u52A0\u8F7D\u4EFB\u4F55\u97F3\u9891\u6587\u4EF6\uFF0C\u79BB\u7EBF\u4E5F\u80FD\u54CD\uFF1B\u624B\u673A\u4FA7\u8FB9\u9759\u97F3\u952E\u6253\u5F00\u65F6\u4E0D\u4F1A\u53D1\u58F0\u3002" })] }), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 rounded-xl bg-ink-850/60 px-4 py-3", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-ink-100", children: "\u80CC\u8BCD\u65F6\u5148\u9690\u85CF\u91CA\u4E49" }), jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-ink-500", children: "\u9ED8\u8BA4\u5173\u95ED\uFF1A\u91CA\u4E49\u4E0E\u4E09\u4E2A\u8BC4\u7EA7\u6309\u94AE\u540C\u5C4F\u663E\u793A\u3002\u6253\u5F00\u540E\u5148\u53EA\u7ED9\u5355\u8BCD\uFF0C\u6309 Space \u6216\u70B9\u300C\u663E\u793A\u91CA\u4E49\u300D\u518D\u7FFB\u5F00\uFF0C\u9002\u5408\u7EAF\u56DE\u5FC6\u8BAD\u7EC3\u3002" })] }), jsxRuntimeExports.jsx("button", { type: "button", onClick: () => update({ hideMeaning: !settings.hideMeaning }), className: 'h-7 w-12 flex-none rounded-full p-0.5 transition ' + (settings.hideMeaning ? 'bg-accent' : 'bg-ink-700'), "aria-pressed": settings.hideMeaning, children: jsxRuntimeExports.jsx("span", { className: 'block h-6 w-6 rounded-full bg-ink-950 transition ' + (settings.hideMeaning ? 'translate-x-5' : 'translate-x-0') }) })] }), jsxRuntimeExports.jsx("div", { className: "divider" }), jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-ink-100", children: "\u80CC\u8BCD\u987A\u5E8F" }), jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-ink-500", children: "\u6B63\u5E8F\u6309\u8BCD\u5E93\u539F\u987A\u5E8F\u4ECE\u5934\u80CC\uFF0C\u8FDB\u5EA6\u53EF\u9884\u671F\uFF1B\u4E71\u5E8F\u6BCF\u8F6E\u4ECE\u5168\u90E8\u672A\u5B66\u8BCD\u91CC\u968F\u673A\u62BD\u4E00\u7EC4\uFF0C\u907F\u514D\u603B\u5728 A \u5F00\u5934\u7684\u8BCD\u91CC\u6253\u8F6C\u3002\u5B66\u4E60\u9875\u548C\u590D\u4E60\u9875\u53F3\u4E0A\u89D2\u90FD\u80FD\u76F4\u63A5\u5207\u3002" }), jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: WORD_ORDERS.map((key) => (jsxRuntimeExports.jsx("button", { type: "button", className: 'chip ' + (settings.wordOrder === key ? 'chip-active' : ''), "aria-pressed": settings.wordOrder === key, onClick: () => update({ wordOrder: key }), children: ORDER_LABELS[key] }, key))) })] })] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg text-ink-100", children: "\u7248\u672C\u4E0E\u66F4\u65B0" }), jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-ink-500", children: ["\u5F53\u524D ", jsxRuntimeExports.jsxs("span", { className: "font-mono text-ink-200", children: ["v", currentVersion] }), !BUILD_TIME.includes('__BUILD') ? ' · 构建于 ' + BUILD_TIME : '', "\u3002 \u9875\u9762\u6BCF 15 \u5206\u949F\u8BFB\u4E00\u6B21\u7EBF\u4E0A\u7684 version.json\uFF0C\u542F\u52A8\u548C\u5207\u56DE\u9875\u9762\u65F6\u4E5F\u4F1A\u68C0\u67E5\uFF1B\u6709\u65B0\u7248\u672C\u65F6\u9876\u680F\u4F1A\u51FA\u73B0\u300C\u6709\u65B0\u7248\u672C\u300D\u6309\u94AE\u3002"] })] }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn btn-sm", onClick: () => void checkUpdateNow(), disabled: checking, children: checking ? '检查中…' : '检查更新' }), jsxRuntimeExports.jsx("button", { className: "btn btn-sm btn-ghost", onClick: () => window.location.replace(versionedUrl(window.location.pathname, window.location.search, window.location.hash, currentVersion)), children: "\u5F3A\u5236\u5237\u65B0\u9875\u9762" }), versionMessage ? jsxRuntimeExports.jsx("span", { className: "text-xs text-ink-400", children: versionMessage }) : null] }), versionInfo ? (jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [versionInfo.notes.length > 0 ? (jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-ink-300", children: ["v", versionInfo.version, " \u66F4\u65B0\u5185\u5BB9"] }), jsxRuntimeExports.jsx("ul", { className: "mt-1 space-y-1 text-xs text-ink-400", children: versionInfo.notes.map((note) => (jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [jsxRuntimeExports.jsx("span", { className: "text-accent", children: "\u00B7" }), jsxRuntimeExports.jsx("span", { children: note })] }, note))) })] })) : null, versionInfo.history.length > 0 ? (jsxRuntimeExports.jsxs("details", { className: "text-xs text-ink-400", children: [jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer text-ink-500", children: ["\u5386\u53F2\u7248\u672C\uFF08", versionInfo.history.length, "\uFF09"] }), jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-2", children: versionInfo.history.map((item) => (jsxRuntimeExports.jsxs("li", { children: [jsxRuntimeExports.jsxs("div", { className: "font-mono text-ink-300", children: ["v", item.version, item.releasedAt ? jsxRuntimeExports.jsx("span", { className: "ml-2 font-sans text-ink-500", children: item.releasedAt }) : null] }), jsxRuntimeExports.jsx("div", { className: "mt-0.5", children: item.notes.join('；') })] }, item.version))) })] })) : null] })) : (jsxRuntimeExports.jsx("p", { className: "text-xs text-ink-500", children: "\u66F4\u65B0\u8BB0\u5F55\u6765\u81EA\u7EBF\u4E0A version.json\uFF0C\u8BFB\u4E0D\u5230\u65F6\u8FD9\u91CC\u4F1A\u662F\u7A7A\u7684\uFF08\u79BB\u7EBF\u6253\u5F00\u5C5E\u4E8E\u6B63\u5E38\uFF09\u3002" }))] }), jsxRuntimeExports.jsxs("div", { className: "card card-pad space-y-4", children: [jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg text-ink-100", children: "\u6570\u636E\u5907\u4EFD" }), jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-ink-500", children: "\u8FDB\u5EA6\u5B58\u5728 4 \u4E2A localStorage \u952E\u91CC\uFF1Acet4.progress.v1 / cet4.stats.v1 / cet4.wrong.v1 / cet4.settings.v1\u3002 \u6362\u8BBE\u5907\u6216\u6E05\u7F13\u5B58\u524D\u5148\u5BFC\u51FA\u3002" })] }), jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [jsxRuntimeExports.jsx("button", { className: "btn", onClick: exportAll, children: "\u5BFC\u51FA\u8FDB\u5EA6 JSON" }), jsxRuntimeExports.jsx("button", { className: "btn", onClick: () => fileRef.current?.click(), children: "\u5BFC\u5165\u8FDB\u5EA6" }), jsxRuntimeExports.jsx("button", { className: "btn btn-danger", onClick: resetAll, children: "\u6E05\u7A7A\u5168\u90E8\u8FDB\u5EA6" }), jsxRuntimeExports.jsx("input", { ref: fileRef, type: "file", accept: "application/json,.json", className: "hidden", onChange: (e) => {
                                    const file = e.target.files?.[0];
                                    if (file)
                                        importAll(file);
                                    e.target.value = '';
                                } })] }), jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs text-ink-400 sm:grid-cols-4", children: [jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-ink-850/60 px-3 py-2", children: [jsxRuntimeExports.jsx("div", { className: "text-ink-500", children: "\u8BCD\u8FDB\u5EA6" }), jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-mono text-sm text-ink-200", children: Object.keys(progress.words).length })] }), jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-ink-850/60 px-3 py-2", children: [jsxRuntimeExports.jsx("div", { className: "text-ink-500", children: "\u4F5C\u7B54\u8BB0\u5F55" }), jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-mono text-sm text-ink-200", children: stats.attempts.length })] }), jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-ink-850/60 px-3 py-2", children: [jsxRuntimeExports.jsx("div", { className: "text-ink-500", children: "\u9519\u9898" }), jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-mono text-sm text-ink-200", children: Object.keys(wrong.items).length })] }), jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-ink-850/60 px-3 py-2", children: [jsxRuntimeExports.jsx("div", { className: "text-ink-500", children: "\u6253\u5361\u5929\u6570" }), jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-mono text-sm text-ink-200", children: Object.keys(stats.days).length })] })] })] })] }));
}

function App() {
    const showExamModule = useSettings((s) => s.showExamModule);
    const theme = useSettings((s) => s.theme);
    reactExports.useEffect(() => {
        applyTheme(theme);
    }, [theme]);
    return (jsxRuntimeExports.jsx(Layout, { children: jsxRuntimeExports.jsxs(Routes, { children: [jsxRuntimeExports.jsx(Route, { path: "/", element: jsxRuntimeExports.jsx(Today, {}) }), jsxRuntimeExports.jsx(Route, { path: "/study", element: jsxRuntimeExports.jsx(Study, {}) }), jsxRuntimeExports.jsx(Route, { path: "/review", element: jsxRuntimeExports.jsx(Review, {}) }), jsxRuntimeExports.jsx(Route, { path: "/test", element: jsxRuntimeExports.jsx(Test, {}) }), jsxRuntimeExports.jsx(Route, { path: "/drill", element: jsxRuntimeExports.jsx(Drill, {}) }), jsxRuntimeExports.jsx(Route, { path: "/exams", element: showExamModule ? jsxRuntimeExports.jsx(Exams, {}) : jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true }) }), jsxRuntimeExports.jsx(Route, { path: "/mock", element: showExamModule ? jsxRuntimeExports.jsx(MockExam, {}) : jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true }) }), jsxRuntimeExports.jsx(Route, { path: "/wrong", element: jsxRuntimeExports.jsx(Wrong, {}) }), jsxRuntimeExports.jsx(Route, { path: "/stats", element: jsxRuntimeExports.jsx(Stats, {}) }), jsxRuntimeExports.jsx(Route, { path: "/settings", element: jsxRuntimeExports.jsx(Settings, {}) }), jsxRuntimeExports.jsx(Route, { path: "*", element: jsxRuntimeExports.jsx(Navigate, { to: "/", replace: true }) })] }) }));
}

// 首屏渲染前先落主题，避免闪一下再切换
applyTheme(readStoredTheme());
ReactDOM.createRoot(document.getElementById('root')).render(jsxRuntimeExports.jsx(React.StrictMode, { children: jsxRuntimeExports.jsx(HashRouter, { children: jsxRuntimeExports.jsx(App, {}) }) }));
