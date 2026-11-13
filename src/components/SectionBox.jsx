import OptionCard from './OptionCard';

export default function SectionBox({ data, selectedValue, onSelect }) {
  return (
    <div className="section-box" id={data.id}>
      <div className="corner-bracket cb-tl"></div>
      <div className="corner-bracket cb-tr"></div>
      <div className="corner-bracket cb-bl"></div>
      <div className="corner-bracket cb-br"></div>
      
      <div className="section-header-custom">
          <div className="section-top-bar">
              <div className="stb-left"><span>SEC_ID: {data.num}</span><span>COORD: 34.05,-118.24</span></div>
              <div className="stb-right">READY</div>
          </div>
          <div className="section-watermark">{data.num}</div>
          <h1 className="section-title"><span className="section-number">{data.num}</span> {data.title}</h1>
          <p className="section-subtitle">{data.subtitle}</p>
      </div>

      <div className="section-content">
          <div className="options-grid" data-step={data.num}>
            {data.options.map(opt => (
              <OptionCard 
                key={opt.value}
                option={opt}
                isSelected={selectedValue === opt.value}
                onSelect={(val) => onSelect(data.id, val)}
              />
            ))}
          </div>
      </div>
    </div>
  );
}