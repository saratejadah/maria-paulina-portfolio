/* ==========================================================================
   Lógica del sitio: idioma, tema, navegación, render de proyectos y galería.
   ========================================================================== */
(() => {
  const S = window.SITE, P = window.PROJECTS, G = window.GALLERY, C = window.CATEGORIES, D = window.I18N;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const page = document.body.dataset.page;

  /* ---------- Estado: idioma y tema ---------- */
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang") || localStorage.getItem("mp-lang") || "es";
  if (!D[lang]) lang = "es";
  const t = (k) => D[lang][k] ?? k;
  const L = (o) => (Array.isArray(o) ? o : o && typeof o === "object" ? o[lang] ?? o.es : o ?? "");

  const savedTheme = localStorage.getItem("mp-theme");
  document.documentElement.dataset.theme = savedTheme || "light"; // claro por defecto

  /* ---------- Iconos ---------- */
  const I = {
    sun: '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></svg>',
    moon: '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 8h16M4 16h16"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01Zm-7.01 15.24a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
  };

  /* ---------- Navegación y pie (compartidos) ---------- */
  const home = page === "home" ? "" : "index.html";
  function renderChrome() {
    const nav = $("#site-nav");
    if (nav) nav.innerHTML = `
      <a class="brand" href="${home || "#top"}" aria-label="Maria Paulina — inicio">
        <span class="brand-name">${S.name}</span><span class="brand-role">— 3D Jewelry Designer</span>
      </a>
      <nav class="nav-links" id="nav-links">
        <a href="${home}#work" data-i18n="nav.work"></a>
        <a href="${home}#gallery" data-i18n="nav.gallery"></a>
        <a href="${home}#about" data-i18n="nav.about"></a>
        <a href="${home}#contact" data-i18n="nav.contact"></a>
      </nav>
      <div class="nav-tools">
        <button class="chip-btn lang-toggle" id="lang-toggle" data-i18n-aria="nav.lang"><span data-l="es">ES</span>/<span data-l="en">EN</span></button>
        <button class="chip-btn theme-toggle" id="theme-toggle" data-i18n-aria="nav.theme">${I.sun}${I.moon}</button>
        <button class="chip-btn menu-btn" id="menu-btn" data-i18n-aria="nav.menu" aria-expanded="false" aria-controls="nav-links">${I.menu}</button>
      </div>`;
    const foot = $("#site-footer");
    if (foot) foot.innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} ${S.fullName}. <span data-i18n="footer.rights"></span></span><a href="#top" data-i18n="footer.top"></a></div>`;

    $("#lang-toggle").addEventListener("click", () => setLang(lang === "es" ? "en" : "es"));
    $("#theme-toggle").addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("mp-theme", next);
    });
    const navEl = $("#site-nav"), mb = $("#menu-btn");
    mb.addEventListener("click", () => { const o = navEl.classList.toggle("open"); mb.setAttribute("aria-expanded", o); });
    $$(".nav-links a").forEach((a) => a.addEventListener("click", () => { navEl.classList.remove("open"); mb.setAttribute("aria-expanded", false); }));
  }

  /* ---------- Traducción ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => (el.innerHTML = t(el.dataset.i18n)));
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); el.title = t(el.dataset.i18nAria); });
    $$(".lang-toggle span").forEach((s) => s.classList.toggle("on", s.dataset.l === lang));
    const md = $('meta[name="description"]'); if (md) md.content = t("meta.desc");
  }
  function setLang(l) {
    lang = l; localStorage.setItem("mp-lang", l);
    if (params.has("lang")) { params.delete("lang"); history.replaceState(null, "", location.pathname + (params.toString() ? "?" + params : "") + location.hash); }
    renderPage(); applyI18n(); observeReveals(); horizontalWork.refresh && horizontalWork.refresh();
  }

  /* ---------- Animación de entrada al hacer scroll ---------- */
  let io;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach((e) => e.classList.add("in")); return; }
    io = io || new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal:not(.in)").forEach((e) => io.observe(e));
  }

  /* Proyectos destacados en horizontal.
     - Computador: la sección se queda fija y el scroll vertical decide qué
       proyecto se muestra (un movimiento de rueda = un proyecto, nunca a la mitad).
     - Celular / tablet táctil: carrusel que se desliza con el dedo hacia el lado,
       con imán en cada proyecto; la página baja normal. */
  function horizontalWork() {
    const sec = $("#work"), vp = $(".hscroll-viewport"), track = $("#featured-list");
    if (!sec || !track) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { sec.classList.add("static"); return; }
    const swipeMQ = matchMedia("(max-width: 820px), (hover: none) and (pointer: coarse)");
    let swipe = swipeMQ.matches;
    const n = () => track.children.length;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const range = () => sec.offsetHeight - innerHeight;
    let raf = 0, current = -1;

    // Computador: una pantalla + 60% de pantalla de scroll por cada proyecto extra
    const size = () => { sec.style.height = swipe ? "" : `calc(100svh + ${Math.max(0, n() - 1)} * 60svh)`; };
    const topOf = () => sec.getBoundingClientRect().top + scrollY;
    const posOf = (i) => topOf() + (n() > 1 ? (i / (n() - 1)) * range() : 0);
    const show = (idx, count) => {
      if (idx === current) return;
      current = idx;
      if (!swipe) track.style.transform = `translate3d(${-idx * 100}vw,0,0)`;
      [...track.children].forEach((s, i) => { s.classList.toggle("on", i === idx); });
      $("#h-current").textContent = String(idx + 1).padStart(2, "0");
      $("#h-bar").style.transform = `scaleX(${count === 1 ? 1 : idx / (count - 1)})`;
    };
    const update = () => {
      raf = 0;
      const count = n(); if (!count) return;
      if (swipe) return show(clamp(Math.round(vp.scrollLeft / Math.max(1, vp.clientWidth)), 0, count - 1), count);
      const p = clamp(-sec.getBoundingClientRect().top / Math.max(1, range()), 0, 1);
      show(count === 1 ? 0 : clamp(Math.round(p * (count - 1)), 0, count - 1), count);
    };
    const tick = () => { if (!raf) raf = requestAnimationFrame(update); };
    const applyMode = () => {
      swipe = swipeMQ.matches;
      sec.classList.toggle("swipe", swipe);
      track.style.transform = "";
      vp.scrollLeft = 0;
      size(); current = -1; update();
    };

    // Teclado (Tab) en computador: llevar el scroll hasta el proyecto enfocado
    track.addEventListener("focusin", (e) => {
      if (swipe) return; // en el carrusel el navegador lo desplaza solo
      const s = e.target.closest(".slide"); if (!s) return;
      vp.scrollLeft = 0;
      scrollTo({ top: posOf([...track.children].indexOf(s)), behavior: "auto" });
    });

    // Rueda del mouse / trackpad: un gesto = un proyecto (se ignora la inercia del trackpad)
    let locked = false, lockStart = 0, lastWheel = 0;
    addEventListener("wheel", (e) => {
      if (swipe || e.ctrlKey || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const r = sec.getBoundingClientRect();
      const pinned = r.top <= 1 && r.bottom >= innerHeight - 1;
      const now = performance.now();
      if (!pinned) {
        // Al entrar a la sección, detenerse exactamente en el primer (o último) proyecto
        const enteringDown = e.deltaY > 0 && r.top > 1 && r.top - e.deltaY <= 1;
        const enteringUp = e.deltaY < 0 && r.bottom < innerHeight - 1 && r.bottom - e.deltaY >= innerHeight - 1;
        if (!locked && (enteringDown || enteringUp)) {
          e.preventDefault();
          locked = true; lockStart = lastWheel = now;
          scrollTo({ top: posOf(enteringDown ? 0 : n() - 1), behavior: "auto" });
        }
        return;
      }
      if (current < 0) return;
      if (locked) {
        if (now - lockStart > 700 && now - lastWheel > 180) locked = false;
        else { lastWheel = now; e.preventDefault(); return; }
      }
      const dir = Math.sign(e.deltaY), next = current + dir;
      if (!dir || next < 0 || next > n() - 1) return; // en los extremos, el scroll sigue normal
      e.preventDefault();
      locked = true; lockStart = lastWheel = now;
      scrollTo({ top: posOf(next), behavior: "auto" });
    }, { passive: false });

    vp.addEventListener("scroll", tick, { passive: true });
    addEventListener("scroll", tick, { passive: true });
    addEventListener("resize", () => { size(); tick(); });
    swipeMQ.addEventListener("change", applyMode);
    applyMode();
    horizontalWork.refresh = () => { size(); current = -1; update(); };
  }

  /* ---------- Contacto ---------- */
  const waLink = () => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(t("contact.waMsg"))}`;
  const fmtPhone = (n) => `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8)}`;

  /* ======================================================================
     INICIO
     ====================================================================== */
  function renderHome() {
    // Destacados
    $("#featured-list").innerHTML = P.map((p, i) => `
      <div class="slide" aria-roledescription="slide" aria-label="${i + 1} / ${P.length}">
      <article class="feature">
        <div class="feature-text">
          <div class="feature-meta"><span class="num">${String(i + 1).padStart(2, "0")}</span><span>·</span><span>${L(p.category)}</span>${p.year ? `<span>· ${p.year}</span>` : ""}</div>
          <h3>${L(p.title)}</h3>
          <p>${L(p.summary)}</p>
          <div class="feature-tags">${L(p.tags).map((x) => `<span class="tag">${x}</span>`).join("")}</div>
          <a class="link-arrow" href="project.html?p=${p.slug}">${t("featured.case")} ${I.arrow}</a>
        </div>
        <a class="feature-media${p.coverPhoto ? " is-photo" : ""}" href="project.html?p=${p.slug}" aria-label="${L(p.title)} — ${t("featured.open")}">
          <img class="main" src="${p.cover}" alt="${L(p.title)}" decoding="async">
          ${p.hover ? `<img class="alt${p.hoverPhoto ? " is-photo" : ""}" src="${p.hover}" alt="" loading="lazy" decoding="async">` : ""}
          <span class="open">${t("featured.open")} ${I.arrow}</span>
        </a>
      </article>
      </div>`).join("");
    $("#h-total").textContent = String(P.length).padStart(2, "0");

    // Filtros de galería
    const counts = G.reduce((a, g) => ((a[g.cat] = (a[g.cat] || 0) + 1), a), {});
    $("#filters").innerHTML = Object.keys(C).filter((k) => k === "all" || counts[k])
      .map((k) => `<button class="filter${k === currentFilter ? " on" : ""}" data-f="${k}" aria-pressed="${k === currentFilter}">${L(C[k])}<sup>${k === "all" ? G.length : counts[k]}</sup></button>`).join("");
    $$("#filters .filter").forEach((b) => b.addEventListener("click", () => { currentFilter = b.dataset.f; filterGallery(); }));

    // Galería
    $("#masonry").innerHTML = G.map((g, i) => `
      <button class="tile reveal${g.photo ? " is-photo" : ""}" data-i="${i}" data-cat="${g.cat}">
        <img src="${g.img}" alt="${L(g.title)}" loading="lazy" decoding="async">
        <figcaption>${L(g.title)} <span>${L(C[g.cat])}</span></figcaption>
      </button>`).join("");
    $$("#masonry .tile").forEach((b) => b.addEventListener("click", () => openLB(+b.dataset.i)));
    filterGallery();

    // Sobre mí
    $("#portrait").innerHTML = S.portrait ? `<img src="${S.portrait}" alt="${S.fullName}">` : `<span class="initials">MP</span><span class="note">${t("about.portraitNote")}</span>`;
    $("#cv-download").href = S.cv[lang];
    $("#cv-download").setAttribute("download", S.cv[lang].split("/").pop());
    $("#cv-view").href = `cv.html?lang=${lang}`;

    // Contacto
    [["#c-wa", "contact.wa"], ["#c-mail", "contact.mail"], ["#c-ig", "contact.ig"]].forEach(([id, k]) => { const a = $(id); a.setAttribute("aria-label", t(k)); a.title = t(k); });
    $("#c-wa").href = waLink(); $("#c-wa-num").textContent = fmtPhone(S.whatsapp);
    $("#c-mail").href = `mailto:${S.email}`; $("#c-mail-txt").textContent = S.email;
    $("#c-ig").href = `https://instagram.com/${S.instagram}`; $("#c-ig-txt").textContent = "@" + S.instagram;
  }

  let currentFilter = "all";
  function filterGallery() {
    $$("#filters .filter").forEach((b) => { const on = b.dataset.f === currentFilter; b.classList.toggle("on", on); b.setAttribute("aria-pressed", on); });
    $$("#masonry .tile").forEach((tile) => tile.classList.toggle("hide", currentFilter !== "all" && tile.dataset.cat !== currentFilter));
  }

  /* Lightbox de la galería */
  let lbIndex = 0, lastFocus;
  const visible = () => $$("#masonry .tile:not(.hide)").map((b) => +b.dataset.i);
  function openLB(i) {
    lastFocus = document.activeElement; lbIndex = i; drawLB();
    $("#lightbox").classList.add("open"); $("#lightbox").removeAttribute("aria-hidden");
    document.body.style.overflow = "hidden"; $("#lb-close").focus();
  }
  function drawLB() {
    const g = G[lbIndex];
    $("#lb-img").src = g.img; $("#lb-img").alt = L(g.title);
    $("#lb-title").textContent = L(g.title); $("#lb-cat").textContent = L(C[g.cat]);
  }
  function stepLB(d) { const v = visible(); const k = v.indexOf(lbIndex); lbIndex = v[(k + d + v.length) % v.length]; drawLB(); }
  function closeLB() { $("#lightbox").classList.remove("open"); $("#lightbox").setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; lastFocus && lastFocus.focus(); }
  function initLB() {
    const lb = $("#lightbox"); if (!lb) return;
    $("#lb-close").innerHTML = I.close; $("#lb-prev").innerHTML = I.left; $("#lb-next").innerHTML = I.right;
    $("#lb-close").onclick = closeLB; $("#lb-prev").onclick = () => stepLB(-1); $("#lb-next").onclick = () => stepLB(1);
    lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });
    addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLB(); if (e.key === "ArrowLeft") stepLB(-1); if (e.key === "ArrowRight") stepLB(1);
    });
  }

  /* ======================================================================
     PÁGINA DE PROYECTO
     ====================================================================== */
  const FINISHES = { silver: [0.93, 0.94, 0.95], gold: [1.0, 0.77, 0.36], rose: [0.95, 0.66, 0.55] };
  function renderProject() {
    const slug = params.get("p");
    const i = P.findIndex((p) => p.slug === slug);
    const root = $("#project");
    if (i < 0) { root.innerHTML = `<section class="p-hero wrap"><a class="back" href="index.html#work">${I.back}<span>${t("project.back")}</span></a><h1 class="p-title">${t("project.notFound")}</h1></section>`; return; }
    const p = P[i], n = P[(i + 1) % P.length];
    document.title = `${L(p.pageTitle || p.title)} — ${S.name}`;
    const cap = (c) => (c ? `<figcaption class="cap">${L(c)}</figcaption>` : "");
    const media = (it) => it.video
      ? `<video class="p-video" autoplay muted loop playsinline preload="none" poster="${it.video}-poster.webp" aria-label="${L(it.caption)}"><source src="${it.video}.webm" type="video/webm"><source src="${it.video}.mp4" type="video/mp4"></video>`
      : `<img src="${it.src}" alt="${L(it.caption)}" loading="lazy">`;
    const modelHTML = (src, name) => `
      <section class="wrap p-block">
        <div class="p-block-head reveal"><div><span class="eyebrow">${t("project.model")}${name ? " · " + name : ""}</span><h2>${t("project.modelH")}</h2></div><p>${t("project.modelP")}</p></div>
        <div class="viewer reveal">
          <model-viewer src="${src}" alt="${name || L(p.pageTitle || p.title)} — 3D" camera-controls auto-rotate auto-rotate-delay="1500" rotation-per-second="18deg" interaction-prompt="none" shadow-intensity="0.6" shadow-softness="1" exposure="1.05" environment-image="neutral" touch-action="pan-y" loading="lazy"></model-viewer>
          <div class="finishes" role="group" aria-label="${t("finish.label")}">
            <button class="finish finish-orig on" data-f="orig" aria-label="${t("finish.orig")}" title="${t("finish.orig")}"></button>
            ${Object.keys(FINISHES).map((f) => `<button class="finish" data-f="${f}" aria-label="${t("finish." + f)}" title="${t("finish." + f)}" style="background:radial-gradient(circle at 30% 30%,#fff,rgb(${FINISHES[f].map((c) => Math.round(c * 255)).join(",")}) 55%,rgb(${FINISHES[f].map((c) => Math.round(c * 160)).join(",")}))"></button>`).join("")}
          </div>
          <span class="hint">${t("project.hint")}</span>
        </div>
      </section>`;
    const sectionHTML = (x) => {
      if (x.type === "model") return modelHTML(x.src, x.name);
      if (x.type === "text") return `
      <section class="wrap p-block p-text reveal">
        ${x.eyebrow ? `<span class="eyebrow">${x.eyebrow}</span>` : ""}<h2>${L(x.title)}</h2><p>${L(x.text)}</p>
      </section>`;
      if (x.type === "grid") return `
      <section class="wrap p-block"><div class="p-grid${x.fill ? " is-fill" : ""}${x.row ? " is-row" : ""}"${x.row ? ` style="grid-template-columns:${x.row.map((r) => r.toFixed(3) + "fr").join(" ")}"` : ""}>${x.items.map((it, k) => `<figure class="reveal d${k + 1}${it.photo ? " is-photo" : ""}${it.video ? " is-video" : ""}">${media(it)}${cap(it.caption)}</figure>`).join("")}</div></section>`;
      const head = x.title ? `<div class="p-block-head reveal"><div><span class="eyebrow">${t("project.result")}</span><h2>${L(x.title)}</h2></div><p></p></div>` : "";
      return `
      <section class="wrap p-block">${head}
        <figure class="p-wide reveal${x.type === "photo" ? " is-photo" : ""}${x.wide ? " is-wide" : ""}${x.narrow ? " is-narrow" : ""}">${media(x)}${cap(x.caption)}</figure>
      </section>`;
    };
    root.innerHTML = `
      <section class="p-hero wrap">
        <div class="p-hero-text">
          <a class="back" href="index.html#work">${I.back}<span>${t("project.back")}</span></a>
          <div class="eyebrow reveal">${String(i + 1).padStart(2, "0")} · ${L(p.category)}${p.year ? " · " + p.year : ""}</div>
          <h1 class="p-title reveal d1">${L(p.pageTitle || p.title)}</h1>
          <p class="p-sub reveal d2">${L(p.tagline || p.summary)}</p>
          <div class="p-tags reveal d2">${L(p.tags).map((x) => `<span class="tag">${x}</span>`).join("")}</div>
        </div>
        <div class="p-cover reveal d2 is-real${p.coverPhoto ? " is-photo" : ""}"${p.coverShift ? ` style="--shift:${p.coverShift}px"` : ""}><img src="${p.cover}" alt="${L(p.pageTitle || p.title)}"></div>
      </section>
      <section class="wrap p-overview">
        <div class="reveal">${L(p.overview).map((x) => `<p>${x}</p>`).join("")}</div>

      </section>
      ${p.sections.map(sectionHTML).join("")}
      <section class="wrap p-next">
        <div class="reveal"><span class="eyebrow">${t("project.next")}</span><h3>${L(n.title)}</h3><a class="link-arrow" href="project.html?p=${n.slug}">${t("featured.case")} ${I.arrow}</a></div>
        <a class="feature-media reveal d1${n.coverPhoto ? " is-photo" : ""}" href="project.html?p=${n.slug}"><img class="main" src="${n.cover}" alt="${L(n.title)}" loading="lazy"><span class="open">${t("featured.open")} ${I.arrow}</span></a>
      </section>`;
    initVideos();
    initFinishes();
  }
  function initVideos() {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    $$(".p-video").forEach((v) => {
      if (reduce) { v.autoplay = false; v.pause(); v.controls = true; return; }
      // cargar y reproducir solo cuando el video está en pantalla
      new IntersectionObserver(([e]) => { if (e.isIntersecting) { v.preload = "auto"; v.play().catch(() => {}); } else v.pause(); }, { threshold: 0.2 }).observe(v);
    });
  }
  function initFinishes() {
    $$(".viewer").forEach((box) => {
      const mv = box.querySelector("model-viewer"), btns = [...box.querySelectorAll(".finish")];
      if (!mv || !btns.length) return;
      let orig = null; // colores originales del metal, guardados al cargar
      const metals = () => mv.model.materials.filter((m) => m.name.startsWith("metal"));
      const apply = (f) => {
        if (!mv.model) return;
        if (!orig) orig = metals().map((m) => [...m.pbrMetallicRoughness.baseColorFactor]);
        metals().forEach((m, i) => m.pbrMetallicRoughness.setBaseColorFactor(f === "orig" ? orig[i] : [...FINISHES[f], 1]));
      };
      btns.forEach((b) => b.addEventListener("click", () => { btns.forEach((x) => x.classList.toggle("on", x === b)); apply(b.dataset.f); }));
      mv.addEventListener("load", () => {
        orig = null;
        // la muestra "original" toma el color real del metal de la pieza
        const c = metals()[0]?.pbrMetallicRoughness.baseColorFactor;
        if (c) { const rgb = c.slice(0, 3).map((v) => Math.round(v * 255)), dark = c.slice(0, 3).map((v) => Math.round(v * 160));
          box.querySelector(".finish-orig").style.background = `radial-gradient(circle at 30% 30%,#fff,rgb(${rgb}) 55%,rgb(${dark}))`; }
        // si el metal original es igual a uno de los acabados, no repetir: ocultar "original" y marcar ese acabado
        const same = c && Object.keys(FINISHES).find((f) => FINISHES[f].every((v, i) => Math.abs(v - c[i]) < 0.04));
        const origBtn = box.querySelector(".finish-orig");
        origBtn.hidden = !!same;
        if (same) { btns.forEach((x) => x.classList.toggle("on", x.dataset.f === same)); return; }
        const on = box.querySelector(".finish.on"); if (on && on.dataset.f !== "orig") apply(on.dataset.f);
      });
    });
  }

  /* ---------- Arranque ---------- */
  function renderPage() {
    if (page === "home") renderHome();
    if (page === "project") renderProject();
  }
  /* Anillo del inicio: gira siempre en la misma perspectiva. Si la persona lo mueve,
     después de unos segundos sin tocarlo vuelve suavemente a esa inclinación y distancia. */
  function heroOrbit() {
    const mv = $(".hero-object"); if (!mv) return;
    const PHI = "47deg", RADIUS = "112%";
    let timer;
    mv.addEventListener("camera-change", (e) => {
      if (e.detail.source !== "user-interaction") return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        const { theta } = mv.getCameraOrbit();
        mv.cameraOrbit = `${theta}rad ${PHI} ${RADIUS}`;
      }, 1800);
    });
  }

  renderChrome();
  renderPage();
  applyI18n();
  initLB();
  observeReveals();
  if (page === "home") { horizontalWork(); heroOrbit(); }
})();
