🚀 NIST CSF 2.0 — README para implementar sin dolor (y con estilo) 😎🛡️

Resumen ejecutivo. El NIST Cybersecurity Framework 2.0 (CSF 2.0) organiza resultados (“outcomes”) para entender, evaluar, priorizar y comunicar el riesgo de ciberseguridad. El Core se estructura en seis Funciones: Govern, Identify, Protect, Detect, Respond, Recover, y se complementa con Profiles (Current/Target), Tiers (1–4) y recursos prácticos (Implementation Examples, Quick Start Guides, Informative References). 
NIST Publications

🧠 ¿Qué cambió vs 1.1? (lo clave, sin vueltas) ✨

Nueva Función “GOVERN (GV)” al frente: estrategia, política, roles y C-SCRM (riesgos de cadena de suministro) para priorizar el resto de funciones según misión y expectativas de stakeholders. 
NIST Publications
+1

Suite de recursos online (se actualizan más a menudo que el documento base): Implementation Examples, Informative References y Quick Start Guides, además de plantillas de Profiles. 
NIST Publications

🧩 Componentes del CSF 2.0 (tu mapa mental) 🗺️

Core: Funciones → Categorías → Subcategorías (taxonomía de outcomes).

Profiles: fotografía actual y objetivo para cerrar brechas.

Tiers (1–4): rigor de gobierno y gestión (Partial → Risk-Informed → Repeatable → Adaptive).

Recursos: Implementation Examples, QSGs, Informative References, Community/Org Profiles. 
NIST Publications

🧱 El Core, visual: de GOVERN a RECOVER 🔁
flowchart LR
  GV([GOVERN\n(Estrategia, políticas, C-SCRM, roles)]):::a
  ID([IDENTIFY\n(Riesgo actual, inventarios)]):::b
  PR([PROTECT\n(Salvaguardas, IAM, Datos, Plataforma)]):::c
  DE([DETECT\n(Monitoreo continuo, Análisis)]):::d
  RS([RESPOND\n(Incidentes: análisis, comunicación, mitigación)]):::e
  RC([RECOVER\n(Plan de recuperación, comunicación)]):::f

  GV --> ID --> PR --> DE --> RS --> RC --> ID
  GV --> PR
  GV --> DE
  GV --> RS
  GV --> RC

  classDef a fill:#0a7,stroke:#0a7,color:#fff;
  classDef b fill:#0a74,stroke:#0a74,color:#fff;
  classDef c fill:#0a78,stroke:#0a78,color:#fff;
  classDef d fill:#0a7c,stroke:#0a7c,color:#fff;
  classDef e fill:#0a70,stroke:#0a70,color:#fff;
  classDef f fill:#0a72,stroke:#0a72,color:#fff;


Idea clave: GOVERN define el juego (estrategia y prioridades); ID/PR/DE operan en ciclo continuo; RS/RC se activan ante incidentes… pero se preparan desde el día 0. 
NIST Publications

🗂️ Funciones y Categorías oficiales (IDs incluidas) 📚

Tabla 1 del CSF 2.0 resume las categorías y sus identificadores. Abajo, lo esencial para implementar y auditar. 
NIST Publications

GOVERN (GV) — estrategia, política y supervisión

GV.OC (Contexto organizacional)

GV.RM (Estrategia de gestión de riesgo)

GV.RR (Roles, responsabilidades y autoridades)

GV.PO (Política)

GV.OV (Oversight / supervisión)

GV.SC (C-SCRM: riesgos de cadena de suministro)

IDENTIFY (ID) — comprender riesgo actual

ID.AM (Gestión de activos) → p.ej., ID.AM-01/02/07 (inventarios HW/SW/datos)

ID.RA (Análisis/evaluación de riesgos)

ID.IM (Mejora continua) 
NIST Publications

PROTECT (PR) — salvaguardas que reducen probabilidad/impacto

PR.AA (Gestión de identidades, autenticación y control de acceso) → p.ej., PR.AA-01..06

PR.AT (Concientización y formación)

PR.DS (Seguridad de datos)

PR.PS (Seguridad de plataforma)

PR.IR (Resiliencia de la infraestructura tecnológica) 
NIST Publications

DETECT (DE) — detección y análisis oportuno

DE.CM (Monitoreo continuo)

DE.AE (Análisis de eventos adversos) 
NIST Publications

RESPOND (RS) — actuar ante incidentes

RS.MA (Gestión de incidentes)

RS.AN (Análisis de incidentes)

RS.CO (Reporte & comunicación)

RS.MI (Mitigación: contención y erradicación) 
NIST Publications

RECOVER (RC) — restauración post-incidente

RC.RP (Ejecución del plan de recuperación)

RC.CO (Comunicación de recuperación) 
NIST Publications

🎯 Perfiles (Current/Target) & Tiers (1–4)

Profiles: fotografía actual y objetivo por alcance (unidad/negocio/tecnología/proceso), base del gap analysis y la priorización.

Tiers: 1 Partial — 2 Risk-Informed — 3 Repeatable — 4 Adaptive. Selección realista por dominio, alineada a apetito y obligaciones. 
NIST Publications

Mini-tabla de Tiers

Tier	En dos líneas
1 Partial	Respuestas ad-hoc, baja formalidad.
2 Risk-Informed	Procesos definidos y decisiones informadas por riesgo.
3 Repeatable	Procesos documentados, medidos y repetibles.
4 Adaptive	Gestión ágil, threat-informed y mejora continua integrada.
📏 Métricas “que mueven la aguja” (KPIs/KRIs sugeridos) 📈

GV.RR: % roles con responsabilidades formalizadas/auditadas.

ID.AM: cobertura de inventario HW/SW/datos; latencia de actualización.

PR.AA: % apps críticas con MFA; TTR de revocación de accesos.

DE.CM: MTTD por tipo de amenaza; % cobertura de telemetría crítica.

RS.MI: MTTR por familia de incidentes; contención < SLA.

RC.RP: RTO/RPO vs objetivos; tasa de éxito de tabletops y restauraciones.

Traduce outcomes → acciones con los Implementation Examples de NIST (son concisos y accionables). 
NIST
+1

🗺️ Ruta de adopción en 90 días (operativa, sin humo) 🧭

Fase 0 — Semana 1 (Preparar)

Sponsor + propietario de riesgo; formaliza GV.RR.

Define apetito/tolerancia, regula y stakeholders (GV.OC/GV.RM). 
NIST Publications

Fase 1 — Semanas 2–4 (Diagnóstico)

Inventarios: ID.AM-01/02/07 y servicios de terceros.

ID.RA: vulnerabilidades + threat intel → Profile Actual. 
NIST Publications

Fase 2 — Semanas 5–8 (Diseño)

Profile Target y Tier objetivo por dominio.

Priorización: PR.AA, PR.DS/PS/IR, DE.CM/AE, RS/RC.

Fase 3 — Semanas 9–12 (Ejecución)

Despliegues críticos (IAM/MFA/SSO, hardening, backups verificados).

Gaps de visibilidad (EDR/NetFlow/Wazuh/Logs).

Ensayos IR & Recovery (tabletops), lecciones a ID.IM. 
NIST Publications

🧰 “De paper a práctica”: Implementation Examples 🔧

Guían cómo aterrizar cada Subcategoría (verbos: document, develop, monitor, assess, exercise).

Úsalos para definir DoD por outcome y conectar KPI ↔ control/procedimiento. 
NIST Publications
+1

🧯 PYMES & Quick Start Guides (arranca bien, arranca ya) 🚀

Guía de inicio rápido para pequeñas y medianas: preguntas clave, primeros pasos y hojas de ruta, sin reemplazar al Framework. Ideal para kick-off con recursos limitados. 
NIST
+1

🏗️ Integración con tu SOC (Wazuh/Suricata/Grafana/TheHive) 🛰️

ID.AM: consolida assets (inventario de endpoints/servicios/datos) desde CMDB + discovery de red.

PR.AA: centraliza IAM (IdP/SSO/MFA, just-in-time access, rotación privilegios, break-glass).

DE.CM: ten cobertura: EDR + NIDS (Suricata/Snort) + sysmon/OSquery + flow logs; define SLOs de MTTD.

RS.MI: playbooks por familia (phishing, ransomware, web, insider); contain/eradicate cronometrados.

RC.RP: RTO/RPO por servicio crítico; pruebas de restauración + verificación de integridad de respaldos.

GV.SC: cláusulas de seguridad y right-to-audit con proveedores; monitoreo de terceros críticos.

🧪 Ejemplo de Profile (YAML) + Métricas mínimas viables
profile:
  scope: "ERP + CRM + Data Lake (nube/híbrido)"
  tier_target: 3  # Repeatable
  current:
    GV.RR-02: partial
    ID.AM-02: risk-informed
    PR.AA-04: partial
    DE.CM-03: partial
    RS.MI-01: risk-informed
    RC.RP-02: partial
  target:
    GV.RR-02: repeatable
    ID.AM-02: repeatable
    PR.AA-04: repeatable
    DE.CM-03: repeatable
    RS.MI-01: repeatable
    RC.RP-02: repeatable
  priorities:
    - "MFA/SSO + PAM (PR.AA) en apps críticas"
    - "Cobertura DE.CM en EDR/NIDS/Logs + SLOs MTTD/MTTR"
    - "Tabletops trimestrales + pruebas de recuperación (RS/RC)"


KPIs/KRIs base

ID.AM-02: ≥ 95 % SW/servicios inventariados; latencia ≤ 24 h.

PR.AA-04: ≥ 98 % apps críticas con MFA; revocación ≤ 15 min.

DE.CM: MTTD ≤ 15 min IoCs críticos; coverage ≥ 90 %.

RS.MI-01/02: contención ≤ 30 min; erradicación ≤ 24 h.

RC.RP: % restauraciones exitosas y RTO vs objetivo por servicio.

✅ Checklist de autoevaluación (extracto)

 GV.RR Roles y responsabilidades formalizados y comunicados.

 GV.SC C-SCRM con cláusulas, monitoreo y exit plans.

 ID.AM Inventarios HW/SW/datos actualizados (auto + manual).

 PR.AA MFA/SSO en apps críticas; PAM y session recording.

 DE.CM Detección continua (EDR/NIDS/Logs/UEBA) con use-cases.

 RS.MI Runbooks por tipo de incidente, pruebas periódicas.

 RC.RP Restauraciones probadas con verificación de integridad.

🖥️ Este repo (React + Vite) — run & deploy 🧪

Local

npm install
npm run dev
# http://localhost:5173/


Build de producción

npm run build
npm run preview


Firebase Hosting (Vite genera dist, cámbialo en firebase.json)

{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}

📚 Glosario rápido

Outcome: resultado esperado (no prescribe control, define el “qué”).

Profile: estado actual/objetivo frente al Core.

Tier: rigor de gobierno/gestión del riesgo (1–4).

C-SCRM: gestión de riesgo de ciberseguridad en cadena de suministro.

MTTD/MTTR: tiempo medio de detección / respuesta.

Tabletop: ejercicio de mesa para probar planes y roles.

🤝 Contribuir & Licencia

PRs bienvenidos: añade Implementation Examples contextuales, mappings o dashboards de métricas.

Licencia: MIT (ajústala si tu organización lo requiere).

🔎 Referencias esenciales

CSF 2.0 (CSWP-29) — definición de Core, Profiles y Tiers; suite de recursos (Implementation Examples, Informative References, Quick Start Guides). 
NIST Publications

NIST News (2024-02-26) — anuncio oficial y nueva función GOVERN. 
NIST

Implementation Examples (PDF/XLSX) — acciones concretas por Subcategoría. 
NIST
+1

Quick Start Guides — kick-off por audiencia (incl. Small Business). 
NIST
+1

Resource & Overview Guide (SP 1299) — visión ampliada de las seis funciones y recursos. 
NIST Publications

Tip final 💡: No intentes “hacer todo” a la vez. Alinea GV con tu misión, cierra ID.AM/PR.AA/DE.CM primero, valida RS/RC con tabletops, y mide. Lo que no se mide, no mejora.
