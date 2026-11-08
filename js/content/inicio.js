/* Portada / bienvenida — enfocada en el 2do parcial (Multiplexación → Satélites) */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "inicio",
    title: "Bienvenida",
    tag: "★",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · UTN.BA</div>
          <h1>Resumen para el 2do parcial</h1>
          <p class="lead">Desde Multiplexación (Clase 8, 8/10) hasta Satélites (Clase 12, 5/11). Sin Modulación digital ni Fibra óptica.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">🎯 Cómo está armado</div>
          <p>Cada tema tiene su teoría explicada simple, con ejemplos, y las partes prácticas resueltas paso a paso
          como una receta mecánica. Al final hay una sección de
          <a class="inline" data-go="parcial" style="cursor:pointer">cómo es el parcial</a> y un cuestionario de
          <a class="inline" data-go="preguntas" style="cursor:pointer">preguntas</a> interactivas para practicar.</p>
        </div>

        <h2>Temario</h2>
        <div class="grid-2">
          <div class="card" style="cursor:pointer" data-go="multiplexacion">
            <h3 style="margin-top:0">🔀 Multiplexación</h3>
            <p>FDM, TDM (sincrónico/asincrónico/estadístico), trama E1, PDH y SDH.</p>
            <span class="pill indigo">Clase 8-9</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="teoria-informacion">
            <h3 style="margin-top:0">📊 Teoría de la Información</h3>
            <p>Información, entropía, compresión de Huffman, eficiencia de código.</p>
            <span class="pill indigo">Clase 8-9</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="capacidad-canal">
            <h3 style="margin-top:0">📡 Capacidad de canal</h3>
            <p>Shannon-Hartley, Nyquist, ruido y distorsión.</p>
            <span class="pill indigo">Clase 9</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="errores">
            <h3 style="margin-top:0">🛠️ Tratamiento de errores</h3>
            <p>Paridad, checksum, CRC (con ejemplo completo), ARQ, FEC, Hamming.</p>
            <span class="pill indigo">Clase 10</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="medios-guiados">
            <h3 style="margin-top:0">🔌 Medios guiados</h3>
            <p>Par trenzado, coaxial, crosstalk (NEXT/FEXT/PSNEXT), ROE.</p>
            <span class="pill indigo">Clase 11</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="medios-no-guiados">
            <h3 style="margin-top:0">📶 Medios no guiados</h3>
            <p>Propagación de radio, línea de vista, radioenlaces, antenas.</p>
            <span class="pill indigo">Clase 11-12</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="satelites">
            <h3 style="margin-top:0">🛰️ Satélites</h3>
            <p>Órbitas GEO/MEO/LEO/HEO, bandas, segmento espacial y terrestre.</p>
            <span class="pill indigo">Clase 12</span>
          </div>
          <div class="card" style="cursor:pointer" data-go="parcial">
            <h3 style="margin-top:0">🎓 Cómo es el parcial</h3>
            <p>Estructura del examen y los temas que más se repiten entre parciales.</p>
            <span class="pill amber">empezá por acá</span>
          </div>
        </div>

        <div class="callout warn">
          <p><b>No entra:</b> Modulación digital ni Fibra óptica, aunque aparezcan en los apuntes originales —
          confirmado por el profesor.</p>
        </div>

        <div class="card" style="cursor:pointer" data-go="preguntas">
          <h3 style="margin-top:0">📝 Preguntas</h3>
          <p>Cuestionario interactivo con corrección al instante, filtrable por tema.</p>
          <span class="pill green">práctica</span>
        </div>
      `;
      el.querySelectorAll("[data-go]").forEach((c) =>
        c.addEventListener("click", () => APP.go(c.dataset.go))
      );
    },
  });
})();
