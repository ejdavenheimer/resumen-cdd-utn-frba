/* MEDIOS NO GUIADOS / RADIO — propagación, línea de vista, radioenlaces, antenas */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "medios-no-guiados",
    title: "Medios no guiados",
    tag: "📶",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 11-12</div>
          <h1>Medios no guiados — Comunicaciones por radio</h1>
          <p class="lead">Cómo viajan las ondas por el aire, y el ejercicio de "altura de antena" que casi siempre aparece en el parcial.</p>
        </div>

        <h2>Tres formas en que se propaga una onda de radio</h2>
        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">🌍 Onda terrestre (de superficie)</h3>
            <p>Frecuencias medias (MF, como la radio AM) y parte de HF. Se mantiene pegada a la superficie; a menor
            longitud de onda, las corrientes inducidas la debilitan hasta que desaparece — por eso solo funciona bien
            en frecuencias bajas.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">☁️ Onda ionosférica (reflejada)</h3>
            <p>Banda HF (onda corta, radioaficionados). Se refracta en la ionosfera y "pega saltos" para enlazar
            puntos muy distantes. La refracción principal ocurre en la <b>Capa F2</b> (250-340 km de altura, la zona
            más ionizada).</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">📡 Onda directa (espacial / línea de vista)</h3>
            <p>Bandas VHF, UHF, SHF. Necesita que las dos antenas "se vean" directamente, sin obstáculos — es el caso
            que más se pregunta.</p>
          </div>
        </div>

        <h2>Línea de vista — paso a paso del ejercicio de examen</h2>
        <p>La Tierra es curva, así que dos antenas solo "se ven" hasta cierta distancia, que depende de su altura.</p>
        <ol class="steps">
          <li><span class="step-title">1. Distancia de UNA antena al horizonte</span>
          D (km) = 4,14 · √H &nbsp; (H = altura de esa antena, en metros)</li>
          <li><span class="step-title">2. Distancia total del enlace (dos antenas)</span>
          D = 4,14·√h₁ + 4,14·√h₂ — es el "atajo" que se usa casi siempre en el parcial, sumando lo que ve cada
          antena hacia el horizonte común.</li>
          <li><span class="step-title">3. El factor K — por qué 4,14 y no otro número</span> La atmósfera es más
          densa cerca del suelo y actúa como una lente que curva las ondas hacia abajo, "ayudando" a que lleguen más
          lejos de lo que permitiría la curvatura real de la Tierra.
            <ul style="margin-top:6px">
              <li><b>K = 1</b> (sin refracción, vacío): se usa el radio real de la Tierra (6370 km) → hacen falta
              torres <b>más altas</b>.</li>
              <li><b>K = 4/3</b> (condición atmosférica estándar, la normal): equivale a "inflar" el planeta,
              multiplicando el radio real por 4/3 → Radio efectivo ≈ 8493 km → permite usar torres <b>más bajas</b>.
              Es la constante que da el 4,14 de la fórmula de arriba.</li>
            </ul>
          </li>
        </ol>

        <div class="callout tip">
          <div class="callout-title">✅ Siempre que uses 4,14, aclará por qué</div>
          <p>El profesor suele pedir que <b>justifiques</b> la fórmula mencionando que depende de las condiciones de
          refracción atmosférica (factor K). No alcanza con poner el número: hay que decir que 4,14 asume K = 4/3
          (condición estándar).</p>
        </div>

        <h3>Ejemplo resuelto</h3>
        <p>Enlace de 30 km entre dos antenas de <b>igual altura</b>, en condiciones atmosféricas estándar.</p>
        <ol class="steps">
          <li><span class="step-title">1. Planteo</span> D = 4,14·√H₁ + 4,14·√H₂, y como H₁ = H₂ = H:
          D = 2 · 4,14 · √H = 8,28 · √H</li>
          <li><span class="step-title">2. Reemplazo</span> 30 = 8,28 · √H</li>
          <li><span class="step-title">3. Despejo</span> √H = 30 / 8,28 = 3,623 &nbsp;→&nbsp; H = 3,623² ≈
          <b>13,12 metros</b></li>
        </ol>
        <p>Si en vez de la altura te dan el radio de la Tierra o piden comparar escenarios con distinto K, se usa la
        fórmula geométrica pura: <b>h = d² / (2 · R_efectivo)</b>.</p>

        <h2>Radioenlaces por microondas</h2>
        <p>Trabajan en bandas UHF y SHF con un haz muy direccional (como un rayo de luz) para unir dos puntos fijos.
        Las microondas analógicas están en desuso — hoy el estándar es <b>digital</b> (la modulación digital en sí no
        entra en este parcial, pero conviene saber que el radioenlace moderno es digital).</p>

        <h3>Antena sólida vs. antena de rejilla</h3>
        <p>La elección depende de la <b>frecuencia</b> y de la <b>fuerza del viento</b> sobre la torre.</p>
        <div class="grid-2">
          <div class="card">
            <h3 style="margin-top:0">Frecuencias bajas (VHF/UHF) → Rejilla</h3>
            <p><b>Razón eléctrica:</b> a baja frecuencia la longitud de onda es grande (decímetros/metros), así que la
            rejilla "se comporta" como una pared sólida para esa onda.<br>
            <b>Razón mecánica (la más importante):</b> deja pasar el viento, reduciendo muchísimo la carga
            aerodinámica sobre la torre.</p>
          </div>
          <div class="card">
            <h3 style="margin-top:0">Frecuencias altas (microondas/SHF) → Sólida</h3>
            <p>La longitud de onda es milimétrica. Con una rejilla, la onda se "escaparía" por los huecos entre
            barrotes y se perdería señal — hace falta superficie continua.</p>
          </div>
        </div>
        <p><b>Límite de diseño:</b> una rejilla funciona como superficie sólida mientras la separación entre barrotes
        sea s ≤ λ/10.</p>

        <h3>Atenuación del espacio libre</h3>
        <p>Mide cuánta densidad de potencia pierde una onda solo por expandirse geométricamente al alejarse de la
        antena (nada que ver con obstáculos ni lluvia):</p>
        <div class="callout info"><p style="margin:0"><b>L_FS (dB) = 32,44 + 20·log₁₀(f) + 20·log₁₀(d)</b>
        &nbsp; (f en MHz, d en km)</p></div>

        <p><b>Longitud de salto</b> (distancia entre repetidoras de microondas): inversamente proporcional a la
        frecuencia. Entre 1,5-2,5 GHz, saltos de hasta 60 km; entre 40-60 GHz, la absorción atmosférica lo reduce a
        0,5-2 km.</p>

        <p><b>Guías de onda:</b> tubos huecos de cobre/latón/aluminio que conectan el equipo transmisor (en la base de
        la torre) con la antena (en lo alto), en tramos de 5-15 m. No se usa cable coaxial a frecuencias de microondas
        porque sufre radiación de energía hacia afuera y un efecto pelicular muy severo. Se les inyecta aire
        seco/nitrógeno para evitar humedad, que dispararía la atenuación.</p>

        <h3>Repetidoras</h3>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">Pasivas</h3><p>Dos antenas parabólicas unidas por una guía de
          onda de bajas pérdidas. No amplifican, no necesitan alimentación eléctrica.</p></div>
          <div class="card"><h3 style="margin-top:0">Reflectores pasivos</h3><p>Una lámina de aluminio de varios m²
          que simplemente cambia la dirección del frente de onda, por reflexión.</p></div>
          <div class="card"><h3 style="margin-top:0">Activas</h3><p>Dos antenas + equipos electrónicos que
          <b>amplifican</b> la señal antes de retransmitirla.</p></div>
        </div>

        <p>Sigue <a class="inline" data-go="satelites" style="cursor:pointer">Satélites</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
