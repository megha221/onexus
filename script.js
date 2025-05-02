// 1. Simple background carousel
const hero = document.querySelector('.hero');
const images = [
  './h1.avif',
  './h1.avif',
  './h1.avif'
  // ← replace with your actual URLs
];
let idx = 0;

function nextImage() {
  idx = (idx + 1) % images.length;
  hero.style.backgroundImage = `url('${images[idx]}')`;
}

// start
hero.style.backgroundImage = `url('${images[0]}')`;
setInterval(nextImage, 5000); // change every 5s

// 2. Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// 1. map each service to its image URL and description text
document.addEventListener("DOMContentLoaded", () => {
    // 1. map each service to its image URL and description text
    const data = {
      residential: {
        img: "./ar.avif",
        desc:
          "Where Imagination Crashes into Precision — Turning Flat Blueprints Into Living, Breathing Worlds."
      },
      commercial: {
        img: "pla.avif",
        desc:
          " The Ruthless Blueprint Where Innovation Meets Precision Building the Backbone for Architectural Giants."
      },
      interior: {
        img: "int.avif",
        desc:
          "The Relentless Craft of Planning, Designing, and Building — Where Safety, Quality, and Sustainability Aren’t Options, They’re the Standard."
      },
      landscape: {
        img: "cons.avif",
        desc:
          "Where Every Inch of Space, Every Texture, Every Color Is Used as a Weapon to Make You Experience Something You Cannot Explain — Only Feel."
      }
    };
  
    // 2. DOM references
    const tabs   = document.querySelectorAll(".tab");
    const imgEl  = document.getElementById("service-img");
    const descEl = document.getElementById("service-desc");
  
    // 3. Update function
    function updateContent(key, label) {
      imgEl.src = data[key].img;
      imgEl.alt = label;
      descEl.textContent = data[key].desc;
    }
  
    // 4. click handler
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        // 4a. switch active class
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
  
        // 4b. update content
        updateContent(tab.dataset.service, tab.textContent.trim());
      });
    });
  
    // 5. Initial load: show first tab’s content
    const firstTab = tabs[0];
    firstTab.classList.add("active"); 
    updateContent(firstTab.dataset.service, firstTab.textContent.trim());
  });
  

//   carousel
  document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const slides = Array.from(track.children);
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;
  
    // arrange slides next to each other (not strictly needed with flex, but safe)
    const setSlidePositions = () => {
      slideWidth = slides[0].getBoundingClientRect().width;
      slides.forEach((slide, i) => {
        slide.style.left = (slideWidth + 16 /*padding*/ ) * i + "px";
      });
    };
  
    setSlidePositions();
  
    // move to slide at index
    const moveToIndex = (idx) => {
      track.style.transform = `translateX(-${(slideWidth + 16) * idx}px)`;
    };
  
    // auto-advance every 4s
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      moveToIndex(currentIndex);
    }, 4000);
  
    // on resize, recalc widths & keep position
    window.addEventListener("resize", () => {
      setSlidePositions();
      moveToIndex(currentIndex);
    });
  });
  

//   process
document.addEventListener("DOMContentLoaded", () => {
    const data = {
      step1: "./planning-svgrepo-com.svg",
      step2: "./design-svgrepo-com.svg",
      step3: "./development-svgrepo-com.svg"
    };
  
    const tabs   = document.querySelectorAll(".how-tab");
    const imgEl  = document.getElementById("how-img");
    let current  = 0;
    let interval;
  
    function activate(idx) {
      tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === idx);
      });
      const key = tabs[idx].dataset.key;
      imgEl.src = data[key];
      imgEl.alt = tabs[idx].querySelector("h3").textContent;
      current = idx;
    }
  
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        clearInterval(interval);
        activate(i);
        startAuto();
      });
    });
  
    function startAuto() {
      interval = setInterval(() => {
        activate((current + 1) % tabs.length);
      }, 5000);
    }
  
    // init
    activate(0);
    startAuto();
  });
// ss
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".cta-btn");
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
//   partners
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-tracka");
    const slides = Array.from(track.children);
    let slideWidth = slides[0].getBoundingClientRect().width;
    let index = 0;
  
    // position slides (optional if flex handles it)
    const setPositions = () => {
      slideWidth = slides[0].getBoundingClientRect().width;
      slides.forEach((slide, i) => {
        slide.style.left = (slideWidth) * i + "px";
      });
    };
    setPositions();
  
    // move to a specific index
    const moveTo = (i) => {
      track.style.transform = `translateX(-${slideWidth * i}px)`;
    };
  
    // auto-play every 3s
    let interval = setInterval(() => {
      index = (index + 1) % slides.length;
      moveTo(index);
    }, 3000);
  
    // recalc on resize
    window.addEventListener("resize", () => {
      setPositions();
      moveTo(index);
    });
  });
//   conact

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name  = form.name.value.trim();
      const phone = form.phone.value.trim();
  
      if (!name || !phone) {
        alert("Please fill in both your name and phone number.");
        return;
      }
  
      const message = form.message.value.trim();
  
      // Here you’d normally send the data to your server…
      console.log({ name, phone, message });
  
      alert("Thanks! Your messag