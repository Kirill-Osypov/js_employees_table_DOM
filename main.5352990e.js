parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}function t(e){return o(e)||a(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function a(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=document.querySelector("body"),c=document.querySelector("table"),u=c.querySelector("tbody"),s=t(u.rows).map(function(e){return[e.cells[0].innerText,e.cells[1].innerText,e.cells[2].innerText,e.cells[3].innerText,e.cells[4].innerText]}),f={name:!0,position:!0,office:!0,age:!0,salary:!0};function d(e,t){f[e]?(s.sort(function(e,n){return e[t].localeCompare(n[t])}),f[e]=!f[e]):(s.reverse(),f[e]=!f[e])}function m(t){u.innerHTML="";var n,r=e(t);try{for(r.s();!(n=r.n()).done;)for(var a=n.value,o=u.insertRow(),i=0;i<a.length;i++){o.insertCell().appendChild(document.createTextNode(a[i]))}}catch(l){r.e(l)}finally{r.f()}}u.addEventListener("click",function(t){var n=u.querySelectorAll("tr");if("TD"===t.target.tagName){var r,a=e(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;o.closest("tr").classList.toggle("active",t.target.closest("tr")===o)}}catch(i){a.e(i)}finally{a.f()}}}),c.addEventListener("click",function(e){if("TH"===e.target.tagName){switch(e.target.innerText){case"Name":d("name",0);break;case"Position":d("position",1);break;case"Office":d("office",2);break;case"Age":f.age?(s.sort(function(e,t){return e[3]-t[3]}),f.age=!f.age):(s.reverse(),f.age=!f.age);break;case"Salary":f.salary?(s.sort(function(e,t){return e[4].replace(/[^0-9]/g,"")-t[4].replace(/[^0-9]/g,"")}),f.salary=!f.salary):(s.reverse(),f.salary=!f.salary)}m(s)}});var y=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"];l.insertAdjacentHTML("beforeend",'\n    <form class="new-employee-form" onsubmit="return false;">\n        <label>\n          Name: \n          <input data-qa="name" name="name" type="text">\n        </label>\n\n        <label>\n\n          Position: \n          <input data-qa="position" name="position" type="text">\n        </label>\n\n        <label>\n          Office: \n            <select data-qa="office" name="office">\n                '.concat(y.map(function(e){return"<option>".concat(e,"</option>")}),'\n            </select>\n        </label>\n\n        <label>\n          Age: \n          <input data-qa="age" name="age" type="number">\n        </label>\n\n        <label>\n          Salary: \n            <input data-qa="salary" name="salary" type="number">\n        </label>\n\n        <button type="submit">Save to table</button>\n    </form>\n  '));var p=document.querySelector("form");p.addEventListener("submit",function(e){var t=document.querySelector(".notification");if(t&&t.remove(),e.target.name.value.length<4)v(10,10,"Упс...","Имя раба слишком короткое!\n\n      Хоть он его и не достоин...","error");else if(+e.target.age.value<18)v(10,10,"Упс...","Этот раб слишком юн!\n\n      Пусть подрастет хотя бы до 18,тогда мы сможем использовать его на полную.","error");else if(+e.target.age.value>90)v(10,10,"Упс...","А этот раб слишком стар!\n\n      Толку от него? Ищи тех кто младше 90,чем младше найдешь тем больше получишь, хе-хе.","error");else if(e.target.position.value&&e.target.salary.value){var n=[];n.push(e.target.name.value),n.push(e.target.position.value),n.push(e.target.office.value),n.push(+e.target.age.value);var r=+e.target.salary.value;n.push("$"+r.toLocaleString("en")),s.push(n),m(s),v(10,10,"Успех!","Добален новый раб!","success"),e.target.name.value="",e.target.position.value="",e.target.age.value="",e.target.salary.value=""}else v(10,10,"Упс...","Мне кажется или ты забыл что-то запонлить?","error")});var v=function(e,t,n,r,a){var o=document.createElement("div"),i=document.createElement("h2"),l=document.createElement("p");i.innerText=n,i.className="title",l.innerText=r,o.appendChild(i),o.appendChild(l),o.className="notification ".concat(a),o.style.right=t+"px",o.style.top=e+"px",o.setAttribute("data-qa","notification"),document.body.appendChild(o),setTimeout(function(){return o.remove()},5e3)};c.addEventListener("dblclick",function(e){if("TD"===e.target.tagName){var n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("class","cell-input");var r=document.querySelector(".active"),a=t(r.children).findIndex(function(t){return t===e.target}),o=t(u.rows).findIndex(function(e){return e===r});u.rows[o].replaceChild(n,u.rows[o].cells[a]),n.select(),n.addEventListener("keydown",function(e){"Enter"===e.key&&(s[o][a]=n.value,m(s))}),n.addEventListener("blur",function(e){s[o][a]=n.value,m(s)})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5352990e.js.map