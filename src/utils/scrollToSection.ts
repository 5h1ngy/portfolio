import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Registra il plugin
gsap.registerPlugin(ScrollToPlugin);

export default function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
        gsap.to(window, {
            scrollTo: { y: section.offsetTop - 50, autoKill: false },
            duration: 1,
            ease: "power1.inOut",
        });
    }
}
