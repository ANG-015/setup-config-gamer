import { useState, useEffect } from 'react';

export default function Sidebar() {
  const [cpu, setCpu] = useState(78);
  const [status, setStatus] = useState('SECURE_LINE');

  useEffect(() => {
    const timer = setInterval(() => {
      setCpu(Math.floor(Math.random() * 20) + 60);
      const states = ["SECURE_LINE", "SCANNING_PORTS...", "TRACE_ROUTE_ACTIVE", "PINGING_NODE_01"];
      setStatus(states[Math.floor(Math.random() * states.length)]);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-scanline"></div>
      <div className="sidebar-dots"></div>
      <div className="sidebar-watermark">05</div>

      <div className="sidebar-header"> DATOS_REQUERIDOS <span>_</span></div>
      
      <div className="sidebar-indicators">
          <div className="indicator"><span className="ind-label">SYS</span><div className="ind-dot ind-green"></div></div>
          <div className="indicator"><span className="ind-label">ENC</span><div className="ind-dot ind-yellow"></div></div>
          <div className="indicator"><span className="ind-label">LINK</span><div className="ind-dot ind-green"></div></div>
          <div className="indicator"><span className="ind-label">WARN</span><div className="ind-dot ind-red"></div></div>
      </div>

      <nav className="sidebar-nav">
          <a href="#sec-1" className="nav-item active"><span>01.</span> ZONA</a>
          <a href="#sec-2" className="nav-item"><span>02.</span> CRÉDITOS</a>
          <a href="#sec-3" className="nav-item"><span>03.</span> SOFTWARE</a>
          <a href="#sec-4" className="nav-item"><span>04.</span> ESTÉTICA</a>
          <a href="#sec-5" className="nav-item"><span>05.</span> HARDWARE</a>
      </nav>

      <div className="telemetry-panel">
          <div className="telemetry-title"> TELEMETRÍA <span style={{animation: "blink 1s infinite"}}>●</span></div>
          
          <div className="telemetry-graphics">
              <div className="waveform">
                  <div style={{animationDelay: "0.1s"}}></div><div style={{animationDelay: "0.3s"}}></div><div style={{animationDelay: "0.0s"}}></div>
                  <div style={{animationDelay: "0.5s"}}></div><div style={{animationDelay: "0.2s"}}></div><div style={{animationDelay: "0.4s"}}></div>
                  <div style={{animationDelay: "0.1s"}}></div><div style={{animationDelay: "0.6s"}}></div><div style={{animationDelay: "0.2s"}}></div>
              </div>
              <div className="bar-chart">
                  <div style={{animationDelay: "0.2s"}}></div><div style={{animationDelay: "0.5s"}}></div><div style={{animationDelay: "0.1s"}}></div>
                  <div style={{animationDelay: "0.4s"}}></div><div style={{animationDelay: "0.6s"}}></div><div style={{animationDelay: "0.3s"}}></div>
              </div>
          </div>

          <div className="telem-row"><span>CPU LOAD</span><span className="telem-val">{cpu}%</span></div>
          <div className="telem-bar"><div className="telem-bar-fill" style={{ width: `${cpu}%` }}></div></div>
          
          <div className="telem-row"><span>MEM</span><span className="telem-val">14.2 GB</span></div>
          <div className="telem-bar"><div className="telem-bar-fill pink" style={{ width: `60%` }}></div></div>
          
          <div className="telem-row"><span>NET PING</span><span className="telem-val">12 ms</span></div>
          <div className="telem-bar"><div className="telem-bar-fill" style={{ width: `30%` }}></div></div>
          
          <div className="telem-code">
              <span>SYS_OK</span>
              <span>{status}</span>
          </div>
      </div>
    </aside>
  );
}