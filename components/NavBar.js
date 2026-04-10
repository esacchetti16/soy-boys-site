import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', padding: 0, boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}>
        <nav className='nav container' style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, fontFamily: "'Lilita One', Impact, Arial, sans-serif", fontSize: '3rem', letterSpacing: '0.5px', padding: '22px 0 12px 0', fontWeight: 700 }}>
          <Link href='/'><span>Home</span></Link>
          <Link href='/products'><span>Products</span></Link>
          <Link href='/locations'><span>Where to find us</span></Link>
          <Link href='/services'><span>Services</span></Link>
          <Link href='/about'><span>About</span></Link>
          <Link href='/contact'><span>Contact</span></Link>
        </nav>
      </header>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', background: 'none', marginBottom: 24, marginTop: 16 }}>
        <img src="/images/soy-boys.png" alt="Soy Boys Logo" style={{ height: 200, width: 'auto', display: 'block', margin: '0 auto' }} />
      </div>
    </>
  );
}
