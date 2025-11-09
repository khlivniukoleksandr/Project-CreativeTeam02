import{a as i,A as q,S as P,N as I,P as F,i as _}from"./assets/vendor-B8rI0ALB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const M="https://furniture-store-v2.b.goit.study/api",T=8,u={CATEGORIES:"categories",FURNITURES:"furnitures",ORDERS:"orders",FEEDBACKS:"feedbacks"},H="/Project-CreativeTeam02/assets/1all_products-MNNrO4G5.jpg",R="/Project-CreativeTeam02/assets/7kitchens-B1U2sumV.jpg",A="/Project-CreativeTeam02/assets/10furniture_hallway-SzlnEjvC.jpg",N="/Project-CreativeTeam02/assets/12garden_furnitures-BsCHdeVT.jpg",O="/Project-CreativeTeam02/assets/5tables-DczJP-_Y.jpg",x="/Project-CreativeTeam02/assets/2sofas-CtxhA9kI.jpg",D="/Project-CreativeTeam02/assets/8child_furniture-DHKm76Ju.jpg",U="/Project-CreativeTeam02/assets/13accessoires-BnjU54Dx.jpg",z="/Project-CreativeTeam02/assets/11furniture_washrooms-tNgqFRxh.jpg",G="/Project-CreativeTeam02/assets/9office_furnitures-BLI04jhG.jpg",V="/Project-CreativeTeam02/assets/3wardrobe-BspX3wmj.jpg",K="/Project-CreativeTeam02/assets/4beds-D6hwExXz.jpg",J="/Project-CreativeTeam02/assets/6chairs-3pofB28T.jpg",r={categoryList:document.querySelector(".furniture-categories-list"),furnitureList:document.querySelector(".furniture-list"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".button-load-more-furnitures"),feedbackSwiper:document.querySelector(".feedback-swiper"),modalBackdrop:document.querySelector(".modal-furniture-backdrop"),modalGallery:document.querySelector(".modal-furniture-gallery"),modalInfo:document.querySelector(".modal-furniture-info"),makeOrderButton:document.querySelector(".modal-furniture-btn"),orderModal:document.querySelector(".backdrop"),orderModalForm:document.querySelector(".modal-form")};var S;r.feedbackWrapper=(S=r.feedbackSwiper)==null?void 0:S.querySelector(".swiper-wrapper");const y={all:H,"66504a50a1b2c3d4e5f6a7bd":R,"66504a50a1b2c3d4e5f6a7c0":A,"66504a50a1b2c3d4e5f6a7c2":N,"66504a50a1b2c3d4e5f6a7bb":O,"66504a50a1b2c3d4e5f6a7b8":x,"66504a50a1b2c3d4e5f6a7be":D,"66504a50a1b2c3d4e5f6a7c3":U,"66504a50a1b2c3d4e5f6a7c1":z,"66504a50a1b2c3d4e5f6a7bf":G,"66504a50a1b2c3d4e5f6a7b9":V,"66504a50a1b2c3d4e5f6a7ba":K,"66504a50a1b2c3d4e5f6a7bc":J},v=document.querySelector('[for="modal-order-name"]'),b=document.querySelector('[name="user-name"]'),h=document.querySelector(".name-required-message"),L=document.querySelector('[name="modal-order-tel"]'),k=document.querySelector('[for="modal-order-tel"]'),w=document.querySelector(".tel-required-message"),W=()=>{const e=document.querySelector(".furniture-categories-list-item");e&&e.classList.add("current-category")};function m(){r.orderModal.classList.remove("fade-in"),r.orderModal.classList.add("fade-out"),document.body.classList.remove("no-scroll"),setTimeout(()=>{r.orderModal.classList.remove("is-open"),r.orderModal.classList.remove("fade-out"),document.body.style.overflow=""},300)}const X=document.querySelector(".modal-close-btn");X.addEventListener("click",m);r.orderModal.addEventListener("click",e=>{e.target.classList.contains("backdrop")&&m()});document.addEventListener("keydown",e=>{e.key==="Escape"&&m()});const Y=async e=>{e.preventDefault();const t=e.target.elements["user-name"].value.trim(),s=e.target.elements["modal-order-tel"].value.trim();let n=!1;t.length===0?(v.classList.add("error-label"),b.classList.add("error-input"),h.classList.remove("visually-hidden"),n=!0):(v.classList.remove("error-label"),b.classList.remove("error-input"),h.classList.add("visually-hidden")),s.length===0?(k.classList.add("error-label"),L.classList.add("error-input"),w.classList.remove("visually-hidden"),n=!0):(k.classList.remove("error-label"),L.classList.remove("error-input"),w.classList.add("visually-hidden")),!n&&(m(),r.orderModalForm.reset())};i.defaults.baseURL=M;let j=1;const Q=()=>j+=1,E=()=>j,Z=async()=>{const{data:e}=await i(`${u.CATEGORIES}`);return e},f=async(e=1,t=null)=>{const{data:s}=await i(`${u.FURNITURES}`,{params:{limit:T,page:e,category:t}});return console.log(s),s};async function ee(e){try{return(await i(`${u.FURNITURES}/${e}`)).data}catch{}}r.loader.classList.add("visually-hidden");const te=e=>{const t=e.map(s=>typeof s=="string"?`
          <li class="furniture-categories-list-item" style="background-image: url('${y.all}')">
            <span class="category-name">${s}</span>
          </li>
        `:`
        <li class="furniture-categories-list-item" style="background-image: url('${y[s._id]}')" data-id="${s._id}">
          <p class="category-name">${s.name}</p>
        </li>
      `).join("");r.categoryList.innerHTML=t},p=e=>e.furnitures.map(t=>{const s=t.images[0],a=t.color.map(o=>`
          <label class="color-checkbox" style="--color: ${o}">
            <input type="radio" name="color-${t._id}" value="${o}" style="accent-color: ${o}" />
            <span class="color-box"></span>
          </label>
        `).join("");return`
        <li class="product-card" data-id="${t._id}">
          <img src="${s}" alt="${t.name}" class="furniture-card-img" loading="lazy" decoding="async"/>
          <p class="furniture-name">${t.name}</p>
          <div class="color-options">${a}</div>
          <p class="furniture-price">${t.price} грн</p>
          <button type="button" class="button button-furnitures-detail">Детальніше</button>
        </li>
      `}).join(""),se=e=>{if(!r.furnitureList)return;const t=p({furnitures:e});r.furnitureList.insertAdjacentHTML("beforeend",t)},g=()=>{r.loader.classList.remove("visually-hidden")},d=()=>{r.loader.classList.add("visually-hidden")},$=()=>{r.loadButton.classList.remove("visually-hidden")};function re(){const e=document.querySelector(".accordion-container");e&&new q(e,{duration:300,showMultiple:!1})}const ae=e=>{const t=`<div class="modal-furniture-gallery-main-container">
      <img src="${e.images[0]}" alt="${e.name}" class="modal-furniture-gallery-main-image" />
    </div>
    <div class="modal-furniture-gallery-thumbs">
      ${e.images.slice(1).map(c=>`
          <div class="modal-furniture-thumb-wrap">
            <img src="${c}" alt="${e.name}" class="modal-furniture-thumb" />
          </div>
        `).join("")}
    </div>
  `;r.modalGallery.innerHTML=t;const s=e.color.map((c,B)=>`
        <label class="modal-furniture-color ">
          <input class="modal-furniture-color-input" type="radio" name="color-${e._id}" value="${c}" style="accent-color: ${c}" ${B===0?"checked":""} />
          <span style="background-color: ${c}"></span>
        </label>
  `).join(""),n=`
    <h2 class="modal-furniture-title">${e.name}</h2>
    <p class="modal-furniture-category">${e.category.name}</p>
    <p class="modal-furniture-price">${e.price} грн</p>
    <div id="container-rating-id" class="modal-furniture-rating"></div>
    <div class="modal-furniture-colors-wrap">
      <p class="modal-furniture-info-label">Колір</p>
      <div class="modal-furniture-color-list">${s}</div>
    </div>
    <p class="modal-furniture-description">${e.description}</p>
    <div class="modal-furniture-sizes-wrap">
      <p class="modal-furniture-info-label-sizes">Розміри:</p>
      <p class="modal-furniture-sizes-value">${e.sizes}</p>
    </div>
    <button type="button" class="button modal-furniture-btn modal-open-order-btn">
      Перейти до замовлення
    </button>
`;r.modalInfo.innerHTML=n;const a=document.querySelector("#container-rating-id"),o=ne(e.rate);a.innerHTML="",oe(a,o)},oe=(e,t)=>{const s=Math.floor(t),n=t%1===.5;if([...Array(s)].map(()=>{const o=document.createElement("span");o.className="star-rating__star",o.innerHTML="★",e.appendChild(o)}),n){const o=document.createElement("span");o.className="star-rating__star is-half",o.innerHTML="★",e.appendChild(o)}const a=5-s-(n?1:0);[...Array(a)].map(()=>{const o=document.createElement("span");o.className="star-rating__star is-empty",o.innerHTML="☆",e.appendChild(o)})},ne=e=>{const t=Math.floor(e),s=e-t;return s>=.3&&s<=.7?t+.5:s>=.8?Math.min(t+1,5):t};function ce(){r.modalBackdrop.classList.remove("is-hidden"),r.modalBackdrop.classList.add("fade-in"),document.body.style.overflow="hidden"}function l(){r.modalBackdrop.classList.remove("fade-in"),r.modalBackdrop.classList.add("fade-out"),setTimeout(()=>{r.modalBackdrop.classList.add("is-hidden"),r.modalBackdrop.classList.remove("fade-out"),document.body.style.overflow=""},300)}function ie(){const e=r.modalBackdrop.querySelector(".modal-furniture-close-btn"),t=r.modalBackdrop.querySelector(".modal-open-order-btn");e.addEventListener("click",l),r.modalBackdrop.addEventListener("click",s=>{s.target.classList.contains("modal-furniture-backdrop")&&l()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&l()}),t.addEventListener("click",()=>{l(),setTimeout(()=>{r.orderModal.classList.add("fade-in"),r.orderModal.classList.add("is-open"),document.body.classList.add("no-scroll")},300)})}const le=async()=>{g();try{const e=await Z();te(["Всі товари",...e]),W()}catch(e){console.log(e)}d()},de=async()=>{g();try{const e=await f(E()),t=p(e);r.furnitureList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}d(),$()},ue=async e=>{const t=await ee(e);ae(t),ce(),ie()};i.defaults.baseURL=M;const me=function(e){const t=Math.floor(e);let s=(e.toString()+"0").split(".")[1];return!s||(s=parseInt(s.slice(0,2),10),s<30)?"value-"+t:s>70?"value-"+(t+1):"value-"+t+" half"},fe=function(e){r.feedbackWrapper.innerHTML=e.map(t=>`<div class="swiper-slide">
        <div class="rating ${me(t.rate)} color-default">
    <div class="star-container">
        <div class="star">
            <svg class="star-filled">
               <use href="#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="#icon-star-empty"></use>
            </svg>
        </div>
        <div class="star">
            <svg class="star-filled">
               <use href="#icon-star-filled"></use>
            </svg>
            <svg class="star-half">
               <use href="#icon-star-half"></use>
            </svg>
            <svg class="star-empty">
                <use href="#icon-star-empty"></use>
            </svg>
        </div>
    </div>
</div>
        <p class="feedback-text">"${t.descr}"</p>
        <p class="feedback-name">${t.name}</p>
        </div>`).join(""),new P(r.feedbackSwiper,{modules:[I,F],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},slidesPerView:1,spaceBetween:0,dynamicBullets:!1,breakpoints:{769:{slidesPerView:2},1440:{slidesPerView:3}}})},pe=async()=>{const{data:e}=await i(`${u.FEEDBACKS}`,{params:{limit:10}});return e};let C=null;le();de();r.loadButton.addEventListener("click",async()=>{const e=E()+1;try{g();const s=await f(e,C),n=s.totalItems,a=Math.ceil(n/T);if(e>a)return r.loadButton.classList.add("visually-hidden"),d(),_.error({position:"topRight",message:"Sorry there are no more products"});Q(),se(s.furnitures),d()}catch(s){console.error(s)}const t=document.querySelector(".furniture-categories-list-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*6.5,behavior:"smooth"})}});const ge=async e=>{const t=e.target.closest(".furniture-categories-list-item");if(!t)return;document.querySelectorAll(".furniture-categories-list-item").forEach(a=>a.classList.remove("current-category")),t.classList.add("current-category");const s=e.target.closest("[data-id]");let n=null;s&&(n=s.dataset.id),C=n;try{const a=await f(1,n);r.furnitureList.innerHTML="";const o=p(a);r.furnitureList.insertAdjacentHTML("beforeend",o),$()}catch(a){console.log(a)}};r.categoryList.addEventListener("click",ge);re();const ye=async()=>{const e=await pe();fe(e.feedbacks)};ye();const ve=r.furnitureList;ve.addEventListener("click",e=>{if(e.target.classList.contains("button-furnitures-detail")){const t=e.target.closest(".product-card");if(t){r.modalGallery.innerHTML="",r.modalInfo.innerHTML="";const s=t.dataset.id;ue(s)}}});r.orderModalForm.addEventListener("submit",Y);
//# sourceMappingURL=index.js.map
