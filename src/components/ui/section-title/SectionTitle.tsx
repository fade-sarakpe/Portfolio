import './SectionTitle.css';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className='section-title'>{title}</h1>
  )
}
