import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <NavBar />
      {/* Background mascots */}
      <img src="/images/soy-boy-1.png" alt="Soy Boy 1" style={{ position: 'fixed', left: 0, bottom: 120, width: '32vw', minWidth: 220, maxWidth: 400, opacity: 0.18, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }} />
      <img src="/images/soy-boy-2.png" alt="Soy Boy 2" style={{ position: 'fixed', right: 0, bottom: 120, width: '32vw', minWidth: 220, maxWidth: 400, opacity: 0.18, zIndex: 0, pointerEvents: 'none', userSelect: 'none' }} />
      <main className='container' style={{ position: 'relative', zIndex: 1 }}>
        <section className='site-hero' style={{ marginTop: 12, fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', letterSpacing: '0.5px', textAlign: 'center' }}>
          <img src="/images/soy-boys.png" alt="Soy Boys Logo" style={{ maxWidth: 420, width: '80%', height: 'auto', display: 'block', margin: '0 auto 18px auto' }} />
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