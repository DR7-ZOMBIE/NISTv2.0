export const DEFAULT_QUESTIONS = `
::1::¿El Cybersecurity Framework (CSF) 2.0, se puede aplicar solo en empresas grandes?{
    =Falso
    ~Verdadero
}

::2::Los componentes del Cybersecurity Framework (CSF) 2.0 son:{
    =CSF Core (el núcleo del CSF), Los perfiles organizativos de CSF y Los niveles de CSF
    ~Funciones, categorías y subcategorías
    ~Perfil actual y objetivo
}

::3::El CSF Core (Núcleo del CSF), es una taxonomía de resultados de seguridad cibernética de alto nivel que puede ayudar a cualquier organización a gestionar sus riesgos de seguridad cibernética.{
    =Verdadero
    ~Falso
}

::4::Los componentes del CSF Core son una jerarquía de: Funciones, Categorías y Subcategorías{
    =Verdadero
    ~Falso
}

::5::Los componentes del CSF Core son una jerarquía de: Categorías y Subcategorías{
    =Falso
    ~Verdadero
}

::6::El CSF Core (Núcleo del CSF), es una taxonomía de resultados de seguridad cibernética de bajo nivel que puede ayudar a cualquier organización a gestionar sus riesgos de seguridad cibernética.{
    =Falso
    ~Verdadero
}

::7::Los perfiles organizativos del CSF son un mecanismo para describir la postura de seguridad cibernética actual y objetiva de una organización en términos de los resultados del Núcleo CSF.{
    =Verdadero
    ~Falso
}

::8::Los niveles de CSF pueden aplicarse a los Perfiles Organizativos de CSF para caracterizar el rigor de las prácticas de gobierno y gestión de riesgos de seguridad cibernética de una organización.{
    =Verdadero
    ~Falso
}

::9::Una organización puede utilizar el Núcleo, los Perfiles y los Niveles del CSF con los recursos adicionales para:{
    ~%33.3333%Comprender y evaluar
    ~%33.3333%Priorizar
    ~Integrar
    ~%33.3333%Comunicar
    ~Seleccionar
}

::10::Las funciones del CSF Core son:{
    =Gobernar, Identificar, Proteger, Detectar, Responder y Recuperar
    ~Gobernar, Analizar, Identificar, Proteger, Detectar, Responder y Recuperar
    ~Identificar, Proteger, Detectar, Responder, Recuperar y Analizar
}

::11::¿Las funciones del CSF Core son fases que se deben abordar una a una de manera independiente?{
    =Falso
    ~Verdadero
}

::12::Los resultados de Gobernar, Identificar y Proteger ayudan a prevenir y prepararse para los incidentes{
    =Verdadero
    ~Falso
}

::13::Los resultados de Gobernar, Detectar, Responder y Recuperar ayudan a descubrir y gestionar los incidentes.{
    =Verdadero
    ~Falso
}

::14::La función de Gobernar (GV) es la estrategia, las expectativas y la política de gestión de riesgos de seguridad cibernética de la organización se establecen, comunican y supervisan.{
    =Verdadero
    ~Falso
}

::15::La función de Identificar (ID) es donde se conocen los riesgos actuales de seguridad cibernética de la organización{
    =Verdadero
    ~Falso
}

::16::La función de Proteger (PR) es donde se utilizan medidas de protección para gestionar los riesgos de seguridad cibernética de la organización{
    =Verdadero
    ~Falso
}

::17::La función de  Detectar (DE) es donde se detectan y analizan posibles ataques y situaciones comprometedoras en materia de seguridad cibernética{
    =Verdadero
    ~Falso
}

::18::La función de Responder (RS) es donde se toman medidas en relación con un incidente de seguridad cibernética detectado{
    =Verdadero
    ~Falso
}

::19::La función de Recuperar (RC) es donde se restauran los activos y las operaciones afectados por un incidente de seguridad cibernética{
    =Verdadero
    ~Falso
}

::20::La función de Gobernar (GV) es donde se conocen los riesgos actuales de seguridad cibernética de la organización{
    =Falso
    ~Verdadero
}

::21::La función de Identificar (ID) es la estrategia, las expectativas y la política de gestión de riesgos de seguridad cibernética de la organización se establecen, comunican y supervisan.{T}

::22::La función de Proteger (PR) es donde se detectan y analizan posibles ataques y situaciones comprometedoras en materia de seguridad cibernética.{F}

::23::La función de Detectar (DE) es donde se utilizan medidas de protección para gestionar los riesgos de seguridad cibernética de la organización.{F}

::24::La función de Responder (RS) es donde se restauran los activos y las operaciones afectados por un incidente de seguridad cibernética.{F}

::25::La función de Recuperar (RC) es donde se toman medidas en relación con un incidente de seguridad cibernética detectado.{F}

::26::¿Es válido indicar que cada función se subdivide en subcategorías?{T}

::27::¿Es válido indicar que cada función se subdivide en categorías?{T}

::28::¿Es válido indicar que cada función se subdivide en categorías y subcategorías?{T}

::29::¿Una subcategoría, describen resultados detallados que apoyan cada categoría?{T}

::30::Las Funciones, Categorías y Subcategorías se aplican a todas las TIC/ICT utilizadas por una organización, incluidas la tecnología de la información (TI), el Internet de las Cosas (IoT) y la Tecnología Operativa (OT).{T}

::31::Son componentes de la función de Gobernar (GV): {
~Comunicación de la recuperación del incidente
~%16.6666%Contexto organizativo
~%16.6666%Estrategia de gestión de riesgos
~%16.6666%Funciones, responsabilidades y autoridades
~%16.6666%Gestión de riesgos de la cadena de suministro en materia de seguridad cibernética
~%16.6666%Política
~%16.6666%Supervisión
~Ejecución del Plan de Recuperación de Incidentes
}

::32::Son componentes de la función de Identificar (ID): {
~%33.3333%Evaluación de riesgos
~%33.3333%Gestión de activos
~%33.3333%Mejora
~Seguridad de datos
~Seguridad de plataformas
}

::33::Son componentes de la función de Proteger (PR): {
~%20%Concienciación y capacitación
~%20%Gestión de identidades, autenticación y control de acceso
~%20%Resistencia de la infraestructura tecnológica
~%20%Seguridad de datos
~%20%Seguridad de plataformas
~Contexto organizativo
~Estrategia de gestión de riesgos
}

::34::Son componentes de la función de Detectar (DE): {
~%50%Análisis de eventos adversos
~Análisis de incidentes
~Gestión de incidentes
~%50%Monitoreo continuo
}

::35::Son componentes de la función de Responder (RS): {
~Análisis de eventos adversos
~%25%Análisis de incidentes
~%25%Gestión de incidentes
~%25%Mitigación de incidentes
~%25%Notificación y comunicación de la respuesta al incidente
}

::36::Son componentes de la función de Recuperar (RC): {
~%50%Comunicación de la recuperación del incidente
~%50%Ejecución del Plan de Recuperación de Incidentes
~Mitigación de incidentes
~Notificación y comunicación de la respuesta al incidente
}

::37::Se comprenden las circunstancias - misión, expectativas de las partes interesadas, dependencias y requisitos legales, normativos y contractuales - que afectan a las decisiones de gestión de riesgos de seguridad cibernética de la organización es el objetivo de la categoría: {
    =Contexto organizativo
    ~Estrategia de gestión de riesgos
    ~Funciones, responsabilidades y autoridades
}

::38::Se establecen, comunican y utilizan las prioridades, las restricciones, las declaraciones de tolerancia y apetito por el riesgo y los supuestos de la organización para respaldar las decisiones sobre el riesgo operativo es el objetivo de la categoría: {
    =Estrategia de gestión de riesgos
    ~Gestión de riesgos de la cadena de suministro de seguridad cibernética
    ~Supervisión
}

::39::Se establecen y comunican las funciones, las responsabilidades y las competencias en materia de seguridad cibernética para fomentar la rendición de cuentas, la evaluación del desempeño y la mejora continua es el objetivo de la categoría: {
    =Funciones, responsabilidades y autoridades
    ~Contexto organizativo
    ~Política
}

::40::La política de seguridad cibernética de la organización es establecida, comunicada y aplicada es el objetivo de la categoría: {
    =Política
    ~Gestión de riesgos de la cadena de suministro en materia de seguridad cibernética
    ~Supervisión
}

::37::La política de seguridad cibernética de la organización es establecida, comunicada y aplicada es el objetivo de la categoría: {
~Gestión de riesgos de la cadena de suministro en materia de seguridad cibernética
=Política
~Supervisión
}

::38::Los resultados de las actividades de gestión de riesgos de seguridad cibernética en toda la organización y el rendimiento se utilizan para informar, mejorar y ajustar la estrategia de gestión de riesgos es el objetivo de la categoría: {
~Gestión de activos
~Gestión de riesgos de la cadena de suministro en materia de seguridad cibernética
=Supervisión
}

::39::Las partes interesadas de la organización identifican, establecen, gestionan, supervisan y mejoran los procesos de gestión de riesgos de la cadena de suministro cibernética es el objetivo de la categoría: {
~Evaluación de riesgos
~Gestión de activos
=Gestión de riesgos de la cadena de suministro en materia de seguridad cibernética
}

::40::Los activos que permiten a la organización alcanzar sus objetivos empresariales se identifican y gestionan de acuerdo con su importancia relativa para los objetivos organizativos y la estrategia de riesgos de la organización es el objetivo de la categoría: {
~Evaluación de riesgos
=Gestión de activos
~Mejora
}

::41::La organización comprende el riesgo de seguridad cibernética para la organización, los activos y los individuos es el objetivo de la categoría: {
=Evaluación de riesgos
~Gestión de identidades, autenticación y control de acceso
~Mejora
}

::42::Se identifican mejoras en los procesos, procedimientos y actividades de gestión de riesgos de seguridad cibernética de la organización en todas las funciones del CSF es el objetivo de la categoría: {
~Concienciación y capacitación
~Gestión de identidades, autenticación y control de acceso
=Mejora
}

::43::El acceso a los activos físicos y lógicos se limita a los usuarios, servicios y hardware autorizados y se gestiona de forma proporcional al riesgo evaluado de acceso no autorizado es el objetivo de la categoría: {
~Concienciación y capacitación
=Gestión de identidades, autenticación y control de acceso
~Seguridad de datos
}

::44::Se proporciona al personal de la organización concienciación y capacitación en seguridad cibernética para que puedan realizar sus tareas relacionadas con la seguridad cibernética es el objetivo de la categoría: {
=Concienciación y capacitación
~Seguridad de datos
~Seguridad de plataformas
}

::45::Los datos se gestionan de forma coherente con la estrategia de riesgos de la organización para proteger la confidencialidad, integridad y disponibilidad de la información es el objetivo de la categoría: {
=Seguridad de datos
~Seguridad de plataformas
~Resiliencia de la infraestructura tecnológica
}

::46::El hardware, el software y los servicios de las plataformas físicas y virtuales se gestionan de acuerdo con la estrategia de riesgos de la organización para proteger su confidencialidad, integridad y disponibilidad es el objetivo de la categoría: {
~Monitoreo continuo
~Resistencia de la infraestructura tecnológica
=Seguridad de plataformas
}

::47::Las arquitecturas de seguridad se gestionan con la estrategia de riesgos de la organización a fin de proteger la confidencialidad, la integridad y la disponibilidad de los activos, así como la resiliencia de la organización es el objetivo de la categoría: {
=Resiliencia de la infraestructura tecnológica
~Monitoreo continuo
~Análisis de eventos adversos
}

::51::Los activos se monitorean para encontrar anomalías, indicadores de compromiso y otros acontecimientos potencialmente adversos es el objetivo de la categoría: {
~Resiliencia de la infraestructura tecnológica
=Monitoreo continuo
~Análisis de eventos adversos
}

::52::Se analizan anomalías, indicadores de compromiso y otros acontecimientos potencialmente adversos para caracterizarlos y detectar incidentes de seguridad cibernética es el objetivo de la categoría: {
=Análisis de eventos adversos
~Gestión de incidentes
~Análisis de incidentes
}

::53::Se gestionan las respuestas a los incidentes de seguridad cibernética detectados es el objetivo de la categoría: {
=Gestión de incidentes
~Análisis de incidentes
~Notificación y comunicación de la respuesta al incidente
}

::54::Se llevan a cabo investigaciones con el fin de garantizar una respuesta eficaz y apoyar las actividades forenses y de recuperación es el objetivo de la categoría: {
=Análisis de incidentes
~Notificación y comunicación de la respuesta al incidente
~Mitigación de incidentes
}

::55::Las actividades de respuesta se coordinan con las partes interesadas internas y externas, según lo exijan las leyes, las normativas o las políticas es el objetivo de la categoría: {
~Gestión de incidentes
~Análisis de incidentes
=Notificación y comunicación de la respuesta al incidente
}

::56::Se llevan a cabo actividades a fin de evitar la expansión de un incidente y mitigar sus efectos es el objetivo de la categoría: {
~Notificación y comunicación de la respuesta al incidente
=Mitigación de incidentes
~Ejecución del Plan de Recuperación de Incidentes
}

::57::Se realizan actividades de restauración que garantizan la disponibilidad operativa de los sistemas y servicios afectados por incidentes de seguridad cibernética es el objetivo de la categoría: {
~Mitigación de incidentes
=Ejecución del Plan de Recuperación de Incidentes
~Comunicación de la recuperación del incidente
}

::58::Se coordinan las actividades de restauración con las partes internas y externas es el objetivo de la categoría: {
~Mitigación de incidentes
~Ejecución del Plan de Recuperación de Incidentes
=Comunicación de la recuperación del incidente
}

::59::Las categorías se utilizan para comprender, adaptar, evaluar, priorizar y comunicar los resultados del Core teniendo en cuenta los objetivos de la misión de una organización, las expectativas de las partes interesadas, el panorama de amenazas y los requisitos. {
=Verdadero
~Falso
}

::60::Los Perfiles Organizativos se utilizan para comprender, adaptar, evaluar, priorizar y comunicar los resultados del Core teniendo en cuenta los objetivos de la misión de una organización, las expectativas de las partes interesadas, el panorama de amenazas y los requisitos. {
=Verdadero
~Falso
}

::61::Un Perfil Organizativo de CSF describe la postura de seguridad cibernética actual u objetivo de una organización en términos de los resultados del Core. {
=Verdadero
~Falso
}

::62::Perfil Actual especifica los resultados esenciales que una organización está logrando actualmente (o intentando lograr) y caracteriza cómo o en qué medida se está logrando cada resultado. {
=Verdadero
~Falso
}

::63::Perfil Objetivo especifica los resultados deseados que una organización ha seleccionado y priorizado para alcanzar sus objetivos de gestión de riesgos de seguridad cibernética. {
=Verdadero
~Falso
}

::64::Perfil Actual especifica los resultados deseados que una organización está logrando actualmente (o intentando lograr) y caracteriza cómo o en qué medida se está logrando cada resultado. {
~Verdadero
=Falso
}

::65::Perfil Objetivo especifica los resultados alcanzados que una organización ha seleccionado y priorizado para alcanzar sus objetivos de gestión de riesgos de seguridad cibernética. {
~Verdadero
=Falso
}

::66::El proceso de establecimiento de perfiles es el siguiente: Alcance del Perfil Organizativo, Recopile la información necesaria para preparar el Perfil Organizativo, Crear el perfil organizativo, Analice las brechas entre el Perfil Actual y el Perfil Objetivo, y cree un plan de acción, e Implemente el plan de acción y actualice el perfil organizativo. {
=Verdadero
~Falso
}

::67::El proceso de establecimiento de perfiles es el siguiente: Alcance del Perfil Organizativo, Recopile la información necesaria para preparar el Perfil Organizativo, cree un plan de acción, e Implemente el plan de acción y actualice el perfil organizativo. {
~Verdadero
=Falso
}

::68::La información como políticas organizativas, prioridades y recursos de gestión de riesgos, perfiles de riesgo empresarial, registros de análisis de impacto en el negocio(BIA), requisitos y estándares de seguridad cibernética seguidos por la organización, prácticas y herramientas (p. ej., procedimientos y salvaguardas), y roles de trabajo, se usan para definir el perfil: {
=Organizativo
~Actual
~Deseado
}

::69::El análisis de brechas para identificar y analizar las diferencias entre los perfiles se hace sobre los perfiles: {
=Perfil Actual y el Perfil Objetivo
~Perfil Actual y el Organizativo
~Perfil Objetivo y el Organizativo
}

::70::Los niveles caracterizan el rigor de las prácticas de gobernanza de riesgos de seguridad cibernética de una organización (Gobernar) y las prácticas de gestión de riesgos de seguridad cibernética (Identificar, Proteger, Detectar, Responder y Recuperar). {
=Verdadero
~Falso
}

::71::Los niveles caracterizan el rigor de las prácticas de gobernanza de riesgos de seguridad cibernética de una organización (Identificar, Proteger, Detectar, Responder y Recuperar) y las prácticas de gestión de riesgos de seguridad cibernética (Gobernar). {
=Verdadero
~Falso
}

::72::¿Los Niveles de CSF son: Parcial, Conocimiento de los riesgos, Repetible y Adaptable? {
=Verdadero
~Falso
}

::73::¿Los Niveles de CSF son: Inicial, Parcial, Conocimiento de los riesgos, Repetible, Adaptable, Completo? {
~Verdadero
=Falso
}

::74::En el Nivel del CSF 1: Parcial la Gobernanza de riesgos de seguridad cibernética se caracteriza por: La aplicación de la estrategia de riesgos de seguridad cibernética de la organización se gestiona de manera ad hoc. {
=Verdadero
~Falso
}

::75::En el Nivel del CSF 2: Conocimiento de los riesgos la Gobernanza de riesgos de seguridad cibernética se caracteriza por: La priorización de las actividades de seguridad cibernética y las necesidades de protección se basan directamente en los objetivos de riesgo de la organización, el entorno de amenazas o los requisitos de negocio/misión. {
=Verdadero
~Falso
}

::76::En el Nivel del CSF 3: Repetible la Gobernanza de riesgos de seguridad cibernética se caracteriza por: Las prácticas de seguridad cibernética de la organización se actualizan periódicamente sobre la base de la aplicación de los procesos de gestión de riesgos a los cambios en los requisitos de negocio/misión, las amenazas y el panorama tecnológico. {
=Verdadero
~Falso
}

::77::En el Nivel del CSF 4: Adaptable la Gobernanza de riesgos de seguridad cibernética se caracteriza por: Existe un enfoque a nivel de toda la organización para gestionar los riesgos de seguridad cibernética que utiliza políticas, procesos y procedimientos basados en los riesgos para hacer frente a posibles eventos de seguridad cibernética. {
=Verdadero
~Falso
}

::78::En el Nivel del CSF 1: Parcial la Gestión de riesgos de seguridad cibernética se caracteriza por: Existe una conciencia limitada sobre los riesgos de seguridad cibernética a nivel organizativo. {
=Verdadero
~Falso
}

::79::En el Nivel del CSF 2: Conocimiento de los riesgos la Gestión de riesgos de seguridad cibernética se caracteriza por: La consideración de la seguridad cibernética en los objetivos y programas de la organización puede ocurrir en algunos, pero no en todos los niveles de la organización. La evaluación del riesgo cibernético de los activos organizativos y externos se produce, pero no suele ser repetible o recurrente. {
=Verdadero
~Falso
}

::80::En el Nivel del CSF 3: Repetible la Gestión de riesgos de seguridad cibernética se caracteriza por: La organización supervisa de forma coherente y precisa los riesgos de seguridad cibernética de los activos. {
=Verdadero
~Falso
}

::81::En el Nivel del CSF 4: Adaptable la Gestión de riesgos de seguridad cibernética se caracteriza por: La información sobre seguridad cibernética se comparte constantemente en toda la organización y con terceros autorizados. {
=Verdadero
~Falso
}

::82::Una organización de qué manera gestiona los riesgos en el CSF: mitigar, transferir, evitar o aceptar riesgos. {
=Verdadero
~Falso
}

::83::Al comprender las expectativas de las partes interesadas, el apetito y la tolerancia al riesgo, una organización se pueden priorizar las actividades de seguridad cibernética para tomar decisiones informadas sobre los gastos y las acciones de seguridad cibernética. {
=Verdadero
~Falso
}

::84::Puede existir una relación entre los Riesgos de Seguridad Cibernética y los Riesgos de Privacidad {
=Verdadero
~Falso
}

::85::La cadena de suministro (SC) al tener relaciones complejas e interconectadas puede verse afectada por ataque cibernéticos? {
=Verdadero
~Falso
}

::86::La gestión de riesgos de la cadena de suministro (SCRM) de seguridad cibernética (C-SCRM) es un proceso sistemático para gestionar la exposición a los riesgos de seguridad cibernética a lo largo de las cadenas de suministro y desarrollar estrategias, políticas, procesos y procedimientos de respuesta adecuados. {
=Verdadero
~Falso
}

::87::La cadena de suministro (SC) no se puede ver afectada por ataque cibernéticos? {
~Verdadero
=Falso
}

::88::Existe un Marco de Gestión de Riesgos de Inteligencia Artificial del NIST (AI RMF) {
=Verdadero
~Falso
}

::89::La definición de Categoría de CSF  es: Un grupo de resultados de seguridad cibernética relacionados que colectivamente comprenden una Función de CSF. {
=Verdadero
~Falso
}

::90::La definición de Categoría de CSF  es: Una taxonomía de resultados de seguridad cibernética de alto nivel que puede ayudar a cualquier organización a gestionar sus riesgos de seguridad cibernética. {
~Verdadero
=Falso
}

::91::La definición del CSF Core es: Una taxonomía de resultados de seguridad cibernética de alto nivel que puede ayudar a cualquier organización a gestionar sus riesgos de seguridad cibernética. Sus componentes son una jerarquía de Funciones, Categorías y Subcategorías que detallan cada resultado. {
=Verdadero
~Falso
}

::92::La definición del CSF Core es: Una taxonomía de resultados de seguridad cibernética de alto nivel que puede ayudar a cualquier organización a gestionar sus riesgos de seguridad cibernética. {
=Verdadero
~Falso
}

::93::La definición de Función de CSF es: El mayor nivel de la organización para los resultados de seguridad cibernética. Hay seis funciones de CSF: Gobernar, Identificar, Proteger, Detectar, Responder y Recuperar. {
=Verdadero
~Falso
}

::94::La definición del Nivel del CSF es: Una caracterización del rigor de las prácticas de gobierno y gestión de riesgos de seguridad cibernética de una organización. Hay cuatro niveles: Parcial (Nivel 1), Riesgo Informado (Nivel 2), Repetible (Nivel 3) y Adaptativo (Nivel 4). {
=Verdadero
~Falso
}

::95::La definición de Función de CSF es: El menor nivel de la organización para los resultados de seguridad cibernética. Hay cuatro funciones de CSF: Gobernar, Identificar, Proteger, y Recuperar. {
~Verdadero
=Falso
}

::96::La definición del Nivel del CSF es: Una caracterización del rigor de las prácticas de gestión de riesgos de seguridad cibernética de una organización. Hay tres niveles: Parcial (Nivel 1), Riesgo Informado (Nivel 2), Repetible (Nivel 3). {
~Verdadero
=Falso
}

::97::La definición del Perfil Actual del CSF es: Una parte de un Perfil Organizativo que especifica los resultados esenciales que una organización está logrando actualmente (o intentando lograr) y determina cómo o en qué medida se está logrando cada resultado. {
=Verdadero
~Falso
}

::98::La definición del Perfil Objetivo del CSF es: Una parte de un Perfil Organizativo que especifica los resultados esenciales deseados que una organización ha seleccionado y priorizado para lograr sus objetivos de gestión de riesgos de seguridad cibernética. {
=Verdadero
~Falso
}

::99::La definición del Perfil Actual del CSF es: Una parte de un Perfil Organizativo que especifica los resultados esenciales deseados que una organización ha seleccionado y priorizado para lograr sus objetivos de gestión de riesgos de seguridad cibernética. {
~Verdadero
=Falso
}

::100::La definición del Perfil Objetivo del CSF es: Una parte de un Perfil Organizativo que especifica los resultados esenciales que una organización está logrando actualmente (o intentando lograr) y determina cómo o en qué medida se está logrando cada resultado. {
~Verdadero
=Falso
}

::101::La definición del Perfil organizativo del CSF es: Un mecanismo para describir la postura de seguridad cibernética actual u objetivo de una organización en términos de los resultados del CSF Core. {
=Verdadero
~Falso
}

::102::La definición de una Subcategoría del CSF es: Un grupo de resultados más específicos de actividades técnicas y de gestión de seguridad cibernética que comprenden una categoría del CSF. {
=Verdadero
~Falso
}
`;
