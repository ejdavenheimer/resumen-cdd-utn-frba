/* PREGUNTAS — repaso del 2do parcial (Multiplexación → Satélites) */
(function () {
  "use strict";
  const APP = window.APP;

  function vf(correct) {
    return [{ t: "Verdadero", ok: correct === "V" }, { t: "Falso", ok: correct === "F" }];
  }

  const QUESTIONS = [
    // --- Multiplexación ---
    { n: 1, topic: "Multiplexación", type: "vf",
      q: "En FDM se dejan bandas de guarda entre canales para evitar que los filtros imperfectos mezclen un canal con el de al lado.",
      options: vf("V") },

    { n: 2, topic: "Multiplexación", type: "mc",
      q: "¿Cuántos canales de voz agrupa el Grupo Primario de la jerarquía analógica FDM?",
      options: [
        { t: "12", ok: true },
        { t: "24", ok: false },
        { t: "30", ok: false },
        { t: "60", ok: false },
      ] },

    { n: 3, topic: "Multiplexación", type: "vf",
      q: "La velocidad de un E2 es exactamente 4 veces la de un E1 (8,192 Mbps).",
      options: vf("F"),
      explain: "Es 8,448 Mbps real, no 8,192. La diferencia son los bits de relleno/justificación que exige PDH por ser plesiócrono (relojes casi, pero no exactamente, iguales)." },

    { n: 4, topic: "Multiplexación", type: "mc",
      q: "¿Cuál es la velocidad del nivel STM-1 de SDH?",
      options: [
        { t: "2,048 Mbps", ok: false },
        { t: "8,448 Mbps", ok: false },
        { t: "155,52 Mbps", ok: true },
        { t: "622,08 Mbps", ok: false },
      ] },

    { n: 5, topic: "Multiplexación", type: "multi",
      q: "¿Cuáles de las siguientes son variantes de TDM?",
      options: [
        { t: "TDM sincrónico", ok: true },
        { t: "TDM asincrónico", ok: true },
        { t: "TDM estadístico", ok: true },
        { t: "FDM estadístico", ok: false },
      ] },

    { n: 6, topic: "Multiplexación", type: "open",
      q: "Explicá la diferencia entre multiplexación (TDM/FDM) y acceso múltiple (TDMA/FDMA).",
      answer: "TDM/FDM es una técnica de Capa 1 (física): reparte un canal entre señales de una misma fuente/red. TDMA/FDMA es un protocolo de Capa 2 (enlace/MAC): coordina a usuarios independientes que compiten por el mismo medio." },

    { n: 7, topic: "Multiplexación", type: "open",
      q: "En el TDM sincrónico, ¿qué pasa si un usuario no tiene nada para transmitir en su ranura?",
      answer: "La ranura (time slot) viaja igual, pero vacía: es capacidad desperdiciada, porque las ranuras son fijas y no se reasignan dinámicamente (a diferencia del TDM asincrónico o estadístico)." },

    // --- Teoría de la Información ---
    { n: 8, topic: "Teoría de la Información", type: "vf",
      q: "Un suceso con probabilidad 1 (certeza absoluta) aporta la máxima información posible.",
      options: vf("F"),
      explain: "Al revés: I = log(1/P), y si P=1, I=0. Un suceso seguro no aporta ninguna información nueva." },

    { n: 9, topic: "Teoría de la Información", type: "mc",
      q: "Una fuente tiene 32 símbolos equiprobables. ¿Cuál es su entropía?",
      options: [
        { t: "4 Shannons", ok: false },
        { t: "5 Shannons", ok: true },
        { t: "6 Shannons", ok: false },
        { t: "32 Shannons", ok: false },
      ],
      explain: "H = log2(M) cuando son equiprobables → log2(32) = 5, porque 2^5 = 32." },

    { n: 10, topic: "Teoría de la Información", type: "open",
      q: "Un alfabeto de 90 símbolos equiprobables se codifica con 7 bits por símbolo. ¿Qué significa que la eficiencia del código sea 92,7%?",
      answer: "H = log2(90) ≈ 6,49 Shannons, pero la palabra física usa n=7 bits (mínimo necesario, porque 6 bits solo cubren 64 combinaciones). η = H/n = 6,49/7 = 92,7%. El 7,3% restante corresponde a las 128-90=38 combinaciones de 7 bits que quedan sin usar." },

    { n: 11, topic: "Teoría de la Información", type: "vf",
      q: "Huffman les asigna códigos más cortos a los símbolos más frecuentes y códigos más largos a los símbolos raros.",
      options: vf("V") },

    // --- Capacidad de canal ---
    { n: 12, topic: "Capacidad de canal", type: "vf",
      q: "En la fórmula de Shannon-Hartley, la relación S/N se puede usar directamente en decibeles.",
      options: vf("F"),
      explain: "Siempre hay que convertirla a unidades lineales de potencia antes de reemplazar en C = B·log2(1+S/N)." },

    { n: 13, topic: "Capacidad de canal", type: "mc",
      q: "En C = B·log2(1+S/N), ¿qué representa B?",
      options: [
        { t: "El ancho de banda del medio físico", ok: true },
        { t: "El ancho de banda ocupado por la señal", ok: false },
        { t: "La capacidad máxima del canal", ok: false },
        { t: "La relación señal/ruido", ok: false },
      ] },

    { n: 14, topic: "Capacidad de canal", type: "open",
      q: "Si se reduce el ancho de banda B a la mitad y se quiere sostener la misma capacidad C, ¿qué tiene que pasar con S/N?",
      answer: "Tiene que aumentar. Al despejar S/N = 2^(C/B) − 1, si B baja (y C se mantiene), el exponente C/B crece, y por lo tanto S/N necesaria crece también: con menos ancho de banda hace falta más potencia de señal (o menos ruido) para sostener la misma capacidad." },

    { n: 15, topic: "Capacidad de canal", type: "vf",
      q: "El teorema de Nyquist describe la velocidad máxima de un canal con ruido, igual que Shannon-Hartley.",
      options: vf("F"),
      explain: "Nyquist es el caso ideal SIN ruido. Shannon-Hartley es el que incluye el ruido (S/N). No hay que confundirlos." },

    // --- Errores ---
    { n: 16, topic: "Errores", type: "vf",
      q: "El checksum de TCP/IP usa aritmética de complemento a 1, donde el acarreo que se sale por la izquierda se vuelve a sumar (wrap-around).",
      options: vf("V") },

    { n: 17, topic: "Errores", type: "mc",
      q: "¿Qué hace el receptor cuando la división CRC de la trama recibida da un resto distinto de cero?",
      options: [
        { t: "Descarta la trama (hubo error)", ok: true },
        { t: "La corrige automáticamente él mismo", ok: false },
        { t: "La retransmite él mismo a otro destino", ok: false },
        { t: "La entrega igual a la capa superior", ok: false },
      ] },

    { n: 18, topic: "Errores", type: "open",
      q: "Mensaje M = 1101011, generador G(x) = x³+x+1 (binario 1011). ¿Cuántos ceros se agregan a M antes de hacer la división?",
      answer: "3 ceros, porque el grado del generador es r=3 (el exponente más alto de G(x)). Siempre se agregan tantos ceros como el grado r del generador." },

    { n: 19, topic: "Errores", type: "vf",
      q: "En ARQ, el receptor corrige el bit roto él mismo, sin pedirle nada al emisor.",
      options: vf("F"),
      explain: "Eso es lo que hace FEC o Hamming (corrección). ARQ solo detecta con CRC y, si hay error, descarta y pide retransmisión (NACK)." },

    { n: 20, topic: "Errores", type: "match",
      q: "Uní cada método de tratamiento de errores con su característica principal.",
      pairs: [
        { l: "CRC", r: "Capa 2 (Ethernet/Wi-Fi), el más robusto para detectar." },
        { l: "ARQ", r: "Corrección hacia atrás: descarta y pide retransmisión." },
        { l: "FEC", r: "Corrección hacia adelante: se usa cuando no se puede retransmitir." },
        { l: "Hamming", r: "Detecta y corrige el bit exacto, sin retransmitir." },
      ] },

    { n: 21, topic: "Errores", type: "open",
      q: "Un mensaje tiene k=11 bits útiles y se le agregan r=4 bits de paridad. ¿Cuál es el rendimiento sincrónico E?",
      answer: "E = k/n = 11/(11+4) = 11/15 ≈ 0,733 = 73,3%." },

    // --- Medios guiados ---
    { n: 22, topic: "Medios guiados", type: "mc",
      q: "¿Cuál tipo de crosstalk es el más destructivo?",
      options: [
        { t: "NEXT", ok: true },
        { t: "FEXT", ok: false },
        { t: "PSNEXT medido en 100 Mbps", ok: false },
        { t: "Delay Skew", ok: false },
      ],
      explain: "NEXT golpea al receptor local con toda su fuerza, sin haber tenido tiempo de atenuarse por distancia." },

    { n: 23, topic: "Medios guiados", type: "vf",
      q: "Un ROE de 1:1 es el valor ideal: significa que toda la energía sale hacia la antena y nada se refleja.",
      options: vf("V") },

    { n: 24, topic: "Medios guiados", type: "open",
      q: "¿Por qué se trenzan los pares de cobre en un cable UTP?",
      answer: "Por cancelación electromagnética: los dos hilos llevan la misma señal en fases opuestas. Si una interferencia externa golpea el cable, afecta por igual a ambos hilos, y el receptor, al tomar la diferencia de potencial entre los dos, anula matemáticamente ese ruido." },

    { n: 25, topic: "Medios guiados", type: "vf",
      q: "El efecto piel (skin effect) hace que, a frecuencias altas, la corriente se concentre en el centro del conductor.",
      options: vf("F"),
      explain: "Es al revés: la corriente se concentra en la superficie exterior del conductor, dejando el centro sin uso, lo que aumenta la resistencia efectiva." },

    // --- Medios no guiados ---
    { n: 26, topic: "Medios no guiados", type: "mc",
      q: "¿Qué valor de K (factor de refracción) representa la condición atmosférica estándar, la que da la constante 4,14 en la fórmula de línea de vista?",
      options: [
        { t: "K = 1", ok: false },
        { t: "K = 4/3", ok: true },
        { t: "K = 2", ok: false },
        { t: "K = 0,5", ok: false },
      ] },

    { n: 27, topic: "Medios no guiados", type: "open",
      q: "Un enlace de 30 km usa dos antenas de la misma altura, en condiciones atmosféricas estándar. ¿Qué altura necesita cada antena?",
      answer: "D = 4,14·√H1 + 4,14·√H2, con H1=H2=H → 30 = 8,28·√H → √H = 3,623 → H ≈ 13,12 metros." },

    { n: 28, topic: "Medios no guiados", type: "vf",
      q: "A frecuencias altas (microondas/SHF) se prefieren antenas de rejilla porque dejan pasar el viento.",
      options: vf("F"),
      explain: "A frecuencias altas se usa antena sólida, porque la longitud de onda es milimétrica y se escaparía por los huecos de la rejilla. La rejilla se usa en frecuencias bajas (VHF/UHF)." },

    { n: 29, topic: "Medios no guiados", type: "vf",
      q: "Hoy en día, el estándar de los radioenlaces de microondas es enteramente digital.",
      options: vf("V") },

    // --- Satélites ---
    { n: 30, topic: "Satélites", type: "vf",
      q: "Un satélite geosíncrono es siempre geoestacionario.",
      options: vf("F"),
      explain: "Geosíncrono solo exige que el período orbital coincida con el de rotación terrestre. Geoestacionario exige además que sea circular, ecuatorial y prógrado (mismo sentido que la rotación terrestre)." },

    { n: 31, topic: "Satélites", type: "mc",
      q: "¿Qué tipo de órbita conviene para un servicio de datos en tiempo real (voz, videollamada)?",
      options: [
        { t: "LEO", ok: true },
        { t: "GEO", ok: false },
        { t: "MEO", ok: false },
        { t: "HEO", ok: false },
      ],
      explain: "LEO tiene el menor delay (~10-40 ms) por estar mucho más cerca de la Tierra, aunque necesite una constelación grande de satélites para dar cobertura continua." },

    { n: 32, topic: "Satélites", type: "mc",
      q: "¿A qué altura aproximada sobre la superficie terrestre orbita un satélite GEO?",
      options: [
        { t: "≈ 800 km", ok: false },
        { t: "≈ 10.000 km", ok: false },
        { t: "≈ 36.000 km", ok: true },
        { t: "≈ 100.000 km", ok: false },
      ] },

    { n: 33, topic: "Satélites", type: "match",
      q: "Uní cada tipo de órbita con su característica principal.",
      pairs: [
        { l: "LEO", r: "Delay muy bajo, visible pocos minutos por estación." },
        { l: "MEO", r: "Usada por sistemas de navegación como el GPS." },
        { l: "GEO", r: "Disponibilidad 24 h, pero RTT superior a 500 ms." },
        { l: "HEO", r: "Órbita muy elíptica, útil para cobertura polar." },
      ] },

    { n: 34, topic: "Satélites", type: "open",
      q: "¿Qué es un transponder?",
      answer: "La unidad del satélite que recibe la señal que sube desde la Tierra, la amplifica y la retransmite en una frecuencia distinta (función de repetidor). Tiene un ancho de banda limitado (típicamente 36 o 54 MHz) y un satélite puede tener varios." },
  ];

  APP.register({
    id: "preguntas",
    title: "Preguntas",
    tag: "📝",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Práctica · 2do parcial</div>
          <h1>Preguntas</h1>
          <p class="lead">Cuestionario interactivo con corrección al instante. Filtrable por tema.</p>
        </div>
        <div id="quizMount"></div>
      `;
      APP.quiz(el.querySelector("#quizMount"), QUESTIONS);
    },
  });
})();
