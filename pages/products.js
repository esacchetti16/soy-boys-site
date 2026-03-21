import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { title: 'Yummy Noodle Bowl', description: 'Refreshing soba noodles with glazed tofu and pickled vegetables', image: '' },
  { title: 'Calabrian Pesto Pasta', description: 'Dressed cavatappi with artichoke and chilis', image: '' },
  { title: 'St**k', description: 'Cheesesteak flavored cut with seitan and spices', image: '' }
];

export default function Products({ products }) {
  return (
    <div>
      <NavBar />
      <main className='container'>
        <h1>Products</h1>
        <div className='product-grid'>
          {products.map(p => <ProductCard key={p.title} product={p} />)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return { props: { products: sampleProducts } };
}
