import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [log, setLog] = useState('Buscando componentes compatibles...');

  const logs = [
    "> Conectando con la red local...",
    "> Extrayendo perfiles de rendimiento...",
    "> Calculando compatibilidad de hardware...",
    "> Buscando ofertas en el mercado negro...",
    "> Ensamblando setup virtual...",
    "> Compilando datos finales...",
    "> ¡COMPLETADO!"
  ];

  useEffect(() => {
    let currentProgress = 0;
    let logIndex = 0;

    const interval = setInterval(() => {
      currentProgress += Math.random() * 20;
      if (currentProgress > 100) currentProgress = 100;
      
      setProgress(currentProgress);

      if (currentProgress > (logIndex + 1) * (100 / logs.length)) {
        if (logIndex < logs.length) {
          setLog(logs[logIndex]);
          logIndex++;
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="loading-screen" style={{ display: 'flex' }}>
        <div className="loading-text"> INICIANDO PROTOCOLO DE ENSAMBLAJE...</div>
        <div className="loading-bar-container">
          <div className="loading-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="loading-log">{log}</div>
    </div>
  );
}