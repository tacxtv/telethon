var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire8e21;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire8e21=o);var r=o("hKdZU");r.default.store("app",{tab:"advertising",form:{image:"",spawn:60,duration:8},init(){document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll("#myTab button").forEach((e=>{e.addEventListener("click",(t=>{this.tab=e.id,console.log("tab",this.tab)}))}))}))},url(){const e=new URLSearchParams(document.location.search);if("advertising"===this.tab){if(!this.form.image)return"";e.set("image",encodeURI(this.form.image)),e.set("spawn",this.form.spawn),e.set("duration",this.form.duration)}return new URL(this.tab+".html?"+e.toString(),document.location.href).toString()},copy(){const e=document.getElementById("url");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value)}}),r.default.start();
//# sourceMappingURL=index.fe988b2b.js.map