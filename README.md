# 🚀 NIST CSF 2.0 — README "brutal" para implementar sin dolor (y con estilo) 😎🛡️

## Resumen Ejecutivo

El NIST Cybersecurity Framework 2.0 (CSF 2.0) organiza resultados ("outcomes") para entender, evaluar, priorizar y comunicar el riesgo de ciberseguridad. El Core se estructura en seis Funciones: Govern, Identify, Protect, Detect, Respond, Recover, y se complementa con Profiles (Current/Target), Tiers (1–4) y recursos prácticos (Implementation Examples, Quick Start Guides, Informative References).

## 🧠 ¿Qué cambió vs 1.1? (lo clave, sin vueltas) ✨

- **Nueva Función "GOVERN (GV)" al frente**: estrategia, política, roles y C-SCRM (riesgos de cadena de suministro) para priorizar el resto de funciones según misión y expectativas de stakeholders.

- **Suite de recursos online** (se actualizan más a menudo que el documento base): Implementation Examples, Informative References y Quick Start Guides, además de plantillas de Profiles.

## 🧩 Componentes del CSF 2.0 (tu mapa mental) 🗺️

- **Core**: Funciones → Categorías → Subcategorías (taxonomía de outcomes)
- **Profiles**: fotografía actual y objetivo para cerrar brechas
- **Tiers (1–4)**: rigor de gobierno y gestión (Partial → Risk-Informed → Repeatable → Adaptive)
- **Recursos**: Implementation Examples, QSGs, Informative References, Community/Org Profiles

## 🧱 El Core, visual: de GOVERN a RECOVER 🔁
```mermaid
flowchart LR
  GV([GOVERN<br/>Estrategia, políticas, C-SCRM, roles]):::a
  ID([IDENTIFY<br/>Riesgo actual, inventarios]):::b
  PR([PROTECT<br/>Salvaguardas, IAM, Datos, Plataforma]):::c
  DE([DETECT<br/>Monitoreo continuo, Análisis]):::d
  RS([RESPOND<br/>Incidentes: análisis, comunicación, mitigación]):::e
  RC([RECOVER<br/>Plan de recuperación, comunicación]):::f

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
