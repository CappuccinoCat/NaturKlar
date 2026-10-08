async function loadComponent(name) {
    const container = document.querySelector(`[data-component="${name}"]`);

    if (!container || container.children.length > 0) return;

    const response = await fetch(`components/${name}.html`);
    if (!response.ok) throw new Error(`Kunne ikke indlæse ${name}: ${response.status}`);

    container.innerHTML = await response.text();
}

function initializeNavigation() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".site-header a[href]").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });

    const openButton = document.querySelector("[aria-controls='mobile-menu']");
    const menu = document.querySelector("#mobile-menu");
    const closeButton = menu.querySelector("[data-menu-close]");
    const mobileViewport = window.matchMedia("(max-width: 1100px)");

    function closeMenu() {
        if (menu.open) menu.close();
    }

    openButton.addEventListener("click", () => {
        if (menu.open || !mobileViewport.matches) return;
        menu.showModal();
        openButton.setAttribute("aria-expanded", "true");
        document.body.classList.add("menu-open");
    });

    closeButton.addEventListener("click", closeMenu);

    // Dialogen håndterer Escape, fokus og tastaturafgrænsning i browseren.
    menu.addEventListener("close", () => {
        openButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
        if (mobileViewport.matches) {
            openButton.focus();
        } else {
            document.querySelector(".site-header__inner .brand").focus();
        }
    });

    menu.addEventListener("click", event => {
        const bounds = menu.getBoundingClientRect();
        const outside = event.clientX < bounds.left || event.clientX > bounds.right
            || event.clientY < bounds.top || event.clientY > bounds.bottom;
        if (event.target === menu && outside) closeMenu();
        if (event.target.closest("a")) closeMenu();
    });

    mobileViewport.addEventListener("change", () => {
        if (!mobileViewport.matches) closeMenu();
    });
}

async function initializePage() {
    const results = await Promise.allSettled([loadComponent("header"), loadComponent("footer")]);
    results.forEach(result => {
        if (result.status === "rejected") console.error(result.reason);
    });

    if (results[0].status === "fulfilled" && document.querySelector(".site-header")) {
        initializeNavigation();
    }
}

initializePage();
