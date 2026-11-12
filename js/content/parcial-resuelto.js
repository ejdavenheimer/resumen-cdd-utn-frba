/* PARCIAL RESUELTO — 4 parciales reales de este profesor, resueltos punto por punto (solo lo que entra) */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "parcial-resuelto",
    title: "Parcial resuelto",
    tag: "✅",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Modelo resuelto · Con diagramas</div>
          <h1>Parcial resuelto</h1>
          <p class="lead">Basado en 4 parciales reales de este profesor (dos fechas, Tema 1 y Tema 2 cada una). Cada punto resuelto completo, con los dibujos pedidos bien hechos.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Fuente</div>
          <p>Parcial del 3/11/2025 (Tema 1 y Tema 2) y del 25/6/2026 (Tema 1 y Tema 2), mismo profesor, misma
          estructura. Están resueltos acá SOLO los puntos que entran en tu alcance (Multiplexación → Satélites).
          Los puntos 1 (Fibra óptica) y los de Modulación AM/Digital de esos parciales NO se resuelven porque no
          entran en tu parcial — se nombran para que los identifiques y los saltees tranquilo si ves un enunciado
          parecido.</p>
        </div>

        <h2>1. Crosstalk en UTP — NEXT, FEXT y PSNEXT</h2>
        <p>Consigna típica: <i>"Explicar qué es el Crosstalk del extremo cercano (NEXT). Realizar un dibujo
        evidenciando el efecto e indicando claramente las señales y equipos involucrados. Indicar cómo se calcula y
        expresa."</i></p>

        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 210" font-family="Arial, sans-serif">
            <defs>
              <marker id="arrAcc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/>
              </marker>
              <marker id="arrRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/>
              </marker>
            </defs>
            <text x="310" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">NEXT — Crosstalk del extremo cercano</text>
            <rect x="80" y="55" width="460" height="95" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
            <line x1="100" y1="85" x2="530" y2="85" stroke="#0ea5e9" stroke-width="4" marker-end="url(#arrAcc)"/>
            <text x="310" y="75" text-anchor="middle" font-size="12" fill="#0ea5e9">Par 1 — transmite (agresor)</text>
            <line x1="100" y1="125" x2="530" y2="125" stroke="#475569" stroke-width="4"/>
            <text x="310" y="145" text-anchor="middle" font-size="12" fill="#475569">Par 2 — recibe (víctima)</text>
            <rect x="5" y="50" width="70" height="105" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="40" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Equipo A</text>
            <text x="40" y="90" text-anchor="middle" font-size="11" fill="#0ea5e9">Tx →</text>
            <text x="40" y="130" text-anchor="middle" font-size="11" fill="#475569">← Rx</text>
            <rect x="545" y="50" width="70" height="105" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="580" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Equipo remoto</text>
            <text x="580" y="90" text-anchor="middle" font-size="11" fill="#0ea5e9">→ Rx</text>
            <text x="580" y="130" text-anchor="middle" font-size="11" fill="#475569">Tx ←</text>
            <path d="M120,88 C145,100 145,112 120,124" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrRed)"/>
            <text x="195" y="108" font-size="12" font-weight="700" fill="#dc2626">ruido NEXT</text>
            <line x1="100" y1="40" x2="100" y2="165" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="100" y="180" text-anchor="middle" font-size="11" fill="#94a3b8">extremo cercano</text>
            <text x="100" y="195" text-anchor="middle" font-size="11" fill="#94a3b8">(mismo lado del Tx)</text>
          </svg>
          <p class="diagram-caption">Equipo A transmite por el Par 1 y, en el mismo extremo, recibe por el Par 2: el ruido se mide ahí mismo, sin haber recorrido cable.</p>
        </div>

        <p><b>Respuesta:</b> el NEXT (Near-End Crosstalk) es el ruido que el par transmisor induce sobre el par
        receptor vecino, medido en el <b>mismo extremo</b> donde se originó la transmisión. Es el más destructivo de
        los tres porque golpea al receptor local con toda su fuerza, sin haber tenido tiempo de atenuarse por
        distancia.</p>
        <div class="callout info"><p style="margin:0"><b>NEXT (dB) = 10 · log₁₀(P_tx / P_ruido)</b> — se busca el
        valor más <b>alto</b> posible (ej. NEXT=60dB es excelente, NEXT=10dB es un desastre).</p></div>

        <p>Consigna hermana: <i>"Explicar qué es el Crosstalk del extremo lejano (FEXT). Realizar un dibujo
        evidenciando el efecto e indicando claramente las señales y equipos involucrados. Indicar cómo se calcula."</i></p>

        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 210" font-family="Arial, sans-serif">
            <defs>
              <marker id="arrAcc2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/>
              </marker>
              <marker id="arrRed2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/>
              </marker>
            </defs>
            <text x="310" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">FEXT — Crosstalk del extremo lejano</text>
            <rect x="80" y="55" width="460" height="95" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
            <line x1="100" y1="85" x2="530" y2="85" stroke="#0ea5e9" stroke-width="4" marker-end="url(#arrAcc2)"/>
            <text x="310" y="75" text-anchor="middle" font-size="12" fill="#0ea5e9">Par 1 — transmite (agresor)</text>
            <line x1="100" y1="125" x2="530" y2="125" stroke="#475569" stroke-width="4"/>
            <text x="310" y="145" text-anchor="middle" font-size="12" fill="#475569">Par 2 — recibe (víctima)</text>
            <rect x="5" y="50" width="70" height="105" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="40" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Equipo A</text>
            <text x="40" y="100" text-anchor="middle" font-size="11" fill="#0ea5e9">Tx →</text>
            <text x="40" y="118" text-anchor="middle" font-size="10" fill="#94a3b8">(Par 1)</text>
            <rect x="545" y="50" width="70" height="105" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="580" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Equipo B</text>
            <text x="580" y="100" text-anchor="middle" font-size="11" fill="#475569">→ Rx</text>
            <text x="580" y="118" text-anchor="middle" font-size="10" fill="#94a3b8">(Par 2, víctima)</text>
            <path d="M120,90 C 260,170 400,170 500,124" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#arrRed2)"/>
            <text x="310" y="178" text-anchor="middle" font-size="12" font-weight="700" fill="#dc2626">ruido FEXT (recorre todo el cable, se atenúa como la señal)</text>
            <line x1="510" y1="40" x2="510" y2="130" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <text x="510" y="30" text-anchor="middle" font-size="11" fill="#94a3b8">extremo lejano (opuesto al Tx)</text>
          </svg>
          <p class="diagram-caption">Acá la víctima recibe en el extremo OPUESTO al transmisor: el ruido viaja todo el cable y llega más débil.</p>
        </div>
        <p><b>Respuesta:</b> el FEXT (Far-End Crosstalk) es el mismo fenómeno pero medido en el extremo
        <b>opuesto</b> del cable. Es menos destructivo porque el ruido inducido recorre todo el cable y se atenúa
        igual que la señal útil, llegando más débil que el NEXT.</p>

        <p>Consigna hermana: <i>"Explicar qué es el Power Sum NEXT (PSNEXT). Realizar un gráfico que lo evidencie."</i></p>
        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 270" font-family="Arial, sans-serif">
            <defs>
              <marker id="arrAcc3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/>
              </marker>
              <marker id="arrRed3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/>
              </marker>
            </defs>
            <text x="310" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">PSNEXT — suma de todos los NEXT sobre un par víctima</text>
            <rect x="90" y="45" width="450" height="175" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
            <line x1="110" y1="70"  x2="520" y2="70"  stroke="#0ea5e9" stroke-width="3.5" marker-end="url(#arrAcc3)"/>
            <line x1="110" y1="105" x2="520" y2="105" stroke="#0ea5e9" stroke-width="3.5" marker-end="url(#arrAcc3)"/>
            <line x1="110" y1="140" x2="520" y2="140" stroke="#0ea5e9" stroke-width="3.5" marker-end="url(#arrAcc3)"/>
            <text x="330" y="60" text-anchor="middle" font-size="12" fill="#0ea5e9">Par 1, Par 2, Par 3 — transmiten a la vez (agresores)</text>
            <line x1="110" y1="190" x2="520" y2="190" stroke="#475569" stroke-width="4"/>
            <text x="330" y="210" text-anchor="middle" font-size="12" fill="#475569">Par 4 — recibe (víctima)</text>
            <rect x="10" y="40" width="75" height="185" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="47" y="125" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Interfaz</text>
            <text x="47" y="140" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Gigabit</text>
            <text x="47" y="158" text-anchor="middle" font-size="9.5" fill="#94a3b8">4 pares</text>
            <text x="47" y="171" text-anchor="middle" font-size="9.5" fill="#94a3b8">activos</text>
            <rect x="545" y="40" width="70" height="185" rx="8" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
            <text x="580" y="135" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">Equipo</text>
            <text x="580" y="150" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f172a">remoto</text>
            <path d="M135,73 C150,110 150,150 145,187" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrRed3)"/>
            <path d="M135,108 C145,130 145,155 143,187" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrRed3)"/>
            <path d="M135,143 C140,155 140,170 141,187" fill="none" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arrRed3)"/>
            <text x="310" y="248" text-anchor="middle" font-size="12.5" font-weight="700" fill="#dc2626">PSNEXT = NEXT(Par1→4) + NEXT(Par2→4) + NEXT(Par3→4)</text>
            <text x="310" y="264" text-anchor="middle" font-size="11" fill="#94a3b8">Crítico desde Gigabit Ethernet: antes (100 Mbps) solo 2 pares estaban activos a la vez</text>
          </svg>
        </div>
        <p><b>Respuesta:</b> el PSNEXT es la suma matemática de todo el ruido NEXT que varios pares "agresores"
        inducen <b>simultáneamente</b> sobre un mismo par víctima. Se volvió crítico desde Gigabit Ethernet porque usa
        los 4 pares de forma bidireccional y simultánea, así que un par receptor sufre el bombardeo de los otros tres
        a la vez. En redes de 100 Mbps (solo 2 pares activos) no era relevante.</p>

        <h2>2. PDH — Ley A (velocidad de la trama E1)</h2>
        <p>Consigna: <i>"Jerarquía Digital Plesiócrona. Indicar la cantidad de canales y demostrar la velocidad de
        transmisión de una trama de primer orden E1. Indicar las frecuencias/cantidad de canales de todos los
        órdenes de multiplexación en PDH."</i></p>
        <ol class="steps">
          <li><span class="step-title">1. Muestreo (Nyquist)</span> voz acotada a 4000 Hz → f_m = 2×4000 = 8000 muestras/s</li>
          <li><span class="step-title">2. Cuantificación (Ley A, PCM)</span> cada muestra → palabra de 8 bits</li>
          <li><span class="step-title">3. Velocidad de 1 canal</span> V = 8000 × 8 = 64.000 bps (64 kbps)</li>
          <li><span class="step-title">4. Velocidad de la trama E1</span> un E1 agrupa <b>30 canales de usuario</b>
          (TS1-15 y TS17-31) + TS0 (sincronismo) + TS16 (señalización) = 32 canales en total:
          V_E1 = 32 × 64.000 = <b>2.048.000 bps = 2,048 Mbps</b></li>
        </ol>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Orden</th><th>Canales de voz</th><th>Velocidad real</th></tr></thead>
          <tbody>
            <tr><td>E1 (1°)</td><td>30</td><td>2,048 Mbps</td></tr>
            <tr><td>E2 (2°)</td><td>120</td><td>8,448 Mbps</td></tr>
            <tr><td>E3 (3°)</td><td>480</td><td>34,368 Mbps</td></tr>
            <tr><td>E4 (4°)</td><td>1920</td><td>139,264 Mbps</td></tr>
          </tbody>
        </table></div>
        <p>Desarrollo completo (incluyendo por qué no es exactamente ×4 entre órdenes) en
        <a class="inline" data-go="multiplexacion" style="cursor:pointer">Multiplexación</a>.</p>

        <h2>3. Enlace VHF en línea de vista</h2>
        <p>Consigna: <i>"Dado un enlace de VHF donde las antenas (de igual altura) del transmisor y receptor se
        encuentran en línea óptica. A qué altura mínima deben encontrarse ambas antenas si la distancia del enlace es
        de 40 km (variante: 30 km). Justificar la fórmula considerando que las condiciones de refracción de la
        atmósfera varían. Graficar el esquema geométrico."</i></p>

        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 330" font-family="Arial, sans-serif">
            <defs>
              <marker id="arrD" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#0f172a"/>
              </marker>
            </defs>
            <text x="310" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">Enlace VHF en línea de vista</text>
            <rect x="0" y="0" width="620" height="260" fill="#ffffff"/>
            <path d="M20,260 L20,250 Q310,218 600,250 L600,260 Z" fill="#d6f5f0" stroke="none"/>
            <path d="M20,250 Q310,218 600,250" fill="none" stroke="#0d9488" stroke-width="3"/>
            <text x="310" y="300" text-anchor="middle" font-size="12" fill="#0d9488">superficie terrestre (curva)</text>
            <line x1="60" y1="250" x2="60" y2="165" stroke="#475569" stroke-width="3"/>
            <circle cx="60" cy="160" r="5" fill="#0f172a"/>
            <text x="35" y="210" text-anchor="middle" font-size="12.5" font-weight="700" fill="#475569">h₁</text>
            <text x="60" y="275" text-anchor="middle" font-size="11" fill="#475569">Antena 1</text>
            <line x1="560" y1="250" x2="560" y2="165" stroke="#475569" stroke-width="3"/>
            <circle cx="560" cy="160" r="5" fill="#0f172a"/>
            <text x="585" y="210" text-anchor="middle" font-size="12.5" font-weight="700" fill="#475569">h₂</text>
            <text x="560" y="275" text-anchor="middle" font-size="11" fill="#475569">Antena 2</text>
            <line x1="60" y1="160" x2="560" y2="160" stroke="#dc2626" stroke-width="2.2"/>
            <text x="310" y="150" text-anchor="middle" font-size="12.5" font-weight="700" fill="#dc2626">línea de vista (tangente a la Tierra)</text>
            <line x1="310" y1="160" x2="310" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <circle cx="310" cy="219" r="4" fill="#0e7490"/>
            <text x="310" y="238" text-anchor="middle" font-size="11" fill="#0e7490">punto de horizonte</text>
            <line x1="62" y1="178" x2="308" y2="178" stroke="#0f172a" stroke-width="1.3" marker-start="url(#arrD)" marker-end="url(#arrD)"/>
            <text x="185" y="194" text-anchor="middle" font-size="12" fill="#0f172a">D₁ = 4,14·√h₁</text>
            <line x1="312" y1="178" x2="558" y2="178" stroke="#0f172a" stroke-width="1.3" marker-start="url(#arrD)" marker-end="url(#arrD)"/>
            <text x="435" y="194" text-anchor="middle" font-size="12" fill="#0f172a">D₂ = 4,14·√h₂</text>
            <text x="310" y="320" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f172a">D (distancia del enlace) = D₁ + D₂ = 4,14·√h₁ + 4,14·√h₂</text>
          </svg>
        </div>

        <div class="callout tip">
          <div class="callout-title">✅ Justificación de la fórmula (no te la saltees)</div>
          <p style="margin:0">La constante 4,14 asume el <b>factor K=4/3</b> (condición atmosférica estándar): la
          atmósfera, más densa cerca del suelo, curva las ondas hacia abajo como una lente, "agrandando"
          matemáticamente el radio de la Tierra (6370 km → ≈8493 km efectivos). Si las condiciones de refracción
          fueran distintas (K=1, sin refracción), habría que usar el radio real de la Tierra y la constante cambiaría,
          exigiendo torres más altas.</p>
        </div>

        <h3>Variante A — enlace de 40 km</h3>
        <ol class="steps">
          <li><span class="step-title">1. Planteo</span> D = 4,14√H₁ + 4,14√H₂, con H₁=H₂=H → D = 8,28√H</li>
          <li><span class="step-title">2. Reemplazo</span> 40 = 8,28√H</li>
          <li><span class="step-title">3. Despejo</span> √H = 40/8,28 = 4,831 → H = 4,831² ≈ <b>23,34 metros</b></li>
        </ol>

        <h3>Variante B — enlace de 30 km</h3>
        <ol class="steps">
          <li><span class="step-title">1. Planteo</span> D = 8,28√H</li>
          <li><span class="step-title">2. Reemplazo</span> 30 = 8,28√H</li>
          <li><span class="step-title">3. Despejo</span> √H = 30/8,28 = 3,623 → H = 3,623² ≈ <b>13,12 metros</b></li>
        </ol>

        <h2>4. Capacidad de canal — Shannon-Hartley (3 variantes reales)</h2>
        <div class="callout tip">
          <div class="callout-title">🎯 Atajo que ahorra tiempo en el parcial</div>
          <p style="margin:0">Si <b>B se reduce a la mitad</b> manteniendo la misma C, se cumple
          <b>(1+S/N_nueva) = (1+S/N_vieja)²</b> — porque log₂(1+S/N_nueva) tiene que valer el doble que antes. Ahorra
          tener que calcular el B original.</p>
        </div>

        <h3>Variante A — C=30 Mbps, S/N=20dB, se reduce B a la mitad</h3>
        <ol class="steps">
          <li><span class="step-title">1. S/N a lineal</span> S/N = 10^(20/10) = <b>100</b></li>
          <li><span class="step-title">2. Aplicar el atajo</span> (1+S/N_nueva) = (1+100)² = 101² = <b>10.201</b></li>
          <li><span class="step-title">3. S/N nueva (lineal)</span> S/N_nueva = 10.200</li>
          <li><span class="step-title">4. Pasar a dB</span> 10·log₁₀(10.200) ≈ <b>40,1 dB</b></li>
        </ol>
        <p>Conclusión: al reducir el ancho de banda a la mitad, la relación señal/ruido necesaria prácticamente se
        duplicó en dB (de 20 a 40,1 dB) — confirma la regla: menos ancho de banda exige mucha más potencia relativa.</p>

        <h3>Variante B — C=10 Mbps, S/N=10dB, se reduce B a la mitad</h3>
        <ol class="steps">
          <li><span class="step-title">1. S/N a lineal</span> S/N = 10^(10/10) = <b>10</b></li>
          <li><span class="step-title">2. Atajo</span> (1+S/N_nueva) = (1+10)² = 121</li>
          <li><span class="step-title">3. S/N nueva (lineal)</span> = 120</li>
          <li><span class="step-title">4. A dB</span> 10·log₁₀(120) ≈ <b>20,8 dB</b></li>
        </ol>

        <h3>Variante C — C=10 Mbps, S/N=20dB, el ruido se duplica (N₂=2·N₁). ¿Qué B hace falta para sostener la misma C?</h3>
        <p>Acá no se puede usar el atajo de arriba (eso era para B a la mitad). Hay que calcular el B original y el
        nuevo B por separado.</p>
        <ol class="steps">
          <li><span class="step-title">1. S/N original a lineal</span> S/N₁ = 10^(20/10) = 100</li>
          <li><span class="step-title">2. B original</span> C = B₁·log₂(1+100) → B₁ = 10.000.000 / log₂(101) =
          10.000.000 / 6,658 ≈ <b>1,50 MHz</b></li>
          <li><span class="step-title">3. Nueva S/N (ruido ×2 → S/N a la mitad)</span> S/N₂ = 100/2 = <b>50</b></li>
          <li><span class="step-title">4. Nuevo B necesario</span> B₂ = C / log₂(1+50) = 10.000.000 / log₂(51) =
          10.000.000 / 5,672 ≈ <b>1,76 MHz</b></li>
        </ol>
        <p>Conclusión: con más ruido (menos S/N), hace falta <b>más</b> ancho de banda (de 1,50 a 1,76 MHz) para
        sostener la misma capacidad — mismo principio que la variante A, aplicado al revés.</p>

        <h2>5. Errores — CRC (2 ejemplos reales completos)</h2>

        <h3>Ejemplo A — generador de grado 3</h3>
        <p>M(x) = 10010110, G(x) = x³+x+1 → binario <b>1011</b> (r=3)</p>
        <div class="table-wrap"><table class="data">
          <thead><tr><th>Ventana (4 bits)</th><th>¿Bit líder = 1?</th><th>Resultado</th></tr></thead>
          <tbody>
            <tr><td>1001</td><td>sí</td><td>XOR 1011 → 0010</td></tr>
            <tr><td>0100</td><td>no</td><td>sigue igual</td></tr>
            <tr><td>1001</td><td>sí</td><td>XOR 1011 → 0010</td></tr>
            <tr><td>0101</td><td>no</td><td>sigue igual</td></tr>
            <tr><td>1010</td><td>sí</td><td>XOR 1011 → 0001</td></tr>
            <tr><td>0010</td><td>no</td><td>sigue igual</td></tr>
            <tr><td>0100</td><td>no</td><td>sigue igual</td></tr>
            <tr><td>1000</td><td>sí</td><td>XOR 1011 → 0011</td></tr>
          </tbody>
        </table></div>
        <p>Resto R = <b>011</b>. Trama a transmitir: T = 10010110 + 011 = <b>10010110011</b>. Verificación: T ÷ 1011
        da resto <b>000</b> → sin error.</p>

        <h3>Ejemplo B — generador de grado 4 (parcial real, 25/6/2026)</h3>
        <p>M(x) = 10110101101, G(x) = x⁴+x+1 → binario <b>10011</b> (r=4)</p>
        <ol class="steps">
          <li><span class="step-title">1. Agregar 4 ceros</span> 10110101101 → 101101011010000</li>
          <li><span class="step-title">2. Dividir por 10011 (ventanas de 5 bits, XOR cuando el bit líder es 1)</span>
            <div class="table-wrap"><table class="data">
              <thead><tr><th>Ventana (5 bits)</th><th>¿Líder=1?</th><th>Resultado</th></tr></thead>
              <tbody>
                <tr><td>10110</td><td>sí</td><td>→ 00101</td></tr>
                <tr><td>01011</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>10110</td><td>sí</td><td>→ 00101</td></tr>
                <tr><td>01011</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>10111</td><td>sí</td><td>→ 00100</td></tr>
                <tr><td>01000</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>10001</td><td>sí</td><td>→ 00010</td></tr>
                <tr><td>00100</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>01000</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>10000</td><td>sí</td><td>→ 00011</td></tr>
                <tr><td>00110</td><td>no</td><td>sigue igual</td></tr>
              </tbody>
            </table></div>
          </li>
          <li><span class="step-title">3. Resto</span> R = <b>0110</b></li>
          <li><span class="step-title">4. Trama a transmitir</span> T = 10110101101 + 0110 = <b>101101011010110</b></li>
          <li><span class="step-title">5. Verificación</span> T ÷ 10011 da resto <b>0000</b> → sin error, trama
          verificada.</li>
        </ol>

        <div class="callout info">
          <div class="callout-title">❓ "¿En qué capa del modelo OSI se aplica CRC? ¿Qué incluye del paquete IP?"</div>
          <p style="margin:0">CRC se aplica en la <b>Capa 2 (Enlace de datos)</b> — es el FCS (Frame Check Sequence)
          de una trama Ethernet o Wi-Fi. El cálculo se hace sobre <b>toda la trama</b>, lo que incluye completo el
          paquete IP encapsulado (su cabecera de Capa 3 y el segmento TCP/UDP de Capa 4 con sus datos): CRC no
          distingue capas superiores, trata todo como una única secuencia de bits.</p>
        </div>

        <h2>6. ARQ — corrección "hacia atrás"</h2>
        <p>Consigna: <i>"Describir en qué consiste la corrección de errores hacia atrás. Hacer un gráfico."</i></p>
        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 470" font-family="Arial, sans-serif">
            <defs>
              <marker id="arrBlk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#0f172a"/></marker>
              <marker id="arrOk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#059669"/></marker>
              <marker id="arrBad" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker>
            </defs>
            <text x="310" y="18" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">ARQ — corrección de errores "hacia atrás"</text>
            <rect x="80" y="32" width="90" height="30" rx="6" fill="#0d9488"/>
            <text x="125" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">Emisor</text>
            <rect x="440" y="32" width="90" height="30" rx="6" fill="#0e7490"/>
            <text x="485" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">Receptor</text>
            <line x1="125" y1="62" x2="125" y2="445" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <line x1="485" y1="62" x2="485" y2="445" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
            <line x1="20" y1="70" x2="20" y2="430" stroke="#475569" stroke-width="1.5" marker-end="url(#arrBlk)"/>
            <text x="20" y="455" text-anchor="middle" font-size="11" fill="#475569">tiempo</text>
            <line x1="125" y1="80" x2="485" y2="112" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arrBlk)"/>
            <text x="305" y="78" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f172a">Trama 1</text>
            <text x="470" y="128" text-anchor="end" font-size="11" fill="#059669">CRC OK ✓</text>
            <line x1="485" y1="140" x2="125" y2="170" stroke="#059669" stroke-width="2.2" stroke-dasharray="7,4" marker-end="url(#arrOk)"/>
            <text x="305" y="144" text-anchor="middle" font-size="12.5" font-weight="700" fill="#059669">ACK 1 (positivo: "llegó bien")</text>
            <line x1="125" y1="192" x2="485" y2="224" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arrBlk)"/>
            <text x="305" y="190" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f172a">Trama 2</text>
            <path d="M300,200 l10,6 l-6,3 l12,9 l-18,-4 l6,-3 z" fill="#dc2626" stroke="#dc2626"/>
            <text x="340" y="212" font-size="11" fill="#dc2626">se daña en el camino</text>
            <text x="470" y="240" text-anchor="end" font-size="11" fill="#dc2626">CRC: resto ≠ 0 ✗</text>
            <line x1="485" y1="252" x2="125" y2="282" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="7,4" marker-end="url(#arrBad)"/>
            <text x="305" y="256" text-anchor="middle" font-size="12.5" font-weight="700" fill="#dc2626">NACK 2 (negativo: "reenviá")</text>
            <line x1="125" y1="304" x2="485" y2="336" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arrBlk)"/>
            <text x="305" y="302" text-anchor="middle" font-size="12.5" font-weight="700" fill="#0f172a">Trama 2 (retransmitida)</text>
            <text x="470" y="352" text-anchor="end" font-size="11" fill="#059669">CRC OK ✓</text>
            <line x1="485" y1="364" x2="125" y2="394" stroke="#059669" stroke-width="2.2" stroke-dasharray="7,4" marker-end="url(#arrOk)"/>
            <text x="305" y="368" text-anchor="middle" font-size="12.5" font-weight="700" fill="#059669">ACK 2 (positivo)</text>
            <text x="305" y="420" text-anchor="middle" font-size="11.5" fill="#475569">El receptor nunca corrige: solo detecta (CRC) y, si hay error, pide retransmisión.</text>
          </svg>
        </div>
        <p><b>Respuesta:</b> en ARQ (Automatic Repeat reQuest) el receptor no corrige nada por sí mismo: solo detecta
        errores con CRC. Si la trama llega corrupta (resto ≠ 0), la descarta y responde con un NACK pidiendo
        retransmisión; si llega bien, responde con ACK. El emisor reenvía únicamente las tramas que recibieron NACK.</p>

        <h2>7. Microondas — antena sólida vs. rejilla y repetidores</h2>
        <p>Consigna: <i>"Se disponen de dos antenas parabólicas, una sólida y la otra tipo rejilla. Indicar cuál
        utilizarías en frecuencias más altas y en más bajas, justificando conceptual y prácticamente. Indicar qué
        representan los repetidores pasivos (dar ejemplos) y qué es un repetidor activo."</i></p>
        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">Frecuencias bajas (VHF/UHF) → Rejilla</h3>
            <p><b>Razón eléctrica:</b> la longitud de onda es grande, así que la rejilla se comporta como una
            superficie sólida para esa onda.<br><b>Razón práctica (la decisiva):</b> deja pasar el viento, reduciendo
            la carga mecánica sobre la torre. Límite de diseño: separación entre barrotes s ≤ λ/10.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Frecuencias altas (microondas/SHF) → Sólida</h3>
            <p>La longitud de onda es milimétrica: con rejilla, la señal se "escaparía" por los huecos. Hace falta
            superficie continua para reflejar correctamente la onda.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Repetidores pasivos</h3>
            <p>Dos antenas parabólicas unidas por una guía de onda de bajas pérdidas (no amplifican, no necesitan
            alimentación), o un reflector pasivo (lámina de aluminio que redirige el frente de onda). Ejemplo: cambiar
            la dirección de un enlace detrás de una montaña sin instalar electrónica activa.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Repetidor activo</h3>
            <p>Dos antenas + equipos electrónicos que <b>amplifican</b> la señal antes de retransmitirla — a
            diferencia del pasivo, sí necesita alimentación eléctrica.</p>
          </div>
        </div>

        <h2>8. Satélites — tipos de órbita y servicio en tiempo real</h2>
        <p>Consigna: <i>"Indicar los distintos tipos de órbitas satelitales describiendo sus nombres y
        características principales. ¿De qué depende la cobertura del satélite? En caso de una comunicación de datos
        en tiempo real, ¿qué tipo de servicio satelital (relacionado con el tipo de órbita) elegirías y por qué?"</i></p>

        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 540" font-family="Arial, sans-serif">
            <defs>
              <radialGradient id="earthGrad" cx="35%" cy="35%" r="70%">
                <stop offset="0%" stop-color="#5eead4"/>
                <stop offset="100%" stop-color="#0d9488"/>
              </radialGradient>
            </defs>
            <text x="290" y="24" text-anchor="middle" font-size="16" font-weight="700" fill="#0f172a">Tipos de órbita satelital</text>
            <ellipse cx="290" cy="280" rx="255" ry="110" transform="rotate(-18 290 280)" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="3,5"/>
            <circle cx="290" cy="280" r="90"  fill="none" stroke="#0ea5e9" stroke-width="2" stroke-dasharray="5,4"/>
            <circle cx="290" cy="280" r="140" fill="none" stroke="#0e7490" stroke-width="2" stroke-dasharray="5,4"/>
            <circle cx="290" cy="280" r="195" fill="none" stroke="#0d9488" stroke-width="2.3" stroke-dasharray="7,3"/>
            <circle cx="290" cy="280" r="40" fill="url(#earthGrad)" stroke="#0f766e" stroke-width="1.5"/>
            <circle cx="290" cy="190" r="5" fill="#0ea5e9"/>
            <text x="235" y="190" text-anchor="end" font-size="13" font-weight="700" fill="#0ea5e9">LEO</text>
            <text x="235" y="205" text-anchor="end" font-size="10.5" fill="#0ea5e9">640–1.600 km</text>
            <circle cx="430" cy="280" r="5" fill="#0e7490"/>
            <text x="445" y="276" text-anchor="start" font-size="13" font-weight="700" fill="#0e7490">MEO</text>
            <text x="445" y="292" text-anchor="start" font-size="10.5" fill="#0e7490">4.000–15.000 km</text>
            <circle cx="290" cy="475" r="5" fill="#0d9488"/>
            <text x="290" y="500" text-anchor="middle" font-size="13" font-weight="700" fill="#0d9488">GEO</text>
            <text x="290" y="516" text-anchor="middle" font-size="10.5" fill="#0d9488">≈ 36.000 km</text>
            <text x="60" y="130" text-anchor="middle" font-size="13" font-weight="700" fill="#d97706">HEO</text>
            <text x="60" y="145" text-anchor="middle" font-size="10.5" fill="#d97706">muy elíptica</text>
            <text x="290" y="42" text-anchor="middle" font-size="11" fill="#94a3b8">LEO: 640–1.600 km · MEO: 4.000–15.000 km · GEO: ≈36.000 km · HEO: perigeo bajo / apogeo alto</text>
          </svg>
        </div>

        <div class="table-wrap"><table class="data">
          <thead><tr><th>Órbita</th><th>Delay (RTT)</th><th>Uso típico</th></tr></thead>
          <tbody>
            <tr><td>LEO</td><td>~10-40 ms</td><td>Internet satelital / telefonía en tiempo real (Starlink, Iridium)</td></tr>
            <tr><td>MEO</td><td>~70 ms</td><td>Navegación (GPS, GLONASS)</td></tr>
            <tr><td>GEO</td><td>&gt;500 ms</td><td>Difusión/TV (ARSAT); disponibilidad 24h sobre el mismo punto</td></tr>
            <tr><td>HEO</td><td>variable</td><td>Cobertura de zonas polares (Molnya, Sirius Radio)</td></tr>
          </tbody>
        </table></div>

        <p><b>¿De qué depende la cobertura?</b> De la altura de la órbita, de la ganancia/apertura de la antena del
        satélite y de la potencia de transmisión disponible.</p>
        <p><b>¿Qué órbita para tiempo real?</b> <b>LEO</b>, porque al estar mucho más cerca de la Tierra tiene el
        menor delay (decenas de milisegundos en vez de más de 500 ms como GEO), aunque exige una constelación de
        muchos satélites para dar cobertura continua.</p>

        <h2>9. ROE — Relación de Onda Estacionaria</h2>
        <p>Consigna: <i>"Indicar qué significa conceptualmente el ROE. Explicar en qué parte de un circuito puede
        darse y por qué razón. Describir las consecuencias que genera. Dar un ejemplo."</i></p>
        <div class="diagram-wrap">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 320" font-family="Arial, sans-serif">
            <defs>
              <marker id="arrI" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#0ea5e9"/></marker>
              <marker id="arrR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#dc2626"/></marker>
            </defs>
            <text x="310" y="20" text-anchor="middle" font-size="15" font-weight="700" fill="#0f172a">ROE — Relación de Onda Estacionaria</text>
            <rect x="15" y="40" width="80" height="42" rx="8" fill="#0d9488"/>
            <text x="55" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Transmisor</text>
            <text x="55" y="72" text-anchor="middle" font-size="10" fill="#d6f5f0">(Z₀)</text>
            <rect x="555" y="40" width="55" height="42" rx="8" fill="#dc2626"/>
            <text x="582" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">Carga</text>
            <text x="582" y="72" text-anchor="middle" font-size="9.5" fill="#fecaca">(Z_L≠Z₀)</text>
            <line x1="100" y1="61" x2="552" y2="61" stroke="#475569" stroke-width="3"/>
            <line x1="115" y1="40" x2="500" y2="40" stroke="#0ea5e9" stroke-width="2.2" marker-end="url(#arrI)"/>
            <text x="310" y="32" text-anchor="middle" font-size="12" fill="#0ea5e9">onda incidente (del Tx hacia la carga)</text>
            <line x1="500" y1="98" x2="115" y2="98" stroke="#dc2626" stroke-width="2.2" stroke-dasharray="6,4" marker-end="url(#arrR)"/>
            <text x="310" y="112" text-anchor="middle" font-size="12" fill="#dc2626">onda reflejada (rebota por la desadaptación de impedancias)</text>
            <line x1="60" y1="150" x2="560" y2="150" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="3,3"/>
            <text x="40" y="154" text-anchor="end" font-size="12" font-weight="700" fill="#0f172a">V_max</text>
            <line x1="60" y1="210" x2="560" y2="210" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="3,3"/>
            <text x="40" y="214" text-anchor="end" font-size="12" font-weight="700" fill="#0f172a">V_min</text>
            <path d="M100.0,150.0 L104.0,151.7 L108.0,156.5 L112.0,163.9 L116.0,173.1 L120.0,183.1 L124.0,192.8 L128.0,201.0 L132.0,206.9 L136.0,209.8 L140.0,209.3 L144.0,205.7 L148.0,199.1 L152.0,190.5 L156.0,180.6 L160.0,170.7 L164.0,161.9 L168.0,155.0 L172.0,150.9 L176.0,150.1 L180.0,152.6 L184.0,158.1 L188.0,166.1 L192.0,175.6 L196.0,185.6 L200.0,195.0 L204.0,202.7 L208.0,207.9 L212.0,210.0 L216.0,208.7 L220.0,204.3 L224.0,197.1 L228.0,188.1 L232.0,178.1 L236.0,168.4 L240.0,159.9 L244.0,153.7 L248.0,150.4 L252.0,150.4 L256.0,153.7 L260.0,159.9 L264.0,168.4 L268.0,178.1 L272.0,188.1 L276.0,197.1 L280.0,204.3 L284.0,208.7 L288.0,210.0 L292.0,207.9 L296.0,202.7 L300.0,195.0 L304.0,185.6 L308.0,175.6 L312.0,166.1 L316.0,158.1 L320.0,152.6 L324.0,150.1 L328.0,150.9 L332.0,155.0 L336.0,161.9 L340.0,170.7 L344.0,180.6 L348.0,190.5 L352.0,199.1 L356.0,205.7 L360.0,209.3 L364.0,209.8 L368.0,206.9 L372.0,201.0 L376.0,192.8 L380.0,183.1 L384.0,173.1 L388.0,163.9 L392.0,156.5 L396.0,151.7 L400.0,150.0 L404.0,151.7 L408.0,156.5 L412.0,163.9 L416.0,173.1 L420.0,183.1 L424.0,192.8 L428.0,201.0 L432.0,206.9 L436.0,209.8 L440.0,209.3 L444.0,205.7 L448.0,199.1 L452.0,190.5 L456.0,180.6 L460.0,170.7 L464.0,161.9 L468.0,155.0 L472.0,150.9 L476.0,150.1 L480.0,152.6 L484.0,158.1 L488.0,166.1 L492.0,175.6 L496.0,185.6 L500.0,195.0 L504.0,202.7 L508.0,207.9 L512.0,210.0 L516.0,208.7 L520.0,204.3 L524.0,197.1 L528.0,188.1 L532.0,178.1 L536.0,168.4 L540.0,159.9 L544.0,153.7 L548.0,150.4"
                  fill="none" stroke="#0e7490" stroke-width="2.5"/>
            <text x="310" y="232" text-anchor="middle" font-size="12" fill="#0e7490">onda estacionaria resultante (antinodos cerca de V_max, nodos cerca de V_min)</text>
            <text x="310" y="262" text-anchor="middle" font-size="13.5" font-weight="700" fill="#0f172a">ROE = V_max / V_min  (ideal 1:1 → toda la energía sale, nada rebota)</text>
            <text x="310" y="284" text-anchor="middle" font-size="12" fill="#475569">Causa: desadaptación de impedancias (ej. equipo de 50 Ω contra antena de 75 Ω)</text>
            <text x="310" y="302" text-anchor="middle" font-size="12" fill="#dc2626">Consecuencias: menor alcance · calentamiento · daño del transmisor · distorsión/BER</text>
          </svg>
        </div>
        <p><b>Respuesta:</b> el ROE mide qué tan bien se transfiere la energía desde la línea de transmisión hacia la
        carga (antena). Se da en cualquier punto donde dos impedancias distintas se conectan entre sí — por ejemplo,
        un equipo de 50 Ω conectado a una antena de 75 Ω — porque esa diferencia hace que parte de la onda incidente
        rebote en vez de salir. Consecuencias: menor alcance (menos potencia irradiada), calentamiento del cable,
        posible daño del amplificador final del transmisor (la onda reflejada puede quemarlo) y distorsión/aumento
        de BER por el eco en la línea.</p>

        <div class="callout warn">
          <p><b>No te olvides:</b> si en un enunciado parecido ves "Fibra óptica" o "Modulación digital/AM", esos
          puntos no van en tu parcial — pasá al siguiente.</p>
        </div>

        <p>Para repasar en formato compacto: <a class="inline" data-go="formulas" style="cursor:pointer">Hoja de
        fórmulas</a>. Para practicar: <a class="inline" data-go="preguntas" style="cursor:pointer">Preguntas</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
