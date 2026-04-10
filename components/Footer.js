export default function Footer() {
  return (
    <footer style={{padding:24,marginTop:36,background:'#fff',position:'relative',zIndex:1, boxShadow:'0 -2px 12px rgba(0,0,0,0.07)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>&copy; 2026 Soy Boys</div>
        <div>Contact: admin@sous-tech.com</div>
      </div>
      {/* Flames image moved to index.js as background */}
    </footer>
  );
}
