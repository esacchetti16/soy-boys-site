import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <NavBar />
      {/* Background mascots - swapped and fully opaque */}
      <img src="/images/soy-boy-2.png" alt="Soy Boy 2 (image missing?)" style={{ position: 'fixed', left: 0, bottom: 120, width: '32vw', minWidth: 220, maxWidth: 400, opacity: 1, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }} onError={e => { e.target.onerror = null; e.target.alt = 'Soy Boy 2 image not found'; }} />
      <img src="/images/soy-boy-1.png" alt="Soy Boy 1 (image missing?)" style={{ position: 'fixed', right: 0, bottom: 120, width: '32vw', minWidth: 220, maxWidth: 400, opacity: 1, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }} onError={e => { e.target.onerror = null; e.target.alt = 'Soy Boy 1 image not found'; }} />
      {/* Flames background at bottom */}
      <img src="/images/flames.png" alt="Flames background" style={{ position: 'fixed', left: 0, bottom: 0, width: '100vw', height: 'auto', minHeight: 120, zIndex: -1, pointerEvents: 'none', userSelect: 'none', objectFit: 'cover' }} />
      <main className='container' style={{ position: 'relative', zIndex: 1 }}>
        <section className='site-hero' style={{ marginTop: 12, fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', letterSpacing: '0.5px', textAlign: 'center' }}>
          <p style={{ maxWidth: 720, fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', fontSize: '1.2rem', margin: '0 auto' }}>
            Plant-based comfort with personality — bold flavors, playful vibes. Explore our meals and services.
          </p>
        </section>
        <nav style={{ marginTop: 24, display: 'flex', gap: 16 }}>
          <a href='/products'>Products</a>
          <a href='/locations'>Where to find us</a>
          <a href='/services'>Services</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contact</a>
        </nav>
      </main>
      <Footer />
    </div>
  );
}