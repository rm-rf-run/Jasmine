/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
/*! jQuery v3.5.1 end*/

/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map
/*popper.min.js end*/

/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.min.js.map
/*Bootstrap v4.5.0 end*/

/*
 * jQuery.Running.js - jQuery plugin for Running
 *
 * Copyright (c) 2007-2015 Qietu inc
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.qietu.com/p/jQuery.Running.js
 *
 * Version:  1.0.0
 *
 */

(function($) {
    $.fn.running = function() {


        /*jd*/
        function n() {
            var t = $(".animateNum");
            var n = {
                top: $(window).scrollTop(),
                bottom: $(window).scrollTop() + $(window).height()
            };
            t.each(function() {
                var t = $(this).attr("data-animateTarget");
                n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateNum({
                    obj: $(this),
                    target: t,
                    totalTime: 1e3
                }))
            })
        };

        function b() {
            var t = $(".animateBar");
            var n = {
                top: $(window).scrollTop(),
                bottom: $(window).scrollTop() + $(window).height()
            };

            t.each(function() {

                var t = $(this).attr("data-animateTarget");
                n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimateBar({
                    obj: $(this),
                    target: t,
                    totalTime: 1e3
                }))
            })
        };

        function p() {
            var t = $(".animatePie");
            var n = {
                top: $(window).scrollTop(),
                bottom: $(window).scrollTop() + $(window).height()
            };

            t.each(function() {

                var t = $(this).attr("data-animateTarget");
                n.top <= $(this).offset().top + $(this).height() && n.bottom >= $(this).offset().top && !$(this).data("start") && ($(this).data("start", !0), new AnimatePie({
                    obj: $(this),
                    target: t,
                    totalTime: 1e3
                }))
            })
        };


        /*n(),
        b(),*/
        $(window).bind("scroll",
            function() {
                n();
                b();
                p();

            });

        function AnimateNum(t) {
            this.obj = t.obj,
                this.target = t.target.toString(),
                this.totalTime = t.totalTime || 1e3,
                this.init()
        };

        function AnimateBar(t) {
            this.obj = t.obj,
                this.target = t.target.toString(),
                this.totalTime = t.totalTime || 1e3,
                this.init()
        };

        function AnimatePie(t) {
            this.obj = t.obj,
                this.target = t.target.toString(),
                this.totalTime = t.totalTime || 1e3,
                this.init()
        };

        AnimateNum.prototype = {
            init: function() {
                return this.target ? (this.animation(), void 0) : !1
            },
            animation: function() {
                var t = this,
                    i = this.target.indexOf("."),
                    e = 0;
                i >= 0 && (e = this.target.length - i - 1);
                var n = this.target.replace(".", ""),
                    s = this.totalTime / 30 | 0,
                    a = n / s | 0,
                    r = 0,
                    h = 0;
                t.timer = setInterval(function() {
                        r++,
                            h += a,
                            t.obj.html(h / Math.pow(10, e)),
                        r >= s && (clearInterval(t.timer), t.obj.html(t.target))
                    },
                    30)
            }
        };

        AnimateBar.prototype = {
            init: function() {
                return this.target ? (this.animation(), void 0) : !1
            },
            animation: function() {
                var t = this,
                    i = this.target.indexOf("."),
                    e = 0;
                i >= 0 && (e = this.target.length - i - 1);
                var n = this.target.replace(".", ""),
                    s = this.totalTime / 30 | 0,
                    a = n / s | 0,
                    r = 0,
                    h = 0;
                t.timer = setInterval(function() {
                        r++,
                            h += a,
                            t.obj.css('width', h / Math.pow(10, e) + '%'),
                        r >= s && (clearInterval(t.timer), t.obj.animate({ 'width': t.target + '%' }))
                    },
                    30)
            }
        };

        AnimatePie.prototype = {
            init: function() {
                return this.target ? (this.animation(), void 0) : !1
            },
            animation: function() {
                var t = this;
                /*i = this.target.indexOf("."),
                e = 0;
                i >= 0 && (e = this.target.length - i - 1);
                var n = this.target.replace(".", ""),
                s = this.totalTime / 30 | 0,
                a = n / s | 0,
                r = 0,
                h = 0;
                t.timer = setInterval(function() {
                	r++,
                	h += a,
                	t.obj.find('.pieInner span').html(h / Math.pow(10, e)),
                	r >= s && (clearInterval(t.timer), t.obj.find('.pieInner span').html(t.target))

                },
                30)*/

                s = this.totalTime / 60 | 0;
                r = 0;

                t.i = 0;
                t.count = 0;
                t.j = 0;

                num = t.target;

                function start1() {

                    t.obj.find('.pieInner span').html(t.i + 1);
                    if (num == 0) return false;
                    t.i = t.i + 1;




                    if (t.i == num) {
                        clearInterval(t.t1);
                    }

                    if (t.i == 50) {

                        clearInterval(t.t1);
                        num2 = num - 50;
                        t.t2 = setInterval(start2, 1);
                    };

                    t.obj.find(".pieLeftInner").css("-o-transform", "rotate(" + t.i * 3.6 + "deg)");
                    t.obj.find(".pieLeftInner").css("-moz-transform", "rotate(" + t.i * 3.6 + "deg)");
                    t.obj.find(".pieLeftInner").css("-webkit-transform", "rotate(" + t.i * 3.6 + "deg)");
                };

                function start2() {

                    t.obj.find('.pieInner span').html(50 + t.j + 1);
                    if (num2 == 0) return false;
                    t.j = t.j + 1;




                    if (t.j == num2) {
                        clearInterval(t.t2);
                    }

                    if (t.j == 50) {

                        clearInterval(t.t2);
                    };
                    t.obj.find(".pieRightInner").css("-o-transform", "rotate(" + t.j * 3.6 + "deg)");
                    t.obj.find(".pieRightInner").css("-moz-transform", "rotate(" + t.j * 3.6 + "deg)");
                    t.obj.find(".pieRightInner").css("-webkit-transform", "rotate(" + t.j * 3.6 + "deg)");
                };

                t.t1 = setInterval(function() {
                        r++;

                        //t.obj.css('width',h / Math.pow(10, e) + '%'),
                        r >= s && (clearInterval(t.timer), start1())
                    },
                    30)
                //t1 = setInterval(start1,1);


            }
        };

    }
})(jQuery);
/*Running.js end*/

/*
 *  Bootstrap Auto-Hiding Navbar - v4.0.0
 *  An extension for Bootstrap's fixed navbar which hides the navbar while the page is scrolling downwards and shows it the other way. The plugin is able to show/hide the navbar programmatically as well.
 *  http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
 *
 *  Made by István Ujj-Mészáros
 *  Under Apache License v2.0 License
 */

!function(s,t,e,o){var n,h="autoHidingNavbar",a=s(t),r=s(e),i=null,u=null,l=70,f=0,d=null,g=a.height(),m=!0,c={disableAutohide:!1,showOnUpscroll:!0,showOnBottom:!0,hideOffset:"auto",animationDuration:200,navbarOffset:0};function p(t,e){this.element=s(t),this.settings=s.extend({},c,e),this._defaults=c,this._name=h,this.init()}function w(t){m&&(t.element.addClass("navbar-hidden").animate({top:-1*parseInt(t.element.css("height"),10)+t.settings.navbarOffset},{queue:!1,duration:t.settings.animationDuration}),s(".dropdown.open .dropdown-toggle, .dropdown.show .dropdown-toggle",t.element).dropdown("toggle"),m=!1,t.element.trigger("hide.autoHidingNavbar"))}function O(t){m||(t.element.removeClass("navbar-hidden").animate({top:0},{queue:!1,duration:t.settings.animationDuration}),m=!0,t.element.trigger("show.autoHidingNavbar"))}function b(t){t.settings.disableAutohide||(f=(new Date).getTime(),function(t){var e=a.scrollTop(),i=e-d;if(d=e,i<0){if(m)return;(t.settings.showOnUpscroll||e<=n)&&O(t)}else if(0<i){if(!m)return t.settings.showOnBottom&&e+g===r.height()&&O(t);n<=e&&w(t)}}(t))}p.prototype={init:function(){var t;return this.elements={navbar:this.element},this.setDisableAutohide(this.settings.disableAutohide),this.setShowOnUpscroll(this.settings.showOnUpscroll),this.setShowOnBottom(this.settings.showOnBottom),this.setHideOffset(this.settings.hideOffset),this.setAnimationDuration(this.settings.animationDuration),n="auto"===this.settings.hideOffset?parseInt(this.element.css("height"),10):this.settings.hideOffset,t=this,r.on("scroll."+h,function(){(new Date).getTime()-f>l?b(t):(clearTimeout(i),i=setTimeout(function(){b(t)},l))}),a.on("resize."+h,function(){clearTimeout(u),u=setTimeout(function(){g=a.height()},l)}),this.element},setDisableAutohide:function(t){return this.settings.disableAutohide=t,this.element},setShowOnUpscroll:function(t){return this.settings.showOnUpscroll=t,this.element},setShowOnBottom:function(t){return this.settings.showOnBottom=t,this.element},setHideOffset:function(t){return this.settings.hideOffset=t,this.element},setAnimationDuration:function(t){return this.settings.animationDuration=t,this.element},show:function(){return O(this),this.element},hide:function(){return w(this),this.element},destroy:function(){return r.off("."+h),a.off("."+h),O(this),s.data(this,"plugin_"+h,null),this.element}},s.fn[h]=function(e){var i,n=arguments;return e===o||"object"==typeof e?this.each(function(){s.data(this,"plugin_"+h)||s.data(this,"plugin_"+h,new p(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each(function(){var t=s.data(this,"plugin_"+h);t instanceof p&&"function"==typeof t[e]&&(i=t[e].apply(t,Array.prototype.slice.call(n,1)))}),i!==o?i:this):void 0}}(jQuery,window,document);
/*jquery.bootstrap-autohidingnavbar end*/

/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2019 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-rc.2
 *
 */

(function (root, factory) {
    if (typeof exports === "object") {
        module.exports = factory(root);
    } else if (typeof define === "function" && define.amd) {
        define([], factory);
    } else {
        root.LazyLoad = factory(root);
    }
}) (typeof global !== "undefined" ? global : this.window || this.global, function (root) {

    "use strict";

    if (typeof define === "function" && define.amd){
        root = window;
    }

    const defaults = {
        src: "data-src",
        srcset: "data-srcset",
        selector: ".lazyload",
        root: null,
        rootMargin: "0px",
        threshold: 0
    };

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
    const extend = function ()  {

        let extended = {};
        let deep = false;
        let i = 0;
        let length = arguments.length;

        /* Check if a deep merge */
        if (Object.prototype.toString.call(arguments[0]) === "[object Boolean]") {
            deep = arguments[0];
            i++;
        }

        /* Merge the object into the extended object */
        let merge = function (obj) {
            for (let prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    /* If deep merge and property is an object, merge properties */
                    if (deep && Object.prototype.toString.call(obj[prop]) === "[object Object]") {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        /* Loop through each object and conduct a merge */
        for (; i < length; i++) {
            let obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    function LazyLoad(images, options) {
        this.settings = extend(defaults, options || {});
        this.images = images || document.querySelectorAll(this.settings.selector);
        this.observer = null;
        this.init();
    }

    LazyLoad.prototype = {
        init: function() {

            /* Without observers load everything and bail out early. */
            if (!root.IntersectionObserver) {
                this.loadImages();
                return;
            }

            let self = this;
            let observerConfig = {
                root: this.settings.root,
                rootMargin: this.settings.rootMargin,
                threshold: [this.settings.threshold]
            };

            this.observer = new IntersectionObserver(function(entries) {
                Array.prototype.forEach.call(entries, function (entry) {
                    if (entry.isIntersecting) {
                        self.observer.unobserve(entry.target);
                        let src = entry.target.getAttribute(self.settings.src);
                        let srcset = entry.target.getAttribute(self.settings.srcset);
                        if ("img" === entry.target.tagName.toLowerCase()) {
                            if (src) {
                                entry.target.src = src;
                            }
                            if (srcset) {
                                entry.target.srcset = srcset;
                            }
                        } else {
                            entry.target.style.backgroundImage = "url(" + src + ")";
                        }
                    }
                });
            }, observerConfig);

            Array.prototype.forEach.call(this.images, function (image) {
                self.observer.observe(image);
            });
        },

        loadAndDestroy: function () {
            if (!this.settings) { return; }
            this.loadImages();
            this.destroy();
        },

        loadImages: function () {
            if (!this.settings) { return; }

            let self = this;
            Array.prototype.forEach.call(this.images, function (image) {
                let src = image.getAttribute(self.settings.src);
                let srcset = image.getAttribute(self.settings.srcset);
                if ("img" === image.tagName.toLowerCase()) {
                    if (src) {
                        image.src = src;
                    }
                    if (srcset) {
                        image.srcset = srcset;
                    }
                } else {
                    image.style.backgroundImage = "url('" + src + "')";
                }
            });
        },

        destroy: function () {
            if (!this.settings) { return; }
            this.observer.disconnect();
            this.settings = null;
        }
    };

    root.lazyload = function(images, options) {
        return new LazyLoad(images, options);
    };

    if (root.jQuery) {
        const $ = root.jQuery;
        $.fn.lazyload = function (options) {
            options = options || {};
            options.attribute = options.attribute || "data-src";
            new LazyLoad($.makeArray(this), options);
            return this;
        };
    }

    return LazyLoad;
});

/*lazyload end*/

(function(){!function(a){return a.fn.animatext=function(b){var c,d;if(d=a.extend({group:!1,mode:"chars",initDelay:0,speed:200,timeToRelaunch:2e3,reverse:!1,infinite:!1,random:!1,onBegin:function(){},onSuccess:function(){}},b),c=function(b){var c,e,f,g,h,i,j,k,l,m,n,o,p,q;if(d.onBegin(),c=[],g=!1,d.group?a(b).each(function(b,d){return a(d).css("visibility","hidden"),c.push(d)}):(l="",i=b.html().split("<br>"),a(i).each(function(b,c){var e,f;return f="",e=c.split(" "),a(e).each(function(b,c){var e,g;return"chars"===d.mode?(e="",g=c.split(""),a(g).each(function(a,b){return e+='<span class="char'+(a+1)+'" aria-hidden="true" style="visibility:hidden; display:inline-block">'+b+"</span>"}),f+='<span class="word'+(b+1)+'" aria-hidden="true" aria-label="'+c+'" style="display:inline-block">'+e+"</span> "):f+='<span class="word'+(b+1)+'" aria-hidden="true" style="visibility:hidden; display:inline-block">'+c+"</span> "}),l+='<span class="paragraph'+(b+1)+'" aria-hidden="true" aria-label="'+c+'" style="display:inline-block">'+f+"</span><br>"}),b.attr("aria-label",b.text()),b.html(l),f=b.find("span[class^='word']"),"chars"===d.mode?a(f).each(function(b,d){var e;return e=a(d).find("span[class^='char']"),a(e).each(function(a,b){return c.push(b)})}):a(f).each(function(a,b){return c.push(b)})),d.reverse&&!d.random&&c.reverse(),d.random){for(e=[],n=c.length,q=k=o=n;o<=1?k<=1:k>=1;q=o<=1?++k:--k)m=Math.floor(Math.random()*c.length),e.push(c[m]),c.splice(m,1);c=e}return p=function(b){return d.group?a(b).each(function(b,c){return a(c).css("visibility","hidden"),a(c).removeClass("animated"),a(c).removeClass(d.effect)}):(b.find("span").css("visibility","hidden"),b.find("span").removeClass("animated"),b.find("span").removeClass(d.effect)),j()},j=function(){var e,f;return g=!0,f=0,e=setInterval(function(){return f>=c.length&&(clearInterval(e),d.onSuccess(),d.infinite&&setTimeout(function(){return g=!1,p(b)},d.timeToRelaunch)),a(c[f]).css("visibility","visible"),d.effect&&a(c[f]).addClass("animated "+d.effect),f+=1},d.speed)},h=function(b){var c,d,e,f;if(b=a(b),f=a(window),e={top:f.scrollTop(),left:f.scrollLeft()},e.right=e.left+f.width(),e.bottom=e.top+f.height(),c=b.offset(),c.right=c.left+b.width(),c.bottom=c.top+b.height(),d=!(e.right<c.left||e.left>c.right||e.bottom<c.top||e.top>c.bottom),d&&!g)return j()},a(window).on("resize scroll",function(){return h(b)}),a(document).ready(function(){return setTimeout(function(){return h(b)},d.initDelay)})},this.length>0)return d.group?c(this):a(this).each(function(b,d){return c(a(d))})}}(window.jQuery||window.Zepto||window.$)}).call(this);
/*animatext end*/

/*!
 * Copyright 2012, Chris Wanstrath
 * Released under the MIT License
 * https://github.com/defunkt/jquery-pjax
 */

(function($){

// When called on a container with a selector, fetches the href with
// ajax into the container or with the data-pjax attribute on the link
// itself.
//
// Tries to make sure the back button and ctrl+click work the way
// you'd expect.
//
// Exported as $.fn.pjax
//
// Accepts a jQuery ajax options object that may include these
// pjax specific options:
//
//
// container - String selector for the element where to place the response body.
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// For convenience the second parameter can be either the container or
// the options object.
//
// Returns the jQuery object
    function fnPjax(selector, container, options) {
        options = optionsFor(container, options)
        return this.on('click.pjax', selector, function(event) {
            var opts = options
            if (!opts.container) {
                opts = $.extend({}, options)
                opts.container = $(this).attr('data-pjax')
            }
            handleClick(event, opts)
        })
    }

// Public: pjax on click handler
//
// Exported as $.pjax.click.
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//   $(document).on('click', 'a', $.pjax.click)
//   // is the same as
//   $(document).pjax('a')
//
// Returns nothing.
    function handleClick(event, container, options) {
        options = optionsFor(container, options)

        var link = event.currentTarget
        var $link = $(link)

        if (link.tagName.toUpperCase() !== 'A')
            throw "$.fn.pjax or $.pjax.click requires an anchor element"

        // Middle click, cmd click, and ctrl click should open
        // links in a new tab as normal.
        if ( event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey )
            return

        // Ignore cross origin links
        if ( location.protocol !== link.protocol || location.hostname !== link.hostname )
            return

        // Ignore case when a hash is being tacked on the current URL
        if ( link.href.indexOf('#') > -1 && stripHash(link) == stripHash(location) )
            return

        // Ignore event with default prevented
        if (event.isDefaultPrevented())
            return

        var defaults = {
            url: link.href,
            container: $link.attr('data-pjax'),
            target: link
        }

        var opts = $.extend({}, defaults, options)
        var clickEvent = $.Event('pjax:click')
        $link.trigger(clickEvent, [opts])

        if (!clickEvent.isDefaultPrevented()) {
            pjax(opts)
            event.preventDefault()
            $link.trigger('pjax:clicked', [opts])
        }
    }

// Public: pjax on form submit handler
//
// Exported as $.pjax.submit
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//  $(document).on('submit', 'form', function(event) {
//    $.pjax.submit(event, '[data-pjax-container]')
//  })
//
// Returns nothing.
    function handleSubmit(event, container, options) {
        options = optionsFor(container, options)

        var form = event.currentTarget
        var $form = $(form)

        if (form.tagName.toUpperCase() !== 'FORM')
            throw "$.pjax.submit requires a form element"

        var defaults = {
            type: ($form.attr('method') || 'GET').toUpperCase(),
            url: $form.attr('action'),
            container: $form.attr('data-pjax'),
            target: form
        }

        if (defaults.type !== 'GET' && window.FormData !== undefined) {
            defaults.data = new FormData(form)
            defaults.processData = false
            defaults.contentType = false
        } else {
            // Can't handle file uploads, exit
            if ($form.find(':file').length) {
                return
            }

            // Fallback to manually serializing the fields
            defaults.data = $form.serializeArray()
        }

        pjax($.extend({}, defaults, options))

        event.preventDefault()
    }

// Loads a URL with ajax, puts the response body inside a container,
// then pushState()'s the loaded URL.
//
// Works just like $.ajax in that it accepts a jQuery ajax
// settings object (with keys like url, type, data, etc).
//
// Accepts these extra keys:
//
// container - String selector for where to stick the response body.
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// Use it just like $.ajax:
//
//   var xhr = $.pjax({ url: this.href, container: '#main' })
//   console.log( xhr.readyState )
//
// Returns whatever $.ajax returns.
    function pjax(options) {
        options = $.extend(true, {}, $.ajaxSettings, pjax.defaults, options)

        if ($.isFunction(options.url)) {
            options.url = options.url()
        }

        var hash = parseURL(options.url).hash

        var containerType = $.type(options.container)
        if (containerType !== 'string') {
            throw "expected string value for 'container' option; got " + containerType
        }
        var context = options.context = $(options.container)
        if (!context.length) {
            throw "the container selector '" + options.container + "' did not match anything"
        }

        // We want the browser to maintain two separate internal caches: one
        // for pjax'd partial page loads and one for normal page loads.
        // Without adding this secret parameter, some browsers will often
        // confuse the two.
        if (!options.data) options.data = {}
        if ($.isArray(options.data)) {
            options.data.push({name: '_pjax', value: options.container})
        } else {
            options.data._pjax = options.container
        }

        function fire(type, args, props) {
            if (!props) props = {}
            props.relatedTarget = options.target
            var event = $.Event(type, props)
            context.trigger(event, args)
            return !event.isDefaultPrevented()
        }

        var timeoutTimer

        options.beforeSend = function(xhr, settings) {
            // No timeout for non-GET requests
            // Its not safe to request the resource again with a fallback method.
            if (settings.type !== 'GET') {
                settings.timeout = 0
            }

            xhr.setRequestHeader('X-PJAX', 'true')
            xhr.setRequestHeader('X-PJAX-Container', options.container)

            if (!fire('pjax:beforeSend', [xhr, settings]))
                return false

            if (settings.timeout > 0) {
                timeoutTimer = setTimeout(function() {
                    if (fire('pjax:timeout', [xhr, options]))
                        xhr.abort('timeout')
                }, settings.timeout)

                // Clear timeout setting so jquerys internal timeout isn't invoked
                settings.timeout = 0
            }

            var url = parseURL(settings.url)
            if (hash) url.hash = hash
            options.requestUrl = stripInternalParams(url)
        }

        options.complete = function(xhr, textStatus) {
            if (timeoutTimer)
                clearTimeout(timeoutTimer)

            fire('pjax:complete', [xhr, textStatus, options])

            fire('pjax:end', [xhr, options])
        }

        options.error = function(xhr, textStatus, errorThrown) {
            var container = extractContainer("", xhr, options)

            var allowed = fire('pjax:error', [xhr, textStatus, errorThrown, options])
            if (options.type == 'GET' && textStatus !== 'abort' && allowed) {
                locationReplace(container.url)
            }
        }

        options.success = function(data, status, xhr) {
            var previousState = pjax.state

            // If $.pjax.defaults.version is a function, invoke it first.
            // Otherwise it can be a static string.
            var currentVersion = typeof $.pjax.defaults.version === 'function' ?
                $.pjax.defaults.version() :
                $.pjax.defaults.version

            var latestVersion = xhr.getResponseHeader('X-PJAX-Version')

            var container = extractContainer(data, xhr, options)

            var url = parseURL(container.url)
            if (hash) {
                url.hash = hash
                container.url = url.href
            }

            // If there is a layout version mismatch, hard load the new url
            if (currentVersion && latestVersion && currentVersion !== latestVersion) {
                locationReplace(container.url)
                return
            }

            // If the new response is missing a body, hard load the page
            if (!container.contents) {
                locationReplace(container.url)
                return
            }

            pjax.state = {
                id: options.id || uniqueId(),
                url: container.url,
                title: container.title,
                container: options.container,
                fragment: options.fragment,
                timeout: options.timeout
            }

            if (options.push || options.replace) {
                window.history.replaceState(pjax.state, container.title, container.url)
            }

            // Only blur the focus if the focused element is within the container.
            var blurFocus = $.contains(context, document.activeElement)

            // Clear out any focused controls before inserting new page contents.
            if (blurFocus) {
                try {
                    document.activeElement.blur()
                } catch (e) { /* ignore */ }
            }

            if (container.title) document.title = container.title

            fire('pjax:beforeReplace', [container.contents, options], {
                state: pjax.state,
                previousState: previousState
            })
            context.html(container.contents)

            // FF bug: Won't autofocus fields that are inserted via JS.
            // This behavior is incorrect. So if theres no current focus, autofocus
            // the last field.
            //
            // http://www.w3.org/html/wg/drafts/html/master/forms.html
            var autofocusEl = context.find('input[autofocus], textarea[autofocus]').last()[0]
            if (autofocusEl && document.activeElement !== autofocusEl) {
                autofocusEl.focus()
            }

            executeScriptTags(container.scripts)

            var scrollTo = options.scrollTo

            // Ensure browser scrolls to the element referenced by the URL anchor
            if (hash) {
                var name = decodeURIComponent(hash.slice(1))
                var target = document.getElementById(name) || document.getElementsByName(name)[0]
                if (target) scrollTo = $(target).offset().top
            }

            if (typeof scrollTo == 'number') $(window).scrollTop(scrollTo)

            fire('pjax:success', [data, status, xhr, options])
        }


        // Initialize pjax.state for the initial page load. Assume we're
        // using the container and options of the link we're loading for the
        // back button to the initial page. This ensures good back button
        // behavior.
        if (!pjax.state) {
            pjax.state = {
                id: uniqueId(),
                url: window.location.href,
                title: document.title,
                container: options.container,
                fragment: options.fragment,
                timeout: options.timeout
            }
            window.history.replaceState(pjax.state, document.title)
        }

        // Cancel the current request if we're already pjaxing
        abortXHR(pjax.xhr)

        pjax.options = options
        var xhr = pjax.xhr = $.ajax(options)

        if (xhr.readyState > 0) {
            if (options.push && !options.replace) {
                // Cache current container element before replacing it
                cachePush(pjax.state.id, [options.container, cloneContents(context)])

                window.history.pushState(null, "", options.requestUrl)
            }

            fire('pjax:start', [xhr, options])
            fire('pjax:send', [xhr, options])
        }

        return pjax.xhr
    }

// Public: Reload current page with pjax.
//
// Returns whatever $.pjax returns.
    function pjaxReload(container, options) {
        var defaults = {
            url: window.location.href,
            push: false,
            replace: true,
            scrollTo: false
        }

        return pjax($.extend(defaults, optionsFor(container, options)))
    }

// Internal: Hard replace current state with url.
//
// Work for around WebKit
//   https://bugs.webkit.org/show_bug.cgi?id=93506
//
// Returns nothing.
    function locationReplace(url) {
        window.history.replaceState(null, "", pjax.state.url)
        window.location.replace(url)
    }


    var initialPop = true
    var initialURL = window.location.href
    var initialState = window.history.state

// Initialize $.pjax.state if possible
// Happens when reloading a page and coming forward from a different
// session history.
    if (initialState && initialState.container) {
        pjax.state = initialState
    }

// Non-webkit browsers don't fire an initial popstate event
    if ('state' in window.history) {
        initialPop = false
    }

// popstate handler takes care of the back and forward buttons
//
// You probably shouldn't use pjax on pages with other pushState
// stuff yet.
    function onPjaxPopstate(event) {

        // Hitting back or forward should override any pending PJAX request.
        if (!initialPop) {
            abortXHR(pjax.xhr)
        }

        var previousState = pjax.state
        var state = event.state
        var direction

        if (state && state.container) {
            // When coming forward from a separate history session, will get an
            // initial pop with a state we are already at. Skip reloading the current
            // page.
            if (initialPop && initialURL == state.url) return

            if (previousState) {
                // If popping back to the same state, just skip.
                // Could be clicking back from hashchange rather than a pushState.
                if (previousState.id === state.id) return

                // Since state IDs always increase, we can deduce the navigation direction
                direction = previousState.id < state.id ? 'forward' : 'back'
            }

            var cache = cacheMapping[state.id] || []
            var containerSelector = cache[0] || state.container
            var container = $(containerSelector), contents = cache[1]

            if (container.length) {
                if (previousState) {
                    // Cache current container before replacement and inform the
                    // cache which direction the history shifted.
                    cachePop(direction, previousState.id, [containerSelector, cloneContents(container)])
                }

                var popstateEvent = $.Event('pjax:popstate', {
                    state: state,
                    direction: direction
                })
                container.trigger(popstateEvent)

                var options = {
                    id: state.id,
                    url: state.url,
                    container: containerSelector,
                    push: false,
                    fragment: state.fragment,
                    timeout: state.timeout,
                    scrollTo: false
                }

                if (contents) {
                    container.trigger('pjax:start', [null, options])

                    pjax.state = state
                    if (state.title) document.title = state.title
                    var beforeReplaceEvent = $.Event('pjax:beforeReplace', {
                        state: state,
                        previousState: previousState
                    })
                    container.trigger(beforeReplaceEvent, [contents, options])
                    container.html(contents)

                    container.trigger('pjax:end', [null, options])
                } else {
                    pjax(options)
                }

                // Force reflow/relayout before the browser tries to restore the
                // scroll position.
                container[0].offsetHeight // eslint-disable-line no-unused-expressions
            } else {
                locationReplace(location.href)
            }
        }
        initialPop = false
    }

// Fallback version of main pjax function for browsers that don't
// support pushState.
//
// Returns nothing since it retriggers a hard form submission.
    function fallbackPjax(options) {
        var url = $.isFunction(options.url) ? options.url() : options.url,
            method = options.type ? options.type.toUpperCase() : 'GET'

        var form = $('<form>', {
            method: method === 'GET' ? 'GET' : 'POST',
            action: url,
            style: 'display:none'
        })

        if (method !== 'GET' && method !== 'POST') {
            form.append($('<input>', {
                type: 'hidden',
                name: '_method',
                value: method.toLowerCase()
            }))
        }

        var data = options.data
        if (typeof data === 'string') {
            $.each(data.split('&'), function(index, value) {
                var pair = value.split('=')
                form.append($('<input>', {type: 'hidden', name: pair[0], value: pair[1]}))
            })
        } else if ($.isArray(data)) {
            $.each(data, function(index, value) {
                form.append($('<input>', {type: 'hidden', name: value.name, value: value.value}))
            })
        } else if (typeof data === 'object') {
            var key
            for (key in data)
                form.append($('<input>', {type: 'hidden', name: key, value: data[key]}))
        }

        $(document.body).append(form)
        form.submit()
    }

// Internal: Abort an XmlHttpRequest if it hasn't been completed,
// also removing its event handlers.
    function abortXHR(xhr) {
        if ( xhr && xhr.readyState < 4) {
            xhr.onreadystatechange = $.noop
            xhr.abort()
        }
    }

// Internal: Generate unique id for state object.
//
// Use a timestamp instead of a counter since ids should still be
// unique across page loads.
//
// Returns Number.
    function uniqueId() {
        return (new Date).getTime()
    }

    function cloneContents(container) {
        var cloned = container.clone()
        // Unmark script tags as already being eval'd so they can get executed again
        // when restored from cache. HAXX: Uses jQuery internal method.
        cloned.find('script').each(function(){
            if (!this.src) $._data(this, 'globalEval', false)
        })
        return cloned.contents()
    }

// Internal: Strip internal query params from parsed URL.
//
// Returns sanitized url.href String.
    function stripInternalParams(url) {
        url.search = url.search.replace(/([?&])(_pjax|_)=[^&]*/g, '').replace(/^&/, '')
        return url.href.replace(/\?($|#)/, '$1')
    }

// Internal: Parse URL components and returns a Locationish object.
//
// url - String URL
//
// Returns HTMLAnchorElement that acts like Location.
    function parseURL(url) {
        var a = document.createElement('a')
        a.href = url
        return a
    }

// Internal: Return the `href` component of given URL object with the hash
// portion removed.
//
// location - Location or HTMLAnchorElement
//
// Returns String
    function stripHash(location) {
        return location.href.replace(/#.*/, '')
    }

// Internal: Build options Object for arguments.
//
// For convenience the first parameter can be either the container or
// the options object.
//
// Examples
//
//   optionsFor('#container')
//   // => {container: '#container'}
//
//   optionsFor('#container', {push: true})
//   // => {container: '#container', push: true}
//
//   optionsFor({container: '#container', push: true})
//   // => {container: '#container', push: true}
//
// Returns options Object.
    function optionsFor(container, options) {
        if (container && options) {
            options = $.extend({}, options)
            options.container = container
            return options
        } else if ($.isPlainObject(container)) {
            return container
        } else {
            return {container: container}
        }
    }

// Internal: Filter and find all elements matching the selector.
//
// Where $.fn.find only matches descendants, findAll will test all the
// top level elements in the jQuery object as well.
//
// elems    - jQuery object of Elements
// selector - String selector to match
//
// Returns a jQuery object.
    function findAll(elems, selector) {
        return elems.filter(selector).add(elems.find(selector))
    }

    function parseHTML(html) {
        return $.parseHTML(html, document, true)
    }

// Internal: Extracts container and metadata from response.
//
// 1. Extracts X-PJAX-URL header if set
// 2. Extracts inline <title> tags
// 3. Builds response Element and extracts fragment if set
//
// data    - String response data
// xhr     - XHR response
// options - pjax options Object
//
// Returns an Object with url, title, and contents keys.
    function extractContainer(data, xhr, options) {
        var obj = {}, fullDocument = /<html/i.test(data)

        // Prefer X-PJAX-URL header if it was set, otherwise fallback to
        // using the original requested url.
        var serverUrl = xhr.getResponseHeader('X-PJAX-URL')
        obj.url = serverUrl ? stripInternalParams(parseURL(serverUrl)) : options.requestUrl

        var $head, $body
        // Attempt to parse response html into elements
        if (fullDocument) {
            $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
            var head = data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)
            $head = head != null ? $(parseHTML(head[0])) : $body
        } else {
            $head = $body = $(parseHTML(data))
        }

        // If response data is empty, return fast
        if ($body.length === 0)
            return obj

        // If there's a <title> tag in the header, use it as
        // the page's title.
        obj.title = findAll($head, 'title').last().text()

        if (options.fragment) {
            var $fragment = $body
            // If they specified a fragment, look for it in the response
            // and pull it out.
            if (options.fragment !== 'body') {
                $fragment = findAll($fragment, options.fragment).first()
            }

            if ($fragment.length) {
                obj.contents = options.fragment === 'body' ? $fragment : $fragment.contents()

                // If there's no title, look for data-title and title attributes
                // on the fragment
                if (!obj.title)
                    obj.title = $fragment.attr('title') || $fragment.data('title')
            }

        } else if (!fullDocument) {
            obj.contents = $body
        }

        // Clean up any <title> tags
        if (obj.contents) {
            // Remove any parent title elements
            obj.contents = obj.contents.not(function() { return $(this).is('title') })

            // Then scrub any titles from their descendants
            obj.contents.find('title').remove()

            // Gather all script[src] elements
            obj.scripts = findAll(obj.contents, 'script[src]').remove()
            obj.contents = obj.contents.not(obj.scripts)
        }

        // Trim any whitespace off the title
        if (obj.title) obj.title = $.trim(obj.title)

        return obj
    }

// Load an execute scripts using standard script request.
//
// Avoids jQuery's traditional $.getScript which does a XHR request and
// globalEval.
//
// scripts - jQuery object of script Elements
//
// Returns nothing.
    function executeScriptTags(scripts) {
        if (!scripts) return

        var existingScripts = $('script[src]')

        scripts.each(function() {
            var src = this.src
            var matchedScripts = existingScripts.filter(function() {
                return this.src === src
            })
            if (matchedScripts.length) return

            var script = document.createElement('script')
            var type = $(this).attr('type')
            if (type) script.type = type
            script.src = $(this).attr('src')
            document.head.appendChild(script)
        })
    }

// Internal: History DOM caching class.
    var cacheMapping      = {}
    var cacheForwardStack = []
    var cacheBackStack    = []

// Push previous state id and container contents into the history
// cache. Should be called in conjunction with `pushState` to save the
// previous container contents.
//
// id    - State ID Number
// value - DOM Element to cache
//
// Returns nothing.
    function cachePush(id, value) {
        cacheMapping[id] = value
        cacheBackStack.push(id)

        // Remove all entries in forward history stack after pushing a new page.
        trimCacheStack(cacheForwardStack, 0)

        // Trim back history stack to max cache length.
        trimCacheStack(cacheBackStack, pjax.defaults.maxCacheLength)
    }

// Shifts cache from directional history cache. Should be
// called on `popstate` with the previous state id and container
// contents.
//
// direction - "forward" or "back" String
// id        - State ID Number
// value     - DOM Element to cache
//
// Returns nothing.
    function cachePop(direction, id, value) {
        var pushStack, popStack
        cacheMapping[id] = value

        if (direction === 'forward') {
            pushStack = cacheBackStack
            popStack  = cacheForwardStack
        } else {
            pushStack = cacheForwardStack
            popStack  = cacheBackStack
        }

        pushStack.push(id)
        id = popStack.pop()
        if (id) delete cacheMapping[id]

        // Trim whichever stack we just pushed to to max cache length.
        trimCacheStack(pushStack, pjax.defaults.maxCacheLength)
    }

// Trim a cache stack (either cacheBackStack or cacheForwardStack) to be no
// longer than the specified length, deleting cached DOM elements as necessary.
//
// stack  - Array of state IDs
// length - Maximum length to trim to
//
// Returns nothing.
    function trimCacheStack(stack, length) {
        while (stack.length > length)
            delete cacheMapping[stack.shift()]
    }

// Public: Find version identifier for the initial page load.
//
// Returns String version or undefined.
    function findVersion() {
        return $('meta').filter(function() {
            var name = $(this).attr('http-equiv')
            return name && name.toUpperCase() === 'X-PJAX-VERSION'
        }).attr('content')
    }

// Install pjax functions on $.pjax to enable pushState behavior.
//
// Does nothing if already enabled.
//
// Examples
//
//     $.pjax.enable()
//
// Returns nothing.
    function enable() {
        $.fn.pjax = fnPjax
        $.pjax = pjax
        $.pjax.enable = $.noop
        $.pjax.disable = disable
        $.pjax.click = handleClick
        $.pjax.submit = handleSubmit
        $.pjax.reload = pjaxReload
        $.pjax.defaults = {
            timeout: 650,
            push: true,
            replace: false,
            type: 'GET',
            dataType: 'html',
            scrollTo: 0,
            maxCacheLength: 20,
            version: findVersion
        }
        $(window).on('popstate.pjax', onPjaxPopstate)
    }

// Disable pushState behavior.
//
// This is the case when a browser doesn't support pushState. It is
// sometimes useful to disable pushState for debugging on a modern
// browser.
//
// Examples
//
//     $.pjax.disable()
//
// Returns nothing.
    function disable() {
        $.fn.pjax = function() { return this }
        $.pjax = fallbackPjax
        $.pjax.enable = enable
        $.pjax.disable = $.noop
        $.pjax.click = $.noop
        $.pjax.submit = $.noop
        $.pjax.reload = function() { window.location.reload() }

        $(window).off('popstate.pjax', onPjaxPopstate)
    }


// Add the state property to jQuery's event object so we can use it in
// $(window).bind('popstate')
    if ($.event.props && $.inArray('state', $.event.props) < 0) {
        $.event.props.push('state')
    } else if (!('state' in $.Event.prototype)) {
        $.event.addProp('state')
    }

// Is pjax supported by this browser?
    $.support.pjax =
        window.history && window.history.pushState && window.history.replaceState &&
        // pushState isn't reliable on iOS until 5.
        !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)

    if ($.support.pjax) {
        enable()
    } else {
        disable()
    }

})(jQuery)
/*pjax end*/

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){(function(o){var l,r,i;!function(o,s){r=[],l=function(e){"use strict";var t,o,l,r=n(2),i={},s={},c=n(3),a=n(4),u=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"==typeof window&&!u)return;var d=Object.prototype.hasOwnProperty;function f(e,t,n){var o,l;return t||(t=250),function(){var r=n||this,i=+new Date,s=arguments;o&&i<o+t?(clearTimeout(l),l=setTimeout(function(){o=i,e.apply(r,s)},t)):(o=i,e.apply(r,s))}}return s.destroy=function(){if(!i.skipRendering)try{document.querySelector(i.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+i.tocSelector)}i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(i.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},s.init=function(e){if(u&&(i=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)d.call(n,o)&&(e[o]=n[o])}return e}(r,e||{}),this.options=i,this.state={},i.scrollSmooth&&(i.duration=i.scrollSmoothDuration,i.offset=i.scrollSmoothOffset,s.scrollSmooth=n(5).initSmoothScrolling(i)),t=c(i),o=a(i),this._buildHtml=t,this._parseContent=o,s.destroy(),null!==(l=o.selectHeadings(i.contentSelector,i.headingSelector)))){var m=o.nestHeadingsArray(l).nest;i.skipRendering||t.render(i.tocSelector,m),this._scrollListener=f(function(e){t.updateToc(l);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(l),i.scrollEndCallback&&i.scrollEndCallback(e))},i.throttleTimeout),this._scrollListener(),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var h=null;return this._clickListener=f(function(e){i.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(l),h&&clearTimeout(h),h=setTimeout(function(){t.enableTocAnimation()},i.scrollSmoothDuration)},i.throttleTimeout),i.scrollContainer&&document.querySelector(i.scrollContainer)?document.querySelector(i.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},s.refresh=function(e){s.destroy(),s.init(e||this.options)},e.tocbot=s,s}(o),void 0===(i="function"==typeof l?l.apply(t,r):l)||(e.exports=i)}(void 0!==o?o:this.window||this.global)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:""}},function(e,t){e.exports=function(e){var t=[].forEach,n=[].some,o=document.body,l=!0,r=" ";function i(n,o){var l=o.appendChild(function(n){var o=document.createElement("li"),l=document.createElement("a");e.listItemClass&&o.setAttribute("class",e.listItemClass);e.onClick&&(l.onclick=e.onClick);e.includeHtml&&n.childNodes.length?t.call(n.childNodes,function(e){l.appendChild(e.cloneNode(!0))}):l.textContent=n.textContent;return l.setAttribute("href",e.basePath+"#"+n.id),l.setAttribute("class",e.linkClass+r+"node-name--"+n.nodeName+r+e.extraLinkClasses),o.appendChild(l),o}(n));if(n.children.length){var c=s(n.isCollapsed);n.children.forEach(function(e){i(e,c)}),l.appendChild(c)}}function s(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),l=e.listClass+r+e.extraListClasses;return t&&(l+=r+e.collapsibleClass,l+=r+e.isCollapsedClass),o.setAttribute("class",l),o}return{enableTocAnimation:function(){l=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(l=!1)},render:function(e,t){var n=s(!1);t.forEach(function(e){i(e,n)});var o=document.querySelector(e);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===t.length?o:o.appendChild(n)},updateToc:function(i){var s;s=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var t;t=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=r+e.positionFixedClass):n.className=n.className.split(r+e.positionFixedClass).join("")}();var c,a=i;if(l&&null!==document.querySelector(e.tocSelector)&&a.length>0){n.call(a,function(t,n){return function t(n){var o=0;return n!==document.querySelector(e.contentSelector&&null!=n)&&(o=n.offsetTop,e.hasInnerContainers&&(o+=t(n.offsetParent))),o}(t)>s+e.headingsOffset+10?(c=a[0===n?n:n-1],!0):n===a.length-1?(c=a[a.length-1],!0):void 0});var u=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(u,function(t){t.className=t.className.split(r+e.activeLinkClass).join("")});var d=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(d,function(t){t.className=t.className.split(r+e.activeListItemClass).join("")});var f=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+c.nodeName+'[href="'+e.basePath+"#"+c.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');-1===f.className.indexOf(e.activeLinkClass)&&(f.className+=r+e.activeLinkClass);var m=f.parentNode;m&&-1===m.className.indexOf(e.activeListItemClass)&&(m.className+=r+e.activeListItemClass);var h=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(h,function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=r+e.isCollapsedClass)}),f.nextSibling&&-1!==f.nextSibling.className.indexOf(e.isCollapsedClass)&&(f.nextSibling.className=f.nextSibling.className.split(r+e.isCollapsedClass).join("")),function t(n){return-1!==n.className.indexOf(e.collapsibleClass)&&-1!==n.className.indexOf(e.isCollapsedClass)?(n.className=n.className.split(r+e.isCollapsedClass).join(""),t(n.parentNode.parentNode)):n}(f.parentNode.parentNode)}}}}},function(e,t){e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:function(e){return+e.nodeName.split("H").join("")}(t),textContent:e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(n,t):n}return{nestHeadingsArray:function(l){return t.call(l,function(t,l){var r=o(l);return r&&function(t,l){for(var r=o(t),i=r.headingLevel,s=l,c=n(s),a=i-(c?c.headingLevel:0);a>0;)(c=n(s))&&void 0!==c.children&&(s=c.children),a--;i>=e.collapseDepth&&(r.isCollapsed=!0),s.push(r)}(r,t.nest),t},{nest:[]})},selectHeadings:function(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map(function(t){return t.trim()+":not("+e.ignoreSelector+")"}));try{return document.querySelector(t).querySelectorAll(o)}catch(e){return console.warn("Element not found: "+t),null}}}}},function(e,t){function n(e,t){var n=window.pageYOffset,o={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||d},l=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),r=typeof e==="string"?o.offset+(e?l&&l.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,i=typeof o.duration==="function"?o.duration(r):o.duration,s,c;function a(e){c=e-s;window.scrollTo(0,o.easing(c,n,r,i));if(c<i){requestAnimationFrame(a)}else{u()}}function u(){if(window.scrollTo(0,n+r),"function"==typeof o.callback){o.callback()}}function d(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame(function(e){s=e;a(e)})}t.initSmoothScrolling=function(e){document.documentElement.style;var t=e.duration,o=e.offset,l=location.hash?r(location.href):location.href;function r(e){return e.slice(0,e.lastIndexOf("#"))}!function(){document.body.addEventListener("click",function(i){if(!function(e){return"a"===e.tagName.toLowerCase()&&(e.hash.length>0||"#"===e.href.charAt(e.href.length-1))&&(r(e.href)===l||r(e.href)+"#"===l)}(i.target)||i.target.className.indexOf("no-smooth-scroll")>-1||"#"===i.target.href.charAt(i.target.href.length-2)&&"!"===i.target.href.charAt(i.target.href.length-1)||-1===i.target.className.indexOf(e.linkClass))return;n(i.target.hash,{duration:t,offset:o,callback:function(){!function(e){var t=document.getElementById(e.substring(1));t&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}(i.target.hash)}})},!1)}()}}]);
/*toc end*/

/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function(){function k(a,b){return[].slice.call((b||document).querySelectorAll(a))}if(window.addEventListener){var e=window.StyleFix={link:function(a){try{if("stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(b){return}var c=a.href||a.getAttribute("data-href"),d=c.replace(/[^\/]+$/,""),h=(/^[a-z]{3,10}:/.exec(d)||[""])[0],l=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(d)||[""])[0],g=/^([^?]*)\??/.exec(c)[1],m=a.parentNode,f=new XMLHttpRequest,n;f.onreadystatechange=function(){4===f.readyState&&
    n()};n=function(){var b=f.responseText;if(b&&a.parentNode&&(!f.status||400>f.status||600<f.status)){b=e.fix(b,!0,a);if(d)var b=b.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(b,a,c){return/^([a-z]{3,10}:|#)/i.test(c)?b:/^\/\//.test(c)?'url("'+h+c+'")':/^\//.test(c)?'url("'+l+c+'")':/^\?/.test(c)?'url("'+g+c+'")':'url("'+d+c+'")'}),c=d.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),b=b.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+c,"gi"),"$1");c=document.createElement("style");c.textContent=
        b;c.media=a.media;c.disabled=a.disabled;c.setAttribute("data-href",a.getAttribute("href"));m.insertBefore(c,a);m.removeChild(a);c.media=a.media}};try{f.open("GET",c),f.send(null)}catch(p){"undefined"!=typeof XDomainRequest&&(f=new XDomainRequest,f.onerror=f.onprogress=function(){},f.onload=n,f.open("GET",c),f.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){if(!a.hasAttribute("data-noprefix")){var b=a.disabled;a.textContent=e.fix(a.textContent,!0,a);a.disabled=b}},styleAttribute:function(a){var b=
        a.getAttribute("style"),b=e.fix(b,!1,a);a.setAttribute("style",b)},process:function(){k('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);k("style").forEach(StyleFix.styleElement);k("[style]").forEach(StyleFix.styleAttribute)},register:function(a,b){(e.fixers=e.fixers||[]).splice(void 0===b?e.fixers.length:b,0,a)},fix:function(a,b,c){for(var d=0;d<e.fixers.length;d++)a=e.fixers[d](a,b,c)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(b,a){return a.toUpperCase()}).replace("-",
        "")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(b){return"-"+b.toLowerCase()})}};(function(){setTimeout(function(){k('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)})()}})();
(function(k){function e(b,c,d,h,l){b=a[b];b.length&&(b=RegExp(c+"("+b.join("|")+")"+d,"gi"),l=l.replace(b,h));return l}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(b,c,d){var h=a.prefix;-1<a.functions.indexOf("linear-gradient")&&(b=b.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(b,a,c,d){return a+(c||"")+"linear-gradient("+(90-d)+"deg"}));b=e("functions","(\\s|:|,)","\\s*\\(","$1"+h+"$2(",b);b=e("keywords","(\\s|:)","(\\s|;|\\}|$)",
        "$1"+h+"$2$3",b);b=e("properties","(^|\\{|\\s|;)","\\s*:","$1"+h+"$2:",b);if(a.properties.length){var l=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi");b=e("valueProperties","\\b",":(.+?);",function(a){return a.replace(l,h+"$1")},b)}c&&(b=e("selectors","","\\b",a.prefixSelector,b),b=e("atrules","@","\\b","@"+h+"$1",b));b=b.replace(RegExp("-"+h,"g"),"-");return b=b.replace(/-\*-(?=[a-z]+)/gi,a.prefix)},property:function(b){return(0<=a.properties.indexOf(b)?a.prefix:"")+b},value:function(b,c){b=
        e("functions","(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",b);b=e("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",b);0<=a.valueProperties.indexOf(c)&&(b=e("properties","(^|\\s|,)","($|\\s|,)","$1"+a.prefix+"$2$3",b));return b},prefixSelector:function(b){return b.replace(/^:{1,2}/,function(b){return b+a.prefix})},prefixProperty:function(b,c){var d=a.prefix+b;return c?StyleFix.camelCase(d):d}};(function(){var b={},c=[],d=getComputedStyle(document.documentElement,null),h=document.createElement("div").style,
    l=function(a){if("-"===a.charAt(0)){c.push(a);a=a.split("-");var d=a[1];for(b[d]=++b[d]||1;3<a.length;)a.pop(),d=a.join("-"),StyleFix.camelCase(d)in h&&-1===c.indexOf(d)&&c.push(d)}};if(0<d.length)for(var g=0;g<d.length;g++)l(d[g]);else for(var e in d)l(StyleFix.deCamelCase(e));var g=0,f,k;for(k in b)d=b[k],g<d&&(f=k,g=d);a.prefix="-"+f+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(g=0;g<c.length;g++)e=c[g],0===e.indexOf(a.prefix)&&(f=e.slice(a.prefix.length),StyleFix.camelCase(f)in
h||a.properties.push(f));!("Ms"!=a.Prefix||"transform"in h||"MsTransform"in h)&&"msTransform"in h&&a.properties.push("transform","transform-origin");a.properties.sort()})();(function(){function b(a,b){h[b]="";h[b]=a;return!!h[b]}var c={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};c["repeating-linear-gradient"]=
    c["repeating-radial-gradient"]=c["radial-gradient"]=c["linear-gradient"];var d={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display",grid:"display","inline-grid":"display","max-content":"width","min-content":"width","fit-content":"width","fill-available":"width"};a.functions=[];a.keywords=[];var h=document.createElement("div").style,e;for(e in c){var g=c[e],k=g.property,g=e+"("+g.params+")";!b(g,k)&&
b(a.prefix+g,k)&&a.functions.push(e)}for(var f in d)k=d[f],!b(f,k)&&b(a.prefix+f,k)&&a.keywords.push(f)})();(function(){function b(a){e.textContent=a+"{}";return!!e.sheet.cssRules.length}var c={":read-only":null,":read-write":null,":any-link":null,"::selection":null},d={keyframes:"name",viewport:null,document:'regexp(".")'};a.selectors=[];a.atrules=[];var e=k.appendChild(document.createElement("style")),l;for(l in c){var g=l+(c[l]?"("+c[l]+")":"");!b(g)&&b(a.prefixSelector(g))&&a.selectors.push(l)}for(var m in d)g=
    m+" "+(d[m]||""),!b("@"+g)&&b("@"+a.prefix+g)&&a.atrules.push(m);k.removeChild(e)})();a.valueProperties=["transition","transition-property"];k.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);
/*PrefixFree end*/

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
(function($) {
    $(function() {
        // default is varying levels of transparent white sparkles
        $(".sparkley:first").sparkleh();

        // rainbow as a color generates random rainbow colros
        // count determines number of sparkles
        // overlap allows sparkles to migrate... watch out for other dom elements though.
        $(".sparkley:last").sparkleh({
            color: "rainbow",
            count: 100,
            overlap: 10
        });

        // here we create fuscia sparkles
        $(".jasmine-post-h1").sparkleh({
            count: 80,
            color: ["#ff0080", "#ff0080", "#0000FF"]
        });


        //取消p标签
        // $("p").sparkleh({
        //   count: 20,
        //   color: "#00ff00",
        //   speed: 0.05
        // });


        // an array can be passed, too for colours
        // for an image, the image needs to be fully loaded to set
        // the canvas to it's height/width.
        // speed allows us to control... the ... velocity
        // $("#image").imagesLoaded( function() {
        //   $(".img").sparkleh({
        //     count: 25,
        //     color: ["#00afec","#fb6f4a","#fdfec5"],
        //   speed: 0.4
        //   });
        // });


    });
})(jQuery);






$.fn.sparkleh = function(options) {

    return this.each(function(k, v) {

        var $this = $(v).css("position", "relative");

        var settings = $.extend({
            width: $this.outerWidth(),
            height: $this.outerHeight(),
            color: "#FFFFFF",
            count: 30,
            overlap: 0,
            speed: 1
        }, options);

        var sparkle = new Sparkle($this, settings);

        $this.on({
            "mouseover focus": function(e) {
                sparkle.over();
            },
            "mouseout blur": function(e) {
                sparkle.out();
            }
        });

    });

}




function Sparkle($parent, options) {
    this.options = options;
    this.init($parent);
}

Sparkle.prototype = {

    "init": function($parent) {

        var _this = this;

        this.$canvas =
            $("<canvas>")
                .addClass("sparkle-canvas")
                .css({
                    position: "absolute",
                    top: "-" + _this.options.overlap + "px",
                    left: "-" + _this.options.overlap + "px",
                    "pointer-events": "none"
                })
                .appendTo($parent);

        this.canvas = this.$canvas[0];
        this.context = this.canvas.getContext("2d");

        this.sprite = new Image();
        this.sprites = [0, 6, 13, 20];
        this.sprite.src = this.datauri;

        this.canvas.width = this.options.width + (this.options.overlap * 2);
        this.canvas.height = this.options.height + (this.options.overlap * 2);


        this.particles = this.createSparkles(this.canvas.width, this.canvas.height);

        this.anim = null;
        this.fade = false;

    },

    "createSparkles": function(w, h) {

        var holder = [];

        for (var i = 0; i < this.options.count; i++) {

            var color = this.options.color;

            if (this.options.color == "rainbow") {
                color = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
            } else if ($.type(this.options.color) === "array") {
                color = this.options.color[Math.floor(Math.random() * this.options.color.length)];
            }

            holder[i] = {
                position: {
                    x: Math.floor(Math.random() * w),
                    y: Math.floor(Math.random() * h)
                },
                style: this.sprites[Math.floor(Math.random() * 4)],
                delta: {
                    x: Math.floor(Math.random() * 1000) - 500,
                    y: Math.floor(Math.random() * 1000) - 500
                },
                size: parseFloat((Math.random() * 2).toFixed(2)),
                color: color
            };

        }

        return holder;

    },

    "draw": function(time, fade) {

        var ctx = this.context;

        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = 0; i < this.options.count; i++) {

            var derpicle = this.particles[i];
            var modulus = Math.floor(Math.random() * 7);

            if (Math.floor(time) % modulus === 0) {
                derpicle.style = this.sprites[Math.floor(Math.random() * 4)];
            }

            ctx.save();
            ctx.globalAlpha = derpicle.opacity;
            ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);

            if (this.options.color) {

                ctx.globalCompositeOperation = "source-atop";
                ctx.globalAlpha = 0.5;
                ctx.fillStyle = derpicle.color;
                ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);

            }

            ctx.restore();

        }


    },

    "update": function() {

        var _this = this;

        this.anim = window.requestAnimationFrame(function(time) {

            for (var i = 0; i < _this.options.count; i++) {

                var u = _this.particles[i];

                var randX = (Math.random() > Math.random() * 2);
                var randY = (Math.random() > Math.random() * 3);

                if (randX) {
                    u.position.x += ((u.delta.x * _this.options.speed) / 1500);
                }

                if (!randY) {
                    u.position.y -= ((u.delta.y * _this.options.speed) / 800);
                }

                if (u.position.x > _this.canvas.width) {
                    u.position.x = -7;
                } else if (u.position.x < -7) {
                    u.position.x = _this.canvas.width;
                }

                if (u.position.y > _this.canvas.height) {
                    u.position.y = -7;
                    u.position.x = Math.floor(Math.random() * _this.canvas.width);
                } else if (u.position.y < -7) {
                    u.position.y = _this.canvas.height;
                    u.position.x = Math.floor(Math.random() * _this.canvas.width);
                }

                if (_this.fade) {
                    u.opacity -= 0.02;
                } else {
                    u.opacity -= 0.005;
                }

                if (u.opacity <= 0) {
                    u.opacity = (_this.fade) ? 0 : 1;
                }

            }

            _this.draw(time);

            if (_this.fade) {
                _this.fadeCount -= 1;
                if (_this.fadeCount < 0) {
                    window.cancelAnimationFrame(_this.anim);
                } else {
                    _this.update();
                }
            } else {
                _this.update();
            }

        });

    },

    "cancel": function() {

        this.fadeCount = 100;

    },

    "over": function() {

        window.cancelAnimationFrame(this.anim);

        for (var i = 0; i < this.options.count; i++) {
            this.particles[i].opacity = Math.random();
        }

        this.fade = false;
        this.update();

    },

    "out": function() {

        this.fade = true;
        this.cancel();

    },



    "datauri": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jzOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DKyLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmKQ3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=="

};





// $('img.photo',this).imagesLoaded(myFunction)
// execute a callback when all images have loaded.
// needed because .load() doesn't work on cached images

// mit license. paul irish. 2010.
// webkit fix from Oren Solomianik. thx!

// callback function is passed the last image to load
//   as an argument, and the collection as `this`


$.fn.imagesLoaded = function(callback) {
    var elems = this.filter('img'),
        len = elems.length,
        blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

    elems.bind('load.imgloaded', function() {
        if (--len <= 0 && this.src !== blank) {
            elems.unbind('load.imgloaded');
            callback.call(elems, this);
        }
    }).each(function() {
        // cached images don't fire load sometimes, so we reset src.
        if (this.complete || this.complete === undefined) {
            var src = this.src;
            // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
            // data uri bypasses webkit log warning (thx doug jones)
            this.src = blank;
            this.src = src;
        }
    });

    return this;
};

/*star end*/

(function webpackUniversalModuleDefinition(root, factory) {
    if(typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define([], factory);
    else if(typeof exports === 'object')
        exports["POWERMODE"] = factory();
    else
        root["POWERMODE"] = factory();
})(this, function() {
    return /******/ (function(modules) { // webpackBootstrap
        /******/    // The module cache
        /******/    var installedModules = {};

        /******/    // The require function
        /******/    function __webpack_require__(moduleId) {

            /******/        // Check if module is in cache
            /******/        if(installedModules[moduleId])
                /******/            return installedModules[moduleId].exports;

            /******/        // Create a new module (and put it into the cache)
            /******/        var module = installedModules[moduleId] = {
                /******/            exports: {},
                /******/            id: moduleId,
                /******/            loaded: false
                /******/        };

            /******/        // Execute the module function
            /******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/        // Flag the module as loaded
            /******/        module.loaded = true;

            /******/        // Return the exports of the module
            /******/        return module.exports;
            /******/    }


        /******/    // expose the modules object (__webpack_modules__)
        /******/    __webpack_require__.m = modules;

        /******/    // expose the module cache
        /******/    __webpack_require__.c = installedModules;

        /******/    // __webpack_public_path__
        /******/    __webpack_require__.p = "";

        /******/    // Load entry module and return exports
        /******/    return __webpack_require__(0);
        /******/ })
        /************************************************************************/
        /******/ ([
            /* 0 */
            /***/ function(module, exports, __webpack_require__) {

                'use strict';

                var canvas = document.createElement('canvas');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:999999';
                window.addEventListener('resize', function () {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                });
                document.body.appendChild(canvas);
                var context = canvas.getContext('2d');
                var particles = [];
                var particlePointer = 0;

                POWERMODE.shake = true;

                function getRandom(min, max) {
                    return Math.random() * (max - min) + min;
                }

                function getColor(el) {
                    if (POWERMODE.colorful) {
                        var u = getRandom(0, 360);
                        return 'hsla(' + getRandom(u - 10, u + 10) + ', 100%, ' + getRandom(50, 80) + '%, ' + 1 + ')';
                    } else {
                        return window.getComputedStyle(el).color;
                    }
                }

                function getCaret() {
                    var el = document.activeElement;
                    var bcr;
                    if (el.tagName === 'TEXTAREA' ||
                        (el.tagName === 'INPUT' && el.getAttribute('type') === 'text')) {
                        var offset = __webpack_require__(1)(el, el.selectionStart);
                        bcr = el.getBoundingClientRect();
                        return {
                            x: offset.left + bcr.left,
                            y: offset.top + bcr.top,
                            color: getColor(el)
                        };
                    }
                    var selection = window.getSelection();
                    if (selection.rangeCount) {
                        var range = selection.getRangeAt(0);
                        var startNode = range.startContainer;
                        if (startNode.nodeType === document.TEXT_NODE) {
                            startNode = startNode.parentNode;
                        }
                        bcr = range.getBoundingClientRect();
                        return {
                            x: bcr.left,
                            y: bcr.top,
                            color: getColor(startNode)
                        };
                    }
                    return { x: 0, y: 0, color: 'transparent' };
                }

                function createParticle(x, y, color) {
                    return {
                        x: x,
                        y: y,
                        alpha: 1,
                        color: color,
                        velocity: {
                            x: -1 + Math.random() * 2,
                            y: -3.5 + Math.random() * 2
                        }
                    };
                }

                function POWERMODE() {
                    { // spawn particles
                        var caret = getCaret();
                        var numParticles = 5 + Math.round(Math.random() * 10);
                        while (numParticles--) {
                            particles[particlePointer] = createParticle(caret.x, caret.y, caret.color);
                            particlePointer = (particlePointer + 1) % 500;
                        }
                    }
                    { // shake screen
                        if (POWERMODE.shake) {
                            var intensity = 1 + 2 * Math.random();
                            var x = intensity * (Math.random() > 0.5 ? -1 : 1);
                            var y = intensity * (Math.random() > 0.5 ? -1 : 1);
                            document.body.style.marginLeft = x + 'px';
                            document.body.style.marginTop = y + 'px';
                            setTimeout(function() {
                                document.body.style.marginLeft = '';
                                document.body.style.marginTop = '';
                            }, 75);
                        }
                    }
                };
                POWERMODE.colorful = false;

                function loop() {
                    requestAnimationFrame(loop);
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    for (var i = 0; i < particles.length; ++i) {
                        var particle = particles[i];
                        if (particle.alpha <= 0.1) continue;
                        particle.velocity.y += 0.075;
                        particle.x += particle.velocity.x;
                        particle.y += particle.velocity.y;
                        particle.alpha *= 0.96;
                        context.globalAlpha = particle.alpha;
                        context.fillStyle = particle.color;
                        context.fillRect(
                            Math.round(particle.x - 1.5),
                            Math.round(particle.y - 1.5),
                            3, 3
                        );
                    }
                }
                requestAnimationFrame(loop);

                module.exports = POWERMODE;


                /***/ },
            /* 1 */
            /***/ function(module, exports) {

                /* jshint browser: true */

                (function () {

                    // The properties that we copy into a mirrored div.
                    // Note that some browsers, such as Firefox,
                    // do not concatenate properties, i.e. padding-top, bottom etc. -> padding,
                    // so we have to do every single property specifically.
                    var properties = [
                        'direction',  // RTL support
                        'boxSizing',
                        'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
                        'height',
                        'overflowX',
                        'overflowY',  // copy the scrollbar for IE

                        'borderTopWidth',
                        'borderRightWidth',
                        'borderBottomWidth',
                        'borderLeftWidth',
                        'borderStyle',

                        'paddingTop',
                        'paddingRight',
                        'paddingBottom',
                        'paddingLeft',

                        // https://developer.mozilla.org/en-US/docs/Web/CSS/font
                        'fontStyle',
                        'fontVariant',
                        'fontWeight',
                        'fontStretch',
                        'fontSize',
                        'fontSizeAdjust',
                        'lineHeight',
                        'fontFamily',

                        'textAlign',
                        'textTransform',
                        'textIndent',
                        'textDecoration',  // might not make a difference, but better be safe

                        'letterSpacing',
                        'wordSpacing',

                        'tabSize',
                        'MozTabSize'

                    ];

                    var isFirefox = window.mozInnerScreenX != null;

                    function getCaretCoordinates(element, position, options) {

                        var debug = options && options.debug || false;
                        if (debug) {
                            var el = document.querySelector('#input-textarea-caret-position-mirror-div');
                            if ( el ) { el.parentNode.removeChild(el); }
                        }

                        // mirrored div
                        var div = document.createElement('div');
                        div.id = 'input-textarea-caret-position-mirror-div';
                        document.body.appendChild(div);

                        var style = div.style;
                        var computed = window.getComputedStyle? getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9

                        // default textarea styles
                        style.whiteSpace = 'pre-wrap';
                        if (element.nodeName !== 'INPUT')
                            style.wordWrap = 'break-word';  // only for textarea-s

                        // position off-screen
                        style.position = 'absolute';  // required to return coordinates properly
                        if (!debug)
                            style.visibility = 'hidden';  // not 'display: none' because we want rendering

                        // transfer the element's properties to the div
                        properties.forEach(function (prop) {
                            style[prop] = computed[prop];
                        });

                        if (isFirefox) {
                            // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
                            if (element.scrollHeight > parseInt(computed.height))
                                style.overflowY = 'scroll';
                        } else {
                            style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
                        }

                        div.textContent = element.value.substring(0, position);
                        // the second special handling for input type="text" vs textarea: spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
                        if (element.nodeName === 'INPUT')
                            div.textContent = div.textContent.replace(/\s/g, "\u00a0");

                        var span = document.createElement('span');
                        // Wrapping must be replicated *exactly*, including when a long word gets
                        // onto the next line, with whitespace at the end of the line before (#7).
                        // The  *only* reliable way to do that is to copy the *entire* rest of the
                        // textarea's content into the <span> created at the caret position.
                        // for inputs, just '.' would be enough, but why bother?
                        span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
                        div.appendChild(span);

                        var coordinates = {
                            top: span.offsetTop + parseInt(computed['borderTopWidth']),
                            left: span.offsetLeft + parseInt(computed['borderLeftWidth'])
                        };

                        if (debug) {
                            span.style.backgroundColor = '#aaa';
                        } else {
                            document.body.removeChild(div);
                        }

                        return coordinates;
                    }

                    if (typeof module != "undefined" && typeof module.exports != "undefined") {
                        module.exports = getCaretCoordinates;
                    } else {
                        window.getCaretCoordinates = getCaretCoordinates;
                    }

                }());

                /***/ }
            /******/ ])
});
/*input-stars*/

/**
 * Minified by jsDelivr using UglifyJS v3.4.4.
 * Original file: /npm/nprogress@0.2.0/nprogress.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n():e.NProgress=n()}(this,function(){var n,t,o={version:"0.2.0"},a=o.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function u(e,n,t){return e<n?n:t<e?t:e}function c(e){return 100*(-1+e)}o.configure=function(e){var n,t;for(n in e)void 0!==(t=e[n])&&e.hasOwnProperty(n)&&(a[n]=t);return this},o.status=null,o.set=function(n){var e=o.isStarted();n=u(n,a.minimum,1),o.status=1===n?null:n;var t=o.render(!e),r=t.querySelector(a.barSelector),i=a.speed,s=a.easing;return t.offsetWidth,l(function(e){""===a.positionUsing&&(a.positionUsing=o.getPositioningCSS()),f(r,function(e,n,t){var r;r="translate3d"===a.positionUsing?{transform:"translate3d("+c(e)+"%,0,0)"}:"translate"===a.positionUsing?{transform:"translate("+c(e)+"%,0)"}:{"margin-left":c(e)+"%"};return r.transition="all "+n+"ms "+t,r}(n,i,s)),1===n?(f(t,{transition:"none",opacity:1}),t.offsetWidth,setTimeout(function(){f(t,{transition:"all "+i+"ms linear",opacity:0}),setTimeout(function(){o.remove(),e()},i)},i)):setTimeout(e,i)}),this},o.isStarted=function(){return"number"==typeof o.status},o.start=function(){o.status||o.set(0);var e=function(){setTimeout(function(){o.status&&(o.trickle(),e())},a.trickleSpeed)};return a.trickle&&e(),this},o.done=function(e){return e||o.status?o.inc(.3+.5*Math.random()).set(1):this},o.inc=function(e){var n=o.status;return n?("number"!=typeof e&&(e=(1-n)*u(Math.random()*n,.1,.95)),n=u(n+e,0,.994),o.set(n)):o.start()},o.trickle=function(){return o.inc(Math.random()*a.trickleRate)},t=n=0,o.promise=function(e){return e&&"resolved"!==e.state()&&(0===t&&o.start(),n++,t++,e.always(function(){0==--t?(n=0,o.done()):o.set((n-t)/n)})),this},o.render=function(e){if(o.isRendered())return document.getElementById("nprogress");d(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=a.template;var t,r=n.querySelector(a.barSelector),i=e?"-100":c(o.status||0),s=document.querySelector(a.parent);return f(r,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),a.showSpinner||(t=n.querySelector(a.spinnerSelector))&&m(t),s!=document.body&&d(s,"nprogress-custom-parent"),s.appendChild(n),n},o.remove=function(){r(document.documentElement,"nprogress-busy"),r(document.querySelector(a.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},o.isRendered=function(){return!!document.getElementById("nprogress")},o.getPositioningCSS=function(){var e=document.body.style,n="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return n+"Perspective"in e?"translate3d":n+"Transform"in e?"translate":"margin"};var l=function(){var n=[];function t(){var e=n.shift();e&&e(t)}return function(e){n.push(e),1==n.length&&t()}}(),f=function(){var s=["Webkit","O","Moz","ms"],n={};function r(e){return e=e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,n){return n.toUpperCase()}),n[e]||(n[e]=function(e){var n=document.body.style;if(e in n)return e;for(var t,r=s.length,i=e.charAt(0).toUpperCase()+e.slice(1);r--;)if((t=s[r]+i)in n)return t;return e}(e))}function o(e,n,t){n=r(n),e.style[n]=t}return function(e,n){var t,r,i=arguments;if(2==i.length)for(t in n)void 0!==(r=n[t])&&n.hasOwnProperty(t)&&o(e,t,r);else o(e,i[1],i[2])}}();function i(e,n){return 0<=("string"==typeof e?e:s(e)).indexOf(" "+n+" ")}function d(e,n){var t=s(e),r=t+n;i(t,n)||(e.className=r.substring(1))}function r(e,n){var t,r=s(e);i(e,n)&&(t=r.replace(" "+n+" "," "),e.className=t.substring(1,t.length-1))}function s(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return o});
//# sourceMappingURL=/sm/214fc7fb47eb8acd8c0acd7dd29f0480aef824549679beef626bf06f9e7a8fd7.map
/*nprogress end*/

"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var s = t[a];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, a, s) {
        return a && e(t.prototype, a), s && e(t, s), t;
    };
}();

!function() {
    var e = function() {
        function e(t) {
            var a = this;
            _classCallCheck(this, e);
            var s = {
                logo:"OwO表情",
                container:document.getElementsByClassName("OwO")[0],
                target:document.getElementsByTagName("OwO-textarea")[0],
                position:"down",
                width:"100%",
                maxHeight:"250px",
                api:"https://api.anotherhome.net/OwO/OwO.json"
            };
            for (var n in s) s.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = s[n]);
            this.container = t.container, this.target = t.target, "up" === t.position && this.container.classList.add("OwO-up");
            var i = new XMLHttpRequest();
            i.onreadystatechange = function() {
                4 === i.readyState && (i.status >= 200 && i.status < 300 || 304 === i.status ? (a.odata = JSON.parse(i.responseText),
                    a.init(t)) :console.log("OwO data request was unsuccessful: " + i.status));
            }, i.open("get", t.api, !0), i.send(null);
        }
        return _createClass(e, [ {
            key:"init",
            value:function(e) {
                var t = this;
                this.area = e.target, this.packages = Object.keys(this.odata);
                for (var a = '\n            <div class="OwO-logo"><span>' + e.logo + '</span></div>\n            <div class="OwO-body" style="width: ' + e.width + '">', s = 0; s < this.packages.length; s++) {
                    //此处开始，也可以根据类型(this.odata[this.packages[s]].type)来判断文字和图片
                    if(s==0){
                        //颜文字
                        a += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '" style="max-height: ' + (parseInt(e.maxHeight) - 53 + "px") + ';">';
                        for (var n = this.odata[this.packages[s]].container, i = 0; i < n.length; i++) a += '\n                    <li class="OwO-item" title="' + n[i].text + '" data-OwO=\'' + n[i].icon + '\'>' + n[i].icon + "</li>";
                        a += "\n                </ul>";
                    }
                    else if(s==1){
                        //阿鲁
                        a += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '" style="max-height: ' + (parseInt(e.maxHeight) - 53 + "px") + ';">';
                        for (var n = this.odata[this.packages[s]].container, i = 0; i < n.length; i++) a += '\n                    <li class="OwO-item" title="' + n[i].text + '" data-OwO="@(' + n[i].text + ')">' + n[i].icon + "</li>";
                        a += "\n                </ul>";
                    }
                    else if(s==2) {
                        //泡泡
                        a += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '" style="max-height: ' + (parseInt(e.maxHeight) - 53 + "px") + ';">';
                        for (var n = this.odata[this.packages[s]].container, i = 0; i < n.length; i++) a += '\n                    <li class="OwO-item" title="' + n[i].text + '" data-OwO="@[' + n[i].text + ']">' + n[i].icon + "</li>";
                        a += "\n                </ul>";
                    }
                    else {
                        //bilibili
                        a += '\n                <ul class="OwO-items OwO-items-' + this.odata[this.packages[s]].type + '" style="max-height: ' + (parseInt(e.maxHeight) - 53 + "px") + ';">';
                        for (var n = this.odata[this.packages[s]].container, i = 0; i < n.length; i++) a += '\n                    <li class="OwO-item" title="' + n[i].text + '" data-OwO="@[' + n[i].text + ']">' + n[i].icon + "</li>";
                        a += "\n                </ul>";
                    }
                    //此处结束
                }
                a += '\n                <div class="OwO-bar">\n                    <ul class="OwO-packages">';
                for (var o = 0; o < this.packages.length; o++) a += "\n                        <li><span>" + this.packages[o] + "</span></li>";
                a += "\n                    </ul>\n                </div>\n            </div>\n            ",
                    this.container.innerHTML = a, this.logo = this.container.getElementsByClassName("OwO-logo")[0],
                    this.logo.addEventListener("click", function() {
                        t.toggle();
                    }), this.container.getElementsByClassName("OwO-body")[0].addEventListener("click", function(e) {
                    var a = null;
                    if (e.target.classList.contains("OwO-item") ? a = e.target :e.target.parentNode.classList.contains("OwO-item") && (a = e.target.parentNode),
                        a) {
                        var s = t.area.selectionEnd, n = t.area.value;
                        //原a.innerHTML读取OwO-item里的html内容，修改为读取data-OwO属性值
                        t.area.value = n.slice(0, s) + a.getAttribute("data-OwO") + n.slice(s), t.area.focus(),
                            t.toggle();
                    }
                }), this.packagesEle = this.container.getElementsByClassName("OwO-packages")[0];
                for (var c = function(e) {
                    !function(a) {
                        t.packagesEle.children[e].addEventListener("click", function() {
                            t.tab(a);
                        });
                    }(e);
                }, l = 0; l < this.packagesEle.children.length; l++) c(l);
                this.tab(0);
            }
        }, {
            key:"toggle",
            value:function() {
                this.container.classList.contains("OwO-open") ? this.container.classList.remove("OwO-open") :this.container.classList.add("OwO-open");
            }
        }, {
            key:"tab",
            value:function(e) {
                var t = this.container.getElementsByClassName("OwO-items-show")[0];
                t && t.classList.remove("OwO-items-show"), this.container.getElementsByClassName("OwO-items")[e].classList.add("OwO-items-show");
                var a = this.container.getElementsByClassName("OwO-package-active")[0];
                a && a.classList.remove("OwO-package-active"), this.packagesEle.getElementsByTagName("li")[e].classList.add("OwO-package-active");
            }
        } ]), e;
    }();
    "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e :window.OwO = e;
}();

/*owo end*/

var QRCode;!function(){function t(t){this.mode=l.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;r>e;e++){var i=[],n=this.data.charCodeAt(e);n>65536?(i[0]=240|(1835008&n)>>>18,i[1]=128|(258048&n)>>>12,i[2]=128|(4032&n)>>>6,i[3]=128|63&n):n>2048?(i[0]=224|(61440&n)>>>12,i[1]=128|(4032&n)>>>6,i[2]=128|63&n):n>128?(i[0]=192|(1984&n)>>>6,i[1]=128|63&n):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function r(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function i(t,e){this.totalCount=t,this.dataCount=e}function n(){this.buffer=[],this.length=0}function o(){return"undefined"!=typeof CanvasRenderingContext2D}function a(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}function s(t,e){for(var r=1,i=h(t),n=0,o=p.length;o>=n;n++){var a=0;switch(e){case u.L:a=p[n][0];break;case u.M:a=p[n][1];break;case u.Q:a=p[n][2];break;case u.H:a=p[n][3]}if(a>=i)break;r++}if(r>p.length)throw new Error("Too long data");return r}function h(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;r>e;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++){this.modules[i]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[i][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var i=-1;7>=i;i++)-1>=e+i||this.moduleCount<=e+i||(r>=0&&6>=r&&(0==i||6==i)||i>=0&&6>=i&&(0==r||6==r)||r>=2&&4>=r&&i>=2&&4>=i?this.modules[t+r][e+i]=!0:this.modules[t+r][e+i]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var i=d.getLostPoint(this);(0==r||t>i)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r),n=1;this.make();for(var o=0;o<this.modules.length;o++)for(var a=o*n,s=0;s<this.modules[o].length;s++){var h=s*n,l=this.modules[o][s];l&&(i.beginFill(0,100),i.moveTo(h,a),i.lineTo(h+n,a),i.lineTo(h+n,a+n),i.lineTo(h,a+n),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;2>=o;o++)for(var a=-2;2>=a;a++)-2==o||2==o||-2==a||2==a||0==o&&0==a?this.modules[i+o][n+a]=!0:this.modules[i+o][n+a]=!1}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(var r=0;18>r;r++){var i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=d.getBCHTypeInfo(r),n=0;15>n;n++){var o=!t&&1==(i>>n&1);6>n?this.modules[n][8]=o:8>n?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(var n=0;15>n;n++){var o=!t&&1==(i>>n&1);8>n?this.modules[8][this.moduleCount-n-1]=o:9>n?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[i][a-s]){var h=!1;o<t.length&&(h=1==(t[o]>>>n&1));var l=d.getMask(e,i,a-s);l&&(h=!h),this.modules[i][a-s]=h,n--,-1==n&&(o++,n=7)}if(i+=r,0>i||this.moduleCount<=i){i-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,o){for(var a=i.getRSBlocks(t,r),s=new n,h=0;h<o.length;h++){var l=o[h];s.put(l.mode,4),s.put(l.getLength(),d.getLengthInBits(l.mode,t)),l.write(s)}for(var u=0,h=0;h<a.length;h++)u+=a[h].dataCount;if(s.getLengthInBits()>8*u)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*u+")");for(s.getLengthInBits()+4<=8*u&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*u)break;if(s.put(e.PAD0,8),s.getLengthInBits()>=8*u)break;s.put(e.PAD1,8)}return e.createBytes(s,a)},e.createBytes=function(t,e){for(var i=0,n=0,o=0,a=new Array(e.length),s=new Array(e.length),h=0;h<e.length;h++){var l=e[h].dataCount,u=e[h].totalCount-l;n=Math.max(n,l),o=Math.max(o,u),a[h]=new Array(l);for(var c=0;c<a[h].length;c++)a[h][c]=255&t.buffer[c+i];i+=l;var f=d.getErrorCorrectPolynomial(u),g=new r(a[h],f.getLength()-1),p=g.mod(f);s[h]=new Array(f.getLength()-1);for(var c=0;c<s[h].length;c++){var m=c+p.getLength()-s[h].length;s[h][c]=m>=0?p.get(m):0}}for(var v=0,c=0;c<e.length;c++)v+=e[c].totalCount;for(var w=new Array(v),_=0,c=0;n>c;c++)for(var h=0;h<e.length;h++)c<a[h].length&&(w[_++]=a[h][c]);for(var c=0;o>c;c++)for(var h=0;h<e.length;h++)c<s[h].length&&(w[_++]=s[h][c]);return w};for(var l={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},u={L:1,M:0,Q:3,H:2},c={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case c.PATTERN000:return(e+r)%2==0;case c.PATTERN001:return e%2==0;case c.PATTERN010:return r%3==0;case c.PATTERN011:return(e+r)%3==0;case c.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case c.PATTERN101:return e*r%2+e*r%3==0;case c.PATTERN110:return(e*r%2+e*r%3)%2==0;case c.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new r([1],0),i=0;t>i;i++)e=e.multiply(new r([1,f.gexp(i)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case l.MODE_NUMBER:return 10;case l.MODE_ALPHA_NUM:return 9;case l.MODE_8BIT_BYTE:return 8;case l.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case l.MODE_NUMBER:return 12;case l.MODE_ALPHA_NUM:return 11;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case l.MODE_NUMBER:return 14;case l.MODE_ALPHA_NUM:return 13;case l.MODE_8BIT_BYTE:return 16;case l.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;e>i;i++)for(var n=0;e>n;n++){for(var o=0,a=t.isDark(i,n),s=-1;1>=s;s++)if(!(0>i+s||i+s>=e))for(var h=-1;1>=h;h++)0>n+h||n+h>=e||(0!=s||0!=h)&&a==t.isDark(i+s,n+h)&&o++;o>5&&(r+=3+o-5)}for(var i=0;e-1>i;i++)for(var n=0;e-1>n;n++){var l=0;t.isDark(i,n)&&l++,t.isDark(i+1,n)&&l++,t.isDark(i,n+1)&&l++,t.isDark(i+1,n+1)&&l++,(0==l||4==l)&&(r+=3)}for(var i=0;e>i;i++)for(var n=0;e-6>n;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(var n=0;e>n;n++)for(var i=0;e-6>i;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);for(var u=0,n=0;e>n;n++)for(var i=0;e>i;i++)t.isDark(i,n)&&u++;var c=Math.abs(100*u/e/e-50)/5;return r+=10*c}},f={glog:function(t){if(1>t)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8>g;g++)f.EXP_TABLE[g]=1<<g;for(var g=8;256>g;g++)f.EXP_TABLE[g]=f.EXP_TABLE[g-4]^f.EXP_TABLE[g-5]^f.EXP_TABLE[g-6]^f.EXP_TABLE[g-8];for(var g=0;255>g;g++)f.LOG_TABLE[f.EXP_TABLE[g]]=g;r.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),i=0;i<this.getLength();i++)for(var n=0;n<t.getLength();n++)e[i+n]^=f.gexp(f.glog(this.get(i))+f.glog(t.get(n)));return new r(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=f.glog(this.get(0))-f.glog(t.get(0)),i=new Array(this.getLength()),n=0;n<this.getLength();n++)i[n]=this.get(n);for(var n=0;n<t.getLength();n++)i[n]^=f.gexp(f.glog(t.get(n))+e);return new r(i,0).mod(t)}},i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(t,e){var r=i.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,o=[],a=0;n>a;a++)for(var s=r[3*a+0],h=r[3*a+1],l=r[3*a+2],u=0;s>u;u++)o.push(new i(h,l));return o},i.getRsBlockTable=function(t,e){switch(e){case u.L:return i.RS_BLOCK_TABLE[4*(t-1)+0];case u.M:return i.RS_BLOCK_TABLE[4*(t-1)+1];case u.Q:return i.RS_BLOCK_TABLE[4*(t-1)+2];case u.H:return i.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},n.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;e>r;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],m=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&r.setAttribute(i,e[i]);return r}var r=this._htOption,i=this._el,n=t.getModuleCount();Math.floor(r.width/n),Math.floor(r.height/n);this.clear();var o=e("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:r.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),i.appendChild(o),o.appendChild(e("rect",{fill:r.colorLight,width:"100%",height:"100%"})),o.appendChild(e("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;n>a;a++)for(var s=0;n>s;s++)if(t.isDark(a,s)){var h=e("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(h)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase(),w=v?m:o()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var i=document.createElement("img"),n=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},o=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return i.onabort=n,i.onerror=n,i.onload=o,void(i.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}r._bSupportDataURI===!0&&r._fSuccess?r._fSuccess.call(r):r._bSupportDataURI===!1&&r._fFail&&r._fFail.call(r)}if(this._android&&this._android<=2.1){var r=1/window.devicePixelRatio,i=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,n,o,a,s,h,l,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*r;else"undefined"==typeof l&&(arguments[1]*=r,arguments[2]*=r,arguments[3]*=r,arguments[4]*=r);i.apply(this,arguments)}}var n=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,r=this._oContext,i=this._htOption,n=t.getModuleCount(),o=i.width/n,a=i.height/n,s=Math.round(o),h=Math.round(a);e.style.display="none",this.clear();for(var l=0;n>l;l++)for(var u=0;n>u;u++){var c=t.isDark(l,u),d=u*o,f=l*a;r.strokeStyle=c?i.colorDark:i.colorLight,r.lineWidth=1,r.fillStyle=c?i.colorDark:i.colorLight,r.fillRect(d,f,o,a),r.strokeRect(Math.floor(d)+.5,Math.floor(f)+.5,s,h),r.strokeRect(Math.ceil(d)-.5,Math.ceil(f)-.5,s,h)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,i=t.getModuleCount(),n=Math.floor(e.width/i),o=Math.floor(e.height/i),a=['<table style="border:0;border-collapse:collapse;">'],s=0;i>s;s++){a.push("<tr>");for(var h=0;i>h;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+o+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var l=r.childNodes[0],u=(e.width-l.offsetWidth)/2,c=(e.height-l.offsetHeight)/2;u>0&&c>0&&(l.style.margin=c+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();QRCode=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:u.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(w=m),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new w(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=u}(),function(t,e,r){function i(t,e){var r=g({},b,e||{},p(t));r.imageSelector&&(r.image=h(r.imageSelector).map(function(t){return t.src}).join("||")),u(t,"share-component social-share"),n(t,r),o(t,r),t.initialized=!0}function n(t,e){var r=a(e),i="prepend"==e.mode;v(i?r.reverse():r,function(r){var n=s(r,e),o=e.initialized?d(t,"icon-"+r):f('<a class="social-share-icon icon-'+r+'"></a>');return o.length?(o[0].href=n,"wechat"===r?o[0].tabindex=-1:o[0].target="_blank",void(e.initialized||(i?t.insertBefore(o[0],t.firstChild):t.appendChild(o[0])))):!0})}function o(t,e){var r=d(t,"icon-wechat","a");if(0===r.length)return!1;var i=f('<div class="wechat-qrcode"><h4>'+e.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+e.wechatQrcodeHelper+"</div></div>"),n=d(i[0],"qrcode","div");r[0].appendChild(i[0]),new QRCode(n[0],{text:e.url,width:e.wechatQrcodeSize,height:e.wechatQrcodeSize})}function a(t){t.mobileSites.length||(t.mobileSites=t.sites);var e=(A?t.mobileSites:t.sites).slice(0),r=t.disabled;return"string"==typeof e&&(e=e.split(/\s*,\s*/)),"string"==typeof r&&(r=r.split(/\s*,\s*/)),E&&r.push("wechat"),r.length&&v(r,function(t){e.splice(m(t,e),1)}),e}function s(t,e){return e.summary=e.description,B[t].replace(/\{\{(\w)(\w*)\}\}/g,function(i,n,o){var a=t+n+o.toLowerCase();return o=(n+o).toLowerCase(),encodeURIComponent((e[a]===r?e[o]:e[a])||"")})}function h(r){return(e.querySelectorAll||t.jQuery||t.Zepto||l).call(e,r)}function l(t){var r=[];return v(t.split(/\s*,\s*/),function(i){var n=i.match(/([#.])(\w+)/);if(null===n)throw Error("Supports only simple single #ID or .CLASS selector.");if(n[1]){var o=e.getElementById(n[2]);o&&r.push(o)}r=r.concat(d(t))}),r}function u(t,e){if(e&&"string"==typeof e){var r=(t.className+" "+e).split(/\s+/),i=" ";v(r,function(t){i.indexOf(" "+t+" ")<0&&(i+=t+" ")}),t.className=i.slice(1,-1)}}function c(t){return(e.getElementsByName(t)[0]||0).content}function d(t,e,r){if(t.getElementsByClassName)return t.getElementsByClassName(e);var i=[],n=t.getElementsByTagName(r||"*");return e=" "+e+" ",v(n,function(t){(" "+(t.className||"")+" ").indexOf(e)>=0&&i.push(t)}),i}function f(t){var r=e.createElement("div");return r.innerHTML=t,r.childNodes}function g(){var t=arguments;if(C)return C.apply(null,t);var e={};return v(t,function(t){v(t,function(t,r){e[r]=t})}),t[0]=e}function p(t){if(t.dataset)return t.dataset;var e={};return t.hasAttributes()?(v(t.attributes,function(t){var r=t.name;return 0!==r.indexOf("data-")?!0:(r=r.replace(/^data-/i,"").replace(/-(\w)/g,function(t,e){return e.toUpperCase()}),void(e[r]=t.value))}),e):{}}function m(t,e,r){var i;if(e){if(_)return _.call(e,t,r);for(i=e.length,r=r?0>r?Math.max(0,i+r):r:0;i>r;r++)if(r in e&&e[r]===t)return r}return-1}function v(t,e){var i=t.length;if(i===r){for(var n in t)if(t.hasOwnProperty(n)&&e.call(t[n],t[n],n)===!1)break}else for(var o=0;i>o&&e.call(t[o],t[o],o)!==!1;o++);}function w(r){var i="addEventListener",n=e[i]?"":"on";~e.readyState.indexOf("m")?r():"load DOMContentLoaded readystatechange".replace(/\w+/g,function(o,a){(a?e:t)[n?"attachEvent":i](n+o,function(){r&&(6>a||~e.readyState.indexOf("m"))&&(r(),r=0)},!1)})}var _=Array.prototype.indexOf,C=Object.assign,E=/MicroMessenger/i.test(navigator.userAgent),A=e.documentElement.clientWidth<=768,T=(e.images[0]||0).src||"",y=c("site")||c("Site")||e.title,L=c("title")||c("Title")||e.title,D=c("description")||c("Description")||"",b={url:location.href,origin:location.origin,source:y,title:L,description:D,image:T,imageSelector:r,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","tencent","douban","qzone","linkedin","diandian","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},B={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}",qq:"http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}",tencent:"http://share.v.t.qq.com/index.php?c=share&a=index&title={{TITLE}}&url={{URL}}&pic={{IMAGE}}",weibo:"http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",diandian:"http://www.diandian.com/share?lo={{URL}}&ti={{TITLE}}&type=link",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};t.socialShare=function(t,e){t="string"==typeof t?h(t):t,t.length===r&&(t=[t]),v(t,function(t){t.initialized||i(t,e)})},w(function(){socialShare(".social-share, .share-component")})}(window,document);
/*social-share end*/

/*!
  Highlight.js v11.0.1 (git: 1cf31f015d)
  (c) 2006-2021 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs=function(){"use strict";var e={exports:{}};function n(e){
    return e instanceof Map?e.clear=e.delete=e.set=()=>{
        throw Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=()=>{
        throw Error("set is read-only")
    }),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((t=>{var a=e[t]
    ;"object"!=typeof a||Object.isFrozen(a)||n(a)})),e}
    e.exports=n,e.exports.default=n;var t=e.exports;class a{constructor(e){
        void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}
        ignoreMatch(){this.isMatchIgnored=!0}}function i(e){
        return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
    }function s(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n]
    ;return n.forEach((e=>{for(const n in e)t[n]=e[n]})),t}const r=e=>!!e.kind
    ;class o{constructor(e,n){
        this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){
        this.buffer+=i(e)}openNode(e){if(!r(e))return;let n=e.kind
    ;n=e.sublanguage?"language-"+n:((e,{prefix:n})=>{if(e.includes(".")){
        const t=e.split(".")
        ;return[`${n}${t.shift()}`,...t.map(((e,n)=>`${e}${"_".repeat(n+1)}`))].join(" ")
    }return`${n}${e}`})(n,{prefix:this.classPrefix}),this.span(n)}closeNode(e){
        r(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
        this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={
        children:[]},this.stack=[this.rootNode]}get top(){
        return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
        this.top.children.push(e)}openNode(e){const n={kind:e,children:[]}
    ;this.add(n),this.stack.push(n)}closeNode(){
        if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
        for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
        walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){
            return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),
                n.children.forEach((n=>this._walk(e,n))),e.closeNode(n)),e}static _collapse(e){
            "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
                l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}
        addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}
        addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root
        ;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){
            return new o(this,this.options).value()}finalize(){return!0}}function d(e){
        return e?"string"==typeof e?e:e.source:null}function g(e){return b("(?=",e,")")}
    function u(e){return b("(?:",e,")?")}function b(...e){
        return e.map((e=>d(e))).join("")}function m(...e){return"("+((e=>{
        const n=e[e.length-1]
        ;return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}
    })(e).capture?"":"?:")+e.map((e=>d(e))).join("|")+")"}function p(e){
        return RegExp(e.toString()+"|").exec("").length-1}
    const _=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
    ;function h(e,{joinWith:n}){let t=0;return e.map((e=>{t+=1;const n=t
    ;let a=d(e),i="";for(;a.length>0;){const e=_.exec(a);if(!e){i+=a;break}
        i+=a.substring(0,e.index),
            a=a.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+(Number(e[1])+n):(i+=e[0],
        "("===e[0]&&t++)}return i})).map((e=>`(${e})`)).join(n)}
    const f="[a-zA-Z]\\w*",E="[a-zA-Z_]\\w*",y="\\b\\d+(\\.\\d+)?",N="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",w="\\b(0b[01]+)",v={
        begin:"\\\\[\\s\\S]",relevance:0},O={scope:"string",begin:"'",end:"'",
        illegal:"\\n",contains:[v]},M={scope:"string",begin:'"',end:'"',illegal:"\\n",
        contains:[v]},x=(e,n,t={})=>{const a=s({scope:"comment",begin:e,end:n,
        contains:[]},t);a.contains.push({scope:"doctag",
        begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0})
    ;const i=m("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/)
    ;return a.contains.push({begin:b(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),a
    },S=x("//","$"),k=x("/\\*","\\*/"),A=x("#","$");var C=Object.freeze({
        __proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:f,UNDERSCORE_IDENT_RE:E,
        NUMBER_RE:y,C_NUMBER_RE:N,BINARY_NUMBER_RE:w,
        RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG:(e={})=>{const n=/^#![ ]*\//
        ;return e.binary&&(e.begin=b(n,/.*\b/,e.binary,/\b.*/)),s({scope:"meta",begin:n,
            end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},
        BACKSLASH_ESCAPE:v,APOS_STRING_MODE:O,QUOTE_STRING_MODE:M,PHRASAL_WORDS_MODE:{
            begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
        },COMMENT:x,C_LINE_COMMENT_MODE:S,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:A,
        NUMBER_MODE:{scope:"number",begin:y,relevance:0},C_NUMBER_MODE:{scope:"number",
            begin:N,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:w,relevance:0},
        REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,
                end:/\/[gimuy]*/,illegal:/\n/,contains:[v,{begin:/\[/,end:/\]/,relevance:0,
                    contains:[v]}]}]},TITLE_MODE:{scope:"title",begin:f,relevance:0},
        UNDERSCORE_TITLE_MODE:{scope:"title",begin:E,relevance:0},METHOD_GUARD:{
            begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
            "on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{
                n.data._beginMatch!==e[1]&&n.ignoreMatch()}})});function T(e,n){
        "."===e.input[e.index-1]&&n.ignoreMatch()}function R(e,n){
        void 0!==e.className&&(e.scope=e.className,delete e.className)}function D(e,n){
        n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin=T,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,
        void 0===e.relevance&&(e.relevance=0))}function I(e,n){
        Array.isArray(e.illegal)&&(e.illegal=m(...e.illegal))}function B(e,n){
        if(e.match){
            if(e.begin||e.end)throw Error("begin & end are not supported with match")
                ;e.begin=e.match,delete e.match}}function L(e,n){
        void 0===e.relevance&&(e.relevance=1)}const $=(e,n)=>{if(!e.beforeMatch)return
            ;if(e.starts)throw Error("beforeMatch cannot be used with starts")
            ;const t=Object.assign({},e);Object.keys(e).forEach((n=>{delete e[n]
        })),e.keywords=t.keywords,e.begin=b(t.beforeMatch,g(t.begin)),e.starts={
            relevance:0,contains:[Object.assign(t,{endsParent:!0})]
        },e.relevance=0,delete t.beforeMatch
        },z=["of","and","for","in","not","or","if","then","parent","list","value"]
    ;function F(e,n,t="keyword"){const a=Object.create(null)
    ;return"string"==typeof e?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach((t=>{
        Object.assign(a,F(e[t],n,t))})),a;function i(e,t){
        n&&(t=t.map((e=>e.toLowerCase()))),t.forEach((n=>{const t=n.split("|")
        ;a[t[0]]=[e,j(t[0],t[1])]}))}}function j(e,n){
        return n?Number(n):(e=>z.includes(e.toLowerCase()))(e)?0:1}const U={},P=e=>{
        console.error(e)},K=(e,...n)=>{console.log("WARN: "+e,...n)},q=(e,n)=>{
        U[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),U[`${e}/${n}`]=!0)
    },H=Error();function G(e,n,{key:t}){let a=0;const i=e[t],s={},r={}
    ;for(let e=1;e<=n.length;e++)r[e+a]=i[e],s[e+a]=!0,a+=p(n[e-1])
    ;e[t]=r,e[t]._emit=s,e[t]._multi=!0}function Z(e){(e=>{
        e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,
            delete e.scope)})(e),"string"==typeof e.beginScope&&(e.beginScope={
        _wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope
    }),(e=>{if(Array.isArray(e.begin)){
        if(e.skip||e.excludeBegin||e.returnBegin)throw P("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),
            H
            ;if("object"!=typeof e.beginScope||null===e.beginScope)throw P("beginScope must be object"),
            H;G(e,e.begin,{key:"beginScope"}),e.begin=h(e.begin,{joinWith:""})}})(e),(e=>{
        if(Array.isArray(e.end)){
            if(e.skip||e.excludeEnd||e.returnEnd)throw P("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
                H
                ;if("object"!=typeof e.endScope||null===e.endScope)throw P("endScope must be object"),
                H;G(e,e.end,{key:"endScope"}),e.end=h(e.end,{joinWith:""})}})(e)}function W(e){
        function n(n,t){return RegExp(d(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}
        class t{constructor(){
            this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
            addRule(e,n){
                n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),
                    this.matchAt+=p(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
            ;const e=this.regexes.map((e=>e[1]));this.matcherRe=n(h(e,{joinWith:"|"
            }),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
            ;const n=this.matcherRe.exec(e);if(!n)return null
                ;const t=n.findIndex(((e,n)=>n>0&&void 0!==e)),a=this.matchIndexes[t]
            ;return n.splice(0,t),Object.assign(n,a)}}class a{constructor(){
            this.rules=[],this.multiRegexes=[],
                this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
            if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t
            ;return this.rules.slice(e).forEach((([e,t])=>n.addRule(e,t))),
                n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){
            return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){
            this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){
            const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex
            ;let t=n.exec(e)
            ;if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{
                const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}
            return t&&(this.regexIndex+=t.position+1,
            this.regexIndex===this.count&&this.considerAll()),t}}
        if(e.compilerExtensions||(e.compilerExtensions=[]),
        e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
            ;return e.classNameAliases=s(e.classNameAliases||{}),function t(i,r){const o=i
        ;if(i.isCompiled)return o
            ;[R,B,Z,$].forEach((e=>e(i,r))),e.compilerExtensions.forEach((e=>e(i,r))),
            i.__beforeBegin=null,[D,I,L].forEach((e=>e(i,r))),i.isCompiled=!0;let l=null
        ;return"object"==typeof i.keywords&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),
            l=i.keywords.$pattern,
            delete i.keywords.$pattern),l=l||/\w+/,i.keywords&&(i.keywords=F(i.keywords,e.case_insensitive)),
            o.keywordPatternRe=n(l,!0),
        r&&(i.begin||(i.begin=/\B|\b/),o.beginRe=n(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),
        i.end&&(o.endRe=n(i.end)),
            o.terminatorEnd=d(i.end)||"",i.endsWithParent&&r.terminatorEnd&&(o.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),
        i.illegal&&(o.illegalRe=n(i.illegal)),
        i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((n=>s(e,{
            variants:null},n)))),e.cachedVariants?e.cachedVariants:Q(e)?s(e,{
            starts:e.starts?s(e.starts):null
        }):Object.isFrozen(e)?s(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{t(e,o)
        })),i.starts&&t(i.starts,r),o.matcher=(e=>{const n=new a
        ;return e.contains.forEach((e=>n.addRule(e.begin,{rule:e,type:"begin"
        }))),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"
        }),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n})(o),o}(e)}function Q(e){
        return!!e&&(e.endsWithParent||Q(e.starts))}const X=i,V=s,J=Symbol("nomatch")
    ;var Y=(e=>{const n=Object.create(null),i=Object.create(null),s=[];let r=!0
    ;const o="Could not find the language '{}', did you forget to load/include a language module?",l={
        disableAutodetect:!0,name:"Plain text",contains:[]};let d={
        ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,
        languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
        cssSelector:"pre code",languages:null,__emitter:c};function g(e){
        return d.noHighlightRe.test(e)}function u(e,n,t,a){let i="",s=""
    ;"object"==typeof n?(i=e,
        t=n.ignoreIllegals,s=n.language,a=void 0):(q("10.7.0","highlight(lang, code, ...args) has been deprecated."),
        q("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),
        s=e,i=n),void 0===t&&(t=!0);const r={code:i,language:s};N("before:highlight",r)
    ;const o=r.result?r.result:b(r.language,r.code,t,a)
    ;return o.code=r.code,N("after:highlight",o),o}function b(e,t,i,s){
        const l=Object.create(null);function c(){if(!M.keywords)return void S.addText(k)
            ;let e=0;M.keywordPatternRe.lastIndex=0;let n=M.keywordPatternRe.exec(k),t=""
        ;for(;n;){t+=k.substring(e,n.index)
        ;const i=w.case_insensitive?n[0].toLowerCase():n[0],s=(a=i,M.keywords[a]);if(s){
            const[e,a]=s
            ;if(S.addText(t),t="",l[i]=(l[i]||0)+1,l[i]<=7&&(A+=a),e.startsWith("_"))t+=n[0];else{
                const t=w.classNameAliases[e]||e;S.addKeyword(n[0],t)}}else t+=n[0]
        ;e=M.keywordPatternRe.lastIndex,n=M.keywordPatternRe.exec(k)}var a
        ;t+=k.substr(e),S.addText(t)}function g(){null!=M.subLanguage?(()=>{
            if(""===k)return;let e=null;if("string"==typeof M.subLanguage){
                if(!n[M.subLanguage])return void S.addText(k)
                    ;e=b(M.subLanguage,k,!0,x[M.subLanguage]),x[M.subLanguage]=e._top
            }else e=m(k,M.subLanguage.length?M.subLanguage:null)
            ;M.relevance>0&&(A+=e.relevance),S.addSublanguage(e._emitter,e.language)
        })():c(),k=""}function u(e,n){let t=1;for(;void 0!==n[t];){if(!e._emit[t]){t++
        ;continue}const a=w.classNameAliases[e[t]]||e[t],i=n[t]
        ;a?S.addKeyword(i,a):(k=i,c(),k=""),t++}}function p(e,n){
            return e.scope&&"string"==typeof e.scope&&S.openNode(w.classNameAliases[e.scope]||e.scope),
            e.beginScope&&(e.beginScope._wrap?(S.addKeyword(k,w.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),
                k=""):e.beginScope._multi&&(u(e.beginScope,n),k="")),M=Object.create(e,{parent:{
                    value:M}}),M}function _(e,n,t){let i=((e,n)=>{const t=e&&e.exec(n)
        ;return t&&0===t.index})(e.endRe,t);if(i){if(e["on:end"]){const t=new a(e)
        ;e["on:end"](n,t),t.isMatchIgnored&&(i=!1)}if(i){
            for(;e.endsParent&&e.parent;)e=e.parent;return e}}
            if(e.endsWithParent)return _(e.parent,n,t)}function h(e){
            return 0===M.matcher.regexIndex?(k+=e[0],1):(R=!0,0)}function E(e){
            const n=e[0],a=t.substr(e.index),i=_(M,e,a);if(!i)return J;const s=M
            ;M.endScope&&M.endScope._wrap?(g(),
                S.addKeyword(n,M.endScope._wrap)):M.endScope&&M.endScope._multi?(g(),
                u(M.endScope,e)):s.skip?k+=n:(s.returnEnd||s.excludeEnd||(k+=n),
                g(),s.excludeEnd&&(k=n));do{
                M.scope&&!M.isMultiClass&&S.closeNode(),M.skip||M.subLanguage||(A+=M.relevance),
                    M=M.parent}while(M!==i.parent)
                ;return i.starts&&p(i.starts,e),s.returnEnd?0:n.length}let y={};function N(n,s){
            const o=s&&s[0];if(k+=n,null==o)return g(),0
                ;if("begin"===y.type&&"end"===s.type&&y.index===s.index&&""===o){
                if(k+=t.slice(s.index,s.index+1),!r){const n=Error(`0 width match regex (${e})`)
                ;throw n.languageName=e,n.badRule=y.rule,n}return 1}
            if(y=s,"begin"===s.type)return(e=>{
                const n=e[0],t=e.rule,i=new a(t),s=[t.__beforeBegin,t["on:begin"]]
                ;for(const t of s)if(t&&(t(e,i),i.isMatchIgnored))return h(n)
                    ;return t.skip?k+=n:(t.excludeBegin&&(k+=n),
                    g(),t.returnBegin||t.excludeBegin||(k=n)),p(t,e),t.returnBegin?0:n.length})(s)
                ;if("illegal"===s.type&&!i){
                const e=Error('Illegal lexeme "'+o+'" for mode "'+(M.scope||"<unnamed>")+'"')
                ;throw e.mode=M,e}if("end"===s.type){const e=E(s);if(e!==J)return e}
            if("illegal"===s.type&&""===o)return 1
                ;if(T>1e5&&T>3*s.index)throw Error("potential infinite loop, way more iterations than matches")
                ;return k+=o,o.length}const w=f(e)
        ;if(!w)throw P(o.replace("{}",e)),Error('Unknown language: "'+e+'"')
            ;const v=W(w);let O="",M=s||v;const x={},S=new d.__emitter(d);(()=>{const e=[]
        ;for(let n=M;n!==w;n=n.parent)n.scope&&e.unshift(n.scope)
        ;e.forEach((e=>S.openNode(e)))})();let k="",A=0,C=0,T=0,R=!1;try{
            for(M.matcher.considerAll();;){
                T++,R?R=!1:M.matcher.considerAll(),M.matcher.lastIndex=C
                ;const e=M.matcher.exec(t);if(!e)break;const n=N(t.substring(C,e.index),e)
                ;C=e.index+n}return N(t.substr(C)),S.closeAllNodes(),S.finalize(),O=S.toHTML(),{
                language:e,value:O,relevance:A,illegal:!1,_emitter:S,_top:M}}catch(n){
            if(n.message&&n.message.includes("Illegal"))return{language:e,value:X(t),
                illegal:!0,relevance:0,_illegalBy:{message:n.message,index:C,
                    context:t.slice(C-100,C+100),mode:n.mode,resultSoFar:O},_emitter:S};if(r)return{
                language:e,value:X(t),illegal:!1,relevance:0,errorRaised:n,_emitter:S,_top:M}
                ;throw n}}function m(e,t){t=t||d.languages||Object.keys(n);const a=(e=>{
        const n={value:X(e),illegal:!1,relevance:0,_top:l,_emitter:new d.__emitter(d)}
        ;return n._emitter.addText(e),n})(e),i=t.filter(f).filter(y).map((n=>b(n,e,!1)))
    ;i.unshift(a);const s=i.sort(((e,n)=>{
        if(e.relevance!==n.relevance)return n.relevance-e.relevance
            ;if(e.language&&n.language){if(f(e.language).supersetOf===n.language)return 1
            ;if(f(n.language).supersetOf===e.language)return-1}return 0})),[r,o]=s,c=r
    ;return c.secondBest=o,c}function p(e){let n=null;const t=(e=>{
        let n=e.className+" ";n+=e.parentNode?e.parentNode.className:""
        ;const t=d.languageDetectRe.exec(n);if(t){const n=f(t[1])
        ;return n||(K(o.replace("{}",t[1])),
            K("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}
        return n.split(/\s+/).find((e=>g(e)||f(e)))})(e);if(g(t))return
        ;N("before:highlightElement",{el:e,language:t
    }),!d.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),
        console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),
        console.warn(e)),n=e;const a=n.textContent,s=t?u(a,{language:t,ignoreIllegals:!0
    }):m(a);e.innerHTML=s.value,((e,n,t)=>{const a=n&&i[n]||t
    ;e.classList.add("hljs"),e.classList.add("language-"+a)
    })(e,t,s.language),e.result={language:s.language,re:s.relevance,
        relevance:s.relevance},s.secondBest&&(e.secondBest={
        language:s.secondBest.language,relevance:s.secondBest.relevance
    }),N("after:highlightElement",{el:e,result:s,text:a})}let _=!1;function h(){
        "loading"!==document.readyState?document.querySelectorAll(d.cssSelector).forEach(p):_=!0
    }function f(e){return e=(e||"").toLowerCase(),n[e]||n[i[e]]}
        function E(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach((e=>{
            i[e.toLowerCase()]=n}))}function y(e){const n=f(e)
        ;return n&&!n.disableAutodetect}function N(e,n){const t=e;s.forEach((e=>{
            e[t]&&e[t](n)}))}
        "undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(()=>{
            _&&h()}),!1),Object.assign(e,{highlight:u,highlightAuto:m,highlightAll:h,
            highlightElement:p,
            highlightBlock:e=>(q("10.7.0","highlightBlock will be removed entirely in v12.0"),
                q("10.7.0","Please use highlightElement now."),p(e)),configure:e=>{d=V(d,e)},
            initHighlighting:()=>{
                h(),q("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},
            initHighlightingOnLoad:()=>{
                h(),q("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
            },registerLanguage:(t,a)=>{let i=null;try{i=a(e)}catch(e){
                if(P("Language definition for '{}' could not be registered.".replace("{}",t)),
                    !r)throw e;P(e),i=l}
                i.name||(i.name=t),n[t]=i,i.rawDefinition=a.bind(null,e),i.aliases&&E(i.aliases,{
                    languageName:t})},unregisterLanguage:e=>{delete n[e]
            ;for(const n of Object.keys(i))i[n]===e&&delete i[n]},
            listLanguages:()=>Object.keys(n),getLanguage:f,registerAliases:E,
            autoDetection:y,inherit:V,addPlugin:e=>{(e=>{
                e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=n=>{
                    e["before:highlightBlock"](Object.assign({block:n.el},n))
                }),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=n=>{
                    e["after:highlightBlock"](Object.assign({block:n.el},n))})})(e),s.push(e)}
        }),e.debugMode=()=>{r=!1},e.safeMode=()=>{r=!0},e.versionString="11.0.1"
        ;for(const e in C)"object"==typeof C[e]&&t(C[e]);return Object.assign(e,C),e
    })({});const ee=e=>({IMPORTANT:{scope:"meta",begin:"!important"},HEXCOLOR:{
                scope:"number",begin:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},
            ATTRIBUTE_SELECTOR_MODE:{scope:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
                contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},CSS_NUMBER_MODE:{
                scope:"number",
                begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                relevance:0}
        }),ne=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],te=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],ae=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],ie=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],se=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-variant","font-variant-ligatures","font-variation-settings","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","src","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"].reverse(),re=ae.concat(ie)
    ;var oe="\\.([0-9](_*[0-9])*)",le="[0-9a-fA-F](_*[0-9a-fA-F])*",ce={
        className:"number",variants:[{
            begin:`(\\b([0-9](_*[0-9])*)((${oe})|\\.)?|(${oe}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
        },{begin:`\\b([0-9](_*[0-9])*)((${oe})[fFdD]?\\b|\\.([fFdD]\\b)?)`},{
            begin:`(${oe})[fFdD]?\\b`},{begin:"\\b([0-9](_*[0-9])*)[fFdD]\\b"},{
            begin:`\\b0[xX]((${le})\\.?|(${le})?\\.(${le}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
        },{begin:"\\b(0|[1-9](_*[0-9])*)[lL]?\\b"},{begin:`\\b0[xX](${le})[lL]?\\b`},{
            begin:"\\b0(_*[0-7])*[lL]?\\b"},{begin:"\\b0[bB][01](_*[01])*[lL]?\\b"}],
        relevance:0};function de(e,n,t){return-1===t?"":e.replace(n,(a=>de(e,n,t-1)))}
    const ge="[A-Za-z$_][0-9A-Za-z$_]*",ue=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],be=["true","false","null","undefined","NaN","Infinity"],me=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],pe=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],_e=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],he=["arguments","this","super","console","window","document","localStorage","module","global"],fe=[].concat(_e,me,pe)
    ;function Ee(e){const n=ge,t={begin:/<[A-Za-z0-9\\._:-]+/,
            end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
                const t=e[0].length+e.index,a=e.input[t];"<"!==a?">"===a&&(((e,{after:n})=>{
                    const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t
                })||n.ignoreMatch()):n.ignoreMatch()}},a={$pattern:ge,keyword:ue,literal:be,
            built_in:fe,"variable.language":he
        },i="\\.([0-9](_?[0-9])*)",s="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",r={
            className:"number",variants:[{
                begin:`(\\b(${s})((${i})|\\.)?|(${i}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
                begin:`\\b(${s})\\b((${i})\\b|\\.)?|(${i})\\b`},{
                begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
                begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
                begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
                begin:"\\b0[0-7]+n?\\b"}],relevance:0},o={className:"subst",begin:"\\$\\{",
            end:"\\}",keywords:a,contains:[]},l={begin:"html`",end:"",starts:{end:"`",
                returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"xml"}},c={
            begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
                contains:[e.BACKSLASH_ESCAPE,o],subLanguage:"css"}},d={className:"string",
            begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]},u={className:"comment",
            variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{
                    begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",
                        begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,
                        excludeBegin:!0,relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",
                        endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]
            }),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]
        },m=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,d,r,e.REGEXP_MODE]
    ;o.contains=m.concat({begin:/\{/,end:/\}/,keywords:a,contains:["self"].concat(m)
    });const p=[].concat(u,o.contains),_=p.concat([{begin:/\(/,end:/\)/,keywords:a,
        contains:["self"].concat(p)}]),h={className:"params",begin:/\(/,end:/\)/,
        excludeBegin:!0,excludeEnd:!0,keywords:a,contains:_},f={variants:[{
            match:[/class/,/\s+/,n],scope:{1:"keyword",3:"title.class"}},{
            match:[/extends/,/\s+/,b(n,"(",b(/\./,n),")*")],scope:{1:"keyword",
                3:"title.class.inherited"}}]},E={relevance:0,
        match:/\b[A-Z][a-z]+([A-Z][a-z]+)*/,className:"title.class",keywords:{
            _:[...me,...pe]}},y={variants:[{match:[/function/,/\s+/,n,/(?=\s*\()/]},{
            match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},
        label:"func.def",contains:[h],illegal:/%/},N={
        match:b(/\b/,(w=[..._e,"super"],b("(?!",w.join("|"),")")),n,g(/\(/)),
        className:"title.function",relevance:0};var w;const v={
        begin:b(/\./,g(b(n,/(?![0-9A-Za-z$_(])/))),end:n,excludeBegin:!0,
        keywords:"prototype",className:"property",relevance:0},O={
        match:[/get|set/,/\s+/,n,/(?=\()/],className:{1:"keyword",3:"title.function"},
        contains:[{begin:/\(\)/},h]
    },M="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",x={
        match:[/const|var|let/,/\s+/,n,/\s*/,/=\s*/,g(M)],className:{1:"keyword",
            3:"title.function"},contains:[h]};return{name:"Javascript",
        aliases:["js","jsx","mjs","cjs"],keywords:a,exports:{PARAMS_CONTAINS:_},
        illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",
            relevance:5}),{label:"use_strict",className:"meta",relevance:10,
            begin:/^\s*['"]use (strict|asm)['"]/
        },e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,l,c,d,u,r,E,{className:"attr",
            begin:n+g(":"),relevance:0},x,{
            begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
            keywords:"return throw case",relevance:0,contains:[u,e.REGEXP_MODE,{
                className:"function",begin:M,returnBegin:!0,end:"\\s*=>",contains:[{
                    className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{
                        className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,
                        excludeEnd:!0,keywords:a,contains:_}]}]},{begin:/,/,relevance:0},{match:/\s+/,
                relevance:0},{variants:[{begin:"<>",end:"</>"},{begin:t.begin,
                    "on:begin":t.isTrulyOpeningTag,end:t.end}],subLanguage:"xml",contains:[{
                    begin:t.begin,end:t.end,skip:!0,contains:["self"]}]}]},y,{
            beginKeywords:"while if switch catch for"},{
            begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
            returnBegin:!0,label:"func.def",contains:[h,e.inherit(e.TITLE_MODE,{begin:n,
                className:"title.function"})]},{match:/\.\.\./,relevance:0},v,{match:"\\$"+n,
            relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},
            contains:[h]},N,{relevance:0,match:/\b[A-Z][A-Z_]+\b/,
            className:"variable.constant"},f,O,{match:/\$[(.]/}]}}
    const ye=e=>b(/\b/,e,/\w$/.test(e)?/\b/:/\B/),Ne=["Protocol","Type"].map(ye),we=["init","self"].map(ye),ve=["Any","Self"],Oe=["actor","associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],Me=["false","nil","true"],xe=["assignment","associativity","higherThan","left","lowerThan","none","right"],Se=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],ke=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],Ae=m(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),Ce=m(Ae,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),Te=b(Ae,Ce,"*"),Re=m(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),De=m(Re,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),Ie=b(Re,De,"*"),Be=b(/[A-Z]/,De,"*"),Le=["autoclosure",b(/convention\(/,m("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",b(/objc\(/,Ie,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","resultBuilder","testable","UIApplicationMain","unknown","usableFromInline"],$e=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"]
    ;var ze=Object.freeze({__proto__:null,grmr_bash:e=>{const n={},t={begin:/\$\{/,
            end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{
            className:"variable",variants:[{
                begin:b(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},t]});const a={
            className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},i={
            begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,
                    end:/(\w+)/,className:"string"})]}},s={className:"string",begin:/"/,end:/"/,
            contains:[e.BACKSLASH_ESCAPE,n,a]};a.contains.push(s);const r={begin:/\$\(\(/,
            end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]
        },o=e.SHEBANG({binary:"(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)",relevance:10
        }),l={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,
            contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{
            name:"Bash",aliases:["sh"],keywords:{$pattern:/\b[a-z._-]+\b/,
                keyword:["if","then","else","elif","fi","for","while","in","do","done","case","esac","function"],
                literal:["true","false"],
                built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
            },contains:[o,e.SHEBANG(),l,r,e.HASH_COMMENT_MODE,i,s,{className:"",begin:/\\"/
            },{className:"string",begin:/'/,end:/'/},n]}},grmr_c:e=>{
            const n=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]
            }),t="[a-zA-Z_]\\w*::",a="(decltype\\(auto\\)|"+u(t)+"[a-zA-Z_]\\w*"+u("<[^<>]+>")+")",i={
                className:"type",variants:[{begin:"\\b[a-z\\d_]*_t\\b"},{
                    match:/\batomic_[a-z]{3,6}\b/}]},s={className:"string",variants:[{
                    begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
                    begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
                    begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},r={
                className:"number",variants:[{begin:"\\b(0b[01']+)"},{
                    begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                },{
                    begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
                    keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                },contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"string"}),{
                    className:"string",begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},l={
                className:"title",begin:u(t)+e.IDENT_RE,relevance:0
            },c=u(t)+e.IDENT_RE+"\\s*\\(",d={
                keyword:["asm","auto","break","case","const","continue","default","do","else","enum","extern","for","fortran","goto","if","inline","register","restrict","return","sizeof","static","struct","switch","typedef","union","volatile","while","_Alignas","_Alignof","_Atomic","_Generic","_Noreturn","_Static_assert","_Thread_local","alignas","alignof","noreturn","static_assert","thread_local","_Pragma"],
                type:["float","double","signed","unsigned","int","short","long","char","void","_Bool","_Complex","_Imaginary","_Decimal32","_Decimal64","_Decimal128","complex","bool","imaginary"],
                literal:"true false NULL",
                built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
            },g=[o,i,n,e.C_BLOCK_COMMENT_MODE,r,s],b={variants:[{begin:/=/,end:/;/},{
                    begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
                keywords:d,contains:g.concat([{begin:/\(/,end:/\)/,keywords:d,
                    contains:g.concat(["self"]),relevance:0}]),relevance:0},m={
                begin:"("+a+"[\\*&\\s]+)+"+c,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
                keywords:d,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
                    keywords:d,relevance:0},{begin:c,returnBegin:!0,contains:[e.inherit(l,{
                        className:"title.function"})],relevance:0},{relevance:0,match:/,/},{
                    className:"params",begin:/\(/,end:/\)/,keywords:d,relevance:0,
                    contains:[n,e.C_BLOCK_COMMENT_MODE,s,r,i,{begin:/\(/,end:/\)/,keywords:d,
                        relevance:0,contains:["self",n,e.C_BLOCK_COMMENT_MODE,s,r,i]}]
                },i,n,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C",aliases:["h"],keywords:d,
                disableAutodetect:!0,illegal:"</",contains:[].concat(b,m,g,[o,{
                    begin:e.IDENT_RE+"::",keywords:d},{className:"class",
                    beginKeywords:"enum class struct union",end:/[{;:<>=]/,contains:[{
                        beginKeywords:"final class struct"},e.TITLE_MODE]}]),exports:{preprocessor:o,
                    strings:s,keywords:d}}},grmr_cpp:e=>{const n=e.COMMENT("//","$",{contains:[{
                begin:/\\\n/}]
        }),t="[a-zA-Z_]\\w*::",a="(?!struct)(decltype\\(auto\\)|"+u(t)+"[a-zA-Z_]\\w*"+u("<[^<>]+>")+")",i={
            className:"type",begin:"\\b[a-z\\d_]*_t\\b"},s={className:"string",variants:[{
                begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{
                begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                end:"'",illegal:"."},e.END_SAME_AS_BEGIN({
                begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},r={
            className:"number",variants:[{begin:"\\b(0b[01']+)"},{
                begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
            },{
                begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }],relevance:0},o={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{
                keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
            },contains:[{begin:/\\\n/,relevance:0},e.inherit(s,{className:"string"}),{
                className:"string",begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},l={
            className:"title",begin:u(t)+e.IDENT_RE,relevance:0
        },c=u(t)+e.IDENT_RE+"\\s*\\(",d={
            type:["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t"],
            keyword:["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","signed","sizeof","static","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","unsigned","using","virtual","volatile","while","xor","xor_eq,"],
            literal:["NULL","false","nullopt","nullptr","true"],built_in:["_Pragma"],
            _type_hints:["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"]
        },m={className:"function.dispatch",relevance:0,keywords:{
                _hint:["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"]
            },
            begin:b(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!while)/,e.IDENT_RE,g(/(<[^<>]+>|)\s*\(/))
        },p=[m,o,i,n,e.C_BLOCK_COMMENT_MODE,r,s],_={variants:[{begin:/=/,end:/;/},{
                begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],
            keywords:d,contains:p.concat([{begin:/\(/,end:/\)/,keywords:d,
                contains:p.concat(["self"]),relevance:0}]),relevance:0},h={className:"function",
            begin:"("+a+"[\\*&\\s]+)+"+c,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,
            keywords:d,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:"decltype\\(auto\\)",
                keywords:d,relevance:0},{begin:c,returnBegin:!0,contains:[l],relevance:0},{
                begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[s,r]},{
                relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:d,
                relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,s,r,i,{begin:/\(/,end:/\)/,
                    keywords:d,relevance:0,contains:["self",n,e.C_BLOCK_COMMENT_MODE,s,r,i]}]
            },i,n,e.C_BLOCK_COMMENT_MODE,o]};return{name:"C++",
            aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:d,illegal:"</",
            classNameAliases:{"function.dispatch":"built_in"},
            contains:[].concat(_,h,m,p,[o,{
                begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<",
                end:">",keywords:d,contains:["self",i]},{begin:e.IDENT_RE+"::",keywords:d},{
                match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],
                className:{1:"keyword",3:"title.class"}}])}},grmr_csharp:e=>{const n={
                keyword:["abstract","as","base","break","case","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"].concat(["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"]),
                built_in:["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],
                literal:["default","false","null","true"]},t=e.inherit(e.TITLE_MODE,{
                begin:"[a-zA-Z](\\.?\\w)*"}),a={className:"number",variants:[{
                    begin:"\\b(0b[01']+)"},{
                    begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{
                    begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }],relevance:0},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]
            },s=e.inherit(i,{illegal:/\n/}),r={className:"subst",begin:/\{/,end:/\}/,
                keywords:n},o=e.inherit(r,{illegal:/\n/}),l={className:"string",begin:/\$"/,
                end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/
                },e.BACKSLASH_ESCAPE,o]},c={className:"string",begin:/\$@"/,end:'"',contains:[{
                    begin:/\{\{/},{begin:/\}\}/},{begin:'""'},r]},d=e.inherit(c,{illegal:/\n/,
                contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},o]})
        ;r.contains=[c,l,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.C_BLOCK_COMMENT_MODE],
            o.contains=[d,l,s,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,a,e.inherit(e.C_BLOCK_COMMENT_MODE,{
                illegal:/\n/})];const g={variants:[c,l,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
        },u={begin:"<",end:">",contains:[{beginKeywords:"in out"},t]
        },b=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?",m={
            begin:"@"+e.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],
            keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,
                contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{
                        begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]
            }),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",
                end:"$",keywords:{
                    keyword:"if else elif endif define undef warning error line region endregion pragma checksum"
                }},g,a,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,
                illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"
                },t,u,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",
                relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
                contains:[t,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
                beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,
                contains:[t,u,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",
                begin:"^\\s*\\[(?=[\\w])",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{
                    className:"string",begin:/"/,end:/"/}]},{
                beginKeywords:"new return throw await else",relevance:0},{className:"function",
                begin:"("+b+"\\s+)+"+e.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,
                end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{
                    beginKeywords:"public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                    relevance:0},{begin:e.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,
                    contains:[e.TITLE_MODE,u],relevance:0},{className:"params",begin:/\(/,end:/\)/,
                    excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,
                    contains:[g,a,e.C_BLOCK_COMMENT_MODE]
                },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},m]}},grmr_css:e=>{
            const n=ee(e),t=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE];return{name:"CSS",
                case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},
                classNameAliases:{keyframePosition:"selector-tag"},
                contains:[e.C_BLOCK_COMMENT_MODE,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/
                },n.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0
                },{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0
                },n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{
                        begin:":("+ae.join("|")+")"},{begin:"::("+ie.join("|")+")"}]},{
                    className:"attribute",begin:"\\b("+se.join("|")+")\\b"},{begin:":",end:"[;}]",
                    contains:[n.HEXCOLOR,n.IMPORTANT,n.CSS_NUMBER_MODE,...t,{
                        begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"
                        },contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]
                    },{className:"built_in",begin:/[\w-]+(?=\()/}]},{begin:g(/@/),end:"[{;]",
                    relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/
                    },{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{
                            $pattern:/[a-z-]+/,keyword:"and or not only",attribute:te.join(" ")},contains:[{
                            begin:/[a-z-]+(?=:)/,className:"attribute"},...t,n.CSS_NUMBER_MODE]}]},{
                    className:"selector-tag",begin:"\\b("+ne.join("|")+")\\b"}]}},grmr_diff:e=>({
            name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,
                match:m(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,/^\*\*\* +\d+,\d+ +\*\*\*\*$/,/^--- +\d+,\d+ +----$/)
            },{className:"comment",variants:[{
                    begin:m(/Index: /,/^index/,/={3,}/,/^-{3}/,/^\*{3} /,/^\+{3}/,/^diff --git/),
                    end:/$/},{match:/^\*{15}$/}]},{className:"addition",begin:/^\+/,end:/$/},{
                className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,
                end:/$/}]}),grmr_go:e=>{const n={
            keyword:["break","default","func","interface","select","case","map","struct","chan","else","goto","package","switch","const","fallthrough","if","range","type","continue","for","import","return","var","go","defer","bool","byte","complex64","complex128","float32","float64","int8","int16","int32","int64","string","uint8","uint16","uint32","uint64","int","uint","uintptr","rune"],
            literal:["true","false","iota","nil"],
            built_in:["append","cap","close","complex","copy","imag","len","make","new","panic","print","println","real","recover","delete"]
        };return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",
            contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",
                variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{
                className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1
                },e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",
                end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",
                    begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}},grmr_ini:e=>{const n={
            className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{
                begin:e.NUMBER_RE}]},t=e.COMMENT();t.variants=[{begin:/;/,end:/$/},{begin:/#/,
            end:/$/}];const a={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{
                begin:/\$\{(.*?)\}/}]},i={className:"literal",
            begin:/\bon|off|true|false|yes|no\b/},s={className:"string",
            contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{
                begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]
        },r={begin:/\[/,end:/\]/,contains:[t,i,a,s,n,"self"],relevance:0
        },o=m(/[A-Za-z0-9_-]+/,/"(\\"|[^"])*"/,/'[^']*'/);return{name:"TOML, also INI",
            aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[t,{
                className:"section",begin:/\[+/,end:/\]+/},{
                begin:b(o,"(\\s*\\.\\s*",o,")*",g(/\s*=\s*[^#\s]/)),className:"attr",starts:{
                    end:/$/,contains:[t,r,i,a,s,n]}}]}},grmr_java:e=>{
            const n="[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",t=n+de("(?:<"+n+"~~~(?:\\s*,\\s*"+n+"~~~)*>)?",/~~~/g,2),a={
                keyword:["synchronized","abstract","private","var","static","if","const ","for","while","strictfp","finally","protected","import","native","final","void","enum","else","break","transient","catch","instanceof","volatile","case","assert","package","default","public","try","switch","continue","throws","protected","public","private","module","requires","exports","do"],
                literal:["false","true","null"],
                type:["char","boolean","long","float","int","byte","short","double"],
                built_in:["super","this"]},i={className:"meta",begin:"@"+n,contains:[{
                    begin:/\(/,end:/\)/,contains:["self"]}]},s={className:"params",begin:/\(/,
                end:/\)/,keywords:a,relevance:0,contains:[e.C_BLOCK_COMMENT_MODE],endsParent:!0}
            ;return{name:"Java",aliases:["jsp"],keywords:a,illegal:/<\/|#/,
                contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,
                        relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),{
                    begin:/import java\.[a-z]+\./,keywords:"import",relevance:2
                },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{
                    match:[/\b(?:class|interface|enum|extends|implements|new)/,/\s+/,n],className:{
                        1:"keyword",3:"title.class"}},{begin:[n,/\s+/,n,/\s+/,/=/],className:{1:"type",
                        3:"variable",5:"operator"}},{begin:[/record/,/\s+/,n],className:{1:"keyword",
                        3:"title.class"},contains:[s,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{
                    beginKeywords:"new throw return else",relevance:0},{
                    begin:["(?:"+t+"\\s+)",e.UNDERSCORE_IDENT_RE,/\s*(?=\()/],className:{
                        2:"title.function"},keywords:a,contains:[{className:"params",begin:/\(/,
                        end:/\)/,keywords:a,relevance:0,
                        contains:[i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,ce,e.C_BLOCK_COMMENT_MODE]
                    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},ce,i]}},grmr_javascript:Ee,
        grmr_json:e=>({name:"JSON",contains:[{className:"attr",
                begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},{match:/[{}[\],:]/,
                className:"punctuation",relevance:0},e.QUOTE_STRING_MODE,{
                beginKeywords:"true false null"
            },e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}),
        grmr_kotlin:e=>{const n={
            keyword:"abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
            built_in:"Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
            literal:"true false null"},t={className:"symbol",begin:e.UNDERSCORE_IDENT_RE+"@"
        },a={className:"subst",begin:/\$\{/,end:/\}/,contains:[e.C_NUMBER_MODE]},i={
            className:"variable",begin:"\\$"+e.UNDERSCORE_IDENT_RE},s={className:"string",
            variants:[{begin:'"""',end:'"""(?=[^"])',contains:[i,a]},{begin:"'",end:"'",
                illegal:/\n/,contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"',illegal:/\n/,
                contains:[e.BACKSLASH_ESCAPE,i,a]}]};a.contains.push(s);const r={
            className:"meta",
            begin:"@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*"+e.UNDERSCORE_IDENT_RE+")?"
        },o={className:"meta",begin:"@"+e.UNDERSCORE_IDENT_RE,contains:[{begin:/\(/,
                end:/\)/,contains:[e.inherit(s,{className:"string"})]}]
        },l=ce,c=e.COMMENT("/\\*","\\*/",{contains:[e.C_BLOCK_COMMENT_MODE]}),d={
            variants:[{className:"type",begin:e.UNDERSCORE_IDENT_RE},{begin:/\(/,end:/\)/,
                contains:[]}]},g=d;return g.variants[1].contains=[d],d.variants[1].contains=[g],
            {name:"Kotlin",aliases:["kt","kts"],keywords:n,
                contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
                        begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,c,{className:"keyword",
                    begin:/\b(break|continue|return|this)\b/,starts:{contains:[{className:"symbol",
                            begin:/@\w+/}]}},t,r,o,{className:"function",beginKeywords:"fun",end:"[(]|$",
                    returnBegin:!0,excludeEnd:!0,keywords:n,relevance:5,contains:[{
                        begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,
                        contains:[e.UNDERSCORE_TITLE_MODE]},{className:"type",begin:/</,end:/>/,
                        keywords:"reified",relevance:0},{className:"params",begin:/\(/,end:/\)/,
                        endsParent:!0,keywords:n,relevance:0,contains:[{begin:/:/,end:/[=,\/]/,
                            endsWithParent:!0,contains:[d,e.C_LINE_COMMENT_MODE,c],relevance:0
                        },e.C_LINE_COMMENT_MODE,c,r,o,s,e.C_NUMBER_MODE]},c]},{className:"class",
                    beginKeywords:"class interface trait",end:/[:\{(]|$/,excludeEnd:!0,
                    illegal:"extends implements",contains:[{
                        beginKeywords:"public protected internal private constructor"
                    },e.UNDERSCORE_TITLE_MODE,{className:"type",begin:/</,end:/>/,excludeBegin:!0,
                        excludeEnd:!0,relevance:0},{className:"type",begin:/[,:]\s*/,end:/[<\(,]|$/,
                        excludeBegin:!0,returnEnd:!0},r,o]},s,{className:"meta",begin:"^#!/usr/bin/env",
                    end:"$",illegal:"\n"},l]}},grmr_less:e=>{
            const n=ee(e),t=re,a="([\\w-]+|@\\{[\\w-]+\\})",i=[],s=[],r=e=>({
                className:"string",begin:"~?"+e+".*?"+e}),o=(e,n,t)=>({className:e,begin:n,
                relevance:t}),l={$pattern:/[a-z-]+/,keyword:"and or not only",
                attribute:te.join(" ")},c={begin:"\\(",end:"\\)",contains:s,keywords:l,
                relevance:0}
            ;s.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r("'"),r('"'),n.CSS_NUMBER_MODE,{
                begin:"(url|data-uri)\\(",starts:{className:"string",end:"[\\)\\n]",
                    excludeEnd:!0}
            },n.HEXCOLOR,c,o("variable","@@?[\\w-]+",10),o("variable","@\\{[\\w-]+\\}"),o("built_in","~?`[^`]*?`"),{
                className:"attribute",begin:"[\\w-]+\\s*:",end:":",returnBegin:!0,excludeEnd:!0
            },n.IMPORTANT);const d=s.concat({begin:/\{/,end:/\}/,contains:i}),g={
                beginKeywords:"when",endsWithParent:!0,contains:[{beginKeywords:"and not"
                }].concat(s)},u={begin:a+"\\s*:",returnBegin:!0,end:/[;}]/,relevance:0,
                contains:[{begin:/-(webkit|moz|ms|o)-/},{className:"attribute",
                    begin:"\\b("+se.join("|")+")\\b",end:/(?=:)/,starts:{endsWithParent:!0,
                        illegal:"[<=$]",relevance:0,contains:s}}]},b={className:"keyword",
                begin:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                starts:{end:"[;{}]",keywords:l,returnEnd:!0,contains:s,relevance:0}},m={
                className:"variable",variants:[{begin:"@[\\w-]+\\s*:",relevance:15},{
                    begin:"@[\\w-]+"}],starts:{end:"[;}]",returnEnd:!0,contains:d}},p={variants:[{
                    begin:"[\\.#:&\\[>]",end:"[;{}]"},{begin:a,end:/\{/}],returnBegin:!0,
                returnEnd:!0,illegal:"[<='$\"]",relevance:0,
                contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,g,o("keyword","all\\b"),o("variable","@\\{[\\w-]+\\}"),{
                    begin:"\\b("+ne.join("|")+")\\b",className:"selector-tag"
                },o("selector-tag",a+"%?",0),o("selector-id","#"+a),o("selector-class","\\."+a,0),o("selector-tag","&",0),n.ATTRIBUTE_SELECTOR_MODE,{
                    className:"selector-pseudo",begin:":("+ae.join("|")+")"},{
                    className:"selector-pseudo",begin:"::("+ie.join("|")+")"},{begin:/\(/,end:/\)/,
                    relevance:0,contains:d},{begin:"!important"}]},_={
                begin:`[\\w-]+:(:)?(${t.join("|")})`,returnBegin:!0,contains:[p]}
            ;return i.push(e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,b,m,_,u,p),{
                name:"Less",case_insensitive:!0,illegal:"[=>'/<($\"]",contains:i}},grmr_lua:e=>{
            const n="\\[=*\\[",t="\\]=*\\]",a={begin:n,end:t,contains:["self"]
            },i=[e.COMMENT("--(?!\\[=*\\[)","$"),e.COMMENT("--\\[=*\\[",t,{contains:[a],
                relevance:10})];return{name:"Lua",keywords:{$pattern:e.UNDERSCORE_IDENT_RE,
                    literal:"true false nil",
                    keyword:"and break do else elseif end for goto if in local not or repeat return then until while",
                    built_in:"_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
                },contains:i.concat([{className:"function",beginKeywords:"function",end:"\\)",
                    contains:[e.inherit(e.TITLE_MODE,{
                        begin:"([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}),{className:"params",
                        begin:"\\(",endsWithParent:!0,contains:i}].concat(i)
                },e.C_NUMBER_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"string",
                    begin:n,end:t,contains:[a],relevance:5}])}},grmr_makefile:e=>{const n={
            className:"variable",variants:[{begin:"\\$\\("+e.UNDERSCORE_IDENT_RE+"\\)",
                contains:[e.BACKSLASH_ESCAPE]},{begin:/\$[@%<?\^\+\*]/}]},t={className:"string",
            begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n]},a={className:"variable",
            begin:/\$\([\w-]+\s/,end:/\)/,keywords:{
                built_in:"subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
            },contains:[n]},i={begin:"^"+e.UNDERSCORE_IDENT_RE+"\\s*(?=[:+?]?=)"},s={
            className:"section",begin:/^[^\s]+:/,end:/$/,contains:[n]};return{
            name:"Makefile",aliases:["mk","mak","make"],keywords:{$pattern:/[\w-]+/,
                keyword:"define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
            },contains:[e.HASH_COMMENT_MODE,n,t,a,i,{className:"meta",begin:/^\.PHONY:/,
                end:/$/,keywords:{$pattern:/[\.\w]+/,keyword:".PHONY"}},s]}},grmr_xml:e=>{
            const n=b(/[A-Z_]/,u(/[A-Z0-9_.-]*:/),/[A-Z0-9_.-]*/),t={className:"symbol",
                begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},a={begin:/\s/,contains:[{
                    className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(a,{
                begin:/\(/,end:/\)/}),s=e.inherit(e.APOS_STRING_MODE,{className:"string"
            }),r=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),o={endsWithParent:!0,
                illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,
                    relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",
                        endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[t]},{begin:/'/,end:/'/,
                            contains:[t]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",
                aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
                case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,
                    relevance:10,contains:[a,r,s,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",
                            begin:/<![a-z]/,end:/>/,contains:[a,i,r,s]}]}]},e.COMMENT(/<!--/,/-->/,{
                    relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},t,{
                    className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",
                    begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[o],starts:{
                        end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",
                    begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[o],starts:{
                        end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{
                    className:"tag",begin:/<>|<\/>/},{className:"tag",
                    begin:b(/</,g(b(n,m(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",
                        begin:n,relevance:0,starts:o}]},{className:"tag",begin:b(/<\//,g(b(n,/>/))),
                    contains:[{className:"name",begin:n,relevance:0},{begin:/>/,relevance:0,
                        endsParent:!0}]}]}},grmr_markdown:e=>{const n={begin:/<\/?[A-Za-z_]/,end:">",
            subLanguage:"xml",relevance:0},t={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0
            },{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                relevance:2},{begin:b(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
                relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
                begin:/\[.+?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{
                className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
                returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
                excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
                end:"\\]",excludeBegin:!0,excludeEnd:!0}]},a={className:"strong",contains:[],
            variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},i={
            className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{
                begin:/_(?!_)/,end:/_/,relevance:0}]};a.contains.push(i),i.contains.push(a)
        ;let s=[n,t]
        ;return a.contains=a.contains.concat(s),i.contains=i.contains.concat(s),
            s=s.concat(a,i),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
                className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:s},{
                    begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
                        contains:s}]}]},n,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                end:"\\s+",excludeEnd:!0},a,i,{className:"quote",begin:"^>\\s+",contains:s,
                end:"$"},{className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{
                    begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{
                    begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",
                    contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{
                begin:"^[-\\*]{3,}",end:"$"},t,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{
                    className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{
                    className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}},grmr_objectivec:e=>{
            const n=/[a-zA-Z@][a-zA-Z0-9_]*/,t={$pattern:n,
                keyword:["@interface","@class","@protocol","@implementation"]};return{
                name:"Objective-C",aliases:["mm","objc","obj-c","obj-c++","objective-c++"],
                keywords:{$pattern:n,
                    keyword:["int","float","while","char","export","sizeof","typedef","const","struct","for","union","unsigned","long","volatile","static","bool","mutable","if","do","return","goto","void","enum","else","break","extern","asm","case","short","default","double","register","explicit","signed","typename","this","switch","continue","wchar_t","inline","readonly","assign","readwrite","self","@synchronized","id","typeof","nonatomic","super","unichar","IBOutlet","IBAction","strong","weak","copy","in","out","inout","bycopy","byref","oneway","__strong","__weak","__block","__autoreleasing","@private","@protected","@public","@try","@property","@end","@throw","@catch","@finally","@autoreleasepool","@synthesize","@dynamic","@selector","@optional","@required","@encode","@package","@import","@defs","@compatibility_alias","__bridge","__bridge_transfer","__bridge_retained","__bridge_retain","__covariant","__contravariant","__kindof","_Nonnull","_Nullable","_Null_unspecified","__FUNCTION__","__PRETTY_FUNCTION__","__attribute__","getter","setter","retain","unsafe_unretained","nonnull","nullable","null_unspecified","null_resettable","class","instancetype","NS_DESIGNATED_INITIALIZER","NS_UNAVAILABLE","NS_REQUIRES_SUPER","NS_RETURNS_INNER_POINTER","NS_INLINE","NS_AVAILABLE","NS_DEPRECATED","NS_ENUM","NS_OPTIONS","NS_SWIFT_UNAVAILABLE","NS_ASSUME_NONNULL_BEGIN","NS_ASSUME_NONNULL_END","NS_REFINED_FOR_SWIFT","NS_SWIFT_NAME","NS_SWIFT_NOTHROW","NS_DURING","NS_HANDLER","NS_ENDHANDLER","NS_VALUERETURN","NS_VOIDRETURN"],
                    literal:["false","true","FALSE","TRUE","nil","YES","NO","NULL"],
                    built_in:["BOOL","dispatch_once_t","dispatch_queue_t","dispatch_sync","dispatch_async","dispatch_once"]
                },illegal:"</",contains:[{className:"built_in",
                    begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{
                    className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",
                        contains:[e.BACKSLASH_ESCAPE]}]},{className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,
                    keywords:{
                        keyword:"if else elif endif define undef warning error line pragma ifdef ifndef include"
                    },contains:[{begin:/\\\n/,relevance:0},e.inherit(e.QUOTE_STRING_MODE,{
                        className:"string"}),{className:"string",begin:/<.*?>/,end:/$/,illegal:"\\n"
                    },e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"class",
                    begin:"("+t.keyword.join("|")+")\\b",end:/(\{|$)/,excludeEnd:!0,keywords:t,
                    contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,
                    relevance:0}]}},grmr_perl:e=>{const n=/[dualxmsipngr]{0,12}/,t={
            $pattern:/[\w.]+/,
            keyword:"abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
        },a={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:t},i={begin:/->\{/,
            end:/\}/},s={variants:[{begin:/\$\d/},{
                begin:b(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,"(?![A-Za-z])(?![@$%])")
            },{begin:/[$%@][^\s\w{]/,relevance:0}]
        },r=[e.BACKSLASH_ESCAPE,a,s],o=[/!/,/\//,/\|/,/\?/,/'/,/"/,/#/],l=(e,t,a="\\1")=>{
            const i="\\1"===a?a:b(a,t)
            ;return b(b("(?:",e,")"),t,/(?:\\.|[^\\\/])*?/,i,/(?:\\.|[^\\\/])*?/,a,n)
        },c=(e,t,a)=>b(b("(?:",e,")"),t,/(?:\\.|[^\\\/])*?/,a,n),d=[s,e.HASH_COMMENT_MODE,e.COMMENT(/^=\w/,/=cut/,{
            endsWithParent:!0}),i,{className:"string",contains:r,variants:[{
                begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",
                end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{
                begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*<",end:">",
                relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",
                contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",
                contains:[e.BACKSLASH_ESCAPE]},{begin:/\{\w+\}/,relevance:0},{
                begin:"-?\\w+\\s*=>",relevance:0}]},{className:"number",
            begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
            relevance:0},{
            begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",
            keywords:"split return print reverse grep",relevance:0,
            contains:[e.HASH_COMMENT_MODE,{className:"regexp",variants:[{
                    begin:l("s|tr|y",m(...o,{capture:!0}))},{begin:l("s|tr|y","\\(","\\)")},{
                    begin:l("s|tr|y","\\[","\\]")},{begin:l("s|tr|y","\\{","\\}")}],relevance:2},{
                className:"regexp",variants:[{begin:/(m|qr)\/\//,relevance:0},{
                    begin:c("(?:m|qr)?",/\//,/\//)},{begin:c("m|qr",m(...o,{capture:!0}),/\1/)},{
                    begin:c("m|qr",/\(/,/\)/)},{begin:c("m|qr",/\[/,/\]/)},{
                    begin:c("m|qr",/\{/,/\}/)}]}]},{className:"function",beginKeywords:"sub",
            end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{
            begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",
            subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]
        }];return a.contains=d,i.contains=d,{name:"Perl",aliases:["pl","pm"],keywords:t,
            contains:d}},grmr_php:e=>{const n={className:"variable",
            begin:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$])"},t={
            className:"meta",variants:[{begin:/<\?php/,relevance:10},{begin:/<\?[=]?/},{
                begin:/\?>/}]},a={className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,
                end:/\}/}]},i=e.inherit(e.APOS_STRING_MODE,{illegal:null
        }),s=e.inherit(e.QUOTE_STRING_MODE,{illegal:null,
            contains:e.QUOTE_STRING_MODE.contains.concat(a)}),r=e.END_SAME_AS_BEGIN({
            begin:/<<<[ \t]*(\w+)\n/,end:/[ \t]*(\w+)\b/,
            contains:e.QUOTE_STRING_MODE.contains.concat(a)}),o={className:"string",
            contains:[e.BACKSLASH_ESCAPE,t],variants:[e.inherit(i,{begin:"b'",end:"'"
            }),e.inherit(s,{begin:'b"',end:'"'}),s,i,r]},l={className:"number",variants:[{
                begin:"\\b0b[01]+(?:_[01]+)*\\b"},{begin:"\\b0o[0-7]+(?:_[0-7]+)*\\b"},{
                begin:"\\b0x[\\da-f]+(?:_[\\da-f]+)*\\b"},{
                begin:"(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:e[+-]?\\d+)?"
            }],relevance:0},c={
            keyword:"__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile enum eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 mixed new object or private protected public real return string switch throw trait try unset use var void while xor yield",
            literal:"false null true",
            built_in:"Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException UnhandledMatchError ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Stringable Throwable Traversable WeakReference WeakMap Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
        };return{case_insensitive:!0,keywords:c,
            contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[t]
            }),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]
            }),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,
                keywords:"__halt_compiler"}),t,{className:"keyword",begin:/\$this\b/},n,{
                begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",
                relevance:0,beginKeywords:"fn function",end:/[;{]/,excludeEnd:!0,
                illegal:"[$%\\[]",contains:[{beginKeywords:"use"},e.UNDERSCORE_TITLE_MODE,{
                    begin:"=>",endsParent:!0},{className:"params",begin:"\\(",end:"\\)",
                    excludeBegin:!0,excludeEnd:!0,keywords:c,
                    contains:["self",n,e.C_BLOCK_COMMENT_MODE,o,l]}]},{className:"class",variants:[{
                    beginKeywords:"enum",illegal:/[($"]/},{beginKeywords:"class interface trait",
                    illegal:/[:($"]/}],relevance:0,end:/\{/,excludeEnd:!0,contains:[{
                    beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{
                beginKeywords:"namespace",relevance:0,end:";",illegal:/[.']/,
                contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",relevance:0,end:";",
                contains:[e.UNDERSCORE_TITLE_MODE]},o,l]}},grmr_php_template:e=>({
            name:"PHP template",subLanguage:"xml",contains:[{begin:/<\?(php|=)?/,end:/\?>/,
                subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',
                    end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{
                    illegal:null,className:null,contains:null,skip:!0
                }),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,
                    skip:!0})]}]}),grmr_plaintext:e=>({name:"Plain text",aliases:["text","txt"],
            disableAutodetect:!0}),grmr_python:e=>{const n={$pattern:/[A-Za-z]\w+|__\w+__/,
            keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],
            built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],
            literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],
            type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]
        },t={className:"meta",begin:/^(>>>|\.\.\.) /},a={className:"subst",begin:/\{/,
            end:/\}/,keywords:n,illegal:/#/},i={begin:/\{\{/,relevance:0},s={
            className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{
                begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,
                contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
                begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,
                contains:[e.BACKSLASH_ESCAPE,t],relevance:10},{
                begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,
                contains:[e.BACKSLASH_ESCAPE,t,i,a]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,
                end:/"""/,contains:[e.BACKSLASH_ESCAPE,t,i,a]},{begin:/([uU]|[rR])'/,end:/'/,
                relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{
                begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,
                end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,
                contains:[e.BACKSLASH_ESCAPE,i,a]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,
                contains:[e.BACKSLASH_ESCAPE,i,a]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
        },r="[0-9](_?[0-9])*",o=`(\\b(${r}))?\\.(${r})|\\b(${r})\\.`,l={
            className:"number",relevance:0,variants:[{
                begin:`(\\b(${r})|(${o}))[eE][+-]?(${r})[jJ]?\\b`},{begin:`(${o})[jJ]?`},{
                begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{
                begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{
                begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${r})[jJ]\\b`}]},c={
            className:"comment",begin:g(/# type:/),end:/$/,keywords:n,contains:[{
                begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},d={
            className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,
                end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,
                contains:["self",t,l,s,e.HASH_COMMENT_MODE]}]};return a.contains=[s,l,t],{
            name:"Python",aliases:["py","gyp","ipython"],keywords:n,
            illegal:/(<\/|->|\?)|=>/,contains:[t,l,{begin:/\bself\b/},{beginKeywords:"if",
                relevance:0},s,c,e.HASH_COMMENT_MODE,{match:[/def/,/\s+/,f],scope:{1:"keyword",
                    3:"title.function"},contains:[d]},{variants:[{
                    match:[/class/,/\s+/,f,/\s*/,/\(\s*/,f,/\s*\)/]},{match:[/class/,/\s+/,f]}],
                scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{
                className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[l,d,s]}]}},
        grmr_python_repl:e=>({aliases:["pycon"],contains:[{className:"meta",starts:{
                    end:/ |$/,starts:{end:"$",subLanguage:"python"}},variants:[{
                    begin:/^>>>(?=[ ]|$)/},{begin:/^\.\.\.(?=[ ]|$)/}]}]}),grmr_r:e=>{
            const n=/(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,t=m(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,/0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),a=/[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,i=m(/[()]/,/[{}]/,/\[\[/,/[[\]]/,/\\/,/,/)
            ;return{name:"R",keywords:{$pattern:n,
                    keyword:"function if in break next repeat else for while",
                    literal:"NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                    built_in:"LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
                },contains:[e.COMMENT(/#'/,/$/,{contains:[{scope:"doctag",begin:"@examples",
                        starts:{contains:[{begin:/\n/},{begin:/#'\s*(?=@[a-zA-Z]+)/,endsParent:!0},{
                                begin:/#'/,end:/$/,excludeBegin:!0}]}},{scope:"doctag",begin:"@param",end:/$/,
                        contains:[{scope:"variable",variants:[{begin:n},{begin:/`(?:\\.|[^`\\])+`/}],
                            endsParent:!0}]},{scope:"doctag",begin:/@[a-zA-Z]+/},{scope:"keyword",
                        begin:/\\[a-zA-Z]+/}]}),e.HASH_COMMENT_MODE,{scope:"string",
                    contains:[e.BACKSLASH_ESCAPE],variants:[e.END_SAME_AS_BEGIN({
                        begin:/[rR]"(-*)\(/,end:/\)(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\{/,
                        end:/\}(-*)"/}),e.END_SAME_AS_BEGIN({begin:/[rR]"(-*)\[/,end:/\](-*)"/
                    }),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\(/,end:/\)(-*)'/
                    }),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\{/,end:/\}(-*)'/
                    }),e.END_SAME_AS_BEGIN({begin:/[rR]'(-*)\[/,end:/\](-*)'/}),{begin:'"',end:'"',
                        relevance:0},{begin:"'",end:"'",relevance:0}]},{relevance:0,variants:[{scope:{
                            1:"operator",2:"number"},match:[a,t]},{scope:{1:"operator",2:"number"},
                        match:[/%[^%]*%/,t]},{scope:{1:"punctuation",2:"number"},match:[i,t]},{scope:{
                            2:"number"},match:[/[^a-zA-Z0-9._]|^/,t]}]},{scope:{3:"operator"},
                    match:[n,/\s+/,/<-/,/\s+/]},{scope:"operator",relevance:0,variants:[{match:a},{
                        match:/%[^%]*%/}]},{scope:"punctuation",relevance:0,match:i},{begin:"`",end:"`",
                    contains:[{begin:/\\./}]}]}},grmr_ruby:e=>{
            const n="([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",t={
                keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
                built_in:"proc lambda",literal:"true false nil"},a={className:"doctag",
                begin:"@[A-Za-z]+"},i={begin:"#<",end:">"},s=[e.COMMENT("#","$",{contains:[a]
            }),e.COMMENT("^=begin","^=end",{contains:[a],relevance:10
            }),e.COMMENT("^__END__","\\n$")],r={className:"subst",begin:/#\{/,end:/\}/,
                keywords:t},o={className:"string",contains:[e.BACKSLASH_ESCAPE,r],variants:[{
                    begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/`/,end:/`/},{begin:/%[qQwWx]?\(/,
                    end:/\)/},{begin:/%[qQwWx]?\[/,end:/\]/},{begin:/%[qQwWx]?\{/,end:/\}/},{
                    begin:/%[qQwWx]?</,end:/>/},{begin:/%[qQwWx]?\//,end:/\//},{begin:/%[qQwWx]?%/,
                    end:/%/},{begin:/%[qQwWx]?-/,end:/-/},{begin:/%[qQwWx]?\|/,end:/\|/},{
                    begin:/\B\?(\\\d{1,3})/},{begin:/\B\?(\\x[A-Fa-f0-9]{1,2})/},{
                    begin:/\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/},{
                    begin:/\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/},{
                    begin:/\B\?\\(c|C-)[\x20-\x7e]/},{begin:/\B\?\\?\S/},{
                    begin:b(/<<[-~]?'?/,g(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                    contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,
                        contains:[e.BACKSLASH_ESCAPE,r]})]}]},l="[0-9](_?[0-9])*",c={className:"number",
                relevance:0,variants:[{
                    begin:`\\b([1-9](_?[0-9])*|0)(\\.(${l}))?([eE][+-]?(${l})|r)?i?\\b`},{
                    begin:"\\b0[dD][0-9](_?[0-9])*r?i?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*r?i?\\b"
                },{begin:"\\b0[oO][0-7](_?[0-7])*r?i?\\b"},{
                    begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"},{
                    begin:"\\b0(_?[0-7])+r?i?\\b"}]},d={className:"params",begin:"\\(",end:"\\)",
                endsParent:!0,keywords:t},u=[o,{className:"class",beginKeywords:"class module",
                end:"$|;",illegal:/=/,contains:[e.inherit(e.TITLE_MODE,{
                    begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"}),{begin:"<\\s*",contains:[{
                        begin:"("+e.IDENT_RE+"::)?"+e.IDENT_RE,relevance:0}]}].concat(s)},{
                className:"function",begin:b(/def\s+/,g(n+"\\s*(\\(|;|$)")),relevance:0,
                keywords:"def",end:"$|;",contains:[e.inherit(e.TITLE_MODE,{begin:n
                }),d].concat(s)},{begin:e.IDENT_RE+"::"},{className:"symbol",
                begin:e.UNDERSCORE_IDENT_RE+"(!|\\?)?:",relevance:0},{className:"symbol",
                begin:":(?!\\s)",contains:[o,{begin:n}],relevance:0},c,{className:"variable",
                begin:"(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"},{
                className:"params",begin:/\|/,end:/\|/,relevance:0,keywords:t},{
                begin:"("+e.RE_STARTERS_RE+"|unless)\\s*",keywords:"unless",contains:[{
                    className:"regexp",contains:[e.BACKSLASH_ESCAPE,r],illegal:/\n/,variants:[{
                        begin:"/",end:"/[a-z]*"},{begin:/%r\{/,end:/\}[a-z]*/},{begin:"%r\\(",
                        end:"\\)[a-z]*"},{begin:"%r!",end:"![a-z]*"},{begin:"%r\\[",end:"\\][a-z]*"}]
                }].concat(i,s),relevance:0}].concat(i,s);r.contains=u,d.contains=u;const m=[{
                begin:/^\s*=>/,starts:{end:"$",contains:u}},{className:"meta",
                begin:"^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                starts:{end:"$",contains:u}}];return s.unshift(i),{name:"Ruby",
                aliases:["rb","gemspec","podspec","thor","irb"],keywords:t,illegal:/\/\*/,
                contains:[e.SHEBANG({binary:"ruby"})].concat(m).concat(s).concat(u)}},
        grmr_rust:e=>{const n={className:"title.function.invoke",relevance:0,
                begin:b(/\b/,/(?!let\b)/,e.IDENT_RE,g(/\s*\(/))
            },t="([ui](8|16|32|64|128|size)|f(32|64))?",a=["drop ","Copy","Send","Sized","Sync","Drop","Fn","FnMut","FnOnce","ToOwned","Clone","Debug","PartialEq","PartialOrd","Eq","Ord","AsRef","AsMut","Into","From","Default","Iterator","Extend","IntoIterator","DoubleEndedIterator","ExactSizeIterator","SliceConcatExt","ToString","assert!","assert_eq!","bitflags!","bytes!","cfg!","col!","concat!","concat_idents!","debug_assert!","debug_assert_eq!","env!","panic!","file!","format!","format_args!","include_bin!","include_str!","line!","local_data_key!","module_path!","option_env!","print!","println!","select!","stringify!","try!","unimplemented!","unreachable!","vec!","write!","writeln!","macro_rules!","assert_ne!","debug_assert_ne!"]
        ;return{name:"Rust",aliases:["rs"],keywords:{$pattern:e.IDENT_RE+"!?",
                type:["i8","i16","i32","i64","i128","isize","u8","u16","u32","u64","u128","usize","f32","f64","str","char","bool","Box","Option","Result","String","Vec"],
                keyword:["abstract","as","async","await","become","box","break","const","continue","crate","do","dyn","else","enum","extern","false","final","fn","for","if","impl","in","let","loop","macro","match","mod","move","mut","override","priv","pub","ref","return","self","Self","static","struct","super","trait","true","try","type","typeof","unsafe","unsized","use","virtual","where","while","yield"],
                literal:["true","false","Some","None","Ok","Err"],built_in:a},illegal:"</",
            contains:[e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*","\\*/",{contains:["self"]
            }),e.inherit(e.QUOTE_STRING_MODE,{begin:/b?"/,illegal:null}),{
                className:"string",variants:[{begin:/b?r(#*)"(.|\n)*?"\1(?!#)/},{
                    begin:/b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]},{className:"symbol",
                begin:/'[a-zA-Z_][a-zA-Z0-9_]*/},{className:"number",variants:[{
                    begin:"\\b0b([01_]+)"+t},{begin:"\\b0o([0-7_]+)"+t},{
                    begin:"\\b0x([A-Fa-f0-9_]+)"+t},{
                    begin:"\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)"+t}],relevance:0},{
                begin:[/fn/,/\s+/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
                    3:"title.function"}},{className:"meta",begin:"#!?\\[",end:"\\]",contains:[{
                    className:"string",begin:/"/,end:/"/}]},{
                begin:[/let/,/\s+/,/(?:mut\s+)?/,e.UNDERSCORE_IDENT_RE],className:{1:"keyword",
                    3:"keyword",4:"variable"}},{
                begin:[/for/,/\s+/,e.UNDERSCORE_IDENT_RE,/\s+/,/in/],className:{1:"keyword",
                    3:"variable",5:"keyword"}},{begin:[/type/,/\s+/,e.UNDERSCORE_IDENT_RE],
                className:{1:"keyword",3:"title.class"}},{
                begin:[/(?:trait|enum|struct|union|impl|for)/,/\s+/,e.UNDERSCORE_IDENT_RE],
                className:{1:"keyword",3:"title.class"}},{begin:e.IDENT_RE+"::",keywords:{
                    keyword:"Self",built_in:a}},{className:"punctuation",begin:"->"},n]}},
        grmr_scss:e=>{const n=ee(e),t=ie,a=ae,i="@[a-z-]+",s={className:"variable",
            begin:"(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"};return{name:"SCSS",case_insensitive:!0,
            illegal:"[=/|']",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{
                className:"selector-id",begin:"#[A-Za-z0-9_-]+",relevance:0},{
                className:"selector-class",begin:"\\.[A-Za-z0-9_-]+",relevance:0
            },n.ATTRIBUTE_SELECTOR_MODE,{className:"selector-tag",
                begin:"\\b("+ne.join("|")+")\\b",relevance:0},{className:"selector-pseudo",
                begin:":("+a.join("|")+")"},{className:"selector-pseudo",
                begin:"::("+t.join("|")+")"},s,{begin:/\(/,end:/\)/,contains:[n.CSS_NUMBER_MODE]
            },{className:"attribute",begin:"\\b("+se.join("|")+")\\b"},{
                begin:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
            },{begin:":",end:";",
                contains:[s,n.HEXCOLOR,n.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n.IMPORTANT]
            },{begin:"@(page|font-face)",keywords:{$pattern:i,keyword:"@page @font-face"}},{
                begin:"@",end:"[{;]",returnBegin:!0,keywords:{$pattern:/[a-z-]+/,
                    keyword:"and or not only",attribute:te.join(" ")},contains:[{begin:i,
                    className:"keyword"},{begin:/[a-z-]+(?=:)/,className:"attribute"
                },s,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,n.HEXCOLOR,n.CSS_NUMBER_MODE]}]}},
        grmr_shell:e=>({name:"Shell Session",aliases:["console","shellsession"],
            contains:[{className:"meta",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,starts:{
                    end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}),grmr_sql:e=>{
            const n=e.COMMENT("--","$"),t=["true","false","unknown"],a=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],i=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],s=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],r=i,o=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year","add","asc","collation","desc","final","first","last","view"].filter((e=>!i.includes(e))),l={
                begin:b(/\b/,m(...r),/\s*\(/),relevance:0,keywords:{built_in:r}};return{
                name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{
                    $pattern:/\b[\w\.]+/,keyword:((e,{exceptions:n,when:t}={})=>{const a=t
                    ;return n=n||[],e.map((e=>e.match(/\|\d+$/)||n.includes(e)?e:a(e)?e+"|0":e))
                    })(o,{when:e=>e.length<3}),literal:t,type:a,
                    built_in:["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"]
                },contains:[{begin:m(...s),relevance:0,keywords:{$pattern:/[\w\.]+/,
                        keyword:o.concat(s),literal:t,type:a}},{className:"type",
                    begin:m("double precision","large object","with timezone","without timezone")
                },l,{className:"variable",begin:/@[a-z0-9]+/},{className:"string",variants:[{
                        begin:/'/,end:/'/,contains:[{begin:/''/}]}]},{begin:/"/,end:/"/,contains:[{
                        begin:/""/}]},e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,n,{className:"operator",
                    begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0}]}},
        grmr_swift:e=>{const n={match:/\s+/,relevance:0},t=e.COMMENT("/\\*","\\*/",{
            contains:["self"]}),a=[e.C_LINE_COMMENT_MODE,t],i={match:[/\./,m(...Ne,...we)],
            className:{2:"keyword"}},s={match:b(/\./,m(...Oe)),relevance:0
        },r=Oe.filter((e=>"string"==typeof e)).concat(["_|0"]),o={variants:[{
                className:"keyword",
                match:m(...Oe.filter((e=>"string"!=typeof e)).concat(ve).map(ye),...we)}]},l={
            $pattern:m(/\b\w+/,/#\w+/),keyword:r.concat(Se),literal:Me},c=[i,s,o],d=[{
            match:b(/\./,m(...ke)),relevance:0},{className:"built_in",
            match:b(/\b/,m(...ke),/(?=\()/)}],u={match:/->/,relevance:0},p=[u,{
            className:"operator",relevance:0,variants:[{match:Te},{match:`\\.(\\.|${Ce})+`}]
        }],_="([0-9a-fA-F]_*)+",h={className:"number",relevance:0,variants:[{
                match:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{
                match:`\\b0x(${_})(\\.(${_}))?([pP][+-]?(([0-9]_*)+))?\\b`},{
                match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},f=(e="")=>({
            className:"subst",variants:[{match:b(/\\/,e,/[0\\tnr"']/)},{
                match:b(/\\/,e,/u\{[0-9a-fA-F]{1,8}\}/)}]}),E=(e="")=>({className:"subst",
            match:b(/\\/,e,/[\t ]*(?:[\r\n]|\r\n)/)}),y=(e="")=>({className:"subst",
            label:"interpol",begin:b(/\\/,e,/\(/),end:/\)/}),N=(e="")=>({begin:b(e,/"""/),
            end:b(/"""/,e),contains:[f(e),E(e),y(e)]}),w=(e="")=>({begin:b(e,/"/),
            end:b(/"/,e),contains:[f(e),y(e)]}),v={className:"string",
            variants:[N(),N("#"),N("##"),N("###"),w(),w("#"),w("##"),w("###")]},O={
            match:b(/`/,Ie,/`/)},M=[O,{className:"variable",match:/\$\d+/},{
            className:"variable",match:`\\$${De}+`}],x=[{match:/(@|#)available/,
            className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:$e,
                    contains:[...p,h,v]}]}},{className:"keyword",match:b(/@/,m(...Le))},{
            className:"meta",match:b(/@/,Ie)}],S={match:g(/\b[A-Z]/),relevance:0,contains:[{
                className:"type",
                match:b(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,De,"+")
            },{className:"type",match:Be,relevance:0},{match:/[?!]+/,relevance:0},{
                match:/\.\.\./,relevance:0},{match:b(/\s+&\s+/,g(Be)),relevance:0}]},k={
            begin:/</,end:/>/,keywords:l,contains:[...a,...c,...x,u,S]};S.contains.push(k)
        ;const A={begin:/\(/,end:/\)/,relevance:0,keywords:l,contains:["self",{
                    match:b(Ie,/\s*:/),keywords:"_|0",relevance:0
                },...a,...c,...d,...p,h,v,...M,...x,S]},C={begin:/</,end:/>/,contains:[...a,S]
            },T={begin:/\(/,end:/\)/,keywords:l,contains:[{
                    begin:m(g(b(Ie,/\s*:/)),g(b(Ie,/\s+/,Ie,/\s*:/))),end:/:/,relevance:0,
                    contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:Ie}]
                },...a,...c,...p,h,v,...x,S,A],endsParent:!0,illegal:/["']/},R={
                match:[/func/,/\s+/,m(O.match,Ie,Te)],className:{1:"keyword",3:"title.function"
                },contains:[C,T,n],illegal:[/\[/,/%/]},D={
                match:[/\b(?:subscript|init[?!]?)/,/\s*(?=[<(])/],className:{1:"keyword"},
                contains:[C,T,n],illegal:/\[|%/},I={match:[/operator/,/\s+/,Te],className:{
                    1:"keyword",3:"title"}},B={begin:[/precedencegroup/,/\s+/,Be],className:{
                    1:"keyword",3:"title"},contains:[S],keywords:[...xe,...Me],end:/}/}
        ;for(const e of v.variants){const n=e.contains.find((e=>"interpol"===e.label))
        ;n.keywords=l;const t=[...c,...d,...p,h,v,...M];n.contains=[...t,{begin:/\(/,
            end:/\)/,contains:["self",...t]}]}return{name:"Swift",keywords:l,
            contains:[...a,R,D,{beginKeywords:"struct protocol class extension enum actor",
                end:"\\{",excludeEnd:!0,keywords:l,contains:[e.inherit(e.TITLE_MODE,{
                    className:"title.class",begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/}),...c]
            },I,B,{beginKeywords:"import",end:/$/,contains:[...a],relevance:0
            },...c,...d,...p,h,v,...M,...x,S,A]}},grmr_typescript:e=>{const n={$pattern:ge,
                keyword:ue.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),
                literal:be,
                built_in:fe.concat(["any","void","number","boolean","string","object","never","enum"]),
                "variable.language":he},t={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"
            },a=(e,n,t)=>{const a=e.contains.findIndex((e=>e.label===n))
            ;if(-1===a)throw Error("can not find mode to replace");e.contains.splice(a,1,t)
            },i=Ee(e)
        ;return Object.assign(i.keywords,n),i.exports.PARAMS_CONTAINS.push(t),i.contains=i.contains.concat([t,{
            beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",
            end:/\{/,excludeEnd:!0,keywords:"interface extends"
        }]),a(i,"shebang",e.SHEBANG()),a(i,"use_strict",{className:"meta",relevance:10,
            begin:/^\s*['"]use strict['"]/
        }),i.contains.find((e=>"func.def"===e.label)).relevance=0,Object.assign(i,{
            name:"TypeScript",aliases:["ts","tsx"]}),i},grmr_vbnet:e=>{
            const n=/\d{1,2}\/\d{1,2}\/\d{4}/,t=/\d{4}-\d{1,2}-\d{1,2}/,a=/(\d|1[012])(:\d+){0,2} *(AM|PM)/,i=/\d{1,2}(:\d{1,2}){1,2}/,s={
                className:"literal",variants:[{begin:b(/# */,m(t,n),/ *#/)},{
                    begin:b(/# */,i,/ *#/)},{begin:b(/# */,a,/ *#/)},{
                    begin:b(/# */,m(t,n),/ +/,m(a,i),/ *#/)}]},r=e.COMMENT(/'''/,/$/,{contains:[{
                    className:"doctag",begin:/<\/?/,end:/>/}]}),o=e.COMMENT(null,/$/,{variants:[{
                    begin:/'/},{begin:/([\t ]|^)REM(?=\s)/}]});return{name:"Visual Basic .NET",
                aliases:["vb"],case_insensitive:!0,classNameAliases:{label:"symbol"},keywords:{
                    keyword:"addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                    built_in:"addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                    type:"boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                    literal:"true false nothing"},
                illegal:"//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",contains:[{
                    className:"string",begin:/"(""|[^/n])"C\b/},{className:"string",begin:/"/,
                    end:/"/,illegal:/\n/,contains:[{begin:/""/}]},s,{className:"number",relevance:0,
                    variants:[{begin:/\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
                    },{begin:/\b\d[\d_]*((U?[SIL])|[%&])?/},{begin:/&H[\dA-F_]+((U?[SIL])|[%&])?/},{
                        begin:/&O[0-7_]+((U?[SIL])|[%&])?/},{begin:/&B[01_]+((U?[SIL])|[%&])?/}]},{
                    className:"label",begin:/^\w+:/},r,o,{className:"meta",
                    begin:/[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                    end:/$/,keywords:{
                        keyword:"const disable else elseif enable end externalsource if region then"},
                    contains:[o]}]}},grmr_yaml:e=>{
            const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",a={
                    className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/
                    },{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",
                        variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]}]},i=e.inherit(a,{
                    variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),s={
                    end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},r={begin:/\{/,
                    end:/\}/,contains:[s],illegal:"\\n",relevance:0},o={begin:"\\[",end:"\\]",
                    contains:[s],illegal:"\\n",relevance:0},l=[{className:"attr",variants:[{
                        begin:"\\w[\\w :\\/.-]*:(?=[ \t]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ \t]|$)'},{
                        begin:"'\\w[\\w :\\/.-]*':(?=[ \t]|$)"}]},{className:"meta",begin:"^---\\s*$",
                    relevance:10},{className:"string",
                    begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{
                    begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,
                    relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",
                    begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t
                },{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",
                    begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",
                    relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},{
                    className:"number",
                    begin:"\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
                },{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},r,o,a],c=[...l]
            ;return c.pop(),c.push(i),s.contains=c,{name:"YAML",case_insensitive:!0,
                aliases:["yml"],contains:l}}});const Fe=Y;for(const e of Object.keys(ze)){
        const n=e.replace("grmr_","");Fe.registerLanguage(n,ze[e])}return Fe}()
;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);
/**end**/