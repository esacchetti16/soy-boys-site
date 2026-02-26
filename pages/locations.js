import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const placeholderLocations = [
  {name:'Farmer\'s Market â€” Saturday', addr:'123 Market St'},
  {name:'Good Food Co-op', addr:'456 Main Ave'}
]

export default function Locations(){
  return (
    <div>
      <NavBar />
      <main className=\"container\">
        <h1>Where to find us</h1>
        <p>We sell at the following markets and stores â€” listings editable via CMS.</p>
        <ul>
          {placeholderLocations.map(l => <li key={l.name}><strong>{l.name}</strong>: {l.addr}</li>)}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
