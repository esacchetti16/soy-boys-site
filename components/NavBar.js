import Link from 'next/link';

export default function NavBar() {
  return (
    <header style={{ padding: '24px 0 0 0', background: 'none' }}>
      <nav className='nav container' style={{ flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 8 }}>
          <img src="/images/soy-boys.png" alt="Soy Boys Logo" style={{ height: 120, width: 'auto', display: 'block', margin: '0 auto' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 8 }}>
          <Link href='/'><span style={{padding:'8px 0',display:'inline-block'}}>Home</span></Link>
          <Link href='/products'><span style={{padding:'8px 0',display:'inline-block'}}>Products</span></Link>
          <Link href='/locations'><span style={{padding:'8px 0',display:'inline-block'}}>Where to find us</span></Link>
          <Link href='/services'><span style={{padding:'8px 0',display:'inline-block'}}>Services</span></Link>
          <Link href='/about'><span style={{padding:'8px 0',display:'inline-block'}}>About</span></Link>
          <Link href='/contact'><span style={{padding:'8px 0',display:'inline-block'}}>Contact</span></Link>
        </div>
      </nav>
    </header>
  );
}
