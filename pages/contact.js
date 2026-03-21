import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <h1>Contact</h1>
        <p>For orders or inquiries, email <strong>admin@sous-tech.com</strong> or use the form below:</p>
        <form style={{ maxWidth: 480, marginTop: 12 }} onSubmit={e => { e.preventDefault(); alert('Form will send to admin@sous-tech.com soon!'); }}>
          <div style={{ display: 'grid', gap: 8 }}>
            <input placeholder='Your name' name='name' />
            <input placeholder='Email' name='email' />
            <textarea placeholder='Message' name='message' rows={4} />
            <button type='submit'>Send</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
