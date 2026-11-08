/* MULTIPLEXACIÓN — FDM, TDM, PDH, SDH */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "multiplexacion",
    title: "Multiplexación",
    tag: "🔀",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 8-9</div>
          <h1>Multiplexación</h1>
          <p class="lead">Cómo meter muchas comunicaciones dentro de un solo cable, sin que se pisen entre sí.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Definición</div>
          <p>Multiplexar es tomar un canal físico de alta capacidad y repartirlo entre varios usuarios al mismo tiempo,
          sin que se interfieran. Sirve para ahorrar: en vez de tirar un cable por cada comunicación, se tira <b>uno solo</b>
          y se reparte.</p>
        </div>

        <p>Hay dos formas de repartir ese canal, según qué "recurso" se divide: la <b>frecuencia</b> o el <b>tiempo</b>.
        El resto de las técnicas (CDMA por código, OFDMA, SDMA por espacio) existen pero no son el foco de este parcial.</p>

        <h2>FDM — División en Frecuencia</h2>
        <p>Cada usuario recibe una "franja" (banda) de frecuencia distinta, como si cada uno tuviera su propia radio
        sintonizada en un dial diferente. Entre franja y franja se deja una <span class="var-def">banda de guarda</span>,
        un colchón vacío para que los filtros (que nunca son perfectos) no mezclen un canal con el de al lado.</p>

        <div class="callout info"><p><b>Ejemplo sencillo:</b> el dial de la radio FM es FDM puro — cada emisora es una
        franja de frecuencia fija, todas viajando por el aire al mismo tiempo sin mezclarse.</p></div>

        <h3>Jerarquía analógica (CCITT)</h3>
        <p>La telefonía analógica agrupaba canales de voz (4 kHz cada uno) en bloques cada vez más grandes:</p>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Grupo</th><th>Canales de voz</th><th>Formado por</th></tr></thead>
          <tbody>
            <tr><td>Primario</td><td>12</td><td>12 canales de 4 kHz (48 kHz de ancho total)</td></tr>
            <tr><td>Secundario</td><td>60</td><td>5 grupos primarios</td></tr>
            <tr><td>Terciario</td><td>300</td><td>5 grupos secundarios</td></tr>
            <tr><td>Cuaternario</td><td>900</td><td>3 grupos terciarios</td></tr>
            <tr><td>Quinario</td><td>2700</td><td>3 grupos cuaternarios</td></tr>
          </tbody>
        </table></div>
        <p>No hace falta memorizar la tabla entera: lo importante para el parcial es la <b>idea</b> (cada escalón agrupa
        varios del escalón anterior) y que el Grupo Primario son <b>12 canales</b>.</p>

        <h2>TDM — División en Tiempo</h2>
        <p>En vez de repartir frecuencia, todos los usuarios comparten <b>toda</b> la frecuencia disponible, pero se
        turnan en el tiempo: a cada uno le toca una "ranurita" (time slot) que se repite muchas veces por segundo.</p>

        <div class="callout tip">
          <div class="callout-title">🎯 Para visualizarlo</div>
          <p>Pensá en una ronda de truco: cada jugador (usuario) tira su carta (sus bits) cuando le toca el turno,
          siempre en el mismo orden, dando vueltas sin parar.</p>
        </div>

        <h3>Las 3 variantes de TDM</h3>
        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">1️⃣ Sincrónico (STDM)</h3>
            <p>Cada usuario tiene su ranura <b>fija</b>, pase lo que pase. Si no tiene nada para decir, esa ranura viaja
            <b>vacía</b> — se desperdicia capacidad.</p>
            <span class="pill indigo">Ejemplo: tramas E1 / T1</span>
          </div>
          <div class="card">
            <h3 style="margin-top:0">2️⃣ Asincrónico (ATDM)</h3>
            <p>Las ranuras son flexibles: se asignan de forma dinámica según quién las necesita en ese momento.</p>
            <span class="pill indigo">Más eficiente que el sincrónico</span>
          </div>
          <div class="card">
            <h3 style="margin-top:0">3️⃣ Estadístico</h3>
            <p>Asigna espacio dinámicamente según la <b>demanda real</b> y la <b>prioridad</b> del tráfico: a quien más
            necesita mandar, más espacio se le da.</p>
            <span class="pill green">Ejemplo: Frame Relay, X.25, TCP/UDP</span>
          </div>
          <div class="card">
            <h3 style="margin-top:0">⚠️ No confundir</h3>
            <p><b>TDM/FDM</b> (Capa 1, física) reparte el canal entre señales de <b>una misma fuente/red</b>. <b>TDMA/FDMA</b>
            (Capa 2, acceso múltiple) es el protocolo que coordina a <b>usuarios independientes</b> que compiten por el medio.</p>
          </div>
        </div>

        <h2>Paso a paso: velocidad de una trama E1</h2>
        <p>Este es el ejercicio numérico clásico de multiplexación. Se resuelve siempre con la misma receta:</p>
        <ol class="steps">
          <li><span class="step-title">1. Muestreo (Nyquist)</span> La voz está acotada a 4000 Hz, así que hay que
          muestrear al doble: <span class="var-def">f_muestreo = 2 × 4000 = 8000 muestras/segundo</span>.</li>
          <li><span class="step-title">2. Cuantificación (PCM, Ley A)</span> Cada muestra se convierte en una palabra
          digital de <b>8 bits</b>.</li>
          <li><span class="step-title">3. Velocidad de un canal (DS0)</span> V_canal = 8000 muestras/s × 8 bits =
          <b>64.000 bps (64 kbps)</b>.</li>
          <li><span class="step-title">4. Velocidad de la trama E1</span> Un E1 agrupa 32 canales de 64 kbps:
          V_E1 = 32 × 64.000 = <b>2.048.000 bps = 2,048 Mbps</b>.</li>
        </ol>

        <div class="callout info">
          <p><b>¿Qué hacen esos 32 canales?</b> 30 son para usuarios (voz o datos, time slots TS1-TS15 y TS17-TS31).
          El <b>TS0</b> es para sincronismo y alarmas. El <b>TS16</b> es señalización (marcado, ocupado); como un solo
          TS16 no alcanza para avisar de 30 usuarios, se usa <span class="var-def">Multitrama</span>: se agrupan 16
          tramas (2 ms en total) para que el TS16 vaya señalizando de a dos canales por vuelta.</p>
        </div>

        <h2>PDH — Jerarquía Digital Plesiócrona</h2>
        <p><b>Plesiócrono</b> = "casi síncrono". Cada tributario (cada E1 que llega de una ciudad distinta) tiene su
        propio reloj, parecido pero no idéntico al de los demás. Para multiplexarlos sin que choquen los bits, se
        insertan <span class="var-def">bits de relleno/justificación</span>.</p>
        <div class="callout warn"><p><b>Por eso un Orden 2 no es exactamente 4× el Orden 1</b>: 4 × 2,048 = 8,192 Mbps,
        pero la velocidad real del E2 es <b>8,448 Mbps</b> — la diferencia son los bits de relleno y control añadidos.
        Es un detalle que suelen preguntar para ver si entendiste el concepto, no solo la tabla.</p></div>

        <div class="table-wrap"><table class="data">
          <thead><tr><th>Orden</th><th>Nombre</th><th>Canales de voz</th><th>Formado por</th><th>Velocidad real</th></tr></thead>
          <tbody>
            <tr><td>1°</td><td>E1</td><td>30</td><td>Base</td><td>2,048 Mbps</td></tr>
            <tr><td>2°</td><td>E2</td><td>120</td><td>4 tramas E1</td><td>8,448 Mbps</td></tr>
            <tr><td>3°</td><td>E3</td><td>480</td><td>4 tramas E2</td><td>34,368 Mbps</td></tr>
            <tr><td>4°</td><td>E4</td><td>1920</td><td>4 tramas E3</td><td>139,264 Mbps</td></tr>
          </tbody>
        </table></div>

        <h2>SDH — Jerarquía Digital Síncrona</h2>
        <p>Nació para resolver dos problemas de PDH: 1) para sacar una sola llamada de 64 kbps de un paquete de
        140 Mbps había que <b>desarmar todo</b>; 2) el mundo tenía 3 normas incompatibles (Europa/América/Japón).</p>
        <p>En SDH, toda la red se sincroniza con un <b>único reloj maestro atómico</b>. Como todo está en fase, no
        hacen falta bits de relleno. Se usa un <span class="var-def">Puntero</span>: indica exactamente en qué byte
        empieza la información de cada usuario, así se puede extraer una sola llamada directamente
        (<span class="var-def">Add/Drop</span>) sin desmultiplexar la trama entera.</p>

        <h3>Paso a paso: de dónde sale 155,52 Mbps (STM-1)</h3>
        <ol class="steps">
          <li><span class="step-title">1. Tamaño de la trama</span> La trama STM-1 es una matriz de 270 columnas × 9
          filas de bytes = <b>2430 bytes</b>.</li>
          <li><span class="step-title">2. Frecuencia de trama (Nyquist)</span> Igual que con la voz, se envían
          <b>8000 tramas por segundo</b> (período de 125 µs).</li>
          <li><span class="step-title">3. Multiplicar todo</span> 2430 bytes × 8 bits/byte × 8000 tramas/s =
          <b>155.520.000 bps = 155,52 Mbps</b>.</li>
        </ol>

        <div class="table-wrap"><table class="data">
          <thead><tr><th>Nivel</th><th>Velocidad</th></tr></thead>
          <tbody>
            <tr><td>STM-1</td><td>155,52 Mbps</td></tr>
            <tr><td>STM-4</td><td>622,06 Mbps</td></tr>
            <tr><td>STM-16</td><td>2,488 Gbps (≈2,5G)</td></tr>
            <tr><td>STM-64</td><td>9,953 Gbps (≈10G)</td></tr>
            <tr><td>STM-256</td><td>39,813 Gbps (≈40G)</td></tr>
          </tbody>
        </table></div>

        <p>De las 270 columnas, las primeras 9 son <span class="var-def">Overhead (SOH)</span> — información de
        control dividida en 3 partes: <b>RSOH</b> (filas 1-3, para los regeneradores), el <b>Puntero</b> (fila 4, dónde
        empieza la info del cliente) y <b>MSOH</b> (filas 5-9, multiplexación y anillos de respaldo). Las 261 columnas
        restantes son el <b>Payload</b>, empaquetado en Contenedores Virtuales (ej. VC-12 encapsula un E1 completo).</p>

        <div class="callout tip">
          <div class="callout-title">✅ Para el parcial</div>
          <p>Si te piden demostrar la velocidad de un E1 o de un STM-1, siempre es la misma lógica:
          <b>(tamaño de la unidad en bits) × (cuántas unidades por segundo)</b>. No hace falta memorizar el resultado,
          hace falta saber armar la cuenta.</p>
        </div>

        <p>Seguimos con <a class="inline" data-go="teoria-informacion" style="cursor:pointer">Teoría de la Información</a>,
        que en el apunte de clase viene justo después de Multiplexación.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
