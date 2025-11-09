import{i as I,a as m,A as U,S as z,N as G,P as V}from"./assets/vendor-B8rI0ALB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu");if(!e||!t)return;const s="icon-menu",n="icon-close",a=t.querySelector("use"),o=()=>{if(!a)return null;const c=a.getAttribute("href")||a.getAttribute("xlink:href");return c&&c.split("#")[0]||null},i=c=>{const l=o();!l||!a||(a.setAttribute("href",`${l}#${c}`),a.setAttribute("xlink:href",`${l}#${c}`))},p=c=>{const l=document.getElementById("header");[...document.body.children].forEach(f=>{f===l||f===e||f.setAttribute("aria-hidden",c?"true":"false")})},w=c=>{const f=window.innerWidth>document.documentElement.clientWidth?window.innerWidth-document.documentElement.clientWidth:0;document.documentElement.style.setProperty("--scrollbar-comp",c?`${f}px`:"0px")};let d=null,u=null;const H=()=>{u||(u=c=>{!e.contains(c.target)&&!t.contains(c.target)&&g()},document.addEventListener("click",u)),d||(d=c=>{c.key==="Escape"&&g()},document.addEventListener("keydown",d))},N=()=>{d&&document.removeEventListener("keydown",d),u&&document.removeEventListener("click",u),d=null,u=null},R=()=>{e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Закрити мобільне меню"),p(!0),e.setAttribute("aria-hidden","false"),document.body.classList.add("no-scroll"),w(!0),i(n);const c=["a[href]","button:not([disabled])",'[tabindex]:not([tabindex="-1"])',"input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].join(","),l=e.querySelector(c);setTimeout(()=>(l||e).focus(),0),H()},g=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Відкрити мобільне меню"),p(!1),e.setAttribute("aria-hidden","true"),document.body.classList.remove("no-scroll"),w(!1),i(s),N(),t.focus()},D=()=>{e.classList.contains("is-open")?g():R()};t.addEventListener("click",D),e.addEventListener("click",c=>{c.target.closest(".js-close-menu")&&g()})})();const P="https://furniture-store-v2.b.goit.study/api",A=8,b={CATEGORIES:"categories",FURNITURES:"furnitures",ORDERS:"orders",FEEDBACKS:"feedbacks"},W="/Project-CreativeTeam02/assets/1all_products-MNNrO4G5.jpg",K="/Project-CreativeTeam02/assets/7kitchens-B1U2sumV.jpg",J="/Project-CreativeTeam02/assets/10furniture_hallway-SzlnEjvC.jpg",X="/Project-CreativeTeam02/assets/12garden_furnitures-BsCHdeVT.jpg",Y="/Project-CreativeTeam02/assets/5tables-DczJP-_Y.jpg",Q="/Project-CreativeTeam02/assets/2sofas-CtxhA9kI.jpg",Z="/Project-CreativeTeam02/assets/8child_furniture-DHKm76Ju.jpg",ee="/Project-CreativeTeam02/assets/13accessoires-BnjU54Dx.jpg",te="/Project-CreativeTeam02/assets/11furniture_washrooms-tNgqFRxh.jpg",se="/Project-CreativeTeam02/assets/9office_furnitures-BLI04jhG.jpg",re="/Project-CreativeTeam02/assets/3wardrobe-BspX3wmj.jpg",ae="/Project-CreativeTeam02/assets/4beds-D6hwExXz.jpg",oe="/Project-CreativeTeam02/assets/6chairs-3pofB28T.jpg",r={categoryList:document.querySelector(".furniture-categories-list"),furnitureList:document.querySelector(".furniture-list"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".button-load-more-furnitures"),feedbackSwiper:document.querySelector(".feedback-swiper"),modalBackdrop:document.querySelector(".modal-furniture-backdrop"),modalGallery:document.querySelector(".modal-furniture-gallery"),modalInfo:document.querySelector(".modal-furniture-info"),makeOrderButton:document.querySelector(".modal-furniture-btn"),orderModal:document.querySelector(".backdrop"),orderModalForm:document.querySelector(".modal-form")};var q;r.feedbackWrapper=(q=r.feedbackSwiper)==null?void 0:q.querySelector(".swiper-wrapper");const E={all:W,"66504a50a1b2c3d4e5f6a7bd":K,"66504a50a1b2c3d4e5f6a7c0":J,"66504a50a1b2c3d4e5f6a7c2":X,"66504a50a1b2c3d4e5f6a7bb":Y,"66504a50a1b2c3d4e5f6a7b8":Q,"66504a50a1b2c3d4e5f6a7be":Z,"66504a50a1b2c3d4e5f6a7c3":ee,"66504a50a1b2c3d4e5f6a7c1":te,"66504a50a1b2c3d4e5f6a7bf":se,"66504a50a1b2c3d4e5f6a7b9":re,"66504a50a1b2c3d4e5f6a7ba":ae,"66504a50a1b2c3d4e5f6a7bc":oe},M=document.querySelector('[for="modal-order-name"]'),C=document.querySelector('[name="user-name"]'),$=document.querySelector(".name-required-message"),j=document.querySelector('[name="modal-order-tel"]'),T=document.querySelector('[for="modal-order-tel"]'),B=document.querySelector(".tel-required-message"),ne=()=>{const e=document.querySelector(".furniture-categories-list-item");e&&e.classList.add("current-category")};function h(){r.orderModal.classList.remove("fade-in"),r.orderModal.classList.add("fade-out"),document.body.classList.remove("no-scroll"),setTimeout(()=>{r.orderModal.classList.remove("is-open"),r.orderModal.classList.remove("fade-out"),document.body.style.overflow=""},300)}const ce=document.querySelector(".modal-close-btn");ce.addEventListener("click",h);r.orderModal.addEventListener("click",e=>{e.target.classList.contains("backdrop")&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});const ie=async e=>{e.preventDefault();const t=e.target.elements["user-name"].value.trim(),s=e.target.elements["modal-order-tel"].value.trim();let n=!1;t.length===0?(M.classList.add("error-label"),C.classList.add("error-input"),$.classList.remove("visually-hidden"),n=!0):(M.classList.remove("error-label"),C.classList.remove("error-input"),$.classList.add("visually-hidden")),s.length===0?(T.classList.add("error-label"),j.classList.add("error-input"),B.classList.remove("visually-hidden"),n=!0):(T.classList.remove("error-label"),j.classList.remove("error-input"),B.classList.add("visually-hidden")),!n&&(h(),r.orderModalForm.reset(),I.success({message:"Your order successfully created",position:"topRight",timeout:4e3,progressBar:!0,close:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut",backgroundColor:"#4CAF50",messageColor:"#fff"}))};m.defaults.baseURL=P;let F=1;const le=()=>F+=1,x=()=>F,de=async()=>{const{data:e}=await m(`${b.CATEGORIES}`);return e},L=async(e=1,t=null)=>{const{data:s}=await m(`${b.FURNITURES}`,{params:{limit:A,page:e,category:t}});return console.log(s),s};async function ue(e){try{return(await m(`${b.FURNITURES}/${e}`)).data}catch{}}r.loader.classList.add("visually-hidden");const me=e=>{const t=e.map(s=>typeof s=="string"?`
          <li class="furniture-categories-list-item" style="background-image: url('${E.all}')">
            <span class="category-name">${s}</span>
          </li>
        `:`
        <li class="furniture-categories-list-item" style="background-image: url('${E[s._id]}')" data-id="${s._id}">
          <p class="category-name">${s.name}</p>
        </li>
      `).join("");r.categoryList.innerHTML=t},k=e=>e.furnitures.map(t=>{const s=t.images[0],a=t.color.map(o=>`
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
      `}).join(""),fe=e=>{if(!r.furnitureList)return;const t=k({furnitures:e});r.furnitureList.insertAdjacentHTML("beforeend",t)},S=()=>{r.loader.classList.remove("visually-hidden")},v=()=>{r.loader.classList.add("visually-hidden")},O=()=>{r.loadButton.classList.remove("visually-hidden")};function pe(){const e=document.querySelector(".accordion-container");e&&new U(e,{duration:300,showMultiple:!1})}const ge=e=>{const t=`<div class="modal-furniture-gallery-main-container">
      <img src="${e.images[0]}" alt="${e.name}" class="modal-furniture-gallery-main-image" />
    </div>
    <div class="modal-furniture-gallery-thumbs">
      ${e.images.slice(1).map(i=>`
          <div class="modal-furniture-thumb-wrap">
            <img src="${i}" alt="${e.name}" class="modal-furniture-thumb" />
          </div>
        `).join("")}
    </div>
  `;r.modalGallery.innerHTML=t;const s=e.color.map((i,p)=>`
        <label class="modal-furniture-color ">
          <input class="modal-furniture-color-input" type="radio" name="color-${e._id}" value="${i}" style="accent-color: ${i}" ${p===0?"checked":""} />
          <span style="background-color: ${i}"></span>
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
`;r.modalInfo.innerHTML=n;const a=document.querySelector("#container-rating-id"),o=ve(e.rate);a.innerHTML="",ye(a,o)},ye=(e,t)=>{const s=Math.floor(t),n=t%1===.5;if([...Array(s)].map(()=>{const o=document.createElement("span");o.className="star-rating__star",o.innerHTML="★",e.appendChild(o)}),n){const o=document.createElement("span");o.className="star-rating__star is-half",o.innerHTML="★",e.appendChild(o)}const a=5-s-(n?1:0);[...Array(a)].map(()=>{const o=document.createElement("span");o.className="star-rating__star is-empty",o.innerHTML="☆",e.appendChild(o)})},ve=e=>{const t=Math.floor(e),s=e-t;return s>=.3&&s<=.7?t+.5:s>=.8?Math.min(t+1,5):t};function be(){r.modalBackdrop.classList.remove("is-hidden"),r.modalBackdrop.classList.add("fade-in"),document.body.style.overflow="hidden"}function y(){r.modalBackdrop.classList.remove("fade-in"),r.modalBackdrop.classList.add("fade-out"),setTimeout(()=>{r.modalBackdrop.classList.add("is-hidden"),r.modalBackdrop.classList.remove("fade-out"),document.body.style.overflow=""},300)}function he(){const e=r.modalBackdrop.querySelector(".modal-furniture-close-btn"),t=r.modalBackdrop.querySelector(".modal-open-order-btn");e.addEventListener("click",y),r.modalBackdrop.addEventListener("click",s=>{s.target.classList.contains("modal-furniture-backdrop")&&y()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&y()}),t.addEventListener("click",()=>{y(),setTimeout(()=>{r.orderModal.classList.add("fade-in"),r.orderModal.classList.add("is-open"),document.body.classList.add("no-scroll")},300)})}const Le=async()=>{S();try{const e=await de();me(["Всі товари",...e]),ne()}catch(e){console.log(e)}v()},ke=async()=>{S();try{const e=await L(x()),t=k(e);r.furnitureList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}v(),O()},Se=async e=>{const t=await ue(e);ge(t),be(),he()};m.defaults.baseURL=P;const we=function(e){const t=Math.floor(e);let s=(e.toString()+"0").split(".")[1];return!s||(s=parseInt(s.slice(0,2),10),s<30)?"value-"+t:s>70?"value-"+(t+1):"value-"+t+" half"},Ee=function(e){r.feedbackWrapper.innerHTML=e.map(t=>`<div class="swiper-slide">
        <div class="rating ${we(t.rate)} color-default">
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
        </div>`).join(""),new z(r.feedbackSwiper,{modules:[G,V],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},slidesPerView:1,spaceBetween:0,dynamicBullets:!1,breakpoints:{769:{slidesPerView:2},1440:{slidesPerView:3}}})},Me=async()=>{const{data:e}=await m(`${b.FEEDBACKS}`,{params:{limit:10}});return e};let _=null;Le();ke();r.loadButton.addEventListener("click",async()=>{const e=x()+1;try{S();const s=await L(e,_),n=s.totalItems,a=Math.ceil(n/A);if(e>a)return r.loadButton.classList.add("visually-hidden"),v(),I.error({position:"topRight",message:"Sorry there are no more products"});le(),fe(s.furnitures),v()}catch(s){console.error(s)}const t=document.querySelector(".furniture-categories-list-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*6.5,behavior:"smooth"})}});const Ce=async e=>{const t=e.target.closest(".furniture-categories-list-item");if(!t)return;document.querySelectorAll(".furniture-categories-list-item").forEach(a=>a.classList.remove("current-category")),t.classList.add("current-category");const s=e.target.closest("[data-id]");let n=null;s&&(n=s.dataset.id),_=n;try{const a=await L(1,n);r.furnitureList.innerHTML="";const o=k(a);r.furnitureList.insertAdjacentHTML("beforeend",o),O()}catch(a){console.log(a)}};r.categoryList.addEventListener("click",Ce);pe();const $e=async()=>{const e=await Me();Ee(e.feedbacks)};$e();const je=r.furnitureList;je.addEventListener("click",e=>{if(e.target.classList.contains("button-furnitures-detail")){const t=e.target.closest(".product-card");if(t){r.modalGallery.innerHTML="",r.modalInfo.innerHTML="";const s=t.dataset.id;Se(s)}}});r.orderModalForm.addEventListener("submit",ie);
//# sourceMappingURL=index.js.map
