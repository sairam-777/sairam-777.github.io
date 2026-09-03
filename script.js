// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =====================================================
// ACTIVE NAVIGATION
// =====================================================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {
            item.classList.add("active");
        }

    });

});


// =====================================================
// FOOTER YEAR
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================================
// SIMPLE REVEAL ANIMATION
// =====================================================

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .timeline-item, .stat-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});