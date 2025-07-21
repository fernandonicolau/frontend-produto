import './polyfills.server.mjs';
import{h as e}from"./chunk-VR6YJOVK.mjs";var r=class o{toastComponent;toasts=[];register(t){this.toastComponent=t}show(t,s="success"){this.toasts.push({message:t,type:s}),setTimeout(()=>{this.toasts.shift()},2e3)}static \u0275fac=function(s){return new(s||o)};static \u0275prov=e({token:o,factory:o.\u0275fac,providedIn:"root"})};export{r as a};
