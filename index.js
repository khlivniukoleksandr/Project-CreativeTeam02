import{i as q,a as m,A as F,S as U,N as K,P as O}from"./assets/vendor-B8rI0ALB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu");if(!e||!t)return;const s="icon-menu",c="icon-close",r=t.querySelector("use"),o=()=>{if(!r)return null;const n=r.getAttribute("href")||r.getAttribute("xlink:href");return n&&n.split("#")[0]||null},i=n=>{const l=o();!l||!r||(r.setAttribute("href",`${l}#${n}`),r.setAttribute("xlink:href",`${l}#${n}`))},p=n=>{const l=document.getElementById("header");[...document.body.children].forEach(f=>{f===l||f===e||f.setAttribute("aria-hidden",n?"true":"false")})},j=n=>{const f=window.innerWidth>document.documentElement.clientWidth?window.innerWidth-document.documentElement.clientWidth:0;document.documentElement.style.setProperty("--scrollbar-comp",n?`${f}px`:"0px")};let d=null,u=null;const z=()=>{u||(u=n=>{!e.contains(n.target)&&!t.contains(n.target)&&g()},document.addEventListener("click",u)),d||(d=n=>{n.key==="Escape"&&g()},document.addEventListener("keydown",d))},G=()=>{d&&document.removeEventListener("keydown",d),u&&document.removeEventListener("click",u),d=null,u=null},D=()=>{e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Закрити мобільне меню"),p(!0),e.setAttribute("aria-hidden","false"),document.body.classList.add("no-scroll"),j(!0),i(c);const n=["a[href]","button:not([disabled])",'[tabindex]:not([tabindex="-1"])',"input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].join(","),l=e.querySelector(n);setTimeout(()=>(l||e).focus(),0),z()},g=()=>{e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Відкрити мобільне меню"),p(!1),e.setAttribute("aria-hidden","true"),document.body.classList.remove("no-scroll"),j(!1),i(s),G(),t.focus()},Q=()=>{e.classList.contains("is-open")?g():D()};t.addEventListener("click",Q),e.addEventListener("click",n=>{n.target.closest(".js-close-menu")&&g()})})();const N="https://furniture-store-v2.b.goit.study/api",R=8,v={CATEGORIES:"categories",FURNITURES:"furnitures",ORDERS:"orders",FEEDBACKS:"feedbacks"},X="/Project-CreativeTeam02/assets/1all_products-MNNrO4G5.jpg",Z="/Project-CreativeTeam02/assets/7kitchens-B1U2sumV.jpg",V="/Project-CreativeTeam02/assets/10furniture_hallway-SzlnEjvC.jpg",J="/Project-CreativeTeam02/assets/12garden_furnitures-BsCHdeVT.jpg",$="/Project-CreativeTeam02/assets/5tables-DczJP-_Y.jpg",_="/Project-CreativeTeam02/assets/2sofas-CtxhA9kI.jpg",ee="/Project-CreativeTeam02/assets/8child_furniture-DHKm76Ju.jpg",te="/Project-CreativeTeam02/assets/13accessoires-BnjU54Dx.jpg",se="/Project-CreativeTeam02/assets/11furniture_washrooms-tNgqFRxh.jpg",ae="/Project-CreativeTeam02/assets/9office_furnitures-BLI04jhG.jpg",re="/Project-CreativeTeam02/assets/3wardrobe-BspX3wmj.jpg",oe="/Project-CreativeTeam02/assets/4beds-D6hwExXz.jpg",ce="/Project-CreativeTeam02/assets/6chairs-3pofB28T.jpg",ne="/Project-CreativeTeam02/assets/1all_products-IJo9wZXL.webp",ie="/Project-CreativeTeam02/assets/7kitchens-CeS_yn3e.webp",le="/Project-CreativeTeam02/assets/10furniture_hallway-D_GtCrG3.webp",de="/Project-CreativeTeam02/assets/12garden_furnitures-qvjphB-W.webp",ue="/Project-CreativeTeam02/assets/5tables-C0AqYd77.webp",me="/Project-CreativeTeam02/assets/2sofas-DoKmrXsx.webp",fe="/Project-CreativeTeam02/assets/8child_furniture-DoCX6RNt.webp",pe="/Project-CreativeTeam02/assets/13accessoires-QPrGQqRZ.webp",ge="/Project-CreativeTeam02/assets/11furniture_washrooms-DAGK_g8J.webp",be="/Project-CreativeTeam02/assets/9office_furnitures-BGFGuU-c.webp",ye="data:image/webp;base64,UklGRgwNAABXRUJQVlA4IAANAAAwWwCdASpMAfQAPm02lkgkIyKlpvI5aLANiWluBdq6/gWP35/wIvgH5+vlyhcselTyF1n+Q9Mi841+YLY/StoZlyuwPsZn+t0hyDjKn/U8IYMqemYktJ0inV/TA0ZTTyXYl32pxxq/5/0P1e+VCMkwvHjvNYRYkFfz18JyklU0c2b7yFcV6cTHaBfSiIwm4MYBydNfZCOI2yGtT/Qsf39eVMfVxBTPoVEEqUQPvMOIj+KJ3/zIQNuYhg4qFc+XShXHEheZQegECzrN2LuQ7wx2Z2TtASTsoAfFgZtYw7X8T8SoQrgtEU/i7RlJADgzKjJO270lXcQiGiVLVxtYKGYaIborbEK9GT+aBGSW5vYKBgVlPbbx5w1E5HSEk+HbCZiwlViGdXYM3JxXQKFxP8uTtyLGcPpgatGUb+dt1uUw5j1HWQ5BWc/NKtljr1gB+ghYtS25bkQQEt7tfW6OqKU4PmmJ2of4X1M+uU8yQgEK7/nBSy1uuOxbqTSZ+cvBZG768HWetYhmPWzBfUryv3r3/BbT9T8h2zwdQ3Vj8LLeu0RcGtYbQIpc8QDhGDrfNAUqs9twT5XPLvBtyIh3e5TjOSMz4z5/b6UDwydsSiKrYF8leFLZEUVtE/8ASNGvvw/7woNl/vSaMDWHBmM9Z4RIuL0n5d+QWKrj+JnPRa+T8YfZ0jLeNoOEA7ROx4wB2GSKNswei34DUnJSDHtTfZrMtur2lmXVk5j4QklTN5pn7wE0TTpR9ZoSNCWzvngxfhcQi7QdBa+nirbfTnCDsc8MBMyRvVOcZrOPlUT7Ecfc6LPxtWSF+BuuYsHoLqolF4ZS1WRzTFwBJa2hBWML0aZFeX9RrZFBHWKm2UVCzl3o8yvv6ApFA5S0skxipdsnq1WzDVhnIy592bkena9q02CphV1aMMWvkfreAVXIP26jzx6eua0lF4QYIdcvY7ab4pFxYA2+qstDx2Ph8EeI1X34pQAA/vZ/0LAL871KCRMBwhY9/g13hwysNfXOE5uuqkKNs64kHP9ZR1iL4BHoGHXfiNOEJcLcPr+C1YD6N5HZfscJyS5KwAARNUeZ/iniCBsihz2TeYOJZ1qlF6in5DsNrq9tNUM7DRtQ5QzhPgz6X6vWije1WyMzOoEobeU66DGNQgB5lP9bBa+RqDN/oj2vRrCrKDOlXNdz0JQIgg6ckSWI0T1EJR5FiDHawkd3HiqCpUcPe2Fm+ftUPcg+SulLrvIgsYaZ4dg1UIaB5F3SJ2e4+I6TOOQ814wZSSXM2DDtPpQNy4tkZSoBg9xk5Fct3dnEoza1MmKBHs3yi0m7Zafc3j01nxyWyR7Lwo8hBGcbG0wrG9m5DMn5PCxbW0xsP06Re1OyFjxy5M7zhdenm+TKbuOwv5/NoRXQ/RKdApdg/LZvVaBx26ay3KUxtsuFj/wiMzGWLFnQmwQlyCMJY9+cqJm16SNekKr2vsucM209JFOEKxYULJVyq4AANOQClM21K4s+4Lho3JNIkyhn8TECvdRcC8WFOEdkdCHA3+nFLav36bhUPS+Z2nv0Tm4g8NQ+HNcKXbjR6BSuTHvtV5DMQct/TPAIZ1NqWsmRnMhHuw1hKa/KNgNwN7YI1teD4CYeauGm5rQXGBdWfE5s2NsPFFWRaC2s9o7cEuTB1BE4pRNCNgu2z6pJfpEoSObcCrvwmnCuAzyQFFosyyH9pGOIvSbSSYsXDgBPc4Oaa5JXOGcL40EViQBZXhdyyvUg8govn226vMG8NOUAEPZX9ztvR+nawc5l/nmsyAUjx8xF608+t9q3ofajQT9duuqc32HANLmMUaQM8djcyES89Ee8gGrhB+2tZ7Xo/GGnQQfQZIMw4KG7qIz2URNq4iBcaFtyMcgQOlqi8yHEHv/RvOtSAOBjQgtE5dkB9uQdI/3Nqs7LITRH9ExcEpdaQKUW8gF/pvtkA8N9ABsQg3u1yQZCSROwrHkRH0hIxYUukJeSrTIATqiPPPo1b3RIyf9y7TAye0E42e5+dvnR8KWW5ABYzvo73E2AxSEAXKz3UUJwjpYB2jKYxYKTeaDk2Td3LEKHDuZPfmB+//5JZJt9uPVX+ARAXWsA0uXHiXICHEk1hfB5GbPFXBuxNQt/mAoL2pqhCi83htlUk23syHDmETPcEYoJnlP9nghIpyyq/XAEE2wVkiB1Im7EEIL85hnhIO6s1RlnxsZ8ANmC6tT1ehZc7CW7HDbCmJ/1Q4ReyNoWyQ4zgTAdLxvUhe9tGAB5My4KhYDljcr7lRIGop2zOSXR/xgOH29NABX65CG9LJOkmZ9zY5Qd1HAySrAYXh1flM0lCMCbfluXuhlfwlYd7mkYmsS4Z74K+h24BBid2jfdtmsxEB7qMDJZloiXE+Nw0NfceEmvqtOqbqw8HjftW0wy9oG1l8NKAcroXwmncu+EfvTcBtGFiZamSpn19bHsOVCAXvCzY+a8lEbhNjkuwfQLa8h+yvKK89uiqPQmQ17D/6XSZza8bTMuw36ERacG6zY4M/LzsBz14SsWuNraY7R8kPbasyRghlkrbpMknLBsSLUBtx/8MsBhYLB7K+4he0MavGz5gtPt3jwtBTWmwJu5iX819RCPgHMvh3cO8yxePH79b2zaA5MGr9+K+I8fU7mt1XOtEdNZbOadcEmvHXpx2N5YSggvGs27434j4yacYpZPfHx8u3SKwgz6YfBxro+z48Yuf5GQzfVETi2ZPVVco8IyJs2I0GkPb8K1YxHSvGfmUdBkXmBAxE9eypGg9UmAaAUQRUR/7ZXlKe0g4sTdh5vXwA0CQ1N1IR6OFyiKz37Rij/zn1ZauMOuTsjCwv1el6WmCHa4rB3lQnrIRUcytYLS0PzkDm7VYAddl4sG/CHc6qDqzzv0hhxWQYwwgXatLPH5Hbwmhwry3UxtF/PSCS3hRPNwtZksxhycyDHxNKBGkIGsy62Fc6EzuY3yIuZ+9Kc7sdbxzeb2oS/tcTIzgAqyvC2/wPczJ2UxDXi6jXRClFxJxGRUHu7tRrg0p7pIx2oJntebwg/1RLnF+TwXtVkJY7+DItODSdq9q/8YmbuH5FOpjwnhNa/b8+WV+7jnST0q7+ZKk1TxT5h7d2NZ4k0eyUTjy4uBTlUaNJNPwUTUvmk48R6Y/EEbC9sW+WYrFuRIB90RH+5EzZ8z08ZW12RKldGyYMUe0ts3WeUDE4k6WlVyJqaB3dvIKj8AEP8PVZhdXEnh7uPT+vLVXRVOea9C63CAqDaLZalVQbG2hK5bbRhvRlSExzgaiLm3Zv8pwBqDgjgKY6cXbWgSN3IcegjFDlQ0tIZmwICxE39VGhyIWkxQL8uJace4yqe9YpgRSJmRRqNc5SJ31fpIoMaNwuMtk+nlVeuCbxcpwXm9czOIipR9Eyg0HgQCLsTd4hkva04DmqeG9MVtTKTeDPARMYvEcqzFYyH5G8v9IMJtTiVYjd8ZB6Xcp9DcN+16ZIVKZ4zMQwamYk3lr0iFmLVgQa/l7nFztGPOneSOdrxGgNUSAz3a/Wwh4kaG1tDYCF1o7yihEp04XrOHVmXoyJ2+9Vpi6rSpQseudU8u/g+IkJkERS099d+7lQLE7kgjmSIdPqYBxZyg1f5nHEBJ58q/RHC5eWkiglr0skml5CoON8kX8HkEue3eTuOGX4mjTZAEuBAYjQ0ML9FCEfB7uV2gyc149XDG8S0bpkhuS98XNrtj+SkqPQimq2/fhVl1KddDvJHfYftzxxIUMFBKKh8j7DeA0iDtwhp3S/fHE1NfUr8kMj+i3Lf5WxGPkkE0qsUhcNL+nQRhyAsJiz168Dr1/LVNQfyDwWAqW17PyTtQP1cXdez+kYrjnIN1EoWhWPfXTGIXYE4uumLzklP5YfP0A0k2/nv07dDUtybFL+12nj64Ay9JwKegm2BO6pvwzCpm0T2uTwwYzT+KDq0+9ztjGTBa1CaAaw+/uRYM69KdLgJMSUfYXVPqXEGCASG84IWa5BGk0xj8agAvLmIzKDStH3ziQkNeaAkn0ELfgog9Eb+hS8qxPPnVJDgTfKLu8dOcpKHayaYqH+zQmhlZX1mwgDrzLGGUaG18wwfGFS8gphnXo3F+M97m5At3JIGgbz1GH+JYbcATlcj4V0rrP0ALjFwK/s8vDaM4dcaWuUpdlbvq7YlHrWmutnrKbd5j9X7Y1jLWIUI2Yg7Ay1YSWMejCoT+IW5yLh89TwQxjnyHbD2pturOhqmSl+f6Yk09SltCQYks4EEnK8GK7vk2NzkzboHQABzx15LjhU+48a623Apjg94FMH50tLq4TgbgDWSVUZcyc9cGJzbQPYpTjaUsnUAztl0ecoEke51Um81cZZDIK/3+c0VZRACzY47SeAbjrZKswQkm/3pFVwADTunrcLpcZzTPhymRc7ZH3pPXLqDfcCHtzdM47XwMAAAA",ve="/Project-CreativeTeam02/assets/4beds-KoVDyFms.webp",he="/Project-CreativeTeam02/assets/6chairs-DuGOMOEK.webp",a={categoryList:document.querySelector(".furniture-categories-list"),furnitureList:document.querySelector(".furniture-list"),loader:document.querySelector(".loader"),loadButton:document.querySelector(".button-load-more-furnitures"),feedbackSwiper:document.querySelector(".feedback-swiper"),modalBackdrop:document.querySelector(".modal-furniture-backdrop"),modalGallery:document.querySelector(".modal-furniture-gallery"),modalInfo:document.querySelector(".modal-furniture-info"),makeOrderButton:document.querySelector(".modal-furniture-btn"),orderModal:document.querySelector(".backdrop"),orderModalForm:document.querySelector(".modal-form")};var I;a.feedbackWrapper=(I=a.feedbackSwiper)==null?void 0:I.querySelector(".swiper-wrapper");const P={all:X,"66504a50a1b2c3d4e5f6a7bd":Z,"66504a50a1b2c3d4e5f6a7c0":V,"66504a50a1b2c3d4e5f6a7c2":J,"66504a50a1b2c3d4e5f6a7bb":$,"66504a50a1b2c3d4e5f6a7b8":_,"66504a50a1b2c3d4e5f6a7be":ee,"66504a50a1b2c3d4e5f6a7c3":te,"66504a50a1b2c3d4e5f6a7c1":se,"66504a50a1b2c3d4e5f6a7bf":ae,"66504a50a1b2c3d4e5f6a7b9":re,"66504a50a1b2c3d4e5f6a7ba":oe,"66504a50a1b2c3d4e5f6a7bc":ce},M={allWebp:ne,"66504a50a1b2c3d4e5f6a7bd":ie,"66504a50a1b2c3d4e5f6a7c0":le,"66504a50a1b2c3d4e5f6a7c2":de,"66504a50a1b2c3d4e5f6a7bb":ue,"66504a50a1b2c3d4e5f6a7b8":me,"66504a50a1b2c3d4e5f6a7be":fe,"66504a50a1b2c3d4e5f6a7c3":pe,"66504a50a1b2c3d4e5f6a7c1":ge,"66504a50a1b2c3d4e5f6a7bf":be,"66504a50a1b2c3d4e5f6a7b9":ye,"66504a50a1b2c3d4e5f6a7ba":ve,"66504a50a1b2c3d4e5f6a7bc":he},L=document.querySelector('[for="modal-order-name"]'),w=document.querySelector('[name="user-name"]'),k=document.querySelector(".name-required-message"),E=document.querySelector('[name="modal-order-tel"]'),S=document.querySelector('[for="modal-order-tel"]'),T=document.querySelector(".tel-required-message"),Le=()=>{const e=document.querySelector(".furniture-categories-list-item");e&&e.classList.add("current-category")};function h(){a.orderModal.classList.remove("fade-in"),a.orderModal.classList.add("fade-out"),document.body.classList.remove("no-scroll"),L.classList.remove("error-label"),w.classList.remove("error-input"),k.classList.add("visually-hidden"),S.classList.remove("error-label"),E.classList.remove("error-input"),T.classList.add("visually-hidden"),setTimeout(()=>{a.orderModal.classList.remove("is-open"),a.orderModal.classList.remove("fade-out"),document.body.style.overflow=""},300)}const we=document.querySelector(".modal-close-btn");we.addEventListener("click",h);a.orderModal.addEventListener("click",e=>{e.target.classList.contains("backdrop")&&h()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h()});const ke=async e=>{e.preventDefault();const t=e.target.elements["user-name"].value.trim(),s=e.target.elements["modal-order-tel"].value.trim();let c=!1;t.length===0?(L.classList.add("error-label"),w.classList.add("error-input"),k.classList.remove("visually-hidden"),c=!0):(L.classList.remove("error-label"),w.classList.remove("error-input"),k.classList.add("visually-hidden")),s.length===0?(S.classList.add("error-label"),E.classList.add("error-input"),T.classList.remove("visually-hidden"),c=!0):(S.classList.remove("error-label"),E.classList.remove("error-input"),T.classList.add("visually-hidden")),!c&&(h(),a.orderModalForm.reset(),q.success({message:"Your order successfully created",position:"topRight",timeout:4e3,progressBar:!0,close:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut",backgroundColor:"#4CAF50",messageColor:"#fff"}))};m.defaults.baseURL=N;let Y=1;const Ee=()=>Y+=1,H=()=>Y,Se=async()=>{const{data:e}=await m(`${v.CATEGORIES}`);return e},A=async(e=1,t=null)=>{const{data:s}=await m(`${v.FURNITURES}`,{params:{limit:R,page:e,category:t}});return s};async function Te(e){try{return(await m(`${v.FURNITURES}/${e}`)).data}catch{}}a.loader.classList.add("visually-hidden");const Ae=e=>{const t=e.map(s=>{if(typeof s=="string"){const o=P.all;return`
          <li class="furniture-categories-list-item"
      style="background-image: image-set(
        url('${M.allWebp}') type('image/webp'),
        url('${o}') type('image/jpeg')
      );">
    <span class="category-name">${s}</span>
  </li>
        `}const c=P[s._id];return`
  <li class="furniture-categories-list-item"
      style="background-image: image-set(
        url('${M[s._id]}') type('image/webp'),
        url('${c}') type('image/jpeg')
      );"
      data-id="${s._id}">
    <p class="category-name">${s.name}</p>
  </li>
`}).join("");a.categoryList.innerHTML=t},C=e=>e.furnitures.map(t=>{const s=t.images[0],r=t.color.map(o=>`
          <label class="color-checkbox" style="--color: ${o}">
            <input type="radio" name="color-${t._id}" value="${o}" style="accent-color: ${o}" />
            <span class="color-box"></span>
          </label>
        `).join("");return`
        <li class="product-card" data-id="${t._id}">
          <div class="image-wrap"><img src="${s}" alt="${t.name}" class="furniture-card-img" loading="lazy" decoding="async"/>
          <p class="furniture-name">${t.name}</p>
          <div class="color-options">${r}</div>
          <p class="furniture-price">${t.price} грн</p>
          <button type="button" class="button button-furnitures-detail">Детальніше</button>
        </li>
      `}).join(""),Ce=e=>{if(!a.furnitureList)return;const t=C({furnitures:e});a.furnitureList.insertAdjacentHTML("beforeend",t)},B=()=>{a.loader.classList.remove("visually-hidden")},y=()=>{a.loader.classList.add("visually-hidden")},x=()=>{a.loadButton.classList.remove("visually-hidden")};function Be(){const e=document.querySelector(".accordion-container");e&&new F(e,{duration:300,showMultiple:!1})}const je=e=>{const t=`<div class="modal-furniture-gallery-main-container">
      <img src="${e.images[0]}" alt="${e.name}" class="modal-furniture-gallery-main-image" />
    </div>
    <div class="modal-furniture-gallery-thumbs">
      ${e.images.slice(1).map(i=>`
          <div class="modal-furniture-thumb-wrap">
            <img src="${i}" alt="${e.name}" class="modal-furniture-thumb" />
          </div>
        `).join("")}
    </div>
  `;a.modalGallery.innerHTML=t;const s=e.color.map((i,p)=>`
        <label class="modal-furniture-color ">
          <input class="modal-furniture-color-input" type="radio" name="color-${e._id}" value="${i}" style="accent-color: ${i}" ${p===0?"checked":""} />
          <span style="background-color: ${i}"></span>
        </label>
  `).join(""),c=`
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
`;a.modalInfo.innerHTML=c;const r=document.querySelector("#container-rating-id"),o=Me(e.rate);r.innerHTML="",Pe(r,o)},Pe=(e,t)=>{const s=Math.floor(t),c=t%1===.5;if([...Array(s)].map(()=>{const o=document.createElement("span");o.className="star-rating__star",o.innerHTML="★",e.appendChild(o)}),c){const o=document.createElement("span");o.className="star-rating__star is-half",o.innerHTML="★",e.appendChild(o)}const r=5-s-(c?1:0);[...Array(r)].map(()=>{const o=document.createElement("span");o.className="star-rating__star is-empty",o.innerHTML="☆",e.appendChild(o)})},Me=e=>{const t=Math.floor(e),s=e-t;return s>=.3&&s<=.7?t+.5:s>=.8?Math.min(t+1,5):t};function Ie(){a.modalBackdrop.classList.remove("is-hidden"),a.modalBackdrop.classList.add("fade-in"),document.body.style.overflow="hidden"}function b(){a.modalBackdrop.classList.remove("fade-in"),a.modalBackdrop.classList.add("fade-out"),setTimeout(()=>{a.modalBackdrop.classList.add("is-hidden"),a.modalBackdrop.classList.remove("fade-out"),document.body.style.overflow=""},300)}function qe(){const e=a.modalBackdrop.querySelector(".modal-furniture-close-btn"),t=a.modalBackdrop.querySelector(".modal-open-order-btn");e.addEventListener("click",b),a.modalBackdrop.addEventListener("click",s=>{s.target.classList.contains("modal-furniture-backdrop")&&b()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&b()}),t.addEventListener("click",()=>{b(),setTimeout(()=>{a.orderModal.classList.add("fade-in"),a.orderModal.classList.add("is-open"),document.body.classList.add("no-scroll")},300)})}const Ne=async()=>{B();try{const e=await Se();Ae(["Всі товари",...e]),Le()}catch(e){console.log(e)}y()},Re=async()=>{B();try{const e=await A(H()),t=C(e);a.furnitureList.insertAdjacentHTML("beforeend",t)}catch(e){console.log(e)}y(),x()},Ye=async e=>{const t=await Te(e);je(t),Ie(),qe()};m.defaults.baseURL=N;const He=function(e){const t=Math.floor(e);let s=(e.toString()+"0").split(".")[1];return!s||(s=parseInt(s.slice(0,2),10),s<30)?"value-"+t:s>70?"value-"+(t+1):"value-"+t+" half"},xe=function(e){a.feedbackWrapper.innerHTML=e.map(t=>`<div class="swiper-slide">
        <div class="rating ${He(t.rate)} color-default">
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
        </div>`).join(""),new U(a.feedbackSwiper,{modules:[K,O],pagination:{el:".swiper-pagination",dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",addIcons:!1},slidesPerView:1,spaceBetween:0,dynamicBullets:!1,breakpoints:{769:{slidesPerView:2},1440:{slidesPerView:3}}})},We=async()=>{const{data:e}=await m(`${v.FEEDBACKS}`,{params:{limit:10}});return e};let W=null;Ne();Re();a.loadButton.addEventListener("click",async()=>{const e=H()+1;try{B();const s=await A(e,W),c=s.totalItems,r=Math.ceil(c/R);if(e>r)return a.loadButton.classList.add("visually-hidden"),y(),q.error({position:"topRight",message:"Sorry there are no more products"});Ee(),Ce(s.furnitures),y()}catch(s){console.error(s)}const t=document.querySelector(".furniture-categories-list-item");if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*6.5,behavior:"smooth"})}});const ze=async e=>{const t=e.target.closest(".furniture-categories-list-item");if(!t)return;document.querySelectorAll(".furniture-categories-list-item").forEach(r=>r.classList.remove("current-category")),t.classList.add("current-category");const s=e.target.closest("[data-id]");let c=null;s&&(c=s.dataset.id),W=c;try{const r=await A(1,c);a.furnitureList.innerHTML="";const o=C(r);a.furnitureList.insertAdjacentHTML("beforeend",o),x()}catch(r){console.log(r)}};a.categoryList.addEventListener("click",ze);Be();const Ge=async()=>{const e=await We();xe(e.feedbacks)};Ge();const De=a.furnitureList;De.addEventListener("click",e=>{if(e.target.classList.contains("button-furnitures-detail")){const t=e.target.closest(".product-card");if(t){a.modalGallery.innerHTML="",a.modalInfo.innerHTML="";const s=t.dataset.id;Ye(s)}}});a.orderModalForm.addEventListener("submit",ke);
//# sourceMappingURL=index.js.map
