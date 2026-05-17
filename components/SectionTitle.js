export default function SectionTitle({ children, isMobile }) {
  return (
    <h2 className={`sb-section-title${isMobile ? ' sb-section-title--mobile' : ''}`}>
      {children}
    </h2>
  );
}
