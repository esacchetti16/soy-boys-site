export default function ProductCard({product}){
  return (
    <article className=\"card\">
      <div style={{height:140,background:'#f4f4f4',borderRadius:6,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <img src={product.image || 'https://via.placeholder.com/300x180?text=Photo'} alt={product.title} style={{maxWidth:'100%',maxHeight:'100%'}}/>
      </div>
      <h3 style={{margin:'10px 0 6px'}}>{product.title}</h3>
      <p style={{margin:0,fontSize:14,color:'#444'}}>{product.description}</p>
    </article>
  )
}
