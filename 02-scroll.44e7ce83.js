!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var a=o("bpxeT"),i=o("2TvXO"),s=o("6JpON"),u=o("8H72y"),l=o("kAyEQ"),f=o("4Nugj");f.refs.form.addEventListener("submit",(function(e){e.preventDefault();var r=e.target.elements.searchQuery.value;if(!r.trim()||r===p)return s.Notify.warning("Please enter something to search");p=r,c=1,f.refs.gallery.innerHTML="",function(e,r){d.apply(this,arguments)}(p,c),f.refs.form.reset()}));var c,p="";function d(){return(d=e(a)(e(i).mark((function r(t,n){var o,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.fetchPixabayData)(t,n);case 3:if(o=e.sent,console.log(o.hits),console.log(o),o.totalHits){e.next=9;break}return s.Notify.failure("Sorry, there are no images matching your search query. Please try again."),e.abrupt("return");case 9:(0,l.createMarkup)(o.hits),1===c&&s.Notify.success("Hooray! We found ".concat(o.totalHits," images.")),a=Math.ceil(o.totalHits/40),c>=a&&s.Notify.info("We're sorry, but you've reached the end of search results."),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),s.Notify.failure("Ooops... Something goes wrong. Please, try again.");case 19:case"end":return e.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}}();
//# sourceMappingURL=02-scroll.44e7ce83.js.map