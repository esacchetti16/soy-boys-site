export default function NavBarDesktop() {
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 9999, background: 'rgba(255,247,230,0.8)', padding: 0, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
      <nav className='nav-desktop' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, fontFamily: "'Lilita One', Impact, Arial, sans-serif", fontSize: '3rem', letterSpacing: '0.5px', padding: '22px 0 12px 0', fontWeight: 400 }}>
        <a href="#products" onClick={e => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({behavior: 'smooth'});}}><span>Products</span></a>
        <a href="#services" onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'});}}><span>Services</span></a>
        <a href="#locations" onClick={e => { e.preventDefault(); document.getElementById('locations')?.scrollIntoView({behavior: 'smooth'});}}><span>Where to find us</span></a>
        <a href="#about" onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});}}><span>About</span></a>
        <a href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});}}><span>Contact</span></a>
      </nav>
    </header>
  );
}
