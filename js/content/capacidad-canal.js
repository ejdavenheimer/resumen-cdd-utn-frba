/* CAPACIDAD DE CANAL CON RUIDO — Shannon-Hartley y Nyquist */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "capacidad-canal",
    title: "Capacidad de canal",
    tag: "📡",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 9</div>
          <h1>Capacidad de canal con ruido</h1>
          <p class="lead">Cuánta información como máximo puede viajar por un canal, sabiendo que siempre hay ruido de fondo.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Teorema de Shannon-Hartley</div>
          <p style="margin:0 0 8px"><b>C = B · log₂(1 + S/N)</b> &nbsp; [bps]</p>
          <ul style="margin:0">
            <li><span class="var-def">C</span>: capacidad máxima teórica del canal (bps).</li>
            <li><span class="var-def">B</span>: ancho de banda del <b>medio físico</b> (Hz) — no de la señal.</li>
            <li><span class="var-def">S/N</span>: relación señal/ruido, en <b>unidades lineales de potencia</b>.</li>
          </ul>
        </div>

        <div class="callout warn"><p><b>El error más común:</b> meter la relación S/N directamente en dB dentro de la
        fórmula. Shannon-Hartley necesita el número lineal, nunca decibeles directos.</p></div>

        <h2>Paso a paso: convertir dB ↔ lineal</h2>
        <ol class="steps">
          <li><span class="step-title">De dB a lineal</span> S/N<sub>lineal</sub> = 10<sup>(S/N<sub>dB</sub> / 10)</sup></li>
          <li><span class="step-title">De lineal a dB</span> (S/N)<sub>dB</sub> = 10 · log₁₀(S/N<sub>lineal</sub>)</li>
        </ol>

        <h3>¿Y si el ejercicio da tensión (Volts) en vez de potencia?</h3>
        <p>La potencia es proporcional al <b>cuadrado</b> de la tensión. Si te dan V_s (señal) y V_n (ruido) en volts,
        primero hay que elevar al cuadrado el cociente:</p>
        <ol class="steps">
          <li><span class="step-title">1. Datos</span> V_s = 10 V, V_n = 0,005 V.</li>
          <li><span class="step-title">2. Elevar al cuadrado el cociente</span> S/N = (V_s / V_n)² = (10 / 0,005)²
          = (2000)² = <b>400.000</b>.</li>
          <li><span class="step-title">3. Listo para Shannon</span> Ese 400.000 ya está en unidades de potencia, se
          puede usar directo en C = B·log₂(1+S/N).</li>
        </ol>

        <h2>La "Ley Suprema" del parcial</h2>
        <div class="callout tip">
          <p style="margin:0"><b>T ≤ C</b> — la Tasa de información que quiere mandar el emisor (T, de Teoría de la
          Información) nunca puede superar la Capacidad física del canal (C). Si T &gt; C, los bits se corrompen y se
          pierde información. Es la conexión conceptual entre este tema y el anterior.</p>
        </div>

        <h2>Ejercicio típico: despejar un parámetro</h2>
        <p>El parcial casi nunca pide solo "calculá C". Lo típico es darte C y S/N y pedir B, o cambiar un dato
        (duplicar el ruido, reducir el ancho de banda a la mitad) y preguntar qué pasa con el otro. La receta es
        siempre la misma: <b>escribir la fórmula, reemplazar lo que sé, despejar lo que me falta.</b></p>
        <ol class="steps">
          <li><span class="step-title">1. Identificar qué dato falta</span> ¿Te dan C y S/N y falta B? ¿O te dan C y B
          y falta S/N?</li>
          <li><span class="step-title">2. Pasar todo a unidades lineales</span> Si S/N está en dB, convertilo primero.</li>
          <li><span class="step-title">3. Despejar</span> Por ejemplo, si falta B: B = C / log₂(1 + S/N).
          Si falta S/N: S/N = 2<sup>(C/B)</sup> − 1.</li>
          <li><span class="step-title">4. Regla práctica</span> A menos ancho de banda disponible, para sostener la
          misma capacidad C hace falta <b>más</b> S/N (más potencia de señal o menos ruido). Son inversamente
          compensables.</li>
        </ol>

        <h2>Nyquist — el caso ideal (sin ruido)</h2>
        <p>Nyquist no es lo mismo que Shannon: describe el límite de velocidad de un canal <b>perfecto</b>, sin ruido.
        No hay que confundirlos en el parcial.</p>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Tipo de canal</th><th>Fórmula</th></tr></thead>
          <tbody>
            <tr><td>Binario (2 niveles)</td><td>V_tmax = 2 · Δf</td></tr>
            <tr><td>Multinivel (n niveles)</td><td>V_tmax = 2 · Δf · log₂(n)</td></tr>
          </tbody>
        </table></div>

        <h2>Ruido y distorsión — por qué existe el S/N</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">📉 Atenuación</h3><p>Pérdida de energía/potencia de la señal por
          la resistencia propia del medio (el cable "gasta" la señal a medida que avanza).</p></div>
          <div class="card"><h3 style="margin-top:0">🌊 Distorsión por retardo de grupo</h3><p>Las distintas
          frecuencias que componen la señal viajan a velocidades levemente distintas; el pulso se "estira" y genera
          interferencia entre símbolos vecinos.</p></div>
          <div class="card"><h3 style="margin-top:0">🌡️ Ruido térmico</h3><p>Ruido "blanco", presente en todas las
          frecuencias, proporcional a la temperatura del medio/equipo.</p></div>
          <div class="card"><h3 style="margin-top:0">🔊 Factor de ruido</h3><p>Cuantifica cuánto ruido agrega un
          amplificador. Por eso en los receptores de satélite el amplificador de bajo ruido (LNA) se pone <b>lo más
          cerca posible de la antena</b>: si primero se amplifica el ruido del cable, el daño ya está hecho.</p></div>
        </div>

        <p>Sigue <a class="inline" data-go="errores" style="cursor:pointer">Tratamiento de errores</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
