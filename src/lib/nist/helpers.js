// Evaluación con soporte de crédito parcial
export function evaluateQuestion(q, selectedIdxs) {
  const correctIdxs = q.options.map((o, i) => (o.isCorrect ? i : null)).filter((v) => v !== null);
  const partialIdxs = q.options.map((o, i) => (o.partialCredit > 0 ? i : null)).filter((v) => v !== null);

  const allCorrectChosen = correctIdxs.length > 0 && correctIdxs.every((i) => selectedIdxs.includes(i));
  const noWrongChosen = selectedIdxs.every((i) => correctIdxs.includes(i) || partialIdxs.includes(i));

  if (allCorrectChosen && noWrongChosen && selectedIdxs.length === correctIdxs.length) return "correct";
  if (selectedIdxs.some((i) => partialIdxs.includes(i)) || (allCorrectChosen && selectedIdxs.length !== correctIdxs.length)) return "partial";
  return "wrong";
}

export function inferTopic(q) {
  const t = (q.text || "").toLowerCase();
  if (/(gobernar|gv)/i.test(t)) return "GV — Gobernar";
  if (/(identificar|id)/i.test(t)) return "ID — Identificar";
  if (/(proteger|pr)/i.test(t)) return "PR — Proteger";
  if (/(detectar|de)/i.test(t)) return "DE — Detectar";
  if (/(responder|rs)/i.test(t)) return "RS — Responder";
  if (/(recuperar|rc)/i.test(t)) return "RC — Recuperar";
  if (/(perfil|perfiles)/i.test(t)) return "Perfiles Organizativos";
  if (/(nivel|tier)/i.test(t)) return "Niveles (Tiers)";
  if (/(categoría|categorias|subcategoría|subcategorias|núcleo|nucleo|core)/i.test(t)) return "Núcleo (Core)";
  if (/(cadena de suministro|supply)/i.test(t)) return "C-SCRM";
  return "CSF 2.0";
}

export function explanationFor(q) {
  const topic = inferTopic(q);
  const base = {
    "GV — Gobernar": "GV define estrategia, expectativas y política para la gestión de riesgos. Es el marco rector para el resto de funciones.",
    "ID — Identificar": "ID se centra en comprender el contexto, activos y riesgos para priorizar esfuerzos de seguridad.",
    "PR — Proteger": "PR agrupa salvaguardas preventivas: control de accesos, protección de datos y plataformas, concienciación, resiliencia.",
    "DE — Detectar": "DE busca anomalías, monitorea continuamente y analiza eventos para detectar incidentes con oportunidad.",
    "RS — Responder": "RS organiza la respuesta: análisis y gestión del incidente, mitigación y comunicación.",
    "RC — Recuperar": "RC aborda restauración de servicios y comunicación de la recuperación tras un incidente.",
    "Perfiles Organizativos": "Los perfiles describen la postura actual u objetivo y ayudan a priorizar y comunicar resultados del Core.",
    "Niveles (Tiers)": "Los niveles caracterizan el rigor de gobierno y gestión de riesgos: 1 Parcial, 2 Riesgo Informado, 3 Repetible, 4 Adaptable.",
    "Núcleo (Core)": "El Core es una taxonomía de resultados: Funciones, Categorías y Subcategorías aplicables a TI, OT e IoT.",
    "C-SCRM": "C-SCRM gestiona riesgos de ciberseguridad en cadenas de suministro con políticas y procesos integrales.",
    "CSF 2.0": "El CSF 2.0 orienta a las organizaciones a gestionar riesgos de ciberseguridad mediante resultados medibles.",
  };
  return base[topic] || base["CSF 2.0"];
}

// Parser tipo GIFT con {=correcta ~incorrecta} y {T}/{F}, soporte %crédito parcial
export function parseGiftLike(text) {
  // Devuelve [{ id, text, options:[{text, isCorrect, partialCredit}], topic? }]
  const blocks = [];
  const normalized = text.replace(/\r/g, "").replace(/\t/g, " ").replace(/\n\s+/g, "\n");
  const regex = /::\s*([^:]+)\s*::\s*([^\{]+)\{([\s\S]*?)\}/g; // ::id::Question{body}

  let m, auto = 0;
  while ((m = regex.exec(normalized)) !== null) {
    const qIdRaw = (m[1] || "").trim() || `auto_${auto++}`;
    const qText = (m[2] || "").trim();
    const body = (m[3] || "").trim();

    // True/False corto {T} o {F}
    if (/^([tTfF])$/.test(body.replace(/\s+/g, ""))) {
      const truth = /t/i.test(body);
      const id = `${qIdRaw}_${blocks.length}`;
      blocks.push({
        id,
        text: qText,
        options: [
          { text: "Verdadero", isCorrect: truth, partialCredit: truth ? 100 : 0 },
          { text: "Falso", isCorrect: !truth, partialCredit: !truth ? 100 : 0 },
        ],
      });
      continue;
    }

    const options = [];
    const lines = body
      .split(/\n/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    for (const line of lines) {
      const isCorrect = line.startsWith("=");
      const isWrongOrPartial = line.startsWith("~");
      if (!isCorrect && !isWrongOrPartial) continue;

      let inner = line.slice(1).trim();

      // Crédito parcial ~%33.3333%Texto
      let partialCredit = 0;
      const pctMatch = inner.match(/^%\s*([0-9]+(?:\.[0-9]+)?)\s*%\s*(.*)$/);
      if (pctMatch) {
        partialCredit = parseFloat(pctMatch[1]);
        inner = (pctMatch[2] || "").trim();
      }

      options.push({ text: inner, isCorrect, partialCredit: isCorrect ? 100 : partialCredit });
    }

    const id = `${qIdRaw}_${blocks.length}`; // ID único aunque se repita la etiqueta
    blocks.push({ id, text: qText, options });
  }

  return blocks;
}
