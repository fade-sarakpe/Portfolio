import SectionTitle from '@/components/ui/section-title/SectionTitle';
import { services } from '@/data/services/services';
import Image from 'next/image';
import './Services.css';

export default function Services() {
  
  const getAOSAnimation = (index: number) => {
    const col = index % 3; // column (0، 1، 2)
    const row = Math.floor(index / 3); // row (0، 1، 2...)
    
    if (col === 0) {
      // left col
      return 'fade-right';
    } else if (col === 2) {
      // right col
      return 'fade-left';
    } else {
      // middle col
      return row % 2 === 0 ? 'fade-down' : 'fade-up';
    }
  };
  return (
    <div id="services" className="services-section">
      <SectionTitle title="Services" />
      <div className="services-container">
        {services.map((service, index) => (
          <div data-aos={getAOSAnimation(index)} key={service.id} className="service-card">
            <div className="service-number">{service.id}</div>
            <Image className="service-icon" src={service.icon} width={75} height={75} alt='' />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}