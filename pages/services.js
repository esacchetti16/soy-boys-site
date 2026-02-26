import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <div>
      <NavBar />
      <main className=\"container\">
        <h1>Services</h1>
        <p>We offer:</p>
        <ul>
          <li>Consulting Ã¢â‚¬â€ plant-based product development</li>
          <li>Private chef services</li>
          <li>Catering for events</li>
        </ul>
        <p>Contact us for pricing and availability.</p>
      </main>
      <Footer />
    </div>
  )
}
