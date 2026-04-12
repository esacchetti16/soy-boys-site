import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#fff7e6' }}>
      {/* Blurred flames at bottom, only top visible, mascots much larger and centered vertically */}
      <div style={{ position: 'fixed', left: 0, bottom: '-12vh', width: '100vw', height: '60vh', zIndex: 0, pointerEvents: 'none', userSelect: 'none', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/images/flames.png" alt="Flames background" style={{ position: 'absolute', left: 0, bottom: '-10%', width: '100vw', height: 'auto', minHeight: 180, objectFit: 'cover', opacity: 0.92, filter: 'blur(1.5px) brightness(1.08)' }} />
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100vw', height: '100%', background: 'linear-gradient(to top, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.0) 60%)', pointerEvents: 'none' }} />
        </div>
        {/* Mascots, much larger, centered vertically, above flames */}
        <div style={{ position: 'fixed', left: 0, bottom: '10%', width: '100vw', height: '36vh', zIndex: 1, pointerEvents: 'none', userSelect: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src="/images/soy-boy-2.png" alt="Soy Boy 2" style={{ marginLeft: '-7vw', width: '64vw', minWidth: 420, maxWidth: 900, opacity: 1, filter: 'blur(2.5px)' }} />
          <img src="/images/soy-boy-1.png" alt="Soy Boy 1" style={{ marginRight: '-7vw', width: '64vw', minWidth: 420, maxWidth: 900, opacity: 1, filter: 'blur(2.5px)' }} />
      </div>
      <NavBar />
      <main className='container' style={{ position: 'relative', zIndex: 2, marginTop: 60, marginBottom: 60, fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif" }}>
        <section className='site-hero' style={{ marginTop: 60, marginBottom: 60, fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif", letterSpacing: '0.5px', textAlign: 'center' }}>
          <p style={{ maxWidth: 720, fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif", fontSize: '2rem', margin: '0 auto 48px auto', fontWeight: 400, color: '#222', textShadow: '0 2px 8px #fff7e6cc' }}>
            Plant-based comfort with personality — <span style={{ color: '#c60b1e', fontWeight: 700, fontFamily: "'Lilita One', Impact, Arial, sans-serif" }}>bold flavors</span>, playful vibes.<br />Explore our meals and services.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, margin: '48px 0', flexWrap: 'wrap' }}>
            <div style={{ width: 320, height: 220, background: '#fffbe6', borderRadius: 18, boxShadow: '0 4px 24px #0001', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Food sample" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: '18px 18px 0 0' }} />
              <div style={{ padding: 12, fontSize: '1.1rem', color: '#c60b1e', fontWeight: 700 }}>Signature Soy Bowl</div>
            </div>
            <div style={{ width: 320, height: 220, background: '#fffbe6', borderRadius: 18, boxShadow: '0 4px 24px #0001', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="People sample" style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: '18px 18px 0 0' }} />
              <div style={{ padding: 12, fontSize: '1.1rem', color: '#00338d', fontWeight: 700 }}>Happy Customers</div>
            </div>
          </div>
          <div style={{ maxWidth: 900, margin: '0 auto', fontSize: '1.3rem', color: '#333', lineHeight: 1.7, fontWeight: 400, textShadow: '0 2px 8px #fff7e6cc' }}>
            <p>Our menu is packed with plant-based comfort food, from hearty bowls to playful snacks. We believe in <span style={{ color: '#c60b1e', fontWeight: 700 }}>bold flavors</span>, fun vibes, and food that makes you smile.</p>
            <p>Check out our <a href="/products" style={{ color: '#c60b1e', fontWeight: 700 }}>products</a>, find us at <a href="/locations" style={{ color: '#00338d', fontWeight: 700 }}>local markets</a>, or <a href="/contact" style={{ color: '#00338d', fontWeight: 700 }}>get in touch</a> for catering and events!</p>
          </div>
        </section>
      </main>
      <Footer />
      {/* Trigger Vercel redeploy: no-op change */}
    </div>
  );
}