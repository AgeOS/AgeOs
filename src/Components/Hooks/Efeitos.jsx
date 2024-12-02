// hooks/useIntersectionObserver.js
import { useEffect } from "react";

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Adiciona classe quando elemento entra na viewport
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            // Remove classe quando elemento sai da viewport
            entry.target.classList.remove("animate");
          }
        });
      },
      {
        threshold: 0.2, // Ativa quando 20% do elemento está visível
        rootMargin: "-50px", // Margem negativa para melhor timing
      }
    );

    // Seleciona elementos com as classes de animação
    const animatedElements = document.querySelectorAll(
      ".slide-in-left, .slide-in-right"
    );

    // Observa cada elemento
    animatedElements.forEach((el) => observer.observe(el));

    // Cleanup quando componente é desmontado
    return () => observer.disconnect();
  }, []);
};
