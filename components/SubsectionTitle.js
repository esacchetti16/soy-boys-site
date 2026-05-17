export default function SubsectionTitle({ children, className = '' }) {
  return (
    <h3 className={`sb-subsection-title${className ? ` ${className}` : ''}`}>
      {children}
    </h3>
  );
}
