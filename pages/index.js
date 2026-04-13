import NavBar from '../components/NavBar';
import useIsMobile from '../hooks/useIsMobile';
import FoodSlideshow from '../components/FoodSlideshow';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import LocationsMap from '../components/LocationsMap';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm('mnjlaoyb');
  const isMobile = typeof window !== 'undefined' ? useIsMobile() : false;

  return (
    <>
      {/* Blurred flames at bottom as background layer, outside main content */}
      <div style={{ position: 'fixed', left: 0, bottom: isMobile ? '-22vh' : '-10vh', width: '100vw', height: '65vh', zIndex: -1, pointerEvents: 'none', userSelect: 'none', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/images/flames.png" alt="Flames background" style={{ position: 'absolute', left: '-10vw', bottom: 0, width: '120vw', height: '100%', minHeight: 180, objectFit: 'cover', opacity: 1, filter: 'blur(6px) brightness(1.12)' }} />
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100vw', height: '100%', background: 'linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.0) 70%)', pointerEvents: 'none' }} />
      </div>
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', background: '#fff' }}>
        {/* Large logo and mascots above Products section */}
        <NavBar />
        {/* On mobile, move slideshow to the very top, 50% closer to the top. On desktop, keep layout unchanged. */}
        {isMobile && (
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', marginTop: '4vh', marginBottom: 0, background: 'none', zIndex: 2, position: 'relative' }}>
            <FoodSlideshow />
          </div>
        )}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', background: 'none', marginBottom: 24, marginTop: isMobile ? '32vh' : '8vh', gap: 0, position: 'relative', zIndex: 2, minHeight: '60vh' }}>
          {/* Swap mascots only on mobile */}
          {isMobile ? (
            <>
              {/* Blue hat mascot (soy-boy-2.png) on right, bigger and higher */}
              <img src="/images/soy-boy-2.png" alt="Mascot Left" style={{ position: 'fixed', left: '-88vw', top: '53%', transform: 'translateY(-50%)', height: 480, width: 'auto', display: 'block', imageRendering: 'auto', filter: 'none', zIndex: 9999, pointerEvents: 'none' }} />
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'auto'}}>
                <img src="/images/soy-boys-trimmed.png" alt="Soy Boys Logo" style={{ height: 420, width: 'auto', maxHeight: '38vw', display: 'block', margin: '-288px 0 0 0', imageRendering: 'auto', filter: 'none', zIndex: 1, alignSelf: 'center' }} />
              </div>
              <img src="/images/soy-boy-1.png" alt="Mascot Right" style={{ position: 'fixed', right: '-100vw', top: '49.5%', transform: 'translateY(-50%)', height: 532, width: 'auto', display: 'block', imageRendering: 'auto', filter: 'none', zIndex: 9999, pointerEvents: 'none' }} />
            </>
          ) : (
            <>
              <img src="/images/soy-boy-2.png" alt="Mascot Left" style={{ position: 'fixed', left: '-220px', top: '50%', transform: 'translateY(-50%)', height: 780, width: 'auto', display: 'block', imageRendering: 'auto', filter: 'none', zIndex: 9999, pointerEvents: 'none' }} />
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'auto'}}>
                <FoodSlideshow />
                <img src="/images/soy-boys.png" alt="Soy Boys Logo" style={{ height: 900, width: 'auto', maxHeight: '45vw', display: 'block', margin: '0 -40px', imageRendering: 'auto', filter: 'none', zIndex: 1, alignSelf: 'center' }} />
              </div>
              <img src="/images/soy-boy-1.png" alt="Mascot Right" style={{ position: 'fixed', right: '-340px', top: '47.5%', transform: 'translateY(-50%)', height: 900, width: 'auto', display: 'block', imageRendering: 'auto', filter: 'none', zIndex: 9999, pointerEvents: 'none' }} />
            </>
          )}
        </div>
      {/* Blurred flames at bottom */}
      <div style={{ position: 'fixed', left: 0, bottom: isMobile ? '-22vh' : '-10vh', width: '100vw', height: '65vh', zIndex: 0, pointerEvents: 'none', userSelect: 'none', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/images/flames.png" alt="Flames background" style={{ position: 'absolute', left: '-10vw', bottom: 0, width: '120vw', height: '100%', minHeight: 180, objectFit: 'cover', opacity: 1, filter: 'blur(6px) brightness(1.12)' }} />
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100vw', height: '100%', background: 'linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.0) 70%)', pointerEvents: 'none' }} />
      </div>
      {/* NavBar moved above logo/mascots */}
      <main className='container' style={{ position: 'relative', zIndex: 2, marginTop: 0, marginBottom: 60, fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif" }}>
            {/* Chef-Made Plant Based Banner (desktop only) */}
            {!isMobile && (
              <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto 24px auto',
              }}>
                <span style={{
                  color: '#1976D2',
                  fontFamily: 'Luckiest Guy, Impact, Arial, sans-serif',
                  fontWeight: 900,
                  fontSize: 112, // doubled from 56
                  letterSpacing: '2px',
                  textAlign: 'center',
                  lineHeight: 1.1,
                  display: 'block',
                  margin: '0 auto',
                  padding: '0 12px',
                  background: 'none',
                  border: 'none',
                  borderRadius: 0,
                  boxShadow: 'none',
                  userSelect: 'none',
                  maxWidth: '98vw',
                }}>
                  CHEF-MADE.<br />PLANT BASED.
                </span>
              </div>
            )}

            {/* Products Section */}
            <section id="products" style={{ marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 style={{
                textAlign: 'center',
                border: 'none',
                borderRadius: 18,
                display: 'inline-block',
                padding: '18px 56px',
                margin: '0 auto 32px auto',
                color: '#111',
                background: '#FFD600',
                fontWeight: 900,
                fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                boxShadow: '0 2px 16px #FFD60044',
                letterSpacing: '2px',
                width: 'auto',
                minWidth: 220,
                maxWidth: '90vw',
              }}>Products</h1>
              <div style={{width: '100%', maxWidth: 900, margin: '0 auto', marginBottom: 48, background: 'rgba(255,251,230,0.8)', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', padding: 40, textAlign: 'center'}}>
                                <div style={{
                                  fontSize: 32,
                                  color: '#222',
                                  fontWeight: 400,
                                  marginBottom: 18,
                                  fontFamily: "'Segoe UI', Helvetica Neue, Arial, sans-serif",
                                  background: 'none'
                                }}>
                                  Produced and delivered weekly, reach out if you want these products at your storefront or in your home
                                </div>
                <h2 style={{
                  textAlign: 'center',
                  color: '#111',
                  fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: 32,
                  marginBottom: 8,
                  background: 'none',
                  border: 'none',
                  borderRadius: 0,
                  padding: 0
                }}>Prepared Meals</h2>
                <p style={{fontSize: 32, textAlign: 'center', marginBottom: 24}}>
                  <span style={{display:'block',background:'rgba(255,255,255,0.85)',borderRadius:12,padding:'18px 24px',margin:'0 auto 18px auto',maxWidth:700}}>
                    Our ready-to-eat meals are elevated plant-based dining in a box that you can enjoy anywhere! These inspired recipes aren't only convenient, but they're made with clean ingredients that will get you feeling <em>right</em>.
                  </span>
                </p>
                <div style={{display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap', marginBottom: 32}}>
                  {/* Yummy Noodle Bowl */}
                  <div style={{width: 220, background: 'rgba(255,255,255,0.8)', borderRadius: 12, boxShadow: '0 2px 12px #FFD60033', padding: 16, textAlign: 'center'}}>
                    <img src="/images/Yummy Noodle Bowl.png" alt="Yummy Noodle Bowl" style={{width: '100%', borderRadius: 8, marginBottom: 8}} />
                    <div style={{fontWeight: 700, fontSize: 20, marginBottom: 4}}>Yummy Noodle Bowl</div>
                  </div>
                  {/* Calabrian Pesto Pasta */}
                  <div style={{width: 220, background: 'rgba(255,255,255,0.8)', borderRadius: 12, boxShadow: '0 2px 12px #FFD60033', padding: 16, textAlign: 'center'}}>
                    <img src="/images/Calabrian Pesto Pasta.jpg" alt="Calabrian Pesto Pasta" style={{width: '100%', borderRadius: 8, marginBottom: 8}} />
                    <div style={{fontWeight: 700, fontSize: 20, marginBottom: 4}}>Calabrian Pesto Pasta</div>
                  </div>
                </div>
                <h2 style={{
                  textAlign: 'center',
                  color: '#111',
                  fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: 32,
                  marginBottom: 8,
                  background: 'none',
                  border: 'none',
                  borderRadius: 0,
                  padding: 0
                }}>St**k</h2>
                <p style={{fontSize: 32, textAlign: 'center', marginBottom: 24}}>
                  <span style={{display:'block',background:'rgba(255,255,255,0.85)',borderRadius:12,padding:'18px 24px',margin:'0 auto 18px auto',maxWidth:700}}>
                    We're not trying to replace meat—we're improving on it. Our line of seitan provides the protein you want in a meal while already being perfectly seasoned and convenient to prepare. St**k is a cheat code for any savory snack or as a protein-packed enhancer for sandwiches, pastas, or salads.
                  </span>
                </p>
                <div style={{display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap'}}>
                  {/* Cheesesteak */}
                  <div style={{width: 220, background: 'rgba(255,255,255,0.8)', borderRadius: 12, boxShadow: '0 2px 12px #FFD60033', padding: 16, textAlign: 'center', minHeight: 160}}>
                    <div style={{fontWeight: 700, fontSize: 20, marginBottom: 4}}>Cheesesteak</div>
                    <div style={{fontStyle: 'italic', color: '#888', fontSize: 16}}>*photos coming soon*</div>
                  </div>
                  {/* Korean BBQ */}
                  <div style={{width: 220, background: 'rgba(255,255,255,0.8)', borderRadius: 12, boxShadow: '0 2px 12px #FFD60033', padding: 16, textAlign: 'center', minHeight: 160}}>
                    <div style={{fontWeight: 700, fontSize: 20, marginBottom: 4}}>Korean BBQ</div>
                    <div style={{fontStyle: 'italic', color: '#888', fontSize: 16}}>*photos coming soon*</div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Services Section */}
            <section id="services" style={{ marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 style={{
                textAlign: 'center',
                border: 'none',
                borderRadius: 18,
                display: 'inline-block',
                padding: '18px 56px',
                margin: '0 auto 32px auto',
                color: '#111',
                background: '#FFD600',
                fontWeight: 900,
                fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                boxShadow: '0 2px 16px #FFD60044',
                letterSpacing: '2px',
                width: 'auto',
                minWidth: 220,
                maxWidth: '90vw',
              }}>Services</h1>

              <div style={{background: 'rgba(255,251,230,0.8)', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', padding: 40, textAlign: 'center', margin: 0}}>
                <h2 style={{
                  textAlign: 'center',
                  color: '#111',
                  fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: 32,
                  marginTop: 0,
                  marginBottom: 12,
                  background: 'none',
                  border: 'none',
                  borderRadius: 0,
                  padding: 0
                }}>Private Cheffing</h2>
                <p style={{fontSize: 32, textAlign: 'center', marginBottom: 24, marginTop: 0}}>
                  <span style={{display:'block',background:'rgba(255,255,255,0.85)',borderRadius:12,padding:'18px 24px',margin:'0 auto 18px auto',maxWidth:700}}>
                    With over a dozen years in the culinary industry working at Michelin-starred kitchens in New York City and Chicago, Chef Harris Khan can bring high-end dining to your kitchen table.
                  </span>
                </p>
                <div style={{display:'flex',justifyContent:'center',margin:'18px 0 32px 0'}}>
                  <img src="/images/Private Chef.jpg" alt="Private Cheffing" style={{maxWidth:400,width:'100%',height:'auto',borderRadius:16,boxShadow:'0 2px 12px #FFD60033',background:'#fff'}} />
                </div>
                {/* Catering subsection - removed extra beige box */}
                <h2 style={{
                  textAlign: 'center',
                  color: '#111',
                  fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: 32,
                  marginBottom: 12,
                  background: 'none',
                  border: 'none',
                  borderRadius: 0,
                  padding: 0
                }}>Catering</h2>
                <p style={{fontSize: 32, textAlign: 'center', marginBottom: 24, marginTop: 0}}>
                  <span style={{display:'block',background:'rgba(255,255,255,0.85)',borderRadius:12,padding:'18px 24px',margin:'0 auto 18px auto',maxWidth:700, border: 'none', boxShadow: 'none'}}>
                    Let Soy Boys cater your next event with delicious dishes that will impress every guest. We handle events of all sizes with care and creativity. We'll work with you to make a menu that matches your unique vision.
                  </span>
                </p>
              </div>
            </section>

            {/* Where to find us Section */}
            <section id="locations" style={{ marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 style={{
                textAlign: 'center',
                border: 'none',
                borderRadius: 18,
                display: 'inline-block',
                padding: '18px 56px',
                margin: '0 auto 32px auto',
                color: '#111',
                background: '#FFD600',
                fontWeight: 900,
                fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                boxShadow: '0 2px 16px #FFD60044',
                letterSpacing: '2px',
                width: 'auto',
                minWidth: 220,
                maxWidth: '90vw',
              }}>Where to find us</h1>
              <div style={{width: '100%', maxWidth: 900, margin: '0 auto', marginBottom: 32, background: 'rgba(255,251,230,0.8)', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', padding: 40, textAlign: 'center'}}>
                <div style={{fontWeight: 700, fontSize: 28, color: '#1976D2', marginBottom: 18, fontFamily: "'Lilita One', Impact, Arial, sans-serif"}}>Physically</div>
                <LocationsMap />
              </div>
              <div style={{width: '100%', maxWidth: 960, margin: '0 auto', textAlign: 'center', display: 'block', padding: 0, border: 'none', background: 'none'}}>
                <div style={{fontWeight: 700, fontSize: 28, color: '#1976D2', margin: '32px 0 18px 0', fontFamily: "'Lilita One', Impact, Arial, sans-serif"}}>Digitally</div>
                <div style={{margin: '0 auto 10px auto', fontWeight: 700, fontSize: 22, color: '#E1306C', fontFamily: "'Lilita One', Impact, Arial, sans-serif", letterSpacing: '1px', textAlign: 'center', maxWidth: 960}}>
                  <a href="https://instagram.com/soyboyskitchen" target="_blank" rel="noopener noreferrer" style={{color: '#E1306C', textDecoration: 'none'}}>@soyboyskitchen</a>
                </div>
                <iframe src="https://snapwidget.com/embed/1121761" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{border: 'none', overflow: 'hidden', width: 960, height: 480, borderRadius: 18, display: 'block', margin: '0 auto 4px auto', background: 'none', padding: 0}} title="Posts from Instagram"></iframe>
              </div>
            </section>

            {/* About Section */}
            <section id="about" style={{ marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 style={{
                textAlign: 'center',
                border: 'none',
                borderRadius: 18,
                display: 'inline-block',
                padding: '18px 56px',
                margin: '0 auto 32px auto',
                color: '#111',
                background: '#FFD600',
                fontWeight: 900,
                fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                boxShadow: '0 2px 16px #FFD60044',
                letterSpacing: '2px',
                width: 'auto',
                minWidth: 220,
                maxWidth: '90vw',
              }}>About</h1>
              <div style={{width: '100%', maxWidth: 900, margin: '0 auto', marginBottom: 32, background: 'rgba(255,251,230,0.8)', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', padding: 40, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32}}>
                <div>
                  <p style={{fontSize: 32, marginBottom: 18}}>
                    <span style={{display:'block',background:'rgba(255,255,255,0.85)',borderRadius:12,padding:'18px 24px',margin:'0 auto 18px auto',maxWidth:700}}>
                      <strong>Soy Boys</strong> is a Chicago-based team with the simple goal of making plant based food elevated and convenient. Formed by two friends—one chef and one engineer—we wanted to apply our skills and love for sustainable food to make products that serve our community.
                    </span>
                  </p>
                  <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 32, flexWrap: 'wrap', marginTop: 24}}>
                    {/* Enzo on the left */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <div style={{display:'flex',flexDirection:'row',gap:12,alignItems:'center'}}>
                        <img src="/images/Enzo Headshot.jpg" alt="Enzo Headshot" style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', background: 'rgba(255,255,255,0.8)' }} />
                        <img src="/images/enzo climber.jpg" alt="Enzo Climber" style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', background: 'rgba(255,255,255,0.8)' }} />
                      </div>
                      <div style={{marginTop: 12, fontWeight: 700, fontSize: 20, color: '#1976D2', fontFamily: "'Lilita One', Impact, Arial, sans-serif", textAlign: 'center'}}>
                        Enzo (Soy Boy)
                      </div>
                    </div>
                    {/* Harris on the right */}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <div style={{display:'flex',flexDirection:'row',gap:12,alignItems:'center'}}>
                        <img src="/images/Harris Headshot.jpg" alt="Harris Headshot" style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', background: 'rgba(255,255,255,0.8)' }} />
                        <img src="/images/harris climber.jpg" alt="Harris Climber" style={{ width: 200, height: 200, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 12px #FFD60033', background: 'rgba(255,255,255,0.8)' }} />
                      </div>
                      <div style={{marginTop: 12, fontWeight: 700, fontSize: 20, color: '#1976D2', fontFamily: "'Lilita One', Impact, Arial, sans-serif", textAlign: 'center'}}>
                        Chef Harris (Also a Soy Boy)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Contact Section */}
            <section id="contact" style={{ marginTop: 80, marginBottom: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h1 style={{
                textAlign: 'center',
                border: 'none',
                borderRadius: 18,
                display: 'inline-block',
                padding: '18px 56px',
                margin: '0 auto 32px auto',
                color: '#111',
                background: '#FFD600',
                fontWeight: 900,
                fontFamily: "'Lilita One', Impact, Arial, sans-serif",
                boxShadow: '0 2px 16px #FFD60044',
                letterSpacing: '2px',
                width: 'auto',
                minWidth: 220,
                maxWidth: '90vw',
              }}>Contact</h1>
                <div style={{
                  background: 'rgba(255,251,230,0.8)',
                  borderRadius: 16,
                  boxShadow: '0 2px 16px #FFD60044',
                  padding: 32,
                  maxWidth: 480,
                  margin: '0 auto 32px auto',
                  width: '100%',
                  textAlign: 'center'
                }}>
                <p style={{fontSize: 16, marginBottom: 18}}>For orders or inquiries, email <strong>admin@sous-tech.com</strong> or use the form below:</p>
                {state.succeeded ? (
                  <p style={{ color: '#1976D2', fontWeight: 700, fontSize: 22, margin: '24px 0' }}>Thank you for your message! We'll be in touch soon.</p>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18, marginTop: 12 }}>
                    <input placeholder='Your name' name='name' required style={{
                      padding: '14px 18px',
                      borderRadius: 10,
                      border: '2px solid #FFD600',
                      fontSize: 17,
                      outline: 'none',
                      marginBottom: 0,
                      background: '#fff',
                    }} />
                    <input placeholder='Email' name='email' type='email' required style={{
                      padding: '14px 18px',
                      borderRadius: 10,
                      border: '2px solid #FFD600',
                      fontSize: 17,
                      outline: 'none',
                      marginBottom: 0,
                      background: '#fff',
                    }} />
                    <ValidationError field="email" errors={state.errors} />
                    <textarea placeholder='Message' name='message' required rows={4} style={{
                      padding: '14px 18px',
                      borderRadius: 10,
                      border: '2px solid #FFD600',
                      fontSize: 17,
                      outline: 'none',
                      marginBottom: 0,
                      background: '#fff',
                    }} />
                    <ValidationError field="message" errors={state.errors} />
                    <button type='submit' disabled={state.submitting} style={{
                      background: '#FFD600',
                      color: '#111',
                      fontWeight: 900,
                      fontSize: 18,
                      border: 'none',
                      borderRadius: 10,
                      padding: '14px 0',
                      marginTop: 8,
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px #FFD60033',
                      transition: 'background 0.2s',
                    }}>Send</button>
                  </form>
                )}
              </div>
            </section>
      </main>
      <Footer />
      </div>
    </>
  );
}