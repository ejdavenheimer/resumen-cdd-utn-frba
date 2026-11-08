/* MEDIOS DE TRANSMISIÓN GUIADOS — par trenzado, coaxial, crosstalk, ROE */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "medios-guiados",
    title: "Medios guiados",
    tag: "🔌",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 11</div>
          <h1>Medios de transmisión guiados</h1>
          <p class="lead">Cable de cobre: por qué se trenza, por qué se degrada la señal, y qué pasa cuando las impedancias no coinciden.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Guiados vs. no guiados</div>
          <p><b>Guiados</b> (alámbricos): la onda viaja confinada dentro de un medio físico — cobre (y fibra óptica,
          que no entra en este parcial). <b>No guiados</b> (inalámbricos): la señal se irradia al aire, cualquier
          antena sintonizada en esa frecuencia puede captarla.</p>
        </div>

        <h2>Par trenzado (Twisted Pair)</h2>
        <p><b>¿Por qué se trenza?</b> Por cancelación electromagnética: los dos hilos llevan la misma señal en fases
        opuestas. Si una interferencia externa golpea el cable, afecta a los dos hilos por igual — y el receptor, al
        calcular la <b>diferencia</b> de potencial entre ambos, anula matemáticamente ese ruido.</p>

        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">UTP</h3><p>Sin blindaje/malla. Más barato, pero más susceptible
          al ruido externo.</p></div>
          <div class="card"><h3 style="margin-top:0">FTP / STP</h3><p>Con lámina o malla de aluminio. Obligatorio
          cerca de motores o transformadores (fuentes fuertes de interferencia electromagnética).</p></div>
        </div>

        <div class="table-wrap"><table class="data">
          <thead><tr><th>Categoría</th><th>Ancho de banda</th><th>Velocidad / distancia</th></tr></thead>
          <tbody>
            <tr><td>Cat 5e</td><td>100 MHz</td><td>1 Gbps a 100 m</td></tr>
            <tr><td>Cat 6</td><td>250 MHz</td><td>1 Gbps a 100 m, o 10 Gbps limitando a 37-55 m</td></tr>
            <tr><td>Cat 6A</td><td>500 MHz</td><td>10 Gbps en los 100 m completos</td></tr>
          </tbody>
        </table></div>

        <h2>Cable coaxial</h2>
        <p>Estructura en capas: núcleo de cobre (conductor central) → aislante dieléctrico → malla metálica exterior
        (masa, actúa como Jaula de Faraday contra el ruido) → cubierta plástica.</p>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">50 Ω</h3><p>Señales digitales (Ethernet 10Base2, ya en desuso) y
          conexión de antenas de radiofrecuencia.</p></div>
          <div class="card"><h3 style="margin-top:0">75 Ω</h3><p>Señales analógicas de video/TV por cable (CATV).</p></div>
        </div>

        <h2>Física del cable: por qué se degrada la señal</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">📉 Atenuación</h3><p>Pérdida de amplitud por la resistencia
          propia del cobre. Aumenta con la frecuencia y con la temperatura. Se mide en dB/km.</p></div>
          <div class="card"><h3 style="margin-top:0">🧲 Efecto piel (Skin Effect)</h3><p>A frecuencias altas (MHz), el
          campo magnético interno empuja a los electrones hacia la superficie del conductor. El centro del hilo queda
          "vacío", el área útil de conducción se achica y la resistencia se dispara.</p></div>
        </div>

        <h3>Diafonía (Crosstalk) — el tema que más se repite en examen</h3>
        <p>Es la interferencia que se induce entre pares de un mismo cable, por estar físicamente tan cerca.</p>
        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">NEXT (paradiafonía)</h3>
            <p>El par que transmite induce ruido en el par receptor <b>adyacente</b>, medido en el <b>mismo extremo</b>
            donde se originó la transmisión. Es el <b>más destructivo</b>: el ruido golpea al receptor local con toda
            su fuerza, sin haber tenido tiempo de atenuarse.</p>
            <p style="margin:0"><b>NEXT(dB) = 10 · log₁₀(P_tx / P_ruido)</b> — se busca el valor más <b>alto</b>
            posible (NEXT = 60 dB es excelente; NEXT = 10 dB es un desastre).</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">FEXT (telediafonía)</h3>
            <p>Se mide en el extremo <b>opuesto</b> del cable. Es menos destructiva porque el ruido inducido viaja por
            todo el cable y se atenúa igual que la señal útil — llega más débil.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">PSNEXT (Power Sum NEXT)</h3>
            <p>Suma matemática de TODO el ruido NEXT que varios pares "agresores" inducen a la vez sobre un par
            "víctima". Se volvió crítico desde Gigabit Ethernet porque usa los 4 pares de forma bidireccional y
            simultánea — un par receptor sufre el bombardeo de los otros tres juntos. En redes de 100 Mbps (solo 2
            pares activos) no era relevante.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Sesgo de retardo (Delay Skew)</h3>
            <p>Los 4 pares de un UTP tienen distinta cantidad de vueltas de trenzado por metro, así que su longitud
            física real difiere levemente. Si la diferencia de llegada entre el par más rápido y el más lento supera
            ~50 ns, la placa de red no puede sincronizar los bits y descarta el byte entero.</p>
          </div>
        </div>

        <div class="callout tip">
          <div class="callout-title">✅ Para el parcial</div>
          <p>Si te piden "explicar y graficar" NEXT o FEXT: dibujá el cable con dos pares adentro, un transmisor y un
          receptor en cada extremo, y marcá con una flecha corta (NEXT, mismo extremo) o una flecha larga que recorre
          todo el cable (FEXT, extremo opuesto) de dónde sale el ruido inducido.</p>
        </div>

        <p><b>Normativa de conexión:</b> T568A y T568B son dos convenciones distintas de orden de colores para
        crimpar un conector RJ45. Misma norma en ambas puntas = cable <b>directo</b>; distinta norma en cada punta =
        cable <b>cruzado</b>. Hoy la mayoría de los equipos tiene <b>Auto-MDIX</b>, que detecta automáticamente los
        roles de transmisión/recepción por software, así que el cable cruzado quedó casi obsoleto.</p>

        <h2>Impedancia característica (Z₀)</h2>
        <p>Un cable largo se modela como una cadena infinita de circuitos elementales con 4 parámetros distribuidos
        por kilómetro: Resistencia (R) e Inductancia (L) en serie; Capacitancia (C) y Conductancia (G, fugas de
        corriente por el aislante) en paralelo.</p>
        <p>La <span class="var-def">Impedancia Característica (Z₀)</span> es un valor propio de la fabricación del
        cable (en UTP estándar, 100 Ω). Si Z₀ del cable no coincide con la impedancia del equipo receptor, se produce
        una <b>Pérdida por Retorno</b>: la onda eléctrica choca contra la placa y rebota de nuevo hacia el emisor,
        arruinando la transmisión.</p>

        <h2>ROE — Relación de Onda Estacionaria (VSWR)</h2>
        <p>Mide qué tan bien se transfiere la energía desde el cable/línea hacia la antena (o hacia cualquier carga).</p>
        <div class="callout info"><p style="margin:0"><b>ROE = V_max / V_min</b> &nbsp; (voltaje máximo y mínimo que
        se forma por el choque entre la onda que va hacia la antena y la que vuelve reflejada)</p></div>
        <ul>
          <li><b>Valor ideal: 1:1</b> — toda la energía sale, nada vuelve.</li>
          <li><b>Causa:</b> desadaptación de impedancias (ej. un equipo de 50 Ω conectado a una antena de 75 Ω).</li>
        </ul>
        <h3>Consecuencias de un ROE alto (clásico de examen)</h3>
        <ol class="steps">
          <li><span class="step-title">Menor alcance</span> Se irradia menos potencia útil hacia afuera.</li>
          <li><span class="step-title">Calentamiento</span> La energía que rebota puede derretir el plástico del cable.</li>
          <li><span class="step-title">Daño fatal</span> La onda reflejada choca contra la etapa amplificadora del
          transmisor y puede quemar los transistores finales.</li>
          <li><span class="step-title">Distorsión</span> El eco en la línea afecta la BER en transmisiones de
          datos/video.</li>
        </ol>

        <p>Sigue <a class="inline" data-go="medios-no-guiados" style="cursor:pointer">Medios no guiados / Radio</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
