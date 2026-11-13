import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SectionBox from './components/SectionBox';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';

// Data de las secciones
const sectionsData = [
  {
    id: 'sec-1', num: '01', title: 'Tu Zona de Operaciones', subtitle: '> Instalación del hardware en el entorno físico',
    options: [
      { value: 'Escritorio', icon: '🖥️', title: 'Búnker (Escritorio)', desc: 'Espacio dedicado, cables y café.', serial: 'SYS-01-A' },
      { value: 'Sofá', icon: '🛋️', title: 'Zona Común (Sofá)', desc: 'Pantalla grande desde el sillón.', serial: 'SYS-01-B' },
      { value: 'Portátil', icon: '🎒', title: 'Nómada (Portátil)', desc: 'Juego donde sea que me lleve.', serial: 'SYS-01-C' }
    ]
  },
  {
    id: 'sec-2', num: '02', title: 'Presupuesto en Créditos', subtitle: '> Asignación de recursos financieros (Pesos Mexicanos)',
    options: [
      { value: 'LowCost', icon: '💵', title: 'Chrome Básico', desc: 'Presupuesto ajustado ($9,000 MXN).', serial: 'SYS-02-A' },
      { value: 'MidRange', icon: '💳', title: 'Implante Militar', desc: 'Calidad media-alta ($22,000 MXN).', serial: 'SYS-02-B' },
      { value: 'HighEnd', icon: '💎', title: 'Cyberware Legendario', desc: 'Sin límites ($45,000+ MXN).', serial: 'SYS-02-C' }
    ]
  },
  {
    id: 'sec-3', num: '03', title: 'Software Principal', subtitle: '> Tipo de datos y aplicaciones a ejecutar',
    options: [
      { value: 'Competitivo', icon: '🎯', title: 'Combate Táctico', desc: 'E-Sports, 144Hz+ y cero lag.', serial: 'SYS-03-A' },
      { value: 'AAA', icon: '🎬', title: 'Simulación Gráfica', desc: 'Triple A, ray tracing y texturas.', serial: 'SYS-03-B' },
      { value: 'Indies', icon: '👾', title: 'Realidad Virtual / Indie', desc: 'Juegos ligeros y experimentales.', serial: 'SYS-03-C' }
    ]
  },
  {
    id: 'sec-4', num: '04', title: 'Estética de Neón', subtitle: '> Configuración de la presentación visual del entorno',
    options: [
      { value: 'RGB', icon: '🌈', title: 'Neón Sobrecargado', desc: 'RGB, luces reactivas y caos visual.', serial: 'SYS-04-A' },
      { value: 'Minimalista', icon: '⬜', title: 'Arasaka Clean', desc: 'Minimalista, blanco y ordenado.', serial: 'SYS-04-B' },
      { value: 'Portatil', icon: '🧳', title: 'Nomad Style', desc: 'Rústico, funcional y fácil de mover.', serial: 'SYS-04-C' }
    ]
  },
  {
    id: 'sec-5', num: '05', title: 'Integración de Hardware', subtitle: '> Nivel de conocimientos técnicos del operador',
    options: [
      { value: 'Novato', icon: '🔌', title: 'Plug & Play', desc: 'No quiero tocar cables, solo jugar.', serial: 'SYS-05-A' },
      { value: 'Entusiasta', icon: '🔧', title: 'Modder', desc: 'Sé actualizar piezas básicas.', serial: 'SYS-05-B' },
      { value: 'Pro', icon: '🛠️', title: 'Techie', desc: 'Arreglo y ensamblo desde cero.', serial: 'SYS-05-C' }
    ]
  }
];

export default function App() {
  const [answers, setAnswers] = useState({});
  const [appState, setAppState] = useState('form'); // 'form', 'loading', 'result'
  const [resultData, setResultData] = useState(null);

  // Manejo de selección
  const handleSelect = (stepId, value) => {
    setAnswers(prev => {
      // Si ya estaba seleccionado, lo deseleccionamos
      if (prev[stepId] === value) {
        const newAnswers = { ...prev };
        delete newAnswers[stepId];
        return newAnswers;
      }
      // Si no, lo seleccionamos
      return { ...prev, [stepId]: value };
    });
  };

  const handleSubmit = () => {
    const isMissingData = Object.keys(answers).length < 5;
    setAppState('loading');
    
    // Simulamos la carga (3 segundos aprox)
    setTimeout(() => {
      generateResult(isMissingData);
      setAppState('result');
    }, 4500); 
  };

  const generateResult = (isError) => {
    if (isError) {
      setResultData({
        isError: true,
        title: "SISTEMA CORRUPTO",
        price: "$0.00",
        specs: [
          { icon: '⚠️', title: 'Procesador (CPU)', desc: 'NO DETECTADO / ERROR 404' },
          { icon: '⚠️', title: 'Memoria RAM', desc: '0 GB / FALLO DE LECTURA' },
          { icon: '⚠️', title: 'Almacenamiento', desc: 'SECTOR DAÑADO / INACCESIBLE' },
          { icon: '⚠️', title: 'Gráfica (GPU)', desc: 'SIN SEÑAL / DRIVER NO ENCONTRADO' },
          { icon: '⚠️', title: 'Placa Madre', desc: 'CIRCUITO ABIERTO' },
          { icon: '⚠️', title: 'Periféricos', desc: 'SIN RESPUESTA' }
        ]
      });
      return;
    }

    // Lógica de resultados normales (simplificada para el ejemplo)
    let setupName = "El Setup Equilibrado";
    let basePrice = 22000;
    let specs = [];

    if (answers['sec-2'] === 'LowCost') { setupName = "El Rig de Supervivencia"; basePrice = 9000; }
    if (answers['sec-2'] === 'HighEnd') { setupName = "El Monstruo de Arasaka"; basePrice = 45000; }

    if (answers['sec-3'] === 'Competitivo') setupName += " // Combate";
    else if (answers['sec-3'] === 'AAA') setupName += " // Simulación";
    else setupName = "El Rincón Netrunner";

    // Generar specs falsas basadas en la plataforma
    if (answers['sec-1'] === 'Escritorio') {
      specs = [
        { icon: '🧠', title: 'Procesador (CPU)', desc: 'Intel Core i5-13400F' },
        { icon: '🎮', title: 'Gráfica (GPU)', desc: 'NVIDIA RTX 4060 8GB' },
        { icon: '💾', title: 'Memoria RAM', desc: '32 GB DDR5 5600MHz' },
        { icon: '💿', title: 'Almacenamiento', desc: 'SSD 1TB NVMe Gen4' },
        { icon: '🔌', title: 'Placa Madre', desc: 'B760M DDR5 Wi-Fi' },
        { icon: '🖥️', title: 'Monitor', desc: answers['sec-3'] === 'Competitivo' ? '27" 144Hz 1080p' : '27" 4K 60Hz IPS' }
      ];
    } else if (answers['sec-1'] === 'Sofá') {
      specs = [
        { icon: '🎮', title: 'Consola', desc: 'PlayStation 5 Slim Digital' },
        { icon: '💾', title: 'Almacenamiento', desc: '1TB SSD + Expansión 1TB NVMe' },
        { icon: '📺', title: 'Pantalla', desc: 'TV LED 55" 4K 120Hz' },
        { icon: '🎧', title: 'Audio', desc: 'Auriculares Pulse 3D' },
        { icon: '🛋️', title: 'Mando Extra', desc: 'DualSense Adicional' }
      ];
    } else {
      specs = [
        { icon: '💻', title: 'Laptop / Handheld', desc: 'ASUS ROG Ally Z1 Extreme' },
        { icon: '🧠', title: 'Procesador', desc: 'AMD Z1 Extreme' },
        { icon: '🎮', title: 'Gráfica', desc: 'Radeon 780M Integrada' },
        { icon: '💾', title: 'RAM', desc: '16 GB LPDDR5' },
        { icon: '💿', title: 'Almacenamiento', desc: 'SSD 1TB NVMe' }
      ];
    }

    setResultData({
      isError: false,
      title: setupName,
      price: `$${basePrice.toLocaleString('es-MX')}`,
      specs: specs
    });
  };

  return (
    <>
      {/* Decoraciones de fondo siempre presentes */}
      <div className="screen-corner sc-tl"></div>
      <div className="screen-corner sc-tr"></div>
      <div className="screen-corner sc-bl"></div>
      <div className="screen-corner sc-br"></div>

      <div className="cyber-bg">
        <div className="grid-ceiling"></div>
        <div className="grid-floor"></div>
        <div className="glow-pulse"></div>
        <div className="code-rain">01001000 01100101 01101100 01101100 01101111</div>
        <div className="code-rain">SYS.OVERRIDE.ACTIVE.CONNECTION.ESTABLISHED</div>
        <div className="code-rain">0x1A2B3C4D5E6F7G8H9I0J</div>
        <div className="code-rain">ACCESS_GRANTED</div>
        <div className="speed-lines">
            <div className="speed-line"></div>
            <div className="speed-line"></div>
            <div className="speed-line"></div>
            <div className="speed-line"></div>
        </div>
        <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
        </div>
      </div>
      <div className="global-glitch"></div>

      {appState === 'form' && (
        <>
          <Header />
          <div className="main-container">
            <Sidebar />
            <main className="form-area">
              {sectionsData.map((sec) => (
                <SectionBox 
                  key={sec.id}
                  data={sec}
                  selectedValue={answers[sec.id]}
                  onSelect={handleSelect}
                />
              ))}
              <div className="final-action">
                <button className="btn-primary" onClick={handleSubmit}>Ejecutar Configuración</button>
              </div>
            </main>
          </div>
        </>
      )}

      {appState === 'loading' && <LoadingScreen />}
      
      {appState === 'result' && (
        <ResultScreen 
          data={resultData} 
          onRestart={() => window.location.reload()} 
        />
      )}
    </>
  );
}