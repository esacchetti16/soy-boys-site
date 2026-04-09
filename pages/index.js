import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#fff7e6' }}>
      {/* Blurred flames and mascots as background */}
      <div style={{ position: 'fixed', left: 0, bottom: 0, width: '100vw', height: '60vh', zIndex: 0, pointerEvents: 'none', userSelect: 'none', filter: 'blur(6px) brightness(1.1)' }}>
        <img src="/images/flames.png" alt="Flames background" style={{ position: 'absolute', left: 0, bottom: 0, width: '100vw', height: 'auto', minHeight: 180, objectFit: 'cover', opacity: 0.7 }} />
        <img src="/images/soy-boy-2.png" alt="Soy Boy 2" style={{ position: 'absolute', left: 0, bottom: 60, width: '36vw', minWidth: 260, maxWidth: 500, opacity: 0.5 }} />
        <img src="/images/soy-boy-1.png" alt="Soy Boy 1" style={{ position: 'absolute', right: 0, bottom: 60, width: '36vw', minWidth: 260, maxWidth: 500, opacity: 0.5 }} />
      </div>
      <NavBar />
      <main className='container' style={{ position: 'relative', zIndex: 2, marginTop: 60, marginBottom: 60 }}>
        <section className='site-hero' style={{ marginTop: 60, marginBottom: 60, fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif", letterSpacing: '0.5px', textAlign: 'center' }}>
          <p style={{ maxWidth: 720, fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif", fontSize: '1.5rem', margin: '0 auto 48px auto' }}>
            Plant-based comfort with personality — bold flavors, playful vibes. Explore our meals and services.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, margin: '48px 0' }}>
            <img src="/images/soy-boy-1.png" alt="Soy Boy 1" style={{ width: 120, opacity: 0.9, filter: 'drop-shadow(0 4px 12px #0002)' }} />
            <img src="/images/soy-boy-2.png" alt="Soy Boy 2" style={{ width: 120, opacity: 0.9, filter: 'drop-shadow(0 4px 12px #0002)' }} />
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto', fontSize: '1.2rem', color: '#333', lineHeight: 1.7 }}>
            <p>Our menu is packed with plant-based comfort food, from hearty bowls to playful snacks. We believe in bold flavors, fun vibes, and food that makes you smile.</p>
            <p>Check out our <a href="/products" style={{ color: '#c60b1e', fontWeight: 600 }}>products</a>, find us at <a href="/locations" style={{ color: '#c60b1e', fontWeight: 600 }}>local markets</a>, or <a href="/contact" style={{ color: '#c60b1e', fontWeight: 600 }}>get in touch</a> for catering and events!</p>
            <img src="/images/soy-boys.png" alt="Soy Boys Logo" style={{ width: 200, margin: '32px auto', display: 'block', opacity: 0.7 }} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}