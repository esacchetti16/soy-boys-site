export default function Footer() {
  return (
    <footer style={{padding:24,marginTop:36,background:'#fff7e6',position:'relative',zIndex:1}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>&copy; 2026 Soy Boys</div>
        <div>Contact: admin@sous-tech.com</div>
      </div>
      <img 
        src="/images/flames.png" 
        alt="footer flames" 
        style={{
          position:'fixed',
          left:0,
          bottom:0,
          width:'100vw',
          maxHeight:'120px',
          zIndex:0,
          pointerEvents:'none',
          userSelect:'none',
        }}
      />
    </footer>
  );
}
