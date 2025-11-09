import{a as i,A as S,S as $,N as C,P as T,i as B}from"./assets/vendor-B8rI0ALB.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const y="https://furniture-store-v2.b.goit.study/api",h=8,u={CATEGORIES:"categories",FURNITURES:"furnitures",ORDERS:"orders",FEEDBACKS:"feedbacks"},E=()=>{const e=document.querySelector(".furniture-categories-list-item");e&&e.classList.add("current-category")};i.defaults.baseURL=y;let b=1;const P=()=>b+=1,L=()=>b,M=async()=>{const{data:e}=await i(`${u.CATEGORIES}`);return e},f=async(e=1,s=null)=>{const{data:t}=await i(`${u.FURNITURES}`,{params:{limit:h,page:e,category:s}});return console.log(t),t};async function I(e){try{return(await i(`${u.FURNITURES}/${e}`)).data}catch{}}const q="/Project-CreativeTeam02/assets/1all_products-MNNrO4G5.jpg",_="/Project-CreativeTeam02/assets/7kitchens-B1U2sumV.jpg",F="/Project-CreativeTeam02/assets/10furniture_hallway-SzlnEjvC.jpg",H="/Project-CreativeTeam02/assets/12garden_furnitures-BsCHdeVT.jpg",R="/Project-CreativeTeam02/assets/5tables-DczJP-_Y.jpg",A="/Project-CreativeTeam02/assets/2sofas-CtxhA9kI.jpg",N="/Project-CreativeTeam02/assets/8child_furniture-DHKm76Ju.jpg",x="/Project-CreativeTeam02/assets/13accessoires-BnjU54Dx.jpg",D="/Project-CreativeTeam02/assets/11furniture_washrooms-tNgqFRxh.jpg",O="/Project-CreativeTeam02/assets/9office_furnitures-BLI04jhG.jpg",U="/Project-CreativeTeam02/assets/3wardrobe-BspX3wmj.jpg",z="/Project-CreativeTeam02/assets/4beds-D6hwExXz.jpg",G="/Project-CreativeTeam02/assets/6chairs-3pofB28T.jpg",o={categoryList:document.querySelector(".furniture-categories-list"),furnitureList:document.querySelector(".furniture-list"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".button-load-more-furnitures"),feedbackSwiper:document.querySelector(".feedback-swiper"),modalBackdrop:document.querySelector(".modal-furniture-backdrop"),modalGallery:document.querySelector(".modal-furniture-gallery"),modalInfo:document.querySelector(".modal-furniture-info")};var v;o.feedbackWrapper=(v=o.feedbackSwiper)==null?void 0:v.querySelector(".swiper-wrapper");const p={all:q,"66504a50a1b2c3d4e5f6a7bd":_,"66504a50a1b2c3d4e5f6a7c0":F,"66504a50a1b2c3d4e5f6a7c2":H,"66504a50a1b2c3d4e5f6a7bb":R,"66504a50a1b2c3d4e5f6a7b8":A,"66504a50a1b2c3d4e5f6a7be":N,"66504a50a1b2c3d4e5f6a7c3":x,"66504a50a1b2c3d4e5f6a7c1":D,"66504a50a1b2c3d4e5f6a7bf":O,"66504a50a1b2c3d4e5f6a7b9":U,"66504a50a1b2c3d4e5f6a7ba":z,"66504a50a1b2c3d4e5f6a7bc":G};o.loader.classList.add("visually-hidden");const V=e=>{const s=e.map(t=>typeof t=="string"?`
          <li class="furniture-categories-list-item" style="background-image: url('${p.all}')">
            <span class="category-name">${t}</span>
          </li>
        `:`
        <li class="furniture-categories-list-item" style="background-image: url('${p[t._id]}')" data-id="${t._id}">
          <p class="category-name">${t.name}</p>
        </li>
      `).join("");o.categoryList.innerHTML=s},m=e=>e.furnitures.map(s=>{const t=s.images[0],r=s.color.map(a=>`
          <label class="color-checkbox" style="--color: ${a}">
            <input type="radio" name="color-${s._id}" value="${a}" style="accent-color: ${a}" />
            <span class="color-box"></span>
          </label>
        `).join("");return`
        <li class="product-card" data-id="${s._id}">
          <img src="${t}" alt="${s.name}" class="furniture-card-img" loading="lazy" decoding="async"/>
          <p class="furniture-name">${s.name}</p>
          <div class="color-options">${r}</div>
          <p class="furniture-price">${s.price} грн</p>
          <button type="button" class="button button-furnitures-detail">Детальніше</button>
        </li>
      `}).join(""),K=e=>{if(!o.furnitureList)return;const s=m({furnitures:e});o.furnitureList.insertAdjacentHTML("beforeend",s)},g=()=>{o.loader.classList.remove("visually-hidden")},d=()=>{o.loader.classList.add("visually-hidden")},k=()=>{o.loadButton.classList.remove("visually-hidden")};function J(){const e=document.querySelector(".accordion-container");e&&new S(e,{duration:300,showMultiple:!1})}const W=e=>{const s=`<div class="modal-furniture-gallery-main-container">
      <img src="${e.images[0]}" alt="${e.name}" class="modal-furniture-gallery-main-image" />
    </div>
    <div class="modal-furniture-gallery-thumbs">
      ${e.images.slice(1).map(c=>`
          <div class="modal-furniture-thumb-wrap">
            <img src="${c}" alt="${e.name}" class="modal-furniture-thumb" />
          </div>
        `).join("")}
    </div>
  `;o.modalGallery.innerHTML=s;const t=e.color.map((c,j)=>`
        <label class="modal-furniture-color ">
          <input class="modal-furniture-color-input" type="radio" name="color-${e._id}" value="${c}" style="accent-color: ${c}" ${j===0?"checked":""} />
          <span style="background-color: ${c}"></span>
        </label>
  `).join("");console.log(t);const n=`
    <h2 class="modal-furniture-title">${e.name}</h2>
    <p class="modal-furniture-category">${e.category.name}</p>
    <p class="modal-furniture-price">${e.price} грн</p>
    <div id="container-rating-id" class="modal-furniture-rating"></div>
    <div class="modal-furniture-colors-wrap">
      <p class="modal-furniture-info-label">Колір</p>
      <div class="modal-furniture-color-list">${t}</div>
    </div>
    <p class="modal-furniture-description">${e.description}</p>
    <div class="modal-furniture-sizes-wrap">
      <p class="modal-furniture-info-label-sizes">Розміри:</p>
      <p class="modal-furniture-sizes-value">${e.sizes}</p>
    </div>
    <button type="button" class="button modal-furniture-btn modal-open-order-btn">
      Перейти до замовлення
    </button>
`;o.modalInfo.innerHTML=n;const r=document.querySelector("#container-rating-id"),a=Y(e.rate);r.innerHTML="",X(r,a)},X=(e,s)=>{const t=Math.floor(s),n=s%1===.5;if([...Array(t)].map(()=>{const a=document.createElement("span");a.className="star-rating__star",a.innerHTML="★",e.appendChild(a)}),n){const a=document.createElement("span");a.className="star-rating__star is-half",a.innerHTML="★",e.appendChild(a)}const r=5-t-(n?1:0);[...Array(r)].map(()=>{const a=document.createElement("span");a.className="star-rating__star is-empty",a.innerHTML="☆",e.appendChild(a)})},Y=e=>{const s=Math.floor(e),t=e-s;return t>=.3&&t<=.7?s+.5:t>=.8?Math.min(s+1,5):s};function Q(){o.modalBackdrop.classList.remove("is-hidden"),o.modalBackdrop.classList.add("fade-in"),document.body.style.overflow="hidden"}function l(){o.modalBackdrop.classList.remove("fade-in"),o.modalBackdrop.classList.add("fade-out"),setTimeout(()=>{o.modalBackdrop.classList.add("is-hidden"),o.modalBackdrop.classList.remove("fade-out"),document.body.style.overflow=""},300)}function Z(){const e=o.modalBackdrop.querySelector(".modal-furniture-close-btn"),s=o.modalBackdrop.querySelector(".modal-open-order-btn");e.addEventListener("click",l),o.modalBackdrop.addEventListener("click",t=>{t.target.classList.contains("modal-furniture-backdrop")&&l()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&l()}),s.addEventListener("click",()=>{l()})}const ee=async()=>{g();try{const e=await M();V(["Всі товари",...e]),E()}catch(e){console.log(e)}d()},se=async()=>{g();try{const e=await f(L()),s=m(e);o.furnitureList.insertAdjacentHTML("beforeend",s)}catch(e){console.log(e)}d(),k()},te=async e=>{const s=await I(e);W(s),Q(),Z()};i.defaults.baseURL=y;const re=function(e){const s=Math.floor(e);let t=(e.toString()+"0").split(".")[1];return!t||(t=parseInt(t.slice(0,2),10),t<30)?"value-"+s:t>70?"value-"+(s+1):"value-"+s+" half"},ae=function(e){o.feedbackWrapper.innerHTML=e.map(s=>`<div class="swiper-slide">
        <div class="rating ${re(s.rate)} color-default">
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
        </div>`).join(""),new $(o.feedbackSwiper,{modules:[C,T],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},slidesPerView:1,spaceBetween:0,dynamicBullets:!1,breakpoints:{769:{slidesPerView:2},1440:{slidesPerView:3}}})},oe=async()=>{const{data:e}=await i(`${u.FEEDBACKS}`,{params:{limit:10}});return e};let w=null;ee();se();o.loadButton.addEventListener("click",async()=>{const e=L()+1;try{g();const t=await f(e,w),n=t.totalItems,r=Math.ceil(n/h);if(e>r)return o.loadButton.classList.add("visually-hidden"),d(),B.error({position:"topRight",message:"Sorry there are no more products"});P(),K(t.furnitures),d()}catch(t){console.error(t)}const s=document.querySelector(".furniture-categories-list-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*6.5,behavior:"smooth"})}});const ne=async e=>{const s=e.target.closest(".furniture-categories-list-item");if(!s)return;document.querySelectorAll(".furniture-categories-list-item").forEach(r=>r.classList.remove("current-category")),s.classList.add("current-category");const t=e.target.closest("[data-id]");let n=null;t&&(n=t.dataset.id),w=n;try{const r=await f(1,n);o.furnitureList.innerHTML="";const a=m(r);o.furnitureList.insertAdjacentHTML("beforeend",a),k()}catch(r){console.log(r)}};o.categoryList.addEventListener("click",ne);J();const ce=async()=>{const e=await oe();ae(e.feedbacks)};ce();const ie=o.furnitureList;ie.addEventListener("click",e=>{if(e.target.classList.contains("button-furnitures-detail")){const s=e.target.closest(".product-card");if(s){o.modalGallery.innerHTML="",o.modalInfo.innerHTML="";const t=s.dataset.id;te(t)}}});
//# sourceMappingURL=index.js.map
