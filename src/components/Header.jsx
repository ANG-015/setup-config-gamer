import { useState, useEffect } from 'react';

export default function Header() {
  const [time, setTime] = useState('');
  const [signal, setSignal] = useState(85);

  useEffect(() => {
    // Reloj en formato 12h
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Señal aleatoria
    const signalTimer = setInterval(() => {
      setSignal(Math.floor(Math.random() * 20) + 75);
    }, 3000);
    return () => clearInterval(signalTimer);
  }, []);

  return (
    <header>
      <div className="header-scanline"></div>
      <div className="header-code hc-code-1">0xAF32_OVERRIDE</div>
      <div className="header-code hc-code-2">SECURE_LINK_ESTABLISHED</div>

      <div className="header-corner hc-tl"></div>
      <div className="header-corner hc-tr"></div>
      <div className="header-corner hc-bl"></div>
      <div className="header-corner hc-br"></div>

      <div className="logo-container">
          <div className="logo-ring-outer"></div>
          <div className="logo-ring-inner"></div>
          <div className="hex-logo"></div>
          <div className="logo-text">
              <div className="main-title">SYS.CONFIG // SETUP</div>
              <div className="sub-title">
                  <span>NIGHT CITY NETRUNNER INTERFACE</span>
                  <span>v2.0.4</span>
              </div>
          </div>
      </div>

      <div className="header-status">
          <div className="status-block">
              <span className="status-label">ESTADO</span>
              <span className="status-value"><div className="status-dot"></div> ONLINE</span>
          </div>
          <div className="status-block">
              <span className="status-label">SEÑAL</span>
              <div className="mini-bar-segmented">
                  <div className="mini-bar-seg" style={{ width: `${signal}%` }}></div>
              </div>
          </div>
          <div className="time-display">{time}</div>
      </div>
    </header>
  );
}