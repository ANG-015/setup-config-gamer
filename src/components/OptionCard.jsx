export default function OptionCard({ option, isSelected, onSelect }) {
  return (
    <div 
      className={`option-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option.value)}
    >
      <div className="card-corner cc-tl"></div>
      <div className="card-corner cc-tr"></div>
      <div className="card-corner cc-bl"></div>
      <div className="card-corner cc-br"></div>
      
      <div className="card-bg-text">SELECCIONADO</div>
      
      <div className="card-icon-container">
        <div className="icon">{option.icon}</div>
      </div>
      
      <h4>{option.title}</h4>
      <p>{option.desc}</p>
      
      <div className="card-footer-deco">
        <span className="card-serial">{option.serial}</span>
        <div className="card-barcode"></div>
      </div>
    </div>
  );
}