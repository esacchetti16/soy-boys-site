import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import {client} from '../lib/sanity'

const sampleProducts = [
  {title:'Yummy Noodle Bowl', description:'Refreshing soba noodles with glazed tofu and pickled vegetables', image:''},
  {title:'Calabrian Pesto Pasta', description:'Dressed cavatappi with artichoke and chilis', image:''},
  {title:'St**k', description:'Cheesesteak flavored cut with seitan and spices', image:''}
]

export default function Home({products}){
  return (
    <div>
      <NavBar />
      <main className=\"container\">
        <section className=\"site-hero\" style={{marginTop:12}}>
          <h1>Soy Boys Kitchen</h1>
          <p style={{maxWidth:720}}>Plant-based comfort with personality â€” bold flavors, playful vibes. Explore our meals and wholesale services.</p>
        </section>

        <section style={{marginTop:18}}>
          <h2>Featured products</h2>
          <div className=\"product-grid\">
            {products.map(p => <ProductCard key={p.title} product={p} />)}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  if (!process.env.SANITY_PROJECT_ID){
    return {props:{products:sampleProducts}}
  }

  const query = '*[_type==\"product\"]{title,description,\"image\": image.asset->url}'
  try{
    const products = await client.fetch(query)
    return {props:{products}}
  }catch(e){
    return {props:{products:sampleProducts}}
  }
}
