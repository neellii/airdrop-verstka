const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".next-arrow",
  },
});

let slidesPerView;
if (window.matchMedia("(min-width: 1500px)").matches) {
  slidesPerView = 15;
} else if (
  window.matchMedia("(max-width: 1500px)").matches &&
  window.matchMedia("(min-width: 800px)").matches
) {
  slidesPerView = 10;
} else if (
  window.matchMedia("(max-width: 800px)").matches &&
  window.matchMedia("(min-width: 400px)").matches
) {
  slidesPerView = 6;
} else if (
  window.matchMedia("(max-width: 400px)").matches &&
  window.matchMedia("(min-width: 300px)").matches
) {
  slidesPerView = 3;
}

const swiperLogos = new Swiper(".swiper2", {
  loop: true,
  freeMode: true,
  slidesPerView: slidesPerView,
  navigation: {
    nextEl: ".logos-right",
    prevEl: ".logos-left",
  },
});

const hideNewsBtn = document.querySelectorAll(".btn-hide");
const swiperEl = document.querySelector(".swiper1");
const LatestNewsContent = document.querySelector(
  ".swiper1 .swiper-wrapper .swiper-slide:first-child .swiper-content .news-content p"
);

hideNewsBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    hideNews(e);
  });
});

function hideNews(e) {
  if (e.target.getAttribute("data-closed") == "closed") {
    swiper.disable();
    swiperEl.style.height = "92px";
    swiperEl.querySelectorAll(".news-content").forEach((e) => {
      e.style.width = "100%";
      e.style.height = "92px";
    });
    swiperEl.querySelectorAll(".news-text").forEach((e) => {
      e.style.display = "none";
    });
    swiperEl.querySelectorAll(".swiper-img").forEach((e) => {
      e.style.display = "none";
    });
    swiperEl.querySelectorAll(".next-arrow").forEach((e) => {
      e.style.display = "none";
    });
    swiperEl.querySelectorAll(".arrow").forEach((e) => {
      e.style.transform = "rotate(90deg)";
    });
    swiperEl.querySelectorAll(".btn-hide").forEach((e) => {
      e.innerText = "Show";
    });
    swiperEl.querySelectorAll(".show-hide").forEach((e) => {
      e.insertAdjacentHTML(
        "beforeend",
        `<div class="news-line" style="height: 22px; width: 1px; background-color: #f3f3f3; margin-right: 14px"></div><h2 class="news-title" style="font-size: 18px; line-height: 24.3px; font-weight: 500;">AirdropHunter’s NEWS</h2>`
      );
    });

    swiperEl.querySelectorAll(".bottom-swiper").forEach((e) => {
      e.insertAdjacentHTML(
        "beforeend",
        `<div class="news-excerpt" style="overflow:hidden; width: 55%; white-space: nowrap; line-height: 23.4px; color: #999999;">
    ${LatestNewsContent.innerText}</div>`
      );
    });
    swiperEl.querySelectorAll(".btn-hide").forEach((e) => {
      e.setAttribute("data-closed", "opened");
    });
  } else if (e.target.getAttribute("data-closed") == "opened") {
    e.preventDefault();
    swiperEl.style.height = "400px";
    swiperEl.querySelectorAll(".news-content").forEach((e) => {
      e.style.width = "620px";
      e.style.height = "400px";
    });
    swiperEl.querySelectorAll(".news-text").forEach((e) => {
      e.style.display = "block";
    });
    swiperEl.querySelectorAll(".swiper-img").forEach((e) => {
      e.style.display = "block";
    });
    swiperEl.querySelectorAll(".next-arrow").forEach((e) => {
      e.style.display = "block";
    });
    swiperEl.querySelectorAll(".arrow").forEach((e) => {
      e.style.transform = "none";
    });
    swiperEl.querySelectorAll(".btn-hide").forEach((e) => {
      e.innerText = "Hide";
    });
    swiperEl.querySelectorAll(".news-line").forEach((e) => {
      e.remove();
    });
    swiperEl.querySelectorAll(".news-title").forEach((e) => {
      e.remove();
    });
    swiperEl.querySelectorAll(".news-excerpt").forEach((e) => {
      e.remove();
    });
    swiperEl.querySelectorAll(".btn-hide").forEach((e) => {
      e.setAttribute("data-closed", "closed");
    });
    swiper.enable();
  }
}
