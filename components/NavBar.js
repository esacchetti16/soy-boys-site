import Link from 'next/link'

export default function NavBar(){
  return (
    <header style={{padding:'12px 24px'}}>
      <nav className=\"nav container\">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className=\"logo-placeholder\">Logo</div>
          <strong>Soy Boys</strong>
        </div>
        <div style={{marginLeft:'auto',display:'flex',gap:12}}>
          <Link href=\"/\">Home</Link>
          <Link href=\"/products\">Products</Link>
          <Link href=\"/locations\">Where to find us</Link>
          <Link href=\"/services\">Services</Link>
          <Link href=\"/about\">About</Link>
          <Link href=\"/contact\">Contact</Link>
        </div>
      </nav>
    </header>
  )
}
