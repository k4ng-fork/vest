"use strict";!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).ensure=e()}(this,(function(){function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r,u=arguments[e];for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r])}return t}).apply(this,arguments)}function e(t,e){return t===e}function r(t){return!(isNaN(parseFloat(t))||isNaN(Number(t))||!isFinite(t))}function u(t,e){return r(t)&&r(e)&&Number(t)>Number(e)}function n(t,e){return r(t)&&r(e)&&Number(t)>=Number(e)}function i(t,e){return!!(Array.isArray(e)&&-1!==["string","number","boolean"].indexOf(typeof t)||"string"==typeof e&&"string"==typeof t)&&-1!==e.indexOf(t)}function o(t){return!!Array.isArray(t)}function a(t){return!t||(r(t)?0===t:Object.prototype.hasOwnProperty.call(t,"length")?0===t.length:"object"!=typeof t||0===Object.keys(t).length)}function s(t){return"number"==typeof t}function d(t){return"string"==typeof t}function c(t){return!!t}function l(t,e){return t.length===e}function f(t,e){return r(t)&&r(e)&&Number(t)<Number(e)}function $(t,e){return r(t)&&r(e)&&Number(t)<=Number(e)}function p(t,e){return e instanceof RegExp?e.test(t):"string"==typeof e&&new RegExp(e).test(t)}function g(t,e){return r(t)&&r(e)&&Number(t)===Number(e)}function h(t,e){try{for(var r=arguments.length,u=Array(2<r?r-2:0),n=2;n<r;n++)u[n-2]=arguments[n];return!0===t.apply(void 0,[e].concat(u))}catch(t){return!1}}function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t){if(!("string"==typeof t||t instanceof String)){if(null===t)var e="null";else e="object"===(e=m(t))&&t.constructor&&t.constructor.hasOwnProperty("name")?t.constructor.name:"a ".concat(e);throw new TypeError("Expected string but received ".concat(e,"."))}}function b(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=1<arguments.length?arguments[1]:void 0;for(t in r)void 0===e[t]&&(e[t]=r[t]);return e}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e,r){if(y(t),"object"===_(e)){var u=e.min||0;e=e.max}else u=e,e=r;return(t=encodeURI(t).split(/%..|./).length-1)>=u&&(void 0===e||t<=e)}function v(t,e){y(t),(e=b(e,M)).allow_trailing_dot&&"."===t[t.length-1]&&(t=t.substring(0,t.length-1)),t=t.split(".");for(var r=0;r<t.length;r++)if(63<t[r].length)return!1;if(e.require_tld&&(r=t.pop(),!t.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(r)||/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20\u00A9\uFFFD]/.test(r)))return!1;for(var u=0;u<t.length;u++)if(r=t[u],e.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r)||/[\uff01-\uff5e]/.test(r)||"-"===r[0]||"-"===r[r.length-1])return!1;return!0}function Z(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";if(y(t),!(e=String(e)))return Z(t,4)||Z(t,6);if("4"===e)return!!G.test(t)&&255>=t.split(".").sort((function(t,e){return t-e}))[3];if("6"===e){if(e=[t],t.includes("%")&&(2!==(e=t.split("%")).length||!e[0].includes(":")||""===e[1]))return!1;var r=!1,u=Z((e=e[0].split(":"))[e.length-1],4),n=u?7:8;if(e.length>n)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(e.shift(),e.shift(),r=!0):"::"===t.substr(t.length-2)&&(e.pop(),e.pop(),r=!0);for(var i=0;i<e.length;++i)if(""===e[i]&&0<i&&i<e.length-1){if(r)return!1;r=!0}else if(!(u&&i===e.length-1||q.test(e[i])))return!1;return r?1<=e.length:e.length===n}return!1}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,u=Array(e);r<e;r++)u[r]=t[r];return u}function N(t){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){for(var r=0;r<e.length;r++){var u=e[r];if(t===u||"[object RegExp]"===Object.prototype.toString.call(u)&&u.test(t))return!0}return!1}var F=function(t,e){return(t=Object.prototype.hasOwnProperty.call(t,e)&&"function"==typeof t[e])||function(t){setTimeout((function(){throw Error("[ensure]: "+t)}))}('Rule "'+e+'" was not found in rules object. Make sure you typed it correctly.'),t},x=Function("return this")();e.negativeForm="notEquals",r.negativeForm="isNotNumeric",u.alias="gt",n.alias="gte",i.negativeForm="notInside",o.negativeForm="isNotArray",a.negativeForm="isNotEmpty",s.negativeForm="isNotNumber",d.negativeForm="isNotString",c.negativeForm="isFalsy",l.negativeForm="lengthNotEquals",f.alias="lt",$.alias="lte",p.negativeForm="notMatches",g.negativeForm="numberNotEquals";var w=function(t){var e,r=function(e){var r=t[e].negativeForm,u=t[e].alias;r&&(t[r]=function(){return!t[e].apply(t,arguments)}),u&&(t[u]=t[e])};for(e in t)r(e);return t}({equals:e,greaterThan:u,greaterThanOrEquals:n,inside:i,isArray:o,isEmpty:a,isEven:function(t){return!!r(t)&&0==t%2},isNumber:s,isNumeric:r,isOdd:function(t){return!!r(t)&&0!=t%2},isString:d,isTruthy:c,lengthEquals:l,lessThan:f,lessThanOrEquals:$,longerThan:function(t,e){return t.length>e},longerThanOrEquals:function(t,e){return t.length>=e},matches:p,numberEquals:g,shorterThan:function(t,e){return t.length<e},shorterThanOrEquals:function(t,e){return t.length<=e}}),I=function(t){return function(e){return t.every((function(t){return h.apply(void 0,[O[t.name],e].concat(t.args))}))}},O=t({},w);"function"==typeof x.Proxy&&(w=function(){var t=[],e=new Proxy(O,{get:function(r,u){return"test"===u?I(t):F(O,u)?function(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return t.push({name:u,args:n}),e}:void 0}});return e});var T=Object.keys(O);(w=function(){var e=[];return T.reduce((function(r,u){var n;return t(r,t({},F(O,u)&&((n={})[u]=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.push({name:u,args:n}),r},n)))}),{test:I(e)})}).extend=function(e){t(O,e),"function"==typeof x.Proxy&&(T=Object.keys(O))};for(var R,P={"en-US":/^[0-9A-Z]+$/i,"bg-BG":/^[0-9\u0410-\u042f]+$/i,"cs-CZ":/^[0-9A-Z\u00c1\u010c\u010e\u00c9\u011a\u00cd\u0147\u00d3\u0158\u0160\u0164\u00da\u016e\u00dd\u017d]+$/i,"da-DK":/^[0-9A-Z\u00c6\u00d8\u00c5]+$/i,"de-DE":/^[0-9A-Z\u00c4\u00d6\u00dc\u00df]+$/i,"el-GR":/^[0-9\u0391-\u03c9]+$/i,"es-ES":/^[0-9A-Z\u00c1\u00c9\u00cd\u00d1\u00d3\u00da\u00dc]+$/i,"fr-FR":/^[0-9A-Z\u00c0\u00c2\u00c6\u00c7\u00c9\u00c8\u00ca\u00cb\u00cf\u00ce\u00d4\u0152\u00d9\u00db\u00dc\u0178]+$/i,"it-IT":/^[0-9A-Z\u00c0\u00c9\u00c8\u00cc\u00ce\u00d3\u00d2\u00d9]+$/i,"hu-HU":/^[0-9A-Z\u00c1\u00c9\u00cd\u00d3\u00d6\u0150\u00da\u00dc\u0170]+$/i,"nb-NO":/^[0-9A-Z\u00c6\u00d8\u00c5]+$/i,"nl-NL":/^[0-9A-Z\u00c1\u00c9\u00cb\u00cf\u00d3\u00d6\u00dc\u00da]+$/i,"nn-NO":/^[0-9A-Z\u00c6\u00d8\u00c5]+$/i,"pl-PL":/^[0-9A-Z\u0104\u0106\u0118\u015a\u0141\u0143\u00d3\u017b\u0179]+$/i,"pt-PT":/^[0-9A-Z\u00c3\u00c1\u00c0\u00c2\u00c4\u00c7\u00c9\u00ca\u00cb\u00cd\u00cf\u00d5\u00d3\u00d4\u00d6\u00da\u00dc]+$/i,"ru-RU":/^[0-9\u0410-\u042f\u0401]+$/i,"sl-SI":/^[0-9A-Z\u010c\u0106\u0110\u0160\u017d]+$/i,"sk-SK":/^[0-9A-Z\u00c1\u010c\u010e\u00c9\u00cd\u0147\u00d3\u0160\u0164\u00da\u00dd\u017d\u0139\u0154\u013d\u00c4\u00d4]+$/i,"sr-RS@latin":/^[0-9A-Z\u010c\u0106\u017d\u0160\u0110]+$/i,"sr-RS":/^[0-9\u0410-\u042f\u0402\u0408\u0409\u040a\u040b\u040f]+$/i,"sv-SE":/^[0-9A-Z\u00c5\u00c4\u00d6]+$/i,"tr-TR":/^[0-9A-Z\u00c7\u011e\u0130\u0131\u00d6\u015e\u00dc]+$/i,"uk-UA":/^[0-9\u0410-\u0429\u042c\u042e\u042f\u0404I\u0407\u0490\u0456]+$/i,"ku-IQ":/^[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u06690-9\u0626\u0627\u0628\u067e\u062a\u062c\u0686\u062d\u062e\u062f\u0631\u0695\u0632\u0698\u0633\u0634\u0639\u063a\u0641\u06a4\u0642\u06a9\u06af\u0644\u06b5\u0645\u0646\u0648\u06c6\u06be\u06d5\u06cc\u06ce\u064a\u0637\u0624\u062b\u0622\u0625\u0623\u0643\u0636\u0635\u0629\u0638\u0630]+$/i,ar:/^[\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u06690-9\u0621\u0622\u0623\u0624\u0625\u0626\u0627\u0628\u0629\u062a\u062b\u062c\u062d\u062e\u062f\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u0649\u064a\u064b\u064c\u064d\u064e\u064f\u0650\u0651\u0652\u0670]+$/,he:/^[0-9\u05d0-\u05ea]+$/,"fa-IR":/^['0-9\u0622\u0627\u0628\u067e\u062a\u062b\u062c\u0686\u0647\u062e\u062f\u0630\u0631\u0632\u0698\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063a\u0641\u0642\u06a9\u06af\u0644\u0645\u0646\u0648\u0647\u06cc\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9\u06f0']+$/i},C="AU GB HK IN NZ ZA ZM".split(" "),L=0;L<C.length;L++)R="en-".concat(C[L]),P[R]=P["en-US"];for(C="AE BH DZ EG IQ JO KW LB LY MA QM QA SA SD SY TN YE".split(" "),L=0;L<C.length;L++)R="ar-".concat(C[L]),P[R]=P.ar;P["pt-BR"]=P["pt-PT"],P["pl-Pl"]=P["pl-PL"],C=Object.keys(P);var U=/^(?:4[0-9]{12}(?:[0-9]{3,6})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12,15}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/,D={symbol:"$",require_symbol:!1,allow_space_after_symbol:!1,symbol_after_digits:!1,allow_negatives:!0,parens_for_negatives:!1,negative_sign_before_digits:!1,negative_sign_after_digits:!1,allow_negative_sign_placeholder:!1,thousands_separator:",",decimal_separator:".",allow_decimal:!0,require_decimal:!1,digits_after_decimal:[2],allow_space_after_digits:!1},M={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1},G=/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,q=/^[0-9A-F]{1,4}$/i,z={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},j=/^([^\x00-\x1F\x7F-\x9F\cX]+)<(.+)>$/i,B=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,K=/^[a-z\d]+$/,H=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,k=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,Y=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,W={ES:function(t){y(t);var e={X:0,Y:1,Z:2};if(t=t.trim().toUpperCase(),!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(t))return!1;var r=t.slice(0,-1).replace(/[X,Y,Z]/g,(function(t){return e[t]}));return t.endsWith("TRWAGMYFPDXBNJZSQVHLCKE".split("")[r%23])},IN:function(t){var e=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],r=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]];if(t=t.trim(),!/^[1-9]\d{3}\s?\d{4}\s?\d{4}$/.test(t))return!1;var u=0;return t.replace(/\s/g,"").split("").map(Number).reverse().forEach((function(t,n){u=e[u][r[n%8][t]]})),0===u},NO:function(t){if(t=t.trim(),isNaN(Number(t))||11!==t.length||"00000000000"===t)return!1;var e=(11-(3*(t=t.split("").map(Number))[0]+7*t[1]+6*t[2]+1*t[3]+8*t[4]+9*t[5]+4*t[6]+5*t[7]+2*t[8])%11)%11,r=(11-(5*t[0]+4*t[1]+3*t[2]+2*t[3]+7*t[4]+6*t[5]+5*t[6]+4*t[7]+3*t[8]+2*e)%11)%11;return 11===e&&(e=0),e===t[9]&&r===t[10]},"he-IL":function(t){if(t=t.trim(),!/^\d{9}$/.test(t))return!1;for(var e,r=0,u=0;u<t.length;u++)r+=9<(e=Number(t[u])*(u%2+1))?e-9:e;return 0==r%10},"ar-TN":function(t){return t=t.trim(),!!/^\d{8}$/.test(t)},"zh-CN":function(t){var e={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},r="7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2".split(" "),u="10X98765432".split(""),n=function(t){return!!/^[1-9]\d{5}$/.test(t)&&!!e[Number.parseInt(t.substring(0,2))]},i=function(t){if(!/^[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))$/.test(t))return!1;var e=parseInt(t.substring(0,4),10),r=parseInt(t.substring(4,6),10);t=parseInt(t.substring(6),10);var u=new Date(e,r-1,t);return!(u>new Date||u.getFullYear()!==e||u.getMonth()!==r-1||u.getDate()!==t)},o=function(t){for(var e=t.substring(0,17),n=0,i=0;17>i;i++)n+=parseInt(e.charAt(i),10)*Number.parseInt(r[i]);return u[n%11]===t.charAt(17).toUpperCase()};return function(t){if(/^\d{15}|(\d{17}(\d|x|X))$/.test(t))if(15===t.length){var e=/^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(t);e?(e=t.substring(0,6),(e=n(e))?(e="19".concat(t.substring(6,12)),t=!!(e=i(e))&&o(t)):t=!1):t=!1}else 18===t.length&&(e=/^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(t))?(e=t.substring(0,6),(e=n(e))?(e=t.substring(6,14),t=!!(e=i(e))&&o(t)):t=!1):t=!1;else t=!1;return t}(t)},"zh-TW":function(t){var e={A:10,B:11,C:12,D:13,E:14,F:15,G:16,H:17,I:34,J:18,K:19,L:20,M:21,N:22,O:35,P:23,Q:24,R:25,S:26,T:27,U:28,V:29,W:32,X:30,Y:31,Z:33};return t=t.trim().toUpperCase(),!!/^[A-Z][0-9]{9}$/.test(t)&&Array.from(t).reduce((function(t,r,u){return 0===u?(t=e[r])%10*9+Math.floor(t/10):9===u?0==(10-t%10-Number(r))%10:t+Number(r)*(9-u)}),0)}},J={allow_primitives:!1},X=/^[A-z]{2,4}([_-]([A-z]{4}|[\d]{3}))?([_-]([A-z]{2}|[\d]{3}))?$/,V=/^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i,Q=/^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i,tt=/^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i,et={"am-AM":/^(\+?374|0)((10|[9|7][0-9])\d{6}$|[2-4]\d{7}$)/,"ar-AE":/^((\+?971)|0)?5[024568]\d{7}$/,"ar-BH":/^(\+?973)?(3|6)\d{7}$/,"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-EG":/^((\+?20)|0)?1[0125]\d{8}$/,"ar-IQ":/^(\+?964|0)?7[0-9]\d{8}$/,"ar-JO":/^(\+?962|0)?7[789]\d{7}$/,"ar-KW":/^(\+?965)[569]\d{7}$/,"ar-LY":/^((\+?218)|0)?(9[1-6]\d{7}|[1-8]\d{7,9})$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-TN":/^(\+?216)?[2459]\d{7}$/,"be-BY":/^(\+?375)?(24|25|29|33|44)\d{7}$/,"bg-BG":/^(\+?359|0)?8[789]\d{7}$/,"bn-BD":/^(\+?880|0)1[13456789][0-9]{8}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"da-DK":/^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,"de-DE":/^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,"de-AT":/^(\+43|0)\d{1,4}\d{3,12}$/,"de-CH":/^(\+41|0)(7[5-9])\d{1,7}$/,"el-GR":/^(\+?30|0)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-GG":/^(\+?44|0)1481\d{6}$/,"en-GH":/^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,"en-HK":/^(\+?852[-\s]?)?[456789]\d{3}[-\s]?\d{4}$/,"en-MO":/^(\+?853[-\s]?)?[6]\d{3}[-\s]?\d{4}$/,"en-IE":/^(\+?353|0)8[356789]\d{7}$/,"en-IN":/^(\+?91|0)?[6789]\d{9}$/,"en-KE":/^(\+?254|0)(7|1)\d{8}$/,"en-MT":/^(\+?356|0)?(99|79|77|21|27|22|25)[0-9]{6}$/,"en-MU":/^(\+?230|0)?\d{8}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)[28]\d{7,9}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"en-RW":/^(\+?250|0)?[7]\d{8}$/,"en-SG":/^(\+65)?[689]\d{7}$/,"en-SL":/^(?:0|94|\+94)?(7(0|1|2|5|6|7|8)( |-)?\d)\d{6}$/,"en-TZ":/^(\+?255|0)?[67]\d{8}$/,"en-UG":/^(\+?256|0)?[7]\d{8}$/,"en-US":/^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"en-ZW":/^(\+263)[0-9]{9}$/,"es-CO":/^(\+?57)?([1-8]{1}|3[0-9]{2})?[2-9]{1}\d{6}$/,"es-CL":/^(\+?56|0)[2-9]\d{1}\d{7}$/,"es-CR":/^(\+506)?[2-8]\d{7}$/,"es-EC":/^(\+?593|0)([2-7]|9[2-9])\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"es-MX":/^(\+?52)?(1|01)?\d{10,11}$/,"es-PA":/^(\+?507)\d{7,8}$/,"es-PY":/^(\+?595|0)9[9876]\d{7}$/,"es-UY":/^(\+598|0)9[1-9][\d]{6}$/,"et-EE":/^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,"fa-IR":/^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,"fj-FJ":/^(\+?679)?\s?\d{3}\s?\d{4}$/,"fo-FO":/^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"fr-GF":/^(\+?594|0|00594)[67]\d{8}$/,"fr-GP":/^(\+?590|0|00590)[67]\d{8}$/,"fr-MQ":/^(\+?596|0|00596)[67]\d{8}$/,"fr-RE":/^(\+?262|0|00262)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"id-ID":/^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+81[ \-]?(\(0\))?|0)[6789]0[ \-]?\d{4}[ \-]?\d{4}$/,"kk-KZ":/^(\+?7|8)?7\d{9}$/,"kl-GL":/^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,"ko-KR":/^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,"lt-LT":/^(\+370|8)\d{8}$/,"ms-MY":/^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"ne-NP":/^(\+?977)?9[78]\d{8}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nl-NL":/^(((\+|00)?31\(0\))|((\+|00)?31)|0)6{1}\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sl-SI":/^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,"sk-SK":/^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"sv-SE":/^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,"th-TH":/^(\+66|66|0)\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"uk-UA":/^(\+?38|8)?0\d{9}$/,"vi-VN":/^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,"zh-CN":/^((\+|00)86)?1([3568][0-9]|4[579]|6[67]|7[01235678]|9[189])[0-9]{8}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};et["en-CA"]=et["en-US"],et["fr-BE"]=et["nl-BE"],et["zh-HK"]=et["en-HK"],et["zh-MO"]=et["en-MO"],R=Object.keys(et);var rt={AM:/^[A-Z]{2}\d{7}$/,AR:/^[A-Z]{3}\d{6}$/,AT:/^[A-Z]\d{7}$/,AU:/^[A-Z]\d{7}$/,BE:/^[A-Z]{2}\d{6}$/,BG:/^\d{9}$/,CA:/^[A-Z]{2}\d{6}$/,CH:/^[A-Z]\d{7}$/,CN:/^[GE]\d{8}$/,CY:/^[A-Z](\d{6}|\d{8})$/,CZ:/^\d{8}$/,DE:/^[CFGHJKLMNPRTVWXYZ0-9]{9}$/,DK:/^\d{9}$/,DZ:/^\d{9}$/,EE:/^([A-Z]\d{7}|[A-Z]{2}\d{7})$/,ES:/^[A-Z0-9]{2}([A-Z0-9]?)\d{6}$/,FI:/^[A-Z]{2}\d{7}$/,FR:/^\d{2}[A-Z]{2}\d{5}$/,GB:/^\d{9}$/,GR:/^[A-Z]{2}\d{7}$/,HR:/^\d{9}$/,HU:/^[A-Z]{2}(\d{6}|\d{7})$/,IE:/^[A-Z0-9]{2}\d{7}$/,IN:/^[A-Z]{1}-?\d{7}$/,IS:/^(A)\d{7}$/,IT:/^[A-Z0-9]{2}\d{7}$/,JP:/^[A-Z]{2}\d{7}$/,KR:/^[MS]\d{8}$/,LT:/^[A-Z0-9]{8}$/,LU:/^[A-Z0-9]{8}$/,LV:/^[A-Z0-9]{2}\d{7}$/,MT:/^\d{7}$/,NL:/^[A-Z]{2}[A-Z0-9]{6}\d$/,PO:/^[A-Z]{2}\d{7}$/,PT:/^[A-Z]\d{6}$/,RO:/^\d{8,9}$/,SE:/^\d{8}$/,SL:/^(P)[A-Z]\d{7}$/,SK:/^[0-9A-Z]\d{7}$/,TR:/^[A-Z]\d{8}$/,UA:/^[A-Z]{2}\d{6}$/,US:/^\d{9}$/},ut=/^\d{5}$/,nt=/^\d{6}$/,it={AD:/^AD\d{3}$/,AT:L=/^\d{4}$/,AU:L,BE:L,BG:L,BR:/^\d{5}-\d{3}$/,CA:/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,CH:L,CZ:/^\d{3}\s?\d{2}$/,DE:ut,DK:L,DZ:ut,EE:ut,ES:ut,FI:ut,FR:/^\d{2}\s?\d{3}$/,GB:/^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,GR:/^\d{3}\s?\d{2}$/,HR:/^([1-5]\d{4}$)/,HU:L,ID:ut,IE:/^(?!.*(?:o))[A-z]\d[\dw]\s\w{4}$/i,IL:ut,IN:/^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,IS:/^\d{3}$/,IT:ut,JP:/^\d{3}\-\d{4}$/,KE:ut,LI:/^(948[5-9]|949[0-7])$/,LT:/^LT\-\d{5}$/,LU:L,LV:/^LV\-\d{4}$/,MX:ut,MT:/^[A-Za-z]{3}\s{0,1}\d{4}$/,NL:/^\d{4}\s?[a-z]{2}$/i,NO:L,NP:/^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,NZ:L,PL:/^\d{2}\-\d{3}$/,PR:/^00[679]\d{2}([ -]\d{4})?$/,PT:/^\d{4}\-\d{3}?$/,RO:nt,RU:nt,SA:ut,SE:/^[1-9]\d{2}\s?\d{2}$/,SI:L,SK:/^\d{3}\s?\d{2}$/,TN:L,TW:/^\d{3}(\d{2})?$/,UA:ut,US:/^\d{5}(-\d{4})?$/,ZA:L,ZM:ut};L=Object.keys(it);var ot={protocols:["http","https","ftp"],require_tld:!0,require_protocol:!1,require_host:!0,require_valid_protocol:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_protocol_relative_urls:!1},at=/^\[([^\]]+)\](?::([0-9]+))?$/;return w.extend({isAlphanumeric:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"en-US";if(y(t),e in P)return P[e].test(t);throw Error("Invalid locale '".concat(e,"'"))},isCreditCard:function(t){if(y(t),t=t.replace(/[- ]+/g,""),!U.test(t))return!1;for(var e,r,u=0,n=t.length-1;0<=n;n--)e=t.substring(n,n+1),e=parseInt(e,10),r?u=10<=(e*=2)?u+(e%10+1):u+e:u+=e,r=!r;return!(0!=u%10||!t)},isCurrency:function(t,e){return y(t),function(t){var e="\\d{".concat(t.digits_after_decimal[0],"}");t.digits_after_decimal.forEach((function(t,r){0!==r&&(e="".concat(e,"|\\d{").concat(t,"}"))}));var r="(".concat(t.symbol.replace(/\W/,(function(t){return"\\".concat(t)})),")").concat(t.require_symbol?"":"?"),u=["0","[1-9]\\d*","[1-9]\\d{0,2}(\\".concat(t.thousands_separator,"\\d{3})*")];u="(".concat(u.join("|"),")?");var n="(\\".concat(t.decimal_separator,"(").concat(e,"))").concat(t.require_decimal?"":"?");return u+=t.allow_decimal||t.require_decimal?n:"",t.allow_negatives&&!t.parens_for_negatives&&(t.negative_sign_after_digits?u+="-?":t.negative_sign_before_digits&&(u="-?"+u)),t.allow_negative_sign_placeholder?u="( (?!\\-))?".concat(u):t.allow_space_after_symbol?u=" ?".concat(u):t.allow_space_after_digits&&(u+="( (?!$))?"),u=t.symbol_after_digits?u+r:r+u,t.allow_negatives&&(t.parens_for_negatives?u="(\\(".concat(u,"\\)|").concat(u,")"):t.negative_sign_before_digits||t.negative_sign_after_digits||(u="-?"+u)),new RegExp("^(?!-? )(?=.*\\d)".concat(u,"$"))}(e=b(e,D)).test(t)},isEmail:function(t,e){if(y(t),(e=b(e,z)).require_display_name||e.allow_display_name){var r=t.match(j);if(r){if(!(t=Array.isArray(r)?r:void 0))if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){t=[];var u=!0,n=!1,i=void 0;try{for(var o,a=r[Symbol.iterator]();!(u=(o=a.next()).done)&&(t.push(o.value),3!==t.length);u=!0);}catch(t){n=!0,i=t}finally{try{u||null==a.return||a.return()}finally{if(n)throw i}}}else t=void 0;if(!(a=t))t:{if(r){if("string"==typeof r){a=E(r,3);break t}if("Object"===(a=Object.prototype.toString.call(r).slice(8,-1))&&r.constructor&&(a=r.constructor.name),"Map"===a||"Set"===a){a=Array.from(r);break t}if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)){a=E(r,3);break t}}a=void 0}if(!a)throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");if(r=a[1],t=a[2],r.endsWith(" ")&&(r=r.substr(0,r.length-1)),!(a=(r=(a=r).match(/^"(.+)"$/i))?r[1]:a).trim()||/[\.";<>]/.test(a)&&(!r||a.split('"').length!==a.split('\\"').length))return!1}else if(e.require_display_name)return!1}if(!e.ignore_max_length&&254<t.length)return!1;if(a=(r=t.split("@")).pop(),r=r.join("@"),o=a.toLowerCase(),e.domain_specific_validation&&("gmail.com"===o||"googlemail.com"===o)){if(!A((o=(r=r.toLowerCase()).split("+")[0]).replace(".",""),{min:6,max:30}))return!1;for(o=o.split("."),t=0;t<o.length;t++)if(!K.test(o[t]))return!1}if(!A(r,{max:64})||!A(a,{max:254}))return!1;if(!v(a,{require_tld:e.require_tld})){if(!e.allow_ip_domain)return!1;if(!Z(a)){if(!a.startsWith("[")||!a.endsWith("]"))return!1;if(0===(a=a.substr(1,a.length-2)).length||!Z(a))return!1}}if('"'===r[0])return r=r.slice(1,r.length-1),e.allow_utf8_local_part?Y.test(r):H.test(r);for(e=e.allow_utf8_local_part?k:B,r=r.split("."),a=0;a<r.length;a++)if(!e.test(r[a]))return!1;return!0},isIP:Z,isIdentityCard:function(t,e){if(y(t),e in W)return W[e](t);if("any"===e){for(var r in W)if(W.hasOwnProperty(r)&&(0,W[r])(t))return!0;return!1}throw Error("Invalid locale '".concat(e,"'"))},isJSON:function(t,e){y(t);try{e=b(e,J);var r=[];e.allow_primitives&&(r=[null,!1,!0]);var u=JSON.parse(t);return r.includes(u)||!!u&&"object"===N(u)}catch(t){}return!1},isLocale:function(t){return y(t),"en_US_POSIX"===t||"ca_ES_VALENCIA"===t||X.test(t)},isMimeType:function(t){return y(t),V.test(t)||Q.test(t)||tt.test(t)},isMobilePhone:function(t,e,r){if(y(t),r&&r.strictMode&&!t.startsWith("+"))return!1;if(Array.isArray(e))return e.some((function(e){return!(!et.hasOwnProperty(e)||!et[e].test(t))}));if(e in et)return et[e].test(t);if(!e||"any"===e){for(var u in et)if(et.hasOwnProperty(u)&&et[u].test(t))return!0;return!1}throw Error("Invalid locale '".concat(e,"'"))},isPassportNumber:function(t,e){return y(t),t=t.replace(/\s/g,"").toUpperCase(),e.toUpperCase()in rt&&rt[e].test(t)},isPostalCode:function(t,e){if(y(t),e in it)return it[e].test(t);if("any"===e){for(var r in it)if(it.hasOwnProperty(r)&&it[r].test(t))return!0;return!1}throw Error("Invalid locale '".concat(e,"'"))},isURL:function(t,e){if(y(t),!t||2083<=t.length||/[\s<>]/.test(t)||0===t.indexOf("mailto:"))return!1;e=b(e,ot);var r=t.split("#");if(t=r.shift(),r=t.split("?"),t=r.shift(),1<(r=t.split("://")).length){if(t=r.shift().toLowerCase(),e.require_valid_protocol&&-1===e.protocols.indexOf(t))return!1}else{if(e.require_protocol)return!1;if("//"===t.substr(0,2)){if(!e.allow_protocol_relative_urls)return!1;r[0]=t.substr(2)}}if(""===(t=r.join("://")))return!1;if(r=t.split("/"),""===(t=r.shift())&&!e.require_host)return!0;if(1<(r=t.split("@")).length){if(e.disallow_auth)return!1;if(0<=(t=r.shift()).indexOf(":")&&2<t.split(":").length)return!1}var u=r.join("@"),n=t=null;return(r=u.match(at))?(u="",n=r[1],t=r[2]||null):(r=u.split(":"),u=r.shift(),r.length&&(t=r.join(":"))),!(null!==t&&(r=parseInt(t,10),!/^[0-9]+$/.test(t)||0>=r||65535<r)||!(Z(u)||v(u,e)||n&&Z(n,6)))&&(u=u||n,!(e.host_whitelist&&!S(u,e.host_whitelist)||e.host_blacklist&&S(u,e.host_blacklist)))}}),t(w,{isAlphanumericLocales:C,isMobilePhoneLocales:R,isPostalCodeLocales:L})}));