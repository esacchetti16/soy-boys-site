import NavBar from '../components/NavBar';
import useIsMobile from '../hooks/useIsMobile';
import FoodSlideshow from '../components/FoodSlideshow';
import Footer from '../components/Footer';
import LocationsMap from '../components/LocationsMap';
import SectionTitle from '../components/SectionTitle';
import SubsectionTitle from '../components/SubsectionTitle';
import CopyBlock from '../components/CopyBlock';
import { useForm, ValidationError } from '@formspree/react';

export default function Home() {
  const [state, handleSubmit] = useForm('mnjlaoyb');
  const isMobile = useIsMobile();

  return (
    <>
      <a href="#products" className="skip-link">Skip to content</a>
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
              {/* Double mascot replaces both mascots */}
              <img src="/images/Double mascot.png" alt="Double Mascot" style={{ position: 'fixed', left: '49%', top: '48%', transform: 'translate(-50%, -50%)', height: 240, width: 'auto', display: 'block', imageRendering: 'auto', filter: 'none', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'auto', position: 'relative', zIndex: 10}}>
                <img src="/images/soy-boys-trimmed.png" alt="Soy Boys Logo" style={{ height: 420, width: 'auto', maxWidth: '90vw', maxHeight: '38vw', display: 'block', margin: '-300px 0 0 0', imageRendering: 'auto', filter: 'none', position: 'relative', zIndex: 10, alignSelf: 'center' }} />
              </div>
              {/* Only one mascot image needed */}
            </>
          ) : (
            <>
              {/* Double mascot replaces both mascots */}
              <img src="/images/Double mascot.png" alt="Double Mascot" style={{ position: 'fixed', left: '49%', top: '50%', transform: 'translate(-50%, -50%)', height: 810, width: 'auto', display: 'block', imageRendering: 'auto', filter: 'none', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'auto', position: 'relative', zIndex: 10}}>
                <FoodSlideshow />
                <img src="/images/soy-boys.png" alt="Soy Boys Logo" style={{ height: 900, width: 'auto', maxHeight: '45vw', display: 'block', margin: '0 -40px', imageRendering: 'auto', filter: 'none', position: 'relative', zIndex: 10, alignSelf: 'center' }} />
              </div>
              {/* Only one mascot image needed */}
            </>
          )}
        </div>
      {/* Blurred flames at bottom */}
      <div style={{ position: 'fixed', left: 0, bottom: isMobile ? '-22vh' : '-10vh', width: '100vw', height: '65vh', zIndex: 0, pointerEvents: 'none', userSelect: 'none', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/images/flames.png" alt="Flames background" style={{ position: 'absolute', left: '-10vw', bottom: 0, width: '120vw', height: '100%', minHeight: 180, objectFit: 'cover', opacity: 1, filter: 'blur(6px) brightness(1.12)' }} />
        <div style={{ position: 'absolute', left: 0, bottom: 0, width: '100vw', height: '100%', background: 'linear-gradient(to top, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.0) 70%)', pointerEvents: 'none' }} />
      </div>
      {/* NavBar moved above logo/mascots */}
      <main className="container site-main" style={{ position: 'relative', zIndex: 2, marginTop: 0, marginBottom: 60 }}>
            {!isMobile && (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 24px auto' }}>
                <span className="sb-hero-tagline">
                  CHEF-MADE.<br />PLANT BASED.
                </span>
              </div>
            )}


            <section id="products" className="sb-section">
              <SectionTitle isMobile={isMobile}>Products</SectionTitle>
              <div className="sb-panel" style={{ marginBottom: 48 }}>
                <p className="sb-lead">
                  Produced and delivered weekly, reach out if you want these products at your storefront or in your home
                </p>
                <SubsectionTitle>Prepared Meals</SubsectionTitle>
                <CopyBlock>
                  Our ready-to-eat meals are elevated plant-based dining that you can enjoy anywhere! These inspired recipes aren&apos;t only convenient, but they&apos;re made with clean ingredients that will get you feeling <em>right</em>.
                </CopyBlock>
                <div className="sb-product-grid sb-product-grid--spaced">
                  <div className="sb-product-card sb-product-card--placeholder">
                    <div className="sb-product-card__title">Lemon Tahini Pasta</div>
                    <div className="sb-product-card__desc">Dressed cavatappi with house-made seitan</div>
                    <div className="sb-product-card__note">*photos coming soon*</div>
                  </div>
                  <div className="sb-product-card sb-product-card--placeholder">
                    <div className="sb-product-card__title">Korean BBQ Bowl</div>
                    <div className="sb-product-card__desc">Sesame noodles with house-made seitan and pickled vegetables</div>
                    <div className="sb-product-card__note">*photos coming soon*</div>
                  </div>
                </div>
                <SubsectionTitle>St**k</SubsectionTitle>
                <CopyBlock>
                  We&apos;re not trying to replace meat—we&apos;re improving on it. Our line of seitan provides the protein you want in a meal while already being perfectly seasoned and convenient to prepare. St**k is a cheat code for any savory snack or as a protein-packed enhancer for sandwiches, pastas, or salads.
                </CopyBlock>
                <div className="sb-product-grid">
                  <div className="sb-product-card">
                    <img src="/images/Cheesesteak Seitan.jpg" alt="Cheesesteak Seitan" />
                    <div className="sb-product-card__title">Cheesesteak</div>
                  </div>
                  <div className="sb-product-card sb-product-card--placeholder">
                    <div className="sb-product-card__title">Korean BBQ</div>
                    <div className="sb-product-card__note">*photos coming soon*</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="services" className="sb-section">
              <SectionTitle isMobile={isMobile}>Services</SectionTitle>
              <div className="sb-panel">
                <SubsectionTitle>Private Cheffing</SubsectionTitle>
                <CopyBlock>
                  With over a dozen years in the culinary industry working at Michelin-starred kitchens in New York City and Chicago, Chef Harris Khan can bring high-end dining to your kitchen table.
                </CopyBlock>
                <div className="sb-section-photo">
                  <img src="/images/Private Chef.jpg" alt="Private Cheffing" />
                </div>
                <SubsectionTitle>Catering</SubsectionTitle>
                <CopyBlock>
                  Let Soy Boys cater your next event with delicious dishes that will impress every guest. We handle events of all sizes with care and creativity. We&apos;ll work with you to make a menu that matches your unique vision.
                </CopyBlock>
                <div className="sb-section-photo" style={{ marginBottom: 0 }}>
                  <img src="/images/Catering Photo.jpg" alt="Soy Boys Catering" />
                </div>
              </div>
            </section>

            <section id="locations" className="sb-section">
              <SectionTitle isMobile={isMobile}>Where to find us</SectionTitle>
              <div className="sb-panel" style={{ marginBottom: 32 }}>
                <div className="sb-accent-label">Physically</div>
                <LocationsMap />
              </div>
              <div className="sb-panel sb-panel--wide" style={{ background: 'transparent', boxShadow: 'none', padding: 0 }}>
                <div className="sb-accent-label" style={{ marginTop: 0 }}>Digitally</div>
                <div className="sb-ig-label">
                  <a href="https://instagram.com/soyboyskitchen" target="_blank" rel="noopener noreferrer">
                    <img src="/images/IG Logo.webp" alt="" width={26} height={26} style={{ display: 'inline-block' }} />
                    @soyboyskitchen
                  </a>
                </div>
                <iframe
                  src="https://snapwidget.com/embed/1121761"
                  className="snapwidget-widget sb-ig-embed"
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                  title="Posts from Instagram"
                />
              </div>
            </section>

            <section id="about" className="sb-section">
              <SectionTitle isMobile={isMobile}>About</SectionTitle>
              <div className="sb-panel">
                <CopyBlock>
                  <strong>Soy Boys</strong> is a Chicago-based team with the simple goal of making plant based food elevated and convenient. Formed by two friends—one chef and one engineer—we wanted to apply our skills and love for sustainable food to make products that serve our community.
                </CopyBlock>
                <div className="sb-about-photos about-photos">
                  <div className="sb-about-person">
                    <div className="sb-about-person__shots">
                      <img src="/images/Enzo Headshot.jpg" alt="Enzo Headshot" />
                      <img src="/images/enzo climber.jpg" alt="Enzo Climber" />
                    </div>
                    <div className="sb-about-person__name">Enzo (Soy Boy)</div>
                  </div>
                  <div className="sb-about-person">
                    <div className="sb-about-person__shots">
                      <img src="/images/Harris Headshot.jpg" alt="Harris Headshot" />
                      <img src="/images/harris climber.jpg" alt="Harris Climber" />
                    </div>
                    <div className="sb-about-person__name">Chef Harris (Also a Soy Boy)</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="sb-section">
              <SectionTitle isMobile={isMobile}>Contact</SectionTitle>
              <div className="sb-contact-box">
                <p>For orders or inquiries,<br /><strong>admin@sous-tech.com</strong><br />or use the form below:</p>
                {state.succeeded ? (
                  <p className="sb-form-success">Thank you for your message! We&apos;ll be in touch soon.</p>
                ) : (
                  <form onSubmit={handleSubmit} className="sb-form">
                    <input placeholder="Your name" name="name" required aria-label="Your name" />
                    <input placeholder="Email" name="email" type="email" required aria-label="Email" />
                    <ValidationError field="email" errors={state.errors} />
                    <textarea placeholder="Message" name="message" required rows={4} aria-label="Message" />
                    <ValidationError field="message" errors={state.errors} />
                    <button type="submit" disabled={state.submitting}>Send</button>
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