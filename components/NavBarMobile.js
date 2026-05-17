import { useState } from 'react';

export default function NavBarMobile() {
  const [open, setOpen] = useState(false);
  const handleNavClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };
  return (
    <div className="nav-mobile" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 9999, background: 'rgba(255,247,230,0.5)', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56 }}>
      <button className="nav-hamburger" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(o => !o)} style={{marginLeft: 12}}>
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      {/* Spacer to keep logo right-aligned */}
      <div style={{flex: 1}} />
      <img
        src="/images/soy-boys-trimmed.png"
        alt="Soy Boys Logo"
        style={{height: 40, marginRight: 12, objectFit: 'contain', cursor: 'pointer'}}
        onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        title="Back to top"
      />
      {open && (
        <nav className="nav-mobile-menu" aria-label="Site sections">
          <a className="sb-nav-link" href="#products" onClick={handleNavClick('products')}>Products</a>
          <a className="sb-nav-link" href="#services" onClick={handleNavClick('services')}>Services</a>
          <a className="sb-nav-link" href="#locations" onClick={handleNavClick('locations')}>Where to find us</a>
          <a className="sb-nav-link" href="#about" onClick={handleNavClick('about')}>About</a>
          <a className="sb-nav-link" href="#contact" onClick={handleNavClick('contact')}>Contact</a>
        </nav>
      )}
    </div>
  );
}
