import{a as i,A as j,S as C,N as S,P,i as T}from"./assets/vendor-B8rI0ALB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const v="https://furniture-store-v2.b.goit.study/api",h=8,u={CATEGORIES:"categories",FURNITURES:"furnitures",ORDERS:"orders",FEEDBACKS:"feedbacks"},k=()=>{const e=document.querySelector(".furniture-categories-list-item");e&&e.classList.add("current-category")};i.defaults.baseURL=v;let y=1;const E=()=>y+=1,b=()=>y,B=async()=>{const{data:e}=await i(`${u.CATEGORIES}`);return e},d=async(e=1,s=null)=>{const{data:t}=await i(`${u.FURNITURES}`,{params:{limit:h,page:e,category:s}});return console.log(t),t},$="/Project-CreativeTeam02/assets/1all_products-MNNrO4G5.jpg",I="/Project-CreativeTeam02/assets/7kitchens-B1U2sumV.jpg",A="/Project-CreativeTeam02/assets/10furniture_hallway-SzlnEjvC.jpg",q="/Project-CreativeTeam02/assets/12garden_furnitures-BsCHdeVT.jpg",R="/Project-CreativeTeam02/assets/5tables-DczJP-_Y.jpg",x="/Project-CreativeTeam02/assets/2sofas-CtxhA9kI.jpg",F="/Project-CreativeTeam02/assets/8child_furniture-DHKm76Ju.jpg",M="/Project-CreativeTeam02/assets/13accessoires-BnjU54Dx.jpg",N="/Project-CreativeTeam02/assets/11furniture_washrooms-tNgqFRxh.jpg",O="/Project-CreativeTeam02/assets/9office_furnitures-BLI04jhG.jpg",_="/Project-CreativeTeam02/assets/3wardrobe-BspX3wmj.jpg",D="/Project-CreativeTeam02/assets/4beds-D6hwExXz.jpg",H="/Project-CreativeTeam02/assets/6chairs-3pofB28T.jpg",o={categoryList:document.querySelector(".furniture-categories-list"),furnitureList:document.querySelector(".furniture-list"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".button-load-more-furnitures"),feedbackSwiper:document.querySelector(".feedback-swiper")};var p;o.feedbackWrapper=(p=o.feedbackSwiper)==null?void 0:p.querySelector(".swiper-wrapper");const m={all:$,"66504a50a1b2c3d4e5f6a7bd":I,"66504a50a1b2c3d4e5f6a7c0":A,"66504a50a1b2c3d4e5f6a7c2":q,"66504a50a1b2c3d4e5f6a7bb":R,"66504a50a1b2c3d4e5f6a7b8":x,"66504a50a1b2c3d4e5f6a7be":F,"66504a50a1b2c3d4e5f6a7c3":M,"66504a50a1b2c3d4e5f6a7c1":N,"66504a50a1b2c3d4e5f6a7bf":O,"66504a50a1b2c3d4e5f6a7b9":_,"66504a50a1b2c3d4e5f6a7ba":D,"66504a50a1b2c3d4e5f6a7bc":H};o.loader.classList.add("visually-hidden");const U=e=>{const s=e.map(t=>typeof t=="string"?`
          <li class="furniture-categories-list-item" style="background-image: url('${m.all}')">
            <span class="category-name">${t}</span>
          </li>
        `:`
        <li class="furniture-categories-list-item" style="background-image: url('${m[t._id]}')" data-id="${t._id}">
          <p class="category-name">${t.name}</p>
        </li>
      `).join("");o.categoryList.innerHTML=s},g=e=>e.furnitures.map(s=>{const t=s.images[0],a=s.color.map(r=>`
          <label class="color-checkbox" style="--color: ${r}">
            <input type="radio" name="color-${s._id}" value="${r}" style="accent-color: ${r}" />
            <span class="color-box"></span>
          </label>
        `).join("");return`
        <li class="product-card">
          <img src="${t}" alt="${s.name}" class="furniture-card-img" loading="lazy" decoding="async"/>
          <p class="furniture-name">${s.name}</p>
          <div class="color-options">${a}</div>
          <p class="furniture-price">${s.price} грн</p>
          <button type="button" class="button button-furnitures-detail">Детальніше</button>
        </li>
      `}).join(""),z=e=>{if(!o.furnitureList)return;const s=g({furnitures:e});o.furnitureList.insertAdjacentHTML("beforeend",s)},f=()=>{o.loader.classList.remove("visually-hidden")},n=()=>{o.loader.classList.add("visually-hidden")},w=()=>{o.loadButton.classList.remove("visually-hidden")};function G(){const e=document.querySelector(".accordion-container");e&&new j(e,{duration:300,showMultiple:!1})}const V=async()=>{f();try{const e=await B();U(["Всі товари",...e]),k()}catch(e){console.log(e)}n()},K=async()=>{f();try{const e=await d(b()),s=g(e);o.furnitureList.insertAdjacentHTML("beforeend",s)}catch(e){console.log(e)}n(),w()};i.defaults.baseURL=v;const J=function(e){const s=Math.floor(e);let t=(e.toString()+"0").split(".")[1];return!t||(t=parseInt(t.slice(0,2),10),t<30)?"value-"+s:t>70?"value-"+(s+1):"value-"+s+" half"},W=function(e){o.feedbackWrapper.innerHTML=e.map(s=>`<div class="swiper-slide">
        <div class="rating ${J(s.rate)} color-default">
    <div class="star-container">
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="img/icons.svg#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="img/icons.svg#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="img/icons.svg#icon-star-empty"></use>
            </svg>
        </div>
    </div>
</div>
        <p class="feedback-text">"${s.descr}"</p>
        <p class="feedback-name">${s.name}</p>
        </div>`).join(""),new C(o.feedbackSwiper,{modules:[S,P],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},slidesPerView:1,spaceBetween:0,dynamicBullets:!1,breakpoints:{769:{slidesPerView:2},1440:{slidesPerView:3}}})},X=async()=>{const{data:e}=await i(`${u.FEEDBACKS}`,{params:{limit:10}});return e};let L=null;V();K();o.loadButton.addEventListener("click",async()=>{const e=b()+1;try{f();const t=await d(e,L),c=t.totalItems,a=Math.ceil(c/h);if(e>a)return o.loadButton.classList.add("visually-hidden"),n(),T.error({position:"topRight",message:"Sorry there are no more products"});E(),z(t.furnitures),n()}catch(t){console.error(t)}const s=document.querySelector(".furniture-categories-list-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*6.5,behavior:"smooth"})}});const Y=async e=>{const s=e.target.closest(".furniture-categories-list-item");if(!s)return;document.querySelectorAll(".furniture-categories-list-item").forEach(a=>a.classList.remove("current-category")),s.classList.add("current-category");const t=e.target.closest("[data-id]");let c=null;t&&(c=t.dataset.id),L=c;try{const a=await d(1,c);o.furnitureList.innerHTML="";const r=g(a);o.furnitureList.insertAdjacentHTML("beforeend",r),w()}catch(a){console.log(a)}};o.categoryList.addEventListener("click",Y);G();const Q=async()=>{const e=await X();W(e.feedbacks)};Q();
//# sourceMappingURL=index.js.map
