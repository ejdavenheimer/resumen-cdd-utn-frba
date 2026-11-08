/* TEORÍA DE LA INFORMACIÓN — entropía, Huffman, eficiencia */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "teoria-informacion",
    title: "Teoría de la Información",
    tag: "📊",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 8-9</div>
          <h1>Teoría de la Información</h1>
          <p class="lead">Cómo "medir" la información, y por qué un mensaje que ya sabés de antemano no te informa nada.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Idea central</div>
          <p>La información mide <b>cuánta duda saca</b> un mensaje. Si un suceso es <b>seguro</b> (probabilidad = 1,
          ya sabías lo que iba a pasar), no te aporta ninguna información nueva. Cuanto <b>menos probable</b> es un
          suceso, <b>más</b> información trae cuando ocurre.</p>
        </div>

        <div class="callout info"><p><b>Ejemplo sencillo:</b> si el pronóstico dice "mañana sale el sol" en el desierto,
        no te sorprende nada (poca información). Si dice "mañana nieva en el desierto", eso sí es información, porque
        era muy poco probable.</p></div>

        <h2>Información de un símbolo</h2>
        <p>La información que aporta un símbolo A se calcula así:</p>
        <div class="callout info"><p style="margin:0"><b>I_A = log<sub>b</sub>(1 / P_A)</b></p></div>
        <p>La base del logaritmo define la <b>unidad</b> en la que medís:</p>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Base</th><th>Unidad</th><th>Equivalencia</th></tr></thead>
          <tbody>
            <tr><td>b = 2</td><td>Shannon (bit)</td><td>la que más se usa</td></tr>
            <tr><td>b = 10</td><td>Hartley</td><td>1 Hartley = 3,32 Shannon</td></tr>
            <tr><td>b = e</td><td>Nat</td><td>1 Nat = 1,44 Shannon · 1 Hartley = 2,30 Nat</td></tr>
          </tbody>
        </table></div>
        <p>Caso extremo: si P_A = 1 (certeza total), I_A = log(1/1) = log(1) = <b>0</b>. Un emisor que siempre repite
        lo mismo no es, en rigor, una fuente de información.</p>

        <h2>Entropía — el promedio de toda la fuente</h2>
        <p>La entropía (H) no mide un símbolo solo, sino <b>toda la fuente en promedio</b>: qué tan "impredecible" o
        caótica es en general.</p>
        <div class="callout info"><p style="margin:0"><b>H = − Σ P<sub>j</sub> · log<sub>2</sub>(P<sub>j</sub>)</b>
        &nbsp; [bits/símbolo]</p></div>

        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">Caso binario (2 símbolos)</h3>
            <p>La entropía máxima posible es <b>1 bit/símbolo</b>, y se da exactamente cuando los dos símbolos son
            <b>equiprobables</b> (P = 0,5 cada uno). Ahí hay máxima incertidumbre.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Caso equiprobable general</h3>
            <p>Si hay M símbolos y todos tienen la misma probabilidad (P = 1/M), la fórmula se simplifica:
            <b>H = log₂(M)</b> — ni hace falta sumar.</p>
          </div>
        </div>

        <h3>Ejemplo resuelto</h3>
        <ol class="steps">
          <li><span class="step-title">Datos</span> Una fuente tiene 32 símbolos, todos equiprobables.</li>
          <li><span class="step-title">Fórmula a usar</span> Como son equiprobables, uso H = log₂(M).</li>
          <li><span class="step-title">Cálculo</span> H = log₂(32) = <b>5 Shannons</b> (porque 2⁵ = 32).</li>
        </ol>

        <h2>Tasa de información</h2>
        <p>Si la entropía dice cuánta información trae <b>cada símbolo en promedio</b>, la tasa dice cuánta información
        se transmite <b>por segundo</b>:</p>
        <div class="callout info"><p style="margin:0"><b>T = H · V<sub>m</sub></b> &nbsp; (V_m = símbolos por segundo,
        "velocidad de modulación") &nbsp;→&nbsp; resultado en bps</p></div>

        <h2>Compresión de Huffman</h2>
        <p>Un código de longitud fija (como ASCII, siempre 7 bits por símbolo) gasta lo mismo para un símbolo muy
        frecuente que para uno rarísimo. Huffman hace algo más inteligente: les da <b>códigos cortos</b> a los símbolos
        frecuentes y <b>códigos largos</b> a los raros. Así la longitud promedio del mensaje baja.</p>
        <div class="callout info"><p style="margin:0">Longitud media: <b>L = Σ P<sub>i</sub> · l<sub>i</sub></b>
        &nbsp;·&nbsp; El objetivo es que L se acerque lo más posible a H (el mínimo teórico).</p></div>

        <h2>Eficiencia de un código (η)</h2>
        <div class="callout info"><p style="margin:0"><b>η = H / n</b> &nbsp; (n = bits físicos que realmente usa la
        palabra de código)</p></div>

        <h3>Ejemplo resuelto</h3>
        <ol class="steps">
          <li><span class="step-title">1. Entropía de la fuente</span> 90 símbolos equiprobables →
          H = log₂(90) ≈ <b>6,49 Shannons</b>.</li>
          <li><span class="step-title">2. ¿Cuántos bits físicos hacen falta?</span> Con 6 bits solo se llega a
          2⁶ = 64 combinaciones (no alcanza para 90). Con 7 bits se llega a 2⁷ = 128 combinaciones (sí alcanza).
          Entonces n = <b>7 bits</b>.</li>
          <li><span class="step-title">3. Eficiencia</span> η = 6,49 / 7 = <b>92,7%</b>.</li>
          <li><span class="step-title">4. Interpretación</span> El 7,3% restante se "desperdicia": son las
          128 − 90 = 38 combinaciones de 7 bits que quedan sin usar.</li>
        </ol>

        <div class="callout tip">
          <div class="callout-title">✅ Para el parcial</div>
          <p>Esta cuenta de eficiencia se repite con cualquier cantidad de símbolos: primero calculá H, después buscá
          el n mínimo tal que 2ⁿ ≥ M, y dividí.</p>
        </div>

        <p>Sigue <a class="inline" data-go="capacidad-canal" style="cursor:pointer">Capacidad de canal (Shannon-Hartley)</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
