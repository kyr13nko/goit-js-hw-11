var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var s=t("7Y9D8"),i=t("6fOXY"),r=t("krGWQ");function a(e){const n=e.map((({webformatURL:e,tags:n,likes:o,views:t,comments:s,downloads:i})=>`\n          <div class="photo-card-ml">\n            <img src="${e}" alt="${n}" loading="lazy" />\n            <div class="info">\n              <p class="info-item">\n                <b>Likes</b> ${o}\n              </p>\n              <p class="info-item">\n                <b>Views</b> ${t}\n              </p>\n              <p class="info-item">\n                <b>Comments</b> ${s}\n              </p>\n              <p class="info-item">\n                <b>Downloads</b> ${i}\n              </p>\n            </div>\n          </div>\n          `)).join("");r.refs.gallery.insertAdjacentHTML("beforeend",n)}(r=t("krGWQ")).refs.form.addEventListener("submit",(function(e){e.preventDefault();const n=e.target.elements.searchQuery.value;if(!n.trim()||n===d)return s.Notify.warning("Please enter something to search");d=n,l=1,r.refs.gallery.innerHTML="",f(d,l),r.refs.form.reset()}));let l,d="";async function f(e,n){try{const o=await(0,i.fetchPixabayData)(e,n);if(console.log(o.hits),console.log(o),!o.totalHits)return void s.Notify.failure("Sorry, there are no images matching your search query. Please try again.");a(o.hits);const t=Math.ceil(o.totalHits/40);l>=t?(r.refs.loadMoreBtn.classList.add("is-hidden"),s.Notify.info("We're sorry, but you've reached the end of search results.")):r.refs.loadMoreBtn.classList.remove("is-hidden")}catch(e){console.log(e),s.Notify.failure("Ooops... Something goes wrong. Please, try again.")}}r.refs.loadMoreBtn.addEventListener("click",(function(){l+=1,r.refs.loadMoreBtn.classList.add("is-hidden"),f(d,l)}));
//# sourceMappingURL=01-load-more.f18e389d.js.map
