export default function Footer() {
  return (
    <footer style={{
      padding: 24,
      marginTop: 36,
      background: '#fff',
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 -2px 12px rgba(0,0,0,0.07)',
      width: '100vw',
      maxWidth: '100vw',
      left: '50%',
      right: '50%',
      transform: 'translateX(-50%)',
      boxSizing: 'border-box',
    }}>
      <div className="footer-bar" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        flexWrap: 'wrap',
        gap: 48,
        minHeight: 60,
      }}>
        <div style={{position:'absolute',left:'calc(50% - 320px)',transform:'translateX(-50%)',fontSize:16}}>&copy; 2026 Soy Boys</div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2}}>
          <a href="https://instagram.com/soyboyskitchen" target="_blank" rel="noopener noreferrer" style={{display:'flex',alignItems:'center',justifyContent:'center',height:48}}>
            <img src="/images/IG Logo.webp" alt="Instagram" style={{width: 40, height: 40, display: 'block'}} />
          </a>
        </div>
        <div className="footer-email" style={{position:'absolute',right:'calc(50% - 320px)',transform:'translateX(50%)',fontSize:15,wordBreak:'break-word',overflowWrap:'break-word',maxWidth:'180px',textAlign:'right',paddingRight:0,whiteSpace:'normal',lineHeight:1.2}}>
          <a
            href="mailto:admin@sous-tech.com"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
              fontWeight: 'normal',
              fontSize: 16,
              background: 'none',
              border: 'none',
              outline: 'none',
              padding: 0
            }}
            onContextMenu={e => {
              e.preventDefault();
              if (navigator && navigator.clipboard) {
                navigator.clipboard.writeText('admin@sous-tech.com');
                alert('Email address copied to clipboard!');
              }
            }}
            title="Left click to email, right click to copy"
          >
            admin@sous-tech.com
          </a>
        </div>
      </div>
      {/* Flames image moved to index.js as background */}
    </footer>
  );
}
