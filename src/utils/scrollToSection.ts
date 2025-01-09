import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registra il plugin ScrollToPlugin con GSAP
gsap.registerPlugin(ScrollToPlugin);

/**
 * Scrolls smoothly to a specific section on the page identified by its ID.
 * 
 * @param {string} id - The ID of the target section to scroll to.
 * 
 * @description
 * This function uses GSAP's ScrollToPlugin to perform a smooth scrolling animation to the
 * specified section of the page. The scroll position is adjusted to account for a 50px offset,
 * typically used to prevent overlapping with fixed headers.
 */
export default function scrollToSection(id: string): void {
    // Trova l'elemento target nella pagina tramite il suo ID
    const section = document.getElementById(id);

    // Verifica che l'elemento esista
    if (section) {
        // Effettua uno scrolling fluido verso l'offset verticale della sezione
        gsap.to(window, {
            scrollTo: {
                y: section.offsetTop - 50, // Offset per considerare header fissi o margini
                autoKill: false, // Evita di fermare l'animazione in caso di interazione manuale
            },
            duration: 1, // Durata dell'animazione in secondi
            ease: "power1.inOut", // Curva di easing per un'animazione fluida
        });
    } else {
        console.warn(`Elemento con ID '${id}' non trovato.`); // Avviso se l'elemento non esiste
    }
}
