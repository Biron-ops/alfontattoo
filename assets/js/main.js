/* Alfon Tattoo — interacción */
(() => {
  "use strict";
  const WA = "19545994179";
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------------- Idiomas ---------------- */
  const T = {
    es: {
      skip: "Saltar al contenido",
      "nav.work": "Trabajos", "nav.process": "Proceso", "nav.artist": "Artista", "nav.book": "Reservas", "nav.cta": "Reservá tu turno",
      "hero.eyebrow": "Tattoo Artist · Miami, FL", "hero.t1": "Arte que", "hero.t2": "se queda", "hero.t3": "en la piel.",
      "hero.lead": "Realismo, black &amp; grey, retratos y fine line. Cada diseño se dibuja a medida para vos, con la precisión de quien vive del detalle.",
      "hero.cta1": "Contanos tu idea", "hero.cta2": "Ver trabajos",
      "hero.s1": "seguidores en Instagram", "hero.s2a": "Todos", "hero.s2": "los estilos", "hero.s3": "diseño a medida",
      "work.kicker": "Portfolio", "work.title": "Trabajos recientes",
      "work.lead": "Piezas reales hechas en el estudio. Tocá cualquier foto para verla en calidad completa.",
      "work.ig": "Más trabajos en Instagram @alfontattoo_ink ↗",
      "g.1": "Ojo y búho", "g.2": "Virgen escultórica", "g.3": "Rostro y margaritas", "g.4": "Atardecer tropical",
      "g.5": "Busto clásico", "g.6": "Retrato · Ambition", "g.7": "Retrato de mascota", "g.8": "Luna y loto",
      "g.ctaK": "Tu próxima pieza", "g.ctaT": "¿La tuya va acá?", "g.ctaB": "Contanos tu idea →",
      "vid.kicker": "En movimiento", "vid.title": "Del boceto a la piel", "vid.lead": "Mirá cómo una idea pasa del stencil a una pieza terminada.",
      "v.1": "Zeus · Brazo completo", "v.1s": "Stencil → terminado", "v.2": "En el estudio", "v.2s": "Una sesión real", "v.3": "Rostro fragmentado", "v.3s": "Antebrazo · Realismo",
      "st.1": "Contanos tu idea", "st.1p": "Completá el formulario y mandanos fotos de referencia por WhatsApp.",
      "st.2": "Diseño a medida", "st.2p": "Alfonso adapta el diseño a tu cuerpo, tamaño y estilo.",
      "st.3": "Seña y fecha", "st.3p": "Con la seña confirmás tu turno. La seña no es reembolsable.",
      "st.4": "La sesión", "st.4p": "Material descartable, higiene total y seguimiento del curado.",
      "art.kicker": "El artista", "art.lead": "Tatuador en Miami, especializado en realismo y black &amp; grey, pero sin límites de estilo.",
      "art.p1": "Cada pieza arranca con una charla: qué querés contar, dónde lo vas a llevar y cómo va a envejecer en tu piel. Desde ahí, Alfonso dibuja un diseño único, pensado para tu cuerpo, con sombras suaves, contrastes profundos y detalles que se ven de cerca y de lejos.",
      "bk.kicker": "Reservas", "bk.title": "Contanos sobre tu próximo tattoo",
      "bk.lead": "Completá estos datos y se abre WhatsApp con tu mensaje listo. Ahí mismo adjuntá las fotos de referencia del diseño que tenés en mente.",
      "bk.note": "<b>Seña obligatoria para reservar.</b> La seña no es reembolsable.",
      "f.name": "¿Cómo te llamás?", "f.namePh": "Tu nombre",
      "f.when": "¿En cuánto tiempo querés tatuarte?",
      "f.w1": "Lo más pronto", "f.w1s": "Quiero el próximo turno libre", "f.w2": "Tengo tiempo", "f.w2s": "Sin apuro, cuando haya lugar", "f.w3": "Quiero hablar la fecha", "f.w3s": "Coordinemos juntos",
      "f.size": "¿De qué tamaño?",
      "f.s1": "Pequeño", "f.s1s": "hasta 7 cm", "f.s2": "Mediano", "f.s2s": "7 a 15 cm", "f.s3": "Grande", "f.s3s": "más de 15 cm", "f.s4": "Proyecto", "f.s4s": "manga / espalda",
      "f.zone": "¿En qué parte del cuerpo?",
      "z.arm": "Brazo", "z.forearm": "Antebrazo", "z.hand": "Mano", "z.shoulder": "Hombro", "z.chest": "Pecho", "z.back": "Espalda", "z.ribs": "Costillas", "z.leg": "Pierna", "z.thigh": "Muslo", "z.neck": "Cuello", "z.other": "Otra",
      "f.idea": "Contanos tu idea", "f.opt": "(opcional)", "f.ideaPh": "Ej: un león realista con una rosa, en black & grey",
      "f.photos": "<b>Fotos de referencia:</b> al tocar el botón se abre WhatsApp. Enviá el mensaje y después adjuntá las fotos del modelo o la idea que tengas.",
      "f.submit": "Enviar por WhatsApp",
      "ft.by": "Alfonso Dueñas — Tattoo Artist", "ft.dep": "Seña obligatoria · No reembolsable",
      err: "Completá: ", errName: "tu nombre", errWhen: "cuándo", errSize: "tamaño", errZone: "zona del cuerpo",
      msg: (d) => `Hola Alfonso! Soy ${d.name}. Quiero tatuarme 🖤\n\n` +
        `• Cuándo: ${d.when}\n• Tamaño: ${d.size}\n• Zona: ${d.zone}` +
        (d.idea ? `\n• Idea: ${d.idea}` : "") +
        `\n\nTe mando fotos de referencia del diseño 👇`
    },
    en: {
      skip: "Skip to content",
      "nav.work": "Work", "nav.process": "Process", "nav.artist": "Artist", "nav.book": "Booking", "nav.cta": "Book now",
      "hero.eyebrow": "Tattoo Artist · Miami, FL", "hero.t1": "Art that", "hero.t2": "stays", "hero.t3": "on your skin.",
      "hero.lead": "Realism, black &amp; grey, portraits and fine line. Every piece is custom drawn for you, with the precision of someone who lives for detail.",
      "hero.cta1": "Tell us your idea", "hero.cta2": "See the work",
      "hero.s1": "Instagram followers", "hero.s2a": "All", "hero.s2": "styles", "hero.s3": "custom design",
      "work.kicker": "Portfolio", "work.title": "Recent work",
      "work.lead": "Real pieces made in the studio. Tap any photo to see it in full quality.",
      "work.ig": "More work on Instagram @alfontattoo_ink ↗",
      "g.1": "Eye & owl", "g.2": "Sculpted Madonna", "g.3": "Face & daisies", "g.4": "Tropical sunset",
      "g.5": "Classical bust", "g.6": "Portrait · Ambition", "g.7": "Pet portrait", "g.8": "Moon & lotus",
      "g.ctaK": "Your next piece", "g.ctaT": "Yours goes here?", "g.ctaB": "Tell us your idea →",
      "vid.kicker": "In motion", "vid.title": "From sketch to skin", "vid.lead": "Watch an idea go from stencil to finished piece.",
      "v.1": "Zeus · Full arm", "v.1s": "Stencil → finished", "v.2": "In the studio", "v.2s": "A real session", "v.3": "Fragmented face", "v.3s": "Forearm · Realism",
      "st.1": "Tell us your idea", "st.1p": "Fill out the form and send reference photos on WhatsApp.",
      "st.2": "Custom design", "st.2p": "Alfonso adapts the design to your body, size and style.",
      "st.3": "Deposit & date", "st.3p": "A deposit locks in your appointment. Deposits are non-refundable.",
      "st.4": "The session", "st.4p": "Single-use supplies, full hygiene and healing follow-up.",
      "art.kicker": "The artist", "art.lead": "Miami tattoo artist specialized in realism and black &amp; grey, with no style limits.",
      "art.p1": "Every piece starts with a conversation: what you want to say, where you'll wear it and how it will age on your skin. From there, Alfonso draws a one-of-a-kind design made for your body, with soft shading, deep contrast and details that read up close and from afar.",
      "bk.kicker": "Booking", "bk.title": "Tell us about your next tattoo",
      "bk.lead": "Fill in these details and WhatsApp opens with your message ready. Attach your reference photos right there.",
      "bk.note": "<b>Deposit required to book.</b> Deposits are non-refundable.",
      "f.name": "What's your name?", "f.namePh": "Your name",
      "f.when": "When would you like to get tattooed?",
      "f.w1": "As soon as possible", "f.w1s": "Next available slot", "f.w2": "I have time", "f.w2s": "No rush, whenever there's room", "f.w3": "Let's talk about the date", "f.w3s": "We'll plan it together",
      "f.size": "What size?",
      "f.s1": "Small", "f.s1s": "up to 3 in", "f.s2": "Medium", "f.s2s": "3 to 6 in", "f.s3": "Large", "f.s3s": "over 6 in", "f.s4": "Project", "f.s4s": "sleeve / back",
      "f.zone": "Where on your body?",
      "z.arm": "Arm", "z.forearm": "Forearm", "z.hand": "Hand", "z.shoulder": "Shoulder", "z.chest": "Chest", "z.back": "Back", "z.ribs": "Ribs", "z.leg": "Leg", "z.thigh": "Thigh", "z.neck": "Neck", "z.other": "Other",
      "f.idea": "Tell us your idea", "f.opt": "(optional)", "f.ideaPh": "E.g. a realistic lion with a rose, black & grey",
      "f.photos": "<b>Reference photos:</b> tapping the button opens WhatsApp. Send the message, then attach photos of the design or idea you have.",
      "f.submit": "Send on WhatsApp",
      "ft.by": "Alfonso Dueñas — Tattoo Artist", "ft.dep": "Deposit required · Non-refundable",
      err: "Please complete: ", errName: "your name", errWhen: "when", errSize: "size", errZone: "body placement",
      msg: (d) => `Hi Alfonso! I'm ${d.name}. I want to get tattooed 🖤\n\n` +
        `• When: ${d.when}\n• Size: ${d.size}\n• Placement: ${d.zone}` +
        (d.idea ? `\n• Idea: ${d.idea}` : "") +
        `\n\nSending you reference photos of the design 👇`
    }
  };

  let lang = "es";
  try { const saved = localStorage.getItem("alfon-lang"); if (saved && T[saved]) lang = saved; } catch (e) {}

  function applyLang(l) {
    lang = l;
    const d = T[l];
    document.documentElement.lang = l;
    $$("[data-i18n]").forEach(el => { const v = d[el.dataset.i18n]; if (typeof v === "string") el.innerHTML = v; });
    $$("[data-i18n-ph]").forEach(el => { const v = d[el.dataset.i18nPh]; if (v) el.placeholder = v; });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    try { localStorage.setItem("alfon-lang", l); } catch (e) {}
  }
  $$(".lang button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  if (lang !== "es") applyLang(lang);

  /* ---------------- Nav sólida al scrollear ---------------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Reveal ---------------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    $$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });
  } else {
    $$(".reveal").forEach(el => el.classList.add("is-in"));
  }

  /* ---------------- Lightbox ---------------- */
  const items = $$(".g[data-full]");
  const lb = $("#lightbox"), lbImg = $(".lb__img", lb), lbCap = $(".lb__cap", lb);
  let idx = 0;
  function show(i) {
    idx = (i + items.length) % items.length;
    const it = items[idx], img = $("img", it);
    lbImg.src = img.currentSrc || img.src;          // muestra rápido lo que ya está cargado
    const full = new Image();
    full.decoding = "async";
    full.src = it.dataset.full;                       // y lo reemplaza por la versión original
    full.onload = () => { if (items[idx] === it) lbImg.src = full.src; };
    lbImg.alt = img.alt;
    lbCap.textContent = $("figcaption b", it).textContent;
  }
  items.forEach((it, i) => {
    it.tabIndex = 0;
    it.setAttribute("role", "button");
    const open = () => { show(i); lb.showModal ? lb.showModal() : lb.setAttribute("open", ""); };
    it.addEventListener("click", open);
    it.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  const close = () => (lb.close ? lb.close() : lb.removeAttribute("open"));
  $(".lb__close", lb).addEventListener("click", close);
  $(".lb__prev", lb).addEventListener("click", () => show(idx - 1));
  $(".lb__next", lb).addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1); });
  let tx = null;
  lb.addEventListener("touchstart", e => { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => {
    if (tx === null) return;
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1));
    tx = null;
  });

  /* ---------------- Videos: cargan y se reproducen al verse ---------------- */
  const vids = $$(".vid video");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const load = v => { if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); } };
  if ("IntersectionObserver" in window) {
    const vio = new IntersectionObserver(entries => {
      entries.forEach(({ target: v, isIntersecting }) => {
        if (isIntersecting) { load(v); if (!reduce) v.play().catch(() => {}); }
        else v.pause();
      });
    }, { threshold: 0.35 });
    vids.forEach(v => vio.observe(v));
  } else vids.forEach(load);

  $$(".vid__sound").forEach(btn => {
    const v = btn.parentElement.querySelector("video");
    btn.addEventListener("click", () => {
      load(v);
      const turnOn = v.muted;
      vids.forEach(o => { if (o !== v) { o.muted = true; o.parentElement.querySelector(".vid__sound").setAttribute("aria-pressed", "false"); } });
      v.muted = !turnOn;
      if (turnOn) { v.currentTime = v.currentTime; v.play().catch(() => {}); }
      btn.setAttribute("aria-pressed", String(turnOn));
      btn.setAttribute("aria-label", turnOn ? "Silenciar" : "Activar sonido");
    });
  });
  // tocar el video también lo pausa / reanuda
  vids.forEach(v => v.addEventListener("click", () => { load(v); v.paused ? v.play().catch(() => {}) : v.pause(); }));

  /* ---------------- Formulario → WhatsApp ---------------- */
  const form = $("#bookForm"), err = $("#formErr");
  const labelOf = (name) => {
    const c = form.querySelector(`input[name="${name}"]:checked`);
    if (!c) return "";
    const lab = c.closest("label");
    return (lab.querySelector("b") || lab.querySelector("span")).textContent.trim() +
      (lab.querySelector("small") ? ` (${lab.querySelector("small").textContent.trim()})` : "");
  };

  form.addEventListener("change", e => { const f = e.target.closest(".field"); if (f) f.classList.remove("is-invalid"); });
  form.addEventListener("input", e => { const f = e.target.closest(".field"); if (f) f.classList.remove("is-invalid"); });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = T[lang];
    const nameEl = $("#fName"), ideaEl = $("#fIdea");
    const data = {
      name: nameEl.value.trim(),
      when: labelOf("when"),
      size: labelOf("size"),
      zone: labelOf("zone"),
      idea: ideaEl.value.trim()
    };
    const missing = [];
    const mark = (cond, el, txt) => { if (!cond) { missing.push(txt); el.closest(".field").classList.add("is-invalid"); } };
    mark(data.name, nameEl, d.errName);
    mark(data.when, form.querySelector('[name="when"]'), d.errWhen);
    mark(data.size, form.querySelector('[name="size"]'), d.errSize);
    mark(data.zone, form.querySelector('[name="zone"]'), d.errZone);

    if (missing.length) {
      err.textContent = d.err + missing.join(", ") + ".";
      err.hidden = false;
      const first = form.querySelector(".is-invalid");
      if (first) first.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    err.hidden = true;
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(d.msg(data))}`;
    window.open(url, "_blank", "noopener");
  });

  const y = $("#year"); if (y) y.textContent = new Date().getFullYear();
})();
