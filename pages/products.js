import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'
import {client} from '../lib/sanity'

const sampleProducts = [
  {title:'Yummy Noodle Bowl', description:'Refreshing soba noodles with glazed tofu and pickled vegetables', image:''},
  {title:'Calabrian Pesto Pasta', description:'Dressed cavatappi with artichoke and chilis', image:''},
  {title:'St**k', description:'Cheesesteak flavored cut with seitan and spices', image:''}
]

export default function Products({products}){
  return (
    <div>
      <NavBar />
      <main className=\"container\">
        <h1>Products</h1>
        <div className=\"product-grid\">
          {products.map(p => <ProductCard key={p.title} product={p} />)}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  if (!process.env.SANITY_PROJECT_ID){
    return {props:{products:sampleProducts}}
  }

  const query = '*[_Type==\"product\"]{title,description,\"image\": image.asset->url}'
  try{
    const products = await client.fetch(query)
    return {props:{products}}
  }catch(e){
    return {props:{products:sampleProducts}}
  }
}
