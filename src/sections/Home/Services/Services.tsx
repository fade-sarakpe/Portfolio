import SectionTitle from '@/components/ui/section-title/SectionTitle';
import { services } from '@/data/services/services';
import Image from 'next/image';
import './Services.css';

export default function Services() {
  return (
    <div id="services" className="services-section">
      <SectionTitle title="Services" />
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
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