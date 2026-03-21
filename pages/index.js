import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <section className='site-hero' style={{ marginTop: 12, fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', letterSpacing: '0.5px' }}>
          <h1 style={{ fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', fontWeight: 700, fontSize: '2.8rem', letterSpacing: '1px' }}>Soy Boys Kitchen</h1>
          <p style={{ maxWidth: 720, fontFamily: 'Segoe UI, Helvetica Neue, Arial, sans-serif', fontSize: '1.2rem' }}>
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