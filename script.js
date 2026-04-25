// MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", () => {
    navLinks?.classList.toggle("active");
});


// TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (topBtn) {
        topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    }
});

topBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// HEADER SCROLL EFFECT
const header = document.querySelector("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (header) {
        header.classList.toggle("scrolled", currentScroll > 50);

        if (currentScroll > lastScroll && currentScroll > 150) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }
    }

    lastScroll = currentScroll;
});


// CURSOR LIGHT (SAFE)
const cursorLight = document.querySelector(".cursor-light");

if (cursorLight) {
    document.addEventListener("mousemove", (e) => {
        cursorLight.style.left = e.clientX + "px";
        cursorLight.style.top = e.clientY + "px";
    });
}


// 3D CARDS
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
});


// POPUP GALERİ (FIXED + 100% STABLE)
const popup = document.getElementById("popup");

if (popup) {

    const images = [
        { src: "image/67 (1).jpg", title: "Maç Anı" },
        { src: "image/67 (1).jpg", title: "Smaç" },
        { src: "image/67 (1).jpg", title: "Salon Atmosferi" },
        { src: "image/67 (1).jpg", title: "Blok" },
        { src: "image/67 (1).jpg", title: "Takım Oyunu" },
        { src: "image/67 (1).jpg", title: "Şampiyonluk" }
    ];

    let index = 0;

    const popupImg = document.getElementById("popup-img");
    const popupTitle = document.getElementById("popup-title");

    function showImage() {
        if (!popupImg || !popupTitle) return;
        popupImg.src = images[index].src;
        popupTitle.textContent = images[index].title;
    }

    // 🔥 FIX: dataset yerine direkt index (KESİN ÇALIŞIR)
    document.querySelectorAll(".card img").forEach((img, i) => {
        img.addEventListener("click", () => {

            index = i;

            showImage();

            popup.style.display = "flex";
            document.body.style.overflow = "hidden";
        });
    });

    document.querySelector(".close")?.addEventListener("click", () => {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
    });

    document.querySelector(".next")?.addEventListener("click", () => {
        index = (index + 1) % images.length;
        showImage();
    });

    document.querySelector(".prev")?.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        showImage();
    });
}


// SCROLL PROGRESS BAR (SAFE)
const progressBar = document.getElementById("progressBar");

if (progressBar) {
    window.addEventListener("scroll", () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercent = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercent + "%";
    });
}


// LOAD EFFECT
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});