import{r as c,R as m}from"./index-CBqU2yxZ.js";var p={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=c,_=Symbol.for("react.element"),v=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,h=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function u(r,a,t){var e,l={},o=null,n=null;t!==void 0&&(o=""+t),a.key!==void 0&&(o=""+a.key),a.ref!==void 0&&(n=a.ref);for(e in a)g.call(a,e)&&!x.hasOwnProperty(e)&&(l[e]=a[e]);if(r&&r.defaultProps)for(e in a=r.defaultProps,a)l[e]===void 0&&(l[e]=a[e]);return{$$typeof:_,type:r,key:o,ref:n,props:l,_owner:h.current}}s.Fragment=v;s.jsx=u;s.jsxs=u;p.exports=s;var E=p.exports;function f(r){var a,t,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var l=r.length;for(a=0;a<l;a++)r[a]&&(t=f(r[a]))&&(e&&(e+=" "),e+=t)}else for(t in r)r[t]&&(e&&(e+=" "),e+=t);return e}function b(){for(var r,a,t=0,e="",l=arguments.length;t<l;t++)(r=arguments[t])&&(a=f(r))&&(e&&(e+=" "),e+=a);return e}const i=({children:r,className:a,as:t="p",bold:e=!1,italic:l=!1,underlined:o=!1,...n})=>{const d=typeof t=="string"?t:void 0;return m.createElement(d||"p",{className:b(e&&"quill-typography__emphasis--bold",l&&"quill-typography__emphasis--italic",o&&"quill-typography__emphasis--underlined",a),...n},r)};try{i.displayName="Typography",i.__docgenInfo={description:"",displayName:"Typography",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xl"'}]}},as:{defaultValue:{value:"p"},description:"",name:"as",required:!1,type:{name:'number | unique symbol | ElementType | "toString" | "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "slice" | ... 32 more ...'}},bold:{defaultValue:{value:"false"},description:"",name:"bold",required:!1,type:{name:"boolean"}},italic:{defaultValue:{value:"false"},description:"",name:"italic",required:!1,type:{name:"boolean"}},underlined:{defaultValue:{value:"false"},description:"",name:"underlined",required:!1,type:{name:"boolean"}}}}}catch{}export{i as T,b as c,E as j};
