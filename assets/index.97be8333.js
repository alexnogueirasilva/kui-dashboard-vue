import{u as v,a as E,r as w,b as f,c as y,d as O,o as P,g as c,e as L,f as b,h as R,i as D,s as A}from"./vendor.3d793d16.js";const T=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};T();const I="modulepreload",p={},V="/kui-dashboard-vue/",s=function(n,i){return!i||i.length===0?n():Promise.all(i.map(o=>{if(o=`${V}${o}`,o in p)return;p[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":I,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((h,g)=>{r.addEventListener("load",h),r.addEventListener("error",g)})})).then(()=>n())};var j=[{path:"/",name:"Home",component:()=>s(()=>import("./Index.d52fb6f9.js"),["assets/Index.d52fb6f9.js","assets/Index.be6193d0.css","assets/vendor.3d793d16.js","assets/Logo.476a4666.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/EyeIcon.408ca7dc.js","assets/XIcon.9e91d5b3.js","assets/Button.92d9179e.js"])},{path:"/dashboard",component:()=>s(()=>import("./DashboardLayout.face3c74.js"),["assets/DashboardLayout.face3c74.js","assets/DashboardLayout.06beae12.css","assets/vendor.3d793d16.js","assets/Logo.476a4666.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Button.92d9179e.js","assets/XIcon.9e91d5b3.js","assets/PageFooter.3e23445c.js"]),children:[{path:"/dashboard",name:"Dashboard",component:()=>s(()=>import("./Dashboard.a03fe101.js"),["assets/Dashboard.a03fe101.js","assets/Dashboard.53fba1f3.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.3d793d16.js","assets/Button.92d9179e.js","assets/EyeIcon.408ca7dc.js"])}]},{path:"/auth",name:"Auth",component:()=>s(()=>import("./AuthenticationLayout.f90b9f46.js"),["assets/AuthenticationLayout.f90b9f46.js","assets/Logo.476a4666.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/vendor.3d793d16.js","assets/PageFooter.3e23445c.js"]),children:[{path:"/auth/login",name:"Login",component:()=>s(()=>import("./Login.de635e62.js"),["assets/Login.de635e62.js","assets/vendor.3d793d16.js","assets/Input.4920fe14.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Checkbox.2125baa4.js","assets/Button.92d9179e.js","assets/LockClosedIcon.93fa4aac.js","assets/MailIcon.481a6cb2.js"])},{path:"/auth/register",name:"Register",component:()=>s(()=>import("./Register.b679d10f.js"),["assets/Register.b679d10f.js","assets/vendor.3d793d16.js","assets/Input.4920fe14.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Checkbox.2125baa4.js","assets/Button.92d9179e.js","assets/LockClosedIcon.93fa4aac.js","assets/MailIcon.481a6cb2.js"])},{path:"/auth/forgot-password",name:"ForgotPassword",component:()=>s(()=>import("./ForgotPassword.9265f243.js"),["assets/ForgotPassword.9265f243.js","assets/vendor.3d793d16.js","assets/Input.4920fe14.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Button.92d9179e.js","assets/MailIcon.481a6cb2.js"])},{path:"/auth/reset-password",name:"ResetPassword",component:()=>s(()=>import("./ResetPassword.c1a6dc48.js"),["assets/ResetPassword.c1a6dc48.js","assets/vendor.3d793d16.js","assets/Input.4920fe14.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Button.92d9179e.js","assets/LockClosedIcon.93fa4aac.js","assets/MailIcon.481a6cb2.js"])},{path:"/auth/confirm-password",name:"ConfirmPassword",component:()=>s(()=>import("./ConfirmPassword.af24b69d.js"),["assets/ConfirmPassword.af24b69d.js","assets/vendor.3d793d16.js","assets/Input.4920fe14.js","assets/plugin-vue_export-helper.21dcd24c.js","assets/Button.92d9179e.js","assets/LockClosedIcon.93fa4aac.js"])},{path:"/auth/verify-email",name:"VerifyEmail",component:()=>s(()=>import("./VerifyEmail.234c8936.js"),["assets/VerifyEmail.234c8936.js","assets/vendor.3d793d16.js","assets/Button.92d9179e.js"])}]}];const k=v(),W=E(k),H=w(!1),l=f({isOpen:window.innerWidth>1024,isHovered:!1,handleHover(a){window.innerWidth<1024||(l.isHovered=a)},handleWindowResize(){window.innerWidth<=1024?l.isOpen=!1:l.isOpen=!0}}),d=f({down:!1,up:!1});let m=0;const x=()=>{let a=window.pageYOffset||document.documentElement.scrollTop;a>m?(d.down=!0,d.up=!1):(d.down=!1,d.up=!0,a==0&&(d.down=!1,d.up=!1)),m=a<=0?0:a},_=y({history:O("kui-dashboard-vue"),routes:j});_.afterEach(()=>{window.innerWidth<=1024&&(l.isOpen=!1)});const C={setup(a){return P(()=>{c.to("#loading .logo",{y:-50,opacity:0,duration:.5}),c.to("#loading .left",{rotateY:45,x:"-130%",duration:1,delay:.6}),c.to("#loading .right",{rotateY:-45,x:"130%",duration:1,delay:.6,onComplete:()=>{var n;(n=document.getElementById("loading"))==null||n.remove()}})}),(n,i)=>{const o=L("router-view");return b(),R(o)}}};const u=D(C);u.use(_);u.use(A,{hideProgressBar:!0,closeOnClick:!1,closeButton:!1,icon:!1,timeout:!1,transition:"Vue-Toastification__fade"});u.mount("#app");export{k as a,l as b,x as h,H as i,d as s,W as t};