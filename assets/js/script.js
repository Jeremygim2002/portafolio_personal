document.addEventListener("DOMContentLoaded", function () {
    // Obtener parámetros de la URL
    const getQueryParam = (param) => new URLSearchParams(window.location.search).get(param);

    
    /** Datos de cada proyecto */
    const projectDetails = {
        depelos: {
            name: "DePelos",
            category: "Desarrollo Full Stack",
            duration: "2 meses",
            technologies: "PHP, JS, HTML, CSS, Bootstrap, MySQL, Figma, Git",
            repository: "https://github.com/Jeremygim2002/Proyecto_DePelos.git",
            description: "Plataforma web para la adopción de mascotas con una base de datos que actualiza disponibilidad en tiempo real. Incluye una interfaz intuitiva y permite la compra de productos para mascotas, generando automáticamente un comprobante de pago simplificado para los usuarios.",
            images: Array.from({ length: 14 }, (_, i) => `depelos_${i + 1}.jpg`)
        },
        tualpaca: {
            name: "TuAlpaca",
            category: "Desarrollo Full Stack",
            duration: "2 meses",
            technologies: "PHP, JS, HTML, CSS, Bootstrap, SQL server, Figma, Git",
            repository: "https://github.com/Jeremygim2002/Proyecto_TuAlpaca.git",
            description: "Tienda en línea para la venta de lana de alpaca y productos derivados. Cuenta con un panel de administración para gestionar stock, usuarios y productos. Los clientes pueden agregar artículos a una barra lateral, ver su selección y generar una boleta de pago, ofreciendo una experiencia de compra fluida y eficiente.",
            images: Array.from({ length: 14 }, (_, i) => `tualpaca_${i + 1}.jpg`)
        },
        blogmental: {
            name: "Blog Mental",
            category: "Desarrollo Front End",
            duration: "1 mes",
            technologies: "Figma, React, CSS, Js, Git, Bootstrap",
            repository: "https://github.com/Jeremygim2002/blog-mental.git",
            link:"https://blog-mental.netlify.app/",
            description: "Blog dedicado a la salud mental con anécdotas de profesionales del sector, frases motivadoras y consejos prácticos para el bienestar emocional. Diseñado para inspirar y apoyar a quienes buscan motivación y orientación en su día a día.",
            images: ["blogmental_1.jpg", "blogmental_2.jpg", "blogmental_3.jpg"]
        },
        catalogopeliculas: {
            name: "Catálogo de Películas",
            category: "Desarrollo Front End",
            duration: "1 mes",
            technologies: "Figma, HTML, CSS, Js, Git, Bootstrap",
            repository: "https://github.com/Jeremygim2002/Proyecto_CatalogoPeliculas.git",
            link:"https://catalogo-peliculas.netlify.app/",
            description: "Aplicación web para buscar películas mediante filtros como novedades, populares, más destacadas y próximos estrenos. También permite buscar por nombre y muestra los resultados en una página dinámica con información detallada.",
            images: ["catalogopeliculas_1.jpg", "catalogopeliculas_2.jpg", "catalogopeliculas_3.jpg", "catalogopeliculas_4.jpg"]
        },
        supertodo: {
            name: "Super Todo",
            category: "Aplicación de escritorio",
            duration: "6 meses",
            technologies: "Sql Lite, C#, Figma, Python, Git",
            repository: "https://github.com/Jeremygim2002/Proyecto_SuperTodo.git",
            description: "Aplicación de escritorio donde los clientes pueden seleccionar productos con imágenes, elegir cantidades y visualizar precios en tiempo real. Los productos se agregan a una lista con actualización dinámica, permitiendo eliminar, aumentar cantidades y aplicar descuentos disponibles.",
            images: ["supertodo_1.jpg", "supertodo_2.jpg", "supertodo_3.jpg", "supertodo_4.jpg"]
        }
    };

    /**  Cargar información del proyecto */
    const projectId = getQueryParam("id");
    if (projectId && projectDetails[projectId]) {
        const project = projectDetails[projectId];

        // Insertar información del proyecto
        document.getElementById("portfolio-info").innerHTML = `
            <li><strong>Nombre:</strong> ${project.name}</li>
            <li><strong>Categoría:</strong> ${project.category}</li>
            <li><strong>Duración:</strong> ${project.duration}</li>
            <li><strong>Tecnologías:</strong> ${project.technologies}</li>
            <li><strong>Repositorio:</strong> <a href="${project.repository}" target="_blank">Ver en GitHub</a></li>
        `;



        // Verificar si existe el campo 'link' y mostrarlo solo si está presente
        if (project.link) {
        document.getElementById("portfolio-info").innerHTML += `
            <li><strong>Link:</strong> <a href="${project.link}" target="_blank">Ver Proyecto</a></li>
        `;
    }

        document.getElementById("portfolio-description").textContent = project.description;

        // Insertar imágenes en Swiper
        document.querySelector(".swiper-wrapper").innerHTML = project.images
            .map(img => `<div class="swiper-slide"><img src="assets/img/portfolio/${img}" alt=""></div>`)
            .join("");

        // 🔹 Agregar botones de navegación si no existen
        const swiperContainer = document.querySelector(".portfolio-details-slider");
        if (!document.querySelector(".swiper-button-next")) {
            swiperContainer.insertAdjacentHTML("beforeend", `
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            `);
        }

        // Inicializar Swiper después de insertar imágenes y botones
        setTimeout(() => {
            new Swiper(".swiper", {
                loop: true,
                speed: 600,
                autoplay: { delay: 4000 },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                pagination: { el: ".swiper-pagination", clickable: true }
            });
        }, 100);
    }

    /**  Cargar Tecnologías */
    const technologies = [
        { name: "Java", src: "java/java-original.svg" },
        { name: "C#", src: "csharp/csharp-original.svg" },
        { name: "Python", src: "python/python-original.svg" },
        { name: "Figma", src: "figma/figma-original.svg" },
        { name: "HTML5", src: "html5/html5-original.svg" },
        { name: "CSS3", src: "css3/css3-original.svg" },
        { name: "JavaScript", src: "javascript/javascript-original.svg" },
        { name: "Bootstrap", src: "bootstrap/bootstrap-original.svg" },
        { name: "React", src: "react/react-original.svg" },
        { name: "Angular", src: "angularjs/angularjs-original.svg" },
        { name: "PHP", src: "php/php-original.svg" },
        { name: "MySQL", src: "mysql/mysql-original.svg" },
        { name: "SQLite", src: "sqlite/sqlite-original.svg" },
        { name: "Git", src: "git/git-original.svg" },
        { name: "GitHub", src: "github/github-original.svg" },
        { name: "Node.js", src: "nodejs/nodejs-original.svg" },
        { name: "MongoDB", src: "mongodb/mongodb-original.svg" }
    ];

    document.getElementById("tech-icons").innerHTML = technologies
        .map(tech => `
            <div class="tech-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.src}" alt="${tech.name}">
                <span class="tech-name">${tech.name}</span>
            </div>
        `).join("");
});
