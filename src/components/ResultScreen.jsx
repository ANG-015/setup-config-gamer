import { useState, useEffect } from 'react';

export default function ResultScreen({ data, onRestart }) {
  const [barcodeLines, setBarcodeLines] = useState([]);

  useEffect(() => {
    // Generar código de barras aleatorio
    let lines = [];
    let width = 0;
    const color = data.isError ? 'var(--cyber-red)' : 'var(--cyber-cyan)';
    
    while (width < 100) {
        const barWidth = Math.random() * 2 + 0.5;
        const barGap = Math.random() * 2 + 0.5;
        lines.push({ x: width, width: barWidth, fill: color });
        width += barWidth + barGap;
    }
    setBarcodeLines(lines);

    // Barcode text
    let text = "";
    for(let i=0; i<4; i++) { text += Math.floor(1000 + Math.random() * 9000) + " "; }
    document.getElementById('barcode-text').innerText = data.isError ? "ERR0 0000 ERR0 0000" : text;
    document.getElementById('barcode-text').style.color = color;

  }, [data]);

  return (
    <div id="result-screen" style={{ display: 'block' }}>
        <div className={`result-content ${data.isError ? 'error-mode' : ''}`}>
            <div className="scanline"></div>
            
            <div className="slate-header">
                <div className="slate-header-left">
                    <div className="slate-id">ID: #{data.isError ? 'ERR-0000' : Math.floor(Math.random() * 90000000) + 10000000}</div>
                    <div className="slate-status">{data.isError ? 'FALLO CRÍTICO' : 'ACCESO CONCEDIDO'}</div>
                </div>
                <div className="slate-header-right">
                    NIGHT CITY NETRUNNER<br/>
                    DATA SLATE v3.1
                </div>
            </div>

            <div className="slate-body">
                <div className="result-title">Setup Generado: <br/><span>{data.title}</span></div>
                <div className="result-subtitle">{data.isError ? "// ERROR DE COMPILACIÓN //" : "// ARCHIVO DE CONFIGURACIÓN VERIFICADO //"}</div>

                <div className="price-container">
                    <div className="price-label">PRESUPUESTO TOTAL ESTIMADO</div>
                    <div className="price-value">{data.price}</div>
                    <div className="price-currency">PESOS MEXICANOS (MXN)</div>
                </div>

                <div className="slate-section-title"> ESPECIFICACIONES DE HARDWARE</div>
                <div className="ticket-grid">
                  {data.specs.map((spec, i) => (
                    <div className="ticket-item" key={i}>
                      <div className="icon-box"><div className="icon">{spec.icon}</div></div>
                      <div className="info">
                          <h4>{spec.title}</h4>
                          <p style={{ color: data.isError ? 'var(--cyber-red)' : 'inherit' }}>{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {!data.isError && (
                  <>
                    <div className="slate-section-title"> DIAGNÓSTICO DEL SISTEMA</div>
                    <div className="diagnostics-panel">
                        <div className="diag-item">
                            <div className="diag-header"><span>RENDIMIENTO ESPERADO</span><span className="diag-val">98%</span></div>
                            <div className="diag-bar"><div className="diag-fill" style={{width: '98%'}}></div></div>
                        </div>
                        <div className="diag-item">
                            <div className="diag-header"><span>TEMPERATURA ESTIMADA</span><span className="diag-val">65°C</span></div>
                            <div className="diag-bar"><div className="diag-fill" style={{width: '65%', background: 'var(--cyber-yellow)'}}></div></div>
                        </div>
                        <div className="diag-item">
                            <div className="diag-header"><span>FPS PROMEDIO (1080P)</span><span className="diag-val">144+</span></div>
                            <div className="diag-bar"><div className="diag-fill" style={{width: '100%', background: 'var(--cyber-pink)'}}></div></div>
                        </div>
                        <div className="diag-item">
                            <div className="diag-header"><span>LATENCIA DE RED</span><span className="diag-val">12ms</span></div>
                            <div className="diag-bar"><div className="diag-fill" style={{width: '15%'}}></div></div>
                        </div>
                    </div>
                  </>
                )}
            </div>

            <div className="slate-footer">
                <div className="barcode-container">
                    <svg className="barcode-svg" preserveAspectRatio="none" viewBox="0 0 100 20">
                      {barcodeLines.map((line, i) => (
                        <rect key={i} x={line.x} y="0" width={line.width} height="20" fill={line.fill} />
                      ))}
                    </svg>
                    <div className="barcode-text" id="barcode-text">0000 0000 0000 0000</div>
                </div>
                <div className="seal">VERIFICADO</div>
            </div>

            <button className="btn-restart" onClick={onRestart} style={{ marginBottom: '40px' }}>[ Reiniciar Terminal ]</button>
        </div>
    </div>
  );
}