var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,f,u,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function j(e){return c=e,f=setTimeout(h,t),l?b(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||v&&e-c>=o}function h(){var e=m();if(S(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return v?d(n,o-(e-c)):n}(e))}function w(e){return f=void 0,y&&r?b(e):(r=i=void 0,a)}function O(){var e=m(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(v)return f=setTimeout(h,t),b(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,o=(v="maxWait"in n)?s(p(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},O.flush=function(){return void 0===f?a:w(m())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=i.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),b=y.querySelector("input"),j=y.querySelector("textarea");let S=JSON.parse(localStorage.getItem("feedback-form-state"))||{email:"",message:""};console.log(S),b.value=S.email,j.value=S.message,y.addEventListener("input",t((function(e){e.preventDefault(),S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.addEventListener("submit",t((function(e){e.preventDefault(),console.log(S),e.target.reset(),S={email:"",message:""},localStorage.removeItem("feedback-form-state")}),500));
//# sourceMappingURL=03-feedback.e4627f54.js.map
