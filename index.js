/* empty css                      */import{a as m,S as d,i as s}from"./assets/vendor-1AYLTIiv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=void 0,g="https://pixabay.com/api/";function y(o){return m.get(g,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("API error:",r),[]))}const l=document.querySelector(".gallery"),c=document.querySelector("#loader");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){l.innerHTML="";const r=o.map(({webformatURL:a,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
          />
        </a>
        <div class="image-info">
          <p class="image-info-text">
            <span class="image-info-tag">Likes</span> ${t}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Views</span> ${n}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Comments</span> ${u}
          </p>
          <p class="image-info-text">
            <span class="image-info-tag">Downloads</span> ${f}
          </p>
      </div>
</li>
  `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){const o=document.querySelector(".gallery");o.innerHTML=""}function P(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const q=document.querySelector(".form"),x=document.querySelector(".search-input");q.addEventListener("submit",function(o){o.preventDefault();const r=x.value.trim();r!==""&&(b(),P(),y(r).then(a=>{if(a.length===0){s.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",theme:"dark"});return}L(a)}).catch(a=>{console.error("Pixabay API error:",a),s.error({title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{S()}))});
//# sourceMappingURL=index.js.map
