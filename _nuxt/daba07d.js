/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{326:function(e,t,o){"use strict";function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}o.d(t,"a",(function(){return l}))},327:function(e,t,o){"use strict";var l=o(2),n=o(28),r=o(73),c=o(335),d=o(228),f=o(11),_=o(16),m=o(50),x=o(3),h=n("Reflect","construct"),v=Object.prototype,k=[].push,y=x((function(){function e(){}return!(h((function(){}),[],e)instanceof e)})),w=!x((function(){h((function(){}))})),O=y||w;l({target:"Reflect",stat:!0,forced:O,sham:O},{construct:function(e,t){d(e),f(t);var o=arguments.length<3?e:d(arguments[2]);if(w&&!y)return h(e,t,o);if(e===o){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var l=[null];return r(k,l,t),new(r(c,e,l))}var n=o.prototype,x=m(_(n)?n:v),O=r(e,x,t);return _(O)?O:x}})},328:function(e,t,o){var content=o(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(120).default)("79b77eaf",content,!0,{sourceMap:!1})},331:function(e,t,o){"use strict";o.d(t,"a",(function(){return v})),o.d(t,"c",(function(){return l.a})),o.d(t,"b",(function(){return w})),o.d(t,"d",(function(){return O}));var l=o(1);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t,o){(o?Reflect.getOwnMetadataKeys(t,o):Reflect.getOwnMetadataKeys(t)).forEach((function(l){var n=o?Reflect.getOwnMetadata(l,t,o):Reflect.getOwnMetadata(l,t);o?Reflect.defineMetadata(l,n,e,o):Reflect.defineMetadata(l,n,e)}))}var d={__proto__:[]}instanceof Array;function f(e){return function(t,o,l){var n="function"==typeof t?t:t.constructor;n.__decorators__||(n.__decorators__=[]),"number"!=typeof l&&(l=void 0),n.__decorators__.push((function(t){return e(t,o,l)}))}}var _=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.name=t.name||e._componentTag||e.name;var o=e.prototype;Object.getOwnPropertyNames(o).forEach((function(e){if("constructor"!==e)if(_.indexOf(e)>-1)t[e]=o[e];else{var l=Object.getOwnPropertyDescriptor(o,e);void 0!==l.value?"function"==typeof l.value?(t.methods||(t.methods={}))[e]=l.value:(t.mixins||(t.mixins=[])).push({data:function(){return function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}({},e,l.value)}}):(l.get||l.set)&&((t.computed||(t.computed={}))[e]={get:l.get,set:l.set})}})),(t.mixins||(t.mixins=[])).push({data:function(){return function(e,t){var o=t.prototype._init;t.prototype._init=function(){var t=this,o=Object.getOwnPropertyNames(e);if(e.$options.props)for(var l in e.$options.props)e.hasOwnProperty(l)||o.push(l);o.forEach((function(o){Object.defineProperty(t,o,{get:function(){return e[o]},set:function(t){e[o]=t},configurable:!0})}))};var data=new t;t.prototype._init=o;var l={};return Object.keys(data).forEach((function(e){void 0!==data[e]&&(l[e]=data[e])})),l}(this,e)}});var r=e.__decorators__;r&&(r.forEach((function(e){return e(t)})),delete e.__decorators__);var f,m,h=Object.getPrototypeOf(e.prototype),v=h instanceof l.a?h.constructor:l.a,k=v.extend(t);return function(e,t,o){Object.getOwnPropertyNames(t).forEach((function(l){if(!x[l]){var r=Object.getOwnPropertyDescriptor(e,l);if(!r||r.configurable){var c,f,_=Object.getOwnPropertyDescriptor(t,l);if(!d){if("cid"===l)return;var m=Object.getOwnPropertyDescriptor(o,l);if(c=_.value,f=n(c),null!=c&&("object"===f||"function"===f)&&m&&m.value===_.value)return}0,Object.defineProperty(e,l,_)}}}))}(k,e,v),"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys&&(c(f=k,m=e),Object.getOwnPropertyNames(m.prototype).forEach((function(e){c(f.prototype,m.prototype,e)})),Object.getOwnPropertyNames(m).forEach((function(e){c(f,m,e)}))),k}var x={prototype:!0,arguments:!0,callee:!0,caller:!0};function h(e){return"function"==typeof e?m(e):function(t){return m(t,e)}}h.registerHooks=function(e){_.push.apply(_,r(e))};var v=h;var k="undefined"!=typeof Reflect&&void 0!==Reflect.getMetadata;function y(e,t,o){if(k&&!Array.isArray(e)&&"function"!=typeof e&&!e.hasOwnProperty("type")&&void 0===e.type){var l=Reflect.getMetadata("design:type",t,o);l!==Object&&(e.type=l)}}function w(e){return void 0===e&&(e={}),function(t,o){y(e,t,o),f((function(t,o){(t.props||(t.props={}))[o]=e}))(t,o)}}function O(path,e){void 0===e&&(e={});var t=e.deep,o=void 0!==t&&t,l=e.immediate,n=void 0!==l&&l;return f((function(e,t){"object"!=typeof e.watch&&(e.watch=Object.create(null));var l=e.watch;"object"!=typeof l[path]||Array.isArray(l[path])?void 0===l[path]&&(l[path]=[]):l[path]=[l[path]],l[path].push({handler:t,deep:o,immediate:n})}))}},332:function(e,t,o){"use strict";o.r(t);var l=o(152),n=o(153),r=o(333),c=o(334),d=o(326),f=o(15),_=(o(55),o(14),o(327),o(331));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,l=Object(d.a)(e);if(t){var n=Object(d.a)(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return Object(c.a)(this,o)}}var x=function(e,t,o,desc){var l,n=arguments.length,r=n<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,o,desc);else for(var i=e.length-1;i>=0;i--)(l=e[i])&&(r=(n<3?l(r):n>3?l(t,o,r):l(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r},h=function(e){Object(r.a)(o,e);var t=m(o);function o(){var e;return Object(l.a)(this,o),(e=t.apply(this,arguments)).currentTabIndex=0,e.callbackPopupOpen=!1,e}return Object(n.a)(o,[{key:"mounted",value:function(){}},{key:"currentPath",get:function(){return this.$route.params.id}}]),o}(_.c);x([Object(_.b)({type:Object})],h.prototype,"models",void 0),x([Object(_.b)({type:Object})],h.prototype,"model",void 0),x([Object(_.b)({type:Object})],h.prototype,"path",void 0);var v=h=x([Object(_.a)({name:"ModelBlock"})],h),k=(o(336),o(69)),component=Object(k.a)(v,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"model-block"},[t("div",{staticClass:"model-block-offer"},[t("h2",{staticClass:"model-block-offer__title"},[e._v("Установка ГБО на "+e._s(e.model))])]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"model-block-benefits"},[t("div",{staticClass:"model-block-benefits__title"},[e._v("\n        Преимущества установки\n      ")]),e._v(" "),t("div",{staticClass:"model-block-benefits__text"},[t("p",[e._v("\n          «Интергазсервис» предлагает установку газового оборудования 4-го поколения на новые автомобили ВАЗ 2121 «Нива». \n          Для старых моделей с карбюраторной системой подачи топлива подойдет комплект второго поколения. \n        ")]),e._v(" "),t("ul",{style:{listStyleType:"circle"}},[t("div",{staticClass:"model-block-benefits__ul"},[e._v("\n            Установка ГБО дает сразу несколько плюсов: \n          ")]),e._v(" "),t("li",{staticClass:"model-block-benefits__li"},[e._v("снижение эксплуатационных затрат. Это касается не только экономии на топливе, \n        но и на более редком обслуживании мотора – его компоненты меньше изнашиваются; ")]),e._v(" "),t("li",{staticClass:"model-block-benefits__li"},[e._v("повышение экологичности.В выхлопе будет намного меньше веществ, загрязняющих воздух; ")]),e._v(" "),t("li",{staticClass:"model-block-benefits__li"},[e._v("сохранение мощности при получении дополнительного запаса хода на одной заправке. ")])]),e._v(" "),t("p",[e._v("В результате автомобиль станет более экономичным, надежным и комфортным в использовании.")]),e._v(" "),t("div",{staticClass:"model-block-benefits__ul"},[e._v("Услуги компании «Интергазсервис»")]),e._v(" "),t("p",[e._v("Мы устанавливаем газовое оборудование собственного производства: закажите российский комплект, \n        полностью адаптированный к местным условиям. ГБО ALPHA выпускается уже больше 14 лет. \n        Наши преимущества:")]),e._v(" "),e._m(1)])]),e._v(" "),e._m(2),e._v(" "),t("div",{staticClass:"model-block__tabs"}),e._v(" "),t("div",{staticClass:"model-block__content"},[e._v("\n    dfdafadf\n  ")])])}),[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"model-block-price"},[t("div",{staticClass:"model-block-price__title"},[e._v("\n        Цены* на газобалонное оборудование с установкой\n      ")]),e._v(" "),t("div",{staticClass:"model-block-price__table"},[t("div",{staticClass:"model-block-price__tbtitle-gr"},[t("div",{staticClass:"model-block-price__tbtitle-gr-left"},[e._v("Объем газового баллона")]),e._v(" "),t("div",{staticClass:"model-block-price__tbtitle-gr-right"},[e._v("Цены на установку ГБО 4-го поколения")])]),e._v(" "),t("div",{staticClass:"model-block-price__table-row"},[t("div",{staticClass:"model-block-price__table-bel"}),e._v(" "),t("div",{staticClass:"model-block-price__table-bel"},[e._v("Alpha")]),e._v(" "),t("div",{staticClass:"model-block-price__table-bel"},[e._v("LANDI RENZO")]),e._v(" "),t("div",{staticClass:"model-block-price__table-bel"},[e._v("TEGAS")]),e._v(" "),t("div",{staticClass:"model-block-price__table-bel"},[e._v("AlphaAEB")])]),e._v(" "),t("div",{staticClass:"model-block-price__table-row"},[t("div",{staticClass:"model-block-price__table-bel text-left"},[e._v("50-65л, цилиндрический баллон")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")])]),e._v(" "),t("div",{staticClass:"model-block-price__table-row"},[t("div",{staticClass:"model-block-price__table-bel text-left"},[e._v("80-100л, цилиндрический баллон")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")])]),e._v(" "),t("div",{staticClass:"model-block-price__table-row"},[t("div",{staticClass:"model-block-price__table-bel text-left"},[e._v("42-53л, тороидальный баллон")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")])]),e._v(" "),t("div",{staticClass:"model-block-price__table-row"},[t("div",{staticClass:"model-block-price__table-bel text-left"},[e._v("75-95л, тороидальный баллон")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 27 600 руб")]),e._v(" "),t("div",{staticClass:"model-block-price__table-el"},[e._v("от 33 400 руб")])]),e._v(" "),t("div",{staticClass:"model-block-price__note"},[e._v("\n          * Цена ориентировочная, включает стоимость работы и оборудования. Точную цену уточняйте в установочном центре\n        ")])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",{staticClass:"model-block-benefits__li"},[e._v("большой выбор комплектующих. На сайте можно приобрести отдельно баллоны и детали для установки или комплекты в сборе;")]),e._v(" "),t("li",{staticClass:"model-block-benefits__li"},[e._v("установка в авторизованных сервисных центрах. Это гарантирует безопасность и надежность оборудования;")]),e._v(" "),t("li",{staticClass:"model-block-benefits__li"},[e._v("доступные цены на комплектующие и их монтаж. Все затраты на установку быстро окупятся.")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"model-block-faq"},[t("div",{staticClass:"model-block-faq__title"},[e._v("\n        Часто задаваемые вопросы про установку газа\n      ")]),e._v(" "),t("div",{staticClass:"model-block-faq__elemts"},[t("details",{staticClass:"model-block-faq__elem"},[t("summary",{staticClass:"title"},[e._v("\n            На какие автомобили можно установить ГБО?\n            ")]),e._v(" "),t("div",{staticClass:"text"},[e._v("\n            Уменьшение затрат на топливо В первую очередь для уменьшения затрат на топливо. \n            При имеющейся цене на литр бензина (30 руб.-35 руб.), газовое оборудование окупается в самый короткий срок. \n            Чем «прожорливей» автомобиль, тем скорость окупаемости выше. \n            Расчет окупаемости ГБО конкретно для Вашего автомобиля можно найти в таблице ниже или сосчитать на нашем калькуляторе. \n            Надежность в дороге Газовая система является дублирующей топливной системой, что делает автомобиль более надежным. \n            При отказе одной из топливных систем всегда можно воспользоваться работающей и добраться до места ремонта. \n            Также полезно и то, что на двух баках увеличивается дальность пробега без дозаправки. Экологичность Сохраняйте природу. \n            Газовое топливо на порядок экологичнее бензина. Токсичнось выхлопных газов снижается в следующем порядке:\n          ")])]),e._v(" "),t("details",{staticClass:"model-block-faq__elem"},[t("summary",{staticClass:"title"},[e._v("\n            Подскажите, если я захочу установить в вашей организации газовую систему на автомобиль,\n            мне нужно самому покупать необходимое оборудование?\n            ")]),e._v(" "),t("div",{staticClass:"text"},[e._v("\n            Уменьшение затрат на топливо В первую очередь для уменьшения затрат на топливо. \n            При имеющейся цене на литр бензина (30 руб.-35 руб.), газовое оборудование окупается в самый короткий срок. \n            Чем «прожорливей» автомобиль, тем скорость окупаемости выше. \n            Расчет окупаемости ГБО конкретно для Вашего автомобиля можно найти в таблице ниже или сосчитать на нашем калькуляторе. \n            Надежность в дороге Газовая система является дублирующей топливной системой, что делает автомобиль более надежным. \n            При отказе одной из топливных систем всегда можно воспользоваться работающей и добраться до места ремонта. \n            Также полезно и то, что на двух баках увеличивается дальность пробега без дозаправки. Экологичность Сохраняйте природу. \n            Газовое топливо на порядок экологичнее бензина. Токсичнось выхлопных газов снижается в следующем порядке:\n          ")])]),e._v(" "),t("details",{staticClass:"model-block-faq__elem"},[t("summary",{staticClass:"title"},[e._v("\n            Зачем мне ставить газ?\n            ")]),e._v(" "),t("div",{staticClass:"text"},[e._v("\n            Уменьшение затрат на топливо В первую очередь для уменьшения затрат на топливо. \n            При имеющейся цене на литр бензина (30 руб.-35 руб.), газовое оборудование окупается в самый короткий срок. \n            Чем «прожорливей» автомобиль, тем скорость окупаемости выше. \n            Расчет окупаемости ГБО конкретно для Вашего автомобиля можно найти в таблице ниже или сосчитать на нашем калькуляторе. \n            Надежность в дороге Газовая система является дублирующей топливной системой, что делает автомобиль более надежным. \n            При отказе одной из топливных систем всегда можно воспользоваться работающей и добраться до места ремонта. \n            Также полезно и то, что на двух баках увеличивается дальность пробега без дозаправки. Экологичность Сохраняйте природу. \n            Газовое топливо на порядок экологичнее бензина. Токсичнось выхлопных газов снижается в следующем порядке:\n          ")])])])])}],!1,null,null,null);t.default=component.exports},333:function(e,t,o){"use strict";function l(e,p){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,p){return e.__proto__=p,e},l(e,p)}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}o.d(t,"a",(function(){return n}))},334:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var l=o(15);function n(e,t){if(t&&("object"===Object(l.a)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}},335:function(e,t,o){"use strict";var l=o(4),n=o(41),r=o(16),c=o(12),d=o(92),f=o(90),_=Function,m=l([].concat),x=l([].join),h={};e.exports=f?_.bind:function(e){var t=n(this),o=t.prototype,l=d(arguments,1),f=function(){var o=m(l,d(arguments));return this instanceof f?function(e,t,o){if(!c(h,t)){for(var l=[],i=0;i<t;i++)l[i]="a["+i+"]";h[t]=_("C,a","return new C("+x(l,",")+")")}return h[t](e,o)}(t,o.length,o):t.apply(e,o)};return r(o)&&(f.prototype=o),f}},336:function(e,t,o){"use strict";o(328)},337:function(e,t,o){var l=o(119)((function(i){return i[1]}));l.push([e.i,'.model-block-benefits__ul{color:#000;font-family:Roboto;font-size:20px;font-style:normal;font-weight:500;line-height:normal;padding:20px 0}.model-block-benefits__li{list-style:inside}.model-block{align-items:center;background-color:#eaeaea;color:#eaeaea}.model-block,.model-block-offer{display:flex;flex-direction:column}.model-block-offer{padding:0 50px;width:100%}.model-block-offer__title{color:#000;font-family:Roboto;font-size:40px;font-style:normal;font-weight:500;line-height:normal}.model-block-offer__content{display:flex;flex-direction:column;height:400px;position:relative;width:100%}.model-block-offer__items{display:flex;flex-direction:column;margin:auto;width:100%}.model-block-offer__item{align-items:center;display:flex;flex-direction:row;padding-bottom:30px}.model-block-offer__item .image{height:67px;margin-right:40px;width:67px}.model-block-offer__item .text{color:#000;font-family:Roboto;font-size:25px;font-style:normal;font-weight:400;line-height:normal;width:364px}.model-block-offer__item .text span{font-weight:600}.model-block-offer__imgs{height:444px;left:calc(50% + 10px);position:absolute;top:0}.model-block-offer__imgs .imgs-big{-o-object-position:left;object-position:left;width:100%}.model-block-offer__imgs .imgs-icon{bottom:75px;left:-60px;position:absolute;width:11.25rem}.model-block-gas-inst{display:flex;flex-direction:row;margin-left:50px;margin-top:100px;width:-moz-available;width:-webkit-fill-available}.model-block-gas-inst__img{width:35%}.model-block-gas-inst__img .imgs-big{height:100%}.model-block-gas-inst__content{display:flex;flex-direction:column;width:65%}.model-block-gas-inst__title{background:#009b99;color:#fff;font-family:Roboto;font-size:35px;font-style:normal;font-weight:400;height:69px;line-height:normal;padding:16px 0 12px 56px;width:100%}.model-block-gas-inst__items{display:flex;flex-direction:column}.model-block-gas-inst__item{color:#000;font-family:Roboto;font-size:20px;font-style:normal;font-weight:200;line-height:normal;margin:25px 0 0 60px}.model-block-gas-inst__item span{font-weight:400}.model-block-gas-inst__item ol li{list-style:decimal;margin-left:21px}.model-block-price{-webkit-overflow-scrolling:touch;margin-top:100px;overflow-x:auto;width:100%}.model-block-price__title{color:#000;font-family:Roboto;font-size:35px;font-style:normal;font-weight:400;line-height:normal;text-align:center}.model-block-price__table{display:flex;flex-direction:column;margin-top:50px}.model-block-price__tbtitle-gr{align-items:center;background:#009b99;color:#000;display:flex;font-family:Roboto;font-size:20px;font-style:normal;font-weight:500;height:61px;line-height:normal;text-align:center;width:100%}.model-block-price__tbtitle-gr-left{width:35%}.model-block-price__tbtitle-gr-right{width:65%}.model-block-price__table-row{align-items:center;background-color:#f9f9f9;border-bottom:1px solid #eaeaea;color:#000;display:flex;font-family:Roboto;font-size:20px;font-style:normal;line-height:normal;padding:10px;text-align:center}.model-block-price__table-row:nth-child(2){border-bottom:none}.model-block-price__table-row:nth-child(6){padding-bottom:25px}.model-block-price__table-bel{flex:1;font-weight:500}.text-left{padding-left:30px;text-align:left}.model-block-price__table-bel:first-of-type{flex:2;font-weight:500}.model-block-price__table-el{flex:1;font-weight:300}.model-block-price__note{color:#000;font-weight:300;padding:20px 0 0 62px}.model-block-benefits{align-items:center;display:flex;flex-direction:column;margin-top:100px}.model-block-benefits__title{font-size:35px;font-weight:500}.model-block-benefits__text,.model-block-benefits__title{color:#000;font-family:Roboto;font-style:normal;line-height:normal}.model-block-benefits__text{font-size:20px;font-weight:300;margin:50px 160px 0 50px}.model-block-benefits__text span{font-weight:500;margin:10px}.model-block-benefits__text ol li{list-style:disclosure-closed;margin-left:25px;margin-top:15px}.model-block-models{align-items:center;display:flex;flex-direction:column;margin-top:100px}.model-block-models__title{color:#000;font-family:Roboto;font-size:35px;font-style:normal;font-weight:400;line-height:normal}.model-block-models__icons{color:#000;display:flex;flex-direction:row;flex-wrap:wrap;height:100%;margin:50px 50px 0}.model-block-models__icon{background:#fff;border-radius:30px;height:256px;margin-bottom:20px;margin-right:20px;width:295px}.model-block-models__icon .title{color:#000;font-family:Roboto;font-size:20px;font-style:normal;font-weight:400;line-height:normal;padding:22px 0 0 13px;text-align:center;width:95%}.model-block-models__icon .icon{background-position:50%;background-repeat:no-repeat;background-size:90%;height:156px;margin:12px auto;width:100%}.model-block-faq{align-items:center;display:flex;flex-direction:column;padding-top:100px}.model-block-faq__title{color:#000;font-family:Roboto;font-size:35px;font-style:normal;font-weight:400;line-height:normal;padding-bottom:50px}.model-block-faq__elemts{align-items:center;display:flex;flex-direction:column}details.model-block-faq__elem{background-position:right 30px top 24px;background-repeat:no-repeat;border-top:1px solid #000;color:#000;display:block;font-family:Roboto;font-size:25px;font-style:normal;font-weight:400;line-height:normal;margin:0 137px;padding:20px;width:75%}details.model-block-faq__elem:last-of-type{border-bottom:1px solid #000}details.model-block-faq__elem summary.title{font-size:25px;padding-right:50px;text-align:left;width:100%}details.model-block-faq__elem .text{font-size:20px;margin-top:25px;width:900px}summary:after{content:""}details[open]>summary:after,summary:after{background-position:50%;background-repeat:no-repeat}.model-block-need_help{background-repeat:no-repeat;display:flex;flex-direction:column;height:380px;margin-top:100px;padding-left:630px;width:1360px}.model-block-need_help__title{font-size:35px;font-weight:500;margin-top:78px}.model-block-need_help__text,.model-block-need_help__title{color:#fff;font-family:Roboto;font-style:normal;line-height:normal}.model-block-need_help__text{font-size:20px;font-weight:400;margin-top:15px}.model-block-need_help__form{display:block}.mb-btn-lgreen{background-color:#009b99;border-radius:81px;color:#fff;display:inline-block;font-family:Roboto;font-size:15px;font-style:normal;font-weight:500;line-height:normal;max-width:15.625rem;padding:.8125rem .625rem .6875rem;text-transform:uppercase;transition:all .3s;width:100%}.model-block__search{border-radius:30px;color:#000;display:flex;flex:1;flex-direction:column;height:223px;margin:10px 10px 10px 30px;padding:20px;width:280px}.model-block__search .title{color:#000;font-family:Roboto;font-size:15px;font-style:normal;font-weight:500;line-height:normal}.model-block__icons{color:#000;display:flex;flex-direction:row;flex-wrap:wrap;height:100%;margin:0 50px}.model-block_icon{background:#fff;border-radius:30px;height:256px;margin-right:20px;width:295px}.model-block_icon .title{color:#000;font-family:Roboto;font-size:20px;font-style:normal;font-weight:400;line-height:normal;padding:27px 0 0 13px;text-align:center}.model-block_icon .icon{background-position:50%;background-repeat:no-repeat;height:156px;margin:12px auto;width:100%}.model-block__icons_paginator{color:#000}.kits-block__content{background-color:#fff;color:#282828;padding:80px 40px 90px}.model-block__title{color:#37b7b5;font-family:Roboto;font-size:40px;font-style:normal;font-weight:600;line-height:normal}.kits-block__text{font-size:20px;line-height:1.4;width:63%}@media screen and (max-width:480px){.model-block-offer{padding:0 30px}.model-block-offer__content{height:480px}.model-block-offer__title{font-size:20px}.model-block-offer__items{margin-top:27px}.model-block-offer__item .image{height:41.726px;margin-right:14px;width:41.726px}.model-block-offer__item .text{font-size:15px;font-weight:400}.model-block-offer__imgs{height:272px;left:auto;position:absolute;top:295px}.model-block-offer__imgs .imgs-icon{bottom:75px;height:87px;left:0;position:absolute;width:93px}.model-block-gas-inst{flex-direction:column;margin-left:0}.model-block-gas-inst__content{order:1;width:100%}.model-block-gas-inst__img{order:2;padding:20px 30px 0;width:100%}.model-block-gas-inst__img .imgs-big{height:95%;width:100%}.model-block-gas-inst__title{font-size:20px;height:42px;padding:10px 0 12px 30px}.model-block-gas-inst__item{margin:25px 30px 0 32px}.model-block-price{margin-top:50px}.model-block-price__title{font-size:20px;margin:0 47px}.model-block-price__table{margin-top:20px;overflow-x:auto;width:1360px}.model-block-price__tbtitle-gr{font-size:15px;padding-left:30px;text-align:left}.model-block-price__tbtitle-gr-left{width:23%}.model-block-price__tbtitle-gr-right{width:77%}.model-block-price__table-row{font-size:15px;padding-left:30px;text-align:left}.model-block-price__table-bel:first-of-type{flex:1;min-width:300px}.model-block-benefits{margin-top:50px;width:100%}.model-block-benefits__title{font-size:20px}.model-block-benefits__text{margin:20px 30px 0}.model-block-models{margin-top:50px;width:100%}.model-block-models__title{font-size:20px;margin:0 20px;text-align:center}.model-block-models__icons{margin-top:20px}.model-block-faq{padding-top:50px;text-align:center;width:100%}.model-block-faq__title{font-size:20px;padding-bottom:20px}details.model-block-faq__elem{background-position:right 30px top 24px;margin:auto;padding:20px 30px;width:100%}details.model-block-faq__elem summary.title{font-size:15px;font-weight:401;padding-right:80px;width:100%}details.model-block-faq__elem .text{font-size:15px;margin-top:15px;text-align:left;width:auto}.model-block-need_help{height:355px;margin-top:50px;padding-left:0;width:100%}.model-block-need_help__title{font-size:20px;margin-top:20px;text-align:center}.model-block-need_help__text{font-size:15px;margin:10px 20px;text-align:center}}',""]),l.locals={},e.exports=l}}]);