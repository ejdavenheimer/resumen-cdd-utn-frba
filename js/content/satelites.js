/* SATÉLITES — órbitas, bandas, segmento espacial/terrestre */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "satelites",
    title: "Satélites",
    tag: "🛰️",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 12</div>
          <h1>Sistemas satelitales</h1>
          <p class="lead">Un satélite es, ni más ni menos, una estación repetidora puesta muy arriba para enlazar puntos de la Tierra que no se ven entre sí.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Geosíncrona vs. geoestacionaria — no es lo mismo</div>
          <ul style="margin:0">
            <li><b>Geosíncrona:</b> el período orbital coincide con el período de rotación de la Tierra (≈23 h 56 min).
            Nada más que eso.</li>
            <li><b>Geoestacionaria:</b> geosíncrona + <b>circular</b> + <b>ecuatorial</b> + mismo sentido de rotación
            que la Tierra. Solo cumpliendo las cuatro condiciones el satélite queda aparentemente "fijo" sobre un
            punto de la superficie.</li>
          </ul>
        </div>
        <p>La <b>inclinación orbital</b> se mide respecto al plano del ecuador terrestre. En un satélite
        geoestacionario, la inclinación es ≈0°.</p>

        <h2>Paso a paso: de dónde sale la altura de un satélite GEO (35.786 km)</h2>
        <p>Se igualan dos fuerzas: la gravedad que tira del satélite hacia la Tierra, y la fuerza centrípeta que hace
        falta para que se mantenga en órbita circular.</p>
        <ol class="steps">
          <li><span class="step-title">1. Igualar fuerzas</span> Fuerza gravitatoria = Fuerza centrípeta:
          G·M·m / R² = m·ω²·R</li>
          <li><span class="step-title">2. Simplificar la masa del satélite (m)</span> aparece en los dos lados y se
          cancela: G·M / R² = ω²·R</li>
          <li><span class="step-title">3. Reemplazar ω por 2π/T</span> (T = período orbital):
          G·M / R² = (4π² / T²) · R</li>
          <li><span class="step-title">4. Despejar R³</span> R³ = G·M·T² / (4π²)</li>
          <li><span class="step-title">5. Raíz cúbica</span> R = ∛( G·M·T² / 4π² )</li>
          <li><span class="step-title">6. Reemplazar datos conocidos</span> T = 86.164 s (día sideral),
          G·M = 3,986×10¹⁴ m³/s² → <b>R ≈ 42.164 km</b> (medidos desde el <b>centro</b> de la Tierra).</li>
          <li><span class="step-title">7. Restar el radio terrestre</span> Altura h = R − R_tierra =
          42.164 − 6.378 ≈ <b>35.786 km</b> (ahora sí, desde la superficie).</li>
        </ol>
        <div class="callout warn"><p>Ojo con la resta del paso 7: el resultado de la fórmula (R) es desde el
        <b>centro</b> de la Tierra. Si te preguntan la <b>altura</b> sobre la superficie, hay que restarle el radio
        terrestre (6378 km).</p></div>

        <h2>Tipos de órbita</h2>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Órbita</th><th>Altura</th><th>Características clave</th></tr></thead>
          <tbody>
            <tr><td><b>LEO</b></td><td>640 – 1600 km</td><td>Vuelta completa en ~90 min. Cada satélite es visible
            pocos minutos por estación. Necesita constelaciones grandes (ej. Iridium: 66 satélites). Potencia de Tx
            baja, antenas omnidireccionales, lanzamiento barato. Delay bajísimo (~10-40 ms). Ideal para voz/internet
            en tiempo real (ej. Starlink).</td></tr>
            <tr><td><b>MEO</b></td><td>4.000 – 15.000 km</td><td>Visible 1-2 horas por pasada. Para cobertura
            continua: ~10 satélites en 2 planos. Delay medio (~70 ms). Uso principal: navegación (GPS, GLONASS).</td></tr>
            <tr><td><b>GEO</b></td><td>≈36.000 km</td><td>Disponibilidad 24 h sobre el mismo punto. Con 3 satélites
            se cubre toda la Tierra. Requiere mucha potencia de Tx y antenas parabólicas costosas. RTT &gt; 500 ms —
            malísimo para tiempo real. Ejemplo: ARSAT.</td></tr>
            <tr><td><b>HEO</b></td><td>órbita muy elíptica</td><td>Apogeo alto (tipo MEO/GEO o más), perigeo bajo
            (tipo LEO). Sirve para cubrir zonas polares. Ejemplos: Molnya, Sirius Radio.</td></tr>
          </tbody>
        </table></div>

        <div class="callout tip">
          <div class="callout-title">✅ Pregunta típica: "¿qué órbita conviene para tiempo real?"</div>
          <p>La respuesta siempre pasa por el <b>delay</b> (latencia): a mayor altura, mayor distancia que recorre la
          señal, mayor retardo. Por eso <b>LEO</b> es la mejor opción para servicios interactivos (voz, videollamada,
          internet), aunque necesite muchos satélites para dar cobertura continua. GEO es la peor para tiempo real
          pero la mejor para difusión (TV) porque un solo satélite cubre una región entera, siempre fijo.</p>
        </div>

        <h2>Bandas de frecuencia satelitales</h2>
        <p>Bandas L, S, C, X, Ku, K, Ka (entre 1 GHz y 40 GHz aprox.). Regla general: a <b>menor</b> frecuencia, menor
        problema con el vapor de agua pero <b>menos</b> ancho de banda disponible; a <b>mayor</b> frecuencia, más
        ancho de banda pero más atenuación por lluvia/humedad. La banda K (18-26 GHz) es tan sensible al vapor de
        agua que no se usa para comunicaciones con el espacio exterior.</p>
        <p><b>Marco regulatorio argentino</b> (Resoluciones 14 y 242/97): Banda C (3,4-8,4 GHz) en libre competencia
        entre proveedores; Banda Ku (12,4-18 GHz) bajo modalidad de exclusividad.</p>

        <h2>Transponder</h2>
        <p>Es la unidad del satélite que recibe la señal que sube desde la Tierra, la amplifica y la retransmite en
        otra frecuencia distinta (función de repetidor). Tiene un ancho de banda limitado (típicamente 36 o 54 MHz) y
        un satélite puede llevar varios a bordo.</p>

        <h2>Arquitectura de un sistema satelital</h2>
        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">🛰️ Segmento espacial (el satélite)</h3>
            <p>Subsistemas: comunicaciones/payload (carga útil), generación y distribución de potencia (paneles
            solares), estabilización (propulsores) y control de temperatura. Estructura típica: antena receptora →
            transponder (amplifica y traslada frecuencia) → antena transmisora, más paneles solares y propulsores.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">🌍 Segmento terrestre (las estaciones)</h3>
            <p>Se caracteriza por: tamaño de antena, potencia de transmisión, sensibilidad de recepción, capacidad de
            canales y modo de acceso. La calidad de una estación terrena se resume en la relación
            <span class="var-def">G/T</span> (ganancia de antena sobre temperatura de ruido): cuanto más alta, mejor
            la estación.</p>
          </div>
        </div>

        <h2>Servicios típicos</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">📡 Difusión</h3><p>Punto-multipunto: una sola estación
          transmisora y muchas receptoras. Ejemplo: distribución de señal para redes de TV por cable (CATV).</p></div>
          <div class="card"><h3 style="margin-top:0">📱 Móviles</h3><p>Punto a punto o multipunto entre una estación
          fija (conectada a la red pública) y una móvil. Ejemplo: teléfonos satelitales Iridium o Inmarsat.</p></div>
        </div>

        <p>Seguís con <a class="inline" data-go="parcial" style="cursor:pointer">Cómo es el parcial</a> para repasar
        la estructura del examen y el estilo de preguntas, o directo a
        <a class="inline" data-go="preguntas" style="cursor:pointer">practicar con preguntas</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
