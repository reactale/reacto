!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n={};function i(e){let t=D(e,!0);return isNaN(t)||(t=Number(t)),t}function u(e,t){return!(!e||!t)&&e.substr(0,t.length)===t}r.r(n),r.d(n,"Bengali",(function(){return m})),r.d(n,"English",(function(){return g})),r.d(n,"Hindi",(function(){return b})),r.d(n,"Malayalam",(function(){return y})),r.d(n,"Oriya",(function(){return v}));let a={};const s=e=>a={...a,...e},o=e=>void 0!==a[e]?a[e].toString():"",l=()=>a={},c=()=>({...a}),f=e=>{if(!(e.indexOf("=")>-1)){let t=o(e.toString().trim());const r="r.var.";return t=t.split(" ").map(e=>{if(u(e,r)){let t=o(e.substr(r.length));void 0!==t&&(e=t)}return e}).join(" "),t}var t,r=e.split("="),n=r[0].trim(),i=r[1].trim();i=u(i,"r.")?D(i,!0):i,t=i,a[n]=t};let d=[];var p=function(e,t){let r="";if(e.indexOf("+")>=0){let t=e.split("+");t[0]=i(t[0]),t[1]=i(t[1]),isNaN(t[0])||isNaN(t[1])||(r=t[0]+t[1])}else if(e.indexOf("-")>=0){let t=e.split("-");t[0]=i(t[0]),t[1]=i(t[1]),isNaN(t[0])||isNaN(t[1])||(r=t[0]-t[1])}else if(e.indexOf("*")>=0){let t=e.split("*");t[0]=i(t[0]),t[1]=i(t[1]),isNaN(t[0])||isNaN(t[1])||(r=t[0]*t[1])}else if(e.indexOf("/")>=0){let t=e.split("/");t[0]=i(t[0]),t[1]=i(t[1]),isNaN(t[0])||isNaN(t[1])||(r=t[0]/t[1])}return d.push(r),function(){const e=d.length,t={};for(let r=1;r<=e;r++)t["_"+r]=d[e-r];s(t)}(),t||""===r||(r="_r$$_"+r.toString().split("").join("_r$$_")),r},m={0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",sun:"রবিবার",mon:"সোমবার",tue:"মঙ্গলবার",wed:"বুধবার",thu:"বৃহস্পতিবার",fri:"শুক্রবার",sat:"শনিবার",jan:"জানুয়ারী",feb:"ফেব্রুয়ারি",mar:"মার্চ",apr:"এপ্রিল",may:"মে",jun:"জুন",jul:"জুলাই",aug:"অগাস্ট",sep:"সেপ্টেম্বর",oct:"অক্টোবর",nov:"নভেম্বর",dec:"ডিসেম্বর"},g={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday",jan:"January",feb:"February",mar:"March",apr:"April",may:"May",jun:"June",jul:"July",aug:"August",sep:"September",oct:"October",nov:"November",dec:"December"},b={0:"०",1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",sun:"रविवार",mon:"सोमवार",tue:"मंगलवार",wed:"बुधवार",thu:"गुरूवार",fri:"शुक्रवार",sat:"शनिवार",jan:"जनवरी",feb:"फरवरी",mar:"मार्च",apr:"अप्रैल",may:"मई",jun:"जून",jul:"जुलाई",aug:"अगस्त",sep:"सितंबर",oct:"अक्टूबर",nov:"नवंबर",dec:"दिसंबर"},y={0:"൦",1:"൧",2:"൨",3:"൩",4:"൪",5:"൫",6:"൬",7:"൭",8:"൮",9:"൯",sun:"ഞായറാഴ്ച",mon:"തിങ്കളാഴ്ച",tue:"ചൊവ്വാഴ്ച",wed:"ബുധനാഴ്ച",thu:"വ്യാഴാഴ്ച",fri:"വെള്ളിയാഴ്ച",sat:"ശനിയാഴ്ച",jan:"ജനുവരി",feb:"ഫെബ്രുവരി",mar:"മാർച്ച്",apr:"ഏപ്രിൽ",may:"മെയ്",jun:"ജൂൺ",jul:"ജൂലൈ",aug:"ഓഗസ്റ്റ്",sep:"സെപ്റ്റംബർ",oct:"ഒക്ടോബർ",nov:"നവംബർ",dec:"ഡിസംബർ"},v={0:"୦",1:"୧",2:"୨",3:"୩",4:"୪",5:"୫",6:"୬",7:"୭",8:"୮",9:"୯",sun:"ରବିବାର",mon:"ସୋମବାର",tue:"ମଙ୍ଗଳବାର",wed:"ବୁଧବାର",thu:"ଗୁରୁବାର",fri:"ଶୁକ୍ରବାର",sat:"ଶନିବାର",jan:"ଜାନୁଆରୀ",feb:"ଫେବୃଆରୀ",mar:"ମାର୍ଚ୍ଚ",apr:"ଏପ୍ରିଲ",may:"ମେ",jun:"ଜୁଣେ",jul:"ଜୁଲୟ",aug:"ଆଁଗୁସ୍ତ",sep:"ସେପ୍ଟେମ୍ବର",oct:"କ୍ଟବେର",nov:"ନଭେମ୍ବର",dec:"ଡ଼ିସେମ୍ବର"};let j="en",h=void 0;const _=[{name:"Bengali",code:"beng"},{name:"Hindi",code:"hind"},{name:"Oriya",code:"or"},{name:"Malayalam",code:"mal"},{name:"English",code:"en"}],O=()=>[..._],N=e=>j=(h||(h=_.map(e=>e.code))).indexOf(e)>-1?e:"en",x=()=>(e=>{let t=_.find(t=>t.code===e);return n[t.name]})(j);var w=function(e){if(u(e,"langSwitch")){var t=e.replace("langSwitch.","").trim();N(t)}return""};const S=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],$=["sun","mon","tue","wed","thu","fri","sat"];var M=(e,t)=>{let r,n=new Date;switch(e){case"year":r=n.getFullYear();break;case"date":r=n.getDate();break;case"hour":r=(n.getHours()>12?n.getHours()-12:n.getHours())||12;break;case"hour24":r=n.getHours();break;case"min":r=n.getMinutes();break;case"sec":r=n.getSeconds();break;case"day":r=$[n.getDay()];break;case"month":r=S[n.getMonth()]}return t||""===r||(r=isNaN(r)?"_r$$_"+r:"_r$$_"+r.toString().split("").join("_r$$_")),r};let k={};const H=(e,t)=>k[t]=e;let A=!0;var P=function(e){return e&&e.trim()?e.replace(/_r\$\$_[a-zA-Z0-9]{1,}/g,(function(e){return x()[e.substr(5)]||e.substr(5)})):e};var D=function(e,t){t=t||!1;let r="",n=e.trim();return u(n,"((r.")||u(n,"r.")?(n=u(n,"((r.")?n.substring(4,n.length-2):n.substr(2),A?(u(n,"dt.")?r=M(n.substr(3),t):u(n,"cfg.")?r=w(n.substr(4)):u(n,"var.")?r=f(n.substr(4)):u(n,"calc.")?r=p(n.substr(5),t):u(n,"if.")?r=(e=>{let t=-1;if(e.indexOf("!=")>=0){let r=e.split("!=");t=i(r[0])!=i(r[1])}else if(e.indexOf(">=")>=0){let r=e.split(">=");t=i(r[0])>=i(r[1])}else if(e.indexOf("<=")>=0){let r=e.split("<=");t=i(r[0])<=i(r[1])}else if(e.indexOf("=")>=0){let r=e.split("=");t=i(r[0])==i(r[1])}else if(e.indexOf(">")>=0){let r=e.split(">");t=i(r[0])>i(r[1])}else if(e.indexOf("<")>=0){let r=e.split("<");t=i(r[0])<i(r[1])}if(-1===t)return e;A=A&&t})(n.substr(3)):u(n,"fn.")?r=(e=>{let t="",r=e.trim(),n=[];if(e.indexOf("__")>=0){let t=e.split("__");r=t[0].trim(),n=t.slice(1).map(e=>e.trim())}return k[r]&&"function"==typeof k[r]&&(t=k[r].apply(window,n)),t})(n.substr(3)):u(n,"_block.")&&(a=n.substr(7),s=F(s=(s=T[a]).substring(2,s.length-2)),delete T[a],r=s),t||(r=P(r)),r):(A=!0,"")):n;var a,s};function F(e){return e.replace(/\(\(r\.(.)*?\)\)/gs,(function(e){var t=D(e);return"0"==t?t:t||""})).trim()}let T={};function J(e){return function(e){let t=function(e){T={};var t=0;return e.replace(/{{(.|\n)*?}}/g,(function(e){var r=++t;return T[r]=e,"((r._block."+r+"))"}))}(e);return t=F(t),t=function(e){for(e=e.replace(/\\(\r\n|\r|\n)/g,"").trim();"\\"===e[e.length-1];)e=e.substr(0,e.length-1);return e}(t),t}(e)}window.rto={process:J,addFn:H,getLangs:O,getAllVars:c,setAllVars:s,resetVars:l}}]);