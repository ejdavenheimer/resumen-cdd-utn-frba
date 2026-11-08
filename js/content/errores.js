/* TRATAMIENTO DE ERRORES — paridad, checksum, CRC, ARQ, FEC, Hamming */
(function () {
  "use strict";
  const APP = window.APP;
  APP.register({
    id: "errores",
    title: "Tratamiento de errores",
    tag: "🛠️",
    render(el) {
      el.innerHTML = `
        <div class="page-head">
          <div class="page-kicker">Comunicación de Datos · Clase 10</div>
          <h1>Tratamiento de errores</h1>
          <p class="lead">Cómo darse cuenta de que un mensaje llegó roto, y qué hacer al respecto. El ejercicio "estrella" de esta sección es CRC.</p>
        </div>

        <div class="callout key">
          <div class="callout-title">📌 Por qué se rompen los mensajes</div>
          <p>Las mismas tres causas de siempre: <b>atenuación</b>, <b>distorsión</b> y <b>ruido</b>. El error resultante
          puede ser de <b>un bit aislado</b> o en <b>ráfaga</b> (varios bits consecutivos, "burst").</p>
        </div>

        <h2>BER — Bit Error Rate</h2>
        <div class="callout info"><p style="margin:0"><b>BER = bits erróneos / bits totales transmitidos</b></p></div>
        <p>Ejemplo: BER = 10⁻⁵ significa 1 bit erróneo cada 100.000 transmitidos. Para comparar: la fibra óptica es
        excelente (~10⁻⁹), un enlace inalámbrico malo puede estar en ~10⁻⁴.</p>

        <h2>¿Qué hace cada capa cuando detecta un error?</h2>
        <div class="grid-2">
          <div class="card"><h3 style="margin-top:0">Capa 2 — Ethernet</h3><p>Detecta y <b>elimina en silencio</b>:
          descarta la trama corrupta sin avisarle a nadie.</p></div>
          <div class="card"><h3 style="margin-top:0">Capa 3 — IP + ICMP</h3><p>Detecta, elimina y <b>avisa</b>: manda
          un mensaje de "destino inalcanzable".</p></div>
          <div class="card"><h3 style="margin-top:0">Capa 4 — TCP</h3><p>Detecta, elimina y <b>pide retransmisión</b>:
          exige que se reenvíe hasta lograr una entrega perfecta.</p></div>
        </div>

        <h2>Métodos de detección, de más simple a más robusto</h2>

        <h3>1. Paridad (VRC / LRC)</h3>
        <p>Se agrega un bit extra para que la cantidad total de "unos" sea siempre par (paridad par) o impar (paridad
        impar). <b>VRC</b> es la paridad simple de cada carácter (vertical). <b>LRC</b> hace un chequeo cruzado sobre
        todo un bloque de caracteres (longitudinal) y detecta errores más complejos que el VRC solo.</p>

        <h3>2. BCC (Block Check Character)</h3>
        <p>Se hace un XOR en cascada, byte a byte, de todo el mensaje. El resultado (1 byte) se manda pegado al final.
        El receptor repite el mismo XOR incluyendo ese byte recibido: si no hubo error, el resultado debe dar
        <b>cero</b>.</p>

        <h3>3. Checksum (el que usa TCP/IP)</h3>
        <p>Se suman palabras de 16 bits con aritmética de <b>complemento a 1</b>. Regla clave: si una suma genera un
        acarreo que se "sale" por la izquierda, ese bit no se descarta — se le suma de vuelta al resultado
        (<span class="var-def">wrap-around</span>). Al final se invierten todos los bits (complemento a 1) y eso es lo
        que se envía. El receptor repite la suma de todo; si la red está sana, el resultado final tiene que ser un
        bloque de puros "1". IP aplica el checksum solo a su cabecera; TCP lo aplica a todo el segmento.</p>

        <h3>4. CRC — Control de Redundancia Cíclica (el más robusto, Capa 2)</h3>
        <p>Se trata el mensaje como un número binario gigante y se lo <b>divide</b> por un número fijo acordado de
        antemano, el <span class="var-def">Polinomio Generador G(x)</span>, usando aritmética módulo 2 (XOR puro, sin
        acarreo ni préstamo — se parece a la división larga de la primaria pero restando con XOR).</p>

        <div class="callout tip">
          <div class="callout-title">🎯 La receta mecánica de CRC</div>
          <ol class="steps" style="margin-bottom:0">
            <li><span class="step-title">1. Grado del generador</span> r = exponente más alto de G(x). Si
            G(x) = x³+x+1, en binario es <b>1011</b> (grado r = 3, tiene 4 bits).</li>
            <li><span class="step-title">2. Agrandar el mensaje</span> Al mensaje M se le pegan r ceros al final.</li>
            <li><span class="step-title">3. Dividir</span> Se divide ese mensaje-con-ceros por G(x) usando XOR. No
            importa el cociente — solo interesa el <b>resto R</b> (va a tener largo r).</li>
            <li><span class="step-title">4. Armar la trama</span> Se reemplazan los r ceros agregados por el resto R
            real: <b>Trama a transmitir T = M + R</b>.</li>
            <li><span class="step-title">5. Verificar en el receptor</span> El receptor divide la trama T completa
            (como llegó) por el mismo G(x). Si el resto da <b>0</b> → trama aceptada. Si da distinto de 0 → se
            descarta, hubo error.</li>
          </ol>
        </div>

        <h4>Ejemplo resuelto completo (el que más se repite en los parciales)</h4>
        <p>Datos: mensaje M = <b>10010110</b>, generador G(x) = x³+x+1 → binario <b>1011</b> (grado r = 3).</p>
        <ol class="steps">
          <li><span class="step-title">1. Agregar 3 ceros a M</span> 10010110 → <b>10010110 000</b></li>
          <li><span class="step-title">2. Dividir 10010110000 ÷ 1011 con XOR</span>
            <div class="table-wrap"><table class="data">
              <thead><tr><th>Ventana (4 bits)</th><th>¿Bit líder = 1?</th><th>XOR con 1011</th></tr></thead>
              <tbody>
                <tr><td>1001</td><td>sí</td><td>→ 0010</td></tr>
                <tr><td>0100</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>1001</td><td>sí</td><td>→ 0010</td></tr>
                <tr><td>0101</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>1010</td><td>sí</td><td>→ 0001</td></tr>
                <tr><td>0010</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>0100</td><td>no</td><td>sigue igual</td></tr>
                <tr><td>1000</td><td>sí</td><td>→ 0011</td></tr>
              </tbody>
            </table></div>
          </li>
          <li><span class="step-title">3. Resto obtenido</span> Los últimos 3 bits que quedan son
          <b>R = 011</b>.</li>
          <li><span class="step-title">4. Trama a transmitir</span> T = M + R = 10010110 + 011 =
          <b>10010110011</b></li>
          <li><span class="step-title">5. Comprobación en recepción</span> Se divide 10010110011 por 1011 de nuevo,
          siguiendo el mismo mecanismo → el resto da <b>000</b> → confirmado, la trama llegó sin error.</li>
        </ol>
        <div class="callout warn"><p>El truco para no perderse: en cada paso, si el bit más a la izquierda de la
        "ventana" de 4 bits es 1, hacés XOR con el generador completo (1011). Si es 0, no hacés nada y pasás a la
        siguiente ventana (que se forma bajando un bit más del mensaje).</p></div>

        <h3>5. ARQ — corrección "hacia atrás"</h3>
        <p>El receptor <b>no corrige nada</b>, solo detecta con CRC. Si la trama vino corrupta, la descarta y pide que
        se la reenvíen.</p>
        <div class="callout info">
          <p style="margin:0"><b>Secuencia típica de examen</b> (emisor y receptor en paralelo, tiempo hacia abajo):</p>
          <ol style="margin:8px 0 0">
            <li>Emisor manda Trama 1 → llega bien → Receptor responde <b>ACK 1</b> (positivo).</li>
            <li>Emisor manda Trama 2, pero se daña en el camino → el receptor calcula CRC y el resto <b>no da 0</b> →
            responde <b>NACK 2</b> (negativo: "llegó mal, retransmitila").</li>
            <li>Emisor vuelve a mandar la Trama 2.</li>
          </ol>
        </div>

        <h3>6. FEC — corrección "hacia adelante" (Forward Error Correction)</h3>
        <p>Se usa cuando <b>no se puede pedir retransmisión</b> (ej. una transmisión satelital a muchos receptores a
        la vez, o enlaces de altísima velocidad). La idea: el mensaje se manda <b>dos veces</b>, intercalado en
        instantes distintos — una serie primaria D y una secundaria R (diversidad en el tiempo). Si un carácter llega
        roto en D pero su copia en R está intacta, se usa la de R. Solo se marca error si el mismo carácter se rompe
        en <b>las dos</b> copias.</p>

        <h3>7. Código de Hamming — detecta y corrige sin retransmitir</h3>
        <p>Intercala bits de paridad <b>dentro</b> de la propia información, de forma que no solo avisan que hubo
        error, sino que apuntan <b>exactamente a qué bit</b> se rompió.</p>
        <ol class="steps">
          <li><span class="step-title">1. El receptor recalcula sus propias paridades</span> y las compara con las
          que llegaron: anota <b>0</b> si coinciden, <b>1</b> si no.</li>
          <li><span class="step-title">2. Esa secuencia de 0/1 se lee como un número binario</span> que indica
          directamente la <b>posición física</b> del bit roto. Ejemplo: si el check da 1011, el bit en la
          posición 11 llegó alterado.</li>
          <li><span class="step-title">3. Se invierte ese bit</span> y el mensaje queda reparado, sin pedirle nada al
          emisor.</li>
        </ol>
        <p><span class="var-def">Distancia de Hamming</span>: cantidad de posiciones en las que difieren dos
        secuencias binarias de igual longitud. Cuanto mayor la distancia entre los códigos válidos, más robusto el
        código frente a errores.</p>

        <h2>Rendimiento sincrónico (E)</h2>
        <div class="callout info"><p style="margin:0"><b>E = k / n</b> &nbsp; (k = bits útiles del mensaje, n = bits
        totales enviados = k + r, con r = bits de redundancia/paridad)</p></div>
        <p><b>Ejemplo:</b> un mensaje tiene k = 11 bits útiles y le agregan r = 4 bits de paridad → n = 15.
        E = 11/15 = <b>73,3%</b> de los bits transmitidos son información real.</p>

        <p>Sigue <a class="inline" data-go="medios-guiados" style="cursor:pointer">Medios de transmisión guiados</a>.</p>
      `;
      el.querySelectorAll("[data-go]").forEach((c) => c.addEventListener("click", () => APP.go(c.dataset.go)));
    },
  });
})();
