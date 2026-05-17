export default function SectionTitle({ children, isMobile }) {
  return (
    <h1 className={`sb-section-title${isMobile ? ' sb-section-title--mobile' : ''}`}>
      {children}
    </h1>
  );
}
