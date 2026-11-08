/* CÓMO ES EL PARCIAL — estructura del examen y temas que se repiten */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "parcial",
    title: "Cómo es el parcial",
    tag: "🎓",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Segundo parcial · Guía de examen</div>
          <h1>Cómo es el parcial</h1>
          <p class="lead">Basado en un parcial real del profesor (modelo con 2 temas) y en un parcial virtual de otra cursada, para entender el formato antes de rendir.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Alcance exacto de este parcial</div>
          <p>Entra desde la <b>Clase 8 (8/10, arranca en Multiplexación)</b> hasta la <b>Clase 12 (5/11, Satélites)</b>.
          Confirmado por el profesor en clase y corroborado por compañeros en el grupo del curso:</p>
          <div class="grid-2" style="margin-top:10px">
            <div class="card"><span class="pill green">Entra</span>
              <ul style="margin:8px 0 0">
                <li>Multiplexación (FDM, TDM, PDH, SDH)</li>
                <li>Teoría de la Información</li>
                <li>Capacidad de canal (Shannon-Hartley)</li>
                <li>Tratamiento de errores</li>
                <li>Medios guiados (sin fibra óptica)</li>
                <li>Medios no guiados / radio</li>
                <li>Satélites</li>
              </ul>
            </div>
            <div class="card"><span class="pill amber">NO entra</span>
              <ul style="margin:8px 0 0">
                <li><b>Modulación digital</b> (ASK/PSK/FSK/QAM, diagramas de constelación) — confirmado por el
                profesor, no entra desde que el parcial arranca en Multiplexación.</li>
                <li><b>Fibra óptica</b> — el profesor lo dijo explícitamente, aunque esté en el apunte de medios
                físicos junto con lo que sí entra.</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>Estructura del examen</h2>
        <ul>
          <li>El parcial tiene <b>6 puntos</b>.</li>
          <li>Para <b>aprobar</b>: 4 puntos correctos.</li>
          <li>Para <b>promocionar</b>: 5 puntos correctos + el sexto correctamente planteado.</li>
          <li>El punto 6 suele dar a elegir <b>una de dos sub-opciones</b> (por ejemplo: 6a "Microondas" o 6b
          "Errores"; o 6a "Satélites" o 6b "ROE") — elegís la que más te cierre y desarrollás solo esa.</li>
        </ul>

        <h2>Temas que se repiten entre exámenes (dentro de este alcance)</h2>
        <p>Estos son los puntos que aparecieron, con variantes, tanto en el parcial modelo del profesor como en un
        parcial virtual de otra cursada. Son los que más conviene tener "automatizados":</p>
        <ol class="steps">
          <li><span class="step-title">Crosstalk en UTP</span> Explicar NEXT o FEXT, su fórmula en dB, y dibujar un
          esquema con los dos pares y los equipos involucrados. También puede pedir PSNEXT y por qué importa desde
          Gigabit Ethernet. Ver <a class="inline" data-go="medios-guiados" style="cursor:pointer">Medios guiados</a>.</li>
          <li><span class="step-title">PDH / Ley A</span> Demostrar paso a paso la velocidad de una trama E1 de
          primer orden (muestreo → cuantificación → canal → trama) y dar la tabla de órdenes E1-E4. Ver
          <a class="inline" data-go="multiplexacion" style="cursor:pointer">Multiplexación</a>.</li>
          <li><span class="step-title">Enlace VHF en línea de vista</span> Dado un enlace de X km (o alturas de
          antena), calcular lo que falta, <b>justificando</b> la fórmula con el factor K (condiciones de refracción
          atmosférica) y graficando el esquema geométrico. Ver
          <a class="inline" data-go="medios-no-guiados" style="cursor:pointer">Medios no guiados</a>.</li>
          <li><span class="step-title">Shannon-Hartley con cambio de parámetro</span> Dado C y S/N, calcular B; o si
          se duplica el ruido o se reduce B a la mitad, hallar la nueva S/N necesaria para sostener la misma C.
          Cuidado con la conversión dB ↔ lineal. Ver
          <a class="inline" data-go="capacidad-canal" style="cursor:pointer">Capacidad de canal</a>.</li>
          <li><span class="step-title">CRC</span> Dado un mensaje M(x) y un generador G(x), calcular la trama a
          transmitir (mensaje + resto) y la comprobación en recepción. También puede preguntar en qué capa del modelo
          OSI se aplica. Es el ejercicio numérico "estrella" de errores. Ver
          <a class="inline" data-go="errores" style="cursor:pointer">Tratamiento de errores</a>.</li>
          <li><span class="step-title">ARQ</span> Describir la corrección "hacia atrás" con un diagrama de secuencia
          (emisor/receptor, tramas, ACK/NACK). Ver
          <a class="inline" data-go="errores" style="cursor:pointer">Tratamiento de errores</a>.</li>
          <li><span class="step-title">Antena sólida vs. rejilla</span> Cuál usar según la frecuencia (alta/baja) y
          por qué (razón eléctrica y mecánica), más repetidores pasivos y activos. Ver
          <a class="inline" data-go="medios-no-guiados" style="cursor:pointer">Medios no guiados</a>.</li>
          <li><span class="step-title">Órbitas satelitales</span> Nombrar y caracterizar GEO/MEO/LEO/HEO, de qué
          depende la cobertura de un satélite, y qué órbita conviene para un servicio en tiempo real (y por qué, en
          términos de delay). Ver <a class="inline" data-go="satelites" style="cursor:pointer">Satélites</a>.</li>
          <li><span class="step-title">ROE</span> Qué significa, en qué parte de un circuito aparece (desadaptación
          de impedancias) y sus consecuencias (menor alcance, calentamiento, daño del transmisor, distorsión). Ver
          <a class="inline" data-go="medios-guiados" style="cursor:pointer">Medios guiados</a>.</li>
        </ol>

        <div class="callout tip">
          <div class="callout-title">✅ Cómo se combina la dificultad</div>
          <p>Cada punto mezcla una parte <b>teórico-descriptiva</b> (definir, explicar, indicar) con, casi siempre, un
          pedido de <b>graficar</b> un esquema o diagrama como parte de la respuesta — no alcanza con la fórmula
          sola. Los ejercicios numéricos que más se repiten son línea de vista (altura/distancia de antenas) y
          Shannon-Hartley con cambio de parámetro; CRC es el numérico obligado de la sección de errores.</p>
        </div>

        <div class="callout warn">
          <p><b>Recordatorio final:</b> si en el apunte o en algún parcial de muestra ves un punto de Fibra óptica o
          de Modulación digital, no es parte de este parcial — salteálo tranquilo y enfocate en lo de arriba.</p>
        </div>

        <p>Ahora sí, a practicar: <a class="inline" data-go="preguntas" style="cursor:pointer">ir a Preguntas</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
