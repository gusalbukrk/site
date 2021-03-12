!function(){"use strict";var e,t={8378:function(e,t,n){var r=n(2784),a=n(8316),l=(n(5940),n(4642)),o=n(5096),i=n(9530),c=n(4894),u=function(){const[e,t]=r.useState(""),[n,a]=r.useState(5),[u,s]=r.useState("paragraphs"),[d,m]=r.useState("plain"),[p,f]=r.useState({title:"",body:""}),[h,E]=r.useState(!1),y=r.useRef(null),v=y.current,b=r.useRef(null),g=b.current,w=r.useRef(null),C=w.current;return r.createElement("form",null,r.createElement("section",{id:"row-one"},r.createElement("article",{id:"outer-input"},r.createElement("input",{type:"text",id:"input",placeholder:'input (e.g. "harry potter")',value:e,onChange:e=>t(e.target.value)})),r.createElement("article",{id:"outer-quantity"},r.createElement("input",{type:"number",name:"quantity",id:"quantity",value:n,onChange:e=>a(Number(e.target.value))}))),r.createElement("section",{id:"row-two"},r.createElement("fieldset",null,r.createElement("legend",null,"unit"),r.createElement("article",{className:"option"},r.createElement("input",{type:"radio",name:"unit",id:"unit-p",value:"paragraphs",checked:"paragraphs"===u,onChange:()=>s("paragraphs")}),r.createElement("label",{htmlFor:"unit-p"},"paragraphs")),r.createElement("article",{className:"option"},r.createElement("input",{type:"radio",name:"unit",id:"unit-w",value:"words",checked:"words"===u,onChange:()=>s("words")}),r.createElement("label",{htmlFor:"unit-w"},"words"))),r.createElement("fieldset",null,r.createElement("legend",null,"format"),r.createElement("article",{className:"option"},r.createElement("input",{type:"radio",name:"format",id:"format-p",value:"plain",checked:"plain"===d,onChange:()=>m("plain")}),r.createElement("label",{htmlFor:"format-p"},"plain")),r.createElement("article",{className:"option"},r.createElement("input",{type:"radio",name:"format",id:"format-h",value:"html",checked:"html"===d,onChange:()=>m("html")}),r.createElement("label",{htmlFor:"format-h"},"html")))),r.createElement("section",{id:"row-three"},r.createElement("textarea",{id:"output",rows:12,cols:50,value:p.body,readOnly:!0}),r.createElement("article",{id:"loading-overlay",className:"d-none",ref:b},r.createElement(i.G,{id:"loading-icon",icon:o.LM3,spin:!0}))),r.createElement("section",{id:"row-four"},r.createElement("button",{id:"button-generate",ref:y,onClick:async t=>{t.preventDefault(),v.disabled=!0,C.classList.add("d-none"),E(!1),g.classList.remove("d-none"),await(async()=>{const t=await(0,c.Z)(e,{unit:u,quantity:n,format:d});f({title:t.title,body:"plain"===d?t.body.replace(/\n/g,"\n\n"):t.body.replace(/<\/p>(?!$)/g,"</p>\n\n")})})(),setTimeout((()=>{g.classList.add("d-none"),C.classList.remove("d-none"),v.disabled=!1}),1500)}},"Generate",r.createElement(i.G,{id:"generate-icon",icon:l.cw})),r.createElement("button",{id:"button-copy",className:"d-none",ref:w,onClick:async e=>{if(e.preventDefault(),!h)try{await navigator.clipboard.writeText(p.body),E(!0),setTimeout((()=>{E(!1)}),5e3)}catch(e){console.error("ERROR: Couldn't copy filler text to clipboard.")}}},h?"Copied":"Copy",r.createElement(i.G,{id:"copy-icon",icon:h?o.LEp:l.kZ}))))};function s(){return r.createElement(r.Fragment,null,r.createElement("h1",null,r.createElement("span",null,"x"),"lorem"),r.createElement(u,null))}a.render(r.createElement(s,null),document.getElementById("root"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=function(t,n,a,l){if(!n){var o=1/0;for(s=0;s<e.length;s++){n=e[s][0],a=e[s][1],l=e[s][2];for(var i=!0,c=0;c<n.length;c++)(!1&l||o>=l)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(i=!1,l<o&&(o=l));if(i){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var s=e.length;s>0&&e[s-1][2]>l;s--)e[s]=e[s-1];e[s]=[n,a,l]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,l,o=n[0],i=n[1],c=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(c)var s=c(r)}for(t&&t(n);u<o.length;u++)l=o[u],r.o(e,l)&&e[l]&&e[l][0](),e[o[u]]=0;return r.O(s)},n=self.webpackChunksite=self.webpackChunksite||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=r.O(void 0,[216],(function(){return r(8378)}));a=r.O(a)}();