function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){o[e]=r},r.parcelRequired7c6=n);var a=n("7Y9D8"),i=n("fZKcF"),s=n("6fOXY"),l=n("3huUq"),f=n("krGWQ");f.refs.form.addEventListener("submit",(function(e){e.preventDefault();const r=e.target.elements.searchQuery.value;if(!r.trim()||r===c)return a.Notify.warning("Please enter something to search");c=r,d=1,f.refs.gallery.innerHTML="",y(c,d),f.refs.form.reset()}));let d,c="";const u=new(e(i))(".gallery a",{overlayOpacity:.5,captionDelay:250});async function y(e,r){try{const t=await(0,s.fetchPixabayData)(e,r);if(console.log(t.hits),console.log(t),!t.totalHits)return void a.Notify.failure("Sorry, there are no images matching your search query. Please try again.");(0,l.createMarkup)(t.hits);const o=Math.ceil(t.totalHits/40);d>=o?(f.refs.loadMoreBtn.classList.add("is-hidden"),a.Notify.info("We're sorry, but you've reached the end of search results.")):f.refs.loadMoreBtn.classList.remove("is-hidden"),u.refresh()}catch(e){console.log(e),a.Notify.failure("Ooops... Something goes wrong. Please, try again.")}}f.refs.loadMoreBtn.addEventListener("click",(function(){d+=1,f.refs.loadMoreBtn.classList.add("is-hidden"),y(c,d)}));
//# sourceMappingURL=01-load-more.03027508.js.map
