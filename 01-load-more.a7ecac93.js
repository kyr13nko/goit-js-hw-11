!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){n[e]=r},r.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),s=a("6JpON"),l=a("5IjG7"),f=a("8H72y"),u=a("1KhuP"),c=a("4Nugj");c.refs.form.addEventListener("submit",(function(e){e.preventDefault();var r=e.target.elements.searchQuery.value;if(!r.trim()||r===p)return s.Notify.warning("Please enter something to search");p=r,d=1,c.refs.gallery.innerHTML="",y(p,d),c.refs.form.reset()}));var d,p="",h=new(e(l))(".gallery a",{overlayOpacity:.5,captionDelay:250});function y(e,r){return g.apply(this,arguments)}function g(){return(g=e(o)(e(i).mark((function r(t,n){var a,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.fetchPixabayData)(t,n);case 3:if(a=e.sent,console.log(a.hits),console.log(a),a.totalHits){e.next=9;break}return s.Notify.failure("Sorry, there are no images matching your search query. Please try again."),e.abrupt("return");case 9:(0,u.createMarkup)(a.hits),o=Math.ceil(a.totalHits/40),d>=o?(c.refs.loadMoreBtn.classList.add("is-hidden"),s.Notify.info("We're sorry, but you've reached the end of search results.")):c.refs.loadMoreBtn.classList.remove("is-hidden"),h.refresh(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),s.Notify.failure("Ooops... Something goes wrong. Please, try again.");case 19:case"end":return e.stop()}}),r,null,[[0,15]])})))).apply(this,arguments)}c.refs.loadMoreBtn.addEventListener("click",(function(){d+=1,c.refs.loadMoreBtn.classList.add("is-hidden"),y(p,d)}))}();
//# sourceMappingURL=01-load-more.a7ecac93.js.map
