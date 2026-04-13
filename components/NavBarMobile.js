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
      <button className="nav-hamburger" aria-label="Open navigation" onClick={() => setOpen(o => !o)} style={{marginLeft: 12}}>
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      {/* Spacer to keep logo right-aligned */}
      <div style={{flex: 1}} />
      <img src="/images/soy-boys-trimmed.png" alt="Soy Boys Logo" style={{height: 40, marginRight: 12, objectFit: 'contain'}} />
      {open && (
        <div className="nav-mobile-menu">
          <a href="#products" onClick={handleNavClick('products')}><span>Products</span></a>
          <a href="#services" onClick={handleNavClick('services')}><span>Services</span></a>
          <a href="#locations" onClick={handleNavClick('locations')}><span>Where to find us</span></a>
          <a href="#about" onClick={handleNavClick('about')}><span>About</span></a>
          <a href="#contact" onClick={handleNavClick('contact')}><span>Contact</span></a>
        </div>
      )}
    </div>
  );
}
