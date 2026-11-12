/* HOJA DE FÓRMULAS — machete de repaso rápido, sin explicaciones largas */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "formulas",
    title: "Hoja de fórmulas",
    tag: "🧮",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Machete · Repaso rápido</div>
          <h1>Hoja de fórmulas</h1>
          <p class="lead">Solo las cuentas. Si necesitás el porqué de alguna, volvé al tema correspondiente.</p>
        </div>

        <div class="callout warn" style="margin-bottom:22px">
          <p style="margin:0"><b>No entran:</b> fórmulas de Modulación digital ni de Fibra óptica.</p>
        </div>

        <h2>🔀 Multiplexación</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>Muestreo (Nyquist)</td><td><b>f_m = 2 · f_max</b> → voz: 2×4000 = 8000 muestras/s</td></tr>
            <tr><td>Velocidad de 1 canal (DS0)</td><td><b>V_canal = f_m × bits/muestra</b> = 8000×8 = 64.000 bps</td></tr>
            <tr><td>Velocidad trama E1</td><td><b>V_E1 = 32 × V_canal</b> = 32×64.000 = 2.048.000 bps</td></tr>
            <tr><td>PDH — velocidades reales</td><td>E1=2,048 M · E2=8,448 M · E3=34,368 M · E4=139,264 M (no es ×4 exacto, hay bits de relleno)</td></tr>
            <tr><td>Tamaño trama STM-1</td><td>270 col × 9 fil = <b>2430 bytes</b></td></tr>
            <tr><td>Velocidad STM-1</td><td><b>2430 B × 8 bits × 8000 tramas/s</b> = 155.520.000 bps = 155,52 Mbps</td></tr>
            <tr><td>STM-N</td><td>STM-1=155,52M · STM-4=622,06M · STM-16=2,488G · STM-64=9,953G · STM-256=39,813G</td></tr>
          </tbody>
        </table></div>

        <h2>📊 Teoría de la Información</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>Información de un símbolo</td><td><b>I_A = log_b(1/P_A)</b> — b=2→Shannon, b=10→Hartley, b=e→Nat</td></tr>
            <tr><td>Equivalencias</td><td>1 Hartley = 3,32 Shannon &nbsp;·&nbsp; 1 Nat = 1,44 Shannon &nbsp;·&nbsp; 1 Hartley = 2,30 Nat</td></tr>
            <tr><td>Entropía</td><td><b>H = −Σ Pⱼ · log₂(Pⱼ)</b> &nbsp;[bits/símbolo]</td></tr>
            <tr><td>Entropía, símbolos equiprobables</td><td><b>H = log₂(M)</b> &nbsp;(M = cantidad de símbolos)</td></tr>
            <tr><td>Tasa de información</td><td><b>T = H · V_m</b> &nbsp;(V_m = símbolos/segundo) → bps</td></tr>
            <tr><td>Longitud media (Huffman)</td><td><b>L = Σ Pᵢ · lᵢ</b></td></tr>
            <tr><td>Eficiencia de código</td><td><b>η = H / n</b> &nbsp;(n = bits físicos de la palabra; el mínimo n cumple 2ⁿ ≥ M)</td></tr>
          </tbody>
        </table></div>

        <h2>📡 Capacidad de canal</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>Shannon-Hartley</td><td><b>C = B · log₂(1 + S/N)</b> &nbsp;[bps] — S/N SIEMPRE lineal, nunca dB directo</td></tr>
            <tr><td>Despejar B</td><td>B = C / log₂(1 + S/N)</td></tr>
            <tr><td>Despejar S/N</td><td>S/N = 2^(C/B) − 1</td></tr>
            <tr><td>dB → lineal</td><td><b>S/N_lin = 10^(dB/10)</b></td></tr>
            <tr><td>lineal → dB</td><td><b>dB = 10 · log₁₀(S/N_lin)</b></td></tr>
            <tr><td>Si dan tensión (V) en vez de potencia</td><td><b>S/N = (V_s / V_n)²</b></td></tr>
            <tr><td>Niveles distinguibles (AWGN)</td><td>M = √(1 + S/N)</td></tr>
            <tr><td>Nyquist, canal binario (sin ruido)</td><td><b>V_tmax = 2 · Δf</b></td></tr>
            <tr><td>Nyquist, canal multinivel (sin ruido)</td><td><b>V_tmax = 2 · Δf · log₂(n)</b> &nbsp;(n = niveles)</td></tr>
          </tbody>
        </table></div>

        <h2>🛠️ Errores</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>BER</td><td><b>BER = bits erróneos / bits totales transmitidos</b></td></tr>
            <tr><td>CRC — grado del generador</td><td>r = exponente más alto de G(x) &nbsp;(ej. x³+x+1 → 1011 → r=3)</td></tr>
            <tr><td>CRC — receta</td><td>1) agregar r ceros a M &nbsp;2) dividir por G con XOR &nbsp;3) resto=R &nbsp;4) T = M + R &nbsp;5) receptor divide T por G: resto debe dar 0</td></tr>
            <tr><td>Rendimiento sincrónico</td><td><b>E = k / n</b> &nbsp;(k = bits útiles, n = k + r)</td></tr>
          </tbody>
        </table></div>

        <h2>🔌 Medios guiados</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>NEXT</td><td><b>NEXT(dB) = 10 · log₁₀(P_tx / P_ruido)</b> &nbsp;— mejor cuanto MÁS alto</td></tr>
            <tr><td>ROE (VSWR)</td><td><b>ROE = V_max / V_min</b> &nbsp;— ideal 1:1</td></tr>
          </tbody>
        </table></div>

        <h2>📶 Medios no guiados</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>Distancia al horizonte (1 antena)</td><td><b>D (km) = 4,14 · √H</b> &nbsp;(H en metros, asume K=4/3 estándar)</td></tr>
            <tr><td>Distancia total del enlace (2 antenas)</td><td><b>D = 4,14·√h₁ + 4,14·√h₂</b></td></tr>
            <tr><td>Fórmula geométrica pura</td><td>h = d² / (2 · R_efectivo)</td></tr>
            <tr><td>Factor K</td><td>K=1 → R_tierra=6370 km (sin refracción) &nbsp;·&nbsp; K=4/3 → R_efectivo≈8493 km (estándar, da el 4,14)</td></tr>
            <tr><td>Atenuación espacio libre</td><td><b>L_FS(dB) = 32,44 + 20·log₁₀(f) + 20·log₁₀(d)</b> &nbsp;(f en MHz, d en km)</td></tr>
            <tr><td>Límite rejilla vs sólida</td><td>rejilla sirve como sólida si separación s ≤ λ/10</td></tr>
          </tbody>
        </table></div>

        <h2>🛰️ Satélites</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>Radio órbita geoestacionaria</td><td><b>R = ∛( G·M·T² / 4π² )</b> &nbsp;(de G·M·m/R² = m·ω²·R, ω=2π/T)</td></tr>
            <tr><td>Datos para GEO</td><td>T = 86.164 s (día sideral) · G·M = 3,986×10¹⁴ m³/s² · R_tierra = 6378 km</td></tr>
            <tr><td>Resultado GEO</td><td>R ≈ 42.164 km desde el centro → <b>altura h = R − R_tierra ≈ 35.786 km</b></td></tr>
            <tr><td>Alturas de referencia</td><td>LEO: 640-1600 km · MEO: 4.000-15.000 km · GEO: ≈36.000 km</td></tr>
          </tbody>
        </table></div>

        <h2>📐 Constantes y conversiones rápidas</h2>
        <div class="table-wrap"><table class="data">
          <tbody>
            <tr><td>Hz / kHz / MHz / GHz</td><td>1 kHz=10³ Hz · 1 MHz=10⁶ Hz · 1 GHz=10⁹ Hz</td></tr>
            <tr><td>bps / kbps / Mbps / Gbps</td><td>1 kbps=10³ bps · 1 Mbps=10⁶ bps · 1 Gbps=10⁹ bps</td></tr>
            <tr><td>log₂(x)</td><td>log₂(x) = log₁₀(x) / log₁₀(2) = ln(x) / ln(2)</td></tr>
            <tr><td>Potencias de 2 útiles</td><td>2⁵=32 · 2⁶=64 · 2⁷=128 · 2⁸=256 · 2¹⁰=1024</td></tr>
          </tbody>
        </table></div>

        <div class="callout tip" style="margin-top:22px">
          <div class="callout-title">✅ Antes de entrar al parcial</div>
          <p style="margin:0">Repasá en este orden: CRC (hacelo una vez a mano) → Shannon-Hartley (practicá despejar
          B y S/N) → línea de vista (la cuenta de 4,14) → velocidad E1/STM-1 → radio geoestacionario. Son los 5
          ejercicios numéricos que más se repiten.</p>
        </div>

        <p><a class="inline" data-go="preguntas" style="cursor:pointer">Ir a Preguntas</a> para practicar con estas
        fórmulas, o volver a <a class="inline" data-go="parcial" style="cursor:pointer">Cómo es el parcial</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
