// =========================
// CURSOR PERSONALIZADO
// =========================

const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

// Animación suave

function animateCursor(){

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


// =========================
// EFECTO SOBRE LINKS
// =========================

const links = document.querySelectorAll("a");

links.forEach(link => {

    link.addEventListener("mouseenter", () => {

        cursor.style.width = "34px";
        cursor.style.height = "34px";
        cursor.style.background = "rgba(239,196,94,.65)";

    });

    link.addEventListener("mouseleave", () => {

        cursor.style.width = "18px";
        cursor.style.height = "18px";
        cursor.style.background = "rgba(239,196,94,.45)";

    });

});


// =========================
// BOTÓN
// =========================

const button = document.querySelector(".btn-principal");

button.addEventListener("mouseenter", () => {

    cursor.style.width = "42px";
    cursor.style.height = "42px";

});

button.addEventListener("mouseleave", () => {

    cursor.style.width = "18px";
    cursor.style.height = "18px";

});
/*==========================
PROCESO
==========================*/

const pasos = document.querySelectorAll(".step");
const imagenProceso = document.getElementById("proceso-img");

if (pasos.length && imagenProceso) {

    let actual = 0;

    function cambiarPaso() {

        pasos.forEach(step => step.classList.remove("active"));

        pasos[actual].classList.add("active");

        console.log(
            "Paso:", actual + 1,
            "Imagen:", pasos[actual].dataset.img
        );

        imagenProceso.src = pasos[actual].dataset.img;

        actual++;

        if (actual >= pasos.length) {

            actual = 0;

        }

    }

    cambiarPaso();

    setInterval(cambiarPaso, 4500);

}
/*==================================================
COMPARADOR ANTES / DESPUÉS
==================================================*/

const slider = document.querySelector(".slider-comparador");

if (slider) {

    const antes = document.querySelector(".img-antes");

    slider.addEventListener("input", function () {

        antes.style.width = this.value + "%";

    });

}
