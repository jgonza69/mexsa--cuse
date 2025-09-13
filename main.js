// main.js
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  const navLinks = nav ? Array.from(nav.querySelectorAll("a[href^='#'], a[href^='/'], a[href^='./'], a[href^='../']")) : [];

  // Helper: set expanded state
  const setExpanded = (isOpen) => {
    if (!btn || !nav) return;
    nav.classList.toggle("open", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    btn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  };

  // Toggle menu
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const next = !nav.classList.contains("open");
      setExpanded(next);
    });

    // Close when clicking a nav link (nice on mobile)
    navLinks.forEach((a) =>
      a.addEventListener("click", () => {
        if (nav.classList.contains("open")) setExpanded(false);
      })
    );

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      const target = e.target;
      if (target === btn || btn.contains(target) || nav.contains(target)) return;
      setExpanded(false);
    });

    // Close on Esc
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) setExpanded(false);
    });

    // Reset state on resize (e.g., when switching to desktop)
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // If your desktop breakpoint differs, change 768
        if (window.innerWidth >= 768) setExpanded(false);
      }, 120);
    });
  }

  // Smooth scroll for in-page anchors (respect reduced motion)
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      // update hash without jumping
      history.pushState(null, "", id);
    });
  });

  // Highlight active section link while scrolling
  const sectionIds = Array.from(document.querySelectorAll("section[id]")).map((s) => s.id);
  const idToLink = new Map(
    navLinks
      .filter((a) => a.hash && sectionIds.includes(a.hash.slice(1)))
      .map((a) => [a.hash.slice(1), a])
  );

  if (sectionIds.length && idToLink.size) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = idToLink.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

