document.addEventListener("DOMContentLoaded", () => {

    /*
     * ================================
     * SCROLL REVEAL
     * ================================
     */

    const revealElements = document.querySelectorAll(
        ".about-section, " +
        ".project-title, " +
        ".project-showcase, " +
        ".certificates-heading, " +
        ".certificates-grid, " +
        ".contact-section"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -70px 0px"
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /*
     * ================================
     * SMOOTH NAVBAR ACTIVE LINK
     * ================================
     */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const sectionObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `.nav-links a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },
        {
            threshold: 0.25
        }
    );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });


    /*
     * ================================
     * PROJECT IMAGE MOUSE PARALLAX
     * ================================
     */

    const projectImages = document.querySelectorAll(
        ".project-preview img"
    );

    projectImages.forEach((image) => {

        const container = image.closest(".project-preview");

        if (!container) return;

        container.addEventListener("mousemove", (event) => {

            const rect = container.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            image.style.transform = `
                scale(1.025)
                translate(${x * 8}px, ${y * 8}px)
            `;

        });

        container.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1) translate(0, 0)";
        });

    });


    /*
     * ================================
     * CONTACT CARD MOUSE EFFECT
     * ================================
     */

    const contactCards =
        document.querySelectorAll(".contact-card");

    contactCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            card.style.transform = `
                translateY(-4px)
                rotateX(${y * -2}deg)
                rotateY(${x * 2}deg)
            `;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });

});
