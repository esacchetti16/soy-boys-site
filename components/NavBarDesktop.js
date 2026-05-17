export default function NavBarDesktop() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 9999, background: 'rgba(255,247,230,0.8)', padding: 0, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', height: 48, display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          title="Back to top"
        >
          <img src="/images/soy-boys-trimmed.png" alt="Soy Boys Logo" style={{ height: 48, width: 'auto', display: 'block', objectFit: 'contain', pointerEvents: 'none' }} />
        </div>
        <nav className="nav-desktop" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, fontSize: '3rem', letterSpacing: '0.5px', padding: '22px 0 12px 0' }}>
          <a className="sb-nav-link" href="#products" onClick={e => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({behavior: 'smooth'});}}>Products</a>
          <a className="sb-nav-link" href="#services" onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});}}>Services</a>
          <a className="sb-nav-link" href="#locations" onClick={e => { e.preventDefault(); document.getElementById('locations')?.scrollIntoView({behavior: 'smooth'});}}>Where to find us</a>
          <a className="sb-nav-link" href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});}}>About</a>
          <a className="sb-nav-link" href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});}}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
