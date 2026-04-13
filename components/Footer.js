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
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512" fill="#E1306C" style={{display:'block'}}>
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.1S388.6 9.7 353.3 8C317.8 6.3 284.4 0 224 0S130.2 6.3 94.7 8C59.4 9.7 28 17.9 2.7 43.2S9.7 59.4 8 94.7C6.3 130.2 0 163.6 0 224s6.3 93.8 8 129.3c1.7 35.3 9.9 66.7 36.2 92.1s56.8 34.5 92.1 36.2C130.2 505.7 163.6 512 224 512s93.8-6.3 129.3-8c35.3-1.7 66.7-9.9 92.1-36.2s34.5-56.8 36.2-92.1c1.7-35.5 8-68.9 8-129.3s-6.3-93.8-8-129.3zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5C121.1 9 190.9 11.6 224 11.6s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.7 102.9-9 132.3z"/>
            </svg>
          </a>
        </div>
        <div className="footer-email" style={{position:'absolute',right:'calc(50% - 320px)',transform:'translateX(50%)',fontSize:15,wordBreak:'break-word',overflowWrap:'break-word',maxWidth:'180px',textAlign:'right',paddingRight:0,whiteSpace:'normal',lineHeight:1.2}}>admin@sous-tech.com</div>
      </div>
      {/* Flames image moved to index.js as background */}
    </footer>
  );
}
