import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <NavBar />
      {/* Background mascots */}
      <img src="/images/soy-boy-1.png" alt="Soy Boy 1 (image missing?)" style={{ position: 'fixed', left: 0, bottom: 120, width: '32vw', minWidth: 220, maxWidth: 400, opacity: 0.18, zIndex: 0, pointerEvents: 'none', userSelect: 'none', border: '2px solid red', background: '#fff3' }} onError={e => { e.target.onerror = null; e.target.alt = 'Soy Boy 1 image not found'; e.target.style.border = '2px solid orange'; }} />
      <img src="/images/soy-boy-2.png" alt="Soy Boy 2 (image missing?)" style={{ position: 'fixed', right: 0, bottom: 120, width: '32vw', minWidth: 220, maxWidth: 400, opacity: 0.18, zIndex: 0, pointerEvents: 'none', userSelect: 'none', border: '2px solid red', background: '#fff3' }} onError={e => { e.target.onerror = null; e.target.alt = 'Soy Boy 2 image not found'; e.target.style.border = '2px solid orange'; }} />
      <main className='container' style={{ position: 'relative', zIndex: 1 }}>
        <section className='site-hero' style={{ marginTop: 12, fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', letterSpacing: '0.5px', textAlign: 'center' }}>
          <img src="/images/soy-boys.png" alt="Soy Boys Logo (image missing?)" style={{ maxWidth: 420, width: '80%', height: 'auto', display: 'block', margin: '0 auto 18px auto', border: '2px solid red', background: '#fff3' }} onError={e => { e.target.onerror = null; e.target.alt = 'Soy Boys Logo image not found'; e.target.style.border = '2px solid orange'; }} />
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